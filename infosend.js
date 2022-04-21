async function infoSend () {
	const playerID = document.getElementById("playerID").value;
	const accessToken = document.getElementById("accessTokne").value;
	const troopType = document.getElementById("troopType").value;
	const troopAMT = document.getElementById("troopAMT").value;
	const cmineC = document.getElementById("cmineC").value;
	const cmineX = document.getElementById("cmineX").value;
	const cmineY = document.getElementById("cmineY").value;
	
	const infoSent = await fetch("https://api-lok-live.leagueofkingdoms.com/api/field/march/info", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "sec-gpc": "1",
    "x-access-token": `${accessToken}`
  },
  "referrer": "https://play.leagueofkingdoms.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": `json=%7B%22fromId%22%3A%22${playerID}%22%2C%22toLoc%22%3A%5B${cmineC}%2C${cmineX}%2C${cmineY}%5D%7D`,
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});


};

document.getElementById("sendInfo").onclick = infoSend; 