import { useEffect, useState } from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import DrawerSidebar from './Components/LeftSidebar/DrawerSidebar';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import CreateEditChannel from './Pages/Channel/CreateEditChannel';
import { useDispatch } from 'react-redux';
import { fetchAllChanel } from './actions/channelUser';
import VideoUpload from './Pages/VideoUpload/VideoUpload';
import { getAllVideo } from './actions/video';
import { getAlllikedVideo } from './actions/likedVideo';
import { getAllwatchLater } from './actions/watchLater';
import { getAllHistory } from './actions/History';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchAllChanel());
    dispatch(getAllVideo());
    dispatch(getAlllikedVideo());
    dispatch(getAllwatchLater())
    dispatch(getAllHistory());
  },[dispatch]);
  const [toggleDrawerSidebar,settoggleDrawerSidebar]=useState({
    display:"none",
  })
  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display === "none"){
      settoggleDrawerSidebar({
        display:"flex"
      })
    }else{
      settoggleDrawerSidebar({
        display:"none"
      })
    }
  }
  const [VidUploadPage, setVidUploadPage] = useState(false)
  const [EditCreateChannelBtn,setEditCreateChannelBtn] = useState(false)
  return (
    <Router>
      {VidUploadPage && <VideoUpload setVidUploadPage={setVidUploadPage}/>}
      {EditCreateChannelBtn && <CreateEditChannel setEditCreateChannelBtn={setEditCreateChannelBtn} />}
      <Navbar
      setEditCreateChannelBtn={setEditCreateChannelBtn}
        toggleDrawer={toggleDrawer}
        />

        <DrawerSidebar
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}
        />
      <AllRoutes setEditCreateChannelBtn={setEditCreateChannelBtn} setVidUploadPage={setVidUploadPage}/>
    </Router>
  );
}

export default App;
