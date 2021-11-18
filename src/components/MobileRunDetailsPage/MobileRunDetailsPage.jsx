import { useDispatch, useSelector } from 'react-redux';
import MobileRunDetailsItem from '../MobileRunDetailsItem/MobileRunDetailsItem';
import { TableContainer, Table, TableCell, TableHead, 
            TableRow, TableBody, Paper } from '@mui/material';


function MobileRunDetailsPage() {

    const dispatch = useDispatch();

    const runDetails = useSelector(store => store.currentDetails)


    return (
        <div>
            <h1>Run Details</h1>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Treatment</TableCell>
                            <TableCell align="right">TX Time</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {runDetails?.map((item, i) => (
                            <MobileRunDetailsItem key={i} item={item} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default MobileRunDetailsPage;