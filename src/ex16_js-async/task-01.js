const requestURL = 'https://jsonplaceholder.typicode.com/users';

function myRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)
    xhr.responseType = 'json'
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response)
      } else {
        resolve(xhr.response)
      }
    }

    xhr.onerror = () => {
      reject(xhr.response)
    }

    xhr.send(JSON.stringify(body))
  })
}

myRequest('GET', requestURL)
  .then(data => console.log(data))
  .catch(err => console.log(err));

const body = {
  name: 'Elena Shashina',
  age: 40
};

myRequest('POST', requestURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err));