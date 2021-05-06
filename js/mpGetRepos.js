console.log("time to fetch some data from github....");

//GET URL: https://api.github.com/users/maikpro/repos

const url = "https://api.github.com/users/maikpro/repos";
getData(url);

function getData(url){
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var dataText = req.responseText; //hole dem Text aus der Antwort des Servers
            var data = JSON.parse(dataText); //Wandelt den JSON String in ein JSON-Object um.
            //console.log(data);
            sortDataByDate(data);
            console.log(data);
            viewData(data);
        }
    };
    req.open("GET", url, true);
    req.responseType = "text";
    req.send();
}

function viewData(data){
    var anzahl=4; //vier Repos sollen angezeigt werden.
    var mpContainer;
    for(let i=0; i<anzahl;i++){

        //Erstelle mp-container
        if(i == 0 || i % 2 == 0){
            mpContainer = createProjectContainer();
        }

        let project = data[i];

        console.log(mpContainer)

        createProjectBlock(mpContainer, project);
    }
}

/*sortiert alle Repos nach create_at absteigend nach Datum (neuste Repos vorne)*/
function sortDataByDate(data){
    data.sort(function(a, b){
        return (a.created_at < b.created_at) ? 1 : -1
    });
}

function createProjectContainer(){
    var parent = document.getElementById("githubProjects");
    var block = document.createElement("div");
    block.classList.add("mp-container");
    parent.appendChild(block);
    return block;
}

function createProjectBlock(container, project){
    var block = document.createElement("div");
    block.classList.add("projekt", "github");
    block.id = "mpEffect";

    //Projektname
    var h2 = document.createElement("h2");
    h2.textContent = project.name;

    //Beschreibung
    var p = document.createElement("p");
    var created_date = new Date(project.created_at)
    p.innerHTML = project.description + "<br>erstellt am: " + created_date.toLocaleDateString();

    //Verlinkung
    var a = document.createElement("a");
    a.classList.add("mp-btn");
    a.setAttribute("href", project.html_url);
    a.setAttribute("target", "_blank");
    a.innerHTML = "<i class='fab fa-github'></i> Github Projekt";

    block.appendChild(h2);
    block.appendChild(p);
    block.appendChild(a);
    container.appendChild(block);
}

