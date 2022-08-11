
// let cylinder = document.querySelector('.cylinder');

// for (let c = 0; c < 361; c++) {
//     let newdiv = document.createElement('div');
//     newdiv.setAttribute('class','rectangle m' + c);
//     cylinder.appendChild(newdiv);

//     let newrect = document.querySelector('.m' + c);
//     newrect.style.transform = 'rotateY(' + c + 'deg)';
// }

// let tire = document.querySelector('.tire');

// for (let i = 0; i < 101; i += 0.5) {
//     let newdiv = document.createElement('div');
//     if(i < 50){
//         // let stt = ;
//         // console.log(stt);
//         newdiv.setAttribute('class','leftcircle' + i * 2 + ' maincircle');
//         tire.appendChild(newdiv);

//         let newrect = document.querySelector('.leftcircle' + i * 2);
//         newrect.style.left =  i + '%';
//     }
//     else if (i == 50) {
//         newdiv.setAttribute('class','midcircle' + i * 2 + ' maincircle');
//         tire.appendChild(newdiv);

//         let newrect = document.querySelector('.midcircle' + i * 2);
//         newrect.style.left =  i + '%';
//     }
//     else if (i > 50) {
//         let rightvar = i * 2 - 51;
//         newdiv.setAttribute('class','rightcircle' + rightvar + ' maincircle');
//         tire.appendChild(newdiv);

//         let newrect = document.querySelector('.rightcircle' + rightvar);
//         newrect.style.left =  100 - rightvar + '%';

//         console.log(i);

//     }
// }