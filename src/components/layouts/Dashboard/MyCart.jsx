import SharedTitle from "../../common/SharedTitle.jsx";
import useCart from "../../../hooks/useCart.jsx";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { axiosSecure } from "../../../hooks/useAxiosSecure.jsx";
const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((items, total) => {
    return items + total.price;
  }, 0);

  const handleDeleteCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/carts/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: `Your file has been deleted.`,
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  return (
    <>
      <section>
        <SharedTitle
          heading={"My Cart"}
          subHeading={"wanna add more?"}
        ></SharedTitle>
        <div className="bg-amber-50 p-5">
          <div className="flex justify-between items-center pb-5">
            <h1 className="text-3xl font-bold font-Cinzel">
              Total Orders: {cart.length}
            </h1>
            <h1 className="text-3xl font-bold font-Cinzel">
              Total price: ${totalPrice}
            </h1>
            <button className="btn btn-warning">Pay</button>
          </div>
          <div>
            <div className="overflow-x-auto font-Inter">
              <table className="table">
                {/* head */}
                <thead className="bg-yellow-600 text-white">
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {cart.map((cartItem, index) => (
                    <tr key={cartItem._id}>
                      <th>{index + 1}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-16 w-16">
                              <img
                                src={cartItem.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{cartItem.name}</td>
                      <td>{cartItem.price}</td>
                      <th>
                        <button
                          onClick={() => handleDeleteCart(cartItem._id)}
                          className="btn btn-ghost"
                        >
                          <FaTrashAlt className="text-xl text-red-600"></FaTrashAlt>
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyCart;
