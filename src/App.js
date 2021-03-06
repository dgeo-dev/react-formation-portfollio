
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Article from './pages/Article';
import Header from './components/Header';
import Footer from './components/Footer';

/* Node Part */
import CreatePortfolio from './pages/admin/CreatePortfolio';

import { 
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Article />} />
        {/* Node Part */}
        <Route path="/admin/CreatePortfolio" element={<CreatePortfolio />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <h1>Page 404</h1>
            </main>
          }/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
