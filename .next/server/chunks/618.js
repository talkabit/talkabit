"use strict";
exports.id = 618;
exports.ids = [618];
exports.modules = {

/***/ 1618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ hooks_CountdownTimer)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/Landing.module.css
var Landing_module = __webpack_require__(5042);
var Landing_module_default = /*#__PURE__*/__webpack_require__.n(Landing_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./hooks/DateTimeDisplay.js





const DateTimeDisplay = ({
  value,
  type
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Landing_module_default()).countdown,
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      children: value
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: type
    })]
  });
};

/* harmony default export */ const hooks_DateTimeDisplay = (DateTimeDisplay);
;// CONCATENATED MODULE: ./hooks/useCountdown.js


const useCountdown = targetDate => {
  const countDownDate = new Date(targetDate).getTime();
  const {
    0: countDown,
    1: setCountDown
  } = (0,external_react_.useState)(countDownDate - new Date().getTime());
  (0,external_react_.useEffect)(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);
  return getReturnValues(countDown);
};

const getReturnValues = countDown => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(countDown % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor(countDown % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor(countDown % (1000 * 60) / 1000);
  return [days, hours, minutes, seconds];
};


;// CONCATENATED MODULE: ./hooks/CountdownTimer.js







const ShowCounter = ({
  days,
  hours,
  minutes,
  seconds
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Landing_module_default()).showCounter,
    children: [/*#__PURE__*/jsx_runtime_.jsx(hooks_DateTimeDisplay, {
      value: days,
      type: 'Days'
    }), /*#__PURE__*/jsx_runtime_.jsx(hooks_DateTimeDisplay, {
      value: hours,
      type: 'Hours'
    }), /*#__PURE__*/jsx_runtime_.jsx(hooks_DateTimeDisplay, {
      value: minutes,
      type: 'Mins'
    }), /*#__PURE__*/jsx_runtime_.jsx(hooks_DateTimeDisplay, {
      value: seconds,
      type: 'Seconds'
    })]
  });
};

const CountdownTimer = ({
  targetDate
}) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  return /*#__PURE__*/jsx_runtime_.jsx(ShowCounter, {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  });
};

/* harmony default export */ const hooks_CountdownTimer = (CountdownTimer);

/***/ })

};
;