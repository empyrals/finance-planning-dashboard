const Validation = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.photo) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/\S+!\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid";
  }
  return errors;
};

export default Validation;
