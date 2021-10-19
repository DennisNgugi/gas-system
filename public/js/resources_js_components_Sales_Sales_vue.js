"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Sales_Sales_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/Sales.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/Sales.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      search: '',
      edit: true,
      showModal: false,
      sales: [],
      reciepts: [],
      page: 1,
      bottom: false
    };
  },
  mounted: function mounted() {//  this.$store.dispatch("fetchReciept")
  },
  computed: {
    filteredData: function filteredData() {
      var _this = this;

      return this.reciepts.filter(function (item) {
        return item.reciept_code.toLowerCase().includes(_this.search.toLowerCase()) || item.created_at.toLowerCase().includes(_this.search.toLowerCase());
      });
    }
  },
  methods: {
    infiniteHandler: function infiniteHandler($state) {
      setTimeout(function () {
        var _this2 = this;

        axios.get('/reciept?page=' + this.page).then(function (response) {
          if (response.data.reciepts.data.length > 0) {
            // let lastPage = response.data.reciepts.last_page
            response.data.reciepts.data.forEach(function (reciept) {
              _this2.reciepts.push(reciept);
            });
            $state.loaded();
            _this2.page += 1;
          }
        })["catch"](function (e) {
          return console.log(e);
        });
      }.bind(this), 1000);
    },
    disable: function disable(id) {
      var _this3 = this;

      swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.value) {
          var uri = "/reciept/".concat(id);
          axios.post(uri).then(function (response) {
            _this3.$store.state.reciepts.splice(_this3.$store.state.reciepts.indexOf(id), 1);

            window.location.reload(false); //this.fetchData();
          });
          swal.fire('Deleted!', 'Reciept has been deleted.', 'success');
        }
      })["catch"](function () {
        swal("Failed", "There was something wrong", "warning");
      });
    },
    // populate the modal with checkout detail
    recieptDetail: function recieptDetail(detail) {
      this.showModal = true;
      this.sales = detail;
    },
    closeModal: function closeModal() {
      this.showModal = false; // empty the modal

      this.sales.splice(0);
    }
  },
  // created() {
  //     EventBus.$on('search', (value) => {
  //         this.search = value
  //     })
  // },
  components: {
    InfiniteLoading: (vue_infinite_loading__WEBPACK_IMPORTED_MODULE_0___default())
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/Sales.vue?vue&type=style&index=0&id=9779a6e4&lang=css&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/Sales.vue?vue&type=style&index=0&id=9779a6e4&lang=css&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.modal-mask[data-v-9779a6e4] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    display: table;\n    transition: opacity .3s ease;\n}\n.modal-header[data-v-9779a6e4] {\n    background-color: #141820;\n}\n.modal-title[data-v-9779a6e4] {\n    color: #fff;\n}\n.close[data-v-9779a6e4] {\n    color: #fff;\n}\n.modal-wrapper[data-v-9779a6e4] {\n    display: table-cell;\n    vertical-align: middle;\n}\n.modal-body[data-v-9779a6e4] {\n    max-height: calc(100vh - 210px);\n    overflow-y: auto;\n}\n#card-details[data-v-9779a6e4] {\n    max-height: calc(100vh - 210px);\n    overflow-y: auto;\n}\n#product-details[data-v-9779a6e4] {\n    max-height: calc(100vh - 210px);\n    overflow-y: auto;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/Sales.vue?vue&type=style&index=0&id=9779a6e4&lang=css&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/Sales.vue?vue&type=style&index=0&id=9779a6e4&lang=css&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_style_index_0_id_9779a6e4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sales.vue?vue&type=style&index=0&id=9779a6e4&lang=css&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/Sales.vue?vue&type=style&index=0&id=9779a6e4&lang=css&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_style_index_0_id_9779a6e4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_style_index_0_id_9779a6e4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Sales/Sales.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Sales/Sales.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sales.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/Sales.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Sales/Sales.vue?vue&type=style&index=0&id=9779a6e4&lang=css&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Sales/Sales.vue?vue&type=style&index=0&id=9779a6e4&lang=css&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_style_index_0_id_9779a6e4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sales.vue?vue&type=style&index=0&id=9779a6e4&lang=css&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/Sales.vue?vue&type=style&index=0&id=9779a6e4&lang=css&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Sales/Sales.vue?vue&type=template&id=9779a6e4&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Sales/Sales.vue?vue&type=template&id=9779a6e4&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_template_id_9779a6e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_template_id_9779a6e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_template_id_9779a6e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sales.vue?vue&type=template&id=9779a6e4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/Sales.vue?vue&type=template&id=9779a6e4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/Sales.vue?vue&type=template&id=9779a6e4&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/Sales.vue?vue&type=template&id=9779a6e4&scoped=true& ***!
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
      _c("div", { staticClass: "card" }, [
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
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "table-responsive" }, [
            _c("table", { staticClass: "table table-nowrap mb-0" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.filteredData, function(reciept, index) {
                    return _c("tr", { key: reciept.id }, [
                      _c("td", [_vm._v(_vm._s(index + 1))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(reciept.reciept_code))]),
                      _vm._v(" "),
                      reciept.customers != null
                        ? _c("td", [
                            _vm._v(_vm._s(reciept.customers.customer_name))
                          ])
                        : _c("td", [_vm._v("Walk in")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(reciept.total_quantity))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(_vm._f("formatNumber")(reciept.total_amount))
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(_vm._f("formatNumber")(reciept.amount_paid))
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm._f("formatNumber")(reciept.balance)))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(reciept.users.name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(reciept.created_at))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-info btn-sm",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.recieptDetail(reciept.sales)
                                }
                              }
                            },
                            [_vm._v("View")]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            { staticClass: "btn btn-primary btn-sm" },
                            [_vm._v("Edit")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger btn-sm",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.disable(reciept.id)
                                }
                              }
                            },
                            [_vm._v("Delete")]
                          )
                        ],
                        1
                      )
                    ])
                  }),
                  _vm._v(" "),
                  _c(
                    "infinite-loading",
                    {
                      attrs: { spinner: "bubbles" },
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
                        [_vm._v("No more reciepts")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "text-red",
                          attrs: { slot: "no-results" },
                          slot: "no-results"
                        },
                        [_vm._v("No more reciepts")]
                      )
                    ]
                  )
                ],
                2
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.showModal
        ? _c(
            "div",
            [
              _c("transition", { attrs: { name: "modal" } }, [
                _c("div", { staticClass: "modal-mask" }, [
                  _c("div", { staticClass: "modal-wrapper" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "modal-dialog modal-lg modal-dialog-centered",
                        attrs: { role: "document" }
                      },
                      [
                        _c("div", { staticClass: "modal-content" }, [
                          _c("div", { staticClass: "modal-header" }, [
                            _c(
                              "h5",
                              {
                                staticClass: "modal-title",
                                attrs: { id: "checkoutModalLongTitle" }
                              },
                              [_vm._v("Sales")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "close",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.closeModal()
                                  }
                                }
                              },
                              [
                                _c(
                                  "span",
                                  { attrs: { "aria-hidden": "true" } },
                                  [_vm._v("×")]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "modal-body overflow-auto",
                              staticStyle: { "max-height": "400px" }
                            },
                            [
                              _c("div", { staticClass: "container-fluid" }, [
                                _c("div", { staticClass: "col-md-12" }, [
                                  _c(
                                    "div",
                                    { staticClass: "table-responsive" },
                                    [
                                      _c(
                                        "table",
                                        {
                                          staticClass: "table table-nowrap mb-0"
                                        },
                                        [
                                          _c("thead", [
                                            _c("tr", [
                                              _c("th", [_vm._v("#")]),
                                              _vm._v(" "),
                                              _c("th", [
                                                _vm._v("Product name")
                                              ]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Gas Type")]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Sale Type")]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Quantity")]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Price")]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Total")])
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "tbody",
                                            _vm._l(_vm.sales, function(
                                              checkout,
                                              index
                                            ) {
                                              return _c(
                                                "tr",
                                                { key: checkout.id },
                                                [
                                                  _c("td", [
                                                    _vm._v(_vm._s(index + 1))
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        checkout.products
                                                          .product_name
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(checkout.gas_type)
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(checkout.sale_type)
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(checkout.quantity)
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm._f("formatNumber")(
                                                          checkout.price
                                                        )
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm._f("formatNumber")(
                                                          checkout.total
                                                        )
                                                      )
                                                    )
                                                  ])
                                                ]
                                              )
                                            }),
                                            0
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "modal-footer" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-secondary",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.closeModal()
                                  }
                                }
                              },
                              [_vm._v("Close")]
                            )
                          ])
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ],
            1
          )
        : _vm._e()
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
      _c("h4", { staticClass: "card-title" }, [_vm._v("Reciepts")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Reciept code")]),
        _vm._v(" "),
        _c("th", [_vm._v("Customer name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total amount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Amount recieved")]),
        _vm._v(" "),
        _c("th", [_vm._v("Balance")]),
        _vm._v(" "),
        _c("th", [_vm._v("Payment mode")]),
        _vm._v(" "),
        _c("th", [_vm._v("Served by")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
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

/***/ "./resources/js/components/Sales/Sales.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Sales/Sales.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sales_vue_vue_type_template_id_9779a6e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sales.vue?vue&type=template&id=9779a6e4&scoped=true& */ "./resources/js/components/Sales/Sales.vue?vue&type=template&id=9779a6e4&scoped=true&");
/* harmony import */ var _Sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sales.vue?vue&type=script&lang=js& */ "./resources/js/components/Sales/Sales.vue?vue&type=script&lang=js&");
/* harmony import */ var _Sales_vue_vue_type_style_index_0_id_9779a6e4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sales.vue?vue&type=style&index=0&id=9779a6e4&lang=css&scoped=true& */ "./resources/js/components/Sales/Sales.vue?vue&type=style&index=0&id=9779a6e4&lang=css&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sales_vue_vue_type_template_id_9779a6e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Sales_vue_vue_type_template_id_9779a6e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9779a6e4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Sales/Sales.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ })

}]);