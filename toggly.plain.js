/* global document */

(function () {
  // Constants
  const data = {
    block: 'data-toggly',
    pane: 'data-tg-pane',
    active: 'data-tg-active',
    id: 'data-tg-id',
  };

  // Set attribute to el o els
  const setAttr = (el, attr, attrValue) => {
    if (el.length !== undefined) {
      for (let i = 0; i < el.length; i += 1) {
        el[i].setAttribute(attr, attrValue);
      }
    } else {
      el.setAttribute(attr, attrValue);
    }
  };

  // Get attribute
  const getAttr = (el, attr) => el.getAttribute(attr);

  // Query Toggly components
  const togglyComp = document.querySelectorAll(`[${data.block}]`);

  for (let i = 0; i < togglyComp.length; i += 1) {
    // Togglys
    const eachToggly = togglyComp[i];
    const target = getAttr(eachToggly, `${data.block}`);
    const tabs = eachToggly.querySelectorAll(`[${data.id}]`);

    // Contents
    const content = document.querySelectorAll(`[${data.pane}="${target}"]`)[0];
    const contentTargets = content.querySelectorAll(`[${data.id}]`);

    // Each Toggly tab
    for (let j = 0; j < tabs.length; j += 1) {
      setAttr(contentTargets[j], `${data.active}`, getAttr(tabs[j], `${data.active}`));
      tabs[j].onclick = function () {
        const tabId = getAttr(this, `${data.id}`);

        // Gestionamos data-tg-active del propio elemento toggly
        setAttr(eachToggly.querySelectorAll(`[${data.active}="true"]`), `${data.active}`, 'false');
        setAttr(this, `${data.active}`, 'true');

        // Gestionamos data-tg-active del elemento target
        setAttr(content.querySelectorAll(`[${data.id}]`), `${data.active}`, 'false');
        setAttr(content.querySelector(`[${data.id}='${tabId}']`), `${data.active}`, 'true');
      };
    }
  }
}());
