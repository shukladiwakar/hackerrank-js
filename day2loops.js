function vowelsAndConsonants(s) {
let i;
let vow =['a','e','i','o','u'];
let cont='';
    for(i=0;i<s.length;i++){
        if(vow.includes(s.charAt(i))){
            console.log(s[i]);
        }
        else {
            cont+=s.charAt(i)+'\n';
        }
    }
    console.log(cont.trim())
}

vowelsAndConsonants("Diwa sa");