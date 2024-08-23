// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { BaseProduct } from './BaseProduct'
// class Product extends BaseProduct {
// 	constructor(
// 		name: string,
// 		id: number,
// 		description: string,
// 		price: number,
// 		discount: number | null = null,
// 		img: string = '',
// 		categoryId: number | null = null
// 	) {
// 		super(name, id, description, price, discount, img, categoryId)
// 	}
// }
// type TProductInCart = {
// 	product: Product
// 	count: number
// }
//
// type TProductsState = {
// 	products: Array<TProductInCart>
// }
//
// const initialState: TProductsState = {
// 	products: [],
// }
//
// const productSlice = createSlice({
// 	name: 'product',
// 	initialState,
// 	reducers: {
// 		addProduct: (state, action: PayloadAction<Product>) => {
// 			state.products.push({ product: action.payload, count: 1 })
// 		},
// 		removeProduct: (state, action: PayloadAction<number>) => {
// 			state.products = state.products.filter(
// 				(product) => product.product.getId() !== action.payload
// 			)
// 		},
// 		setCountOfProduct: (state, action: PayloadAction<TProductInCart>) => {
// 			const product = state.products.find(
// 				(product) => product.product.getId() === action.payload.product.getId()
// 			)
// 			if (product) {
// 				product.count = action.payload.count
// 			}
// 		},
// 	},
// 	selectors: {
// 		getProducts: (state: TProductsState) => state.products,
// 		getProductsCount: (state: TProductsState) => state.products.length,
// 		getTotalPrice: (state: TProductsState) => {
// 			return state.products.reduce((acc, product) => {
// 				return acc + product.product.getPrice() * product.count
// 			}, 0)
// 		},
// 	},
// })
//
// export const { addProduct, removeProduct, setCountOfProduct } =
// 	productSlice.actions
// export const { getProducts, getProductsCount, getTotalPrice } =
// 	productSlice.selectors
// export const productReducer = productSlice.reducer
