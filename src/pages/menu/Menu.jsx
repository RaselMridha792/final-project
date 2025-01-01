import SharedMenuCover from "../../components/common/SharedMenuCover";
import menuBanner from "../../assets/menu/banner3.jpg";
import desertBanner from "../../assets/menu/dessert-bg.jpeg";
import pizzaBanner from "../../assets/menu/pizza-bg.jpg";
import saladBanner from "../../assets/menu/salad-bg.jpg";
import soupBanner from "../../assets/menu/soup-bg.jpg";
import SharedTitle from "../../components/common/SharedTitle";
import SharedMenuCards from "../../components/common/SharedMenuCards";
import { useMenu } from "../../components/common/useMenu";

const Menu = () => {
  const [menuitems] = useMenu();
  const menu = menuitems.filter((item) => item.category === "offered");
  const desert = menuitems.filter((item) => item.category === "dessert");
  const pizza = menuitems.filter((item) => item.category === "pizza");
  const salads = menuitems.filter((item) => item.category === "salad");
  const soups = menuitems.filter((item) => item.category === "soup");
  return (
    <>
      <section className="font-Inter">
        <SharedMenuCover
          menuBg={menuBanner}
          heading={"Our Menu"}
          subHeading={"would you like to try a dish?"}
        ></SharedMenuCover>
        <section className="max-w-screen-2xl mx-auto px-5">
          <div className="my-20">
            <SharedTitle
              heading={"Don't miss"}
              subHeading={"todays offer"}
            ></SharedTitle>
            <SharedMenuCards menu={menu}></SharedMenuCards>
          </div>
        </section>
        <SharedMenuCover
          menuBg={desertBanner}
          heading={"DESERTS"}
          subHeading={
            "From creamy cheesecakes to warm, gooey brownies, our desserts are crafted to make every moment a celebration of sweetness. Indulge in a world of flavors designed to satisfy your heart and soul."
          }
        ></SharedMenuCover>
        <section className="max-w-screen-2xl mx-auto px-5">
          <div className="my-20">
            <SharedTitle
              heading={"Don't miss"}
              subHeading={"todays offer"}
            ></SharedTitle>
            <SharedMenuCards menu={desert}></SharedMenuCards>
          </div>
        </section>
        <SharedMenuCover
          menuBg={pizzaBanner}
          heading={"PIZZA"}
          subHeading={
            "Dive into the ultimate pizza experience – handcrafted crusts, rich sauces, and toppings that redefine deliciousness. Every bite is a journey to flavor paradise!"
          }
        ></SharedMenuCover>
        <section className="max-w-screen-2xl mx-auto px-5">
          <div className="my-20">
            <SharedTitle
              heading={"Don't miss"}
              subHeading={"todays offer"}
            ></SharedTitle>
            <SharedMenuCards menu={pizza}></SharedMenuCards>
          </div>
        </section>
        <SharedMenuCover
          menuBg={saladBanner}
          heading={"SALADS"}
          subHeading={
            "Rediscover the joy of eating fresh with our vibrant salads, crafted from the finest ingredients. Each bowl is a symphony of crunch, flavor, and nourishment."
          }
        ></SharedMenuCover>
        <section className="max-w-screen-2xl mx-auto px-5">
          <div className="my-20">
            <SharedTitle
              heading={"Don't miss"}
              subHeading={"todays offer"}
            ></SharedTitle>
            <SharedMenuCards menu={salads}></SharedMenuCards>
          </div>
        </section>
        <SharedMenuCover
          menuBg={soupBanner}
          heading={"SOUPS"}
          subHeading={
            "Rediscover the joy of eating fresh with our vibrant salads, crafted from the finest ingredients. Each bowl is a symphony of crunch, flavor, and nourishment."
          }
        ></SharedMenuCover>
        <section className="max-w-screen-2xl mx-auto px-5">
          <div className="my-20">
            <SharedTitle
              heading={"Don't miss"}
              subHeading={"todays offer"}
            ></SharedTitle>
            <SharedMenuCards menu={soups}></SharedMenuCards>
          </div>
        </section>
      </section>
    </>
  );
};

export default Menu;
