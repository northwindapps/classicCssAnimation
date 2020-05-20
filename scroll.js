console.log('scroll');
//gave me a solution
//https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
var body = document.body,
    html = document.documentElement;

var htmlHeight = Math.max(html.clientHeight, html.scrollHeight, html.offsetHeight );

console.log(htmlHeight);
let timepassed = 0;

start();

//gave me a solution
//https://stackoverflow.com/questions/44227997/creating-in-an-infinite-loop-using-settimeout
function start(){
    setTimeout(function () {
        let sectionElements = document.querySelectorAll('section');
        console.log(sectionElements);

        sectionElements.forEach(element => {
            if (getPos(element)) {
                element.classList.add('is-visible');
                //console.log(coords.top, coords.bottom);
            }else{
                element.classList.remove('is-visible');
            }
        });

        console.log("window innerheight",window.innerHeight);
        // console.log("document clientHeight",document.documentElement.clientHeight);
        start();
    }, 1000/60);
};

//geve me a solution
//https://stackoverflow.com/questions/37975457/how-to-get-absolute-coordinates-of-element-with-absolute-position-javascript-b
function getPos(el) {
    //Thank you Donovan
    //https://www.udemy.com/course/level-up-your-css-animation-skills/
    var rect=el.getBoundingClientRect();
    
    if((rect.top<=0 && rect.bottom >= 0) || 
    (rect.top >= 0 && rect.bottom <= window.innerHeight)||
    (rect.top<=window.innerHeight && rect.bottom >= window.innerHeight))
    {
        return{ top:rect.top, bottom:rect.bottom }
    }
}