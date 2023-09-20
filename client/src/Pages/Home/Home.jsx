import React from 'react'
import './Home.css';
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar';
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid';
import vid from '../../Components/Video/vid.mp4';
import { useSelector } from 'react-redux';
function Home() {
  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q).reverse();
  // console.log(videosFile)
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
  const NavList=[
    "All",
    "Python",
    "Java",
    "C++",
    "Movies",
    "Science",
    "Animation",
    "Gaming",
    "Comedy",
    "web",
    "C",
    "DevOps",
    "study",
    "Gods",
    "Songs",
    "Science",
    "Animation",
    "Gaming",
    "Comedy"
  ]
  return (
    <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className="container2_Pages_App">
          <div className="navigation_Home">
            {
              NavList.map(m=>{
                return(
                <p key={m} className="btn_nav_home">
                  {m}
                </p>)
              })
            }
          </div>
            <ShowVideoGrid vids={vids}/>
        </div> 
        </div>
  )
}

export default Home