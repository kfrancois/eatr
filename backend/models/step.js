let mongoose = require('mongoose');

let StepSchema = new mongoose.Schema({
    instruction: String
});

mongoose.model('step', StepSchema);