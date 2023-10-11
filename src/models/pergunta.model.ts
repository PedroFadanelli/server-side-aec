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

  export class Opcoes {
    @prop({ required: true })
    valor: string
  }

  @modelOptions({
    schemaOptions: {
      // Add createdAt and updatedAt fields
      timestamps: true,
    },

  })
  export class Pergunta {
    @prop({ ref: () => User })
    user: Ref<User>;

    @prop({ required: true })
    descricao: string;

    @prop({ required: true })
    tipo: number;

    @prop({ required: true })
    opcoes: Array<string>
  }

  const perguntaModel = getModelForClass(Pergunta);
  export default perguntaModel;
