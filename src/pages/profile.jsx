import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from "axios";
import "../scss/profile.scss"
import { BsFillPersonFill, BsFillCalendarCheckFill ,BsFillBarChartFill, BsFillChatDotsFill } from "react-icons/bs";
import { SiIcons8 } from "react-icons/si";
import {AiFillSetting } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import {IoMdLogOut } from "react-icons/io";

function Profile() {
   const navigate =    useNavigate();
   const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
   useEffect(()=>
   {
      const verifyuser = async ()=>
      {
         if(!cookies.jwt)
         {
            navigate("/login");
         }
         else{
            const {data} = await axios.post("http://localhost:4000",{},{withCredentials : true});
            if(!data.status)
            {
               removeCookie("jwt");
               navigate("/login");
            }
            else{
               
            }
         }
      }
      verifyuser();
   },[cookies,navigate,removeCookie])

   const logout = ()=>
   {
      removeCookie("jwt");
      navigate("/login")
   }
    return (
     <>
        <div className="main">
            <div className="left">
               <div className="upper">
               <div className="logo">
                  <SiIcons8 />
               </div>
               <div className="wrapper">
               <BsFillPersonFill /> Profile
               </div>
               <div className="wrapper">
               <BsFillBarChartFill /> Overview
               </div>
               <div className="wrapper">
               <BsFillCalendarCheckFill /> Calender
               </div>
               <div className="wrapper">
               <RiTeamFill /> Team
               </div>
               <div className="hr" ><hr /></div>
               <div className="wrapper">
               <BsFillChatDotsFill  /> Chats
               </div>
               <div className="wrapper">
               <AiFillSetting /> Settings
               </div>
            </div>
            <button onClick={logout}><IoMdLogOut className="logout" />Logout </button>
         </div>
          

            <div className="center">
                  <h1>Overview</h1>
                  <div className="div-banner">
                  </div>
                  <h3>Actions</h3>
                  <div className="list">
                     <div className="box color"><h3>Topic</h3></div>
                     <div className="box"><h3>Topic</h3></div>
                     <div className="box"><h3>Topic</h3></div>
                     <div className="box"><h3>Topic</h3></div>
                  </div>
            </div>
            <div className="right">
               <div className="profile">
               <div className="circle">

                  </div>
                  <div className="name">Person</div>
               </div>

               <div className="create">
                  <div className="project">
                     <div className="icon">
                        +
                     </div>
                     Create <br /> Project
                  </div>
                  <div className="project task">
                     <div className="icon">
                        +
                     </div>
                     Add new <br /> Task
                  </div>
               </div>
                 <div className="member">
                  <div className="icon"></div>
                  <div className="icon"></div>
                 </div>
            </div>
        </div>
       
     </>
    );
  }
  
  export default Profile;
  