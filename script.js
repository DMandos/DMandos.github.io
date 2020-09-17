document.querySelector(".logo").addEventListener("click",function() {
  document.querySelector(".logoQ").classList.add("quote");
  setTimeout(function() {
    document.querySelector(".logoQ").classList.remove("quote");}, 2000);
});

document.querySelector("#github").addEventListener("mouseover",function(){
document.querySelector(".git-img").setAttribute("src", "images/github-purple.png");});
document.querySelector("#github").addEventListener("mouseout",function(){
document.querySelector(".git-img").setAttribute("src", "images/github.png");});
