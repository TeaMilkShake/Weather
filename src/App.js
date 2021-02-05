import Home from './Home'
import City from './City'
import About from './About'
import {BrowserRouter, Route} from 'react-router-dom'
import {AppProvider} from './AppContext'

function App() {
  return (
    <AppProvider>
      <div className="app_wrapper">
        <About/>
        <BrowserRouter>
          <Route exact path="/Weather" render={() => <Home />}/>
          <Route exact path="/Weather/city" render={() => <City />}/>
        </BrowserRouter>
      </div>
    </AppProvider>
    
  );
}

export default App
