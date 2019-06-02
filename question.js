function yes1() {
    q1.classList.add('hidden');
    advice1.classList.remove('hidden');
}
function no1() {
    q1.classList.add('hidden');
    q2.classList.remove('hidden');
}
function yes2(){
    q2.classList.toggle('hidden')
    advice2.classList.remove('hidden');
}
function no2(){
    q2.classList.toggle('hidden');
    positive.classList.remove('hidden');
}
Yes2.onclick = yes2;
No2.onclick = no2;