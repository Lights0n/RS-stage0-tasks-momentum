const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const changeQuoteBtn = document.querySelector('.change-quote')
const checkbox = document.querySelector("input[name=checkbox]");

let quotesListtoggler = false
async function getQuotes() {
  let quotes = 'assets/json/quotes.json';
  if (quotesListtoggler == true) {
    quotes = 'assets/json/quotesMain.json';
  }

  const res = await fetch(quotes);
  const data = await res.json();

  const quotesList = Object.values(data)[0];
  let randQuoteIndex = Math.trunc(Math.random(0) * quotesList.length)
  quote.textContent = `${randQuoteIndex + 1} "${Object.values(quotesList[randQuoteIndex])[0]}"`
  author.textContent = Object.values(quotesList[randQuoteIndex])[1]
}
getQuotes();

checkbox.addEventListener('change', function () {
  if (this.checked) {
    quotesListtoggler = true
    getQuotes();
    // console.log("Checkbox is checked..");
  } else {
    quotesListtoggler = false
    getQuotes();
    // console.log("Checkbox is not checked..");
  }
});

changeQuoteBtn.addEventListener('click', getQuotes)
