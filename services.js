let form = document.querySelector("#contactForm");

const contactPost = async (e) =>{
    e.preventDefault();

    const doc = {
        fullname: form.fullName.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value
    }

    await fetch('http://localhost:3000/messages', {
        method:'POST',
        body:JSON.stringify(doc),
        headers: {'Content-type': 'application/json'}
    })



}

form.addEventListener('submit', contactPost);