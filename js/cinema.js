const resCinemaElemenr = document.querySelector("#res-cinema-js")
const cinemaImageElement = resCinemaElemenr.querySelector("#cinema-image-js img")
const cinemaPosterElement = resCinemaElemenr.querySelector("#cinema-poster-js img")
const cinemaTitleElement = resCinemaElemenr.querySelector("#cinema-title-js")
const cinemaYearElement = resCinemaElemenr.querySelector("#cinema-year-js")
const cinemaPlotElement = document.querySelector("#cinema-plot-js")
const videoPlayerElement = document.querySelector("#video-js")

const GetObjectFunc = ()=>{
    const locationid = parseInt(location.search.substr(1))

    for(let id = 0; id < videos.length; id++ ){
        if(locationid === id){
            // console.log(videos[id]);
            cinemaPosterElement.setAttribute("src", `${videos[id].Images[0]}`)
            cinemaImageElement.setAttribute("src", `${videos[id].Poster}`)
            cinemaTitleElement.innerText = videos[id].Title
            cinemaYearElement.innerText = videos[id].Released
            cinemaPlotElement.innerText = videos[id].Plot
            videoPlayerElement.setAttribute("poster", `${videos[id].Poster}`)


        }
    }
}







console.clear()
GetObjectFunc()