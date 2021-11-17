import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ReviewTreatmentButton() {

    const history = useHistory();

    const run = useSelector(store=>store.currentRun)

    const handleClick = () => {
        console.log('Revew TX clicked');
        dispatchEvent({type: 'FETCH_CURRENT_RUN_DETAILS', payload: run, history: history})
    }

    return (
        <div>
            <Button variant='contained' onClick={handleClick}>Review Treatment</Button>
        </div>

    )
}

export default ReviewTreatmentButton;