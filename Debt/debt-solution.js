function debt(arr) {
  if(!Array.isArray(arr) || arr.length === 0) return false;

  const result = [];
  for(let debt of arr) {
      let canceled = 1;
      let days = 0;
      for(days = 0; canceled <= debt; days++) canceled *= 2;
      result.push(days);
  }
  return result;
}
