const createMenuItems=(majorCategory)=>{
if(majorCategory==="bar"){
    const items=[
    { title: "ساده",majorCategory:"bar",href:"/product/list/bar/plain",key:"plain" },
    { title: "آجدار",majorCategory:"bar",href:"/product/list/bar/deformedbar",key:"deformedbar"},
    { title: "کلاف",majorCategory:"bar",href:"/product/list/bar/coiled",key:"coiled"},
  ];
  return items
}
}

export default createMenuItems