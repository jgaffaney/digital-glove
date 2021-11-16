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
            <p>Treatment Button</p>
            <Button 
                variant='contained' 
                onClick={handleClick}>{treatment.procedure}</Button>
        </div>
    )
}

export default TreatmentButton;