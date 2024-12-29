

const MenuCard = ({items}) => {
    const {name, price, recipe, image, } = items;
    return (
        <>
        <div className="flex space-y-5 gap-5">
            <img className="w-28 h-28 object-cover rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px]" src={image} alt="" />
            <div>
                <h1 className="uppercase text-lg">{name}---------------------------</h1>
                <p className="text-gray-500">{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
        </>
    );
};

export default MenuCard;