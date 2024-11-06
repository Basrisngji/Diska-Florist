// Menambahkan animasi fade in pada konten ketika halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('fade-in');
});

// Menambahkan class fade-in untuk animasi
const style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        opacity: 0;
        animation: fadeIn 1s forwards;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

function toggleDetail(productId) {
    const productDetail = document.getElementById(productId);
    if (productDetail.style.display === "none" || productDetail.style.display === "") {
        productDetail.style.display = "block";
    } else {
        productDetail.style.display = "none";
    }
}
