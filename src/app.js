
function openModal() {
  let mod = document.getElementById('modalOne');
  mod.style.display = 'block';
  mod.style.animation = 'mod 1s forwards';
}

$('carousel').carousel('cycle');

function loadAnimations() {
  var yPos = window.scrollY;
  var viewY = Math.floor(yPos);
  if (viewY >= 850 && viewY < 1050) {
      var pers = document.getElementById('percent-row');
      pers.style.opacity = '1';
      pers.style.transform = 'translateY(-20px)';
  } else if (viewY >= 1300 && viewY < 1400) {
      var photo = document.getElementById('first-img-row');
      photo.style.opacity = '1';
      photo.style.transform = 'translateX(-25px)';
  } else if (viewY >= 1500 && viewY < 1600) {
      var photo2 = document.getElementById('second-img-row');
      photo2.style.opacity = '1';
      photo2.style.transform = 'translateX(25px)';
  }
}
