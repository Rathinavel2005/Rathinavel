document.addEventListener("DOMContentLoaded", function () {

  const paidBooks = [
    { name: "The Alchemist - Premium", img: "9.jpg", price: 499 },
    { name: "Sapiens - Premium", img: "10.jpg", price: 599 },
    { name: "Atomic Habits - Premium", img: "11.jpg", price: 399 },
    { name: "Harry Potter - Premium", img: "12.jpg", price: 899 },
    { name: "The Da Vinci Code - Premium", img: "13.jpg", price: 1099 },
    { name: "The Hobbit - Premium", img: "14.jpg", price: 599 },
    { name: "Becoming - Premium", img: "15.jpg", price: 199 },
    { name: "Educated - Premium", img: "16.jpg", price: 899 },
    { name: "The Subtle Art of Not Giving a F*ck - Premium", img: "17.jpg", price: 499 },
    { name: "Thinking, Fast and Slow - Premium", img: "18.jpg", price: 999 },
    { name: "The Silent Patient - Premium", img: "19.jpg", price: 299 },
    { name: "The Power of Habit - Premium", img: "20.jpg", price: 699 },
    { name: "Atomic Habits", img: "31.jpg", price: 699  },
    { name: "Rich Dad Poor Dad", img: "32.jpg", price: 699  },
    { name: "To Kill a Mockingbird", img: "33.jpg", price: 699  },
  ];

  const grid = document.getElementById("paidBooks");
  if (!grid) return;

  paidBooks.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";

    card.innerHTML = `
      <img src="${book.img}" alt="${book.name}">
      <h3>${book.name}</h3>
      <div class="price-row">
  <p>₹${book.price}</p>
  <button class="btn">Order</button>
</div>

    `;

    card.querySelector(".btn").addEventListener("click", () => {
      window.location.href =
        "buy.html?book=" +
        encodeURIComponent(book.name) +
        "&price=" +
        book.price;
    });

    grid.appendChild(card);
  });
});
