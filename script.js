let text_or_URL=document.getElementById("text_or_URL");
let QR_code_img=document.getElementById("QR_code_img");
let imgbox=document.getElementById("imgbox");
let generate=document.getElementById("generate");
let save=document.getElementById("save");

let generatecode=(e)=>{
   if(text_or_URL.value.length>0){
    QR_code_img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text_or_URL.value;
    imgbox.classList.add("display_img");
    generate.style.display = "none";
    save.style.display="block";

    save.addEventListener("click", function () {
        const downloadLink = document.createElement("a");
        downloadLink.href = QR_code_img.src;
        downloadLink.download = "qrcode.png";
        downloadLink.click();
    });

   }
   else{
    text_or_URL.classList.add("error");
    setTimeout(()=>{
        text_or_URL.classList.remove("error");
    },1000)
   }
}
