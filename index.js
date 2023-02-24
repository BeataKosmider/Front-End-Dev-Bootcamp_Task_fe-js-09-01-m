// tutaj Twoj kod :)
"use strict";
// nie zmieniaj kodu funkcji!
const errorOnlyWithStrictMode = () => {
  try {
    msg = "No error";
    return msg;
  } catch (error) {
    return "Error";
  }
};

module.exports = { errorOnlyWithStrictMode };
