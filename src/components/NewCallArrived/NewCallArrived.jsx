import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function NewCallArrived() {

    // declare hook functions
    const dispatch = useDispatch();
    const history = useHistory();

    // declare state variables
    const user = useSelector(store=>store.user);

    // New Call Button function
    const handleNewCall = () => {
        console.log('user in handleNewCall: ', user);
        dispatch({type: 'BEGIN_RUN', payload: user, history})
    }

    // if a call cancels or reassigns
    const handleCancel = () => {
        history.push('/select')
    }

    return (
        <div>
            <p>New Call</p>
            <Button
                variant="contained"
                onClick={handleNewCall}>
                AT PATIENT
            </Button>
            <br />
            <Button 
                variant='contained'
                onClick={handleCancel}>
                    CANCELED/REASSIGNED
                </Button>
        </div>

    )
}

export default NewCallArrived;