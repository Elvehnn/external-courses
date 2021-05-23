function fetchFunc() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', '/article/xmlhttprequest/example/load');
    xhr.send();

    xhr.onload = function() {
    if (xhr.status != 200) { 
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); 
    } else { 
        alert(`Готово, получили ${xhr.response.length} байт`); 
    }
    };

    xhr.onprogress = function(event) {
    if (event.lengthComputable) {
        alert(`Получено ${event.loaded} из ${event.total} байт`);
    } else {
        alert(`Получено ${event.loaded} байт`); 
    }
    };

    xhr.onerror = function() {
    alert("Запрос не удался");
    };
}

