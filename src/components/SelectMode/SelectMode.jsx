import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EndCallButton from '../EndCallButton/EndCallButton';

function SelectMode() {

    // grab currentRun from store
    const currentRun = useSelector(store => store.currentRun);

    // declare hook functions
    const history = useHistory();
    const dispatch = useDispatch();

    // start a new call
    const handleNew = () => {
        console.log('clicked');
        history.push('/newCall')
    }

    const handleReview = () => {
        history.push('/mobileReview')
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_CURRENT_RUN' })
    })

    return (
        <div>
            {currentRun > 0 ?
                (<>
                    <EndCallButton />
                    <br />
                    <Button onClick={() => history.push('/mainMenu')} variant='contained' >
                        Main Menu
                    </Button>
                </>
                ) : (
                    <>
                        <Button
                            onClick={handleNew}
                            variant='contained'
                        >
                            NEW CALL
                        </Button>

                    </>
                )
            }

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