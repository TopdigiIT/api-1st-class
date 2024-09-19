
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayPost(data));
        }

loadPost();

    function displayPost(todos) {
        const postContainer = document.getElementById('post');
        todos.forEach(todo => {
            const div = document.createElement('div');
            div.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-md', 'hover:shadow-xl', 'transition', 'transform', 'hover:-translate-y-2');

            const h3 = document.createElement('h3');
            h3.innerText = todo.title;
            h3.classList.add('text-xl', 'font-semibold', 'text-red-500', 'mb-2');

            const p = document.createElement('p');
            p.innerText = todo.completed ? 'Completed' : 'Not Completed';
            p.classList.add('text-gray-600');

            div.appendChild(h3);
            div.appendChild(p);

            postContainer.appendChild(div);
            });
        }
    