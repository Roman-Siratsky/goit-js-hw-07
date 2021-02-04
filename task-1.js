const itemRef = document.querySelectorAll('.item');
const titleRef = document.querySelectorAll('h2');
const itemListRef = document.querySelectorAll('.item > ul');

console.log(`В списке ${itemRef.length} категории.`);

itemListRef.forEach((item, index) => {
    console.log(`Категория: ${titleRef[index].textContent}`);
    console.log(`Количество элементов: ${item.childElementCount}`);
})

