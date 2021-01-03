function debounce(fn, delay = 500, immediate = false) {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments;
        if (timer) clearTimeout(timer);
        if (immediate) {
            let donow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, delay);
            if (donow) fn.apply(context, args);
        } else {
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        }
    };
}

export default debounce;