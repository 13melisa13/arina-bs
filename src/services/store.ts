// import { serviceReducer  } from "./serviceSlice";
import { productReducer } from './productSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		productCart: productReducer,
		// serviceCart: productReducer,
	},
})
