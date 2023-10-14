document.addEventListener("DOMContentLoaded", function () {
  const toggleElements = document.querySelectorAll('.toggle');

  toggleElements.forEach(toggleElement => {
    toggleElement.addEventListener('click', function () {
      const subList = this.parentElement.querySelector('.sub-list');
      const isExpanded = subList.classList.toggle('visible');

      // Reset all lists
      document.querySelectorAll('.sub-list').forEach(item => {
        if (item !== subList) {
          item.classList.remove('visible');
        }
      });

      // Toggle arrow icon
      toggleElements.forEach(icon => {
        if (icon !== this) {
          icon.textContent = '▶';
        }
      });
      this.textContent = isExpanded ? '▼' : '▶';
    });
  });
});
