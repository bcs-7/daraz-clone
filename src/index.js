import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import savemore from './img/savemore.png';
import logo from './img/logo.png';
import App from './App';
import Applist from './Applist';
import Appitems from './Appitems';
import Appstore from './Appstores';
import Appsmall from './Appsmall';

alert ("What's up Y'all.");
const header = <header> <div className='header'>
  <div className='top'><button className='topbtn'>Become a Seller</button><button className='topbtn'>Payments & Recharge</button><button className='topbtn'>Help & Support
</button><button className='topbtn'>Daraz Logistic Partner
</button>
<div className='savemore'><img className='img' src={savemore} alt='sv' /><div className='whatever'>Save More on App</div></div>
</div>
<div className='bottm'>
  <img id='logo' src={logo} alt='idk' height='50px' /><div class="search">
  
  
  
  <div class="tool">
                <div class="srch1">Search History<button id="clear">clear</button></div>
                <div class="srch">laptop</div>
                <div class="srch">ssd</div>
                <div class="srch">pouch</div>
                <div class="srch">book</div>
                <div class="srch">jeans jacket</div>
                <div class="srch">iphun</div>
        </div><button id="btnsrch"></button>
   
  
  <input type="text" placeholder="Search in Daraz" /></div>
  <div class="rest"><button id="login">Login</button><span id="line">|</span><button id="signup"> Sign Up</button><button id="en">EN <font style={{marginLeft: '1px', fontSize: 'xx-small'}}>v</font></button><button id="trolley">.</button></div>
</div>
  
  
  </div></header>
const mainbody = <mainbody><div className='mainbody'><div className='snd'>
  <div className='cat'>
    <App />
    </div><div className='billboard'></div></div>
    <div className='trd'><img className='discount' src='img/discoh.png' alt='a'/></div>
    <div className='list'><ul><Applist /></ul></div>
    <div className='flash'> Flash Sale</div>
    <div className='itemsale'><div class="heading">
            <div class="sale" >On Sale Now</div>
            <div class="sale1" id="end"></div>
            <div class="time" id="hr"></div><span>:</span>
            <div class="time" id="min"></div><span>:</span>
            <div class="time" id="sec"></div>
            <div class="shopmore">SHOP MORE</div>
         
        </div> <hr />
<Appitems />
        </div>
        <div className='flash'> DarazMall   </div> <div className='shopmorex'>Shop More {'>'} </div>
        <Appstore />
        <div className='flash'> Categories</div>
        <Appsmall />
  </div>

  
  </mainbody>
var countdown = new Date("Dec 29, 2025 19:32:49").getTime();
            
var x = setInterval( abc,1000);
function abc(){
    var now = new Date().getTime();
    var total = countdown - now;
    var hour = Math.floor((total % (1000 * 24 * 60 * 60))/(1000 * 60 * 60));
    var min = Math.floor((total % (1000 * 60 * 60))/(1000 * 60));
    var sec = Math.floor((total % (1000 * 60))/(1000));
    document.getElementById("hr").innerHTML = hour;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("end").innerHTML ="Ending In";
    if(hour < 10 && hour > 0){
        document.getElementById("hr").innerHTML = "0" + hour;
    }
    if(min < 10 && min > 0){
        document.getElementById("min").innerHTML = "0" + min;
    }
    if(sec < 10 && sec > 0){
        document.getElementById("sec").innerHTML = "0" + sec;
    }
    if (hour === 0)
    {
        document.getElementById("hr").innerHTML = "00";
    }
    if (min === 0)
    {
        document.getElementById("min").innerHTML = "00";
    }
    if (sec === 0)
    {
        document.getElementById("sec").innerHTML = "00";
    }
    if(total <= 0)
    {
        clearInterval(x);
        document.getElementById("hr").innerHTML = "xx";
    document.getElementById("min").innerHTML = "xx";
    document.getElementById("sec").innerHTML = "xx";
    document.getElementById("end").innerHTML ="Expired";
    
    }

     }
     



const main = <main><div className='main'>{header}{mainbody}</div></main>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {main}
  </React.StrictMode>
);


