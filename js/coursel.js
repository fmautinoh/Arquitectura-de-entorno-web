document.addEventListener("DOMContentLoaded", function () {
    const slideData = {
        costa: [
            {
                title: "Chan Chan",
                description: "Chan Chan es la ciudad de adobe más grande de América y la capital del antiguo Reino Chimú. Ubicada en la costa norte de Perú, cerca de Trujillo.",
                image: "../images/chanchan.png"
            },
            {
                title: "Punta Sal",
                description: "Uno de los destinos de playa más exclusivos del norte de Perú, famoso por sus aguas cálidas y arena blanca, ideal para el descanso y deportes acuáticos.",
                image: "../images/punta-sal.png"
            },
            {
                title: "Monasterio de Santa Catalina",
                description: "Ubicado en el corazón de Arequipa, Perú, este convento del siglo XVI es una de las joyas arquitectónicas más importantes del país.",
                image: "../images/monasterio-catalina.png"
            },
        ],
        sierra: [
            {
                title: "Machu Picchu",
                description: "Una de las siete maravillas del mundo moderno, es el ícono más famoso de Perú.",
                image: "../images/machu-pichu.png"
            },
        ],
        selva: [
            {
                title: "Petroglifos del Manú",
                description: "Son un conjunto de grabados en roca que se encuentran en el Parque Nacional del Manú.",
                image: "../images/petro-manu.png"
            },
        ]
    };

    // Función para actualizar el carrusel
    const updateCarousel = (carouselType, currentIndex) => {
        if (currentIndex >= slideData[carouselType].length || currentIndex < 0) {
            return; // No hacer nada si el índice está fuera de rango
        }

        const slide = slideData[carouselType][currentIndex];

        const title = document.getElementById(`carousel${carouselType.charAt(0).toUpperCase() + carouselType.slice(1)}Title`);
        const description = document.getElementById(`carousel${carouselType.charAt(0).toUpperCase() + carouselType.slice(1)}Description`);
        const image = document.getElementById(`carousel${carouselType.charAt(0).toUpperCase() + carouselType.slice(1)}Image`);

        title.classList.remove("show");
        description.classList.remove("show");
        image.classList.remove("show");

        title.innerText = slide.title;
        description.innerText = slide.description;
        image.src = slide.image;

        setTimeout(() => {
            title.classList.add("show");
            description.classList.add("show");
            image.classList.add("show");
        }, 100);
    };

    // Manejo de botones de avance y retroceso para cada región
    let costaIndex = 0;
    let sierraIndex = 0;
    let selvaIndex = 0;

    // Botón de retroceso y avance para la región costa
    document.getElementById("btn-costa-prev").addEventListener("click", function () {
        if (costaIndex > 0) costaIndex--;
        updateCarousel("costa", costaIndex);
    });
    document.getElementById("btn-costa-next").addEventListener("click", function () {
        if (costaIndex < slideData.costa.length - 1) costaIndex++;
        updateCarousel("costa", costaIndex);
    });

    // Botón de retroceso y avance para la región sierra
    document.getElementById("btn-sierra-prev").addEventListener("click", function () {
        if (sierraIndex > 0) sierraIndex--;
        updateCarousel("sierra", sierraIndex);
    });
    document.getElementById("btn-sierra-next").addEventListener("click", function () {
        if (sierraIndex < slideData.sierra.length - 1) sierraIndex++;
        updateCarousel("sierra", sierraIndex);
    });

    // Botón de retroceso y avance para la región selva
    document.getElementById("btn-selva-prev").addEventListener("click", function () {
        if (selvaIndex > 0) selvaIndex--;
        updateCarousel("selva", selvaIndex);
    });
    document.getElementById("btn-selva-next").addEventListener("click", function () {
        if (selvaIndex < slideData.selva.length - 1) selvaIndex++;
        updateCarousel("selva", selvaIndex);
    });

    // Inicialización
    updateCarousel("costa", costaIndex);
    updateCarousel("sierra", sierraIndex);
    updateCarousel("selva", selvaIndex);
});
