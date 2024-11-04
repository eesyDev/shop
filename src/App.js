import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="main-container">
          <Header/>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/product/:slug" element={<ProductDetail/>} />
          </Routes>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
