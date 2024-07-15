const baseUrl = "http://localhost:5000";

let apiPath = {
  signup: baseUrl + "/api/users/signup",
  signIn: baseUrl + "/api/users/signin",
  getAllFood: baseUrl + "/product/getall-food",
  getUser: baseUrl + "/api/users/get-user",
  searchItems: baseUrl + "/api/users/search-items",
  getSingleFood: baseUrl + "/product/getsingle-food",
  updateAddress: baseUrl + "/api/address/update-address/",
  addAddress: baseUrl + "/api/address/add-address",
  deleteAddress: baseUrl + "/api/address/delete-address/",
  getSingleAddress: baseUrl + "/api/address/get-single-address",
  getAllAddress: baseUrl + "/api/address/getall-address",
  createCart: baseUrl + '/cart/add-cart',
  getCart: baseUrl + '/cart/get-cart',
  updateCart: baseUrl + '/cart/update-cart',
  deleteCart: baseUrl + '/cart/delete-cart',
  createOrder: baseUrl + '/order/create-order',
};

export default apiPath;
