let count=0
const pictureList={
    "0":"img/ad2.jpg",
    "1":"img/ad1.jpg",
    "2":"img/ad3.jpg",
    "3":"img/ad4.jpg",
}

let pictureNumber=Object.keys(pictureList).length
document.getElementById("leftButton").addEventListener("click",clickLeftButton)
document.getElementById("rightButton").addEventListener("click",clickRightButton)
generateInit()

function generateInit(){
    let layout=document.getElementById("layout")
    url="url("+pictureList[0]+")"
    layout.style.backgroundImage=url
    let dotCount=document.getElementById("dotCount")
    let number=Object.keys(pictureList).length
    generateDot(number,dotCount)
}

function generateDot(number,element){
    for(let i=0;i<number;i++){
        dotName="dot"+String(i)
        let dot=document.createElement("img")
        dot.setAttribute("class","dot")
        if(i==0){
            dot.src="img/blackCircle.png"
        }else{
            dot.src="img/whiteCircle.png"
        }
        dot.setAttribute("id",dotName)
        element.appendChild(dot)
    }
}

function clickRightButton(){
    let tempDotName="dot"+String(count)
    let nowDot=document.getElementById(tempDotName)
    nowDot.src="img/whiteCircle.png"
    if(count+1==pictureNumber){
        count=0
    }else{
        count=count+1
    }
    let nextDotName="dot"+String(count)
    let nextDot=document.getElementById(nextDotName)
    nextDot.src="img/blackCircle.png"
    let layout=document.getElementById("layout")
    url="url("+pictureList[count]+")"
    layout.style.backgroundImage=url
}

function clickLeftButton(){
    let tempDotName="dot"+String(count)
    let nowDot=document.getElementById(tempDotName)
    nowDot.src="img/whiteCircle.png"
    if(count==0){
        count=pictureNumber-1
    }else{
        count=count-1
    }
    let nextDotName="dot"+String(count)
    let nextDot=document.getElementById(nextDotName)
    nextDot.src="img/blackCircle.png"
    let layout=document.getElementById("layout")
    url="url("+pictureList[count]+")"
    layout.style.backgroundImage=url 
}