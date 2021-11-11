import React, { useState} from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";



const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  

function FetchAPI() {
  const [data, setData] = useState([]);
  const classes = useStyles();
  

  //Get Method
  const apiGet = () => {
    fetch("https://api.data.gov.in/resource/c7f76eb7-4164-4e2f-9e03-c6e203afcebd?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=10&limit=10")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.records);
      });
  };

  
  
  return (
    <div>
      My API <br />
      <button  onClick={apiGet}>Fetch API</button>
      <br />
    
      <div>
        {/* <ul>
          {data.map((item) => (
            <li key={item.id}>
            SLNO:{item.s_no_}    ||    Area :{item.area}   || Project-Count:{item.projects_count}
            </li>
          ))}
        </ul> */}



        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Sl.No</StyledTableCell>
              <StyledTableCell align="centre">Area</StyledTableCell>
              <StyledTableCell align="right">Project Count</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              
              data.map((item) => {
                return (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row">
                      {item.s_no_}
                    </StyledTableCell>
                    <StyledTableCell align="centre">
                      {item.area}
                    </StyledTableCell>
                    <StyledTableCell align="right">{item.projects_count}</StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      
    </div>
  );
}

export default FetchAPI;