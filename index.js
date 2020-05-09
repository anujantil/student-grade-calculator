

$("button").click(function()
{


if($(".name").val() == "")
{
    alert("kindly enter name of the candidate.");
    exit();
}
else
{
     $(".p1").text("Name : "+$(".name").val());   
} 

if($(".roll_no").val() == "" || $(".roll_no").val() == 0)
{
    alert("kindly enter roll no of the student.");
    exit();    
}
else
{
    $(".p2").text("Roll no : "+$(".roll_no").val());
}

if($(".email").val() == "")
{
    alert("kindly enter email of the student.");
    exit();
}
else
{
    $(".p3").text("Email_id of the student is : "+$(".email").val());

}





var a=0;
var b=0;
var c=0;
var d=0;

var totalmarks;
var precentage;

if($(".programming-marks").val()<40 && $(".programming-marks").val()>=0)
{
     $(".p4").text("FAILED in programming.");
     a+= +$(".programming-marks").val();
     
     
}
else
{
    a+= +$(".programming-marks").val();
}

if($(".maths-marks").val()<40 && $(".maths-marks").val()>=0)
{
    $(".p5").text("FAILED in mathematics.");
    b+= +$(".maths-marks").val();
    
}
else
{
    b+= +$(".maths-marks").val();
}

if($("computer-marks").val()<40 && $(".computer-marks").val()>=0)
{
    $(".p6").text("FAILED in computer.");
    c+= +$(".computer-marks").val();

}
else
{
    c+= +$(".computer-marks").val();
}

if($(".physics-marks").val()<40 && $(".maths-marks").val()>=0)
{
    $(".p7").text("FAILED in physics");
    d+= +$(".physics-marks").val();

}
else
{
    d+= +$(".physics-marks").val();
}

totalmarks=a+b+c+d;

$(".p8").text("Total_marks_obtained : "+totalmarks);


$("#info").addClass("afterresult");


percentage=(totalmarks*100)/400;
if(percentage<40)
{
  $(".p9").text("Percentage is :"+percentage);
  alert("The student is failed in all the subjects and is not promoted to next semester."); 
  
}
else
{
    $(".p9").text("Percentage is :"+percentage);
}






if(percentage>90 && percentage<=100)
{
    $(".p10").text("GRADE OF THE STUDENT IS : A+");
}
else
if(percentage>80 && percentage<=90)
{
    $(".p10").text("GRADE OF THE STUDENT IS : A");
}
else
if(percentage>70 && percentage<=80)
{
    $(".p10").text("GRADE OF THE STUDENT IS : B+");
}
else
if(percentage>60 && percentage<=70)
{
    $(".p10").text("GRADE OF THE STUDENT IS : B");
}
else
if(percentage>50 && percentage<=60)
{
   $(".p10").text("GRADE OF THE STUDENT IS : C++");
}
else
{
    $(".p11").text("GRADE OF THE STUDENT IS : C");
}


});

