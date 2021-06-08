import  './HomeFooter.css'
import Phone from './img/Phone.png';
import Camera from './img/Camera.png';
import atSymbol from './img/atSymbol.png';
import Speech from './img/Speech.png';

function HomeFooter() {
    return (
        <div className='HomeFooterCont'>
            <div className='ContactUsDiv'>
            <h1 className='ContactUs'>Contact Us</h1>
            <img className='PhoneFooter' src= { Phone } alt='PhoneFooter'/>
            <img className='Camera' src= { Camera } alt='Camera'/>
            <img className='atSymbol' src= { atSymbol } alt='atSymbol'/>
            <img className='Speech' src= { Speech } alt='Speech'/>

            <div className='FooterTopTxt'>
            <p className='PhoneFooterTxt'>0800001001</p>
            <p className='CameraFooterTxt'>jaden@missionreadyhq.com</p>
            <p className='atFooterTxt'>0800001001</p>
            </div>
            </div>
            <footer>
			<div className="MainFooterContainer">
				<div className="FooterContainer">
					<div className="FooterContent">
						<h5 className='FooterHeadings'>CARS</h5>
						<a href="https://www.turners.co.nz/Cars/how-to-buy/">How to buy</a>
						<a href="https://www.turners.co.nz/Cars/sell-your-car/"
							>Sell Your Car</a
						>
						<a href="https://www.turners.co.nz/Finance/">Finance & Insurance</a>
						<a href="https://www.turners.co.nz/Cars/Auctions/"
							>Auctions and Events</a
						>
						<a
							href="https://www.turners.co.nz/Cars/how-to-buy/Buyer-and-Seller-Fees//"
							>Buyer and Seller Fees</a
						>
						<a
							href="https://www.turners.co.nz/Login?ReturnUrl=%2fVehicle-Sale-Price-History%2f/"
							>Vehicle Sale Price History Tool</a
						>
						<a href="https://www.turners.co.nz/Cars/how-to-buy/Shipping-Costs//"
							>Shipping Costs</a
						>
					</div>

					<div className="FooterContent">
						<h5 className='FooterHeadings1'>TURNERS FINANCE</h5>
						<a href="https://www.turners.co.nz/Finance//">Finance HomePage</a>
						<a href="https://www.turners.co.nz/Finance/car--personal-finance/"
							>Car & Personal Finance</a
						>
						<a href="https://www.turners.co.nz/Finance/">Loan Calculator</a>
						<a href="https://www.turners.co.nz/Finance/car-insurance/"
							>Car Insurance</a
						>
						<a href="https://www.turners.co.nz/Cars/how-to-buy/"
							>Mechanical Breakdown Insurance</a
						>
						<a href="https://www.turners.co.nz/Finance/car-insurance/"
							>General Insurances</a
						>
						<a href="https://www.turners.co.nz/Finance/car-insurance/"
							>Trucks Finance</a
						>
						<a href="https://www.turners.co.nz/Finance/car-insurance/"
							>Fiancial Information</a
						>
					</div>

					<div className="FooterContent">
						<h5 className='FooterHeadings2'>SEARCH FOR</h5>
						<a
							href="https://www.turners.co.nz/Cars/Used-Cars-for-Sale/?sortorder=7&pagesize=24&pageno=1"
							>Cars</a
						>
						<a
							href="https://www.turners.co.nz/Trucks-Machinery/Used-Trucks-and-Machinery-for-Sale/?sortorder=0&pagesize=24&pageno=1"
							>Trucks and Machinery</a
						>
						<a
							href="https://www.turners.co.nz/Damaged-Vehicles/Damaged-Cars-for-Sale/?sortorder=0&pagesize=24&pageno=1"
							>Damaged & End of Life Cars</a
						>
						<a
							href="https://www.turners.co.nz/boats-marine/Used-Boats-for-Sale/?sortorder=0&pagesize=24&pageno=1"
							>Boats and Marine</a
						>
						<a
							href="https://www.turners.co.nz/motorcycles-scooters/?sortorder=0&pagesize=24&pageno=1"
							>Motorcycles and Scooters</a
						>
						<a
							href="https://www.turners.co.nz/General-Goods/Search/?sortorder=0&pagesize=24&pageno=1"
							>General Goods</a
						>
						<a
							href="https://www.turners.co.nz/buses-caravans/Used-Caravans-and-Motorhomes-for-Sale/?sortorder=0&pagesize=24&pageno=1"
							>Buses, Caravans & MotorHomes</a
						>
						<a href="https://www.turners.co.nz/Company/Auction-Schedule/"
							>Turners Auction Schedule</a
						>
					</div>

					<div className="FooterContent">
						<h5 className='FooterHeadings'>ABOUT US</h5>
						<a href="https://www.turners.co.nz/Company/About-Us/Overview/"
							>Overview</a
						>
						<a href="https://www.turners.co.nz/Company/Careers/turners-careers/"
							>Turners Careers</a
						>
						<a
							href="https://www.turners.co.nz/Company/Terms-and-Conditions/terms-conditions/"
							>Terms and Conditions</a
						>
						<a
							href="https://www.turners.co.nz/Company/Terms-and-Conditions/Privacy-Policy/"
							>Privacy Policy</a
						>
						<a href="https://www.turners.co.nz/Turners-Live/">Turners Live</a>
						<a href="https://www.turners.co.nz/the-good-oil/"
							>The Good Oil Blog</a
						>
						<a
							href="https://www.turners.co.nz/Company/email-alerts/email-alerts/"
							>Email Alerts</a
						>
						<a href="https://www.turners.co.nz/Company/Contact-Us/"
							>Contact Us</a
						>
					</div>
				</div>
			</div>
		</footer>
        </div>
    );
}

export default HomeFooter;