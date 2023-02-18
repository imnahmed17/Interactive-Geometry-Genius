document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = 'blog.html';
});

changeColor = function(e) {
    e.style.backgroundColor = 'rgb('+Math.round(Math.random()*255)+
                                            ','+Math.round(Math.random()*255)+
                                            ','+Math.round(Math.random()*255)+')';
}