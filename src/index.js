export default (delay) => {
  return new Promise((resolve) => {
    if (!delay) {
      resolve();
      return;
    }
    
    setTimeout(resolve, delay);
  });
}
