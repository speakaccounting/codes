document.addEventListener("DOMContentLoaded", function () {
  const toggleElements = document.querySelectorAll('.toggle');

  toggleElements.forEach(toggleElement => {
    toggleElement.addEventListener('click', function () {
      const subList = this.parentElement.querySelector('.sub-list');
      const isExpanded = subList.classList.toggle('visible');

      // Adjust container height
      const container = subList.closest('.expandable-list');
      container.style.height = isExpanded ? subList.scrollHeight + 'px' : null;

      // Toggle arrow icon
      this.textContent = isExpanded ? '▼' : '▶';
    });
  });
});
