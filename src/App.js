
import './App.css';
import EmployeeRegisterComponent from './components/EmployeeRegisterComponent';
import EmployeeListComponent from './components/EmployeeListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';


function App() {
  return (
    <div className="App">
      
      <FooterComponent/>
      <HeaderComponent/>
     <EmployeeListComponent/>
     
     <EmployeeRegisterComponent/>
     
     
    </div>
  );
}

export default App;
