let addLink = document.getElementById("add-link"),
  allLink = document.getElementById("all-links"),
  github1 = document.getElementById("github"),
  youtube1 = document.getElementById("youtube"),
  linedIn1 = document.getElementById("linedIn"),
  firstName = document.getElementById("f-name"),
  lastName = document.getElementById("l-name"),
  email = document.getElementById("email"),
  submit = document.getElementById("submit"),
  labelImg = document.getElementById("change"),
  bg = document.getElementById("bg"),
  myLogo = document.getElementById("my-logo"),
  myName = document.getElementById("my-name"),
  myEmail = document.getElementById("my-mail"),
  showDetails = document.getElementById("show-details"),
  myLinks = document.getElementById("my-link"),
  details = document.getElementById("details"),
  createLink = document.getElementById("create-link"),
  preview = document.getElementById("preview"),
  mobile = document.getElementById("mobile"),
  year = document.getElementById("year");

year.innerHTML = new Date().getFullYear();
let i = 1;
addLink.addEventListener("click", () => {
  //crete main div
  let mainDiv = document.createElement("div");
  mainDiv.className = "main-div";

  let head = document.createElement("div");
  head.className = "head";

  let divName = document.createElement("div");
  divName.className = "name";

  let icon = document.createElement("i");
  icon.className = "fa-solid fa-ellipsis";
  let name = document.createElement("span");
  name.innerHTML = `Link#${i}`;

  let remove = document.createElement("div");
  remove.className = "remove";
  remove.id = "remove";
  remove.innerHTML = "Remove";

  let div = document.createElement("div");
  div.className = "text-form";

  let platForm = document.createElement("h4");
  platForm.innerHTML = "Platform";

  //
  let select = document.createElement("div"),
    selector = document.createElement("div"),
    p = document.createElement("p"),
    myIcon = document.createElement("i"),
    listIItem = document.createElement("ul"),
    li1 = document.createElement("li"),
    li2 = document.createElement("li"),
    li3 = document.createElement("li"),
    li4 = document.createElement("li"),
    youtubeIcon = document.createElement("i"),
    youtubeName = document.createElement("p"),
    gitHubIcon = document.createElement("i"),
    gitHubName = document.createElement("p"),
    linkedIcon = document.createElement("i"),
    linkedName = document.createElement("p"),
    inputLink = document.createElement("input"),
    linkName = document.createElement("p"),
    validMail = document.createElement("small");

  li1.className = "option";
  li2.className = "option";
  li3.className = "option";

  youtubeIcon.className = "fa-brands fa-youtube";
  youtubeName.id = "youtubeName";
  youtubeName.className = "all-name";
  youtubeName.innerHTML = "Youtube";
  gitHubIcon.className = "fa-brands fa-github";
  gitHubName.id = "githubName";
  gitHubName.className = "all-name";
  gitHubName.innerHTML = "GitHub";
  linkedIcon.className = "fa-brands fa-linkedin-in";
  linkedName.id = "LinkedIn";
  linkedName.className = "all-name";
  linkedName.innerHTML = `LinkedIn`;
  inputLink.type = "text";
  inputLink.placeholder = `https://www.youtube.com`;
  linkName.id = "Link-name";
  linkName.innerHTML = "link";

  let s = document.createElement("select"),
    value1 = document.createElement("option"),
    value2 = document.createElement("option"),
    value3 = document.createElement("option"),
    defaultValue = document.createElement("option");

  s.id = "select";
  defaultValue.innerHTML = "Select social";
  value1.innerHTML = `Youtube`;
  value2.innerHTML = `GitHub`;
  value3.innerHTML = `LinkedIn`;

  s.appendChild(defaultValue);
  s.appendChild(value1);
  s.appendChild(value2);
  s.appendChild(value3);

  validMail.className = "d-none";

  validMail.innerHTML = "Please enter valid link";

  selector.className = "selector";

  select.appendChild(p);
  select.appendChild(myIcon);
  selector.appendChild(select);
  selector.appendChild(s);
  selector.appendChild(linkName);
  selector.appendChild(inputLink);
  selector.appendChild(validMail);

  //
  divName.appendChild(icon);
  divName.appendChild(name);
  head.appendChild(divName);
  head.appendChild(remove);

  div.appendChild(platForm);
  div.appendChild(selector);

  allLink.append(mainDiv);
  mainDiv.appendChild(head);
  mainDiv.appendChild(div);

  remove.addEventListener("click", () => {
    mainDiv.remove();

    if (remove.click) {
      if (value1.selected) {
        youtube1.href = "#";
        youtube1.setAttribute("target", "_self");
      } else if (value2.selected) {
        github1.href = "#";
        github1.setAttribute("target", "_self");
      } else {
        linedIn1.href = "#";
        linedIn1.setAttribute("target", "_self");
      }
    }
  });

  i++;

  inputLink.addEventListener("keyup", () => {
    if (value1.selected) {
      if (inputLink.value.includes("https://youtube.com")) {
        youtube1.href = inputLink.value;
        youtube1.setAttribute("target", "_blank");
        validMail.className = "d-none";
      } else {
        validMail.className = "d-block";
      }
    } else if (value2.selected) {
      if (inputLink.value.includes("https://github.com")) {
        github1.href = inputLink.value;
        github1.setAttribute("target", "_blank");
        validMail.className = "d-none";
      } else {
        validMail.className = "d-block";
      }
    } else if (value3.selected) {
      if (inputLink.value.includes("https://linkedin.com")) {
        linedIn1.href = inputLink.value;
        linedIn1.setAttribute("target", "_blank");

        validMail.className = "d-none";
      } else {
        validMail.className = "d-block";
      }
    }
  });
});

labelImg.onchange = changeImg;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  myName.innerHTML = `${firstName.value}  ${lastName.value}`;
  myEmail.innerHTML = email.value;
  myLogo.src = URL.createObjectURL(labelImg.files[0]);
});

function changeImg() {
  bg.style.backgroundImage = `url(${URL.createObjectURL(labelImg.files[0])})`;

  let x = document.getElementsByClassName("white");
  for (let i = 0; i < x.length; i++) {
    x[i].style.color = "white";
  }
}

showDetails.onclick = () => {
  details.classList.remove("d-none");
  createLink.classList.add("d-none");
  preview.classList.remove("button-active");
  showDetails.classList.add("active");
  myLinks.classList.remove("active");
  mobile.classList.remove("center-mobile");
};

myLinks.onclick = () => {
  createLink.classList.remove("d-none");
  details.classList.add("d-none");
  preview.classList.remove("button-active");
  myLinks.classList.add("active");
  showDetails.classList.remove("active");
  mobile.classList.remove("center-mobile");
};

preview.addEventListener("click", () => {
  createLink.classList.add("d-none");
  details.classList.add("d-none");
  preview.className = "button-active";
  mobile.classList.add("center-mobile");
});
