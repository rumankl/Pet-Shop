
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

//////carts ///////////////////

export const setCartsToLocal = (carts) => {
  localStorage.setItem('carts', JSON.stringify(carts));
}


export const getCartsFromLocal = () => {
  const carts = localStorage.getItem('carts');
  return carts ? JSON.parse(carts) : [];
}


export const clearCartsFromLocal = () => {
  localStorage.removeItem('carts');
}


////foodCart----//////////////////

export const setFoodCartsToLocal = (foodcarts) => {
  localStorage.setItem('foodcarts', JSON.stringify(foodcarts));
}


export const getFoodCartsFromLocal = () => {
  const foodcarts = localStorage.getItem('foodcarts');
  return foodcarts ? JSON.parse(foodcarts) : [];
}


export const clearFoodCartsFromLocal = () => {
  localStorage.removeItem('foodcarts');
}

