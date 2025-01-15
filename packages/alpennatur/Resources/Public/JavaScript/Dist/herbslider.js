document.addEventListener("DOMContentLoaded", function () {
    const band = document.getElementById('image-band');
    const prevButton = document.getElementById('band-prev');
    const nextButton = document.getElementById('band-next');

    if (!band || !prevButton || !nextButton) {
        console.error("Slider-Elemente nicht gefunden!");
        return;
    }

    let currentOffset = 0; // current position
    const items = band.querySelectorAll('.image-item');
    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
    const maxOffset = (items.length * itemWidth) - band.offsetWidth; // max width

    console.log('Item Width:', itemWidth);
    console.log('Max Offset:', maxOffset);
    console.log('Current Offset:', currentOffset);

    // Next-btn
    nextButton.addEventListener('click', function () {
        if (currentOffset < maxOffset) {
            currentOffset += itemWidth;
            if (currentOffset > maxOffset) {
                currentOffset = maxOffset;
            }
            band.style.transform = 'translateX(-${currentOffset}px)';
        }
    });

    // Back-btn
    prevButton.addEventListener('click', function () {
        if (currentOffset > 0) {
            currentOffset -= itemWidth;
            if (currentOffset < 0) {
                currentOffset = 0;
            }
            band.style.transform = 'translateX(-${currentOffset}px)';
        }
    });

});
