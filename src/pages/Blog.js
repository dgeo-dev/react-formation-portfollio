import React from 'react';
import { useState, useEffect } from 'react';
import './Blog.css';
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import data from'../data/posts/data';


function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(data);
  }, []);

  return (
    
    <main className="blog">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Le Blog</title>
      <meta name="description" content="Description du blog" />
    </Helmet>
    <div className="container">
      <h1>Blog</h1>
      <div className="section-header">
        <h2>Titre de la description</h2>
        <p className="blog__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem est a nesciunt fuga
          rerum ullam repudiandae blanditiis natus. Sit neque quis voluptates libero earum? Est eaque natus officiis
          nam!</p>
      </div>

      <div className="d-grid">


        {posts.map(post => (
          <div className="d-grid__item article__card">
            <img src={post.featured_image} width="600" height="400" alt="" className="article__img" />
            <h3 className="article__title">{post.title}</h3>
            <p className="article__text">{post.text}
            </p>
            <Link to={post.slug} className="article__link stretched-link">Lire la suite</Link>
          </div>
        )).reverse()}  
        
      </div>
    </div>
  </main>);
}

export default Blog;
