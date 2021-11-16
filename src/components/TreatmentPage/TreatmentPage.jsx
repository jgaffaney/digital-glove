import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TreatmentButton from '../TreatmentButton/TreatmentButton';
import { useEffect } from 'react';

function TreatmentPage() {

    // declare hook functions
    const dispatch = useDispatch();
    const category = useParams();

    // grab events from store
    const treatments = useSelector(store=>store.treatments)

    useEffect(() => {
        dispatch({type: 'FETCH_TREATMENTS', payload: category})
    })
    return(
        <div>
            {treatments.map(treatment=> {
                if(treatment.category == category) {
                    <TreatmentButton treatment={treatment} />
                }
            })}
            <p>Treatment Page</p>
        </div>
    )

}

export default TreatmentPage;