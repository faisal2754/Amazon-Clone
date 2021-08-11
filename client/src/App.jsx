import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Checkout from './components/Checkout'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Payment from './components/Payment'
import { auth } from './firebase'
import { useStateValue } from './state/StateProvider'

const App = () => {
   // eslint-disable-next-line
   const [_, dispatch] = useStateValue()

   useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
         if (authUser) {
            dispatch({
               type: 'SET_USER',
               user: authUser
            })
         } else {
            dispatch({
               type: 'SET_USER',
               user: null
            })
         }
      })
   }, [dispatch])

   return (
      <div className="app">
         <Router>
            <Switch>
               <Route path="/login">
                  <Login />
               </Route>
               <Route path="/checkout">
                  <Header />
                  <Checkout />
               </Route>
               <Route path="/payment">
                  <Header />
                  <Payment />
               </Route>
               <Route path="/">
                  <Header />
                  <Home />
               </Route>
            </Switch>
         </Router>
      </div>
   )
}

export default App
