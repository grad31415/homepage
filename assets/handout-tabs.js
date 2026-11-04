document.querySelectorAll('[data-handout-tabs]').forEach((root) => {
  const categories = Array.from(root.querySelectorAll('.handout-category'));
  if (!categories.length) return;

  const tabs = document.createElement('div');
  tabs.className = 'handout-tabs';
  tabs.setAttribute('role', 'group');
  tabs.setAttribute('aria-label', root.dataset.categoryLabel);

  const entries = categories.map((details) => {
    const summary = details.querySelector('summary');
    const panel = details.querySelector('.handout-panel');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'handout-tab';
    button.id = summary.id + '-button';
    button.textContent = summary.textContent;
    button.setAttribute('aria-controls', panel.id);
    button.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-labelledby', button.id);
    details.open = false;
    summary.hidden = true;
    tabs.append(button);
    return { details, button };
  });

  entries.forEach((entry, index) => {
    entry.button.addEventListener('click', () => {
      const open = !entry.details.open;
      entries.forEach((other) => {
        const selected = other === entry && open;
        other.details.open = selected;
        other.button.setAttribute('aria-expanded', String(selected));
      });
    });
    entry.button.addEventListener('keydown', (event) => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % entries.length;
      else if (event.key === 'ArrowLeft') next = (index + entries.length - 1) % entries.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = entries.length - 1;
      else return;
      event.preventDefault();
      entries[next].button.focus();
    });
  });

  root.insertBefore(tabs, categories[0]);
  root.classList.add('is-enhanced');
});
