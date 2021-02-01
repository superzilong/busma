import * as actions from "./api";
import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

export const vendorSlice = createSlice({
  name: "vendors",
  initialState: [],
  reducers: {
    vendorListAdded: (state, action) => {
      state = action.payload;
    },
  },
});

export const { vendorListAdded } = vendorSlice.actions;

export const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    productListAdded: (state, action) => {
      action.payload.data.map((value) => state.push(value));
    },
  },
});

export const { productListAdded } = productSlice.actions;

export default combineReducers({
  vendors: vendorSlice.reducer,
  products: productSlice.reducer,
});

export const getProductList = () => async (dispatch) => {
  await dispatch(
    actions.apiCallBegan({
      url: "/products",
      method: "get",
      data: {},
      onSuccess: productListAdded().type,
    })
  );
};

export const createProduct = (product) => async (dispatch) => {
  var response = await dispatch(
    actions.apiCallBegan({
      url: "/products",
      method: "post",
      data: product,
    })
  );
  return response;
};

export const createVendor = (vendor) => async (dispatch) => {
  console.log(vendor);
  var response = await dispatch(
    actions.apiCallBegan({
      url: "/vendors",
      method: "post",
      data: vendor,
    })
  );
  return response;
};
