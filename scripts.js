(function () {
  document.querySelectorAll(".compare-table audio").forEach(function (el) {
    el.addEventListener("play", function () {
      document.querySelectorAll(".compare-table audio").forEach(function (other) {
        if (other !== el && !other.paused) {
          other.pause();
        }
      });
    });
  });
})();
