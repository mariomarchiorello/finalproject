import { Suspense, React  } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/index";
import { GlobalStyle } from "./globalstyles/globalStyle";
import ResetPwEmail from "./components/signIn-signUp/resetPasswordEmail";
import PasswordReset from "./components/signIn-signUp/passwordReset";
import Home from "./components/home";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/themes";
import Toggle from "./components/themes/toggle";
import Annotate from './components/annotate'
import {
  SignIn,
  SignUp,
  Verification,
  Map,
  Profile,
  CreateNewSampleSet,
} from "./LazyComponents";
import Spinner from "./components/spinner";
import {withAuth} from "./components/HOC";
import { useDarkMode } from "./components/themes/useDarkMode";

const App = () => {

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'dark' ? darkTheme : lightTheme

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <Router>
          <Switch>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/map" component={withAuth(Map)} />
              <Route exact path='/annotate' component={Annotate} />
              <Route exact path="/profile" component={withAuth(Profile)} />
              <Route exact path="/upload" component={withAuth(CreateNewSampleSet)} />
              <Route exact path="/resetTwo" component={PasswordReset} />
              <Route exact path={["/home", "/"]} component={Home} />
              <Route exact path="/resetOne" component={ResetPwEmail} />
              <Route exact path={["/signIn", "/sign-in"]} component={SignIn} />
              <Route exact path="/verification" component={Verification} />
              <Route exact path="/sign-up" component={SignUp} />

              <Route exact path="/toggletest" component={Toggle} />

              {/*add new routes above*/}

              {/*Always make sure to put the path"*" at the end the browser will stop looking
          for routs below this line!*/}
            </Suspense>
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </Router>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
