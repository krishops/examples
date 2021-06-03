$(document).ready(function(){
  $("form#book-appointment").submit(function (event) {
    event.preventDefault();
    let name = $("#name").val();
    console.log("Is this working");
    let type = $("#type").val();
    let date = $("#date").val();
    let time = $("#time").val();
    const result = ("Success!");
    $("#output").text(result);
  });
});