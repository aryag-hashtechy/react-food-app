const baseUrl = "http://localhost:5000";

let endPoints = {
  signup: baseUrl + "/api/users/signup",
  signIn: baseUrl + "/api/users/signin",
  getAllFood: baseUrl + "/api/product/getall-food",
  updateUser: baseUrl + '/api/users/update-user',
  getUser: baseUrl + "/api/users/get-user",
  searchItems: baseUrl + "/api/users/search-items",
  getSingleFood: baseUrl + "/api/product/getsingle-food",
  updateAddress: baseUrl + "/api/address/update-address",
  addAddress: baseUrl + "/api/address/add-address",
  deleteAddress: baseUrl + "/api/address/delete-address/",
  getSingleAddress: baseUrl + "/api/address/get-single-address",
  getAllAddress: baseUrl + "/api/address/getall-address",
  createCart: baseUrl + '/api/cart/add-cart',
  getCart: baseUrl + '/api/cart/get-cart',
  updateCart: baseUrl + '/api/cart/update-cart',
  deleteCart: baseUrl + '/api/cart/delete-cart',
  createOrder: baseUrl + '/api/order/create-order',
  getWishlist: baseUrl + '/api/wishlist/get-wishlist',
  createWishlist: baseUrl + '/api/wishlist/create-wishlist',
  deleteWishlist: baseUrl + '/api/wishlist/delete-wishlist',
};

export default endPoints;
