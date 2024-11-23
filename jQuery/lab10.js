
const requestURL = 'https://usersdogs.dmytrominochkin.cloud/dogs';
const baseSrc = 'https://usersdogs.dmytrominochkin.cloud';

let body = $('body').get(0);



let y = 0;

$.ajax(requestURL, {
    success: function (data) {

        data.forEach(element => {
            main.insertAdjacentHTML("beforebegin",
                `<div class="grid open_modal" onclick="otobrazyt(this)"  value="${y}">
            <img src="${baseSrc}${element.dogImage}" alt="dog">
            <div class="textAling">
            <h2>${element.title}</h2>
            <p>${element.sex}</p>
            </div>
            </div>`);
            y++;


        });
    }
});



function otobrazyt(elm) {

    var y = elm.getAttribute('value');
    
    $.ajax(requestURL, {
        success: function (data) {
           
            $('#link')[0].src = baseSrc + data[y].dogImage;
            $('#name')[0].innerHTML = data[y].title;
            $('#sex')[0].innerHTML = data[y].sex;
            $('#age')[0].innerHTML = data[y].age;
            $('#description')[0].innerHTML = data[y].description;

         

            modal.classList.add('modal_vis');
            body.classList.add('body_block');

        }
    });
}





$('#block_window').click(function () {
    modal.classList.remove('modal_vis');
    body.classList.remove('body_block');
});