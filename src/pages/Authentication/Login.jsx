import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginBg from "../../assets/others/authentication.png";
import LoginBg1 from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { userContext } from "../../context/AuthContext";


const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const {SignInWithEmailPass} = useContext(userContext);
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/';


  useEffect(() => {
    loadCaptchaEnginge(6); // Load captcha Engine with 6 charactors
  }, []);

  const captchaRef = useRef(null);

  const handleCaptchaValidate = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };


  const handleLogin = (e)=>{
    e.preventDefault()

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    SignInWithEmailPass(email, password)
    .then(result =>{
      console.log(result)
      navigate(from, {replace: true});
    })
    .catch(error=>{
      console.log(error.message)
    })
    
  }
  return (
    <>
      <section
        style={{ backgroundImage: `url(${LoginBg})` }}
        className="w-full md:py-40 py-20"
      >
        <div>
          <div
            style={{ backgroundImage: `url(${LoginBg})` }}
            className="max-w-screen-2xl mx-auto font-Inter flex  gap-10 flex-col md:flex-row-reverse items-center justify-center shadow-xl p-10"
          >
            <div className="w-full max-w-md">
              <form onSubmit={handleLogin} className="lg:w-2/3">
                <h1 className="text-4xl capitalize font-bold text-center">
                  login
                </h1>
                <label className="form-control  ">
                  <div className="label">
                    <span className="label-text">Name</span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="your name"
                    className="input input-bordered  "
                  />
                </label>
                <label className="form-control  ">
                  <div className="label">
                    <span className="label-text">Email</span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="email"
                    className="input input-bordered  "
                  />
                </label>
                <label className="form-control  ">
                  <div className="label">
                    <span className="label-text">Password</span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="password"
                    className="input input-bordered  "
                  />
                </label>
                <label className="form-control  ">
                  <div className="py-5">
                    <LoadCanvasTemplate />
                  </div>
                  <input
                    type="text"
                    name="captcha"
                    ref={captchaRef}
                    onBlur={handleCaptchaValidate}
                    required
                    placeholder="type the captcha above"
                    className="input input-bordered"
                  />
                </label>
                <div className="mt-5 w-full">
                  <button
                    disabled={disabled}
                    className="btn bg-yellow-600 text-white w-full hover:bg-yellow-500"
                  >
                    Login
                  </button>
                </div>
                <div>
                  <p className="text-yellow-600">
                    dont have any account?{" "}
                    <Link to="/sign-up"> please register</Link>
                  </p>
                </div>
              </form>
            </div>
            <div>
              <img src={LoginBg1} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
