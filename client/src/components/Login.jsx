import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../styles/Login.css'
import { auth } from '../firebase'

const Login = () => {
   const history = useHistory()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const signIn = async (e) => {
      e.preventDefault()
      try {
         const authObj = await auth.signInWithEmailAndPassword(email, password)
         if (authObj) {
            history.push('/')
         }
      } catch (err) {
         alert(err.message)
      }
   }

   const register = async (e) => {
      e.preventDefault()
      try {
         const authObj = await auth.createUserWithEmailAndPassword(
            email,
            password
         )
         if (authObj) {
            history.push('/')
         }
      } catch (err) {
         alert(err.message)
      }
   }

   return (
      <div className="login">
         <Link to="/">
            <img
               src="https://logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.png"
               alt=""
               className="login__logo"
            />
         </Link>

         <div className="login__container">
            <h1>Sign in</h1>
            <form>
               <h5>Email</h5>
               <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />

               <h5>Password</h5>
               <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />

               <button
                  type="submit"
                  onClick={signIn}
                  className="login__signInButton"
               >
                  Sign In
               </button>
            </form>

            <p>
               By continuing, you agree to Amazon Clone's Conditions of Use and
               Privacy Notice.
            </p>

            <button onClick={register} className="login__registerButton">
               Create your Amazon account
            </button>
         </div>
      </div>
   )
}

export default Login
