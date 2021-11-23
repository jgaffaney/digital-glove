import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FormControl, TextField, Select, InputLabel, MenuItem, Box, NativeSelect } from '@mui/material';
import { DateTime } from 'luxon';

function TreatmentReview() {

    const dispatch = useDispatch();

    const treatment = useSelector(store=>store.currentTreatment);
    const allTreatments = useSelector(store=>store.allTreatments);

    const sortTreatments = (category) => {
        console.log('in sortTreatments');
        let resultArray = [];
        for(let tx of allTreatments) {
            if(tx.category == category){
                resultArray.push(tx);
            } 
        }
        return resultArray;
    }

    const findID = () => {
        for(let tx of allTreatments){
            if(tx.procedure == treatment.procedure){
                return tx.id
            }
        }
    }

    const defaultID = findID();

    const airway = sortTreatments('airway');
    const chest = sortTreatments('chest');
    const access = sortTreatments('access');
    const medication = sortTreatments('medication');

    const handleChange = () => {

    }

    const [newTxDetails, setNewTxDetails] = useState(treatment);
    // const dtStart = DateTime.fromISO(run.start_timestamp).toLocaleString(DateTime.DATETIME_SHORT);

    useEffect(()=>{
        dispatch({type: 'FETCH_ALL_TREATMENTS'})
    }, [])
    console.log('tx review tx: ', treatment.procedure);
    return(
        <Box>
            <FormControl fullWidth>
                <InputLabel htmlFor='treatment-select'></InputLabel>
                <NativeSelect
                inputProps={{
                    name: 'treatment',
                    id: 'uncontrolled-native'
                }}
                    // id='treatment-select'
                    defaultValue={defaultID}
                    label='Treatment'
                >
                    {/* <option aria-label={treatment.procedure} value={treatment.id} /> */}
                    <optgroup label='Airway'>
                        {airway.map(tx => (
                            <option key={tx.id} value={tx.id}>{tx.procedure}</option>
                        ))}
                    </optgroup>
                    <optgroup label='Chest'>
                        {chest.map(tx => (
                            <option key={tx.id} value={tx.id}>{tx.procedure}</option>
                        ))}
                    </optgroup>
                    <optgroup label='Access'>
                        {access.map(tx => (
                            <option key={tx.id} value={tx.id}>{tx.procedure}</option>
                        ))}
                    </optgroup>
                    <optgroup label='Medication'>
                        {medication.map(tx => (
                            <option key={tx.id} value={tx.id}>{tx.procedure}</option>
                        ))}
                    </optgroup>
                </NativeSelect>
            </FormControl>
        </Box>
        // <FormControl>
            
        //     <TextField onChange={(e)=> {setNewTxDetails({...treatment, procedure: e.target.value})}}value={newTxDetails.procedure} id='procedure' label='Procedure' />
        //     <TextField value={DateTime.fromISO(newTxDetails.timestamp).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)} id='timestamp' label="Time" />
        // </FormControl>
    )
}

export default TreatmentReview;