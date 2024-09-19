function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayPost(data));
}

loadPost();

function displayPost(comments) {
    const postContainer = document.getElementById('post');
    comments.forEach(comment => {
        const div = document.createElement('div');
        div.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-md', 'hover:shadow-xl', 'transition', 'transform', 'hover:-translate-y-2');

        // Commenter's name
        const h3 = document.createElement('h3');
        h3.innerText = comment.name;
        h3.classList.add('text-xl', 'font-semibold', 'text-red-500', 'mb-2');

        // Commenter's email
        const email = document.createElement('p');
        email.innerText = `Email: ${comment.email}`;
        email.classList.add('text-gray-600', 'mb-4');

        // Comment body
        const p = document.createElement('p');
        p.innerText = comment.body;
        p.classList.add('text-gray-600');

        div.appendChild(h3);
        div.appendChild(email);
        div.appendChild(p);

        postContainer.appendChild(div);
    });
}

