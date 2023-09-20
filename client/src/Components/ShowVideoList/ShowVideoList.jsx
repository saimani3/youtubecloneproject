import React from 'react'
import vid from '../../Components/Video/vid.mp4';
import ShowVideo from '../ShowVideo/ShowVideo';
import { useSelector } from 'react-redux';
function ShowVideoList({videoId}) {
  const vids = useSelector(s=>s.videoReducer)
  console.log(vids)
    // const vids=[
    //     {
    //       _id:1,
    //       video_src: vid,
    //       Chanel:"45t745b48g57gh54",
    //       title : "video 1",
    //       Uploder:"abc",
    //       description:"description of video 1"
    //     },
    //     {
    //       _id:2,
    //       video_src: vid,
    //       Chanel:"c2dfgrf",
    //       title : "video 2",
    //       description:"description of video 2"
    //     },
    //     {
    //       _id:3,
    //       video_src: vid,
    //       Chanel:"c3dgrth",
    //       title : "video 3",
    //       description:"description of video 3"
    //     },
    //     {
    //       _id:4,
    //       video_src: vid,
    //       Chanel:"c3dgrth",
    //       title : "video 4",
    //       description:"description of video 4"
    //     },
    //   ]
  return (
    <div className='container_ShowVideoGrid'>
        {
            vids?.data?.filter(q=>q._id === videoId).map(vi=>
                {
                    return(
                        <div key={vi._id} className="video_box_app">
                          <ShowVideo vid={vi}/>
                          
                        </div>
                    )
                })
        }
    </div>
  )
}

export default ShowVideoList