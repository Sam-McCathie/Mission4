import './HomeBody.css'
import Body1 from './img/Body1.png';
import Body2 from './img/Body2.png';
import Body3 from './img/Body3.png';
import Tick from './img/Tick.png';
import x from './img/x.png';
import DwnArrow from './img/DwnArrow.png';
import Profile from './img/Profile.png';


function HomeBody() {
    return (
        <div className='HmeBody'>
            <div className='OurBenefits'>
                <h1 className='h1OB'>OUR BENEFITS</h1>
                <img className='Body1' src= { Body1 } alt='Body1'/>
                <img className='Body2' src= { Body2 } alt='Body2'/>
                <img className='Body3' src= { Body3 } alt='Body3'/>
                <h4 className='BodyTitle1'>Replacement vehicle cover</h4>
                <h4 className='BodyTitle2'>No Excess on Window Repairs</h4>
                <h4 className='BodyTitle3'>Emergency travel, accommodation & repairs</h4>
                <a className='QuoteBtn2' 
         href="https://www.turners.co.nz/Finance/insurance-policies/">GET A QUOTE OR BUY</a> 
            </div>
            <div className='ComparisonChart'>
                <h1 className='h1CC'>COMPARISON CHART</h1>
                <div class='CompChart'>
                    <div className='Line1'/>
                    <div className='Line2'/>
                    <div className='Line3'/>
                    <div className='Line4'/>
                    <h6 className='CC1'>Comprehensive</h6>
                    <h6 className='CC2'>Third party, fire & theft</h6>
                    <h6 className='CC3'>Third Party</h6>
                    <h6 className='CC4'>Vehical removal</h6>
                    <h6 className='CC5'>Fire Damage</h6>
                    <h6 className='CC6'>Transport Home</h6>
                    <img className='Tick1' src= { Tick } alt='Tick1'/>
                    <img className='Tick2' src= { Tick } alt='Tick2'/>
                    <img className='Tick3' src= { Tick } alt='Tick3'/>
                    <img className='Tick4' src= { Tick } alt='Tick4'/>
                    <img className='Tick5' src= { Tick } alt='Tick5'/>
                    <img className='Tick6' src= { Tick } alt='Tick6'/>
                    <img className='x1' src= { x } alt='x1'/>
                    <img className='x2' src= { x } alt='x2'/>
                    <h5 className='DropDwnTitle'>SHOW MORE</h5>
                    <img className='DwnArrow' src= { DwnArrow } alt='DwnArrow'/>
                 </div>
                 <a className='QuoteBtn3' 
                       href="https://www.turners.co.nz/Finance/insurance-policies/">GET A QUOTE OR BUY</a> 
                       <h2 className='StepsTxt'>IT ONLY TAKES 3 STEPS TO GET INSURED</h2>
                       <div className='BlueCircle1'>1</div>
                       <div className='BlueCircle2'>2</div>
                       <div className='BlueCircle3'>3</div>
                       <div className='BlueLine1'/>
                       <div className='BlueLine2'/>
                       <h3 className='Quote'>Get a quote</h3>
                       <h3 className='Details'>Personal details</h3>
                       <h3 className='Review'>Review then Buy</h3>
                       <h2 className='Reviews1'>REVIEWS</h2>
                       <img className='Profile' src={ Profile } alt='Profile'/>
                       <h4 className='ProfileTxt'>" I was reallyd happy with the insurance buying process. It was quick and easy." Mike, 30.</h4>
                       <div className='ProfileCircle1'/>
                       <div className='ProfileCircle2'/>
                       <div className='ProfileCircle3'/>
                       <h1 className='FAQ'>FAQ</h1>
                       <p className='FAQtxt1'>Do I receive a confirmtion email after purchasing Insurance?</p>
                       <div className='FAQLine1'/>
                       <p className='FAQtxt2'>I use my vehicle for business purposes. What Insurance should I get?</p>
                       <div className='FAQLine2'/>
                       <p className='FAQtxt3'>Can I cancel if I change my mind?</p>
                       <div className='FAQLine3'/>
                       <p className='FAQtxt4'>I've moved house. How do I update my policy address with you?</p>
                       <div className='FAQLine4'/>
                       <img className='DwnArrow1' src= { DwnArrow } alt='DwnArrow1'/>
                       <img className='DwnArrow2' src= { DwnArrow } alt='DwnArrow2'/>
                       <img className='DwnArrow3' src= { DwnArrow } alt='DwnArrow3'/>
                       <img className='DwnArrow4' src= { DwnArrow } alt='DwnArrow4'/>
                       <h5 className='DropDwnTitle2'>SHOW MORE</h5>
                        <img className='DropDwnArrow2' src= { DwnArrow } alt='DropDwnArrow2'/>
                 <div>
                
                     
                 </div>
            </div>
        </div>

    )
}

export default HomeBody;