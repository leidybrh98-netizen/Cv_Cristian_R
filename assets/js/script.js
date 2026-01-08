document.addEventListener('DOMContentLoaded', function() {
    const printBtn = document.getElementById('print-btn');
    printBtn.addEventListener('click', function() {
        window.print();
    });

    // Add smooth scrolling to sections if needed, but since single page, maybe not.

    // Add animation delay for sections
    const sections = document.querySelectorAll('.cv-section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.2}s`;
    });
});