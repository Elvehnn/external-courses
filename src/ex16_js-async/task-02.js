let output = () => {
    console.log('scroll!');
};

const debounce = (callback, delay) => {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

window.addEventListener('scroll', debounce(output, 300));