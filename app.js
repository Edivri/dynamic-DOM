const root = document.getElementById("coursesListing");

const courses = [
  {
    title: "Beginner's guide to BlockChain Development Using Solidity",
    author: "Ben Edivri",
    poster: "https://img-c.udemycdn.com/course/240x135/3272144_5dfa_5.jpg",
    rating: "4.1 &#9733; &#9733; &#9733; &#9733; &#9734;",
    mainPrice: "$13.99",
    discountPrice: "$19.99",
  },
  {
    title: "Beginner's guide to BlockChain Development Using Solidity",
    author: "Ben Edivri",
    poster: "https://img-c.udemycdn.com/course/240x135/3272144_5dfa_5.jpg",
    rating: "4.1 &#9733; &#9733; &#9733; &#9733; &#9734;",
    mainPrice: "$13.99",
    discountPrice: "$19.99",
  },
  {
    title: "Beginner's guide to BlockChain Development Using Solidity",
    author: "Ben Edivri",
    poster: "https://img-c.udemycdn.com/course/240x135/3272144_5dfa_5.jpg",
    rating: "4.1 &#9733; &#9733; &#9733; &#9733; &#9734;",
    mainPrice: "$13.99",
    discountPrice: "$19.99",
  },
  {
    title: "Beginner's guide to BlockChain Development Using Solidity",
    author: "Ben Edivri",
    poster: "https://img-c.udemycdn.com/course/240x135/3272144_5dfa_5.jpg",
    rating: "4.1 &#9733; &#9733; &#9733; &#9733; &#9734;",
    mainPrice: "$13.99",
    discountPrice: "$19.99",
  },
  {
    title: "Beginner's guide to BlockChain Development Using Solidity",
    author: "Ben Edivri",
    poster: "https://img-c.udemycdn.com/course/240x135/3272144_5dfa_5.jpg",
    rating: "4.1 &#9733; &#9733; &#9733; &#9733; &#9734;",
    mainPrice: "$13.99",
    discountPrice: "$19.99",
  },
  {
    title: "Beginner's guide to BlockChain Development Using Solidity",
    author: "Ben Edivri",
    poster: "https://img-c.udemycdn.com/course/240x135/3272144_5dfa_5.jpg",
    rating: "4.1 &#9733; &#9733; &#9733; &#9733; &#9734;",
    mainPrice: "$13.99",
    discountPrice: "$19.99",
  },
];

for (let i = 0; i < courses.length; i++) {
  const courseCard = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardBody = document.createElement("div");
  const title = document.createElement("h5");
  const author = document.createElement("p");
  const small = document.createElement("small");
  const rating = document.createElement("p");
  const prices = document.createElement("p");
  const mainPrice = document.createElement("span");
  const discountPrice = document.createElement("span");

  courseCard.classList.add("col-sm-3", "course");
  cardImage.classList.add(["card-img-top"]);
  cardBody.classList.add(["card-body"]);
  title.classList.add(["card-title"]);
  mainPrice.classList.add(["price"]);
  discountPrice.classList.add(["discount"]);

  cardImage.setAttribute("src", `${courses[i].poster}`);
  cardImage.setAttribute("alt", "Card image cap");

  title.textContent = `${courses[i].title}`;
  small.textContent = `${courses[i].author}`;
  rating.innerHTML = `${courses[i].rating}`;
  mainPrice.textContent = `${courses[i].mainPrice} `;
  discountPrice.textContent = `${courses[i].discountPrice}`;

  prices.appendChild(mainPrice);
  prices.appendChild(discountPrice);
  author.appendChild(small);

  cardBody.appendChild(title);
  cardBody.appendChild(author);
  cardBody.appendChild(rating);
  cardBody.appendChild(prices);

  courseCard.appendChild(cardImage);
  courseCard.appendChild(cardBody);

  root.appendChild(courseCard);

  console.log(courseCard);
}
