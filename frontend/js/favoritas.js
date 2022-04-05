window.onload = async () => {
	const app = document.getElementById("root");
	const container = document.createElement("div");
	container.setAttribute("class", "container");
	app.appendChild(container);
	console.log(localStorage);

	let data = []


	// Aqui debemos agregar nuestro fetch

	for (const key in localStorage) {
		try {
			if (typeof localStorage[key] !== "function" && typeof localStorage[key] !== "number") {
				fetch(`http://localhost:3031/api/movies/${localStorage[key]}`)
					.then(result => result.json())
					.then(pelicula => {
						const card = document.createElement("div");
						card.setAttribute("class", "card");

						const h1 = document.createElement("h1");
						h1.textContent = pelicula.data.title;

						const p = document.createElement("p");
						p.textContent = `Rating: ${pelicula.data.rating}`;

						const duracion = document.createElement("p");
						duracion.textContent = `Duración: ${pelicula.data.length}`;

						container.appendChild(card);
						card.appendChild(h1);
						card.appendChild(p);
						if (pelicula.data.genre !== null) {
							const genero = document.createElement("p");
							genero.textContent = `Genero: ${pelicula.data.genre.name}`;
							card.appendChild(genero);
						}
						card.appendChild(duracion);
					})
					.catch(error => console.log(error))
			}
		} catch (error) {
			console.log(error)
		}
	}

}
