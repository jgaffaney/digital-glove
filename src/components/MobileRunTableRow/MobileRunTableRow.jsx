import { TableRow, TableCell, Button } from '@mui/material';
import { DateTime } from 'luxon';

function MobileRunTableRow({run}) {

    const dtStart = run.start_timestamp;
    console.log('run.start_timestamp: ', run.start_timestamp);
    const humanTime = dtStart.toLocaleString()
    console.log('humanTime: ', humanTime);
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