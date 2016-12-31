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

  for (let i = 0; i < togglyComp.length; i += i) {
    const eachToggly = togglyComp[i];
    const target = togglyComp[i].getAttribute(`${data.block}`);
    const tabs = togglyComp[i].querySelectorAll(`[${data.id}]`);
    const content = document.querySelectorAll(`[${data.pane}="${target}"]`)[0];
    const contentTargets = content.querySelectorAll(`[${data.id}]`);

    for (let j = 0; j < tabs.length; j += 1) {
      contentTargets[j].setAttribute(`${data.active}`, tabs[j].getAttribute(`${data.active}`));
      tabs[j].onclick = function () {
        const tabId = this.getAttribute(`${data.id}`);

        // Gestionamos data-toggly-active del propio elemento toggly
        const zeta = eachToggly.querySelectorAll(`[${data.active}="true"]`);

        for (let x = 0; x < zeta.length; x += 1) {
          zeta[x].setAttribute(`${data.active}`, 'false');
        }
        this.setAttribute(`${data.active}`, 'true');

        // Gestionamos data-toggly-active del elemento target
        const beta = content.querySelectorAll(`[${data.id}]`);
        for (let x = 0; x < beta.length; x += 1) {
          beta[x].setAttribute(`${data.active}`, 'false');
        }

        const alpha = content.querySelectorAll(`[${data.id}='${tabId}']`);
        for (let x = 0; x < alpha.length; x += 1) {
          alpha[x].setAttribute(`${data.active}`, 'true');
        }
      };
    }
  }
}());
