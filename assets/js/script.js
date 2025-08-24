$(function () {
  $("figure.menu-toggle").click(function () {
    let $menu = $("#main-menu");
    $menu.prop("open", !$menu.prop("open"));
  });
});
