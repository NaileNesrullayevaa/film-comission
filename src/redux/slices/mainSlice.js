



import { createSlice } from "@reduxjs/toolkit";
import getFile from "../getFile";
import getGallery from "../getGallery";
import getContact from "../getContact";
import getCountries from "../getCountries";

const initialState = {
  file: {},
  gallery:{},
  contact:{},
  countries:[]
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setFile(state, {payload}) {
      state.file = {payload};
    },
    setGallery(state,{payload}){
        state.gallery={payload}
    },
    setContact(state,{payload}){
        state.contact={payload}
    },
    setCountries(state,{payload}){
        state.countries=payload
    }
  }
});

export const getFileAsync = () => async (dispatch) => {
  const res = await getFile();
  dispatch(setFile(res.data));
};
export const getGalleryAsync=()=>async(dispatch)=>{
    const res=await getGallery()
    console.log(res.data)
    dispatch(setGallery(res.data))
};
export const getContactAsync=()=>async(dispatch)=>{
    const res=await getContact()
    console.log(res)
    dispatch(setContact(res.data))
};
export const getCountriesAsync=()=>async(dispatch)=>{
    const res=await getCountries()

    dispatch(setCountries(res.data))
}
export const { setFile,setGallery, setContact,setCountries} = mainSlice.actions;
export default mainSlice.reducer;
