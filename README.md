# Toggly

Pequeño script para hacer tabs tipo 'toggle' usando exclusivamente los atributos data-*

## Estructura de los tabs

```
<div data-toggly data-toggly-target="toggly-pane1">
    <ul>
        <li data-toggly-tab data-toggly-active="false">
            <a href="#">Tab 1</a>
        </li>
        <li data-toggly-tab data-toggly-active="true">
            <a href="#">Tab 2</a>
        </li>
    </ul>
</div>
```

En el contenedor principal se debe añadir un atributo data-toggly para indicarle a toggly donde están los tabs.
En el mismo contenedor se debe añadir otro atributo que se usará para enlazarlo con el contenedor que tenga el contenido para hacer el 'toggle'
Posteriormente en cada 'tab' se añadirá el atributo data-toggly-tab seguido del estado con data-toggly-active que valdrá true o false

## Estructura del contenedor

```
<div data-toggly-pane="toggly-pane1">
    <div data-toggly-id="1">Toggly Content 1</div>
    <div data-toggly-id="2">Toggly Content 2</div>
</div>
```

El contenedor ha de tener un atributo data-toggly-pane con el valor que se haya puesto en elos tabs, en el atributo data-toggly-target.
Posteriormente en cada contenedor interno donde quiera que Toggly actue se le ha de indicar un id con data-toggly-id, este coincidirá con los tabs en orden.
