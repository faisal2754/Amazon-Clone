import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Checkout from './components/Checkout'
import Header from './components/Header'
import Home from './components/Home'

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
