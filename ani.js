function handleIntersection(entries, observer) {
    entries.forEach(function (entry) {
      console.log('Element Top:', entry.target.getBoundingClientRect().top);
      
      if (entry.isIntersecting) {
        console.log('Element in Viewport!');
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }
  
  function createObserver(target, rootMargin) {
    var observer = new IntersectionObserver(handleIntersection, {
      rootMargin: rootMargin || "0px",
    });
  
    observer.observe(target);
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    var projectSection = document.getElementById('project');
    createObserver(projectSection, "0px 0px -50% 0px"); // Tambahkan rootMargin di sini
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    var aboutSection = document.getElementById('about');
    createObserver(aboutSection, "0px 0px -50% 0px"); // Sesuaikan rootMargin di sini
  });

  document.addEventListener('DOMContentLoaded', function () {
    var imgElement = document.querySelector('.imgmove');
    imgElement.classList.add('animate-imgmove');
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Ambil semua elemen dengan class "nav-link"
    var navLinks = document.querySelectorAll('.nav-link');

    // Tambahkan event listener untuk setiap elemen
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        // Hapus class "active" dari semua elemen
        navLinks.forEach(function (navLink) {
          navLink.classList.remove('active');
        });

        // Tambahkan class "active" pada elemen yang diklik
        link.classList.add('active');
      });
    });
  });