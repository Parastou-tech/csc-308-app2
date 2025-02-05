// backend.js
import mongoose from 'mongoose';
import express from "express";
import cors from "cors";

mongoose.connect('mongodb://127.0.0.1:27017/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB!');
}).on('error', (error) => {
  console.error('MongoDB connection error:', error);
});


const app = express();
const port = 8000;

const users = {
    users_list: [
      {
        id: "xyz789",
        name: "Charlie",
        job: "Janitor"
      },
      {
        id: "abc123",
        name: "Mac",
        job: "Bouncer"
      },
      {
        id: "ppp222",
        name: "Mac",
        job: "Professor"
      },
      {
        id: "yat999",
        name: "Dee",
        job: "Aspring actress"
      },
      {
        id: "zap565",
        name: "Dennis",
        job: "Bartender"
      }
    ]
  };

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  import {
    findAllUsers,
    findUsersByName,
    findUsersByJob,
    findUsersByNameAndJob, 
    findUserById,
    createUser,
    deleteUserById,
  } from './user-services.js';

const findUserByName = (name) => {
  return users["users_list"].filter(
    (user) => user["name"] === name
  );
};

const findUserById = (id) =>{
  return users["users_list"].findIndex((user) => user["id"] === id);
};

const findUserByJob = (job) => 
    users["users_list"].find((user)=> user["job"]===job);
 
app.get("/users", (req, res) => {
  const name = req.query.name;
  const job = req.query.job;

  if (name != undefined) {
    let result = findUserByName(name);
    result = { users_list: result };
    res.send(result);
  }
  if( job != undefined){
    let result = findUserByJob(job);
    result = {users_list: result};
    res.send(result)
  }
  
res.send(users);
  
});

 
app.get("/users/:id", (req, res) => {
    const id = req.params["id"]; //or req.params.id
    let result = findUserById(id);
    if (result === undefined) {
      res.status(404).send("Resource not found.");
    } else {
      res.send(result);
    }
  });

  const addUser = (user) => {
    users.users_list.push(user);
    return user;
  };
  
  app.post("/users", (req, res) => {
    const userToAdd = req.body;
    userToAdd._id = Math.random().toString(36).substring(2,9);
    addUser(userToAdd);
    res.status(201).send(userToAdd);
  });

  app.delete("/users/:id", (req, res)=>{
    const id = req.params["id"]; //or req.params.id
    let result = findUserById(id);

    if (result === undefined) {
        res.status(404).send("Resource not found.");
      } else {
        users.users_list.splice(result, 1);
        res.status(204).send();
      }
  });

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});