const inputs = document.querySelectorAll(".angle-input");
const triangleBtn = document.querySelector("#triangle-btn");
const outputElement = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sumOfAngles === 180) {
    outputElement.innerText = "This forms a triangle";
  } else {
    outputElement.innerText = "Uh Oh, It does not form a triangle";
  }
}

triangleBtn.addEventListener("click", isTriangle);
