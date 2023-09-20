import * as api from '../api'

export const fetchAllChanel=()=>async(dispatch)=>{
   try {
      const {data} = await api.fetchAllChanel();
   dispatch({type:'FETCH_CHANELS',payload:data})
   } catch (error) {
      console.log(error)
   }
   
}
export const updateChanelDate=(id,updateDate)=>async(dispatch)=>{
       try{
        const {data} = await api.updateChanelDate(id,updateDate);
        dispatch({type:'UPDATE_DATA',payload:data})
       } catch (error){
        console.log(error)
       }
    }