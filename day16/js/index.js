window.onload = function(){
  //  获取输入框元素
  var firstNumber = document.getElementById('first-number');
  var secondNumber = document.getElementById('second-number');
  var resultDom = document.getElementById('result');
  //  获取加减乘除
  var addBtn =  document.getElementById('add-btn');
  var minusBtn = document.getElementById('minus-btn');
  var timesBtn = document.getElementById('times-btn');
  var divideBtn = document.getElementById('divide-btn');
  //  加
  addBtn.onclick = function(){
    var fVal = firstNumber.value;
    var sVal = secondNumber.value;
    resultDom.innerHTML = parseInt(fVal)+parseInt(sVal);
  }
  // 减
  minusBtn.onclick = function(){
    var fVal = firstNumber.value;
    var sVal = secondNumber.value;
    resultDom.innerHTML = fVal-sVal;
  }
  // 乘
  timesBtn.onclick = function(){
    var fVal = firstNumber.value;
    var sVal = secondNumber.value;
    resultDom.innerHTML = fVal*sVal;
  }
  // 除
  divideBtn.onclick = function(){
    var fVal = firstNumber.value;
    var sVal = secondNumber.value;
    if(fVal>0){
      resultDom.innerHTML = fVal/sVal;
    }else{
      resultDom.innerHTML = '除数必须大于0';
    }
  }
}
