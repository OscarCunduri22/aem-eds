export default function decorate(block) {

  console.log("User card log")

  const row = block.querySelector(':scope > div');
  if (!row) return;

  const cells = [...row.children];

  const contentCell = cells[0];
  const headingCell = cells[1];
  const imageCell = cells[2];

  const img = imageCell?.querySelector('img');

  const heading = document.createElement('h2');
  heading.textContent = headingCell?.textContent?.trim() || '';

  const paragraph = document.createElement('p');
  paragraph.innerHTML = contentCell?.innerHTML || '';

  block.textContent = '';

  const card = document.createElement('div');
  card.className = 'user-card';

  if (img) card.appendChild(img);
  if (heading.textContent) card.appendChild(heading);
  if (paragraph.textContent) card.appendChild(paragraph);

  block.appendChild(card);
}
