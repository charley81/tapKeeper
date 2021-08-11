import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages'
import About from './pages/about'
import Contact from './pages/contact'
import Login from './pages/login'
import Signup from './pages/signup'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
