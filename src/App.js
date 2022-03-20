import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Footer } from './Components/Footer';
import {useState,useEffect} from 'react';
import { fetchProducts } from './Components/Data/ProductData'


function App() {


  //const numbers = [12, 92, 3]

  // let firstNumber = numbers[0]
  // let secondNumber = numbers[1]
  // let lastNumber = numbers[3]



  //const activePage = 'Home'
  const [activePage, setActivePage] = useState('Home');

  const [products,setProducts] = useState([])
  const [activeProduct, setActiveProduct] = useState(0)
  //const arrayen = useState('Home'); //2 items
  //arrayen[0]          
  //arrayen[1]   function       
  
  const onChangeActivePage = (newPage)=>{
    setActivePage(newPage)
  }


  const onChangeActiveProduct = (ac)=>{
    setActiveProduct(ac)
    setActivePage('Product')
  }


  useEffect(()=>{
    const fetchData = async ()=>{
      const r = await fetchProducts()
      setProducts(r)
    }
    fetchData();
  },[])




  return (
    <div>
      <button onClick={()=>onChangeActivePage('Home')}>Home</button>
      <button onClick={()=>onChangeActivePage('Services')}>Services</button>
      <Header activePage={activePage} onChangeActivePage={onChangeActivePage} />
      <Main setActiveProduct={onChangeActiveProduct} products={products} activeProduct={activeProduct} activePage={activePage}/>
      <Footer />
    </div>
  );
}

export default App;
