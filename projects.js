const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector(".projects");

const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/posts/' + id);
    const post = await res.json();
    
    const template = `
    <article class="post-container">
        <h1 class="xlarge-text">${post.title}</h1>
        <div class="subtitle-row flex-row">
            <p>${post.description}</p>
            <p><b>Completed on</b> June 22, 2021</p>
        </div>
        <img src="${post.image}" class="project-Img">
        <p>${post.content}</p>
    </article>
    
    `

    container.innerHTML= template;
}

window.addEventListener('DOMContentLoaded', () => renderDetails());