import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import "./Carousel.css"
import 'bootstrap/dist/css/bootstrap.css';

const CarouselWrapper = ({setProduct, loading, setLoading}) => {

    const [products, setProducts] = useState([]);
    const [id, setid] = useState(1);
    const [items,setItems] = useState([]);

    useEffect(()=>{
        getProducts();
    },[]);

    useEffect(()=>{
        setProduct(products.filter(product => product.id === id)[0])
    },[id]);

    // const handler = (e) =>{
        // setLoading(false);
        // setid(e.target.alt);
        // console.log(e.target.alt);
    // }

    useEffect(()=>{
        setItems(products.filter(product => product.id !== id));
    },[products, id]);

    const getProducts = async () =>{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        const productInfo = await data.filter(product => product.id === 1)[0];
        setProduct(productInfo);
        setProducts(data);
        setLoading(false);
    }

    if(loading){
        return(
        <div className='wrapper loading'>
        <h3>Loading...</h3>
        </div>
        )}

    else{
    return(
    <>
    <h2 className='head'>More Products...</h2>
        <div className='wrapper'>
            <Carousel indicators={false} variant='dark'>
            {items.map((item,key)=>(
                <Carousel.Item key={key}>
                  <img src={item.image} alt={item.id} className='item'/>
                  <Carousel.Caption className='caption' bsPrefix='carou'>
                    <h3>{item.title}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
            )
            )}
            </Carousel>
        </div>
    </>
    )}
}

export default CarouselWrapper;