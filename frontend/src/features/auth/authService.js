import axios from "axios";

const API_URL = "/api/v1";

//Register User
const register = async (userData) => {
  const config = { headers: { "Content-Type": "multipart/forn-data" } };

  const respose = await axios.post(`${API_URL}/register`, userData, config);

  if (respose.data) {
    localStorage.setItem("user", JSON.stringify(respose.data));
  }

  return respose.data;
};

//Login User

const login = async (userData) => {
  const respose = await axios.post(`${API_URL}/login`, userData);

  if (respose.data) {
    localStorage.setItem("user", JSON.stringify(respose.data));
  }

  return respose.data.user;
};

//loadUser User
const loadUser = async () => {
  const respose = await axios.get(`${API_URL}/me`);
  return respose.data.user;
};

// Logout user
const logout = async () => {
  const respose = await axios.post(`${API_URL}/logout`);
  localStorage.removeItem("user");
};

//update user
const updateUser = async (userData) => {
  const config = { headers: { "Content-Type": "multipart/forn-data" } };

  const respose = await axios.put(`${API_URL}/me/update`, userData, config);

  return respose.data;
};

//update user
const updatePassword = async (passwords) => {
  const config = { headers: { "Content-Type": "application/json" } };

  const respose = await axios.put(
    `${API_URL}/password/update`,
    passwords,
    config
  );

  return respose.data;
};

const authService = {
  register,
  login,
  logout,
  loadUser,
  updateUser,
  updatePassword,
};

export default authService;
