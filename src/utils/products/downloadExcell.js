import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
function prepareDataForExcel(data) {
  return data.map(item => {
    // detail رو به رشته تبدیل می‌کنیم
    const detailString = item.detail
      .map(d => {
        const [key, value] = Object.entries(d)[0];
        return `${key}: ${value}`;
      })
      .join(", ");

    // آبجکت جدید می‌سازیم بدون فیلدهای _id, imgSrc, isShow
    const {
      _id, 
      imgSrc, 
      isShow, 
      detail, // چون تبدیلش کردیم به رشته، این رو در آبجکت جدید نمی‌ذاریم
      ...rest
    } = item;

    return {
      ...rest,
      detail: detailString,
    };
  });
}

export function exportToExcel(data, fileName = "data.xlsx") {
    const preparedData = prepareDataForExcel(data);
  // تبدیل داده‌ها به worksheet
  const worksheet = XLSX.utils.json_to_sheet(preparedData);

  // ایجاد workbook و اضافه کردن worksheet به آن
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // تبدیل workbook به فایل باینری
  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  // ایجاد Blob و دانلود فایل
  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(blob, fileName);
}

