var allVideos = $('.video');
var allpaly=$('#play-all');
var video;

/* 누구.hover(
    function(){
        누구 한테 마우스를 올렸을때 할일
    }, function(){
        누구 한테 마우스를 내렸을때 할일
    }
) */
allVideos.hover(
    function(){
        video=$(this).find('video');
        video.get(0).play(); /* 제이쿼리는 요소로 바꿔야함  get(0)요쇼중에 첫번째를 호출*/
    }, function(){
        video.get(0).pause();
    }
)

allpaly.click(function(){
    //allplay가 on 을 가지고 있는가
    if(allpaly.haClass('on')){
        var vd=$('video')
        allpaly.removeClass('on');
        $('.play-all').txet('pause all')

        // for(초기값; 조건문; 증가감식){
        //     실행문
        // }
        console.log(vd.length)
        for(var i=0; i<vd.length; i++){
            vd.get(i).play();
        }
        vd.get(0).play();
    }else{
        //조건문이 거짓일때 할일
        allplay.addClass('on');
        $('.play-all').text('Play All')
        for(var i=0; i<vd.length; i++){
            vd.get(i).Pause();
            }
    }
});