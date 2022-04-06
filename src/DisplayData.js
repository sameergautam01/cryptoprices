import React,{useState,useEffect}  from 'react';
import {useQuery,gql} from "@apollo/client"
// import SearchBar from './SearchBar';

const ALL_USER_DATA= gql`
  query GetUserData {
      users {
        data {
        id
        name
        username
        email
        address{
            street
        }
        phone
        website
      }
    }
  }
`

const DisplayData=() => {
    
    
  
    const[dataforCheckbox,setDataforCheckbox]=useState([]);
    const [searchTerm,setSearchTerm]=useState("");
    const [filterData,setFilterData]=useState([]);

    console.log(searchTerm);
    console.log(filterData);

    const {data, error,loading} = useQuery(ALL_USER_DATA);
    useEffect(() => {
        if(data){
            setFilterData(data.users.data);
            setDataforCheckbox(data.users.data);
        }
    },[data]);
    
    if (error){
        return <h1> error occured while fetching api</h1>
    }
    if (loading){
        return <h1> API is loading :p </h1>
    }
      
    const handleCheckbox = (e) => {
        const checkboxName=e.target.name;
        const checkboxValue=e.target.checked;
        if(checkboxName === "selectAll"){
            const newData=dataforCheckbox.map(user => {
                return {...user,isChecked:checkboxValue}
            })
            setDataforCheckbox(newData);
        }
        else {
        const newDataForCheckbox=dataforCheckbox.map(user => 
            user.name === checkboxName ? {...user,isChecked:checkboxValue} : user
        )
        setDataforCheckbox(newDataForCheckbox);
        }
    }
    const  handleonChange=(e)=> {
        setSearchTerm(e.target.value)
         setFilterData(data.users.data.filter(user => {
            if(e.target.value.length === 0){
                return user;
            }else {
                return user.name.toLowerCase().includes(e.target.value.toLowerCase()) ;
            }
        }))
}
console.log(searchTerm);
console.log(filterData);


    return (
        <div >
            
            <input type="text" placeholder="type your search text here" onChange={handleonChange} />
            <div className="flex-conta" > 
            <input type="checkbox" name="selectAll" onChange={handleCheckbox}/>
                    <p>Name</p>
                   <p>Username</p>
                   <p>Email</p>
                   <p>Phone</p>
                   <p>Website </p>
                   <p>Address</p>
            </div>
           { data && filterData.map((user) => {
             
               return (
               <div className="flex-container" > 
                  <input type="checkbox" name= {user.name} key={user.id} id={user.id} onChange={handleCheckbox}  checked={dataforCheckbox?.isChecked || false} />
                  <p>  {user.name}</p>
                   <p>{user.username}</p>
                   <p>  {user.email}</p>
                   <p>{user.phone}</p>
                   <p>{user.website} </p>
                   <p>  {user.address.street}</p>
               </div>
               )
              
               

           })}
        </div>
    )
}

export default DisplayData;