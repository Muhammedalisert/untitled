import logo2 from './logo.svg';
import {useEffect} from "react";
import styles from './App.module.css';
import Test from "./Test";
import { Title } from "./Components";
function App() {
    useEffect(()=>{
        console.log(styles.App)
         if (process.env.NODE_ENV === 'production'){}

         // analytici bilgilendir
        },[])
  return (
    <div className="App">
        <Title>{process.env.NODE_ENV}</Title>
        <p>
            { process.env.REACT_APP_API_URL}
        </p>
        <Test/>
        {process.env.NODE_ENV === 'production' && (
            <div>
                <img src={logo2} alt="ehgerh" />
                <img src="/logo512.png " alt="nn"/>
            </div>
        )}
    </div>
  );
}

export default App;
