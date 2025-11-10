let sourceArr1 = ["images/slide0.jpg", "images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"]
let sourceIndex1 = 0

document.getElementById('prevBtn1').addEventListener('click', function () {
    sourceIndex1 = (sourceIndex1 - 1) % -sourceArr1.length
    document.getElementById('sliderImage1').setAttribute('src', sourceArr1.at(sourceIndex1))
})

document.getElementById('nextBtn1').addEventListener('click', function () {
    sourceIndex1 = (sourceIndex1 + 1) % sourceArr1.length
    document.getElementById('sliderImage1').setAttribute('src', sourceArr1[sourceIndex1])
})


let sourceArr2 = ["images/book2.jpg","images/book12.jpg", "images/book16.jpg", 
"images/book17.jpg", "images/book18.jpg", "images/book19.jpg", "images/book20.jpg"]
let sourceIndex2 = 0

document.getElementById('prevBtn2').addEventListener('click', function () {
    sourceIndex2 = (sourceIndex2 - 1) % -sourceArr2.length
    document.getElementById('sliderImage2').setAttribute('src', sourceArr2.at(sourceIndex2))
})

document.getElementById('nextBtn2').addEventListener('click', function () {
    sourceIndex2 = (sourceIndex2 + 1) % sourceArr2.length
    document.getElementById('sliderImage2').setAttribute('src', sourceArr2[sourceIndex2])
})