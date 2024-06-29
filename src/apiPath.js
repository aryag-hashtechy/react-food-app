const baseUrl = "http://localhost:5000";

let apiPath = {
    signup: baseUrl + "/api/users/signup",
    signIn: baseUrl + "/api/users/signin",
    getAllFood: baseUrl + "/admin/get-all-food",
    getUser: baseUrl + "/api/users/get-user",
    searchItems: baseUrl + "/api/users/search-items",
    updateAddress: baseUrl + "/api/address/update-address/",
    addAddress: baseUrl + "/api/address/add-address",
}

export default apiPath;