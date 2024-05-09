//Ini JavaScript

function validation() {
    let name = document.getElementById("name").value;
    if (name == '' || name == null) {
        document.getElementById('name').style.border = '1px solid red';
        alert('Inputan Anda Kosong, Tolong Periksa Kembali');
    } else {
        alert('Welcome ' + name);
        console.log(name);
    }
    
//Section Slide
let indexSlide = 1; //[0, 1, 2]
showSlide(1);

function nextSlide(i){
    console.log('nextSlide ' + i);
    showSlide(indexSlide +- i);
}

//Slide logic
function showSlide(index) {
    let listImage = document.getElementsByClassName('banner-item');
    console.log(listImage);
    console.log('Banyaknya image : ' + listImage.length);

    //Reset SlideIndex
    index > listImage.length ? indexSlide = 1 : console.log('Aman');

    let i = 0;
    while (i < listImage.length) {
        listImage[i].style.display = 'none';
        i++;
    }

    //Show only one image
    listImage[indexSlide - 1].style.display = 'block';
    console.log('showSlide: ' + index);
}

setInterval(() => nextSlide(1), 2000);

document.getElementById('send').addEventListener('click', () => nextSlide(1))
}
//document.getElementById('send').addEventListener('click', () => validation())}