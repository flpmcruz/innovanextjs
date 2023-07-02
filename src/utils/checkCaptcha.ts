import axios from "axios";

export const checkCaptcha = async (captcha: string): Promise<boolean> => {
  if (!captcha) return false;
  try {
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_KEY}&response=${captcha}`;

    const { data } = await axios.get(verifyUrl);
    if (!data.success || data.score < 0.5) return false;

    return true;
  } catch (error) {
    return false;
  }
};
