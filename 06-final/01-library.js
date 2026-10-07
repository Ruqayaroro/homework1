// =============================================
// 6. FINAL — Library (uses everything)
// =============================================
// 1. Print every book: "Title by Author (year) — available" or "— checked out".
// 2. Count how many books are available.
// 3. Count how many books were published before 2000.
// 4. Find the newest book.
//
// Expected output:
//   Season of Migration to the North by Tayeb Salih (1966) — available
//   Celestial Bodies by Jokha Alharthi (2010) — checked out
//   Men in the Sun by Ghassan Kanafani (1962) — available
//   Palace Walk by Naguib Mahfouz (1956) — available
//   Frankenstein in Baghdad by Ahmed Saadawi (2013) — checked out
//   The Prophet by Kahlil Gibran (1923) — available
//   Available books: 4
//   Published before 2000: 4
//   Newest book: Frankenstein in Baghdad (2013)

const books = [
  { title: "Season of Migration to the North", author: "Tayeb Salih", year: 1966, available: true },
  { title: "Celestial Bodies", author: "Jokha Alharthi", year: 2010, available: false },
  { title: "Men in the Sun", author: "Ghassan Kanafani", year: 1962, available: true },
  { title: "Palace Walk", author: "Naguib Mahfouz", year: 1956, available: true },
  { title: "Frankenstein in Baghdad", author: "Ahmed Saadawi", year: 2013, available: false },
  { title: "The Prophet", author: "Kahlil Gibran", year: 1923, available: true },
];

// your code here
let available = 0;
let before2000 = 0;
let newest = books[0];

for (let i = 0; i < books.length; i++) {

    if (books[i].available === true) {
        console.log(books[i].title, "by", books[i].author, `(${books[i].year}) — available`);
        available++;
    } else {
        console.log(books[i].title, "by", books[i].author, `(${books[i].year}) — checked out`);
    }

    if (books[i].year < 2000) {
        before2000++;
    }

    if (books[i].year > newest.year) {
        newest = books[i];
    }
}

console.log("Available books:", available);
console.log("Published before 2000:", before2000);
console.log("Newest book:", newest.title, `(${newest.year})`);