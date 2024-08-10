document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('surveyForm');
    const resultsDiv = document.getElementById('results');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let resultsHTML = '<h2>Resultados de la Encuesta</h2>';

        const formData = new FormData(form);
        for (let [name, value] of formData.entries()) {
            resultsHTML += `<p>${name}: ${value}</p>`;
        }

        resultsDiv.innerHTML = resultsHTML;
    });
});
