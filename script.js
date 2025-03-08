window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

function flyer(){
  window.location="flyer.html";
}

function business(){
  window.location="business.html";
}

function poster(){
  window.location="poster.html";
}

function logo(){
  window.location="logo.html";
}

function product(){
  window.location="product.html";
}
function banner(){
  window.location="banner.html";
}