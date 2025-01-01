import { Link } from "react-router-dom";
import LoginBg from "../../assets/others/authentication.png";
import LoginBg1 from "../../assets/others/authentication2.png";


const Login = () => {
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
              <form className="lg:w-2/3">
                <h1 className="text-4xl capitalize font-bold text-center">login</h1>
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
                  <div className="label">
                    <span className="label-text">Photo URL</span>
                  </div>
                  <input
                    type="url"
                    name="photo"
                    required
                    placeholder="photo url"
                    className="input input-bordered  "
                  />
                </label>
                <label className="form-control  ">
                  <div className="label">
                    <span className="label-text">Recaptcha</span>
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="recaptcha"
                    className="input input-bordered  "
                  />
                </label>
                <div className="mt-5 w-full">
                  <button className="btn bg-yellow-600 text-white w-full hover:bg-yellow-500">
                    Sign Up
                  </button>
                </div>
                <div>
                  <p className="text-yellow-600">
                    dont have any account? <Link to="/sign-up"> please register</Link>
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