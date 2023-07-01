// Add your code here
function submitData(name, email) {
    let data = {
        "name": name,
        "email": email
    }
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      })
      .then(function(response) {
        return response.json()
      })
      .then((info) => {
        document.querySelector('body').innerHTML = info.id
      })
      .catch(error => document.querySelector('body').innerHTML = error)
      }
  