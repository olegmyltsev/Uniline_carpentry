const galleryTitle = document.getElementById("galleryTitle"),
    galleryContent = document.getElementById("galleryContent")

galleryTitle.addEventListener('click', function(){
    this.classList.toggle("gallery__title_active")
    galleryContent.classList.toggle('gallery__objects_active')
})