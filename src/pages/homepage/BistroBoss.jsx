import cheifService from "../../assets/home/chef-service.jpg";

const BistroBoss = () => {
  return (
    <>
      <div
        className="my-40 py-20 bg-no-repeat bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${cheifService})`,
        }}
      >
        <div className="lg:w-2/3 md:w-3/4 mx-auto text-center bg-white md:py-20 py-10 shadow-lg">
          <h1 className="text-center uppercase md:text-3xl text-xl">bistro boss</h1>
          <p className="lg:w-2/3 mx-auto text-gray-500 pt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nisi
            velit deleniti vel magnam eius debitis eveniet quaerat nobis! Quis,
            adipisci quos? Impedit ipsam enim deserunt aut voluptatibus suscipit
            vel.
            </p>
        </div>
      </div>
    </>
  );
};

export default BistroBoss;
