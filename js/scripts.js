$(document).ready(function(){
$("button.cat-button").click(function() {
  $("ul.cat").prepend("<li>Meow!</li>");
});


  $("button.dog-button").click(function() {
    $("ul.dog").prepend("<li>Woof</li>");
  });
})