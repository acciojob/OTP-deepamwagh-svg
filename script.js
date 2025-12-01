//your JS code here. If required.
const inputs = document.querySelectorAll(".code");
inputs[0].focus();
inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    e.target.value = value;

    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {

    if (e.key === "Backspace") {
      input.value = "";
      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });
});
