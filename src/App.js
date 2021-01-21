import Home from './Home'
import City from './City'
import About from './About'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <div className="app_wrapper">
      <About />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/city" component={City} />
      </BrowserRouter>
    </div>
  );
}

export default App;
