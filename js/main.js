// Assemble the contact email at runtime so it isn't sitting in the HTML for scrapers.
// Each .js-email element contains a readable plain-text fallback ("name [at] domain [dot] com")
// and reversed parts in data attributes.
(function () {
  var rev = function (s) { return s.split("").reverse().join(""); };
  var nodes = document.querySelectorAll(".js-email");
  for (var i = 0; i < nodes.length; i++) {
    var el = nodes[i];
    var addr = rev(el.getAttribute("data-u")) + "@" + rev(el.getAttribute("data-d"));
    var a = document.createElement("a");
    a.href = "mailto:" + addr;
    a.textContent = el.hasAttribute("data-label") ? el.getAttribute("data-label") : addr;
    el.replaceChildren(a);
  }
})();
