var logo = document.querySelector(".android-logo-image");

logo.addEventListener("dblclick", function(){
    dataLayer.push({
        "event":"teste123"
    })
})