import React from 'react'
import { Link } from 'react-router-dom';
import Comment from './Comment';

export default function Comments() {
    const [comments,setComments]=React.useState([]);

    async function fetchComments(){
        const response=await fetch('https://jsonplaceholder.typicode.com/todos/1/comments');
        const data=await response.json();
        setComments(data);
        console.log(response);
        console.log(data);
    }
    React.useEffect(()=>{
        fetchComments();
    },[])
  return (
    <div className="table-responsive">
      <Link to='/'>Home</Link>
      <table  className="table align-middle">
        <tr>
            <th>id</th>
            <th>postId</th>
            <th>name</th>
            <th>email</th>
            <th>body</th>
        </tr>
      {
        comments.map(comment=><Comment comment={comment} key={comment.id}/>)
      }
      </table>
    </div>
  )
}
