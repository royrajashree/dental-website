import statefulComponents from './Containers';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="d-flex flex-grow-1">
      <div>
        <HashRouter >
          <Switch>
            <Route exact path="/">
              <statefulComponents.Home />
            </Route>
            <Route path="/about">
              <statefulComponents.About />
            </Route>
            <Route path="/services">
              <statefulComponents.Services />
            </Route>
            <Route path="/gallery">
              <statefulComponents.Gallery />
            </Route>
            <Route path="/covid19">
              <statefulComponents.Covid19 />
            </Route>
          </Switch>
        </HashRouter>
      </div>
    </div>

  );
}

export default App;
