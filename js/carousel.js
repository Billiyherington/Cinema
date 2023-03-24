const CarouselFunc = ()=>{
    const carouselinner = document.querySelector("#carousel-inner-js")
    carouselinner.innerHTML = ""
    for (let index = videos.length-3; index < videos.length; index++) {
        
        console.log(videos[index]);
        carouselinner.insertAdjacentHTML("beforeend", `
        <div class="carousel-item" id="carousel-item-js">
        <div class="carousel-imageholder">
            <img src="${videos[index].Images[0]}" class="d-block w-100" alt="...">
        </div>
        <div class="col-3 col-xl-7 carousel-content">
            <h4 class="carousel-title">${videos[index].Title}</h4>
            <div class="carousel-text">
                <p>
                   ${videos[index].Plot}
                </p>
            </div>
            <div class="stars-icon">
                <time class="carousel-time" id="carousel-time-js">${videos[index].Year}</time>
                <img src="./image/star-filled-icon.svg" alt="Error">
                <span class="stars-level">${videos[index].imdbRating}</span>
            </div>
        </div>
    </div>
        `)
    }
    const carouselItemElement = carouselinner.querySelectorAll("#carousel-item-js")

    carouselItemElement.forEach((item, index)=>{
        if(index === 0){
            item.classList.add("active")
        }
    })

}
CarouselFunc()