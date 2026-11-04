// Draw a jagged "packet trace" that settles into a clean flat signal —
  // noisy traffic being decoded, the site's one signature move.
  const decryptPath = document.getElementById('wave-decrypt');
  const points = [];
  const w = 640, mid = 45;
  for (let x = 0; x <= w; x += 8) {
    const y = mid;
    points.push([x, y]);
  }
  let d = `M${points[0][0]},${points[0][1]}`;
  for (let i = 1; i < points.length; i++) d += ` L${points[i][0]},${points[i][1]}`;
  decryptPath.setAttribute('d', d);
  decryptPath.style.opacity = '0';
  decryptPath.style.transition = 'opacity 1.4s ease 0.6s';
  requestAnimationFrame(() => requestAnimationFrame(() => decryptPath.style.opacity = '0.9'));


  // Smooth scroll for nav
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

fetch('https://api.github.com/users/Deji21-ops/repos?sort=updated&per_page=12')
  .then(res => res.json())
  .then(repos => {
    const grid = document.getElementById('repo-grid');
    repos
      .filter(r => !r.fork && r.name !== 'Portfolio_website')
      .forEach((r, i) => {
        const card = document.createElement('a');
        card.className = 'project-card';
        card.href = r.html_url;
        card.target = '_blank';

        const num = document.createElement('div');
        num.className = 'num';
        num.textContent = String(i + 1).padStart(2, '0');

        const title = document.createElement('h3');
        title.textContent = r.name;

        const desc = document.createElement('p');
        desc.textContent = r.description || 'No description yet.';

        card.append(num, title, desc);
        grid.appendChild(card);
      });
  })
  .catch(() => {});
