var slider1 = document.getElementById("myRange-1");
var output1 = document.getElementById("demo-1");
output1.innerHTML = slider1.value + " " + "uC";
slider1.oninput = function() {
  output1.innerHTML = this.value;
  $(".charge-2").hide();
  $(".footer").css("grid-template-columns", "2fr 1fr 2fr");
}

var slider2 = document.getElementById("myRange-2");
var output2 = document.getElementById("demo-2");
output2.innerHTML = slider2.value + " " + "uC";
slider2.oninput = function() {
  output2.innerHTML = this.value;
  $(".charge-1").hide();
  $(".footer").css("grid-template-columns", "2fr 1fr 2fr");
}


$(function() {
    $( "#pos-charge-icon" ).draggable();
    });

  $(function() {
      $( "#neg-charge-icon" ).draggable();
    });

    $(function() {
        $( "#test-charge-icon" ).draggable();
    });


$(document).ready(function(){
  $("#simulate").click(function(){

    //calculation for positive charge
    if ($(".charge-2").is(":hidden")) {

      //get x, y co-ordinates of positive charge
      const box1 = document.querySelector("#pos-charge-icon");
      const pos_charge_x = box1.getBoundingClientRect()['x'];
      const pos_charge_y = box1.getBoundingClientRect()['y'];

      //get x, y co-ordinates of test charge
      const box2 = document.querySelector("#test-charge-icon");
      const test_charge_x = box2.getBoundingClientRect()['x'];
      const test_charge_y = box2.getBoundingClientRect()['y'];

      //44px = 1cm
      const length = (Math.sqrt((Math.pow((test_charge_x - pos_charge_x), 2)) + (Math.pow((test_charge_y - pos_charge_y), 2)))) / 44;
      document.getElementById("length").innerHTML = length + " " + "cm";

      //all charges in uC
      const charge = document.getElementById("demo-1").innerHTML;

      //calculate potential
      const potential = ((9 * 1000000000) * (charge / length))/1000000;
      document.getElementById("potential").innerHTML = potential + " " + "V/cm" ;
    }

    //calculation for negative charge
    else if ($(".charge-1").is(":hidden")) {

      //get x, y co-ordinates of negative charge
      const box3 = document.querySelector("#neg-charge-icon");
      const neg_charge_x = box3.getBoundingClientRect()['x'];
      const neg_charge_y = box3.getBoundingClientRect()['y'];

      ////get x, y co-ordinates of test charge
      const box2 = document.querySelector("#test-charge-icon");
      const test_charge_x = box2.getBoundingClientRect()['x'];
      const test_charge_y = box2.getBoundingClientRect()['y'];

      //44px = 1cm
      var length = (Math.sqrt((Math.pow((test_charge_x - neg_charge_x), 2)) + (Math.pow((test_charge_y - neg_charge_y), 2)))) / 44;
      document.getElementById("length").innerHTML = length + " " + "cm";

      //all charges in uC
      const charge = document.getElementById("demo-2").innerHTML;

      //calculate potential
      const potential = ((9 * 1000000000) * (charge / length))/1000000;
      document.getElementById("potential").innerHTML = "-" + potential + " " + "V/cm";
    }

    //case when charges are not placed properly
    else {
      //send an alert message
      alert("Place the charges correctly!");
    }
  })
});


$("#refresh").click(function(){
  if(confirm("Are you sure, want to refresh?")){
    location.reload();
  }
});
