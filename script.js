// Handle language selection
function goToPlantPage() {
  const language = document.getElementById("languageSelect").value;
  window.location.href = `plant.html?lang=${language}`;
}

// Plant data (you can add more)
const plantData = {
  en: {
    name: "Blue Vanda Orchid",
    image: "images/blue_vanda.jpg",
    description: "The Blue Vanda Orchid is an exotic flower known for its vibrant violet-blue color and unique aerial roots."
  },
  ml: {
    name: "നീല വാണ്ട ഓർക്കിഡ്",
    image: "images/blue_vanda.jpg",
    description: "നീല വാണ്ട ഓർക്കിഡ് അതിന്റെ ആകർഷകമായ നീല നിറം കൊണ്ടും വായുവിൽ വളരുന്ന വേരുകൾ കൊണ്ടും പ്രശസ്തമാണ്."
  },
  hi: {
    name: "नीला वांडा ऑर्किड",
    image: "images/blue_vanda.jpg",
    description: "नीला वांडा ऑर्किड अपनी सुंदर नीली पंखुड़ियों और हवाई जड़ों के लिए प्रसिद्ध है।"
  }
};

// When page loads
window.onload = function() {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang") || "en";

  if (document.getElementById("plantName")) {
    const data = plantData[lang];
    document.getElementById("plantName").textContent = data.name;
    document.getElementById("plantDescription").textContent = data.description;
    document.getElementById("plantImage").src = data.image;

    // Listen Button using ResponsiveVoice
    document.getElementById("listenBtn").addEventListener("click", () => {
      let voice;
      if (lang === "ml") voice = "Malayalam Female";
      else if (lang === "hi") voice = "Hindi Female";
      else voice = "UK English Female";

      responsiveVoice.speak(data.description, voice);
    });
  }
};
