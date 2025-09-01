export const navbarItem = [
  { title: "استعلام قیمت", href: "/#estelam" },
  { title: " درباره ما", href: "/aboutus" },
  { title: " تماس با ما", href: "/contactus" },
  { title: " مقالات", href: "/blog" },
  // {
  //   title: " همکاری با ما",
  //   href: "/cooperation",
  //   responsive: "d-none d-lg-block",
  // },
  // { title: " محاسبه وزن آنلاین", href: "/calculation" },
];

export const subMenu = [
  {
    title: "میلگرد",
    iconSvg: (
      <svg
        className="sub-menu-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style={{ width: "30px", height: "30px" }} // اینجا سایز رو تغییر بده
      >
        <defs>
          <style>
            {
              ".cls-1{fill:none;}.cls-1,.cls-2{stroke:#fff;}.cls-2{fill:none;stroke-miterlimit:10;}"
            }
          </style>
        </defs>
        <path
          className="cls-1"
          d="M.84,9.9,11.08.68h11.3M14,9.9,22.38.68m0,0V3.35L17.12,9.12M.84,20.34l5-4.85M14,23.32l9.19-11.17v-3M14,20.34,23.16,9.12M14,12.57l3.15-3.45m0,0h6"
        />
        <polygon
          className="cls-2"
          points="9.24 12.57 9.24 20.34 13.97 20.34 13.97 23.32 0.84 23.32 0.84 20.34 5.83 20.34 5.83 12.57 0.84 12.57 0.84 9.9 13.97 9.9 13.97 12.57 9.24 12.57"
        />
      </svg>
    ),
    subSubMenu: [
      { title: "ساده", href: "/product/list/bar/plain" },
      { title: "آجدار", href: "/product/list/bar/deformedbar" },
      { title: "کلاف", href: "/product/list/bar/coiled "}
    ],
  },
  {
    title: "تیرآهن",
    iconSvg: (
      <svg
        className="sub-menu-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style={{ width: "30px", height: "30px" }} // اینجا سایز رو تغییر بده
      >
        <defs>
          <style>
            {
              ".cls-1{fill:none;}.cls-1,.cls-2{stroke:#fff;}.cls-2{fill:none;stroke-miterlimit:10;}"
            }
          </style>
        </defs>
        <path
          className="cls-1"
          d="M.84,9.9,11.08.68h11.3M14,9.9,22.38.68m0,0V3.35L17.12,9.12M.84,20.34l5-4.85M14,23.32l9.19-11.17v-3M14,20.34,23.16,9.12M14,12.57l3.15-3.45m0,0h6"
        />
        <polygon
          className="cls-2"
          points="9.24 12.57 9.24 20.34 13.97 20.34 13.97 23.32 0.84 23.32 0.84 20.34 5.83 20.34 5.83 12.57 0.84 12.57 0.84 9.9 13.97 9.9 13.97 12.57 9.24 12.57"
        />
      </svg>
    ),
    subSubMenu: [
      { title: "تیرآهن (IPE)", href: "/product/list/i/ipe"},
      { title: "هاش (HPB)", href: "/product/list/i/hpb" },

      { title: "لانه زنبوری", href: "/product/list/i/castellated"},
    ],
  },
  {
    title: "نبشی و ناودانی",
    iconSvg: (
      <svg
        className="sub-menu-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style={{ width: "30px", height: "30px" }} // اینجا سایز رو تغییر بده
      >
        <defs>
          <style>
            {
              ".cls-1{fill:none;}.cls-1,.cls-2{stroke:#fff;}.cls-2{fill:none;stroke-miterlimit:10;}"
            }
          </style>
        </defs>
        <path
          className="cls-1"
          d="M.84,9.9,11.08.68h11.3M14,9.9,22.38.68m0,0V3.35L17.12,9.12M.84,20.34l5-4.85M14,23.32l9.19-11.17v-3M14,20.34,23.16,9.12M14,12.57l3.15-3.45m0,0h6"
        />
        <polygon
          className="cls-2"
          points="9.24 12.57 9.24 20.34 13.97 20.34 13.97 23.32 0.84 23.32 0.84 20.34 5.83 20.34 5.83 12.57 0.84 12.57 0.84 9.9 13.97 9.9 13.97 12.57 9.24 12.57"
        />
      </svg>
    ),
    subSubMenu: [
      { title: "نبشی", href: "/product/list/lu-shape/l-shape" },
      { title: "ناودانی", href: "/product/list/lu-shape/u-shape" },
      { title: "نبشی لقمه", href: "/product/list/lu-shape/u-clip-shape" },
      { title: "ناودانی هم وزن اروپا", href: "/product/list/lu-shape/u-shape-europe" },

    ],
  },
  {
    title: "ورق",
    iconSvg: (
      <svg
        className="sub-menu-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style={{ width: "30px", height: "30px" }} // اینجا سایز رو تغییر بده
      >
        <defs>
          <style>
            {
              ".cls-1{fill:none;}.cls-1,.cls-2{stroke:#fff;}.cls-2{fill:none;stroke-miterlimit:10;}"
            }
          </style>
        </defs>
        <path
          className="cls-1"
          d="M.84,9.9,11.08.68h11.3M14,9.9,22.38.68m0,0V3.35L17.12,9.12M.84,20.34l5-4.85M14,23.32l9.19-11.17v-3M14,20.34,23.16,9.12M14,12.57l3.15-3.45m0,0h6"
        />
        <polygon
          className="cls-2"
          points="9.24 12.57 9.24 20.34 13.97 20.34 13.97 23.32 0.84 23.32 0.84 20.34 5.83 20.34 5.83 12.57 0.84 12.57 0.84 9.9 13.97 9.9 13.97 12.57 9.24 12.57"
        />
      </svg>
    ),
    subSubMenu: [
      { title: "ساده", href: "/product/list/sheet/plain" },
      { title: "روغنی", href: "/product/list/sheet/cold-role" },
      { title: "گالوانیزه", href: "/product/list/sheet/galvanized" },
      { title: "آجدار", href: "/product/list/sheet/checkered" },
    ],
  },
  {
    title: "سایرمقاطع",
    iconSvg: (
      <svg
        className="sub-menu-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style={{ width: "30px", height: "30px" }} // اینجا سایز رو تغییر بده
      >
        <defs>
          <style>
            {
              ".cls-1{fill:none;}.cls-1,.cls-2{stroke:#fff;}.cls-2{fill:none;stroke-miterlimit:10;}"
            }
          </style>
        </defs>
        <path
          className="cls-1"
          d="M.84,9.9,11.08.68h11.3M14,9.9,22.38.68m0,0V3.35L17.12,9.12M.84,20.34l5-4.85M14,23.32l9.19-11.17v-3M14,20.34,23.16,9.12M14,12.57l3.15-3.45m0,0h6"
        />
        <polygon
          className="cls-2"
          points="9.24 12.57 9.24 20.34 13.97 20.34 13.97 23.32 0.84 23.32 0.84 20.34 5.83 20.34 5.83 12.57 0.84 12.57 0.84 9.9 13.97 9.9 13.97 12.57 9.24 12.57"
        />
      </svg>
    ),
    subSubMenu: [
      { title: "سپری", href: "/product/list/other/t-shape" },
      { title: "پروفیل", href: "/product/list/other/profile"},
      
    ],
  },
];
