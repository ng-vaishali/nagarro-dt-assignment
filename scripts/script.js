window.onerror = function (message, source, lineno, colno, error) {
  console.error(
    "Global Error caught: ",
    message,
    "at",
    source,
    ":",
    lineno,
    ":",
    colno
  );
  alert(
    "An unexpected error occurred. Please refresh the page or try again later."
  );
  return true; // Prevents the firing of the default event handler
};

$(document).ready(function () {
  $("#navbar").load("components/navbar.html");
  $("#banner").load("components/banner.html");
  $("#tabs").load("components/tabs.html");
  $("#footer").load("components/footer.html");
});
