// dark mode toggle
const html = document.querySelector('html')
const darkToggle = document.querySelector('#dark-toggle')
const circleToggle = document.querySelector('.circle-toggle')
const mode = document.querySelector('.mode')


if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true
    mode.innerHTML='🌕'
  } else {
   darkToggle.checked = false
   mode.innerHTML='🌤'
  }
darkToggle.addEventListener('click',function(){
    if(darkToggle.checked){
        html.classList.add('dark')
        localStorage.theme = 'dark'
        mode.innerHTML='🌕'
    }else{
        html.classList.remove('dark')
        localStorage.theme = 'light'
        mode.innerHTML='🌤'
    }
})


// navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header')
    const toTop = document.querySelector('#to-top')
    let navfix = header.offsetTop
    if(window.pageYOffset > navfix){
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
        console.log('lewatt')
    }else{
        header.classList.remove('navbar-fixed')
        toTop.classList.add('hidden')
        toTop.classList.remove('flex')
    }
}

// hamburger
const hamburger = document.querySelector('#hamburger')
const navlist =  document.querySelector('#nav')
hamburger.addEventListener('click',function(){
    console.log('actv')
    console.log('navbar')
    hamburger.classList.toggle('hamburger-active')
    navlist.classList.toggle('hidden')
})

// klik di luar hamburger
window.addEventListener('click',function(e){
    if(e.target != hamburger && e.target != navlist){
        hamburger.classList.remove('hamburger-active')
        navlist.classList.add('hidden')
    }
})


// data berhasil kirim

