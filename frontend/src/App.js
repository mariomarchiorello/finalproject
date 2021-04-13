import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Map from "./components/map/index";
import Header from "./components/header/index"
import { GlobalStyle } from "./globalstyles/globalStyle";
import SignUp from "./components/signIn-signUp/signUp/index"
import Verification from "./components/signIn-signUp/verification";
import SignIn from "./components/signIn-signUp/signIn";
import ResetPwEmail from "./components/signIn-signUp/resetPasswordEmail";
import PasswordReset from "./components/signIn-signUp/passwordReset";
import Profile from "./components/profile";
import Home from "./components/home"
import DynamicBackground from "./components/backgroundChanger";
import CreateNewSampleSet from "./components/sampleSetUpload";

const App = ()=> {
  return (
    <>
     <Router>
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/map' component={Map} />
        {/* <Route exact path='/annotate' component={XXX} /> */}
        <Route exact path='/profile' component={Profile} />

        <Route exact path='/bg' component={DynamicBackground} />
        <Route exact path='/resetTwo' component={PasswordReset} />        
        <Route exact path='/' component={Home} />
        <Route exact path='/resetOne' component={ResetPwEmail} />
        <Route exact path='/sign-in' component={SignIn} />
        <Route exact path='/verification' component={Verification} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/header' component={Header} />
        <Route exact path='/upload' component={CreateNewSampleSet} />
        
      </Switch>
    </Router> 
    <GlobalStyle/>
    </>
  );
}

export default App;
