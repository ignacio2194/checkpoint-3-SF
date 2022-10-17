import React from 'react'
import '../styles/UserRegister.css'

function UserRegister() {
  return (
    <div className="text-center">
        <div className="form-signin w-100 m-auto">
            <form className='formContainer'>
            <img className="mb-4" src="https://cdn-icons-png.flaticon.com/512/5174/5174586.png" alt="" width="82" height="82"/>
                <h1 className="h3 mb-3 fw-normal text-light">Register</h1>

                <div className="form-floating mb-4">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                    <input type="re-password" className="form-control" id="floatingPassword" placeholder="Re-enter Password"/>
                    <label for="floatingPassword">Re-enter password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
            </form>
        </div> 
  </div>
  )
}

export default UserRegister