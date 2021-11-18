import { useDispatch, useSelector } from 'react-redux';
import MobileRunDetailsItem from '../MobileRunDetailsItem/MobileRunDetailsItem';
import {
    TableContainer, Table, TableCell, TableHead,
    TableRow, TableBody, Paper, Box
} from '@mui/material';


function MobileRunDetailsPage() {

    const dispatch = useDispatch();

    const runDetails = useSelector(store => store.currentDetails)


    return (
        <div>
            <h1>Run Details</h1>
                <TableContainer component={Paper}>
                    <Table width='90%' aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell width='20%' align="center">Treatment</TableCell>
                                <TableCell width='20%' align="center">TX Time</TableCell>
                                <TableCell width='15%' align="center"></TableCell>
                                <TableCell width='15%' align="center"></TableCell>
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