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

Ports are provided for the node itself, depending on the type of its node.

Sources - One out
Effects - One in, one out
Destinations - One in

For the node's specified parameters, one in port is provided.

#### `Osc`
Oscillator.

Frequency - `.freq` 
Detune - `.detune` 

#### `Op`
Operator.

Frequency - `.freq` 
Gain - `.vol` 

#### `Filter`
Filter.

Frequency - `.freq` 

# Format
Formats for various integer values are provided in "fmt.js".

For control elements, when the `marked` prop exists, the appropriate will suffix the numeric values.
