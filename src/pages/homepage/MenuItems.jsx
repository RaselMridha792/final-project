import { useEffect, useState } from "react";
import SharedTitle from "../../components/common/SharedTitle";
import MenuCard from "../../components/common/MenuCard";

const MenuItems = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  console.log(menu);
  return (
    <>
      <div className="my-20">
        <SharedTitle
          heading={"check it out"}
          subHeading={"From Our menu"}
        ></SharedTitle>
        <div className="grid md:grid-cols-2 gap-5">
          {menu?.map((items) => (
            <MenuCard key={items._id} items={items}></MenuCard>
          ))}
        </div>
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
