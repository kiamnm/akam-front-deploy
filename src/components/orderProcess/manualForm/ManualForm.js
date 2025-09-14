"use client";
import React, { useContext, useState, useEffect } from "react";
import "./style.css";
import { IoClose, IoAddOutline } from "react-icons/io5";
import { wizardProcessContext } from "@/context/userPanel/wizardProcess";

export default function ManualForm() {
  const { order,manualFormItems, setManualFormItems } = useContext(wizardProcessContext);

  const [items, setItems] = useState([]);

  // مقدار اولیه از order.items گرفته شود یا یک ردیف خالی ایجاد شود
  useEffect(() => {
    if (order?.items?.length > 0) {
      setManualFormItems(order.items);
    } else {
      setManualFormItems([{ productName: "", amount: "" }]);
    }
  }, [order]);

  const handleAddItem = () => {
    setManualFormItems([...manualFormItems, { productName: "", amount: "" }]);
  };

  const handleRemoveItem = (index) => {
    if (index === 0) return; // اولین ردیف حذف نشود
    const newItems = manualFormItems.filter((_, i) => i !== index);
    setManualFormItems(newItems);
  };

  const handleChange = (index, field, value) => {
    const newItems = [...manualFormItems];
    newItems[index][field] = value;
    setManualFormItems(newItems);
  };

  return (
    <div className="manual-form-container">
      <div className="title-container d-flex justify-content-between pb-2">
        <div className="anjoman_regular fs_14 text-center">شماره</div>
        <div className="flex-grow-1 text-center anjoman_regular fs_14 d-none d-md-block">
          نام کالا
        </div>
        <div className="flex-grow-1 text-center anjoman_regular fs_14 d-none d-md-block">
          تعداد/مقدار
        </div>
        <div className="flex-grow-1 text-center fs_14 anjoman_medium d-block d-md-none">
          لیست آیتم ‌های استعلام
        </div>
        <div className="empty fs_14 anjoman_regular"></div>
      </div>

      {manualFormItems.map((item, index) => (
        <div
          className="input-row-container d-flex justify-content-between mt-3 align-items-center"
          key={index}
        >
          <div className="number anjoman_num_regular text-center">{index + 1}</div>
          <div className="inputs-container d-flex flex-column flex-md-row gap-3 flex-grow-1">
            <input
              type="text"
              className="flex-grow-1 bg_color_light_gray rounded-2 fs_14 anjoman_regular pe-3"
              placeholder="نام کالا"
              value={item.productName}
              onChange={(e) => handleChange(index, "productName", e.target.value)}
            />
            <input
              type="text"
              className="flex-grow-1 bg_color_light_gray rounded-2 fs_14 anjoman_regular pe-3"
              placeholder="تعداد/ مقدار"
              value={item.amount}
              onChange={(e) => handleChange(index, "amount", e.target.value)}
            />
          </div>
          <div className="cansel">
            {manualFormItems.length > 1 && (
              <IoClose
                style={{ fontSize: "26px", color: "#FF5050", cursor: "pointer" }}
                onClick={() => handleRemoveItem(index)}
              />
            )}
          </div>
        </div>
      ))}

      <div className="d-flex align-items-center mt-4">
        <div className="empty-btn"></div>
        <div className="add-btn-container d-flex gap-2 cursor_pointer" onClick={handleAddItem}>
          <div className="add-btn-icon d-flex justify-content-center align-items-center rounded-1">
            <IoAddOutline style={{ color: "white" }} />
          </div>
          <p className="fs_14 anjoman_regular m-0">افزودن کالا</p>
        </div>
      </div>
    </div>
  );
}
