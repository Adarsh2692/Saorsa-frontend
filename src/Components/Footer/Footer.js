import React from 'react';
import './Footer.css';
import FB from '../../assets/icons/fb.png';
import Instagram from '../../assets/icons/instagram.png';
import Twitter from '../../assets/icons/twitter.png';

const Footer = () => {
	return (
		<div className='footermain'>
			<div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
				<div className='footerflex'>
					<div>
						<div className='footerlogo'>Saorsa Wellbeing</div>
						<div className='socialLogos'>
							<img src={FB} style={{ width: '30px', marginRight: '10px' }} />
							<img
								src={Instagram}
								style={{ width: '30px', marginRight: '10px' }}
							/>
							<img
								src={Twitter}
								style={{ width: '30px', marginRight: '10px' }}
							/>
						</div>
					</div>
					<div className='footersocial'>
						<p style={{ fontSize: '20px' }}>
							UseFul Links
							<hr className='hrtag' style={{}} />
						</p>
						<div>Home</div>
						<div>Mood Tracker</div>
						<div>Blogs</div>
					</div>
					<div className='footersocial'>
						<p style={{ fontSize: '20px' }}>
							About
							<hr className='hrtag' style={{}} />
						</p>
						<div>Twitter</div>
						<div>Instagram</div>
						<div>Facebook</div>
					</div>
					<div className='footersocial'>
						<p style={{ fontSize: '20px' }}>
							Contact Us
							<hr className='hrtag' style={{}} />
						</p>
						<div>contact@saorsa.com</div>
						<div>1234567890</div>
						<div>1234567890</div>
					</div>
				</div>
			</div>
			<div style={{ textAlign: 'center' }}>
				Designed and developed by Kaizen Globe
			</div>
			<div style={{ textAlign: 'center', paddingBottom: '10px' }}>
				Copyright
			</div>
		</div>
	);
};

export default Footer;
