export const checkCaptcha = async (captcha: string): Promise<boolean> => {
  if (!captcha) return false;
  try {
    const res = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_KEY}&response=${captcha}`,
      { method: "POST" }
    );
    const data = await res.json();

    return data.success && data.score >= 0.5;
  } catch {
    return false;
  }
};
