import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  filterProducts: [],
}

const counterSlice = createSlice({

  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload
    },

    filterByPrice: (state, action) => {
      const targetArray=state.filterProducts.length?state.filterProducts:state.product
      if (action.payload === "low-price") {
        state.product = targetArray.sort((a, b) => a?.price - b?.price);
      } else {
        state.product = targetArray.sort((a, b) => b?.price - a?.price)
      }
    },

    filterByRating: (state, action) => {
      const { rating } = action.payload;
      console.log("rating", rating);
      state.filterProducts = state.product.filter(
        // (product) => product.rating >= rating
        (product) => rating.includes(Math.floor(product.rating))
      );
    },
  },

})

export const { setProduct, filterByRating, filterByPrice, filteredProducts,selectedOption } = counterSlice.actions
export default counterSlice.reducer