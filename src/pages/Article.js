import React from 'react';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import data from '../data/posts/data';
import {
  useParams,
  Link
} from "react-router-dom";
import { useLocation } from "react-router";


function Article() {

  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (

    <>
      {data.filter((e) => e.slug === id).map(post => (
        <Helmet key={post.id}>
          <meta charSet="utf-8" />
          <title>{post.title}</title>
          <meta name="description" content={post.text} />
        </Helmet>
      ))}

      <div className="container">

        <div className="content-grid">

          <main className="article">

            {data.filter((e) => e.slug === id).map(post => (
              <article key={post.id}>
                <div className="section-header">
                  <h1 className="article__title">{post.title}</h1>
                  <p className="article__meta">Publié le 14 janvier 2022</p>
                </div>
                <img src={post.featured_image} width="1200" height="600" loading="lazy" alt=""
                  className="article__img" />

                <div className="content">
                  <h2>Titre H2</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nobis quaerat earum perspiciatis.
                    Commodi laudantium repudiandae placeat, cumque nesciunt tempora molestias optio, quo est corrupti
                    molestiae
                    cum asperiores nam perferendis.</p>

                  <h2>Titre H2</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nobis quaerat earum perspiciatis.
                    Commodi laudantium repudiandae placeat, cumque nesciunt tempora molestias optio, quo est corrupti
                    molestiae
                    cum asperiores nam perferendis.</p>

                  <h3>Titre H3</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nobis quaerat earum perspiciatis.
                    Commodi laudantium repudiandae placeat, cumque nesciunt tempora molestias optio, quo est corrupti
                    molestiae
                    cum asperiores nam perferendis.</p>

                  <h3>Titre H3</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nobis quaerat earum perspiciatis.
                    Commodi laudantium repudiandae placeat, cumque nesciunt tempora molestias optio, quo est corrupti
                    molestiae
                    cum asperiores nam perferendis.</p>

                  <ul>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                  </ul>
                </div>
              </article>
            ))}

          </main>

          <aside className="sidebar">

            <h2 className="h3">Articles récents</h2>

            <ul>
              {data.map(post => (
                <li key={post.id}><Link to={`/blog/${post.slug}`}>{post.title}</Link></li>
              )).reverse()}
            </ul>
          </aside>
        </div>
      </div>

    </>);
}

export default Article;
