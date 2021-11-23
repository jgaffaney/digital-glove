import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { DateTime } from 'luxon';
import { useEffect } from 'react';


// a reusable component to create a treatment button.  
// pass in a treatment with at least id and name

function TreatmentButton({ treatment }) {
    // console.log('tx in txbtn: ', treatment);

    const dispatch = useDispatch();
    const run = useSelector(store => store.currentRun)
    const runDetails = useSelector(store => store.runDetails)
    // click handler
    const handleClick = () => {
        console.log(treatment.procedure.toLowerCase(), ' clicked');
        dispatch({ type: 'ADD_TX_EVENT', payload: run, treatment: treatment })
    }

    const findLast = () => {
        let last = '';
        runDetails?.map(tx => {
            if (tx.procedure.toLowerCase() == treatment.procedure.toLowerCase()) {
                last = DateTime.fromISO(tx.timestamp).toLocaleString(DateTime.TIME_WITH_SECONDS)
            } return last;
        }) 
}
const lastEvent = findLast();

useEffect(() => {
    dispatch({ type: 'FETCH_RUN_DETAILS', payload: run })
}, []);
// console.log('run in txButton: ', run);
return (
    <div>
        <Button
            sx={{ width: '130px', height: '60px', justifyContent: '', }}
            variant='contained'
            onClick={handleClick}>{treatment.procedure}</Button>
        <p>Last: {lastEvent}</p>
    </div>
)
}

export default TreatmentButton;