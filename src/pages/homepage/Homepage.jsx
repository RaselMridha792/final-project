import Banner from "../../components/layouts/Banner";
import BistroBoss from "./BistroBoss";
import Category from "./Category";
import ChefRecommendation from "./ChefRecommendation";
import MenuItems from "./MenuItems";
import SpecialMenu from "./SpecialMenu";
import Testimonial from "./Testimonial";


const Homepage = () => {
  return (
    <>
      <section className="font-Inter">
        <Banner></Banner>
        <div className="my-20 max-w-screen-2xl mx-auto px-5">
          <Category></Category>
          <BistroBoss></BistroBoss>
        <MenuItems></MenuItems>


        {/* call us section  */}
        <div className="my-20 bg-gray-900 md:py-20 py-10 text-center">
          <h1 className="font-Cinzel md:text-4xl text-2xl text-white">Call Us: +8801645072790</h1>
        </div>

        {/* cheif recommendation  */}
        <ChefRecommendation></ChefRecommendation>
        <SpecialMenu></SpecialMenu>
        <Testimonial></Testimonial>
        </div>
      </section>
    </>
  );
};

export default Homepage;
