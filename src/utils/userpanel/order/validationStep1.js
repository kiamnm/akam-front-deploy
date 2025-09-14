const validationStep1 = (orderType, items, setValidationErr) => {
  if (orderType === 1) {
    // حالت 1: آرایه خالی
    if (!items || items.length === 0) {
      setValidationErr("لیست سفارش ها نمی‌تواند خالی باشد");
      return false;
    }

    // بررسی هر آیتم
    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      // حالت 2: فیلدهای خالی
      if (!item.productName || item.productName.trim() === "") {
        setValidationErr(`ردیف ${i + 1}: نام کالا نمی‌تواند خالی باشد`);
        return false;
      }
      if (!item.amount || item.amount.trim() === "") {
        setValidationErr(`ردیف ${i + 1}: تعداد/مقدار نمی‌تواند خالی باشد`);
        return false;
      }

      // حالت 3: طول بیش از 100 کاراکتر
      if (item.productName.length > 100) {
        setValidationErr(`ردیف ${i + 1}: نام کالا نمی‌تواند بیش از 100 کاراکتر باشد`);
        return false;
      }
      if (item.amount.length > 100) {
        setValidationErr(`ردیف ${i + 1}: تعداد/مقدار نمی‌تواند بیش از 100 کاراکتر باشد`);
        return false;
      }
    }

    // اگر همه چیز درست بود
    setValidationErr(""); // پاک کردن ارور
    return true;
  }
};

export default validationStep1;