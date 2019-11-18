export const required = value => {
    if (value) return undefined;
    return "Field is required";
};

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
};

export const notANumber = (value) => {
    let check = parseInt(value, 10);
    if(!check) {
        return "Must be a number";
  }
    return undefined;
};