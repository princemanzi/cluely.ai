//  const btn = document.getElementById("learnBtn");
//     const dropdown = document.getElementById("learnDropdown");
//     const container = document.querySelector(".dropdown");

//     function toggleDropdown(e) {
//       // Prevent the window click listener from immediately closing it
//       e.stopPropagation();
//       const isOpen = dropdown.classList.toggle("show");
//       btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
//     }

//     // open/close on button click
//     btn.addEventListener("click", toggleDropdown);

//     // close when clicking outside the dropdown container
//     window.addEventListener("click", (e) => {
//       if (!container.contains(e.target)) {
//         dropdown.classList.remove("show");
//         btn.setAttribute("aria-expanded", "false");
//       }
//     });

//     // close on Escape key
//     window.addEventListener("keydown", (e) => {
//       if (e.key === "Escape") {
//         dropdown.classList.remove("show");
//         btn.setAttribute("aria-expanded", "false");
//       }
//     });
//     // Add 'playsinline' attribute dynamically for better compatibility
//     const videos = document.querySelectorAll("video");
//     videos.forEach((video) => {
//       video.setAttribute("playsinline", "");
//     });

    // for the content that have an arrow 

  document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll(".collapsible").forEach(button => {
        button.addEventListener("click", () => {
          // Toggle active class on the clicked button
          button.classList.toggle("active");
          
          // Get the corresponding paragraph content
          const content = button.nextElementSibling;
          
          // Toggle the show class
          if (content.classList.contains("show")) {
            content.classList.remove("show");
          } else {
            content.classList.add("show");
          }
        });
      });

      // Optional: Close other sections when opening a new one (accordion behavior)
      // Uncomment the code below if you want only one section open at a time
      /*
      document.querySelectorAll(".collapsible").forEach(button => {
        button.addEventListener("click", () => {
          const isActive = button.classList.contains("active");
          
          // Close all sections
          document.querySelectorAll(".collapsible").forEach(btn => {
            btn.classList.remove("active");
            btn.nextElementSibling.classList.remove("show");
          });
          
          // If this wasn't active, open it
          if (!isActive) {
            button.classList.add("active");
            button.nextElementSibling.classList.add("show");
          }
        });
      });
      */
    });
