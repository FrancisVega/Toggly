/* global $ */

(function () {
  const data = {
    block: 'data-toggly',
    target: 'data-toggly-target',
    tab: 'data-toggly-tab',
    pane: 'data-toggly-pane',
    active: 'data-toggly-active',
    id: 'data-toggly-id',
  };

  const block = $(`[${data.block}]`);

  // Por cada componente Toggly que exista.
  block.each(function () {
    const eachToggly = this;
    const target = $(this).attr(`${data.target}`);
    const tabs = $(this).find(`[${data.tab}]`);
    const content = $(`[${data.pane}="${target}"]`);
    const contentTargets = $(content).find(`[${data.id}]`);

    tabs.each(function (idx) {
      // Igualamos los data-toggly-active del contenedor con los del componente Toggly
      $(contentTargets[idx]).attr(`${data.active}`, $(tabs[idx]).attr(`${data.active}`));
      $(this).click(function () {
        const tabId = $(this).attr(`${data.id}`);
        // Gestionamos data-toggly-active del propio elemento toggly.
        $(eachToggly).find(`[${data.active}="true"]`).attr(`${data.active}`, 'false');
        $(this).attr(`${data.active}`, 'true');
        // Gestionamos data-toggly-active del elemento target.
        $(content).find(`[${data.id}]`).attr(`${data.active}`, 'false');
        $(content).find(`[${data.id}='${tabId}']`).attr(`${data.active}`, 'true');
      });
    });
  });
}());