import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.style.scss';
import {
	selectCartHidden,
	selectCartItemsCount,
} from '../../redux/cart/cart.selectors';

const Header = ({ currentUser, hidden }) => (
	<div className='header'>
		<Link to='/'>
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'>
				SHOP
			</Link>
			<Link className='option' to='/shop'>
				CONTACT
			</Link>
			{currentUser ? (
				<div className='option' onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className='option' to='/signin'>
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</div>
		{hidden ? null : <CartDropdown />}
	</div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	//destructure state, destructure currentUser off of user and hidden off of cart.
	currentUser,
	hidden,
});

export default connect(mapStateToProps)(Header);
