
<script>
    const galleries = {
      1: ["type1_1.jpeg", "type1_1.jpeg", "type1_1.jpeg"],
      2: ["type1_2.jpeg", "type1_2.jpeg", "type1_2.jpeg"],
      // Add more if needed
    };
  
    let currentGallery = [];
    let currentIndex = 0;
  
    function openGallery(galleryId) {
      currentGallery = galleries[galleryId];
      currentIndex = 0;
      showImage();
      document.getElementById("lightbox").style.display = "flex";
    }
  
    function showImage() {
      document.getElementById("lightboxImage").src = currentGallery[currentIndex];
    }
  
    function closeGallery() {
      document.getElementById("lightbox").style.display = "none";
    }
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % currentGallery.length;
      showImage();
    }
  
    function prevImage() {
      currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
      showImage();
    }
  </script>
