function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPost(data));
        }

    loadPost(); // Correct function to load photos

    function displayPost(photos) {
        const postContainer = document.getElementById('post');
        photos.forEach(photo => {
            const div = document.createElement('div');
            div.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-md', 'hover:shadow-xl', 'transition', 'transform', 'hover:-translate-y-2');

            // Photo title
            const h3 = document.createElement('h3');
            h3.innerText = photo.title;
            h3.classList.add('text-xl', 'font-semibold', 'text-red-500', 'mb-2');

            // Photo image
            const img = document.createElement('img');
            img.src = photo.thumbnailUrl;
            img.alt = photo.title;
            img.classList.add('w-full', 'h-auto', 'rounded');

            div.appendChild(h3);
            div.appendChild(img);

            postContainer.appendChild(div);
            });
        }
    



    
