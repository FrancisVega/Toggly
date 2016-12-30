/* global $ */

(function () {
  const block = $('[data-toggly]');

  // Por cada componente Toggly que exista.
  block.each(function () {
    const eachToggly = this;
    const target = $(this).attr('data-toggly-target');
    const tabs = $(this).find('[data-toggly-tab]');
    const content = $(`[data-toggly-pane="${target}"]`);
    const contentTargets = $(content).find('[data-toggly-id]');

    let c = 0;
    tabs.each(function () {
      // -TO REFACTOR------------------------------------------------------------------------------
      // De primeras, ponemos el data-toggly-active del contenedor igual que el del componente
      // Toggly.
      // TODO: Hacer esto mejor :S ¿En otro bucle?
      $(contentTargets[c]).attr('data-toggly-active', $(this).attr('data-toggly-active'));
      $(this).attr('data-toggly-id', c + 1);
      // -TO REFACTOR------------------------------------------------------------------------------

      $(this).click(function () {
        const tabId = $(this).attr('data-toggly-id');
        // Gestionamos data-toggly-active del propio elemento toggly.
        $(eachToggly).find('[data-toggly-active="true"]').attr('data-toggly-active', 'false');
        $(this).attr('data-toggly-active', 'true');
        // Gestionamos data-toggly-active del elemento target.
        $(content).find('[data-toggly-id]').attr('data-toggly-active', 'false');
        $(content).find(`[data-toggly-id='${tabId}']`).attr('data-toggly-active', 'true');
      });

      // -TO REFACTOR------------------------------------------------------------------------------
      c += 1;
      // -TO REFACTOR------------------------------------------------------------------------------
    });
  });
}());
