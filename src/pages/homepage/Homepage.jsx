import Banner from "../../components/layouts/Banner";
import Category from "./Category";

const Homepage = () => {
  return (
    <>
      <section className="font-Inter">
        <Banner></Banner>
        <div className="my-20 max-w-screen-2xl mx-auto">
          <Category></Category>
        </div>
      </section>
    </>
  );
};

export default Homepage;
