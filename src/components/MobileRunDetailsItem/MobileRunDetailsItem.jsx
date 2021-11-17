import { TableCell, TableRow } from '@mui/material';

function MobileRunDetailsItem({ item }) {

    const handleEdit = () => {
        console.log('Edit Clicked');
    }

    const handleDelete = () => {
        console.log('Delete Clicked');
    }

    return (
        <div>
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="right">{item.procedure}</TableCell>
                <TableCell align="right">{item.timestamp}</TableCell>
                <TableCell><Button onClick={handleEdit}>Edit</Button></TableCell>
                <TableCell><Button onClick={handleDelete}>Delete</Button></TableCell>
            </TableRow>
        </div>
    )
}

export default MobileRunDetailsItem;