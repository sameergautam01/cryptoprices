import React,{useState} from 'react';
import {useQuery,gql} from "@apollo/client"

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
`;
const handleOnChange=(event) =>
{
    const {name,checked}=event.target;

if(name==="selectAll"){
    
}
}
function DisplayData() {
    const [check,useCheck]=useState();
    const {data, error,loading} = useQuery(ALL_USER_DATA);
    if (error){
        return <h1> error occured while fetching api</h1>
    }
    if (loading){
        return <h1> API is loading :p </h1>
    }

    if (data){
        console.log(data);
    }
    return (
        <div >
            <input type="checkbox" name="selectAll" onChange={handleOnChange}/>
           { data && data.users.data.map((user) => {
             
               return (
               <div className="flex-container" > 
                  <input type="checkbox" name= {user.name}/>
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