document.addEventListener("DOMContentLoaded", function () {
  const toggleElements = document.querySelectorAll('.toggle');

  toggleElements.forEach(toggleElement => {
    toggleElement.addEventListener('click', function () {
      const subList = this.parentElement.querySelector('.sub-list');
      subList.classList.toggle('visible');
      this.textContent = subList.classList.contains('visible') ? '▼' : '▶';
    });
  });
});
