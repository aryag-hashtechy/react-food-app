const baseUrl = "http://localhost:5000";

let apiPath = {
  signup: baseUrl + "/api/users/signup",
  signIn: baseUrl + "/api/users/signin",
  getAllFood: baseUrl + "/product/getall-food",
  getUser: baseUrl + "/api/users/get-user",
  searchItems: baseUrl + "/api/users/search-items",
  getSingleFood: baseUrl + "/product/getsingle-food/",
    updateAddress: baseUrl + "/api/address/update-address/",
    addAddress: baseUrl + "/api/address/add-address",
    getSingleFood : baseUrl + "/admin/get-single-food/"
};


export default apiPath;
