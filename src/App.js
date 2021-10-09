import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import './App.css';
import Game from './tutorial/game'
import Top from './top'
import Todo from './todolist/page'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Top} />
        <Route path='/game' component={Game} />
        <Route path='/todo' component={Todo} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;