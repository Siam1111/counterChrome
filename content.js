chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // First, validate the message's structure.
  if ((msg.from === 'index') && (msg.subject === 'count')) {
    response(window.location.origin);
    let show = localStorage.getItem("show") == null || localStorage.getItem("show") == 'false' ? 'true' : 'false';
    show == 'true' ? fetch(chrome.runtime.getURL('/index.html')).then(r => r.text()).then(html => {
      document.body.insertAdjacentHTML('beforeend', html);
      localStorage.setItem("show", "true");
      let script = document.createElement("script");
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = chrome.runtime.getURL("index.css");
      script.src = chrome.runtime.getURL('index.js');
      document.body.appendChild(script);
      document.head.appendChild(link);
      // not using innerHTML as it would break js event listeners of the page
    }) : remove();
  }
});

let remove = () => {
  localStorage.setItem("show", 'false');
  document.getElementById("container").remove();
  document.getElementsByTagName("head")[0].lastElementChild.remove();
  document.getElementsByTagName("body")[0].lastElementChild.remove();
}

