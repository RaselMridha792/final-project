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
      </div>
    </>
  );
};

export default MenuItems;
