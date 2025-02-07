const formData = {
  email: '',
  message: '',
};

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input[name="email"]'),
  messageInput: document.querySelector('textarea[name="message"]'),
};

debugger;

const dataFromLocalStorage = JSON.parse(
  localStorage.getItem('feedback-form-state') || '{}'
);

refs.messageInput.value = dataFromLocalStorage.message ?? '';
refs.emailInput.value = dataFromLocalStorage.email ?? '';

refs.feedbackForm.addEventListener('input', handleInput);

function handleInput() {
  formData.email = refs.emailInput.value.trim();
  formData.message = refs.messageInput.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

refs.feedbackForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (refs.messageInput.value && refs.emailInput.value) {
    localStorage.removeItem('feedback-form-state');
    refs.feedbackForm.reset();
  } else {
    alert('Please, fill all fields');
    return;
  }
}
