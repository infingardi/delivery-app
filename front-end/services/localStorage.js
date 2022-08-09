const setSessionStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export default setSessionStorage;
