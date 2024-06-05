document.addEventListener('DOMContentLoaded', function () {
    const projets = document.querySelectorAll('.projet');

    projets.forEach(projet => {
        projet.addEventListener('mouseover', function () {
            const description = this.querySelector('.project-description');
            description.style.opacity = '1';
        });

        projet.addEventListener('mouseout', function () {
            const description = this.querySelector('.project-description');
            description.style.opacity = '0';
        });
    });
});
