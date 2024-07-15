const baseUrl = "http://localhost:5000";

let apiPath = {
  signup: baseUrl + "/api/users/signup",
  signIn: baseUrl + "/api/users/signin",
  getAllFood: baseUrl + "/api/product/getall-food",
  getUser: baseUrl + "/api/users/get-user",
  searchItems: baseUrl + "/api/users/search-items",
  getSingleFood: baseUrl + "/product/getsingle-food",
  updateAddress: baseUrl + "/api/address/update-address/",
  addAddress: baseUrl + "/api/address/add-address/",
  getsingleaddress: baseUrl + "/api/address/get-single-address",
  deleteAddress: baseUrl + "/api/address/delete-address/",
  deleteCart: baseUrl + "/api/cart/delete-cart",
  getCart: baseUrl + "/api/cart/get-cart",
  updateCart: baseUrl + "/api/cart/update-cart",
  addCart: baseUrl + "/api/cart/add-cart",
};

export default apiPath;
