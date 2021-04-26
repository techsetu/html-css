$(function(){
  /* Custom JavaScript */
  // CREDIT: https://github.com/carpentries/lesson-example/blob/gh-pages/assets/js/lesson.js

  // Make all tables striped by default.
  $(".lesson-page table").addClass("table table-hover table-responsive");
  $(".lesson-page table thead").addClass("thead-dark");

  // Handle foldable challenges and solutions (on click and at start).
  $(".solution").click(function(event) {
    var trigger = $(event.target).has(".fold-unfold").length > 0
                || $(event.target).filter(".fold-unfold").length > 0;
    if (trigger) {
      $(">*:not(h2)", this).toggle(400);
      $(">h2>span.fold-unfold", this).toggleClass("icon-collapse-down icon-collapse-up");
      event.stopPropagation();
    }
  });

  $(".solution").each(function() {
    $(">*:not(h2)", this).toggle();
    var h2 = $("h2:first", this);
    h2.append("<span class='fold-unfold icon icon-collapse-down'></span>");
  });
});
