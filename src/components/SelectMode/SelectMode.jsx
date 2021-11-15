import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

function SelectMode() {

    // declare hook functions
    const history = useHistory();

    // start a new call
    const handleNew = () => {
        console.log('clicked');
        history.push('/newCall')
    }

    const handleReview = () => {
        history.push('/mobileReview')
    }

    return (
        <div>
            <h1>Select a Mode</h1>
            <Button
                onClick={handleNew}
                variant='contained'
            >
                NEW CALL
            </Button>
            <Button
                variant='contained'
                onClick={handleReview}
            >
                Review Previous Calls
            </Button>
        </div>
    )
}

export default SelectMode;