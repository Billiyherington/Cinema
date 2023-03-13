const resCinemaElemenr = document.querySelector("#res-cinema-js")
const cinemaImageElement = resCinemaElemenr.querySelector("#cinema-image-js img")
const cinemaPosterElement = resCinemaElemenr.querySelector("#cinema-poster-js img")
const cinemaTitleElement = resCinemaElemenr.querySelector("#cinema-title-js")
const cinemaYearElement = resCinemaElemenr.querySelector("#cinema-year-js")
const cinemaPlotElement = document.querySelector("#cinema-plot-js")
const videoPlayerElement = document.querySelector("#video-js")
//
const navFormElement = document.querySelector("#navigation-form-js")
const inputElement = navFormElement.querySelector("#input-js")
const searchBtnElemnt = navFormElement.querySelector("#search-js")
const resultSearchElement = document.querySelector("#result-search-js")
const videoResulteElement = resultSearchElement.querySelector("#video-result-js")
const videoPLayholderSectionElement = document.querySelector("#video-playholder-js")
const overviewElement = document.querySelector("#overview-js")

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


const SerchFunc = () => {
    searchBtnElemnt.addEventListener("click", (event) => {
        event.preventDefault()
        inputElement.classList.toggle("d-block")
    })

    inputElement.addEventListener("keyup", (e) => {
        e.preventDefault()
        if (e.keyCode == 13 && inputElement.value != "") {
            resCinemaElemenr.classList.add("d-none")
            videoPLayholderSectionElement.classList.add("d-none") 
            overviewElement.classList.add("d-none")
        resultSearchElement.classList.remove("d-none")
            videos.map((video) => {
                if ((inputElement.value.toLowerCase() === video.Title.toLowerCase())
                    || (parseInt(inputElement.value) == parseInt(video.Year))
                ) {
                    videoResulteElement.innerHTML = ""
                    SearchResulteFunc()
                }
            })
        } else if (e.keyCode == 13 && inputElement.value == "") {
            resCinemaElemenr.classList.remove("d-none")
            videoPLayholderSectionElement.classList.remove("d-none")
             overviewElement.classList.add("d-none")
            resultSearchElement.classList.add("d-none")
        }
    })
}
const SearchResulteFunc = () => {


    videos.map((video, videoIndex) => {

        if ((inputElement.value.toLowerCase() === video.Title.toLowerCase())
            || (parseInt(inputElement.value) == parseInt(video.Year))
        ) {
            let    letterLength = ""
            for (let i = 0; i < video.Title.length; i++) {
                if (video.Title.length >= 15) {
                    letterLength = `${video.Title.substr(0, 15)}...` 
                }else{
                    letterLength = video.Title
                }
            }
            videoResulteElement.innerHTML += `
            
            <div class="col-6 col-sm-4 col-md-3 col-xl-2">
            <a href="cinema.html?${videoIndex}" class="video__link video">
                <div class="video__imageholder">
                    <img src="${video.Poster}" alt="Error upload">
                </div>
                <div class="video__desc">
                    <h5 class="video__title">${letterLength}</h5>
                    <p class="video__date">${video.Year}</p>
                </div>
            </a>
        </div>
            `
        }
    })

}




console.clear()
GetObjectFunc()
SerchFunc()


