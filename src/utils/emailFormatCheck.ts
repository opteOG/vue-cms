const emailFormatCheck = (value: string) => {
  const check = /^([\w-])+@([\w-])+\.([\w-]){2,}/;
  return check.test(value);
};

export default emailFormatCheck;
