

window.addEventListener('DOMContentLoaded', () => {
    //Circle diagram
    const circlesWrapper =  document.querySelectorAll('.recipes__item-diagrams__item--graph-circle');
    const circles = document.querySelectorAll('.circle');
    
    //Set attribute
    circlesWrapper.forEach(wrapper => {
        for(let i = 0; i < wrapper.children.length; i++) {
            const ratio = Number(wrapper.children[1].textContent.replace('%', ''))/100 + 'em';
            console.log(wrapper.children[1].textContent, ratio);
            wrapper.children[0].setAttribute('data-ratio', ratio);
        }
    })

    
    
    circles.forEach(item => {
        const size = item.getAttribute('data-ratio');
        item.style.clip = `rect(0, ${size}, 1em, 0)`;
    })

});