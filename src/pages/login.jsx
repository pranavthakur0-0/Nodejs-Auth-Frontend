import { Link, useNavigate } from "react-router-dom";
import "../scss/register.scss";
import { toast, ToastContainer } from "react-toastify";
import { useState ,} from "react";
import axios from "axios";

function Register() {
  const [value, setvalue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handelsubmit = async(e)=>
  {

    e.preventDefault();
    try{
        const {data} = await axios.post("http://localhost:4000/login", {
            ...value
        },{withCredentials : true,});
        if(data.error)
        {
            const {email} = data.error;
            console.log(email);
            if(email)
            {
                genrateerror(email);
            }
        } 
        else{
          navigate("/");
        }
    }catch(err)
    {
        genrateerror(err.message);
    }
  }

  const genrateerror = (err)=> toast.error(err, {
    position : "bottom-right",
  })
  return (
    <>
      <div className="main-register">
        <form onSubmit={e=>handelsubmit(e)} className="form-container">
          <div className="one">
            <div className="greetings">Welcome Back ...</div>
            <div className="input">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) =>
                  setvalue({ ...value, [e.target.name]: e.target.value })
                }
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) =>
                  setvalue({ ...value, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="sign">
              <button  type="submit"  className="sign-in">Login</button>
              { /*      <div className="sign-google">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="27"
                    height="20"
                    viewBox="0 0 30 30"
                  >
                    <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
                  </svg>
                </div>
                Login with Google
              </div> */} 
              </div>   
            <div className="no-acc">
              No account ?
              <Link className="link" to="/register">
               Register
              </Link>
            </div>
          </div>
          <div className="two"></div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default Register;
