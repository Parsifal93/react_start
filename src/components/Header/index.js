import logo from './../../logo.svg';
//import math from './../utils/math'; - для дефолта
import {mult,sqrt,sin} from "./../utils/math";
//import * as math from './../utils/math' - универсальный импорт

function Header () {
    return (

<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header>
    );
}

export default Header;