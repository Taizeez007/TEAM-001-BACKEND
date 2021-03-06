const validation = (check) => {
  const regForm = [
    check("email").isEmail(),
    check("password").isLength({ min: 5 }),
  ];

  const loginForm = [
    check("email").isEmail(),
    check("password").not().notEmpty(),
  ];
  return {
    regForm,
    loginForm,
  };
};

module.exports = validation;