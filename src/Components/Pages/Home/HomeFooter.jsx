import  './HomeFooter.css'
import Phone from './img/Phone.png';
import Camera from './img/Camera.png';
import atSymbol from './img/atSymbol.png';
import Speech from './img/Speech.png';

function HomeFooter() {
    return (
        <div className='HomeFooterCont'>
            <h1 className='ContactUs'>Contact Us</h1>
            <img className='PhoneFooter' src= { Phone } alt='PhoneFooter'/>
            <img className='Camera' src= { Camera } alt='Camera'/>
            <img className='atSymbol' src= { atSymbol } alt='atSymbol'/>
            <img className='Speech' src= { Speech } alt='Speech'/>
            <div classsName='FooterLine'/>
            <h5 className='FooterHeadings1'>CARS</h5>
            <h5 className='FooterHeadings2'>FINANCE & INSURANCE</h5>
            <h5 className='FooterHeadings3'>SEARCH FOR</h5>
            <h5 className='FooterHeadings4'>ABOUT US</h5>

        </div>
    );
}

export default HomeFooter;