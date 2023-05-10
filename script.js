const clientId = "J1Yztbnfd9BZjyjC3G3ykqP2tdVn1CiX";

function XHR() {
  let tag = document.getElementById("tag").value;
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  var req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
      let response = JSON.parse(req.responseText);
      let imgElem = document.createElement("img");
      imgElem.src = response.data.images.downsized.url;

      resultDiv.appendChild(imgElem);
    } else if (req.readyState == 4 && req.status != 200) {
      console.log(req.status + " Error with the imgur API: ", req.responseText);
    }
  };
  req.open(
    "GET",
    `https://api.giphy.com/v1/gifs/random?api_key=${clientId}&tag=${tag}&rating=g`,
    true
  ); // true for asynchronous
  req.setRequestHeader("Authorization", "Client-ID " + clientId);
  req.send();
}

function Fetch() {
  let tag = document.getElementById("tag").value;
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${clientId}&tag=${tag}&rating=g`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      let imgElem = document.createElement("img");
      imgElem.src = result.data.images.downsized.url;

      resultDiv.appendChild(imgElem);
    })
    .catch((error) => console.error("error", error));
}

async function AsyncAwait() {
  let tag = document.getElementById("tag").value;
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  try {
    const req = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${clientId}&tag=${tag}&rating=g`,
      requestOptions
    );
    const res = await req.json();
    let imgElem = document.createElement("img");
    imgElem.src = res.data.images.downsized.url;

    resultDiv.appendChild(imgElem);
  } catch (e) {
    console.error("error", e);
  }
}
