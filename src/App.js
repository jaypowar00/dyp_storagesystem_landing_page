import dyp_logo from './dyp_logo.svg';
import './App.css';
import TypeAnimation from 'react-type-animation'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function App() {
    return (
        <div className="App" >
            <div className='title'>
                <img src={dyp_logo} alt='logo' style={{width: '50vw', maxWidth: '400px', minWidth: '270px'}} />
                <span style={{marginRight: '200px'}}>
                Department of Computer Science and Engineering
                </span>
            </div>
            <div className='content text-center'>
                <h1 style={{display: 'inline-block', marginTop: '72px', fontSize: '75px'}}>
                    Storage Server
                </h1>
                <div className="content-center">
                    <AwesomeButton type="primary" ripple href="http://10.10.1.20:8086" >Get Started</AwesomeButton>
                </div>
                <div className='footer'>
                  Computer Science &amp; Engineering Department<br/>
                  <a href="https://github.com/RishikeshMane" title='See Rishikesh Mane on GitHub' target="_blank" rel="noreferrer" >Rishikesh Mane &#40;S.Y.&#41;</a> &amp; <a href="https://github.com/jaypowar00" title='See Jay Powar on GitHub' target="_blank" rel="noreferrer" >Jay Powar &#40;B.Tech.&#41;</a>
                </div>
            </div>
        </div>
    );
}

export default App;
