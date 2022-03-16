import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Footer } from './Components/Footer';

function App() {

  const activePage = 'Home'
  const IWasClicked = ()=>{
    activePage = 'Home'
  }

  return (
    <div>
      <button onClick={IWasClicked}>Home</button>
      <Header activePage={activePage} />
      <Main activePage={activePage}/>
      <Footer />
    </div>
  );
}

export default App;
