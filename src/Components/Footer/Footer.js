import React from 'react';
import './Footer.css';
import FB from '../../assets/icons/fb.png';
import Instagram from '../../assets/icons/instagram.png';
import Twitter from '../../assets/icons/twitter.png';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='footermain'>
			<div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
				<div className='footerflex'>
					<div>
						<div className='footerlogo'>Saorsa Wellbeing</div>
						<div className='socialLogos'>
							<img
								src={FB}
								style={{
									width: '30px',
									marginRight: '10px',
									cursor: 'pointer',
								}}
							/>
							<img
								src={Instagram}
								style={{
									width: '30px',
									marginRight: '10px',
									cursor: 'pointer',
								}}
							/>
							<img
								src={Twitter}
								style={{
									width: '30px',
									marginRight: '10px',
									cursor: 'pointer',
								}}
							/>
						</div>
					</div>
					<div className='footersocial'>
						<p style={{ fontSize: '20px' }}>
							UseFul Links
							<hr className='hrtag' />
						</p>
						<Link to='/'>
							<div style={{ cursor: 'pointer', color: '#09386f' }}>
								Home
							</div>
						</Link>
						<Link to='/mood'>
							<div style={{ cursor: 'pointer', color: '#09386f' }}>
								Mood tracker
							</div>
						</Link>
						<Link to='/bloglanding'>
							<div style={{ cursor: 'pointer', color: '#09386f' }}>
								Blogs
							</div>
						</Link>
					</div>
					<div className='footersocial'>
						<p style={{ fontSize: '20px' }}>
							About
							<hr className='hrtag' />
						</p>
						<Link to='/about'>
							<div style={{ cursor: 'pointer', color: '#09386f' }}>
								About Us
							</div>
						</Link>
						<Link to='/privacypolicy'>
							<div style={{ cursor: 'pointer', color: '#09386f' }}>
								Privacy Policy
							</div>
						</Link>
					</div>
					<div className='footersocial'>
						<p style={{ fontSize: '20px' }}>
							Contact Us
							<hr className='hrtag' />
						</p>
						<div style={{ cursor: 'pointer', color: '#09386f' }}>
							contact@saorsa.com
						</div>
						<div style={{ cursor: 'pointer' }}>1234567890</div>
						<div style={{ cursor: 'pointer' }}>1234567890</div>
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
