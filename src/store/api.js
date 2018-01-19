import axios from "axios";

const APIBase = axios.create({
  baseURL: "/"
});

export const handleSignin = user => APIBase.post("login", user);

export const handleRegister = user => APIBase.post("register", user);

export const handleGetFeatured = n => APIBase.get(`recipes/random/${n}`);

export const handleGetRecipe = id => APIBase.get(`recipes/${id}`);
