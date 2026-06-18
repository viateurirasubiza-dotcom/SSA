// ================= DARK MODE =================
function toggleDark(){
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

// Load theme on start
window.onload = function(){
  if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
  }
};

// ================= ALERT SYSTEM =================
function showAlert(msg){
  const div = document.createElement("div");
  div.innerText = msg;
  div.style.position = "fixed";
  div.style.top = "20px";
  div.style.right = "20px";
  div.style.background = "#2563eb";
  div.style.color = "white";
  div.style.padding = "12px";
  div.style.borderRadius = "8px";
  div.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
  document.body.appendChild(div);

  setTimeout(()=> div.remove(), 3000);
}

// ================= LOADING EFFECT =================
function setLoading(btn, state){
  if(state){
    btn.innerText = "Loading...";
    btn.disabled = true;
  }else{
    btn.innerText = "Submit";
    btn.disabled = false;
  }
}
