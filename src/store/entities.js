import * as actions from "./api";

export const createProduct = (product) => (dispatch) => {
  dispatch(
    actions.apiCallBegan({
      url: "/products",
      method: "post",
      data: product,
    })
  );
};
