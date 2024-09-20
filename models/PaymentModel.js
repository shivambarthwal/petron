import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
    name: { type: String, required: true },
    to_user: { type: String, required: true },
    oid: { type: String, required: true },
    message: { type: String, required: true },
    amount: { type: String },
    createdat: { type: Date, required: true },
    updatedat: { type: Date, required: true },
    done: { type: Boolean, required: false }
});

// Use `mongoose.models.Payment` to check if the model exists before defining it
export default mongoose.models.Payment || model('Payment', PaymentSchema);
