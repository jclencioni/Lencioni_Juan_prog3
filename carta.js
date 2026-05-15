class Carta{
    _code
    _value
    _suit
    _imagen


    constructor(code, value, suit, imagen){
        this._code = code;
        this._value = value
        this._suit = suit;
        this._imagen = imagen;
    }

    set code(valor){
        this._code=valor;
    }

    set value(valor){
        this._value = valor;
    } 

    set suit(valor){
        this._suit = valor;
    }

    set imagen(valor){
        this._imagen = valor;
    }

}