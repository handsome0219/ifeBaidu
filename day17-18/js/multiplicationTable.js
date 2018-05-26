/*
for (var i = 1; i < 10; i++) {
  for (var j = 1; j <= i; j++) {
    console.log(i + '*' + j + '=' + i * j);
  }
}
*/

var html = "";
for (var i = 1; i < 10; i++) {
  html += "<tr>";
  for (var j = 1; j <= i; j++) {
    // console.log(i + '*' + j + '=' + i * j )
    html += "<td>" + j + " * " + i + " = " + (i * j) + "</td>";
  }
  html += "</tr>";
}
document.getElementById("table").innerHTML = html;