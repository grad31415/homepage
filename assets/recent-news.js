// The archive is the source of truth. A static snapshot also works offline.
async function refreshRecentNews() {
  if (!/^https?:$/.test(location.protocol)) return;
  const source = document.querySelector('[data-news-source]');
  const current = document.querySelector('.news-window .news-list');
  try {
    const response = await fetch(source.href);
    if (!response.ok) return;
    const archive = new DOMParser().parseFromString(await response.text(), 'text/html');
    const entries = archive.querySelector('.news-list');
    if (entries) current.replaceChildren(...entries.children);
  } catch {
    // Keep the snapshot if the archive cannot be loaded.
  }
}
refreshRecentNews();
