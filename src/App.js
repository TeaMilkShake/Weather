import Home from './Home'
import City from './City'
import About from './About'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {AppProvider} from './AppContext'
import NotFound from './404/index'

function App() {
  return (
    <AppProvider>
      <div className="app_wrapper">
        <About/>
        <BrowserRouter>
        <Switch>
          <Route exact path="/Weather" component={Home}/>
          <Route exact path="/Weather/city" component={City}/>
          <Route component={NotFound}/>
        </Switch>
        </BrowserRouter>
      </div>
    </AppProvider>
    
  );
}

export default App
