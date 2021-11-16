import { Button } from '@mui/material';


// a reusable component to create a treatment button.  
// pass in a treatment with at least id and name

function TreatmentButton({ treatment }) {

    // click handler
    const handleClick = () => {
        console.log(treatment.procedure, ' clicked');
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