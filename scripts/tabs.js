$(document).ready(function () {
  $(".tab-link").on("click", function (event) {
    event.preventDefault();

    const target = $(this).data("target");
    console.log("Target tab:", target); // Log to check

    // Hide all tab content and remove active class
    $(".tab-pane").removeClass("show active");
    $(".tab-link").removeClass("active");

    // Show the target tab content and set the link to active
    $(target).addClass("show active");
    $(this).addClass("active");
  });
});
