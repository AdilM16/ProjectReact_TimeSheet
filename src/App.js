import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Ajouter from './Ajouter';
import Form from './Form';
import TimeSheet from './TimeSheet';
import NavBar from './components/navbar/NavBar';
import '@fortawesome/fontawesome-svg-core'


const App = () => {
  return (
    <div>
        <NavBar />
        <Form />
        <div className="parent">
          <TimeSheet />
        </div>
      <div className='wiid'>
        <Ajouter />
      </div>
    </div>
  );
}

export default App;
