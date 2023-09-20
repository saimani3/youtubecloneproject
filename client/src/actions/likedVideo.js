import * as api from '../api'

export const addToLikeVideo=(likedVideoDate)=>async(dispatch)=>{
    try{
        const {data} = await api.addToLikeVideo(likedVideoDate);
        dispatch({type:"POST_LIKEDVIDEO",data});
        dispatch(getAlllikedVideo())
     } catch(error){
        console.log(error);
     }
}

export const getAlllikedVideo=()=>async(dispatch)=>{
   try {
       const {data} = await api.getAlllikedVideo();
       dispatch({type:'FETCH_ALL_LIKED_VIDEOS',payload:data})
    } catch (error) {
       console.log(error)
    }
    
}

export const deletelikeVideo=(likedVideoDate)=>async(dispatch)=>{
   try {
      const {videoId,Viewer} = likedVideoDate;
      await api.deletelikeVideo(videoId,Viewer);
      dispatch(getAlllikedVideo());
   } catch (error) {
      console.log(error)
   }
 }