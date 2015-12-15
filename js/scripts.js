function dw_getScrollOffsets() {
    var doc = document, w = window;
    var x, y, docEl;

    if ( typeof w.pageYOffset === 'number' ) {
        x = w.pageXOffset;
        y = w.pageYOffset;
    } else {
        docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')?
                doc.documentElement: doc.body;
        x = docEl.scrollLeft;
        y = docEl.scrollTop;
    }
    return {x:x, y:y};
}

window.onscroll = function() {
    var off = dw_getScrollOffsets();
    console.log(off.y);

    var h2 = document.getElementsByClassName('hub-section-title')[0];
    var one = document.getElementsByClassName('hub-slide-one')[0];
    var two = document.getElementsByClassName('hub-slide-two')[0];
    var hub = document.getElementById('student-hub');

    if (off.y >= '1495' && off.y <= '2576') {
        // one.style.position = "fixed";
        // one.style.top = "0";
        // one.style.left = "0";
        // one.style.width = "100%";

        // hub.style.position = "fixed";
        // hub.style.top = "0";
        // hub.style.left = "0";
        // hub.style.width = "100%";
        // hub.style.zIndex = "2000";
        // hub.style.marginTop = "0";
    }

    // if (off.y >= '2577' && off.y <= '3576') {
    //     two.style.opacity = "1";
    //     h2.textContent = "Batman begins!";
    // }

    // if ((off.y > '3576') || (off.y < '1495')) {
    //     hub.style.position = "static";
    //     hub.style.top = "auto";
    //     hub.style.left = "auto";
    //     hub.style.width = "auto";
    //     hub.style.zIndex = "auto";
    //     hub.style.marginTop = "80px";
    // }

    // var h1 = document.getElementsByClassName('hub-section-title')[0];
    // var two = document.getElementsByClassName('two')[0];
    // var three = document.getElementsByClassName('three')[0];
    // var four = document.getElementsByClassName('four')[0];

    // if (off.y >= '1001' && off.y <= '1999') {
    //     two.style.opacity = "1";
    //     three.style.opacity = "0";
    //     h1.textContent="High School";
    // }

    // if (off.y <= '1000') {
    //     two.style.opacity = "0";
    // }

    // if (off.y >= '2001' && off.y <= '2999') {
    //     two.style.opacity = "0";
    //     three.style.opacity = "1";
    //     four.style.opacity = "0";
    //     h1.textContent="College students love us";
    // }

    // if (off.y >= '3001' && off.y <= '3999') {
    //     two.style.opacity = "0";
    //     three.style.opacity = "0";
    //     four.style.opacity = "1";
    //     h1.textContent="College students get smarter";
    // }
}
