// gradeReport(8)
// gradeReport(10)
// gradeReport(5)

function gradeReport(grade){
//reads a grade from the user and prints comments accordingly.

console.log("your grade is..")
switch (grade){
    case 10:
        console.log("Wowzers you passed 100%")
        break;
    case 9:
        console.log("Well above avaerage. Excellent!")
        break;
    case 8:
        console.log("Above average. Nice job!")
        break;
    case 7:
        console.log("averege")
        break;
    case 6:
        console.log("Below average, gtfo!") 
        break;
    default:
        console.log("not passing.")   

    }
    console.log("")
}

gradeConditonals(10)
gradeConditonals(9)

function gradeConditonals(grade){
    if(grade == 10){
        console.log("Wowzers, you passed!")
    }
    else if(grade == 9){
        console.log("Well above average!")
    }    
}


