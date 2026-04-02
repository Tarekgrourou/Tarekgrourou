const projects = [
  {
    title: "Quiet Notes",
    description:
      "A focused writing app designed around one idea: remove noise so thinking can happen. Built with fast keyboard flows and subtle typography.",
  },
  {
    title: "Studio Journal",
    description:
      "A visual timeline for creative teams to capture progress every day. The layout favors clarity, rhythm, and calm collaboration.",
  },
  {
    title: "North Atlas",
    description:
      "A compact analytics dashboard that turns logistics data into clear stories with concise filters and meaningful highlights.",
  },
];

const overlay = document.getElementById("projectOverlay");
const overlayTitle = document.getElementById("overlayTitle");
const overlayDescription = document.getElementById("overlayDescription");
const closeOverlayBtn = document.getElementById("closeOverlay");

function showProject(index) {
  const project = projects[index];
  if (!project) return;

  overlayTitle.textContent = project.title;
  overlayDescription.textContent = project.description;
  overlay.hidden = false;
}

function closeOverlay() {
  overlay.hidden = true;
}

document.querySelectorAll(".project-card").forEach((button) => {
  button.addEventListener("click", () => {
    showProject(Number(button.dataset.project));
  });
});

closeOverlayBtn.addEventListener("click", closeOverlay);
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) closeOverlay();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !overlay.hidden) {
    closeOverlay();
  }
});
