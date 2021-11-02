"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Products_View_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/View.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/SalesView.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SalesView.vue",
  data: function data() {
    return {
      product: [],
      transfer: []
    };
  },
  mounted: function mounted() {
    this.getProductDetail();
  },
  methods: {
    getProductDetail: function getProductDetail() {
      var _this = this;

      axios.get("/product/view/".concat(this.$route.params.id)).then(function (response) {
        _this.product = response.data.productsDetail;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Products/View.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Products/SalesView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SalesView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/View.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/Products/View.vue?vue&type=template&id=dac87f96&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Products/SalesView.vue?vue&type=template&id=dac87f96&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_dac87f96_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_dac87f96_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_dac87f96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SalesView.vue?vue&type=template&id=dac87f96&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/View.vue?vue&type=template&id=dac87f96&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/View.vue?vue&type=template&id=dac87f96&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/SalesView.vue?vue&type=template&id=dac87f96&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "tab-content" }, [
            _c(
              "div",
              { staticClass: "active tab-pane", attrs: { id: "transfers" } },
              [
                _c(
                  "table",
                  { staticClass: "table table-responsive-md table-bordered" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._l(_vm.filteredData, function(transfer, index) {
                      return _c(
                        "tbody",
                        [
                          _c("tr", [
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(_vm._s(index))
                            ])
                          ]),
                          _vm._v(" "),
                          _vm._l(transfer, function(t) {
                            return _c("tr", [
                              _c("td", {}),
                              _vm._v(" "),
                              _c("td", {})
                            ])
                          })
                        ],
                        2
                      )
                    })
                  ],
                  2
                )
              ]
            ),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3)
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header p-2" }, [
      _c("ul", { staticClass: "nav nav-pills" }, [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link active",
              attrs: { href: "#transfers", "data-toggle": "tab" }
            },
            [_vm._v("Transfers")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { href: "#sales", "data-toggle": "tab" }
            },
            [_vm._v("Sales")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { href: "#settings", "data-toggle": "tab" }
            },
            [_vm._v("Settings")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Date")]),
      _vm._v(" "),
      _c("th", [_vm._v("Quantity")]),
      _vm._v(" "),
      _c("th", [_vm._v("Branch name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Stock In")]),
      _vm._v(" "),
      _c("th", [_vm._v("Stock out")]),
      _vm._v(" "),
      _c("th", [_vm._v("Total")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tab-pane", attrs: { id: "sales" } }, [
      _c("div", { staticClass: "sales sales-inverse" }, [
        _c("div", { staticClass: "time-label" }, [
          _c("span", { staticClass: "bg-danger" }, [
            _vm._v("\n                      10 Feb. 2014\n                    ")
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("i", { staticClass: "fas fa-envelope bg-primary" }),
          _vm._v(" "),
          _c("div", { staticClass: "sales-item" }, [
            _c("span", { staticClass: "time" }, [
              _c("i", { staticClass: "far fa-clock" }),
              _vm._v(" 12:05")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "sales-header" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Support Team")]),
              _vm._v(" sent you an email")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "sales-body" }, [
              _vm._v(
                "\n                                        Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,\n                                        weebly ning heekya handango imeem plugg dopplr jibjab, movity\n                                        jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle\n                                        quora plaxo ideeli hulu weebly balihoo...\n                                    "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "sales-footer" }, [
              _c(
                "a",
                { staticClass: "btn btn-primary btn-sm", attrs: { href: "#" } },
                [_vm._v("Read more")]
              ),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "btn btn-danger btn-sm", attrs: { href: "#" } },
                [_vm._v("Delete")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("i", { staticClass: "fas fa-user bg-info" }),
          _vm._v(" "),
          _c("div", { staticClass: "sales-item" }, [
            _c("span", { staticClass: "time" }, [
              _c("i", { staticClass: "far fa-clock" }),
              _vm._v(" 5 mins ago")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "sales-header border-0" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Sarah Young")]),
              _vm._v(
                " accepted your friend request\n                                    "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("i", { staticClass: "fas fa-comments bg-warning" }),
          _vm._v(" "),
          _c("div", { staticClass: "sales-item" }, [
            _c("span", { staticClass: "time" }, [
              _c("i", { staticClass: "far fa-clock" }),
              _vm._v(" 27 mins ago")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "sales-header" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Jay White")]),
              _vm._v(" commented on your post")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "sales-body" }, [
              _vm._v(
                "\n                                        Take me to your leader!\n                                        Switzerland is small and neutral!\n                                        We are more like Germany, ambitious and misunderstood!\n                                    "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "sales-footer" }, [
              _c(
                "a",
                {
                  staticClass: "btn btn-warning btn-flat btn-sm",
                  attrs: { href: "#" }
                },
                [_vm._v("View comment")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "time-label" }, [
          _c("span", { staticClass: "bg-success" }, [
            _vm._v("\n                      3 Jan. 2014\n                    ")
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("i", { staticClass: "fas fa-camera bg-purple" }),
          _vm._v(" "),
          _c("div", { staticClass: "sales-item" }, [
            _c("span", { staticClass: "time" }, [
              _c("i", { staticClass: "far fa-clock" }),
              _vm._v(" 2 days ago")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "sales-header" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Mina Lee")]),
              _vm._v(" uploaded new photos")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "sales-body" }, [
              _c("img", {
                attrs: { src: "https://placehold.it/150x100", alt: "..." }
              }),
              _vm._v(" "),
              _c("img", {
                attrs: { src: "https://placehold.it/150x100", alt: "..." }
              }),
              _vm._v(" "),
              _c("img", {
                attrs: { src: "https://placehold.it/150x100", alt: "..." }
              }),
              _vm._v(" "),
              _c("img", {
                attrs: { src: "https://placehold.it/150x100", alt: "..." }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [_c("i", { staticClass: "far fa-clock bg-gray" })])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tab-pane", attrs: { id: "settings" } }, [
      _c("form", { staticClass: "form-horizontal" }, [
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            {
              staticClass: "col-sm-2 col-form-label",
              attrs: { for: "inputName" }
            },
            [_vm._v("Name")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-10" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "email", id: "inputName", placeholder: "Name" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            {
              staticClass: "col-sm-2 col-form-label",
              attrs: { for: "inputEmail" }
            },
            [_vm._v("Email")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-10" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "email", id: "inputEmail", placeholder: "Email" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            {
              staticClass: "col-sm-2 col-form-label",
              attrs: { for: "inputName2" }
            },
            [_vm._v("Name")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-10" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "inputName2", placeholder: "Name" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            {
              staticClass: "col-sm-2 col-form-label",
              attrs: { for: "inputExperience" }
            },
            [_vm._v("Experience")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-10" }, [
            _c("textarea", {
              staticClass: "form-control",
              attrs: { id: "inputExperience", placeholder: "Experience" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            {
              staticClass: "col-sm-2 col-form-label",
              attrs: { for: "inputSkills" }
            },
            [_vm._v("Skills")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-10" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "inputSkills", placeholder: "Skills" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c("div", { staticClass: "offset-sm-2 col-sm-10" }, [
            _c("div", { staticClass: "checkbox" }, [
              _c("label", [
                _c("input", { attrs: { type: "checkbox" } }),
                _vm._v(" I agree to the "),
                _c("a", { attrs: { href: "#" } }, [
                  _vm._v("terms and conditions")
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c("div", { staticClass: "offset-sm-2 col-sm-10" }, [
            _c(
              "button",
              { staticClass: "btn btn-danger", attrs: { type: "submit" } },
              [_vm._v("Submit")]
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/Products/View.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Products/SalesView.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View_vue_vue_type_template_id_dac87f96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SalesView.vue?vue&type=template&id=dac87f96&scoped=true& */ "./resources/js/components/Products/View.vue?vue&type=template&id=dac87f96&scoped=true&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SalesView.vue?vue&type=script&lang=js& */ "./resources/js/components/Products/View.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_dac87f96_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _View_vue_vue_type_template_id_dac87f96_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "dac87f96",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Products/SalesView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ })

}]);
