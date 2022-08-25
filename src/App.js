import logo from './logo.svg';
import './App.css';
import Register from './Components/Register/Register';
import UserDetails from './Components/UserDetails/UserDetails';
import FillQuestionnaire from './Components/FillQuestionnaire/FillQuestionnaire';
import UserList from './Components/UserList/UserList';

function App() {
  return (<>
  <Register/>
  <UserDetails/>
  <FillQuestionnaire/>
  <UserList/>
  </>
    
  );
}

export default App;
