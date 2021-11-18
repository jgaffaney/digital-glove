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
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell width='20%' align="center">{item.procedure}</TableCell>
            <TableCell width='20%' align="center">{dtEvent}</TableCell>
            <TableCell width='15%'><Button onClick={handleEdit}>Edit</Button></TableCell>
            <TableCell width='15%'><Button onClick={handleDelete}>Delete</Button></TableCell>
        </TableRow>
    )
}

export default MobileRunDetailsItem;