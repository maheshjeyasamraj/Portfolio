<script>
  // Smooth scrolling for anchor links with offset (for sticky navbar)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    });
  });

  // Initialize Bootstrap tooltips
  document.addEventListener('DOMContentLoaded', () => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].forEach(el => new bootstrap.Tooltip(el));
  });

</script>


