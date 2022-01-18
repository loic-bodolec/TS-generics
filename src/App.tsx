import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

/* 1) Créer un type ou une interface Person qui contient id, email et avatar. */
interface Person {
  id: number;
  email: string;
  avatar: string;
}

function App() {
/* 2) Typer explicitement useState avec un tableau de Person */
  const [persons, setPersons] = useState<Person[]>([]);
  useEffect(() => {
/* 3) Typer le retour de l'API comme étant un tableau de Person. La fonction .get d'axios accepte également un type générique, on peut donc préciser entre chevrons que l'api nous renvoie un objet contenant une propriété data elle même contenant un tableau de Person. */
    const fetchImages = async () => {
      const data = (await axios.get<{data: Person[]}>("https://reqres.in/api/users/")).data
        .data as Person[];
      setPersons(data);
    };
    fetchImages();
  }, []);
  return (
    <div className="App">
      {persons.map((person) => (
        <React.Fragment key={person.id}>
          <p>{person.email}</p>
          <img src={person.avatar} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;