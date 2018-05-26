/*
  根据时间切换背景及弹出提示语
*/
var day = new Date();
var h = day.getHours();

if (h > 0 && h < 6) {
  alert("现在" + h + "点，夜深了, 该睡了");
  document.body.style.background = 'rgba(16, 19, 15, .88)';
  document.body.style.color = "rgba(255, 255, 255, 0.9)";
} else if (h > 6 && h < 12) {
  alert("现在" + h + "点，上午好");
  document.body.style.background = 'rgba(113, 101, 146, .88)';
  document.body.style.color = "rgba(255, 255, 255, 0.9)";
} else if (h > 12 && h < 18) {
  alert("现在" + h + "点，下午好");
  document.body.style.background = 'rgba(255, 255, 255, .88)';
  document.body.style.color = "rgba(0, 0, 0, 0.9)";
} else if (h > 18 && h < 24) {
  alert("现在" + h + "点，晚上好");
  document.body.style.background = 'rgba(108, 117, 104, .88)';
  document.body.style.color = "rgba(0, 0, 0, 0.9)";
}