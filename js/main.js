const menu_items = document.querySelectorAll('.menu-item');
const body = document.body
const active = document.querySelector('.active');
const menuBorder = document.querySelector('.menu-border')



menu_items.forEach((item) => {


    let i = 0
    item.addEventListener('click' , (e) => {
        e.preventDefault()
        // console.log(item)

       
        menu_items.forEach((item) => {
            if(item.classList.contains('active')){
                item.classList.remove('active')
            }

        })


            if(item.classList.contains('orange')){
                body.style.setProperty("--bgColorItem" ,"#ff8c00")
                body.style.backgroundColor='#ffb457';
                menuBorder.style.left='-10px'
            }else if(item.classList.contains('pink')){
                body.style.setProperty("--bgColorItem" ,"#f54888")
                body.style.backgroundColor='#ff96bd';
                menuBorder.style.left='138px'
            }else if(item.classList.contains('blue')){
                body.style.setProperty("--bgColorItem" ,"#4343f5")
                body.style.backgroundColor='#9999fb';
                menuBorder.style.left='288px'
            }else if(item.classList.contains('yellow')){
                body.style.setProperty("--bgColorItem" ,"#e0b115")
                body.style.backgroundColor='#ffe797';
                menuBorder.style.left='437px'
            }else if(item.classList.contains('green')){
                body.style.setProperty("--bgColorItem" ,"#65ddb7")
                body.style.backgroundColor='#cffff1';
                menuBorder.style.left='587px'
            }




            item.classList.add('active');



      
      

    })
   

})