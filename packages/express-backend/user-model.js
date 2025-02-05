import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  job: { type: String, required: true },
  id: { type: String, required: true }
});

export default mongoose.model('User', userSchema);