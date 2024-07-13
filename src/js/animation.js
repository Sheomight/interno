function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.bottom <= window.innerHeight;
}

function animateScrollingElements() {
  const triggerElement = document.getElementById("trigger");
  const elementToAnimate = document.getElementById("home");
  if (isElementInViewport(triggerElement) && window.innerWidth > 1200) {
    elementToAnimate.classList.add("animate-goFull");
  }
}

document.addEventListener("DOMContentLoaded", animateScrollingElements);
window.addEventListener("scroll", animateScrollingElements);
