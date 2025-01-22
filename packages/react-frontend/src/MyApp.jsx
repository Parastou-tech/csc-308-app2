// src/MyApp.jsx
import React, {useState, useEffect} from "react";
import Table from "./Table";
import Form from "./Form";

function MyApp() {
  const [characters, setCharacters] = useState([]);

    useEffect(() => {
      fetchUsers()
        .then((res) => res.json())
        .then((json) => setCharacters(json["users_list"]))
        .catch((error) => { console.log(error); });
    }, [] );

  function removeOneCharacter(index){
    const userToRemove = characters[index];
    if (!userToRemove || !userToRemove.id) return;

    fetch(`http://localhost:8000/users/${userToRemove.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 204) {
          const updated = characters.filter((_, i) => i !== index);
          setCharacters(updated);
        } else {
          console.error("Failed to delete user, status code:", res.status);
        }
      })
      .catch((error) => console.log(error));
    }
      

    function updateList(person) {
      postUser(person)
        .then((createdUser) => {
          setCharacters([...characters, createdUser]);
        })
        .catch((error) => {
          console.error(error);
        });
     }

    function fetchUsers() {
      const promise = fetch("http://localhost:8000/users");
      return promise;
    }

    function postUser(person) {
      return fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      })
        .then((res) => {
          if (res.status === 201) {
            return res.json();
          } else {
            throw new Error("Failed to create user");
          }
        });
    }
  
    function updateList(person) { 
      postUser(person)
        .then((newUser) => {
          setCharacters([...characters, newUser]);})
        .catch((error) => {
          console.log(error)
        });
  }
  return (
    <div className="container">
      <Table
        characterData={characters}
        removeCharacter={removeOneCharacter}
      />
      <Form handleSubmit={updateList} />
    </div>
  );
}
export default MyApp;