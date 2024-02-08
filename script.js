var dis = "0";
var ans = 0;
var arr = ["", "0", "", "", ""];
var calarr = ["0", "", ""];
var chk = false;
var calchk = false;
var equalchk = false;
onkeydown = event =>{
  console.log(event.key);
  if((event.key>=0 && event.key<=9) || event.key=="." || (event.key=="%" && chk)){
    keyPressed(event.key);
  }
  else if(event.key=="Delete"){
    keyPressed(CE);
  }
  else if(event.key=="Enter" || event.key=="="){
     equalto();
  }
  else if(event.key=="Backspace"){
    keyPressed("bks");
  }
  else if(event.key=="+" || event.key=="-" || event.key=="*" || event.key=="/"){
    operator(event.key);
  }
}


// function negative(){
//   if(arr[0]=="") arr[0]="-";
//   else arr[0]="";
// }

// function negative(){
//   dis=Number.parseFloat(dis);
//   dis*=(-1);
//   dis=dis.toString();
//   document.getElementsByClassName("display")[0].innerHTML=dis;
//   if(chk) arr[3] = dis, calchk=true;
//     else arr[1]=dis;
// }
function clearScreen(){
    dis = "0";
    ans = 0;
    arr = ["", "0", "", "", ""]
    calarr = ["0", "", ""];
    chk = false;
    calchk = false;
    document.getElementsByClassName("answer")[0].innerHTML = "";
    document.getElementsByClassName("display")[0].innerHTML="0";
}

function keyPressed(i){
  if(equalchk){
    clearScreen();
    equalchk=false;
  }
  if(i=="neg"){
    if(dis=="" || dis=="0") dis="0";
    else{
    dis=Number.parseFloat(dis);
    dis*=(-1);
    dis=dis.toString();
   }
  }
   else if(i=="%"){
    if(dis=="0"){
      dis="0";
    }
    dis=Number.parseFloat(dis);
    dis/=(100);
    dis=dis.toString();
   }
   else if(i=="bks"){
    dis=dis.substring(0, dis.length-1);
     if(dis=="") dis="0"
   }
   else if(i=="CE"){
    dis="0";
   }
   else {
    if(dis=="0") dis="";
     dis += i;
   }

    if(chk) arr[3] = dis, calarr[2]=dis, calchk=true;
    else arr[1]=dis, calarr[0]=dis;
    document.getElementsByClassName("display")[0].innerHTML=dis;
}

function splfunc(name){
  if(equalchk){
    clearScreen();
    equalchk=false;
  }
  var i;
  if(chk) i=2, calchk=true;
  else i=0;

  if(name=="inv") arr[i+1]="1/"+dis, document.getElementsByClassName("answer")[0].innerHTML=arr[1]+" "+arr[2]+" "+arr[3];
  else if(name=="sq") arr[i+1]="sq("+dis+")", document.getElementsByClassName("answer")[0].innerHTML=arr[1]+" "+arr[2]+" "+arr[3];
  else if(name=="sqrt") arr[i+1]="sqrt("+dis+")", document.getElementsByClassName("answer")[0].innerHTML=arr[1]+" "+arr[2]+" "+arr[3];

  dis=Number.parseFloat(dis);
  if(name=="inv") dis=1/dis, calarr[i]=dis, document.getElementsByClassName("display")[0].innerHTML=dis;
  else if(name=="sq") dis=dis*dis, calarr[i]=dis, document.getElementsByClassName("display")[0].innerHTML=dis;
  else if(name=="sqrt") dis=Math.sqrt(dis), calarr[i]=dis, document.getElementsByClassName("display")[0].innerHTML=dis;
  dis=dis.toString();
}

function operator(symb){
  if(equalchk){
    dis = "0";
    ans = 0;
    arr[2]=arr[3] = "";
    calarr[1]=calarr[2] = "";
    chk = false;
    calchk = false;
    equalchk=false;
  }
    if(calchk){
      var val = calarr[0]+calarr[1]+calarr[2];
      calarr[0]=eval(val);
      console.log(arr[1]);
      print(arr, calarr[0]);
      arr[1]=eval(val);
      document.getElementsByClassName("display")[0].innerHTML= arr[1];
      calarr[2]=arr[3]="";
      calchk=false;
    }
    
    arr[2]=calarr[1]=symb;
    var sting = arr[0]+ " " + arr[1]+ " " + arr[2];
     console.log(calarr);
    document.getElementsByClassName("answer")[0].innerHTML = sting;
    chk = true;
    dis="0";
}


function equalto(){
   if(calarr[0]=="0"){
      calarr[0]="0";
   }
  else if(calarr[1]==""){
    arr[2]="="
    document.getElementsByClassName("answer")[0].innerHTML = arr[1]+" "+arr[2];
  }
  else{
    if(calarr[2]==""){

      arr[3]=calarr[2]=calarr[0]
    }
    
    document.getElementsByClassName("answer")[0].innerHTML = calarr[0]+" "+calarr[1]+" "+calarr[2]+"=";
    var eval1 = calarr[0]+calarr[1]+calarr[2];
    calarr[0]= eval(eval1);
    print(arr, calarr[0]);
    arr[1]= eval(eval1);
    document.getElementsByClassName("display")[0].innerHTML=calarr[0];
   }
   equalchk=true;
}

// var arri = ["", "5236", "+", "1254"];
// var chemi = "2541";
// print(arri, chemi);

function print(arr, dis){
    const div = document.createElement("div");
    div.className = "container";
    const arr0 = document.createTextNode(arr[1]);
    div.append(arr0);
    const span = document.createElement("span");
    const symb = document.createTextNode(arr[2]);
    span.append(symb);
    div.append(span);
    const arr1 = document.createTextNode(arr[3]);
    div.append(arr1);
    const span1 = document.createElement("span");
    span1.className = "span";
    const equal = document.createTextNode("=");
    span1.append(equal);
    div.append(span1);
    const br = document.createElement("br");
    div.append(br);
    const h1 = document.createElement("h1");
    h1.className = "dis1";
    const answer = document.createTextNode(dis);
    h1.append(answer);
    div.append(h1);
    document.getElementsByClassName("his_body")[0].prepend(div);
}

function del(){
  document.getElementsByClassName("his_body")[0].innerHTML = "";
}






// var array = ["", "", ""];
// array[1]="+";
// array="75.98";
// array=Number.parseInt(array);
// console.log(array);
// array[2]="80";
// // array[0]*=-1;
// array[0]=Number.parseFloat(array[0]);
// array[0]*=(-1);
// array[0]=array[0].toString();
// console.log(array)
// console.log(typeof(array[0]));
// console.log(typeof(array[1]));
// console.log(typeof(array[2]));
// var g=array[0]+array[1]+array[2];
// var g1=eval(g);
// console.log(g1);

// var str="varun";
// console.log(str);
// var str="";
// console.log(str);
// var str="gupta";
// str= Number.parseInt(str);
// console.log(str);

// var t;
// var s="v"
// console.log(s);
// s=s.substring(0, s.length-1);
// if(s=="") console.log(5);
// console.log(s-l);
//  s="gupta";
//  console.log(l);
// s=(p,t);
//  console.log(s);



// console.log(typeof"+");
// var arr = ["25","="];// "Math.sqrt(49)", "20"]
//  var s = arr[0]+arr[1];//+arr[2];
// console.log(s);
// let y = eval(s);
// console.log(y);
// var s ="varun";
// var j = ["varun", "+", "gupta"]
// j[1] = "-";
// console.log(j);


// console.log(v);
// s[v-2] = 0;
// console.log(s[v-2]);
// console.log(v);

// func(2);
// func(1);
// function func(val){
//   if(val==1) console.log(12);
//   if(val==2) console.log(13);
// }