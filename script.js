function changeImage(imagePath){
    const displayedImage=document.getElementById('displayedImage');
    const thumbnailContainer=document.getElementById('thumbnailContainer');

    displayedImage.style.opacity=0;

    setTimeout(()=>{ 
        displayedImage.src=imagePath;
        displayedImage.style.opacity=1;
    },500);
    const thumbnails=thumbnailContainer.getElementsByTagName('img');
    for(const thumbnail of thumbnails){
        thumbnail.classList.remove('selected');
        thumbnail.style.borderStyle="none";
    }
    const selectedThumbnail=Array.from(thumbnails).find(thumbnail=> thumbnail.src.includes(imagePath));
    if(selectedThumbnail){
        selectedThumbnail.classList.add('selected');
        selectedThumbnail.style.borderStyle="Solid";
    }
}