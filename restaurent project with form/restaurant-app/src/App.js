import './App.css';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import myStore from './redux/Store';
import { Provider } from 'react-redux'; // provides functionality to work with redux with react


function App() {
  //console.log("App.js: ", myStore.getState()); // will show the objects from store
  return (///////////////// routing stablish for whole app
    <div className="App">
      <Provider store={myStore}>    {/* ///////////   for redux with store */}
        {/* ///////////   Now store is available to whole application */}

        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider> {/* ///////////   for redux */}
    </div>
  ); /////////////////
}

export default App;
