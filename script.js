const systems = [
  {
    name: "Cognitus Academy",
    status: "Training",
    icon: "CA",
    url: "https://silly-cheese.github.io/cognitus-academy/",
    description: "Learning and training portal for staff education, assigned courses, and required Cognitus training material.",
    tags: ["LMS", "Training", "Courses", "Staff"]
  },
  {
    name: "Cognitus Pay",
    status: "Finance",
    icon: "CP",
    url: "https://silly-cheese.github.io/cognitus-pay/",
    description: "Finance and payroll access point for pay requests, pay records, payroll tracking, and financial review workflows.",
    tags: ["Payroll", "Finance", "Requests", "Records"]
  },
  {
    name: "Cognitus Careers",
    status: "Hiring",
    icon: "CC",
    url: "https://silly-cheese.github.io/cognitus-careers/#/",
    description: "Application and hiring portal for open roles, applicant accounts, application status, and reviewer workflows.",
    tags: ["Careers", "Applications", "Hiring", "Review"]
  }
];

const grid = document.getElementById("systemGrid");
const search = document.getElementById("systemSearch");
const emptyState = document.getElementById("emptyState");
const systemCount = document.getElementById("systemCount");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
systemCount.textContent = systems.length;

function systemMatches(system, term) {
  const content = [system.name, system.status, system.description, ...system.tags].join(" ").toLowerCase();
  return content.includes(term.toLowerCase());
}

function renderSystems(list) {
  grid.innerHTML = "";

  list.forEach((system) => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <div class="card-top">
        <span class="card-icon">${system.icon}</span>
        <span class="badge">${system.status}</span>
      </div>
      <h3>${system.name}</h3>
      <p>${system.description}</p>
      <div class="tags">
        ${system.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <div class="card-actions">
        <a class="card-link" href="${system.url}" target="_blank" rel="noopener noreferrer">Open System</a>
        <button class="copy-button" type="button" data-url="${system.url}">Copy Link</button>
      </div>
    `;

    grid.appendChild(card);
  });

  emptyState.hidden = list.length !== 0;
}

search.addEventListener("input", (event) => {
  const term = event.target.value.trim();
  const filteredSystems = term ? systems.filter((system) => systemMatches(system, term)) : systems;
  renderSystems(filteredSystems);
});

grid.addEventListener("click", async (event) => {
  const button = event.target.closest(".copy-button");
  if (!button) return;

  try {
    await navigator.clipboard.writeText(button.dataset.url);
    const originalText = button.textContent;
    button.textContent = "Copied";
    setTimeout(() => {
      button.textContent = originalText;
    }, 1200);
  } catch (error) {
    button.textContent = "Copy failed";
  }
});

renderSystems(systems);
