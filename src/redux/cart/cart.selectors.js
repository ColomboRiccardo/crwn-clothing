import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce(
			(accumulatedQuantity, cartItem) =>
				accumulatedQuantity + cartItem.quantity,
			0
		)
);

//weird huh? Basically selectCartItemsCount references selectCartItems, which references selectCart, which takes the state and takes cart apart it, then selectCartItems takes cartItems from it, then selectCartItemsCount reduces it and passes it to the redux state, but is now memoized.

export const selectCartHidden = createSelector(
	[selectCart],
	cart => cart.hidden
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
	cartItems.reduce(
		(accumulatedQuantity, cartItem) =>
			accumulatedQuantity + cartItem.price * cartItem.quantity,
		0
	)
);
