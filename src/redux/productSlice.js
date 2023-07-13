import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("products", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = response.json();
  return data;
});

export const getDetailProduct = createAsyncThunk(
  "productDetail",
  async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productsStatus = STATUS.SUCCESS;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.productsStatus = STATUS.FAIL;
    });
    builder.addCase(getDetailProduct.pending, (state, action) => {
      state.productDetailStatus = STATUS.LOADING;
    });
    builder.addCase(getDetailProduct.fulfilled, (state, action) => {
      state.productDetailStatus = STATUS.SUCCESS;
      state.productDetail = action.payload;
    });
    builder.addCase(getDetailProduct.rejected, (state, action) => {
      state.productDetailStatus = STATUS.FAIL;
    });
  },
});

export default productSlice.reducer;
