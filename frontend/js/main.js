window.onload = async () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);
  let incr = 1;

  // Aqui debemos agregar nuestro fetch

    let data = await fetch("http://localhost:3031/api/movies")
    data = await data.json()
    data = data.data
    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;

      const duracion = document.createElement("p");
      duracion.textContent = `Duración: ${movie.length}`;

      const a = document.createElement("a")
      a.textContent = "★"
      a.setAttribute("style", "font-size: 25px;")

      container.appendChild(card);
      card.appendChild(a)
      card.appendChild(h1);
      card.appendChild(p);
      if (movie.genre !== null) {
        const genero = document.createElement("p");
        genero.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(genero);
      }
      card.appendChild(duracion);


      a.addEventListener("click", async (e) => {
        e.preventDefault()
        console.log(localStorage)
        return localStorage.setItem(`${incr++}`, `${movie.id}`)
    })
    });
 

};
