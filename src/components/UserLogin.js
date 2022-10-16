import React from 'react'
import '../styles/UserLogin.css'

function UserLogin() {
  return (
    <body className="text-center">
        <main className="form-signin w-100 m-auto">
            <form className='formContainer'>
                <img className="mb-4" src="https://cdn-icons-png.flaticon.com/512/3711/3711310.png" alt="" width="72" height="72"/>
                <h1 className="h3 mb-3 fw-normal text-light">Please sign in</h1>

                <div className="form-floating mb-4">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3 text-light">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </main> 
  </body>
  )
}

export default UserLogin