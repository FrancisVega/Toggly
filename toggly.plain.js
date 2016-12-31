/* global document */

(function () {
  // Constants
  const data = {
    block: 'data-toggly',
    pane: 'data-tg-pane',
    active: 'data-tg-active',
    id: 'data-tg-id',
  };

  // Query Toggly components
  const togglyComp = document.querySelectorAll(`[${data.block}]`);

  for (let i = 0; i < togglyComp.length; i += 1) {
    // Togglys
    const eachToggly = togglyComp[i];
    const target = eachToggly.getAttribute(`${data.block}`);
    const tabs = eachToggly.querySelectorAll(`[${data.id}]`);

    // Contents
    const content = document.querySelectorAll(`[${data.pane}="${target}"]`)[0];
    const contentTargets = content.querySelectorAll(`[${data.id}]`);

    // Each Toggly tab
    for (let j = 0; j < tabs.length; j += 1) {
      // Igualamos los data-tg-active del contenedor con los del componente Toggly
      contentTargets[j].setAttribute(`${data.active}`, tabs[j].getAttribute(`${data.active}`));
      tabs[j].onclick = function () {
        const tabId = this.getAttribute(`${data.id}`);

        // Gestionamos data-tg-active del propio elemento toggly
        const togglyActive = eachToggly.querySelectorAll(`[${data.active}="true"]`);
        for (let x = 0; x < togglyActive.length; x += 1) {
          togglyActive[x].setAttribute(`${data.active}`, 'false');
        }

        this.setAttribute(`${data.active}`, 'true');

        // Gestionamos data-tg-active del elemento target
        const contentId = content.querySelectorAll(`[${data.id}]`);
        for (let x = 0; x < contentId.length; x += 1) {
          contentId[x].setAttribute(`${data.active}`, 'false');
        }

        content.querySelector(`[${data.id}='${tabId}']`).setAttribute(`${data.active}`, 'true');
      };
    }
  }
}());
