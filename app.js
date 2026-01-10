fetch("data/courses.json")
  .then(r => r.json())
  .then(courses => {
    window.allCourses = courses;
    render(courses);
  });

const container = document.getElementById("courses");
const search = document.getElementById("search");

search.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  const filtered = window.allCourses.filter(c =>
    Object.values(c).join(" ").toLowerCase().includes(q)
  );
  render(filtered);
});

function render(list) {
  container.innerHTML = "";
  list.forEach(c => {
    const div = document.createElement("div");
    div.className = "course";
    div.innerHTML = `
      <strong>${c["Course Name"]}</strong><br>
      ${c["Course Code"]}
    `;
    container.appendChild(div);
  });
}