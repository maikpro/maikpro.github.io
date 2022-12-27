//GET URL: https://api.github.com/users/maikpro/repos

const url = "https://api.github.com/users/maikpro/repos";
getData(url);

async function getData(url){
    const response = await fetch(url);
    if(response.ok){
        const data = await response.json();
        sortDataByDate(data);
        viewData(data);
    }
}

function viewData(data){
    const anzahl=4; // vier Repos sollen angezeigt werden.
    let mpContainer;
    for(let i=0; i<anzahl;i++){

        //Erstelle mp-container
        if(i == 0 || i % 2 == 0){
            mpContainer = createProjectContainer();
        }

        let project = data[i];
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
    const parent = document.getElementById("githubProjects");
    const block = document.createElement("div");
    block.classList.add("mp-container");
    parent.appendChild(block);
    return block;
}

function createProjectBlock(container, project){
    const block = document.createElement("div");
    block.classList.add("projekt", "github");
    block.id = "mpEffect";

    // Projektname
    const h2 = document.createElement("h2");
    h2.textContent = project.name;

    // Beschreibung
    const p = document.createElement("p");
    const created_date = new Date(project.created_at)
    p.innerHTML = project.description + "<br>erstellt am: " + created_date.toLocaleDateString();

    // Verlinkung
    const a = document.createElement("a");
    a.classList.add("mp-btn");
    a.setAttribute("href", project.html_url);
    a.setAttribute("target", "_blank");
    a.innerHTML = "<i class='fab fa-github'></i> Github Projekt";

    block.appendChild(h2);
    block.appendChild(p);
    block.appendChild(a);
    container.appendChild(block);
}

