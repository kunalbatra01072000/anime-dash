import { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import PageNotFound from "./components/layout/PageNotFound";
import Search from "./components/Search/Search";
import Anime from "./components/Specific/Anime";
import Character from "./components/Specific/Character";
import Manga from "./components/Specific/Manga";
import Top from "./components/Top/Top";

function App() {
  const [isalert, setisalert] = useState(false);
  return (
    <Router>
      <div className='App'>
        <Navbar />
        {isalert && <Alert />}
        <div className='container '>
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <Top type={"Anime"} setisalert={setisalert} />
                  <br />
                  <Top type={"Manga"} setisalert={setisalert} />
                  <br />
                  <Top type={"Characters"} setisalert={setisalert} />
                </Fragment>
              )}
            ></Route>
            <Route
              exact
              path='/anime/:mal_id'
              render={(props) => <Anime setisalert={setisalert} {...props} />}
            />
            <Route
              exact
              path='/characters/:mal_id'
              render={(props) => (
                <Character setisalert={setisalert} {...props} />
              )}
            />
            <Route
              exact
              path='/manga/:mal_id'
              render={(props) => <Manga setisalert={setisalert} {...props} />}
            />
            <Route exact path='/search' component={Search} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
