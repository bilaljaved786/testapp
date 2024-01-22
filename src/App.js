import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import BookContainer from './redux/BookContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Counter App</h1>
        <BookContainer />
      </div>
    </Provider>
  )
}

export default App;
