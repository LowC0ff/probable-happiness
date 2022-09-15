function fGet(){
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

function fPost(){
    fetch(
        "http://localhost:8080/o/headless-delivery/v1.0/sites/20122/blog-postings",
        {
        method: "POST",
        headers:{
        Authorization: "Basic " + btoa("test@liferay.com:123"),
            "Content-Type": "application/json"},
        body: JSON.stringify({
        headline: "TESTE",
        articleBody: "Article via REST services."})
        }
    )
    .then((response) => response.json())
    .then((data) => console.log(data))
}

function fPut(id){
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

function fDelete(id){
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