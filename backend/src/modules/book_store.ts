import mongoose, { Document, Schema } from "mongoose";

export interface Ibook extends Document {
  id: string;
  title: string;
  description: string;
}

const BookSchema = new Schema<Ibook>({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.model<Ibook>("Book", BookSchema);
