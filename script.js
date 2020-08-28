const tweetHeading = document.querySelector('.tweet-heading');
const tweetData = document.querySelector('.tweet-data');
const button = document.querySelector('button');
const baseurl = `https://api.tronalddump.io/random/quote`;

async function getQuote(){
  button.textContent = `Loading...`;
  const response = await fetch(baseurl);
  const data = await response.json();
  const [tweetDate] = data.appeared_at.split('T');
  tweetHeading.textContent = `What Tronald thinks about: ${data.tags[0]}`
  tweetData.textContent = `"${data.value}" - ${tweetDate}`;
  button.textContent = `Generate Random tweet`;

}
getQuote();

button.addEventListener('click',getQuote);
