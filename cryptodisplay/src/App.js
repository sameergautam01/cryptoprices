
import './App.css';
import Axios from "axios"
import {useEffect,useState} from "react"
import Coins from './components/Coins';

function App() {
  const [data,setData]= useState([]);
  const [dataforSearch,setDataforSearch]= useState([]);
    useEffect(()=> {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(res => {
      setData(res.data.coins);
      setDataforSearch(res.data.coins);
    })
  },[]);
  const handleOnChange = (e) => {
    setData(dataforSearch.filter(user => {
      if(e.target.value.length === 0){
          return user;
      }else {
          return user.name.toLowerCase().includes(e.target.value.toLowerCase()) ;
      }
  }))
   }
   console.log(data);
  return (
    <div className="App">
      <div className="topHalf">
        <input type ="text" placeholder="Search for a coin" onChange={handleOnChange} />
      </div>
      <div className='bottom'>
      {
        data.map(coin => {
         return (
           <div className='cardbox'>
               <Coins name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol}  />
           </div>
         )
       })
      }
      </div>
    </div>
  );
}

export default App;
