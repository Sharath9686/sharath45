import React, { useState } from 'react';
import '../ComponentsCSS/Replies.css';
import axios from 'axios';

export default function RepliesPage() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState(''); // Make sure to use state for username
  const [userQuery, setUserQuery] = useState(''); // Make sure to use state for userQuery

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/FindQurey');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleReplies = () => {
    fetchData();

    // Use data.find to find the user by username and userQuery
    const user = data.find((item) => item.Name === username && item.Qurey === userQuery);

    if (user) {
      // Access user properties (modify this part based on your data structure)
      console.log('User found:', user);
    } else {
      console.log('User not found');
    }
  };

  return (
    <>
      <div className='rep-h1'>
        <center>
          <h2>Replies For your Query</h2>
        </center>
      </div>
      <div className='rep-container'>
        Name:
        <input
          type="text"
          className='rep-input'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        Your Query:
        <textarea
          className='rep-textarea'
          rows="4"
          cols="30"
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
        />
        <br />
        Replies For your Query:
        <textarea className='rep-textarea' rows="4" cols="30" />
        {/* Displaying user data based on your data structure */}
        <p>{data.map((item) => `${item.name} HI ${item.email}`).join(', ')}</p>
        <button onClick={handleReplies}>add</button>
      </div>
    </>
  );
}
