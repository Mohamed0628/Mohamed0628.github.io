const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (toggle && navigation) {
  const close = () => { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('open', open);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { close(); toggle.focus(); } });
  window.matchMedia('(min-width: 801px)').addEventListener('change', close);
}

// Keep the Ethernet project focused on the hardware/interface work shown on the portfolio.
const ethernetCard = document.querySelector('a[href="/projects/fpga-ethernet/"]');
if (ethernetCard) {
  const visualBottom = ethernetCard.querySelector('.visual-bottom');
  if (visualBottom) visualBottom.innerHTML = 'Ethernet hardware<span>RGMII</span>';

  const description = ethernetCard.querySelector('.card-content > p:not(.eyebrow)');
  if (description) description.textContent = 'FPGA-to-PHY interfaces on a custom four-port Gigabit Ethernet hardware platform.';

  const tags = ethernetCard.querySelector('.tags');
  if (tags) tags.innerHTML = '<span>FPGA</span><span>RGMII</span><span>Ethernet PHY</span>';
}