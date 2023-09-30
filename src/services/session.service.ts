import { omit, get } from "lodash";
import sessionModel, { Session } from "../models/session.model";
import editModel, { edit } from "../models/edit.model";
import { excludedFields } from "../controllers/auth.controller";
// CreateUser service
export const createSession = async (input: Partial<Session>) => {
  const session = await sessionModel.create(input);
  return omit(session.toJSON());
};

// CreateUser service
export const inactiveSessions = async (userId: Object) => {
  const sessions = await sessionModel.find({ user: userId, valid: true });
  // map on all sessions
  sessions.map(async (session) => {
    await sessionModel.findByIdAndUpdate(
      { _id: session._id },
      { valid: false }
    );
  });
};

// Find active session service
export const findActiveSessionFromUser = async (userId: Object) => {
  return await sessionModel.find({ user: userId, valid: true });
};

export const editSession = async (input: Partial<edit>) => {
  const user = await editModel.create(input);
  return omit(user.toJSON(), excludedFields);
};