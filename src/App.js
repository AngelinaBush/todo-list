import './App.css';
import { Todo } from './Todo';

function App() {
  return (
    <div className='MainContainer'>
      <div className='App'>
        <h1>My Todos</h1>
      </div>
      <div className='App'>
        <Todo />
      </div>
    </div>
  );
}

export default App;
