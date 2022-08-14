
function hatter() {
    document.body.style.backgroundColor = "red";
  }
  function szoveg(){
  const p = document.createElement("p");
  const textNode = document.createTextNode("Szöveg");
  p.appendChild(textNode);
  document.body.appendChild(p);
  }
  let gomb = document.querySelector('#open');
  let nyz = 1;
  gomb.addEventListener('click', () =>{  
      if (nyz == 1)
      {
      gomb.innerText = 'Close';
      event.target.style.color = 'red';
      nyz--;
      }else
      {
      gomb.innerText = 'Open';
      event.target.style.color = 'green';
      nyz++;
      }
  });
  
  function cars() {
    const cars = ["Saab","Volvo ","BMW","Volkswagen","Audi","Skoda","Seat","Suzuki","Ferrari","Hyundai"];
  let text = "<ol>";
      for (let i = 0; i < cars.length; i++) {
          text += "<li>" + cars[i] + "</li>";
      }
      text += "</ol>";
      document.getElementById("demo").innerHTML = text;
  }