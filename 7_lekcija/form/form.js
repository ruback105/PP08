const form = document.querySelector("form");
const inputFields = document.querySelectorAll("input");

const validation = {
  username: {
    required: {
      value: true,
      errorMessage: "Username is required",
    },
    minLength: {
      value: 8,
      errorMessage: "Username length should be between 8 and 16",
    },
    maxLength: {
      value: 16,
      errorMessage: "Username length should be between 8 and 16",
    },
  },
  password: {
    required: true,
    minLength: 6,
    maxLength: 14,
    pattern: {
      regex: "^[A-Za-z0-9]+$",
      errorMessage: "Password should contain only letters and numbers",
    },
    errorMessage: "Password length should be between 8 and 16",
  },
  age: {},
};

Array.from(inputFields).forEach((input) => {
  input.addEventListener("input", (ev) => {
    const targetElement = ev.target;

    const errorElement = targetElement.parentElement.querySelector(".error");

    if (errorElement) {
      errorElement.remove();
    }
  });
});

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  Array.from(inputFields).forEach((input) => {
    const { value, name } = input;

    const hasError = Boolean(input.parentElement.querySelector(".error"));

    if (hasError) {
      return;
    }

    switch (name) {
      case "username":
        if (value.length < 8 || value.length > 16) {
          const errorElement = document.createElement("p");
          errorElement.textContent =
            "Username length should be between 8 and 16";
          errorElement.classList.add("error");

          input.parentElement.appendChild(errorElement);
        }
        break;
      case "password":
        // console.log("password", value);
        break;
      case "age":
        // console.log("age", value);
        break;
      default:
      // console.log("default");
    }

    //
  });
});
