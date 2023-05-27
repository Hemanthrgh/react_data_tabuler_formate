import React from 'react'
import { Link } from 'react-router-dom';
import Post from './Post';

export default function Posts() {
    const [posts,setPosts]=React.useState([]);

    async function fetchPosts(){
        const response=await fetch('https://jsonplaceholder.typicode.com/todos/1/posts');
        const data=await response.json();
        setPosts(data);
        console.log(response);
        console.log(data);
    }
    React.useEffect(()=>{
        fetchPosts();
    },[])
  return (
    <div className="table-responsive">
      <Link to='/'>Home</Link>
      <table  className="table align-middle">
        <tr>
            <th>id</th>
            <th>userId</th>
            <th>title</th>
            <th>body</th>
        </tr>
      {
        posts.map(post=><Post post={post} key={post.id}/>)
      }
      </table>
    </div>
  )
}
