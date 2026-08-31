var MyApp = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // react-shim.cjs
  var require_react_shim = __commonJS({
    "react-shim.cjs"(exports, module) {
      module.exports = window.React;
    }
  });

  // react-dom-shim.cjs
  var require_react_dom_shim = __commonJS({
    "react-dom-shim.cjs"(exports, module) {
      module.exports = window.ReactDOM;
    }
  });

  // src/main.tsx
  var import_react14 = __toESM(require_react_shim(), 1);
  var import_client = __toESM(require_react_dom_shim(), 1);

  // src/App.tsx
  var import_react13 = __toESM(require_react_shim(), 1);

  // src/components/Header.tsx
  var import_react3 = __toESM(require_react_shim(), 1);

  // node_modules/lucide-react/dist/esm/createLucideIcon.js
  var import_react2 = __toESM(require_react_shim());

  // node_modules/lucide-react/dist/esm/shared/src/utils.js
  var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var toCamelCase = (string) => string.replace(
    /^([A-Z])|[\s-_]+(\w)/g,
    (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
  );
  var toPascalCase = (string) => {
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  };
  var mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
  }).join(" ").trim();
  var hasA11yProp = (props) => {
    for (const prop in props) {
      if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
        return true;
      }
    }
  };

  // node_modules/lucide-react/dist/esm/Icon.js
  var import_react = __toESM(require_react_shim());

  // node_modules/lucide-react/dist/esm/defaultAttributes.js
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  // node_modules/lucide-react/dist/esm/Icon.js
  var Icon = (0, import_react.forwardRef)(
    ({
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode,
      ...rest
    }, ref) => (0, import_react.createElement)(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    )
  );

  // node_modules/lucide-react/dist/esm/createLucideIcon.js
  var createLucideIcon = (iconName, iconNode) => {
    const Component = (0, import_react2.forwardRef)(
      ({ className, ...props }, ref) => (0, import_react2.createElement)(Icon, {
        ref,
        iconNode,
        className: mergeClasses(
          `lucide-${toKebabCase(toPascalCase(iconName))}`,
          `lucide-${iconName}`,
          className
        ),
        ...props
      })
    );
    Component.displayName = toPascalCase(iconName);
    return Component;
  };

  // node_modules/lucide-react/dist/esm/icons/arrow-left.js
  var __iconNode = [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }]
  ];
  var ArrowLeft = createLucideIcon("arrow-left", __iconNode);

  // node_modules/lucide-react/dist/esm/icons/arrow-right.js
  var __iconNode2 = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ];
  var ArrowRight = createLucideIcon("arrow-right", __iconNode2);

  // node_modules/lucide-react/dist/esm/icons/blocks.js
  var __iconNode3 = [
    [
      "path",
      {
        d: "M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",
        key: "1ah6g2"
      }
    ],
    ["rect", { x: "14", y: "2", width: "8", height: "8", rx: "1", key: "88lufb" }]
  ];
  var Blocks = createLucideIcon("blocks", __iconNode3);

  // node_modules/lucide-react/dist/esm/icons/bot.js
  var __iconNode4 = [
    ["path", { d: "M12 8V4H8", key: "hb8ula" }],
    ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
    ["path", { d: "M2 14h2", key: "vft8re" }],
    ["path", { d: "M20 14h2", key: "4cs60a" }],
    ["path", { d: "M15 13v2", key: "1xurst" }],
    ["path", { d: "M9 13v2", key: "rq6x2g" }]
  ];
  var Bot = createLucideIcon("bot", __iconNode4);

  // node_modules/lucide-react/dist/esm/icons/check.js
  var __iconNode5 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
  var Check = createLucideIcon("check", __iconNode5);

  // node_modules/lucide-react/dist/esm/icons/chevron-down.js
  var __iconNode6 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
  var ChevronDown = createLucideIcon("chevron-down", __iconNode6);

  // node_modules/lucide-react/dist/esm/icons/chevron-right.js
  var __iconNode7 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
  var ChevronRight = createLucideIcon("chevron-right", __iconNode7);

  // node_modules/lucide-react/dist/esm/icons/circle-check-big.js
  var __iconNode8 = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
  ];
  var CircleCheckBig = createLucideIcon("circle-check-big", __iconNode8);

  // node_modules/lucide-react/dist/esm/icons/circle-check.js
  var __iconNode9 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
  ];
  var CircleCheck = createLucideIcon("circle-check", __iconNode9);

  // node_modules/lucide-react/dist/esm/icons/circle-question-mark.js
  var __iconNode10 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }]
  ];
  var CircleQuestionMark = createLucideIcon("circle-question-mark", __iconNode10);

  // node_modules/lucide-react/dist/esm/icons/cpu.js
  var __iconNode11 = [
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M17 20v2", key: "1rnc9c" }],
    ["path", { d: "M17 2v2", key: "11trls" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M2 17h2", key: "7oei6x" }],
    ["path", { d: "M2 7h2", key: "asdhe0" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "M20 17h2", key: "1fpfkl" }],
    ["path", { d: "M20 7h2", key: "1o8tra" }],
    ["path", { d: "M7 20v2", key: "4gnj0m" }],
    ["path", { d: "M7 2v2", key: "1i4yhu" }],
    ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" }],
    ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" }]
  ];
  var Cpu = createLucideIcon("cpu", __iconNode11);

  // node_modules/lucide-react/dist/esm/icons/globe.js
  var __iconNode12 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
    ["path", { d: "M2 12h20", key: "9i4pu4" }]
  ];
  var Globe = createLucideIcon("globe", __iconNode12);

  // node_modules/lucide-react/dist/esm/icons/laptop.js
  var __iconNode13 = [
    [
      "path",
      {
        d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",
        key: "1pdavp"
      }
    ],
    ["path", { d: "M20.054 15.987H3.946", key: "14rxg9" }]
  ];
  var Laptop = createLucideIcon("laptop", __iconNode13);

  // node_modules/lucide-react/dist/esm/icons/loader-circle.js
  var __iconNode14 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
  var LoaderCircle = createLucideIcon("loader-circle", __iconNode14);

  // node_modules/lucide-react/dist/esm/icons/mail.js
  var __iconNode15 = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
  ];
  var Mail = createLucideIcon("mail", __iconNode15);

  // node_modules/lucide-react/dist/esm/icons/map-pin.js
  var __iconNode16 = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z"
      }
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
  ];
  var MapPin = createLucideIcon("map-pin", __iconNode16);

  // node_modules/lucide-react/dist/esm/icons/menu.js
  var __iconNode17 = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }]
  ];
  var Menu = createLucideIcon("menu", __iconNode17);

  // node_modules/lucide-react/dist/esm/icons/message-square.js
  var __iconNode18 = [
    [
      "path",
      {
        d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
        key: "18887p"
      }
    ]
  ];
  var MessageSquare = createLucideIcon("message-square", __iconNode18);

  // node_modules/lucide-react/dist/esm/icons/phone.js
  var __iconNode19 = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v"
      }
    ]
  ];
  var Phone = createLucideIcon("phone", __iconNode19);

  // node_modules/lucide-react/dist/esm/icons/refresh-cw.js
  var __iconNode20 = [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
    ["path", { d: "M8 16H3v5", key: "1cv678" }]
  ];
  var RefreshCw = createLucideIcon("refresh-cw", __iconNode20);

  // node_modules/lucide-react/dist/esm/icons/search.js
  var __iconNode21 = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ];
  var Search = createLucideIcon("search", __iconNode21);

  // node_modules/lucide-react/dist/esm/icons/send.js
  var __iconNode22 = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3"
      }
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
  ];
  var Send = createLucideIcon("send", __iconNode22);

  // node_modules/lucide-react/dist/esm/icons/shield-alert.js
  var __iconNode23 = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
      }
    ],
    ["path", { d: "M12 8v4", key: "1got3b" }],
    ["path", { d: "M12 16h.01", key: "1drbdi" }]
  ];
  var ShieldAlert = createLucideIcon("shield-alert", __iconNode23);

  // node_modules/lucide-react/dist/esm/icons/shield.js
  var __iconNode24 = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
      }
    ]
  ];
  var Shield = createLucideIcon("shield", __iconNode24);

  // node_modules/lucide-react/dist/esm/icons/smartphone.js
  var __iconNode25 = [
    ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
    ["path", { d: "M12 18h.01", key: "mhygvu" }]
  ];
  var Smartphone = createLucideIcon("smartphone", __iconNode25);

  // node_modules/lucide-react/dist/esm/icons/sparkles.js
  var __iconNode26 = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr"
      }
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
  ];
  var Sparkles = createLucideIcon("sparkles", __iconNode26);

  // node_modules/lucide-react/dist/esm/icons/trending-up.js
  var __iconNode27 = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
  ];
  var TrendingUp = createLucideIcon("trending-up", __iconNode27);

  // node_modules/lucide-react/dist/esm/icons/video.js
  var __iconNode28 = [
    [
      "path",
      {
        d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
        key: "ftymec"
      }
    ],
    ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
  ];
  var Video = createLucideIcon("video", __iconNode28);

  // node_modules/lucide-react/dist/esm/icons/x.js
  var __iconNode29 = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ];
  var X = createLucideIcon("x", __iconNode29);

  // src/robotic.jpeg
  var robotic_default = "./robotic.jpeg";

  // src/components/Header.tsx
  function Header({ currentPage, onPageChange, onOpenModal }) {
    const [isOpen, setIsOpen] = (0, import_react3.useState)(false);
    const [searchQuery, setSearchQuery] = (0, import_react3.useState)("");
    const [isSearchOpen, setIsSearchOpen] = (0, import_react3.useState)(false);
    const [currentLang, setCurrentLang] = (0, import_react3.useState)("es");
    const searchRefDesktop = (0, import_react3.useRef)(null);
    const searchRefMobile = (0, import_react3.useRef)(null);
    (0, import_react3.useEffect)(() => {
      const handleClickOutside = (event) => {
        if (searchRefDesktop.current && !searchRefDesktop.current.contains(event.target) && searchRefMobile.current && !searchRefMobile.current.contains(event.target)) {
          setIsSearchOpen(false);
        }
      };
      const handleEsc = (event) => {
        if (event.key === "Escape") {
          setIsSearchOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEsc);
      };
    }, []);
    const searchOptions = [
      { title: "Chatbots con IA", id: "funcionalidades" },
      { title: "Automatizaci\xF3n Web", id: "funcionalidades" },
      { title: "Servicios de Flota/GPS", id: "funcionalidades" },
      { title: "Contacto", id: "contacto" },
      { title: "FAQ", id: "faq" },
      { title: "Inicio", id: "inicio" }
    ];
    const filteredOptions = searchOptions.filter(
      (opt) => opt.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const handleSearchSelect = (pageId) => {
      onPageChange(pageId);
      setSearchQuery("");
      setIsSearchOpen(false);
      setIsOpen(false);
    };
    const renderSearchDropdown = () => {
      if (!isSearchOpen || searchQuery.trim().length < 1) return null;
      return /* @__PURE__ */ import_react3.default.createElement("div", { className: "absolute top-full mt-2 left-0 w-full bg-white z-50 rounded-lg shadow-xl border border-slate-200 overflow-hidden" }, filteredOptions.length > 0 ? filteredOptions.map((opt, idx) => /* @__PURE__ */ import_react3.default.createElement(
        "div",
        {
          key: idx,
          onClick: () => handleSearchSelect(opt.id),
          className: "p-3 hover:bg-slate-100 cursor-pointer transition-colors flex items-center justify-between text-sm text-slate-700 border-b border-slate-100 last:border-0"
        },
        /* @__PURE__ */ import_react3.default.createElement("span", { className: "font-medium" }, opt.title),
        /* @__PURE__ */ import_react3.default.createElement(ChevronRight, { className: "w-4 h-4 text-slate-400" })
      )) : /* @__PURE__ */ import_react3.default.createElement("div", { className: "p-3 text-sm text-slate-500 text-center" }, currentLang === "es" ? "No se encontraron resultados" : "No results found"));
    };
    const navItems = currentLang === "es" ? [
      { id: "inicio", label: "INICIO" },
      { id: "funcionalidades", label: "FUNCIONALIDADES" },
      { id: "faq", label: "FAQ" },
      { id: "contacto", label: "CONTACTO" }
    ] : [
      { id: "inicio", label: "HOME" },
      { id: "funcionalidades", label: "FEATURES" },
      { id: "faq", label: "FAQ" },
      { id: "contacto", label: "CONTACT" }
    ];
    const handleNavClick = (pageId) => {
      onPageChange(pageId);
      setIsOpen(false);
    };
    const handleLanguageChange = (lang) => {
      setCurrentLang(lang);
      const translateCombo = document.querySelector(".goog-te-combo");
      if (translateCombo) {
        translateCombo.value = lang;
        translateCombo.dispatchEvent(new Event("change"));
      } else {
        document.cookie = `googtrans=/es/${lang}; path=/;`;
        setTimeout(() => {
          const retryCombo = document.querySelector(".goog-te-combo");
          if (retryCombo) {
            retryCombo.value = lang;
            retryCombo.dispatchEvent(new Event("change"));
          }
        }, 250);
      }
    };
    const announcementText = currentLang === "es" ? "\xA1Conoce nuestra nueva l\xEDnea de Chatbots Inteligentes y Automatizaci\xF3n con IA! \u{1F916}" : "Discover our new line of Intelligent Chatbots and AI Automation! \u{1F916}";
    const searchPlaceholder = currentLang === "es" ? "Buscar" : "Search";
    const whatsappUrl = "https://wa.me/50589106157?text=Hola,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Robotic%20Latam.";
    return /* @__PURE__ */ import_react3.default.createElement("header", { id: "app-header", className: "relative w-full bg-white shadow-sm transition-all duration-300" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-white text-xs sm:text-sm font-bold text-center py-2.5 px-4 select-none tracking-wide", style: { backgroundColor: "#3b82f6" } }, announcementText), /* @__PURE__ */ import_react3.default.createElement("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 md:py-3" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "hidden md:grid grid-cols-12 items-center gap-4" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "col-span-4 flex items-center gap-4" }, /* @__PURE__ */ import_react3.default.createElement(
      "img",
      {
        src: robotic_default,
        alt: "Robotic Logo",
        className: "logo-img h-14 md:h-16 lg:h-18 w-auto object-contain transition-transform duration-300 hover:scale-105"
      }
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => handleNavClick("inicio"),
        style: { fontFamily: "'Montserrat', sans-serif" },
        className: "font-extrabold text-xl md:text-2xl text-[#0A3E62] tracking-wider hover:text-blue-600 transition duration-200 cursor-pointer uppercase"
      },
      "ROBOTIC"
    )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "col-span-5 px-4", ref: searchRefDesktop }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "relative w-full" }, /* @__PURE__ */ import_react3.default.createElement(
      "input",
      {
        type: "text",
        placeholder: searchPlaceholder,
        value: searchQuery,
        onChange: (e) => {
          setSearchQuery(e.target.value);
          setIsSearchOpen(true);
        },
        onFocus: () => setIsSearchOpen(true),
        className: "w-full bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:border-[#0A3E62] focus:ring-1 focus:ring-[#0A3E62] transition"
      }
    ), /* @__PURE__ */ import_react3.default.createElement(Search, { className: "w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" }), renderSearchDropdown())), /* @__PURE__ */ import_react3.default.createElement("div", { className: "col-span-3 flex items-center justify-end gap-6 text-sm font-bold" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center gap-1.5 select-none text-slate-500" }, /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => handleLanguageChange("es"),
        className: `cursor-pointer transition ${currentLang === "es" ? "text-[#0A3E62] font-black border-b-2 border-[#0A3E62] pb-0.5" : "hover:text-slate-800 font-semibold"}`
      },
      "ES"
    ), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-slate-300" }, "|"), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => handleLanguageChange("en"),
        className: `cursor-pointer transition ${currentLang === "en" ? "text-[#0A3E62] font-black border-b-2 border-[#0A3E62] pb-0.5" : "hover:text-slate-800 font-semibold"}`
      },
      "EN"
    )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center gap-4 text-slate-500" }, /* @__PURE__ */ import_react3.default.createElement("a", { href: "tel:89106157", title: "Llamar", className: "hover:text-[#0A3E62] transition duration-150" }, /* @__PURE__ */ import_react3.default.createElement(Phone, { className: "w-5 h-5 stroke-[2]" })), /* @__PURE__ */ import_react3.default.createElement("a", { href: whatsappUrl, target: "_blank", rel: "noreferrer", title: "WhatsApp", className: "hover:text-green-500 transition duration-150" }, /* @__PURE__ */ import_react3.default.createElement("svg", { className: "w-5 h-5 fill-current", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }))), /* @__PURE__ */ import_react3.default.createElement("a", { href: "mailto:gerencia@roboticnic.com", title: "Email", className: "hover:text-[#0A3E62] transition duration-150" }, /* @__PURE__ */ import_react3.default.createElement(Mail, { className: "w-5 h-5 stroke-[2]" }))))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "md:hidden flex flex-col gap-3.5" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex flex-col items-center gap-2 pt-1" }, /* @__PURE__ */ import_react3.default.createElement(
      "img",
      {
        src: robotic_default,
        alt: "Robotic Logo",
        className: "logo-img h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
      }
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => handleNavClick("inicio"),
        style: { fontFamily: "'Montserrat', sans-serif" },
        className: "font-extrabold text-lg sm:text-xl text-[#0A3E62] tracking-wider uppercase"
      },
      "ROBOTIC LATAM"
    )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center justify-between border-t border-slate-100 pt-3.5 px-2" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center gap-1 text-xs font-bold text-slate-500" }, /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => handleLanguageChange("es"),
        className: `transition ${currentLang === "es" ? "text-[#0A3E62] font-black border-b border-[#0A3E62] pb-0.5" : "font-semibold"}`
      },
      "ES"
    ), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-slate-300" }, "|"), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => handleLanguageChange("en"),
        className: `transition ${currentLang === "en" ? "text-[#0A3E62] font-black border-b border-[#0A3E62] pb-0.5" : "font-semibold"}`
      },
      "EN"
    )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center gap-5 text-slate-500" }, /* @__PURE__ */ import_react3.default.createElement("a", { href: "tel:89106157" }, /* @__PURE__ */ import_react3.default.createElement(Phone, { className: "w-5 h-5" })), /* @__PURE__ */ import_react3.default.createElement("a", { href: whatsappUrl, target: "_blank", rel: "noreferrer" }, /* @__PURE__ */ import_react3.default.createElement("svg", { className: "w-5 h-5 fill-current", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }))), /* @__PURE__ */ import_react3.default.createElement("a", { href: "mailto:gerencia@roboticnic.com" }, /* @__PURE__ */ import_react3.default.createElement(Mail, { className: "w-5 h-5" }))), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "text-slate-700 hover:text-[#0A3E62] focus:outline-none p-1 rounded hover:bg-slate-50 transition"
      },
      isOpen ? /* @__PURE__ */ import_react3.default.createElement(X, { className: "w-6 h-6" }) : /* @__PURE__ */ import_react3.default.createElement(Menu, { className: "w-6 h-6" })
    )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "relative w-full", ref: searchRefMobile }, /* @__PURE__ */ import_react3.default.createElement(
      "input",
      {
        type: "text",
        placeholder: searchPlaceholder,
        value: searchQuery,
        onChange: (e) => {
          setSearchQuery(e.target.value);
          setIsSearchOpen(true);
        },
        onFocus: () => setIsSearchOpen(true),
        className: "w-full bg-slate-50 border border-slate-200 rounded-lg pl-4 pr-10 py-2 text-sm focus:outline-none focus:border-[#0A3E62] focus:ring-1 focus:ring-[#0A3E62]"
      }
    ), /* @__PURE__ */ import_react3.default.createElement(Search, { className: "w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" }), renderSearchDropdown()))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "hidden md:block border-t border-slate-100 bg-white" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex-1" }), /* @__PURE__ */ import_react3.default.createElement("nav", { className: "flex items-center gap-10 text-xs font-bold tracking-widest text-slate-500" }, navItems.map((item) => {
      const isActive = currentPage === item.id;
      return /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          key: item.id,
          onClick: () => handleNavClick(item.id),
          className: `transition duration-150 cursor-pointer uppercase border-r border-slate-200 last:border-r-0 pr-8 last:pr-0 ${isActive ? "text-[#0A3E62] font-black" : "hover:text-[#0A3E62]"}`
        },
        currentLang === "es" ? item.label : item.labelEn
      );
    })))), isOpen && /* @__PURE__ */ import_react3.default.createElement("div", { id: "mobile-menu", className: "md:hidden border-t border-slate-100 bg-white shadow-lg animate-in fade-in slide-in-from-top-2 duration-200" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "px-4 py-4 flex flex-col gap-3" }, navItems.map((item) => {
      const isActive = currentPage === item.id;
      return /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          key: item.id,
          onClick: () => handleNavClick(item.id),
          className: `text-left py-2 px-3 rounded-md transition duration-150 cursor-pointer text-xs font-bold uppercase ${isActive ? "text-[#0A3E62] bg-slate-50" : "text-slate-600 hover:text-[#0A3E62] hover:bg-slate-50"}`
        },
        item.label
      );
    }))));
  }

  // src/components/Footer.tsx
  var import_react4 = __toESM(require_react_shim(), 1);
  function Footer({ onOpenPrivacy, onPageChange }) {
    const [email, setEmail] = (0, import_react4.useState)("");
    const [submitting, setSubmitting] = (0, import_react4.useState)(false);
    
    const handleNewsletterSubmit = async (e) => {
      e.preventDefault();
      if (!email) return;
      setSubmitting(true);
      if (window.showCustomLoading) window.showCustomLoading();
      
      try {
        await fetch("https://script.google.com/macros/s/AKfycbweqLHm8qdjTcbpXX5MIvs9dWpWfNNcfwopt4sIVaQXbWEDq6BHmRqZ93eiXLFURkjb/exec", {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            recaptcha_token: await window.getRecaptchaToken(),
            tipo_formulario: "boletin",
            email: email,
            nombre: "Suscripción Boletín",
            mensaje: "Solicitud de catálogo comercial"
          })
        });
      } catch(err) {
        console.warn(err);
      }
      
      setSubmitting(false);
      setEmail("");
      if (window.showCustomSuccess) window.showCustomSuccess();
    };

    return /* @__PURE__ */ import_react4.default.createElement("footer", { id: "app-footer", className: "bg-[#1572B6] text-white font-sans mt-20 relative z-10 border-t border-blue-500/30" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "mb-10 flex items-center gap-3 select-none" }, /* @__PURE__ */ import_react4.default.createElement(
      "img",
      {
        src: robotic_default,
        alt: "Robotic Latam",
        className: "h-10 w-10 md:h-12 md:w-12 rounded-full bg-white p-1.5 object-contain shadow-sm border border-blue-400/20 transition-transform duration-300 hover:scale-105"
      }
    ), /* @__PURE__ */ import_react4.default.createElement(
      "span",
      {
        style: { fontFamily: "'Montserrat', sans-serif" },
        className: "text-lg md:text-xl font-extrabold tracking-wider uppercase text-white"
      },
      "ROBOTIC LATAM"
    )), /* @__PURE__ */ import_react4.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-b border-white/20 pb-12 text-sm" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ import_react4.default.createElement("h4", { className: "text-sm font-bold tracking-wider uppercase border-b border-white/10 pb-2" }, "Contacto"), /* @__PURE__ */ import_react4.default.createElement("ul", { className: "space-y-3 text-blue-100" }, /* @__PURE__ */ import_react4.default.createElement("li", { className: "flex items-start gap-3" }, /* @__PURE__ */ import_react4.default.createElement(MapPin, { className: "w-5 h-5 shrink-0 text-blue-200 mt-0.5" }), /* @__PURE__ */ import_react4.default.createElement("span", null, "Managua, Nicaragua.")), /* @__PURE__ */ import_react4.default.createElement("li", { className: "flex items-center gap-3" }, /* @__PURE__ */ import_react4.default.createElement(Mail, { className: "w-5 h-5 shrink-0 text-blue-200" }), /* @__PURE__ */ import_react4.default.createElement("a", { href: "mailto:gerencia@roboticnic.com", className: "hover:text-white transition duration-200" }, "gerencia@roboticnic.com")), /* @__PURE__ */ import_react4.default.createElement("li", { className: "flex items-center gap-3" }, /* @__PURE__ */ import_react4.default.createElement(Globe, { className: "w-5 h-5 shrink-0 text-blue-200" }), /* @__PURE__ */ import_react4.default.createElement("a", { href: "https://www.roboticnic.com", className: "hover:text-white transition duration-200" }, "roboticnic.com")), /* @__PURE__ */ import_react4.default.createElement("li", { className: "flex items-center gap-3" }, /* @__PURE__ */ import_react4.default.createElement(Phone, { className: "w-5 h-5 shrink-0 text-blue-200" }), /* @__PURE__ */ import_react4.default.createElement("a", { href: "tel:89106157", className: "hover:text-white transition duration-200" }, "+505 8910 6157"))), /* @__PURE__ */ import_react4.default.createElement("div", { className: "flex gap-3 pt-3" }, /* @__PURE__ */ import_react4.default.createElement(
      "a",
      {
        href: "https://www.facebook.com/share/1Bku8eoxc6/?mibextid=wwXIfr",
        target: "_blank",
        rel: "noreferrer",
        className: "w-9 h-9 rounded-full border border-blue-100 flex items-center justify-center hover:bg-white hover:text-[#1572B6] transition duration-200",
        "aria-label": "Facebook"
      },
      /* @__PURE__ */ import_react4.default.createElement("svg", { className: "w-4 h-4 fill-current", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" }))
    ), /* @__PURE__ */ import_react4.default.createElement(
      "a",
      {
        href: "https://www.facebook.com/share/1Bku8eoxc6/?mibextid=wwXIfr",
        target: "_blank",
        rel: "noreferrer",
        className: "w-9 h-9 rounded-full border border-blue-100 flex items-center justify-center hover:bg-white hover:text-[#1572B6] transition duration-200",
        "aria-label": "Instagram"
      },
      /* @__PURE__ */ import_react4.default.createElement("svg", { className: "w-4 h-4 stroke-current fill-none", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ import_react4.default.createElement("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }), /* @__PURE__ */ import_react4.default.createElement("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" }))
    ))), /* @__PURE__ */ import_react4.default.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ import_react4.default.createElement("h4", { className: "text-sm font-bold tracking-wider uppercase border-b border-white/10 pb-2" }, "Soporte"), /* @__PURE__ */ import_react4.default.createElement("ul", { className: "space-y-3 text-blue-100" }, /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement("button", { onClick: () => onPageChange("funcionalidades"), className: "hover:text-white hover:underline transition duration-200 text-left cursor-pointer" }, "Chatbots Inteligentes")), /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement("button", { onClick: () => onPageChange("funcionalidades"), className: "hover:text-white hover:underline transition duration-200 text-left cursor-pointer" }, "Integraci\xF3n API WhatsApp")), /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement("button", { onClick: () => onPageChange("funcionalidades"), className: "hover:text-white hover:underline transition duration-200 text-left cursor-pointer" }, "Desarrollo a Medida")), /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement("button", { onClick: () => onPageChange("contacto"), className: "hover:text-white hover:underline transition duration-200 text-left cursor-pointer" }, "Soporte T\xE9cnico")))), /* @__PURE__ */ import_react4.default.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ import_react4.default.createElement("h4", { className: "text-sm font-bold tracking-wider uppercase border-b border-white/10 pb-2" }, "Avisos Legales"), /* @__PURE__ */ import_react4.default.createElement("ul", { className: "space-y-3 text-blue-100" }, /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement("button", { onClick: () => onPageChange("inicio"), className: "hover:text-white hover:underline transition duration-200 text-left cursor-pointer" }, "Quiénes Somos")), /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement("button", { onClick: () => onPageChange("contacto"), className: "hover:text-white hover:underline transition duration-200 text-left cursor-pointer" }, "Contáctenos")), /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement("button", { onClick: onOpenPrivacy, className: "hover:text-white hover:underline transition duration-200 text-left cursor-pointer" }, "Política de Privacidad")), /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement("button", { onClick: () => window.openCookieModal && window.openCookieModal(), className: "hover:text-white hover:underline transition duration-200 text-left cursor-pointer" }, "Configuración de Cookies")), /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement(
      "a",
      {
        href: "https://drive.google.com/file/d/1m_tVboH9VbW5UxWs8cd7LY5EAF03UbuT/view?usp=sharing",
        target: "_blank",
        rel: "noreferrer",
        className: "hover:text-white hover:underline transition duration-200"
      },
      "Términos y Condiciones"
    )))), /* @__PURE__ */ import_react4.default.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ import_react4.default.createElement("h4", { className: "text-sm font-bold tracking-wider uppercase border-b border-white/10 pb-2" }, "Boletín Informativo"), /* @__PURE__ */ import_react4.default.createElement("form", { onSubmit: handleNewsletterSubmit, className: "flex flex-col gap-3" }, /* @__PURE__ */ import_react4.default.createElement(
      "input",
      {
        type: "email",
        value: email,
        onChange: (e) => setEmail(e.target.value),
        placeholder: "Tu correo electr\xF3nico",
        className: "w-full bg-blue-600/30 border border-white/30 rounded-lg px-4 py-2.5 text-sm text-white placeholder-blue-200 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition",
        required: true
      }
    ), /* @__PURE__ */ import_react4.default.createElement("p", { className: "text-xs text-blue-200 leading-relaxed" }, "Al enviar este formulario, confirma que acepta que usemos su correo \xFAnicamente para enviarle nuestro cat\xE1logo comercial."), /* @__PURE__ */ import_react4.default.createElement(
      "button",
      {
        type: "submit",
        disabled: submitting,
        className: "text-sm font-bold text-left mt-1 hover:underline flex items-center gap-2 w-max text-white hover:text-blue-200 transition duration-200 cursor-pointer disabled:opacity-50"
      },
      submitting ? "PROCESANDO..." : "SOLICITAR",
      !submitting && /* @__PURE__ */ import_react4.default.createElement(Send, { className: "w-4 h-4" })
    )))), /* @__PURE__ */ import_react4.default.createElement("div", { className: "pt-6 text-center text-xs sm:text-sm text-blue-100/90 font-medium tracking-wide" }, /* @__PURE__ */ import_react4.default.createElement("p", null, "\xA9 2026 ROBOTIC Latam. Tu aliado estrat\xE9gico en tecnolog\xEDa y automatizaci\xF3n."))));
  }

  // src/components/InicioView.tsx
  var import_react5 = __toESM(require_react_shim(), 1);
  function InicioView({ onPageChange, onOpenModal }) {
    const dynamicWords = [
      { word: "WhatsApp", color: "#25D366" },
      { word: "Facebook", color: "#1877F2" },
      { word: "Telegram", color: "#0088cc" }
    ];
    const [wordIndex, setWordIndex] = (0, import_react5.useState)(0);
    const [activeVideo, setActiveVideo] = (0, import_react5.useState)(null);
    const [activeImage, setActiveImage] = (0, import_react5.useState)(null);

    (0, import_react5.useEffect)(() => {
      if (activeVideo || activeImage) {
        document.body.style.overflow = "hidden";
        const handleKeyDown = (e) => {
          if (e.key === "Escape") {
            setActiveVideo(null);
            setActiveImage(null);
          }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
          document.body.style.overflow = "";
          window.removeEventListener("keydown", handleKeyDown);
        };
      }
    }, [activeVideo, activeImage]);

    const [chatsCount, setChatsCount] = (0, import_react5.useState)(() => {
      let saved = localStorage.getItem("global_visits");
      if (!saved || parseInt(saved) < 10257) {
        saved = 10257;
      } else {
        saved = parseInt(saved) + Math.floor(Math.random() * 5) + 1;
      }
      localStorage.setItem("global_visits", saved);
      return saved;
    });

    (0, import_react5.useEffect)(() => {
      localStorage.setItem("global_visits", chatsCount);
    }, [chatsCount]);
    const [successRate, setSuccessRate] = (0, import_react5.useState)(0);
    (0, import_react5.useEffect)(() => {
      const timer = setInterval(() => {
        setWordIndex((prev) => (prev + 1) % dynamicWords.length);
      }, 2500);
      return () => clearInterval(timer);
    }, []);
    (0, import_react5.useEffect)(() => {
      const timer = setInterval(() => {
        setChatsCount((prev) => prev + 1);
      }, 3500);
      return () => clearInterval(timer);
    }, []);
    (0, import_react5.useEffect)(() => {
      let current = 0;
      const duration = 2200;
      const stepTime = Math.floor(duration / 95);
      const timer = setInterval(() => {
        current += 1;
        if (current >= 95) {
          setSuccessRate(95);
          clearInterval(timer);
        } else {
          setSuccessRate(current);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }, []);
    const capsules = [
      { text: "Ventas 24/7", class: "bg-green-500/10 text-green-600 border border-green-200" },
      { text: "Managua, Nicaragua", class: "bg-blue-500/10 text-blue-600 border border-blue-200" },
      { text: "Agendas Sincronizadas", class: "bg-amber-500/10 text-amber-600 border border-amber-200" },
      { text: "n8n Flujos Inteligentes", class: "bg-red-500/10 text-red-600 border border-red-200" },
      { text: "Omnicanalidad", class: "bg-indigo-500/10 text-indigo-600 border border-indigo-200" }
    ];
    const features = [
      {
        id: "01",
        title: "Chatbots Inteligentes",
        desc: "Mejora tu atenci\xF3n al cliente con asistentes automatizados que responden, venden y agendan citas las 24 horas, sin intervenci\xF3n humana."
      },
      {
        id: "02",
        title: "Integraci\xF3n API Oficial",
        desc: "Integramos tu empresa con la API oficial de WhatsApp para ofrecerte una comunicaci\xF3n estable, segura y alineada con los est\xE1ndares de Meta."
      },
      {
        id: "03",
        title: "Desarrollo a Medida",
        desc: "Creamos sistemas web y de escritorio personalizados (Firebase/Cloud), adaptados completamente a los procesos y necesidades de tu negocio."
      },
      {
        id: "04",
        title: "Automatizaci\xF3n de Procesos",
        desc: "Optimiza tus operaciones internas, desde pedidos en restaurantes hasta la gesti\xF3n de expedientes en sectores m\xE9dicos y legales."
      },
      {
        id: "05",
        title: "Soporte T\xE9cnico & Hardware",
        desc: "Mejoramos el rendimiento de tus sistemas macOS y redes para que tu infraestructura tecnol\xF3gica est\xE9 a la altura de tu crecimiento.",
        img: "https://i.postimg.cc/3J8D9cZ3/mantenimiento-de-computadora.jpg",
        link: "https://www.facebook.com/photo/?fbid=122108597985167972&set=a.122102661381167972"
      },
      {
        id: "06",
        title: "Experiencia Multimodal",
        desc: "Nuestros bots entienden audios, procesan im\xE1genes y analizan documentos PDF, brindando una interacci\xF3n m\xE1s natural y completa."
      },
      {
        id: "07",
        title: "Haz crecer tu presencia",
        desc: "Desarrollo web profesional: sitios modernos, veloces y escalables.",
        img: "https://i.postimg.cc/J4NyxnRC/disen-o-web.jpg",
        link: "https://www.facebook.com/permalink.php?story_fbid=pfbid024JmGBs9HNzHUvXTDaeQhX3GJ22hmoKFCkA5uV4GGkdoFrmGJjVSuVCRZp9cVaPvyl&id=61585039183061"
      }
    ];
    const pricingPlans = [
      {
        name: "Demo Gratuita",
        price: "$0",
        period: "/ 7 d\xEDas",
        desc: "Prueba el poder de la automatizaci\xF3n en tu propio negocio sin compromiso.",
        features: [
          "Instalaci\xF3n inicial incluida",
          "1 Agente virtual activo",
          "Flujo de bienvenida b\xE1sico",
          "Sin cargos ocultos"
        ],
        btnText: "Probar ahora",
        btnUrl: "https://wa.me/50589106157?text=Me%20interesa%20la%20demo%20gratuita"
      },
      {
        name: "Starter",
        price: "$49.99",
        period: "/ mes",
        desc: "Ideal para pequeña empresa.",
        features: [
          "Agente especializado en ventas",
          "Atención al cliente 24/7",
          "Soporte técnico inteligente"
        ],
        addon: "$40/mes por soporte técnico (Opcional)",
        popular: true,
        btnText: "Elegir Starter",
        btnUrl: "https://wa.me/50589106157?text=Me%20interesa%20el%20plan%20Starter"
      },
      {
        name: "Pro Business",
        price: "$80.00",
        period: "/ mes",
        desc: "Bot avanzado con IA multimodal para automatización inteligente.",
        features: [
          "1 Bot avanzado (Incluye plan Starter)",
          "Lee imágenes y transcribe audios",
          "Realiza consultas y crea base de datos",
          "Envía imágenes y notifica al cliente"
        ],
        addon: "$40/mes por soporte técnico (Opcional)",
        primary: true,
        btnText: "Activar Plan Pro",
        btnUrl: "https://wa.me/50589106157?text=Me%20interesa%20el%20plan%20Pro%20Business"
      },
      {
        name: "Custom",
        price: "A medida",
        period: "",
        desc: "Soluciones a medida para alto volumen de mensajes y reventa.",
        features: [
          "White label (Tu propia marca)",
          "Hasta 10 chatbots activos 24/7",
          "Soporte dedicado 1-a-1",
          "Infraestructura privada"
        ],
        addon: "$40/mes por soporte técnico (Opcional)",
        agency: true,
        btnText: "Contactar a Jordan",
        btnUrl: "https://wa.me/50589106157?text=Me%20interesa%20el%20plan%20Custom"
      }
    ];
    const supplementaryServices = [
      {
        name: "Soporte Pro",
        tag: "Soporte",
        desc: "Mantenimiento preventivo y correctivo para tu hardware y sistemas.",
        video: "https://player.vimeo.com/video/1219436943?background=1&autoplay=1&loop=1&muted=1",
        features: [],
        btnText: "Solicitar Soporte",
        btnUrl: "https://wa.me/50589106157?text=Me%20interesa%20el%20soporte%20pro"
      },
      {
        name: "Web Premium",
        tag: "Web + .ni",
        desc: "Creamos tu presencia online con dominio propio y hosting de alta velocidad.",
        video: "https://player.vimeo.com/video/1220515591?autoplay=1&loop=1&autopause=0&muted=1&background=1",
        features: ["Dominio personalizado", "Hosting administrado"],
        popular: true,
        btnText: "Crear mi Web",
        btnUrl: "https://wa.me/50589106157?text=Me%20interesa%20el%20plan%20Web%20Premium"
      },
      {
        name: "Ciberseguridad",
        tag: "Cloud Sec",
        desc: "Protecci\xF3n de infraestructura y gesti\xF3n de riesgos en la nube.",
        features: ["Hardening de sistemas", "Soluciones Cloud IA"],
        primary: true,
        btnText: "Asegurar mi Red",
        btnUrl: "https://wa.me/50589106157?text=Me%20interesa%20el%20plan%20Ciberseguridad"
      },
      {
        name: "Dev Studio",
        tag: "Software",
        desc: "Desarrollo de aplicaciones y sistemas adaptados a tu flujo de trabajo.",
        features: ["C\xF3digo personalizado", "Escalabilidad total"],
        btnText: "Cotizar Proyecto",
        btnUrl: "https://wa.me/50589106157?text=Me%20interesa%20el%20proyecto%20Dev%20Studio"
      },
      {
        name: "C\xE1maras de Seguridad",
        tag: "CCTV",
        desc: "Instalaci\xF3n, mantenimiento preventivo, correctivo y reparaci\xF3n de c\xE1maras.",
        img: "./Blue and White Modern CCTV Services Banner (1).jpg",
        features: [],
        btnText: "Solicitar Servicio",
        btnUrl: "https://wa.me/50589106157?text=Me%20interesa%20el%20servicio%20de%20CCTV%20y%20Seguridad"
      }
    ];
    return /* @__PURE__ */ import_react5.default.createElement("div", { id: "inicio-view", className: "w-full" }, /* @__PURE__ */ import_react5.default.createElement("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-12 text-left flex flex-col items-start" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-[10px] font-extrabold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full mb-4 select-none" }, "AUTOMATIZACI\xD3N CON IA & WEB"), /* @__PURE__ */ import_react5.default.createElement("h1", { className: "font-extrabold leading-tight text-slate-800 text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6 max-w-2xl" }, "Tu negocio atendido las 24 horas,", " ", /* @__PURE__ */ import_react5.default.createElement(
      "span",
      {
        className: "transition-all duration-500 inline-block",
        style: { color: dynamicWords[wordIndex].color }
      },
      dynamicWords[wordIndex].word
    ), " ", "sin interrupciones."), /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex flex-row flex-wrap gap-4 w-auto mb-12 select-none justify-start items-center" }, /* @__PURE__ */ import_react5.default.createElement(
      "button",
      {
        onClick: () => onPageChange("bot"),
        className: "bg-[#0A3E62] hover:bg-[#124C73] text-white font-extrabold tracking-wider uppercase px-6 py-2.5 rounded-md shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer flex items-center gap-2 text-sm border-b-[3px] border-[#06273E] hover:border-[#0A3E62] transition-all duration-300 ease-in-out"
      },
      "CONTACTAR",
      /* @__PURE__ */ import_react5.default.createElement(ArrowRight, { className: "w-4 h-4 text-white/95" })
    ), /* @__PURE__ */ import_react5.default.createElement(
      "button",
      {
        onClick: onOpenModal,
        className: "bg-white border-2 border-[#0A3E62]/10 hover:border-[#0A3E62]/30 text-[#0A3E62] hover:bg-slate-50 font-extrabold tracking-wider uppercase px-6 py-2.5 rounded-md shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer text-sm transition-all duration-300 ease-in-out"
      },
      "TEAMS"
    )), /* @__PURE__ */ import_react5.default.createElement("div", { className: "w-full overflow-hidden relative py-4 mb-16 fade-mask" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "animate-scroll gap-6" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex gap-6 shrink-0" }, capsules.map((cap, index) => /* @__PURE__ */ import_react5.default.createElement("div", { key: `c1-${index}`, className: `px-5 py-2.5 rounded-full text-xs font-bold shrink-0 tracking-wide ${cap.class}` }, cap.text))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex gap-6 shrink-0" }, capsules.map((cap, index) => /* @__PURE__ */ import_react5.default.createElement("div", { key: `c2-${index}`, className: `px-5 py-2.5 rounded-full text-xs font-bold shrink-0 tracking-wide ${cap.class}` }, cap.text))))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl py-6 border-y border-slate-100/80 my-4 mx-auto" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-center" }, /* @__PURE__ */ import_react5.default.createElement("h2", { className: "text-2xl sm:text-3xl font-black text-[#0A3E62] tracking-tight flex items-center justify-center gap-1" }, /* @__PURE__ */ import_react5.default.createElement("span", { key: chatsCount, className: "inline-block animate-in slide-in-from-bottom-2 fade-in duration-500 text-[#0A3E62]" }, "+", chatsCount.toLocaleString()), /* @__PURE__ */ import_react5.default.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-ping inline-block", title: "Live stats ticking" })), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-[10px] font-bold tracking-widest uppercase text-slate-400 mt-1" }, "Visitas a la P\xE1gina")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-center border-y md:border-y-0 md:border-x border-slate-100 py-4 md:py-0" }, /* @__PURE__ */ import_react5.default.createElement("h2", { className: "text-2xl sm:text-3xl font-black text-[#0A3E62] tracking-tight transition-all duration-300" }, successRate, "%"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-[10px] font-bold tracking-widest uppercase text-slate-400 mt-1" }, "Respuestas Instant\xE1neas")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-center" }, /* @__PURE__ */ import_react5.default.createElement("h2", { className: "text-2xl sm:text-3xl font-black text-blue-600 tracking-tight flex items-center justify-center gap-1" }, /* @__PURE__ */ import_react5.default.createElement("span", null, "+45,892")), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-[10px] font-bold tracking-widest uppercase text-slate-400 mt-1" }, "Chats Automatizados")))), /* @__PURE__ */ import_react5.default.createElement("section", { className: "bg-slate-50/50 border-y border-slate-100 py-20" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-center max-w-3xl mx-auto mb-16" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-[10px] font-extrabold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full" }, "Nuestros Planes de Precios"), /* @__PURE__ */ import_react5.default.createElement("h2", { className: "text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mt-4" }, "Soluciones para cualquier escala comercial"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-500 text-sm sm:text-base mt-2" }, "Elige el plan ideal para automatizar tus flujos de conversaci\xF3n y liberar tiempo productivo.")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8" }, pricingPlans.map((plan, index) => /* @__PURE__ */ import_react5.default.createElement(
      "div",
      {
        key: index,
        className: `bg-white rounded-3xl p-6 shadow-sm border flex flex-col justify-between hover:shadow-lg hover:scale-105 transition-all duration-300 relative ${plan.primary ? "border-blue-600 ring-2 ring-blue-600/15" : "border-slate-100"}`
      },
      plan.popular && /* @__PURE__ */ import_react5.default.createElement("span", { className: "absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full shadow-md shadow-blue-500/10" }, "M\xE1s solicitado"),
      plan.agency && /* @__PURE__ */ import_react5.default.createElement("span", { className: "absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full shadow-md shadow-indigo-500/10" }, "Para Agencias"),
      /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("h3", { className: "text-lg font-extrabold text-slate-800" }, plan.name), /* @__PURE__ */ import_react5.default.createElement("div", { className: "mt-4 flex items-baseline gap-1" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-3xl sm:text-4xl font-black text-slate-800" }, plan.price), /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-xs text-slate-400 font-semibold" }, plan.period)), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-500 text-xs leading-relaxed mt-3 mb-6 min-h-[36px]" }, plan.desc), /* @__PURE__ */ import_react5.default.createElement("ul", { className: "space-y-3 border-t border-slate-50 pt-6" }, plan.features.map((feat, fIdx) => /* @__PURE__ */ import_react5.default.createElement("li", { key: fIdx, className: "flex items-center gap-2.5 text-xs text-slate-600" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shrink-0 shadow-sm border border-blue-400/20" }, /* @__PURE__ */ import_react5.default.createElement(Sparkles, { className: "w-2.5 h-2.5 text-white stroke-[3]" })), /* @__PURE__ */ import_react5.default.createElement("span", null, feat))))), plan.addon && /* @__PURE__ */ import_react5.default.createElement("div", { className: "mt-4 py-2 px-3 rounded-lg bg-blue-50/50 border border-blue-100/50 flex items-center gap-2" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-blue-600 font-black text-sm" }, "+"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-[11px] font-semibold text-slate-600 leading-tight" }, plan.addon)),
      /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex justify-center w-full mt-6" }, /* @__PURE__ */ import_react5.default.createElement(
        "a",
        {
          href: plan.btnUrl,
          target: "_blank",
          rel: "noreferrer",
          className: `px-5 py-2 rounded-md font-extrabold text-[11px] tracking-wider uppercase transition-all duration-150 active:scale-95 shadow-sm hover:shadow-md cursor-pointer inline-flex items-center justify-center gap-1.5 ${plan.primary ? "bg-gradient-to-b from-[#0A3E62] to-[#06273E] text-white border-b-[2px] border-[#041B2B] hover:from-[#0E517F] hover:to-[#0A3E62]" : "bg-gradient-to-b from-white to-slate-50 text-[#0A3E62] border border-slate-200 border-b-[2px] border-slate-300 hover:to-slate-100"}`
        },
        "CONTACTAR",
        /* @__PURE__ */ import_react5.default.createElement(ArrowRight, { className: "w-3.5 h-3.5" })
      ))
    ))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-center max-w-3xl mx-auto mt-24 mb-16" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-[10px] font-extrabold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full" }, "Servicios Complementarios"), /* @__PURE__ */ import_react5.default.createElement("h2", { className: "text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mt-4" }, "Ingenier\xEDa y soporte tecnol\xF3gico"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-500 text-xs sm:text-sm mt-2" }, "Soporte de hardware, desarrollo de software premium e infraestructura segura.")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8" }, supplementaryServices.map((service, index) => /* @__PURE__ */ import_react5.default.createElement(
      "div",
      {
        key: index,
        className: `bg-white rounded-3xl p-6 shadow-sm border flex flex-col justify-between hover:shadow-lg hover:scale-105 transition-all duration-300 relative ${service.primary ? "border-blue-600 ring-2 ring-blue-600/15" : "border-slate-100"}`
      },
      service.popular && /* @__PURE__ */ import_react5.default.createElement("span", { className: "absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full shadow-md shadow-blue-500/10" }, "Top Ventas"),
      /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("h3", { className: "text-lg font-extrabold text-slate-800" }, service.name), /* @__PURE__ */ import_react5.default.createElement("div", { className: "mt-3" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "bg-slate-50 text-slate-600 border border-slate-200/50 text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full" }, service.tag)), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-500 text-xs leading-relaxed mt-4 mb-6 min-h-[36px]" }, service.desc), service.video && /* @__PURE__ */ import_react5.default.createElement("div", { className: "w-full rounded-xl overflow-hidden mb-6 bg-slate-100/50 border border-slate-100 relative group cursor-pointer shadow-sm hover:shadow-md transition-shadow", style: { aspectRatio: '16/9' }, onClick: () => setActiveVideo(service.video.split('?')[0] + "?autoplay=1&muted=0&quality=1080p&autopause=0&color=0A3E62") }, /* @__PURE__ */ import_react5.default.createElement("iframe", { src: service.video, className: "w-full h-full pointer-events-none scale-[1.02]", frameBorder: "0", allow: "autoplay; fullscreen; picture-in-picture", allowFullScreen: true }), /* @__PURE__ */ import_react5.default.createElement("div", { className: "absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors z-10" })), service.img && /* @__PURE__ */ import_react5.default.createElement("div", { className: "w-full rounded-xl overflow-hidden mb-6 bg-slate-100/50 border border-slate-100 relative shadow-sm cursor-pointer group", style: { aspectRatio: '16/9' }, onClick: () => setActiveImage(service.img) }, service.img.endsWith('.mp4') ? /* @__PURE__ */ import_react5.default.createElement("video", { src: service.img, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500", autoPlay: true, loop: true, muted: true, playsInline: true }) : /* @__PURE__ */ import_react5.default.createElement("img", { src: service.img, alt: service.name, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }), /* @__PURE__ */ import_react5.default.createElement("div", { className: "absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors z-10" })), service.features && service.features.length > 0 && /* @__PURE__ */ import_react5.default.createElement("ul", { className: "space-y-3 border-t border-slate-50 pt-6" }, service.features.map((feat, fIdx) => /* @__PURE__ */ import_react5.default.createElement("li", { key: fIdx, className: "flex items-center gap-2.5 text-xs text-slate-600" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shrink-0 shadow-sm border border-blue-400/20" }, /* @__PURE__ */ import_react5.default.createElement(Sparkles, { className: "w-2.5 h-2.5 text-white stroke-[3]" })), /* @__PURE__ */ import_react5.default.createElement("span", null, feat))))),
      /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex justify-center w-full mt-6" }, /* @__PURE__ */ import_react5.default.createElement(
        "a",
        {
          href: service.btnUrl,
          target: "_blank",
          rel: "noreferrer",
          className: `px-5 py-2 rounded-md font-extrabold text-[11px] tracking-wider uppercase transition-all duration-150 active:scale-95 shadow-sm hover:shadow-md cursor-pointer inline-flex items-center justify-center gap-1.5 ${service.primary ? "bg-gradient-to-b from-[#0A3E62] to-[#06273E] text-white border-b-[2px] border-[#041B2B] hover:from-[#0E517F] hover:to-[#0A3E62]" : "bg-gradient-to-b from-white to-slate-50 text-[#0A3E62] border border-slate-200 border-b-[2px] border-slate-300 hover:to-slate-100"}`
        },
        "CONTACTAR",
        /* @__PURE__ */ import_react5.default.createElement(ArrowRight, { className: "w-3.5 h-3.5" })
      ))
    ))))), /* @__PURE__ */ import_react5.default.createElement("section", { className: "py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-center max-w-3xl mx-auto mb-16" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-[10px] font-extrabold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full" }, "Nuestras Ventajas"), /* @__PURE__ */ import_react5.default.createElement("h2", { className: "text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mt-4" }, "Impulsa tu negocio con Robotic"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-500 text-sm sm:text-base mt-2" }, "Automatizaci\xF3n inteligente dise\xF1ada para maximizar la eficiencia y el crecimiento de tu empresa, en toda Latinoamérica y a nivel global.")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 justify-center items-stretch" }, features.map((feat, index) => {
      if (feat.img) {
        return /* @__PURE__ */ import_react5.default.createElement(
          "a",
          {
            key: index,
            href: feat.link,
            target: "_blank",
            rel: "noreferrer",
            className: "bg-white rounded-xl p-3.5 shadow-xs border border-slate-100 flex flex-col justify-between hover:shadow-md hover:scale-[1.01] transition-all duration-300 group cursor-pointer max-w-xs mx-auto w-full"
          },
          /* @__PURE__ */ import_react5.default.createElement("div", { className: "mb-2.5 w-full aspect-[16/9] bg-white rounded-lg overflow-hidden border border-slate-100 flex items-center justify-center" }, /* @__PURE__ */ import_react5.default.createElement(
            "img",
            {
              src: feat.img,
              alt: feat.title,
              className: "w-full h-full object-contain bg-white group-hover:scale-[1.01] transition duration-300"
            }
          )),
          /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex-grow flex flex-col justify-between" }, /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-[10px] font-black text-blue-600/30 tracking-widest" }, feat.id || "\u2605"), /* @__PURE__ */ import_react5.default.createElement("h3", { className: "font-bold text-slate-800 text-xs mb-1 mt-0.5" }, feat.title), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-500 text-[10.5px] leading-relaxed mb-3" }, feat.desc)), /* @__PURE__ */ import_react5.default.createElement("span", { className: "block w-full text-center bg-[#1877F2] hover:bg-[#166FE5] text-white py-1.5 rounded font-bold text-[10px] tracking-wider uppercase transition shadow-3xs" }, "Ver en Facebook"))
        );
      }
      return /* @__PURE__ */ import_react5.default.createElement(
        "div",
        {
          key: index,
          className: "bg-white rounded-xl p-3.5 shadow-xs border border-slate-100 flex flex-col justify-between hover:shadow-md hover:scale-[1.01] transition-all duration-300 max-w-xs mx-auto w-full"
        },
        /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-lg font-black text-blue-600/30 tracking-widest block" }, feat.id), /* @__PURE__ */ import_react5.default.createElement("h3", { className: "font-bold text-slate-800 text-xs mb-1 mt-1" }, feat.title), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-500 text-[10.5px] leading-relaxed" }, feat.desc))
      );
    })), activeVideo && /* @__PURE__ */ import_react5.default.createElement("div", { style: { zIndex: 999999 }, className: "fixed inset-0 bg-black/95 flex items-center justify-center animate-in fade-in duration-300", onClick: () => setActiveVideo(null) }, /* @__PURE__ */ import_react5.default.createElement("button", { onClick: (e) => { e.stopPropagation(); setActiveVideo(null); }, className: "absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors cursor-pointer", style: { zIndex: 1000000 } }, /* @__PURE__ */ import_react5.default.createElement("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ import_react5.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "w-full max-w-7xl aspect-video p-0 sm:p-8" }, /* @__PURE__ */ import_react5.default.createElement("iframe", { src: activeVideo, className: "w-full h-full bg-black border-none sm:rounded-xl sm:shadow-2xl", allow: "autoplay; fullscreen; picture-in-picture", allowFullScreen: true }))), activeImage && /* @__PURE__ */ import_react5.default.createElement("div", { style: { zIndex: 999999 }, className: "fixed inset-0 bg-black/95 flex items-center justify-center animate-in fade-in duration-300", onClick: () => setActiveImage(null) }, /* @__PURE__ */ import_react5.default.createElement("button", { onClick: (e) => { e.stopPropagation(); setActiveImage(null); }, className: "absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors cursor-pointer", style: { zIndex: 1000000 } }, /* @__PURE__ */ import_react5.default.createElement("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ import_react5.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "w-full h-full max-w-7xl p-0 sm:p-8 flex items-center justify-center pointer-events-none" }, activeImage.endsWith('.mp4') ? /* @__PURE__ */ import_react5.default.createElement("video", { src: activeImage, className: "w-full h-full object-contain pointer-events-auto", autoPlay: true, loop: true, muted: true, playsInline: true, onClick: (e) => e.stopPropagation() }) : /* @__PURE__ */ import_react5.default.createElement("img", { src: activeImage, className: "w-full h-full object-contain pointer-events-auto", onClick: (e) => e.stopPropagation() })))));
  }

  // src/components/FuncionalidadesView.tsx
  var import_react6 = __toESM(require_react_shim(), 1);
  function FuncionalidadesView() {
    const [currentVideoIndex, setCurrentVideoIndex] = (0, import_react6.useState)(0);
    const videoIds = ["1194234660", "1191713624", "1219439415"];
    const videoTitles = [
      "Ciberseguridad & Protecci\xF3n",
      "Defensa Activa & Monitoreo",
      "Asistente Virtual con IA"
    ];
    (0, import_react6.useEffect)(() => {
      const handleMessage = (event) => {
        if (event.origin.includes("vimeo.com")) {
          try {
            const data = JSON.parse(event.data);
            if (data.event === "ready") {
              const iframe = document.querySelector('iframe[title="Demostraci\xF3n de Sistema"]');
              if (iframe && iframe.contentWindow) {
                iframe.contentWindow.postMessage(JSON.stringify({
                  method: "addEventListener",
                  value: "finish"
                }), "*");
              }
            }
            if (data.event === "finish" || data.event === "ended") {
              setCurrentVideoIndex((prev) => (prev + 1) % videoIds.length);
            }
          } catch (e) {
          }
        }
      };
      window.addEventListener("message", handleMessage);
      return () => {
        window.removeEventListener("message", handleMessage);
      };
    }, [currentVideoIndex]);
    const serviceCards = [
      {
        category: "Automatizaci\xF3n",
        title: "Bots Inteligentes",
        desc: "Responde clientes 24/7, agenda citas y automatiza ventas sin fricciones.",
        icon: /* @__PURE__ */ import_react6.default.createElement(Cpu, { className: "w-5 h-5 text-blue-600" })
      },
      {
        category: "Web",
        title: "Websites r\xE1pidos",
        desc: "Sitios modernos optimizados para m\xE1xima velocidad de carga y conversi\xF3n.",
        icon: /* @__PURE__ */ import_react6.default.createElement(Smartphone, { className: "w-5 h-5 text-blue-600" })
      },
      {
        category: "Seguridad",
        title: "Ciberseguridad",
        desc: "Protecci\xF3n de datos empresariales y hardening de servidores profesionales.",
        icon: /* @__PURE__ */ import_react6.default.createElement(ShieldAlert, { className: "w-5 h-5 text-blue-600" })
      },
      {
        category: "Crecimiento",
        title: "Escalamiento digital",
        desc: "Optimiza flujos de ventas y convierte prospectos fr\xEDos en clientes fieles.",
        icon: /* @__PURE__ */ import_react6.default.createElement(TrendingUp, { className: "w-5 h-5 text-blue-600" })
      },
      {
        category: "Soporte",
        title: "Optimizaci\xF3n sistemas",
        desc: "Mantenimiento proactivo de hardware macOS, Linux, redes e infraestructuras.",
        icon: /* @__PURE__ */ import_react6.default.createElement(Laptop, { className: "w-5 h-5 text-blue-600" })
      },
      {
        category: "API",
        title: "Integraciones",
        desc: "Conecta CRM, pasarelas de pago, Google Calendar y automatiza operaciones completas con n8n.",
        icon: /* @__PURE__ */ import_react6.default.createElement(Blocks, { className: "w-5 h-5 text-blue-600" })
      }
    ];
    return /* @__PURE__ */ import_react6.default.createElement("div", { id: "funcionalidades-view", className: "w-full" }, /* @__PURE__ */ import_react6.default.createElement("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "lg:col-span-5 text-left flex flex-col justify-center" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "w-fit text-[10px] font-extrabold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full mb-4" }, "Funciones del Sistema"), /* @__PURE__ */ import_react6.default.createElement("h1", { className: "font-extrabold text-slate-800 text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight mb-6" }, "Sistemas de ", /* @__PURE__ */ import_react6.default.createElement("span", { className: "text-blue-600 block sm:inline" }, "Seguridad Inteligente")), /* @__PURE__ */ import_react6.default.createElement("div", { className: "space-y-2 mt-2" }, /* @__PURE__ */ import_react6.default.createElement("p", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2" }, "Lista de Reproducci\xF3n Continua"), videoIds.map((id, index) => /* @__PURE__ */ import_react6.default.createElement(
      "button",
      {
        key: id,
        onClick: () => setCurrentVideoIndex(index),
        className: `w-full text-left p-3 rounded-lg border transition-all duration-200 flex items-center justify-between group cursor-pointer ${currentVideoIndex === index ? "bg-blue-50/50 border-blue-500/30 text-blue-700 shadow-3xs" : "bg-white border-slate-100 text-slate-600 hover:bg-slate-50/50"}`
      },
      /* @__PURE__ */ import_react6.default.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: `w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${currentVideoIndex === index ? "bg-blue-600 text-white animate-pulse" : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"}` }, index + 1), /* @__PURE__ */ import_react6.default.createElement("span", { className: "text-xs font-semibold tracking-wide" }, videoTitles[index])),
      currentVideoIndex === index && /* @__PURE__ */ import_react6.default.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" })
    )))), /* @__PURE__ */ import_react6.default.createElement("div", { className: "lg:col-span-7" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "relative rounded-2xl overflow-hidden aspect-video shadow-md border border-slate-100 bg-slate-950" }, /* @__PURE__ */ import_react6.default.createElement(
      "iframe",
      {
        src: `https://player.vimeo.com/video/${videoIds[currentVideoIndex]}?autoplay=1&muted=1&autopause=0&title=0&byline=0&portrait=0&api=1&player_id=vimeo_player`,
        className: "absolute inset-0 w-full h-full object-cover",
        allow: "autoplay; fullscreen",
        allowFullScreen: true,
        title: "Demostraci\xF3n de Sistema"
      }
    ))))), /* @__PURE__ */ import_react6.default.createElement("section", { className: "py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "mb-12 text-center md:text-left" }, /* @__PURE__ */ import_react6.default.createElement("h2", { className: "text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight" }, "Nuestros M\xF3dulos de Servicio"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "text-slate-500 text-sm mt-1" }, "Soluciones tecnol\xF3gicas dise\xF1adas para automatizar y escalar tu negocio.")), /* @__PURE__ */ import_react6.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" }, serviceCards.map((service, index) => /* @__PURE__ */ import_react6.default.createElement(
      "div",
      {
        key: index,
        className: "bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-lg hover:scale-105 transition-all duration-300"
      },
      /* @__PURE__ */ import_react6.default.createElement("div", null, /* @__PURE__ */ import_react6.default.createElement("div", { className: "w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4" }, service.icon), /* @__PURE__ */ import_react6.default.createElement("span", { className: "text-[10px] font-extrabold tracking-widest text-slate-400 uppercase" }, service.category), /* @__PURE__ */ import_react6.default.createElement("h3", { className: "text-lg font-bold text-slate-800 mt-2 mb-2" }, service.title), /* @__PURE__ */ import_react6.default.createElement("p", { className: "text-slate-500 text-xs sm:text-sm leading-relaxed" }, service.desc))
  )))));
  }

  // src/components/FaqView.tsx
  var import_react7 = __toESM(require_react_shim(), 1);
  function FaqView() {
    const [openIndex, setOpenIndex] = (0, import_react7.useState)(0);
    const faqs = [
      {
        q: "\xBFC\xF3mo funcionan sus chatbots con Inteligencia Artificial?",
        a: "Nuestros chatbots no son simples men\xFAs de opciones predefinidas. Utilizamos Procesamiento de Lenguaje Natural (PLN) avanzado e IA multimodal. Esto significa que el bot comprende el contexto de las preguntas abiertas, puede interpretar notas de voz e incluso analizar im\xE1genes o documentos PDF enviados por tus clientes para brindar respuestas precisas y humanas 24/7."
      },
      {
        q: "\xBFQu\xE9 ventajas tiene usar la API Oficial de WhatsApp con Robotic?",
        a: "Al integrar tu negocio con la API Oficial de WhatsApp a trav\xE9s de Robotic, obtienes estabilidad garantizada y eliminas por completo el riesgo de bloqueos de n\xFAmero por parte de Meta. Adem\xE1s, te permite gestionar m\xFAltiples agentes simult\xE1neos, enviar notificaciones masivas automatizadas y cumplir con todos los est\xE1ndares de privacidad corporativos."
      },
      {
        q: "\xBFCu\xE1les son los requisitos para integrar un chatbot?",
        a: "Para la API oficial de WhatsApp, requieres un n\xFAmero de tel\xE9fono limpio (que no est\xE9 asociado a una cuenta personal de WhatsApp activa) y, opcionalmente, una p\xE1gina de negocio de Facebook verificada. Para flujos a medida o locales, nosotros te guiamos paso a paso en la configuraci\xF3n t\xE9cnica."
      },
      {
        q: "\xBFTengo control sobre lo que responde la Inteligencia Artificial?",
        a: "\xA1Absolutamente! Dise\xF1amos bases de conocimiento cerradas y entrenamos a tu agente virtual exclusivamente con informaci\xF3n oficial de tu negocio (cat\xE1logos, precios, pol\xEDticas de entrega, preguntas frecuentes). El bot nunca inventar\xE1 respuestas ni hablar\xE1 de temas ajenos a tu empresa."
      },
      {
        q: "\xBFPuedo integrar pasarelas de pago y agendas?",
        a: "S\xED. Integramos flujos conversacionales con Google Calendar para agendar citas autom\xE1ticas, y conectamos pasarelas de pago o enlaces de facturaci\xF3n para que tus clientes puedan completar compras directamente desde el chat de WhatsApp."
      },
      {
        q: "\xBFOfrecen soporte t\xE9cnico despu\xE9s de la instalaci\xF3n?",
        a: "S\xED, todos nuestros planes comerciales incluyen soporte t\xE9cnico preventivo y correctivo continuo v\xEDa WhatsApp o mediante tickets de videoconferencia. Nos aseguramos de que tus bots operen de forma fluida e ininterrumpida."
      }
    ];
    const handleToggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
    return /* @__PURE__ */ import_react7.default.createElement("div", { id: "faq-view", className: "w-full" }, /* @__PURE__ */ import_react7.default.createElement("section", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "text-center mb-16" }, /* @__PURE__ */ import_react7.default.createElement("span", { className: "text-[10px] font-extrabold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full" }, "Centro de Ayuda"), /* @__PURE__ */ import_react7.default.createElement("h1", { className: "font-extrabold text-slate-800 text-3xl sm:text-5xl tracking-tight mt-4 mb-4" }, "Preguntas Frecuentes"), /* @__PURE__ */ import_react7.default.createElement("p", { className: "text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed" }, "Todo lo que necesitas saber sobre los servicios de ingenier\xEDa de software, chatbots con IA y automatizaciones de Robotic System.")), /* @__PURE__ */ import_react7.default.createElement("div", { className: "space-y-4 max-w-3xl mx-auto" }, faqs.map((faq, index) => {
      const isOpen = openIndex === index;
      return /* @__PURE__ */ import_react7.default.createElement(
        "div",
        {
          key: index,
          className: "bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-200"
        },
        /* @__PURE__ */ import_react7.default.createElement(
          "button",
          {
            onClick: () => handleToggle(index),
            className: "w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:text-blue-600 transition duration-150 cursor-pointer text-sm sm:text-base"
          },
          /* @__PURE__ */ import_react7.default.createElement("span", { className: "flex items-center gap-3" }, /* @__PURE__ */ import_react7.default.createElement(CircleQuestionMark, { className: "w-5 h-5 text-blue-500 shrink-0" }), faq.q),
          isOpen ? /* @__PURE__ */ import_react7.default.createElement(ChevronDown, { className: "w-5 h-5 text-blue-600 rotate-180 transition duration-200" }) : /* @__PURE__ */ import_react7.default.createElement(ChevronDown, { className: "w-5 h-5 text-slate-400 transition duration-200" })
        ),
        isOpen && /* @__PURE__ */ import_react7.default.createElement("div", { className: "px-5 pb-5 pt-1 text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-50 animate-in fade-in duration-200" }, /* @__PURE__ */ import_react7.default.createElement("p", null, faq.a))
      );
    })), /* @__PURE__ */ import_react7.default.createElement("div", { className: "bg-slate-50 rounded-3xl p-6 sm:p-8 text-center max-w-3xl mx-auto mt-16 border border-slate-100/80" }, /* @__PURE__ */ import_react7.default.createElement("h3", { className: "font-bold text-slate-800 text-lg" }, "\xBFA\xFAn tienes dudas?"), /* @__PURE__ */ import_react7.default.createElement("p", { className: "text-slate-500 text-xs sm:text-sm mt-1 mb-6" }, "Ponte en contacto directo con nuestros ingenieros de servicio para consultas especializadas."), /* @__PURE__ */ import_react7.default.createElement(
      "a",
      {
        href: "https://wa.me/50589106157?text=Hola,%20tengo%20una%20pregunta%20adicional%20sobre%20sus%20servicios%20de%20chatbots",
        target: "_blank",
        rel: "noreferrer",
        className: "bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition duration-200 shadow-sm inline-block"
      },
      "Chatear con un Asesor"
    ))));
  }

  // src/components/ContactoView.tsx
  var import_react9 = __toESM(require_react_shim(), 1);

  // src/components/MapaUnidad.tsx
  var import_react8 = __toESM(require_react_shim(), 1);
  function MapaUnidad({ lat, lng }) {
    const query = encodeURIComponent("Robotic | Nicaragua, Managua 11185");
    const mapUrl = `https://maps.google.com/maps?q=${query}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
    return /* @__PURE__ */ import_react8.default.createElement("div", { className: "w-full h-[400px] overflow-hidden" }, /* @__PURE__ */ import_react8.default.createElement(
      "iframe",
      {
        title: "Ubicaci\xF3n de Oficinas",
        src: mapUrl,
        className: "w-full h-full border-none",
        allowFullScreen: true,
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade"
      }
    ));
  }

  // src/components/ContactoView.tsx
  var countryPrefixes = [
    { code: "+505", name: "Nicaragua (505)" },
    { code: "+1", name: "USA/Canada (1)" },
    { code: "+52", name: "M\xE9xico (52)" },
    { code: "+506", name: "Costa Rica (506)" },
    { code: "+503", name: "El Salvador (503)" },
    { code: "+502", name: "Guatemala (502)" },
    { code: "+504", name: "Honduras (504)" },
    { code: "+507", name: "Panam\xE1 (507)" },
    { code: "+57", name: "Colombia (57)" },
    { code: "+58", name: "Venezuela (58)" },
    { code: "+51", name: "Per\xFA (51)" },
    { code: "+54", name: "Argentina (54)" },
    { code: "+56", name: "Chile (56)" },
    { code: "+55", name: "Brasil (55)" },
    { code: "+34", name: "Espa\xF1a (34)" },
    { code: "+593", name: "Ecuador (593)" },
    { code: "+591", name: "Bolivia (591)" },
    { code: "+595", name: "Paraguay (595)" },
    { code: "+598", name: "Uruguay (598)" },
    { code: "+1-809", name: "Rep. Dominicana (1)" }
  ];
  function ContactoView() {
    const [nombre, setNombre] = (0, import_react9.useState)("");
    const [email, setEmail] = (0, import_react9.useState)("");
    const [prefijo, setPrefijo] = (0, import_react9.useState)("+505");
    const [telefono, setTelefono] = (0, import_react9.useState)("");
    const [pais, setPais] = (0, import_react9.useState)("");
    const [tipoNegocio, setTipoNegocio] = (0, import_react9.useState)("");
    const [mensaje, setMensaje] = (0, import_react9.useState)("");
    const [submitting, setSubmitting] = (0, import_react9.useState)(false);
    const [success, setSuccess] = (0, import_react9.useState)(false);
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbweqLHm8qdjTcbpXX5MIvs9dWpWfNNcfwopt4sIVaQXbWEDq6BHmRqZ93eiXLFURkjb/exec";
    /* TG_TOKEN removed for security - Managed via Google Apps Script */
    /* TG_CHAT_ID removed for security */
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!nombre || !email || !telefono || !mensaje) return;
      setSubmitting(true); if(window.showCustomLoading) window.showCustomLoading();
      
      const mensajeCombinado = `[País: ${pais || 'No especificado'} | Negocio: ${tipoNegocio || 'No especificado'}]\n\n${mensaje}`;
      const datos = {
        tipo_formulario: "contacto_web",
        nombre,
        email,
        telefono: `${prefijo} ${telefono}`,
        mensaje: mensajeCombinado,
        servicio: "Consulta Web",
        recaptcha_token: await window.getRecaptchaToken()
      };
      try {
        await fetch(SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(datos)
        });
      } catch (err) {
        console.warn("Failed Google Sheets post, proceeding:", err);
      }
      setSubmitting(false);
      setSuccess(true);
      if(window.showCustomSuccess) window.showCustomSuccess();
    };
    const handleReset = () => {
      setNombre("");
      setEmail("");
      setPrefijo("+505");
      setTelefono("");
      setPais("");
      setTipoNegocio("");
      setMensaje("");
      setSuccess(false);
    };
    const serviceCategories = [
      { title: "Soporte T\xE9cnico", desc: "Asistencia remota e in-situ para tus redes, computadoras macOS y sistemas empresariales.", icon: "\u{1F6E0}\uFE0F" },
      { title: "Consultor\xEDa de IA", desc: "Dise\xF1o estrat\xE9gico de asistentes conversacionales para tu flujo de ventas.", icon: "\u{1F4A1}" },
      { title: "Soporte Comercial", desc: "Atenci\xF3n comercial dedicada para cotizar proyectos web y sistemas a medida.", icon: "\u{1F4BC}" },
      { title: "Capacitaciones", desc: "Acompa\xF1amiento en el entrenamiento del equipo para la administraci\xF3n de los bots.", icon: "\u{1F393}" }
    ];
    return /* @__PURE__ */ import_react9.default.createElement("div", { id: "contacto-view", className: "w-full" }, /* @__PURE__ */ import_react9.default.createElement("main", { className: "max-w-4xl mx-auto pt-16 pb-12 text-center px-4" }, /* @__PURE__ */ import_react9.default.createElement("span", { className: "inline-block text-[11px] font-bold tracking-[0.2em] text-slate-500 uppercase border border-slate-200 px-6 py-2 rounded-full bg-slate-50 mb-2" }, "Ponte en contacto"), /* @__PURE__ */ import_react9.default.createElement("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mt-6 mb-4 min-h-[160px] sm:min-h-[120px] md:min-h-[80px] flex items-center justify-center w-full leading-[1.3]" }, /* @__PURE__ */ import_react9.default.createElement("span", { className: "inline" }, "Cu\xE9ntanos en qu\xE9 podemos ayudarte")), /* @__PURE__ */ import_react9.default.createElement("p", { className: "text-slate-500 max-w-xl mx-auto leading-relaxed text-xs sm:text-sm" }, "Nuestro equipo t\xE9cnico est\xE1 listo para resolver tus inquietudes operativas, automatizar tu CRM o programar tu videoconferencia personalizada.")), /* @__PURE__ */ import_react9.default.createElement("section", { className: "max-w-3xl mx-auto px-4 mb-20" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm" }, !success ? /* @__PURE__ */ import_react9.default.createElement("form", { onSubmit: handleSubmit, className: "space-y-6" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" }, /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide" }, "Tu nombre"), /* @__PURE__ */ import_react9.default.createElement(
      "input",
      {
        type: "text",
        value: nombre,
        onChange: (e) => setNombre(e.target.value),
        placeholder: "Nombre completo",
        className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition",
        required: true
      }
    )), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide" }, "Tu email"), /* @__PURE__ */ import_react9.default.createElement(
      "input",
      {
        type: "email",
        value: email,
        onChange: (e) => setEmail(e.target.value),
        placeholder: "tu@email.com",
        className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition",
        required: true
      }
    ))), /* @__PURE__ */ import_react9.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 pt-2" }, /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide" }, "Pa\xEDs"), /* @__PURE__ */ import_react9.default.createElement(
      "select",
      {
        value: pais,
        onChange: (e) => setPais(e.target.value),
        className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition text-slate-800",
        required: true
      },
      /* @__PURE__ */ import_react9.default.createElement("option", { value: "" }, "Selecciona tu pa\xEDs"),
      /* @__PURE__ */ import_react9.default.createElement("option", { value: "Nicaragua" }, "Nicaragua"),
      /* @__PURE__ */ import_react9.default.createElement("option", { value: "M\xE9xico" }, "M\xE9xico"),
      /* @__PURE__ */ import_react9.default.createElement("option", { value: "Colombia" }, "Colombia"),
      /* @__PURE__ */ import_react9.default.createElement("option", { value: "Costa Rica" }, "Costa Rica"),
      /* @__PURE__ */ import_react9.default.createElement("option", { value: "Panam\xE1" }, "Panam\xE1"),
      /* @__PURE__ */ import_react9.default.createElement("option", { value: "Honduras" }, "Honduras"),
      /* @__PURE__ */ import_react9.default.createElement("option", { value: "El Salvador" }, "El Salvador"),
      /* @__PURE__ */ import_react9.default.createElement("option", { value: "Guatemala" }, "Guatemala"),
      /* @__PURE__ */ import_react9.default.createElement("option", { value: "Otro" }, "Otro")
    )), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide" }, "Tipo de Negocio"), /* @__PURE__ */ import_react9.default.createElement(
      "select",
      {
        value: tipoNegocio,
        onChange: (e) => setTipoNegocio(e.target.value),
        className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition text-slate-800",
        required: true
      },
      /* @__PURE__ */ import_react9.default.createElement("option", { value: "" }, "Selecciona tipo"),
      /* @__PURE__ */ import_react9.default.createElement("option", { value: "Emprendimiento / Startup" }, "Emprendimiento / Startup"),
      /* @__PURE__ */ import_react9.default.createElement("option", { value: "PYME / Comercio" }, "PYME / Comercio"),
      /* @__PURE__ */ import_react9.default.createElement("option", { value: "Empresa Corporativa" }, "Empresa Corporativa"),
      /* @__PURE__ */ import_react9.default.createElement("option", { value: "Instituci\xF3n / ONG" }, "Instituci\xF3n / ONG"),
      /* @__PURE__ */ import_react9.default.createElement("option", { value: "Independiente / Freelance" }, "Independiente / Freelance"),
      /* @__PURE__ */ import_react9.default.createElement("option", { value: "Otro" }, "Otro")
    ))), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide" }, "N\xFAmero de Tel\xE9fono"), /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex bg-slate-50 border border-slate-200 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-200 overflow-hidden" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "relative flex items-center bg-slate-100/50 border-r border-slate-200 shrink-0" }, /* @__PURE__ */ import_react9.default.createElement(
      "select",
      {
        value: prefijo,
        onChange: (e) => setPrefijo(e.target.value),
        className: "appearance-none bg-transparent pl-4 pr-10 py-3 text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer h-full"
      },
      countryPrefixes.map((pref, idx) => /* @__PURE__ */ import_react9.default.createElement("option", { key: idx, value: pref.code }, pref.code))
    ), /* @__PURE__ */ import_react9.default.createElement("div", { className: "absolute right-3.5 pointer-events-none text-slate-500" }, /* @__PURE__ */ import_react9.default.createElement("svg", { className: "w-3.5 h-3.5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ import_react9.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", d: "M19 9l-7 7-7-7" })))), /* @__PURE__ */ import_react9.default.createElement(
      "input",
      {
        type: "tel",
        value: telefono,
        onChange: (e) => setTelefono(e.target.value),
        placeholder: "8888 8888",
        className: "w-full bg-transparent px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none border-none",
        required: true
      }
    ))), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide" }, "Mensaje"), /* @__PURE__ */ import_react9.default.createElement(
      "textarea",
      {
        value: mensaje,
        onChange: (e) => setMensaje(e.target.value),
        rows: 5,
        placeholder: "\xBFEn qu\xE9 podemos ayudarte?",
        className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition",
        required: true
      }
    ), /* @__PURE__ */ import_react9.default.createElement("div", { className: "text-[10px] text-slate-400 mt-2" }, mensaje.length, " / 2000 caracteres (m\xEDn. 10)")), /* @__PURE__ */ import_react9.default.createElement("div", { className: "text-center" }, /* @__PURE__ */ import_react9.default.createElement(
      "button",
      {
        type: "submit",
        disabled: submitting,
        className: "bg-blue-600 text-white px-10 py-3 rounded-xl font-bold shadow-md shadow-blue-500/10 hover:bg-blue-700 transition duration-200 cursor-pointer text-sm w-full sm:w-auto"
      },
      submitting ? /* @__PURE__ */ import_react9.default.createElement("span", { className: "flex items-center justify-center gap-2" }, /* @__PURE__ */ import_react9.default.createElement(LoaderCircle, { className: "w-4 h-4 animate-spin" }), "Enviando Mensaje...") : "Enviar mensaje"
    ))) : /* @__PURE__ */ import_react9.default.createElement("div", { className: "text-center py-10 animate-in fade-in zoom-in-95 duration-500" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100" }, /* @__PURE__ */ import_react9.default.createElement("img", { src: "./robotic.jpeg", alt: "Logo", className: "w-12 h-12 object-contain" })), /* @__PURE__ */ import_react9.default.createElement("h2", { className: "text-3xl font-black text-slate-800 tracking-tight" }, "\xA1Solicitud Recibida!"), /* @__PURE__ */ import_react9.default.createElement("div", { className: "bg-white border border-slate-100 shadow-xl shadow-blue-900/5 rounded-3xl p-6 md:p-8 my-8 text-left text-sm space-y-5 max-w-md mx-auto relative overflow-hidden" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0A3E62] to-blue-400" }), /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex items-start gap-4" }, /* @__PURE__ */ import_react9.default.createElement("span", { className: "text-xl shrink-0" }, "\u{1F464}"), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("p", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5" }, "Nombre Completo"), /* @__PURE__ */ import_react9.default.createElement("p", { className: "text-slate-800 font-semibold" }, nombre))), /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex items-start gap-4" }, /* @__PURE__ */ import_react9.default.createElement(Mail, { className: "w-5 h-5 text-[#0A3E62] shrink-0 mt-0.5" }), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("p", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5" }, "Correo Electr\xF3nico"), /* @__PURE__ */ import_react9.default.createElement("p", { className: "text-slate-800 font-semibold" }, email))), /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex items-start gap-4" }, /* @__PURE__ */ import_react9.default.createElement(Phone, { className: "w-5 h-5 text-[#0A3E62] shrink-0 mt-0.5" }), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("p", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5" }, "Tel\xE9fono de Contacto"), /* @__PURE__ */ import_react9.default.createElement("p", { className: "text-slate-800 font-semibold" }, prefijo, " ", telefono))), /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex items-start gap-4" }, /* @__PURE__ */ import_react9.default.createElement(MessageSquare, { className: "w-5 h-5 text-[#0A3E62] shrink-0 mt-0.5" }), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("p", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5" }, "Mensaje"), /* @__PURE__ */ import_react9.default.createElement("p", { className: "text-slate-600 italic leading-relaxed line-clamp-3" }, "\"", mensaje, "\"")))), /* @__PURE__ */ import_react9.default.createElement("p", { className: "text-[#0A3E62] font-black text-lg" }, "\xA1Gracias por confiar en Robotic!"), /* @__PURE__ */ import_react9.default.createElement("p", { className: "text-slate-500 text-sm mt-2 max-w-sm mx-auto leading-relaxed" }, "Tu informaci\xF3n se ha guardado correctamente. Uno de nuestros ingenieros se pondr\xE1 en contacto contigo a la brevedad."), /* @__PURE__ */ import_react9.default.createElement(
      "button",
      {
        onClick: handleReset,
        className: "mt-8 bg-slate-900 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-[#0A3E62] hover:-translate-y-0.5 transition duration-200 cursor-pointer text-sm flex items-center justify-center gap-2 mx-auto"
      },
      /* @__PURE__ */ import_react9.default.createElement(RefreshCw, { className: "w-4 h-4" }),
      "Enviar Otro Mensaje"
    )))), /* @__PURE__ */ import_react9.default.createElement("section", { className: "max-w-7xl mx-auto px-4 mb-24" }, /* @__PURE__ */ import_react9.default.createElement("h2", { className: "text-2xl sm:text-3xl font-extrabold text-slate-800 text-center mb-10 tracking-tight" }, "Nuestros Canales de Apoyo"), /* @__PURE__ */ import_react9.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" }, serviceCategories.map((item, idx) => /* @__PURE__ */ import_react9.default.createElement("div", { key: idx, className: "bg-white border border-slate-100 p-5 rounded-3xl shadow-sm hover:shadow-md transition duration-200" }, /* @__PURE__ */ import_react9.default.createElement("span", { className: "text-3xl block mb-3" }, item.icon), /* @__PURE__ */ import_react9.default.createElement("h3", { className: "text-base font-bold text-slate-800 mb-1" }, item.title), /* @__PURE__ */ import_react9.default.createElement("p", { className: "text-slate-500 text-xs leading-relaxed" }, item.desc))))), /* @__PURE__ */ import_react9.default.createElement("section", { className: "max-w-5xl mx-auto px-4 mb-24" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "text-center mb-8" }, /* @__PURE__ */ import_react9.default.createElement("h2", { className: "text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight" }, "Nuestra Ubicaci\xF3n Central"), /* @__PURE__ */ import_react9.default.createElement("p", { className: "text-slate-500 text-xs sm:text-sm mt-1" }, "Vis\xEDtanos o programa una reuni\xF3n en nuestras oficinas en Managua, Nicaragua.")), /* @__PURE__ */ import_react9.default.createElement("div", { className: "rounded-3xl overflow-hidden border border-slate-100 shadow-sm bg-slate-100 min-h-[400px]" }, /* @__PURE__ */ import_react9.default.createElement(MapaUnidad, { lat: 12.1298775, lng: -86.2216099 }))));
  }

  // src/components/VideoconferenciaModal.tsx
  var import_react11 = __toESM(require_react_shim(), 1);
  function VideoconferenciaModal({ onClose }) {
    const [step, setStep] = (0, import_react11.useState)("protocolo");
    const [nombre, setNombre] = (0, import_react11.useState)("");
    const [email, setEmail] = (0, import_react11.useState)("");
    const [asunto, setAsunto] = (0, import_react11.useState)("");
    const [isCaptchaChecked, setIsCaptchaChecked] = (0, import_react11.useState)(false);
    const [loading, setLoading] = (0, import_react11.useState)(false);
    const URL_MEET = "https://meet.google.com/egd-dabj-qpj";
    /* TG_TOKEN removed for security */
    /* TG_CHAT_ID removed for security */
    const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbweqLHm8qdjTcbpXX5MIvs9dWpWfNNcfwopt4sIVaQXbWEDq6BHmRqZ93eiXLFURkjb/exec";
    const handleSubmitTicket = async (e) => {
      e.preventDefault();
      if (!nombre || !email || !asunto) return;
      setLoading(true); if(window.showCustomLoading) window.showCustomLoading();
      const textTelegram = `\u{1F6A8} *NUEVO TICKET DE SOPORTE - VIDEOCONFERENCIA*

\u{1F464} *Nombre:* ${nombre}
\u{1F4E7} *Email:* ${email}
\u{1F4DD} *Asunto:* ${asunto}

\u{1F517} *Enlace a la sala:* ${URL_MEET}`;
      try {
        await fetch(GOOGLE_SHEETS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            recaptcha_token: await window.getRecaptchaToken(),
            tipo_formulario: "videoconferencia",
            nombre,
            email,
            mensaje: asunto,
            servicio: "Videoconferencia de Soporte"
          })
        });
      } catch (err) {
        console.warn("Google Sheets save skipped/failed due to network:", err);
      }
      /* Telegram notification delegated to Google Apps Script */
      setLoading(false);
      if(window.showCustomSuccess) window.showCustomSuccess();
      setStep("captcha");
    };
    const handleCaptchaSubmit = () => {
      if (!isCaptchaChecked) return;
      setStep("waiting");
      setTimeout(() => {
        window.open(URL_MEET, "_blank");
      }, 2e3);
    };
    return /* @__PURE__ */ import_react11.default.createElement(
      "div",
      {
        className: "fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200",
        onClick: onClose
      },
      /* @__PURE__ */ import_react11.default.createElement(
        "div",
        {
          className: "relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto flex flex-col animate-in zoom-in-95 duration-200",
          onClick: (e) => e.stopPropagation()
        },
        /* @__PURE__ */ import_react11.default.createElement(
          "button",
          {
            onClick: onClose,
            className: "absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-50 transition duration-200 z-10 cursor-pointer"
          },
          /* @__PURE__ */ import_react11.default.createElement(X, { className: "w-5 h-5" })
        ),
        step === "protocolo" && /* @__PURE__ */ import_react11.default.createElement("div", { className: "p-6 sm:p-8" }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "flex flex-col items-center text-center mb-6" }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 text-blue-600 shadow-inner" }, /* @__PURE__ */ import_react11.default.createElement(Shield, { className: "w-8 h-8" })), /* @__PURE__ */ import_react11.default.createElement("h2", { className: "text-2xl font-bold text-slate-800" }, "Protocolo de Sesi\xF3n"), /* @__PURE__ */ import_react11.default.createElement("p", { className: "text-xs text-slate-400 mt-1" }, "Garantizando la mejor calidad de soporte")), /* @__PURE__ */ import_react11.default.createElement("div", { className: "space-y-4 mb-8" }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100" }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "text-xl shrink-0 mt-0.5" }, "\u{1F4A1}"), /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement("h4", { className: "font-bold text-slate-800 text-sm" }, "Entorno Iluminado"), /* @__PURE__ */ import_react11.default.createElement("p", { className: "text-slate-500 text-xs mt-0.5" }, "Utilice un espacio con buena iluminaci\xF3n y sin ruidos fuertes de fondo."))), /* @__PURE__ */ import_react11.default.createElement("div", { className: "flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100" }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "text-xl shrink-0 mt-0.5" }, "\u{1F399}\uFE0F"), /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement("h4", { className: "font-bold text-slate-800 text-sm" }, "Audio y Video Obligatorios"), /* @__PURE__ */ import_react11.default.createElement("p", { className: "text-slate-500 text-xs mt-0.5" }, "Es indispensable encender su c\xE1mara y disponer de un micr\xF3fono funcional para recibir soporte."))), /* @__PURE__ */ import_react11.default.createElement("div", { className: "flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100" }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "text-xl shrink-0 mt-0.5" }, "\u{1F512}"), /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement("h4", { className: "font-bold text-slate-800 text-sm" }, "Privacidad y Grabaci\xF3n"), /* @__PURE__ */ import_react11.default.createElement("p", { className: "text-slate-500 text-xs mt-0.5" }, "La videollamada ser\xE1 grabada con fines de auditor\xEDa, calidad y seguridad corporativa.")))), /* @__PURE__ */ import_react11.default.createElement("div", { className: "flex flex-col sm:flex-row gap-3" }, /* @__PURE__ */ import_react11.default.createElement(
          "button",
          {
            onClick: () => setStep("form"),
            className: "flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition duration-200 shadow-md shadow-blue-500/10 cursor-pointer text-center text-sm"
          },
          "Aceptar y Continuar"
        ), /* @__PURE__ */ import_react11.default.createElement(
          "button",
          {
            onClick: onClose,
            className: "sm:w-32 border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold py-3 px-6 rounded-xl transition duration-200 cursor-pointer text-center text-sm"
          },
          "Cerrar"
        ))),
        step === "form" && /* @__PURE__ */ import_react11.default.createElement("div", { className: "p-6 sm:p-8" }, /* @__PURE__ */ import_react11.default.createElement(
          "button",
          {
            onClick: () => setStep("protocolo"),
            className: "flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition duration-150 mb-6 cursor-pointer"
          },
          /* @__PURE__ */ import_react11.default.createElement(ArrowLeft, { className: "w-3.5 h-3.5" }),
          " Volver"
        ), /* @__PURE__ */ import_react11.default.createElement("div", { className: "mb-6" }, /* @__PURE__ */ import_react11.default.createElement("span", { className: "bg-blue-50 text-blue-600 text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full" }, "Paso 2 de 3"), /* @__PURE__ */ import_react11.default.createElement("h2", { className: "text-2xl font-bold text-slate-800 mt-2" }, "Datos del Ticket"), /* @__PURE__ */ import_react11.default.createElement("p", { className: "text-slate-500 text-xs mt-0.5" }, "Por favor, detalla tu consulta para asignarte al ingeniero adecuado.")), /* @__PURE__ */ import_react11.default.createElement("form", { onSubmit: handleSubmitTicket, className: "space-y-4" }, /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1.5" }, "Nombre Completo"), /* @__PURE__ */ import_react11.default.createElement(
          "input",
          {
            type: "text",
            value: nombre,
            onChange: (e) => setNombre(e.target.value),
            placeholder: "Ej: Jordan Hern\xE1ndez",
            className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition",
            required: true
          }
        )), /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1.5" }, "Correo Electr\xF3nico"), /* @__PURE__ */ import_react11.default.createElement(
          "input",
          {
            type: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: "usuario@correo.com",
            className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition",
            required: true
          }
        )), /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1.5" }, "\xBFEn qu\xE9 podemos ayudarte?"), /* @__PURE__ */ import_react11.default.createElement(
          "textarea",
          {
            value: asunto,
            onChange: (e) => setAsunto(e.target.value),
            rows: 3,
            placeholder: "Describe tu consulta t\xE9cnica de forma resumida...",
            className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition",
            required: true
          }
        )), /* @__PURE__ */ import_react11.default.createElement(
          "button",
          {
            type: "submit",
            disabled: loading,
            className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition duration-200 shadow-md shadow-blue-500/10 flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:opacity-50 text-sm"
          },
          loading ? /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement(LoaderCircle, { className: "w-4 h-4 animate-spin" }), "Enviando ticket...") : /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, "Generar Ticket de Acceso", /* @__PURE__ */ import_react11.default.createElement(ArrowRight, { className: "w-4 h-4" }))
        ))),
        step === "captcha" && /* @__PURE__ */ import_react11.default.createElement("div", { className: "p-6 sm:p-8" }, /* @__PURE__ */ import_react11.default.createElement(
          "button",
          {
            onClick: () => setStep("form"),
            className: "flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition duration-150 mb-6 cursor-pointer"
          },
          /* @__PURE__ */ import_react11.default.createElement(ArrowLeft, { className: "w-3.5 h-3.5" }),
          " Volver"
        ), /* @__PURE__ */ import_react11.default.createElement("div", { className: "mb-6" }, /* @__PURE__ */ import_react11.default.createElement("span", { className: "bg-blue-50 text-blue-600 text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full" }, "Paso 3 de 3"), /* @__PURE__ */ import_react11.default.createElement("h2", { className: "text-2xl font-bold text-slate-800 mt-2" }, "Control de Seguridad"), /* @__PURE__ */ import_react11.default.createElement("p", { className: "text-slate-500 text-xs mt-0.5" }, "Verifica tu sesi\xF3n para acceder al canal de videoconferencia.")), /* @__PURE__ */ import_react11.default.createElement("div", { className: "bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-center justify-between mb-8 shadow-inner" }, /* @__PURE__ */ import_react11.default.createElement("label", { className: "flex items-center gap-3 cursor-pointer select-none" }, /* @__PURE__ */ import_react11.default.createElement(
          "input",
          {
            type: "checkbox",
            checked: isCaptchaChecked,
            onChange: (e) => setIsCaptchaChecked(e.target.checked),
            className: "w-6 h-6 rounded border-slate-300 text-blue-600 focus:ring-blue-500/30 cursor-pointer"
          }
        ), /* @__PURE__ */ import_react11.default.createElement("span", { className: "text-sm font-semibold text-slate-700" }, "No soy un robot")), /* @__PURE__ */ import_react11.default.createElement("div", { className: "flex flex-col items-center" }, /* @__PURE__ */ import_react11.default.createElement(
          "img",
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/a/ad/RecaptchaLogo.svg",
            alt: "reCAPTCHA logo",
            className: "w-8 h-8 object-contain"
          }
        ), /* @__PURE__ */ import_react11.default.createElement("span", { className: "text-[9px] text-slate-400 mt-1" }, "reCAPTCHA"))), /* @__PURE__ */ import_react11.default.createElement(
          "button",
          {
            onClick: handleCaptchaSubmit,
            disabled: !isCaptchaChecked,
            className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition duration-200 shadow-md shadow-blue-500/15 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 text-sm"
          },
          "Ingresar a Sala",
          /* @__PURE__ */ import_react11.default.createElement(Video, { className: "w-4 h-4" })
        )),
        step === "waiting" && /* @__PURE__ */ import_react11.default.createElement("div", { className: "p-8 text-center flex flex-col items-center justify-center min-h-[350px]" }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "relative mb-6" }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "w-16 h-16 rounded-full border-4 border-slate-100 border-t-blue-600 animate-spin" }), /* @__PURE__ */ import_react11.default.createElement(Video, { className: "w-6 h-6 text-blue-600 absolute inset-0 m-auto animate-pulse" })), /* @__PURE__ */ import_react11.default.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-2" }, "Conectando con un Ingeniero..."), /* @__PURE__ */ import_react11.default.createElement("p", { className: "text-slate-500 text-xs max-w-sm leading-relaxed mb-6" }, "Estamos preparando tu sala privada de soporte t\xE9cnico en Google Meet. Por favor espera unos instantes."), /* @__PURE__ */ import_react11.default.createElement("div", { className: "p-4 rounded-xl bg-blue-50 border border-blue-100/50 text-center space-y-3 w-full" }, /* @__PURE__ */ import_react11.default.createElement("p", { className: "text-xs text-blue-700 font-semibold" }, "\xBFLa videollamada no se abri\xF3 autom\xE1ticamente?"), /* @__PURE__ */ import_react11.default.createElement(
          "a",
          {
            href: URL_MEET,
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-lg text-xs transition duration-200 shadow-sm cursor-pointer"
          },
          "Ingresar Manualmente",
          /* @__PURE__ */ import_react11.default.createElement(Video, { className: "w-3.5 h-3.5" })
        )))
      )
    );
  }

  // src/components/PrivacyModal.tsx
  var import_react12 = __toESM(require_react_shim(), 1);
  function PrivacyModal({ onClose }) {
    return /* @__PURE__ */ import_react12.default.createElement(
      "div",
      {
        className: "fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200",
        onClick: onClose
      },
      /* @__PURE__ */ import_react12.default.createElement(
        "div",
        {
          className: "relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-200",
          onClick: (e) => e.stopPropagation()
        },
        /* @__PURE__ */ import_react12.default.createElement("div", { className: "flex items-center justify-between p-6 border-b border-slate-100" }, /* @__PURE__ */ import_react12.default.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ import_react12.default.createElement(
          "img",
          {
            src: "./robotic.jpeg",
            alt: "Robotic Logo",
            className: "h-9 w-auto object-contain rounded",
            onError: (e) => {
              e.target.src = "./robotic.jpeg";
            }
          }
        ), /* @__PURE__ */ import_react12.default.createElement("h2", { className: "text-xl font-bold text-slate-800" }, "Pol\xEDtica de Privacidad")), /* @__PURE__ */ import_react12.default.createElement(
          "button",
          {
            onClick: onClose,
            className: "text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-50 transition duration-200 cursor-pointer"
          },
          /* @__PURE__ */ import_react12.default.createElement(X, { className: "w-5 h-5" })
        )),
        /* @__PURE__ */ import_react12.default.createElement("div", { className: "flex-1 overflow-y-auto p-6 space-y-6 text-sm text-slate-600 leading-relaxed scrollbar-thin" }, /* @__PURE__ */ import_react12.default.createElement("p", { className: "text-xs text-slate-400" }, /* @__PURE__ */ import_react12.default.createElement("strong", null, "\xDAltima actualizaci\xF3n:"), " 2026 \xB7 Robotic Latam"), /* @__PURE__ */ import_react12.default.createElement("p", null, "Tus datos est\xE1n protegidos bajo nuestras normativas de seguridad digital. En ", /* @__PURE__ */ import_react12.default.createElement("strong", null, "Robotic Latam"), ", valoramos tu privacidad y nos comprometemos a salvaguardar toda la informaci\xF3n que recopilamos a trav\xE9s de nuestras plataformas web, formularios de contacto y chats integrados."), /* @__PURE__ */ import_react12.default.createElement("div", null, /* @__PURE__ */ import_react12.default.createElement("h3", { className: "font-bold text-slate-800 text-base mb-2" }, "1. Datos recopilados"), /* @__PURE__ */ import_react12.default.createElement("p", null, "Recopilamos informaci\xF3n b\xE1sica de contacto como nombre, direcci\xF3n de correo electr\xF3nico, n\xFAmero de tel\xE9fono de WhatsApp y el contenido de tu consulta para procesar tus solicitudes t\xE9cnicas o comerciales.")), /* @__PURE__ */ import_react12.default.createElement("div", null, /* @__PURE__ */ import_react12.default.createElement("h3", { className: "font-bold text-slate-800 text-base mb-2" }, "2. Uso de la informaci\xF3n"), /* @__PURE__ */ import_react12.default.createElement("p", null, "Toda la informaci\xF3n recabada se utiliza estrictamente para brindar soporte t\xE9cnico, responder a tus solicitudes comerciales, personalizar tu experiencia con nuestros chatbots automatizados y ponernos en contacto para sesiones programadas.")), /* @__PURE__ */ import_react12.default.createElement("div", null, /* @__PURE__ */ import_react12.default.createElement("h3", { className: "font-bold text-slate-800 text-base mb-2" }, "3. Interacciones y API Oficial"), /* @__PURE__ */ import_react12.default.createElement("p", null, "Nuestros sistemas de automatizaci\xF3n integran servicios oficiales respaldados por Meta (WhatsApp API) y n8n, lo que garantiza el cumplimiento de pol\xEDticas de protecci\xF3n de datos internacionales.")), /* @__PURE__ */ import_react12.default.createElement("div", null, /* @__PURE__ */ import_react12.default.createElement("h3", { className: "font-bold text-slate-800 text-base mb-2" }, "4. Transferencias y servicios de terceros"), /* @__PURE__ */ import_react12.default.createElement("p", null, "La plataforma puede integrar servicios externos como OpenAI y proveedores de computaci\xF3n en la nube autorizados. Tus datos nunca ser\xE1n vendidos o compartidos con fines publicitarios de terceros.")), /* @__PURE__ */ import_react12.default.createElement("div", { className: "p-4 bg-blue-50 rounded-xl border border-blue-100" }, /* @__PURE__ */ import_react12.default.createElement("h4", { className: "font-bold text-blue-800 mb-1" }, "\u{1F4F1} Canales de Atenci\xF3n Directa:"), /* @__PURE__ */ import_react12.default.createElement("p", { className: "text-blue-700" }, "WhatsApp: +505 8910 6157"), /* @__PURE__ */ import_react12.default.createElement("p", { className: "text-blue-700" }, "Email Directo: gerencia@roboticnic.com"))),
        /* @__PURE__ */ import_react12.default.createElement("div", { className: "p-6 border-t border-slate-100 flex justify-end bg-slate-50/50 rounded-b-3xl" }, /* @__PURE__ */ import_react12.default.createElement(
          "button",
          {
            onClick: onClose,
            className: "bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-md shadow-blue-500/10 transition duration-200 cursor-pointer"
          },
          "Entendido y Cerrar"
        ))
      )
    );
  }

  // src/App.tsx
  function App() {
    const [currentPage, setCurrentPage] = (0, import_react13.useState)("inicio");
    const [isPrivacyOpen, setIsPrivacyOpen] = (0, import_react13.useState)(false);
    const [isVideoOpen, setIsVideoOpen] = (0, import_react13.useState)(false);
    const renderActiveView = () => {
      switch (currentPage) {
        case "inicio":
          return /* @__PURE__ */ import_react13.default.createElement(
            InicioView,
            {
              onPageChange: setCurrentPage,
              onOpenModal: () => setIsVideoOpen(true)
            }
          );
        case "funcionalidades":
          return /* @__PURE__ */ import_react13.default.createElement(FuncionalidadesView, null);
        case "faq":
          return /* @__PURE__ */ import_react13.default.createElement(FaqView, null);
        case "contacto":
          return /* @__PURE__ */ import_react13.default.createElement(ContactoView, null);

        default:
          return /* @__PURE__ */ import_react13.default.createElement(
            InicioView,
            {
              onPageChange: setCurrentPage,
              onOpenModal: () => setIsVideoOpen(true)
            }
          );
      }
    };
    return /* @__PURE__ */ import_react13.default.createElement("div", { className: "min-h-screen bg-white text-slate-800 flex flex-col justify-between selection:bg-blue-500/10 selection:text-blue-600" }, /* @__PURE__ */ import_react13.default.createElement(
      Header,
      {
        currentPage,
        onPageChange: setCurrentPage,
        onOpenModal: () => setIsVideoOpen(true)
      }
    ), /* @__PURE__ */ import_react13.default.createElement("main", { className: "flex-grow animate-in fade-in duration-300" }, renderActiveView()), /* @__PURE__ */ import_react13.default.createElement(
      Footer,
      {
        onOpenPrivacy: (e) => {
          e.preventDefault();
          setIsPrivacyOpen(true);
        },
        onPageChange: setCurrentPage
      }
    ), isVideoOpen && /* @__PURE__ */ import_react13.default.createElement(VideoconferenciaModal, { onClose: () => setIsVideoOpen(false) }), isPrivacyOpen && /* @__PURE__ */ import_react13.default.createElement(PrivacyModal, { onClose: () => setIsPrivacyOpen(false) }));
  }

  // src/main.tsx
  
  import_client.default.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ import_react14.default.createElement(import_react14.default.StrictMode, null, /* @__PURE__ */ import_react14.default.createElement(App, null))
  );
})();
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/arrow-left.js:
lucide-react/dist/esm/icons/arrow-right.js:
lucide-react/dist/esm/icons/blocks.js:
lucide-react/dist/esm/icons/bot.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/chevron-down.js:
lucide-react/dist/esm/icons/chevron-right.js:
lucide-react/dist/esm/icons/circle-check-big.js:
lucide-react/dist/esm/icons/circle-check.js:
lucide-react/dist/esm/icons/circle-question-mark.js:
lucide-react/dist/esm/icons/cpu.js:
lucide-react/dist/esm/icons/globe.js:
lucide-react/dist/esm/icons/laptop.js:
lucide-react/dist/esm/icons/loader-circle.js:
lucide-react/dist/esm/icons/mail.js:
lucide-react/dist/esm/icons/map-pin.js:
lucide-react/dist/esm/icons/menu.js:
lucide-react/dist/esm/icons/message-square.js:
lucide-react/dist/esm/icons/phone.js:
lucide-react/dist/esm/icons/refresh-cw.js:
lucide-react/dist/esm/icons/search.js:
lucide-react/dist/esm/icons/send.js:
lucide-react/dist/esm/icons/shield-alert.js:
lucide-react/dist/esm/icons/shield.js:
lucide-react/dist/esm/icons/smartphone.js:
lucide-react/dist/esm/icons/sparkles.js:
lucide-react/dist/esm/icons/trending-up.js:
lucide-react/dist/esm/icons/video.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.546.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
