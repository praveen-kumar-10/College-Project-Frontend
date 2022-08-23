/** @format */

const useDebounce = (callback, timeout) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, timeout);
  };
};

export default useDebounce;
