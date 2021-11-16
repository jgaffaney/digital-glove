import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MobileRunTableRow from '../MobileRunTableRow/MobileRunTableRow';
import { Table, TableBody, TableContainer, TableCell, TableRow, TableHead, Paper } from '@mui/material'

function MobileCallReviewPage() {

    // declare hook functions
    const dispatch = useDispatch();

    // get info from store
    const runs = useSelector(store => store.run);
    const user = useSelector(store => store.user);


    useEffect(() => {
        dispatch({ type: 'FETCH_USER_RUNS', payload: user })
    }, [])

    console.log('runs: ', runs);
    return (
        <div>
            <h1>Mobile Call Review</h1>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Run Number</TableCell>
                            <TableCell align="right">Start Date/Time</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {runs.map(run => (
                            <MobileRunTableRow key={run.id} run={run} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default MobileCallReviewPage;