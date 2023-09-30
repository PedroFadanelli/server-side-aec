import {
    DocumentType,
    Ref,
    getModelForClass,
    index,
    modelOptions,
    pre,
    prop,
  } from "@typegoose/typegoose";
  import bcrypt from "bcryptjs";
  import { User } from "../models/user.model";
  
  @modelOptions({
    schemaOptions: {
      // Add createdAt and updatedAt fields
      timestamps: true,
    },
  })
  
  // Export the Session class to be used as TypeScript type
  export class edit {
    @prop({ required: true })
    valid: Boolean;
  
    @prop({ ref: () => User })
    user: Ref<User>;
  
    @prop({ required: true })
    titulo: string;
  
    @prop({ default: true })
    texto1: string;
  }
  
  // Create the session model from the Session class
  const editModel = getModelForClass(edit);
  export default editModel;
  