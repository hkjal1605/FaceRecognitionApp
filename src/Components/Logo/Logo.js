import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import thinking from './thinking.png';

const Logo = () => {
	return (
		<div>
			<Tilt className="Tilt br3 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
			 <div className="Tilt-inner"><img alt='Logo' src={thinking} /></div>
			</Tilt>
		</div>
	)
}

export default Logo;