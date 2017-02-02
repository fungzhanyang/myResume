var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    onSlideChangeEnd: function (swiper) {
        [].forEach.call(swiper.slides,function(item,index) {
            item.classList.remove('animation');
        });
        swiper.slides[swiper.activeIndex].classList.add('animation');
    }
});

~function (desW) {
    var winW = document.documentElement.clientWidth,
        n = winW / desW,
        oMain = document.getElementById('main');
    if (winW > desW) {
        oMain.style.width = desW + "px";
        return;
    }
    document.documentElement.style.fontSize = n * 100 + "px";
}(640);

(function () {
    var music=document.getElementById('bgMusic');
    var musicAudio=music.getElementsByTagName('audio')[0];
    music.addEventListener('click',function () {
        if(musicAudio.paused){
            musicAudio.play();
            music.classList.add('move');
            return;
        }
        musicAudio.pause();
        music.classList.remove('move');
    },false);
    window.setTimeout(function () {
        musicAudio.play();
        musicAudio.addEventListener('canplay', function () {
            music.style.display = 'block';
            music.classList.add('move');
        }, false);
    }, 1000);
})();