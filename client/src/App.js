import './App.css';
import {Sidebar} from "./MyComponents/Sidebar";
import {Feed} from "./MyComponents/Feed";

function App() {
  return (
    <div className="App">
      <div className='app__section'>
        <Sidebar/>
        <Feed/>
      </div>
    </div>
  );
}

export default App;
