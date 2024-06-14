document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Masquer toutes les sections
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('section-visible');
            });

            // Supprimer la classe de la section cible pour la rendre visible avec un effet de "slide"
            targetSection.classList.add('section-visible');
        });
    });

    // Ajouter et colorer les barres de progression
    const skills = document.querySelectorAll('.competence');

    skills.forEach(skill => {
        const percentage = parseInt(skill.getAttribute('data-percentage'));
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';

        const progress = document.createElement('div');
        progress.className = 'progress';
        progress.style.width = percentage + '%';

        if (percentage < 25) {
            progressBar.classList.add('rouge');
        } else if (percentage < 50) {
            progressBar.classList.add('orange');
        } else {
            progressBar.classList.add('vert');
        }

        progressBar.appendChild(progress);
        skill.appendChild(progressBar);
    });

    // Fonction pour activer le mode nuit / jour
    modeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });
});
