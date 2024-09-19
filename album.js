function loadAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbums(data));
        }

loadAlbums();

    function displayAlbums(albums) {
        const albumContainer = document.getElementById('post');
        albums.forEach(album => {
            const div = document.createElement('div');
            div.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-md', 'hover:shadow-xl', 'transition', 'transform', 'hover:-translate-y-2');

            const h3 = document.createElement('h3');
            h3.innerText = album.title;
            h3.classList.add('text-xl', 'font-semibold', 'text-red-500', 'mb-2');

            div.appendChild(h3);
            albumContainer.appendChild(div);
            });
        }
