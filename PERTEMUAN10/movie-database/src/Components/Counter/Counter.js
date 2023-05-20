import {useState, useEffect} from "react";

function Counter(){

    const [angka, setAngka] = useState(0);

    function AddAngka(){
        setAngka(angka + 1);
    }


    useEffect(()=>{
        console.log("componen dimount");   

        // akses
        document.title = `Result : ${angka}`;
    }, [angka]);

    console.log("componen dirender");   

    return (
        <div>
            <p>Result: {angka}</p>
            <button onClick={AddAngka}>Add</button>
        </div>
    );
}

export default Counter;


// kalo mau console.log dengan data banyak bisa gunain

// console.log("","","");
// funcion pembuatan namanya berawalan set contoh setAngka