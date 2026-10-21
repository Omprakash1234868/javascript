let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log("INNER:" ,a);
}


// console.log(a);

function one(){
    const username = "omprakash"

    function two(){
        const website = "youtube"
        // console.log(username);
    }

    two()
}
// one()

if(true){
    //  const username = "omprakash"
    //  if(username === "omprakash"){
        const website = " youtube"
        // console.log(username +  website);
    }
    // console.log(website);
//  }




// +++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++


console.log(addone(5));
function addone(num){
    return num + 1
} 

// addone(5)


const addTwo = function(num){
    return num + 2
}

addTwo(5)