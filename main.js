document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector('form');
    
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario
        
        const searchTerm = this.querySelector('input[type="text"]').value;
        alert(`Buscando: ${searchTerm}`); // Puedes cambiar esto a lo que necesites
        // Aquí puedes agregar lógica para redirigir o hacer otra acción con el término de búsqueda
        // Por ejemplo, redirigir a una página de resultados:
        // window.location.href = `results.html?search=${encodeURIComponent(searchTerm)}`;
    });
});

