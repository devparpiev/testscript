// ======================================== Q&A ======================================== \\

// Get elements from DOM

const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

// Select all 'q' elements

for(let i=0; i < q.length; i++) {
	// Add click event to all 'q' elements
	q[i].addEventListener('click', () => {
		a[i].classList.toggle('a-opened');
		arr[i].classList.toggle('arrow-rotated');
	});
}