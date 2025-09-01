import baseUrl from "../baseUrl";
const fetchOtpAgain = async (
   phone,
   setOtpError
) => {
    // console.log(otp,"otp");
    
  try {
    
    const body = JSON.stringify({ phone});
    const response = await fetch(`${baseUrl}auth/registerotpagain`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    });

    
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

export default fetchOtpAgain;
