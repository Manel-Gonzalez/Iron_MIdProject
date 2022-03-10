const projectsContainer = document.querySelector('.projects-container');

const renderProjects= async() => {
    const uri = 'http://localhost:3000/posts';
    const res = await fetch(uri);

    const posts = await res.json();
    console.log(posts);

    let template = '';
    posts.forEach(post => {
        template += `
        <div class="project-card ">
            <img src="${post.image}" class="projectImg">

            <div class="card-text-container">
            <h2 class="project-card-title largeMedium-text">${post.title}</h2>
            <p class="small-text project-description">${post.description}</p>
            <a  class ="small-text project-link" href="/projects.html?id=${post.id}">learn more...</a>
            </div>

        </div>
        `
    })
    projectsContainer.innerHTML = template;
};


window.addEventListener('DOMContentLoaded', () => renderProjects());