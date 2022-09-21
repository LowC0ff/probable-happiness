let id = 11
function docGet(){
    fetch(
        "http://localhost:8080/o/headless-delivery/v1.0/sites/20122/blog-postings",
        {
        method: "GET",
        headers:{
        Authorization: "Basic " + btoa("test@liferay.com:123")}
        }
    )
    .then((response) => response.json())
    .then((data) => console.log(data.items))
}

function docPost(){
    const doc = document.querySelector()
    const data = new FormData
    fetch(
        "http://localhost:8080/o/headless-delivery/v1.0/sites/20122/blog-postings",
        {
        method: "POST",
        headers:{
        Authorization: "Basic " + btoa("test@liferay.com:123"),
},
        body: data
})

}

function docPut(id){
    id = 40429
    fetch(
        `http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${id}`,
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
        `http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${id}`,
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