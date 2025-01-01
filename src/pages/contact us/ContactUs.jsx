import { FaLocationDot } from "react-icons/fa6";
import contactBg from "../../assets/contact/banner.jpg";
import SharedMenuCover from "../../components/common/SharedMenuCover";
import SharedTitle from "../../components/common/SharedTitle";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoTime } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
const ContactUs = () => {
  return (
    <>
      <SharedMenuCover
        menuBg={contactBg}
        heading={"Contact Us"}
        subHeading={"We are here to help you"}
      ></SharedMenuCover>
      <section className="max-w-screen-2xl mx-auto px-5 font-Inter">
        <div className="py-10">
          <SharedTitle
            heading={"visit us"}
            subHeading={"our location"}
          ></SharedTitle>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
            <div className="border">
              <div className="text-4xl bg-yellow-600 px-5 py-3 text-white flex items-center justify-center">
                <p>
                  <BiSolidPhoneCall />
                </p>
              </div>
              <div>
                <div className="text-center bg-base-200 mx-5 mb-5 py-14">
                  <h1 className="text-xl font-bold uppercase">Phone</h1>
                  <p className="text-lg">+91 1234567890</p>
                </div>
              </div>
            </div>
            <div className="border">
              <div className="text-4xl bg-yellow-600 px-5 py-3 text-white flex items-center justify-center">
                <p>
                  <FaLocationDot />
                </p>
              </div>
              <div>
                <div className="text-center bg-base-200 mx-5 mb-5 py-14">
                  <h1 className="text-xl font-bold uppercase">address</h1>
                  <p className="text-lg">+91 1234567890</p>
                </div>
              </div>
            </div>
            <div className="border">
              <div className="text-4xl bg-yellow-600 px-5 py-3 text-white flex items-center justify-center">
                <p>
                  <IoTime />
                </p>
              </div>
              <div>
                <div className="text-center bg-base-200 mx-5 mb-5 py-10">
                  <h1 className="text-xl font-bold uppercase">working hours</h1>
                  <p className="text-lg">mon-fri: 08:00-22:00</p>
                  <p className="text-lg">sat-sun: 10:00-23:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SharedTitle
            heading={"send us a message"}
            subHeading={"contact form"}
          ></SharedTitle>

          <div className="bg-base-200 py-20 px-5">
            <form>
              <div className="flex flex-col gap-5 md:flex-row">
                <label className="form-control w-full">
                  <div className="label">Name*</div>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered w-full"
                    required
                  />
                </label>{" "}
                <label className="form-control w-full">
                  <div className="label">Email*</div>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>
              <label className="form-control w-full">
                <div className="label">phone*</div>
                <input
                  type="phone"
                  name="phone"
                  placeholder="phone"
                  className="input input-bordered w-full"
                  required
                />
              </label>
              <label>
                <div className="label">Message*</div>
                <textarea
                  className="textarea textarea-bordered w-full h-40"
                  placeholder="message"
                  name="message"
                ></textarea>
              </label>
              <div className="form-control my-5">
                <button className="btn bg-yellow-600  text-lg capitalize hover:bg-yellow-500 text-white">
                  send message <IoIosSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
