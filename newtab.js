const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function doSearch() {
  const query = searchInput.value.trim();
  if (query) {
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.location.href = url;
  }
}

searchBtn.addEventListener('click', doSearch);
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') doSearch();
});

const toggleButton = document.getElementById('modeToggle');

toggleButton.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
  }
});

// Optional: Dark Mode standardmäßig aktivieren
document.body.classList.add('dark-mode');


