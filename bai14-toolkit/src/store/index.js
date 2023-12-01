import { createSlice, configureStore } from "@reduxjs/toolkit"

/* 
    1. khởi tạo state: import createSlice
    2. khỏi tạo reducer
    3. khởi tạo store
    4. xuất kho mang đi dùng
*/
// 1. khởi tạo state
const productState = createSlice({
    name: "redux-toolkit",
    initialState: {
        products: [
            {
                name: "banh mi",
                price: 5000
            },
            {
                name: "banh bao",
                price: 6000
            },
            {
                name: "banh chui",
                price: 8000
            }
        ]
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push({
                name: action.payload,
                price:15000,
            })
        }
    }
})
// 1.1: xuất ra action
    export const {addProduct} = productState.actions

// 2. khởi tạo reducer
const productReducer = productState.reducer;
// 3. khởi tạo store
const store = configureStore({
    reducer: {
        productReducer,
    }
})
// 4. xuất ra cho ứng dụng
export default store;