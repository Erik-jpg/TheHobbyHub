const loginBtn = document.getElementById("login");
const createAccount = document.getElementById("createAccount");
const HRVRDAPIKey = '620c0b3f-ae5c-4b31-adcf-efbae584408d';

loginBtn.addEventListener("click", async () => {
    document.location.href = 'http://localhost:8888';
});

searchHarvard.addEventListener("click", exports.handler = async function () {
  const harvardArt = `https://api.harvardartmuseums.org/gallery?floor=any${HRVRDAPIKey}`
console.log(response);
  const response = await fetch(harvardArt)
  const data = await response.json()

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}) 
