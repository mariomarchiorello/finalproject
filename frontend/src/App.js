import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Map from "./components/map/index";
import Header from "./components/header/index"
import { GlobalStyle } from "./globalstyles/globalStyle";
import SignUp from "./components/signIn-signUp/signUp/index"
import Verification from "./components/signIn-signUp/verification";
import SignIn from "./components/signIn-signUp/signIn";

const App = ()=> {
  return (
    <>
     <Router>
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/map' component={Map} />
        {/* <Route exact path='/annotate' component={XXX} /> */}
        {/* <Route exact path='/profile' component={XXX} /> */}



        <Route exact path='/signIn' component={SignIn} />
        <Route exact path='/verification' component={Verification} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/header' component={Header} />
        
      </Switch>
    </Router> 
    <GlobalStyle/>
    </>
  );
}

export default App;
