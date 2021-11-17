import { TableRow, TableCell, Button } from '@mui/material';
import { DateTime } from 'luxon';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useDispatch, useSelector } from 'react-redux';

function MobileRunTableRow({run}) {

    // define hook functions
    const dispatch = useDispatch();

    //get user from store
    const user = useSelector(store=>store.user)

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
                dispatch({type: 'DELETE_RUN', payload: run.id, user})
                MySwal.fire('Your run has been deleted')
            } else {
                MySwal.fire('Your run has been saved')
            }
        })
    }

    const handleEdit = () => {
        
    }
    
    return(
        <TableRow 
        key={run.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="right">{run.id}</TableCell>
            <TableCell align="right">{dtStart}</TableCell>
            <TableCell><Button onClick={handleEdit}>Edit</Button></TableCell>
            <TableCell><Button onClick={handleDelete}>Delete</Button></TableCell>
        </TableRow>
    )
}

export default MobileRunTableRow;