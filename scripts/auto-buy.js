console.log("BUYING STUFF");

(async () => {

    const interval = setInterval(() => {
        
        const button = document.querySelector('.item-info-list')?.querySelector('button')
        if (button) {
            clearInterval(interval);
            button.click();
        }


    }, 500)

})()