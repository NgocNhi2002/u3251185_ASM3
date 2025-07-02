
    const images = [
     "./assets/images/494572829_977638864565262_1781255251760351590_n-removebg-preview.png",
      "./assets/images/494813831_1238661474264765_6350029784922620011_n.png"
    ];
  
    let currentIndex = 0;
    const imageElement = document.getElementById("carousel-image");
  
    document.querySelector(".left").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      imageElement.src = images[currentIndex];
    });
  
    document.querySelector(".right").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      imageElement.src = images[currentIndex];
    });

  