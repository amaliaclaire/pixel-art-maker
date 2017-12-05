document.addEventListener("DOMContentLoaded", function () {
let currentColor = 'black'
let mouseDown = false
// create tr & td and append to table

  let table = document.getElementById("table")
  let td = document.createElement("td")
  let tr = document.createElement("tr")
  let width = 60
  let height = 50

  for (var r = 0; r < height; r++) {
    let tr = document.createElement("tr")
    table.append(tr)
    for (var d = 0; d < width; d++) {
      let td = document.createElement("td")

        tr.appendChild(td)
    }


  }
  let container = document.querySelector(".container")

  container.addEventListener("mouseover", function(e) {

    if (mouseDown) {
      e.target.style.backgroundColor = currentColor
    }
  })
  container.addEventListener("mousedown", function(e) {
    mouseDown = true
})

  container.addEventListener("mouseup", function(e) {
    mouseDown = false
  })
  let pallette = document.querySelector(".palette")

  pallette.addEventListener("click", function(e) {
    currentColor = e.target.id
  })




  // $(document).ready(function () {
  //   let isDown = false;
  //
  //   $(document).mousedown(function () {
  //     isDown = true;
  //   })
  //   .mouseup(function (){
  //     isDown = false;
  //   });
  //
  //   $('.container').mouseover(function () {
  //     if (isDown) {
  //       $(this).css("background-color", currentColor);
  //     }
  //   });
  // });




})
