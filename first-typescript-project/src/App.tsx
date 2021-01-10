import {FunctionComponent} from 'react';
import {AddNewTodo} from './components/AddNewTodo/AddNewTodo'
import "./sass/main.scss"

export const App:FunctionComponent = ()=> {
  return (
    <div className="App">
      <AddNewTodo/>
    </div>
  );
}

export default App;
