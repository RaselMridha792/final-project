import SharedMenuCover from "../../components/common/SharedMenuCover";
import banner2 from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useMenu } from "../../components/common/useMenu";
import ShopCards from "./ShopCards";

const OurShop = () => {
  const [menuItems] = useMenu();
  const salad = menuItems.filter((item) => item.category === "salad");
  const desert = menuItems.filter((item) => item.category === "dessert");
  const pizza = menuItems.filter((item) => item.category === "pizza");
  const soups = menuItems.filter((item) => item.category === "soup");
  return (
    <>
      <SharedMenuCover
        menuBg={banner2}
        heading={"Our Shop"}
        subHeading={"would you like to try a dish?"}
      ></SharedMenuCover>
      <section className="max-w-screen-2xl mx-auto px-5">
        <h1 className="text-4xl font-Cinzel pt-10 text-center border-b-2 pb-5 ">ORDER NOW</h1>
        <div className="my-20">
          <Tabs>
            <TabList>
              <Tab>Salads</Tab>
              <Tab>Desert</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soups</Tab>
            </TabList>

            <TabPanel>
              <ShopCards menues={salad}></ShopCards>
            </TabPanel>
            <TabPanel>
              <ShopCards menues={desert}></ShopCards>
            </TabPanel>
            <TabPanel>
              <ShopCards menues={pizza}></ShopCards>
            </TabPanel>
            <TabPanel>
              <ShopCards menues={soups}></ShopCards>
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default OurShop;
