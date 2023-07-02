import twilio from "twilio";

export const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const sendSMS = async (message: string) => {
  try {
    return await client.messages.create({
      to: process.env.OWNER_PHONE_NUMBER || "+12512842842",
      from: process.env.TWILIO_PHONE_NUMBER,
      body: message,
    });
  } catch (error: any) {
    return error;
  }
};
