document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar_info').classList.toggle('sidebargo_info')
    if(document.querySelector('.sidebar_info').classList.contains('sidebargo_info')){
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else{
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
        document.querySelector('.cross').style.display = 'inline';
        },100);
    }
})