const courseTree = document.getElementById('structure');
const btn = document.getElementById('btn');

btn.addEventListener('click', () =>
{
    courseTree.classList.toggle('hide');
});