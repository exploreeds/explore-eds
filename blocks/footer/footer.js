import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  // Add back to Top button
  const backTop = document.createElement('a');
  backTop.className = 'backTop';
  backTop.id = 'backTop';
  backTop.textContent = 'Back to Top';
  backTop.href = '#';

  while (fragment.firstElementChild) {
    footer.append(fragment.firstElementChild);
  }

  block.append(backTop);
  block.append(footer);
}
