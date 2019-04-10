var CLIENT_ID =
  "925201494168-u2qgrdt3pdgcrpnr68nvias001bkdjl1.apps.googleusercontent.com";
var API_KEY = "AIzaSyA6HiC5vmnxDtQQ3uaUplBXBSmzG7tlkJ0";
var DISCOVERY_DOCS = [
  "https://sheets.googleapis.com/$discovery/rest?version=v4"
];
var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}

function initClient() {
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    })
    .then(function() {
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}

function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    listResults();
  } else {
    gapi.auth2.getAuthInstance().signIn();
    console.log("It is signing in.");
  }
}

function listResults() {
  gapi.client.sheets.spreadsheets.values
    .get({
      spreadsheetId: "18XcXtiIEp4OjUYSdyM5zaPpxbbIjXyXtIJLtM1Sngy8",
      range: "Sample Progress!B2:H"
    })
    .then(
      function(response) {
        var range = response.result;
        console.log(range);
        if (range.values.length > 0) {
          for (i = 0; i < range.values.length; i++) {
            var row = range.values[i];
            var tr = document.createElement("tr");
            for (j = 0; j < row.length; j++) {
              var element;
              if (i === 0) {
                element = document.createElement("th");
              } else {
                element = document.createElement("td");
              }
              element.textContent = row[j];
              tr.appendChild(element);
            }
            var table = document.getElementById("labresults");
            table.appendChild(tr);
          }
        } else {
          console.log("No data found.");
        }
      },
      function(response) {
        console.log("Error: " + response.result.error.message);
      }
    );
}
