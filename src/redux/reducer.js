import { SINGLE_PRODUCT } from "./type";

const initialState = {
	single_product: "",
};

const singleProductRed = (state = initialState, action) => {
	switch (action.type) {
		case SINGLE_PRODUCT:
			return {
				...state,
				single_product: action.payload,
			};
		default:
			return state;
	}
};
export default singleProductRed;
