document.getElementById('btn').addEventListener('click', getData);

let xhr = new XMLHttpRequest();
let data;

function getData(){
    xhr.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=Ghp62mvTCo5mkCjhPgdwuKVCKHwNzsg4Zd9FZ7z5', true);

    xhr.onload = function(){
        if(status == 200){
            data = JSON.parse(this.responceText);
            console.log(data);
        }
    }

    xhr.send();
}