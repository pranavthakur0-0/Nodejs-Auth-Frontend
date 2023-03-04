import '../scss/resetpage.scss'
import "../scss/register.scss";
import axios from 'axios';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function ResetPage()
{
  const [password, setpassword]= useState('');
  const {id} = useParams();
  const {token} = useParams();
  
  const handlesSubmit = async(e)=>
  {
    e.preventDefault();
    try{
      const res = await axios.post(`http://localhost:4000/reset_password`, { password},
      {headers : { 
        'id': `${id}` ,
      'auth': `${token}`}} );
        if(res.status === 200){
          genrateerror(res.data.message);
        }
    }catch (error){
      if(error.response.status === 400){
        genrateerror(error.response.data.message);
      }
    }
  }

  const genrateerror = (err)=> toast.error(err, {
    position : "bottom-right",
  })
    return (<>
            <div className="main-register">
              <form onSubmit={e=>handlesSubmit(e)} className="form-container">
                <div className="one">
                  <div className="greetings">Reset  Password </div>
                  <div className="input">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={e=> setpassword(e.target.value)}
                    />
                  </div>
                  <div className="sign">
                    <button  type="submit"  className="sign-in">Reset</button>
                    </div>   
                </div>
                <div className="two"></div>
              </form>
            </div>
            <ToastContainer />
    </>)
}