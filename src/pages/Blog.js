import React from 'react';
import './Blog.css';

function Blog() {
  return (
    <main className="blog">
    <div className="container">
      <h1>Blog</h1>
      <div className="section-header">
        <h2>Titre de la description</h2>
        <p className="blog__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem est a nesciunt fuga
          rerum ullam repudiandae blanditiis natus. Sit neque quis voluptates libero earum? Est eaque natus officiis
          nam!</p>
      </div>

      <div className="d-grid">
        <div className="d-grid__item article__card">
          <img src="https://picsum.photos/600/400?random=1" width="600" height="400" alt="" className="article__img" />
          <h3 className="article__title">Titre de l'article</h3>
          <p className="article__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non nam quibusdam
            soluta excepturi harum,
            quasi blanditiis cumque voluptate at quos
          </p>
          <a href="./article-1.html" className="article__link stretched-link">Lire la suite</a>
        </div>
        <div className="d-grid__item article__card">
          <img src="https://picsum.photos/600/400?random=2" width="600" height="400" alt="" className="article__img" />
          <h3 className="article__title">Titre de l'article</h3>
          <p className="article__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non nam quibusdam
            soluta excepturi harum,
            quasi blanditiis cumque voluptate at quos
          </p>
          <a href="./article-1.html" className="article__link stretched-link">Lire la suite</a>
        </div>
        <div className="d-grid__item article__card">
          <img src="https://picsum.photos/600/400?random=3" width="600" height="400" alt="" className="article__img" />
          <h3 className="article__title">Titre de l'article</h3>
          <p className="article__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non nam quibusdam
            soluta excepturi harum,
            quasi blanditiis cumque voluptate at quos
          </p>
          <a href="./article-1.html" className="article__link stretched-link">Lire la suite</a>
        </div>
        <div className="d-grid__item article__card">
          <img src="https://picsum.photos/600/400?random=4" width="600" height="400" alt="" className="article__img" />
          <h3 className="article__title">Titre de l'article</h3>
          <p className="article__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non nam quibusdam
            soluta excepturi harum,
            quasi blanditiis cumque voluptate at quos
          </p>
          <a href="./article-1.html" className="article__link stretched-link">Lire la suite</a>
        </div>
        <div className="d-grid__item article__card">
          <img src="https://picsum.photos/600/400?random=5" width="600" height="400" alt="" className="article__img" />
          <h3 className="article__title">Titre de l'article</h3>
          <p className="article__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non nam quibusdam
            soluta excepturi harum,
            quasi blanditiis cumque voluptate at quos
          </p>
          <a href="./article-1.html" className="article__link stretched-link">Lire la suite</a>
        </div>
        <div className="d-grid__item article__card">
          <img src="https://picsum.photos/600/400?random=6" width="600" height="400" alt="" className="article__img" />
          <h3 className="article__title">Titre de l'article</h3>
          <p className="article__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non nam quibusdam
            soluta excepturi harum,
            quasi blanditiis cumque voluptate at quos
          </p>
          <a href="./article-1.html" className="article__link stretched-link">Lire la suite</a>
        </div>
      </div>
    </div>
  </main>);
}

export default Blog;
