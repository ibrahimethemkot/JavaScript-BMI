function Endeks(){
    let inputKilo = document.getElementById("kilo").value;
    let inputBoy = document.getElementById("boy").value;
    let hesap = (inputKilo / Math.pow(inputBoy,2)) * 10000;
    let boyKontrol = false;
    let kiloKontrol = false;

    //document.getElementById("sonuc").innerText = hesap.toFixed(2);

    if(inputBoy === '' || isNaN(inputBoy) || (inputBoy < 0)){
        document.getElementById("sonuc").innerText = "Geçerli bir giriş yapmadınız!";
        //document.getElementById("sonuc").style.color = "red";--bunlar iptal
        document.getElementById("sonuc").classList.add("text-danger");
    }

    if(inputKilo === '' || isNaN(inputKilo) || (inputKilo <0)){
        document.getElementById("sonuc").innerText = "Geçerli bir giriş yapmadınız!";
        //document.getElementById("sonuc").style.color = "red";
        document.getElementById("sonuc").classList.add("text-danger");
    }

    else if(hesap < 18.49){
        document.getElementById("sonuc").innerText = `Sonuç: ${hesap.toFixed(2)} - İdeal kilonun altındasınız. Kilo almanız gerekiyor.`;
        //document.getElementById("sonuc").style.color = "gray";
        document.getElementById("sonuc").classList.add("text-info");
    }

    else if (hesap >= 18.50 && hesap < 25){
        document.getElementById("sonuc").innerText = `Sonuç: ${hesap.toFixed(2)} - İdeal kilodasınız. Formunuzu korumaya devam edin.`;
        //document.getElementById("sonuc").style.color = "blue";
        document.getElementById("sonuc").classList.add("text-primary");
    }

    else if (hesap >= 25 && hesap < 30){
        document.getElementById("sonuc").innerText = `Sonuç: ${hesap.toFixed(2)} - İdeal kilonun üzerindesiniz. Kilo vermeniz gerekiyor.`;
        //document.getElementById("sonuc").style.color = "orange";
        document.getElementById("sonuc").classList.add("text-warning");
    }

    else if (hesap >= 30){
        document.getElementById("sonuc").innerText = `Sonuç: ${hesap.toFixed(2)} - İdeal kilonun aşırı üzerindesiniz. Acilen doktora görünmelisiniz!`;
        //document.getElementById("sonuc").style.color = "red";
        document.getElementById("sonuc").classList.add("text-danger");
    }
}