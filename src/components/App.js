import React from 'react'
import Users from './Users';
import { Link } from 'react-router-dom';

export default function App() {
  
  
  return (
    <div className='app'>
      <ul>
        <li>
          <Link to="/Users">Users</Link>
        </li>
        <li>
      <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/comments">Comments</Link>
      </li>
      </ul>
      
    </div>
  )
}

