import React from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';


function Home() {
  const history = useHistory();

  //class Home extends Component {

  //  render() {
  return (
    <div className="bg">
      <div className="Home">
        <h1> Welcome!</h1>
      </div>
      <div className="Login">
        <form>
          <ul>     Name:        
    <input type="text" name="name" /> </ul>
          <ul> Password:
    <input type="text" name="password" /></ul>

        </form>
        <button id="button-log" onClick={() => history.push("/Blank")}>LOGIN</button>
      </div>
    </div >

  )
  //}
  //}
}
export default Home;