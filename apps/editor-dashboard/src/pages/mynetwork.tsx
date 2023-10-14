import  Sidebar  from "@/components/sidebar";  
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

export default function AdminNetwork() {
    return (
    <div style={{height:"100%"}}>
        <Sidebar/>
        <div style={{marginLeft: 240, marginTop: 80, height: "82%"}}>
            <Card sx={{width:"95.5%", height: "100%", margin: 3}}>
                <NetworkTable/>                              
            </Card>
        </div>
    </div>
    )
}

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
createData('Gingerbread', 356, 16.0, 49, 3.9),
createData('Gingerbread', 356, 16.0, 49, 3.9),
createData('Gingerbread', 356, 16.0, 49, 3.9),
createData('Gingerbread', 356, 16.0, 49, 3.9),
createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function NetworkTable() {
    return (
    <TableContainer component={Paper}>
        <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Channel Name</TableCell>
            <TableCell align="right">Remove Account</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row) => (
            <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '56px' }}
            >
                <TableCell component="td" scope="row">
                {row.name}
                </TableCell>
                <TableCell><Avatar/></TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">
                <Button variant={"contained"} 
                    color={"error"}   
                    size={"small"}
                    sx={{ 
                        padding: 0,
                        borderRadius: "15px",
                    }}>
                    Remove
                </Button>
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    );
}