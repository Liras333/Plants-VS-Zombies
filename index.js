function menu_click(){
    var przycisk_bg = document.getElementById("przycisk-bg");
    var napis_pvz = document.getElementById("napis-pvz");
    var header_down = document.getElementById("header-down");

    header_down.style.display = "flex";
    napis_pvz.style.display = "none";
    przycisk_bg.style.display = "none";
    
}

function menu_dbclick(){
    var przycisk_bg = document.getElementById("przycisk-bg");
    var napis_pvz = document.getElementById("napis-pvz");
    var header_down = document.getElementById("header-down");

    header_down.style.display = "none";
    napis_pvz.style.display = "block";
    przycisk_bg.style.display = "block";
}

function menu_dbclick2(){
    var przycisk_bg = document.getElementById("przycisk-bg");
    var napis_pvz = document.getElementById("napis-pvz");
    var header_down = document.getElementById("header-down");

    header_down.style.display = "none";
}

function greaterThan6(tab,callback){
    for(let i=0; i >= tab.length; i++){
        if(i > 6){
            var num = tab[i];
            console.log(callback(num));
        }
    }
}

function msg(txt){
    console.log(txt)
}

var arr = [1,2,3,4,5,6,7,8,9,10];

greaterThan6(arr,msg)