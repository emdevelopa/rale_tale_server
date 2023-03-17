// create an object to represent the chatbot's responses
const chatbotResponses = {
    "hi": "Hello! How can I assist you today?",
    "how are you": "I'm doing well, thank you. How about you?",
    "bye": "Goodbye! Have a nice day!"
  };
  
  function sendMessage() {
    // get the user's message from the input field
    const userMessage = document.getElementById("user-message").value;
    
    // create a new div to display the user's message
    const userMessageDiv = document.createElement("div");
    userMessageDiv.innerHTML = "You: " + userMessage;
    
    // add the user's message to the chatbot messages div
    const chatbotMessagesDiv = document.getElementById("chatbot-messages");
    chatbotMessagesDiv.appendChild(userMessageDiv);
    
    // check if the user's message matches any of the chatbot responses
    let chatbotResponse = "I'm sorry, I don't understand. Can you please rephrase your question?";
    
    for (let response in chatbotResponses) {
      if (userMessage.toLowerCase().includes(response)) {
        chatbotResponse = chatbotResponses[response];
        break;
      }
    }
    
    // create a new div to display the chatbot's response
    const chatbotResponseDiv = document.createElement("div");
    chatbotResponseDiv.innerHTML = "Chatbot: " + chatbotResponse;
    
    // add the chatbot's response to the chatbot messages div
    chatbotMessagesDiv.appendChild(chatbotResponseDiv);
    
    // clear the input field
    document.getElementById("user-message").value = "";
  }
  