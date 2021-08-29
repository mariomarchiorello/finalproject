import { Suspense, React } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./globalstyles/globalStyle";
import ResetPwEmail from "./components/signIn-signUp/resetPasswordEmail";
import PasswordReset from "./components/signIn-signUp/passwordReset";
import Home from "./components/home";
import ThemeSwitchProvider from "./components/themes/ThemeProvider";
// import Toggle from "./components/themes/toggle";
import {SignIn, SignUp, Verification, Map, Profile, CreateNewSampleSet} from "./LazyComponents";
import Spinner from "./components/spinner";
import { withAuth, withNoAuth } from "./components/HOC";
import SampleSetSummary from "./components/summary";
import About from "./components/about";
import Annotate from "./components/annotate";
import StartPage from "./components/start";

const App = () => {
  return (
    <>
      <ThemeSwitchProvider>
        <Router>
          <Switch>
            <Suspense fallback={<Spinner />}>

              <Route exact path={["/home", "/"]} component={withNoAuth(Home)} />

              {/*------------login and registration sequence-------------------------------*/}
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/verification" component={Verification} />
              <Route exact path={["/signIn", "/sign-in"]} component={SignIn} />
              <Route exact path="/resetTwo" component={PasswordReset} />
              <Route exact path="/resetOne" component={ResetPwEmail} />
              {/*-------------landing and functionalities-----------------------------------*/}

              <Route exact path="/start" component={StartPage} />
              <Route exact path="/about" component={About} />
              {/*--------------Map will be restructured and made available for everyone------*/}
              <Route exact path="/map" component={withAuth(Map)} />
              <Route exact path="/react-image-annotate" component={withAuth(Annotate)}/>
              <Route exact path="/profile" component={withAuth(Profile)} />
              <Route exact path="/upload" component={withAuth(CreateNewSampleSet)}/>
              <Route exact path="/summary" component={withAuth(SampleSetSummary)}/>




            </Suspense>
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </Router>
        <GlobalStyle />
      </ThemeSwitchProvider>
    </>
  );
};

export default App;
