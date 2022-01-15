console.log("Running Script");


(async () => {
    let CLICKED = false;
    let refreshInterval;
    let valueCheck;

    const startWorking = () => {
        refreshInterval = setInterval(() => {
            document.querySelector('div[data-original-title^="Refresh"]').firstChild.click();
        }, 2000)

        valueCheck = setInterval(() => {
            const priceNode = document.querySelector('div[class="my-2 card__price tw-truncate"]')?.innerText
            if (priceNode) {
                const price = Number(priceNode.split(' ')[0]);
                const thresholdValue = Number(document.querySelector('input#threshold').value)
                console.log({price, thresholdValue})
                if (price < thresholdValue) {
                    const url = document.querySelector('img[class="card-img-top"]').parentElement.href
                    console.log(url);
                    if (url) {
                        stopWorking();
                        CLICKED = false;
                        chrome.runtime.sendMessage({
                            message: "BUY",
                            url
                        })
                    }
                   
                }
            }
           
        }, 1000)
    }

    const stopWorking = () => {
       clearInterval(refreshInterval);
       clearInterval(valueCheck);
    }


    const interval = setInterval(() => {
        
        const collectionDiv = document?.querySelector('.collection-filter')
        if (collectionDiv) clearInterval(interval);

        const mainDiv = document.createElement('div');
        mainDiv.className = 'mainDiv';
        const a = document.createElement('input');
        const b = document.createElement('button');
        const c = document.createElement('button');
        b.className = 'startButton';
        c.className = 'startButton';
        a.className = 'test';
        a.placeholder = 'Enter Threshold Value';
        a.style.borderColor = 'white';
        a.id = 'threshold';

        b.innerText = 'Start';
        c.innerText = 'Stop';
        b.addEventListener('click', () => {
            if (!CLICKED) {
                startWorking();
                CLICKED = true;
            }
        })

        c.addEventListener('click', () => {
            if (CLICKED) {
                CLICKED = false;
                stopWorking();
            }
        })
        mainDiv.append(b,c, a);
    
        collectionDiv?.insertBefore(mainDiv, collectionDiv.firstChild);
    
    }, 200)

    

   




//    setInterval(() => {
//     document?.querySelector('div[data-original-title^="Refresh"]').firstChild.click()
//    }, 2000);
  

})()