import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-EIFYCE3V.js";
import {
  createHotContext
} from "/build/_shared/chunk-XZEZJ3QX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/styles/global.css
var global_default = "/build/_assets/global-6JCHIXVA.css";

// app/course_form/course_form.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\course_form\\\\course_form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\course_form\\course_form.tsx"
  );
  import.meta.hot.lastModified = "1692900840903.527";
}
function CourseForm() {
  _s();
  const [courses, setCourses] = (0, import_react.useState)([{
    subject: "",
    course: ""
  }]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "button", value: "Add Course" }, void 0, false, {
      fileName: "app/course_form/course_form.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Desired Courses" }, void 0, false, {
        fileName: "app/course_form/course_form.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/course_form/course_form.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      courses.map((input, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, index, false, {
            fileName: "app/course_form/course_form.tsx",
            lineNumber: 46,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "column", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "subject", type: "text", placeholder: "Subject" }, void 0, false, {
            fileName: "app/course_form/course_form.tsx",
            lineNumber: 48,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/course_form/course_form.tsx",
            lineNumber: 47,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "column", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "course", type: "text", placeholder: "Course#" }, void 0, false, {
            fileName: "app/course_form/course_form.tsx",
            lineNumber: 51,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/course_form/course_form.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/course_form/course_form.tsx",
          lineNumber: 45,
          columnNumber: 16
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "submit", onClick: handleSubmit }, void 0, false, {
        fileName: "app/course_form/course_form.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/course_form/course_form.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/course_form/course_form.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/course_form/course_form.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s(CourseForm, "IfriRPkVcrDWBFIot5VbilKq41s=");
_c = CourseForm;
var _c;
$RefreshReg$(_c, "CourseForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
}
var links = () => {
  return [{
    rel: "stylesheet",
    href: global_default
  }];
};
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CourseForm, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c2 = App;
var _c2;
$RefreshReg$(_c2, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-UX432GMX.js.map
