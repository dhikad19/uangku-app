import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles'
import Home from './pages/Home'
import DropdownTest from './pages/DropdownTest'
import Footer from './components/FooterComponent'
import PricingPage from './pages/PricingPage'
import SigninPage from './pages/signin'
import LoginPage from './pages/login'
import SignupPage from './pages/signup'

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/test' component={DropdownTest} exact />
        <Route path='/pricing' component={PricingPage} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/signup" component={SignupPage} exact />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
