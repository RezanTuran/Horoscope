
function post() {

    let url = "./server/requestHandler.php"
    let method = "POST"
    
    formData = new FormData()
    formData.set("name", "key")  

    fetch(url, {
        method: method,
        body: formdata
    }).then((response) => {
        console.log(response)
        return response.json()
    }).then((result) => {
        callback(result)
    }).catch((err)=>{
        console.log("Error: ", err)
    })
}

post()