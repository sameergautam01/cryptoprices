import React from 'react';
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

function DisplayData() {
    const {data, error} = useQuery(ALL_USER_DATA);
    if (error){
        return <h1> error occured while fetching api</h1>
    }

    if (data){
        console.log(data);
    }
    return (
        <div>

        </div>
    )
}

export default DisplayData;