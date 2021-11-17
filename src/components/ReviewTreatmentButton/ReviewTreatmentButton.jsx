import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

function ReviewTreatmentButton() {

    const history = useHistory();

    const handleClick = () => {
        console.log('Revew TX clicked');
    }

    return (
        <div>
            <Button variant='contained' onClick={handleClick}>Review Treatment</Button>
        </div>

    )
}

export default ReviewTreatmentButton;