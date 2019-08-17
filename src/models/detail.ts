import mongoose, {Schema} from 'mongoose';

const detailSchema = new Schema({
  name: String,
  base_exp: Number,
  abilities: [{type: String}],
  height: Number,
  weight: Number,
  avatar: String,
  types: [{type: String}],
});

export default mongoose.model('Detail', detailSchema);