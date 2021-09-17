import Header from './components/Header';
import './App.css';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Main/>
    </div>
  );
}

export default App;

// React.createElement(
//   "div", 
//   {
//     className:"App"
//   }, 
//   [
//     React.createElement("header")
//   ])


