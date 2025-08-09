const projects = [
  {
    title: "Travel App UI/UX",
    image: "https://imgur.com/OrFLUn0.png",
    link: "https://www.figma.com/proto/TvDOrzP9ruPSspDz6hIKbG/Travel-app?node-id=2037-204",
    description: "A mobile travel application concept designed using Figma, having flight booking features, history and payment features.\n\n\nProblem: Many users find the flight booking process confusing and overwhelming, especially first-time users who are not familiar with online booking flows. Additionally, cluttered UI makes it hard to locate key information such as flight details and payment status.\n\n\nSolution: Creating a simpler, more informative ordering experience with a clean interface, clear flow, and helpful order status notifications.",
    role: "UI/UX designer",
    team: "Personal Project",
    tools: "Figma, Ibis Paint X",
    timeline: "June 2025"
  },
  {
    title: "Jolinary App Design",
    image: "https://imgur.com/5KB9GIj.png",
    link: "https://www.figma.com/design/TkxzYq7VEXAnvj8ALqnMyH/Untitled?node-id=0-1&t=Ja40LfT5T1xpwklR-1",
    description: "Designed a mobile app concept to help user discover nearby food options based on their location or based on certain cities.\n\n\nCreated user flows for browsing, and finding food details with interactive maps.\n\n\nDeveloped wireframes and high-fidelity mockups in Figma, focusing on the simplicity of the dashboard and food detail pages.",
    role: "UI/UX Designer",
    team: "College Work (Solo)",
    tools: "Figma",
    timeline: "November 2024"
  },
  {
    title: "E-Library App Design",
    image: "https://imgur.com/YuPQY5j.png",
    link: "https://www.figma.com/design/sZdtXNDZsJFXtCQFiOgsj7/Untitled?node-id=0-1&t=WWiRSpTXSiLhwPAw-1",
    description: "Designed a clean, user-friendly e-library app to help user browse e-books, and manage reading list. Focused on intuitive navigation with a search feature, book and author categorization. Created wireframes and a prototype in Figma, emphasizing clarity and ease of use for user.",
    role: "UI/UX Designer",
    team: "College work (Solo)",
    tools: "Figma",
    timeline: "August 2025"
  },
   {
    title: "E-certification Website",
    image: "https://imgur.com/xfGY1qN.png",
    link: "https://github.com/kaynnsc/Project-Kelompok-Web-Lanjut",
    description: "This platform allows users to apply for digital certificates by submitting their information and documents through a simple online form. After signing up and logging in, users provide necessary details and upload any required files, such as identification or proof of course completion.\n\n\nAdmins have a separate login to review submissions. They check each application, verify the documents, and either approve or reject requests. When approved, the system generates a digital certificate that users can download directly from their account.\n\n\nThe entire process happens online, eliminating paperwork and speeding up verification. Admins can manage multiple applications efficiently from one dashboard.",
    role: "Frontend(80%), Backend(20%)",
    team: "College Team Project (6)",
    tools: "React, MongoDB, Node.js",
    timeline: "June 2025"
  }
];

let currentProject = 0;

function showProject(index) {
  const project = projects[index];
  const pageButtons = document.querySelectorAll(".page-btn");

  document.getElementById("project-img").src = project.image;
  document.getElementById("project-img").alt = project.title;
  document.getElementById("project-title").textContent = project.title;
  
  document.getElementById("project-desc").innerHTML = 
    project.description
      .split('\n\n')
      .map(para => `<p>${para.replace(/\n/g, '<br>')}</p>`)
      .join('');

  document.getElementById("role-text").textContent = project.role;
  document.getElementById("team-text").textContent = project.team;
  document.getElementById("tools-text").textContent = project.tools;
  document.getElementById("timeline-text").textContent = project.timeline;

  const linkContainer = document.getElementById("project-link-container");
  if (project.link) {
    const buttonText = project.link.includes('figma.com') ? 'View on Figma' : 'View Project';
    
    linkContainer.innerHTML = `
      <a href="${project.link}" target="_blank" class="btn-view">
        ${buttonText}
      </a>
    `;
  } else {
    linkContainer.innerHTML = '';
  }

  pageButtons.forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });

  currentProject = index;
}

document.addEventListener("keydown", function(e) {
  switch(e.key) {
    case "ArrowLeft":
      const prevIndex = (currentProject - 1 + projects.length) % projects.length;
      showProject(prevIndex);
      break;
    case "ArrowRight":
      const nextIndex = (currentProject + 1) % projects.length;
      showProject(nextIndex);
      break;
    default:
      if (e.key >= "1" && e.key <= "3") {
        const index = parseInt(e.key) - 1;
        if (index < projects.length) {
          showProject(index);
        }
      }
  }
});

document.addEventListener("DOMContentLoaded", function() {
  showProject(0);
  
  document.querySelectorAll('.page-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => showProject(index));
  });
});
