import React from 'react'
import vid from '../../Components/Video/vid.mp4';
import WHL from '../../Components/WHL/WHL';
import { useSelector } from 'react-redux';
function LikedVideo() {
  const likedVideoList = useSelector(state=>state.likedVideoReducer)

  // const likedVideo=[
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
  // console.log(likedVideoList)
  return (
    <>
    <WHL page={"liked Video"} videoList={likedVideoList}/>
    </>
  )
}

export default LikedVideo