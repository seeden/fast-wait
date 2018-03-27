import defer from 'tickedoff';

export default (delay) => {
  return new Promise((resolve) => {
    if (!delay) {
      defer(resolve);
    }
    
    setTimeout(resolve, delay);
  });
}
