import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';


// a reusable component to create a treatment button.  
// pass in a treatment with at least id and name

function TreatmentButton({ treatment }) {

    const dispatch = useDispatch();

    // click handler
    const handleClick = () => {
        console.log(treatment.toLowerCase(), ' clicked');
        dispatch({type: 'ADD_TX_EVENT', payload: treatment})
    }


    return (
        <div>
            <Button
                sx={{ width: '130px', height: '60px', justifyContent: '',}}
                variant='contained'
                onClick={handleClick}>{treatment}</Button>
        </div>
    )
}

export default TreatmentButton;