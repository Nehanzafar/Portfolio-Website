function memoize(func: ()=>any) {
  const cache = {};
  return function (...args: any[]) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = func(...args);
    cache[key] = result;
    return result;
  };
}