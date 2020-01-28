function calculate() {
  let a = +window.a.value, b = +window.b.value, c = +window.c.value, result = showSolutionsMessage(a, b, c), div = window.result;
  window.expression.textContent = `${a}x² + (${b})x + (${c}) = 0`;
  window.discriminant.textContent = `Дискриминант: ${result.d}`
  div.children.text.textContent = result.text;
  div.children.x1.textContent = result.x1;
  div.children.x2.textContent = result.x2;
}
