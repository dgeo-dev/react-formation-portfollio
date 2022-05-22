import React from 'react';
import { useState } from "react";
import './Admin.css';
const slugify = require('slugify');

const axios = require('axios');

function CreatePortfolio() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const insert = async () => {
    await axios.post('http://localhost:9000/api/v1/portfolio', {
      title,
      category,
      category_slug: ['all', slugify(category)]
    }).then(function (response) {
      console.log(response);
    })
  }

  const handleTitle = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  }

  const handleCat = (event) => {
    event.preventDefault();
    setCategory(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    insert();
  }
 
  return (

   <main className="admin">
    
    <div className="container">
      <h1>Créer un portfolio</h1>
      <form className="edit-form" onSubmit={handleSubmit}>
        <label>
          Titre :
          <input type="text" name="title" onChange={handleTitle}/>
        </label>
        <label>
          Catégorie :
          <input type="text" name="category" onChange={handleCat}/>
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      </div>
    </main>
  );
}

export default CreatePortfolio;
