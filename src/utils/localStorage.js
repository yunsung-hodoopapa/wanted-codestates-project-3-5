const setItems = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
const getItems = key => JSON.parse(localStorage.getItem(key));

export { setItems, getItems };
