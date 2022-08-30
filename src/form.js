import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 100
    },
    padding: 20,
    marginTop: 24
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch"
  }
}));

function Form(props) {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [salary, setsalary] = useState("");
  const [id, setid] = useState("");
  const [isEdit, setIsedit] = useState(false);
  function Submit(e) {
    e.preventDefault();
    if (!isEdit) {
      let data = {
        isEdit: isEdit,
        name: name,
        age: age,
        salary: salary
      };
      props.myData(data);
      console.log("create from submit");
      console.log(data);
    } else {
      let data = {
        isEdit: isEdit,
        id: id,
        name: name,
        age: age,
        salary: salary
      };
      props.myData(data);
      console.log("edit from submit");
      console.log(data);
    }
  }

  React.useEffect(() => {
    if (props.setForm.id != null) {
      setIsedit(true);
      console.log(...props.setForm.id);
      setid(props.setForm.id);
      setname(props.setForm.name);
      setage(props.setForm.age);
      setsalary(props.setForm.salary);
    }
  }, [props.setForm]);
  const onChangename = (event) => {
    setname(event.target.value);
  };
  const onChangeage = (event) => {
    setage(event.target.value);
  };
  const onChangesal = (event) => {
    setsalary(event.target.value);
  };
  const classes = useStyles();
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={(e) => Submit(e)}
          >
            <FormControl fullWidth className={classes.margin}>
              <InputLabel>name</InputLabel>
              <Input color="primary" onChange={onChangename} value={name} />
            </FormControl>
            <br />
            <br />
            <FormControl fullWidth className={classes.margin}>
              <InputLabel>Age</InputLabel>
              <Input onChange={onChangeage} value={age} />
            </FormControl>
            <br />
            <br />
            <FormControl fullWidth className={classes.margin}>
              <InputLabel>salary</InputLabel>
              <Input onChange={onChangesal} value={salary} />
            </FormControl>
            <br />
            <br />
            <center>
              <Button variant="contained" color="primary" type="submit">
                {isEdit ? "Update" : "Create"}
              </Button>
            </center>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default Form;
