const itemsEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemsEl.length);

itemsEl.forEach(obj => {
    console.log('Category:', obj.firstElementChild.textContent);
    console.log('Elements:', obj.lastElementChild.children.length)
});

