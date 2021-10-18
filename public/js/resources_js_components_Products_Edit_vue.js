"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Products_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _errors_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors/errors */ "./resources/js/errors/errors.js");
/* harmony import */ var _alerts_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../alerts/alert */ "./resources/js/alerts/alert.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      product: {},
      errors: new _errors_errors__WEBPACK_IMPORTED_MODULE_0__["default"](),
      alert: new _alerts_alert__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  },
  mounted: function mounted() {
    this.$store.dispatch("fetchBrand");
  },
  computed: {
    getBrands: function getBrands() {
      return this.$store.getters.getBrands;
    }
  },
  created: function created() {
    var _this = this;

    var url = "/product/edit/".concat(this.$route.params.id);
    axios.get(url).then(function (response) {
      //  console.log(response.data);
      _this.product = response.data.product;
    });
  },
  methods: {
    save: function save() {
      var _this2 = this;

      axios.post("/product/update/".concat(this.$route.params.id), this.product).then(function (response) {
        // display success message from backend
        _this2.alert.successLarge(response.data.success);

        _this2.$router.push({
          name: 'products.index'
        });
      })["catch"](function (error) {
        _this2.errors.record(error.response.data.errors);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/alerts/alert.js":
/*!**************************************!*\
  !*** ./resources/js/alerts/alert.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SweetAlert)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SweetAlert = /*#__PURE__*/function () {
  function SweetAlert() {
    _classCallCheck(this, SweetAlert);
  }

  _createClass(SweetAlert, [{
    key: "successLarge",
    value: function successLarge(message) {
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500
      });
    }
  }, {
    key: "successSmall",
    value: function successSmall(message) {
      toast.fire({
        type: 'success',
        title: message
      });
    }
  }, {
    key: "warning",
    value: function warning() {
      swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        }
      });
    }
  }, {
    key: "ask",
    value: function ask(message) {
      swal.fire({
        title: message,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, cancel it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          swal.fire('Cancelled!', 'The order has been cancelled.', 'success');
        }
      });
    }
  }, {
    key: "message",
    value: function message(_message) {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: _message
      });
    }
  }, {
    key: "error",
    value: function error(message) {
      toast.fire({
        type: 'error',
        title: message
      }); // swal.fire({
      //   icon: 'error',
      //   title: 'Oops... Try again!',
      //   text: message,
      // })
    }
  }]);

  return SweetAlert;
}();



/***/ }),

/***/ "./resources/js/errors/errors.js":
/*!***************************************!*\
  !*** ./resources/js/errors/errors.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Errors)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Errors = /*#__PURE__*/function () {
  function Errors() {
    _classCallCheck(this, Errors);

    this.errors = {};
  }

  _createClass(Errors, [{
    key: "get",
    value: function get(field) {
      if (this.errors[field]) {
        return this.errors[field][0];
      }
    }
  }, {
    key: "record",
    value: function record(errors) {
      this.errors = errors;
      console.log(errors);
    }
  }, {
    key: "clear",
    value: function clear(field) {
      delete this.errors[field];
    }
  }]);

  return Errors;
}();



/***/ }),

/***/ "./resources/js/components/Products/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Products/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Products/Edit.vue?vue&type=template&id=aa5c8dcc&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Products/Edit.vue?vue&type=template&id=aa5c8dcc& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_aa5c8dcc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_aa5c8dcc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_aa5c8dcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=aa5c8dcc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Edit.vue?vue&type=template&id=aa5c8dcc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Edit.vue?vue&type=template&id=aa5c8dcc&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Edit.vue?vue&type=template&id=aa5c8dcc& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c(
        "form",
        {
          attrs: { action: "", method: "post" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.save.apply(null, arguments)
            }
          }
        },
        [
          _c("div", { staticClass: "form-group row" }, [
            _c("div", { staticClass: "col-lg-4" }, [
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-4" }, [
                  _vm._v("Product name")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group input-group-lg" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.product.product_name,
                        expression: "product.product_name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      "aria-describedby": "sizing-addon1"
                    },
                    domProps: { value: _vm.product.product_name },
                    on: {
                      keydown: function($event) {
                        return _vm.errors.clear("product.product_name")
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.product,
                          "product_name",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("span", {
                  staticClass: "help is-danger",
                  staticStyle: { color: "red" },
                  domProps: {
                    textContent: _vm._s(_vm.errors.get("product.product_name"))
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4" }, [
              _c("label", { staticClass: "col-form-label col-lg-4" }, [
                _vm._v("Category name")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-group input-group-lg" },
                [
                  _c("vue-select", {
                    staticClass: "form-control",
                    attrs: {
                      label: "brand_name",
                      options: _vm.getBrands,
                      reduce: function(brand) {
                        return brand.id
                      }
                    },
                    on: {
                      keypress: function($event) {
                        return _vm.errors.clear("product.brand_id")
                      }
                    },
                    model: {
                      value: _vm.product.brand_id,
                      callback: function($$v) {
                        _vm.$set(_vm.product, "brand_id", $$v)
                      },
                      expression: "product.brand_id"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("span", {
                staticClass: "help is-danger",
                staticStyle: { color: "red" },
                domProps: {
                  textContent: _vm._s(_vm.errors.get("product.brand_id"))
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4" }, [
              _c("label", { staticClass: "col-form-label col-lg-4" }, [
                _vm._v("Unit size")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group input-group-lg" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.product.unit,
                        expression: "product.unit"
                      }
                    ],
                    staticClass: "form-control",
                    on: {
                      keypress: function($event) {
                        return _vm.errors.clear("product.unit")
                      },
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.product,
                          "unit",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Select Unit size")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "3" } }, [_vm._v("3 Kg")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "6" } }, [_vm._v("6 Kg")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "13" } }, [_vm._v("13 Kg")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "50" } }, [_vm._v("50 Kg")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "0" } }, [_vm._v("N/A")])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("span", {
                staticClass: "help is-danger",
                staticStyle: { color: "red" },
                domProps: {
                  textContent: _vm._s(_vm.errors.get("product.unit"))
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c("label", { staticClass: "col-form-label col-lg-4" }, [
              _vm._v("Complete Gas")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group input-group-lg" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.product.price.complete.retail_price,
                      expression: "product.price.complete.retail_price",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", "aria-describedby": "sizing-addon1" },
                  domProps: { value: _vm.product.price.complete.retail_price },
                  on: {
                    keydown: function($event) {
                      return _vm.errors.clear(
                        "product.price.complete.retail_price"
                      )
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.product.price.complete,
                        "retail_price",
                        _vm._n($event.target.value)
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group input-group-lg mt-2" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.product.price.complete.wholesale_price,
                      expression: "product.price.complete.wholesale_price",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", "aria-describedby": "sizing-addon1" },
                  domProps: {
                    value: _vm.product.price.complete.wholesale_price
                  },
                  on: {
                    keydown: function($event) {
                      return _vm.errors.clear(
                        "product.price.complete.wholesale_price"
                      )
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.product.price.complete,
                        "wholesale_price",
                        _vm._n($event.target.value)
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("span", {
              staticClass: "help is-danger",
              staticStyle: { color: "red" },
              domProps: {
                textContent: _vm._s(
                  _vm.errors.get("product.price.complete.wholesale_price")
                )
              }
            })
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c("label", { staticClass: "col-form-label col-lg-4" }, [
              _vm._v("Refill Gas")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group input-group-lg" }, [
              _vm._m(3),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.product.price.refill.retail_price,
                      expression: "product.price.refill.retail_price",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", "aria-describedby": "sizing-addon1" },
                  domProps: { value: _vm.product.price.refill.retail_price },
                  on: {
                    keydown: function($event) {
                      return _vm.errors.clear("price.refill.retail_price")
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.product.price.refill,
                        "retail_price",
                        _vm._n($event.target.value)
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group input-group-lg mt-2" }, [
              _vm._m(4),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.product.price.refill.wholesale_price,
                      expression: "product.price.refill.wholesale_price",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", "aria-describedby": "sizing-addon1" },
                  domProps: { value: _vm.product.price.refill.wholesale_price },
                  on: {
                    keydown: function($event) {
                      return _vm.errors.clear(
                        "product.price.refill.wholesale_price"
                      )
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.product.price.refill,
                        "wholesale_price",
                        _vm._n($event.target.value)
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("span", {
              staticClass: "help is-danger",
              staticStyle: { color: "red" },
              domProps: {
                textContent: _vm._s(
                  _vm.errors.get("product.price.refill.wholesale_price")
                )
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c("label", { staticClass: "col-form-label col-lg-4" }, [
              _vm._v("Quantity")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group input-group-lg mt-2" }, [
              _vm._m(5),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.product.quantity.outlight,
                      expression: "product.quantity.outlight",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", "aria-describedby": "sizing-addon1" },
                  domProps: { value: _vm.product.quantity.outlight },
                  on: {
                    keydown: function($event) {
                      return _vm.errors.clear("product.quantity.outlight")
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.product.quantity,
                        "outlight",
                        _vm._n($event.target.value)
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("span", {
                staticClass: "help is-danger",
                staticStyle: { color: "red" },
                domProps: {
                  textContent: _vm._s(
                    _vm.errors.get("product.quantity.outlight")
                  )
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group input-group-lg mt-2" }, [
              _vm._m(6),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.product.quantity.empty,
                      expression: "product.quantity.empty",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", "aria-describedby": "sizing-addon1" },
                  domProps: { value: _vm.product.quantity.empty },
                  on: {
                    keydown: function($event) {
                      return _vm.errors.clear("product.quantity.empty")
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.product.quantity,
                        "empty",
                        _vm._n($event.target.value)
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("span", {
                staticClass: "help is-danger",
                staticStyle: { color: "red" },
                domProps: {
                  textContent: _vm._s(_vm.errors.get("product.quantity.empty"))
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group input-group-lg mt-2" }, [
              _vm._m(7),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.product.quantity.normal,
                      expression: "product.quantity.normal",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", "aria-describedby": "sizing-addon1" },
                  domProps: { value: _vm.product.quantity.normal },
                  on: {
                    keydown: function($event) {
                      return _vm.errors.clear("product.quantity.normal")
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.product.quantity,
                        "normal",
                        _vm._n($event.target.value)
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("span", {
                staticClass: "help is-danger",
                staticStyle: { color: "red" },
                domProps: {
                  textContent: _vm._s(_vm.errors.get("product.quantity.normal"))
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-primary", attrs: { type: "submit" } },
            [_vm._v("Save")]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Product")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("label", { staticClass: "col-form-label col-lg-4" }, [
        _vm._v("Retail Price")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("label", { staticClass: "col-form-label col-lg-4" }, [
        _vm._v("Wholesale Price")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("label", { staticClass: "col-form-label col-lg-4" }, [
        _vm._v("Retail Price")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("label", { staticClass: "col-form-label col-lg-4" }, [
        _vm._v("Wholesale Price")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("label", { staticClass: "col-form-label col-lg-4" }, [
        _vm._v("Outlight")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("label", { staticClass: "col-form-label col-lg-4" }, [_vm._v("Empty")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("label", { staticClass: "col-form-label col-lg-4" }, [_vm._v("Qty")])
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

/***/ "./resources/js/components/Products/Edit.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Products/Edit.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_aa5c8dcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=aa5c8dcc& */ "./resources/js/components/Products/Edit.vue?vue&type=template&id=aa5c8dcc&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/Products/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_aa5c8dcc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_aa5c8dcc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Products/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ })

}]);