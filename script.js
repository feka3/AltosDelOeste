// Aquí puedes agregar la lógica JavaScript que quieras, por ejemplo:

document.querySelectorAll('.lot').forEach(lot => {
    lot.addEventListener('click', (e) => {
        const lotId = e.target.id; // Para obtener el id del lote clickeado
        alert(`Haz clic en el lote con ID: ${lotId}`);
    });
});
