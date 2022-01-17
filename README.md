React components for JSynth.

Offers a basic wrapper around the Web Audio API and its built-in utilities.

# Context
At all points, the Web Audio API's context is available within the window object -- `window.ctx`.

# Component
## Control
### `Btn`
Takes a function as a prop in `hook`, and calls this function upon mouse down.

### `Knob`
Updates a numeric value upon being turned.

#### Quantized
For numeric values specifically meant to be integral, the `quant` prop can be passed.

This will snap the knob and its values to specific increments.

### `Fader`
Updates a numeric value upon being dragged.

Limited to a range.

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

# Source
## `Osc`
Frequency - `.freq` 
Detune - `.detune` 

## `Op`
Frequency - `.freq` 
Gain - `.vol` 

# Filter
## `Filter`
Frequency - `.freq` 

# Destination
## `speaker`
Audio output.

# Format
Formats for various integer values are provided in "fmt.js".

For control elements, when the `marked` prop exists, the appropriate will suffix the numeric values.
