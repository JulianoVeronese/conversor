
function conversor1(event){
    event.preventDefault();
    

    let density = document.getElementById('density').value;
    let unity = document.getElementById('unity').value;
    let select = document.getElementById('unityInput');
    let unityText = select.options[select.selectedIndex].value;
    
    console.log(unityText);
  
  if(unityText == "1"){
    console.log(event)
    let total = unity / density 
    
    total = total.toFixed(2);
    
    
    document.getElementById('conversor1').innerHTML = total;
    document.getElementById('result1').style.display = 'block';
    document.getElementById('result2').style.display = "none";
  

}
}
function conversor2(event){
  event.preventDefault();

  let density = document.getElementById('density').value;
  let unity = document.getElementById('unity').value;
  let select = document.getElementById('unityInput');
  let unityText = select.options[select.selectedIndex].value;
  
  console.log(unityText);

if(unityText == "2"){
  console.log(event)
  let total = unity * density 
  
  total = total.toFixed(2);
  
  
  document.getElementById('conversor2').innerHTML = total;
  document.getElementById('result2').style.display = 'block';
  document.getElementById('result1').style.display = "none";
 
}
}
document.getElementById('result1').style.display = "none";
document.getElementById('result2').style.display = "none";
document.getElementById('unitsForm').addEventListener('submit', conversor1);
document.getElementById('unitsForm').addEventListener('submit', conversor2);
