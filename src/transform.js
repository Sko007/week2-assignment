const people = [

                {name: "Horst", age: 100},
                {name: "Werner", age: 22},
                {name: "Ulli", age: 17},
                {name: "Dieter", age: 44},
                {name: "Karl-Heinz", age: 55},
                {name: "Meinhart", age: 66},
                {name: "Ortrut", age: 33},

]

/////////////////////////////////

////////////////////////////////////

function groupAdultsByAgeRange (arrOfPeople){

     const sorted = arrOfPeople
        
            .filter(value => value.age > 18)

                .reduce(function(acc, value){

                    if(value.age >= 18 && value.age <=20){

                          acc["20 and younger"].push(value)
                        }
                             else if(value.age > 20 && value.age <= 30){

                                acc["21 to 30"].push(value)

                                    } else if(value.age > 30 && value.age <= 40){

                                         acc["31 to 40"].push(value)

                                             } else if(value.age > 40 && value.age <= 50){

                                                acc["41 to 50"].push(value) 

                                                    }else{
                                                        
                                                        acc["51 and older"].push(value)


                                                             }

                                                                return acc
                                                          
                                                         

                                                            },

     { "20 and younger": [],
       "21 to 30":[],
       "31 to 40":[],
       "41 to 50":[],
       "51 and older":[]
    
    })
        // console.log("value of sorted before returning", Object.keys(sorted).forEach((key) => (sorted[key] === []) && delete sorted[key])
            

            return sorted
                
    
};



console.log("result of Function groupAdultsByAgeRange", groupAdultsByAgeRange(people))

console.log("result of empty array",groupAdultsByAgeRange([]) )


console.log("result of single item",groupAdultsByAgeRange([{name: "Henry", age: 9}, {name: "John", age: 20}]) )







module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;




//Attempts to make array dissappear when empty


// 1. outsource logic from reduce to chain further 
///////////////////////////////////////////////////////////


// function groupAdultsByAgeRange (arrOfPeople){

//     const sorted = arrOfPeople
       
//            .filter(value => value.age > 18)

//                .reduce(categoryLogic),

//     { "20 and younger": [],
//       "21 to 30":[],
//       "31 to 40":[],
//       "41 to 50":[],
//       "51 and older":[]
   
//    })
           

//            return sorted
               
   
// };



// function categoryLogic(acc, value){

    //                    if(value.age >= 18 && value.age <=20){
    
    //                          acc["20 and younger"].push(value)
    //                        }
    //                             else if(value.age > 20 && value.age <= 30){
    
    //                                acc["21 to 30"].push(value)
    
    //                                    } else if(value.age > 30 && value.age <= 40){
    
    //                                         acc["31 to 40"].push(value)
    
    //                                             } else if(value.age > 40 && value.age <= 50){
    
    //                                                acc["41 to 50"].push(value) 
    
    //                                                    }else{
                                                           
    //                                                        acc["51 and older"].push(value)
    
    
    //                                                             }
    
    //                                                                return acc
                                                             
                                                            
    
    //                                                            }


// 2. attempt
////////////////////////////////////////////
///////////////////////////////////////////////////7




// function groupAdultsByAgeRange (arrOfPeople){

//     const sorted = arrOfPeople
       
//            .filter(value => value.age > 18)

//                .reduce(categoryLogic),

//     { "20 and younger": [],
//       "21 to 30":[],
//       "31 to 40":[],
//       "41 to 50":[],
//       "51 and older":[]
   
//    })
           

//       
//            return Object.values(sorted).forEach((value) => (sorted[value] === []) && delete sorted[value]            <============================================
               
   
// };

