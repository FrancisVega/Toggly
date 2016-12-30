# Toggly

Pequeño script para hacer tabs tipo 'toggle' usando exclusivamente los atributos data-*

## Instalación

Añade `toggly.min.js` a tu web.

## Estructura de los tabs

```html
<div data-toggly="toggly-funny-pane">
    <ul>
        <li data-toggly-id="1" data-toggly-active="false">
            <a href="#">Tab 1</a>
        </li>
        <li data-toggly-id="2" data-toggly-active="true">
            <a href="#">Tab 2</a>
        </li>
    </ul>
</div>
```

En el contenedor principal se debe añadir un atributo `data-toggly` para indicarle a **Toggly** que efectivamente es un componente toggly, y se iguala con el valor del contenedor al que quiera afectar.
Posteriormente en cada 'tab' del componente **Toggly** se añadirá el atributo `data-toggly-id`, que servirá para enlazarlo con el id del contenedor y por último `data-toggly-active` que valdrá true o false y servir para saber qu tab está activo.

## Estructura del contenedor

```html
<div data-toggly-pane="toggly-funny-pane">
    <div data-toggly-id="1">Toggly Content 1</div>
    <div data-toggly-id="2">Toggly Content 2</div>
</div>
```

El contenedor ha de tener un atributo `data-toggly-pane` con el valor que se haya puesto en el componente **Toggly**, en el atributo `data-toggly`
Posteriormente en cada contenedor interno donde quiera que Toggly actue se le ha de indicar un id con `data-toggly-id`, este coincidirá con los ids que hayamos definido en el componente **Toggly**

## Demo
http://codepen.io/hisco/pen/vyoMdY
