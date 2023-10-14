document.addEventListener("DOMContentLoaded", function () {
  const toggleElements = document.querySelectorAll('.toggle');
  const subLists = document.querySelectorAll('.sub-list');

  toggleElements.forEach((toggleElement, index) => {
    toggleElement.addEventListener('click', function () {
      const isExpanded = subLists[index].classList.toggle('visible');

      // Toggle arrow icon
      this.textContent = isExpanded ? '▼' : '▶';
    });

    // Expand all lists by default
    subLists[index].classList.add('visible');
    toggleElement.textContent = '▼';
  });
});