class Carta{
    _code
    _value
    _suit
    _imagen


    constructor(code, value, suit, imagen){
        
        if(!code || !value || !suit || !imagen){
            throw new Error("Falta algun atributo.");
        }
        
        this._code = code;
        this._value = value
        this._suit = suit;
        this._imagen = imagen;
    
    }

    set code(valor){
        this._code=valor;
    }

    set value(valor){
        if(isNaN(valor) || valor < 0){
            throw new Error("El valor de la carta es incorrecto.");
        }
    
        this._value = valor;
    } 

    set suit(valor){
        this._suit = valor;
    }

    set imagen(valor){
        this._imagen = valor;
    }

    toJsonString(){
        return JSON.stringify(this);
    }   

    static createFromJsonString(json){
        var nuevaCarta = JSON.parse(json);
        return new Carta(nuevaCarta.code, nuevaCarta.value, nuevaCarta.suit, nuevaCarta.image)
    }

    createHTMLElement(){
        var div = document.createElement("div");
        div.setAttribute("class", "imagen-carta")
        var codeCarta = document.createElement("h3");
        codeCarta.appendChild(document.createTextNode(this._code));
        var imagenCarta = document.createElement("img");
        imagenCarta.setAttribute("src", this._imagen);
        var suitCarta = document.createElement("h4");
        suitCarta.appendChild(document.createTextNode(this._suit));
        var valueCarta = document.createElement("h4");
        valueCarta.appendChild(document.createTextNode(this._value));
        div.appendChild(codeCarta);
        div.appendChild(imagenCarta);
        div.appendChild(suitCarta);
        div.appendChild(valueCarta);
        return div;
    }


}