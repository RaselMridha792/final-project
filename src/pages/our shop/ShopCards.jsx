import { useContext } from "react";
import { userContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const ShopCards = ({ menues }) => {
  const {user} = useContext(userContext)
  const navigate = useNavigate()
  const location = useLocation()
  const axiosSecure = useAxiosSecure()
  const [, refetch] = useCart()

  const handleAddToCart = (item) =>{
    if(user && user.email){
      const userEmail = user.email;
      const itemId = item._id
      const name = item.name
      const price = item.price

      const cartItem = {
        userEmail, itemId, name, price
      }

      axiosSecure.post('/carts', cartItem)
      .then(res =>{
        const status = res.data.acknowledged;
        refetch()
        if(status){
          Swal.fire({
            title: "Successfully add to cart",
            icon: "success",
            draggable: true
          });
        }
      })
      .catch(error =>{
        console.log(error.message)
      })
    }else{
      Swal.fire({
        title: "you are not logged in",
        text: "Do you want to login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state:{from: location} })
        }
      });
    }
  }
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
                <button onClick={()=> handleAddToCart(menu)} className="btn text-yellow-600 border-b-4 border-yellow-600 hover:bg-gray-900 hover:border-none">
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
