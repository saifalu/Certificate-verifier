let data = ["1111111111","2222222222","3333333333"]
        function generate_output(){

            let key = document.getElementById("key").value
            
            let displaybox1 = document.getElementById("displaybox1")
            let displaybox2 = document.getElementById("displaybox2")
            
            if(key==""){
                displaybox1.innerHTML=""
                displaybox2.innerHTML="key number is not entered"
                return 0;
            }
            if(key.length<10 || key.length>10){
                displaybox1.innerHTML=""
                displaybox2.innerHTML="enter a valid 10 charachter key"
                return 0;
            }
            let count = false
            data.forEach(function check(element){
                if(key==element){
                    count = true
                }
            })

            if(count==true){
                displaybox2.innerHTML=""
                displaybox1.innerHTML = " ✅✔✓ certificate is valid"
                return 0;
            }
            else{
                displaybox1.innerHTML=""
                displaybox2.innerHTML="certificte is not valid"
                return 0;
            }

        }
