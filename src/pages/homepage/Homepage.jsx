import Banner from "../../components/layouts/Banner";
import BistroBoss from "./BistroBoss";
import Category from "./Category";
import MenuItems from "./MenuItems";

const Homepage = () => {
  return (
    <>
      <section className="font-Inter">
        <Banner></Banner>
        <div className="my-20 max-w-screen-2xl mx-auto px-5">
          <Category></Category>
          <BistroBoss></BistroBoss>
        <MenuItems></MenuItems>
        </div>
      </section>
    </>
  );
};

export default Homepage;
