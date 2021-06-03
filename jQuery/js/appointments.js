$(document).ready(function(){
  $("form#book-appointment").submit(function (event) {
    event.preventDefault();
    let name = ("#name");
    let type = ("#type");
    let date = ("#date");
    let time = ("#time");
    const result = ("Success!");
    $("#output").text(result);
  });
});