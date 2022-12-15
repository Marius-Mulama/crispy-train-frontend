const check_blank = (args) => {
    let result = args.trim();
    if (result.length < 1) {
      return false;
    } else {
      return true;
    }
  };


module.exports = {
    check_blank,
}