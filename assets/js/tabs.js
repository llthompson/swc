document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabPanels = document.querySelectorAll(".tab-panel");

  function showTab(tabId) {
    tabPanels.forEach(function (panel) {
      panel.classList.remove("active");
    });

    tabLinks.forEach(function (link) {
      link.classList.remove("active");
    });

    const activePanel = document.getElementById(tabId);
    const activeLinks = document.querySelectorAll(
      '.tab-link[data-tab="' + tabId + '"]',
    );

    if (activePanel) {
      activePanel.classList.add("active");
    }

    activeLinks.forEach(function (link) {
      link.classList.add("active");
    });
  }

  tabLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      const tabId = link.getAttribute("data-tab");
      showTab(tabId);
    });
  });
});
