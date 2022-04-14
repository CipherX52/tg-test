import './App.css';
import Product from './components/Product'
import CarouselWrapper from './components/Carousel';
import Social from './components/Social';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <Product product={product} loading = {loading}/>
      <br />
      <CarouselWrapper setProduct={setProduct} loading = {loading} setLoading = {setLoading}/>
      <br />
      <Social />
    </div>
  );
}

export default App;