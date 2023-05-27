import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Users from './components/Users';
import Posts from './components/Posts';
import Comments from './components/Comments';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
          <Route path="/" element={<App />} />
          <Route path="/users" element={<Users />} />
        <Route path='/Posts' element={<Posts />} />
        <Route path='/Comments' element={<Comments />} />
        </Routes>
     </Router>
);
