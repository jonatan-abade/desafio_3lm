(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Pessoa_index_js"],{

/***/ "./node_modules/@restart/ui/esm/Anchor.js":
/*!************************************************!*\
  !*** ./node_modules/@restart/ui/esm/Anchor.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTrivialHref": () => (/* binding */ isTrivialHref),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _restart_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @restart/hooks */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./node_modules/@restart/ui/esm/Button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const _excluded = ["onKeyDown"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/anchor-has-content */




function isTrivialHref(href) {
  return !href || href.trim() === '#';
}

/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial like "#" are treated like buttons.
 */
const Anchor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref, ref) => {
  let {
    onKeyDown
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [buttonProps] = (0,_Button__WEBPACK_IMPORTED_MODULE_3__.useButtonProps)(Object.assign({
    tagName: 'a'
  }, props));
  const handleKeyDown = (0,_restart_hooks__WEBPACK_IMPORTED_MODULE_1__.useEventCallback)(e => {
    buttonProps.onKeyDown(e);
    onKeyDown == null ? void 0 : onKeyDown(e);
  });

  if (isTrivialHref(props.href) && !props.role || props.role === 'button') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", Object.assign({
      ref: ref
    }, props, buttonProps, {
      onKeyDown: handleKeyDown
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", Object.assign({
    ref: ref
  }, props, {
    onKeyDown: onKeyDown
  }));
});
Anchor.displayName = 'Anchor';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Anchor);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/Button.js":
/*!************************************************!*\
  !*** ./node_modules/@restart/ui/esm/Button.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTrivialHref": () => (/* binding */ isTrivialHref),
/* harmony export */   "useButtonProps": () => (/* binding */ useButtonProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const _excluded = ["as", "disabled"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  onClick,
  tabIndex = 0,
  type
}) {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = 'a';
    } else {
      tagName = 'button';
    }
  }

  const meta = {
    tagName
  };

  if (tagName === 'button') {
    return [{
      type: type || 'button',
      disabled
    }, meta];
  }

  const handleClick = event => {
    if (disabled || tagName === 'a' && isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    onClick == null ? void 0 : onClick(event);
  };

  const handleKeyDown = event => {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  return [{
    role: 'button',
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: undefined,
    tabIndex: disabled ? undefined : tabIndex,
    href: tagName === 'a' && disabled ? undefined : href,
    target: tagName === 'a' ? target : undefined,
    'aria-disabled': !disabled ? undefined : disabled,
    rel: tagName === 'a' ? rel : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, meta];
}
const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref, ref) => {
  let {
    as: asProp,
    disabled
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [buttonProps, {
    tagName: Component
  }] = useButtonProps(Object.assign({
    tagName: asProp,
    disabled
  }, props));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, Object.assign({}, props, buttonProps, {
    ref: ref
  }));
});
Button.displayName = 'Button';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/DataKey.js":
/*!*************************************************!*\
  !*** ./node_modules/@restart/ui/esm/DataKey.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ATTRIBUTE_PREFIX": () => (/* binding */ ATTRIBUTE_PREFIX),
/* harmony export */   "PROPERTY_PREFIX": () => (/* binding */ PROPERTY_PREFIX),
/* harmony export */   "dataAttr": () => (/* binding */ dataAttr),
/* harmony export */   "dataProp": () => (/* binding */ dataProp)
/* harmony export */ });
const ATTRIBUTE_PREFIX = `data-rr-ui-`;
const PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
  return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
  return `${PROPERTY_PREFIX}${property}`;
}

/***/ }),

/***/ "./node_modules/@restart/ui/esm/Nav.js":
/*!*********************************************!*\
  !*** ./node_modules/@restart/ui/esm/Nav.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/querySelectorAll */ "./node_modules/dom-helpers/esm/querySelectorAll.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _restart_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @restart/hooks/useForceUpdate */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useForceUpdate.js");
/* harmony import */ var _restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @restart/hooks/useMergedRefs */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergedRefs.js");
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavContext */ "./node_modules/@restart/ui/esm/NavContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TabContext */ "./node_modules/@restart/ui/esm/TabContext.js");
/* harmony import */ var _DataKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataKey */ "./node_modules/@restart/ui/esm/DataKey.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavItem */ "./node_modules/@restart/ui/esm/NavItem.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const _excluded = ["as", "onSelect", "activeKey", "role", "onKeyDown"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const EVENT_KEY_ATTR = (0,_DataKey__WEBPACK_IMPORTED_MODULE_5__.dataAttr)('event-key');
const Nav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((_ref, ref) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    onSelect,
    activeKey,
    role,
    onKeyDown
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
  // and don't want to reset the set in the effect
  const forceUpdate = (0,_restart_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const needsRefocusRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  const parentOnSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const tabContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_TabContext__WEBPACK_IMPORTED_MODULE_7__["default"]);
  let getControlledId, getControllerId;

  if (tabContext) {
    role = role || 'tablist';
    activeKey = tabContext.activeKey; // TODO: do we need to duplicate these?

    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }

  const listNode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  const getNextActiveTab = offset => {
    const currentListNode = listNode.current;
    if (!currentListNode) return null;
    const items = (0,dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_0__["default"])(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
    const activeChild = currentListNode.querySelector('[aria-selected=true]');
    if (!activeChild) return null;
    const index = items.indexOf(activeChild);
    if (index === -1) return null;
    let nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  const handleSelect = (key, event) => {
    if (key == null) return;
    onSelect == null ? void 0 : onSelect(key, event);
    parentOnSelect == null ? void 0 : parentOnSelect(key, event);
  };

  const handleKeyDown = event => {
    onKeyDown == null ? void 0 : onKeyDown(event);

    if (!tabContext) {
      return;
    }

    let nextActiveChild;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveTab(-1);
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveTab(1);
        break;

      default:
        return;
    }

    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset[(0,_DataKey__WEBPACK_IMPORTED_MODULE_5__.dataProp)('EventKey')] || null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (listNode.current && needsRefocusRef.current) {
      const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
      activeChild == null ? void 0 : activeChild.focus();
    }

    needsRefocusRef.current = false;
  });
  const mergedRef = (0,_restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_3__["default"])(ref, listNode);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
    value: handleSelect,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_NavContext__WEBPACK_IMPORTED_MODULE_8__["default"].Provider, {
      value: {
        role,
        // used by NavLink to determine it's role
        activeKey: (0,_SelectableContext__WEBPACK_IMPORTED_MODULE_6__.makeEventKey)(activeKey),
        getControlledId: getControlledId || noop,
        getControllerId: getControllerId || noop
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Component, Object.assign({}, props, {
        onKeyDown: handleKeyDown,
        ref: mergedRef,
        role: role
      }))
    })
  });
});
Nav.displayName = 'Nav';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Nav, {
  Item: _NavItem__WEBPACK_IMPORTED_MODULE_9__["default"]
}));

/***/ }),

/***/ "./node_modules/@restart/ui/esm/NavContext.js":
/*!****************************************************!*\
  !*** ./node_modules/@restart/ui/esm/NavContext.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const NavContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
NavContext.displayName = 'NavContext';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavContext);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/NavItem.js":
/*!*************************************************!*\
  !*** ./node_modules/@restart/ui/esm/NavItem.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useNavItem": () => (/* binding */ useNavItem),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavContext */ "./node_modules/@restart/ui/esm/NavContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ "./node_modules/@restart/ui/esm/Button.js");
/* harmony import */ var _DataKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataKey */ "./node_modules/@restart/ui/esm/DataKey.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const _excluded = ["as", "active", "eventKey"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled
}) {
  const parentOnSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_SelectableContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const navContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_NavContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  let isActive = active;
  const props = {
    role
  };

  if (navContext) {
    if (!role && navContext.role === 'tablist') props.role = 'tab';
    const contextControllerId = navContext.getControllerId(key != null ? key : null);
    const contextControlledId = navContext.getControlledId(key != null ? key : null); // @ts-ignore

    props[(0,_DataKey__WEBPACK_IMPORTED_MODULE_5__.dataAttr)('event-key')] = key;
    props.id = contextControllerId || id;
    props['aria-controls'] = contextControlledId;
    isActive = active == null && key != null ? navContext.activeKey === key : active;
  }

  if (props.role === 'tab') {
    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }

    if (isActive) {
      props['aria-selected'] = isActive;
    } else {
      props.tabIndex = -1;
    }
  }

  props.onClick = (0,_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(e => {
    if (disabled) return;
    onClick == null ? void 0 : onClick(e);

    if (key == null) {
      return;
    }

    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect(key, e);
    }
  });
  return [props, {
    isActive
  }];
}
const NavItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref, ref) => {
  let {
    as: Component = _Button__WEBPACK_IMPORTED_MODULE_6__["default"],
    active,
    eventKey
  } = _ref,
      options = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [props, meta] = useNavItem(Object.assign({
    key: (0,_SelectableContext__WEBPACK_IMPORTED_MODULE_3__.makeEventKey)(eventKey, options.href),
    active
  }, options)); // @ts-ignore

  props[(0,_DataKey__WEBPACK_IMPORTED_MODULE_5__.dataAttr)('active')] = meta.isActive;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, Object.assign({}, options, props, {
    ref: ref
  }));
});
NavItem.displayName = 'NavItem';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/SelectableContext.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/ui/esm/SelectableContext.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeEventKey": () => (/* binding */ makeEventKey),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const SelectableContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const makeEventKey = (eventKey, href = null) => {
  if (eventKey != null) return String(eventKey);
  return href || null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectableContext);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/TabContext.js":
/*!****************************************************!*\
  !*** ./node_modules/@restart/ui/esm/TabContext.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const TabContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabContext);

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCallbackRef": () => (/* reexport safe */ _useCallbackRef__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "useCommittedRef": () => (/* reexport safe */ _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "useEventCallback": () => (/* reexport safe */ _useEventCallback__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "useEventListener": () => (/* reexport safe */ _useEventListener__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "useGlobalListener": () => (/* reexport safe */ _useGlobalListener__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "useInterval": () => (/* reexport safe */ _useInterval__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "useRafInterval": () => (/* reexport safe */ _useRafInterval__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "useMergeState": () => (/* reexport safe */ _useMergeState__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "useMergeStateFromProps": () => (/* reexport safe */ _useMergeStateFromProps__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "useMounted": () => (/* reexport safe */ _useMounted__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "usePrevious": () => (/* reexport safe */ _usePrevious__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "useImage": () => (/* reexport safe */ _useImage__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "useResizeObserver": () => (/* reexport safe */ _useResizeObserver__WEBPACK_IMPORTED_MODULE_12__["default"])
/* harmony export */ });
/* harmony import */ var _useCallbackRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCallbackRef */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCallbackRef.js");
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCommittedRef */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCommittedRef.js");
/* harmony import */ var _useEventCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useEventCallback */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useEventListener */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventListener.js");
/* harmony import */ var _useGlobalListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useGlobalListener */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useGlobalListener.js");
/* harmony import */ var _useInterval__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useInterval */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useInterval.js");
/* harmony import */ var _useRafInterval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useRafInterval */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useRafInterval.js");
/* harmony import */ var _useMergeState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useMergeState */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeState.js");
/* harmony import */ var _useMergeStateFromProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useMergeStateFromProps */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeStateFromProps.js");
/* harmony import */ var _useMounted__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useMounted */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMounted.js");
/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./usePrevious */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/usePrevious.js");
/* harmony import */ var _useImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useImage */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useImage.js");
/* harmony import */ var _useResizeObserver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useResizeObserver */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useResizeObserver.js");















/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCallbackRef.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCallbackRef.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useCallbackRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * A convenience hook around `useState` designed to be paired with
 * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
 * Callback refs are useful over `useRef()` when you need to respond to the ref being set
 * instead of lazily accessing it in an effect.
 *
 * ```ts
 * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
 *
 * useEffect(() => {
 *   if (!element) return
 *
 *   const calendar = new FullCalendar.Calendar(element)
 *
 *   return () => {
 *     calendar.destroy()
 *   }
 * }, [element])
 *
 * return <div ref={attachRef} />
 * ```
 *
 * @category refs
 */

function useCallbackRef() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCommittedRef.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCommittedRef.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded befor being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */

function useCommittedRef(value) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCommittedRef);

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEventCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCommittedRef */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCommittedRef.js");


function useEventCallback(fn) {
  var ref = (0,_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(fn);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventListener.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventListener.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEventListener)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useEventCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEventCallback */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js");



/**
 * Attaches an event handler outside directly to specified DOM element
 * bypassing the react synthetic event system.
 *
 * @param element The target to listen for events on
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */
function useEventListener(eventTarget, event, listener, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var handler = (0,_useEventCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(listener);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var target = typeof eventTarget === 'function' ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return function () {
      return target.removeEventListener(event, handler, capture);
    };
  }, [eventTarget]);
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useForceUpdate.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useForceUpdate.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useForceUpdate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Returns a function that triggers a component update. the hook equivalent to
 * `this.forceUpdate()` in a class component. In most cases using a state value directly
 * is preferable but may be required in some advanced usages of refs for interop or
 * when direct DOM manipulation is required.
 *
 * ```ts
 * const forceUpdate = useForceUpdate();
 *
 * const updateOnClick = useCallback(() => {
 *  forceUpdate()
 * }, [forceUpdate])
 *
 * return <button type="button" onClick={updateOnClick}>Hi there</button>
 * ```
 */

function useForceUpdate() {
  // The toggling state value is designed to defeat React optimizations for skipping
  // updates when they are stricting equal to the last state value
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(function (state) {
    return !state;
  }, false),
      dispatch = _useReducer[1];

  return dispatch;
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useGlobalListener.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useGlobalListener.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useGlobalListener)
/* harmony export */ });
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useEventListener */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventListener.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



/**
 * Attaches an event handler outside directly to the `document`,
 * bypassing the react synthetic event system.
 *
 * ```ts
 * useGlobalListener('keydown', (event) => {
 *  console.log(event.key)
 * })
 * ```
 *
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */
function useGlobalListener(event, handler, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var documentTarget = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    return document;
  }, []);
  return (0,_useEventListener__WEBPACK_IMPORTED_MODULE_0__["default"])(documentTarget, event, handler, capture);
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useImage.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useImage.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


/**
 * Fetch and load an image for programatic use such as in a `<canvas>` element.
 *
 * @param imageOrUrl The `HtmlImageElement` or image url to load
 * @param crossOrigin The `crossorigin` attribute to set
 *
 * ```ts
 * const { image, error } = useImage('/static/kittens.png')
 * const ref = useRef<HTMLCanvasElement>()
 *
 * useEffect(() => {
 *   const ctx = ref.current.getContext('2d')
 *
 *   if (image) {
 *     ctx.drawImage(image, 0, 0)
 *   }
 * }, [ref, image])
 *
 * return (
 *   <>
 *     {error && "there was a problem loading the image"}
 *     <canvas ref={ref} />
 *   </>
 * ```
 */
function useImage(imageOrUrl, crossOrigin) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    image: null,
    error: null
  }),
      state = _useState[0],
      setState = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!imageOrUrl) return undefined;
    var image;

    if (typeof imageOrUrl === 'string') {
      image = new Image();
      if (crossOrigin) image.crossOrigin = crossOrigin;
      image.src = imageOrUrl;
    } else {
      image = imageOrUrl;

      if (image.complete && image.naturalHeight > 0) {
        setState({
          image: image,
          error: null
        });
        return;
      }
    }

    function onLoad() {
      setState({
        image: image,
        error: null
      });
    }

    function onError(error) {
      setState({
        image: image,
        error: error
      });
    }

    image.addEventListener('load', onLoad);
    image.addEventListener('error', onError);
    return function () {
      image.removeEventListener('load', onLoad);
      image.removeEventListener('error', onError);
    };
  }, [imageOrUrl, crossOrigin]);
  return state;
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useInterval.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useInterval.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCommittedRef */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCommittedRef.js");


/**
 * Creates a `setInterval` that is properly cleaned up when a component unmounted
 *
 * ```tsx
 *  function Timer() {
 *    const [timer, setTimer] = useState(0)
 *    useInterval(() => setTimer(i => i + 1), 1000)
 *
 *    return <span>{timer} seconds past</span>
 *  }
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 */

function useInterval(fn, ms, paused, runImmediately) {
  if (paused === void 0) {
    paused = false;
  }

  if (runImmediately === void 0) {
    runImmediately = false;
  }

  var handle;
  var fnRef = (0,_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(fn); // this ref is necessary b/c useEffect will sometimes miss a paused toggle
  // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.

  var pausedRef = (0,_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(paused);

  var tick = function tick() {
    if (pausedRef.current) return;
    fnRef.current();
    schedule(); // eslint-disable-line no-use-before-define
  };

  var schedule = function schedule() {
    clearTimeout(handle);
    handle = setTimeout(tick, ms);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (runImmediately) {
      tick();
    } else {
      schedule();
    }

    return function () {
      return clearTimeout(handle);
    };
  }, [paused, runImmediately]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInterval);

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useIsomorphicEffect.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useIsomorphicEffect.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isReactNative = typeof __webpack_require__.g !== 'undefined' && // @ts-ignore
__webpack_require__.g.navigator && // @ts-ignore
__webpack_require__.g.navigator.product === 'ReactNative';
var isDOM = typeof document !== 'undefined';
/**
 * Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
 * Only useful to avoid the console warning.
 *
 * PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
 *
 * @category effects
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDOM || isReactNative ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect);

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeState.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeState.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useMergeState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/**
 * Mimics a React class component's state model, of having a single unified
 * `state` object and an updater that merges updates into the existing state, as
 * opposed to replacing it.
 *
 * ```js
 * const [state, setState] = useMergeState({ name: 'Betsy', age: 24 })
 *
 * setState({ name: 'Johan' }) // { name: 'Johan', age: 24 }
 *
 * setState(state => ({ age: state.age + 10 })) // { name: 'Johan', age: 34 }
 * ```
 *
 * @param initialState The initial state object
 */
function useMergeState(initialState) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState),
      state = _useState[0],
      setState = _useState[1];

  var updater = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (update) {
    if (update === null) return;

    if (typeof update === 'function') {
      setState(function (state) {
        var nextState = update(state);
        return nextState == null ? state : _extends({}, state, nextState);
      });
    } else {
      setState(function (state) {
        return _extends({}, state, update);
      });
    }
  }, [setState]);
  return [state, updater];
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeStateFromProps.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeStateFromProps.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useMergeStateFromProps)
/* harmony export */ });
/* harmony import */ var _useMergeState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useMergeState */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeState.js");

function useMergeStateFromProps(props, gDSFP, initialState) {
  var _useMergeState = (0,_useMergeState__WEBPACK_IMPORTED_MODULE_0__["default"])(initialState),
      state = _useMergeState[0],
      setState = _useMergeState[1];

  var nextState = gDSFP(props, state);
  if (nextState !== null) setState(nextState);
  return [state, setState];
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergedRefs.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergedRefs.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeRefs": () => (/* binding */ mergeRefs),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var toFnRef = function toFnRef(ref) {
  return !ref || typeof ref === 'function' ? ref : function (value) {
    ref.current = value;
  };
};

function mergeRefs(refA, refB) {
  var a = toFnRef(refA);
  var b = toFnRef(refB);
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */

function useMergedRefs(refA, refB) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMergedRefs);

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMounted.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMounted.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useMounted)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */

function useMounted() {
  var mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  var isMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(function () {
    return mounted.current;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/usePrevious.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/usePrevious.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Store the last of some value. Tracked via a `Ref` only updating it
 * after the component renders.
 *
 * Helpful if you need to compare a prop value to it's previous value during render.
 *
 * ```ts
 * function Component(props) {
 *   const lastProps = usePrevious(props)
 *
 *   if (lastProps.foo !== props.foo)
 *     resetValueFromProps(props.foo)
 * }
 * ```
 *
 * @param value the value to track
 */

function usePrevious(value) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ref.current = value;
  });
  return ref.current;
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useRafInterval.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useRafInterval.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCommittedRef */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCommittedRef.js");



function useRafInterval(fn, ms, paused) {
  if (paused === void 0) {
    paused = false;
  }

  var handle;
  var start = new Date().getTime();
  var fnRef = (0,_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(fn); // this ref is necessary b/c useEffect will sometimes miss a paused toggle
  // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.

  var pausedRef = (0,_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(paused);

  function loop() {
    var current = new Date().getTime();
    var delta = current - start;
    if (pausedRef.current) return;

    if (delta >= ms && fnRef.current) {
      fnRef.current();
      start = new Date().getTime();
    }

    cancelAnimationFrame(handle);
    handle = requestAnimationFrame(loop);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    handle = requestAnimationFrame(loop);
    return function () {
      return cancelAnimationFrame(handle);
    };
  }, []);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRafInterval);

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useResizeObserver.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useResizeObserver.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useResizeObserver)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIsomorphicEffect */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useIsomorphicEffect.js");


var targetMap = new WeakMap();
var resizeObserver;

function getResizeObserver() {
  // eslint-disable-next-line no-return-assign
  return resizeObserver = resizeObserver || new window.ResizeObserver(function (entries) {
    entries.forEach(function (entry) {
      var handler = targetMap.get(entry.target);
      if (handler) handler(entry.contentRect);
    });
  });
}
/**
 * Efficiently observe size changes on an element. Depends on the `ResizeObserver` api,
 * and polyfills are needed in older browsers.
 *
 * ```ts
 * const [ref, attachRef] = useCallbackRef(null);
 *
 * const rect = useResizeObserver(ref);
 *
 * return (
 *  <div ref={attachRef}>
 *    {JSON.stringify(rect)}
 *  </div>
 * )
 * ```
 *
 * @param element The DOM element to observe
 */


function useResizeObserver(element) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      rect = _useState[0],
      setRect = _useState[1];

  (0,_useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    if (!element) return;
    getResizeObserver().observe(element);
    setRect(element.getBoundingClientRect());
    targetMap.set(element, function (rect) {
      setRect(rect);
    });
    return function () {
      targetMap.delete(element);
    };
  }, [element]);
  return rect;
}

/***/ }),

/***/ "./resources/js/Components/Navegation.js":
/*!***********************************************!*\
  !*** ./resources/js/Components/Navegation.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navegation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function Navegation() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "mt-5",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        justify: true,
        variant: "tabs",
        defaultActiveKey: "/home",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Link, {
            href: "/home",
            children: "Pessoas"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Link, {
            eventKey: "link-1",
            children: "Cargos"
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Pages/Pessoa/index.js":
/*!********************************************!*\
  !*** ./resources/js/Pages/Pessoa/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pessoas)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var _Components_Navegation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Navegation */ "./resources/js/Components/Navegation.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







function Pessoas() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "mt-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Components_Navegation__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        children: "Minha tabela aqui"
      })]
    })
  });
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/dom-helpers/esm/camelize.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/camelize.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ camelize)
/* harmony export */ });
var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/querySelectorAll.js":
/*!**********************************************************!*\
  !*** ./node_modules/dom-helpers/esm/querySelectorAll.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ qsa)
/* harmony export */ });
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
/**
 * Runs `querySelectorAll` on a given element.
 * 
 * @param element the element
 * @param selector the selector
 */

function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/prop-types-extra/lib/all.js":
/*!**************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/all.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = all;

var _createChainableTypeChecker = __webpack_require__(/*! ./utils/createChainableTypeChecker */ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js");

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;

    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);
      if (result != null) {
        error = result;
      }
    });

    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js ***!
  \*******************************************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CardHeaderContext.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CardHeaderContext.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
context.displayName = 'CardHeaderContext';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Container.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Container.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const defaultProps = {
  fluid: false
};
const Container = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  fluid,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  className,
  ...props
}, ref) => {
  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'container');
  const suffix = typeof fluid === 'string' ? `-${fluid}` : '-fluid';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, fluid ? `${prefix}${suffix}` : prefix)
  });
});
Container.displayName = 'Container';
Container.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Nav.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Nav.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types-extra/lib/all */ "./node_modules/prop-types-extra/lib/all.js");
/* harmony import */ var prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/lib/esm/index.js");
/* harmony import */ var _restart_ui_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @restart/ui/Nav */ "./node_modules/@restart/ui/esm/Nav.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _NavbarContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/esm/NavbarContext.js");
/* harmony import */ var _CardHeaderContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardHeaderContext */ "./node_modules/react-bootstrap/esm/CardHeaderContext.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavItem */ "./node_modules/react-bootstrap/esm/NavItem.js");
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavLink */ "./node_modules/react-bootstrap/esm/NavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












const defaultProps = {
  justify: false,
  fill: false
};
const Nav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((uncontrolledProps, ref) => {
  const {
    as = 'div',
    bsPrefix: initialBsPrefix,
    variant,
    fill,
    justify,
    navbar,
    navbarScroll,
    className,
    activeKey,
    ...props
  } = (0,uncontrollable__WEBPACK_IMPORTED_MODULE_3__.useUncontrolled)(uncontrolledProps, {
    activeKey: 'onSelect'
  });
  const bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.useBootstrapPrefix)(initialBsPrefix, 'nav');
  let navbarBsPrefix;
  let cardHeaderBsPrefix;
  let isNavbar = false;
  const navbarContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_NavbarContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const cardHeaderContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_CardHeaderContext__WEBPACK_IMPORTED_MODULE_7__["default"]);

  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardHeaderContext) {
    ({
      cardHeaderBsPrefix
    } = cardHeaderContext);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_restart_ui_Nav__WEBPACK_IMPORTED_MODULE_8__["default"], {
    as: as,
    ref: ref,
    activeKey: activeKey,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, {
      [bsPrefix]: !isNavbar,
      [`${navbarBsPrefix}-nav`]: isNavbar,
      [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
      [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
      [`${bsPrefix}-${variant}`]: !!variant,
      [`${bsPrefix}-fill`]: fill,
      [`${bsPrefix}-justified`]: justify
    }),
    ...props
  });
});
Nav.displayName = 'Nav';
Nav.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Nav, {
  Item: _NavItem__WEBPACK_IMPORTED_MODULE_9__["default"],
  Link: _NavLink__WEBPACK_IMPORTED_MODULE_10__["default"]
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/NavItem.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/NavItem.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('nav-item'));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/NavLink.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/NavLink.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _restart_ui_Anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @restart/ui/Anchor */ "./node_modules/@restart/ui/esm/Anchor.js");
/* harmony import */ var _restart_ui_NavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @restart/ui/NavItem */ "./node_modules/@restart/ui/esm/NavItem.js");
/* harmony import */ var _restart_ui_SelectableContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @restart/ui/SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







const defaultProps = {
  disabled: false
};
const NavLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  as: Component = _restart_ui_Anchor__WEBPACK_IMPORTED_MODULE_3__["default"],
  active,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useBootstrapPrefix)(bsPrefix, 'nav-link');
  const [navItemProps, meta] = (0,_restart_ui_NavItem__WEBPACK_IMPORTED_MODULE_5__.useNavItem)({
    key: (0,_restart_ui_SelectableContext__WEBPACK_IMPORTED_MODULE_6__.makeEventKey)(eventKey, props.href),
    active,
    ...props
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, { ...props,
    ...navItemProps,
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix, props.disabled && 'disabled', meta.isActive && 'active')
  });
});
NavLink.displayName = 'NavLink';
NavLink.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/NavbarContext.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/NavbarContext.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
 // TODO: check

const context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
context.displayName = 'NavbarContext';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/ThemeProvider.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ThemeProvider.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBootstrapPrefix": () => (/* binding */ useBootstrapPrefix),
/* harmony export */   "useIsRTL": () => (/* binding */ useIsRTL),
/* harmony export */   "createBootstrapComponent": () => (/* binding */ createBootstrapComponent),
/* harmony export */   "ThemeConsumer": () => (/* binding */ Consumer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



const ThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  prefixes: {}
});
const {
  Consumer,
  Provider
} = ThemeContext;

function ThemeProvider({
  prefixes = {},
  dir,
  children
}) {
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    prefixes: { ...prefixes
    },
    dir
  }), [prefixes, dir]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Provider, {
    value: contextValue,
    children: children
  });
}

function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useIsRTL() {
  const {
    dir
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
  return dir === 'rtl';
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  const isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  const {
    prefix,
    forwardRefAs = isClassy ? 'ref' : 'innerRef'
  } = opts;
  const Wrapped = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(({ ...props
  }, ref) => {
    props[forwardRefAs] = ref;
    const bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, { ...props,
      bsPrefix: bsPrefix
    });
  });
  Wrapped.displayName = `Bootstrap(${Component.displayName || Component.name})`;
  return Wrapped;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeProvider);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/createWithBsPrefix.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createWithBsPrefix)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dom_helpers_camelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/camelize */ "./node_modules/dom-helpers/esm/camelize.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






const pascalCase = str => str[0].toUpperCase() + (0,dom_helpers_camelize__WEBPACK_IMPORTED_MODULE_1__["default"])(str).slice(1);

// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
function createWithBsPrefix(prefix, {
  displayName = pascalCase(prefix),
  Component,
  defaultProps
} = {}) {
  const BsComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(({
    className,
    bsPrefix,
    as: Tag = Component || 'div',
    ...props
  }, ref) => {
    const resolvedPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useBootstrapPrefix)(bsPrefix, prefix);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Tag, {
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, resolvedPrefix),
      ...props
    });
  });
  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polyfill": () => (/* binding */ polyfill)
/* harmony export */ });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/uncontrollable/lib/esm/hook.js":
/*!*****************************************************!*\
  !*** ./node_modules/uncontrollable/lib/esm/hook.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useUncontrolledProp": () => (/* binding */ useUncontrolledProp),
/* harmony export */   "default": () => (/* binding */ useUncontrolled)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/uncontrollable/lib/esm/utils.js");



function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(propValue !== undefined);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultValue),
      stateValue = _useState[0],
      setState = _useState[1];

  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }

  return [isProp ? propValue : stateValue, (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}


function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var _ref = result,
        defaultValue = _ref[_utils__WEBPACK_IMPORTED_MODULE_3__.defaultKey(fieldName)],
        propsValue = _ref[fieldName],
        rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, [_utils__WEBPACK_IMPORTED_MODULE_3__.defaultKey(fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];

    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
        value = _useUncontrolledProp[0],
        handler = _useUncontrolledProp[1];

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}

/***/ }),

/***/ "./node_modules/uncontrollable/lib/esm/index.js":
/*!******************************************************!*\
  !*** ./node_modules/uncontrollable/lib/esm/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useUncontrolled": () => (/* reexport safe */ _hook__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "useUncontrolledProp": () => (/* reexport safe */ _hook__WEBPACK_IMPORTED_MODULE_0__.useUncontrolledProp),
/* harmony export */   "uncontrollable": () => (/* reexport safe */ _uncontrollable__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hook */ "./node_modules/uncontrollable/lib/esm/hook.js");
/* harmony import */ var _uncontrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uncontrollable */ "./node_modules/uncontrollable/lib/esm/uncontrollable.js");



/***/ }),

/***/ "./node_modules/uncontrollable/lib/esm/uncontrollable.js":
/*!***************************************************************!*\
  !*** ./node_modules/uncontrollable/lib/esm/uncontrollable.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ uncontrollable)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/uncontrollable/lib/esm/utils.js");



var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";




function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }

  var displayName = Component.displayName || Component.name || 'Component';
  var canAcceptRef = _utils__WEBPACK_IMPORTED_MODULE_6__.canAcceptRef(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(_utils__WEBPACK_IMPORTED_MODULE_6__.defaultKey);
  !(canAcceptRef || !methods.length) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_5___default()(false, '[uncontrollable] stateless function components cannot pass through methods ' + 'because they have no associated instances. Check component: ' + displayName + ', ' + 'attempting to pass through methods: ' + methods.join(', ')) : 0 : void 0;

  var UncontrolledComponent =
  /*#__PURE__*/
  function (_React$Component) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(UncontrolledComponent, _React$Component);

    function UncontrolledComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function (propName) {
        var handlerName = controlledValues[propName];

        var handleChange = function handleChange(value) {
          if (_this.props[handlerName]) {
            var _this$props;

            _this._notifying = true;

            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));

            _this._notifying = false;
          }

          if (!_this.unmounted) _this.setState(function (_ref) {
            var _extends2;

            var values = _ref.values;
            return {
              values: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
            };
          });
        };

        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function (ref) {
        _this.inner = ref;
      };
      var values = Object.create(null);
      controlledProps.forEach(function (key) {
        values[key] = _this.props[_utils__WEBPACK_IMPORTED_MODULE_6__.defaultKey(key)];
      });
      _this.state = {
        values: values,
        prevProps: {}
      };
      return _this;
    }

    var _proto = UncontrolledComponent.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      //let setState trigger the update
      return !this._notifying;
    };

    UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
      var values = _ref2.values,
          prevProps = _ref2.prevProps;
      var nextState = {
        values: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object.create(null), values),
        prevProps: {}
      };
      controlledProps.forEach(function (key) {
        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */
        nextState.prevProps[key] = props[key];

        if (!_utils__WEBPACK_IMPORTED_MODULE_6__.isProp(props, key) && _utils__WEBPACK_IMPORTED_MODULE_6__.isProp(prevProps, key)) {
          nextState.values[key] = props[_utils__WEBPACK_IMPORTED_MODULE_6__.defaultKey(key)];
        }
      });
      return nextState;
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          innerRef = _this$props2.innerRef,
          props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props2, ["innerRef"]);

      PROPS_TO_OMIT.forEach(function (prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function (propName) {
        var propValue = _this2.props[propName];
        newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
      });
      return react__WEBPACK_IMPORTED_MODULE_3__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };

    return UncontrolledComponent;
  }(react__WEBPACK_IMPORTED_MODULE_3__.Component);

  (0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_4__.polyfill)(UncontrolledComponent);
  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    innerRef: function innerRef() {}
  }, _utils__WEBPACK_IMPORTED_MODULE_6__.uncontrolledPropTypes(controlledValues, displayName));
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;

      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;

  if (react__WEBPACK_IMPORTED_MODULE_3__.forwardRef) {
    WrappedComponent = react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_3__.createElement(UncontrolledComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        innerRef: ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }

  WrappedComponent.ControlledComponent = Component;
  /**
   * useful when wrapping a Component and you want to control
   * everything
   */

  WrappedComponent.deferControlTo = function (newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }

    return uncontrollable(newComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, controlledValues, additions), nextMethods);
  };

  return WrappedComponent;
}

/***/ }),

/***/ "./node_modules/uncontrollable/lib/esm/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/uncontrollable/lib/esm/utils.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uncontrolledPropTypes": () => (/* binding */ uncontrolledPropTypes),
/* harmony export */   "isProp": () => (/* binding */ isProp),
/* harmony export */   "defaultKey": () => (/* binding */ defaultKey),
/* harmony export */   "canAcceptRef": () => (/* binding */ canAcceptRef)
/* harmony export */ });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);


var noop = function noop() {};

function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}

function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function (prop) {
    // add default propTypes for folks that use runtime checks
    propTypes[defaultKey(prop)] = noop;

    if (true) {
      var handler = controlledValues[prop];
      !(typeof handler === 'string' && handler.trim().length) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_0___default()(false, 'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable', displayName, prop) : 0 : void 0;
      propTypes[prop] = readOnlyPropType(handler, displayName);
    }
  });
  return propTypes;
}
function isProp(props, prop) {
  return props[prop] !== undefined;
}
function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function canAcceptRef(component) {
  return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ })

}]);