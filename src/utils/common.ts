/**
 *
 * @param cb function called afterwards
 * @param time how much time to wait before executing the callback
 * @returns promise executing a sleep and then callback
 */

// class handling commonn utility functions
class Common {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  static sleep = (cb: () => any, time = 1000) => {
    return new Promise((res) => {
      setTimeout(() => {
        res(cb());
      }, time);
    });
  };

  /**
   *
   * @param key key to search inside of storage
   * @returns return either parsed value or nothing
   */
  static getStorageValue = (key: string, getFrom: any) => {
    const item =
      getFrom === 'localStorage'
        ? localStorage.getItem(key)
        : sessionStorage.getItem(key);

    // return either JSON or normal item
    if (item) {
      try {
        return JSON.parse(item);
      } catch (e) {
        return item;
      }
    }

    return '';
  };

  /**
   *
   * @param key key to set inside of storage
   * @param value value to be stringyfied and set
   */
  static setStorageValue = (key: string, value: any, saveInto: any) => {
    if (saveInto === 'localStorage') localStorage.setItem(key, JSON.stringify(value));
    else sessionStorage.setItem(key, JSON.stringify(value));
  };

  /**
   *
   * @param cardId cardId to be extracted
   * @returns prefix of cardId, e.g. POL07000000000000000087 -> POL
   */
  static extractCardPrefix = (cardId: string) => {
    if (!cardId) return '';

    return cardId.replace(/[0-9]/g, '');
  };
}

export default Common;
