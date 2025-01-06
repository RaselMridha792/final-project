import { Link, useNavigate } from "react-router-dom";
import LoginBg from "../../assets/others/authentication.png";
import LoginBg1 from "../../assets/others/authentication2.png";
import { useContext, useEffect, useRef, useState } from "react";
import { userContext } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { FaArrowLeft } from "react-icons/fa";

const SignUp = () => {
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const { SignUpWithEmail, updateUserProfile } = useContext(userContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    SignUpWithEmail(data.email, data.password)
      .then((result) => {
        updateUserProfile(data.name, data.photo)
          .then(() => {
            console.log("profile created successful");
          })
          .catch((error) => {
            console.log(error.message);
          });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    loadCaptchaEnginge(6); // Load captcha Engine with 6 charactors
  }, []);
  const navigate = useNavigate();
  const captchaRef = useRef(null);

  const handleCaptchaValidate = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
      setErrorMessage("");
    } else {
      setDisabled(true);
      setErrorMessage("invalid captcha");
    }
  };
  return (
    <>
      <section
        style={{ backgroundImage: `url(${LoginBg})` }}
        className="w-full md:py-40 py-20"
      >
        <div>
          <div
            style={{ backgroundImage: `url(${LoginBg})` }}
            className="max-w-screen-2xl mx-auto font-Inter flex  gap-10 flex-col md:flex-row items-center justify-center shadow-xl p-10"
          >
            <div className="w-full max-w-md">
              <form onSubmit={handleSubmit(onSubmit)} className="lg:w-2/3">
                <h1 className="text-4xl capitalize font-bold text-center flex items-center gap-5">
                  <Link to="/" className="hover:text-orange-500">
                    <FaArrowLeft />
                  </Link>{" "}
                  Sign Up
                </h1>
                <label className="form-control  ">
                  <div className="label">
                    <span className="label-text">Name</span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                    placeholder="your name"
                    className="input input-bordered  "
                  />
                  {errors.name && <span>name is required</span>}
                </label>
                <label className="form-control  ">
                  <div className="label">
                    <span className="label-text">Email</span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered  "
                  />
                  {errors.email && <span>email is required</span>}
                </label>
                <label className="form-control  ">
                  <div className="label">
                    <span className="label-text">Password</span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/,
                        message:
                          "Password must be at least one uppercase letter, one lowercase letter, one number, one special character, and at least 8 characters long.",
                      },
                    })}
                    placeholder="password"
                    className="input input-bordered  "
                  />
                  {errors.password && <span>password is required</span>}
                  {errors.password?.type === "pattern" && (
                    <p role="alert" className="text-red-500 text-xs">
                      password must be at least uppercase, lowercase, special
                      character and number and must be greater then 6 characters
                    </p>
                  )}
                </label>
                <label className="form-control  ">
                  <div className="label">
                    <span className="label-text">Photo URL</span>
                  </div>
                  <input
                    type="url"
                    name="photo"
                    {...register("photo", { required: true })}
                    placeholder="photo url"
                    className="input input-bordered  "
                  />
                  {errors.photo && <span>photo is required</span>}
                </label>
                <label className="form-control  ">
                  <div className="py-5">
                    <LoadCanvasTemplate />
                  </div>
                  <input
                    onBlur={handleCaptchaValidate}
                    type="text"
                    name="captcha"
                    ref={captchaRef}
                    required
                    placeholder="type the captcha above"
                    className="input input-bordered"
                  />
                  <p className="text-red-500">{errorMessage}</p>
                </label>
                <div className="mt-5 w-full">
                  <input
                    type="submit"
                    value="Sign Up"
                    disabled={disabled}
                    className="btn bg-yellow-600 text-white w-full hover:bg-yellow-500"
                  />
                </div>
                <div>
                  <p className="text-yellow-600">
                    Already Register?<Link to="/login"> please Login</Link>
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

export default SignUp;
