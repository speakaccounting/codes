document.addEventListener("DOMContentLoaded", function () {
  const toggleElements = document.querySelectorAll('.toggle');

  toggleElements.forEach(toggleElement => {
    toggleElement.addEventListener('click', function () {
      const subList = this.parentElement.querySelector('.sub-list');
      const isExpanded = subList.classList.toggle('visible');

      if (isExpanded) {
        // Get the total height of the sublist items
        const subListHeight = Array.from(subList.children).reduce((totalHeight, listItem) => {
          return totalHeight + listItem.clientHeight;
        }, 0);

        // Set the container height to the total height
        const container = subList.closest('.expandable-list');
        container.style.height = subListHeight + 'px';
      } else {
        // Reset container height to auto
        const container = subList.closest('.expandable-list');
        container.style.height = 'auto';
      }

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
