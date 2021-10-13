
import './App.css';
import UserSignup from './pages/registration/UserSignup';
import Forgotemail from './pages/Forgot_email/Forgotemail'
import Signin from './pages/Sign_in/Signin';
import Resetpassword from './pages/Reset_password/Resetpassword';
import Dashboard from './pages/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return <div className="AppDiv">
    <Router>
    <Switch>
      <Route exact path="/" component={Signin} />


      <Route exact path="/resetpassword" component={Resetpassword} />

      <Route exact path="/UserSignup" component={UserSignup} />


      <Route exact path="/Forgotemail" component={Forgotemail} />
      <Route exact path="/Dashboard" component={Dashboard} />
      </Switch>
      </Router>
 
  
  
    </div>
}

export default App;
