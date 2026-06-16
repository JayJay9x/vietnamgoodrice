/* Viet Nam Good Rice — shared behaviour */
(function () {
  // Mobile menu toggle
  window.toggleMenu = function () {
    var m = document.getElementById("mobile-menu");
    if (m) m.classList.toggle("hidden");
  };

  // Mark current nav link active
  document.addEventListener("DOMContentLoaded", function () {
    var here = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link").forEach(function (a) {
      var href = (a.getAttribute("href") || "").split("/").pop();
      if (href && href === here) a.classList.add("active");
    });
  });

  // Reveal-on-scroll
  document.addEventListener("DOMContentLoaded", function () {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach(function (e) { e.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  });
})();
