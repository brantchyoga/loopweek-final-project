var result = (function(number){
  var count = 1
  var total = []
  for(var i=count; i<=number; i+=count){
    if ([i]%15===0){
      total.push("ping-pong")
    } else if ([i]%5===0) {
      total.push("pong")
    } else if ([i]%3===0) {
      total.push("ping")
    } else {
    total.push(i);
    }
  }
    var total = total.join(" ");


    return total;

});





$(function(){
  $("form#numberPlay").submit(function(event) {
  event.preventDefault();
  var endNumber = parseFloat($("input#endNumber").val());
  console.log(endNumber);
  var newNumbers = result(endNumber)
  console.log(newNumbers);


  $("#output").text("<li>"+newNumbers+"</li>");
  });
});
