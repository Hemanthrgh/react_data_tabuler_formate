import React from 'react'
import User from './User';
import { Link } from 'react-router-dom';

export default function Users(props) {
    const [user,setUser]=React.useState([]);
  async function fetchUser(){
    try {
    const response=await fetch('https://jsonplaceholder.typicode.com/todos/1/users');
    const data=await response.json();
    console.log(data);
    setUser(data);
    } catch (error) {
      console.log('error');
    }
  }
  React.useEffect(()=>{
    console.log("inside useEffect");
    fetchUser()
  },[])
  return (
    <div  className="table-responsive">
    <Link to='/'>Home </Link>
    <table className="table align-middle">
     <thead>
       <tr>
         <th>id</th>
<th>name</th>
<th>username</th>
<th>email</th>
<th>phone</th>
<th>website</th>
{/* <th>Country</th> */}
</tr>
     </thead>
<tbody>
{user.map(u=><User user={u} key={user.id}/>)}
</tbody>

 </table>
 </div>
     )
}
