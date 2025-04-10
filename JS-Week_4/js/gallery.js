/*Name this external file gallery.js*/

function upDate(previewPic){
    document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")";
    document.getElementById("image").style.backgroundColor = "#000000";
    document.getElementById("description").innerHTML = previewPic.alt;
    document.getElementById("description").style.backgroundColor = "#000000";
    document.getElementById("description").style.bottom = "-575px";
}
   
function unDo(){
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").style.backgroundColor = "#8e68ff";
    document.getElementById("description").innerHTML = "Hover over an image below to display here.";
    document.getElementById("description").style.backgroundColor = "transparent";
    document.getElementById("description").style.bottom = "-285px";
}

function setFocus(){
    const images = document.getElementsByClassName("preview");
    for(let i = 0; i < images.length; i++){
        images[i].setAttribute("tabindex", "0");
        images[i].setAttribute("onfocus", "upDate(this)");
        images[i].setAttribute("onblur", "unDo(this)");
        console.log("Added tabindex, onfocus and onblur attributes for Image " + i)
    }
}