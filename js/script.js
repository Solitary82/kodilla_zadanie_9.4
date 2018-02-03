function drawTree(height) {
    
"use strict";
    
for(var i = 1; i < 6; i++){
    var star = "";
    
    for(var j = i; j < 6; j++){
        star += " ";
    }
  
    for(var k = 0; k < (i * 2) - 1; k++){
        star += "*";
    }
    
    if (i === height + 1) {
    break; 
    
    }
    
    console.log(star);
    
    }

}

var xmasTree = drawTree(5);
console.log = xmasTree;
