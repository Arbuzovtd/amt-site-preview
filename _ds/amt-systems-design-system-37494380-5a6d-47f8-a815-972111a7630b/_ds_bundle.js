/* @ds-bundle: {"format":4,"namespace":"AMTSystemsDesignSystem_374943","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Pagination","sourcePath":"components/data/Pagination.jsx"},{"name":"PriceDelta","sourcePath":"components/data/PriceDelta.jsx"},{"name":"StatusPill","sourcePath":"components/data/StatusPill.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Toolbar","sourcePath":"components/navigation/Toolbar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"860ed2cf053f","components/core/Button.jsx":"342a05434c15","components/core/Card.jsx":"9ae3423d4789","components/core/Icon.jsx":"7006aad10ff3","components/core/IconButton.jsx":"774f97e73695","components/core/Tag.jsx":"42c5a58073f0","components/data/DataTable.jsx":"dd2c79fea51d","components/data/Pagination.jsx":"dce117cef6c7","components/data/PriceDelta.jsx":"9ff72dc7bc9d","components/data/StatusPill.jsx":"d8c1970cdf23","components/feedback/Banner.jsx":"51bb02d8fda1","components/feedback/Dialog.jsx":"0cf5fd09ef04","components/feedback/EmptyState.jsx":"d957c3cbbd27","components/feedback/Toast.jsx":"0240dbf164d9","components/feedback/Tooltip.jsx":"573e91caec9d","components/forms/Checkbox.jsx":"54d4cff12b61","components/forms/Field.jsx":"b0d0bddcfe9a","components/forms/Input.jsx":"29afd922f1f7","components/forms/Radio.jsx":"b94da4a21612","components/forms/Select.jsx":"97dae6ee0b19","components/forms/Switch.jsx":"07dba2ab6ed2","components/forms/Textarea.jsx":"f4175b86c997","components/navigation/Breadcrumbs.jsx":"193239ad586f","components/navigation/SidebarNav.jsx":"6732a0907683","components/navigation/Tabs.jsx":"618132ca3cab","components/navigation/Toolbar.jsx":"e100bcf4fe22","ui_kits/website/Sections.jsx":"e8b4842b1373","ui_kits/website/Site.jsx":"90298461fa42","ui_kits/zakupki/AppShell.jsx":"eed5c6d818b7","ui_kits/zakupki/Compare.jsx":"786fe952338b","ui_kits/zakupki/MatrixCompare.jsx":"aa85dfbd5c77","ui_kits/zakupki/ProductDialogs.jsx":"0593c06c36ac","ui_kits/zakupki/ProductScreensA.jsx":"ee7534ac8658","ui_kits/zakupki/ProductScreensB.jsx":"fb5d1bc11b81","ui_kits/zakupki/RedesignScreens.jsx":"680bd38a3adb","ui_kits/zakupki/RfqList.jsx":"4ad8791d03af","ui_kits/zakupki/SpecLines.jsx":"206abf8127c9","ui_kits/zakupki/SpecList.jsx":"e9669797e5ec","ui_kits/zakupki/Suppliers.jsx":"727b67dee2b0","ui_kits/zakupki/data.js":"426cb708e8c2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AMTSystemsDesignSystem_374943 = window.AMTSystemsDesignSystem_374943 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    bg: 'var(--gray-100)',
    fg: 'var(--gray-700)',
    bd: 'var(--gray-200)'
  },
  accent: {
    bg: 'var(--steel-50)',
    fg: 'var(--steel-700)',
    bd: 'var(--steel-100)'
  },
  attention: {
    bg: 'var(--ocher-50)',
    fg: 'var(--ocher-500)',
    bd: 'var(--ocher-100)'
  },
  success: {
    bg: 'var(--green-50)',
    fg: 'var(--green-600)',
    bd: 'var(--green-100)'
  },
  danger: {
    bg: 'var(--red-50)',
    fg: 'var(--red-600)',
    bd: 'var(--red-100)'
  }
};
function Badge({
  tone = 'neutral',
  variant = 'soft',
  children,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  const outline = variant === 'outline';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: 20,
      padding: '0 6px',
      font: 'var(--weight-medium) var(--text-xs)/1 var(--font-core)',
      color: t.fg,
      background: outline ? 'transparent' : t.bg,
      border: `1px solid ${outline ? t.fg : t.bd}`,
      borderRadius: 'var(--radius-badge)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  title,
  subtitle,
  actions,
  footer,
  padding = 'md',
  flush = false,
  children,
  style,
  ...rest
}) {
  const pad = padding === 'lg' ? 'var(--card-pad-lg)' : padding === 'sm' ? 'var(--space-3)' : 'var(--card-pad)';
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-card)',
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      ...style
    }
  }, rest), (title || actions) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: `var(--space-3) ${pad}`,
      borderBottom: 'var(--border-thin)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h4)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-heading)'
    }
  }, title) : null, subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, subtitle) : null), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      flex: '0 0 auto'
    }
  }, actions) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: flush ? 0 : pad,
      flex: 1,
      minWidth: 0
    }
  }, children), footer ? /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: `var(--space-3) ${pad}`,
      borderTop: 'var(--border-thin)',
      background: 'var(--surface-subtle)',
      borderRadius: '0 0 var(--radius-card) var(--radius-card)'
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef
} = React;
/* AMT Systems uses Lucide (24px grid, 2px stroke, round caps) as its icon set.
   The UMD bundle must be present on the page:
   <script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script> */
function Icon({
  name,
  size = 16,
  strokeWidth = 2,
  color = 'currentColor',
  style,
  ...rest
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = '<i data-lucide="' + name + '"></i>';
    window.lucide.createIcons({
      nameAttr: 'data-lucide',
      attrs: {
        width: size,
        height: size,
        'stroke-width': strokeWidth,
        stroke: color
      }
    });
  }, [name, size, strokeWidth, color]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flex: '0 0 auto',
      color,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    h: 'var(--control-h-sm)',
    px: 'var(--control-px-sm)',
    fs: 'var(--text-sm)',
    icon: 14,
    gap: 5
  },
  md: {
    h: 'var(--control-h-md)',
    px: 'var(--control-px-md)',
    fs: 'var(--text-base)',
    icon: 16,
    gap: 6
  },
  lg: {
    h: 'var(--control-h-lg)',
    px: 'var(--control-px-lg)',
    fs: 'var(--text-md)',
    icon: 18,
    gap: 8
  }
};
const variants = {
  primary: {
    bg: 'var(--action-primary)',
    color: 'var(--action-primary-text)',
    border: '1px solid var(--action-primary)',
    hover: 'var(--action-primary-hover)',
    active: 'var(--action-primary-active)'
  },
  secondary: {
    bg: 'var(--action-secondary-bg)',
    color: 'var(--text-body)',
    border: '1px solid var(--border-field)',
    hover: 'var(--action-secondary-hover)',
    active: 'var(--action-secondary-active)'
  },
  ghost: {
    bg: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid transparent',
    hover: 'var(--surface-hover)',
    active: 'var(--surface-active)'
  },
  danger: {
    bg: 'var(--action-danger)',
    color: 'var(--white)',
    border: '1px solid var(--action-danger)',
    hover: 'var(--action-danger-hover)',
    active: 'var(--red-700)'
  },
  link: {
    bg: 'transparent',
    color: 'var(--text-link)',
    border: '1px solid transparent',
    hover: 'transparent',
    active: 'transparent'
  }
};
function Button({
  variant = 'secondary',
  size = 'md',
  iconLeft,
  iconRight,
  loading = false,
  disabled = false,
  fullWidth = false,
  children,
  style,
  onClick,
  ...rest
}) {
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.secondary;
  const off = disabled || loading;
  const [state, setState] = React.useState('idle');
  const bg = off ? 'var(--action-disabled-bg)' : state === 'active' ? v.active : state === 'hover' ? v.hover : v.bg;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: off,
    onClick: onClick,
    onMouseEnter: () => !off && setState('hover'),
    onMouseLeave: () => setState('idle'),
    onMouseDown: () => !off && setState('active'),
    onMouseUp: () => !off && setState('hover'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.h,
      padding: `0 ${s.px}`,
      width: fullWidth ? '100%' : undefined,
      font: `var(--weight-medium) ${s.fs}/1 var(--font-core)`,
      letterSpacing: 'var(--tracking-normal)',
      color: off ? 'var(--text-disabled)' : v.color,
      background: variant === 'link' ? 'transparent' : bg,
      border: off ? '1px solid var(--border-hairline)' : v.border,
      borderColor: off ? 'var(--border-hairline)' : state !== 'idle' && variant === 'secondary' ? 'var(--border-field-hover)' : undefined,
      borderRadius: 'var(--radius-control)',
      textDecoration: variant === 'link' ? 'underline' : 'none',
      textUnderlineOffset: 2,
      cursor: off ? 'not-allowed' : 'pointer',
      transform: state === 'active' && !off ? 'scale(var(--press-scale))' : 'scale(1)',
      transition: 'var(--transition-hover), var(--transition-press)',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader-circle",
    size: s.icon,
    style: {
      animation: 'amt-spin 700ms linear infinite'
    }
  }) : iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }) : null, /*#__PURE__*/React.createElement("style", null, '@keyframes amt-spin{to{transform:rotate(360deg)}}'));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const box = {
  sm: 26,
  md: 32,
  lg: 40
};
const glyph = {
  sm: 14,
  md: 16,
  lg: 18
};
function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  label,
  active = false,
  disabled = false,
  style,
  ...rest
}) {
  const [state, setState] = React.useState('idle');
  const solid = variant === 'solid';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => !disabled && setState('hover'),
    onMouseLeave: () => setState('idle'),
    onMouseDown: () => !disabled && setState('press'),
    onMouseUp: () => !disabled && setState('hover'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: box[size],
      height: box[size],
      padding: 0,
      color: disabled ? 'var(--text-disabled)' : solid ? 'var(--white)' : active ? 'var(--text-accent)' : 'var(--text-secondary)',
      background: solid ? 'var(--action-primary)' : active ? 'var(--surface-selected)' : state === 'idle' ? 'transparent' : 'var(--surface-hover)',
      border: variant === 'outline' ? '1px solid var(--border-field)' : '1px solid transparent',
      borderRadius: 'var(--radius-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transform: state === 'press' ? 'scale(var(--press-scale))' : 'scale(1)',
      transition: 'var(--transition-hover), var(--transition-press)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: glyph[size]
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  onRemove,
  tone = 'neutral',
  style,
  ...rest
}) {
  const accent = tone === 'accent';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: 24,
      padding: onRemove ? '0 4px 0 8px' : '0 8px',
      font: 'var(--weight-regular) var(--text-sm)/1 var(--font-core)',
      color: accent ? 'var(--steel-700)' : 'var(--text-body)',
      background: accent ? 'var(--steel-50)' : 'var(--gray-50)',
      border: `1px solid ${accent ? 'var(--steel-100)' : 'var(--border-hairline)'}`,
      borderRadius: 'var(--radius-md)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "\u0423\u0431\u0440\u0430\u0442\u044C",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 16,
      height: 16,
      padding: 0,
      border: 0,
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      borderRadius: 'var(--radius-xs)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/PriceDelta.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PriceDelta({
  value = 0,
  format,
  showIcon = true,
  style,
  ...rest
}) {
  const up = value > 0,
    flat = value === 0;
  const color = flat ? 'var(--text-muted)' : up ? 'var(--text-danger)' : 'var(--text-success)';
  const text = format ? format(value) : (up ? '+' : '') + value.toLocaleString('ru-RU', {
    maximumFractionDigits: 1
  }) + '%';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      font: 'var(--type-numeric)',
      fontVariantNumeric: 'tabular-nums',
      color,
      ...style
    }
  }, rest), showIcon && !flat ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: up ? 'arrow-up-right' : 'arrow-down-right',
    size: 13
  }) : null, text);
}
Object.assign(__ds_scope, { PriceDelta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/PriceDelta.jsx", error: String((e && e.message) || e) }); }

// components/data/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const map = {
  draft: {
    label: 'Черновик',
    fg: 'var(--gray-700)',
    bg: 'var(--gray-100)',
    dot: 'var(--gray-400)'
  },
  sent: {
    label: 'Запрос отправлен',
    fg: 'var(--steel-700)',
    bg: 'var(--steel-50)',
    dot: 'var(--steel-500)'
  },
  waiting: {
    label: 'Ждём КП',
    fg: 'var(--ocher-500)',
    bg: 'var(--ocher-50)',
    dot: 'var(--ocher-300)'
  },
  overdue: {
    label: 'Просрочено',
    fg: 'var(--red-600)',
    bg: 'var(--red-50)',
    dot: 'var(--red-500)'
  },
  received: {
    label: 'КП получено',
    fg: 'var(--steel-700)',
    bg: 'var(--steel-50)',
    dot: 'var(--steel-400)'
  },
  approved: {
    label: 'Согласовано',
    fg: 'var(--green-600)',
    bg: 'var(--green-50)',
    dot: 'var(--green-500)'
  },
  rejected: {
    label: 'Отклонено',
    fg: 'var(--red-600)',
    bg: 'var(--red-50)',
    dot: 'var(--red-500)'
  },
  won: {
    label: 'Выиграно',
    fg: 'var(--green-700)',
    bg: 'var(--green-100)',
    dot: 'var(--green-600)'
  },
  lost: {
    label: 'Проиграно',
    fg: 'var(--gray-600)',
    bg: 'var(--gray-100)',
    dot: 'var(--gray-400)'
  }
};
function StatusPill({
  status = 'draft',
  label,
  style,
  ...rest
}) {
  const s = map[status] || map.draft;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      height: 20,
      padding: '0 8px 0 6px',
      font: 'var(--weight-medium) var(--text-xs)/1 var(--font-core)',
      color: s.fg,
      background: s.bg,
      borderRadius: 'var(--radius-status)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 'var(--radius-pill)',
      background: s.dot,
      flex: '0 0 auto'
    }
  }), label || s.label);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  info: {
    bg: 'var(--steel-50)',
    bd: 'var(--steel-100)',
    fg: 'var(--steel-700)',
    icon: 'info'
  },
  attention: {
    bg: 'var(--ocher-50)',
    bd: 'var(--ocher-100)',
    fg: 'var(--ocher-500)',
    icon: 'triangle-alert'
  },
  danger: {
    bg: 'var(--red-50)',
    bd: 'var(--red-100)',
    fg: 'var(--red-600)',
    icon: 'circle-alert'
  },
  success: {
    bg: 'var(--green-50)',
    bd: 'var(--green-100)',
    fg: 'var(--green-600)',
    icon: 'circle-check'
  }
};
function Banner({
  tone = 'info',
  title,
  children,
  action,
  onClose,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-2-5)',
      padding: 'var(--space-3) var(--space-3-5, 12px)',
      background: t.bg,
      border: `1px solid ${t.bd}`,
      borderRadius: 'var(--radius-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 1,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 16,
    color: t.fg
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--weight-semibold) var(--text-sm)/1.35 var(--font-core)',
      color: t.fg
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      marginTop: title ? 2 : 0,
      maxWidth: 'var(--measure-prose)'
    }
  }, children)), action ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto'
    }
  }, action) : null, onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\u0421\u043A\u0440\u044B\u0442\u044C",
    onClick: onClose,
    style: {
      display: 'inline-flex',
      width: 20,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
      border: 0,
      background: 'transparent',
      color: t.fg,
      cursor: 'pointer',
      borderRadius: 'var(--radius-xs)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13
  })) : null);
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  description,
  width = 520,
  onClose,
  footer,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 'var(--z-dialog)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-scrim)',
      padding: 'var(--space-6)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      maxHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-dialog)',
      transformOrigin: 'center',
      animation: 'amt-dialog-in var(--dur-dialog) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) var(--space-5)',
      borderBottom: 'var(--border-thin)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-heading)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-secondary)',
      marginTop: 4,
      maxWidth: 'var(--measure-narrow)'
    }
  }, description) : null), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    onClick: onClose,
    style: {
      display: 'inline-flex',
      width: 26,
      height: 26,
      alignItems: 'center',
      justifyContent: 'center',
      border: 0,
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      overflowY: 'auto',
      flex: 1
    }
  }, children), footer ? /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-2)',
      padding: 'var(--space-3) var(--space-5)',
      borderTop: 'var(--border-thin)',
      background: 'var(--surface-subtle)',
      borderRadius: '0 0 var(--radius-card) var(--radius-card)'
    }
  }, footer) : null, /*#__PURE__*/React.createElement("style", null, '@keyframes amt-dialog-in{from{opacity:0;transform:scale(.97)}to{opacity:1;transform:scale(1)}}')));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EmptyState({
  icon = 'inbox',
  title,
  description,
  action,
  compact = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      padding: compact ? 'var(--space-8) var(--space-4)' : 'var(--space-16) var(--space-6)',
      textAlign: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-sunken)',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-1)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-h4)',
      color: 'var(--text-primary)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure-narrow)'
    }
  }, description) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, action) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  info: {
    icon: 'info',
    color: 'var(--steel-500)'
  },
  success: {
    icon: 'circle-check',
    color: 'var(--green-500)'
  },
  attention: {
    icon: 'triangle-alert',
    color: 'var(--ocher-300)'
  },
  danger: {
    icon: 'circle-x',
    color: 'var(--red-500)'
  }
};
function Toast({
  tone = 'info',
  title,
  description,
  action,
  onClose,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-2-5)',
      width: 380,
      maxWidth: '100%',
      padding: 'var(--space-3)',
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 1,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 16,
    color: t.color
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--weight-medium) var(--text-sm)/1.35 var(--font-core)',
      color: 'var(--text-primary)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, description) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, action) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\u0421\u043A\u0440\u044B\u0442\u044C",
    onClick: onClose,
    style: {
      display: 'inline-flex',
      width: 20,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
      border: 0,
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      borderRadius: 'var(--radius-xs)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  side = 'top',
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-6px)',
      origin: 'bottom center'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,6px)',
      origin: 'top center'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(6px,-50%)',
      origin: 'center left'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-6px,-50%)',
      origin: 'center right'
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, open ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 'var(--z-tooltip)',
      whiteSpace: 'nowrap',
      padding: '4px 8px',
      background: 'var(--gray-900)',
      color: 'var(--white)',
      font: 'var(--weight-regular) var(--text-xs)/1.3 var(--font-core)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      pointerEvents: 'none',
      transformOrigin: pos.origin,
      animation: 'amt-tip-in var(--dur-tooltip) var(--ease-out)',
      bottom: pos.bottom,
      top: pos.top,
      left: pos.left,
      right: pos.right,
      transform: pos.transform
    }
  }, label, /*#__PURE__*/React.createElement("style", null, '@keyframes amt-tip-in{from{opacity:0}to{opacity:1}}')) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked = false,
  indeterminate = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      userSelect: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 16,
      height: 16,
      flex: '0 0 auto',
      background: disabled ? 'var(--surface-sunken)' : on ? 'var(--action-primary)' : 'var(--surface-card)',
      border: '1px solid ' + (disabled ? 'var(--border-hairline)' : on ? 'var(--action-primary)' : 'var(--border-field)'),
      borderRadius: 'var(--radius-xs)',
      color: 'var(--white)',
      transition: 'var(--transition-hover)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 12
  }) : checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12
  }) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-body)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  density = 'default',
  selectable = false,
  selected = [],
  onSelect,
  sort,
  onSort,
  stickyHeader = true,
  zebra = true,
  totals,
  rowKey = (r, i) => r.id ?? i,
  onRowClick,
  style,
  ...rest
}) {
  const h = density === 'compact' ? 'var(--row-h-compact)' : density === 'comfortable' ? 'var(--row-h-comfortable)' : 'var(--row-h-default)';
  const [hovered, setHovered] = React.useState(null);
  const allOn = selectable && rows.length > 0 && selected.length === rows.length;
  const cell = col => ({
    padding: '0 var(--cell-px)',
    textAlign: col.align || 'left',
    font: col.numeric ? 'var(--type-numeric)' : 'var(--type-body-sm)',
    fontVariantNumeric: col.numeric ? 'tabular-nums' : undefined,
    color: col.muted ? 'var(--text-muted)' : 'var(--text-body)',
    borderRight: 'var(--border-cell)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: col.width
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflow: 'auto',
      background: 'var(--surface-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      tableLayout: 'fixed'
    }
  }, /*#__PURE__*/React.createElement("colgroup", null, selectable ? /*#__PURE__*/React.createElement("col", {
    style: {
      width: 34
    }
  }) : null, columns.map((c, i) => /*#__PURE__*/React.createElement("col", {
    key: i,
    style: {
      width: c.width
    }
  }))), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, selectable ? /*#__PURE__*/React.createElement("th", {
    style: {
      position: stickyHeader ? 'sticky' : undefined,
      top: 0,
      zIndex: 'var(--z-sticky)',
      height: 'var(--row-h-default)',
      background: 'var(--table-header-bg)',
      borderBottom: '1px solid var(--border-default)',
      borderRight: 'var(--border-cell)',
      padding: '0 0 0 9px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    checked: allOn,
    indeterminate: !allOn && selected.length > 0,
    onChange: () => onSelect && onSelect(allOn ? [] : rows.map(rowKey))
  })) : null, columns.map((col, i) => {
    const active = sort && sort.key === col.key;
    return /*#__PURE__*/React.createElement("th", {
      key: col.key || i,
      onClick: () => col.sortable && onSort && onSort(col.key, active && sort.dir === 'asc' ? 'desc' : 'asc'),
      style: {
        position: stickyHeader ? 'sticky' : undefined,
        top: 0,
        zIndex: 'var(--z-sticky)',
        height: 'var(--row-h-default)',
        padding: '0 var(--cell-px)',
        textAlign: col.align || 'left',
        verticalAlign: 'middle',
        font: 'var(--weight-semibold) var(--text-xs)/1.2 var(--font-core)',
        letterSpacing: 'var(--tracking-label)',
        color: active ? 'var(--text-accent)' : 'var(--text-secondary)',
        background: 'var(--table-header-bg)',
        borderBottom: '1px solid var(--border-default)',
        borderRight: 'var(--border-cell)',
        cursor: col.sortable ? 'pointer' : 'default',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        justifyContent: col.align === 'right' ? 'flex-end' : 'flex-start',
        width: '100%'
      }
    }, col.header, col.sortable ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: active ? sort.dir === 'asc' ? 'arrow-up' : 'arrow-down' : 'chevrons-up-down',
      size: 12,
      color: active ? 'var(--text-accent)' : 'var(--gray-400)'
    }) : null));
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, ri) => {
    const key = rowKey(row, ri);
    const isSel = selected.includes(key);
    const isHov = hovered === key;
    return /*#__PURE__*/React.createElement("tr", {
      key: key,
      onMouseEnter: () => setHovered(key),
      onMouseLeave: () => setHovered(null),
      onClick: () => onRowClick && onRowClick(row),
      style: {
        height: h,
        background: isSel ? isHov ? 'var(--table-row-selected-hover)' : 'var(--table-row-selected)' : isHov ? 'var(--table-row-hover)' : zebra && ri % 2 ? 'var(--table-row-alt)' : 'var(--surface-card)',
        cursor: onRowClick ? 'pointer' : 'default',
        transition: 'background-color var(--dur-hover) var(--ease-standard)'
      }
    }, selectable ? /*#__PURE__*/React.createElement("td", {
      style: {
        borderBottom: 'var(--border-cell)',
        borderRight: 'var(--border-cell)',
        padding: '0 0 0 9px'
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
      checked: isSel,
      onChange: () => onSelect && onSelect(isSel ? selected.filter(k => k !== key) : [...selected, key])
    })) : null, columns.map((col, ci) => /*#__PURE__*/React.createElement("td", {
      key: col.key || ci,
      style: {
        ...cell(col),
        borderBottom: 'var(--border-cell)',
        background: col.emphasis && !isSel && !isHov ? col.emphasis === 'formula' ? 'var(--table-cell-formula)' : 'var(--table-cell-edited)' : undefined
      }
    }, col.render ? col.render(row, ri) : row[col.key])));
  })), totals ? /*#__PURE__*/React.createElement("tfoot", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      height: 'var(--row-h-default)',
      background: 'var(--table-total-bg)'
    }
  }, selectable ? /*#__PURE__*/React.createElement("td", {
    style: {
      borderTop: '1px solid var(--border-default)'
    }
  }) : null, columns.map((col, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      ...cell(col),
      borderTop: '1px solid var(--border-default)',
      font: col.numeric ? 'var(--type-numeric-strong)' : 'var(--weight-semibold) var(--text-sm)/1.3 var(--font-core)',
      color: 'var(--text-primary)'
    }
  }, totals[col.key])))) : null));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  layout = 'stacked',
  children,
  style,
  ...rest
}) {
  const row = layout === 'row';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: row ? 'grid' : 'flex',
      gridTemplateColumns: row ? '180px 1fr' : undefined,
      flexDirection: row ? undefined : 'column',
      gap: row ? 'var(--space-4)' : 'var(--space-1-5)',
      alignItems: row ? 'start' : undefined,
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-secondary)',
      paddingTop: row ? 7 : 0
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-danger)',
      marginLeft: 2
    }
  }, "*") : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, children, error ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-danger)',
      marginTop: 'var(--space-1)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-1)'
    }
  }, hint) : null));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  iconLeft,
  suffix,
  invalid = false,
  disabled = false,
  align = 'left',
  numeric = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 'var(--control-h-md)',
      padding: '0 var(--control-px-md)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: '1px solid ' + (invalid ? 'var(--border-danger)' : focused ? 'var(--border-focus)' : hover && !disabled ? 'var(--border-field-hover)' : 'var(--border-field)'),
      boxShadow: focused ? 'inset 0 0 0 1px ' + (invalid ? 'var(--red-500)' : 'var(--steel-500)') : 'var(--shadow-inset-field)',
      borderRadius: 'var(--radius-field)',
      transition: 'var(--transition-hover), box-shadow var(--dur-hover) var(--ease-standard)',
      ...style
    }
  }, iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 15,
    color: "var(--text-muted)"
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      padding: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: numeric ? 'var(--type-numeric)' : 'var(--type-body)',
      fontVariantNumeric: numeric ? 'tabular-nums' : undefined,
      color: disabled ? 'var(--text-disabled)' : 'var(--text-body)',
      textAlign: align
    }
  }, rest)), suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      flex: '0 0 auto'
    }
  }, suffix) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  checked = false,
  onChange,
  label,
  description,
  name,
  value,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 'var(--space-2)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 16,
      height: 16,
      flex: '0 0 auto',
      marginTop: description ? 2 : 0,
      background: 'var(--surface-card)',
      border: '1px solid ' + (checked ? 'var(--action-primary)' : 'var(--border-field)'),
      borderRadius: 'var(--radius-pill)',
      transition: 'var(--transition-hover)'
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--action-primary)'
    }
  }) : null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-body-sm)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-body)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      marginTop: 1
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  value,
  onChange,
  placeholder = 'Выберите',
  size = 'md',
  invalid = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const h = size === 'sm' ? 'var(--control-h-sm)' : 'var(--control-h-md)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'block',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      height: h,
      padding: '0 30px 0 var(--control-px-md)',
      font: size === 'sm' ? 'var(--type-body-sm)' : 'var(--type-body)',
      color: value ? 'var(--text-body)' : 'var(--text-muted)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: '1px solid ' + (invalid ? 'var(--border-danger)' : focused ? 'var(--border-focus)' : 'var(--border-field)'),
      boxShadow: focused ? 'inset 0 0 0 1px var(--steel-500)' : 'var(--shadow-inset-field)',
      borderRadius: 'var(--radius-field)',
      outline: 'none',
      appearance: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-hover), box-shadow var(--dur-hover) var(--ease-standard)'
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 9,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 15,
    color: "var(--text-muted)"
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/data/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Pagination({
  page = 1,
  pageCount = 1,
  pageSize = 50,
  total = 0,
  onPageChange,
  onPageSizeChange,
  style,
  ...rest
}) {
  const from = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, total);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: 'var(--space-2) var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, from, "\u2013", to, " \u0438\u0437 ", total), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    size: "sm",
    placeholder: "",
    value: String(pageSize),
    onChange: e => onPageSizeChange && onPageSizeChange(Number(e.target.value)),
    options: [{
      value: '25',
      label: '25 строк'
    }, {
      value: '50',
      label: '50 строк'
    }, {
      value: '100',
      label: '100 строк'
    }, {
      value: '500',
      label: '500 строк'
    }],
    style: {
      width: 108
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-left",
    size: "sm",
    variant: "outline",
    label: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
    disabled: page <= 1,
    onClick: () => onPageChange && onPageChange(page - 1)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-numeric)',
      color: 'var(--text-body)',
      minWidth: 54,
      textAlign: 'center'
    }
  }, page, " / ", pageCount), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-right",
    size: "sm",
    variant: "outline",
    label: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
    disabled: page >= pageCount,
    onClick: () => onPageChange && onPageChange(page + 1)
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      userSelect: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 32,
      height: 18,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: disabled ? 'var(--gray-200)' : checked ? 'var(--action-primary)' : 'var(--gray-300)',
      transition: 'background-color var(--dur-hover) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 16 : 2,
      width: 14,
      height: 14,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--dur-hover) var(--ease-out)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-body)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  invalid = false,
  disabled = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      padding: 'var(--space-2) var(--control-px-md)',
      resize: 'vertical',
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: '1px solid ' + (invalid ? 'var(--border-danger)' : focused ? 'var(--border-focus)' : 'var(--border-field)'),
      boxShadow: focused ? 'inset 0 0 0 1px var(--steel-500)' : 'var(--shadow-inset-field)',
      borderRadius: 'var(--radius-field)',
      outline: 'none',
      transition: 'var(--transition-hover), box-shadow var(--dur-hover) var(--ease-standard)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumbs({
  items = [],
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      minWidth: 0,
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, i > 0 ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 13,
      color: "var(--gray-400)"
    }) : null, /*#__PURE__*/React.createElement("button", {
      type: "button",
      disabled: last,
      onClick: () => onNavigate && onNavigate(it, i),
      style: {
        font: `var(--weight-${last ? 'semibold' : 'regular'}) var(--text-sm)/1 var(--font-core)`,
        color: last ? 'var(--text-primary)' : 'var(--text-secondary)',
        background: 'transparent',
        border: 0,
        padding: '2px 2px',
        cursor: last ? 'default' : 'pointer',
        textDecoration: 'none',
        maxWidth: 260,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SidebarNav({
  items = [],
  activeId,
  onSelect,
  collapsed = false,
  footer,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      width: collapsed ? 'var(--sidebar-w-collapsed)' : 'var(--sidebar-w)',
      flex: '0 0 auto',
      background: 'var(--surface-sidebar)',
      color: 'var(--text-on-dark-secondary)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden',
      transition: 'width var(--dur-drawer) var(--ease-drawer)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 'var(--space-2)',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      overflowY: 'auto'
    }
  }, items.map(item => item.section ? collapsed ? /*#__PURE__*/React.createElement("div", {
    key: item.section,
    style: {
      height: 1,
      background: 'var(--gray-700)',
      margin: '8px 6px'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    key: item.section,
    style: {
      font: 'var(--type-overline)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--gray-400)',
      padding: '14px 8px 6px'
    }
  }, item.section) : /*#__PURE__*/React.createElement(SidebarItem, {
    key: item.id,
    item: item,
    active: item.id === activeId,
    collapsed: collapsed,
    onSelect: onSelect
  }))), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--gray-700)',
      padding: 'var(--space-2)'
    }
  }, footer) : null);
}
function SidebarItem({
  item,
  active,
  collapsed,
  onSelect
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    title: collapsed ? item.label : undefined,
    onClick: () => onSelect && onSelect(item.id),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2-5)',
      width: '100%',
      height: 32,
      padding: collapsed ? 0 : '0 8px',
      justifyContent: collapsed ? 'center' : 'flex-start',
      font: 'var(--weight-medium) var(--text-sm)/1 var(--font-core)',
      textAlign: 'left',
      color: active ? 'var(--white)' : hover ? 'var(--gray-100)' : 'var(--gray-300)',
      background: active ? 'var(--steel-600)' : hover ? 'var(--gray-700)' : 'transparent',
      border: 0,
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      transition: 'var(--transition-hover)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: item.icon,
    size: 16
  }), !collapsed ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, item.label) : null, !collapsed && item.count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-numeric)',
      fontSize: 'var(--text-2xs)',
      color: active ? 'var(--steel-100)' : 'var(--gray-400)'
    }
  }, item.count) : null);
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  style,
  ...rest
}) {
  const seg = variant === 'segmented';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: seg ? 2 : 'var(--space-5)',
      padding: seg ? 2 : 0,
      background: seg ? 'var(--surface-sunken)' : 'transparent',
      borderRadius: seg ? 'var(--radius-lg)' : 0,
      borderBottom: seg ? 'none' : '1px solid var(--border-hairline)',
      ...style
    }
  }, rest), items.map(t => {
    const on = t.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => onChange && onChange(t.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: seg ? 26 : 34,
        padding: seg ? '0 10px' : '0 0 0 0',
        font: `var(--weight-${on ? 'semibold' : 'medium'}) var(--text-sm)/1 var(--font-core)`,
        color: on ? seg ? 'var(--text-primary)' : 'var(--text-accent)' : 'var(--text-secondary)',
        background: seg && on ? 'var(--surface-card)' : 'transparent',
        boxShadow: seg && on ? 'var(--shadow-xs)' : 'none',
        border: 0,
        borderBottom: seg ? 'none' : `2px solid ${on ? 'var(--action-primary)' : 'transparent'}`,
        borderRadius: seg ? 'var(--radius-md)' : 0,
        marginBottom: seg ? 0 : -1,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'var(--transition-hover)'
      }
    }, t.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 14
    }) : null, t.label, t.count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-numeric)',
        fontSize: 'var(--text-2xs)',
        color: 'var(--text-muted)'
      }
    }, t.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Toolbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toolbar({
  left,
  right,
  dense = false,
  sunken = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      minHeight: dense ? 'var(--subbar-h)' : 'var(--topbar-h)',
      padding: dense ? '0 var(--space-3)' : '0 var(--space-4)',
      background: sunken ? 'var(--surface-subtle)' : 'var(--surface-card)',
      borderBottom: 'var(--border-thin)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      minWidth: 0
    }
  }, left), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      flex: '0 0 auto'
    }
  }, right));
}
Object.assign(__ds_scope, { Toolbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Toolbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
const {
  Button,
  Icon,
  Badge,
  StatusPill
} = window.AMTSystemsDesignSystem_374943;
const w = window.siteWrap;
function Problem() {
  const items = [['Спецификация живёт в почте', 'Пятнадцать версий одного файла, правки теряются, кто прислал последнюю — выясняется по датам писем.'], ['Сравнение считается руками', 'Шесть КП сводятся в отдельный лист. На 300 позициях одна формула уезжает — и итог неверен.'], ['История решения не восстанавливается', 'Через полгода никто не скажет, почему выбрали этого поставщика и какая была вторая цена.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...w,
      paddingTop: 84,
      paddingBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h1)',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--text-primary)',
      maxWidth: '20ch'
    }
  }, "\u0422\u0430\u043A \u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u0442\u0435\u043D\u0434\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0434\u0435\u043B \u0431\u0435\u0437 \u0441\u0438\u0441\u0442\u0435\u043C\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 0,
      marginTop: 28,
      borderTop: '1px solid var(--border-hairline)'
    }
  }, items.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,320px) minmax(0,1fr)',
      gap: 40,
      padding: '22px 0',
      borderBottom: '1px solid var(--border-hairline)',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--text-primary)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-secondary)',
      maxWidth: '62ch'
    }
  }, d)))));
}
function Flow() {
  const steps = [['file-input', 'Импорт', 'Спецификация загружается из Excel как есть — с объединёнными ячейками, единицами и артикулами. Система сама размечает столбцы.'], ['send', 'Запрос', 'Один запрос уходит выбранным поставщикам. Ответы разбираются автоматически и ложатся в те же строки.'], ['columns-3', 'Сравнение', 'Матрица цен по позициям: лучшее предложение по строке, покрытие спецификации, итог по каждому КП.'], ['shield-check', 'Решение', 'Выбор фиксируется вместе с историей: кто, когда и на каком основании.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-canvas)',
      borderTop: 'var(--border-thin)',
      borderBottom: 'var(--border-thin)',
      padding: '72px 0',
      marginTop: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: w
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h1)',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--text-primary)'
    }
  }, "\u0427\u0435\u0442\u044B\u0440\u0435 \u0448\u0430\u0433\u0430 \u0432\u043C\u0435\u0441\u0442\u043E \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24,
      marginTop: 32
    }
  }, steps.map(([icon, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'grid',
      gap: 10,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--steel-500)',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    color: "var(--white)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--text-primary)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, d))))));
}
function OnPrem() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-header)',
      padding: '76px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...w,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,440px)',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--weight-semibold) 34px/1.15 var(--font-display)',
      letterSpacing: '-0.02em',
      color: 'var(--white)',
      maxWidth: '18ch'
    }
  }, "\u0426\u0435\u043D\u044B \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u043E\u0432 \u043D\u0435 \u0443\u0435\u0437\u0436\u0430\u044E\u0442 \u0432 \u043E\u0431\u043B\u0430\u043A\u043E"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--gray-300)',
      marginTop: 16,
      maxWidth: '54ch'
    }
  }, "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044F \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438. \u0412\u0430\u0448\u0430 \u0431\u0430\u0437\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u043E\u0432, \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u0446\u0435\u043D \u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0437\u0430\u043A\u0443\u043F\u043E\u043A \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438 \u043D\u0435 \u043F\u043E\u043A\u0438\u0434\u0430\u044E\u0442 \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u2014 \u044D\u0442\u043E \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    iconLeft: "server"
  }, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    style: {
      background: 'transparent',
      color: 'var(--white)',
      borderColor: 'var(--gray-600)'
    }
  }, "\u0421\u0445\u0435\u043C\u0430 \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u044B\u0432\u0430\u043D\u0438\u044F"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 1,
      background: 'var(--gray-700)',
      border: '1px solid var(--gray-700)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, [['Развёртывание', 'ваш сервер / изолированный контур'], ['СУБД', 'PostgreSQL 14+'], ['Аутентификация', 'Active Directory, LDAP'], ['Роли', 'тендерный отдел, снабжение, руководитель'], ['Резервные копии', 'по расписанию, на ваше хранилище']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 20,
      padding: '13px 16px',
      background: 'var(--gray-800)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--gray-400)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--white)',
      textAlign: 'right'
    }
  }, v))))));
}
function Fit() {
  const yes = ['от 100 позиций в спецификации', 'пять и больше поставщиков на запрос', 'от 10 расчётов и КП в месяц', 'команда от трёх человек', 'своя база поставщиков'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...w,
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h1)',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--text-primary)',
      maxWidth: '16ch'
    }
  }, "\u041A\u043E\u043C\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u043A\u0443\u043F\u0430\u0435\u0442\u0441\u044F"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-secondary)',
      marginTop: 14,
      maxWidth: '46ch'
    }
  }, "\u041C\u044B \u0447\u0435\u0441\u0442\u043D\u043E \u0433\u043E\u0432\u043E\u0440\u0438\u043C, \u043A\u043E\u0433\u0434\u0430 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u043D\u0435 \u043D\u0443\u0436\u043D\u043E: \u043F\u0440\u0438 \u0434\u0432\u0443\u0445 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430\u0445 \u0438 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u043D\u0430 20 \u0441\u0442\u0440\u043E\u043A Excel \u0441\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10,
      alignContent: 'start'
    }
  }, yes.map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '11px 14px',
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 16,
    color: "var(--green-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, t))))));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-canvas)',
      borderTop: 'var(--border-thin)',
      padding: '64px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...w,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--text-primary)'
    }
  }, "\u041F\u043E\u043A\u0430\u0436\u0435\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043D\u0430 \u0432\u0430\u0448\u0435\u0439 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-secondary)',
      marginTop: 8,
      maxWidth: '58ch'
    }
  }, "\u041F\u0440\u0438\u0448\u043B\u0438\u0442\u0435 \u043E\u0434\u0438\u043D Excel-\u0444\u0430\u0439\u043B \u2014 \u043D\u0430 \u0434\u0435\u043C\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043C \u0435\u0433\u043E \u0438 \u0440\u0430\u0437\u043E\u0448\u043B\u0451\u043C \u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441. \u0421\u043E\u0440\u043E\u043A \u043C\u0438\u043D\u0443\u0442.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    iconRight: "chevron-right"
  }, "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u0434\u0435\u043C\u043E")));
}
Object.assign(window, {
  Problem,
  Flow,
  OnPrem,
  Fit,
  CTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Site.jsx
try { (() => {
const {
  Button,
  Icon,
  DataTable,
  StatusPill,
  PriceDelta,
  Badge,
  Tag
} = window.AMTSystemsDesignSystem_374943;
const wrap = {
  maxWidth: 1160,
  margin: '0 auto',
  padding: '0 32px'
};
function SiteHeader() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: 'var(--border-thin)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 19px/1 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--gray-900)'
    }
  }, "AMT"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 19px/1 var(--font-sans)',
      letterSpacing: '-0.01em',
      color: 'var(--text-secondary)'
    }
  }, "Systems")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 26
    }
  }, ['Продукт', 'Возможности', 'Внедрение', 'Безопасность', 'Цены'].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-secondary)',
      textDecoration: 'none'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost"
  }, "\u0412\u043E\u0439\u0442\u0438"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary"
  }, "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u0434\u0435\u043C\u043E"))));
}
function Hero() {
  const m = window.money;
  const rows = window.LINES.slice(0, 6).map(l => ({
    ...l,
    sum: l.qty * l.price,
    delta: l.base ? (l.price - l.base) / l.base * 100 : 0
  }));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: 'var(--border-thin)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,440px) minmax(0,1fr)',
      gap: 56,
      alignItems: 'center',
      padding: '72px 32px 0'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--weight-semibold) 44px/1.1 var(--font-display)',
      letterSpacing: '-0.028em',
      color: 'var(--text-primary)',
      textWrap: 'balance'
    }
  }, "\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043D\u0430 800 \u043F\u043E\u0437\u0438\u0446\u0438\u0439 \u0438 \u0448\u0435\u0441\u0442\u044C \u041A\u041F \u2014 \u0432 \u043E\u0434\u043D\u043E\u0439 \u0442\u0430\u0431\u043B\u0438\u0446\u0435"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-secondary)',
      marginTop: 18,
      maxWidth: '46ch'
    }
  }, "\u0418\u0410\u0421 \xAB\u0417\u0430\u043A\u0443\u043F\u043A\u0438\xBB \u0440\u0430\u0437\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0432\u0430\u0448\u0435\u043C \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u0437\u0430\u0431\u0438\u0440\u0430\u0435\u0442 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E \u0438\u0437 Excel, \u0440\u0430\u0441\u0441\u044B\u043B\u0430\u0435\u0442 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430\u043C \u0438 \u0441\u0432\u043E\u0434\u0438\u0442 \u043E\u0442\u0432\u0435\u0442\u044B \u0432 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u2014 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0438 \u0432 \u043F\u043E\u0447\u0442\u0435 \u0438 \u0434\u0435\u0441\u044F\u0442\u0438 \u0432\u0435\u0440\u0441\u0438\u0439 \u0444\u0430\u0439\u043B\u0430."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    iconLeft: "calendar-check"
  }, "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u0434\u0435\u043C\u043E"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    iconRight: "chevron-right"
  }, "\u041A\u0430\u043A \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      marginTop: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "server",
    size: 14
  }), " On-premise. \u0414\u0430\u043D\u043D\u044B\u0435 \u043E \u0446\u0435\u043D\u0430\u0445 \u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430\u0445 \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0432 \u0432\u0430\u0448\u0435\u043C \u043A\u043E\u043D\u0442\u0443\u0440\u0435.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginBottom: -1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-2xl) var(--radius-2xl) 0 0',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 34,
      background: 'var(--surface-header)',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 12px/1 var(--font-sans)',
      letterSpacing: '-0.02em',
      color: 'var(--white)'
    }
  }, "AMT"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--gray-400)'
    }
  }, "\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u21164 \u2014 \u041F\u0421 110/10 \u043A\u0412 \xAB\u0421\u0435\u0432\u0435\u0440\u043D\u0430\u044F\xBB"), /*#__PURE__*/React.createElement(StatusPill, {
    status: "received",
    style: {
      marginLeft: 'auto'
    }
  })), /*#__PURE__*/React.createElement(DataTable, {
    density: "compact",
    rowKey: r => r.id,
    totals: {
      name: 'Итого',
      sum: m(rows.reduce((a, r) => a + r.sum, 0))
    },
    columns: [{
      key: 'id',
      header: '№',
      width: 40,
      numeric: true,
      align: 'right',
      muted: true
    }, {
      key: 'name',
      header: 'Наименование',
      width: '32%'
    }, {
      key: 'qty',
      header: 'Кол-во',
      width: 74,
      numeric: true,
      align: 'right',
      render: r => m(r.qty, 0)
    }, {
      key: 'price',
      header: 'Цена, ₽',
      width: 92,
      numeric: true,
      align: 'right',
      render: r => m(r.price)
    }, {
      key: 'sum',
      header: 'Сумма, ₽',
      width: 108,
      numeric: true,
      align: 'right',
      emphasis: 'formula',
      render: r => m(r.sum)
    }, {
      key: 'delta',
      header: 'Δ',
      width: 74,
      align: 'right',
      render: r => /*#__PURE__*/React.createElement(PriceDelta, {
        value: Math.round(r.delta * 10) / 10
      })
    }, {
      key: 'st',
      header: 'Статус',
      width: 132,
      render: r => /*#__PURE__*/React.createElement(StatusPill, {
        status: r.st
      })
    }],
    rows: rows
  })))));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-header)',
      color: 'var(--gray-400)',
      paddingTop: 48,
      paddingBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 18px/1 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--white)'
    }
  }, "AMT"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 18px/1 var(--font-sans)',
      color: 'var(--gray-300)'
    }
  }, "Systems")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--gray-400)',
      marginTop: 12,
      maxWidth: '38ch'
    }
  }, "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u0418\u0410\u0421 \xAB\u0417\u0430\u043A\u0443\u043F\u043A\u0438\xBB. \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441 \u0442\u0435\u043D\u0434\u0435\u0440\u043D\u044B\u043C\u0438 \u043E\u0442\u0434\u0435\u043B\u0430\u043C\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u043E\u0432 \u0438 \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u043E\u0432 \u0441 \u043C\u043D\u043E\u0433\u043E\u0441\u0442\u0440\u043E\u0447\u043D\u044B\u043C\u0438 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F\u043C\u0438.")), [['Продукт', ['Спецификации', 'Запросы КП', 'Сравнение', 'Справочники']], ['Компания', ['О нас', 'Внедрение', 'Поддержка', 'Вакансии']], ['Контакты', ['sales@amt-systems.ru', '+7 495 000-00-00', 'Москва']]].map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-overline)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--gray-500)',
      marginBottom: 10
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 7
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--gray-300)',
      textDecoration: 'none'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      marginTop: 36,
      paddingTop: 18,
      borderTop: '1px solid var(--gray-700)',
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--type-caption)',
      color: 'var(--gray-500)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 AMT Systems"), /*#__PURE__*/React.createElement("span", null, "\u0420\u0435\u0435\u0441\u0442\u0440 \u043E\u0442\u0435\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u041F\u041E \xB7 \u041E\u041E\u041E \xAB\u0410\u041C\u0422 \u0421\u0438\u0441\u0442\u0435\u043C\u0441\xBB")));
}
Object.assign(window, {
  SiteHeader,
  Hero,
  SiteFooter,
  siteWrap: wrap
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Site.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zakupki/AppShell.jsx
try { (() => {
const {
  SidebarNav,
  Toolbar,
  Breadcrumbs,
  IconButton,
  Icon,
  Input,
  Button,
  Tooltip
} = window.AMTSystemsDesignSystem_374943;
function AppShell({
  active,
  onNav,
  crumbs,
  title,
  actions,
  tabs,
  subbar,
  children
}) {
  const [collapsed, setCollapsed] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      background: 'var(--surface-canvas)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--topbar-h)',
      background: 'var(--surface-header)',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: collapsed ? '0 12px' : '0 12px',
      width: collapsed ? 'var(--sidebar-w-collapsed)' : 'var(--sidebar-w)',
      transition: 'width var(--dur-drawer) var(--ease-drawer)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 15px/1 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--white)'
    }
  }, "AMT"), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1 var(--font-sans)',
      color: 'var(--gray-300)',
      whiteSpace: 'nowrap'
    }
  }, "\u0418\u0410\u0421 \xAB\u0417\u0430\u043A\u0443\u043F\u043A\u0438\xBB")), /*#__PURE__*/React.createElement(SidebarNav, {
    collapsed: collapsed,
    activeId: active,
    onSelect: onNav,
    style: {
      flex: 1
    },
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: collapsed ? 0 : '2px 4px',
        justifyContent: collapsed ? 'center' : 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: collapsed ? 'chevron-right' : 'chevron-left',
      label: "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0440\u0435\u0439\u043A\u0443",
      onClick: () => setCollapsed(!collapsed),
      style: {
        color: 'var(--gray-400)'
      }
    }), !collapsed && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--gray-500)'
      }
    }, "on-premise \xB7 v4.2")),
    items: [{
      section: 'Работа'
    }, {
      id: 'specs',
      label: 'Спецификации',
      icon: 'table-2',
      count: 12
    }, {
      id: 'rfq',
      label: 'Запросы (RFQ)',
      icon: 'send',
      count: 34
    }, {
      id: 'compare',
      label: 'Сравнение КП',
      icon: 'columns-3'
    }, {
      section: 'Справочники'
    }, {
      id: 'suppliers',
      label: 'Поставщики',
      icon: 'building-2',
      count: 214
    }, {
      id: 'nomen',
      label: 'Номенклатура',
      icon: 'boxes'
    }, {
      id: 'settings',
      label: 'Настройки',
      icon: 'settings'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--topbar-h)',
      background: 'var(--surface-header)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '0 12px 0 16px',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    iconLeft: "search",
    placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043F\u043E\u0437\u0438\u0446\u0438\u044F\u043C, \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430\u043C, \u041A\u041F   Ctrl+K",
    style: {
      width: 380,
      height: 30,
      background: 'var(--gray-800)',
      border: '1px solid var(--gray-700)',
      boxShadow: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u0430\u044F \u043A\u043E\u043F\u0438\u044F: \u0441\u0435\u0433\u043E\u0434\u043D\u044F 04:00",
    side: "bottom"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--type-caption)',
      color: 'var(--gray-400)',
      paddingRight: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "server",
    size: 14
  }), "\u0421\u0435\u0440\u0432\u0435\u0440 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "clock",
    label: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",
    style: {
      color: 'var(--gray-300)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 26,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--steel-600)',
      color: 'var(--white)',
      font: '600 11px/1 var(--font-sans)',
      marginLeft: 4
    }
  }, "\u0418\u041A"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: 'var(--border-thin)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Toolbar, {
    style: {
      borderBottom: tabs ? 'none' : 'var(--border-thin)'
    },
    left: /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, crumbs ? /*#__PURE__*/React.createElement(Breadcrumbs, {
      items: crumbs
    }) : null, /*#__PURE__*/React.createElement("h1", {
      style: {
        font: 'var(--type-h2)',
        letterSpacing: 'var(--tracking-heading)',
        color: 'var(--text-primary)',
        marginTop: crumbs ? 2 : 0
      }
    }, title)),
    right: actions
  }), tabs ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, tabs) : null), subbar, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      overflow: 'auto',
      padding: 'var(--space-4)'
    }
  }, children)));
}
Object.assign(window, {
  AppShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zakupki/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zakupki/Compare.jsx
try { (() => {
const {
  Card,
  Toolbar,
  Button,
  Select,
  Switch,
  IconButton,
  StatusPill,
  Badge,
  Tooltip,
  Icon
} = window.AMTSystemsDesignSystem_374943;
function Compare() {
  const sups = window.SUPPLIERS;
  const m = window.money;
  const [only, setOnly] = React.useState(false);
  const rows = window.QUOTE_MATRIX;
  const best = r => Math.min(...Object.values(r.p).filter(v => v != null));
  const totals = {};
  sups.forEach(s => {
    totals[s.id] = rows.reduce((a, r) => a + (r.p[s.id] != null ? r.p[s.id] * r.qty : 0), 0);
  });
  const bestTotal = Math.min(...Object.values(totals));
  const th = {
    height: 34,
    padding: '0 10px',
    background: 'var(--table-header-bg)',
    borderBottom: '1px solid var(--border-default)',
    borderRight: '1px solid var(--table-grid-line)',
    font: 'var(--weight-semibold) var(--text-xs)/1.2 var(--font-core)',
    letterSpacing: 'var(--tracking-label)',
    color: 'var(--text-secondary)',
    whiteSpace: 'nowrap'
  };
  const td = {
    height: 30,
    padding: '0 10px',
    borderBottom: '1px solid var(--table-grid-line)',
    borderRight: '1px solid var(--table-grid-line)',
    font: 'var(--type-numeric)',
    fontVariantNumeric: 'tabular-nums',
    textAlign: 'right',
    whiteSpace: 'nowrap'
  };
  return /*#__PURE__*/React.createElement(Card, {
    flush: true,
    title: "\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u041A\u041F \u043F\u043E \u043F\u043E\u0437\u0438\u0446\u0438\u044F\u043C",
    subtitle: "\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u21164 \xB7 4 \u0438\u0437 6 \u041A\u041F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "download"
    }, "Excel"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      iconLeft: "check"
    }, "\u0417\u0430\u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u044B\u0431\u043E\u0440"))
  }, /*#__PURE__*/React.createElement(Toolbar, {
    dense: true,
    sunken: true,
    left: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Select, {
      size: "sm",
      placeholder: "\u0411\u0430\u0437\u0430: \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0430",
      options: [{
        value: 'min',
        label: 'База: минимальная цена'
      }, {
        value: 'plan',
        label: 'База: плановая цена'
      }],
      style: {
        width: 230
      }
    }), /*#__PURE__*/React.createElement(Switch, {
      checked: only,
      onChange: () => setOnly(!only),
      label: "\u0422\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F > 5%"
    })),
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-muted)'
      }
    }, "\u0417\u0435\u043B\u0451\u043D\u044B\u043C \u2014 \u043B\u0443\u0447\u0448\u0435\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u043E \u0441\u0442\u0440\u043E\u043A\u0435")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: 'separate',
      borderSpacing: 0,
      width: '100%',
      tableLayout: 'fixed'
    }
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    style: {
      width: 46
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 260
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 80
    }
  }), sups.map(s => /*#__PURE__*/React.createElement("col", {
    key: s.id,
    style: {
      width: 116
    }
  }))), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'right',
      position: 'sticky',
      left: 0,
      zIndex: 3
    }
  }, "\u2116"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'left',
      position: 'sticky',
      left: 46,
      zIndex: 3,
      boxShadow: 'var(--shadow-sticky-right)'
    }
  }, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'right'
    }
  }, "\u041A\u043E\u043B-\u0432\u043E"), sups.map((s, i) => /*#__PURE__*/React.createElement("th", {
    key: s.id,
    style: {
      ...th,
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      justifyContent: 'flex-end',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: 'var(--series-' + (i + 1) + ')'
    }
  }), s.name))))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => {
    const b = best(r);
    const bg = ri % 2 ? 'var(--table-row-alt)' : 'var(--surface-card)';
    return /*#__PURE__*/React.createElement("tr", {
      key: r.id,
      style: {
        background: bg
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        color: 'var(--text-muted)',
        position: 'sticky',
        left: 0,
        background: bg,
        zIndex: 2
      }
    }, r.id), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        textAlign: 'left',
        font: 'var(--type-body-sm)',
        position: 'sticky',
        left: 46,
        background: bg,
        zIndex: 2,
        boxShadow: 'var(--shadow-sticky-right)',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, r.name), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        color: 'var(--text-secondary)'
      }
    }, m(r.qty, 0)), sups.map(s => {
      const v = r.p[s.id];
      const isBest = v != null && v === b;
      return /*#__PURE__*/React.createElement("td", {
        key: s.id,
        style: {
          ...td,
          background: v == null ? 'var(--gray-50)' : isBest ? 'var(--green-50)' : undefined,
          color: v == null ? 'var(--text-disabled)' : isBest ? 'var(--green-700)' : 'var(--text-body)',
          fontWeight: isBest ? 600 : 400
        }
      }, v == null ? '—' : m(v));
    }));
  }), /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--table-total-bg)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      borderTop: '1px solid var(--border-default)',
      position: 'sticky',
      left: 0,
      background: 'var(--table-total-bg)',
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'left',
      font: 'var(--weight-semibold) var(--text-sm)/1.3 var(--font-core)',
      color: 'var(--text-primary)',
      borderTop: '1px solid var(--border-default)',
      position: 'sticky',
      left: 46,
      background: 'var(--table-total-bg)',
      zIndex: 2,
      boxShadow: 'var(--shadow-sticky-right)'
    }
  }, "\u0418\u0442\u043E\u0433\u043E \u043F\u043E \u041A\u041F, \u20BD"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      borderTop: '1px solid var(--border-default)'
    }
  }), sups.map(s => /*#__PURE__*/React.createElement("td", {
    key: s.id,
    style: {
      ...td,
      borderTop: '1px solid var(--border-default)',
      font: 'var(--type-numeric-strong)',
      color: totals[s.id] === bestTotal ? 'var(--green-700)' : 'var(--text-primary)'
    }
  }, m(totals[s.id], 0)))), /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--table-total-bg)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      position: 'sticky',
      left: 0,
      background: 'var(--table-total-bg)',
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'left',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      position: 'sticky',
      left: 46,
      background: 'var(--table-total-bg)',
      zIndex: 2,
      boxShadow: 'var(--shadow-sticky-right)'
    }
  }, "\u041F\u043E\u043A\u0440\u044B\u0442\u0438\u0435 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438"), /*#__PURE__*/React.createElement("td", {
    style: td
  }), sups.map(s => {
    const n = rows.filter(r => r.p[s.id] != null).length;
    return /*#__PURE__*/React.createElement("td", {
      key: s.id,
      style: {
        ...td,
        font: 'var(--type-caption)',
        color: n === rows.length ? 'var(--text-success)' : 'var(--text-muted)'
      }
    }, n, " \u0438\u0437 ", rows.length);
  }))))));
}
Object.assign(window, {
  Compare
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zakupki/Compare.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zakupki/MatrixCompare.jsx
try { (() => {
const NS = window.AMTSystemsDesignSystem_374943;
const {
  Button,
  IconButton,
  Icon,
  StatusPill,
  Badge,
  Tooltip,
  Select,
  EmptyState,
  Tabs
} = NS;
const SUPS = [{
  id: 's1',
  name: 'ЭТМ',
  status: 'REPLIED'
}, {
  id: 's2',
  name: 'Русэлт',
  status: 'REPLIED'
}, {
  id: 's3',
  name: 'АСК-Электро',
  status: 'REPLIED'
}, {
  id: 's4',
  name: 'ЭК-Восток',
  status: 'REPLIED'
}, {
  id: 's5',
  name: 'Кабель-М',
  status: 'SENT'
}, {
  id: 's6',
  name: 'ЮгЭлектро',
  status: 'EXPIRED'
}];
const ROWS = [{
  id: 1,
  name: 'Кабель ВВГнг(А)-LS 5х6',
  art: 'ВВГ-5х6',
  qty: 1200,
  o: {
    s1: {
      p: 284.5,
      d: 5
    },
    s2: {
      p: 291.0,
      d: 3
    },
    s3: {
      p: 302.4,
      d: 12,
      exp: true
    },
    s4: null,
    s5: null,
    s6: {
      p: 288.0,
      d: 7
    }
  }
}, {
  id: 2,
  name: 'Труба гофрированная ПНД 25 мм, с зондом',
  art: 'ГОФ-25',
  qty: 3400,
  o: {
    s1: {
      p: 33.1,
      d: 5
    },
    s2: {
      p: 31.2,
      d: 4,
      edited: true
    },
    s3: {
      p: 30.9,
      d: 10
    },
    s4: {
      p: 34.0,
      d: 6
    },
    s5: null,
    s6: {
      p: 32.4,
      d: 9
    }
  }
}, {
  id: 3,
  name: 'Щит распределительный ЩРН-36 IP31',
  art: 'ЩРН-36',
  qty: 14,
  o: {
    s1: {
      p: 6120,
      d: 14
    },
    s2: {
      p: 6480,
      d: 10
    },
    s3: {
      p: 5798,
      d: 21
    },
    s4: {
      p: 6240,
      d: 12
    },
    s5: null,
    s6: null
  }
}, {
  id: 4,
  name: 'Автоматический выключатель ВА47-63 3P 25А C',
  art: 'ВА47-63',
  qty: 210,
  o: {
    s1: {
      p: 412.9,
      d: 3
    },
    s2: {
      p: 428.0,
      d: 2
    },
    s3: {
      p: 441.5,
      d: 8
    },
    s4: {
      p: 419.0,
      d: 5
    },
    s5: {
      p: 430.0,
      d: 6,
      mail: true
    },
    s6: {
      p: 425.2,
      d: 7
    }
  }
}, {
  id: 5,
  name: 'Лоток лестничный 200х80, L=3000',
  art: 'ЛОТ-200',
  qty: 320,
  o: {
    s1: {
      p: 1180,
      d: 9
    },
    s2: {
      p: 1145,
      d: 7
    },
    s3: {
      p: 1102,
      d: 15
    },
    s4: {
      p: 1102,
      d: 11
    },
    s5: {
      p: 1210,
      d: 6
    },
    s6: null
  }
}, {
  id: 6,
  name: 'Ячейка КРУ 10 кВ с вакуумным выключателем',
  art: 'КРУ-10',
  qty: 6,
  o: {
    s1: {
      p: 412000,
      d: 60
    },
    s2: {
      p: 398000,
      d: 75
    },
    s3: {
      p: 421500,
      d: 45
    },
    s4: null,
    s5: null,
    s6: null
  }
}, {
  id: 7,
  name: 'Светильник LED 36 Вт IP65, 4000K',
  art: 'СВЕТ-36',
  qty: 96,
  o: {
    s1: {
      p: 2340,
      d: 4
    },
    s2: {
      p: 2415,
      d: 3,
      cur: 'USD',
      rub: 2415
    },
    s3: {
      p: 2380,
      d: 9
    },
    s4: {
      p: 2298,
      d: 12
    },
    s5: {
      p: 2415,
      d: 5
    },
    s6: {
      p: 2350,
      d: 8
    }
  }
}];
const m = (n, d = 2) => n == null ? '—' : n.toLocaleString('ru-RU', {
  minimumFractionDigits: d,
  maximumFractionDigits: d
});
const best = r => {
  const v = SUPS.map(s => r.o[s.id]).filter(o => o && !o.exp).map(o => o.p);
  return v.length ? Math.min(...v) : null;
};
const totals = () => {
  const t = {};
  SUPS.forEach(s => {
    t[s.id] = ROWS.reduce((a, r) => a + (r.o[s.id] ? r.o[s.id].p * r.qty : 0), 0);
  });
  return t;
};

/* ─────────────────────────── СЕЙЧАС ─────────────────────────── */
/* Воспроизведение frontend/src/components/PriceMatrix.tsx как есть:
   дефолтные токены shadcn, системный шрифт, центрированные пропорциональные
   числа, шесть уровней в ячейке, статусы иконкой+цветом, нет закреплённых
   столбцов, счётчики строкой в шапке. */
function MatrixNow() {
  const sh = {
    background: '#fff',
    color: '#0f172a',
    fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif'
  };
  const th = {
    padding: '12px',
    fontSize: 14,
    fontWeight: 500,
    color: '#64748b',
    textAlign: 'left',
    borderBottom: '1px solid #e2e8f0',
    whiteSpace: 'nowrap'
  };
  const td = {
    padding: '8px 12px',
    fontSize: 14,
    borderBottom: '1px solid #e2e8f0',
    verticalAlign: 'top'
  };
  const stat = {
    REPLIED: ['#16a34a', 'Ответил', 'circle-check'],
    SENT: ['#2563eb', 'Отправлено', 'mail'],
    EXPIRED: ['#ea580c', 'Истёк', 'clock']
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...sh,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u041F\u043E\u0437\u0438\u0446\u0438\u0439: ", /*#__PURE__*/React.createElement("b", null, "7")), /*#__PURE__*/React.createElement("span", null, "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u043E\u0432: ", /*#__PURE__*/React.createElement("b", null, "6")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#15803d'
    }
  }, "\u041E\u0442\u0432\u0435\u0442\u0438\u043B\u0438: ", /*#__PURE__*/React.createElement("b", null, "4")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ea580c'
    }
  }, "\u0411\u0435\u0437 \u043E\u0442\u0432\u0435\u0442\u0430: ", /*#__PURE__*/React.createElement("b", null, "2"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      border: '1px solid #e2e8f0',
      borderRadius: 8,
      padding: 4,
      background: '#f8fafc'
    }
  }, ['Все', 'Ответившие', 'Без ответа'].map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      padding: '6px 12px',
      fontSize: 14,
      borderRadius: 6,
      background: i === 0 ? '#fff' : 'transparent',
      boxShadow: i === 0 ? '0 1px 2px rgba(0,0,0,.05)' : 'none',
      fontWeight: i === 0 ? 500 : 400,
      color: i === 0 ? '#0f172a' : '#64748b'
    }
  }, t))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 36,
      padding: '0 12px',
      border: '1px solid #e2e8f0',
      borderRadius: 6,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "refresh-cw",
    size: 16,
    color: "#0f172a"
  }), "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043D\u0435\u043E\u0442\u0432\u0435\u0442\u0438\u0432\u0448\u0438\u043C (2)"))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid #e2e8f0',
      borderRadius: 6,
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      minWidth: 1150,
      tableLayout: 'fixed',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    style: {
      width: 220
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 100
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 70
    }
  }), SUPS.map(s => /*#__PURE__*/React.createElement("col", {
    key: s.id,
    style: {
      width: 130
    }
  })), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 150
    }
  })), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "\u0410\u0440\u0442\u0438\u043A\u0443\u043B"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "\u041A\u043E\u043B-\u0432\u043E"), SUPS.map(s => {
    const [c, l, ic] = stat[s.status];
    return /*#__PURE__*/React.createElement("th", {
      key: s.id,
      style: {
        ...th,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 500,
        color: '#0f172a',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, s.name), /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 12,
      color: "#64748b"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        fontSize: 12,
        color: c,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 12,
      color: c
    }), l));
  }), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'center',
      fontSize: 12
    }
  }, "\u041C\u0438\u043D. \u0446\u0435\u043D\u0430"))), /*#__PURE__*/React.createElement("tbody", null, ROWS.map(r => {
    const b = best(r);
    return /*#__PURE__*/React.createElement("tr", {
      key: r.id
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        fontWeight: 500,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },
      title: r.name
    }, r.name), /*#__PURE__*/React.createElement("td", {
      style: td
    }, r.art), /*#__PURE__*/React.createElement("td", {
      style: td
    }, r.qty), SUPS.map(s => {
      const o = r.o[s.id];
      if (!o) return /*#__PURE__*/React.createElement("td", {
        key: s.id,
        style: {
          ...td,
          textAlign: 'center',
          color: '#64748b'
        }
      }, "\u2014");
      return /*#__PURE__*/React.createElement("td", {
        key: s.id,
        style: {
          ...td,
          textAlign: 'center'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '2px 4px',
          borderRadius: 4,
          background: o.p === b ? '#f0fdf4' : 'transparent'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 14
        }
      }, m(o.p), " \u20BD"), o.cur ? /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          color: '#64748b',
          marginTop: 2
        }
      }, "\u2248 ", m(o.rub), " \u20BD") : null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          color: '#64748b',
          marginTop: 2
        }
      }, o.d, " \u0434\u043D."), o.edited ? /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'inline-block',
          fontSize: 10,
          padding: '0 4px',
          marginTop: 2,
          borderRadius: 4,
          background: '#eff6ff',
          color: '#1d4ed8',
          border: '1px solid #bfdbfe'
        }
      }, "\u0440\u0435\u0434.") : null, o.exp ? /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'inline-block',
          fontSize: 10,
          padding: '0 4px',
          marginTop: 2,
          borderRadius: 4,
          background: '#fef2f2',
          color: '#b91c1c',
          border: '1px solid #fecaca'
        }
      }, "\u043F\u0440\u043E\u0441\u0440\u043E\u0447\u0435\u043D\u043E") : null, o.mail ? /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'inline-block',
          fontSize: 10,
          padding: '0 4px',
          marginTop: 2,
          borderRadius: 4,
          background: '#fffbeb',
          color: '#b45309',
          border: '1px solid #fde68a'
        }
      }, "\u043F\u043E \u043F\u043E\u0447\u0442\u0435") : null));
    }), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 500,
        color: '#15803d',
        fontSize: 14
      }
    }, m(b), " \u20BD"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: '#64748b'
      }
    }, SUPS.find(s => r.o[s.id] && r.o[s.id].p === b)?.name)));
  })))));
}

/* ─────────────────────────── ПРЕДЛОЖЕНИЕ ─────────────────────────── */
function MatrixNew() {
  const [density, setDensity] = React.useState('default');
  const [filter, setFilter] = React.useState('all');
  const t = totals();
  const bestTotal = Math.min(...Object.values(t).filter(v => v > 0));
  const h = density === 'compact' ? 28 : density === 'comfortable' ? 42 : 34;
  const th = {
    height: 44,
    padding: '0 10px',
    background: 'var(--table-header-bg)',
    borderBottom: '1px solid var(--border-default)',
    borderRight: 'var(--border-cell)',
    font: 'var(--weight-semibold) var(--text-xs)/1.2 var(--font-core)',
    letterSpacing: 'var(--tracking-label)',
    color: 'var(--text-secondary)',
    whiteSpace: 'nowrap'
  };
  const td = {
    height: h,
    padding: '0 10px',
    borderBottom: 'var(--border-cell)',
    borderRight: 'var(--border-cell)',
    font: 'var(--type-numeric)',
    fontVariantNumeric: 'tabular-nums',
    textAlign: 'right',
    whiteSpace: 'nowrap'
  };
  const stick = {
    position: 'sticky',
    zIndex: 2
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      padding: '12px 16px',
      borderBottom: 'var(--border-thin)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      font: 'var(--type-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, [['Позиций', '7', 'var(--text-primary)'], ['Поставщиков', '6', 'var(--text-primary)'], ['Ответили', '4', 'var(--text-success)'], ['Без ответа', '2', 'var(--text-attention)']].map(([k, v, c], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: k
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 14,
      background: 'var(--border-hairline)',
      margin: '0 14px'
    }
  }) : null, /*#__PURE__*/React.createElement("span", null, k, ": ", /*#__PURE__*/React.createElement("b", {
    style: {
      font: 'var(--type-numeric-strong)',
      color: c
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "segmented",
    value: filter,
    onChange: setFilter,
    items: [{
      value: 'all',
      label: 'Все'
    }, {
      value: 'resp',
      label: 'Ответившие'
    }, {
      value: 'no',
      label: 'Без ответа'
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconLeft: "refresh-cw"
  }, "\u041D\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C 2 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430\u043C"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    iconLeft: "check"
  }, "\u0417\u0430\u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u044B\u0431\u043E\u0440"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '8px 16px',
      background: 'var(--surface-subtle)',
      borderBottom: 'var(--border-thin)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, "\u0417\u0435\u043B\u0451\u043D\u044B\u043C \u2014 \u043B\u0443\u0447\u0448\u0435\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u043E \u0441\u0442\u0440\u043E\u043A\u0435. \u041F\u0440\u043E\u0441\u0440\u043E\u0447\u0435\u043D\u043D\u044B\u0435 \u041A\u041F \u0432 \u0432\u044B\u0431\u043E\u0440\u0435 \u043C\u0438\u043D\u0438\u043C\u0443\u043C\u0430 \u043D\u0435 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044E\u0442."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, "\u041F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u044C"), /*#__PURE__*/React.createElement(Tabs, {
    variant: "segmented",
    value: density,
    onChange: setDensity,
    items: [{
      value: 'compact',
      label: '28'
    }, {
      value: 'default',
      label: '34'
    }, {
      value: 'comfortable',
      label: '42'
    }]
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "download",
    label: "\u0412\u044B\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0432 Excel",
    variant: "outline",
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto',
      maxHeight: 460
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: 'separate',
      borderSpacing: 0,
      width: '100%',
      minWidth: 1308,
      tableLayout: 'fixed'
    }
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    style: {
      width: 44
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 270
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 96
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 76
    }
  }), SUPS.map(s => /*#__PURE__*/React.createElement("col", {
    key: s.id,
    style: {
      width: 112
    }
  })), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 150
    }
  })), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      ...stick,
      top: 0,
      left: 0,
      zIndex: 4,
      textAlign: 'right'
    }
  }, "\u2116"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      ...stick,
      top: 0,
      left: 44,
      zIndex: 4,
      textAlign: 'left'
    }
  }, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      ...stick,
      top: 0,
      left: 314,
      zIndex: 4,
      textAlign: 'left'
    }
  }, "\u0410\u0440\u0442\u0438\u043A\u0443\u043B"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      ...stick,
      top: 0,
      left: 410,
      zIndex: 4,
      textAlign: 'right',
      boxShadow: 'var(--shadow-sticky-right)'
    }
  }, "\u041A\u043E\u043B-\u0432\u043E"), SUPS.map((s, i) => /*#__PURE__*/React.createElement("th", {
    key: s.id,
    style: {
      ...th,
      position: 'sticky',
      top: 0,
      zIndex: 3,
      textAlign: 'right',
      verticalAlign: 'middle'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      maxWidth: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 2,
      background: `var(--series-${i + 1})`,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: 'var(--text-primary)'
    }
  }, s.name)), /*#__PURE__*/React.createElement(StatusPill, {
    status: s.status === 'REPLIED' ? 'received' : s.status === 'SENT' ? 'waiting' : 'overdue',
    label: s.status === 'REPLIED' ? 'ответил' : s.status === 'SENT' ? 'ждём' : 'истёк'
  })))), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      position: 'sticky',
      top: 0,
      right: 0,
      zIndex: 4,
      textAlign: 'right',
      boxShadow: '-6px 0 8px -6px rgb(14 16 20 / .16)'
    }
  }, "\u041C\u0438\u043D. \u0446\u0435\u043D\u0430, \u20BD"))), /*#__PURE__*/React.createElement("tbody", null, ROWS.map((r, ri) => {
    const b = best(r);
    const bg = ri % 2 ? 'var(--table-row-alt)' : 'var(--surface-card)';
    const bs = SUPS.find(s => r.o[s.id] && r.o[s.id].p === b);
    return /*#__PURE__*/React.createElement("tr", {
      key: r.id
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        ...stick,
        left: 0,
        background: bg,
        color: 'var(--text-muted)'
      }
    }, r.id), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        ...stick,
        left: 44,
        background: bg,
        textAlign: 'left',
        font: 'var(--type-body-sm)',
        color: 'var(--text-body)',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      title: r.name
    }, r.name), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        ...stick,
        left: 314,
        background: bg,
        textAlign: 'left',
        color: 'var(--text-secondary)'
      }
    }, r.art), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        ...stick,
        left: 410,
        background: bg,
        color: 'var(--text-secondary)',
        boxShadow: 'var(--shadow-sticky-right)'
      }
    }, m(r.qty, 0)), SUPS.map(s => {
      const o = r.o[s.id];
      if (!o) return /*#__PURE__*/React.createElement("td", {
        key: s.id,
        style: {
          ...td,
          background: 'var(--gray-50)',
          color: 'var(--text-disabled)'
        }
      }, "\u2014");
      const isBest = o.p === b;
      const flag = o.exp ? ['circle-alert', 'var(--red-500)', 'КП просрочено — в выборе минимума не участвует'] : o.edited ? ['pencil', 'var(--ocher-400)', 'Цена изменена вручную'] : o.mail ? ['mail', 'var(--text-muted)', 'Цена из письма, поставщик не подтверждён'] : o.cur ? ['coins', 'var(--text-muted)', `Цена в ${o.cur}, ≈ ${m(o.rub)} ₽ по курсу спецификации`] : null;
      return /*#__PURE__*/React.createElement("td", {
        key: s.id,
        style: {
          ...td,
          background: isBest ? 'var(--green-50)' : bg,
          color: isBest ? 'var(--green-700)' : 'var(--text-body)',
          fontWeight: isBest ? 600 : 400,
          position: 'relative'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          justifyContent: 'flex-end',
          width: '100%'
        }
      }, flag ? /*#__PURE__*/React.createElement(Tooltip, {
        label: flag[2]
      }, /*#__PURE__*/React.createElement(Icon, {
        name: flag[0],
        size: 11,
        color: flag[1]
      })) : null, m(o.p)), density !== 'compact' ? /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--type-caption)',
          color: 'var(--text-muted)',
          fontVariantNumeric: 'tabular-nums',
          marginTop: -2
        }
      }, o.d, " \u0434\u043D.") : null);
    }), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        position: 'sticky',
        right: 0,
        zIndex: 2,
        background: bg,
        boxShadow: '-6px 0 8px -6px rgb(14 16 20 / .16)',
        color: 'var(--green-700)',
        fontWeight: 600
      }
    }, m(b), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-muted)',
        fontWeight: 400
      }
    }, bs ? bs.name : '')));
  }), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      ...stick,
      left: 0,
      background: 'var(--table-total-bg)',
      borderTop: '1px solid var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("td", {
    colSpan: 3,
    style: {
      ...td,
      ...stick,
      left: 44,
      background: 'var(--table-total-bg)',
      borderTop: '1px solid var(--border-default)',
      textAlign: 'left',
      font: 'var(--weight-semibold) var(--text-sm)/1.3 var(--font-core)',
      color: 'var(--text-primary)',
      boxShadow: 'var(--shadow-sticky-right)'
    }
  }, "\u0418\u0442\u043E\u0433\u043E \u043F\u043E \u041A\u041F, \u20BD"), SUPS.map(s => /*#__PURE__*/React.createElement("td", {
    key: s.id,
    style: {
      ...td,
      background: 'var(--table-total-bg)',
      borderTop: '1px solid var(--border-default)',
      font: 'var(--type-numeric-strong)',
      color: t[s.id] === bestTotal ? 'var(--green-700)' : t[s.id] === 0 ? 'var(--text-disabled)' : 'var(--text-primary)'
    }
  }, t[s.id] ? m(t[s.id], 0) : '—')), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      position: 'sticky',
      right: 0,
      zIndex: 2,
      background: 'var(--table-total-bg)',
      borderTop: '1px solid var(--border-default)',
      font: 'var(--type-numeric-strong)',
      color: 'var(--green-700)',
      boxShadow: '-6px 0 8px -6px rgb(14 16 20 / .16)'
    }
  }, m(ROWS.reduce((a, r) => a + best(r) * r.qty, 0), 0))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      ...stick,
      left: 0,
      background: 'var(--table-total-bg)'
    }
  }), /*#__PURE__*/React.createElement("td", {
    colSpan: 3,
    style: {
      ...td,
      ...stick,
      left: 44,
      background: 'var(--table-total-bg)',
      textAlign: 'left',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      boxShadow: 'var(--shadow-sticky-right)'
    }
  }, "\u041F\u043E\u043A\u0440\u044B\u0442\u0438\u0435 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438"), SUPS.map(s => {
    const n = ROWS.filter(r => r.o[s.id]).length;
    return /*#__PURE__*/React.createElement("td", {
      key: s.id,
      style: {
        ...td,
        background: 'var(--table-total-bg)',
        font: 'var(--type-caption)',
        color: n === ROWS.length ? 'var(--text-success)' : 'var(--text-muted)'
      }
    }, n, " \u0438\u0437 ", ROWS.length);
  }), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      position: 'sticky',
      right: 0,
      zIndex: 2,
      background: 'var(--table-total-bg)',
      boxShadow: '-6px 0 8px -6px rgb(14 16 20 / .16)'
    }
  }))))));
}
Object.assign(window, {
  MatrixNow,
  MatrixNew
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zakupki/MatrixCompare.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zakupki/ProductDialogs.jsx
try { (() => {
const NS3 = window.AMTSystemsDesignSystem_374943;
const {
  Dialog: D,
  Button: B,
  Icon: IC,
  Field: F,
  Input: IP,
  Select: S,
  Textarea: TX,
  Checkbox: CH,
  Banner: BA,
  Radio: RA,
  Switch: SWI
} = NS3;

/* Загрузка спецификации — три шага, как в UploadDialog.tsx:
   выбор файла → предпросмотр первых строк → обработка с SSE-прогрессом */
function UploadDialog({
  onClose,
  onDone
}) {
  const [step, setStep] = React.useState(1);
  const [progress, setProgress] = React.useState(0);
  const stages = ['Разбор файла', 'Распознавание позиций', 'Подбор поставщиков', 'Сохранение'];
  React.useEffect(() => {
    if (step !== 3) return;
    const t = setInterval(() => setProgress(p => {
      if (p >= 100) {
        clearInterval(t);
        setTimeout(onDone, 400);
        return 100;
      }
      return p + 4;
    }), 90);
    return () => clearInterval(t);
  }, [step]);
  const preview = [['1', 'ВВГ-5х6', 'Кабель ВВГнг(А)-LS 5х6', 'м', '1 200'], ['2', 'ГОФ-25', 'Труба гофрированная ПНД 25 мм', 'м', '3 400'], ['3', 'АВБ-4х16', 'Кабель АВБбШв 4х16', 'м', '860'], ['4', 'ЩРН-36', 'Щит распределительный ЩРН-36 IP31', 'шт', '14'], ['5', 'ВА47-63', 'Автоматический выключатель ВА47-63 3P 25А', 'шт', '210']];
  return /*#__PURE__*/React.createElement(D, {
    open: true,
    width: step === 2 ? 720 : 520,
    onClose: step === 3 ? undefined : onClose,
    title: ['Загрузить спецификацию', 'Проверьте распознанные столбцы', 'Обрабатываем спецификацию'][step - 1],
    description: ['Excel-файл с позициями. Объединённые ячейки, единицы измерения и артикулы система разберёт сама.', 'Показаны первые 20 строк из 212. Если столбцы определены неверно — поправьте сопоставление.', 'Не закрывайте вкладку: прогресс сохраняется, но результат появится быстрее.'][step - 1],
    footer: step === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(B, {
      size: "sm",
      onClick: onClose
    }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/React.createElement(B, {
      size: "sm",
      variant: "primary",
      onClick: () => setStep(2)
    }, "\u0414\u0430\u043B\u0435\u0435 \u2014 \u043F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440")) : step === 2 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(B, {
      size: "sm",
      onClick: () => setStep(1)
    }, "\u041D\u0430\u0437\u0430\u0434"), /*#__PURE__*/React.createElement(B, {
      size: "sm",
      variant: "primary",
      iconLeft: "calculator",
      onClick: () => setStep(3)
    }, "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C 212 \u043F\u043E\u0437\u0438\u0446\u0438\u0439")) : null
  }, step === 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px dashed var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px 16px',
      textAlign: 'center',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement(IC, {
    name: "file-input",
    size: 24,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-h4)',
      color: 'var(--text-primary)',
      marginTop: 8
    }
  }, "\u0420\u0435\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u041A\u0422\u041F-4 \u043F. \u041B\u0443\u0433\u043E\u0432\u043E\u0435.xlsx"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "318 \u041A\u0411 \xB7 \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043E\u0439 \u0444\u0430\u0439\u043B, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C")), /*#__PURE__*/React.createElement(F, {
    label: "\u041F\u0440\u043E\u0435\u043A\u0442",
    hint: "\u041F\u043E\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044F \u0432 \u0442\u0435\u043C\u0443 \u043F\u0438\u0441\u044C\u043C\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430\u043C"
  }, /*#__PURE__*/React.createElement(IP, {
    defaultValue: "\u0420\u0435\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u041A\u0422\u041F-4, \u043F. \u041B\u0443\u0433\u043E\u0432\u043E\u0435"
  })), /*#__PURE__*/React.createElement(F, {
    label: "\u041A\u043E\u043D\u0435\u0447\u043D\u044B\u0439 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A"
  }, /*#__PURE__*/React.createElement(IP, {
    placeholder: "\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
  }))) : step === 2 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(BA, {
    tone: "attention",
    title: "3 \u0441\u0442\u0440\u043E\u043A\u0438 \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u044B"
  }, "\u0412 \u0441\u0442\u043E\u043B\u0431\u0446\u0435 \xAB\u041A\u043E\u043B-\u0432\u043E\xBB \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u043B\u0441\u044F \u0442\u0435\u043A\u0441\u0442 \u2014 \u0441\u0442\u0440\u043E\u043A\u0438 212, 214 \u0438 216. \u0418\u0445 \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435 \u0438\u043C\u043F\u043E\u0440\u0442\u0430."), /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      tableLayout: 'fixed'
    }
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    style: {
      width: 44
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 100
    }
  }), /*#__PURE__*/React.createElement("col", null), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 56
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 90
    }
  })), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['№', 'Артикул', 'Наименование', 'Ед.', 'Кол-во'].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      ...TH,
      textAlign: i > 3 ? 'right' : 'left',
      height: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, h, /*#__PURE__*/React.createElement(IC, {
    name: "check",
    size: 11,
    color: "var(--green-500)"
  })))))), /*#__PURE__*/React.createElement("tbody", null, preview.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      background: i % 2 ? 'var(--table-row-alt)' : 'var(--surface-card)'
    }
  }, r.map((c, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: {
      ...TD,
      height: 30,
      ...(j === 0 || j === 1 || j === 4 ? MONO : {}),
      textAlign: j === 4 ? 'right' : 'left',
      color: j === 0 ? 'var(--text-muted)' : 'var(--text-body)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, c))))))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B 5 \u0438\u0437 20 \u0441\u0442\u0440\u043E\u043A \u043F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430. \u0417\u0435\u043B\u0451\u043D\u0430\u044F \u0433\u0430\u043B\u043E\u0447\u043A\u0430 \u2014 \u0441\u0442\u043E\u043B\u0431\u0435\u0446 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E; \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043C\u0435\u043D\u044F\u0442\u044C \u0441\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14,
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 999,
      background: 'var(--gray-100)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: progress + '%',
      height: '100%',
      background: 'var(--steel-500)',
      borderRadius: 999,
      transition: 'width 140ms var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8
    }
  }, stages.map((st, i) => {
    const done = progress > (i + 1) * 25;
    const now = !done && progress > i * 25;
    return /*#__PURE__*/React.createElement("div", {
      key: st,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        font: 'var(--type-body-sm)',
        color: done ? 'var(--text-success)' : now ? 'var(--text-primary)' : 'var(--text-disabled)'
      }
    }, /*#__PURE__*/React.createElement(IC, {
      name: done ? 'circle-check' : now ? 'loader-circle' : 'circle',
      size: 15,
      color: done ? 'var(--green-500)' : now ? 'var(--steel-500)' : 'var(--gray-300)'
    }), st, now ? '…' : '');
  }))));
}

/* Отправка RFQ */
function RfqDialog({
  onClose,
  onDone
}) {
  const [picked, setPicked] = React.useState([1, 2, 3, 4]);
  const t = id => setPicked(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
  return /*#__PURE__*/React.createElement(D, {
    open: true,
    width: 580,
    onClose: onClose,
    title: 'Отправить запрос ' + picked.length + ' поставщикам?',
    description: "\u041F\u0438\u0441\u044C\u043C\u0430 \u0443\u0439\u0434\u0443\u0442 \u0441 \u044F\u0449\u0438\u043A\u0430 tender@amt-systems.ru. \u041E\u0442\u0432\u0435\u0442\u044B \u0440\u0430\u0437\u0431\u0435\u0440\u0443\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0438 \u043B\u044F\u0433\u0443\u0442 \u0432 \u043C\u0430\u0442\u0440\u0438\u0446\u0443 \u0446\u0435\u043D.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(B, {
      size: "sm",
      onClick: onClose
    }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/React.createElement(B, {
      size: "sm",
      variant: "primary",
      iconLeft: "send",
      disabled: !picked.length,
      onClick: onDone
    }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(BA, {
    tone: "info"
  }, "\u0412 \u0437\u0430\u043F\u0440\u043E\u0441 \u043F\u043E\u043F\u0430\u0434\u0443\u0442 212 \u043F\u043E\u0437\u0438\u0446\u0438\u0439 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u21162, \u0432\u043A\u043B\u044E\u0447\u0430\u044F 14 \u0431\u0435\u0437 \u0446\u0435\u043D\u044B."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(F, {
    label: "\u0421\u0440\u043E\u043A \u043E\u0442\u0432\u0435\u0442\u0430",
    hint: "\u0420\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439",
    style: {
      width: 150
    }
  }, /*#__PURE__*/React.createElement(IP, {
    numeric: true,
    align: "right",
    suffix: "\u0434\u043D.",
    defaultValue: "5"
  })), /*#__PURE__*/React.createElement(F, {
    label: "\u0428\u0430\u0431\u043B\u043E\u043D \u043F\u0438\u0441\u044C\u043C\u0430",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(S, {
    placeholder: "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 \u041A\u041F",
    options: [{
      value: 's',
      label: 'Стандартный запрос КП'
    }, {
      value: 'u',
      label: 'Срочный запрос'
    }]
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-secondary)',
      marginBottom: 8
    }
  }, "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8,
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-lg)',
      padding: 10,
      maxHeight: 150,
      overflowY: 'auto'
    }
  }, window.SUPPLIERS.map(s => /*#__PURE__*/React.createElement(CH, {
    key: s.id,
    checked: picked.includes(s.id),
    onChange: () => t(s.id),
    label: s.name + ' · ' + s.city + (s.delay > 3 ? ' · отвечает с задержкой' : '')
  })))), /*#__PURE__*/React.createElement(F, {
    label: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0443"
  }, /*#__PURE__*/React.createElement(TX, {
    rows: 2,
    placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u043F\u0440\u043E\u0441\u0438\u043C \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0440\u043E\u043A\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043F\u043E \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u0437\u0438\u0446\u0438\u0438"
  }))));
}

/* Простые диалоги: загрузка КП, прайса, связки */
function SimpleDialog({
  kind,
  onClose,
  onDone
}) {
  const cfg = {
    kp: {
      t: 'Загрузить КП',
      d: 'Excel или PDF от поставщика. Система сопоставит позиции со спецификацией.',
      ok: 'Загрузить и разобрать'
    },
    price: {
      t: 'Загрузить прайс-лист',
      d: 'Каталог поставщика целиком. Используется подбором, когда КП по позиции ещё нет.',
      ok: 'Загрузить каталог'
    },
    link: {
      t: 'Добавить связку',
      d: 'Ручная привязка позиции к поставщику. Матчер будет использовать её как приоритетную подсказку.',
      ok: 'Сохранить связку'
    },
    catalog: {
      t: 'Импорт каталога поставщиков',
      d: 'Один файл с колонкой «Поставщик» — записи разложатся по контрагентам. Новые поставщики будут созданы.',
      ok: 'Разобрать файл'
    },
    history: {
      t: 'Загрузить прайс поставщика',
      d: 'Позиции попадут в историю закупок этого поставщика и станут кандидатами при подборе цены.',
      ok: 'Разобрать файл'
    }
  }[kind];
  return /*#__PURE__*/React.createElement(D, {
    open: true,
    width: 520,
    onClose: onClose,
    title: cfg.t,
    description: cfg.d,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(B, {
      size: "sm",
      onClick: onClose
    }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/React.createElement(B, {
      size: "sm",
      variant: "primary",
      onClick: onDone
    }, cfg.ok))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, kind !== 'catalog' ? /*#__PURE__*/React.createElement(F, {
    label: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A",
    required: true
  }, /*#__PURE__*/React.createElement(S, {
    placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430",
    options: window.SUPPLIERS.map(s => ({
      value: String(s.id),
      label: s.name
    }))
  })) : null, kind === 'link' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(F, {
    label: "\u0410\u0440\u0442\u0438\u043A\u0443\u043B \u0438\u043B\u0438 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",
    required: true
  }, /*#__PURE__*/React.createElement(IP, {
    iconLeft: "search",
    placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u0431\u043B\u043E\u043A \u043F\u0438\u0442\u0430\u043D\u0438\u044F LTEX"
  })), /*#__PURE__*/React.createElement(F, {
    label: "\u0422\u0438\u043F \u0441\u0432\u044F\u0437\u043A\u0438"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(RA, {
    name: "lt",
    checked: true,
    label: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u0430\u044F",
    description: "\u041C\u0430\u0442\u0447\u0435\u0440 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0442\u044C \u044D\u0442\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430 \u043F\u0435\u0440\u0432\u044B\u043C"
  }), /*#__PURE__*/React.createElement(RA, {
    name: "lt",
    label: "\u0417\u0430\u043F\u0440\u0435\u0442",
    description: "\u042D\u0442\u043E\u0442 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u043D\u0435 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u043E\u0437\u0438\u0446\u0438\u0438"
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px dashed var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: '24px 16px',
      textAlign: 'center',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement(IC, {
    name: "file-input",
    size: 22,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      marginTop: 8
    }
  }, "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B \u0441\u044E\u0434\u0430 \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, "xlsx, xls, csv", kind === 'kp' ? ', pdf' : '', " \u2014 \u0434\u043E 20 \u041C\u0411")), kind === 'kp' || kind === 'price' || kind === 'catalog' || kind === 'history' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(F, {
    label: "\u0412\u0430\u043B\u044E\u0442\u0430 \u0444\u0430\u0439\u043B\u0430",
    hint: "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E \u0448\u0430\u043F\u043A\u0435, \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
  }, /*#__PURE__*/React.createElement(S, {
    placeholder: "RUB",
    options: [{
      value: 'rub',
      label: 'RUB'
    }, {
      value: 'usd',
      label: 'USD'
    }, {
      value: 'cny',
      label: 'CNY'
    }]
  })), /*#__PURE__*/React.createElement(F, {
    label: "\u0424\u043E\u0440\u043C\u0430\u0442 \u0447\u0438\u0441\u0435\u043B",
    hint: "\u041A\u0430\u043A \u0447\u0438\u0442\u0430\u0442\u044C \xAB1,000\xBB \u0432 \u044D\u0442\u043E\u043C \u0444\u0430\u0439\u043B\u0435"
  }, /*#__PURE__*/React.createElement(S, {
    placeholder: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 \u2014 1 000,00",
    options: [{
      value: 'ru',
      label: 'Русский — 1 000,00'
    }, {
      value: 'en',
      label: 'Английский — 1,000.00'
    }]
  }))), /*#__PURE__*/React.createElement(CH, {
    label: "\u0426\u0435\u043D\u044B \u0432 \u0444\u0430\u0439\u043B\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0442 \u041D\u0414\u0421"
  })) : null));
}

/* Карточка поставщика — поля SupplierCreate из types/index.ts */
function SupplierDialog({
  onClose,
  onDone
}) {
  return /*#__PURE__*/React.createElement(D, {
    open: true,
    width: 560,
    onClose: onClose,
    title: "\u041D\u043E\u0432\u044B\u0439 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A",
    description: "\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B \u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0435 \u043B\u0438\u0446\u043E. Email \u043D\u0443\u0436\u0435\u043D, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u043F\u043E\u043B\u0443\u0447\u0430\u043B \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u041A\u041F.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(B, {
      size: "sm",
      onClick: onClose
    }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/React.createElement(B, {
      size: "sm",
      variant: "primary",
      onClick: onDone
    }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(F, {
    label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
    required: true
  }, /*#__PURE__*/React.createElement(IP, {
    placeholder: "\u041E\u041E\u041E \xAB\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\xBB"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(F, {
    label: "\u0418\u041D\u041D"
  }, /*#__PURE__*/React.createElement(IP, {
    numeric: true,
    placeholder: "7728123456"
  })), /*#__PURE__*/React.createElement(F, {
    label: "\u0421\u043A\u0438\u0434\u043A\u0430 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",
    hint: "\u041F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043A\u043E \u0432\u0441\u0435\u043C \u043F\u043E\u0437\u0438\u0446\u0438\u044F\u043C \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430"
  }, /*#__PURE__*/React.createElement(IP, {
    numeric: true,
    align: "right",
    suffix: "%",
    placeholder: "0"
  }))), /*#__PURE__*/React.createElement(F, {
    label: "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F",
    hint: "\u041F\u043E \u043D\u0435\u0439 \u043F\u043E\u0434\u0431\u043E\u0440 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430 \u043D\u0430 \u043D\u043E\u0432\u044B\u0445 \u043F\u043E\u0437\u0438\u0446\u0438\u044F\u0445"
  }, /*#__PURE__*/React.createElement(IP, {
    placeholder: "\u041A\u0430\u0431\u0435\u043B\u044C, \u043B\u043E\u0442\u043A\u0438, \u043A\u0440\u0435\u043F\u0451\u0436"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(F, {
    label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0435 \u043B\u0438\u0446\u043E"
  }, /*#__PURE__*/React.createElement(IP, {
    placeholder: "\u0421\u043E\u043A\u043E\u043B\u043E\u0432 \u0410. \u0412."
  })), /*#__PURE__*/React.createElement(F, {
    label: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C"
  }, /*#__PURE__*/React.createElement(IP, {
    placeholder: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043F\u043E \u0442\u0435\u043D\u0434\u0435\u0440\u0430\u043C"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(F, {
    label: "Email",
    hint: "\u041C\u043E\u0436\u043D\u043E \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E"
  }, /*#__PURE__*/React.createElement(IP, {
    placeholder: "tender@example.ru"
  })), /*#__PURE__*/React.createElement(F, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"
  }, /*#__PURE__*/React.createElement(IP, {
    placeholder: "+7 495 000-00-00"
  }))), /*#__PURE__*/React.createElement(CH, {
    label: "\u041D\u0435\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u2014 \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0438\u0437 \u043F\u043E\u0434\u0431\u043E\u0440\u0430 \u0438 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438"
  })));
}

/* Удаление поставщика — SupplierDeleteImpact: что именно будет затронуто */
function DeleteSupplierDialog({
  onClose,
  onDone
}) {
  const impact = [['История закупок', 1284, 'будет удалена'], ['Привязки к позициям', 96, 'будут удалены'], ['Ручные связки', 12, 'будут удалены'], ['Связки с производителями', 3, 'будут удалены'], ['Отправленные запросы', 42, 'будут удалены'], ['Полученные КП', 38, 'будут удалены'], ['Затронуто спецификаций', 7, ''], ['Прайс-листы', 2, 'сохранятся'], ['Входящие письма', 18, 'сохранятся']];
  return /*#__PURE__*/React.createElement(D, {
    open: true,
    width: 520,
    onClose: onClose,
    title: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430 \xAB\u041E\u041E\u041E \xAB\u041A\u0430\u0431\u0435\u043B\u044C-\u041C\xBB\xBB?",
    description: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043E\u0431\u0440\u0430\u0442\u0438\u043C\u043E. \u041D\u0438\u0436\u0435 \u2014 \u0447\u0442\u043E \u0438\u043C\u0435\u043D\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0441\u044F \u0432 \u0431\u0430\u0437\u0435.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(B, {
      size: "sm",
      onClick: onClose
    }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/React.createElement(B, {
      size: "sm",
      variant: "danger",
      iconLeft: "trash-2",
      onClick: onDone
    }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 1,
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--border-hairline)'
    }
  }, impact.map(([k, v, note]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '8px 12px',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-numeric-strong)',
      color: note === 'сохранятся' ? 'var(--text-success)' : 'var(--text-primary)'
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: note === 'сохранятся' ? 'var(--text-success)' : 'var(--text-muted)',
      minWidth: 110,
      textAlign: 'right'
    }
  }, note))))));
}
Object.assign(window, {
  UploadDialog,
  RfqDialog,
  SimpleDialog,
  SupplierDialog,
  DeleteSupplierDialog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zakupki/ProductDialogs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zakupki/ProductScreensA.jsx
try { (() => {
const NS = window.AMTSystemsDesignSystem_374943;
const {
  Icon,
  Button,
  IconButton,
  Badge,
  Tag,
  Tooltip,
  Dialog,
  Toast,
  Banner,
  EmptyState,
  Tabs,
  Input,
  Select,
  Checkbox,
  Switch,
  Radio,
  Field,
  Textarea,
  StatusPill,
  Pagination
} = NS;

/* ── общие части страницы ── */
function PageHead({
  title,
  sub,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-h2)',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--text-primary)'
    }
  }, title), sub ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      marginTop: 4,
      maxWidth: 'var(--measure-prose)'
    }
  }, sub) : null), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flex: '0 0 auto'
    }
  }, actions) : null);
}
const TH = {
  height: 36,
  padding: '0 12px',
  background: 'var(--table-header-bg)',
  borderBottom: '1px solid var(--border-default)',
  font: 'var(--weight-semibold) var(--text-xs)/1.2 var(--font-core)',
  letterSpacing: 'var(--tracking-label)',
  textTransform: 'uppercase',
  color: 'var(--text-secondary)',
  whiteSpace: 'nowrap',
  textAlign: 'left'
};
const TD = {
  height: 38,
  padding: '0 12px',
  borderBottom: 'var(--border-cell)',
  font: 'var(--type-body-sm)',
  color: 'var(--text-body)'
};
const MONO = {
  fontFamily: 'var(--font-mono)',
  fontVariantNumeric: 'tabular-nums'
};
const nf = (n, d = 0) => n == null ? '—' : n.toLocaleString('ru-RU', {
  minimumFractionDigits: d,
  maximumFractionDigits: d
});
function DataCard({
  cols,
  rows,
  render,
  footer,
  empty,
  min = 900
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      minWidth: min,
      borderCollapse: 'separate',
      borderSpacing: 0,
      tableLayout: 'fixed'
    }
  }, /*#__PURE__*/React.createElement("colgroup", null, cols.map((c, i) => /*#__PURE__*/React.createElement("col", {
    key: i,
    style: {
      width: c.w
    }
  }))), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, cols.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      ...TH,
      textAlign: c.a || 'left'
    }
  }, c.h)))), /*#__PURE__*/React.createElement("tbody", null, rows.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: cols.length,
    style: {
      ...TD,
      height: 120,
      textAlign: 'center',
      color: 'var(--text-muted)'
    }
  }, empty || 'Ничего не найдено')) : rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id ?? i,
    style: {
      background: i % 2 ? 'var(--table-row-alt)' : 'var(--surface-card)'
    }
  }, render(r, i)))))), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 12px',
      borderTop: 'var(--border-thin)',
      background: 'var(--surface-subtle)'
    }
  }, footer) : null);
}

/* ═════════ ПОСТАВЩИКИ ═════════ */
/* Поля строго по types/index.ts → Supplier:
   name · email · phone · contact_person · position · inn · specialization
   · is_negative · default_discount_percent
   Вложенная таблица — PurchaseHistoryProduct (api/suppliers.ts → listSupplierProducts):
   nomenclature_name · article · manufacturer · uom · quantity · price · total_sum · purchase_date
   Инлайн-правка только article и manufacturer — PurchaseHistoryUpdate больше ничего не принимает. */
const SUPPLIERS = [{
  id: 1,
  name: 'ООО «ЭТМ»',
  specialization: 'Кабель, лотки, крепёж',
  contact: 'Соколов А. В.',
  position: 'Менеджер по тендерам',
  phone: '+7 495 777-31-10',
  email: 'tender@etm.ru',
  inn: '7728123456',
  discount: '5,0',
  negative: false
}, {
  id: 2,
  name: 'АО «Русэлт»',
  specialization: 'Щитовое оборудование, автоматика',
  contact: 'Литвинова Е. П.',
  position: 'Руководитель отдела продаж',
  phone: '+7 812 448-19-04',
  email: 'zakaz@ruselt.ru',
  inn: '7811234567',
  discount: '3,5',
  negative: false
}, {
  id: 3,
  name: 'ООО «АСК-Электро»',
  specialization: 'КРУ, трансформаторы',
  contact: 'Гареев Р. М.',
  position: 'Инженер по продажам',
  phone: '+7 343 216-88-42',
  email: 'sales@ask-e.ru',
  inn: '6658345678',
  discount: null,
  negative: false
}, {
  id: 4,
  name: 'ООО «ЭК-Восток»',
  specialization: 'Лотки, кабеленесущие системы',
  contact: 'Пшеничная О. Д.',
  position: 'Менеджер',
  phone: '+7 383 305-77-20',
  email: 'info@ekvostok.ru',
  inn: '5405456789',
  discount: '2,0',
  negative: false
}, {
  id: 5,
  name: 'ООО «Кабель-М»',
  specialization: 'Кабельно-проводниковая продукция',
  contact: 'Юдин С. С.',
  position: null,
  phone: '+7 495 640-12-88',
  email: 'kp@kabel-m.ru',
  inn: '7726567890',
  discount: null,
  negative: true
}];
const HISTORY = [{
  id: 1,
  name: 'Кабель ВВГнг(А)-LS 5х6',
  article: 'ВВГ-5х6',
  mfr: 'Камкабель',
  uom: 'м',
  qty: '1 200',
  price: '284,50',
  sum: '341 400,00',
  date: '11.03.2026'
}, {
  id: 2,
  name: 'Труба гофрированная ПНД 25 мм',
  article: 'ГОФ-25',
  mfr: 'ДКС',
  uom: 'м',
  qty: '3 400',
  price: '31,20',
  sum: '106 080,00',
  date: '11.03.2026'
}, {
  id: 3,
  name: 'Лоток лестничный 200х80, L=3000',
  article: null,
  mfr: null,
  uom: 'шт',
  qty: '320',
  price: '1 145,00',
  sum: '366 400,00',
  date: '05.02.2026'
}];
function SuppliersScreen({
  toast,
  openDialog
}) {
  const [q, setQ] = React.useState('');
  const [neg, setNeg] = React.useState(false);
  const [open, setOpen] = React.useState(null);
  const [hq, setHq] = React.useState('');
  const rows = SUPPLIERS.filter(s => (!neg || s.negative) && (s.name + s.specialization + (s.contact || '') + s.inn).toLowerCase().includes(q.toLowerCase()));
  const hist = HISTORY.filter(h => ((h.article || '') + h.name).toLowerCase().includes(hq.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438",
    sub: "\u0420\u0435\u0435\u0441\u0442\u0440 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u043E\u0432: \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B, \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0435 \u043B\u0438\u0446\u043E, \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0438 \u0441\u043A\u0438\u0434\u043A\u0430 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "download",
      onClick: () => toast('Реестр выгружен', 'Файл suppliers.xlsx сохранён.')
    }, "\u0412\u044B\u0433\u0440\u0443\u0437\u0438\u0442\u044C"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "file-input",
      onClick: () => openDialog('catalog')
    }, "\u0418\u043C\u043F\u043E\u0440\u0442 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      iconLeft: "plus",
      onClick: () => openDialog('supplier')
    }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    iconLeft: "search",
    placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0438\u043C\u0435\u043D\u0438 \u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438...",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      width: 300
    }
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: neg,
    onChange: () => setNeg(!neg),
    label: "\u0422\u043E\u043B\u044C\u043A\u043E \u043D\u0435\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    iconLeft: "download",
    onClick: () => toast('Шаблон скачан', 'шаблон_импорта_поставщиков.xlsx')
  }, "\u0428\u0430\u0431\u043B\u043E\u043D \u0438\u043C\u043F\u043E\u0440\u0442\u0430"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E ", rows.length, " \u0438\u0437 214")), /*#__PURE__*/React.createElement(DataCard, {
    min: 1240,
    empty: /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 8
      }
    }, /*#__PURE__*/React.createElement(EmptyState, {
      compact: true,
      icon: "building-2",
      title: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D",
      description: "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430 \u0432 \u0440\u0435\u0435\u0441\u0442\u0440.",
      action: /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "primary",
        iconLeft: "plus",
        onClick: () => openDialog('supplier')
      }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430")
    })),
    cols: [{
      h: '',
      w: 34
    }, {
      h: 'Поставщик',
      w: '20%'
    }, {
      h: 'Специализация',
      w: '18%'
    }, {
      h: 'Контактное лицо',
      w: 160
    }, {
      h: 'Должность',
      w: 170
    }, {
      h: 'Телефон',
      w: 150
    }, {
      h: 'Email',
      w: 160
    }, {
      h: 'ИНН',
      w: 110
    }, {
      h: 'Скидка',
      w: 90,
      a: 'right'
    }, {
      h: '',
      w: 48
    }],
    rows: rows,
    render: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        padding: '0 0 0 10px'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: open === s.id ? 'chevron-down' : 'chevron-right',
      label: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0437\u0430\u043A\u0443\u043F\u043E\u043A",
      size: "sm",
      onClick: () => {
        setOpen(open === s.id ? null : s.id);
        setHq('');
      }
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        fontWeight: 500,
        color: 'var(--text-primary)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, s.name, s.negative ? /*#__PURE__*/React.createElement(Tooltip, {
      label: "\u041D\u0435\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u2014 \u0438\u0441\u043A\u043B\u044E\u0447\u0451\u043D \u0438\u0437 \u043F\u043E\u0434\u0431\u043E\u0440\u0430 \u0438 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle-alert",
      size: 13,
      color: "var(--red-500)"
    })) : null)), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        color: 'var(--text-secondary)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: 0
      },
      title: s.specialization
    }, s.specialization), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        color: 'var(--text-secondary)'
      }
    }, s.contact ?? '—'), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        color: 'var(--text-muted)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: 0
      },
      title: s.position ?? ''
    }, s.position ?? '—'), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        ...MONO,
        fontSize: 12,
        color: 'var(--text-secondary)'
      }
    }, s.phone ?? '—'), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        ...MONO,
        fontSize: 12,
        color: 'var(--text-link)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: 0
      },
      title: s.email ?? ''
    }, s.email ?? '—'), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        ...MONO,
        color: 'var(--text-muted)'
      }
    }, s.inn ?? '—'), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        ...MONO,
        textAlign: 'right',
        color: s.discount ? 'var(--text-body)' : 'var(--text-disabled)'
      }
    }, s.discount ? s.discount + ' %' : '—'), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "trash-2",
      label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430",
      size: "sm",
      onClick: () => openDialog('delSupplier')
    }))),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        ...MONO,
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, "1\u2013", rows.length, " \u0438\u0437 214"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-left",
      label: "\u041D\u0430\u0437\u0430\u0434",
      variant: "outline",
      size: "sm",
      disabled: true
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        ...MONO,
        fontSize: 13
      }
    }, "1 / 11"), /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-right",
      label: "\u0412\u043F\u0435\u0440\u0451\u0434",
      variant: "outline",
      size: "sm"
    })))
  }), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      padding: '10px 14px',
      borderBottom: 'var(--border-thin)',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h4)',
      color: 'var(--text-primary)'
    }
  }, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0437\u0430\u043A\u0443\u043F\u043E\u043A \u2014 ", SUPPLIERS.find(s => s.id === open).name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    iconLeft: "search",
    placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0430\u0440\u0442\u0438\u043A\u0443\u043B\u0443 \u0438\u043B\u0438 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E...",
    value: hq,
    onChange: e => setHq(e.target.value),
    style: {
      width: 260
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconLeft: "file-input",
    onClick: () => openDialog('history')
  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043F\u0440\u0430\u0439\u0441 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430"))), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      tableLayout: 'fixed'
    }
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    style: {
      width: '32%'
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 130
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 150
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 60
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 90
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 110
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 130
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 110
    }
  })), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['Наименование', 'Артикул', 'Производитель', 'Ед.', 'Кол-во', 'Цена, ₽', 'Сумма, ₽', 'Дата закупки'].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      ...TH,
      textAlign: i >= 4 && i <= 6 ? 'right' : 'left'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, hist.map((h, i) => /*#__PURE__*/React.createElement("tr", {
    key: h.id,
    style: {
      background: i % 2 ? 'var(--table-row-alt)' : 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      maxWidth: 0
    },
    title: h.name
  }, h.name), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      ...MONO,
      background: 'var(--table-cell-edited)',
      color: h.article ? 'var(--text-body)' : 'var(--text-disabled)'
    },
    title: "\u041C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432\u0440\u0443\u0447\u043D\u0443\u044E"
  }, h.article ?? '—'), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      background: 'var(--table-cell-edited)',
      color: h.mfr ? 'var(--text-body)' : 'var(--text-disabled)'
    },
    title: "\u041C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432\u0440\u0443\u0447\u043D\u0443\u044E"
  }, h.mfr ?? '—'), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      color: 'var(--text-muted)'
    }
  }, h.uom ?? '—'), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      ...MONO,
      textAlign: 'right'
    }
  }, h.qty), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      ...MONO,
      textAlign: 'right'
    }
  }, h.price), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      ...MONO,
      textAlign: 'right',
      fontWeight: 600
    }
  }, h.sum), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      ...MONO,
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, h.date))))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      padding: '8px 14px',
      borderTop: 'var(--border-thin)'
    }
  }, "\u041E\u0445\u0440\u043E\u0439 \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u044B \u0441\u0442\u043E\u043B\u0431\u0446\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u044F\u043C\u043E \u0432 \u0442\u0430\u0431\u043B\u0438\u0446\u0435 \u2014 \u0430\u0440\u0442\u0438\u043A\u0443\u043B \u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.")) : null);
}

/* ═════════ БАЗА КП ═════════ */
/* Поля строго по types/index.ts → KpDocument:
   source_file_name · supplier_name · invoice_number · offer_date · valid_until
   · currency · line_count · vat_included · vat_percent
   vat_included === null означает «неизвестно» (документ импортирован до 06.08.2026),
   и НИКОГДА не читается как «без НДС» — см. src/lib/vatDisclosure.ts.
   Поля «сумма» и «статус» у документа нет — их здесь и не показываем. */
const KP = [{
  id: 1,
  file: 'КП-2026-0142 ЭТМ.xlsx',
  sup: 'ООО «ЭТМ»',
  inv: '0142',
  date: '11.03.2026',
  till: '11.04.2026',
  cur: 'RUB',
  lines: 128,
  vat: true,
  vatp: '20'
}, {
  id: 2,
  file: 'Предложение Русэлт 05-03.pdf',
  sup: 'АО «Русэлт»',
  inv: 'РЭ-884',
  date: '05.03.2026',
  till: '20.03.2026',
  cur: 'RUB',
  lines: 64,
  vat: false,
  vatp: null
}, {
  id: 3,
  file: 'АСК КП №77.xlsx',
  sup: 'ООО «АСК-Электро»',
  inv: '77',
  date: '26.02.2026',
  till: '26.03.2026',
  cur: 'USD',
  lines: 212,
  vat: null,
  vatp: null
}, {
  id: 4,
  file: 'ЭК-Восток лотки.xlsx',
  sup: null,
  inv: null,
  date: '19.02.2026',
  till: null,
  cur: 'RUB',
  lines: 41,
  vat: true,
  vatp: '20'
}];
function VatCell({
  vat,
  percent
}) {
  if (vat === null) return /*#__PURE__*/React.createElement(Tooltip, {
    label: "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D \u0434\u043E \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u0444\u043B\u0430\u0433\u0430 \u041D\u0414\u0421. \u042D\u0442\u043E \u043D\u0435 \u0437\u043D\u0430\u0447\u0438\u0442 \xAB\u0431\u0435\u0437 \u041D\u0414\u0421\xBB \u2014 \u0443\u0442\u043E\u0447\u043D\u0438\u0442\u0435 \u0443 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430."
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      font: 'var(--type-caption)',
      color: 'var(--text-attention)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-alert",
    size: 12
  }), "\u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E"));
  return /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)'
    }
  }, vat ? 'с НДС' + (percent ? ' ' + percent + '%' : '') : 'без НДС');
}
function KpScreen({
  toast,
  openDialog
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "\u0411\u0430\u0437\u0430 \u041A\u041F",
    sub: "\u0420\u0430\u043D\u0435\u0435 \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F. \u0426\u0435\u043D\u044B \u043E\u0442\u0441\u044E\u0434\u0430 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u044E\u0442\u0441\u044F \u043A\u0430\u043A \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u044B \u043F\u0440\u0438 \u043F\u043E\u0434\u0431\u043E\u0440\u0435 \u0446\u0435\u043D\u044B \u043F\u043E\u0437\u0438\u0446\u0438\u0438.",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      iconLeft: "file-input",
      onClick: () => openDialog('kp')
    }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u041A\u041F")
  }), /*#__PURE__*/React.createElement(Banner, {
    tone: "attention",
    title: "\u0423 \u043E\u0434\u043D\u043E\u0433\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 \u043D\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, "\u0423\u043A\u0430\u0437\u0430\u0442\u044C")
  }, "\xAB\u042D\u041A-\u0412\u043E\u0441\u0442\u043E\u043A \u043B\u043E\u0442\u043A\u0438.xlsx\xBB \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D \u0431\u0435\u0437 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438 \u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0443 \u2014 \u0431\u0430\u0437\u0430 \u041A\u041F \u043D\u0435 \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0440\u0438 \u043F\u0440\u043E\u043C\u0430\u0445\u0435 \u043F\u043E \u0438\u043C\u0435\u043D\u0438."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    iconLeft: "search",
    placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0444\u0430\u0439\u043B\u0443, \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0443 \u0438\u043B\u0438 \u043D\u043E\u043C\u0435\u0440\u0443 \u0441\u0447\u0451\u0442\u0430",
    style: {
      minWidth: 260,
      flex: '1 1 260px',
      maxWidth: 340
    }
  }), /*#__PURE__*/React.createElement(Select, {
    placeholder: "\u0412\u0441\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438",
    options: SUPPLIERS.map(s => ({
      value: String(s.id),
      label: s.name
    })),
    style: {
      width: 190
    }
  }), /*#__PURE__*/React.createElement(Select, {
    placeholder: "\u0412\u0441\u0435 \u0432\u0430\u043B\u044E\u0442\u044B",
    options: [{
      value: 'rub',
      label: 'RUB'
    }, {
      value: 'usd',
      label: 'USD'
    }, {
      value: 'cny',
      label: 'CNY'
    }],
    style: {
      width: 140
    }
  })), /*#__PURE__*/React.createElement(DataCard, {
    min: 1120,
    cols: [{
      h: 'Файл',
      w: '24%'
    }, {
      h: 'Поставщик',
      w: 190
    }, {
      h: '№ счёта',
      w: 110
    }, {
      h: 'Дата КП',
      w: 110
    }, {
      h: 'Действует до',
      w: 120
    }, {
      h: 'Валюта',
      w: 84
    }, {
      h: 'Позиций',
      w: 92,
      a: 'right'
    }, {
      h: 'НДС',
      w: 130
    }, {
      h: '',
      w: 90
    }],
    rows: KP,
    render: k => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        fontWeight: 500,
        color: 'var(--text-primary)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: 0
      },
      title: k.file
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "file-spreadsheet",
      size: 14,
      color: "var(--text-muted)"
    }), k.file)), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        color: k.sup ? 'var(--text-secondary)' : 'var(--text-attention)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: 0
      },
      title: k.sup ?? 'не привязан'
    }, k.sup ?? 'не привязан'), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        ...MONO,
        color: 'var(--text-secondary)'
      }
    }, k.inv ?? '—'), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        ...MONO,
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, k.date ?? '—'), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        ...MONO,
        fontSize: 12,
        color: k.till ? 'var(--text-muted)' : 'var(--text-disabled)'
      }
    }, k.till ?? '—'), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        ...MONO
      }
    }, k.cur), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        ...MONO,
        textAlign: 'right'
      }
    }, k.lines), /*#__PURE__*/React.createElement("td", {
      style: TD
    }, /*#__PURE__*/React.createElement(VatCell, {
      vat: k.vat,
      percent: k.vatp
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-right",
      label: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u041A\u041F",
      size: "sm"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "trash-2",
      label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442",
      size: "sm"
    }))))
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, "\u0421\u0442\u0440\u043E\u043A\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u043F\u0440\u044F\u043C\u043E \u0432 \u0442\u0430\u0431\u043B\u0438\u0446\u0435: \u0430\u0440\u0442\u0438\u043A\u0443\u043B, \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435, \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C, \u0446\u0435\u043D\u0430, \u0435\u0434\u0438\u043D\u0438\u0446\u0430 \u0438 \u0441\u0440\u043E\u043A \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438."));
}

/* ═════════ НЕ РАСПОЗНАННЫЕ ПИСЬМА ═════════ */
const MAILS = [{
  id: 1,
  subj: 'Коммерческое предложение по вашему запросу',
  from: 'sales@ask-e.ru',
  date: '12.03.2026 09:14',
  att: [{
    n: 'КП АСК-Электро 12.03.xlsx',
    kb: 84
  }]
}, {
  id: 2,
  subj: 'Re: цены по кабельной продукции',
  from: 'kp@kabel-m.ru',
  date: '11.03.2026 17:42',
  att: [{
    n: 'прайс март.xlsx',
    kb: 212
  }, {
    n: 'условия поставки.pdf',
    kb: 96
  }]
}, {
  id: 3,
  subj: '(без темы)',
  from: 'info@ekvostok.ru',
  date: '11.03.2026 12:05',
  att: [],
  body: 'Добрый день! Цены во вложении будут завтра, сейчас уточняем сроки по лоткам 200х80.'
}, {
  id: 4,
  subj: 'Уточнение по спецификации ПС Северная',
  from: 'tender@etm.ru',
  date: '10.03.2026 15:30',
  att: [{
    n: 'уточнение.xlsx',
    kb: 44
  }]
}];
function MailScreen({
  toast
}) {
  const [dismissed, setDismissed] = React.useState(false);
  const [assign, setAssign] = React.useState(null);
  const list = dismissed ? [] : MAILS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "\u041D\u0435 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430",
    sub: "\u041E\u0442\u0432\u0435\u0442\u044B \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u0432\u044F\u0437\u0430\u0442\u044C \u0441\u043E \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0435\u0439 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u2014 \u043E\u0431\u044B\u0447\u043D\u043E \u043D\u043E\u0432\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E \u0431\u0435\u0437 \u0446\u0438\u0442\u0430\u0442\u044B \u0442\u0435\u043C\u044B \u0441 \u043A\u043E\u0434\u043E\u043C \u0437\u0430\u043F\u0440\u043E\u0441\u0430. \u041F\u0440\u0438\u0432\u044F\u0436\u0438\u0442\u0435 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0438\u043B\u0438 \u043E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u0435: \u043E\u0442\u043A\u043B\u043E\u043D\u0451\u043D\u043D\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u043D\u0435 \u0443\u0434\u0430\u043B\u044F\u044E\u0442\u0441\u044F \u0438 \u0438\u0445 \u043C\u043E\u0436\u043D\u043E \u0432\u0435\u0440\u043D\u0443\u0442\u044C."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: dismissed ? 'primary' : 'secondary',
    onClick: () => setDismissed(!dismissed)
  }, dismissed ? 'Показать активные' : 'Показать отклонённые'), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconLeft: "refresh-cw",
    onClick: () => toast('Почта проверена', 'Новых писем нет.')
  }, "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043F\u043E\u0447\u0442\u0443")), list.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "inbox",
    title: dismissed ? 'Отклонённых писем нет' : 'Непривязанных писем нет',
    description: dismissed ? 'Все письма разобраны.' : 'Ответы поставщиков связываются со спецификациями автоматически.',
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setDismissed(false)
    }, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435")
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8
    }
  }, list.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    style: {
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)',
      padding: 12,
      display: 'grid',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-medium) var(--text-sm)/1.35 var(--font-core)',
      color: 'var(--text-primary)'
    }
  }, m.subj), /*#__PURE__*/React.createElement("div", {
    style: {
      ...MONO,
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 2,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, m.from, " \xB7 ", m.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => setAssign(assign === m.id ? null : m.id)
  }, "\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C \u043A \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "eye-off",
    label: "\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C \u2014 \u0443\u0431\u0440\u0430\u0442\u044C \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430, \u043F\u0438\u0441\u044C\u043C\u043E \u043D\u0435 \u0443\u0434\u0430\u043B\u044F\u0435\u0442\u0441\u044F",
    size: "sm",
    onClick: () => toast('Письмо отклонено', 'Найти и вернуть можно через «Показать отклонённые».')
  }))), m.att.length ? m.att.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--surface-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '5px 8px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-spreadsheet",
    size: 14,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--type-caption)',
      color: 'var(--text-body)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, a.n), /*#__PURE__*/React.createElement("span", {
    style: {
      ...MONO,
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, a.kb, " \u041A\u0411"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "download",
    label: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u0435",
    size: "sm"
  }))) : /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      fontStyle: 'italic'
    }
  }, m.body), assign === m.id ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8,
      borderTop: 'var(--border-thin)',
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E",
    options: [{
      value: '1',
      label: 'ПС 110-10 кВ Северная — №4'
    }, {
      value: '2',
      label: 'Реконструкция КТП-4 — №2'
    }]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443",
    options: SUPPLIERS.map(s => ({
      value: String(s.id),
      label: s.name
    }))
  })), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    variant: "primary",
    onClick: () => {
      setAssign(null);
      toast('Письмо привязано', 'КП разобрано, 128 позиций добавлены в матрицу.');
    }
  }, "\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C"), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    onClick: () => setAssign(null)
  }, "\u041E\u0442\u043C\u0435\u043D\u0430")) : null))));
}
Object.assign(window, {
  PageHead,
  DataCard,
  TH,
  TD,
  MONO,
  nf,
  SuppliersScreen,
  KpScreen,
  MailScreen,
  SUPPLIERS,
  VatCell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zakupki/ProductScreensA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zakupki/ProductScreensB.jsx
try { (() => {
const NS2 = window.AMTSystemsDesignSystem_374943;
const {
  Icon: I2,
  Button: B2,
  IconButton: IB2,
  Badge: BD2,
  Tag: TG2,
  Dialog: DG2,
  Banner: BN2,
  EmptyState: ES2,
  Tabs: TB2,
  Input: IN2,
  Select: SL2,
  Checkbox: CB2,
  Switch: SW2,
  Radio: RD2,
  Field: FD2,
  Textarea: TA2,
  StatusPill: SP2
} = NS2;

/* ═════════ СВЯЗКИ ТОВАР ↔ ПОСТАВЩИК ═════════ */
const LINKS = [{
  id: 1,
  art: 'ВВГ-5х6',
  name: 'Кабель ВВГнг(А)-LS 5х6',
  sup: 'ООО «ЭТМ»',
  type: 'ручная',
  date: '11.03.2026',
  by: 'И. Ковалёв'
}, {
  id: 2,
  art: 'ЩРН-36',
  name: 'Щит распределительный ЩРН-36 IP31',
  sup: 'ООО «АСК-Электро»',
  type: 'ручная',
  date: '05.03.2026',
  by: 'М. Ерёмина'
}, {
  id: 3,
  art: 'ЛОТ-200',
  name: 'Лоток лестничный 200х80, L=3000',
  sup: 'ООО «ЭК-Восток»',
  type: 'ручная',
  date: '26.02.2026',
  by: 'И. Ковалёв'
}, {
  id: 4,
  art: 'КРУ-10',
  name: 'Ячейка КРУ 10 кВ с вакуумным выключателем',
  sup: 'ООО «АСК-Электро»',
  type: 'запрет',
  date: '19.02.2026',
  by: 'М. Ерёмина'
}];
function LinksScreen({
  toast,
  openDialog
}) {
  const [q, setQ] = React.useState('');
  const rows = LINKS.filter(r => (r.art + r.name + r.sup).toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "\u0421\u0432\u044F\u0437\u043A\u0438 \u0442\u043E\u0432\u0430\u0440 \u2194 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A",
    sub: "\u0411\u0430\u0437\u0430 \u0440\u0443\u0447\u043D\u044B\u0445 \u043F\u0440\u0438\u0432\u044F\u0437\u043E\u043A: \u043A\u0430\u043A\u0438\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043A \u043A\u0430\u043A\u0438\u043C \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043F\u043E\u0434\u0432\u044F\u0437\u044B\u0432\u0430\u043B. \u041C\u0430\u0442\u0447\u0435\u0440 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0438\u0445 \u043A\u0430\u043A \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u0443\u044E \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0443.",
    actions: /*#__PURE__*/React.createElement(B2, {
      size: "sm",
      variant: "primary",
      iconLeft: "plus",
      onClick: () => openDialog('link')
    }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0432\u044F\u0437\u043A\u0443")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(FD2, {
    label: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u044E \u0438\u043B\u0438 \u0430\u0440\u0442\u0438\u043A\u0443\u043B\u0443",
    style: {
      flex: 1,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(IN2, {
    iconLeft: "search",
    placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u0431\u043B\u043E\u043A \u043F\u0438\u0442\u0430\u043D\u0438\u044F LTEX",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement(FD2, {
    label: "\u0424\u0438\u043B\u044C\u0442\u0440 \u043F\u043E \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0443",
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement(SL2, {
    placeholder: "\u041B\u044E\u0431\u043E\u0439 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A",
    options: window.SUPPLIERS.map(s => ({
      value: String(s.id),
      label: s.name
    }))
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      paddingBottom: 8
    }
  }, "\u0412\u0441\u0435\u0433\u043E: 1 284")), /*#__PURE__*/React.createElement(DataCard, {
    min: 1000,
    cols: [{
      h: 'Артикул',
      w: 140
    }, {
      h: 'Наименование',
      w: '34%'
    }, {
      h: 'Поставщик',
      w: 220
    }, {
      h: 'Тип',
      w: 110
    }, {
      h: 'Дата',
      w: 110
    }, {
      h: 'Кем',
      w: 110
    }, {
      h: '',
      w: 90
    }],
    rows: rows,
    empty: "\u0421\u0432\u044F\u0437\u043E\u043A \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",
    render: r => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        ...MONO
      }
    }, r.art), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: 0
      },
      title: r.name
    }, r.name), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        color: 'var(--text-secondary)'
      }
    }, r.sup), /*#__PURE__*/React.createElement("td", {
      style: TD
    }, /*#__PURE__*/React.createElement(BD2, {
      tone: r.type === 'запрет' ? 'danger' : 'accent'
    }, r.type)), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        ...MONO,
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, r.date), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        color: 'var(--text-muted)'
      }
    }, r.by), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement(IB2, {
      icon: "pencil",
      label: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0432\u044F\u0437\u043A\u0443",
      size: "sm"
    }), /*#__PURE__*/React.createElement(IB2, {
      icon: "trash-2",
      label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0432\u044F\u0437\u043A\u0443",
      size: "sm"
    }))))
  }));
}

/* ═════════ ПРОИЗВОДИТЕЛИ → ПОСТАВЩИКИ ═════════ */
const MFR = [{
  m: 'Siemens',
  sup: [{
    id: 1,
    n: 'ООО «АСК-Электро»',
    p: true
  }, {
    id: 2,
    n: 'АО «Русэлт»',
    p: false
  }]
}, {
  m: 'IEK',
  sup: [{
    id: 3,
    n: 'ООО «ЭТМ»',
    p: true
  }, {
    id: 4,
    n: 'ООО «Кабель-М»',
    p: false
  }, {
    id: 5,
    n: 'ООО «ЭК-Восток»',
    p: false
  }]
}, {
  m: 'ДКС',
  sup: [{
    id: 6,
    n: 'ООО «ЭК-Восток»',
    p: true
  }]
}];
function MfrScreen({
  toast
}) {
  const [mfr, setMfr] = React.useState('');
  const [primary, setPrimary] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0438 \u2192 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438",
    sub: "\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u044B\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438 \u043F\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u043C. \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u043D\u0430\u0437\u043D\u0430\u0447\u0430\u0435\u0442\u0441\u044F \u0432\u0441\u0435\u043C \u043F\u043E\u0437\u0438\u0446\u0438\u044F\u043C \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u043F\u0440\u0438 \u043F\u043E\u0434\u0431\u043E\u0440\u0435 \u0438 \u043F\u0435\u0440\u0435\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043A\u0430\u0441\u043A\u0430\u0434, \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043A\u0430\u043A \u0437\u0430\u043F\u0430\u0441\u043D\u044B\u0435. \u0420\u0443\u0447\u043D\u043E\u0439 \u0432\u044B\u0431\u043E\u0440 \u043D\u0430 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0439 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-subtle)',
      padding: 14,
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-primary)'
    }
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0432\u044F\u0437\u043A\u0443"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(IN2, {
    placeholder: "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C (\u043D\u0430\u043F\u0440. Siemens)",
    value: mfr,
    onChange: e => setMfr(e.target.value),
    style: {
      width: 260
    }
  }), /*#__PURE__*/React.createElement(CB2, {
    checked: primary,
    onChange: () => setPrimary(!primary),
    label: "\u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A"
  }), /*#__PURE__*/React.createElement(SL2, {
    placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430",
    options: window.SUPPLIERS.map(s => ({
      value: String(s.id),
      label: s.name
    })),
    style: {
      width: 240
    }
  }), /*#__PURE__*/React.createElement(B2, {
    size: "md",
    variant: "primary",
    iconLeft: "plus",
    disabled: !mfr.trim(),
    onClick: () => {
      toast('Связка добавлена', 'Поставщик привязан к «' + mfr + '».');
      setMfr('');
    }
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"))), /*#__PURE__*/React.createElement(IN2, {
    iconLeft: "search",
    placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044E",
    style: {
      width: 300
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, MFR.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.m,
    style: {
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-subtle)',
      borderBottom: 'var(--border-thin)',
      padding: '9px 14px',
      font: 'var(--type-h4)',
      color: 'var(--text-primary)'
    }
  }, g.m), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      tableLayout: 'fixed'
    }
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    style: {
      width: '50%'
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: '25%'
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: '25%'
    }
  })), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: TH
  }, "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A"), /*#__PURE__*/React.createElement("th", {
    style: TH
  }, "\u0420\u043E\u043B\u044C"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...TH,
      textAlign: 'right'
    }
  }, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"))), /*#__PURE__*/React.createElement("tbody", null, g.sup.map((s, i) => /*#__PURE__*/React.createElement("tr", {
    key: s.id,
    style: {
      background: i % 2 ? 'var(--table-row-alt)' : 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: TD
  }, s.n), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, s.p ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: 20,
      padding: '0 8px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--steel-50)',
      color: 'var(--steel-700)',
      border: '1px solid var(--steel-100)',
      font: 'var(--weight-medium) var(--text-xs)/1 var(--font-core)'
    }
  }, /*#__PURE__*/React.createElement(I2, {
    name: "star",
    size: 11
  }), "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439") : /*#__PURE__*/React.createElement(BD2, {
    tone: "neutral",
    variant: "outline"
  }, "\u0410\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u044B\u0439")), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 4,
      alignItems: 'center'
    }
  }, !s.p ? /*#__PURE__*/React.createElement(B2, {
    size: "sm",
    variant: "ghost",
    iconLeft: "star",
    onClick: () => toast('Основной поставщик обновлён', s.n + ' назначен основным для ' + g.m + '.')
  }, "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C") : null, /*#__PURE__*/React.createElement(IB2, {
    icon: "trash-2",
    label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0432\u044F\u0437\u043A\u0443",
    size: "sm"
  })))))))))));
}

/* ═════════ ПРАЙС-ЛИСТЫ ═════════ */
/* Поля строго по api/price-lists.ts → PriceList:
   name · source_file_name · supplier_id · uploaded_at · priority_rank
   · is_active · vat_included · vat_percent
   priority_rank === null показывается как «Не задан» (placeholder из PriceLists.tsx:641).
   vat_included === null — «неизвестно», не «без НДС».
   Полей «позиций» и «валюта» у прайс-листа нет — они живут в его строках. */
const PRICES = [{
  id: 1,
  name: 'ЭТМ — основной каталог',
  file: 'Прайс ЭТМ март 2026.xlsx',
  sup: 'ООО «ЭТМ»',
  up: '01.03.2026',
  rank: 1,
  active: true,
  vat: true,
  vatp: '20'
}, {
  id: 2,
  name: 'Русэлт щиты Q1',
  file: 'Русэлт щиты Q1.xlsx',
  sup: 'АО «Русэлт»',
  up: '18.02.2026',
  rank: 2,
  active: true,
  vat: false,
  vatp: null
}, {
  id: 3,
  name: 'Кабель-М',
  file: 'Кабель-М прайс.csv',
  sup: 'ООО «Кабель-М»',
  up: '04.12.2025',
  rank: null,
  active: false,
  vat: null,
  vatp: null
}];
function PricesScreen({
  toast,
  openDialog
}) {
  const [rows, setRows] = React.useState(PRICES);
  const toggle = id => setRows(rs => rs.map(r => r.id === id ? {
    ...r,
    active: !r.active
  } : r));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "\u041F\u0440\u0430\u0439\u0441-\u043B\u0438\u0441\u0442\u044B",
    sub: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u043E\u0432. \u0426\u0435\u043D\u044B \u043E\u0442\u0441\u044E\u0434\u0430 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u044E\u0442\u0441\u044F \u043A\u0430\u043A \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u044B, \u043A\u043E\u0433\u0434\u0430 \u041A\u041F \u043F\u043E \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0435\u0449\u0451 \u043D\u0435\u0442. \u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442 \u0440\u0435\u0448\u0430\u0435\u0442, \u0447\u0435\u0439 \u043F\u0440\u0430\u0439\u0441 \u043F\u043E\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044F \u043F\u0435\u0440\u0432\u044B\u043C.",
    actions: /*#__PURE__*/React.createElement(B2, {
      size: "sm",
      variant: "primary",
      iconLeft: "file-input",
      onClick: () => openDialog('price')
    }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043F\u0440\u0430\u0439\u0441-\u043B\u0438\u0441\u0442")
  }), /*#__PURE__*/React.createElement(BN2, {
    tone: "attention",
    title: "\u0423 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u0440\u0430\u0439\u0441-\u043B\u0438\u0441\u0442\u0430 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442",
    action: /*#__PURE__*/React.createElement(B2, {
      size: "sm"
    }, "\u0417\u0430\u0434\u0430\u0442\u044C")
  }, "\u0411\u0435\u0437 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u0430 \u043F\u0440\u0430\u0439\u0441 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u043F\u043E\u0434\u0431\u043E\u0440\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u043C. \u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442 1 \u2014 \u0441\u0430\u043C\u044B\u0439 \u0432\u044B\u0441\u043E\u043A\u0438\u0439."), /*#__PURE__*/React.createElement(DataCard, {
    min: 1080,
    cols: [{
      h: 'Название',
      w: '20%'
    }, {
      h: 'Файл',
      w: '20%'
    }, {
      h: 'Поставщик',
      w: 190
    }, {
      h: 'Загружен',
      w: 120
    }, {
      h: 'Приоритет',
      w: 110,
      a: 'right'
    }, {
      h: 'НДС',
      w: 130
    }, {
      h: 'Активен',
      w: 110
    }, {
      h: '',
      w: 90
    }],
    rows: rows,
    render: p => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        fontWeight: 500,
        color: 'var(--text-primary)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: 0
      },
      title: p.name
    }, p.name), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        color: 'var(--text-secondary)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: 0
      },
      title: p.file
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(I2, {
      name: "list",
      size: 14,
      color: "var(--text-muted)"
    }), p.file)), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        color: 'var(--text-secondary)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: 0
      },
      title: p.sup
    }, p.sup), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        ...MONO,
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, p.up), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        ...MONO,
        textAlign: 'right',
        color: p.rank == null ? 'var(--text-disabled)' : 'var(--text-body)'
      }
    }, p.rank == null ? 'Не задан' : p.rank), /*#__PURE__*/React.createElement("td", {
      style: TD
    }, /*#__PURE__*/React.createElement(window.VatCell, {
      vat: p.vat,
      percent: p.vatp
    })), /*#__PURE__*/React.createElement("td", {
      style: TD
    }, /*#__PURE__*/React.createElement(SWI, {
      checked: p.active,
      onChange: () => {
        toggle(p.id);
        toast(p.active ? 'Прайс отключён' : 'Прайс включён', p.name + ' — ' + (p.active ? 'больше не участвует в подборе.' : 'снова участвует в подборе.'));
      }
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement(IB2, {
      icon: "chevron-right",
      label: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0438 \u043F\u0440\u0430\u0439\u0441\u0430",
      size: "sm"
    }), /*#__PURE__*/React.createElement(IB2, {
      icon: "trash-2",
      label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u0430\u0439\u0441-\u043B\u0438\u0441\u0442",
      size: "sm"
    }))))
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, "\u0421\u0442\u0440\u043E\u043A\u0438 \u043F\u0440\u0430\u0439\u0441\u0430 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u043F\u0440\u044F\u043C\u043E \u0432 \u0442\u0430\u0431\u043B\u0438\u0446\u0435: \u0430\u0440\u0442\u0438\u043A\u0443\u043B, \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435, \u0446\u0435\u043D\u0430, \u0432\u0430\u043B\u044E\u0442\u0430 \u0438 \u0435\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F."));
}

/* ═════════ НАСТРОЙКИ ═════════ */
function SettingsScreen({
  toast
}) {
  const [tab, setTab] = React.useState('cur');
  const [vat, setVat] = React.useState('20');
  const rates = [{
    c: 'USD',
    v: '82,40',
    d: '12.03.2026'
  }, {
    c: 'EUR',
    v: '89,15',
    d: '12.03.2026'
  }, {
    c: 'CNY',
    v: '11,36',
    d: '12.03.2026'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
    sub: "\u041A\u0443\u0440\u0441\u044B \u0432\u0430\u043B\u044E\u0442, \u0441\u0442\u0430\u0432\u043A\u0430 \u041D\u0414\u0421 \u0438 \u0448\u0430\u0431\u043B\u043E\u043D \u043F\u0438\u0441\u044C\u043C\u0430 \u0434\u043B\u044F \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u041A\u041F."
  }), /*#__PURE__*/React.createElement(TB2, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'cur',
      label: 'Курсы валют'
    }, {
      value: 'vat',
      label: 'НДС'
    }, {
      value: 'tpl',
      label: 'Шаблон письма'
    }]
  }), tab === 'cur' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(FD2, {
    label: "\u041A\u043E\u0434 \u0432\u0430\u043B\u044E\u0442\u044B",
    style: {
      width: 120
    }
  }, /*#__PURE__*/React.createElement(IN2, {
    placeholder: "GBP"
  })), /*#__PURE__*/React.createElement(FD2, {
    label: "\u041A\u0443\u0440\u0441 \u043A \u0440\u0443\u0431\u043B\u044E",
    style: {
      width: 160
    }
  }, /*#__PURE__*/React.createElement(IN2, {
    numeric: true,
    align: "right",
    placeholder: "110,00",
    suffix: "\u20BD"
  })), /*#__PURE__*/React.createElement(B2, {
    variant: "primary",
    iconLeft: "plus",
    onClick: () => toast('Курс добавлен', 'Пересчитаны 42 позиции в этой валюте.')
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"), /*#__PURE__*/React.createElement(B2, {
    iconLeft: "refresh-cw",
    onClick: () => toast('Курсы обновлены', 'Загружено с сайта ЦБ РФ на 12.03.2026.')
  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u0443\u0440\u0441\u044B \u0426\u0411")), /*#__PURE__*/React.createElement(DataCard, {
    min: 520,
    cols: [{
      h: 'Валюта',
      w: 120
    }, {
      h: 'Курс, ₽',
      w: 160,
      a: 'right'
    }, {
      h: 'Обновлён',
      w: 140
    }, {
      h: '',
      w: 80
    }],
    rows: rates.map((r, i) => ({
      ...r,
      id: i
    })),
    render: r => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        ...MONO,
        fontWeight: 600
      }
    }, r.c), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        ...MONO,
        textAlign: 'right'
      }
    }, r.v), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        ...MONO,
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, r.d), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement(IB2, {
      icon: "trash-2",
      label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0443\u0440\u0441",
      size: "sm"
    })))
  })) : tab === 'vat' ? /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)',
      padding: 20,
      display: 'grid',
      gap: 16,
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(FD2, {
    label: "\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430 \u041D\u0414\u0421",
    hint: "\u041F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043B \u0441\u0442\u0430\u0432\u043A\u0443 \u0432 \u041A\u041F"
  }, /*#__PURE__*/React.createElement(IN2, {
    numeric: true,
    align: "right",
    suffix: "%",
    value: vat,
    onChange: e => setVat(e.target.value),
    style: {
      width: 140
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-secondary)'
    }
  }, "\u041A\u0430\u043A \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0446\u0435\u043D\u044B"), /*#__PURE__*/React.createElement(RD2, {
    name: "v",
    checked: true,
    label: "\u0411\u0435\u0437 \u041D\u0414\u0421",
    description: "\u0426\u0435\u043D\u044B \u0438\u0437 \u041A\u041F \u043F\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043A \u0431\u0430\u0437\u0435 \u0431\u0435\u0437 \u043D\u0430\u043B\u043E\u0433\u0430"
  }), /*#__PURE__*/React.createElement(RD2, {
    name: "v",
    label: "\u0421 \u041D\u0414\u0421",
    description: "\u041A\u0430\u043A \u043F\u0440\u0438\u0441\u043B\u0430\u043B \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A"
  })), /*#__PURE__*/React.createElement(SW2, {
    checked: true,
    label: "\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0430\u0442\u044C, \u0435\u0441\u043B\u0438 \u0432 \u043E\u0434\u043D\u043E\u0439 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0441\u043C\u0435\u0448\u0430\u043D\u044B \u0441\u0442\u0430\u0432\u043A\u0438"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(B2, {
    variant: "primary",
    onClick: () => toast('Настройки сохранены', 'Ставка НДС — ' + vat + '%.')
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)',
      padding: 20,
      display: 'grid',
      gap: 16,
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(FD2, {
    label: "\u0422\u0435\u043C\u0430 \u043F\u0438\u0441\u044C\u043C\u0430",
    hint: "\u041A\u043E\u0434 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u0432 \u0442\u0435\u043C\u0435 \u043D\u0443\u0436\u0435\u043D, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u0432\u0435\u0442 \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043B\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438"
  }, /*#__PURE__*/React.createElement(IN2, {
    defaultValue: "\u0417\u0430\u043F\u0440\u043E\u0441 \u041A\u041F [RFQ-{\u043D\u043E\u043C\u0435\u0440}] \u2014 {\u043F\u0440\u043E\u0435\u043A\u0442}"
  })), /*#__PURE__*/React.createElement(FD2, {
    label: "\u0422\u0435\u043A\u0441\u0442 \u043F\u0438\u0441\u044C\u043C\u0430"
  }, /*#__PURE__*/React.createElement(TA2, {
    rows: 7,
    defaultValue: 'Добрый день!\n\nПросим предоставить коммерческое предложение по вложенной спецификации ({позиций} позиций).\n\nПросим указать по каждой позиции: цену за единицу, срок поставки в рабочих днях, срок действия предложения.\n\nОтвет ждём до {срок}.\n\nС уважением,\n{отправитель}'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(B2, {
    variant: "primary",
    onClick: () => toast('Шаблон сохранён', 'Будет использован во всех новых запросах.')
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D"), /*#__PURE__*/React.createElement(B2, {
    onClick: () => toast('Тестовое письмо отправлено', 'Проверьте ящик tender@amt-systems.ru.')
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0435"))));
}
Object.assign(window, {
  LinksScreen,
  MfrScreen,
  PricesScreen,
  SettingsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zakupki/ProductScreensB.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zakupki/RedesignScreens.jsx
try { (() => {
const NS = window.AMTSystemsDesignSystem_374943;
const {
  Icon,
  Button,
  IconButton
} = NS;
const SPECS = [{
  id: 1,
  name: 'ПС 110-10 кВ Северная — спецификация №4.xlsx',
  date: '11.03.2026 14:22',
  st: 'READY',
  m: 128,
  t: 128,
  sum: 4812300,
  oc: 128,
  cur: []
}, {
  id: 2,
  name: 'ЦОД Тула-2 — щитовое оборудование.xlsx',
  date: '05.03.2026 09:41',
  st: 'PROCESSING',
  m: 41,
  t: 64,
  sum: null,
  oc: 0,
  cur: []
}, {
  id: 3,
  name: 'Реконструкция КТП-4 п. Луговое.xlsx',
  date: '26.02.2026 16:08',
  st: 'READY',
  m: 198,
  t: 212,
  sum: 7640115,
  oc: 174,
  cur: ['USD'],
  mail: 3
}, {
  id: 4,
  name: 'Склад Восточный — освещение.xlsx',
  date: '19.02.2026 11:30',
  st: 'APPROVED',
  m: 41,
  t: 41,
  sum: 918470,
  oc: 41,
  cur: []
}, {
  id: 5,
  name: 'Тепличный комплекс Заря, 2 очередь.xlsx',
  date: '12.02.2026 08:55',
  st: 'EXPORTED',
  m: 96,
  t: 96,
  sum: 3402880,
  oc: 96,
  cur: ['CNY']
}];
const ST = {
  DRAFT: ['Черновик', 'var(--gray-400)', 'var(--text-muted)', 'var(--gray-100)'],
  PROCESSING: ['Обработка', 'var(--steel-500)', 'var(--steel-700)', 'var(--steel-50)'],
  READY: ['Готово', 'var(--steel-500)', 'var(--steel-700)', 'var(--steel-50)'],
  APPROVED: ['Утверждено', 'var(--green-500)', 'var(--green-600)', 'var(--green-50)'],
  EXPORTED: ['Экспортировано', 'var(--green-500)', 'var(--green-600)', 'var(--green-50)']
};
const nf = n => n == null ? '—' : n.toLocaleString('ru-RU', {
  maximumFractionDigits: 0
});
function Pill({
  st
}) {
  const [label, dot, fg, bg] = ST[st];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 20,
      padding: '0 8px 0 6px',
      borderRadius: 999,
      background: bg,
      color: fg,
      font: 'var(--weight-medium) var(--text-xs)/1 var(--font-core)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: dot,
      flex: '0 0 auto'
    }
  }), label);
}

/* Рейка — 1:1 с Layout.tsx из патча */
function Rail() {
  const items = [{
    section: 'Работа'
  }, {
    id: 'specs',
    label: 'Спецификации',
    icon: 'file-text',
    active: true
  }, {
    id: 'kp',
    label: 'База КП',
    icon: 'database'
  }, {
    id: 'mail',
    label: 'Не распознанные письма',
    icon: 'mail-question',
    badge: 4
  }, {
    section: 'Справочники'
  }, {
    id: 'sup',
    label: 'Поставщики',
    icon: 'truck'
  }, {
    id: 'link',
    label: 'Связки',
    icon: 'bookmark-check'
  }, {
    id: 'mfr',
    label: 'Производители → поставщики',
    icon: 'factory'
  }, {
    id: 'price',
    label: 'Прайс-листы',
    icon: 'list'
  }, {
    section: 'Система'
  }, {
    id: 'set',
    label: 'Настройки',
    icon: 'coins'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 232,
      flex: '0 0 auto',
      background: 'var(--surface-sidebar)',
      color: 'var(--gray-100)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 48,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 15px/1 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: '#fff'
    }
  }, "AMT"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1 var(--font-sans)',
      color: 'var(--gray-400)'
    }
  }, "\u0418\u0410\u0421 \xAB\u0417\u0430\u043A\u0443\u043F\u043A\u0438\xBB")), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      padding: '0 8px 8px',
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, items.map(it => it.section ? /*#__PURE__*/React.createElement("div", {
    key: it.section,
    style: {
      font: 'var(--type-overline)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--gray-400)',
      padding: '14px 8px 6px'
    }
  }, it.section) : /*#__PURE__*/React.createElement("span", {
    key: it.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 32,
      padding: '0 8px',
      borderRadius: 'var(--radius-md)',
      font: 'var(--weight-medium) var(--text-sm)/1 var(--font-core)',
      background: it.active ? 'var(--steel-600)' : 'transparent',
      color: it.active ? '#fff' : 'var(--gray-300)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, it.label), it.badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-numeric)',
      fontSize: 11,
      color: 'var(--ocher-200)'
    }
  }, it.badge) : null))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgb(255 255 255 / .10)',
      padding: '12px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 8px 4px',
      font: 'var(--type-caption)',
      color: 'var(--gray-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "server",
    size: 14
  }), "\u0421\u0435\u0440\u0432\u0435\u0440 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 8px',
      font: 'var(--type-body-sm)',
      color: 'var(--gray-300)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-user",
    size: 16
  }), "\u041A\u043E\u0432\u0430\u043B\u0451\u0432 \u0418. \u0421.")));
}

/* Счётчики — 1:1 с Summary.tsx из патча */
function SummaryRow() {
  const items = [['Всего позиций', 212, 'var(--text-primary)'], ['Сопоставлено', 198, 'var(--text-success)'], ['Не сопоставлено', 14, 'var(--text-attention)'], ['Заголовки', 9, 'var(--text-primary)'], ['Сборные', 6, 'var(--text-primary)']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '8px 24px',
      border: 'var(--border-card)',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding: '12px 16px'
    }
  }, items.map(([l, v, c], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: l
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 16,
      background: 'var(--border-hairline)'
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, l, ": ", /*#__PURE__*/React.createElement("b", {
    style: {
      font: 'var(--type-numeric-strong)',
      color: c
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 128,
      height: 6,
      borderRadius: 999,
      background: 'var(--gray-100)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '93%',
      height: '100%',
      borderRadius: 999,
      background: 'var(--green-500)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-numeric)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "93%")));
}

/* Реестр — 1:1 с SpecificationsList.tsx из патча */
function SpecList() {
  const th = {
    height: 36,
    padding: '0 12px',
    background: 'var(--table-header-bg)',
    borderBottom: '1px solid var(--border-default)',
    font: 'var(--weight-semibold) var(--text-xs)/1.2 var(--font-core)',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    color: 'var(--text-secondary)',
    whiteSpace: 'nowrap'
  };
  const td = {
    height: 42,
    padding: '0 12px',
    borderBottom: 'var(--border-cell)',
    font: 'var(--type-body-sm)'
  };
  const mono = {
    fontFamily: 'var(--font-mono)',
    fontVariantNumeric: 'tabular-nums'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      minWidth: 960,
      borderCollapse: 'separate',
      borderSpacing: 0,
      tableLayout: 'fixed'
    }
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    style: {
      width: '34%'
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 150
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 150
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 140
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 160
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 100
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 52
    }
  })), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'left'
    }
  }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'left'
    }
  }, "\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u0430"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'left'
    }
  }, "\u0421\u0442\u0430\u0442\u0443\u0441"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'right'
    }
  }, "\u0421\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'right'
    }
  }, "\u0418\u0442\u043E\u0433\u043E, \u043C\u0438\u043D. \u0446\u0435\u043D\u044B"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'right'
    }
  }, "\u041E\u0442\u0432\u0435\u0442\u044B"), /*#__PURE__*/React.createElement("th", {
    style: th
  }))), /*#__PURE__*/React.createElement("tbody", null, SPECS.map((s, i) => {
    const bg = i % 2 ? 'var(--table-row-alt)' : 'var(--surface-card)';
    const pct = Math.round(s.m / s.t * 100);
    return /*#__PURE__*/React.createElement("tr", {
      key: s.id,
      style: {
        background: bg
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        fontWeight: 500,
        color: 'var(--text-primary)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: 0
      },
      title: s.name
    }, s.name), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        ...mono,
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, s.date), /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement(Pill, {
      st: s.st
    })), /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 48,
        height: 4,
        borderRadius: 999,
        background: 'var(--gray-100)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct + '%',
        height: '100%',
        borderRadius: 999,
        background: pct === 100 ? 'var(--green-500)' : 'var(--steel-500)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, s.m, "/", s.t))), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        textAlign: 'right'
      }
    }, s.sum ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontWeight: 600,
        color: 'var(--green-600)'
      }
    }, nf(s.sum), " \u20BD"), /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-muted)'
      }
    }, s.oc, " \u0438\u0437 ", s.t, " \u043F\u043E\u0437\u0438\u0446\u0438\u0439", s.cur.length ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-attention)',
        marginLeft: 6
      }
    }, s.cur.join(', ')) : null)) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, "\u2014")), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        textAlign: 'right'
      }
    }, s.mail ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        padding: '2px 6px',
        borderRadius: 'var(--radius-sm)',
        background: 'var(--ocher-50)',
        color: 'var(--ocher-500)',
        font: 'var(--weight-medium) var(--text-xs)/1 var(--font-core)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 12
    }), /*#__PURE__*/React.createElement("span", {
      style: mono
    }, s.mail)) : null), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "trash-2",
      label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E",
      size: "sm"
    })));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 12px',
      borderTop: 'var(--border-thin)',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "1\u20135 \u0438\u0437 12"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    label: "\u041D\u0430\u0437\u0430\u0434",
    variant: "outline",
    size: "sm",
    disabled: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 13,
      minWidth: 54,
      textAlign: 'center'
    }
  }, "1 / 3"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-right",
    label: "\u0412\u043F\u0435\u0440\u0451\u0434",
    variant: "outline",
    size: "sm"
  }))));
}
function RedesignApp() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 640,
      background: 'var(--surface-canvas)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Rail, null), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-h2)',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--text-primary)'
    }
  }, "\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E \u2014 \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0435\u0442 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0438 \u043F\u043E\u0434\u0431\u0435\u0440\u0451\u0442 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u043E\u0432.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: "file-input"
  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E")), /*#__PURE__*/React.createElement(SummaryRow, null), /*#__PURE__*/React.createElement(SpecList, null)));
}
Object.assign(window, {
  RedesignApp,
  Rail,
  SummaryRow,
  SpecList,
  RedesignPill: Pill
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zakupki/RedesignScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zakupki/RfqList.jsx
try { (() => {
const {
  Card,
  DataTable,
  StatusPill,
  Button,
  Toolbar,
  Input,
  Pagination,
  Dialog,
  Checkbox,
  Field,
  Input: In,
  Textarea,
  Select,
  Banner
} = window.AMTSystemsDesignSystem_374943;
function RfqList({
  onSend
}) {
  return /*#__PURE__*/React.createElement(Card, {
    flush: true,
    title: "\u0417\u0430\u043F\u0440\u043E\u0441\u044B \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430\u043C",
    subtitle: "3 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \xB7 1 \u043F\u0440\u043E\u0441\u0440\u043E\u0447\u0435\u043D",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      iconLeft: "send",
      onClick: onSend
    }, "\u041D\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441"),
    footer: /*#__PURE__*/React.createElement(Pagination, {
      page: 1,
      pageCount: 2,
      pageSize: 25,
      total: 34
    })
  }, /*#__PURE__*/React.createElement(DataTable, {
    rowKey: r => r.id,
    rows: window.RFQ,
    columns: [{
      key: 'num',
      header: 'Запрос',
      width: 110,
      numeric: true
    }, {
      key: 'spec',
      header: 'Спецификация',
      width: '26%',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500,
          color: 'var(--text-primary)'
        }
      }, r.spec)
    }, {
      key: 'sup',
      header: 'Поставщиков',
      width: 118,
      numeric: true,
      align: 'right'
    }, {
      key: 'got',
      header: 'Ответов',
      width: 96,
      numeric: true,
      align: 'right'
    }, {
      key: 'sent',
      header: 'Отправлен',
      width: 112,
      numeric: true
    }, {
      key: 'due',
      header: 'Срок ответа',
      width: 118,
      numeric: true
    }, {
      key: 'st',
      header: 'Статус',
      width: 150,
      render: r => /*#__PURE__*/React.createElement(StatusPill, {
        status: r.st
      })
    }]
  }));
}
function RfqDialog({
  open,
  onClose,
  onDone
}) {
  const {
    Dialog,
    Button,
    Field,
    Input,
    Textarea,
    Select,
    Checkbox,
    Banner
  } = window.AMTSystemsDesignSystem_374943;
  const [picked, setPicked] = React.useState(['s1', 's2', 's3', 's4']);
  const toggle = id => setPicked(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(Dialog, {
    title: 'Отправить запрос ' + picked.length + ' поставщикам?',
    width: 560,
    onClose: onClose,
    description: "\u041F\u0438\u0441\u044C\u043C\u0430 \u0443\u0439\u0434\u0443\u0442 \u0441 \u044F\u0449\u0438\u043A\u0430 tender@amt-systems.ru. \u041E\u0442\u0432\u0435\u0442\u044B \u0440\u0430\u0437\u0431\u0435\u0440\u0443\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0438 \u043B\u044F\u0433\u0443\u0442 \u0432 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: onClose
    }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconLeft: "send",
      onClick: onDone
    }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "info"
  }, "\u0412 \u0437\u0430\u043F\u0440\u043E\u0441 \u043F\u043E\u043F\u0430\u0434\u0443\u0442 128 \u043F\u043E\u0437\u0438\u0446\u0438\u0439 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u21164, \u0432\u043A\u043B\u044E\u0447\u0430\u044F 2 \u0431\u0435\u0437 \u0446\u0435\u043D\u044B."), /*#__PURE__*/React.createElement(Field, {
    label: "\u0421\u0440\u043E\u043A \u043E\u0442\u0432\u0435\u0442\u0430",
    hint: "\u0420\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439 \u0441 \u0434\u0430\u0442\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438"
  }, /*#__PURE__*/React.createElement(Input, {
    numeric: true,
    align: "right",
    suffix: "\u0434\u043D.",
    defaultValue: "5",
    style: {
      width: 140
    }
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u0428\u0430\u0431\u043B\u043E\u043D \u043F\u0438\u0441\u044C\u043C\u0430"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 \u041A\u041F",
    options: [{
      value: 'std',
      label: 'Стандартный запрос КП'
    }, {
      value: 'urgent',
      label: 'Срочный запрос'
    }]
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-secondary)',
      marginBottom: 8
    }
  }, "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8,
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-lg)',
      padding: 10,
      maxHeight: 150,
      overflow: 'auto'
    }
  }, window.SUPPLIERS.map(s => /*#__PURE__*/React.createElement(Checkbox, {
    key: s.id,
    checked: picked.includes(s.id),
    onChange: () => toggle(s.id),
    label: s.full + ' · ' + s.city
  })))), /*#__PURE__*/React.createElement(Field, {
    label: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0443"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 2,
    placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u043F\u0440\u043E\u0441\u0438\u043C \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0440\u043E\u043A\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043F\u043E \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u0437\u0438\u0446\u0438\u0438"
  }))));
}
Object.assign(window, {
  RfqList,
  RfqDialog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zakupki/RfqList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zakupki/SpecLines.jsx
try { (() => {
const {
  Card,
  DataTable,
  StatusPill,
  Button,
  Input,
  Select,
  Toolbar,
  Tag,
  Tabs,
  Pagination,
  Banner,
  IconButton,
  PriceDelta,
  Dialog,
  Checkbox,
  Field,
  Textarea,
  Tooltip,
  Icon,
  EmptyState
} = window.AMTSystemsDesignSystem_374943;
function SpecLines({
  tab,
  onTab,
  onSend
}) {
  const [sel, setSel] = React.useState([2, 5]);
  const [showNet, setShowNet] = React.useState(true);
  const lines = window.LINES;
  const m = window.money;
  const rows = lines.map(l => ({
    ...l,
    sum: l.qty * l.price,
    delta: l.base ? (l.price - l.base) / l.base * 100 : 0
  }));
  const total = rows.reduce((a, r) => a + r.sum, 0);
  if (tab === 'sup') return /*#__PURE__*/React.createElement(SupplierTab, null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "attention",
    title: "2 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0431\u0435\u0437 \u0446\u0435\u043D\u044B",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C")
  }, "\u0418\u0442\u043E\u0433 \u043F\u043E \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u043F\u043E\u0441\u0447\u0438\u0442\u0430\u043D \u0431\u0435\u0437 \u043D\u0438\u0445 \u2014 \xAB\u041A\u0430\u0431\u0435\u043B\u044C \u0410\u0412\u0411\u0431\u0428\u0432 4\u044516\xBB \u0438 \xAB\u041F\u0440\u043E\u0432\u043E\u0434 \u0421\u0418\u041F-4 4\u044516\xBB."), /*#__PURE__*/React.createElement(Card, {
    flush: true,
    footer: /*#__PURE__*/React.createElement(Pagination, {
      page: 1,
      pageCount: 11,
      pageSize: 12,
      total: 128
    })
  }, /*#__PURE__*/React.createElement(Toolbar, {
    dense: true,
    sunken: true,
    left: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
      iconLeft: "search",
      placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E\u0437\u0438\u0446\u0438\u0438",
      style: {
        width: 240
      }
    }), /*#__PURE__*/React.createElement(Select, {
      size: "sm",
      placeholder: "\u0412\u0441\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438",
      options: window.SUPPLIERS.map(s => ({
        value: s.id,
        label: s.name
      })),
      style: {
        width: 160
      }
    }), /*#__PURE__*/React.createElement(Tag, {
      tone: "accent",
      onRemove: () => {}
    }, "\u0411\u0435\u0437 \u0446\u0435\u043D\u044B"), sel.length ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-accent)',
        marginLeft: 4
      }
    }, "\u0412\u044B\u0431\u0440\u0430\u043D\u043E: ", sel.length) : null),
    right: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tooltip, {
      label: "\u041F\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0443\u043C\u043C\u044B \u043F\u043E \u0442\u0435\u043A\u0443\u0449\u0438\u043C \u0446\u0435\u043D\u0430\u043C"
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "calculator"
    }, "\u041F\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u0430\u0442\u044C")), /*#__PURE__*/React.createElement(IconButton, {
      icon: "columns-3",
      label: "\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0446\u044B"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "pin",
      label: "\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",
      active: true
    }), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "download"
    }, "Excel"))
  }), /*#__PURE__*/React.createElement(DataTable, {
    density: "compact",
    selectable: true,
    selected: sel,
    onSelect: setSel,
    rowKey: r => r.id,
    totals: {
      name: 'Итого по странице',
      sum: m(total),
      qty: ''
    },
    columns: [{
      key: 'id',
      header: '№',
      width: 42,
      numeric: true,
      align: 'right',
      muted: true
    }, {
      key: 'art',
      header: 'Артикул',
      width: 92,
      numeric: true
    }, {
      key: 'name',
      header: 'Наименование',
      width: '26%'
    }, {
      key: 'unit',
      header: 'Ед.',
      width: 48,
      muted: true
    }, {
      key: 'qty',
      header: 'Кол-во',
      width: 78,
      numeric: true,
      align: 'right',
      render: r => m(r.qty, 0)
    }, {
      key: 'price',
      header: 'Цена, ₽',
      width: 100,
      numeric: true,
      align: 'right',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          background: r.edited ? 'var(--ocher-100)' : undefined,
          padding: r.edited ? '1px 3px' : 0,
          borderRadius: 2
        }
      }, m(r.price))
    }, {
      key: 'sum',
      header: 'Сумма, ₽',
      width: 118,
      numeric: true,
      align: 'right',
      emphasis: 'formula',
      sortable: true,
      render: r => m(r.sum)
    }, {
      key: 'delta',
      header: 'Δ к базе',
      width: 84,
      align: 'right',
      render: r => /*#__PURE__*/React.createElement(PriceDelta, {
        value: Math.round(r.delta * 10) / 10
      })
    }, {
      key: 'sup',
      header: 'Поставщик',
      width: 108,
      muted: true
    }, {
      key: 'st',
      header: 'Статус',
      width: 138,
      render: r => /*#__PURE__*/React.createElement(StatusPill, {
        status: r.st
      })
    }],
    rows: rows,
    sort: {
      key: 'sum',
      dir: 'desc'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u0426\u0435\u043D\u044B \u2014 \u0431\u0435\u0437 \u041D\u0414\u0421. \u041A\u0443\u0440\u0441 \u0426\u0411 \u043D\u0430 12.03.2026: USD 82,40 \xB7 CNY 11,36."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: 'var(--table-cell-formula)',
      border: '1px solid var(--steel-100)'
    }
  }), " \u043F\u043E\u0441\u0447\u0438\u0442\u0430\u043D\u043E \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: 'var(--ocher-100)',
      border: '1px solid var(--ocher-200)'
    }
  }), " \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u043E \u0432\u0440\u0443\u0447\u043D\u0443\u044E"))));
}
function SupplierTab() {
  const {
    Card,
    DataTable,
    StatusPill,
    Button,
    Badge
  } = window.AMTSystemsDesignSystem_374943;
  return /*#__PURE__*/React.createElement(Card, {
    flush: true,
    title: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438 \u0432 \u0437\u0430\u043F\u0440\u043E\u0441\u0435",
    subtitle: "RFQ-14 \xB7 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D 11.03.2026 \xB7 \u0441\u0440\u043E\u043A \u043E\u0442\u0432\u0435\u0442\u0430 18.03.2026",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "rotate-ccw"
    }, "\u041D\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      iconLeft: "send"
    }, "\u0414\u043E\u0437\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C"))
  }, /*#__PURE__*/React.createElement(DataTable, {
    rowKey: r => r.id,
    rows: window.SUPPLIERS.map((s, i) => ({
      ...s,
      st: ['received', 'received', 'received', 'received', 'waiting', 'overdue'][i],
      got: [128, 121, 96, 74, 0, 0][i]
    })),
    columns: [{
      key: 'full',
      header: 'Поставщик',
      width: '26%',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500,
          color: 'var(--text-primary)'
        }
      }, r.full)
    }, {
      key: 'city',
      header: 'Город',
      width: 140,
      muted: true
    }, {
      key: 'inn',
      header: 'ИНН',
      width: 110,
      numeric: true,
      muted: true
    }, {
      key: 'rating',
      header: 'Рейтинг',
      width: 84,
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.rating === 'A' ? 'success' : r.rating === 'B' ? 'neutral' : 'attention'
      }, r.rating)
    }, {
      key: 'got',
      header: 'Позиций в КП',
      width: 116,
      numeric: true,
      align: 'right'
    }, {
      key: 'delay',
      header: 'Ср. задержка',
      width: 112,
      numeric: true,
      align: 'right',
      render: r => r.delay ? r.delay + ' дн.' : '—'
    }, {
      key: 'st',
      header: 'Статус',
      width: 150,
      render: r => /*#__PURE__*/React.createElement(StatusPill, {
        status: r.st
      })
    }]
  }));
}
Object.assign(window, {
  SpecLines
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zakupki/SpecLines.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zakupki/SpecList.jsx
try { (() => {
const {
  Card,
  DataTable,
  StatusPill,
  Button,
  Input,
  Select,
  Toolbar,
  Tag,
  Pagination,
  Badge
} = window.AMTSystemsDesignSystem_374943;
function SpecList({
  onOpen
}) {
  const [q, setQ] = React.useState('');
  const rows = window.SPECS.filter(s => (s.project + s.num).toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    flush: true,
    title: "\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438",
    subtitle: "12 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435 \xB7 3 \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044F",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "file-input"
    }, "\u0418\u043C\u043F\u043E\u0440\u0442 \u0438\u0437 Excel"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      iconLeft: "plus"
    }, "\u041D\u043E\u0432\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F")),
    footer: /*#__PURE__*/React.createElement(Pagination, {
      page: 1,
      pageCount: 3,
      pageSize: 25,
      total: 12
    })
  }, /*#__PURE__*/React.createElement(Toolbar, {
    dense: true,
    sunken: true,
    left: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
      iconLeft: "search",
      placeholder: "\u041F\u0440\u043E\u0435\u043A\u0442 \u0438\u043B\u0438 \u043D\u043E\u043C\u0435\u0440",
      value: q,
      onChange: e => setQ(e.target.value),
      style: {
        width: 260
      }
    }), /*#__PURE__*/React.createElement(Select, {
      size: "sm",
      placeholder: "\u0412\u0441\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u044B",
      options: [{
        value: 'w',
        label: 'Ждём КП'
      }, {
        value: 'o',
        label: 'Просрочено'
      }],
      style: {
        width: 150
      }
    }), /*#__PURE__*/React.createElement(Tag, {
      tone: "accent",
      onRemove: () => {}
    }, "\u041C\u043E\u0438")),
    right: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconLeft: "download"
    }, "\u0412\u044B\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0440\u0435\u0435\u0441\u0442\u0440")
  }), /*#__PURE__*/React.createElement(DataTable, {
    rows: rows,
    onRowClick: onOpen,
    rowKey: r => r.id,
    columns: [{
      key: 'num',
      header: '№',
      width: 82,
      numeric: true
    }, {
      key: 'project',
      header: 'Проект',
      width: '34%',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500,
          color: 'var(--text-primary)'
        }
      }, r.project)
    }, {
      key: 'lines',
      header: 'Позиций',
      width: 84,
      numeric: true,
      align: 'right'
    }, {
      key: 'sup',
      header: 'Поставщиков',
      width: 108,
      numeric: true,
      align: 'right'
    }, {
      key: 'sum',
      header: 'Сумма, ₽',
      width: 130,
      numeric: true,
      align: 'right',
      sortable: true
    }, {
      key: 'due',
      header: 'Срок КП',
      width: 100,
      numeric: true
    }, {
      key: 'owner',
      header: 'Ответственный',
      width: 130,
      muted: true
    }, {
      key: 'st',
      header: 'Статус',
      width: 150,
      render: r => /*#__PURE__*/React.createElement(StatusPill, {
        status: r.st
      })
    }],
    sort: {
      key: 'sum',
      dir: 'desc'
    },
    totals: {
      project: 'Итого по реестру',
      sum: '18 882 705,00',
      lines: 541
    }
  })));
}
Object.assign(window, {
  SpecList
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zakupki/SpecList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zakupki/Suppliers.jsx
try { (() => {
const {
  Card,
  DataTable,
  Badge,
  Button,
  Input,
  Toolbar,
  Select,
  Pagination,
  EmptyState,
  StatusPill
} = window.AMTSystemsDesignSystem_374943;
function Suppliers() {
  const [q, setQ] = React.useState('');
  const rows = window.SUPPLIERS.filter(s => (s.full + s.city + s.inn).toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement(Card, {
    flush: true,
    title: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438",
    subtitle: "214 \u0432 \u0431\u0430\u0437\u0435 \xB7 38 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0437\u0430 \u043A\u0432\u0430\u0440\u0442\u0430\u043B",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "file-input"
    }, "\u0418\u043C\u043F\u043E\u0440\u0442"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      iconLeft: "plus"
    }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430")),
    footer: /*#__PURE__*/React.createElement(Pagination, {
      page: 1,
      pageCount: 9,
      pageSize: 25,
      total: 214
    })
  }, /*#__PURE__*/React.createElement(Toolbar, {
    dense: true,
    sunken: true,
    left: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
      iconLeft: "search",
      placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435, \u0418\u041D\u041D \u0438\u043B\u0438 \u0433\u043E\u0440\u043E\u0434",
      value: q,
      onChange: e => setQ(e.target.value),
      style: {
        width: 280
      }
    }), /*#__PURE__*/React.createElement(Select, {
      size: "sm",
      placeholder: "\u0412\u0441\u0435 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0438",
      options: [{
        value: 'a',
        label: 'A'
      }, {
        value: 'b',
        label: 'B'
      }, {
        value: 'c',
        label: 'C'
      }],
      style: {
        width: 140
      }
    })),
    right: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconLeft: "download"
    }, "\u0412\u044B\u0433\u0440\u0443\u0437\u0438\u0442\u044C")
  }), rows.length ? /*#__PURE__*/React.createElement(DataTable, {
    rowKey: r => r.id,
    rows: rows,
    columns: [{
      key: 'full',
      header: 'Поставщик',
      width: '28%',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500,
          color: 'var(--text-primary)'
        }
      }, r.full)
    }, {
      key: 'city',
      header: 'Город',
      width: 150,
      muted: true
    }, {
      key: 'inn',
      header: 'ИНН',
      width: 120,
      numeric: true,
      muted: true
    }, {
      key: 'rating',
      header: 'Рейтинг',
      width: 90,
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.rating === 'A' ? 'success' : r.rating === 'B' ? 'neutral' : 'attention'
      }, r.rating)
    }, {
      key: 'quotes',
      header: 'КП за год',
      width: 100,
      numeric: true,
      align: 'right'
    }, {
      key: 'delay',
      header: 'Ср. задержка',
      width: 120,
      numeric: true,
      align: 'right',
      render: r => r.delay ? r.delay + ' дн.' : '0 дн.'
    }, {
      key: 'x',
      header: 'Контакт',
      width: 200,
      muted: true,
      render: r => 'tender@' + r.name.toLowerCase().replace(/[^a-zа-я]/gi, '') + '.ru'
    }]
  }) : /*#__PURE__*/React.createElement(EmptyState, {
    icon: "building-2",
    title: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D",
    description: "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0418\u041D\u041D \u0438\u043B\u0438 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430 \u0432 \u0431\u0430\u0437\u0443.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      iconLeft: "plus"
    }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430")
  }));
}
Object.assign(window, {
  Suppliers
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zakupki/Suppliers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zakupki/data.js
try { (() => {
const SUPPLIERS = [{
  id: 's1',
  name: 'ЭТМ',
  full: 'ООО «ЭТМ»',
  city: 'Москва',
  inn: '7728123456',
  rating: 'A',
  quotes: 42,
  delay: 0
}, {
  id: 's2',
  name: 'Русэлт',
  full: 'АО «Русэлт»',
  city: 'Санкт-Петербург',
  inn: '7811234567',
  rating: 'A',
  quotes: 31,
  delay: 1
}, {
  id: 's3',
  name: 'АСК',
  full: 'ООО «АСК-Электро»',
  city: 'Екатеринбург',
  inn: '6658345678',
  rating: 'B',
  quotes: 27,
  delay: 3
}, {
  id: 's4',
  name: 'ЭК-Восток',
  full: 'ООО «ЭК-Восток»',
  city: 'Новосибирск',
  inn: '5405456789',
  rating: 'B',
  quotes: 18,
  delay: 2
}, {
  id: 's5',
  name: 'Кабель-М',
  full: 'ООО «Кабель-М»',
  city: 'Москва',
  inn: '7726567890',
  rating: 'C',
  quotes: 12,
  delay: 6
}, {
  id: 's6',
  name: 'ЮгЭлектро',
  full: 'ООО «ЮгЭлектро»',
  city: 'Ростов-на-Дону',
  inn: '6165678901',
  rating: 'B',
  quotes: 9,
  delay: 4
}];
const SPECS = [{
  id: 'sp4',
  num: '№4',
  project: 'ПС 110/10 кВ «Северная»',
  lines: 128,
  sup: 6,
  sum: '4 812 300,00',
  st: 'received',
  due: '18.03.2026',
  owner: 'И. Ковалёв'
}, {
  id: 'sp3',
  num: '№3',
  project: 'ЦОД «Тула-2», щитовое оборудование',
  lines: 64,
  sup: 4,
  sum: '2 108 940,00',
  st: 'waiting',
  due: '12.03.2026',
  owner: 'И. Ковалёв'
}, {
  id: 'sp2',
  num: '№2',
  project: 'Реконструкция КТП-4, п. Луговое',
  lines: 212,
  sup: 5,
  sum: '7 640 115,00',
  st: 'overdue',
  due: '04.03.2026',
  owner: 'М. Ерёмина'
}, {
  id: 'sp1',
  num: '№1',
  project: 'Склад «Восточный» — освещение',
  lines: 41,
  sup: 3,
  sum: '918 470,00',
  st: 'approved',
  due: '26.02.2026',
  owner: 'М. Ерёмина'
}, {
  id: 'sp0',
  num: '№12/25',
  project: 'Тепличный комплекс «Заря», 2 очередь',
  lines: 96,
  sup: 6,
  sum: '3 402 880,00',
  st: 'won',
  due: '19.02.2026',
  owner: 'И. Ковалёв'
}];
const LINES = [{
  id: 1,
  art: 'ВВГ-5х6',
  name: 'Кабель ВВГнг(А)-LS 5х6',
  unit: 'м',
  qty: 1200,
  price: 284.5,
  base: 284.5,
  st: 'approved',
  sup: 'ЭТМ'
}, {
  id: 2,
  art: 'ГОФ-25',
  name: 'Труба гофрированная ПНД 25 мм, с зондом',
  unit: 'м',
  qty: 3400,
  price: 31.2,
  base: 30.8,
  st: 'received',
  sup: 'Русэлт',
  edited: true
}, {
  id: 3,
  art: 'АВБ-4х16',
  name: 'Кабель АВБбШв 4х16',
  unit: 'м',
  qty: 860,
  price: 412,
  base: 412,
  st: 'waiting',
  sup: '—'
}, {
  id: 4,
  art: 'ЩРН-36',
  name: 'Щит распределительный ЩРН-36 IP31',
  unit: 'шт',
  qty: 14,
  price: 6480,
  base: 5798,
  st: 'overdue',
  sup: 'АСК'
}, {
  id: 5,
  art: 'ВА47-63',
  name: 'Автоматический выключатель ВА47-63 3P 25А C',
  unit: 'шт',
  qty: 210,
  price: 412.9,
  base: 430,
  st: 'approved',
  sup: 'ЭТМ'
}, {
  id: 6,
  art: 'УЗО-63',
  name: 'УЗО 2P 63А 30мА тип AC',
  unit: 'шт',
  qty: 48,
  price: 1980,
  base: 1980,
  st: 'received',
  sup: 'Русэлт'
}, {
  id: 7,
  art: 'ЛОТ-200',
  name: 'Лоток лестничный 200х80, L=3000',
  unit: 'шт',
  qty: 320,
  price: 1145,
  base: 1102,
  st: 'received',
  sup: 'ЭК-Восток'
}, {
  id: 8,
  art: 'СИП-4х16',
  name: 'Провод СИП-4 4х16',
  unit: 'м',
  qty: 2100,
  price: 96.4,
  base: 96.4,
  st: 'waiting',
  sup: '—'
}, {
  id: 9,
  art: 'КРУ-10',
  name: 'Ячейка КРУ 10 кВ с вакуумным выключателем',
  unit: 'шт',
  qty: 6,
  price: 412000,
  base: 398000,
  st: 'received',
  sup: 'АСК'
}, {
  id: 10,
  art: 'ТСЛ-630',
  name: 'Трансформатор сухой ТСЛ-630/10/0,4',
  unit: 'шт',
  qty: 2,
  price: 1284000,
  base: 1284000,
  st: 'approved',
  sup: 'ЭТМ'
}, {
  id: 11,
  art: 'ЗАЗ-16',
  name: 'Зажим анкерный ЗАБ 16-25',
  unit: 'шт',
  qty: 180,
  price: 214.3,
  base: 208,
  st: 'received',
  sup: 'ЮгЭлектро',
  edited: true
}, {
  id: 12,
  art: 'СВЕТ-36',
  name: 'Светильник LED 36 Вт IP65, 4000K',
  unit: 'шт',
  qty: 96,
  price: 2340,
  base: 2415,
  st: 'received',
  sup: 'Кабель-М'
}];
const QUOTE_MATRIX = [{
  id: 1,
  art: 'ВВГ-5х6',
  name: 'Кабель ВВГнг(А)-LS 5х6',
  qty: 1200,
  base: 284.5,
  p: {
    s1: 284.5,
    s2: 291.0,
    s3: 302.4,
    s4: null,
    s5: 279.9,
    s6: 288.0
  }
}, {
  id: 2,
  art: 'ГОФ-25',
  name: 'Труба гофрированная ПНД 25 мм',
  qty: 3400,
  base: 30.8,
  p: {
    s1: 33.1,
    s2: 31.2,
    s3: 30.9,
    s4: 34.0,
    s5: null,
    s6: 32.4
  }
}, {
  id: 4,
  art: 'ЩРН-36',
  name: 'Щит распределительный ЩРН-36 IP31',
  qty: 14,
  base: 5798,
  p: {
    s1: 6120,
    s2: 6480,
    s3: 5798,
    s4: 6240,
    s5: null,
    s6: null
  }
}, {
  id: 5,
  art: 'ВА47-63',
  name: 'Автомат ВА47-63 3P 25А C',
  qty: 210,
  base: 412.9,
  p: {
    s1: 412.9,
    s2: 428.0,
    s3: 441.5,
    s4: 419.0,
    s5: 430.0,
    s6: 425.2
  }
}, {
  id: 7,
  art: 'ЛОТ-200',
  name: 'Лоток лестничный 200х80',
  qty: 320,
  base: 1102,
  p: {
    s1: 1180,
    s2: 1145,
    s3: 1102,
    s4: 1102,
    s5: 1210,
    s6: null
  }
}, {
  id: 9,
  art: 'КРУ-10',
  name: 'Ячейка КРУ 10 кВ',
  qty: 6,
  base: 398000,
  p: {
    s1: 412000,
    s2: 398000,
    s3: 421500,
    s4: null,
    s5: null,
    s6: null
  }
}, {
  id: 12,
  art: 'СВЕТ-36',
  name: 'Светильник LED 36 Вт IP65',
  qty: 96,
  base: 2340,
  p: {
    s1: 2340,
    s2: 2415,
    s3: 2380,
    s4: 2298,
    s5: 2415,
    s6: 2350
  }
}];
const money = (n, d = 2) => n == null ? '—' : n.toLocaleString('ru-RU', {
  minimumFractionDigits: d,
  maximumFractionDigits: d
});
const RFQ = [{
  id: 'r14',
  num: 'RFQ-14',
  spec: 'Спецификация №4',
  sup: 6,
  sent: '11.03.2026',
  due: '18.03.2026',
  got: 4,
  st: 'received'
}, {
  id: 'r13',
  num: 'RFQ-13',
  spec: 'Спецификация №3',
  sup: 4,
  sent: '05.03.2026',
  due: '12.03.2026',
  got: 1,
  st: 'waiting'
}, {
  id: 'r12',
  num: 'RFQ-12',
  spec: 'Спецификация №2',
  sup: 5,
  sent: '26.02.2026',
  due: '04.03.2026',
  got: 2,
  st: 'overdue'
}];
Object.assign(window, {
  SUPPLIERS,
  SPECS,
  LINES,
  QUOTE_MATRIX,
  RFQ,
  money
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zakupki/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.PriceDelta = __ds_scope.PriceDelta;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Toolbar = __ds_scope.Toolbar;

})();
