React components for JSynth.

Offers a basic wrapper around the Web Audio API and its built-in utilities.

# Context
At all points, the Web Audio API's context is available within the window object -- `window.ctx`.

# Component
## Control
### `<Btn />`
Takes a function as a prop in `hook`, and calls this function upon mouse down.

### `<Knob />`
Updates a numeric value upon being turned.

#### Quantized
For numeric values specifically meant to be integral, the `quant` prop can be passed.

This will snap the knob and its values to specific increments.

### `<Fader />`
Updates a numeric value upon being dragged.

Limited to a range.

### `<Key />`
Takes a function as a prop in `hook`, and calls this function upon mouse down.

### `<Port />`
"CV port", contains a reference to an audio node or parameter.

Connected via cable when appropriate event fires.

In can have at most one input.
Out can have an effectively infinite number of outputs.

#### `<In />`
Audio node's input or audio parameter.

Connects cable when present on mouse up.

#### `<Out />`
Strictly regards audio node's output.

Creates cable with the in-point being the port's output.

## Display
### `<Light />`
Binary light.

On upon the presence of the `on` prop, and off otherwise.

### Text
2D Text display.

### `<Lcd />`
Base LCD.

#### `<Meter />`
Displays signal strength.

#### `<Analyzer />`
Displays frequency.

## `<Bay></Bay>`
Patch bay.

Contains modules and offers an interface to connect their CV ports via cables. 

### `<Module />`
Contains an internal node.

Ports are provided for the node itself, depending on the type of its node.

Sources - One out
Effects - One in, one out
Destinations - One in

For the node's specified parameters, one in port is provided.

# Source
## `<Osc />`
Frequency - `.freq` 
Detune - `.detune` 

## `<Op />`
Frequency - `.freq` 
Gain - `.vol` 

# Effect
## `<Gain />`
Increases or decreases signal.

## `<Filter />`
Frequency - `.freq` 

## `<Chorus />`
Splits input into multiple outputs.

## `Flanger`
Produces delayed copy.

## `Pan`
Fades between left and right channels.

## `Delay`
Outputs unfiltrered input after a time interval has passed.

# Destination
## `speaker()`
Audio output.

# Worklet
Base worklet.

Takes a file name containing declarations.

# Examples
Examples simply extending lower-level components are provided.

## Components
### `<Piano />`
Array of white and black keys laid out according to the harmonic scale.

Internal is a basic sine wave.

### `<Launch />`
Grid of buttons all hooked to various samples.

### `<Synth />`
Synthesizer containing oscillators assigned to the basic waveforms, an LFO and both high and low-pass filters.

### `<Impulse />`
Takes a button and hooks it to a sample.

## Worklets
### Bitcrush
Reduces fidelity.

# Resources
Resources are situated in the "public" directory.

Dedicated directories for specific file types exist depending on the usage.

"/snd" - Samples
"/worklet" - Worklet files, may contain multiple definitions

# Math
Various musical constants and utilities.

`a` - Middle A
`oct` - Number of full steps in octave
`semi` - Number of full, half steps in octave

`note` - Integral note, based off middle A
`trans` - Transpose pitch up or down from original

## Classes
### `Chord`
Base chord.

#### `Triad`
Triad.

`Maj` - Major
`Min` - Minor

# Utilities
Miscellaneous utilities.

`fmt(i, off)` - Conversion of tone to formatted note on the harmonic scale

# Formatting
Formats for various integer values are provided in "fmt.js".

For control elements, when the `marked` prop exists, the appropriate will suffix the numeric values.
