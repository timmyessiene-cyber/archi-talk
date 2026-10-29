const registers = document.querySelectorAll(".main_cta");

registers.forEach((register) => {
  register.addEventListener("click", () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeDY37uGTu8sJSwa-ot4bQx62i3u1aNTdlBqt6AMvDuAvIh9A/viewform"
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