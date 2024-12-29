import SharedTitle from "../../components/common/SharedTitle";
import slide5 from "../../assets/home/slide5.jpg";

const ChefRecommendation = () => {
  return (
    <>
      <section>
        <SharedTitle
          heading={"should try"}
          subHeading={"CHEF RECOMMENDS"}
        ></SharedTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="card rounded-none bg-stone-100 border">
            <figure className="">
              <img
                src={slide5}
                alt="items"
                className="w-full h-56 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div>
                <button className="btn text-yellow-600 border-b-4 border-yellow-600 hover:bg-gray-900 hover:border-none">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="card  rounded-none bg-stone-100 border">
            <figure className="">
              <img
                src={slide5}
                alt="items"
                className="w-full h-56 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div>
                <button className="btn text-yellow-600 border-b-4 border-yellow-600 hover:bg-gray-900 hover:border-none">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="card rounded-none bg-stone-100 border">
            <figure className="">
              <img
                src={slide5}
                alt="items"
                className="w-full h-56 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div>
                <button className="btn text-yellow-600 border-b-4 border-yellow-600 hover:bg-gray-900 hover:border-none">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChefRecommendation;
