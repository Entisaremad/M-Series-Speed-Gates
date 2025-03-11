
const zoomImage = document.getElementById('zoomImage');


zoomImage.addEventListener('mousemove', (e) => {
    const { width, height, left, top } = zoomImage.getBoundingClientRect();

    const xRatio = (e.clientX - left) / width;
    const yRatio = (e.clientY - top) / height;


    const scale = 1.4;


    zoomImage.style.transform = `scale(${scale}) translate(-${xRatio * 20}%, -${yRatio * 20}%)`;

});


zoomImage.addEventListener('mouseleave', () => {
    zoomImage.style.transform = 'scale(1)';
});