 import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 import axios from 'axios'

    let api="http://localhost:3000/data"
  export const getData=createAsyncThunk(
    "todos/getData",
    async function(){
    try {
      const {data}=await axios.get(api)
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }
    }
  )

 export const addData=createAsyncThunk(
  "todos/addData",
  async function(obj:any,{dispatch}){
   try {
    const {data}=await axios.post(api,obj)
    console.log(data)
    dispatch(getData())
   } catch (error) {
    console.log(error)
   }
  }
 )
export const deleteData=createAsyncThunk(
 'todos.deleteData',
 async (id:number,{dispatch})=>{
  try {
   const {data}=await axios.delete(`${api}/${id}`)
   dispatch(getData())
   console.log(data)
  } catch (error) {
   console.log(error)
  }
 }
)

export const editData=createAsyncThunk(
 'todos/editData',
 async(obj:any,{dispatch})=>{
try {
 const {data}=await axios.put(`${api}/${obj.id}`,obj)
 console.log(data)
 dispatch(getData())
} catch (error) {
 console.log(error)
}
 }
)
export const completeData=createAsyncThunk(
 'todos/completeData',
 async function(obj:any,{dispatch}){
   try {
     const {data}=await axios.put(`${api}/${obj.id}`,{
       title:obj.title,
       complete:!obj.complete
     })
     console.log(data)
     dispatch(getData())
   } catch (error) {
     
   }
 }
)
 export const todos = createSlice({
   name: "todos",
   initialState: {
    data:[],
    title:"",
    modal:false,
    text:"",
    idx:null,
    fil:"All",
    search:"",
    arr: [], 
    error: null, 
 },
   reducers:{
   
   },
   extraReducers: (builder) => {

    builder.addCase(getData.pending, (state, action) => {
     console.log(action)
     state.error;
   });
   builder.addCase(getData.rejected, (state, action) => {
    console.log(action)
     state.arr ;
   });
   builder.addCase(getData.fulfilled, (state, action) => {
     state.data = action.payload;
   });
 }
   }
 )
 export const{

 }= todos.actions
 export default todos.reducer;