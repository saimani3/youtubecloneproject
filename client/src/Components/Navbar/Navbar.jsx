import React ,{useEffect, useState} from 'react'
import './Navbar.css';
import logo from "./logo.ico";
import SearchBar from './SearchBar/SearchBar';
import {RiVideoAddLine} from 'react-icons/ri';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {BiUserCircle} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login'
import {gapi} from "gapi-script"
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../../actions/auth';
import Auth from '../../Pages/Auth/Auth';
function Navbar({toggleDrawer,setEditCreateChannelBtn}) {
  const [AuthBtn,setAuthBtn] = useState(false)
  // const CurrentUser = null;
  // const CurrentUser ={
  //   result:{
  //     email: "xyz@gmail.com",
  //     joinedOn: "2222-07-1ST09:57:23.489Z",
  //   },
  // };
  const CurrentUser = useSelector(state=>state.currentUserReducer)
  // console.log(CurrentUser)
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:'355612248599-kcsh7ikvv0909e1uorvqgus7cksi1pdr.apps.googleusercontent.com',
        scope:"email",
      })
    }
    gapi.load("client:auth2",start);
  },
  []);
  const dispatch = useDispatch();
  const onSuccess=(response)=>{
    const Email= response?.profileObj.email;
    console.log(Email);
    dispatch(login({email:Email}))
  }
  const onFailure=(response)=>{
    console.log("Failed",response);
  }
  return (
    <>
    <div className='Container_Navbar'>
      <div className="Burger_Logo_Navbar">
        <div className="burger" onClick={()=>toggleDrawer()}>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <Link to={'/'} className='logo_div_Navbar'>
            <img src={logo} alt="" />
            <p className='logo_title_navbar'>YouTube</p>
        </Link>
      </div>
      <SearchBar />
      <RiVideoAddLine size={22} className={'vid_bell_Navbar'}/>
      <div className='apps_Box'>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
      </div>
      <IoMdNotificationsOutline size={22} className={'vid_bell_Navbar'}/>
      <div className="Auth_cont_Navbar">
        {CurrentUser ? (
        <>
        <div className='Chanel_logo_App' onClick={()=>setAuthBtn(true)}>
          <p className='fstChar_logo_App'>
            {CurrentUser?.result.name ?(
                <>
                {CurrentUser?.result.name.charAt(0).toUpperCase()}
                </>
              ):(<>
              {CurrentUser?.result.email.charAt(0).toUpperCase()}
              </>)}
          </p>
        </div>
        </>
        ):(
        <>
        <GoogleLogin
         clientId='355612248599-kcsh7ikvv0909e1uorvqgus7cksi1pdr.apps.googleusercontent.com'
        onSuccess={onSuccess}
        onFailure={onFailure}
        render={(renderProps)=>
          (<p className="Auth_Btn" onClick={renderProps.onClick}>
          <BiUserCircle  size={22}/>
          <b>Sign in</b>
        </p>)
        }
        />
        </>
  )}
      </div>
    </div>
    {
      AuthBtn  &&
      <Auth
      setEditCreateChannelBtn={setEditCreateChannelBtn}
      setAuthBtn={setAuthBtn}
      User={CurrentUser}/>
    }
    </>
  )
}

export default Navbar