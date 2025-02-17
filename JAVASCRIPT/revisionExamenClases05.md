
3)	¿Cóm modificarem el valor de l’atribut en el següent codi?
let objeto ={  setAtributo(valor){this._Atributo=valor; }  }


```js

class setAtributo {
    constructor() {
        this._atributo = ""; // Definimos un atributo inicial
    }

    set atributo(valor) {
        this._atributo = valor;
    }

    get atributo() {
        return this._atributo;
    }
}

// Ejemplo de uso:
const obj = new setAtributo();
obj.atributo = "Nuevo Valor"; // Se usa el setter para modificar el valor
console.log(obj.atributo); 
````

Utilitza function per definir la classe Agenda amb un atribut "número de pàgines” i una llista de noms de contactes segons el seu EMAIL. Ha de tenir un mètode “saveContacte” que rebi un nom i email i afegeixi el nom del contacte al llistat de contactes.  Escriu el codi que creï inicialment una instancia d’una Agenda amb un contacte, li afegeixi un altre contacte i mostri amb un bucle el nom i EMAIL de cada contacte.

 ```js
 class Agenda {
    constructor(numeroPaginas) {
        this.numeroPaginas = numeroPaginas;
        this.contactos = {}; // Diccionario para almacenar contactos según su correo
    }

    salvarContacto(nombre, correo) {
        if (!correo.includes('@')) {
            console.error("Correo inválido");
            return;
        }
        this.contactos[correo] = nombre;
        console.log(`Contacto guardado: ${nombre} (${correo})`);
    }
}

// Ejemplo de uso
const miAgenda = new Agenda(100);
miAgenda.salvarContacto("Juan Pérez", "juan@example.com");
miAgenda.salvarContacto("María López", "maria@example.com");
miAgenda.mostrarContactos();
```
