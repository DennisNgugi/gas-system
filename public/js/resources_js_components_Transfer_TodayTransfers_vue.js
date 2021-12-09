"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Transfer_TodayTransfers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Transfer/TodayTransfers.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Transfer/TodayTransfers.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_infinite_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-infinite-loading */ "./node_modules/vue-infinite-loading/dist/vue-infinite-loading.js");
/* harmony import */ var vue_infinite_loading__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_infinite_loading__WEBPACK_IMPORTED_MODULE_0__);
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
// import SearchComponent from '../Search/SearchComponent.vue';
// import {
//     EventBus
// } from '../../events/event-bus';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      search: '',
      transfers: [],
      page: 1,
      bottom: false
    };
  },
  // components: {
  //     SearchComponent
  // },
  computed: {
    filteredData: function filteredData() {
      var _this = this;

      return this.transfers.filter(function (item) {
        return item.created_at.toLowerCase().includes(_this.search.toLowerCase()) || item.branches.branch_name.toLowerCase().includes(_this.search.toLowerCase());
      });
    }
  },
  // created() {
  //     EventBus.$on('search', (value) => {
  //         this.search = value
  //     })
  // },
  methods: {
    // gasType(type){
    //     if(type === 'e'){
    //         return 'Empty'
    //     }else {
    //         return 'Outright'
    //     }
    // },
    infiniteHandler: function infiniteHandler($state) {
      setTimeout(function () {
        var _this2 = this;

        axios.get('/transfers/today?page=' + this.page).then(function (response) {
          if (response.data.transfers.data.length > 0) {
            // let lastPage = response.data.reciepts.last_page
            response.data.transfers.data.forEach(function (transfer) {
              _this2.transfers.push(transfer);
            });
            $state.loaded();
            _this2.page += 1;
          }
        })["catch"](function (e) {
          return console.log(e);
        });
      }.bind(this), 1000);
    } // This event bus is created to transfer the value of edit = true to the create component
    // emitEditValue(category) {
    //     EventBus.$emit('edit', this.edit, category)
    // },
    // disable(id) {
    //     swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         type: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //             if (result.value) {
    //           let uri = `/categories/${id}`;
    //           axios.post(uri).then(response => {
    //               this.$store.state.categories.splice(this.$store.state.categories.indexOf(id), 1);
    //               window.location.reload(false);
    //               //this.fetchData();
    //           });
    //             swal.fire(
    //                 'Deleted!',
    //                 'Category has been deleted.',
    //                 'success'
    //             )
    //         }
    //     }).
    //     catch(()=>{
    //       swal("Failed","There was something wrong","warning");
    //     })
    // }

  },
  components: {
    InfiniteLoading: (vue_infinite_loading__WEBPACK_IMPORTED_MODULE_0___default())
  }
});

/***/ }),

/***/ "./resources/js/components/Transfer/TodayTransfers.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Transfer/TodayTransfers.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodayTransfers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TodayTransfers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Transfer/TodayTransfers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodayTransfers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Transfer/TodayTransfers.vue?vue&type=template&id=14a4f760&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Transfer/TodayTransfers.vue?vue&type=template&id=14a4f760& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodayTransfers_vue_vue_type_template_id_14a4f760___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodayTransfers_vue_vue_type_template_id_14a4f760___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodayTransfers_vue_vue_type_template_id_14a4f760___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TodayTransfers.vue?vue&type=template&id=14a4f760& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Transfer/TodayTransfers.vue?vue&type=template&id=14a4f760&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Transfer/TodayTransfers.vue?vue&type=template&id=14a4f760&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Transfer/TodayTransfers.vue?vue&type=template&id=14a4f760& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "input-group mb-3" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.search,
              expression: "search"
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            autofocus: "",
            placeholder: "Search here .....",
            "aria-describedby": "basic-addon1"
          },
          domProps: { value: _vm.search },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.search = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              { staticClass: "table table-responsive-md table-bordered" },
              [
                _vm._m(2),
                _vm._v(" "),
                _vm._l(_vm.filteredData, function(transfer) {
                  return _c("tbody", { key: transfer.id }, [
                    _c("tr", [
                      _c("td", [_vm._v(_vm._s(transfer.created_at))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(transfer.stock_in))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(transfer.stock_out))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(transfer.products.product_name))
                      ]),
                      _vm._v(" "),
                      transfer.branches != null
                        ? _c("td", [
                            _vm._v(_vm._s(transfer.branches.branch_name))
                          ])
                        : _vm._e()
                    ])
                  ])
                }),
                _vm._v(" "),
                _c(
                  "infinite-loading",
                  {
                    attrs: { spinner: "spiral" },
                    on: {
                      distance: function($event) {
                        1
                      },
                      infinite: _vm.infiniteHandler
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "text-red",
                        attrs: { slot: "no-more" },
                        slot: "no-more"
                      },
                      [_vm._v("No more transfers")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "text-red",
                        attrs: { slot: "no-results" },
                        slot: "no-results"
                      },
                      [_vm._v("No more transfers")]
                    )
                  ]
                )
              ],
              2
            )
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
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-addon1" } },
        [_vm._v("Search")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Transfers")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { rowspan: "3", size: "10%" } }, [_vm._v("Day")])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", { attrs: { colspan: "2" } }, [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("Product name")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("Branch name")])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", [_vm._v("Stock In")]),
        _vm._v(" "),
        _c("th", [_vm._v("Stock Out")])
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

/***/ "./resources/js/components/Transfer/TodayTransfers.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Transfer/TodayTransfers.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TodayTransfers_vue_vue_type_template_id_14a4f760___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodayTransfers.vue?vue&type=template&id=14a4f760& */ "./resources/js/components/Transfer/TodayTransfers.vue?vue&type=template&id=14a4f760&");
/* harmony import */ var _TodayTransfers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodayTransfers.vue?vue&type=script&lang=js& */ "./resources/js/components/Transfer/TodayTransfers.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TodayTransfers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TodayTransfers_vue_vue_type_template_id_14a4f760___WEBPACK_IMPORTED_MODULE_0__.render,
  _TodayTransfers_vue_vue_type_template_id_14a4f760___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Transfer/TodayTransfers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ })

}]);