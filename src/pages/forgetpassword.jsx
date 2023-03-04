import "../scss/forgotpassword.scss"
import "../scss/profile.scss"
import axios from "axios"
import {useState } from "react"
import { toast, ToastContainer } from "react-toastify";

export default function ForgotPassword()
{
    const [email, setemail]= useState('');
    const handlesSubmit = async(e)=>
    {
      e.preventDefault();
      try{

        await axios.post("http://localhost:4000/forgot_password", {email})
        genrateerror("Link provided");
        
      }catch (error){
        genrateerror("Invalid Email")
      }
    }

    const genrateerror = (err)=> toast.error(err, {
      position : "bottom-right",
    })

    return (<>
        <div className="main-register">
              <form onSubmit={e=>handlesSubmit(e)} className="form-container">
                <div className="one">
                  <div className="greetings">Enter Email </div>
                  <div className="input">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={(e)=>setemail(e.target.value)}
                    />
                  </div>
                  <div className="sign">
                    <button  type="submit"  className="sign-in">Submit</button>
                    </div>   
                </div>
                <div className="two"></div>
              </form>
            </div>
            <ToastContainer />
          </>)
}