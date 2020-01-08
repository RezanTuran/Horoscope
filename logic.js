function makeRequest(url, method, formData, callback) {
    fetch(url, {
        method: method,
        body: formData
    }).then((response) => {
        return response.json()
    }).then((result) => {
        callback(result);
    }).catch((err) => {
        console.log("Error: ", err)
    })
    
}

function addHoroscope() {
    let inputDate = document.getElementById('inputDate').value;
    if(inputDate.length) {

        let url = "./server/addHoroscope.php"
        let method = "POST"
        
        let formData = new FormData()
        formData.set("date", inputDate) 
        makeRequest(url, method, formData, (result) => {
            console.log(result); 
            if(result) {
                getHoroscope();
            }
        });
    } else {
        document.getElementById('showHoroscopeOnScreen').innerHTML = "Välj datum!";
    }
}


function updateHoroscope() {
    
    let inputDate = document.getElementById('inputDate').value;

    let url = "./server/updateHoroscope.php"
    let method = "POST"
    
    let formData = new FormData()
    formData.set("date", inputDate) 
    makeRequest(url, method, formData, (result) => {
        console.log(result); 
        if(result) {
            getHoroscope();
        }
    });
}

function delteHoroscope() {
    
    let inputDate = document.getElementById('inputDate').value;

    let url = "./server/deleteHoroscope.php"
    let method = "DELETE"
    
    let formData = new FormData()
    formData.set("date", inputDate) 
    makeRequest(url, method, formData, (result) => {
        console.log(result); 
        if(result) {
            getHoroscope();
        }
    });
}

function getHoroscope() {
    makeRequest("./server/viewHoroscope.php", "GET", undefined, (result) => {
        if(result) {
            document.getElementById('showHoroscopeOnScreen').innerHTML = result;
        } else {
            document.getElementById('showHoroscopeOnScreen').innerHTML = " ";
        }
        
    });
}
getHoroscope();