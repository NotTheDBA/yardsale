import axios from "axios";

export default {
  //*************** PRODUCT *****************/
  // Gets all products
  getProducts: function () {
    return axios.get("/api/products");
  },
  // Gets the products with the given id
  getProduct: function (id) {
    return axios.get("/api/products/" + id);
  },
  // Updates the product with the given id
  updateProduct: function (id) {
    // return axios.put("/api/products/" + id, productData);
    return axios.put("/api/products/" + id);
  },
  // Deletes the product with the given id
  deleteProduct: function (id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a product to the database
  saveProduct: function (productData) {
    return axios.post("/api/products", productData);
  },

  //*************** MEMBER *************************/
  // Gets the member with the given id
  getMember: function (id) {
    return axios.get("/api/members/" + id);
  },
  // Deletes the member with the given id
  deleteMember: function (id) {
    return axios.delete("/api/members/" + id);
  },
  // Update the member with the given id
  updateMember: function (id) {
    return axios.put("/api/members/" + id);
  },
  // Saves a member to the database
  saveMember: function (memberData) {
    return axios.post("/api/members", memberData);
  },


  //*************** SESSION *************************/
  // Gets the member with the given id
  signIn: function (loginData) {
    return axios.post("/api/account/signin", loginData);
  },
  // Signs out the member with the given id
  signOut: function (logoutData) {
    console.log("API")
    return axios.post("/api/account/signout", logoutData);
  },
};