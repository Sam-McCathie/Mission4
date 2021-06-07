import React from "react";
import './HomeHeader.css'
import Logo from './img/Logo.png';
import Microscope from './img/Microscope.png';
import Phone from './img/Phone.png';
import NotificationBell from './img/NotificationBell.png';
import UnderBell from './img/UnderBell.png';
import PinkCircle from './img/PinkCircle.png';
import Icon from './img/Icon.png';
import Driving from './img/Driving.png';


function HomeHeader() {
  return (
    <div className="App">
      <div className='header'>
      <a href="Home.jsx">
     <img className='Logo' src={ Logo } alt="Logo"/>
    </a>
    <h2>Car Insurance</h2>
    <input className='HeaderSearchBar'>
    </input>
    <img className='Microscope' src={ Microscope } alt='Microscope'/>
    <img className='Phone' src= { Phone } alt='Phone'/>
    <h3 className='PhoneNum'>09-580 9316</h3>
    <img className='NotificationBell' src= { NotificationBell } alt='NotificationBell'/>
    <img className='UnderBell' src= { UnderBell } alt='UnderBell'/>
    <img className='PinkCircle' src= { PinkCircle } alt='PinkCircle'/>
    <div className='circle'>
         <img className='Icon' src= { Icon } alt='Icon'/>
    </div>
    <h3 className='HeaderID'>Hi Mary!</h3>
    <a className='LogOutBtn'
         href='https://www.turners.co.nz/'>LOG OUT</a>
    
    
    </div>
    

    <div className='HeaderMenu'><br />
    <a className='HeaderBtns' 
         href="https://www.turners.co.nz/Finance/insurance-policies/">Home</a> 
    <a className='HeaderBtns' 
         href="https://www.turners.co.nz/Finance/insurance-policies/">Car Insurance</a> 
    <a className='HeaderBtns' 
         href="https://www.turners.co.nz/Finance/insurance-policies/">Finance</a> 
    <a className='HeaderBtns' 
         href="https://www.turners.co.nz/Finance/insurance-policies/">Claim</a> 
    <a className='HeaderBtns' 
         href="https://www.turners.co.nz/Finance/insurance-policies/">Mechanical Breakdown</a> 
    <a className='HeaderBtn' 
         href="https://www.turners.co.nz/Finance/insurance-policies/">Services & Information</a> 
    </div>
    <div className='HeaderBtmContainer'>
    <a className='QuoteBtn' 
         href="https://www.turners.co.nz/Finance/insurance-policies/">GET A QUOTE OR BUY</a> 
         <h5 className='gqh5'> Get an instant quote and buy in 3 easy steps</h5>
        <a className='ContQuoteBtn' 
         href="https://www.turners.co.nz/Finance/insurance-policies/">RETRIEVE QUOTE</a>
         <h5 className='rqh5'> Already got a quote? Continue where you left off</h5>
         <img className='Driving' src= { Driving } alt='Driving'/>
    </div>

    </div> 
  );
}
export default HomeHeader;