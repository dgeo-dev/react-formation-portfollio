
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Header from './components/Header';
import Footer from './components/Footer';
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
