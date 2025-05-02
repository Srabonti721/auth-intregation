// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
// import { auth } from '../../firebase.init';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Register = () => {

    const {createUser}= use(AuthContext)

    
    const handleLoginForm = (e) => {
        e.preventDefault();
        const name =e.target.name.value; 
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password,name);
        //  careat user
        // createUserWithEmailAndPassword(auth, email, password)
        //   .then(result => {
        //     console.log(result)
        //   })
        //   .catch(error => {
        //     console.log(error)
        //   }
        //   )
        createUser(email,password)
        .then(result =>{
            console.log(result);   
        })
        .catch(error=>{
            console.log(error);
        }
        )
    
    
      }
    return (
        <div className="card bg-base-100 w-full mx-auto my-10 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Registration now!</h1>
        <form onSubmit={handleLoginForm} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="your name" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Registration</button>
        </form>
        <p>Already have any account ? pleace <Link className='text-blue-800 underline' to="/login">Login</Link></p>
      </div>
    </div>
    );
};

export default Register;