import './app.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar'
import HomePage from './pages/'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import LoginPage from './pages/login'
import SignupPage from './pages/signup'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignupPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
