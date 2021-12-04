const container = document.querySelector('.data-container');
const button = document.querySelector('button');

function loadData() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.github.com/users");
    request.send();
    request.onload = () => {
        console.log(request);
        if (request.status === 200) {
            // by default the response comes in the string format, we need to parse the data into JSON
            var people = JSON.parse(request.response);
            var output = '';
            for (var i in people) {
                output += ` <div class="data">
                <img src="${people[i].avatar_url}" alt="">
                <ul>
                    <li>ID: ${people[i].id}</li>
                    <li>Login: ${people[i].login}</li>
                   
                    <li>Type: ${people[i].type}</li>
                    <li>Site Admin: ${people[i].site_admin}</li>
                </ul>
            </div>`
            }
            container.innerHTML = output;

        } else {
            console.log(`error ${request.status} ${request.statusText}`);
        }
    };
}

//container.addEventListener('click', loadData());