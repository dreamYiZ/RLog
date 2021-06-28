function RLog(...args) {

  
  if (args.length > 1) {
    for (let v of args) {
        RLog(v);
    }
    return RLog;
  }

  console.log(...args);

  return RLog;
}

export default RLog;
