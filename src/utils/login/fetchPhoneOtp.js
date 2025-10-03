// import baseUrl from "../baseUrl";
// const fetchPhoneOtp = async (
//   phone,otp,setOtpError,setPending
  
// ) => {
//     const code=otp.join("")
//   try {

//     setPending(true);
//     const body = JSON.stringify({ phone,code });
//     const response = await fetch(`${baseUrl}auth/verifyloginotp`, {
//       method: "POST",
//       credentials: "include",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body,
//     });

//     setPending(false);
//     const parseResponse = await response.json();
//     if (response.status === 200) {
//       setOtpError("")
//       const user=parseResponse.user
//       return user;
//     } else {
//       setOtpError(parseResponse.message);
//       return false;
//     }
//   } catch (err) {
//     setPending(false);
//     console.log(err);
//     setOtpError("خطا در ارتباط با سرور");
//     return false;
//   }
// };

// export default fetchPhoneOtp;
