import baseUrl from "../baseUrl";
const fetchPhoneForm = async (phone, setPhoneErr, setPending) => {
  try {
    setPending(true);
    const body = JSON.stringify({ phone });
    const response = await fetch(`${baseUrl}auth/loginwithphone`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body,
    });

    setPending(false);
    const parseResponse = await response.json();
    if (response.status === 200) {
      
      setPhoneErr && setPhoneErr("");

      return true;
    } else {
      setPhoneErr && setPhoneErr(parseResponse.message);
      return false;
    }
  } catch (err) {
    setPending(false);
    console.log(err);
    setPhoneErr && setPhoneErr("خطا در ارتباط با سرور");
    return false;
  }
};

export default fetchPhoneForm;
