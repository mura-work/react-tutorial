import { BrowserRouter,  Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Game from './game'
import Top from './top'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Top} />
        <Route path='/game' component={Game} />
      </Switch>
      <Link to='/'>Back To Top</Link>
    </BrowserRouter>
  );
}



export default App;
