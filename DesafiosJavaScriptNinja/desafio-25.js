(function (win, doc) {
  "use strict";
  /*
  Essa semana você terá dois desafios:
  1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
  tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
  ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
  o que não ficou tão claro das aulas anteriores.
  É essencial que você entenda todo o conteúdo que foi passado até aqui,
  para que possamos prosseguir para a parte mais avançada do curso :D
  2) Estudar eventos!
  Acesse a página do MDN:
  https://developer.mozilla.org/en-US/docs/Web/Events#Categories
  Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
  desafio os experimentos legais que você conseguir desenvolver :D
  */

  const $celsius = doc.querySelector('[data-js="celsius"]');
  const $fahrenheit = doc.querySelector('[data-js="fahrenheit"]');
  const $kelvin = doc.querySelector('[data-js="kelvin"]');

  $celsius.addEventListener('input', celsiusToFahrenheitAndKelvin, false);
  $fahrenheit.addEventListener('input', fahrenheitToCelsiusAndKelvin, false);
  $kelvin.addEventListener('input', kelvinToCelsiusAndFahrenheit, false);

  function celsiusToFahrenheitAndKelvin() {
    $fahrenheit.value = $celsius.value * 9 / 5 + 32;
    $kelvin.value = parseFloat($celsius.value) + 273.15;
  }

  function fahrenheitToCelsiusAndKelvin() {
    $celsius.value = ($fahrenheit.value - 32) * 5 / 9;
    $kelvin.value = ($fahrenheit.value - 32) * 5 / 9 + 273.15;
  }

  function kelvinToCelsiusAndFahrenheit() {
    $celsius.value = parseFloat($kelvin.value) - 273.15;
    $fahrenheit.value = ($kelvin.value - 273.15) * 9 / 5 + 32;
  }

})(window, document);
