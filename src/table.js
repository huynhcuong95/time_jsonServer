import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";

const useStyles = makeStyles({
  root: {
    padding: 30
  },
  table: {
    height: 300,
    overflow: "none"
  }
});

export default function Tables(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell>
                <b>Age</b>
              </TableCell>
              <TableCell>
                <b>Salary</b>
              </TableCell>
              <TableCell>
                <b>Edit</b>
              </TableCell>
              <TableCell>
                <b>Delete</b>
              </TableCell>{" "}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.getData.map((e, index) => (
              <TableRow key={e.id}>
                <TableCell>{e.name}</TableCell>
                <TableCell>{e.age}</TableCell>
                <TableCell>{e.salary}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    size="small"
                    onClick={(event) => {
                      props.setData(e);
                    }}
                  >
                    <FiEdit />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton
                    color="secondary"
                    onClick={(event) => {
                      props.del(e);
                    }}
                  >
                    <MdDeleteForever />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
