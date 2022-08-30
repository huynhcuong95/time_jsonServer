import Grid from "@material-ui/core/Grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "./form";
import Table from "./table";
import { URL } from "./constants";
function App() {
  const [data, setData] = useState([]);
  const [editdata, setEditdata] = useState([]);
  const create = (dataa) => {
    if (!dataa.isEdit) {
      console.log("create from api");
      console.log(data);
      axios
        .post(URL, {
          name: dataa.name,
          salary: dataa.salary,
          age: dataa.age,
        })
        .then((res) => {
          getAll();
        });
    } else {
      console.log("update from api");
      console.log(dataa.id);
      axios
        .put(
          (URL + `/${dataa.id}`),
          {
            name: dataa.name,
            salary: dataa.salary,
            age: dataa.age,
          }
        )
        .then((res) => {
          getAll();
        });
    }
  };
  useEffect(() => {
    getAll();
  });
  const getAll = () => {
    axios
      .get(URL)
      .then((res) => {
        setData(res.data);
      });
  };

  const update = (data) => {
    console.log(data);
    setEditdata(data);
  };
  const del = (dataa) => {
    console.log(dataa.id);
    var option = window.confirm(`are you want to delete ${data.name}`);
    if (option) {
      axios
        .delete(
          (URL + `/${dataa.id}`),
          {
            id: dataa.id,
            name: dataa.name,
            age: dataa.age,
            salary: dataa.salary,
          }
        )
        .then((res) => {
          console.log(res);
          getAll();
        });
    }
  };
  return (
    <div style={{ padding: 20, backgroundColor: "#263238" }} className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <center>
            <h1 style={{ color: "white" }}>CRUD APPLICATION</h1>
          </center>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ padding: 16, backgroundColor: "white" }}>
            <h1>ADD DETAILS</h1>
            <Form myData={create} setForm={editdata} />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div style={{ padding: 20, backgroundColor: "white" }}>
            <Table getData={data} setData={update} del={del} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
