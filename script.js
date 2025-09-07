document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnSaludo");
  
  btn.addEventListener("click", () => {
    alert("¡Hola, Gian! 🚀 Tu web ya está funcionando.");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnSaludo");

  if (btn) {
    btn.addEventListener("click", () => {
      alert("¡Hola, Gian! 🚀 Tu web ya está funcionando.");
    });
  }

  // === ANIMACIONES DE ENTRADA ===
  const elementos = document.querySelectorAll("#hero, .card");

  const mostrarElemento = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(mostrarElemento, {
    threshold: 0.2
  });

  elementos.forEach(el => observer.observe(el));
});
