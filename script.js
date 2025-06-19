document.addEventListener("DOMContentLoaded", function() {
    // Menangani efek scroll pada header
    window.addEventListener("scroll", function() {
        let header = document.querySelector(".header");
        header.classList.toggle("scrolled", window.scrollY > 50);
    });

   
    document.querySelector(".btn-1").addEventListener("click", function() {
        window.location.href = "#contact";
    });

    
    document.querySelector(".btn-2").addEventListener("click", function() {
        window.location.href = "#portofolio";
    });
});

 document.querySelector(".btn-2[type='reset']").addEventListener("click", function() {
    window.location.href = "#";
});

  
  document.querySelector("input[type='submit']").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah pengiriman form default
    
    let nama = document.querySelector("input[placeholder='Nama']").value;
    let email = document.querySelector("input[placeholder='Email']").value;
    let phone = document.querySelector("input[placeholder='Phone Number']").value;
    let subject = document.querySelector("input[placeholder='Subject']").value;
    let message = document.querySelector("textarea").value;
    
    let whatsappNumber = "6285889264208"; // Ganti dengan nomor WhatsApp tujuan
    let whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Halo, saya ${nama}.%0AEmail: ${email}%0ANo HP: ${phone}%0ASubject: ${subject}%0APesan: ${message}`;
    
    window.open(whatsappURL, "_blank");
});

document.querySelectorAll(".navbar a, .Contact").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        let targetId = this.getAttribute("href").substring(1);
        let targetElement = document.getElementById(targetId);
        let headerOffset = document.querySelector(".header").offsetHeight;
        let elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        let offsetPosition = elementPosition - headerOffset - 20; // Sesuaikan offset

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

        history.pushState(null, null, `#${targetId}`);
    });
});

document.querySelector(".btn-2").addEventListener("click", function(event) {
    event.preventDefault();

    let targetId = "portofolio"; // ID target yang sama dengan menu navbar
    let targetElement = document.getElementById(targetId);
    let headerOffset = document.querySelector(".header").offsetHeight;
    let elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    let offsetPosition = elementPosition - headerOffset - 20; // Sesuaikan offset agar sama

   
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });

   
    history.pushState(null, null, `#${targetId}`);
});


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const phoneInput = document.querySelector("input[placeholder='Phone Number']");

    form.addEventListener("submit", function(event) {
        let isValid = true;

        // Validasi Phone Number
        const phonePattern = /^[0-9]{10,15}$/; // Hanya angka, panjang 10-15 digit
        if (!phonePattern.test(phoneInput.value)) {
            alert("❌ Nomor HP tidak valid! Hanya boleh angka dan panjang 10-15 digit.");
            isValid = false;
        }

        // Jika tidak valid, hentikan pengiriman form
        if (!isValid) {
            event.preventDefault();
        }
    });
});

    document.querySelector("input[type='reset']").addEventListener("click", function(event) {
        event.preventDefault(); // Mencegah reload halaman
    
        let targetElement = document.getElementById("Home");
        let headerOffset = document.querySelector(".header").offsetHeight;
        let elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        let offsetPosition = elementPosition - headerOffset - 20; // Sesuaikan offset
    
        // Scroll ke bagian Home dengan smooth effect
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    
        // Update URL agar #home muncul di address bar
        history.pushState(null, null, "#Home");
    });
    