/* Both does the same things - this is resolving promise using .then()...
function getAnimalData() {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(function(response){
    const json = response.json()
    .then(function(finalData){
        console.log(finalData);
    })
  })
}
*/



async function getAnimalData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const json = await response.json()
      .then(function(finalData){
          console.log(finalData);
    })
  }
  
