import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Map from "./components/map";


const App = ()=> {
  return (
    <>
     <Router>
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        {/* <Route exact path='/signIn-signUp' component={XXX} /> */}
        <Route exact path='/map' component={Map} />
        {/* <Route exact path='/annotate' component={XXX} /> */}
        {/* <Route exact path='/profile' component={XXX} /> */}




        

      </Switch>
    </Router> 
    
    </>
  );
}

export default App;
