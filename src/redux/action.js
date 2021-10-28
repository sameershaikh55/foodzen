import { SINGLE_PRODUCT } from "./type";
import axios from "axios";

const singleProductFunc = (data) => {
	return {
		type: SINGLE_PRODUCT,
		payload: data,
	};
};

export const singleProductApi = () => {
	return (dispatch) => {
		axios.get("https://foodzen.org/core/falcon/recipe/100024").then((res) => {
			dispatch(singleProductFunc(res.data));
		});
	};
};
