console.log("BUYING STUFF");

(async () => {

    const interval = setInterval(() => {
        
        const buttons = [...document.querySelectorAll('button')].filter(item => item.innerText == 'Buy now');
        if (buttons.length) {
            clearInterval(interval);
            buttons[0].click();
        }

    }, 500)

})()