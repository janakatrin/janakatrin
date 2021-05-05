// create references to the modal...
var modal = document.getElementById("myModal");
// to all images -- note I'm using a class!
var images = document.getElementsByClassName("myImages");
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    console.log(evt);
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
     
      const scrollY = 
        document.documentElement.style.getPropertyValue('--scroll-y');
      const body = document.body;
      body.style.position = 'relative';
      body.style.top = `-${scrollY}`;  
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
    
  modal.style.display = "none";
}

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});