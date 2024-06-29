const baseUrl = "http://localhost:5000";

let apiPath = {
  signup: baseUrl + "/api/users/signup",
  signIn: baseUrl + "/api/users/signin",
  getAllFood: baseUrl + "/product/getall-food",
  getUser: baseUrl + "/api/users/get-user",
  searchItems: baseUrl + "/api/users/search-items",
  getSingleFood: baseUrl + "/product/getsingle-food/",
};

export default apiPath;
