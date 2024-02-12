import axios from "axios";

const API = {
  GetChatbotResponse: async (message, context) => {
    if (message === "hi") return ("Welcome to chatbot!");
    else {
      const request = {
        "context": context,
        "promt": message
      };
      console.log(request);
      try {
        const res = await axios.post('http://127.0.0.1:8000/api/chat/', request, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        return res.data.response;
      }
      catch (err) {
        return "API Error";
      }
    }
  }
};

export default API;
