const validacion1 = (userData) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword = /^(?=.*[0-9]).{6,10}$/

  let errors = {};

  if (!regexEmail.test(userData.email)) {
    errors.email = "Debe ser un correo electrónico";
  }
  if (!userData.email) {
    errors.email = "Este campo esta vacio";
  }
  if (userData.email.length > 35) {
    errors.email = "El email no puede superar los 35 caracteres";
  }
  if (!regexPassword.test(userData.password)) {
    errors.password = "Se requiere un password correcto ";
  }

  return errors;
};

export default validacion1;