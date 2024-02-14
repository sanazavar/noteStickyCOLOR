let inputElem = document.getElementById('input-field')
let btnSaveElem = document.getElementById('btn-save')
let btnDeletElem = document.querySelector('#btn-delete')
let colorsBoxesElem = document.querySelectorAll('.color-box')
let listedElem = document.querySelector('#listed')




listedElem.addEventListener('click',function(event){
if(event.target.tagName==='P'){
    event.target.parentElement.remove()
}
})


colorsBoxesElem.forEach(function (color) {

    color.addEventListener('click', function (event) {
        mainColor = event.target.style.backgroundColor
        inputElem.style.backgroundColor = mainColor

    })

})

btnDeletElem.addEventListener('click', function () {
    inputElem.value = ''
    inputElem.style.backgroundColor = '#fff'

})

///Note: '' is a falsey value
///Note: ' ' is a truthy value

function generateNewNote(){
    let newDivElem=document.createElement('div')
    newDivElem.className='card shadow-sm rounded'
    // newDivElem.addEventListener('click',removeNote)  >>>haveChanged
    let newDivElemBg=inputElem.style.backgroundColor
    newDivElem.style.backgroundColor=newDivElemBg

    let newPElem=document.createElement('p')
    newPElem.className='card-text p-3'
    newPElem.innerHTML=inputElem.value

    newDivElem.append(newPElem)
    listedElem.append(newDivElem)

    inputElem.value=''
    inputElem.style.backgroundColor='#fff'

}
// function removeNote(event){
//     event.target.parentElement.remove()
// }                                                  >>>haveChanged

btnSaveElem.addEventListener('click',generateNewNote)
inputElem.addEventListener('keydown',function(event){
    if(event.keyCode===13){
        if(inputElem.value){ // برای  اینکه زمانیکه خالی اینتر می شود ادد نشه  اما باز مشکل هست
            generateNewNote()

        }
    }
})


/////////////////////////////scrollto(),scrollBy()///////////


let btn=document.querySelector('button')

btn.addEventListener('click',function(){
    window.scrollTo(100,100)
})






