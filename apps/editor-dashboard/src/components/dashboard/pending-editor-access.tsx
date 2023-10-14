import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  

export default function PendingEditorAccess() {
  const router = useRouter();
  const networkData = [
    { name: 'Senthil Rajashekharan', avatarSrc: '/avatars/johndoe.png' },
    { name: 'Jane Smith', avatarSrc: '/avatars/janesmith.png' },
    { name: 'Paresh Limbasiya', avatarSrc: '/avatars/janesmith.png' },
  ];

  return (
    <div style={{marginTop: 8}}>
      <div style={{marginLeft: 10, marginBottom: 15}}>
        <Button variant="contained" 
          sx={{color: "#FFFFFF",
            backgroundColor: '#636E72',
            '&:hover':  {
            color: "#FFFFFF",
            backgroundColor: '#404040',
            borderColor: '#0062cc',
            boxShadow: 'none',
          }}}
          onClick={()=>router.push('/mynetwork')}>
            Pending Admin Access</Button>
      </div>
      <div>
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '56px' }}
                >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>                
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
      </div>
    </div>
  );
}