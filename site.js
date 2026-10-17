(function () {
  // Furniture grid + filters
  var grid = document.getElementById("piece-grid");
  if (grid && window.PIECES) {
    var filter = "available";
    var buttons = document.querySelectorAll("[data-filter]");

    function money(n) { return "$" + n.toLocaleString("en-US"); }

    function render() {
      var items = window.PIECES.filter(function (p) { return filter === "all" || p.status === filter; });
      grid.innerHTML = "";
      if (!items.length) {
        grid.innerHTML = '<p class="empty">Nothing here right now. New pieces go up as they are cleaned and photographed. Follow <a href="https://www.instagram.com/builthappycoastal">@builthappycoastal</a> to see them first.</p>';
        return;
      }
      items.forEach(function (p) {
        var el = document.createElement("article");
        el.className = "piece" + (p.status === "sold" ? " sold" : "");
        var photo = p.image
          ? '<img src="' + p.image + '" alt="' + p.name.replace(/"/g, "&quot;") + '" loading="lazy">'
          : "Photo coming soon";
        var price = p.status === "sold" ? "Sold" : (p.price ? money(p.price) : "Message for price");
        el.innerHTML =
          '<div class="photo">' + photo + "</div>" +
          "<h3>" + p.name + "</h3>" +
          '<div class="price">' + price + "</div>" +
          '<p class="meta">' + (p.note || "") + "</p>";
        grid.appendChild(el);
      });
    }

    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        filter = b.getAttribute("data-filter");
        buttons.forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        render();
      });
    });
    render();
  }

  // Landfill counter (sold pieces only)
  var out = document.querySelectorAll("[data-lbs]");
  if (out.length && window.PIECES) {
    var lbs = window.PIECES.filter(function (p) { return p.status === "sold"; })
      .reduce(function (s, p) { return s + (p.lbs || 0); }, 0);
    out.forEach(function (o) { o.textContent = lbs.toLocaleString("en-US"); });
  }

  // Contact form: opens the visitor's email app with the message filled in
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var subject = "Built Happy Coastal: " + d.get("topic");
      var body = d.get("message") + "\n\nFrom: " + d.get("name") + "\nReply to: " + d.get("email");
      window.location.href = "mailto:info@builthappycoastal.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }
})();
