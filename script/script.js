let  titleElement = document.querySelector('.title h2'); 
let  հomText = document.querySelector('.home .text'); 
let  languages = document.querySelector('.personal-box .title h2'); 
let armeniaLanguages = document.querySelector('.skill-4'); 
let  englishLanguages = document.querySelector('.skill-1'); 
let  rusianLanguages = document.querySelector('.skill-2'); 
let  knowledge = document.querySelector('.knowledge'); 
let  headTitle  = document.querySelector('.headTitle'); 
let  subTitle  = document.querySelector('.subTitle'); 
let  aboutMe  = document.querySelector('.box h2'); 
let  description  = document.querySelector('.desc'); 
let  education  = document.querySelector('.group-2 .title .box h2'); 
let  schoolInfo  = document.querySelector('.school .msg-2'); 
let  CollageInfo  = document.querySelector('.collage .msg-2'); 
let  CollageInfo2  = document.querySelector('.collage .msg-1');  


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    menuToggle.addEventListener('click', () => { 
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
        }
    });
});

const listItems = document.querySelectorAll('#navMenu ul li');
listItems.forEach((item,index) => {
    item.addEventListener('click',function(){
        switch (index) {
            case 0:
                titleElement.innerText = "Հետադարձ կապ"
                հomText.innerText = "Երևան"
                languages.innerText = "Լեզուներ"
                armeniaLanguages.innerText = "Հայերեն"
                englishLanguages.innerText = "Ռուսերեն"
                rusianLanguages.innerText = "Անգլերեն"
                knowledge.innerText = "Հմտություններ" 
                headTitle.innerHTML = `<h1>Խաչիկ<br><b>Մեսրոբյան</b></h1>`
                subTitle.innerText    = "Full-stack ծրագրավորող"
                aboutMe.innerText  = "Ընդհանուր տեղեկություն"
                description.innerText = "Ունեմ աշխատանքային միջավայրին հեշտ ադապտացվելու բնավորություն։ Համբերատար եմ, աշխատասեր, նպատակասլաց։ Տիրապետում եմ մասնագիտական բարձր հմտությունների։"
                education.innerText   = "Կրթություն"
                schoolInfo.innerText   = "Թիվ 108 միջնակարգ դպրոց"
                CollageInfo.innerText   = "2018-2022 | Երևանի թեթև արդյունաբերության պետական ​​քոլեջ"
                CollageInfo2.innerText = "Հաշվողական տեխնիկայի և ավտոմատացված համակարգերի ծրագրային ապահովում"
                break;

            case 1:
                console.log("ruseren")
                titleElement.innerText = "Связываться со мной"
                հomText.innerText = "Ереван"
                languages.innerText = "Языки"
                armeniaLanguages.innerText = "Армянский"

                englishLanguages.innerText = "Aнглийский"
                rusianLanguages.innerText = "Русский"
                knowledge.innerText = "Навыки" 
                headTitle.innerHTML = `<h1>Хачик<br><b>Месробян</b></h1>`
                subTitle.innerText    = "Full-stack разработчик"
                aboutMe.innerText  = "Обо мне"
                description.innerText = "Имею характер легко адаптируюсь к рабочей среде. Я терпеливый, трудолюбивый, целеустремленный."
                education.innerText   = "Образование"
                schoolInfo.innerText   = "Средняя школа №108"
                CollageInfo.innerText   = "2018-2022 | Ереванский государственный колледж легкой промышленности"
                CollageInfo2.innerText = "Программное обеспечение для вычислительных и автоматизированных систем    "
                break;

            case 2:
                console.log("angleren")
                titleElement.innerText = "Contact"
                հomText.innerText = "Yerevan"
                languages.innerText = "Languages"
                armeniaLanguages.innerText = "Armenian"
                englishLanguages.innerText = "English"
                rusianLanguages.innerText = "Russian"
                knowledge.innerText = "My knowledge"
                headTitle.innerHTML = `<h1>Khachik<br><b>Mesrobyan</b></h1>`
                subTitle.innerText    = "Full-stack Developer"
                aboutMe.innerText  = "About Me"
                description.innerText = "Organized, responsible, I'm very easy work in a team, I learn very quickly, I take the initiative in developing and optimizing the code. In my free time I like to watch videos related to new knowledge in programming and try to make them myself"
                education.innerText   = "Education"
                schoolInfo.innerText   = "Secondary School No.108"
                CollageInfo.innerText   = "2018-2022 | Yerevan State College of Light Industry"
                CollageInfo2.innerText = "Computer և software for automated systems"
                break;

            default:
                break;
        } 
  });
});
 