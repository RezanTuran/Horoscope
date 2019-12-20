function add() {
 
    let url = "./server/addHoroscope.php"
    let method = "POST"
    
    let formData = new FormData()
    let inputVar = document.getElementById('inputDate').value;

    if(inputVar.length) {
    
    formData.set("date", inputVar)
    makeRequest("./server/addHoroscope.php", "POST", formData, (result) => {
    console.log(result)
      })
    }
    else{
        console.log("Välj Datum....!");
}
}
   function makeRequest(url, method, formData, callback){
    
    fetch(url, {
    method: 'post',
    body: formData
    }).then((response) => {
    console.log(response)
    return response.json()
    }).then((result) => {
    callback(result)
    }).catch((err)=>{
    console.log("Error: ", err)
    })
   }

   