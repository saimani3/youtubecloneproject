import React from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar';
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid';
import vid from '../../Components/Video/vid.mp4';
import './YourVideo.css'
import { useSelector } from 'react-redux';
function YourVideo() {

  const CurrentUser = useSelector((state)=> state?.currentUserReducer);
  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChanel === CurrentUser?.result?._id).reverse();

  // const vids=[
  //   {
  //     _id:1,
  //     video_src: vid,
  //     Chanel:"45t745b48g57gh54",
  //     title : "video 1",
  //     Uploder:"abc",
  //     description:"description of video 1"
  //   },
  //   {
  //     _id:2,
  //     video_src: vid,
  //     Chanel:"c2dfgrf",
  //     title : "video 2",
  //     description:"description of video 2"
  //   },
  //   {
  //     _id:3,
  //     video_src: vid,
  //     Chanel:"c3dgrth",
  //     title : "video 3",
  //     description:"description of video 3"
  //   },
  //   {
  //     _id:4,
  //     video_src: vid,
  //     Chanel:"c3dgrth",
  //     title : "video 4",
  //     description:"description of video 4"
  //   },
  // ]
  return (
    <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className="container2_Pages_App">
          <div className="container_yourvideo">
            <h1>Your Video</h1>
            {
              CurrentUser ?(<>
            <ShowVideoGrid vids={vids}/>
              </>):(<>
              <h3>Plz Login to see Your uploaded video list</h3>
              </>)
            }
            </div>
        </div> 
        </div>
  )
}

export default YourVideo