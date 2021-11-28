import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import TreatmentButton from '../TreatmentButton/TreatmentButton';
import { useEffect } from 'react';
import { Box, Grid, Button } from '@mui/material';
import ReviewTreatmentButton from '../ReviewTreatmentButton/ReviewTreatmentButton';
import EndCallButton from '../EndCallButton/EndCallButton';
import RunningTimer from '../RunningTimer/RunningTimer';
import CurrentTime from '../CurrentTime/CurrentTime';
import SubNavBar from '../Nav/SubNavBar';

function TreatmentPage() {

    // declare hook functions
    const history = useHistory();
    const dispatch = useDispatch();
    const category = useParams();
    console.log('cat in txpage: ', category.category);

    // grab events from store
    const treatments = useSelector(store => store.treatments)
    const treatConfig = [14, 15, 16, 17, 43, 44, 45, 13, 24]

    const setConfig = () => {
        let configArray = [];
        for (let button of treatConfig) {
            for (let tx of treatments) {
                if (button == tx.id) {
                    configArray.push(tx)
                }
            }
        }
        return configArray
    }

    const txLayout = setConfig();
    console.log('configArray as txlayout is: ', txLayout);

    console.log('txs in txpage:', treatments);
    useEffect(() => {
        dispatch({ type: 'FETCH_TREATMENTS', payload: category.category })
    }, [])

    const isMedication = () => {
        if (category.category == 'Medication') {
            return true
        } else {
            return false
        }
    }

    return (
        <div>
            <SubNavBar />
            <RunningTimer />
            <CurrentTime />
            <Box sx={{ flexGrow: 1, width: '90%' }}>
                <Button onClick={() => history.goBack()}>Back</Button>
            </Box>
            <Box sx={{ flexGrow: 1, width: '90%' }}>
                <Grid container spacing={2} sx={{ m: '2%', justifyContent: 'center' }}>
                    {txLayout.map(treatment => {
                        return (
                            <Grid key={treatment.id} item xs={5}>
                                <TreatmentButton displayLast={isMedication()} key={treatment.id} treatment={treatment} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1, width: '90%' }}>
                <Grid container spacing={2} sx={{ m: '2%', justifyContent: 'center' }}>
                    <Grid item xs={5}>
                        <ReviewTreatmentButton />
                    </Grid>
                    <Grid item xs={5}>
                        <EndCallButton />
                    </Grid>
                </Grid>
            </Box>

        </div>
    )

}

export default TreatmentPage;