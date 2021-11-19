import { useSelector } from 'react-redux';
import { useState } from 'react';

function TreatmentReview() {

    const treatment = useSelector(store=>store.currentTreatment);

    const [newTxDetails, setNewTxDetails] = useState({treatment});


    return(
        <h1>Treatment Review</h1>
    )
}