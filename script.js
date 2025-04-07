// Datos de ejemplo para los lotes (sin cambios)
const lotesInfo = {
    "_1": { numero: 1, area: "542.88 m²", estado: "Reservado", precio: "$32,500" },
    "_2": { numero: 2, area: "364.92 m²", estado: "Disponible", precio: "$22,500" },
    "_3": { numero: 3, area: "304.92 m²", estado: "Disponible", precio: "$22,500" },
    "_4": { numero: 4, area: "364.92 m²", estado: "Reservado", precio: "$22,500" },
    "_5": { numero: 5, area: "364.92 m²", estado: "Reservado", precio: "$22,500" },
    "_6": { numero: 6, area: "364.92 m²", estado: "Reservado", precio: "$22,500" },
    "_7": { numero: 7, area: "360.42 m²", estado: "Disponible", precio: "$25,500" },
    "_8": { numero: 8, area: "404.82 m²", estado: "Disponible", precio: "$25,500" },
    "_9": { numero: 9, area: "403.54 m²", estado: "Disponible", precio: "$25,500" },
    "_10": { numero: 10, area: "403.54 m²", estado: "Disponible", precio: "$27,500" },
    "_11": { numero: 11, area: "540 m²", estado: "Reservado", precio: "$27,500" },
    "_12": { numero: 12, area: "540 m²", estado: "Disponible", precio: "$27,500" },
    "_13": { numero: 13, area: "480 m²", estado: "Disponible", precio: "$24,500" },
    "_14": { numero: 14, area: "540 m²", estado: "Reservado", precio: "$27,500" },
    "_15": { numero: 15, area: "540 m²", estado: "Disponible", precio: "$27,500" },
    "_16": { numero: 16, area: "540 m²", estado: "Disponible", precio: "$24,500" },
    "_17": { numero: 17, area: "480 m²", estado: "Disponible", precio: "$27,500" },
    "_18": { numero: 18, area: "540 m²", estado: "Disponible", precio: "$27,500" },
    "_19": { numero: 19, area: "480 m²", estado: "Disponible", precio: "$24,500" },
    "_20": { numero: 20, area: "324 m²", estado: "Disponible", precio: "$18,500" },
    "_21": { numero: 21, area: "324 m²", estado: "Disponible", precio: "$18,500" },
    "_22": { numero: 22, area: "480 m²", estado: "Disponible", precio: "$24,500" },
    "_23": { numero: 23, area: "324 m²", estado: "Disponible", precio: "$18,500" },
    "_24": { numero: 24, area: "324 m²", estado: "Disponible", precio: "$18,500" },
    "_25": { numero: 25, area: "319.50 m²", estado: "Disponible", precio: "$18,500" },
    "_26": { numero: 26, area: "432 m²", estado: "Disponible", precio: "$22,500" },
    "_27": { numero: 27, area: "432 m²", estado: "Disponible", precio: "$22,500" },
    "_28": { numero: 28, area: "432 m²", estado: "Disponible", precio: "$22,500" },
    "_29": { numero: 29, area: "319.50 m²", estado: "Disponible", precio: "$20,500" },
    "_30": { numero: 30, area: "318.54 m²", estado: "Disponible", precio: "$15,500" },
    "_31": { numero: 31, area: "318.54 m²", estado: "Disponible", precio: "$15,500" },
    "_32": { numero: 32, area: "479.45 m²", estado: "Disponible", precio: "$15,500" },
    "_33": { numero: 33, area: "300 m²", estado: "Disponible", precio: "$15,500" },
    "_34": { numero: 34, area: "369.50 m²", estado: "Disponible", precio: "$15,500" },
    "_35": { numero: 35, area: "374 m²", estado: "Disponible", precio: "$15,500" },
    "_36": { numero: 36, area: "338.50 m²", estado: "Disponible", precio: "$15,500" },
    "_37": { numero: 37, area: "343 m²", estado: "Disponible", precio: "$15,500" },
    "_38": { numero: 38, area: "343 m²", estado: "Disponible", precio: "$15,500" },
    "_39": { numero: 39, area: "343 m²", estado: "Disponible", precio: "$15,500" },
    "_40": { numero: 40, area: "343 m²", estado: "Disponible", precio: "$15,500" },
    "_41": { numero: 41, area: "338.50 m²", estado: "Disponible", precio: "$20,500" }
};

// Seleccionar todos los rect y polygons con clase cls-17
const lotes = document.querySelectorAll('.cls-17');
const infoBox = document.getElementById('lote-info');

// Agregar clase según estado y manejar clics
lotes.forEach(lote => {
    const id = lote.id;
    if (lotesInfo[id]) {
        const estado = lotesInfo[id].estado.toLowerCase();
        lote.classList.add(estado);
    }

    lote.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = lote.id;
        const info = lotesInfo[id];
        if (info) {
            // Construir el contenido del popup
            infoBox.innerHTML = `
                <h3>Lote ${info.numero}</h3>
                <p><strong>Área:</strong> ${info.area}</p>
                <p><strong>Estado:</strong> <span class="estado ${info.estado.toLowerCase()}">${info.estado}</span></p>
                <p><strong>Precio:</strong> ${info.precio}</p>
            `;

            // Posicionar el popup
            const rect = lote.getBoundingClientRect();
            const scrollX = window.scrollX || window.pageXOffset;
            const scrollY = window.scrollY || window.pageYOffset;
            const popupWidth = infoBox.offsetWidth || 200; // Ancho estimado del popup
            const popupHeight = infoBox.offsetHeight || 150; // Altura estimada del popup
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            // Decidir si posicionar a la izquierda o derecha
            const spaceRight = windowWidth - rect.right; // Espacio a la derecha del lote
            if (spaceRight < popupWidth + 10 && rect.left > popupWidth + 10) {
                // Si no hay espacio a la derecha pero sí a la izquierda, posicionar a la izquierda
                infoBox.style.left = `${rect.left + scrollX - popupWidth - 10}px`;
            } else {
                // Por defecto, posicionar a la derecha
                infoBox.style.left = `${rect.right + scrollX + 10}px`;
            }

            // Decidir si el popup va arriba o abajo
            const spaceBelow = windowHeight - rect.bottom; // Espacio debajo del lote
            if (spaceBelow < popupHeight + 10 && rect.top > popupHeight + 10) {
                // Si no hay espacio debajo pero sí arriba, posicionar arriba
                infoBox.style.top = `${rect.top + scrollY - popupHeight - 10}px`;
            } else {
                // Por defecto, posicionar abajo
                infoBox.style.top = `${rect.bottom + scrollY + 10}px`;
            }

            infoBox.style.display = 'block';
        }
    });
});

// Ocultar el popup cuando se hace clic fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('.cls-17') && !e.target.closest('#lote-info')) {
        infoBox.style.display = 'none';
    }
});