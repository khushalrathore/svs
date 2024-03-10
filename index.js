var red = Math.floor(Math.random() * 256);
var green = Math.floor(Math.random() * 256);
var blue = Math.floor(Math.random() * 256);
var alpha = 0.3;
document.documentElement.style.setProperty('--random-color', `rgba(${red}, ${green}, ${blue}, ${alpha})`);

   document.addEventListener('DOMContentLoaded', function() {
        const servicesButton = document.getElementById('services');
        const servicesDiv = document.getElementById('servicesDiv');
        const companyButton = document.getElementById('company');
        const companyDiv = document.getElementById('companyDiv');

        function handleMouseEnter(event, button, div) {
            div.style.display = 'block';
            button.classList.add('active');
        }

        function handleMouseLeave(event, button, div) {
            if (!isMouseOverElement(event, div)) {
                div.style.display = 'none';
                button.classList.remove('active');
            }
        }

        servicesButton.addEventListener('mouseenter', function(event) {
            handleMouseEnter(event, servicesButton, servicesDiv);
        });

        servicesButton.addEventListener('mouseleave', function(event) {
            handleMouseLeave(event, servicesButton, servicesDiv);
        });

        servicesDiv.addEventListener('mouseenter', function(event) {
            handleMouseEnter(event, servicesButton, servicesDiv);
        });

        servicesDiv.addEventListener('mouseleave', function(event) {
            handleMouseLeave(event, servicesButton, servicesDiv);
        });

        companyButton.addEventListener('mouseenter', function(event) {
            handleMouseEnter(event, companyButton, companyDiv);
        });

        companyButton.addEventListener('mouseleave', function(event) {
            handleMouseLeave(event, companyButton, companyDiv);
        });

        companyDiv.addEventListener('mouseenter', function(event) {
            handleMouseEnter(event, companyButton, companyDiv);
        });

        companyDiv.addEventListener('mouseleave', function(event) {
            handleMouseLeave(event, companyButton, companyDiv);
        });

        document.addEventListener('click', function(event) {
            if (event.target !== servicesDiv && event.target !== servicesButton && event.target !== companyDiv && event.target !== companyButton) {
                servicesDiv.style.display = 'none';
                companyDiv.style.display = 'none';
                servicesButton.classList.remove('active');
                companyButton.classList.remove('active');
            }
        });

        function isMouseOverElement(event, element) {
            const rect = element.getBoundingClientRect();
            return event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
        }
    });

var n = 1;
  var maxContent = 5;

  document.getElementById('nextBtn').addEventListener('click', function() {
    document.getElementById(`content${n}`).style.display = 'none';
    n = n % maxContent + 1;
    document.getElementById(`content${n}`).style.display = 'block';
  });

  document.getElementById('prevBtn').addEventListener('click', function() {
    document.getElementById(`content${n}`).style.display = 'none';
    n = (n - 2 + maxContent) % maxContent + 1;
    document.getElementById(`content${n}`).style.display = 'block';
  });