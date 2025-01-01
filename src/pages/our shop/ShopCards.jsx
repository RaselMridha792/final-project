const ShopCards = ({ menues }) => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {menues.map((menu) => (
          <div key={menu._id} className="card rounded-none bg-stone-100 border">
            <figure className="">
              <img
                src={menu.image}
                alt="items"
                className="w-full h-56 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{menu.name}</h2>
              <p>{menu.recipe}</p>
              <div>
                <button className="btn text-yellow-600 border-b-4 border-yellow-600 hover:bg-gray-900 hover:border-none">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ShopCards;
