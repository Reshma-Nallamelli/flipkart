import Searchbar from './components/Searchbar';
import './App.css';
import './css/boostrap.css';
import Down from'./components/Down'
import Info from './components/Info'
import Form from './components/Form'

function App() {
  return (
    <div className="container-fluid ">
      <div className='row'>
        <Searchbar/>
        <Down/>
        <Info/>
        <Form/>
      </div>
    </div>
  );
}

export default App;
