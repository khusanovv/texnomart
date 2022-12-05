
import './App.css';
import Banner from './companents/banner/Banner';
import Brendlogo from './companents/brendLogo/Brendlogo';
import Download from './companents/download/Download';
import Footer from './companents/footer/Footer';
import Header from './companents/header/Header';
import TermPayment from './companents/TermPayment/TermPayment';
// import { InfinitySpin  } from  'react-loader-spinner'
import PacmanLoader from "react-spinners/PacmanLoader";
import{useState, useEffect} from 'react'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() =>{
    setLoading(true)
    // setTimeout(()=>{
    //   setLoading(false)
    // },2000)

    window.onload = function(){
      setLoading(false)
      // console.log("hello");

    }
    
  },[])
  return (
    < >      
    {
      loading ?
      <PacmanLoader
        color={"#fbc100"}
        loading={loading}
        size={50}
        className="lodaing"
      />
      :
      <> 
      <Header />
      <Banner />
      <Brendlogo />
      <Download />
      <TermPayment />
      <Footer />
      </>
    }
      
    </>
  );
}

export default App;
