/* global $ */

(function () {
  // Constants
  const data = {
    block: 'data-toggly',
    pane: 'data-tg-pane',
    active: 'data-tg-active',
    id: 'data-tg-id',
  };

  // Query Toggly components
  const togglyComp = $(`[${data.block}]`);

  // Each Toggly component in the page
  togglyComp.each(function () {
    // Togglys
    const eachToggly = this;
    const target = $(this).attr(`${data.block}`);
    const tabs = $(this).find(`[${data.id}]`);

    // Contents
    const content = $(`[${data.pane}="${target}"]`);
    const contentTargets = $(content).find(`[${data.id}]`);

    // Each Toggly tab
    tabs.each(function (index) {
      // Igualamos los data-tg-active del contenedor con los del componente Toggly
      $(contentTargets[index]).attr(`${data.active}`, $(tabs[index]).attr(`${data.active}`));
      $(this).click(function () {
        const tabId = $(this).attr(`${data.id}`);

        // Gestionamos data-tg-active del propio elemento toggly
        $(eachToggly).find(`[${data.active}="true"]`).attr(`${data.active}`, 'false');
        $(this).attr(`${data.active}`, 'true');

        // Gestionamos data-tg-active del elemento target
        $(content).find(`[${data.id}]`).attr(`${data.active}`, 'false');
        $(content).find(`[${data.id}='${tabId}']`).attr(`${data.active}`, 'true');
      });
    });
  });
}());
