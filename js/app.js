import jobs from "./data.js";

const template = document.getElementById("job-list-template");
const jobsList = document.getElementById("job-list");

jobs.forEach((job) => {
  console.log(job);
  const clone = template.content.cloneNode(true);

  if (job.featured) {
    clone.querySelector(".job-list__item").classList.add("border-left");
  }

  //   image
  clone.querySelector(".job-list__image").src = job.logo;
  clone.querySelector(".job-list__company").textContent = job.company;
  clone.querySelector(".job-list__status__new").style.display = `${
    job.new ? "block" : "none"
  }`;
  clone.querySelector(".job-list__status__featured").style.display = `${
    job.featured ? "block" : "none"
  }`;
  clone.querySelector(".job-list__status__position").textContent = job.position;
  clone.querySelector(".job-list__posted").textContent = job.postedAt;
  clone.querySelector(".job-list__contract").textContent = job.contract;
  clone.querySelector(".job-list__location").textContent = job.location;

  jobsList.appendChild(clone);
});
