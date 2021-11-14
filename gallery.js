const pictureInnerContainer = document.querySelector('.picture-inner-container');

let massivGalery = [`assets/img/galery/galery1.jpg`,`assets/img/galery/galery2.jpg`
,`assets/img/galery/galery3.jpg`,`assets/img/galery/galery4.jpg`
,`assets/img/galery/galery5.jpg`,`assets/img/galery/galery6.jpg`
,`assets/img/galery/galery7.jpg`,`assets/img/galery/galery8.jpg`
,`assets/img/galery/galery9.jpg`,`assets/img/galery/galery10.jpg`
,`assets/img/galery/galery11.jpg`,`assets/img/galery/galery12.jpg`
,`assets/img/galery/galery13.jpg`,`assets/img/galery/galery14.jpg`
,`assets/img/galery/galery15.jpg`];

function randomGalery(){
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    
    shuffle(massivGalery);
    
    for(let i = 0; i < 15; i++){
        const img = document.createElement('img');
        img.classList.add(`image-galery`);
        img.src = massivGalery[i];
        img.alt = `galery${i+1}`;
        pictureInnerContainer.append(img);
    }
}

randomGalery();

