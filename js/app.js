const btn = document.querySelector("button");
const close = document.querySelector(".close");
const toast = document.querySelector(".toast");
const progressBar = document.querySelector(".progress-bar");
let timeOut;
let progressLength = 100;

const showToast = () => {
  toast.classList.add("active");
  toast.classList.remove("deactive");
  timeOut = setTimeout(() => {
    hideToast();
  }, 3000);
};

const hideToast = () => {
  toast.classList.add("deactive");
  toast.classList.remove("active");
  clearTimeout(timeOut);
};

btn.addEventListener("click", () => {
  showToast();
});

close.addEventListener("click", () => {
  hideToast();
});
