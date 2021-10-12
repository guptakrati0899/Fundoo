import logo from './logo.svg';
import './App.css';
import UserSignup from './pages/registration/UserSignup';
import Forgotemail from './pages/Forgot_email/Forgotemail'
import Signin from './pages/Sign_in/Signin';

function App() {
  return <div className="AppDiv">
     {/* <UserSignup/>  */}
      {/* <Signin/>   */}
    <Forgotemail/>  
    </div>
}

export default App;
