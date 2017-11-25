_GLMedia = {
    input_cancel: 'images/icons/close_black.png',
    dd_cancel: 'images/icons/close_black.png',
    tbl_del_img: 'images/icons/close_black.png',
    tbl_up_img: 'images/icons/up.png',
    tbl_down_img: 'images/icons/down.png',
    file_download_img: 'images/icons/download.png',
    file_img_video: 'images/icons/video.png',
    file_img_pdf: 'images/icons/pdf.png',
    file_img_zip: 'images/icons/zip.png',
    file_img_file: 'images/icons/file.png',
    file_img_word: 'images/icons/word.png',
    file_img_excel: 'images/icons/excel.png',
    file_img_ppt: 'images/icons/ppt.png',
    file_img_img: 'images/icons/img.png',
    file_del_img: 'images/icons/close_black.png',
    file_right_img: 'images/icons/right.png',
    file_left_img: 'images/icons/left.png',
    fv_close_img: 'images/icons/close_black.png',
    fv_down_img: 'images/icons/download.png',
    fv_zoomout_img: 'images/icons/zoomout.png',
    fv_zoomin_img: 'images/icons/zoomin.png',
    fv_rotate_img: 'images/icons/rotate.png',
    fv_print_img: 'images/icons/print.png',
    fv_gmb_close: 'images/icons/close_black.png',
    tbl_save_img: 'images/icons/save2.png'
};
gv = {};

window.onload = function() {
   
    landingWindow();
}

function landingWindow(){

var mainDiv=document.getElementById("panel");
var newDiv = document.createElement("div");
mainDiv.appendChild(newDiv); 
var newContent = document.createTextNode("Hi, Let's have a look at the puupies"); 
newDiv.appendChild(newContent);
var div2=document.createElement("div");
newDiv.appendChild(div2);
var image1=document.createElement("img");
div2.appendChild(image1);
image1.src="images/puppyMain.png";
image1.style.height="100px";
var div3=document.createElement("div");
div2.appendChild(div3);
var button1=document.createElement("button");
div3.appendChild(button1);
var text1=document.createTextNode("CLICK ME");
button1.appendChild(text1);
button1.addEventListener("click",getAllPuppies);




function getAllPuppies(){
    var xhr=new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/api/puppies', true)
    xhr.onreadystatechange=function(){
        var users=JSON.parse(xhr.responseText);
        if(xhr.readyState == 4 && xhr.status == "200"){
            var data = users.data; 
            console.log("data",data);
            for(i=0; i<data.length; i++){
                var div4=document.createElement("div");
                div3.appendChild(div4);
                div4.innerHTML=data[i].name;
                var image2=document.createElement("img");
                div3.appendChild(image2);
                image2.src="images/icons/close_black.png";
                var id=users.data[i].id;
                image2.addEventListener("click",function(){cancelData(id)});




            }
            console.log("users",users);
        }
        else{
            console.error(users);
        }
    }
    xhr.send(null);
}
function cancelData(data){
    console.log("heyy");
    console.log(data)
    console.log("daajns")
}

}


// function landingWindow() {
//     var t={};
//     t.panel = gi("panel"),
//     t.panelHeader = ce("div", "panelHeader", t.panel),
//     t.headerText=ce("div","headerText",t.panelHeader).innerHTML='Puppies puppies Everywhere :)';
//     t.body=ce("div",'image',t.panelHeader)
//     t.mainImg = ce("img", "mainImg", t.body);
//     mainImg.src = "images/puppyMain.png";
//     t.titleText=ce("div",'titleText',t.body).innerHTML="Do you want to see the list of all the puppies??";
//     t.btngrp=ce('div','btngrp',t.body);
//     t.yesBtn=new BtnGrp({con:t.btngrp,idp:'yesBtn',clp:'small',dp:['YES']});aeh(gi('btngrp_yesBtn_0'),'click',getPuppies);
//     t.getText=ce("div",'getText',t.body);
    
//     // console.log("nameText",nameText);

//     function getPuppies(){
//         var t={}
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//                 var data = (JSON.parse(this.responseText)).data;
//                 for(i=0;i<data.length;i++){gv.id=data[i].id;
//                     t.nameText=ce('div','nameText'+i,t.getText);
//                     t.nameText.innerHTML=i+1+')'+' '+data[i].name+ ' '+data[i].breed;
//                     t.cancelImg=ce('img','cancelImg'+i,t.nameText);
//                     t.addImg=ce('img','addImg'+i,t.nameText);
//                     t.cancelImg.src='images/icons/close_black.png';aeh(gi('cancelImg'+i),'click',deletePuppies);
//                     t.addImg.src='images/icons/zoomin.png';aeh(gi('addImg'+i),'click',updatePuppies);
//                     console.log("data[i]",data[i].id);
//                 }
//             }
            
//         };
//     xhttp.open("GET", "http://localhost:3000/api/puppies", true);
//     xhttp.send();
  
//     }
//     function deletePuppies(){
//         var id=gv.id;
//         var xhttp=new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//                 var data = (JSON.parse(this.responseText)).data;
//                 console.log("data",data);
//             }
//         }
//         xhttp.open("DELETE", "http://localhost:3000/api/puppies/"+id, true);
//         xhttp.send();    
    
//     }
//     // function addPuppies(){var t={},data={};
//     //     t.gBox=ce('div','gBox',gi('panel'));
//     //     t.detail=ce('div','detail',t.gBox);t.detail.innerHTML='Please enter the puppy details';
//     //     t.name=new Input({con:t.gBox,idp:'name',title:'name',clp:'large',theme:'kon', ph:'puppy name',man:'*'});
//     //     t.breed=new Input({con:t.gBox,idp:'breed',title:'breed',clp:'large',theme:'kon',ph:'puppy breed',man:'*'});
//     //     t.age=new Input({con:t.gBox,idp:'age',title:'age',clp:'large',theme:'kon',ph:'puppy age',man:'*'});
//     //     t.sex=new Input({con:t.gBox,idp:'sex',title:'sex',clp:'large',theme:'kon',ph:'puppy gender',man:'*'});
//     //     t.postPuppy=new GMsgBox('Post Puppy',[t.gBox],[{val:'OK',evt:'click',handler:function(){postPuppy()}}],350,300,0,25,'userE',.85,'kon','images/icons/close_black.png');

//     //     function postPuppy(){ var d={};d.name=t.name.getValidatedValue(true);d.breed=t.breed.getValidatedValue(true);d.age=t.age.getValidatedValue(true);d.sex=t.sex.getValidatedValue(true);
//     //     var json = JSON.stringify(d);
//     //     var xhr = new XMLHttpRequest();
//     //     xhr.open("POST", "http://localhost:3000/api/puppies/", true);
//     //     xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
//     //     xhr.onload = function () {
//     //     var users = JSON.parse(xhr.responseText);
//     //     if (xhr.readyState == 4 && xhr.status == "201") {
//     //         console.table(users);
//     //     } else {
//     //         console.error(users);
//     //     }
//     // }
//     // xhr.send(json);

//     //     }
//     // }

//     function updatePuppies(){var t={},data={}; var id=gv.id;
//         t.gBox=ce('div','gBox',gi('panel'));
//         t.detail=ce('div','detail',t.gBox);t.detail.innerHTML='Please enter the puppy details';
//         t.name=new Input({con:t.gBox,idp:'name',title:'name',clp:'large',theme:'kon', ph:'puppy name',man:'*'});
//         t.breed=new Input({con:t.gBox,idp:'breed',title:'breed',clp:'large',theme:'kon',ph:'puppy breed',man:'*'});
//         t.age=new Input({con:t.gBox,idp:'age',title:'age',clp:'large',theme:'kon',ph:'puppy age',man:'*'});
//         t.sex=new Input({con:t.gBox,idp:'sex',title:'sex',clp:'large',theme:'kon',ph:'puppy gender',man:'*'});

//         t.postPuppy=new GMsgBox('Post Puppy',[t.gBox],[{val:'OK',evt:'click',handler:putPuppy}],350,300,0,25,'userE',.85,'kon','images/icons/close_black.png');
        
//             function putPuppy(){var d={};d.name=t.name.getValidatedValue(true);d.breed=t.breed.getValidatedValue(true);d.age=t.age.getValidatedValue(true);d.sex=t.sex.getValidatedValue(true);
//                 var json = JSON.stringify(d);
//                 var xhr = new XMLHttpRequest();var z="http://localhost:3000/api/puppies/"+id; console.log("zzzzz",z);
//                 xhr.open("PUT",z, true);
//                 xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
//                 xhr.onload = function () {
//                     var users = JSON.parse(xhr.responseText);
//                     if (xhr.readyState == 4 && xhr.status == "201") {
//                         console.table(users);
//                     } else {
//                         console.error(users);
//                     }
//                 }
//             xhr.send(json);
//         }
//     }
// }



