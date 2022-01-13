console.log("Running Script");


(async () => {

    const interval = setInterval(() => {
        
        const collectionDiv = document?.querySelector('.collection-filter')
        if (collectionDiv) clearInterval(interval);

        const mainDiv = document.createElement('div');
        mainDiv.className = 'mainDiv';
        const a = document.createElement('input');
        const b = document.createElement('button');
        b.className = 'startButton'
        a.className = 'test';
        a.placeholder = 'Enter Threshold Value';

        b.innerText = 'START';
        mainDiv.append(b, a);
    
        collectionDiv?.insertBefore(mainDiv, collectionDiv.firstChild);
    
    }, 200)

    

   




//    setInterval(() => {
//     document?.querySelector('div[data-original-title^="Refresh"]').firstChild.click()
//    }, 2000);
  

})()