const toggleOptions = document.querySelectorAll('.toggle-option');
const patientFields = document.querySelectorAll('.patient-only');
const doctorFields = document.querySelectorAll('.doctor-only');

toggleOptions.forEach(option => {
  option.addEventListener('click', () => {
    toggleOptions.forEach(opt => opt.classList.remove('active'));
    option.classList.add('active');

    if (option.dataset.toggle === 'patient') {
      patientFields.forEach(field => field.style.display = 'block');
      doctorFields.forEach(field => field.style.display = 'none');
    } else {
      patientFields.forEach(field => field.style.display = 'none');
      doctorFields.forEach(field => field.style.display = 'block');
    }
  });
});

// Get the "Go to Chat" buttons
const chatBtns = document.querySelectorAll('.chat-btn');

// Add click event listener to each "Go to Chat" button
chatBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Navigate to the chat page
    window.location.href = 'chat.html';
  });
});

// Chat functionality (if on the chat page)
if (window.location.href.includes('chat.html')) {
  const messageInput = document.getElementById('messageInput');
  const sendMessageBtn = document.getElementById('sendMessageBtn');
  const chatMessages = document.querySelector('.chat-messages');

  sendMessageBtn.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
      addMessageToChat('user', message);
      messageInput.value = '';
      // Add your logic here to send the message to the doctor
    }
  });

  messageInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      sendMessageBtn.click();
    }
  });

  function addMessageToChat(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

const timeSlots = document.querySelectorAll('.time-slot');

timeSlots.forEach(slot => {
  slot.addEventListener('click', () => {
    const patientName = slot.querySelector('.patient-name').textContent;
    // Open the chat box for the clicked patient
    openChatBox(patientName);
  });
});

function openChatBox(patientName) {
  // Implement the logic to open the chat box for the given patient name
  console.log(`Opening chat box for ${patientName}`);
}