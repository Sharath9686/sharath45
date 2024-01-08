import React from 'react';
import { useState } from 'react';
import '../ComponentsCSS/Replies.css';
import axios from 'axios';

export default function RepliesPage(){
const[data,setdata]=useState([])
const RepliesPage = async () => {
  const response = await axios.get('http://localhost:8080/FindQurey',);
         setdata(response.data)
}
const handlereplies=()=>{
RepliesPage();
const user=data.find((_item)=>data.Name==username,data.Qurey==userQurey);
}

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
          value={Name}
        /><br />
        Your Query:
        <textarea
          className='rep-textarea'
          rows="4"
          cols="30"
          // value={Qurey}
        /><br />
        Replies For your Query:
        <textarea
          className='rep-textarea'
          rows="4"
          cols="30" /><p>{abcd.name}HI{abcd.email}</p>
          <button onClick={handlereplies}>add</button>
          
      </div>

    </>
  );
};



