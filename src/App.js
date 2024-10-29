import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <div className="main-container">
          <Header/>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/product/:slug" element={<ProductDetail/>} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
