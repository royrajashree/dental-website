import statefulComponents from './Containers';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <div>
        <HashRouter >
          <Switch>
            <Route exact path="/">
              <statefulComponents.Home />
            </Route>
            <Route path="/about">
              <statefulComponents.About />
            </Route>
          </Switch>
        </HashRouter>
      </div>
    </div>

  );
}

export default App;
