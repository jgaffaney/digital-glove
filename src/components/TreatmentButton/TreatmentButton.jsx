import React from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';
import { Snackbar, Box, Grid } from '@mui/material';
import MuiAlert from '@mui/material/Alert'

// a reusable component to create a treatment button.  
// pass in a treatment with at least id and name

function TreatmentButton({ treatment, displayLast }) {

    // declare hook functions
    const dispatch = useDispatch();

    // grab data from the store
    const run = useSelector(store => store.currentRun)
    const runDetails = useSelector(store => store.runDetails)
    const [open, setOpen] = useState(false)


    // click handler
    const handleClick = () => {
        // console.log(treatment.procedure.toLowerCase(), ' clicked');
        setOpen(true)

    }

    const handleClose = (event) => {
        console.log('event in handleClose: ', event);
        if (!event) {
            dispatch({ type: 'ADD_TX_EVENT', payload: run, treatment: treatment })
        }
        setOpen(false)
    }

    const action = (
        <>
            <Button sx={{ color: 'orange' }} size="small" onClick={handleClose}>
                UNDO
            </Button>
        </>)
    // a function to find the last time this treatment was given
    const findLast = () => {
        console.log('in findLast');
        let last = '';
        runDetails.slice(0).reverse().map(tx => {
            // console.log('tx.pro in runDetails.mp: ', tx.procedure.toLowerCase())
            // console.log('treatment.pro in rundetails.map: ', treatment.procedure.toLowerCase());
            if (tx.procedure.toLowerCase() == treatment.procedure.toLowerCase()) {
                console.log('if to true');
                last = DateTime.fromISO(tx.timestamp).toLocaleString(DateTime.TIME_WITH_SECONDS)
            }
            console.log('last in findLast for ', tx.procedure, ' :', last);
        });
        return last;
    }
    const lastEvent = findLast();

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    // make sure runDetails is always fresh
    useEffect(() => {
        dispatch({ type: 'FETCH_RUN_DETAILS', payload: run })
        // findLast();
    }, []);
    // console.log('lastEvent: ', lastEvent);
    console.log('displayLast: ', displayLast);
    return (
        <div>
            <Grid rowSpacing={0}>
                <Grid item xs={6}>
                <Button
                    sx={{ width: '130px', height: '60px' }}
                    variant='contained'
                    onClick={handleClick}>{treatment.procedure}
                </Button>
                </Grid>
                <Grid item xs={6}>
                {displayLast &&
                    <div style={{width: '140px'}} >Last: {lastEvent}</div>
                }
                </Grid>
            </Grid>

            <Snackbar
                open={open}
                autoHideDuration={2200}
                onClose={handleClose}
                message={`${treatment.procedure} will be recorded.`}

            ><Alert
                action={action}
                onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {treatment.procedure} will be recorded.
                </Alert></Snackbar>

        </div>
    )
}

export default TreatmentButton;