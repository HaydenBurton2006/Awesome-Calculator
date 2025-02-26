function Add(){
    const a = Number(document.querySelector('.firstnumber').value);
    const b = Number(document.querySelector('.secondnumber').value);

    document.querySelector('.text-a').textContent = a+b;
}
function Subtract(){
    const a = Number(document.querySelector('.firstnumber').value);
    const b = Number(document.querySelector('.secondnumber').value);

    document.querySelector('.text-a').textContent = a-b;
}
function Divide(){
    const a = Number(document.querySelector('.firstnumber').value);
    const b = Number(document.querySelector('.secondnumber').value);

    document.querySelector('.text-a').textContent = a/b;
}
function Multiply(){
    const a = Number(document.querySelector('.firstnumber').value);
    const b = Number(document.querySelector('.secondnumber').value);

    document.querySelector('.text-a').textContent = a*b;
}
function Clear(){
    document.querySelector('.text-a').textContent = "";
}
