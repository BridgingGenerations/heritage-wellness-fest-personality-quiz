
"use strict";

document.addEventListener("DOMContentLoaded", function () {

  // ==========================================
  // GET HTML ELEMENTS
  // ==========================================

  const startButton = document.getElementById("start-btn");
  const homeScene = document.getElementById("home-scene");
  const quizScene = document.getElementById("quiz-scene");
  const quizContainer = document.querySelector(".quiz-container");


  // ==========================================
  // QUIZ QUESTIONS
  // ==========================================

  const questions = [
    {
      question: "Your perfect morning starts with...",
      description: "You wake up to a completely free day. No alarms, no deadlines. What's your first move?",
      answers: [
        { text: "A. Read up on something interesting or learn a useful new skill.", herb: "Ginger" },
        { text: "B. Gather everyone for a fun-filled morning!", herb: "Turmeric" },
        { text: "C. Enjoy some quiet time alone, away from the crowd.", herb: "Galangal" }
      ]
    },
    {
      question: "A little taste of Singapore",
      description: "You're at a food festival featuring dishes from different cultures. What are you most excited about?",
      answers: [
        { text: "A. Sharing familiar dishes and enjoying good company.", herb: "Pandan" },
        { text: "B. Sampling the most unusual dish I can find.", herb: "Coriander" },
        { text: "C. Finding a peaceful spot to savour every flavour.", herb: "Lemongrass" }
      ]
    },
    {
      question: "Your friend is having a bad day.",
      description: 'They message you saying, "Everything is going wrong!" How do you respond?',
      answers: [
        { text: "A. I'm not great with words, but I'll quietly stay by your side.", herb: "Galangal" },
        { text: "B. Come over, have a meal and let's talk. No stress!", herb: "Pandan" },
        { text: "C. Let's figure out what went wrong and how to make things right.", herb: "Ginger" }
      ]
    },
    {
      question: "Time for some wellness!",
      description: "You have an hour to yourself at Heritage Wellness Day. Which activity calls to you?",
      answers: [
        { text: "A. A calming Tai Chi or Yoga session.", herb: "Lemongrass" },
        { text: "B. A lively group lion dance or Silambam experience!", herb: "Turmeric" },
        { text: "C. Exploring a completely unfamiliar cultural activity.", herb: "Coriander" }
      ]
    },
    {
      question: "Plans cancelled!",
      description: "You've been looking forward to an outing, but it suddenly starts pouring. What's your reaction?",
      answers: [
        { text: "A. Next time, we should check the weather and plan properly.", herb: "Ginger" },
        { text: "B. Steady lah, let's find somewhere to sit and chat.", herb: "Pandan" },
        { text: "C. Never mind! Let's have a fun indoor gathering instead!", herb: "Turmeric" }
      ]
    },
    {
      question: "You're organising a community gathering.",
      description: "What's your natural role?",
      answers: [
        { text: "A. Coming up with unexpected games and fun surprises.", herb: "Coriander" },
        { text: "B. Helping quietly behind the scenes, away from the spotlight.", herb: "Galangal" },
        { text: "C. Creating a calm, thoughtfully arranged environment.", herb: "Lemongrass" }
      ]
    },
    {
      question: "You're learning something new.",
      description: "You try a traditional cultural activity for the first time — and you're not very good at it. What do you do?",
      answers: [
        { text: "A. Turn my mistakes into jokes and cheer everyone on!", herb: "Turmeric" },
        { text: "B. Ask the instructor about the proper techniques and keep practising.", herb: "Ginger" },
        { text: "C. Quietly observe others and practise when I feel ready.", herb: "Galangal" }
      ]
    },
    {
      question: "A cup of comfort",
      description: "It's been an exhausting week. What would make you feel better?",
      answers: [
        { text: "A. Doing something spontaneous and completely different.", herb: "Coriander" },
        { text: "B. Resting somewhere peaceful with a warm drink.", herb: "Lemongrass" },
        { text: "C. Catching up with friends over a familiar meal.", herb: "Pandan" }
      ]
    },
    {
      question: "A neighbourhood needs volunteers!",
      description: "Your community is organising a cultural celebration. What would you volunteer to do?",
      answers: [
        { text: "A. Welcome visitors and make everyone feel at home.", herb: "Pandan" },
        { text: "B. Explain the cultural history and significance of the activities.", herb: "Ginger" },
        { text: "C. Help quietly behind the scenes, without being in the spotlight.", herb: "Galangal" }
      ]
    },
    {
      question: "Things are getting stressful.",
      description: "You have too much to do and too little time. What's your first instinct?",
      answers: [
        { text: "A. Rally everyone together and keep spirits high!", herb: "Turmeric" },
        { text: "B. Stay composed, take a breath and prioritise calmly.", herb: "Lemongrass" },
        { text: "C. Look for an unconventional or creative solution.", herb: "Coriander" }
      ]
    },
    {
      question: "What makes you happiest?",
      description: "Think about the moments when you feel most fulfilled. Which sounds most like you?",
      answers: [
        { text: "A. Quietly appreciating the little things without needing recognition.", herb: "Galangal" },
        { text: "B. Spending quality time with people who make me feel at home.", herb: "Pandan" },
        { text: "C. Passing on something valuable that I've learned.", herb: "Ginger" }
      ]
    },
    {
      question: "Your recipe for a good life",
      description: "Imagine you could add just one special ingredient to your life. Which would you choose?",
      answers: [
        { text: "A. Balance — the ability to remain calm through life's ups and downs.", herb: "Lemongrass" },
        { text: "B. Curiosity — endless opportunities to explore and discover.", herb: "Coriander" },
        { text: "C. Joy — more laughter, excitement and celebrations.", herb: "Turmeric" }
      ]
    }
  ];


  // ==========================================
  // HERB PERSONALITIES
  // ==========================================

  const results = {
    Ginger: {
      name: "Ginger",
      title: "The Wise Mentor",
      traits: "DISCIPLINED • WISE • STRAIGHTFORWARD",
      description: "You're the one who always knows what to do (or at least has some very strong opinions about it)! You believe in doing things properly, value discipline and aren't afraid to give a little tough love. You might come across as strict, but it's only because you genuinely care. Deep down, you're the person everyone turns to when they need honest advice and a little guidance.",
      wellness: "Sometimes, the best medicine isn't advice — it's simply listening.",
      image: "images/Gingericon-8.png"
    },

    Turmeric: {
      name: "Turmeric",
      title: "The Life of the Party",
      traits: "LOUD • CHEERFUL • OUTGOING",
      description: "You're the sunshine of every gathering! Full of energy, laughter and a little bit of mischief, you have a way of turning even the quietest moments into a celebration. You're never afraid to speak up, crack a joke or get everyone involved. With you around, there's rarely a dull moment — and that's exactly how you like it!",
      wellness: "You bring so much joy to others, but remember that even the life of the party needs a little quiet time to recharge.",
      image: "images/Tumericicon-8.png"
    },

    Lemongrass: {
      name: "Lemongrass",
      title: "The Graceful Soul",
      traits: "ELEGANT • COMPOSED • REFINED",
      description: "You have a natural elegance that doesn't need to shout for attention. Calm, thoughtful and effortlessly composed, you appreciate the finer details in life. Whether things are going smoothly or everything is turning upside down, you carry yourself with grace. Your soothing presence makes people feel at ease, and you know that sometimes, less is more.",
      wellness: "It's wonderful to keep your composure, but don't be afraid to let loose and embrace a little spontaneity!",
      image: "images/Lemongrassicon-8.png"
    },

    Pandan: {
      name: "Pandan",
      title: "The Easygoing Companion",
      traits: "CHILL • FRIENDLY • LAID-BACK",
      description: "You're the definition of steady lah, no stress! Easygoing, friendly and always happy to go with the flow, you're the person everyone feels comfortable around. You don't sweat the small stuff and believe that good company and a simple meal can solve most bad moods. Life's too short to worry about everything, right?",
      wellness: "Going with the flow is great, but remember that it's okay to stand your ground when something matters to you.",
      image: "images/pandanicon-8.png"
    },

    Galangal: {
      name: "Galangal",
      title: "The Quiet Observer",
      traits: "SHY • OBSERVANT • THOUGHTFUL",
      description: "You're not one to fight for the spotlight, and that's perfectly fine with you! Quiet, thoughtful and a little reserved, you prefer observing before jumping into conversations. You may take some time to open up, but once people get to know you, they'll discover someone with plenty of depth, warmth and interesting thoughts. You believe that actions speak louder than words.",
      wellness: "You don't need to be the loudest voice to make an impact. But don't be afraid to share your thoughts — people may be waiting to hear them!",
      image: "images/galangal-8.png"
    },

    Coriander: {
      name: "Coriander",
      title: "The Curious Explorer",
      traits: "PLAYFUL • CURIOUS • CHEEKY",
      description: "You've got a curious mind and a playful spirit that never grows old! Always asking questions, trying new things and finding fun in unexpected places, you see the world as one big adventure. You're a little cheeky, occasionally unpredictable and full of creative ideas. Your enthusiasm for discovery reminds everyone that growing up doesn't mean we have to stop having fun!",
      wellness: "Never lose your sense of wonder! Just remember to slow down occasionally and enjoy the little things along the way.",
      image: "images/coriandericon-8.png"
    }
  };


  // ==========================================
  // QUIZ VARIABLES
  // ==========================================

  let currentQuestion = 0;

  let scores = {
    Ginger: 0,
    Turmeric: 0,
    Lemongrass: 0,
    Pandan: 0,
    Galangal: 0,
    Coriander: 0
  };


  // ==========================================
  // START QUIZ
  // ==========================================

  startButton.addEventListener("click", function () {
    homeScene.classList.add("fade-out");

    setTimeout(function () {
      homeScene.classList.add("hidden");
      quizScene.classList.remove("hidden");

      currentQuestion = 0;
      resetScores();
      showQuestion();
    }, 800);
  });


  // ==========================================
  // RESET SCORES
  // ==========================================

  function resetScores() {
    scores = {
      Ginger: 0,
      Turmeric: 0,
      Lemongrass: 0,
      Pandan: 0,
      Galangal: 0,
      Coriander: 0
    };
  }


  // ==========================================
  // SHOW QUESTION
  // ==========================================

  function showQuestion() {
    const question = questions[currentQuestion];

    quizContainer.innerHTML = `
      <div class="question-number">
        QUESTION ${currentQuestion + 1} OF ${questions.length}
      </div>

      <h2>Q${currentQuestion + 1}. ${question.question}</h2>

      <p class="question-text">${question.description}</p>

      <div class="answer-buttons">
        ${question.answers.map(function (answer) {
          return `
            <button
              type="button"
              class="answer-btn"
              data-herb="${answer.herb}"
            >
              ${answer.text}
            </button>
          `;
        }).join("")}
      </div>
    `;

    const answerButtons = document.querySelectorAll(".answer-btn");

    answerButtons.forEach(function (button) {
      button.addEventListener("click", function () {

        if (button.disabled) return;

        button.disabled = true;

        const selectedHerb = button.dataset.herb;
        scores[selectedHerb]++;

        button.classList.add("selected");

        setTimeout(function () {
          currentQuestion++;

          if (currentQuestion < questions.length) {
            showQuestion();
          } else {
            showResult();
          }
        }, 350);
      });
    });
  }


  // ==========================================
  // FIND WINNING HERB
  // ==========================================

  function getWinner() {
    let winner = "Ginger";
    let highestScore = scores.Ginger;

    Object.keys(scores).forEach(function (herb) {
      if (scores[herb] > highestScore) {
        highestScore = scores[herb];
        winner = herb;
      }
    });

    return winner;
  }


  // ==========================================
  // SHOW RESULT
  // ==========================================

  function showResult() {
    const winner = getWinner();
    const result = results[winner];

    quizContainer.innerHTML = `
      <div class="result-page">

        <p class="result-label">
          YOUR WELLNESS HERB IS...
        </p>

        <img
          class="result-image"
          src="${result.image}"
          alt="${result.name}"
        >

        <p class="result-herb">${result.name}</p>

        <h2>${result.title}</h2>

        <h3>${result.traits}</h3>

        <p class="result-description">
          ${result.description}
        </p>

        <div class="wellness-reminder">
          <h3>Your Wellness Reminder</h3>
          <p>${result.wellness}</p>
        </div>

        <div class="result-buttons">

          <button
            type="button"
            id="share-btn"
            class="result-action-btn"
          >
            SHARE MY RESULT
          </button>

          <a
            href="https://inheritagesg.com/hwf"
            target="_blank"
            rel="noopener noreferrer"
            class="result-action-btn register-btn"
          >
            REGISTER FOR HERITAGE WELLNESS FEST
          </a>

          <button
            type="button"
            class="btn restart-btn"
            id="restart-btn"
          >
            TAKE THE QUIZ AGAIN
          </button>

        </div>
      </div>
    `;


    // ==========================================
    // SHARE RESULT
    // ==========================================

    const shareButton = document.getElementById("share-btn");

    shareButton.addEventListener("click", async function () {

      const websiteLink = "https://bridginggenerations.github.io/heritage-wellness-fest-personality-quiz/";

      const shareText =
        `I got ${result.name} — ${result.title} 🌿\n` +
        `in the Heritage Wellness Fest personality quiz!\n` +
        `${websiteLink}\n` +
        `What's your wellness herb? Find out here!\n\n` +
        `🌿 HERITAGE WELLNESS FEST 2026\n` +
        `📅 5 December 2026\n` +
        `⏰ 11AM – 4PM\n` +
        `📍 Glass Dome, 28 China St, Singapore 049570\n` +
        `🎟️ FREE ADMISSION!\n\n` +
        `Register now: https://inheritagesg.com/hwf`;

      const shareData = {
        title: `I'm ${result.name} — ${result.title}`,
        text: shareText
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (error) {
          if (error.name !== "AbortError") {
            console.error("Sharing failed:", error);
            alert("Unable to share right now. Please try again.");
          }
        }
      } else {
        try {
          await navigator.clipboard.writeText(shareText);

          shareButton.textContent = "MESSAGE COPIED!";

          setTimeout(function () {
            shareButton.textContent = "SHARE MY RESULT";
          }, 2000);

        } catch (error) {
          console.error("Could not copy result:", error);
          alert("Unable to copy automatically. Please copy the sharing message manually.");
        }
      }
    });


    // ==========================================
    // RESTART BUTTON
    // ==========================================

    const restartButton = document.getElementById("restart-btn");

    restartButton.addEventListener("click", restartQuiz);
  }


  // ==========================================
  // RESTART QUIZ
  // ==========================================

  function restartQuiz() {
    currentQuestion = 0;
    resetScores();

    quizScene.classList.add("hidden");
    homeScene.classList.remove("hidden");
    homeScene.classList.remove("fade-out");
  }

});
