function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); 
}

function testLet() {
  if (true) {
    let y = 20;
    console.log(y); 
  }
  //console.log(y); 
}

testVar();
testLet();