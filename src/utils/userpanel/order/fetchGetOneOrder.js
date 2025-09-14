import baseUrl from "@/utils/baseUrl";

const getOneOrder = async (orderObjid) => {
   
  try {
    const response = await fetch(`${baseUrl}order/oneOrder/${orderObjid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const data = await response.json();

    if (!response.ok) {
      return false;
    }

    return data.order;
  } catch (err) {
    console.log("getOneOrder error:", err);
    return false;
  }
};

export default getOneOrder;
