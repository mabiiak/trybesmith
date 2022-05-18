const message = (item:string) => {
  const text = {
    required: `"${item}" is required`,
    format: `"${item}" must be a string`,
    length3: `"${item}" length must be at least 3 characters long`,
  };
  return text;
};

export default message;
