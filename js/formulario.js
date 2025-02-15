document.addEventListener('DOMContentLoaded', function () {
    const modalContainer = document.getElementById('modalContainer');
    const openModalButton = document.querySelector('.separa');

    if (openModalButton) {
        openModalButton.addEventListener('click', function () {
            modalContainer.innerHTML = `
            <div id="contactModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
                    <h2 class="text-2xl font-bold mb-4">Formulario de Contacto</h2>
                    <form id="contactForm">
                        <div class="mb-4">
                            <label for="name" class="block text-gray-700">Nombre:</label>
                            <input type="text" id="name" class="w-full px-3 py-2 border rounded" required>
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-gray-700">Correo Electrónico:</label>
                            <input type="email" id="email" class="w-full px-3 py-2 border rounded" required>
                        </div>
                        <div class="mb-4">
                            <label for="message" class="block text-gray-700">Información Solicitada:</label>
                            <textarea id="message" class="w-full px-3 py-2 border rounded" required placeholder="Ingrese la Información Que desee Saber"></textarea>
                        </div>
                        <div class="flex justify-end">
                            <button type="button" class="bg-gray-500 text-white px-4 py-2 rounded mr-2" onclick="closeModal()">Cancelar</button>
                            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Enviar</button>
                        </div>
                    </form>
                </div>
            `;
        });
    }
});

function closeModal() {
    const modalContainer = document.getElementById('modalContainer');
    modalContainer.innerHTML = '';
}