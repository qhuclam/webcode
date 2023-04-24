//
$(document).ready(function() {
    $('.casket').hover(function() {
    
        $(this).css('transform', 'scale(1.1)');
    }, function() {
       
        $(this).css('transform', 'scale(1)');
    });
    
    $('.casket').click(function() {
    
        var imageUrl = $(this).find('after').css('background-image');
        imageUrl = imageUrl.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
        window.open(imageUrl);
    });
});
// 
// function showPopup() {
//     document.getElementById("popup").style.display = "block";
//   }
  
  function hidePopup() {
    document.getElementById("popup").style.display = "none";
    setTimeout(function() {
        popup.classlist.add('deactive');      
    }, 0);
  }


//Popup transition
function showPopup() {
    var popup = document.querySelector('.popup');
    setTimeout(function() {
      popup.classList.add('active');
    }, 0); // Delay for 0 seconds 
  var popup = document.getElementById("popup");
  if (popup.style.display === "none") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
}




// function togglePopup() {
//   const popup = document.querySelector('.popup');
//   popup.classList.toggle('active');
//   popup.classList.toggle('deactive');
// }

// document.addEventListener('click', function(event) {
//   const popup = document.querySelector('.popup');
//   if (!popup.contains(event.target)) {
//     popup.classList.remove('active');
//     popup.classList.add('deactive');
//   }
// });