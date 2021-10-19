import '../scss/style.scss';

const solutionsBtn = document.querySelector('.solutions__btn');
const solutionsBtn_tech = document.querySelector('.solutions__btn-active');


solutionsBtn.addEventListener('click', () => {
    if(solutionsBtn_tech.style.display === 'block'){
        solutionsBtn_tech.style.display = 'none';
    }else{
        solutionsBtn_tech.style.display = 'block';
    }
});