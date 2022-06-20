document.addEventListener("click", evt => {
    if (evt.target.classList.contains("img_file")) {
        let preview = document.querySelector(".preview");
        preview.querySelector("img").src = evt.target.src; //getting the clicked image and inserting it into the box
        preview.classList.toggle("active");
        document.querySelector("body").classList.toggle("active");
    } else if (evt.target.classList.contains("preview_cont")) {
        let preview = document.querySelector(".preview");
        preview.classList.toggle("active");
        document.querySelector("body").classList.toggle("active");

    }
})