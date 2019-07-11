//Tweak the value of this variable to get the model created
config = [2, 5, 198, 12, 6, 4]

//Just counters to display the data later on
var numconn = 0
var numn = 0
var numlayers = 0

//class which will represent the neuron
//connections to previous layers and bias are key properties
class Neuron {
    constructor(bias = 0.4) {
        this.connections = []
        this.bias = bias
        numn = numn + 1
    }
}

//class which will represent the connection between 2 neurons
//left and right neurons and weight are key properties
class Connection {
    constructor(neuronLeft, neuronRight) {
        this.weight = 0
        this.neuronLeft = neuronLeft
        this.neuronRight = neuronRight
        numconn = numconn + 1
    }
}

//class which will represent the entire layer
//has neurons as key properties
class Layer {
    constructor(numNeurons) {
        this.neurons = [];
        for (var i = 0; i < numNeurons; i++) {
            this.neurons[i] = new Neuron();
        }
        numlayers = numlayers + 1
    }
    makeConnections(prevLayer) {
        for (var i = 0; i < this.neurons.length; i++) {
            for (var j = 0; j < prevLayer.neurons.length; j ++) {
                this.neurons[i].connections[j] = new Connection(prevLayer.neurons[j], this.neurons[i])

            }
        }
    }
}

//The main driving function
//This function takes an array as input 
// eg. model = [2, 4, 7, 9, 10]
function createNetwork(model) {
    var layers = []
    for (var i = 0; i < model.length; i ++) {
        layers[i] = new Layer(model[i])
    }
    for (var i = 1; i < model.length; i++) {
        layers[i].makeConnections(layers[(i-1)])
    }
}


//Display some information to the user
createNetwork(config)
console.log("The number of Layers created Were: "+numlayers)
console.log("The number of Neurons initialised Were: "+numn)
console.log("The number of Connections initialised Were: "+numconn)