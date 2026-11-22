const saveButton = document.querySelector('.save-button');
const saveDialog = document.querySelector('.save-dialog');
const saveDialogForm = saveDialog.querySelector('.save-dialog__form');

saveButton.addEventListener('click', () => {
  saveDialog.showModal();
});

saveDialogForm.addEventListener('submit', (event) => {
  event.preventDefault();
  saveDialog.close();
});
