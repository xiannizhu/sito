document.addEventListener("DOMContentLoaded", () => {
  document.body.style.overflow = "hidden";
  const delay = 500;

  document.querySelectorAll("rect").forEach((svg) => {
    svg.style.opacity = 0;
    svg.nextElementSibling.style.opacity = 0;
  });

  const introEl = document.querySelector("#intro");
  const rects = document.querySelectorAll("rect");
  const paths = document.querySelectorAll("path");

  for (let i = 0; i < rects.length; i++) {
    anime({
      targets: [rects[i], paths[i]],
      opacity: 1,
      duration: delay,
      delay: delay * i,
      easing: "easeInOutQuad",
    });
  }

  setTimeout(() => {
    anime({
      targets: introEl,
      opacity: 0,
      duration: 500,
      easing: "easeInOutQuad",
      complete: () => {
        introEl.style.display = "none";
        document.body.style.overflow = "auto";
      },
    });
  }, delay * rects.length);
});
