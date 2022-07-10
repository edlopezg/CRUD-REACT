import React from 'react'
import './CardUser.css'
import axios from 'axios'



// Recibimoos la prop de movie 
const CardUser = ({users, getAllUsers, url, setObjectUpdate, setshowForm, reset}) => {

  const deleteUser =  id => {
    axios.delete(`${url} ${id}/`)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
  }


const updateUser = () => {
  setshowForm(true)
  
  const obj = {
    first_name: users.first_name,
    last_name: users.last_name,
    email: users.email,
    birthday: users.birthday,
    password:users.password
    
  }

  reset(obj)
  setObjectUpdate(users)
}



  return (

    <div >
       <article className='card-container'>
        <h2>{`${users.id}`}</h2>
        <ul className='card-list '>
          <li><b>First Name : </b>{users.first_name}</li>
          <li><b>Last Name : </b>{users.last_name}</li>
          <li><b>Email : </b>{users.email}</li>
          <li><b>Birthday : </b>{users.birthday}</li>
        </ul>
        <button className='btn-delete'>
           <i  onClick={() => deleteUser(users.id)} class="fa-solid fa-trash-can fa-2x "></i>
        </button>
        <button className='btn-update'>
           <i  onClick={updateUser} class="fa-solid fa-file-pen fa-2x "></i>
        </button>
       
    </article>
    </div>
   
  )
}

export default CardUser;