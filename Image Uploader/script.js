const DragArea= document.querySelector('.appBody'),
DragText= DragArea.querySelector('h3'),
button= DragArea.querySelector('button'),
input= DragArea.querySelector('input');

let Myfile;

button.onclick= ()=>{
    input.click();
}

DragArea.addEventListener('dragover', (event)=>{
    event.preventDefault();
    DragText.textContent= 'Release to Upload File'
});
DragArea.addEventListener('dragleave', (event)=>{
    event.preventDefault();
    DragText.textContent= 'Drag & Drop';
});


DragArea.addEventListener('drop', (event)=>{
    event.preventDefault();
    Myfile= event.dataTransfer.files[0];
    ShowMe();
});

function ShowMe(){
    let fileType= Myfile.type;
    let VaildEx =["image/jpeg","image/jPg","image/png"];
    if(VaildEx.includes(fileType)){
        let fileReader= new FileReader();
        fileReader.onload=()=>{
            let imgUrl= fileReader.result;
            let img= `<img src="${imgUrl}" alt="">`;

            DragArea.innerHTML= img;
        }
        fileReader.readAsDataURL(Myfile);
    }
    else{
        alert("This is not Supported");
        DragText.textContent= 'Drag & Drop';
    }

}