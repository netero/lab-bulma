const burgerIcon = document.querySelector(".navbar-burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener('click',()=>{
    console.log("s")
    navbarMenu.classList.toggle('is-active');
});

//Tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab)=>{
    tab.addEventListener('click', ()=>{
        tabs.forEach(item=>item.classList.remove('is-active'));
        
        tab.classList.add('is-active');
        const target = tab.dataset.target;
        tabContentBoxes.forEach(content=>{
            if(content.id === target){
                content.classList.remove('is-hidden');
            }
            else{
                content.classList.add('is-hidden');
            }
        });
    });
})