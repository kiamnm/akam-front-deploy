import baseUrl from "../baseUrl";
const fetchOtp = async (
    otp,
  phone,
  setOtpError,
  setPending
) => {
    // console.log(otp,"otp");
    const code=otp.join("")
  try {
    setPending(true);
    const body = JSON.stringify({ phone,code});
    const response = await fetch(`${baseUrl}auth/verifyregister`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    });

    setPending(false);
    const parseResponse = await response.json();
    if (response.status === 200) {
      setOtpError("");
      
      return true;
    } else {
      setOtpError(parseResponse.message);
      return false;
    }
  } catch (err) {
    setPending(false);
    console.log(err);
    setOtpError("خطا در ارتباط با سرور");
    return false;
  }
};

export default fetchOtp;
