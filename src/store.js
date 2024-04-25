import { configureStore, createSlice } from '@reduxjs/toolkit'


//createSlice -> useState 역할
//수정하는 법 reducers : {작명(state){return {name : '' , age : }}
let user = createSlice({
    name : 'user',
    initialState : 'cherry'
})

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0 , name : 'White and Black' , count : 2},
        {id : 2 , name : 'Grey Yordan' , count : 1},
        {id : 1 , name : 'Red kint' , count : 1}
    ],
    reducers : {
        addCount(state , action){
        let 번호 = state.findIndex((a)=>{ return a.id == action.payload})
        state[번호].count++
        },
        addItem(state , action){
            state.push(action.payload)
        }
    }
})

export let { addCount , addItem } = cart.actions
//export let { 함수명 다 적으면 됨 } = 작명한거.actions -> import 하는 법


export default configureStore({
    reducer: {
        user : user.reducer,
        cart : cart.reducer



    }
})