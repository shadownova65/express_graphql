import mongoose, {Schema} from 'mongoose';
import Detail from './detail';

const pokemonSchema = new Schema({
  name: {
    type: String,
    required: [true]
  },
  url: {
    type: String,
    required: [true]
  },
  detail: {type: Schema.Types.ObjectId, ref: 'Detail'}
})

export default mongoose.model('Pokemon', pokemonSchema);