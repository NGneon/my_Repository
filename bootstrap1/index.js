'use strict'
let form = document.querySelector('form');
let page_name = form.querySelector('input[name="page-name"]');
let page_desc = form.querySelector('textarea');
let button = form.querySelector('button');
page_name.addEventListener('input', function() {
  page_name.value = page_name.value.replaceAll(' ', '_');
});
button.addEventListener('click', async function (e) {
	e.preventDefault();
	let text = await fetch('ajax_page_create.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams({
			page_name: page_name.value,
			page_desc: page_desc.value,
		}),
	})
  page_name.value = null;
  page_desc.value = null;
	let result = await text.text();
	console.log(result);
})

const start = document.getElementById('start');
let block = start.getElementsByClassName('block');
const target = document.getElementById('target');
let dragged = null;

Array.from(block).forEach(item => {
	item.addEventListener('dragstart', e => (dragged = e.target));
})

target.addEventListener('dragover', e => e.preventDefault());
target.addEventListener('drop', e => {
	if (dragged) {
		dragged.parentNode.removeChild(dragged);
		e.target.appendChild(dragged);
		dragged = null;
	}
});

start.addEventListener('dragover', e => e.preventDefault());
start.addEventListener('drop', e => {
	if (dragged) {
		dragged.parentNode.removeChild(dragged);
		e.target.appendChild(dragged);
		dragged = null;
	}
});