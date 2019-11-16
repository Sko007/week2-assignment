




function getInformation (){

    fetch("https://swapi.co/api/people/1") // make the request
    .then(response => response.json()) // convert response to json
         .then(myJson => { // display data in the browser
             document.body.innerHTML =
               "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"  +
                "<button onclick=refresh()>"+ "back" +"</button>"
               // convertiert in ein JSON string
                        

            
    })
  

  }



  function Darth (){

    fetch("https://swapi.co/api/people/4/") // make the request
    .then(response => response.json()) // convert response to json
         .then(myJson => { // display data in the browser
             document.body.innerHTML =
               "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>" // convertiert in ein JSON string
              + "<button onclick=refresh()>"+ "back" +"</button>"

            
            
    })
  

  }

function refresh(){
    location.reload(true)


}
