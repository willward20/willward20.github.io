// Modal initialization
document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal-trigger');
    modals.forEach(trigger => {
      trigger.addEventListener('click', function () {
        const target = document.querySelector(this.getAttribute('data-target'));
        if (target) {
          target.style.display = 'block';
        }
      });
    });
  
    const closeButtons = document.querySelectorAll('.modal-close');
    closeButtons.forEach(button => {
      button.addEventListener('click', function () {
        const modal = this.closest('.modal');
        if (modal) {
          modal.style.display = 'none';
        }
      });
    });
  });
  
  // Close modal on background click
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  });
  