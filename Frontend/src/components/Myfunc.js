const  toogleBar = (e) => {
    e.preventDefault()
  const bigSide = document.getElementById('dashMe')
  const smallSide = document.getElementById("smallX")

  if (smallSide.style.display === "none" ) {
    bigSide.style.width="70%"
    smallSide.style.display="flex"
  }
  else {
    bigSide.style.width="93%"
    smallSide.style.display="none"
  }
}

const smallSide = (e) => {
  e.preventDefault();
    if (document.getElementById("smallX").style.display === "flex" ) {
      document.getElementById("smallX").style.display="none"
    }
  
    else { 
      document.getElementById("smallX").style.display="flex"
    }
}

const mediaFunc = ()=> {

function myFunction(x) {
  if (x.matches) { 
    document.getElementById("smallX").style.display="none"
    console.log('true')
  } 
  else {
    console.log("false")
  }
}
let x = window.matchMedia("(max-width: 768px)")
myFunction(x) 

}


module.exports= { toogleBar, smallSide, mediaFunc }