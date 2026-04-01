// 1. Logic Function
const getIdolMatch = (mbti) => {
  const type = mbti.toUpperCase();

  // example MBTI idol
  switch (type) {
    case "INTJ":
      return "Ryujin (ITZY)";
    case "INFP":
      return "V (BTS)";
    case "INFJ":
      return "IU";
    case "ENFP":
      return "Danielle (NewJeans)";
    case "ENTJ":
      return "Key (SHINee)";
    case "ESFJ":
      return "Lisa (BLACKPINK)";
    case "ISTP":
      return "Haerin (NewJeans)";
    case "ISFP":
      return "Jungkook (BTS)";
    default:
      return "A very unique Idol! (Data not found)";
  }
};

// 2. UI Function
const updateUI = () => {
  const input = 
  document.getElementById("user-mbti").value;

  if (input.length < 4) {
    document.getElementById("idol-result").textContent = "Please enter 4 letters.";
    return;
  }

  const idolName = getIdolMatch(input);
  document.getElementById("idol-result").textContent = idolName;
};

// 3. Event Listener
document.getElementById("button1").addEventListener("click", updateUI);