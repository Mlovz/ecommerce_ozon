import { GLOBALTYPES } from "./globalTypes";
import { ImageUpload } from "../../utils/ImageUpload";
import { getDataApi, postDataApi } from "../../utils/fetchDataApi";

export const PRODUCT_ACTIONS = {
	ADD_PRODUCT: "ADD_PRODUCT",
	LOADING_PRODUCT: "LOADING_PRODUCT",
	GET_PRODUCT: "GET_PRODUCT",
};

export const addProduct =
	({ changeProduct,size, images, auth }) =>
	async (dispatch) => {
		try {
			
			let media = [];
			
			dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
			if (images.length > 0) media = await ImageUpload(images);

			const res = await postDataApi(
				"products",
				{...changeProduct, ...changeProduct, size, images: media},
				auth.token
			);

			dispatch({
				type: PRODUCT_ACTIONS.ADD_PRODUCT,
				payload: res.data.newProduct,
			});
			dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
			
			dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });

			window.location.href = '/menu'
			
		} catch (err) {
			dispatch({
				type: GLOBALTYPES.ALERT,
				payload: { error: err.response.data.msg },
			});
		}
	};

    
export const getProducts =
	() =>
	async (dispatch) => {
		try {
			dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: true} });
			const res = await getDataApi("products");
			
			dispatch({ type: PRODUCT_ACTIONS.GET_PRODUCT, payload: res.data });

			dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: false} });
		} catch (err) {
			dispatch({
				type: GLOBALTYPES.ALERT,
				payload: { error: err.response.data.msg },
			});
		}
	};
