import featured from "../../assets/home/featured.jpg";
import SharedTitle from "../../components/common/SharedTitle";
const SpecialMenu = () => {
  return (
    <>
      <section
        className="my-20 bg-cover bg-no-repeat bg-fixed bg-center"
        style={{ backgroundImage: `url(${featured})` }}
      >
        <div className="bg-black py-20 bg-opacity-50 text-white">
          <SharedTitle
            heading={"check it out"}
            subHeading={"from our menu"}
          ></SharedTitle>
          <div className="my-10 flex items-center justify-center gap-5 flex-col md:flex-row md:w-3/4 px-5 mx-auto">
            <img className="lg:w-2/4 md:w-1/3" src={featured} alt="" />
            <div>
              <h1 className="text-xl">march 20, 2029</h1>
              <p className="text-xl">WHERE I CAN GET SOME?</p>
              <p className="text-gray-200 py-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                vero impedit quo obcaecati! Dolorem nesciunt consequatur odio
                optio omnis, saepe perferendis maiores ipsa, sequi ut eos nemo.
                Ab, blanditiis inventore quis doloribus, quas aliquam ducimus
                optio deleniti quidem tempora sint corporis iusto assumenda unde
                labore nisi, maiores repudiandae similique esse.
              </p>
              <button className="btn bg-opacity-5 border-x-0 border-t-0 border-b-2 text-white">learn more</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialMenu;
