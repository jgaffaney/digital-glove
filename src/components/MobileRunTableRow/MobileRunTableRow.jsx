import { TableRow, TableCell, Button } from '@mui/material';
import { DateTime } from 'luxon';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import {useDispatch} from 'react-redux';

function MobileRunTableRow({run}) {

    // define hook functions
    const dispatch = useDispatch();

    // convert SQL date to readable 
    const dtStart = DateTime.fromISO(run.start_timestamp).toLocaleString(DateTime.DATETIME_SHORT);

    const MySwal = withReactContent(Swal);

    // delete function with sweetalert confirmation
    const handleDelete = () => {
        MySwal.fire({
            title: <p>This will delete your run and cannot be reversed.  Are you sure?</p>,
            showConfirmButton: true,
            showCancelButton: true,
            icon: 'warning',
        }).then((result) => {
            if(result.isConfirmed) {
                dispatch({type: 'DELETE_RUN', payload: run.id})
                MySwal.fire('Your run has been deleted')
            } else {
                MySwal.fire('Your run has been saved')
            }
        })
    }
    
    return(
        <TableRow 
        key={run.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="right">{run.id}</TableCell>
            <TableCell align="right">{dtStart}</TableCell>
            <TableCell><Button>Edit</Button></TableCell>
            <TableCell><Button onClick={handleDelete}>Delete</Button></TableCell>
        </TableRow>
    )
}

export default MobileRunTableRow;