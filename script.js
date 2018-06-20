// Particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 150, density: { enable: true, value_area: 800 } },
    color: { value: "#4248f4" },
    shape: {
      type: "circle",
      stroke: { width: 1, color: "#4248f4" },
      polygon: { nb_sides: 8 }
      // image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 4,
      random: true,
      anim: { enable: false, speed: 80, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#4248f4",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "down",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
// End Particles-js
// scripts here:

function submitQuiz() {
  console.log("submitted");

  // get each answer score
  function answerScore(qName) {
    var radiosNo = document.getElementsByName(qName);

    for (var i = 0, length = radiosNo.length; i < length; i++) {
      if (radiosNo[i].checked) {
        // do something with radiosNo
        var answerValue = Number(radiosNo[i].value);
      }
    }
    // change NaNs to zero
    if (isNaN(answerValue)) {
      answerValue = 0;
    }
    return answerValue;
  }

  // calc score with answerScore function
  var calcScore =
    answerScore("q1") +
    answerScore("q2") +
    answerScore("q3") +
    answerScore("q4");
  console.log("CalcScore: " + calcScore); // it works!

  // function to return correct answer string
  function correctAnswer(correctStringNo, qNumber) {
    console.log("qNumber: " + qNumber); // logs 1,2,3,4 after called below
    return (
      "The correct answer for question #" +
      qNumber +
      ": &nbsp;<strong>" +
      document.getElementById(correctStringNo).innerHTML +
      "</strong>"
    );
  }

  // print correct answers only if wrong (calls correctAnswer function)
  if (answerScore("q1") === 0) {
    document.getElementById("correctAnswer1").innerHTML = correctAnswer(
      "correctString1",
      1
    );
  }
  if (answerScore("q2") === 0) {
    document.getElementById("correctAnswer2").innerHTML = correctAnswer(
      "correctString2",
      2
    );
  }
  if (answerScore("q3") === 0) {
    document.getElementById("correctAnswer3").innerHTML = correctAnswer(
      "correctString3",
      3
    );
  }
  if (answerScore("q4") === 0) {
    document.getElementById("correctAnswer4").innerHTML = correctAnswer(
      "correctString4",
      4
    );
  }

  // calculate "possible score" integer
  var questionCountArray = document.getElementsByClassName("question");

  var questionCounter = 0;
  for (var i = 0, length = questionCountArray.length; i < length; i++) {
    questionCounter++;
  }

  // show score as "score/possible score"
  var showScore = "Your Score: " + calcScore + "/" + questionCounter;
  // if 4/4, "perfect score!"
  if (calcScore === questionCounter) {
    showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>";
  }
  document.getElementById("userScore").innerHTML = showScore;
}

$(document).ready(function() {
  $("#submitButton").click(function() {
    $(this).addClass("hide");
  });
});
