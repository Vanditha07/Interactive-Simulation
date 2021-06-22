var slider1 = document.getElementById("myRange-1");
var output1 = document.getElementById("demo-1");
output1.innerHTML = slider1.value + " " + "uC";
slider1.oninput = function() {
  output1.innerHTML = this.value;
  $(".slidecontainer-4").hide();
}

var slider2 = document.getElementById("myRange-2");
var output2 = document.getElementById("demo-2");
output2.innerHTML = slider2.value + " " + "uC";
slider2.oninput = function() {
  output2.innerHTML = this.value;
  $(".slidecontainer-3").hide();
}

var slider3 = document.getElementById("myRange-3");
var output3 = document.getElementById("demo-3");
output3.innerHTML = slider3.value + " " + "uC";
slider3.oninput = function() {
  output3.innerHTML = this.value;
  $(".slidecontainer-2").hide();
}

var slider4 = document.getElementById("myRange-4");
var output4 = document.getElementById("demo-4");
output4.innerHTML = slider4.value + " " + "uC";
slider4.oninput = function() {
  output4.innerHTML = this.value;
  $(".slidecontainer-1").hide();
}


$(function() {
    $( "#pos-charge-icon-1" ).draggable();
    $( "#pos-charge-icon-2" ).draggable();
    $( "#neg-charge-icon-1" ).draggable();
    $( "#neg-charge-icon-2" ).draggable();
    });


function display_position1(x1, x2, y1, y2, charge_1){
  const length_1 = (Math.sqrt((Math.pow((x1 - x2), 2)) + (Math.pow((y1 - y2), 2)))) / 44;
  const potential_1 = ((9 * 1000000000) * (charge_1 / length_1))/1000000;
  document.getElementById("length1").innerHTML = length_1;
  document.getElementById("potential1").innerHTML = potential_1;
  $("#position1").show();
}

function display_position2(x1, x2, y1, y2, charge_1, charge_2){
  const length_2 = (Math.sqrt((Math.pow((x1 - x2), 2)) + (Math.pow((y1 - y2), 2)))) / 44;
  const potential_2 = ((9 * 1000000000) * (charge_1 / length_2))/1000000;
  document.getElementById("length2").innerHTML = length_2;
  document.getElementById("potential2").innerHTML = potential_2;
  $("#position2").show();
  const potential1 = document.getElementById("potential1").innerHTML;
  const potential2 = document.getElementById("potential2").innerHTML;
  const abs_pot = Math.abs((potential2 - potential1)) / 100;
  const work_done = ((potential2 - potential1) * charge_2) / 10000;
  document.getElementById("abs-pot").innerHTML = abs_pot;
  document.getElementById("work-done-display").innerHTML = work_done;
  $("#work-done-result").show();
}

$(document).ready(function(){
  $("#set-position-1").click(function(){
    $("#set-position-1").hide(100);

    if ($(".slidecontainer-1").is(":hidden")) {
      const box4 = document.querySelector("#neg-charge-icon-2");
      const x1 = box4.getBoundingClientRect()['x'];
      const y1 = box4.getBoundingClientRect()['y'];
      const charge_1 = document.getElementById("demo-4").innerHTML;


      if ($(".slidecontainer-2").is(":hidden"))
      {
        const box3 = document.querySelector("#pos-charge-icon-2");
        const x2 = box3.getBoundingClientRect()['x'];
        const y2 = box3.getBoundingClientRect()['y'];
        const charge_2 = document.getElementById("demo-3").innerHTML;
        display_position1(x1, x2, y1, y2, charge_1);
      }
      else if ($(".slidecontainer-3").is(":hidden"))
      {
        const box2 = document.querySelector("#neg-charge-icon-1");
        const x2 = box2.getBoundingClientRect()['x'];
        const y2 = box2.getBoundingClientRect()['y'];
        const charge_2 = document.getElementById("demo-2").innerHTML;
        display_position1(x1, x2, y1, y2, charge_1);
      }
    }

    else if ($(".slidecontainer-4").is(":hidden"))
    {
      const box1 = document.querySelector("#pos-charge-icon-1");
      const x1 = box1.getBoundingClientRect()['x'];
      const y1 = box1.getBoundingClientRect()['y'];
      const charge_1 = document.getElementById("demo-1").innerHTML;

      if ($(".slidecontainer-2").is(":hidden")) {
        const box3 = document.querySelector("#pos-charge-icon-2");
        const x2 = box3.getBoundingClientRect()['x'];
        const y2 = box3.getBoundingClientRect()['y'];
        const charge_2 = document.getElementById("demo-3").innerHTML;
        display_position1(x1, x2, y1, y2, charge_1);
      }
      else if ($(".slidecontainer-3").is(":hidden")) {
        const box2 = document.querySelector("#neg-charge-icon-1");
        const x2 = box2.getBoundingClientRect()['x'];
        const y2 = box2.getBoundingClientRect()['y'];
        const charge_2 = document.getElementById("demo-2").innerHTML;
        display_position1(x1, x2, y1, y2, charge_1);
      }
    }

    $("#set-position-2").click(function(){
      $("#set-position-2").hide(100);
      if ($(".slidecontainer-1").is(":hidden")) {
        const box4 = document.querySelector("#neg-charge-icon-2");
        const x1 = box4.getBoundingClientRect()['x'];
        const y1 = box4.getBoundingClientRect()['y'];
        const charge_1 = document.getElementById("demo-4").innerHTML;

        if ($(".slidecontainer-2").is(":hidden")) {
          const box3 = document.querySelector("#pos-charge-icon-2");
          const x2 = box3.getBoundingClientRect()['x'];
          const y2 = box3.getBoundingClientRect()['y'];
          const charge_2 = document.getElementById("demo-3").innerHTML;
          display_position2(x1, x2, y1, y2, charge_1, charge_2);
        }
        else if ($(".slidecontainer-3").is(":hidden")) {
          const box2 = document.querySelector("#neg-charge-icon-1");
          const x2 = box2.getBoundingClientRect()['x'];
          const y2 = box2.getBoundingClientRect()['y'];
          const charge_2 = document.getElementById("demo-2").innerHTML;
          display_position2(x1, x2, y1, y2, charge_1, charge_2);
        }
      }

      else if ($(".slidecontainer-4").is(":hidden")) {
        const box1 = document.querySelector("#pos-charge-icon-1");
        const x1 = box1.getBoundingClientRect()['x'];
        const y1 = box1.getBoundingClientRect()['y'];
        const charge_1 = document.getElementById("demo-1").innerHTML;

        if ($(".slidecontainer-2").is(":hidden")) {
          const box3 = document.querySelector("#pos-charge-icon-2");
          const x2 = box3.getBoundingClientRect()['x'];
          const y2 = box3.getBoundingClientRect()['y'];
          const charge_2 = document.getElementById("demo-3").innerHTML;
          display_position2(x1, x2, y1, y2, charge_1, charge_2);
        }
        else if ($(".slidecontainer-3").is(":hidden")) {
          const box2 = document.querySelector("#neg-charge-icon-1");
          const x2 = box2.getBoundingClientRect()['x'];
          const y2 = box2.getBoundingClientRect()['y'];
          const charge_2 = document.getElementById("demo-2").innerHTML;
          display_position2(x1, x2, y1, y2, charge_1, charge_2);
        }
      }
    })
})
});


$("#refresh").click(function(){
    location.reload();
});
