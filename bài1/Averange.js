function averange(){
    let a1 =document.getElementById("physics").value;
    let b1 =document.getElementById("chermis").value;
    let c1 =document.getElementById("biology").value;
    let a=+a1
    let b=+b1
    let c=+c1
     d= Number(document.getElementById("physics"))
       totalpoint=(a+b+c)/3;


    if((a1 && b1 && c1)&&(a>=0 && b>=0 && c>=0)&&(a<11 && b<11 && c<11 ) ){
        document.getElementById("result").value=totalpoint
    }else {
        alert("yêu cầu nhập đúng và đủ số điểm")
    }

console.log(d)
}