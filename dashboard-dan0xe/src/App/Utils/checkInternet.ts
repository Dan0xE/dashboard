export function checkInternet() {
  try {
    fetch("https://www.google.com");
    return true;
  } catch (error) {
    return false;
  }
}
