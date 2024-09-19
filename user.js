
function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data));
        }

loadUser();

    function displayUser(users) {
        const ui = document.getElementById('user');
        users.forEach(user => {
            const div = document.createElement('div');
            div.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-md', 'hover:shadow-xl', 'transition', 'transform', 'hover:-translate-y-2');

            const h3 = document.createElement('h3');
            h3.innerText = user.name;
            h3.classList.add('text-xl', 'font-semibold', 'text-red-500', 'mb-2');

            const p = document.createElement('p');
            p.innerText = `Username: ${user.username}`;
            p.classList.add('text-gray-600');

            div.appendChild(h3);
            div.appendChild(p);

            ui.appendChild(div);
            });
        }
    
