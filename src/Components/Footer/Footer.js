import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div className="footermain">
			<div style={{display:'flex',width:"100%",justifyContent:"center"}}>
			<div className="footerflex">
				<div className="footerlogo">Saorsa Wellbeing</div>
				<div className="footersocial">
                    <p style={{fontSize:"20px", textAlign:"center"}}>Follow us on Social Media</p>
					<div>Twitter</div>
					<div>Instagram</div>
					<div>Facebook</div>
				</div>
				<div className="footercontact">
                    <p style={{fontSize:"20px", textAlign:"center", width:"100%"}}>Contact us</p>
                    <div>1234567890</div>
                    <div>1234567890</div>
                </div>
			</div>
			</div>
			<div style={{textAlign:"center"}}>Designed and developed by Kaizen Globe</div>
			<div style={{textAlign:"center", paddingBottom:"10px"}}>Copyright</div>
		</div>
	);
};

export default Footer;
