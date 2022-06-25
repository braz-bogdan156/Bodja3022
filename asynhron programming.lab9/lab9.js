const requestURL = 'https://usersdogs.dmytrominochkin.cloud/dogs';
const baseSrc = 'https://usersdogs.dmytrominochkin.cloud';
const xhr = new XMLHttpRequest();
let block_window = document.getElementById('block_window');
let body = document.getElementsByTagName('body')[0];



let x = 0;

xhr.open('GET', requestURL);
xhr.responseType = 'json';
xhr.onload = () => {
    if (xhr.status >= 400) {
        console.error(xhr.response)
    }
    else {
        let kost = xhr.response;
        kost.forEach(element => {
            main.insertAdjacentHTML("beforebegin",
                `<div class="grid open_modal" onclick="otobrazyt(this)"  value="${x}">
            <img src="${baseSrc}${element.dogImage}" alt="dog">
            <div class="textAling">
            <h2>${element.title}</h2>
            <p>${element.sex}</p>
            </div>
            </div>`);
            x++;


        });
    }
}

xhr.send();



function otobrazyt(elm) {

    var x = elm.getAttribute('value');
    xhr.open('GET', requestURL);
    xhr.responseType = 'json';
    xhr.onload = () => {
        if (xhr.status >= 400) {
            console.error(xhr.response)
        }
        else {
        
            document.getElementById("link").src = baseSrc + xhr.response[x].dogImage;
            document.getElementById("name").innerHTML = xhr.response[x].title;
            document.getElementById("sex").innerHTML = xhr.response[x].sex;
            document.getElementById("age").innerHTML = xhr.response[x].age;
            document.getElementById("description").innerHTML = xhr.response[x].description;


            modal.classList.add('modal_vis');
            body.classList.add('body_block');

        }

    }

    xhr.send();
}



block_window.onclick = function () {
    modal.classList.remove('modal_vis');
    body.classList.remove('body_block');
};