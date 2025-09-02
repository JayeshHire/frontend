
const pinfo_status = [0, 0, 0, 0]; // 0 - hidden, 1 - visible
// [connect, interest, qualification, blog]

function makePinfoVisible(id){
    const ones_indexes = [];
    pinfo_ids = ['connect', 'interest', 'qualification', 'blog'] ;
    let i = -1 ;
    //make all the other elements hidden
    while((i = pinfo_status.indexOf(1, i+1)) != -1){
        ones_indexes.push(i);
        const elem = document.getElementById(pinfo_ids[i]);
        elem.style.visibility = "hidden";
        pinfo_status[i] = 0;
    }

    // make our selected element visible
    console.log(id);
    const elem = document.getElementById(id);
    elem.style.visibility = "visible";
    let idx = pinfo_ids.indexOf(id);
    pinfo_status[idx] = 1;
}

function addEventListner2List(){
    let li_ids = [
        "connect-btn",
        "interest-btn",
        "qualification-btn",
        "blog-btn"
    ] ;

    for (li_item of li_ids) {
        const domEle = document.getElementById(li_item) ;
        domEle.addEventListener("click", (event) => {
            let info_id = event.target.id.replace("-btn", "");
            makePinfoVisible(info_id) ;
        })
    }
}

addEventListner2List() ;


messages = [
    "Continuous Learner", 
    "Self Taught Developer", 
    "Loves Programming", 
    "Loves Low Level systems",
    "Loves Backend Development"
];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}