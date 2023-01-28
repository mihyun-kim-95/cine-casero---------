//새로고침시 최상단으로 
window.onload = function(){
    setTimeout (function (){
        scrollTo(0,0);
    },100)
}

//loading 페이지
//1. 마우스 커서 효과
$('.loading').mousemove(function(e){
    // 포인터 중앙으로
    const w = $('.cursor').width()/2
    const h = $('.cursor').height()/2

    const xVal = e.clientX
    const yVal = e.clientY

    // 중앙값만큼 빼기! 
    gsap.to('.cursor', {
        x:xVal - w,
        y:yVal - h,
    })
})


//2. 화면 클릭시 열리기 
$('.loading').click(function(){
    const loadTitle = new SplitType('.loading .title')
    const myAudio = document.getElementById("music");
    myAudio.play();

    gsap.to(loadTitle.chars, {
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
        onComplete:function(){
           tl1.play()
        }
    }),

    $(this).addClass('open');
    $('.cursor').css('display','none');
})


//시작 화면 이미지 튀어나오는 효과
gsap.set('.gallery-area img',{y:-200,})

const tl1 = gsap.timeline({
    paused:true,
})

tl1
.from('.gallery-area img',{stagger:{from:'random', amount: 0.3,}, delay:0.5, stagger:0.1, scale:0,})
.addLabel('a')
.to('.gallery-area img',{y:0, stagger:{from:'random', amount: 0.3,},},'a')
.from('.sc-memory .text-area',{opacity: 0, delay:0.5}, 'a')




//헤더 컬러 체인지
$('[data-white]').each(function(i,el){
    gsap.from(el, ({
        scrollTrigger:{
            trigger:el,
            start:"0% 0%",
            end:"100% 0",
            toggleClass: {targets: '.header-inner', className: "active"},
        },
    }))
})

//헤더 스크롤 효과
lastScroll = 0;
$(window).scroll(function(){
    current = $(this).scrollTop();

    if (current > lastScroll) {
        $('.header-inner').addClass('slide')
    } else {
        $('.header-inner').removeClass('slide')
    }

    lastScroll = current;
})

//contacto로 이동
$('.btn-contact').click(function(e){
    e.preventDefault();
    gsap.to(window, {duration: 1, scrollTo:'.footer'})

    $('.path-top, .path-bottom').removeClass('open');
    $('.header-inner').removeClass('inner');
    $('.inner-menu').removeClass('show');
    $('body').removeClass('o-hidden')
})



//colabo 로 이동
$('.btn-colabo').click(function(e){
    e.preventDefault();
    gsap.to(window, {duration: 2, scrollTo:'.sc-colabo'})

    $('.path-top, .path-bottom').removeClass('open');
    $('.header-inner').removeClass('inner');
    $('.inner-menu').removeClass('show');
    $('body').removeClass('o-hidden')
})


//audio 효과
const myAudio = document.getElementById("music");

$('.btn-audio').click(function(e){
    e.preventDefault();

    if ($(this).hasClass('active')) {
        $('.btn-audio').removeClass('active').attr('aria-label','음악재생');
        myAudio.play();
    } else {
        $('.btn-audio').addClass('active').attr('aria-label','음악정지');
        myAudio.pause();
    }
})


//inner-menu 효과
$('.btn-open').click(function(e){
    e.preventDefault();
    $('.path-top, .path-bottom').toggleClass('open');
    $('.inner-menu').toggleClass('show');
    $('.header-inner').toggleClass('inner');
    $('body').toggleClass('o-hidden')
})

//home movie day로 이동
$('.btn-homemovie').click(function(e){
    e.preventDefault();
    gsap.to(window, {duration: 2, scrollTo:'.sc-homemovie'})

    $('.path-top, .path-bottom').removeClass('open');
    $('.header-inner').removeClass('inner');
    $('.inner-menu').removeClass('show');
    $('body').removeClass('o-hidden')
})


//film performances 이동
$('.btn-text').click(function(e){
    e.preventDefault();
    gsap.to(window, {duration: 2, scrollTo:'.sc-text'})

    $('.path-top, .path-bottom').removeClass('open');
    $('.header-inner').removeClass('inner');
    $('.inner-menu').removeClass('show');
    $('body').removeClass('o-hidden')
})

//El Gran Film 이동
$('.btn-gran_film').click(function(e){
    e.preventDefault();
    gsap.to(window, {duration: 2, scrollTo:'.sc-gran_film'})

    $('.path-top, .path-bottom').removeClass('open');
    $('.header-inner').removeClass('inner');
    $('.inner-menu').removeClass('show');
    $('body').removeClass('o-hidden')
})



//Sobre Nosotros 이동
$('.btn-aboutus').click(function(e){
    e.preventDefault();
    gsap.to(window, {duration: 2, scrollTo:'.sc-aboutus'})

    $('.path-top, .path-bottom').removeClass('open');
    $('.header-inner').removeClass('inner');
    $('.inner-menu').removeClass('show');
    $('body').removeClass('o-hidden')
})


//Nuestro foco 이동
$('.btn-focus').click(function(e){
    e.preventDefault();
    gsap.to(window, {duration: 2, scrollTo:'.sc-focus'})

    $('.path-top, .path-bottom').removeClass('open');
    $('.header-inner').removeClass('inner');
    $('.inner-menu').removeClass('show');
    $('body').removeClass('o-hidden')
})



//Nuestros Servicios 이동
$('.btn-service').click(function(e){
    e.preventDefault();
    gsap.to(window, {duration: 2, scrollTo:'.sc-service'})

    $('.path-top, .path-bottom').removeClass('open');
    $('.header-inner').removeClass('inner');
    $('.inner-menu').removeClass('show');
    $('body').removeClass('o-hidden')
})


//colabora 이동
$('.btn-inner_colabo').click(function(e){
    e.preventDefault();
    gsap.to(window, {duration: 2, scrollTo:'.sc-colabo'})

    $('.path-top, .path-bottom').removeClass('open');
    $('.header-inner').removeClass('inner');
    $('.inner-menu').removeClass('show');
    $('body').removeClass('o-hidden')
})


//contact 이동
$('.btn-inner_contact').click(function(e){
    e.preventDefault();
    gsap.to(window, {duration: 2, scrollTo:'.footer'})

    $('.path-top, .path-bottom').removeClass('open');
    $('.header-inner').removeClass('inner');
    $('.inner-menu').removeClass('show');
    $('body').removeClass('o-hidden')
})


//이미지 커지면서 미는 효과

gsap.set('.gallery-area .center img', {
    xPercent: -50,
    yPercent:-50,
})

intro = gsap.timeline({
    scrollTrigger:{
        trigger:'.group-gallery',
        start:"0% 0%",
        end:"100% 100",
        pin:true,
        scrub:1,
    },
})

intro
.addLabel('a')
.to('.gallery-area .left', { xPercent: -210,},'a')
.to('.gallery-area .right', { xPercent: 210,},'a')
.to('.gallery-area .center img', { width: '100vw', height: '100vh', borderRadius:0,},'a')
.to('.gallery-area .gallery-title', { opacity:1, visibility: 'visible'},'a')




//testimonials 마우스 효과
$('.testimonials-item').mousemove(function(e){
    hover = $(this).find('.img-box')

    const w = $(hover).width()/2
    const h = $(hover).height()/2

    const xVal = e.offsetX
    const yVal = e.offsetY

    gsap.to(hover,{
        x:xVal - w,
        y:yVal - h,
    })
})

$('.testimonials-item').mouseleave(function(e){
    hover = $(this).find('.img-box')
    gsap.to(hover,{
        'transform': 'translate(0, 0)'
    })
})


//home movie day

const homeMovieTitle = new SplitType('.homemovie_title')

gsap.from(homeMovieTitle.chars, {
    opacity:0,
    stagger: 0.2,
    duration: .5,
    scrollTrigger:{
        trigger:'.sc-homemovie',
        start:"0% 0%",
        end: "20% 20%",
        scrub:1,
    },
})

ScrollTrigger.matchMedia({
    // large
    "(min-width: 1025px)": function() {
        gsap.set('.reel-area .right', {
            yPercent: -50,
        })
        
        homeMovieReel = gsap.timeline({
            scrollTrigger:{
                trigger:'.sc-homemovie',
                start:"0% 0%",
                end:"300%",
                scrub:1,
                pin:true,
            }
        })
        
        homeMovieReel
        .addLabel('b')
        .to('.reel-area .left', {yPercent: -50,},'.b')
        .to('.reel-area .right', {yPercent: 0,},'.b')
    },
    // medium
    "(min-width: 768px) and (max-width: 1024px)": function() {
        gsap.set('.reel-area .right', {
            yPercent: -50,
        })
        
        homeMovieReel = gsap.timeline({
            scrollTrigger:{
                trigger:'.sc-homemovie',
                start:"0% 0%",
                end:"300%",
                scrub:1,
                pin:true,
            }
        })
        
        homeMovieReel
        .addLabel('b')
        .to('.reel-area .left', {yPercent: -50,},'.b')
        .to('.reel-area .right', {yPercent: 0,},'.b')
    },
})


//film performances 글씨
infi = gsap.to('.sc-text .txt1 span',70,{
    xPercent: -100,
    ease:'none',
    paused:true,
})

infi2 = gsap.to('.sc-text .txt2 span',40,{
    xPercent: -100,
    ease:'none',
    paused:true,
})

infi.play();
infi2.play();


//cinema
gsap.to('.sc-cinema .text-area', {
    scrollTrigger:{
        trigger: ".sc-cinema",
        start:"0% 0%",
        end:"200%",
        scrub: 1,
        pin:true,
    },
    y: -400,
    duration: 5,
    opacity: 0.5,
    }
    )


//gran-film
const granFilmTitle = new SplitType('.gran_title')

gsap.from(granFilmTitle.chars, {
    opacity:0,
    stagger: 0.2,
    duration: .5,
    scrollTrigger:{
        trigger:'.sc-gran_film',
        start:"0% 0%",
        end: "20% 20%",
        scrub: 1,
    }
})

//gran-film 이미지 회전 효과
infi = gsap.to('.sc-gran_film .rotate',10,{
    rotation: 90,
    ease:'none',
})

gsap.to('.sc-gran_film .rotate',{
    scrollTrigger:{
        trigger:'.sc-gran_film',
        start:"0% 0%",
        end: "100% 100%",
        scrub: 3,
    },
    rotation: 100,
})

//about 이미지 슬라이드 업
gsap.set('.group-img img', {scale: 0.9,})

$('[data-img]').each(function(i,el){
    gsap.to(el, ({
        scrollTrigger:{
            trigger:el,
            start:"0% 90%",
            end:"100% 50%",
            scrub:1,
            markers:true,
        },
        yPercent: -80,
        scale: 1.1,
    }))
})


//about-us
const aboutUsTitle = new SplitType('.aboutus_title')
gsap.from('.char', {
    opacity:0,
    stagger: 0.01,
    duration: .5,
    scrollTrigger:{
        trigger:'.sc-aboutus',
        start:"0% 0%",
        end: "10% 10%",
        scrub: 2,
    }
})


$('[data-fade]').each(function(i,el){
    gsap.from(el, ({
        scrollTrigger:{
            trigger:el,
            start:"0% 80%",
            end:"100% 50%",
            scrub:3,
        },
        yPercent: 10,
        opacity: 0,
    }))
})

//focus 스크롤 이미지 줄이기 효과
gsap.set('.sc-focus .title',{opacity:0})

ScrollTrigger.matchMedia({
    // large
    "(min-width: 1025px)": function() {
        gsap.set('.sc-focus .title',{opacity:0})

        const tlFocus = gsap.timeline({
            scrollTrigger:{
                trigger:'.sc-focus',
                start:"0% 0%",
                end:"150%",
                scrub: 3,
                pin: '.sc-focus .video-area',
            },
        })
        
        tlFocus
        .to('.sc-focus video',{width: 330, height: 330, borderRadius: 500})
        .to('.sc-focus .title', {opacity: 1})
        .to('.sc-focus .inner', {yPercent: -100})
    },
    // medium
    "(min-width: 768px) and (max-width: 1024px)": function() {
        gsap.set('.sc-focus .title',{opacity:0})

        const tlFocus = gsap.timeline({
            scrollTrigger:{
                trigger:'.sc-focus',
                start:"0% 0%",
                end:"150%",
                scrub: 3,
                pin: '.sc-focus .video-area',
            },
        })
        
        tlFocus
        .to('.sc-focus video',{width: 250, height: 250, borderRadius: 500})
        .to('.sc-focus .title', {opacity: 1})
        .to('.sc-focus .inner', {yPercent: -100})
    },
    // small
    "(max-width: 767px)": function() {
        gsap.set('.sc-focus .title',{opacity:0})

        const tlFocus = gsap.timeline({
            scrollTrigger:{
                trigger:'.sc-focus',
                start:"0% 0%",
                end:"150%",
                scrub: 3,
                pin: '.sc-focus .video-area',
            },
        })
        
        tlFocus
        .to('.sc-focus video',{width: 150, height: 150, borderRadius: 500})
        .to('.sc-focus .title', {opacity: 1})
        .to('.sc-focus .inner', {yPercent: -60})
    },
  });



//service area
const serviceTitle = new SplitType('.service-title')

gsap.from(serviceTitle.chars, {
    opacity:0,
    stagger: 0.01,
    duration: .5,
    scrollTrigger:{
        trigger:'.sc-service',
        start:"0% 0%",
        end: "10% 10%",
        scrub:1,
    },
})


ScrollTrigger.matchMedia({
    // large
    "(min-width: 1025px)": function() {
        gsap.to('.sc-service .text-area',({
            scrollTrigger: {
                trigger: '.sc-service',
                start: "0% 0%", 
                end: "100% 100%",
                scrub: 1,
                pin: ".sc-service .title-area",
            }
        }))
        
    },
    // medium
    "(min-width: 768px) and (max-width: 1024px)": function() {
        gsap.to('.sc-service .text-area', ({
            scrollTrigger:{
                trigger:'.sc-service',
                start:"0% 0%",
                end:"100% 100%",
                scrub:1,
                pin:'.sc-service .title-area',
            },
            yPercent:-5,
        }))
        
    },
})




//footer 화면 
gsap.from('.footer-inner', ({
    scrollTrigger:{
        trigger:'.sc-colabo',
        start:"100% 80%",
        end:"100% 0%",
        scrub:0,
    },
    yPercent: -30,
}))


//btn-top 상단으로 가기 효과
$('.btn-top').click(function(){
    $('html,body').animate({scrollTop:0})
})