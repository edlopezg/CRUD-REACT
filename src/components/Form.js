import './Form.css'


const Form = ({createUser, updateUser, objectUpdate, handleSubmit, reset, register}) => {

  const defaultValuesForm = {
    first_name: "",
    last_name: "",
    email: "",
    birthday: "",
    password: ""
  }

  const submit = data => {
    if(objectUpdate !== undefined){
      updateUser(objectUpdate.id, data)
      reset(defaultValuesForm)
    } else {
      createUser(data)
    }
    reset(defaultValuesForm)
  }


     
   
  

  return (
    <form className='container_form'>
       <div className='msform'>
      <div>
        <h2 className='fs-title'>New User</h2>
        <h3 className='fs-subtitle'>Create a new user</h3>
      </div>
      <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor='first_name'>First Name : </label>
        <input type='text' id='name' {... register ('first_name')}/>
     </div>
     <div>
        <label htmlFor='last_name'>Last Name : </label>
        <input type='text' id='name' {... register ('last_name')}/>
     </div>
     <div>
       <label htmlFor='email'>email : </label>
        <input type='text' id='email' {... register ('email')}/>
    </div>
    <div>
       <label htmlFor='birthday'>Birthday : </label>
        <input type='date' id='birthday' {... register ('birthday')}/>
    </div>
    <div>
       <label htmlFor='password'>Password : </label>
        <input type='password' id='password' {... register ('password')}/>
   </div>
     <div>
      <button className='action_button'>Create</button>
    </div>
    </form>
  
    
    </div>
      
    </form>
   
   
  )
}

export default Form
    

   

   