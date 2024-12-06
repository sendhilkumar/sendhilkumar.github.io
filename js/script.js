// Function to dynamically generate HTML from JSON data
function generateHtml(data, container) {
    // Clear previous content
    container.innerHTML = '';

    const nameElement = document.createElement('div');
    nameElement.classList.add('rule');
    nameElement.innerHTML = `
                <h2>${data.name}</h2>
            `;
    container.appendChild(nameElement);

    // Example: assuming JSON is an array of rule objects
    if (Array.isArray(data.criteria)) {
        data.criteria.forEach(criteria => {
            const criteriaElement = document.createElement('div');
            criteriaElement.classList.add('criteria');
            criteriaElement.innerHTML = `
                 <p>${criteria.left}</p>
                <p> vs </p>
                <p>${criteria.right}</p>
            `;
            container.appendChild(criteriaElement);
        });
    } else {
        container.innerHTML = '<p>No data available</p>';
    }
}