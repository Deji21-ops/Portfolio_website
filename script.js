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

