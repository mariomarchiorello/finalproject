import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Map from "./components/map/index";
import Header from "./components/header/index";
import { GlobalStyle } from "./globalstyles/globalStyle";
import SignUp from "./components/signIn-signUp/signUp/index";
import Verification from "./components/signIn-signUp/verification";
import SignIn from "./components/signIn-signUp/signIn";
import ResetPwEmail from "./components/signIn-signUp/resetPasswordEmail";
import PasswordReset from "./components/signIn-signUp/passwordReset";
import Profile from "./components/profile";
import Home from "./components/home";
import { ThemeProvider } from "styled-components";
import { darktheme, lighttheme } from "./components/themes"
import CreateNewSampleSet from "./components/sampleSetUpload";
import Toggle from "./components/themes/toggle";
import {withAuth} from "./components/HOC";



//add new imports below





const App = () => {
  return (
    <>
      <ThemeProvider theme={darktheme}>
      <Router>
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          <Route exact path="/map" component={withAuth(Map)} />
          {/* <Route exact path='/annotate' component={XXX} /> */}
          <Route exact path="/profile" component={withAuth(Profile)} />
          <Route exact path="/upload" component={withAuth(CreateNewSampleSet)}/>
          <Route exact path="/resetTwo" component={PasswordReset} />
          <Route exact path={["/home", "/"]} component={Home} />
          <Route exact path="/resetOne" component={ResetPwEmail} />
          <Route exact path={["/signIn","/sign-in"]} component={SignIn} />
          <Route exact path="/verification" component={Verification} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/header" component={Header} />

          <Route exact path="/toggletest" component={Toggle} />



          {/*add new routes above*/}

          {/*Always make sure to put the path"*" at the end the browser will stop looking
          for routs below this line!*/}

          <Route path="*" component={() => "404 NOT FOUND"} />






        </Switch>
      </Router>
      <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
