import React, { useState } from 'react'

export default function TextForm(props) {
    let letter_Counta;
    let letter_Countb;
    let letter_Countc;
    let letter_Countd;
    let letter_Counte;
    let letter_Countf;
    let letter_Countg;
    let letter_Counth;
    let letter_Counti;
    let letter_Countj;
    let letter_Countk;
    let letter_Countl;
    let letter_Countm;
    let letter_Countn;
    let letter_Counto;
    let letter_Countp;
    let letter_Countq;
    let letter_Countr;
    let letter_Counts;
    let letter_Countt;
    let letter_Countu;
    let letter_Countv;
    let letter_Countw;
    let letter_Countx;
    let letter_County;
    let letter_Countz;
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Conveted to Uppercase","success")
    }

    const handleextraspace = () => {
        let b = text.split(/[ ]+/)
        setText(b.join(" "))
        props.showAlert("Removed extra spaces","success")
    }

    const handlelowClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Conveted to LowerCase","success")
    }

    const handleonChange = (event) => {
        // console.log("onchange was clicked")
        setText(event.target.value)

    }

    const valuetonull = () => {
        if (text === "Enter text here") {
            setText("")
        }
    }

    const handleclearClick = () => {
        setText("")
        document.getElementById('a').innerHTML = ""
        document.getElementById('b').innerHTML = ""
        document.getElementById('c').innerHTML = ""
        document.getElementById('d').innerHTML = ""
        document.getElementById('e').innerHTML = ""
        document.getElementById('f').innerHTML = ""
        document.getElementById('g').innerHTML = ""
        document.getElementById('h').innerHTML = ""
        document.getElementById('i').innerHTML = ""
        document.getElementById('j').innerHTML = ""
        document.getElementById('k').innerHTML = ""
        document.getElementById('l').innerHTML = ""
        document.getElementById('m').innerHTML = ""
        document.getElementById('n').innerHTML = ""
        document.getElementById('o').innerHTML = ""
        document.getElementById('p').innerHTML = ""
        document.getElementById('q').innerHTML = ""
        document.getElementById('r').innerHTML = ""
        document.getElementById('s').innerHTML = ""
        document.getElementById('t').innerHTML = ""
        document.getElementById('u').innerHTML = ""
        document.getElementById('v').innerHTML = ""
        document.getElementById('w').innerHTML = ""
        document.getElementById('x').innerHTML = ""
        document.getElementById('y').innerHTML = ""
        document.getElementById('z').innerHTML = ""
        props.showAlert("Cleared","success")
    }

    const handlenoofalphabets = () => {
        let inputsmallcase;
        inputsmallcase = text.toLowerCase()
        letter_Counta = 0;
        letter_Countb = 0;
        letter_Countc = 0;
        letter_Countd = 0;
        letter_Counte = 0;
        letter_Countf = 0;
        letter_Countg = 0;
        letter_Counth = 0;
        letter_Counti = 0;
        letter_Countj = 0;
        letter_Countk = 0;
        letter_Countl = 0;
        letter_Countm = 0;
        letter_Countn = 0;
        letter_Counto = 0;
        letter_Countp = 0;
        letter_Countq = 0;
        letter_Countr = 0;
        letter_Counts = 0;
        letter_Countt = 0;
        letter_Countu = 0;
        letter_Countv = 0;
        letter_Countw = 0;
        letter_Countx = 0;
        letter_County = 0;
        letter_Countz = 0;
        document.getElementById('a').innerHTML = ""
        document.getElementById('b').innerHTML = ""
        document.getElementById('c').innerHTML = ""
        document.getElementById('d').innerHTML = ""
        document.getElementById('e').innerHTML = ""
        document.getElementById('f').innerHTML = ""
        document.getElementById('g').innerHTML = ""
        document.getElementById('h').innerHTML = ""
        document.getElementById('i').innerHTML = ""
        document.getElementById('j').innerHTML = ""
        document.getElementById('k').innerHTML = ""
        document.getElementById('l').innerHTML = ""
        document.getElementById('m').innerHTML = ""
        document.getElementById('n').innerHTML = ""
        document.getElementById('o').innerHTML = ""
        document.getElementById('p').innerHTML = ""
        document.getElementById('q').innerHTML = ""
        document.getElementById('r').innerHTML = ""
        document.getElementById('s').innerHTML = ""
        document.getElementById('t').innerHTML = ""
        document.getElementById('u').innerHTML = ""
        document.getElementById('v').innerHTML = ""
        document.getElementById('w').innerHTML = ""
        document.getElementById('x').innerHTML = ""
        document.getElementById('y').innerHTML = ""
        document.getElementById('z').innerHTML = ""
        for (let position = 0; position < inputsmallcase.length; position++) {
            if (inputsmallcase.charAt(position) === "a") {
                letter_Counta += 1;
                document.getElementById('a').innerHTML = `Count for alphabet A is ${letter_Counta}`
            }
            if (inputsmallcase.charAt(position) === "b") {
                letter_Countb += 1;
                document.getElementById('b').innerHTML = `Count for alphabet B is ${letter_Countb}`
            }
            if (inputsmallcase.charAt(position) === "c") {
                letter_Countc += 1;
                document.getElementById('c').innerHTML = `Count for alphabet C is ${letter_Countc}`
            }
            if (inputsmallcase.charAt(position) === "d") {
                letter_Countd += 1;
                document.getElementById('d').innerHTML = `Count for alphabet D is ${letter_Countd}`
            }
            if (inputsmallcase.charAt(position) === "e") {
                letter_Counte += 1;
                document.getElementById('e').innerHTML = `Count for alphabet E is ${letter_Counte}`
            }
            if (inputsmallcase.charAt(position) === "f") {
                letter_Countf += 1;
                document.getElementById('f').innerHTML = `Count for alphabet F is ${letter_Countf}`
            }
            if (inputsmallcase.charAt(position) === "g") {
                letter_Countg += 1;
                document.getElementById('g').innerHTML = `Count for alphabet G is ${letter_Countg}`
            }
            if (inputsmallcase.charAt(position) === "h") {
                letter_Counth += 1;
                document.getElementById('h').innerHTML = `Count for alphabet H is ${letter_Counth}`
            }
            if (inputsmallcase.charAt(position) === "i") {
                letter_Counti += 1;
                document.getElementById('i').innerHTML = `Count for alphabet I is ${letter_Counti}`
            }
            if (inputsmallcase.charAt(position) === "j") {
                letter_Countj += 1;
                document.getElementById('j').innerHTML = `Count for alphabet J is ${letter_Countj}`
            }
            if (inputsmallcase.charAt(position) === "k") {
                letter_Countk += 1;
                document.getElementById('k').innerHTML = `Count for alphabet K is ${letter_Countk}`
            }
            if (inputsmallcase.charAt(position) === "l") {
                letter_Countl += 1;
                document.getElementById('l').innerHTML = `Count for alphabet L is ${letter_Countl}`
            }
            if (inputsmallcase.charAt(position) === "m") {
                letter_Countm += 1;
                document.getElementById('m').innerHTML = `Count for alphabet M is ${letter_Countm}`
            }
            if (inputsmallcase.charAt(position) === "n") {
                letter_Countn += 1;
                document.getElementById('n').innerHTML = `Count for alphabet N is ${letter_Countn}`
            }
            if (inputsmallcase.charAt(position) === "o") {
                letter_Counto += 1;
                document.getElementById('o').innerHTML = `Count for alphabet O is ${letter_Counto}`
            }
            if (inputsmallcase.charAt(position) === "p") {
                letter_Countp += 1;
                document.getElementById('p').innerHTML = `Count for alphabet P is ${letter_Countp}`
            }
            if (inputsmallcase.charAt(position) === "q") {
                letter_Countq += 1;
                document.getElementById('q').innerHTML = `Count for alphabet Q is ${letter_Countq}`
            }
            if (inputsmallcase.charAt(position) === "r") {
                letter_Countr += 1;
                document.getElementById('r').innerHTML = `Count for alphabet R is ${letter_Countr}`
            }
            if (inputsmallcase.charAt(position) === "s") {
                letter_Counts += 1;
                document.getElementById('s').innerHTML = `Count for alphabet S is ${letter_Counts}`
            }
            if (inputsmallcase.charAt(position) === "t") {
                letter_Countt += 1;
                document.getElementById('t').innerHTML = `Count for alphabet T is ${letter_Countt}`
            }
            if (inputsmallcase.charAt(position) === "u") {
                letter_Countu += 1;
                document.getElementById('u').innerHTML = `Count for alphabet U is ${letter_Countu}`
            }
            if (inputsmallcase.charAt(position) === "v") {
                letter_Countv += 1;
                document.getElementById('v').innerHTML = `Count for alphabet V is ${letter_Countv}`
            }
            if (inputsmallcase.charAt(position) === "w") {
                letter_Countw += 1;
                document.getElementById('w').innerHTML = `Count for alphabet W is ${letter_Countw}`
            }
            if (inputsmallcase.charAt(position) === "x") {
                letter_Countx += 1;
                document.getElementById('x').innerHTML = `Count for alphabet X is ${letter_Countx}`
            }
            if (inputsmallcase.charAt(position) === "y") {
                letter_County += 1;
                document.getElementById('y').innerHTML = `Count for alphabet Y is ${letter_County}`
            }

            if (inputsmallcase.charAt(position) === "z") {
                letter_Countz += 1;
                document.getElementById('z').innerHTML = `Count for alphabet Z is ${letter_Countz}`
            }
        }
        props.showAlert("Counted the number of letters","success")
    }

    const copy = () => {
        let copyText = document.getElementById("myBox");
        copyText.select()
        navigator.clipboard.writeText(copyText.value)
        props.showAlert("Copied to clipboard","success")
    }

    const [text, setText] = useState("Enter text here")

    return (
        <>
            <div className="container">
                <h3 className="fst-italic my-3">{props.heading}</h3>
                <div className="mb-3">
                    <textarea id="myBox" value={text} onChange={handleonChange} onClick={valuetonull} className={`form-control bg-${props.mode} text-${props.textcolor}`} rows="8"></textarea>
                </div>
                <button className={`btn btn-${props.textState} border border-${props.colorborder}`} onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button className={`btn btn-${props.textState} border border-${props.colorborder} mx-2`} onClick={handlelowClick}>Convert to lowercase</button>
                <button className={`btn btn-${props.textState} border border-${props.colorborder} mx-2`} onClick={handlenoofalphabets}>Number of alphabets</button>
                <button className={`btn btn-${props.textState} border border-${props.colorborder} mx-2`} onClick={copy}>Copy</button>
                <button className={`btn btn-${props.textState} border border-${props.colorborder} mx-2`} onClick={handleextraspace}>Remove Extra Space</button>
                <button className={`btn btn-${props.textState} border border-${props.colorborder} mx-2`} onClick={handleclearClick}>Clear</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p id="text-para12">{text.split(" ").length} words and {text.length} characters</p>
                <p>Time to read the text: {0.008 * text.split(" ").length}</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"No Preview Available"}</p>
            </div>
            <div className="container">
                <p id="a"></p>
                <p id="b"></p>
                <p id="c"></p>
                <p id="d"></p>
                <p id="e"></p>
                <p id="f"></p>
                <p id="g"></p>
                <p id="h"></p>
                <p id="i"></p>
                <p id="j"></p>
                <p id="k"></p>
                <p id="l"></p>
                <p id="m"></p>
                <p id="n"></p>
                <p id="o"></p>
                <p id="p"></p>
                <p id="q"></p>
                <p id="r"></p>
                <p id="s"></p>
                <p id="t"></p>
                <p id="u"></p>
                <p id="v"></p>
                <p id="w"></p>
                <p id="x"></p>
                <p id="y"></p>
                <p id="z"></p>
            </div>
        </>
    )
}
/*
To Do
Sentence Case  --> Sentence case
Capitalized case --> Capitalized Case
Alternate Case --> AlTeRnAtE cAsE
Inverse case ---> iNvErSe CaSe
*/
