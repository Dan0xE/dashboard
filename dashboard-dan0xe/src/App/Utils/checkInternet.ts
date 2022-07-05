export function checkInternet() {
  //check if internet is available and return either true or false
  window.addEventListener(
    "online",
    () => {
      return true;
    },
    false
  );
  window.addEventListener(
    "offline",
    () => {
      return false;
    },
    false
  );

  if (navigator.onLine) {
    return true;
  }
  return false;
}
