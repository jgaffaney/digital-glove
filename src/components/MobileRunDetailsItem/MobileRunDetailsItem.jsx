import { TableCell, TableRow, Button } from '@mui/material';
import { DateTime } from 'luxon';

function MobileRunDetailsItem({ item }) {

    const handleEdit = () => {
        console.log('Edit Clicked');
    }

    const handleDelete = () => {
        console.log('Delete Clicked');
    }

    const dtEvent = DateTime.fromISO(item.timestamp).toLocaleString(DateTime.DATETIME_SHORT);

    return (
        <div>
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="right">{item.procedure}</TableCell>
                <TableCell align="right">{dtEvent}</TableCell>
                <TableCell><Button onClick={handleEdit}>Edit</Button></TableCell>
                <TableCell><Button onClick={handleDelete}>Delete</Button></TableCell>
            </TableRow>
        </div>
    )
}

export default MobileRunDetailsItem;