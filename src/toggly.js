/*
 *   Toggly
 *   Script para hacer 'toggles' usando exclusivamente los atributos data-*
 *
 *   @Author: Francis Vega.
 *   @Contact: hisconer@gmail.com
 *   @Git: https://github.com/FrancisVega/Toggly
 *
 * - Instalación
 *   Añade `toggly.min.js` a tu web.
 *
 * - Estructura de los tabs
 *   <div data-toggly="toggly-funny-pane">
 *       <a data-tg-id="1" data-tg-active="true">Tab 1</a>
 *       <a data-tg-id="2" data-tg-active="false">Tab 2</a>
 *   </div>
 *
 *   En el contenedor principal se debe añadir un atributo `data-toggly` para
 *   indicarle a **Toggly** que efectivamente es un "toggly" y se iguala con el
 *   valor del contenedor al que quiera afectar.
 *   Posteriormente en cada 'tab' del componente **Toggly** se añadirá el
 *   atributo `data-tg-id`, que servirá para enlazarlo con el id del contenedor
 *   y por último `data-tg-active` que valdrá true o false y servir para saber
 *   qué tab está activo.
 *
 * - Estructura del contenedor
 *   <div data-tg-pane="toggly-funny-pane">
 *       <div data-tg-id="1">Toggly Content 1</div>
 *       <div data-tg-id="2">Toggly Content 2</div>
 *   </div>
 *
 *   El contenedor ha de tener un atributo `data-tg-pane` con el valor que se
 *   haya puesto en el componente **Toggly**, en el atributo `data-toggly`
 *   Posteriormente en cada contenedor interno donde quiera que Toggly actue se
 *   le ha de indicar un id con `data-tg-id`, este coincidirá con los ids que
 *   hayamos definido en el componente **Toggly**
 *
 * - Demo
 *   http://codepen.io/hisco/pen/vyoMdY
 */

/* global $ */

(function () {
  // Constantes
  const data = {
    toggly: 'data-toggly',
    pane: 'data-tg-pane',
    active: 'data-tg-active',
    id: 'data-tg-id',
  };

  // Query Toggly componentes
  const togglyComp = $(`[${data.toggly}]`);

  // Pasamos por cada Toggly component en la página, ya que puede haber más de
  // uno, con distinto target en data-toggly="target-name"
  togglyComp.each(function () {
    // Toggly's
    const eachToggly = this;
    const target = $(this).attr(`${data.toggly}`);
    const tabs = $(this).find(`[${data.id}]`);

    // Targets
    const targetPane = $(`[${data.pane}="${target}"]`);
    const paneContent = $(targetPane).find(`[${data.id}]`);

    // Each Toggly tab
    tabs.each(function (index) {
      // Al cargarse Toggly iguala los data-tg-active con lo que haya en Toggly
      $(paneContent[index]).attr(`${data.active}`, $(tabs[index]).attr(`${data.active}`));
      $(this).click(function (e) {
        e.preventDefault();

        // `active = false` todos los tabs (reset)
        $(eachToggly).find(`[${data.active}]`).attr(`${data.active}`, 'false');

        // `active = true` el tab pulsado
        $(this).attr(`${data.active}`, 'true');

        // `active = false` todos los elementos del target (reset)
        $(targetPane).find(`[${data.id}]`).attr(`${data.active}`, 'false');

        // Id del tab pulsado
        const tabId = $(this).attr(`${data.id}`);

        // `active = true` el target que coincida con el id del tab pulsado
        $(targetPane).find(`[${data.id}='${tabId}']`).attr(`${data.active}`, 'true');
      });
    });
  });
}());
