window.onload = async () => {

    let $title = $("#title");
    let $rating = $("#rating");
    let $awards = $("#awards");
    let $releaseDate = $("#release_date");
    let $length = $("#length");
    let $botonEditar = $("#botonEditar");
    let $botonCrear = $("#botonCrear");
    let $botonBorrar = $("#botonBorrar")
    let $form = $("#form");
    let $star = $("#star");
    let detailMovie;

    try {
        let result = await fetch("http://localhost:3031/api/movies/1")
        detailMovie = await result.json();
        console.log(detailMovie)
        $title.value = detailMovie.data.title;
        $rating.value = detailMovie.data.rating;
        $awards.value = detailMovie.data.awards;
        $releaseDate.value = detailMovie.data.release_date.substring(0,10);
        $length.value = detailMovie.data.length;
        
    } catch (error) {
        console.log(error.message)
    }


    $form.onsubmit = (e) => {
        e.preventDefault()
        
    }
    $botonEditar.addEventListener("click", async (e) => {
        e.preventDefault()
        newValues = {
            title: $title.value,
            rating: $rating.value,
            awards: $awards.value,
            release_date: $releaseDate.value,
            length: $length.value
        }
        try {
            let ej = await fetch(`http://localhost:3031/api/movies/update/${detailMovie.data.id}`, {
                method: "PUT",
                body: JSON.stringify(newValues),
                headers:{
                    'Content-Type': 'application/json'
                  }
            })
            console.log(ej)
        } catch (error) {
           console.log(error.message)
        }
    })
    
    $botonCrear.addEventListener("click", async (e) => {
        e.preventDefault()
        newValues = {
            title: $title.value,
            rating: $rating.value,
            awards: $awards.value,
            release_date: $releaseDate.value,
            length: $length.value
        }
        try {
            let ej = await fetch(`http://localhost:3031/api/movies/create`, {
                method: "POST",
                body: JSON.stringify(newValues),
                headers:{
                    'Content-Type': 'application/json'
                  }
            })
            console.log(ej)
        } catch (error) {
           console.log(error.message)
        }
    })

    $botonBorrar.addEventListener("click", async (e) => {
        e.preventDefault()
        newValues = {
            title: $title.value,
            rating: $rating.value,
            awards: $awards.value,
            release_date: $releaseDate.value,
            length: $length.value
        }
        try {
            let ej = await fetch(`http://localhost:3031/api/movies/create`, {
                method: "POST",
                body: JSON.stringify(newValues),
                headers:{
                    'Content-Type': 'application/json'
                  }
            })
            console.log(ej)
        } catch (error) {
           console.log(error.message)
        }
    })
    
}


const $ = element => document.querySelector(element)