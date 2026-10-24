const registers = document.querySelectorAll(".main_cta");

registers.forEach((register) => {
  register.addEventListener("click", () => {
    window.location.href = "https://forms.gle/G6dzam9py6nRbCWBA"
  })
})



const tabs = document.querySelectorAll('.section_4 .tab');
const panels = document.querySelectorAll('.section_4 .panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const day = tab.dataset.day;

    tabs.forEach((t) => {
      const isActive = t === tab;
      t.classList.toggle('is-active', isActive);
      t.setAttribute('aria-selected', isActive);
    });

    panels.forEach((panel) => {
      panel.classList.toggle('is-active', panel.dataset.day === day);
    });
  });
});