let elem =  document.getElementsByClassName('rotator')[0],
    elemChild = elem.children,
    count = 0,
    elemCount = elem.childElementCount-1;

setInterval(()=>{
  for (let i = 0; i < elemCount; i++) {
    elemChild[i].classList.remove('rotator__case_active');
  }
  elemChild[count].classList.add('rotator__case_active');

  count++;
  if(count == elemCount) {
    count = 0;
  }
},1000);
