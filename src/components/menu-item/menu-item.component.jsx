import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<div
		className={`${size} menu-item`}
		onClick={() => history.push(`${match.url}${linkUrl}`)}
	>
		<div //this gives it 2 classes, one is size if the prop has size, the other menu item
			className='background-image'
			style={{
				backgroundImage: `url(${imageUrl})`, //we need to use template strings here
			}}
		/>
		<div className='content'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<span className='subtitle'>SHOP NOW</span>
		</div>
	</div>
);
export default withRouter(MenuItem);
