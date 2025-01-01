import { Link } from "react-router-dom";
import MenuCard from "./MenuCard";

const SharedMenuCards = ({ menu }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-5">
        {menu?.map((items) => (
          <MenuCard key={items._id} items={items}></MenuCard>
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        <Link
          to={`/our-shop`}
          className="bg-white text-black border btn border-b-4 border-black rounded-xl"
        >
          ORDER YOUR FAVORITE FOODS
        </Link>
      </div>
    </>
  );
};

export default SharedMenuCards;
