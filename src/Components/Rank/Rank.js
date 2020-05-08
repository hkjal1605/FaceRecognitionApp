import React from 'react';

const Rank = ({ name, entries }) => {
	return (
		<div>
			<div className='white f3'>
				<p>
					{`Hello ${name}, Your entry count is...`}
				</p>
			</div>
			<div className='white f1'>
				{entries}
			</div>
		</div>
	)
}

export default Rank;