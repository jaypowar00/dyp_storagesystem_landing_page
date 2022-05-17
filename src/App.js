import dyp_logo from './assets/imgs/dyp_logo.svg';
import './App.css';
import TypeAnimation from 'react-type-animation'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function App() {
    return (
        <div className="App" >
            <div className='title'>
                <img src={dyp_logo} alt='logo' style={{width: '50vw', maxWidth: '400px', minWidth: '270px'}} />
            </div>
            <div className='content text-center'>
                <h1 style={{display: 'inline-block'}}>
                    CSE File&nbsp;
                </h1>
                <div style={{ width: '145px', textAlign: 'left', margin: '0 auto', display: 'inline-block' }} >
                    <TypeAnimation cursor={true} sequence={[ 'Space', 1000, 'Storage', 2000, ]} wrapper="h1" repeat={Infinity} />
                </div>
                <div className="content-center">
                    <AwesomeButton type="primary" ripple href="http://10.10.1.20:8086" >Get Started</AwesomeButton>
                </div>
                <div className='footer'>
                  Computer Science &amp; Engineering Department<br/>
                  <a href="https://github.com/RishikeshMane" target="_blank" rel="noreferrer" >Rishikesh Mane &#40;S.Y.&#41;</a> &amp; <a href="https://github.com/jaypowar00" target="_blank" rel="noreferrer" >Jay Powar &#40;B.Tech.&#41;</a>
                </div>
            </div>
        </div>
    );
}

export default App;
