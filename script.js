function mostrarDetalle(servicio) {
  const detalles = {
    cctv: "Instalamos sistemas de videovigilancia profesional con cámaras IP, grabadores y monitoreo remoto.",
    control: "Implementamos control de acceso físico y lógico con tarjetas, biometría y software de gestión.",
    bms: "Automatizamos edificios con sensores, control de clima, iluminación y sistemas inteligentes.",
    redes: "Diseñamos e instalamos redes cableadas y WiFi para empresas, con alta disponibilidad.",
    computo: "Suministramos computadoras, laptops, servidores y configuraciones personalizadas.",
    consumibles: "Ofrecemos consumibles tecnológicos: toners, cables, periféricos y accesorios TI."
  };
  document.getElementById("detalle-servicio").innerText = detalles[servicio] || "Seleccione un servicio para ver detalles.";
}
