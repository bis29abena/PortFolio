import mongoose from "mongoose";

const { Schema } = mongoose;

const rolesSchema = new Schema(
  {
    Name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Role = mongoose.models.Role || mongoose.model('Role', rolesSchema)

export default Role