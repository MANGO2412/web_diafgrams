//the first script
const createELements=(id)=>{
    const SELECT = document.createElement("select");
    SELECT.setAttribute("id",id);



    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const option3 = document.createElement("option");
    const option4 = document.createElement("option");

    option1.textContent = " ";
    option1.setAttribute("value","1")
    
    option2.textContent ="paquete 1: small burger 45$";
    option2.setAttribute("value","2");

    option3.textContent = "paquete 2; big burger 100$";
    option3.setAttribute("value","3");

    option4.textContent = "paquete 3: stranger burger 150$";
    option4.setAttribute("value","4");


    SELECT.appendChild(option1);
    SELECT.appendChild(option2);
    SELECT.appendChild(option3);
    SELECT.appendChild(option4);
    
    return SELECT;
}



let number =0;

const packages = document.getElementById("packages");
const num_range = document.getElementById("num_range");
const output = document.getElementById("output");
const btn = document.getElementById("btnAmount");



num_range.addEventListener("change",()=>{
    output.textContent = "cantidad pedida:"+num_range.value;
    number = Number(num_range.value);
})


btn.addEventListener("click",()=>{
    alert(number);
   for (let i = 0; i < number; i++) { 
      packages.innerHTML += "seleccion del paquete numero "+i;
     packages.appendChild(createELements(i));       
   }
})

