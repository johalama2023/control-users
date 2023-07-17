import React, { useState } from 'react';
import './UsersList.css'


const UsersList = ({ user, deleteUserById, setUpdateInfo }) => {
  const handleEdit = () => {
    setUpdateInfo(user);
  };

  return (
    <article className='card'>
      <h3 className='card-title'>
        {user.first_name} {user.last_name}
      </h3>
      <hr className='card-separator'/>
      <ul className='card-body'>
        <li className='card-item'>
          <span className='card-span'>
            Email
          </span>
          <div className="card-info"><i className="fa-solid fa-at card-icon"></i>{user.email}</div>
        </li>
        <li className='card-item'>
          <span className='card-span'>
            Birthday
          </span>
          <div className="card-info"><i className="fa-solid fa-cake-candles card-icon"></i>{user.birthday}</div>
        </li>
      </ul>
        <hr className='card-separator'/>
      <footer className='card-footer'>
        <button className='card-btn card-btn-trash' onClick={() => {deleteUserById(user.id)}}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <button className='card-btn card-btn-edit' onClick={handleEdit}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </footer>
      
    </article>
  );
};

export default UsersList;
