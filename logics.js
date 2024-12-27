let userinput = document.getElementById("date");
userinput.max = new Date().toISOString().split("T")[0]; // making sure i can select only todays date or past date!!
let Result = document.getElementById("result");

function calculatorAge(){
  let birthDate = new Date(userinput.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();


  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();


  let d3,m3,y3;

  y3 = y2 - y1;

  if(m2 >= m1){
    m3 = m2 - m1; // m1 = 3 and m2 = 5 , no need to borrow 
  }else{
    y3--;
    m3 = 12 + m2 - m1;
  }


  if ( d2 >= d1){
    d3 = d2 - d1;
  }else{
    m3--;
    d3 = getDaysInMonth(y1,m1) + d2 - d1;
  }
  if(m3 < 0){
    m3 = 11;
    y3--;
  }
  Result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months ,  <span>${d3}</span> days old` ;
}

function getDaysInMonth(year, month){
  return new Date(year, month , 0).getDate();
}