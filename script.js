document.addEventListener("DOMContentLoaded", function () {
  const toggleElements = document.querySelectorAll('.toggle');

  toggleElements.forEach(toggleElement => {
    toggleElement.addEventListener('click', function () {
      const subList = this.parentElement.querySelector('.sub-list');
      const isExpanded = subList.classList.toggle('visible');

      // Adjust container height
      const container = subList.closest('.expandable-list');
      const containerHeight = isExpanded ? subList.scrollHeight + 'px' : 'auto';
      container.style.height = containerHeight;

      // Toggle arrow icon
      this.textContent = isExpanded ? '▼' : '▶';

      // Reset other expanded lists
      document.querySelectorAll('.sub-list.visible').forEach(item => {
        if (item !== subList) {
          item.classList.remove('visible');
          item.closest('.expandable-list').style.height = 'auto';
        }
      });
    });
  });
});
