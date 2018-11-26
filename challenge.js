let paused = false;
const pause = document.getElementById('pause');
const likes = document.querySelector(".likes");
const comments = document.getElementById('list')
const form = document.getElementById('comment-form');
let likeTracker = {};

document.addEventListener('DOMContentLoaded', function() {
  setInterval(incrementTimer, 1000);
  document.getElementById('+').addEventListener('click', incrementTimer);
  document.getElementById('-').addEventListener('click', userDecrement);
  document.getElementById('<3').addEventListener('click', countLikes);
  pause.addEventListener('click', pauseClock);
  document.querySelector('form').addEventListener('submit', getFormValues);
});

//set counter to increase every second on refreshing of page
let count = 0;
const counter = document.getElementById('counter');


function incrementTimer() {
  if (!paused) {
    count++;
    return counter.innerText = count;
  }
}

function userDecrement(event) {
  if (count > 0) {
    count--
    return counter.innerText = count;
  } else {
    return counter.innerText = 0
  }
}

function pauseClock (event) {
  paused = !paused;
  if (paused) {
    pause.innerText = "resume";
  } else {
    pause.innerText = "pause";
  }
}

function countLikes(event) {
  let li = document.createElement("li");
  if (!likeTracker[count]) {
    likeTracker[count] = 1;
    li.innerText = `you have liked ${count} one time`;
    li.id = count;
    likes.appendChild(li);
  } else {
    likeTracker[count] += 1;
    li.innerText = `you have liked ${count} ${likeTracker[count]} times!`
    li.id = count;
    likes.appendChild(li);
  }
  console.log("likes:", likeTracker)
}

function getFormValues(event) {
  event.preventDefault()
  let comm = document.querySelector('input').value;
  addComment(comm);
  document.querySelector('form').reset();
}

function addComment(comm) {
  let commentElement = document.createElement('li');
  commentElement.innerText = comm;
  comments.appendChild(commentElement);
}
