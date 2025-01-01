import SharedTitle from "../../components/common/SharedTitle";
import { useMenu } from "../../components/common/useMenu";
import SharedMenuCards from "../../components/common/SharedMenuCards";

const MenuItems = () => {
  const [menuitems] = useMenu();
    const menu = menuitems.filter((item) => item.category === "popular");

  return (
    <>
      <div className="my-20">
        <SharedTitle
          heading={"check it out"}
          subHeading={"From Our menu"}
        ></SharedTitle>
        <SharedMenuCards menu={menu}></SharedMenuCards>
        <div className="flex items-center justify-center mt-5">
          <button className="bg-white text-black border btn border-b-4 border-black rounded-xl">
            VIEW FULL MENU
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuItems;
