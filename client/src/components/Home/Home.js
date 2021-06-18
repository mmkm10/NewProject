import React from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';

function Home() {
  
const history= useHistory();

//class Home extends Component {

//  render() {
    return (
      <div className="">
        <div className="Home">
          <h1> Welcome!</h1>
        </div>
        <div className="Login">
        <button onClick={()=> history.push("/Refresh")}>LOGIN</button>
      </div>
      </div>

    )
  //}
//}
}
export default Home;