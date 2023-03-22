const dragger=document.getElementById("imagesec");
const dragger_text=document.getElementById("dt");
const dragger_button=document.getElementById("browseFile");
const draggerArea=document.getElementById("fileSelectorInput");

const browseHandler=()=>{
    draggerArea.click();
    dragger_text.textContent="Release to upload"
}

draggerArea.addEventListener('change',(e)=>{
    file=this.files[0]
})
dragger.addEventListener('dragover',(e)=>{
    e.preventDefault();
})
dragger.addEventListener('dragleave',()=>{
    dragger_text.textContent="Drag And Drop"
})
dragger.addEventListener('drop',(e)=>{
    e.preventDefault();
    file=e.dataTransfer.files[0];
    uploadFileHandler(file)
})

const uploadFileHandler=(files)=>{
// console.log(files);
const filereader=new FileReader();
    filereader.onload=()=>{
        const fileURL=filereader.result;
        const imageTag=`<img src=${fileURL} alt="" id="abc"/>`
        dragger.innerHTML=imageTag;
    }
filereader.readAsDataURL(file);
}