document.addEventListener('DOMContentLoaded', function() {
    const messagesContainer = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
  
    function sendMessage() {
      const message = userInput.value.trim();
      if (message !== '') {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        userInput.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
    }
  
    sendButton.addEventListener('click', sendMessage);
  
    userInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        sendMessage();
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
  const messagesContainer = document.getElementById('chat-messages');
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');

  function sendMessage() {
    const message = userInput.value.trim();
    if (message !== '') {
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      messagesContainer.appendChild(messageElement);
      userInput.value = '';
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

  function deleteMessage() {
    const messageElements = messagesContainer.querySelectorAll('div');
    if (messageElements.length > 0) {
      messagesContainer.removeChild(messageElements[0]);
    }
  }

  sendButton.addEventListener('click', sendMessage);

  userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete Message';
  deleteButton.addEventListener('click', deleteMessage);
  document.body.appendChild(deleteButton);
});

  