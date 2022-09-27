function docPost(){
    const doc = document.querySelector('input[type="file"]')
    var data = new FormData
    data.append("file", doc.files[0])

    fetch(
        "http://localhost:8080/o/headless-delivery/v1.0/sites/20122/documents",
        {
        method: "POST",
        body: data,
        headers:{
        Authorization: "Basic " + btoa("test@liferay.com:123"),
},
})
}

function docPut(id){
    id = 40429
    fetch(
        `http://localhost:8080/o/headless-delivery/v1.0/sites/20122/documents`,
        {
        method: "PUT",
        headers:{
            Authorization: "Basic " + btoa("test@liferay.com:123"),
                "Content-Type": "application/json"},
            body: JSON.stringify({
            headline: "TESTE",
            articleBody: "update"
            }
            )
        }

    )
    .then((response) => response.json())
    .then((data) => console.log(data))
}

function docDelete(id){
    id = 40429
    fetch(
        `http://localhost:8080/o/headless-delivery/v1.0/sites/20122/documents`,
        {
            method: "DELETE"
            ,
            headers:{
                Authorization: "Basic " + btoa("test@liferay.com:123"),
                    "Content-Type": "application/json"},
                body: JSON.stringify({
                headline: "TESTE"
                }
                )
        }
    )
    .then(console.log("Delete sucessful"))
}