import dyp_logo from '../src/dyp_logo.png';
import './App.css';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function App() {
    return (
        <div className="App" >
            <div className='title'>
                <img src={dyp_logo} id="logo" alt='logo' />
                <span id="cse-dept">
                Department of Computer Science and Engineering
                </span>
            </div>
            <div className='content text-center'>
                <h1 id="storage-server" >
                    Storage Server
                </h1>
                <div className="content-center">
                    <AwesomeButton type="primary" ripple href="http://10.10.1.20:8086" >Get Started</AwesomeButton>
                </div>
                <div className='footer'>
                  Computer Science &amp; Engineering Department<br/>
                  <span>Rishikesh Mane &#40;S.Y.&#41;</span> &amp; <a href="https://github.com/jaypowar00" title='See Jay Powar on GitHub' target="_blank" rel="noreferrer" >Jay Powar &#40;B.Tech.&#41;</a>
                </div>
            </div>
        </div>
    );
}

export default App;
