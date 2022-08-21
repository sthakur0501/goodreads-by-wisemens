import React, { useState } from "react";
import "./styles.css";

const wise_mens_headers = {
  "Kunal Shah":
    "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/kunalshah/profileimg.jpg",

  "Luke Coutinho":
    "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/lukecoutinho/profileimg.jpg",

  "Prashant Mahajan":
    "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/prashantmahajan/profileimg.jpg",

  "Ranveer Allahbadia":
    "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/beerbiceps/profileimg.jpg",

  "Swapnil Aggarwal":
    "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/swapnilaggarwal/profileimg.jpg",

  "Tanay Pratap":
    "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/tanaypratap/profileimg.jpg"
};

const wise_mens = {
  "Kunal Shah": [
    {
      author: "Al Ramdan",
      bookName:
        "Play Bigger: How Pirates, Dreamers and Innovators Create and Dominate ",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/kunalshah/bookscover/rangehow_davidespstein.jpg"
    },
    {
      author: "David Epstein",
      bookName: "Range-Generalists-Triumph-Specialized-World",

      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/kunalshah/bookscover/playbigger_alramdan.jpg"
    }
  ],

  "Luke Coutinho": [
    {
      author: "Luke Coutinho",
      bookName: "The Magic Weight-Loss Pill: 62 Lifestyle Changes ",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/lukecoutinho/bookscover/62lifestylechanges.jpg"
    },
    {
      author: "Luke Coutinho",
      bookName: "The Dry Fasting Miracle: From Deprive to Thrive",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/lukecoutinho/bookscover/dryfasting.jpg"
    },
    {
      author: "George Samuel Clason",
      bookName: "The Richest Man in Babylon",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/lukecoutinho/bookscover/richestman.jpg"
    }
    // {
    //   "author":"Luke Coutinho",
    //   "bookName":"The Magic Immunity Pill",
    //   "bookCoverUrl":"creators/lukecoutinho/bookscover/shilpa-luke-book-cover.png"
    // },
  ],

  "Prashant Mahajan": [
    {
      author: "Peter Theil",
      bookName: "Zero to One: Notes on Startups, or How to Build the Future",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/prashantmahajan/bookscover/zero.jpg"
    },
    {
      author: "George Orwell",
      bookName: "Animal Farm",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/prashantmahajan/bookscover/animalfarm.jpg"
    },
    {
      author: "Kai-Fu Lee",
      bookName: "AI Superpowers: China, Silicon Valley, and the New World",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/prashantmahajan/bookscover/ai.jpg"
    },
    {
      author: "T N Hari",
      bookName: "Saying No to Jugaad: The Making of Bigbasket",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/prashantmahajan/bookscover/juggad.jpg"
    },
    {
      author: "Jason Fried",
      bookName: "It Doesn’t Have to Be Crazy at Work",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/prashantmahajan/bookscover/work.jpg"
    }
  ],

  "Ranveer Allahbadia": [
    {
      author: "Paramahansa Yogananda",
      bookName: "Autobiography of a Yogi",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/beerbiceps/bookscover/yogi.jpg"
    },
    {
      author: "Yuval Noah Harari",
      bookName: "21 Lessons for the 21st Century",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/beerbiceps/bookscover/21.jpg"
    },
    {
      author: "Sourav Ganguly",
      bookName: "A Century is not Enough: My Roller-coaster Ride to Success ",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/beerbiceps/bookscover/dada.jpg"
    }
  ],

  "Swapnil Aggarwal": [
    {
      author: "James Clear",
      bookName: "Atomic Habits: The life-changing",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/swapnilaggarwal/bookscover/atomic.jpg"
    },
    {
      author: "Carl Newport",
      bookName: "Deep Work: Rules for Focused Success in a Distracted World",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/swapnilaggarwal/bookscover/deepwork.jpg"
    },
    {
      author: "Carl Newport",
      bookName: "So Good They Can't Ignore You ",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/swapnilaggarwal/bookscover/sogood.jpg"
    },
    {
      author: "Allie Brosh",
      bookName:
        "Hyperbole and a Half: Unfortunate Situations, Flawed Coping Mechanisms, Mayhem, and Other Things That Happened ",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/swapnilaggarwal/bookscover/hyperbola.jpg"
    },
    {
      author: "Sccot McCloud",
      bookName: "Understanding Comics: The Invisible Art",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/swapnilaggarwal/bookscover/comics.jpg"
    },
    {
      author: "Don Norman",
      bookName: "The Design of Everyday Things",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/swapnilaggarwal/bookscover/design.jpg"
    },
    {
      author: "Mihaly Csikszentmihalyi",
      bookName:
        "Flow: The Psychology of Optimal Experience (Harper Perennial Modern Classics)",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/swapnilaggarwal/bookscover/flow.jpg"
    }
  ],

  "Tanay Pratap": [
    {
      author: "Carl Newport",
      bookName: "So Good They Can't Ignore You ",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/tanaypratap/bookscover/sogood.jpg"
    },
    {
      author: "Eric Meyer",
      bookName: "CSS: The Definitive Guide- Visual Presentation for the Web",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/tanaypratap/bookscover/css.jpg"
    },
    {
      author: "Kyle Simpson",
      bookName: "You Don`t Know JS (This & Object Prototypes)",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/tanaypratap/bookscover/know.jpg"
    },
    {
      author: "Safi Bahcall",
      bookName: "Loonshots",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/tanaypratap/bookscover/loon.jpg"
    },
    {
      author: "Carl Newport",
      bookName: "Deep Work: Rules for Focused Success in a Distracted World",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/tanaypratap/bookscover/deepwork.jpg"
    },
    {
      author: "Adam Grant",
      bookName: "Originals: How Non-Conformists Change the World",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/tanaypratap/bookscover/originals.jpg"
    },
    {
      author: "Camille Fournier",
      bookName:
        "The Manager's Path: A Guide for Tech Leaders Navigating Growth and Change ",
      bookCoverUrl:
        "https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/tanaypratap/bookscover/manager.jpg"
    }
  ]
};

export default function App() {
  const [wise_men, setWiseMen] = useState("Kunal Shah");

  function menRecommenderClickHandler(men) {
    var divMB = document.querySelector(".div-books-recommendation");
    divMB.style.visibility = "hidden";

    var divLoader = document.querySelector("#loader");
    divLoader.style.visibility = "visible";

    console.log("wise-men-recommendation-clicked...");
    setWiseMen(men);

    setTimeout(function () {
      divLoader.style.visibility = "hidden";
      divMB.style.visibility = "visible";
    }, 3000);
  }

  function onAppLoad() {
    var divLoader = "";

    console.log("inside onAppLoad()..");

    setTimeout(function () {
      divLoader = document.querySelector("#loader");
      divLoader.style.visibility = "visible";
    }, 1000);

    setTimeout(function () {
      var divApp = document.querySelector(".App");
      console.log(divApp, divLoader);
      divLoader.style.visibility = "hidden";
      divApp.style.visibility = "visible";
    }, 3000);
  }

  return (
    <div className="App" style={{ visibility: "hidden" }} onLoad={onAppLoad()}>
      <div id="loader"></div>
      <div className="header-intro">
        <h1>Goodread By Wise Mens</h1>
        <p>
          Checkout books recommended by wise mens. Select a wise men to get
          started
        </p>
      </div>

      <div className="div-men-display">
        {Object.keys(wise_mens_headers).map((men) => {
          return (
            <div
              className="div-men-avatar"
              onClick={() => menRecommenderClickHandler(men)}
            >
              <img
                src={wise_mens_headers[men]}
                className="men-img"
                alt="url not available"
                loading="eager"
              />
              <h3>{men}</h3>
            </div>
          );
        })}
      </div>

      <div className="div-books-recommendation">
        <ul className="books-list">
          {wise_mens[wise_men].map((book_item) => {
            return (
              <li key={book_item} className="books-list-item">
                <img src={book_item["bookCoverUrl"]} alt="url not available" />
                <div>
                  {/* <img src={wise_mens_headers[wise_men]} alt="url not available" /> */}
                  <h3>{book_item["author"]}</h3>
                  <h5>{book_item["bookName"]}</h5>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="div-yellow-bottom"></div>
    </div>
  );
}
