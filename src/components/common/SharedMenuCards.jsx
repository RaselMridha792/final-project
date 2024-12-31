import MenuCard from "./MenuCard";

const SharedMenuCards = ({menu}) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-5">
        {menu?.map((items) => (
          <MenuCard key={items._id} items={items}></MenuCard>
        ))}
      </div>
    </>
  );
};

export default SharedMenuCards;
