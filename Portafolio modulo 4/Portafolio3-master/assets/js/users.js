
export let usuarios =JSON.parse(localStorage.getItem("usuarios")) || [
    {  
        nombre: "nicolas",
        password: "123456",
        email: "nicolas@gmail.com",
    }

]
localStorage.setItem("usuarios", JSON.stringify(usuarios));
