import baseUrl from "../baseUrl";
const fetchForm = async (
  phone,
  password,
  repeatPassword,
  setPending,
  setFetchErr
) => {
  try {
    setPending(true);
    const body = JSON.stringify({ phone, password, repeatPassword });
    const response = await fetch(`${baseUrl}auth/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    });

    setPending(false);
    const parseResponse = await response.json();
    if (response.status === 201) {
      setFetchErr("");
      return true;
    } else {
      setFetchErr(parseResponse.message);
      return false;
    }
  } catch (err) {
    setPending(false);
    console.log(err);
    setFetchErr("خطا در ارتباط با سرور");
    return false;
  }
};

export default fetchForm;
