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
// There are FOUR main divs in the this file and have been seperated by a space. 
       <div className='HeaderMainCont'>
{/* Start of the second div */}
      <div className='header'>
      <a href="Home.jsx">
     <img className='Logo' src={ Logo } alt="Logo"/>
    </a>
    <h2 className='LogoTitle'>Car Insurance</h2>
    <input className='HeaderSearchBar'>
    </input>
    <img className='Microscope' src={ Microscope } alt='Microscope'/>
    <img className='Phone' src= { Phone } alt='Phone'/>
    <h3 className='PhoneNum'>0800001001</h3>
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
{/* Start of the third div */}

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
{/* Start of the the last div */}
    <div className='HeaderBttmContainer'>
    <div className='QuoteDiv'>
    <a className='QuoteBtn' 
         href="https://www.turners.co.nz/Finance/insurance-policies/">GET A QUOTE OR BUY</a> 
         <h5 className='QuoteSubHeader'> Get an instant quote and buy in 3 easy steps</h5>
        <a className='ContQuoteBtn' 
         href="https://www.turners.co.nz/Finance/insurance-policies/">RETRIEVE QUOTE</a>
         <h5 className='ContQuoteSubHeader'> Already got a quote? Continue where you left off</h5>
     </div>
     
     <div className='DrivingContainer'>
     <img className='Driving' src= { Driving } alt='Driving'/>
     </div>
     </div>
     </div>
    
  );
}
export default HomeHeader;