document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to the Robotics Tutorial Site');
});

document.getElementById('tutorial-search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const tutorials = document.querySelectorAll('#tutorial-list li');

    tutorials.forEach(function(tutorial) {
        const text = tutorial.textContent.toLowerCase();
        if (text.includes(query)) {
            tutorial.style.display = '';
        } else {
            tutorial.style.display = 'none';
        }
    });
});