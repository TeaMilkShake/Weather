import Home from './Home'
import City from './City'

import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <div className="app_wrapper">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/city" component={City} />
      </BrowserRouter>
    </div>
  );
}

export default App;
