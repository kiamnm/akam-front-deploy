import baseUrl from "../baseUrl";

const fetchCreateOrderFromUpload = async (
  name,
  phone,
  explanation,
  file,
  setPending
) => {
  setPending(true);
  try {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("explanation", explanation);
    formData.append("file", file); 

    const res = await fetch(`${baseUrl}order/createUpload`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    const parseResponse = await res.json();

    setPending(false);
    return res.status === 201;
  } catch (err) {
    setPending(false);
    console.log(err);
    return false;
  }
};

export default fetchCreateOrderFromUpload;
