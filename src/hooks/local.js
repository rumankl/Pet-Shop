
export const setUserToLocal = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
}


export const getUserFromLocal = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null
}


export const clearUser = () => {
  localStorage.clear();
}