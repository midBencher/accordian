const accordians = document.querySelectorAll(".accordian");

accordians.forEach(accordian=>{
    const question = accordian.querySelector('.question');
    const answer = accordian.querySelector('.answer');

    accordian.addEventListener('click',()=>{
        question.classList.toggle('active');
        answer.classList.toggle('active')
    })
})