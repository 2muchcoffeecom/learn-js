let leftOperandElement;
let rightOperandElement;
let operatorElement;
let expressionElement;
let submitElement;
let clearElement;
let resultElement;
let previousResultsElement;

function init() {
  leftOperandElement = document.getElementById('leftOperand');
  rightOperandElement = document.getElementById('rightOperand');
  operatorElement = document.getElementById('operator');
  expressionElement = document.getElementById('expression');
  submitElement = document.getElementById('submit');
  clearElement = document.getElementById('clear');
  resultElement = document.getElementById('result');
  previousResultsElement = document.getElementById('previousResults');

  addEvents();
  addInitValues();
}

function addInitValues () {
  onLeftOperandChange(leftOperandElement.value);
  onRightOperandChange(rightOperandElement.value);
  onOperatorChange(operatorElement.value);
}

function addEvents () {
  leftOperandElement.addEventListener('keyup', (event) => {
    onLeftOperandChange(event.target.value);
  });
  rightOperandElement.addEventListener('keyup', (event) => {
    onRightOperandChange(event.target.value);
  });
  operatorElement.addEventListener('change', (event) => {
    onOperatorChange(event.target.value);
  });
  submitElement.addEventListener('click', () => {
    disableLeftOperand();
    onSubmit();
  });
  clearElement.addEventListener('click', () => {
    enableLeftOperand();

    setExpression('');
    setLeftOperand('');
    setRightOperand('');
    setOperator(ADDITION);
    setResult('');

    previousResultsElement.innerHTML = '';

    onClear();
  });
}

function setExpression (value) {
  expressionElement.innerText = value;
}

function setLeftOperand (value) {
  leftOperandElement.value = value;
  leftOperandElement.dispatchEvent(new Event('keyup'));
}

function setRightOperand (value) {
  rightOperandElement.value = value;
  rightOperandElement.dispatchEvent(new Event('keyup'));
}

function setOperator (value) {
  operatorElement.value = value;
  operatorElement.dispatchEvent(new Event('change'));
}

function setResult (value) {
  previousResultsElement.innerHTML = `
    ${previousResultsElement.innerHTML}
    ${
    createResultHtml(
      leftOperandElement.value,
      rightOperandElement.value,
      operatorElement.value,
      value
    )
  }
  `
  setLeftOperand(value);
  setRightOperand('');
}

function disableLeftOperand () {
  leftOperandElement.setAttribute('disabled', 'disabled');
}

function enableLeftOperand () {
  leftOperandElement.removeAttribute('disabled');
}

function createResultHtml (leftOperandValue, rightOperandValue, operatorValue, resultValue) {
  const selectedOptionHtml = getSelectedOptionHtml(operatorValue);
  return `
  <div style="margin: 10px 0">
    <input disabled value="${leftOperandValue}">

    <select disabled>
      ${selectedOptionHtml}
    </select>

    <input disabled value="${rightOperandValue}">

    <button disabled>=</button>

    <span>${resultValue}</span>
  </div>
  `;
}

function getSelectedOptionHtml (operatorValue) {
  switch (operatorValue) {
    case 'ADDITION' :
      return '<option selected value="ADDITION">+</option>';
    case 'SUBTRACTION' :
      return '<option selected value="SUBTRACTION">-</option>';
    case 'MULTIPLICATION' :
      return '<option value="MULTIPLICATION">*</option>';
    case 'EXPONENTIATION' :
      return '<option value="EXPONENTIATION">xª</option>';
    case 'DIVISION' :
      return '<option value="DIVISION">/</option>';
    case 'MODULUS' :
      return '<option value="ADDITION">%</option>';
    case 'ROOT' :
      return '<option value="ADDITION">√</option>';
  }
}
