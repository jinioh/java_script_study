
  async function init() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    display(users);
  }

  function display(users) {
    const result = document.querySelector('#result');
    let string = '';
    users.forEach(user => {
        string += `<ul><li>${user.name}</li>
                   <li>${user.username}</li>
                   <li>${user.email}</li></ul>`
    });

    result.innerHTML = string;
  }

  init();