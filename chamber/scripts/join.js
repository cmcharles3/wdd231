// 1. Set the hidden timestamp to the current date/time
document.addEventListener("DOMContentLoaded", () => {
  const timestampField = document.getElementById("timestamp");
  if (timestampField) {
    timestampField.value = new Date().toISOString();
  }

  // 2. Modal Logic
  const infoButtons = document.querySelectorAll('.info-btn');
  const closeButtons = document.querySelectorAll('.close-modal');

  infoButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.showModal();
      }
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Find the closest parent dialog and close it
      button.closest('dialog').close();
    });
  });
});