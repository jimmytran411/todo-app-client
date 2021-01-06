export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const isLogin = () => {
  if (getToken()) {
    return true;
  }

  return false;
};

export const logOut = () => {
  localStorage.removeItem("token");
};
