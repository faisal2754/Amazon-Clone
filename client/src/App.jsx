import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Checkout from './components/Checkout'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'

const App = () => {
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
