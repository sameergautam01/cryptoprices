
import './App.css';
import Axios from "axios"
import {useEffect} from "react"

function App() {
  useEffect(()=> {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10").then(res => {
      console.log(res.data);
    })
  },[]);
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
