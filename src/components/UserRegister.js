import React from 'react'
import '../styles/UserRegister.css'

function UserRegister() {
  return (
    <body class="text-center">
        <main class="form-signin w-100 m-auto">
            <form class='formContainer'>
            <img class="mb-4" src="https://cdn-icons-png.flaticon.com/512/5174/5174586.png" alt="" width="82" height="82"/>
                <h1 class="h3 mb-3 fw-normal text-light">Register</h1>

                <div class="form-floating mb-4">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating">
                    <input type="re-password" class="form-control" id="floatingPassword" placeholder="Re-enter Password"/>
                    <label for="floatingPassword">Re-enter password</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
            </form>
        </main> 
  </body>
  )
}

export default UserRegister