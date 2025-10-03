import baseUrl from "../baseUrl";
const fetchPassFrom = async (
  phone,password,setPending,setPassErr,setSixDigitShow
  
) => {
    
  try {

    setPending(true);
    const body = JSON.stringify({ phone,password });
    const response = await fetch(`${baseUrl}auth/loginWithPassword`, {
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
      setPassErr("")
      const user=parseResponse.user
      return user;
    } else if(response.status===401){
        setPassErr("")
setSixDigitShow(true)
    }else {
      setPassErr(parseResponse.message);
      return false;
    }
  } catch (err) {
    setPending(false);
    console.log(err);
    setPassErr("خطا در ارتباط با سرور");
    return false;
  }
};

export default fetchPassFrom;
