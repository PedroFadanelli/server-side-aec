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
  import { User } from "./user.model";
  
  @modelOptions({
    schemaOptions: {
      // Add createdAt and updatedAt fields
      timestamps: true,
    },
  })

  export class Depoimento {
    @prop({ required: true})
    imagem: string;
    texto1: string;
    autor: string;
  }
  
  // Export the Session class to be used as TypeScript type
  export class landingPage {
    @prop({ ref: () => User })
    user: Ref<User>;
  
    @prop({ required: true })
    banner: string;

    @prop({ required: true })
    carrousselEdicoes: string[];

    @prop({ required: true })
    subTitulo1: string;

    @prop({ required: true })
    subTitulo2: string;
  
    @prop({ required: true })
    subTitulo3: string;
  
    @prop({ default: true })
    texto1: string;
    
    @prop({ default: true })
    texto2: string;

    @prop({ default: true })
    texto3: string;

    @prop({ required: true })
    videos: string[];

    @prop({ required: true })
    carrousselDepoimentos: Depoimento[];
  }
  
  // Create the session model from the Session class
  const landingPageModel = getModelForClass(landingPage);
  export default landingPageModel;
  