React components for JSynth.

Offers a basic wrapper around the Web Audio API and its built-in utilities.

# Context
At all points, the Web Audio API's context is available within the window -- `window.ctx`.

# Component
## `Bay`
Patch bay.

Contains modules and offers an interface to connect their CV ports via cables. 

### `Module`
Contains an internal node.

Ports are provided for the node itself, and for the node's specified parameters.

Sources - One out
Effects - One in, one out
Destinations - One in
