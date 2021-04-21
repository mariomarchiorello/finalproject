import { Suspense, React } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./globalstyles/globalStyle";
import ResetPwEmail from "./components/signIn-signUp/resetPasswordEmail";
import PasswordReset from "./components/signIn-signUp/passwordReset";
import Home from "./components/home";
import ThemeSwitchProvider from "./components/themes/ThemeProvider";
import Toggle from "./components/themes/toggle";
import {
  SignIn,
  SignUp,
  Verification,
  Map,
  Profile,
  CreateNewSampleSet,
  AnnotateTwo,
} from "./LazyComponents";
import Spinner from "./components/spinner";
import { withAuth, withNoAuth } from "./components/HOC";
import SampleSetSummary from "./components/summary";

const App = () => {
  return (
    <>
      <ThemeSwitchProvider>
        <Router>
          <Switch>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/map" component={withAuth(Map)} />
              <Route exact path="/annotate-dusko" component={AnnotateTwo} />
              <Route exact path="/profile" component={withAuth(Profile)} />
              <Route
                exact
                path="/upload"
                component={withAuth(CreateNewSampleSet)}
              />
              <Route exact path="/resetTwo" component={PasswordReset} />
              <Route exact path={["/home", "/"]} component={withNoAuth(Home)} />
              <Route exact path="/resetOne" component={ResetPwEmail} />
              <Route exact path={["/signIn", "/sign-in"]} component={SignIn} />
              <Route exact path="/verification" component={Verification} />
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/toggletest" component={Toggle} />
              <Route
                exact
                path="/summary"
                component={withAuth(SampleSetSummary)}
              />
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
