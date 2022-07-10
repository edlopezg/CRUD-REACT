import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import CardUser from './components/CardUser';
import Form from './components/Form';


const url  = 'https://users-crud1.herokuapp.com/users/'


function App() {

  const {handleSubmit, register, reset} = useForm()
  
  const [users, setUsers] = useState()
  const [showForm, setshowForm] = useState(false)
  const [objectUpdate, setObjectUpdate] = useState()

  const getAllUsers = () => {
    //con la funcion axios.get estamos mandando traer la informacion de la API rest
     axios.get(url)
     .then(res => setUsers (res.data))
     .catch(err => console.log(err))
  }

  useEffect(() => {
   getAllUsers()
  }, [])
  
  const createUser = (newContact) => {
    axios.post(url, newContact)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))

  }

  const updateUser = (id, updateUser) => {

    

      axios.patch(`${url} ${id}/`, updateUser)
      .then(res => {
      console.log(res.data)
      getAllUsers()
      })
      .catch(err => console.log(err))
  }

  
const isShowForm = () =>  {
  const obj = {
    first_name : "",
    last_name: "",
    email: "",
    birthday: "",
    password: ""
  }
  reset(obj)
  setshowForm(!showForm)
}

  return (
   
        <div className='App'>
      
    <div className=''>
      <button className='action_button' onClick={isShowForm}>{showForm ? 'Hide Form' :'Create a new user'}</button>
    </div>
    <div>
      {
        showForm && 
        <Form 
          createUser={createUser}
          updateUser={updateUser}
          objectUpdate={objectUpdate}
          handleSubmit={handleSubmit}
          reset={reset}
          register={register}
        />
      }
    </div>
    {
      users?.map(users => (
        <CardUser
          key={users.id}
          users={users}
          url={url}
          getAllUsers={getAllUsers}
          setObjectUpdate={setObjectUpdate}
          setshowForm={setshowForm}
          reset={reset}
        />
      ))
    }
  </div>

  
)
}

export default App

