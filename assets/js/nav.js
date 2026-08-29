document.addEventListener("DOMContentLoaded", function () {
  const page = document.body.getAttribute("data-page") || "";

  const navItems = [
    { page: "about", href: "/", label: "About" },
    { page: "expect", href: "/expect/", label: "Meetings" },
    { page: "meetings", href: "/meetings/", label: "When & Where" },
    { page: "join", href: "/join/", label: "Socials" },
    { page: "faq", href: "/faq/", label: "FAQ" },
  ];

  const heroHeader = `
    <header id="header" class="alt">
      <span class="logo"><a href="/"><img src="/images/swc2.svg" alt="Sapphic Writers Circle logo" /></a></span>
      <h1>Sapphic Writers Circle</h1>
      <p>Community &amp; creative support for sapphic writers in Austin, TX</p>
      <ul class="actions special">
        <li><a href="/meetings/" class="button primary">Come to a Meeting</a></li>
        <li><a href="https://discord.gg/nKW9PHcg6" class="button" target="_blank" rel="noopener noreferrer">Join the Discord</a></li>
      </ul>
    </header>
  `;

  const slimHeader = `
    <header id="header" class="alt slim">
      <span class="logo"><a href="/"><img src="/images/swc2.svg" alt="Sapphic Writers Circle logo" /></a></span>
    </header>
  `;

  const navHTML = `
    <nav id="nav">
      <ul>
        ${navItems
          .map(
            (item) =>
              `<li><a href="${item.href}" class="tab-link${item.page === page ? " active" : ""}"${item.page === page ? ' aria-current="page"' : ""}>${item.label}</a></li>`,
          )
          .join("")}
      </ul>
    </nav>
  `;

  const footerHTML = `
    <footer id="footer">
      <section>
        <h2>Connect</h2>
        <ul class="icons">
          <li>
            <a
              href="https://www.instagram.com/sapphicwriterscircle/"
              class="icon brands fa-instagram alt"
              ><span class="label">Instagram</span></a
            >
          </li>
          <li>
            <a
              href="https://discord.gg/nKW9PHcg6"
              class="icon brands fa-discord alt"
              ><span class="label">Discord</span></a
            >
          </li>
        </ul>
      </section>

      <p class="copyright">
        &copy; Sapphic Writers Circle. Design adapted from
        <a href="https://html5up.net">HTML5 UP</a>.
      </p>
    </footer>
  `;

  const headerMount = document.getElementById("site-header");
  if (headerMount) {
    headerMount.outerHTML = page === "about" ? heroHeader : slimHeader;
  }

  const navMount = document.getElementById("site-nav");
  if (navMount) {
    navMount.outerHTML = navHTML;
  }

  const footerMount = document.getElementById("site-footer");
  if (footerMount) {
    footerMount.outerHTML = footerHTML;
  }
});
