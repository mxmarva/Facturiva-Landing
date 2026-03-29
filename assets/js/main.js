/**
 * Facturiva landing — JS mínimo: modales legales en el mismo documento
 */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  function openDialogs(dialogs) {
    document.querySelectorAll("[data-legal-open]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var key = btn.getAttribute("data-legal-open");
        var dlg = document.getElementById("legal-dialog-" + key);
        if (dlg && typeof dlg.showModal === "function") {
          dlg.showModal();
          document.body.classList.add("legal-scroll-lock");
        }
      });
    });

    dialogs.forEach(function (dlg) {
      dlg.addEventListener("close", function () {
        document.body.classList.remove("legal-scroll-lock");
      });

      dlg.addEventListener("click", function (e) {
        if (e.target === dlg) {
          dlg.close();
        }
      });

      dlg.querySelectorAll("[data-legal-close]").forEach(function (closeBtn) {
        closeBtn.addEventListener("click", function () {
          dlg.close();
        });
      });
    });
  }

  var dialogs = Array.prototype.slice.call(document.querySelectorAll(".legal-dialog"));
  if (dialogs.length) {
    openDialogs(dialogs);
  }
})();
