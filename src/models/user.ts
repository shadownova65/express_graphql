import mongoose, {Schema} from 'mongoose';
import Pokemon from './pokemon';

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'you must enter a user name']
  },
  pokemons: [{type: Schema.Types.ObjectId, ref: 'Pokemon'}]
})

export default mongoose.model('User', userSchema);