// 배열
// var 변수 = 10;console.log(변수) //10

// var 배열 =['일동','이동','삼동','사동']
// console.log(배열[1]) //이동
// console.log(배열[3]) //사동

// 배열요소(아이템) 각각할일
// 배열.forEach(할일);
// 배열.forEach(function(){실행문});
// 배열.forEach(function(item){
//     console.log(item+ "아 안녕~")
// });

var allVideos=document.querySelectorAll('.video')
var allplay = document.querySelector('#play-all')


allVideos.forEach(function(v){
    v.addEventListener('mouseover',function(){
        var video = v.querySelector('video')
        video.play();
    })
    v.addEventListener('mouseleave',function(){
        var video = v.querySelector('video')
        video.pause();
    })
})


allplay.addEventListener('click',function(){
    /* if(조건문){
        조건문이 참일때 실행
    }else{
        조건문이 거짓일때 실행
    } */
    if(allplay.classList.contains('on')){
        console.log('ok')
        allplay.classList.remove('on')
        document.querySelector('.play-all').innerHTML="Pause all"

        allVideos.forEach(function(v){
            var video=v.querySelector('video');
            video.play();
        })
    }else{
        console.log('no')
        allplay.classList.add('on')
        document.querySelector('.play-all').innerHTML="Play all"

        allVideos.forEach(function(v){
            var video=v.querySelector('video');
            video.pause();
        })
    }
})