let disable = false;

function RLog(...args) {
  if (args.length > 1) {
    for (let v of args) {
      RLog(v);
    }
    return RLog;
  }

  disable || console.log(...args);

  return RLog;
}

function disableRLog() {
  disable = true;
}

function enableRLog() {
  disable = false;
}

export { disableRLog, enableRLog };

export default RLog;
