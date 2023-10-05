import landingPageModel, { landingPage } from "../models/landingPage.model";

// CreateUser service
export const create = async (input: Partial<landingPage>) => {
  const landingPage = await landingPageModel.create(input);
  return landingPage;
};

export const update = async (
  parIdContent: string,
  input: Partial<landingPage>
) => {
  await landingPageModel.findByIdAndUpdate(parIdContent, input);
  return await landingPageModel.findById(parIdContent);
};

export const findContent = async (parIdContent: string) => {
  return await landingPageModel.findById(parIdContent);
};

export const inactivateContent = async (
  parIdContent: string,
  setFields: any
) => {
  //return await landingPageModel.findByIdAndDelete(parIdProduto);
  await landingPageModel.findByIdAndUpdate(parIdContent, setFields);
  return await landingPageModel.findById(parIdContent);
};


//Fadanelli Esteve aqui