:root {
  --azul-oscuro: #00264d;
  --azul-medio: #0059b3;
  --azul-claro: #e6f0ff;
  --texto: #222;
}

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: var(--azul-claro);
  color: var(--texto);
}

header {
  background-color: var(--azul-oscuro);
  color: white;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
}

header img {
  height: 50px;
}

nav a {
  color: white;
  margin-left: 20px;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  color: #99ccff;
}

/* --- Carrusel --- */
.carousel {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
  height: 60vh; /* altura relativa para escritorio */
  max-height: 500px;
  border-radius: 8px 8px 0 0;
}

.carousel-slide {
  width: 100%;
  height: 100%;
  user-select: none;
  pointer-events: none;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* por defecto para escritorio */
  border-radius: 8px 8px 0 0;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0,0,0,0.3);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 50%;
  user-select: none;
  transition: background-color 0.3s ease;
  z-index: 10;
}

.carousel-button:hover {
  background-color: rgba(0,0,0,0.6);
}

.carousel-button.prev {
  left: 15px;
}

.carousel-button.next {
  right: 15px;
}

/* Texto debajo del carrusel */
.hero-text {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  max-width: 90%;
  margin: 20px auto 40px;
  padding: 20px 30px;
  border-radius: 8px;
  text-align: center;
  font-size: 2.5em;
}

/* Secciones */
.section {
  padding: 60px 40px;
  max-width: 1200px;
  margin: auto;
}

.section h2 {
  color: var(--azul-medio);
  margin-bottom: 30px;
  text-align: center;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 15px;
}

footer {
  background-color: var(--azul-oscuro);
  color: white;
  padding: 30px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

footer div {
  margin-bottom: 20px;
}

.redes a {
  color: white;
  margin-right: 15px;
  text-decoration: none;
}

.redes a:hover {
  text-decoration: underline;
}

/* === Ajuste para sistemas y servicios tecnológicos con 3 columnas === */
.servicios-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .servicios-grid {
    grid-template-columns: 1fr;
  }
}

/* === Contacto con formulario moderno === */
#contacto {
  background: #fff;
  padding: 60px 40px;
  max-width: 800px;
  margin: 60px auto;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  color: #222;
}
#contacto h2 {
  color: var(--azul-medio);
  margin-bottom: 20px;
  text-align: center;
}
#contacto p {
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.1em;
}
.contact-info {
  text-align: center;
  margin-bottom: 30px;
  font-size: 1em;
  color: #444;
}
.contact-info p {
  margin: 6px 0;
}
.contact-info a {
  color: var(--azul-medio);
  text-decoration: none;
}
.contact-info a:hover {
  text-decoration: underline;
}

form.contact-form {
  max-width: 600px;
  margin: 0 auto;
}
form.contact-form .form-group {
  margin-bottom: 20px;
}
form.contact-form input,
form.contact-form textarea {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}
form.contact-form input:focus,
form.contact-form textarea:focus {
  border-color: var(--azul-medio);
  outline: none;
  box-shadow: 0 0 8px rgba(0, 89, 179, 0.4);
  background-color: #fff;
}
form.contact-form textarea {
  min-height: 120px;
  resize: vertical;
}
form.contact-form button {
  background: linear-gradient(45deg, var(--azul-medio), var(--azul-oscuro));
  color: white;
  border: none;
  padding: 14px 25px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}
form.contact-form button:hover {
  background: linear-gradient(45deg, var(--azul-oscuro), var(--azul-medio));
}

/* Ajustes para móvil */
@media (max-width: 768px) {
  .carousel {
    height: 40vh; /* menos alto en móviles */
  }
  .carousel-slide img {
    object-fit: contain; /* muestra imagen completa sin cortar */
    background-color: #000; /* evita espacios blancos */
  }
  .hero-text {
    font-size: 1.8em;
    margin: 15px auto 30px;
  }
}
