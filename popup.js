document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("readText").addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => document.body.innerText
    }, (results) => {
      const pageText = results[0]?.result || "No text found.";
      document.getElementById("output").textContent = pageText;
    });
  });
});
