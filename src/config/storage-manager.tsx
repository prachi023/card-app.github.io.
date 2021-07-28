/**
   * This function sets the data to session storage per the key provided
   * @param {String} key The key to set into session storage
   * @param {Object} value The value to be set against the key in session storage
   */
export const setLocalStorage = (key: string, value: string) => {
    window.localStorage.setItem(key, value);
}

/**
* This function gets the value/data from session storage based on the key provided.
   * @param {String} key The key identifier to get data from session storage
   */
export const getLocalStorage = (key: string) => {
    return window.localStorage.getItem(key) || '';
}