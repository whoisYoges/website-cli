const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));

app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
    getInputValue();
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})

function help() {
  createText("Type <span class='blue'>ls</span> to see all available commands.<br> Or type <span class='blue'>ls -l</span> to see a list of available commands with their short description.<br>Remember that all the commands are case sensitive.");
}

async function open_terminal(){
  await delay(350);
  createText("Hello visitor! Welcome to whoisYoges.eu.org...");
  await delay(700);
  createText("Type <span class='blue'>help</span> to get started.<br>Remember that the command is case sensitive.");
  new_line();
}

function new_line(){
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "guest";
  span1.textContent = "@";
  span2.textContent = "whoisYoges.eu.org";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fa-solid fa-angles-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  const value = document.querySelector("input").value;
  if(value === "about"){
    trueValue(value);
    createText("Hi, I am Yogesh Lamichhane (invalid).")
    createText("I am just a regular everyday normal guy.")
  }
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else if(value === "codeberg"){
    trueValue(value);
    createText("<i class='fa-brands fa-git-alt white'></i><a href='https://codeberg.org/whoisYoges' target='_blank' rel='noopener noreferrer'> codeberg.org/whoisYoges</a>")
  }
  else if(value === "cv"){
    trueValue(value);
    createText("<i class='fa-solid fa-file-arrow-up white'></i><a href='https://whoisYoges.eu.org/whoisYoges_resume.pdf' target='_blank' rel='noopener noreferrer'> whoisYoges.eu.org/whoisYoges_resume.pdf</a>")
  }
  else if(value === "date"){
    trueValue(value);
    currentdate=Date();
    createText(`<i class="fa-solid fa-calendar-days white"></i> ${currentdate}`)
  }
  else if(value === "email"){
    trueValue(value);
    createText("<i class='fa-solid fa-envelope white'></i><a href='mailto:hello@yogeshlamichhane.com.np' target='_blank' rel='noopener noreferrer'> hello@yogeshlamichhane.com.np</a>")
  }
  else if(value === "exit"){
    trueValue(value);
    createText("Exitting...");
    await delay(750);
    closeapp();
  }
  else if(value === "github"){
    trueValue(value);
    createText("<i class='fab fa-github white'></i><a href='https://github.com/whoisYoges' target='_blank' rel='noopener noreferrer'> github.com/whoisYoges</a>")
  }
  else if(value === "help"){
    trueValue(value);
    help();
  }
  else if(value === "instagram"){
    trueValue(value);
    createText("<i class='fab fa-instagram white'></i><a href='https://instagram.com/whoisYoges' target='_blank' rel='noopener noreferrer'> instagram.com/whoisYoges</a>")
  }
  else if(value === "linkedin"){
    trueValue(value);
    createText("<i class='fab fa-linkedin-in white'></i><a href='https://www.linkedin.com/in/whoisYoges' target='_blank' rel='noopener noreferrer'> linkedin.com/in/whoisYoges</a>")
  }
  else if(value === "ls"){
    trueValue(value);
    createText("Available commands: <br><span class='blue'>about</span>, <span class='blue'>clear</span>, <span class='blue'>codeberg</span>, <span class='blue'>cv</span>, <span class='blue'>date</span>, <span class='blue'>email</span>, <span class='blue'>exit</span>, <span class='blue'>github</span>, <span class='blue'>help</span>, <span class='blue'>instagram</span>, <span class='blue'>linkedin</span>, <span class='blue'>ls</span>, <span class='blue'>ls -l</span>, <span class='blue'>resume</span>, <span class='blue'>twitter</span>, <span class='blue'>whoami</span>, <span class='blue'>youtube</span>"); 
  }
  else if(value === "ls -l"){
    trueValue(value);
    createText("Available commands with description: <br> <p class='lsall'><span class='blue lstitle'>about </span> <span class='desc'> short about whoisYoges </span> </p>  <p class='lsall'><span class='blue lstitle'>clear </span>  <span class='desc'> clear the terminal screen </span> </p>  <p class='lsall'><span class='blue lstitle'>codeberg </span>  <span class='desc'> link to my personal projects git repo </span> </p> <p class='lsall'><span class='blue lstitle'>cv </span>  <span class='desc'> link to my cv </span> </p> <p class='lsall'><span class='blue lstitle'>date </span>  <span class='desc'> current date </span> </p> <p class='lsall'><span class='blue lstitle'>email </span>  <span class='desc'> email address to contact me </span> </p> <p class='lsall'><span class='blue lstitle'>exit </span>  <span class='desc'> exit from the terminal </span> </p> <p class='lsall'><span class='blue lstitle'>github </span>  <span class='desc'> link to my work projects git repo </span> </p> <p class='lsall'><span class='blue lstitle'>help </span>  <span class='desc'> show help text to get started with this site </span> </p> <p class='lsall'><span class='blue lstitle'>instagram </span>  <span class='desc'> link to my instagram profile </span> </p> <p class='lsall'><span class='blue lstitle'>linkedin </span>  <span class='desc'> link to my linkedin profile </span> </p> <p class='lsall'><span class='blue lstitle'>ls </span>  <span class='desc'> list all the available commands in this site </span> </p> <p class='lsall'><span class='blue lstitle'>resume </span>  <span class='desc'> link to my resume </span> </p> <p class='lsall'><span class='blue lstitle'>twitter </span>  <span class='desc'> link to my twitter profile </span> </p> <p class='lsall'><span class='blue lstitle'>whoami </span>  <span class='desc'> who are you? </span> </p> <p class='lsall'><span class='blue lstitle'>youtube </span>  <span class='desc'> link to my youtube profile"); 
  }
  else if(value === "resume"){
    trueValue(value);
    createText("<i class='fa-solid fa-file-arrow-up white'></i><a href='https://whoisYoges.eu.org/whoisYoges_resume.pdf' target='_blank' rel='noopener noreferrer'> whoisYoges.eu.org/whoisYoges_resume.pdf</a>")
  }
  else if(value === "twitter"){
    trueValue(value);
    createText("<i class='fab fa-twitter white'></i><a href='https://twitter.com/whoisYoges' target='_blank' rel='noopener noreferrer'> twitter.com/whoisYoges</a>")
  }
  else if(value === "whoami"){
    trueValue(value);
    createText(`<i class="fa-solid fa-user white"></i> guest`)
  }
  else if(value === "youtube"){
    trueValue(value);
    createText("<i class='fab fa-youtube white'></i><a href='https://www.youtube.com/channel/UCxFduVRp4umo_flSRCnAInQ?sub_confirmation=1' target='_blank' rel='noopener noreferrer'> Zero to Noob Linux</a>")
  }
  else if(value === ""){
    trueValue(value);
  }
  else{
    falseValue(value);
    createText(`${value}: command not found<br>Try <span class='blue'>help</span> to get started.`)
  }
}

function trueValue(value){
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fa-solid fa-angles-right icone")
  const errormessage = document.createElement("h2");
  errormessage.setAttribute("class", "sucess")
  errormessage.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(errormessage);
  app.appendChild(div);
}

function falseValue(value){
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fa-solid fa-angles-right icone error")
  const errormessage = document.createElement("h2");
  errormessage.setAttribute("class", "error")
  errormessage.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(errormessage);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

function maximizeapp() {
  var div1 = document.getElementById("container");
  if (div1.style.width != "100%") {
      w = div1.style.width;
      h = div1.style.height;
      div1.style.width = "100%";
      div1.style.height = "100%";
  }
  else
      {
          div1.style.width = w;
          div1.style.height = h;
      }
  return false;
}

function closeapp() {
  var div1 = document.getElementById("container");
  div1.style.display = "none";
  return false;
}

open_terminal();