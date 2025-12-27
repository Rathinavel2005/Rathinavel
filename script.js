/* ================================
   ONLINE BOOK STORE - SCRIPT.JS
   ================================ */

/* ---------- ORDER BOOK ---------- */
function placeOrder() {
  const name = document.getElementById("orderName")?.value;
  const book = document.getElementById("orderBook")?.value;
  const address = document.getElementById("orderAddress")?.value;

  if (!name || !book || !address) {
    alert("Please fill all order details.");
    return;
  }

  alert(
    "Order Placed Successfully!\n\n" +
    "Name: " + name +
    "\nBook: " + book +
    "\nDelivery Address: " + address
  );

  document.getElementById("orderForm")?.reset();
}

/* ---------- FREE BOOK READING ---------- */
function readFreeBook(bookName) {
  alert(
    "📖 Opening Free Book...\n\n" +
    "Book: " + bookName +
    "\nEnjoy your reading!"
  );
}

/* ---------- PAID BOOK PURCHASE ---------- */
function buyPaidBook(bookName, price) {
  const confirmBuy = confirm(
    "💳 Buy this book?\n\n" +
    "Book: " + bookName +
    "\nPrice: ₹" + price
  );

  if (confirmBuy) {
    alert(
      "✅ Payment Successful!\n\n" +
      "You can now read: " + bookName
    );
  }
}

/* ---------- ENQUIRY FORM ---------- */
function sendEnquiry() {
  const name = document.getElementById("enqName")?.value;
  const email = document.getElementById("enqEmail")?.value;
  const msg = document.getElementById("enqMessage")?.value;

  if (!name || !email || !msg) {
    alert("Please fill all enquiry fields.");
    return;
  }

  alert(
    "📩 Enquiry Sent Successfully!\n\n" +
    "We will contact you soon."
  );

  document.getElementById("enquiryForm")?.reset();
}

/* ---------- BOOK CARD CLICK EFFECT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".book-card");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
      card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });
});

/* ---------- SIMPLE SEARCH (OPTIONAL) ---------- */
function searchBooks() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const books = document.querySelectorAll(".book-card");

  books.forEach(book => {
    const title = book.querySelector("h3").innerText.toLowerCase();
    book.style.display = title.includes(input) ? "block" : "none";
  });
}
const freeBooks = [
  {
    name: "The Alchemist",
    img: "1.jpg",
    pdf: "13.pdf"
  },
  {
    name: "Pride and Prejudice",
    img: "2.jpg",
    pdf: "14.pdf"
  },
  {
    name: "Sherlock Holmes",
    img: "3.jpg",
    pdf: "15.pdf"
  },
  {
    name: "Alice in Wonderland",
    img: "4.jpg",
    pdf: "16.pdf"
  },
  {
    name: "The Little Prince",
    img: "5.jpg",
    pdf: "17.pdf"
  },
  {
    name: "Dracula",
    img: "6.jpg",
    pdf: "18.pdf"
  },
  {
    name: "Frankenstein",
    img: "7.jpg",
    pdf: "19.pdf"
  },
  {
    name: "Treasure Island",
    img: "8.jpg",
    pdf: "20.pdf"
  }
];

const grid = document.getElementById("bookGrid");

freeBooks.forEach(book => {
  const div = document.createElement("div");
  div.className = "book-card";

  div.innerHTML = `
    <img src="${book.img}">
    <h3>${book.name}</h3>
    <button class="btn" onclick="openBook('${book.pdf}')">
      Read Now
    </button>
  `;

  grid.appendChild(div);
});

function openBook(pdf) {
  window.location.href = "reader.html?pdf=" + pdf;
}
