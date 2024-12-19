// localStorageService.js
const NAMESPACE = "cat_service";

const setItem = (key, value) => {
    try {
      const namespacedKey = `${NAMESPACE}_${key}`;
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(namespacedKey, serializedValue);
    } catch (error) {
      console.error("Error setting item in localStorage", error);
    }
  };

  const getItem = (key) => {
    try {
      const namespacedKey = `${NAMESPACE}_${key}`;
      const serializedValue = localStorage.getItem(namespacedKey);
      return serializedValue ? JSON.parse(serializedValue) : null;
    } catch (error) {
      console.error("Error getting item from localStorage", error);
      return null;
    }
  };

  const removeItem = (key) => {
    try {
      const namespacedKey = `${NAMESPACE}_${key}`;
      localStorage.removeItem(namespacedKey);
    } catch (error) {
      console.error("Error removing item from localStorage", error);
    }
  };

  const clear = () => {
    try {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith(`${NAMESPACE}_`)) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.error("Error clearing localStorage", error);
    }
  };

  export default {
    setItem,
    getItem,
    removeItem,
    clear,
  };
  