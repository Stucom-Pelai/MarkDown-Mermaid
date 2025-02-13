# PRACTICA FORMS (1/3)

## 1. API DE VALIDACIÓ JS

Crea un formulari que validi
 - Si la edat introduïda es superior a 18. 
 - Si el format es 01-01-2025
 - La validació s’ha de fer quan s’escrigui dins el formulari i quan s’enviï el formulari. 

```html
<?>
<?>Mayor 18 años<?> <input type="?"/> <input type="button" value="comprobar"/>
<?>Formato dd-mm-AAAA<?> <input type="?"/><input type="button" value="comprobar"/>
</?>
<script></script>
```

## 2. VALIDACIÓ DE FORMULARIS EN JS

En un nou document HTML crea un nou formulari amb els següents camps (el select és múltiple):

```html
<?>
<?>Entre 3 i 5 lletres<?> <input type="?"/> 
<?>Formato email valid<?> <input type="?"/>
<?>Checkbox</?> 
<input type="checkbox" id="?" name="?" value="?">
<input type="checkbox" id="?" name="?" value="?">
<input type="checkbox" id="?" name="?" value="?">

<select name="?" id="?" ?>
  <option value="?">?</option>
  <option value="?">?</option>
  <option value="?">?</option>
</select>
<input type="button" value="comprobar"/>
</?>
<script></script>
```

- a. Programa les següents validacions:
  - i. Cada vegada que l’usuari escrigui dins un input indica amb un missatge de validació HTML personalitzat si el text escrit no és correcte. Mostra també amb un símbol visual si el text escrit és correcte o no.
  - ii. Cada vegada que l’usuari seleccioni un checkbox indica amb un missatge si ha seleccionat 2. Mostra amb un símbol visual si ha seleccionat correctament 2 opcions o no.
  - iii. Cada vegada que l’usuari seleccioni una opció del select indica amb un missatge si
ha seleccionat 2. En cas afirmatiu mostra el color de fons en verd.

- b. No s’ha d’enviar el formulari si no es compleix alguna validació
