const tabButtons = document.querySelectorAll('.tab-button');
const tabs = document.querySelectorAll('.tab');

tabButtons.forEach(function(button) {
	button.addEventListener('click', function(event){
		event.preventDefault();
		hideAllTabs();

		for (const tabButton of tabButtons) {
			tabButton.classList.remove('active');
		}

		button.classList.add('active');

		const tabToActivate = document.querySelector(button.getAttribute('href'));
		tabToActivate.style.display = 'block';
	});
});

function hideAllTabs() {
	for (const tab of tabs) {
		tab.style.display = 'none';
	}
}

hideAllTabs();

tabs[0].style.display = 'block';
tabButtons[0].classList.add('active');
