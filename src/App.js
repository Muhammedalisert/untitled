import logo from './logo.svg';
import {useEffect} from "react";
import styles from './App.module.css'
import Test from "./Test";
import {Title} from "./Components"

function App() {

    useEffect(()=> {
        console.log(styles)
    if (process.env.NODE_ENV === 'production') {
        // analytici bilgilendir
    }
},[])

  return (
    <div className={styles.App}>
        <Title>{process.env.NODE_ENV}</Title>
        <p>
            {process.env.REACT_APP_API_URL}
        </p>
        <Test/>
        {process.env.NODE_ENV === 'production' && (
            <>
            <img src={logo} className="App-logo" alt="logo"/>
            <img src="/logo192.png" alt=""/>
            </>
        )}
    </div>
  );
}

export default App;
