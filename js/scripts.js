//Business logic
var track = function(first, second, third){
  var firstlength = document.getElementById("firstl").value;
  var secondlength = document.getElementById("secondl").value;
  var thirdlength = document.getElementById("thirdl").value;

  // Converting input to intergers
  var first = parseInt(firstlength);
  var second = parseInt(secondlength);
  var third = parseInt(thirdlength);

   if((first + second > third) && (first + third > second) && (third + second > first)){
     //Checking for an equilateral triangle
    if(first === second && first === third){
      var triangle = "Equilateral";
      var eqArray = [];
      eqArray.push(first);
      eqArray.push(second);
      eqArray.push(third);

      document.getElementById("result").innerHTML = "The dimensions " + eqArray + " form an " + triangle + " triangle!";

    }

    //Checking for an Isosceles triangle
    else if(first === second || first === third || second === third){
      var triangle = "Isosceles";
      var isArray = [];
      isArray.push(first);
      isArray.push(second);
      isArray.push(third);

      document.getElementById("result").innerHTML = "The dimensions " + isArray + " form an " + triangle + " triangle!";

    }

    //Checking for a scalene triangle
    else{
      var triangle = "Scalene";
      var scArray = [];
      scArray.push(first);
      scArray.push(second);
      scArray.push(third);

      document.getElementById("result").innerHTML = "The dimensions " + scArray + " form a " + triangle + " triangle!";

    }
  }

  //Result if the triangle test has failed to print no triangle
   else{
     var triangle = "NO triangle at all";
     var noArray = [];
     noArray.push(first);
     noArray.push(second);
     noArray.push(third);

     document.getElementById("result").innerHTML = "The dimensions " + noArray + " form " + triangle;
  }
 }
