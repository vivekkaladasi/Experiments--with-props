
import './App.css';
import UserCard from './components/UserCard';

function App() {
  return (
  <div className="container">

  <UserCard name= "batman" desc="the first movie" img src={"https://tse4.mm.bing.net/th?id=OIP.xfiSkJvyO74MjsAzdgxILwHaEK&pid=Api&P=0&h=180"}/>
  <UserCard name = "darkknight" desc="the second batman movie" img src="https://tse1.mm.bing.net/th?id=OIP.Jpi-srOIkng2z3PXSWF_oQHaK9&pid=Api&P=0&h=180"/>
  <UserCard name = "darkknight returns" desc="the third batman movie" img src="https://tse4.mm.bing.net/th?id=OIP.nRdXqY-ufpYjX6gR0N7llQHaEK&pid=Api&P=0&h=180"/>
  
  </div>
  );  
    
}

export default App;
