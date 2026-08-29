// Close mobile nav when a link is clicked on small screens
document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
        if (window.matchMedia('(max-width: 768px)').matches) {
            var nav = document.querySelector('.nav-links');
            var menu = document.querySelector('.menu');
            if (nav) nav.classList.remove('open');
            if (menu) menu.classList.remove('open');
        }
    });
});
//project overview toggle
function drop(element) 
{
    var projectCard = element.closest('.project-card');
    var projectOverview = projectCard.querySelector('.project-overview');
    if (projectOverview.style.display === 'block') 
    {
        projectOverview.style.display = 'none';
        element.style.transform = 'rotate(0deg)';
        element.style.transition = 'transform 0.3s ease';
    }
    else 
    {
        projectOverview.style.display = 'block';
        element.style.transform = 'rotate(180deg)';
        element.style.transition = 'transform 0.3s ease';
    }
}
// Disable right-click
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable keyboard shortcuts for developer tools
document.onkeydown = function(e) {
  if (e.keyCode == 123) { return false; } // F12
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { return false; } // Ctrl+Shift+I
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { return false; } // Ctrl+Shift+C
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { return false; } // Ctrl+Shift+J
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { return false; } // Ctrl+U
}
