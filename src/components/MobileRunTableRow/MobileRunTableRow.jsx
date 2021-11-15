import { TableRow, TableCell, Button } from '@mui/material';
import { DateTime } from 'luxon';

function MobileRunTableRow({run}) {

    const dtStart = DateTime.fromISO(run.start_timestamp)
    
    return(
        <TableRow 
        key={run.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="right">{run.id}</TableCell>
            <TableCell align="right">{dtStart.toLocaleString(DateTime.DATETIME_SHORT)}</TableCell>
            <TableCell align="right">{run.end_timestamp}</TableCell>
            <TableCell><Button>Edit</Button></TableCell>
            <TableCell><Button>Delete</Button></TableCell>
        </TableRow>
    )
}

export default MobileRunTableRow;