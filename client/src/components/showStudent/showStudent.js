import  React , {useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { keyframes } from '@emotion/react';
import { Button } from '@mui/material';



export default function ShowStudent() {
  const  [studentList,setStudentList ] = useState([]);

  const deleteStudent = (id) => {
    axios.delete(`http:://localhost:5000/students/${id}`).then(()=> {
      window.location.reload(false);
    })
  }

  useEffect(()=> {
    axios.get('http:://localhost:5000/students').then((allStudents) => {
      setStudentList(allStudents.data);
    })
  }, [])
  return (
    <>
    <h2>All Student</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Registeration Number</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">Section</TableCell>
            <TableCell align="right">Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.map((student,key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.studentName}
              </TableCell>
              <TableCell align="right">{student.regNo}</TableCell>
              <TableCell align="right">{student.grade}</TableCell>
              <TableCell align="right">{student.section}</TableCell>
              <TableCell align="right">
              <Button variant="outlined" color="error" onClick={() => deleteStudent(student._id)}>
                 Delete
              </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
