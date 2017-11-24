//    --
// --    --	One class to rule them all
// --    --  2014 Gida Technologies www.gida.in
//    -- Version 3
var activeX = function() {
    try { new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
        return true; } catch (e) {
        return false; }
};
_GLConfig = {
    hasFlash: (typeof navigator.plugins == "undefined" || navigator.plugins.length == 0) ? !!activeX() : navigator.plugins["Shockwave Flash"] ? true : false,
    gum: navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia,
    input_show_cancel: true,
    input_autohide_title: false,
    input_hint_autoshow: false,
    input_enter_setValue: true,
    open_dd_on_focus: true,
    size_dd_to_parent: true,
    submenu_left_gap: 3,
    dd_cancel: true,
    input_search_threshold: .65,
    input_allow_unlisted: false,
    input_on_tab_set_value: true,
    input_on_blur_set_value: false,
    input_maintain_css_style: true,
    input_spellcheck: false,
    input_autocapitalize: 'off',
    input_autocorrect: 'off',
    input_autocomplete: 'off',
    close_on_max_select: true,
    input_dd_search_time: 250,
    input_time_mins_interval: 5,
    hint_show_direction: true,
    hint_autohide_duration: 3500,
    hint_show_after: 500,
    hint_loc: 1,
    hint_off: 0,
    hint_gap: 5,
    hint_dirOffset: 50,
    hint_dirHeight: 8,
    hint_dirWidth: 16,
    hint_autohide: true,
    btngrp_title_use: true,
    input_programmatic_onSetValue: true,
    input_password_delay: 150,
    datepicker_bottom_offset: 5,
    datepicker_left_offset: 0,
    dropdown_bottom_offset: 1,
    dropdown_left_offset: 0,
    tbl_no_data_message: 'No data available',
    file_show_del: true,
    file_show_reorder: true,
    file_show_download: true,
    file_progressCon_message: 'Please wait while the files are uploaded',
    file_hint: 'Please select a file to upload',
    fv_tbl_noDataMessage: 'No files selected',
    fv_show_print_button: true,
    fv_show_download_button: true,
    fv_show_download_all_button: true,
    fv_show_select_button: false,
    use_file_viewer: true,
    file_auto_img_rotate: true,
    fv_pdf_print_scale: 1.8,
    file_show_info: true,
    switch_programmatic_onSetValue: true,
    switch_autohide_title: false
};
_GLValidators = {
    email: function(g) {
        if (!g) return false;
        var s = (g.v || g || ' ').replace(/&amp;/g, '&').trim();
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(s); },
    mobile: function(g) {
        var v = g.v || g || '';
        v = v.replace(/[\+,\-,\(,\),\s]+/gi, '');
        if (!isNumber(v)) return false;
        if (g.opts && (g.opts.minLen || g.opts.maxLen || g.opts.min || g.opts.max)) {
            if ((g.opts.minLen !== undefined && v.length < g.opts.minLen) || (g.opts.maxLen !== undefined && v.length > g.opts.maxLen)) {
                return false; }
            if ((g.opts.min !== undefined && v * 1 < g.opts.min) || (g.opts.max !== undefined && v * 1 > g.opts.max)) return false;
            return true;
        } else {
            if (v.length < 8 || v.length > 12) return false;
            return true; }
    },
    emailMobile: function(g) {
        var eFlag = _GLValidators.email(g),
            mFlag = _GLValidators.mobile(g);
        if (eFlag && mFlag) return false;
        return eFlag || mFlag;
    },
    string: function(g) {
        var v = g.v || g || '';
        if (!g.opts) return true;
        if (g.opts.min && v.length < g.opts.min) return false;
        if (g.opts.max && v.length > g.opts.max) return false;
        return true;
    },
    alphanumeric: function(g) {
        var v = g.v || g || '';
        if (!g.opts) return true;
        if (g.opts.min && v.length < g.opts.min) return false;
        if (g.opts.max && v.length > g.opts.max) return false;
        if (v.replace(/[a-z,0-9,\.,\_]+/gi, '').length) return false;
        if (v.search(/[a-z]/gi) < 0 || v.search(/[0-9]/gi) < 0) return false;
        return true;
    },
    number: function(g) {
        var v = g.v || v || 0;
        if (!isNumber(v)) return false;
        if (!g.opts) return true;
        if (g.opts.min && v < g.opts.min) return false;
        if (g.opts.max && v > g.opts.max) return false;
        return true;
    },
    date: function(g) {
        var v = g.v || v || 0;
        if (!v) return false;
        if (!v.isDate) return false;
        if (!g.opts) return true;
        if (g.opts.min && g.opts.min.getTime() > v) return false;
        if (g.opts.max && g.opts.max.getTime() < v) return false;
        return true;
    },
    password: function(g) {
        var v = g.v || v || 0;
        if (!v) return false;
        v = v.toString();
        if (g.opts.min && v.length < g.opts.min) return false;
        if (g.opts.max && v.length > g.opts.max) return false;
        if (g.opts.numbers) {
            var t = v.replace(/[^\d]/gi, '');
            if (t.length < g.opts.numbers) return false; }
        if (g.opts.chars) {
            var t = v.replace(/[^a-z]/gi, '');
            if (t.length < g.opts.chars) return false; }
        if (g.opts.special) {
            var t = v.replace(/[a-z,0-9,\s]/gi, '');
            if (t.length < g.opts.special) return false; }
        return true;
        if (g.opts.upper) {
            var t = v.replace(/[^A-Z]/g, '');
            if (t.length < g.opts.upper) return false; }
    },
    url: function(g) {
        var v = g.v || v || 0;
        if (!v) return false;
        v = v.toString();
        return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(v);
    },
    money: function(g) {
        var v = g.v || v || 0;
        if (v === undefined || v === null || !g.opts) return false;
        var rx = new RegExp(g.opts.type, 'gi');
        v = v.toString().replace(rx, '').replace(/\s|\,|lakh(s)*|crore(s)*|mn|bn/gi, '');
        if (!isNumber(v)) return false;
        if (g.opts.min && v < g.opts.min) return false;
        if (g.opts.max && v > g.opts.max) return false;
        return true;
    }
};
_GLValidatorsText = {
    email: function(g) {
        return 'Please enter a valid email address'; },
    mobile: function(g) {
        if (!g.opts || !g.opts.min || g.opts.max || !g.opts.minLen || !g.opts.maxLen) return 'Please enter a valid phone number';
        var v = g.v || g || '';
        v = v.toString().replace(/[\+,\-,\(,\),\s]+/gi, '');
        if (!isNumber(v)) return 'The phone number can only contains numbers - You can use + or - to optionally format the phone number';
        if (g.opts.minLen !== undefined && v.length < g.opts.minLen) return 'The phone number should have ' + (g.opts.minLen == g.opts.maxLen ? 'exactly ' + g.opts.minLen + ' digits' : 'minimum ' + g.opts.minLen + ' digits');
        if (g.opts.maxLen !== undefined && v.length < g.opts.maxLen) return 'The phone number should have ' + (g.opts.minLen == g.opts.maxLen ? 'exactly ' + g.opts.minLen + ' digits' : 'maximum ' + g.opts.maxLen + ' digits');
        return "Please enter a valid phone number";
    },
    emailMobile: function(g) {
        return 'Please enter a valid email address or phone number'; },
    string: function(g) {
        var v = g.v || g || '';
        if (!g.opts) return '';
        return 'Your input needs to have ' + (g.opts.min && v.length < g.opts.min ? 'atleast ' + g.opts.min + ' characters' : '') + (g.opts.max && v.length > g.opts.max ? ' less than ' + g.opts.max + ' characters' : '');
    },
    alphanumeric: function(g) {
        var v = g.v || g || '';
        if (!g.opts) return true;
        return 'Your input needs to have ' + (g.opts.min && v.length < g.opts.min ? 'atleast ' + g.opts.min + ' characters' : g.opts.max && v.length > g.opts.max ? ' less than ' + g.opts.max + ' characters' : v.search(/[a-z]/i) < 0 ? ' atleast one alphabet ' : v.search(/[0-9]/i) < 0 ? ' atleast one number' : '');
    },
    number: function(g) {
        var v = g.v || g || '';
        if (!g.opts) return '';
        return 'Your input needs to be a number ' + (g.opts.min && v.length < g.opts.min ? 'greater than or equal to ' + g.opts.min : g.opts.max && v.length > g.opts.max ? ' less than or equal to ' + g.opts.max : '');
    },
    date: function(g) {
        var v = g.v || v || 0;
        if (!v) return false;
        if (!v.isDate) return false;
        if (!g.opts) return true;
        return 'You need to input a date ' + (g.opts.min && g.opts.min.getTime() > v ? ' greater than ' + g.opts.min.format('d M Y') : g.opts.max && g.opts.max.getTime() < v ? ' less than ' + g.opts.max.format('d M Y') : '');
    },
    password: function(g) {
        var v = g.v || v || 0;
        if (!v) return false;
        v = v.toString();
        var s = [];
        if (g.opts.min && v.length < g.opts.min) s.push('be of atleast ' + g.opts.min + ' length');
        if (g.opts.max && v.length > g.opts.max) s.push('have maximum length of ' + g.opts.max);
        if (g.opts.chars) {
            var t = v.replace(/[^a-z]/gi, '');
            if (t.length < g.opts.chars) s.push('have atleast ' + g.opts.chars + ' letters'); }
        if (g.opts.numbers) {
            var t = v.replace(/[^\d]/gi, '');
            if (t.length < g.opts.numbers) s.push('have atleast ' + g.opts.numbers + ' numbers'); }
        if (g.opts.special) {
            var t = v.replace(/[a-z,0-9,\s]/gi, '');
            if (t.length < g.opts.special) s.push('have atleast ' + g.opts.special + ' special characters like @, #, or _'); }
        if (g.opts.upper) {
            var t = v.replace(/[^A-Z]/g, '');
            if (t.length < g.opts.upper) s.push('have atleast ' + g.opts.upper + ' upper case characters'); }
        s = 'The password needs to ' + s.join(' and ');
        return s;
    },
    url: function(g) {
        return 'Please enter a valid URL (internet link)'; },
    money: function(g) {
        return 'Please enter a valid amount in ' + g.opts.type + ' between ' + g.opts.min + ' and ' + g.opts.max; }
}

function Input(g) {
    if (!g.con || !g.idp || !g.clp) return;
    if (g.con.isString) g.con = gi(g.con);
    if (!g.con) return;
    this.setID = function(id) {
        g.idp = id || g.idp;
        hold.id = 'input_hold_' + g.idp;
        rel.id = 'input_rel_' + g.idp;
        d.id = 'input_' + g.idp;
        suggest.id = 'input_suggest_' + g.idp;
        tit.id = 'input_title_' + g.idp;
        man.id = 'input_man_' + g.idp;
        ph.id = 'input_ph_' + g.idp;
        cancel.id = 'input_cancel_' + g.idp;
        dtp.id = 'input_dt_hold_' + g.idp;
        dd.id = 'input_dd_hold_' + g.idp;
        return this;
    }
    this.setClass = function(clp, theme) {
        if (clp) g.clp = clp;
        else clp = g.clp;
        if (!theme) theme = g.theme;
        if (!theme) g.theme = theme = 'default';
        hold.className = 'input_hold_' + g.clp + ' input_hold_' + theme;
        rel.className = 'input_rel_' + g.clp + ' input_rel_' + theme;
        d.className = 'input_' + g.clp + ' input_' + theme;
        suggest.className = 'input_suggest_' + g.clp + ' input_suggest_' + theme;
        tit.className = 'input_title_' + g.clp + ' input_title_' + theme;
        man.className = 'input_man_' + g.clp + ' input_man_' + theme;
        ph.className = 'input_ph_' + g.clp + ' input_ph_' + theme;
        cancel.className = 'input_cancel_' + g.clp + ' input_cancel_' + theme;
        dtp.className = 'input_dt_hold_' + g.clp + ' input_dt_hold_' + theme;
        dd.className = 'input_dd_hold_' + g.clp + ' input_dd_hold_' + theme;
        return this;
    }
    this.addClass = function(c) {
        if (d.className.search(c) >= 0) return this;
        else d.className += ' ' + c;
        return this;
    }
    this.delClass = function(c) {
        if (d.className.search(c) < 0) return this;
        else d.className = d.className.replace(c, '');
        return this;
    }
    var findSubMenuElements = function(el) {
            if (!el._hasSubMenu) return [];
            for (var i = 0, flag = false, r = []; i < elements.length; i++) {
                if (el._data._id == elements[i]._data._id) { flag = true;
                    continue; }
                if (flag) {
                    if (elements[i]._isSubMenu) r.push(elements[i]);
                    else break; }
            }
            return r;
        },
        findElement = function(v) {
            for (var i = 0, t = 0; i < elements.length; i++) {
                t = elements[i]._data;
                if ((v._id && v._id == t._id) || v == t) return elements[i];
                if (v[dpf[0]] === undefined) {
                    if (v.toString().toLowerCase() == t[dpf[0]].toString().toLowerCase()) return elements[i]; } else {
                    for (var j = 0, flag = true; j < dpf.length; j++) {
                        if (v[dpf[j]].toString().toLowerCase() != t[dpf[j]].toString().toLowerCase()) { flag = false;
                            break; }
                    }
                }
                if (flag) return elements[i];
            }
            return false;
        },
        updateMenuParent = function(el) {
            if (!el._isSubMenu && !el._hasSubMenu) return;
            if (el._isSubMenu) {
                for (var i = elements.length - 1, flag = false; i >= 0; i--) {
                    if (elements[i]._data._id == el._data._id) flag = true;
                    if (flag && elements[i]._hasSubMenu) { el = elements[i];
                        break; } } }
            var tx = checkSelected(el._data);
            el.className = el.className.replace(/input_dd[a-z,_]+(selected|partial)[a-z,0-9,\_,\-]+\b/gi, '');
            var t = first(el);
            if (t && maxSelect > 1 && !!~t.className.search(/_check_/i) >= 0) { t.className = t.className.replace(/input_dd[a-z,_]+(selected|partial)[a-z,0-9,\_,\-]+\b/gi, '');
                t = next(t); }
            for (var j = 0; j < dpf.length; j++)
                if (t) { t.className = t.className.replace(/input_dd[a-z,_]+(selected|partial)[a-z,0-9,\_,\-]+\b/gi, '');
                    t = next(t); }
            if (tx) { el.className += ' input_dd_el_hold_' + (tx == 1 ? 'selected' : 'partial') + '_' + g.clp + ' input_dd_el_hold_' + (tx == 1 ? 'selected' : 'partial') + '_' + g.theme;
                var t = first(el);
                if (t && maxSelect > 1 && !!~t.className.search(/_check_/i) >= 0) { t.className += ' input_dd_el_check_' + (tx == 1 ? 'selected' : 'partial') + '_' + g.clp + ' input_dd_el_check_' + (tx == 1 ? 'selected' : 'partial') + '_' + g.theme;
                    t = next(t); }
                for (var j = 0; j < dpf.length; j++)
                    if (t) { t.className += ' input_dd_el_' + (tx == 1 ? 'selected' : 'partial') + '_' + g.clp + ' input_dd_el_' + (tx == 1 ? 'selected' : 'partial') + '_' + g.theme;
                        t = next(t); } }
        },
        selectElement = function(v) {
            var el = findElement(v);
            if (!el) return;
            if (el._hasSubMenu) {
                var r = findSubMenuElements(el);
                for (i = 0; i < r.length; i++) selectElement(r[i]._data);
                return; }
            if (el.className.search(/selected|partial/i) >= 0) { unselectElement(v);
                return; }
            if (selected.length >= maxSelect)
                while (selected.length >= maxSelect) { unselectElement(selected[0]); }
            selected.push(el._data);
            el.className += ' input_dd_el_hold_selected_' + g.clp + ' input_dd_el_hold_selected_' + g.theme;
            var t = first(el);
            if (t && maxSelect > 1 && !!~t.className.search(/_check_/i) >= 0) { t.className += ' input_dd_el_check_selected_' + g.clp + ' input_dd_el_check_selected_' + g.theme;
                t = next(t); }
            for (var j = 0; j < dpf.length; j++)
                if (t) {
                    t.className += ' input_dd_el_selected_' + g.clp + ' input_dd_el_selected_' + g.theme;
                    t = next(t);
                }
            updateMenuParent(el);
            if (selected.length) {
                if (!g.noKeyboard && !g.notEditable) { d.contentEditable = false; } }
        },
        unselectElement = function(v) {
            var el = findElement(v);
            if (!el) return;
            if (el._hasSubMenu) {
                var r = findSubMenuElements(el);
                for (i = 0; i < r.length; i++) unselectElement(r[i]._data);
                return; }
            el.className = el.className.replace(/input_dd[a-z,_]+(selected|partial)[a-z,0-9,\_,\-]+\b/gi, '');
            var t = first(el);
            while (t) { t.className = t.className.replace(/input_dd[a-z,_]+(selected|partial)[a-z,0-9,\_,\-]+\b/gi, '');
                t = next(t); }
            for (var i = 0; i < selected.length; i++)
                if (selected[i]._id == v._id) { selected.splice(i, 1);
                    break; }
            var t = first(d);
            while (t) {
                if (t._data._id == v._id) { del(t);
                    break; }
                t = next(t); }
            if (!selected.length) empty(d);
            updateMenuParent(el);
            if (!selected.length) {
                if (!g.noKeyboard && !g.notEditable) { d.contentEditable = true;
                    self.setFocus(); } }
        },
        checkSelected = function(v) {
            var el = findElement(v);
            if (!el) return 0;
            if (el._hasSubMenu) {
                var r = findSubMenuElements(el),
                    flag1 = 0,
                    flag2 = false,
                    flag3 = false;
                if (!r.length) return 0;
                for (var i = 0; i < r.length; i++) { flag3 = false;
                    for (var j = 0; j < selected.length; j++)
                        if (selected[j]._id == r[i]._data._id) { flag2 = true;
                            flag3 = true;
                            break; }
                    if (flag3) flag1++; }
                if (flag1 == r.length && flag2) return 1;
                else if (flag2) return flag1 / r.length;
                else return 0;
            } else {
                for (var i = 0; i < selected.length; i++)
                    if (selected[i]._id == el._data._id) return 1;
                return 0;
            }
        },
        setHighlight = function(ind1, ind2, dir) {
            unsetHighlight();
            if (dir) {
                var t = 0,
                    el = first(dd);
                while (el) { t++;
                    el = next(el); }
                var el = first(dd),
                    n = ind1 + (ind2 < 0 ? dir : 0),
                    i = 0;
                if (n < 0) n = t - 1;
                n = n % t;
                while (n && el && i++ < n) el = next(el);
                if (ind2 >= 0) {
                    var r = findSubMenuElements(el);
                    n = ind2 + dir;
                    t = r.length;
                    if (n < 0) n = t - 1;
                    n = n % t;
                    el = r[n]; }
                self.curHighlight = (ind2 < 0 ? n : ind1) + '_' + (ind2 < 0 ? -1 : n);
            } else if (ind1 >= 0) {
                var t = 0,
                    el = first(dd);
                while (el) { t++;
                    el = next(el); }
                var el = first(dd),
                    n = ind1,
                    i = 0;
                n = n % t;
                while (n && el && i++ < n) el = next(el);
                if (ind2 >= 0) {
                    ac(gt('body')[0], dds);
                    empty(dds);
                    var r = findSubMenuElements(el);
                    for (i = 0; i < r.length; i++) ac(dds, r[i]);
                    var p = getPos(el);
                    dds.style.left = p.left + p.w + (g.subMenuLeftGap === undefined ? _GLConfig.submenu_left_gap || 0 : g.subMenuLeftGap) + 'px';
                    dds.style.top = p.top + 'px';
                    el = r[0];
                } else { del(dds); }
                self.curHighlight = ind1 + '_' + ind2;
            } else return;
            if (!el) return;
            el.className += ' input_dd_el_hold_highlight_' + g.clp + ' input_dd_el_hold_highlight_' + g.theme;
            var t = first(el);
            if (t && maxSelect > 1 && !!~t.className.search(/_check_/i) >= 0) { t.className += ' input_dd_el_check_highlight_' + g.clp + ' input_dd_el_check_highlight_' + g.theme;
                t = next(t); }
            for (var j = 0; j < dpf.length; j++)
                if (t) {
                    t.className += ' input_dd_el_highlight_' + g.clp + ' input_dd_el_highlight_' + g.theme;
                    t = next(t);
                }
        },
        unsetHighlight = function() {
            for (var i = 0; i < elements.length; i++) {
                var el = elements[i];
                el.className = el.className.replace(/input_dd[a-z,_]+highlight[a-z,0-9,\_,\-]+\b/gi, '');
                el = first(el);
                while (el) { el.className = el.className.replace(/input_dd[a-z,_]+highlight[a-z,0-9,\_,\-]+\b/gi, '');
                    el = next(el); }
            }
            self.curHighlight = 0;
        };
    var checkDPReset = function() {
        if (!g.dp.length) return;
        if (selected.length && dp.length != g.dp.length) {
            for (var i = 0, flag = 0; i < selected.length; i++)
                for (var j = 0; j < g.dp.length; j++)
                    if (g.dp[j]._id == selected[i]._id) flag++;
            if (flag == selected.length) { self.setDP(clone(g.dp));
                return true; }
        }
        return false;
    }
    this.setValue = function(v, ignoreOnSetValue) {
        if (v === null || v === undefined || v === false) return this;
        if (g.isDD && v && (v.isArray ? v.length ? true : false : v ? true : false)) {
            var unlisted = g.allowUnlisted === undefined ? _GLConfig.input_allow_unlisted : g.allowUnlisted;

            if (!v.isArray) v = [v];
            if ((!dp.length || !elements.length) && !self.curSearch && !self.curSearch.length) {
                return unlisted ? this.setDP(v).setValue(v, ignoreOnSetValue) : this; }
            var flag = false,
                miss = [];
            for (var i = 0; i < v.length; i++) { flag = findElement(v[i]);
                if (!flag) miss.push(v[i]); }
            if (miss.length) {
                if (unlisted) {
                    var t = miss.concat(clone(g.dp || []));
                    return this.setDP(t).setValue(v, ignoreOnSetValue); } else if (miss.length == v.length) return this;
            }
            for (var i = 0; i < v.length; i++) {
                var t = checkSelected(v[i]);
                if (t == 1 && maxSelect > 1) unselectElement(v[i]);
                else if (t == 1 && maxSelect == 1) {
                    break; } else if (t && t < 0.5) { unselectElement(v[i]);
                    selectElement(v[i]); } else if (t >= 0.5) { unselectElement(v[i]); } else selectElement(v[i]);
            }
        } else if (g.val && g.val.f == 'money') {
            v = v + '';
            if (!v.length) {
                if (!ignoreOnSetValue && _GLConfig.input_programmatic_onSetValue && g.onSetValue) g.onSetValue(this.getValue(), this.getValidatedValue(), this);
                return this; }
            var m = v.replace(/[a-z,\s,\$]/gi, '');
            m = parseFloat(m);
            if (!isNumber(m)) return this;
            var neg = m < 0 ? true : false;
            m = Math.abs(m);
            m *= v.search(/lakh/i) >= 0 ? 100000 : v.search(/crore/i) >= 0 ? 10000000 : v.search(/mn|million/i) >= 0 ? 1000000 : v.search(/bn|billion/i) >= 0 ? 1000000000 : 1;
            if (Math.round(m) - m < Math.pow(10, -8)) m = Math.round(m);
            g.value = m * (neg ? -1 : 1);
        } else g.value = v;
        if (g.showDate || g.showTime) { selectedDT = v.isDate ? new Date().parseDate(v.format('d M Y H:I:s')) : v.isString ? new Date().parseDate(v) ? new Date().parseDate(v) : 0 : 0;
            if (!selectedDT) selectedDT = new Date();
            d.innerHTML = decodeURIComponent(selectedDT ? selectedDT.format(g.dateFormat) : '');
            currentDT = new Date().parseDate(selectedDT.format('d M Y H:I:s')); } else if (g.isPassword && !isIOSAndroid) {
            var s = '';
            while (s.length != strtags(g.value).length) s += '*';
            d.innerHTML = s; } else if (g.isPassword && isIOSAndroid) { d.value = v; } else if (g.isDD) {
            empty(d);
            if (selected.length) {
                for (var i = 0; i < selected.length; i++) {
                    var t1 = ce('div', 'input_dd_value_hold_' + selected[i]._id + '_' + g.idp);
                    t1.className = 'input_dd_value_hold_' + g.clp + ' input_dd_value_hold_' + g.theme;
                    t1._data = selected[i];
                    aeh(t1, 'click', function(e) {
                        var s = getEvtSrc(e);
                        if (s.id.search(/cancel/) >= 0) return;
                        if (g.noKeyboard) self.openDD();
                        else self.onFocus(); });
                    var t2 = ce('div', 'input_dd_value_' + selected[i]._id + '_' + g.idp, t1);
                    t2.className = 'input_dd_value_' + g.clp + ' input_dd_value_' + g.theme;
                    t2.innerHTML = decodeURIComponent(selected[i][dpf[0]]);
                    if (!g.notEditable)
                        if (g.ddCancel === undefined ? _GLConfig.dd_cancel : g.ddCancel) {
                            t2 = ce('img', 'input_dd_value_' + selected[i]._id + '_' + g.idp, t1);
                            t2.src = g.ddCancelImg === undefined ? _GLMedia.dd_cancel : g.ddCancelImg;
                            t2.className = 'input_dd_cancel_' + g.clp + ' input_dd_cancel_' + g.theme;
                            aeh(t2, 'click', function(e) {
                                var s = getEvtSrc(e),
                                    id = s.id.split('_')[3];
                                for (i = 0; i < selected.length; i++)
                                    if (selected[i]._id == id) {
                                        prevDefault(e);
                                        stopProp(e);
                                        unselectElement(selected[i]);
                                        self.setFocus();
                                        self.openDD();
                                        checkDPReset();
                                        if (!strtags(d.innerHTML).trim().length) d.innerHTML = '&nbsp;'
                                        if (g.onSetValue && _GLConfig.input_programmatic_onSetValue) g.onSetValue(self.getValue(), self.getValidatedValue(), self);
                                        break;
                                    }
                            });
                        }
                    ac(d, t1);
                    t1.contentEditable = false;
                }
                t1 = ce('div');
                t1.contentEditable = g.notEditable ? false : g.noKeyboard ? false : true;
                ac(d, t1);
                t1.innerHTML = '&nbsp;';
                aeh(t1, 'keydown', function(e) { self.ddKeydown(e); });
                aeh(t1, 'keyup', function(e) { self.ddKeyup(e); });
                aeh(t1, 'focus', function(e) { self.onFocus(e) });
                aeh(t1, 'activate', function(e) { self.onFocus(e); });
                aeh(t1, 'blur', function(e) { self.onBlur(e); });
            } else d.innerHTML = '&nbsp;';
            if (self.curSearch && self.curSearch.length) { self.curSearch = '';
                var t = (g.searchFun || self.searchDD).apply(self, [s, self]);
                if (g.searchFun && t && t.isArray) { dp = clone(t);
                    self.setDP(dp); } }
            if (!ignoreOnSetValue) {
                if ((maxSelect == 1 && selected.length == 1) || ((g.closeOnMaxSelect === undefined ? _GLConfig.close_on_max_select : g.closeOnMaxSelect) && maxSelect == selected.length)) { self.blur(); } else this.setFocus(); } else this.blur();
        } else d.innerHTML = (g.val && g.val.f == 'money' && !self.inFocus ? formatMoney(g.value, g.val.sys || g.val.type.toLowerCase() == 'rs' ? 'IN' : 'US', g.val.type, 2) : g.value);
        if (g.showDate || g.showTime) {
            var v1 = g.value ? g.value.isDate ? g.value.format(g.dateFormat) : 0 : 0,
                v2 = self.lastSetValue ? self.lastSetValue.isDate ? self.lastSetValue.format(g.dateFormat) : 0 : 0;
            if (v1 == v2) return;
            self.lastSetValue = g.value; } else if (g.isDD) {
            for (var i = 0, s = ''; i < selected.length; i++) s += (s.length ? '|' : '') + selected[i][dpf[0]];
            if (s == self.lastSetValue) return;
            self.lastSetValue = s; } else {
            if (d.innerHTML == self.lastSetValue) return this;
            self.lastSetValue = d.innerHTML; }
        if (!ignoreOnSetValue && _GLConfig.input_programmatic_onSetValue && g.onSetValue) g.onSetValue(this.getValue(), this.getValidatedValue(), this);
        return this;

    }
    this.getValue = function() {
        if (g.isDD) {
            for (var i = 0, r = []; i < selected.length; i++) r.push(dpf[0] != '_name' ? selected[i] : selected[i][dpf[0]]);
            return r; }
        if (g.val && g.val.f == 'money') return g.value === null || g.value === undefined ? null : isNumber(g.value) || false;
        if (g.isPassword) return isIOSAndroid ? d.value : g.value;
        var s = d.innerHTML.replace(/(<!--(\s|.)*?-->)|(<o:p(\s|.)*?\/o:p>)|(<script(\s|.)*?\/script>)/gi, '');
        if (g.maintainCSSStyle === undefined ? _GLConfig.input_maintain_css_style : g.maintainCSSStyle) {
            s = s.replace(/(margin|padding|font\-size|font\-style|font\-weight|font\-family,background)+[:,\(,\),\s*,\.,\-,0-9,a-z,\,',"]+;/gi, '');
            s = s.replace(/style="[^"]*"/gi, '');
            s = s.replace(/\r|\n|\t/g, '');
        }
        var s = g.multiline ? s : strtags(s.replace(/&nbsp;/g, '')).trim();
        s = html_entity_decode(s);
        return s == g.ph ? '' : s;
    }
    this.getHTMLValue = function() {
        return d.innerHTML; }
    this.getValidatedValue = function(showHint) {
        if (g.isDD) {
            var r = this.getValue();
            if ((g.man && g.man.length || minSelect) && !selected.length) r = false;
            if (r && selected.length < minSelect) r = false;
            if (showHint && !r && g.man.length) this.showHint('Input required: ' + (g.title.text || '') + (g.man.length ? '. This input is mandatory' : ''));
            if (!r || !r.length) r = false;
            if (r && this.maxSelect == 1) r = r[0];
            return r; }
        var v = this.getValue();
        if (v === false || v === null || v === undefined) return false;
        v = v.toString();
        if (!strtags(v.replace(/&nbsp;|\s|\r|\n|\t/gi, '')).length || (g.ph && strtags(v.replace(/&nbsp;|\r|\n|\t/g, '')).trim() == g.ph.trim())) {
            if (showHint && g.man.length) this.showHint('Input required: ' + (g.title.text || '') + (g.man.length ? '. This input is mandatory' : ''));
            return false; }
        if (g.val && g.val.f == 'money') v = g.value;
        if (!g.val) return v;
        if (g.val.f == 'date' || g.showDate || g.showTime) v = g.value ? g.value.isDate ? new Date().parseDate(g.value.format('d M Y H:I:s')) : new Date().parseDate(g.value) ? new Date().parseDate(g.value) : 0 : 0;
        var val = _GLValidators[g.val.f]({ v: v, opts: g.val });
        if (val) {
            if (g.val.f == 'mobile') return v.trim();
            if (g.val.f == 'number') return v.trim() * 1;
            return v;
        }
        if (showHint && g.man.length) this.showHint(_GLValidatorsText[g.val.f]({ v: v, opts: g.val }) + (g.man.length ? '. This input is mandatory' : ''));
        return false;
    }
    this.clearValue = function(isProgrammatic) {
        this.lastSetValue = null;
        if (g.showDate || g.showTime) { empty(d);
            currentDT = new Date();
            selectedDT = 0;
            this.renderCalendar(); } else if (g.val && g.val.f == 'money') { g.value = false;
            empty(d); } else if (g.isPassword) {
            if (g.isPasswordMobile) d.value = '';
            else empty(d);
            g.value = ''; } else if (g.isDD) {
            empty(suggest);
            for (i = 0; i < selected.length; i++) unselectElement(selected[i--]);
            if (self.curSearch || curThreshold) { self.curSearch = '';
                curThreshold = 0;
                this.setDP(dp); }
            if (!g.noKeyboard && !g.notEditable) d.contentEditable = true;
        } else d.innerHTML = '';
        if (gparent(cancel)) del(cancel);
        if (!self.inFocus && !isProgrammatic) this.setFocus();
        if (!isProgrammatic && _GLConfig.input_programmatic_onSetValue && g.onSetValue) g.onSetValue(this.getValue(), this.getValidatedValue(), this);
        if (g.noKeyboard || g.notEditable) this.setPlaceholder();
        return this;
    }
    this.initCancel = function() {
        if (g.notEditable) return;
        aeh(cancel, 'click', function(e) { self.clearValue.apply(self, []);
            prevDefault(e);
            stopProp(e); });
    }
    this.initHint = function(v) {
        self.hint = new Hint({ con: hold, idp: g.idp, clp: g.clp, theme: g.theme, value: g.hint || '', pos: { loc: g.hintLoc || _GLConfig.hint_loc, off: g.hintOff || _GLConfig.hint_off, gap: g.hintGap || _GLConfig.hint_gap, dirOffset: g.hintDirOffset || _GLConfig.hint_dirOffset, dirHeight: g.hintDirHeight || _GLConfig.hint_dirHeight, dirWidth: g.hintDirWidth || _GLConfig.hint_dirWidth }, isManual: g.manualHint ? true : g.manualHint === undefined ? _GLConfig.input_hint_autoshow ? false : true : false });
    }
    this.showHint = function(v) { this.hint.setValue(v).showHint(); }
    this.hideHint = function(v) { this.hint.setValue(v).hideHint(); }
    this.setTitle = function(v) {
        g.title = v ? v.text ? v : { text: v, pos: 1 } : g.title;
        tit.innerHTML = g.title.text;
        if (g.man) ac(tit, man);
        if (gparent(tit)) del(tit);
        if (!g.title.pos) return this;
        if (g.title.pos * 1 < 3) ibe(tit, rel);
        else ac(hold, tit);
        if (_GLConfig.input_autohide_title) tit.style.visibility = v == g.ph ? 'hidden' : 'visible';
        return this;
    }
    this.setTitlePos = function(v) {
        g.title.pos = v || g.title.pos;
        this.setTitle();
        return this;
    }
    this.setPlaceholder = function(v) {
        if (g.isPasswordMobile) return this;
        g.ph = v === undefined ? g.ph : v || '';
        if (!g.ph.length) g.ph = '&nbsp;';
        ph.innerHTML = decodeURIComponent(g.ph);
        s = strtags(d.innerHTML.replace(/&nbsp;/g, '')).trim();
        if (s.length < 1 && !self.inFocus) {
            if (_GLConfig.input_autohide_title) tit.style.visibility = 'hidden';
            empty(d);
            ac(d, ph);
            if (gparent(cancel)) del(cancel); } else if (gparent(ph)) del(ph);
        return this;
    }
    this.initEvents = function() {
        this.onFocus = function(e) {
            self.inFocus = true;
            if (self.blurTimer) { clearTimeout(self.blurTimer);
                self.blurTimer = 0; }
            if (_GLConfig.input_autohide_title) tit.style.visibility = 'visible';
            if (_GLConfig.input_show_cancel && !g.hideCancel && !gparent(cancel)) ibe(cancel, d);
            if (tit.className.search('input_title_focus') < 0) tit.className += ' input_title_focus_' + g.clp + ' input_title_focus_' + g.theme;
            if (g.showDate || g.showTime) self.openDateTime();
            if (g.isDD) self.openDD();
            if ((!d.innerHTML || !d.innerHTML.trim().length) || (html_entity_decode(strtags(d.innerHTML).replace(/&nbsp;/g, '')).trim() == html_entity_decode(strtags(self.ph.innerHTML).replace(/&nbsp;/g, '')).trim())) { d.innerHTML = '&nbsp;';
                self.setFocus(); } else if (g.val && g.val.f == 'money' && g.value) d.innerHTML = g.value;
        };
        this.onBlur = function(e) {
            self.blurTimer = setTimeout(function(e) {
                if (self.ignoreBlur) return;
                if (g.isPasswordMobile) { g.value = d.value; } else if (g.isPassword && d.innerHTML.search(/[^\*]+/g) >= 0) {
                    if (self.passwordTimer) clearTimeout(self.passwordTimer);
                    s = strtags(d.innerHTML).replace(/&nbsp;|\n|\r|\t/g, '');
                    var t = '';
                    for (var i = 0; i < s.length; i++)
                        if (s.charAt(i) == '*') t += g.value.charAt(i);
                        else t += s.charAt(i);
                    g.value = t;
                }
                if (!g.isDD && d.innerHTML && (g.val && g.val.f != 'string' || !g.val)) d.innerHTML = strtags(d.innerHTML).trim();
                if (last(d) && !strtags(last(d).innerHTML)) last(d).innerHTML = '&nbsp;';
                self.inFocus = false;
                if (g.setValueOnBlur === undefined ? _GLConfig.input_on_blur_set_value : g.setValueOnBlur) {
                    var s = strtags(d.innerHTML);
                    if (s) s = s.replace(/&nbsp;/g, '');
                    if (!s) s = '';
                    if (s != g.ph) {
                        if (g.isDD) {
                            s = first(d);
                            if (s) {
                                var flag = false;
                                while (s) {
                                    if (s.innerHTML.replace(/&nbsp;/g, '').trim().length && !s._data) { flag = true;
                                        break; }
                                    s = next(s); } } else { flag = true;
                                s = ce('div');
                                s.innerHTML = d.innerHTML; }
                            if (flag) {
                                if (first(dd) && first(dd)._data[dpf[0]].toString().toLowerCase().search(s.innerHTML.toLowerCase()) == 0) self.setValue(first(dd)._data);
                                else if (g.allowUnlisted === undefined ? _GLConfig.input_allow_unlisted : g.allowUnlisted) self.setValue(s.innerHTML);
                                else if (first(dd)) {
                                    var t = first(dd);
                                    while (t) {
                                        if (t._data[dpf[0]].toLowerCase().trim() == s.innerHTML.toLowerCase()) { self.setValue(t._data);
                                            break; }
                                        t = next(t); } }
                            }
                        } else if (g.showDate || g.showTime) {
                            // if(s.search(':')>=0&&s.split(':').length<3)s=s.trim()+':00';var dt=new Date().parseDate(s);if(dt){selectedDT=dt;self.setValue.apply(self,[dt]);}
                            //do nothing
                        } else { self.setValue.apply(self, [g.isPassword ? g.value : s]); }
                    }
                }
                tit.className = tit.className.replace(/input_title_focus_[a-z,0-9,\_,\-]+\b/gi, '');
                if (g.isDD) { self.closeDD(); }
                self.setPlaceholder();
                if (gparent(cancel)) del(cancel);
                if (g.val && g.val.f == 'money' && isNumber(g.value)) {
                    var s = self.getValidatedValue();
                    if (s.toString() != g.value.toString()) g.value = s;
                    s = formatMoney(s, g.val.sys || (g.val.type.toLowerCase() == 'rs' ? 'IN' : 'US'), g.val.type, 2);
                    d.innerHTML = s;
                }
            }, 150, e);
        }
        if (g.noKeyboard && (g.showDate || g.showTime)) aeh(d, 'click', function() { self.openDateTime() });
        d.pattern = '[0-9]*';
        aeh(d, 'keydown', function(e) {
            var k = fkey(e);
            if (k == 27) {
                prevDefault(e);
                stopProp(e);
                if (g.isDD) {
                    if (self.curHighlight) unsetHighlight();
                    self.closeDD();
                    self.blur(); } else if (g.showDate || g.showTime) self.closeDateTime(true);
            }
            if (g.val && (g.val.f == 'number' || g.val.f == 'mobile' || g.val.f == 'money')) {
                var a = [189, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 8, 9, 13, 27, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 144, 37, 38, 39, 40, 190, 110];
                if (g.val.f == 'mobile') a = a.concat([32, 43, 219, 221, 189, 187, 107]);
                if (!(a.indexOf(k * 1) >= 0 || (g.val.f == 'mobile' && e.shiftKey && k == 187) || (e.ctrlKey || e.metaKey))) { prevDefault(e);
                    stopProp(e);
                    return false; }
            }
            if (d.innerHTML == '&nbsp;') empty(d);
            if (g.isDD && last(d) && last(d).innerHTML == '&nbsp;') last(d).innerHTML = '';

        });
        if (g.val && g.val.f == 'money') {
            aeh(d, 'keyup', function(e) {
                var s = strtags(d.innerHTML).trim();
                g.value = parseFloat(s.replace(/[a-z,\s,\$,\,]/gi, ''));
                if (!isNumber) g.value = false; });
        }
        if (g.isPassword && !isIOSAndroid) {
            var getSel = function(e) {
                    if (window.getSelection) {
                        var sel = window.getSelection();
                        if (!sel) return false;
                        sel.gpos = sel.getRangeAt(0); } else if (document.selection && document.selection.createRange) {
                        var sel = document.selection.createRange(),
                            pcr = document.body.createTextRange();
                        pcr.moveToElementText(e);
                        pcr.setEndPoint("EndToEnd", sel);
                        sel.focusOffset = pcr.text.length; }
                    sel.fn = sel.focusNode || e;
                    return sel;
                },
                setSel = function(e, pos) {
                    if (document.selection && document.body.createTextRange) {
                        var tr = document.body.createTextRange();
                        tr.moveToElementText(d);
                        tr.collapse(true);
                        tr.moveEnd("character", pos);
                        tr.moveStart("character", pos);
                        tr.select(); } else if (document.createRange && window.getSelection) {
                        var r = document.createRange(),
                            sel = window.getSelection();
                        r.setStart(e, pos);
                        r.setEnd(e, pos);
                        r.collapse(true);
                        sel.removeAllRanges();
                        sel.addRange(r); }
                }
            aeh(d, 'keyup', function(e) {
                var k = fkey(e),
                    s = strtags(d.innerHTML).replace(/&nbsp;|\r|\n|\t/g, '');
                if (!g.value) g.value = '';
                if (s.length == g.value.length && s.search(/[^\*]+/) < 0) return;
                if (self.passwordTimer) clearTimeout(self.passwordTimer);
                var gs = getSel(d),
                    cPos = gs.focusOffset;
                if (cPos === undefined) cPos = s.length;
                if (cPos > s.length) cPos = s.length;
                if (cPos != s.length) {
                    if (s.length < g.value.length) { g.value = g.value.substr(0, cPos) + g.value.substr(cPos + g.value.length - s.length); } else if (s.length > g.value.length) {
                        g.value = g.value.substr(0, cPos - s.length + g.value.length) + s.substr(cPos - s.length + g.value.length, s.length - g.value.length) + g.value.substr(cPos - s.length + g.value.length);
                    }
                }
                var t = '';
                for (var i = 0; i < s.length; i++)
                    if (s.charAt(i) == '*') t += g.value.charAt(i);
                    else t += s.charAt(i);
                g.value = t;
                self.passwordTimer = setTimeout(function() {
                    var s = '';
                    while (s.length != g.value.length) s += '*';
                    d.innerHTML = s;
                    self.passwordTimer = 0;
                    if (d.firstChild) setSel(d.firstChild, cPos);
                    else self.setFocus();
                }, g.passwordDelay === undefined ? _GLConfig.input_password_delay || 0 : g.passwordDelay || 0);
            });
            aeh(d, 'keydown', function(e) {
                if (self.passwordTimer) clearTimeout(self.passwordTimer); });
        }
        if (g.isDD) {
            this.ddKeydown = function(e) {
                var k = fkey(e);
                if ((k >= 37 && k <= 40) || k == 13 || k == 32) {
                    if (!self.curHighlight) self.curHighlight = '-1_-1';
                    var t = self.curHighlight.split('_');
                    t[0] *= 1;
                    t[1] *= 1;
                    if (k == 38 || k == 40) {
                        setHighlight(t[0], t[1], k == 38 ? -1 : 1);
                        prevDefault(e);
                        stopProp(e);
                    } else if (t[0] >= 0 && (k == 37 || k == 39)) {
                        var i = 0,
                            s = first(dd);
                        while (s && i++ < t[0] * 1) s = next(s);
                        if (!s) return;
                        if (s._hasSubMenu && k == 39) setHighlight(t[0], 0, 0);
                        else if (k == 37 && t[1] >= 0) setHighlight(t[0], -1, 0);
                        prevDefault(e);
                        stopProp(e);
                    } else if ((k == 39 || k == 13) && t[0] < 0) {
                        var s = selected.length ? last(d) : d;
                        if (s && s.innerHTML.replace(/&nbsp;|\r|\n|\t/g, '').trim().length) {
                            s = strtags(s.innerHTML).trim();
                            if (first(dd) && first(dd)._data[dpf[0]].toString().toLowerCase().search(s.toLowerCase()) == 0) { self.setValue(first(dd)._data); } else if (g.allowUnlisted === undefined ? _GLConfig.input_allow_unlisted : g.allowUnlisted) { self.setValue(s); } else if (first(dd)) {
                                var t = first(dd);
                                while (t) {
                                    if (t._data[dpf[0]].toLowerCase().trim() == s) { self.setValue(t._data);
                                        break; }
                                    t = next(t); }
                            }
                        }
                    } else if ((k == 13 || k == 32) && t[0] >= 0) {
                        var el = first(t[1] >= 0 ? dds : dd),
                            i = 0;
                        while (el && i++ < (t[1] >= 0 ? t[1] : t[0])) el = next(el);
                        self.setValue(el._data);
                        unsetHighlight();
                        prevDefault(e);
                        stopProp(e);
                    }
                    if (self.curHighlight == '-1_-1') self.curHighlight = 0;
                } else if (k == 8 && selected.length) {
                    if (!strtags(last(d).innerHTML).length) { unselectElement(selected[selected.length - 1]);
                        prevDefault(e);
                        stopProp(e); }
                }
            }
            this.ddKeyup = function(e) {
                var k = fkey(e);
                if (k == 8 || k == 32 || (k >= 46 && k < 58) || (k >= 65 && k < 91) || (k >= 96 && k < 112) || (k >= 186 && k < 193) || (k >= 219 && k < 223)) {
                    if (k == 32 && self.curHighlight) return;
                    var s = selected.length ? last(d) : d;
                    if (s.className && s.className.search(/input_value/i) >= 0) return;
                    s = strtags(s.innerHTML).replace(/&nbsp;/g, '').trim();
                    if (s.length && s == self.curSearch) return;
                    self.curSearch = s;
                    if (s.length && maxSelect == selected.length) { self.clearValue(true);
                        d.innerHTML = s;
                        self.setFocus(); }
                    if (self.searchTimer) clearTimeout(self.searchTimer);
                    if (!g.noSearch && !s.length) { self.curSearch = '';
                        curThreshold = 0;
                        var t = checkDPReset();
                        if (!t) self.setDP(clone(g.dp));
                        clearTimeout(self.searchTimer); }
                    if (!g.noSearch && s.length) {
                        self.searchTimer = setTimeout(function() {
                            var t = (g.searchFun || self.searchDD).apply(self, [s, self]);
                            if (g.searchFun && t && t.isArray) { dp = clone(t);
                                self.setDP(dp);
                                self.openDD(); } }, g.searchTime === undefined ? _GLConfig.input_dd_search_time : g.searchTime);
                    }
                }
            }
            this.onScroll = function(e) {
                var p = getPos(d);
                dd.style.top = p.top + p.h + (g.dropdownBottomOffset === undefined ? _GLConfig.dropdown_bottom_offset : g.dropdownBottomOffset) + 'px';
                dd.style.left = p.left + (g.dropdownLeftOffset === undefined ? _GLConfig.dropdown_left_offset : Math.abs(g.dropdownLeftOffset) <= 1 ? dd.clientWidth * g.dropdownLeftOffset : g.dropdownLeftOffset) + 'px';
            }
            aeh(document, 'mousedown', function(e) {
                var s = getEvtSrc(e);
                if (s.id == 'input_dd_hold_' + g.idp) { self.ignoreBlur = true; } });
            aeh(document, 'mouseup', function(e) {
                if (!self.ignoreBlur) return;
                self.ignoreBlur = false;
                self.setFocus(); });
            var p = gparent(g.con);
            while (p) { aeh(p, 'scroll', function(e) {
                    if (!self.isDDOpen) return;
                    self.onScroll(e); });
                p = gparent(p); }
            aeh(d, 'keydown', function(e) { self.ddKeydown(e) });
            aeh(d, 'keyup', function(e) { self.ddKeyup(e) });
            if (g.noKeyboard) { aeh(d, 'click', function(e) { self.openDD(); }); }
        }
        aeh(d, 'focus', this.onFocus);
        aeh(d, 'activate', this.onFocus);
        aeh(d, 'blur', this.onBlur);
        aeh(document, 'click', function(e) {
            var s = getEvtSrc(e),
                flag = true,
                inpFlag = true;
            while (s) {
                if (s.id == hold.id || (dtp && (s.id == dtp.id)) || (g.isDD && (dd.id == s.id || dds.id == s.id))) { flag = false;
                    prevDefault(e);
                    stopProp(e); }
                if (s.contenteditable == "true" || s.contentEditable == "true" || s.nodeName.toUpperCase() == 'BUTTON' || s.nodeName.toUpperCase() == 'INPUT') inpFlag = false;
                s = gparent(s);
                if (!flag) break; }
            if (self.dtTimer) { clearTimeout(self.dtTimer);
                self.dtTimer = 0; }
            if (flag) {
                if (g.isDD && self.isDDOpen || gparent(dtp)) { stopProp(e);
                    prevDefault(e);
                    if (inpFlag) self.onBlur(); }
                if (gparent(dtp)) self.closeDateTime(inpFlag);
                else if (inpFlag) { stopProp(e);
                    prevDefault(e);
                    self.blur(); }
            }
        });
        aeh(d, 'keydown', function(e) {
            var k = fkey(e);
            if (k == 9 && g.onTabSetValue === undefined ? _GLConfig.input_on_tab_set_value : g.onTabSetValue) {
                if (g.showDate || g.showTime) {
                    var s = selectedDT || 0;
                    if (!s) {
                        s = strtags(d.innerHTML).replace(/&nbsp;/g, '');
                        if (s.search(/m(on)*th|day|y(ea)*r|q(uar)*t(e)*r|h(ou)*r|min|sec/i) >= 0 && s.search(/n(e)*xt|prev|last|past|ago|later|this/i) < 0) s += ' ' + (g.dateBackwards ? 'ago' : 'later');
                        if (s.length) s = new Date().parseDate(s);
                    }
                    if (s) { currentDT = selectedDT = s;
                        self.setValue(s); }
                }
                if (g.isDD && strtags(d.innerHTML.replace(/&nbsp;/g, '')).length) {
                    var s = first(d);
                    if (s) {
                        var flag = false;
                        while (s) {
                            if (s.innerHTML.replace(/&nbsp;/g, '').trim().length && !s._data) { flag = true;
                                break; }
                            s = next(s); } } else { flag = true;
                        s = ce('div');
                        s.innerHTML = d.innerHTML; }
                    if (flag) {
                        if (first(dd) && first(dd)._data[dpf[0]].toString().toLowerCase().search(s.innerHTML.toLowerCase()) == 0) self.setValue(first(dd)._data);
                        else if (g.allowUnlisted === undefined ? _GLConfig.input_allow_unlisted : g.allowUnlisted) self.setValue(s.innerHTML);
                        else if (first(dd)) {
                            var t = first(dd);
                            while (t) {
                                if (t._data[dpf[0]].toLowerCase().trim() == s.innerHTML.toLowerCase()) { self.setValue(t._data);
                                    break; }
                                t = next(t); }
                            if (!t) self.setValue(first(dd)._data); }
                    }
                }
            }
            if ((g.showDate || g.showTime) && (k == 9)) { self.closeDateTime(); }
            if (g.isDD && (k == 9)) { self.closeDD(); }
        });
    }
    this.addDummyButton = function() {
        var t = self.dBtn = ce('button');
        t.style.position = 'absolute';
        t.style.padding = '0px';
        t.style.height = '1px';
        t.style.width = '1px';
        t.style.top = '0px';
        t.style.opacity = '0';
        t.style.filter = 'alpha(opacity=0)';
        aeh(t, 'blur', function(e) {
            if (gparent(self.dBtn)) del(self.dBtn); });
    }
    this.blur = function() {
        if (self.inFocus) {
            if (!gparent(self.dBtn)) ac(rel, self.dBtn);
            self.dBtn.focus(); }
        if (self.isDDOpen && g.noKeyboard) self.closeDD();
    }
    this.setFocus = function() {
        if (g.notEditable || g.noKeyboard) return;
        d.focus();
        this.inFocus = true;
        if (g.isPasswordMobile) return this;
        if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
            var r = document.createRange();
            r.selectNodeContents(g.isDD && selected.length && last(d) ? last(d) : d);
            r.collapse(false);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(r);
        } else if (typeof document.body.createTextRange != "undefined") {
            var t = document.body.createTextRange();
            t.moveToElementText(last(d) || d);
            t.collapse(false);
            t.select();
        }
        if (g.onFocus) g.onFocus();
        return this;
    }
    this.getPlaceholder = function() {
        return g.ph; }
    this.setMandatory = function(v) { g.man = v == undefined ? g.man : v;
        man.innerHTML = g.man ? g.man : '';
        this.setTitle(); }
    this.openDateTime = function() {
        if (g.notEditable) return;
        if (gparent(dtp)) del(dtp);
        ac(gt('body')[0], dtp), p = getPos(d);
        dtp.style.top = p.top + p.h + (g.datepickerBottomOffset === undefined ? _GLConfig.datepicker_bottom_offset : Math.abs(g.datepickerBottomOffset) <= 1 ? -dtp.clientHeight * g.datepickerBottomOffset : g.datepickerBottomOffset) + 'px';
        dtp.style.left = p.left + (g.datepickerLeftOffset === undefined ? _GLConfig.datepicker_left_offset : Math.abs(g.datepickerLeftOffset) <= 1 ? dtp.clientWidth * g.datepickerLeftOffset : g.datepickerLeftOffset) + 'px';
        self.renderCalendar();
    }
    this.closeDateTime = function(blurFlag) {
        if (!gparent(dtp)) return;
        var s = selectedDT || 0;
        if (!s) { s = strtags(d.innerHTML).replace(/&nbsp;/g, '');
            if (s.search(/m(on)*th|day|y(ea)*r|q(uar)*t(e)*r|h(ou)*r|min|sec/i) >= 0 && s.search(/n(e)*xt|prev|last|past|ago|later|this/i) < 0) s += ' ' + (g.dateBackwards ? 'ago' : 'later');
            if (s.length) s = new Date().parseDate(s); }
        if (s) { currentDT = selectedDT = s;
            self.setValue(s); }
        del(dtp);
        if (blurFlag) self.blur();
        if (g.setValueOnBlur && g.onSetValue && self.getValue()) self.setValue(self.getValue());
    }
    this.initDate = function() {
        if (!g.showDate) return;
        var top = self.dtTop = ce('div', 'input_dt_top_' + g.idp, dtp);
        top.className = 'input_dt_top_' + g.clp + ' input_dt_top_' + g.theme;
        var m1 = ce('div', 'input_dt_top_month_' + g.idp, top);
        m1.className = 'input_dt_top_month_' + g.clp + ' input_dt_top_month_' + g.theme;
        var m2d = ce('div', 'input_dt_top_month_left_' + g.idp, m1);
        m2d.className = 'input_dt_top_month_left_' + g.clp + ' input_dt_top_month_left_' + g.theme;
        top.month = new Input({
            con: m1,
            idp: 'month_' + g.idp,
            clp: 'month_' + g.clp,
            theme: 'month_' + g.theme,
            isDD: true,
            dp: clone(Date.prototype.sm),
            hideCancel: true,
            ddCancel: false,
            value: (currentDT || new Date()).format('M'),
            noKeyboard: true,
            onSetValue: function(v, vv) {
                if (!top.month) return;
                if (!vv) { top.month.setValue((currentDT || new Date()).format('M'));
                    return; }
                var m = currentDT.format('M');
                if (m == vv) return;
                currentDT.setMonth(Date.prototype.sm.indexOf(vv));
                self.renderCalendar();
            }
        });
        top.month.lastSetValue = null;
        var m4d = ce('div', 'input_dt_top_month_right_' + g.idp, m1);
        m4d.className = 'input_dt_top_month_right_' + g.clp + ' input_dt_top_month_right_' + g.theme;

        var y1 = ce('div', 'input_dt_top_year_' + g.idp, top);
        y1.className = 'input_dt_top_year_' + g.clp + ' input_dt_top_year_' + g.theme;
        var y2d = ce('div', 'input_dt_top_year_left_' + g.idp, y1);
        y2d.className = 'input_dt_top_year_left_' + g.clp + ' input_dt_top_year_left_' + g.theme;
        var ydp = [],
            dMax = g.val ? g.val.max : new Date(),
            dMin = g.val ? g.val.min : new Date().addy(-10);
        dMax = dMax.format('Y') * 1;
        dMin = dMin.format('Y') * 1;
        if (dMin > dMax) dMin = dMax - 1;
        while (dMax >= dMin) ydp.push(dMax--);
        if (!ydp.length) ydp = [new Date().format('Y')];
        top.year = new Input({
            con: y1,
            idp: 'year_' + g.idp,
            clp: 'year_' + g.clp,
            theme: 'year_' + g.theme,
            isDD: true,
            dp: ydp,
            hideCancel: true,
            ddCancel: false,
            value: (currentDT || new Date()).format('Y'),
            noSearch: true,
            noKeyboard: true,
            onSetValue: function(v, vv) {
                if (!top.year) return;
                if (!vv) { top.year.setValue((currentDT || new Date()).format('Y'));
                    return; }
                var y = currentDT.format('Y');
                if (y == vv) return;
                currentDT.setFullYear(vv);
                self.renderCalendar();
            }
        });
        top.year.lastSetValue = null;
        var y4d = ce('div', 'input_dt_top_year_right_' + g.idp, y1);
        y4d.className = 'input_dt_top_year_right_' + g.clp + ' input_dt_top_year_right_' + g.theme;

        var cal = self.cal = ce('div', 'input_dt_cal_hold_' + g.idp, dtp);
        cal.className = 'input_dt_cal_hold_' + g.clp + ' input_dt_cal_hold_' + g.theme;
        aeh(m2d, 'click', function(e) { prevDefault(e);
            stopProp(e);
            currentDT.addM(-1);
            self.renderCalendar(); });
        aeh(m4d, 'click', function(e) { prevDefault(e);
            stopProp(e);
            currentDT.addM(1);
            self.renderCalendar(); });
        aeh(y2d, 'mousedown', function(e) { prevDefault(e);
            stopProp(e);
            subtractYear(e); });
        aeh(y4d, 'mousedown', function(e) { prevDefault(e);
            stopProp(e);
            addYear(e); });
        aeh(d, 'keyup', function(e) {
            var k = fkey(e);
            if (k != 13 || g.multiline) return;
            var v = self.getValue();
            if (!v) { currentDT = new Date();
                selectedDT = 0;
                self.closeDateTime(true);
                return; }
            if (v.search(/m(on)*th|day|y(ea)*r|q(uar)*t(e)*r|h(ou)*r|min|sec/i) >= 0 && v.search(/n(e)*xt|prev|last|past|ago|later|this/i) < 0) v += ' ' + (g.dateBackwards ? 'ago' : 'later');
            var t1 = new Date().parseDate(v);
            currentDT = t1 || new Date();
            selectedDT = t1 ? new Date().parseDate(v) : 0;
            self.renderCalendar();
            self.closeDateTime(true);
        });
        this.renderCalendar();
    }
    this.initTime = function() {
        if (!g.showTime) return;
        var time = this.dtTime = ce('div', 'input_dt_time_' + g.idp, dtp);
        time.className = 'input_dt_time_' + g.clp + ' input_dt_time_' + g.theme;
        var dt = g.value ? g.value.isDate ? g.value : g.value.isString ? new Date().parseDate(g.value) ? new Date().parseDate(g.value) : 0 : 0 : 0;
        time.hours = new Input({
            con: time,
            idp: 'hours_' + g.idp,
            clp: 'hours_' + g.clp,
            theme: 'hours_' + g.theme,
            title: '',
            ph: '',
            man: '',
            isDD: true,
            dp: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            value: (dt || currentDT).format('h A').split(' ')[0],
            ddCancel: false,
            hideCancel: true,
            maxSelect: 1,
            noSearch: true,
            onSetValue: function(v, vv) {
                if (!time.hours) return;
                if (vv === false || !isNumber(vv)) { time.hours.setValue((currentDT ? currentDT.format('h A') : new Date().format('h A')).split(' ')[0]);
                    return; }
                if (!currentDT) currentDT = new Date();
                currentDT.setHours(time.am ? time.am.getValidatedValue() == 'AM' ? vv % 12 : vv % 12 + 12 : vv);
                if (isNumber(time.mins.getValidatedValue())) currentDT.setMinutes(time.mins.getValidatedValue() * 1);
                selectedDT = new Date().parseDate(currentDT.format('d M Y H:I:s A'));
                self.setValue(selectedDT, true);
            },
            noKeyboard: true
        });
        time.hours.lastSetValue = null;
        var t = ce('div');
        t.className = 'input_dt_colon_' + g.clp + ' input_dt_colon_' + g.theme;
        ac(time, t);
        t.innerHTML = ":";
        var mdp = [],
            t = 0,
            delta = g.minsInterval ? isNumber(g.minsInterval) ? g.minsInterval : _GLConfig.input_time_mins_interval : _GLConfig.input_time_mins_interval;;
        while (t < 60) { mdp.push((t < 10 ? '0' : '') + t.toString());
            t += delta * 1; }
        var mVal = dt ? dt.format('I') : -1,
            mInd = mdp.indexOf(mVal);
        if (mInd < 0) mVal = mdp[0];
        time.mins = new Input({
            con: time,
            idp: 'mins_' + g.idp,
            clp: 'mins_' + g.clp,
            theme: 'mins_' + g.theme,
            title: '',
            ph: '',
            man: '',
            isDD: true,
            dp: mdp,
            value: mInd >= 0 ? mVal : dt ? (g.allowUnlisted === undefined ? _GLConfig.input_allow_unlisted : g.allowUnlisted) ? mVal : mVal : mVal,
            ddCancel: false,
            hideCancel: true,
            maxSelect: 1,
            allowUnlisted: true,
            noSearch: true,
            onSetValue: function(v, vv) {
                if (!time.mins) return;
                if (vv === false || !isNumber(vv)) { time.mins.setValue(currentDT ? (g.allowUnlisted === undefined ? _GLConfig.input_allow_unlisted : g.allowUnlisted) ? currentDT.format('I') : mdp[0] : mdp[0]);
                    return; }
                if (!currentDT) currentDT = new Date();
                var hv = time.hours.getValidatedValue();
                if (isNumber(hv)) currentDT.setHours(time.am ? time.am.getValidatedValue() == 'AM' ? hv % 12 : hv % 12 + 12 : hv);
                currentDT.setMinutes(vv);
                selectedDT = new Date().parseDate(currentDT.format('d M Y H:I:s A'));
                self.setValue(selectedDT, true);
            },
            noKeyboard: true
        });
        time.mins.lastSetValue = null;
        time.am = new Input({
            con: time,
            idp: 'am_' + g.idp,
            clp: 'am_' + g.clp,
            theme: 'am_' + g.theme,
            title: '',
            ph: '',
            man: '',
            isDD: true,
            dp: ['AM', 'PM'],
            value: (dt || currentDT).format('h A').split(' ')[1],
            ddCancel: false,
            hideCancel: true,
            maxSelect: 1,
            allowUnlisted: false,
            noSearch: true,
            onSetValue: function(v, vv) {
                if (!time.am) return;
                if (vv === false || (vv != 'AM' && vv != 'PM')) time.am.setValue((currentDT ? currentDT.format('h A') : new Date().format('h A')).split(' ')[1]);
                if (!currentDT) currentDT = new Date();
                var t = time.hours.getValidatedValue();
                if (!t) t = currentDT.getHours();
                currentDT.setHours(vv == 'AM' ? t % 12 : t % 12 + 12);
                selectedDT = new Date().parseDate(currentDT.format('d M Y H:I:s'));
                self.setValue(selectedDT, true);
            },
            noKeyboard: true
        });
        time.am.lastSetValue = null;
    }
    this.boundDT = function() {
        if (g.val && currentDT) {
            if (g.val.max && g.val.max.getTime() < currentDT.getTime()) { currentDT = new Date().parseDate(g.val.max.format(g.format || 'd M Y'));
                if (selectedDT) selectedDT = new Date(currentDT.format('d M Y H:I:s')); }
            if (g.val.min && g.val.min.getTime() > currentDT.getTime()) { currentDT = new Date().parseDate(g.val.min.format(g.format || 'd M Y'));
                if (selectedDT) selectedDT = new Date(currentDT.format('d M Y H:I:s')); }
        }
    }
    this.renderCalendar = function() {
        if (!g.showDate) return;
        self.boundDT();
        self.dtTop.month.setValue(currentDT.format('M'), true);
        self.dtTop.year.setValue(currentDT.format('Y'), true);
        var cal = self.cal;
        empty(cal);
        var t1 = ce('table', 'input_dt_cal_' + g.idp, cal);
        t1.className = 'input_dt_cal_' + g.clp + ' input_dt_cal_' + g.theme;
        var t2 = ce('tbody');
        ac(t1, t2);
        t1 = t2;
        var data = [new Date().sd],
            ri = -1,
            rj = -1,
            cdt = new Date().parseDate('01 ' + currentDT.format('M Y')),
            curMonth = currentDT.getMonth();
        if (!cdt) cdt = new Date();
        cdt = cdt.addd(-1 * cdt.getDay());
        while (cdt.getMonth() != currentDT.getMonth()) {
            if (!cdt.getDay()) data.push([]);
            data[data.length - 1].push(cdt.getDate());
            cdt.addd(1); }
        while (cdt.getMonth() == currentDT.getMonth()) {
            if (!cdt.getDay()) data.push([]);
            data[data.length - 1].push(cdt.getDate());
            if (selectedDT && cdt.getDate() == selectedDT.getDate()) { ri = data.length - 1;
                rj = data[ri].length - 1; }
            cdt.addd(1); }
        while (data[data.length - 1].length < 7) { data[data.length - 1].push(cdt.getDate());
            cdt.addd(1); }
        for (var i = 0, tp = 0, tn = 0, curFlag = false; i < data.length; i++) {
            var t2 = ce('tr', 'input_dt_cal_tr_' + i + '_' + g.idp, t1);
            for (var j = 0; j < 7; j++) {
                var t3 = ce('td', 'input_dt_cal_td_' + i + '_' + j + '_' + g.idp, t2);
                t3.innerHTML = data[i][j];
                if (i) {
                    if (tp > data[i][j] || data[1][0] == 1) curFlag = true;
                    tp = data[i][j];
                    if (curFlag && tn > data[i][j]) curFlag = false;
                    if (curFlag) tn = data[i][j]; }
                t3.className = 'input_dt_cal_td_' + g.clp + ' input_dt_cal_td_' + g.theme + ' input_dt_cal_td_' + i + '_' + g.clp + ' input_dt_cal_td_' + i + '_' + g.theme + ' input_dt_cal_td_col_' + j + '_' + g.clp + ' input_dt_cal_td_col_' + j + '_' + g.theme + ' input_dt_cal_td_' + (!curFlag && i ? 'de' : '') + 'active_' + g.clp + ' input_dt_cal_td_' + (!curFlag && i ? 'de' : '') + 'active_' + g.theme
                if (i == ri && j == rj) t3.className += ' input_dt_cal_td_sel_' + g.clp + ' input_dt_cal_td_sel_' + g.theme;
                aeh(t3, 'click', function(e) {
                    var s = gc('input_dt_cal_td_sel_' + g.clp);
                    if (s && s.length) s[0].className = s[0].className.replace(/input_dt_cal_td_sel_[a-z,0-9,\_,\-]+\b/gi, '');
                    s = getEvtSrc(e);
                    var n = s.innerHTML * 1;
                    var time = '';
                    if (g.showTime) {
                        var t = self.dtTime,
                            h = t.hours.getValidatedValue(),
                            m = t.mins.getValidatedValue(),
                            am = t.am.getValidatedValue();
                        if (h !== false && m !== false && am !== false) time = h + ":" + m + ":00 " + am; }
                    currentDT = new Date().parseDate(n + ' ' + self.dtTop.month.getValidatedValue() + ' ' + self.dtTop.year.getValidatedValue() + ' ' + time);
                    if (s.className.search(/deactive/) >= 0) currentDT.addM(n > 20 ? -1 : 1);
                    selectedDT = new Date().parseDate(currentDT.format('d M Y H:I:s'));
                    if (!gparent(cancel)) ibe(cancel, d);
                    self.boundDT();
                    self.closeDateTime(true);
                    self.dtTop.month.setValue(currentDT.format("M"));
                    self.dtTop.year.setValue(currentDT.format("Y"));
                });
            }
        }
        if (selectedDT) { selectedDT = new Date().parseDate(currentDT.format('d M Y H:I:s'));
            this.setValue(selectedDT); }
        return this;
    }
    this.setSelectedDT = function(v) {
        selectedDT = v ? v.isDate ? v : new Date().parseDate(v) || 0 : selectedDT;
        this.renderCalendar();
    }
    this.openDD = function() {
        if (!dp || !dp.length || this.isDDOpen || g.notEditable) return this;
        var v = this.getValidatedValue();
        if (!v && !(g.openDDOnFocus === undefined ? _GLConfig.open_dd_on_focus : g.openDDOnFocus)) return this;
        if (gparent(dd)) del(dd);
        ac(gt('body')[0], dd);
        var p = getPos(d);
        dd.style.top = p.top + p.h + (g.dropdownBottomOffset === undefined ? _GLConfig.dropdown_bottom_offset : g.dropdownBottomOffset) + 'px';
        dd.style.left = p.left + (g.dropdownLeftOffset === undefined ? _GLConfig.dropdown_left_offset : Math.abs(g.dropdownLeftOffset) <= 1 ? dd.clientWidth * g.dropdownLeftOffset : g.dropdownLeftOffset) + 'px';
        if (g.sizeDDToParent === undefined ? _GLConfig.size_dd_to_parent : g.sizeDDToParent) { dd.style.width = p.w + 'px'; }
        this.isDDOpen = true;
        if (gparent(dds)) del(dds);
        if (curThreshold) { curThreshold = 0;
            return this.setDP(dp); }
        return this;
    }
    this.closeDD = function() {
        unsetHighlight();
        self.curHighlight = 0;
        self.curSearch = '';
        self.curThreshold = 0;
        if (gparent(dd)) del(dd);
        if (gparent(dds)) del(dds);
        self.isDDOpen = false;
        return this;
    }
    this.setDP = function(v) {
        if (v === undefined || v === null) return this;
        if (!v.isArray) v = [v];
        dp = v;
        if (!g.noSearch && !g.curSearch) g.dp = clone(v);
        if (!dp.length && !selected.length) { empty(dd);
            empty(dds);
            elements = [];
            selected = [];
            this.closeDD();
            return this; }
        if (!this.isDDOpen && this.inFocus) this.openDD();
        empty(dd);
        empty(dds);
        elements = [];
        var getItemString = function(data) {
            for (var i = 0, t = ''; i < dpf.length; i++)
                if (data[dpf[i]] !== null && data[dpf[i]] !== undefined) { t += data[dpf[i]].toString().toLowerCase(); }
            return t;
        }
        var selHash = {},
            selTemp = {};
        for (var i = 0; i < selected.length; i++) {
            var t = getItemString(selected[i]);
            selHash[t] = selected[i]._id;
            selTemp[t] = selected[i]; }

        var idHash = {},
            updateID = function(data) {
                if (data[dpf[0]] === undefined || data[dpf[0]] === null) {
                    var x = {};
                    x[dpf[0]] = data;
                    data = x; }
                var t = getItemString(data);
                if (selHash[t]) { data._id = selHash[t];
                    idHash[data._id] = 1;
                    selTemp[t] = 0; } else {
                    var id = randomStr(10);
                    while (idHash[id]) id = randomStr(10);
                    idHash[id] = 1;
                    data._id = id; }
                return data;
            }
        for (var i = 0; i < dp.length; i++) {
            if (dp[i].isArray) {
                for (var j = 0; j < dp[i].length; j++) dp[i][j] = updateID = (dp[i][j]); } else dp[i] = updateID(dp[i]);
        }
        for (var t in selTemp)
            if (selTemp[t]) dp.push(selTemp[t]);
        selTemp = null;

        var onMouseOver = function(e) {
                var s = getEvtSrc(e);
                while (s && s != gt('body')[0] && s.id.search(/input_dd_el_hold/i) < 0) s = gparent(s);
                if (!s || s == gt('body')[0] || s._isSubMenu) return;
                if (s._hasSubMenu) {
                    empty(dds);
                    for (var i = 0, lx = elements.length, flag = false; i < lx; i++) {
                        if (elements[i]._data._id == s._data._id) { flag = true;
                            continue; }
                        if (flag) {
                            if (elements[i]._isSubMenu) ac(dds, elements[i]);
                            else { flag = false;
                                break; } }
                    }
                    if (!first(dds)) return;
                    if (gparent(dds)) del(dds);
                    ac(gt('body')[0], dds);
                    var p = getPos(s);
                    dds.style.left = p.left + p.w + (g.subMenuLeftGap === undefined ? _GLConfig.submenu_left_gap || 0 : g.subMenuLeftGap) + 'px';
                    dds.style.top = p.top + 'px';
                } else if (gparent(dds)) del(dds);
            },
            onElementClick = function(e) {
                var s = getEvtSrc(e);
                while (s && s.id.search(/input_dd_el_hold/i) < 0) s = gparent(s);
                if (!s) return;
                prevDefault(e);
                stopProp(e);
                if (!g.noKeyboard) self.setFocus();
                if (s._hasSubMenu || s._isSubMenu) {
                    if (!gparent(dds)) ac(gt('body')[0], dds); } else if (gparent(dds)) del(dds);
                self.setValue(s._data);
            };
        for (var i = 0, lx = dp.length; i < lx; i++) {
            if (!dp[i].isArray) {
                if (curThreshold && dp[i][rankVar] < curThreshold) continue; } else if (dp[i].length) {
                for (var j = 0; j < dp[i].length; j++) {
                    dp[i][j]._isSubMenu = true;
                    if (curThreshold && dp[i][j][rankVar] < curThreshold) continue;
                    el = (g.renderFun || this.renderDD)(dp[i][j], i * 1000 + j, maxSelect, false, true);
                    if (!el) continue;
                    elements.push(el);
                    aeh(el, 'mouseover', onMouseOver);
                    aeh(el, 'click', onElementClick);
                }
                continue;
            }
            var el = (g.renderFun || this.renderDD)(dp[i], i, maxSelect, i < lx - 1 ? dp[i + 1].isArray ? true : false : false, false);
            if (!el) continue;
            ac(dd, el);
            elements.push(el);
            aeh(el, 'mouseover', onMouseOver);
            aeh(el, 'click', onElementClick);
            if (checkSelected(el._data) && el.className.search(/selected|partial/i) < 0) {
                el.className += ' input_dd_el_hold_selected_' + g.clp + ' input_dd_el_hold_selected_' + g.theme;
                var t = first(el);
                if (t && maxSelect > 1 && !!~t.className.search(/_check_/i) >= 0) { t.className += ' input_dd_el_check_selected_' + g.clp + ' input_dd_el_check_selected_' + g.theme;
                    t = next(t); }
                for (var j = 0; j < dpf.length; j++)
                    if (t) {
                        t.className += ' input_dd_el_selected_' + g.clp + ' input_dd_el_selected_' + g.theme;
                        t = next(t);
                    }
            }
            if (el._isSubMenu) updateMenuParent(el);
        }
        for (i = 0; i < selected.length; i++)
            if (!checkSelected(selected[i])) { selected.splice(i--, 1); }
        if (!this.inFocus) this.closeDD();
        return this;
    }
    this.renderDD = function(o, i, maxSelect, hasSubMenu, isSubMenu) {
        var el = ce('div', 'input_dd_el_hold_' + i + '_' + g.idp);
        el.className = 'input_dd_el_hold_' + g.clp + ' input_dd_el_hold_' + g.theme + ' input_dd_el_hold' + (i % 2 ? 'even' : 'odd') + g.clp + ' input_dd_el_' + (i % 2 ? 'even' : 'odd') + g.theme + (isSubMenu ? ' input_dd_submenu_el_' + g.clp + ' input_dd_submenu_el_' + g.theme : '');
        el._data = o;
        el._hasSubMenu = hasSubMenu;
        el._isSubMenu = isSubMenu;
        var t1 = ce('div', 'input_dd_el_check_' + i + '_' + g.idp, el);
        t1.className = 'input_dd_el_check_' + g.clp + ' input_dd_el_check_' + g.theme;
        if (maxSelect < 2) t1.style.display = 'none';
        for (var j = 0; j < dpf.length; j++) {
            if (!o[dpf[j]]) continue;
            t1 = ce('div', 'input_dd_el_' + i + '_' + j + '_' + g.idp, el);
            t1.className = 'input_dd_el_' + g.clp + ' input_dd_el_' + j + '_' + g.clp + ' input_dd_el_' + g.theme + ' input_dd_el_' + j + '_' + g.theme;
            if (isNumber(o[dpf[j]])) o[dpf[j]] = o[dpf[j]].toString();
            if (o[dpf[j]].isString) t1.innerHTML = o[dpf[j]];
            else ac(t1, o[dpf[j]]);
        }
        if (hasSubMenu) { t1 = ce('div', 'input_dd_el_dir_' + i + '_' + g.idp, el);
            t1.className = 'input_dd_el_dir_' + g.clp + ' input_dd_el_dir_' + g.clp + ' input_dd_el_dir_' + g.theme; }
        return el;
    }
    this.searchDD = function(s) {
        if (g.noSearch) return this;
        if (gparent(dds)) del(dds);
        if (!s || !s.length) { curThreshold = 0;
            return this.setDP(dp); }
        curThreshold = threshold;
        s = s.trim().toLowerCase();
        var rx = new RegExp(s, 'i'),
            maxRank = 0,
            rankElement = function(data) {
                for (var i = 0, score = 0, sf = searchFields, lx = sf.length; i < lx; i++)
                    if (data[sf[i]] && data[sf[i]].isString) {
                        if (s == data[sf[i]].toLowerCase()) { score += 10;
                            continue; }
                        var t = data[sf[i]].search(rx);
                        if (t == 0) { score += 10;
                            continue; }
                        if (t > 0) { score += 8.5;
                            continue; }
                        t = leven(data[sf[i]].toLowerCase(), s);
                        score += Math.max(8.5 - t, 0);
                    }
                score = score / sf.length / 10;
                maxRank = Math.max(score, maxRank);
                data[rankVar] = score;
                return data;
            }
        for (var i = 0; i < dp.length; i++) {
            if (!dp[i].isArray) dp[i] = rankElement(dp[i]);
            else dp.splice(i--, 1);
            if (i < dp.length - 1 && dp[i + 1].isArray) {
                var r = dp[i + 1];
                for (var j = 0, max = 0; j < r.length; j++) { r[j] = rankElement(r[j]);
                    max = Math.max(r[j][rankVar], max); }
                dp[i][rankVar] = Math.max(dp[i][rankVar], max);
                r[rankVar] = dp[i][rankVar] - 0.0000001;
                dp[i]._submenuArray = r;
            }
        }
        if (maxRank > 0)
            for (i = 0; i < dp.length; i++) dp[i][rankVar] = dp[i][rankVar] / maxRank;
        dp = dp.sort(objsort(rankVar, true));
        for (i = 0; i < dp.length; i++)
            if (dp[i]._submenuArray) {
                var r = dp[i]._submenuArray;
                dp[i]._submenuArray = 0;
                dp.splice(++i, 0, r); }
        unsetHighlight();
        this.setDP(dp);
        if (elements.length && elements[0]._hasSubMenu) {
            empty(dds);
            for (var i = 0, lx = elements.length, flag = false; i < lx; i++) {
                if (elements[i]._data._id == s._data._id) { flag = true;
                    continue; }
                if (flag) {
                    if (elements[i]._isSubMenu) ac(dds, elements[i]);
                    else { flag = false;
                        break; } }
            }
        }
        return dp;
    }
    g.isPasswordMobile = g.isPassword && isIOSAndroid ? true : false;
    var self = this;
    this.g = g;
    var hold = this.hold = ce('div');
    ac(g.con, hold);
    var rel = this.rel = ce('div');
    ac(hold, rel);
    rel.style.position = 'relative';
    var suggest = this.suggest = ce('div');
    if (g.isDD) ac(rel, suggest);
    var d = this.d = ce(g.isPasswordMobile ? 'input' : 'div');
    ac(rel, d);
    if (g.isPasswordMobile) d.type = 'password';
    else { d.contentEditable = g.notEditable ? false : g.noKeyboard ? false : true; }
    d.spellcheck = g.spellcheck === undefined ? _GLConfig.input_spellcheck : g.spellcheck;
    d.setAttribute('autocapitalize', g.autocapitalize === undefined ? _GLConfig.input_autocapitalize : g.autocapitalize);
    d.setAttribute('autocorrect', g.autocorrect === undefined ? _GLConfig.input_autocorrect : g.autocorrect);
    d.setAttribute('autocomplete', g.autocomplete === undefined ? _GLConfig.input_autocomplete : g.autocomplete);
    aeh(d, 'keydown', function(e) {
        var k = fkey(e);
        if (k == 13) {
            if (!g.multiline) { prevDefault(e);
                stopProp(e); }
            if (g.onEnter && !g.isDD) g.onEnter(self.getValue(), self.getValidatedValue(), e);
            if (!g.showDate && !g.showTime && !g.isDD && g.onSetValue && (g.setValueOnEnter === undefined ? _GLConfig.input_enter_setValue && !g.multiline : g.setValueOnEnter)) { g.onSetValue(self.getValue(), self.getValidatedValue(), self);
                d.blur(); }
        }
    });
    var man = this.man = ce('span');
    g.man = g.man || '';
    var tit = this.tit = ce('div');
    g.title = g.title || '';
    var ph = this.ph = ce('span');
    g.ph = g.ph || '';
    var cancel = this.cancel = ce('img');
    cancel.src = _GLMedia.input_cancel;
    this.initCancel();
    var dtp = this.dtp = ce('div');
    var dd = this.dd = ce('div');
    this.addDummyButton();
    var selectedDT = g.selectedDT ? g.selectedDT.isDate ? g.selectedDT : new Date().parseDate(g.selectedDT) : '';
    g.dateFormat = g.dateFormat ? g.dateFormat : g.showDate ? 'd M Y' + (g.showTime ? ' H:I A' : '') : g.showTime ? 'H:I A' : 'd M Y';
    var subtractYear = function() { currentDT.addy(-1);
        self.renderCalendar();
        self.dtTimer = setTimeout(subtractYear, 100); }
    var addYear = function() { currentDT.addy(1);
        self.renderCalendar();
        self.dtTimer = setTimeout(addYear, 100); }
    var currentDT = selectedDT.isDate ? new Date().parseDate(selectedDT.format('d M Y H:I:s')) : new Date();
    if (g.showDate || g.showTime) this.initDate();
    this.initTime();
    if (g.isDD) {
        var maxSelect = this.maxSelect = g.maxSelect || 1;
        var minSelect = this.minSelect = g.minSelect || 0;
        var dpf = g.dpf ? g.dpf.isArray ? g.dpf : [g.dpf] : ['_name'];
        var searchFields = this.searchFields = g.searchFields ? g.searchFields.isArray ? g.searchFields : [g.searchFields] : dpf;
        var rankVar = this.rankVar = g.rankVar || '_rank';
        var dp = this.dp = [];
        var threshold = this.threshold = g.threshold === undefined ? _GLConfig.input_search_threshold : g.threshold;
        var curThreshold = 0;
        if (g.dpFunction) g.dp = g.dpFunction.apply(this, [g]);
        g.dp = clone(g.dp ? g.dp.isArray ? g.dp : [g.dp] : []);
        dp = clone(g.dp);
        this.isDDOpen = false;
        var elements = this.elements = [];
        var dds = ce('div', 'input_dd_submenu_hold_' + g.idp);
        dds.className = 'input_dd_submenu_hold_' + g.clp + ' input_dd_submenu_hold_' + g.theme;
        var selected = this.selected = [];
        var curSearch = this.curSearch = '';
    }
    this.setID(g.idp);
    this.setClass(g.clp, g.theme);
    if (!g.man) g.man = '';
    if (g.title && !g.title.text) g.title = { text: g.title, pos: 1 };
    this.setMandatory();
    g.ph = (g.ph && g.ph.length ? g.ph : _GLConfig.input_autohide_title ? g.title.text : '') || '';
    this.initEvents();
    this.setPlaceholder(g.ph);
    if (g.isDD) this.setDP(g.dp);
    if (g.value !== null && g.value !== undefined && g.value !== false) {
        if (g.isDD && !dp.length) this.setDP(g.value.isArray ? g.value : [g.value]);
        this.setValue(g.value, true); }
    this.initHint();
    this.who = 'Input';
    return this;
}

function Hint(g) {
    if (!g.con || !g.idp || !g.clp) return;
    if (g.con.isString) g.con = gi(g.con);
    if (!g.con) return;
    this.setID = function(id) {
        g.idp = id || g.idp;
        hold.id = 'hint_hold_' + g.idp;
        d.id = 'hint_' + g.idp;
        dir.id = 'hint_dir_' + g.idp;
        return this;
    }
    this.setClass = function(clp, theme) {
        if (clp) g.clp = clp;
        else clp = g.clp;
        if (!theme) theme = g.theme;
        if (!theme) g.theme = theme = 'default';
        hold.className = 'hint_hold_' + g.clp + ' hint_hold_' + theme + ' hint_transition_' + theme;
        d.className = 'hint_' + g.clp + ' hint_' + theme;
        var l = g.pos.loc;
        dir.className = 'hint_dir_' + g.clp + ' hint_dir_' + (l <= 3 ? 'down_' : l == 4 ? 'left_' : l < 8 ? 'up_' : 'right_') + theme;
        return this;
    }
    this.setValue = function(v) {
        g.value = v === undefined ? g.value : (v || '');
        d.innerHTML = g.value;
        return this;
    }
    this.setEvents = function() {
        aeh(g.con, 'mouseover', function(e) {
            if (!g.isManual) self.showHint(e); });
        aeh(g.con, 'mouseout', function(e) {
            if (!g.isManual) self.hideHint(e); });
    }
    this.showHint = function(e) {
        showTimer = setTimeout(function(e) {
            if (hideTimer) clearTimeout(hideTimer);
            showTimer = 0;
            hold.className = hold.className.replace(/hint_hold_hide_[a-z,0-9,\_,\-]+\b/gi, '');
            if (gparent(hold)) del(hold);
            ac(gt('body')[0], hold);
            var p = getPos(g.con),
                l = g.pos.loc,
                o = g.pos.off,
                gap = g.pos.gap,
                w = hold.clientWidth,
                h = hold.clientHeight;
            if (l <= 3) { hold.style.top = p.top - h - gap + 'px'; } else if (l == 4 || l == 8) { hold.style.top = p.top + p.h / 2 - h / 2 + 'px'; } else { hold.style.top = p.top + p.h + gap + 'px'; }
            hold.style.left = p.left + (l == 1 || l == 7 ? 0 : l == 2 || l == 6 ? p.w / 2 - w / 2 : l == 3 || l == 5 ? p.w - w : l == 4 ? p.w + gap : -w - gap) + (l == 4 || l == 8 ? 0 : o) + 'px';
            if (l <= 3) { dir.style.top = h - 1 + 'px'; } else if (l == 4 || l == 8) dir.style.top = h / 2 - g.pos.dirWidth / 2 + 'px';
            else dir.style.top = 1 - g.pos.dirHeight + 'px';
            dir.style.left = (l == 1 || l == 2 || l == 6 || l == 7 ? g.pos.dirOffset : l == 3 || l == 5 ? w - g.pos.dirOffset : l == 4 ? 1 - g.pos.dirHeight : w - 1) + 'px';

            if (g.autoHideHint === undefined ? _GLConfig.hint_autohide : g.autoHideHint) hideTimer = setTimeout(function(e) {
                if (gparent(hold)) del(hold);
                hideTimer = 0; }, g.hideAfter || _GLConfig.hint_autohide_duration);
            if (g.con.documentOffsetTop) {
                var top = g.con.documentOffsetTop() - (window.innerHeight / 2);
                window.scrollTo(0, top); }

        }, g.showAfter === undefined ? _GLConfig.hint_show_after : g.showAfter, e);
        return this;
    }
    this.hideHint = function(e) {
        if (showTimer) { clearTimeout(showTimer);
            return this; }
        hold.className += ' hint_hold_hide_' + g.theme;
        hideTimer = setTimeout(function(e) {
            if (gparent(hold)) del(hold);
            hideTimer = 0; }, g.hideAfter || _GLConfig.hint_autohide_duration);
        return this;
    }
    this.moveHint = function(e) {

    }
    var self = this;
    this.g = g;
    var hold = this.hold = ce('div');
    var hold2 = ce('div');
    ac(hold, hold2);
    hold2.style.position = 'relative';
    var d = this.d = ce('div');
    ac(hold2, d);
    var dir = this.dir = ce('div');
    if (_GLConfig.hint_show_direction) ac(hold2, dir);
    var hideTimer = 0,
        showTimer = 0;
    this.setID();
    this.setClass(g.clp, g.theme);
    this.setValue();
    this.setEvents();
    this.who = 'Hint';
    return this;
}

function BtnGrp(g) {
    if (!g.con || !g.idp || !g.clp || !g.dp) return;
    if (g.con.isString) g.con = gi(g.con);
    if (!g.con) return;
    g.dp = clone(g.dp);
    this.setID = function(id) {
        g.idp = id || g.idp;
        hold.id = 'btngrp_hold_' + g.idp;
        d.id = 'btngrp_' + g.idp;
        tit.id = 'btngrp_title_' + g.idp;
        man.id = 'btngrp_man_' + g.idp;
        return this;
    }
    this.setClass = function(clp, theme) {
        if (clp) g.clp = clp;
        else clp = g.clp;
        if (!theme) theme = g.theme;
        if (!theme) g.theme = theme = 'default';
        hold.className = 'btngrp_hold_' + g.clp + ' btngrp_hold_' + theme;
        d.className = 'btngrp_' + g.clp + ' btngrp_' + theme;
        tit.className = 'btngrp_title_' + g.clp + ' btngrp_title_' + theme;
        man.className = 'btngrp_man_' + g.clp + ' btngrp_man_' + theme;
        return this;
    }
    this.setValue = function(v, ignoreOnSetValue) {
        if (v === undefined || (v.isArray && !v.length)) return this;
        if (!v.isArray) v = [v];
        for (var j = 0; j < v.length; j++) {
            for (var i = 0; i < g.dp.length; i++)
                if ((g.dp[i][g.dpf] || g.dp[i]) == (v[j][g.dpf] || v[j])) {
                    if (self.selectedIndex.indexOf(i) >= 0) return this;
                    if (self.selectedIndex.length == g.maxSelect) {
                        var b = btns[self.selectedIndex[0]];
                        if (!g.isCheckBox) b.className = b.className.replace(/btngrp_btn_selected_[a-z,0-9,\_,\-]+\b/gi, '');
                        else {
                            b.className = b.className.replace(/btngrp_ehold_selected_[a-z,0-9,\_,\-]+\b/gi, '');
                            first(b).className = first(b).className.replace(/btngrp_check_selected_[a-z,0-9,\_,\-]+\b/gi, '');
                            last(b).className = last(b).className.replace(/btngrp_content_selected_[a-z,0-9,\_,\-]+\b/gi, '');
                        }
                        self.selectedIndex.splice(0, 1);
                        self.selected.splice(0, 1);
                    }
                    var b = btns[i];
                    self.selected.push(v[j]);
                    self.selectedIndex.push(i);
                    if (!g.isCheckBox) { b.className += ' btngrp_btn_selected_' + g.clp + ' btngrp_btn_selected_' + g.theme; } else {
                        b.className += ' btngrp_ehold_selected_' + g.clp + ' btngrp_ehold_selected_' + g.theme;
                        first(b).className += ' btngrp_check_selected_' + g.clp + ' btngrp_check_selected_' + g.theme;
                        last(b).className += ' btngrp_content_selected_' + g.clp + ' btngrp_content_selected_' + g.theme;
                    }
                    break;
                }
        }
        if (!ignoreOnSetValue && _GLConfig.input_programmatic_onSetValue && g.onSetValue) g.onSetValue(this.getValue(), this.getValidatedValue(), this);
        return this;
    }
    this.unsetValue = function(v) {
        for (var i = 0; i < g.dp.length; i++)
            if ((g.dp[i][g.dpf] || g.dp[i]) == v) {
                var b = btns[i];
                if (self.selectedIndex.indexOf(i) < 0) return this;
                self.selected.splice(i, 1);
                self.selectedIndex.splice(i, 1);
                if (!g.isCheckBox) b.className = b.className.replace(/btngrp_btn_selected_[a-z,0-9,\_,\-]+\b/gi, '');
                else {
                    b.className = b.className.replace(/btngrp_ehold_selected_[a-z,0-9,\_,\-]+\b/gi, '');
                    first(b).className = first(b).className.replace(/btngrp_check_selected_[a-z,0-9,\_,\-]+\b/gi, '');
                    last(b).className = last(b).className.replace(/btngrp_content_selected_[a-z,0-9,\_,\-]+\b/gi, '');
                }
                break;
            }
        return this;
    }
    this.clearValue = function(isProgrammatic) {
        for (var i = 0; i < g.dp.length; i++) {
            var b = btns[i];
            if (!g.isCheckBox) b.className = b.className.replace(/btngrp_btn_selected_[a-z,0-9,\_,\-]+\b/gi, '');
            else {
                b.className = b.className.replace(/btngrp_ehold_selected_[a-z,0-9,\_,\-]+\b/gi, '');
                first(b).className = first(b).className.replace(/btngrp_check_selected_[a-z,0-9,\_,\-]+\b/gi, '');
                last(b).className = last(b).className.replace(/btngrp_content_selected_[a-z,0-9,\_,\-]+\b/gi, '');
            }
        }
        this.selected = [];
        this.selectedIndex = [];
        if (!isProgrammatic && _GLConfig.input_programmatic_onSetValue && g.onSetValue) g.onSetValue(this.getValue(), this.getValidatedValue(), this);
        return this;
    }
    this.initHint = function(v) {
        self.hint = new Hint({ con: hold, idp: g.idp, clp: g.clp, theme: g.theme, value: g.hint || 'Selection required: ' + (g.title.text || '') + (g.man ? '. This input is mandatory' : ''), pos: { loc: g.hintLoc || _GLConfig.hint_loc, off: g.hintOff || _GLConfig.hint_off, gap: g.hintGap || _GLConfig.hint_gap, dirOffset: g.hintDirOffset || _GLConfig.hint_dirOffset, dirHeight: g.hintDirHeight || _GLConfig.hint_dirHeight, dirWidth: g.hintDirWidth || _GLConfig.hint_dirWidth }, isManual: g.manualHint ? true : g.manualHint === undefined ? _GLConfig.input_hint_autoshow ? false : true : false, hideAfter: 1500 });
    }
    this.showHint = function() { this.hint.showHint(); }
    this.hideHint = function() { this.hint.hideHint(); }
    this.getSelected = function() {
        return this.selected;
    }
    this.getSelectedIndex = function() {
        return this.selectedIndex;
    }
    this.getValue = function() {
        var s = [],
            dp = g.dp;
        for (var i = 0; i < self.selectedIndex.length; i++) s.push(dp[self.selectedIndex[i]]);
        return s; }
    this.getHTMLValue = function() {
        return this.getValue(); }
    this.getValidatedValue = function(showHint) {
        if (g.man && !self.selectedIndex.length) {
            if (showHint) this.showHint();
            return false; }
        if (g.minSelect && self.selectedIndex.length < g.minSelect) {
            if (showHint) this.showHint();
            return false; }
        var v = this.getValue();
        if (v.length == 0) return false;
        return v;
    }
    this.setTitle = function(v) {
        g.title = v ? v.text ? v : { text: v, pos: 1 } : g.title;
        tit.innerHTML = g.title.text;
        if (g.man) ac(tit, man);
        if (gparent(tit)) del(tit);
        if (!g.title.pos) return this;
        if (g.title.pos * 1 < 3) ibe(tit, d);
        else ac(hold, tit);
        tit.style.display = g.hideTitle ? 'none' : _GLConfig.btngrp_title_use ? '' : 'none';
        return this;
    }
    this.setTitlePos = function(v) {
        g.title.pos = v || g.title.pos;
        this.setTitle();
        return this;
    }
    this.setDP = function(dp, dpf) {
        if (dp && g.dp != dp) { self.selected = [];
            self.selectedIndex = []; }
        g.dp = dp || g.dp;
        g.dpf = dpf || g.dpf;
        for (var i = 0, lx = btns.length; i < lx; i++)
            if (gparent(btns[i])) del(btns[i]);
        btns = [];
        for (i = 0; i < g.dp.length; i++) {
            if (!g.isCheckBox) {
                var b = ce('button', 'btngrp_' + g.idp + '_' + i, d);
                b.innerHTML = g.dp[i][g.dpf] || g.dp[i];
                b.tabIndex = 0;
                aeh(b, 'blur', function(e) { setTimeout(function() { self.inFocus = false; }, 150) });
                aeh(b, 'focus', function(e) { setTimeout(function() { self.inFocus = true; }, 150) });
                b.className = 'btngrp_btn_' + g.clp + ' btngrp_btn' + (!i ? 'Left' : i == g.dp.length - 1 ? 'Right' : 'Center') + '_' + g.theme + ' btngrp_btn_' + g.theme;
                if (self.selectedIndex.indexOf(i) >= 0 || self.selected.indexOf(g.dp[i][g.dpf] || g.dp[i]) >= 0) b.className += ' btngrp_btn_selected_' + g.clp + ' btngrp_btn_selected_' + g.theme;
                aeh(b, 'click', function(e) {
                    stopProp(e);
                    if (g.notEditable) return;
                    var b = getEvtSrc(e),
                        stopFlag = false,
                        id = b.id,
                        ind = b.id.split('_').pop() * 1;
                    if (self.selectedIndex.indexOf(ind) >= 0) stopFlag = true;
                    if (self.selectedIndex.length == g.maxSelect || stopFlag) {
                        if (!stopFlag) { self.selected.splice(0, 1);
                            b = self.selectedIndex.splice(0, 1)[0];
                            b = btns[b]; } else { b = self.selectedIndex.indexOf(ind);
                            self.selected.splice(b, 1);
                            self.selectedIndex.splice(b, 1);
                            b = btns[ind]; }
                        b.className = b.className.replace(/btngrp_btn_selected_[a-z,0-9,\_,\-]+\b/gi, '');
                    }
                    if (stopFlag) {
                        if (g.onSetValue) g.onSetValue(self.getValue(), self.getValidatedValue()), self;
                        return; }
                    self.selected.push(html_entity_decode(strtags(b.innerHTML)));
                    self.selectedIndex.push(ind);
                    b = btns[ind];
                    b.className += ' btngrp_btn_selected_' + g.clp + ' btngrp_btn_selected_' + g.theme;
                    if (g.onSetValue) g.onSetValue(self.getValue(), self.getValidatedValue(), self);
                });
            } else {
                var b = ce('div', 'btngrp_ehold_' + g.idp + '_' + i, d),
                    t1 = ce('div', 'btngrp_check_' + g.idp + '_' + i, b),
                    t2 = ce('div', 'btngrp_content_' + g.idp + '_' + i, b);
                b.tabIndex = 0;
                aeh(b, 'blur', function(e) { setTimeout(function() { self.inFocus = false; }, 150) });
                aeh(b, 'focus', function(e) { setTimeout(function() { self.inFocus = true; }, 150) });
                aeh(b, 'keypress', function(e) {
                    var k = fkey(e);
                    if (k == 13 || k == 32) getEvtSrc(e).click(); });
                b.className = 'btngrp_ehold_' + g.clp + ' btngrp_ehold_' + g.theme + (self.selectedIndex.indexOf(i) >= 0 || self.selected.indexOf(g.dp[i][g.dpf] || g.dp[i]) >= 0 ? ' btngrp_ehold_selected_' + g.clp + ' btngrp_ehold_selected_' + g.theme : '');
                t1.className = 'btngrp_check_' + g.clp + ' btngrp_check_' + g.theme + (self.selectedIndex.indexOf(i) >= 0 || self.selected.indexOf(g.dp[i][g.dpf] || g.dp[i]) >= 0 ? ' btngrp_check_selected_' + g.clp + ' btngrp_check_selected_' + g.theme : '');
                t2.className = 'btngrp_content_' + g.clp + ' btngrp_content_' + g.theme + (self.selectedIndex.indexOf(i) >= 0 || self.selected.indexOf(g.dp[i][g.dpf] || g.dp[i]) >= 0 ? ' btngrp_content_selected_' + g.clp + ' btngrp_content_selected_' + g.theme : '');
                t2.innerHTML = g.dp[i][g.dpf] || g.dp[i];
                var onSelect = function(e) {
                    if (g.notEditable) return;
                    var b = getEvtSrc(e),
                        stopFlag = false,
                        id = b.id,
                        ind = b.id.split('_').pop() * 1;
                    if (self.selectedIndex.indexOf(ind) >= 0) stopFlag = true;
                    if (self.selectedIndex.length == g.maxSelect || stopFlag) {
                        if (!stopFlag) { self.selected.splice(0, 1);
                            b = self.selectedIndex.splice(0, 1)[0];
                            b = btns[b]; } else { b = self.selectedIndex.indexOf(ind);
                            self.selected.splice(b, 1);
                            self.selectedIndex.splice(b, 1);
                            b = btns[ind]; }
                        b.className = b.className.replace(/btngrp_ehold_selected_[a-z,0-9,\_,\-]+\b/gi, '');
                        first(b).className = first(b).className.replace(/btngrp_check_selected_[a-z,0-9,\_,\-]+\b/gi, '');
                        last(b).className = last(b).className.replace(/btngrp_content_selected_[a-z,0-9,\_,\-]+\b/gi, '');
                    }
                    if (stopFlag) {
                        if (g.onSetValue) g.onSetValue(self.getValue(), self.getValidatedValue(), self);
                        return; }
                    b = btns[ind];
                    self.selected.push(html_entity_decode(strtags(last(b).innerHTML)));
                    self.selectedIndex.push(ind);
                    b.className += ' btngrp_ehold_selected_' + g.clp + ' btngrp_ehold_selected_' + g.theme;
                    first(b).className += ' btngrp_check_selected_' + g.clp + ' btngrp_check_selected_' + g.theme;
                    last(b).className += ' btngrp_content_selected_' + g.clp + ' btngrp_content_selected_' + g.theme;
                    if (g.onSetValue) g.onSetValue(self.getValue(), self.getValidatedValue(), self);
                }
                aeh(b, 'click', onSelect);
                aeh(t1, 'keydown', function(e) {
                    var k = fkey(e);
                    if (k == 32 || k == 13) { onSelect(e);
                        prevDefault(e);
                        stopProp(e); } });
            }
            btns.push(b);
        }
        return this;
    }
    this.addDummyButton = function() {
        var t = self.dBtn = ce('button');
        t.style.position = 'absolute';
        t.style.top = '-1000px';
        aeh(t, 'blur', function(e) {
            if (gparent(self.dBtn)) del(self.dBtn); });
        aeh(document, 'click', function(e) {
            var s = getEvtSrc(e),
                flag = true,
                inpFlag = true;
            while (s) {
                if (s.id == hold.id) { flag = false;
                    prevDefault(e);
                    stopProp(e); }
                if (s.contenteditable == "true" || s.contentEditable == "true" || (s.id && s.id.search(/input_|btngrp_|file_|fv_|tbl_/) == 0)) inpFlag = false;
                s = gparent(s);
                if (!flag) break; }
            if (flag && inpFlag) { self.blur(); }
        });
    }
    this.blur = function() {
        if (self.inFocus) {
            if (!gparent(self.dBtn)) ac(hold, self.dBtn);
            self.dBtn.focus(); }
        self.inFocus = false;
    }
    this.setPlaceholder = function() {
        return this; };
    this.getPlaceholder = function() {
        return ''; }
    this.setFocus = function() {
        if (btns.length) bts[0].focus(); }
    this.setMandatory = function(v) { g.man = v || g.man;
        man.innerHTML = g.man ? g.man : '';
        this.setTitle(); }
    var self = this;
    this.g = g;
    var hold = this.hold = ce('div');
    ac(g.con, hold);
    var d = this.d = ce('div');
    ac(hold, d);
    var tit = this.tit = ce('div');
    g.title = g.title || '';
    var man = this.man = ce('span');
    g.man = g.man || '';
    var btns = this.btns = [];
    this.addDummyButton();
    this.selected = g.selected || [];
    if (this.selected && !this.selected.isArray) this.selected = this.selected = [this.selected];
    this.selectedIndex = g.selectedIndex || [];
    if (this.selectedIndex && !this.selectedIndex.isArray) this.selectedIndex = [this.selectedIndex];
    if (this.selected.length && !this.selectedIndex.length) {
        for (var i = 0; i < this.selected.length; i++) {
            for (var j = 0, flag = false; j < g.dp.length; j++)
                if ((g.dp[j][g.dpf] || g.dp[j]) == this.selected[i]) { this.selectedIndex.push(j);
                    flag = true;
                    break; }
            if (!flag) this.selected.splice(i--, 1);
        }
    } else if (this.selectedIndex.length && !this.selected.length) {
        for (var i = 0; i < this.selectedIndex.length; i++) this.selected.push(g.dp[i][g.dpf] || g.dp[i]);
    }
    this.setID(g.idp);
    this.setClass(g.clp, g.theme);
    if (g.title && !g.title.text) g.title = { text: g.title, pos: 1 };
    this.setMandatory();
    this.setDP(g.dp, g.dpf);
    this.who = 'BtnGrp';
    this.initHint();
    if (g.value) this.setValue(g.value, true);
    return this;
}

function Table(g) {
    this.setID = function(idp) {
        hold.id = 'tbl_hold_' + idp;
        tit.id = 'tbl_title_' + idp;
        man.id = 'tbl_man_' + idp;
        tbl.id = 'tbl_' + idp;
        addRow.id = 'tbl_add_row_' + idp;
        addCol.id = 'tbl_add_col_' + idp;
        noDataMessage.id = 'tbl_noDataMessage_' + idp;
    }
    this.setClass = function(clp, theme) {
        if (clp) g.clp = clp;
        else clp = g.clp;
        if (!theme) theme = g.theme;
        if (!theme) g.theme = theme = 'default';
        hold.className = 'tbl_hold_' + clp + ' tbl_hold_' + theme;
        tit.className = 'tbl_title_' + clp + ' tbl_title_' + theme;
        man.className = 'tbl_man_' + clp + ' tbl_man_' + theme;
        tbl.className = 'tbl_' + clp + ' tbl_' + theme;
        addRow.className = 'tbl_add_row_' + clp + ' tbl_add_row_' + theme;
        addCol.className = 'tbl_add_col_' + clp + ' tbl_add_col_' + theme;
        noDataMessage.className = 'tbl_noDataMessage_' + clp + ' tbl_noDataMessage_' + theme;
    }
    this.setTitle = function(v) {
        g.title = v ? v.text ? v : { text: v, pos: 1 } : g.title;
        if (!g.title) return this;
        tit.innerHTML = g.title.text;
        if (g.man) ac(tit, man);
        if (gparent(tit)) del(tit);
        if (!g.title.pos) return this;
        if (g.title.pos * 1 < 3) ibe(tit, tblHold);
        else ac(hold, tit);
        tit.style.display = g.hideTitle ? 'none' : _GLConfig.btngrp_title_use ? '' : 'none';
        return this;
    }
    this.setTitlePos = function(v) {
        g.title.pos = v || g.title.pos;
        this.setTitle();
        return this;
    }
    this.setMandatory = function(v) { g.man = v || g.man;
        man.innerHTML = g.man ? g.man : '';
        return this.setTitle(); }
    this.setValue = function(v, ignoreOnSetValue) {
        if (!g.notEditable && (!v || (v && v.isArray && !v.length))) {
            for (var i = 0, flag = false; i < dpf.length; i++)
                if (dpf[i].params) { flag = true;
                    break; }
            if (flag) {
                v = [];
                for (i = 0; i < dpf.length; i++)
                    if (dpf[i].params) {
                        for (var j = 0; j < dpf[i].params.length; j++) {
                            if (!v[j]) v[j] = {};
                            v[j][dpf[i].f] = dpf[i].params[j].text;
                        }
                    }
            } else if (g.showAddRow) {
                v = {};
                for (i = 0; i < dpf.length; i++) v[dpf[i].f] = null;
                v = [v];
            } else return this.showNoDataMessage();
        }
        if (!v) return this.showNoDataMessage();
        if (!v.isArray) v = [v];
        if (!v.length) return this.showNoDataMessage();
        this.deleteRows(undefined, true);
        this.hideNoDataMessage();
        for (var i = 0; i < v.length; i++) { this.insertRow(v[i], undefined, ignoreOnSetValue); }
        this.resetIDs();
        if (!ignoreOnSetValue && g.onSetValue) g.onSetValue(this.getValue(), this.getValidatedValue(), this);
    }
    this.setDPF = function(v) {
        if (!v || !v.isArray) return this;
        dpf = this.dpf = v;
        return this;
    }
    this.getValue = function(v) {
        if (g.notEditable) return dp;
        for (var i = 0; i < elements.length; i++)
            for (var j = 0; j < dpf.length; j++) {
                var o = elements[i][j].gl;
                if (o) dp[i][dpf[j].f] = o.getValue();
                else if (!dpf[j].editable) dp[i][dpf[j].f] = elements[i][j].innerHTML;
            }
        return dp;
    }
    var sanitiseReturnDP = function(r) {
        for (var i = 0; i < r.length; i++)
            for (var f in r[i]) {
                if (r[i][f] && r[i][f].nodeName && r[i][f].nodeType) r[i][f] = null; }
        return r;
    }
    this.getValidatedValue = function(stopIfMandatory, row) {
        if (g.notEditable) {
            var r = [];
            for (var i = 0; i < dp.length; i++) {
                for (var j = 0, flag = false; j < dpf.length; j++)
                    if (dp[i][dpf[j].f] !== null && dp[i][dpf[j].f] !== false && dp[i][dpf[j].f] !== undefined) {
                        if (dp[i][dpf[j].f].isString && dp[i][dpf[j].f].replace(/&nbsp;/g, '').trim().length) { flag = true;
                            break; } else if (!dp[i][dpf[j].f].isString) { flag = true;
                            break; }
                    }
                if (flag) r.push(dp[i]);
            }
            return sanitiseReturnDP(r);
        }
        for (var i = 0, flag = false, p = {}; i < dpf.length; i++)
            if (dpf[i].params) {
                for (var j = 0; j < dpf[i].params.length; j++)
                    if (dpf[i].params[j].man) { flag = true;
                        if (!p[i]) p[i] = {};
                        p[i][dpf[i].params[j].text.toString().toLowerCase()] = dpf[i].params[j].text; }
            }
        for (var i = row || 0; i < Math.min(row === undefined ? elements.length - 1 : row, elements.length - 1) + 1; i++)
            for (var j = 0; j < dpf.length; j++) {
                var o = elements[i][j].gl;
                if (o) dp[i][dpf[j].f] = o.getValidatedValue(stopIfMandatory);
                else if (!dpf[j].editable) dp[i][dpf[j].f] = elements[i][j].innerHTML;
                if (dp[i][dpf[j].f] === false && dpf[j].man && stopIfMandatory) return false;
                if (p[j] && p[j][dp[i][dpf[j].f].toString().toLowerCase()] !== undefined) p[j][dp[i][dpf[j].f].toString().toLowerCase()] = 0;
            }
        if (flag && stopIfMandatory) {
            for (var f1 in p)
                for (var f2 in p[f1])
                    if (p[f1][f2]) {
                        var o = elements[0][f1].gl;
                        o.hint.setValue('You need to have this value for ' + dpf[f1].title.toLowerCase() + ' in the table: ' + p[f1][f2]).showHint();
                        return false; }
        }
        var r = [],
            flag = false;
        for (i = 0; i < dp.length; i++) { flag = false;
            for (j = 0; j < dpf.length; j++)
                if (dp[i][dpf[j].f] !== false) { flag = true;
                    break; }
            if (flag) r.push(dp[i]); }
        return r.length ? row !== undefined ? sanitiseReturnDP(r)[row] : sanitiseReturnDP(r) : false;
    }
    this.initEvents = function() {
        aeh(addRow, 'click', function(e) {
            if (g.notEditable) return;
            var o = {};
            for (var i = 0; i < dpf.length; i++) o[dpf[i].f] = '';
            self.insertRow.apply(self, [o]); });
        aeh(addCol, 'click', function(e) {
            if (g.notEditable) return;
            self.insertCol.apply(self, []); });
    }
    this.getRows = function(rows) {
        if (rows === undefined || rows === null) return elements;
        if (!rows.isArray) rows = [rows];
        var r = [],
            h = {};
        for (var i = 0; i < rows.length; i++)
            if (!h[rows[i]] && elements[rows[i]]) { r.push(elements[rows[i]]);
                h[rows[i]] = 1; }
        return r;
    }
    this.getCols = function(cols, includeHeader) {
        if (cols === undefined || cols === null) return elements;
        if (!cols.isArray) cols = [cols];
        var r = [],
            h = {};
        if (includeHeader) {
            for (var i = 0; i < headElements.length; i++)
                if (!h[cols[i]] && headElements[cols[i]]) { r.push([headElements[cols[i]]]);
                    h[cols[i]] = 1; };
            h = {}; }
        for (var i = 0; i < elements.length; i++)
            for (var j = 0; j < cols.length; j++)
                if (!h[cols[j]] && elements[i][cols[j]]) {
                    if (!r[j]) r[j] = [];
                    r[j].push(elements[i][cols[j]]);
                    h[cols[j]] = 1; }
        return cols.length == 1 ? r[0] : r;
    }
    this.clearValue = function(ignoreOnSetValue) {
        return this.deleteRows(undefined, ignoreOnSetValue);
    }
    this.deleteRows = function(rows, ignoreOnSetValue) {
        if (rows === undefined || rows === null) rows = [];
        if (!rows.isArray) rows = [rows];
        var dArr = [];
        if (!rows.length) {
            for (var i = 0; i < elements.length; i++) { dArr.push(dp[i]);
                dp.splice(i, 1);
                var tr = gparent(elements[i][0]);
                del(tr);
                elements.splice(i--, 1); } } else {
            for (var i = 0; i < rows.length; i++) {
                var tr = gparent(elements[rows[i]][0]);
                del(tr);
                dArr.push(dp[rows[i]]);
                dp.splice(rows[i], 1);
                elements.splice(rows[i], 1); } }
        if (!ignoreOnSetValue && g.onDeleteRow && dArr.length) g.onDeleteRow(this.getValue(), this.getValidatedValue(), this, dArr.length == 1 ? dArr[0] : dArr);
        if (!elements.length) return this.showNoDataMessage();
        else return this.resetIDs();
    }
    this.resetIDs = function() {
        for (var i = 0, lx = elements.length; i < lx; i++) { gparent(elements[i][0]).row = i;
            for (var j = 0; j < elements[i].length; j++) { elements[i][j].row = i;
                elements[i][j].col = j;
                elements[i][j].id = 'tbl_td_' + i + '_' + j + '_' + g.idp; } }
        return this;
    }
    this.insertRow = function(o, pos, ignoreOnSetValue) {
        var i = pos !== undefined ? pos : elements.length;
        if (pos !== undefined) elements.splice(i, 0, []);
        else if (!elements[i]) elements.push([]);
        var tr = ce('tr');
        if (pos !== undefined && elements[pos + 1]) { ibe(tr, gparent(elements[pos + 1][0])); } else ac(tbl, tr);
        tr.className = 'tbl_tr_' + g.clp + ' tbl_tr_' + g.theme + ' tbl_tr_row_' + i + '_' + g.clp + ' tbl_tr_row_' + i + '_' + g.theme + ' tbl_tr_' + (i % 2 ? 'odd' : 'even') + '_' + g.clp + ' tbl_tr_' + (i % 2 ? 'odd' : 'even') + '_' + g.theme;
        tr.row = i;
        if (g.onRowClick) aeh(tr, 'click', function(e) {
            var s = getEvtSrc(e);
            while (s && s.nodeName.toUpperCase() != 'TR') s = gparent(s);
            if (!s) return;
            var data = dp[s.row * 1];
            if (!data) return;
            g.onRowClick(e, data, elements[s.row * 1], s.row);
        });
        var copyDPF = function(t) {
            var c = {};
            for (var f in t) c[f] = t[f];
            return c; }
        for (var j = 0; j < dpf.length; j++) {
            var td = ce('td');
            ac(tr, td);
            td.className = 'tbl_td_' + g.clp + ' tbl_td_' + g.theme + ' tbl_td_row_' + i + '_' + g.clp + ' tbl_td_row_' + i + '_' + g.theme + ' tbl_td_' + (i % 2 ? 'odd' : 'even') + '_' + g.clp + ' tbl_td_' + (i % 2 ? 'odd' : 'even') + '_' + g.theme + ' tbl_td_col_' + j + '_' + g.clp + ' tbl_td_col_' + j + '_' + g.theme;
            td.row = i;
            td.col = j;
            elements[i].push(td);
            if (dpf[j].width) td.style.width = dpf[j].width + 'px';
            if (dpf[j].noBorderLeft) td.style.borderLeft = 'none';
            if (j < dpf.length - 1 && dpf[j + 1].noBorderLeft) td.style.borderRight = 'none';
            if (g.onCellClick) aeh(td, 'click', function(e) {
                prevDefault(e);
                stopProp(e);
                var s = getEvtSrc(e);
                while (s && s.nodeName.toUpperCase() != 'TD') s = gparent(s);
                if (!s) return;
                dp = self.getValue();
                var data = dp[s.row * 1];
                if (!data) return;
                var d = data[dpf[s.col * 1].f];
                if (!d) return;
                g.onCellClick(e, data, d, elements[s.row * 1][s.col * 1], s.row, s.col);
            });
            if (g.notEditable) {
                if (!o[dpf[j].f]) td.innerHTML = ' ';
                else if (o[dpf[j].f].isString || isNumber(o[dpf[j].f])) td.innerHTML = o[dpf[j].f];
                else ac(td, o[dpf[j].f]); } else {
                if (o[dpf[j].f] && !(o[dpf[j].f].isString || isNumber(o[dpf[j].f])) && !dpf[j].gli) { ac(td, o[dpf[j].f]);
                    continue; }
                if (dpf[j].gli) {
                    var c = copyDPF(dpf[j]);
                    c.con = td;
                    c.idp = randomStr(8);
                    c.clp = 'tbl_' + g.clp;
                    c.theme = 'tbl_' + g.theme; } else {
                    var c = { gli: 'Input', man: dpf[j].man, title: dpf[j].title, con: td, idp: randomStr(8), clp: 'tbl_' + g.clp, theme: 'tbl_' + g.theme }; }
                c.onSetValue = function(v, vv) {};
                c.value = o[dpf[j].f];
                c.notEditable = dpf[j].editable === undefined ? false : !dpf[j].editable;
                c.onSetValue = function(v, vv, obj) {
                    if (vv === false && obj.man && obj.man.length) { obj.showHint();
                        return; }
                    var s = gparent(obj.hold);
                    if (dp[s.row] === undefined) return;
                    dp[s.row][dpf[s.col].f] = vv;
                    if (g.onElementSetValue) g.onElementSetValue(vv, s.row, s.col, dp, obj);
                }
                td.gl = new window[c.gli](c);
            }
        }
        if (td && !g.notEditable && (g.showReorder || g.showDel || g.showSave)) td.style.borderRight = 'none';
        if (!g.notEditable && g.showSave) {
            td = ce('td');
            ac(tr, td);
            tr.row = i;
            td.col = j;
            td.className = 'tbl_td_' + g.clp + ' tbl_td_' + g.theme + ' tbl_td_row_' + i + '_' + g.clp + ' tbl_td_row_' + i + '_' + g.theme + ' tbl_td_' + (i % 2 ? 'odd' : 'even') + '_' + g.clp + ' tbl_td_' + (i % 2 ? 'odd' : 'even') + '_' + g.theme + ' tbl_td_col_' + j + '_' + g.clp + ' tbl_td_col_' + j + '_' + g.theme + ' tbl_td_save_' + g.clp + ' tbl_td_save_' + g.theme;
            td.style.borderLeft = 'none';
            if (g.showDel || g.showReorder) td.style.borderRight = 'none';
            elements[i].push(td);
            j++;
            var save = ce('img');
            ac(td, save);
            save.className = 'tbl_save_img_' + g.clp + ' tbl_save_img_' + g.theme;
            save.src = g.saveImg || _GLMedia.tbl_save_img;
            aeh(save, 'click', function(e) {
                prevDefault(e);
                stopProp(e);
                var s = getEvtSrc(e);
                while (s && s.nodeName.toUpperCase() != 'TR') s = gparent(s);
                if (!s) return;
                var row = s.row,
                    t = self.getValidatedValue(undefined, row);
                if (g.onSaveFun) g.onSaveFun(t, row, self);
            });
        }
        if (!g.notEditable && g.showReorder) {
            td = ce('td');
            ac(tr, td);
            tr.row = i;
            td.col = j;
            td.className = 'tbl_td_' + g.clp + ' tbl_td_' + g.theme + ' tbl_td_row_' + i + '_' + g.clp + ' tbl_td_row_' + i + '_' + g.theme + ' tbl_td_' + (i % 2 ? 'odd' : 'even') + '_' + g.clp + ' tbl_td_' + (i % 2 ? 'odd' : 'even') + '_' + g.theme + ' tbl_td_col_' + j + '_' + g.clp + ' tbl_td_col_' + j + '_' + g.theme + ' tbl_td_reorder_' + g.clp + ' tbl_td_reorder_' + g.theme;
            td.style.borderLeft = 'none';
            if (g.showDel) td.style.borderRight = 'none';
            elements[i].push(td);
            j++;
            var down = ce('img');
            ac(td, down);
            down.className = 'tbl_down_img_' + g.clp + ' tbl_down_img_' + g.theme;
            down.src = g.downImg || _GLMedia.tbl_down_img;
            aeh(down, 'click', function(e) {
                prevDefault(e);
                stopProp(e);
                var s = getEvtSrc(e);
                while (s && s.nodeName.toUpperCase() != 'TR') s = gparent(s);
                if (!s) return;
                if (s.row == elements.length - 1) return;
                var t = dp[s.row];
                self.deleteRows([s.row], true).insertRow(t, s.row + 1);
                if (g.onReorder) g.onReorder(self.getValue(), self.getValidatedValue(), self, s, 'down');
            });
            var up = ce('img');
            ac(td, up);
            up.className = 'tbl_up_img_' + g.clp + ' tbl_up_img_' + g.theme;
            up.src = g.upImage || _GLMedia.tbl_up_img;
            aeh(up, 'click', function(e) {
                prevDefault(e);
                stopProp(e);
                var s = getEvtSrc(e);
                while (s && s.nodeName.toUpperCase() != 'TR') s = gparent(s);
                if (!s) return;
                if (!s.row) return;
                var t = dp[s.row];
                self.deleteRows([s.row], true).insertRow(t, s.row - 1);
                if (g.onReorder) g.onReorder(self.getValue(), self.getValidatedValue(), self, s, 'up');
            });
        }
        if (!g.notEditable && g.showDel) {
            td = ce('td');
            ac(tr, td);
            td.row = i;
            td.col = j;
            td.className = 'tbl_td_' + g.clp + ' tbl_td_' + g.theme + ' tbl_td_row_' + i + '_' + g.clp + ' tbl_td_row_' + i + '_' + g.theme + ' tbl_td_' + (i % 2 ? 'odd' : 'even') + '_' + g.clp + ' tbl_td_' + (i % 2 ? 'odd' : 'even') + '_' + g.theme + ' tbl_td_col_' + j + '_' + g.clp + ' tbl_td_col_' + j + '_' + g.theme + ' tbl_td_del_' + g.clp + ' tbl_td_del_' + g.theme;
            td.style.borderLeft = 'none';
            j++;
            elements[i].push(td);
            var del = ce('img');
            ac(td, del);
            del.className = 'tbl_del_img_' + g.clp + ' tbl_del_img_' + g.theme;
            del.src = g.delImage || _GLMedia.tbl_del_img;
            aeh(del, 'click', function(e) { prevDefault(e);
                stopProp(e);
                var s = getEvtSrc(e);
                while (s && s.nodeName.toUpperCase() != 'TR') s = gparent(s);
                if (!s) return;
                self.deleteRows.apply(self, [s.row]); });
        }
        if (pos === undefined) dp.push(o);
        else dp.splice(pos, 0, o);
        if (!ignoreOnSetValue && g.onSetValue) g.onSetValue(this.getValue(), this.getValidatedValue(), this);
        if (elements.length) this.hideNoDataMessage();
        return this;
    }
    this.getHeader = function() {
        return headElements.length ? headElements : false; }
    this.deleteHeader = function() {
        var t = this.getHeader();
        if (!t) return this;
        del(gparent(t[0]));
        headElements = [];
        return this;
    }
    this.setHeader = function(v) {
        if (v && v.isArray) {
            for (var i = 0; i < v.length; i++) dpf[i].title = v[i]; }
        this.deleteHeader();
        var thead = ce('thead', 'tbl_thead_' + g.idp, tbl);
        thead.className = 'tbl_thead_' + g.clp + ' tbl_thead_' + g.theme;
        for (var i = 0; i < dpf.length; i++) {
            var th = ce('th', 'tbl_th_' + i + '_0_' + g.idp, thead);
            if (dpf[i].title.isString) th.innerHTML = dpf[i].title;
            else ac(th, dpf[i].title);
            if (dpf[i].width) th.style.width = dpf[i].width + 'px';
            if (dpf[i].noBorderLeft) th.style.borderLeft = 'none';
            if (i < dpf.length - 1 && dpf[i + 1].noBorderLeft) th.style.borderRight = 'none';
            th.col = i;
            th.isHead = true;
            th.className = 'tbl_th_' + g.clp + ' tbl_th_' + g.theme + ' tbl_th_col_' + i + '_' + g.clp + ' tbl_th_col_' + i + '_' + g.theme;
            headElements.push(th);
            //kiran sort
            //kiran filter
        }
        if (th && !g.notEditable && (g.showReorder || g.showDel || g.showSave)) th.style.borderRight = 'none';
        if (!g.notEditable && g.showSave) { th = ce('th', 'tbl_th_' + i + '_0_' + g.idp, thead);
            th.innerHTML = ' ';
            th.col = i;
            th.isHead = true;
            th.className = 'tbl_th_' + g.clp + ' tbl_th_' + g.theme + ' tbl_th_col_' + i + '_' + g.clp + ' tbl_th_col_' + i + '_' + g.theme + ' tbl_th_save_' + g.clp + ' tbl_th_save_' + g.theme;
            i++;
            th.style.borderLeft = 'none';
            if (g.showDel || g.showReorder) th.style.borderRight = 'none';
            headElements.push(th); }
        if (!g.notEditable && g.showReorder) { th = ce('th', 'tbl_th_' + i + '_0_' + g.idp, thead);
            th.innerHTML = ' ';
            th.col = i;
            th.isHead = true;
            th.className = 'tbl_th_' + g.clp + ' tbl_th_' + g.theme + ' tbl_th_col_' + i + '_' + g.clp + ' tbl_th_col_' + i + '_' + g.theme + ' tbl_th_reorder_' + g.clp + ' tbl_th_reorder_' + g.theme;
            i++;
            th.style.borderLeft = 'none';
            if (g.showDel) th.style.borderRight = 'none';
            headElements.push(th); }
        if (!g.notEditable && g.showDel) { th = ce('th', 'tbl_th_' + i + '_0_' + g.idp, thead);
            th.innerHTML = ' ';
            th.col = i;
            th.isHead = true;
            th.className = 'tbl_th_' + g.clp + ' tbl_th_' + g.theme + ' tbl_th_col_' + i + '_' + g.clp + ' tbl_th_col_' + i + '_' + g.theme + ' tbl_th_del_' + g.clp + ' tbl_th_del_' + g.theme;
            i++;
            th.style.borderLeft = 'none';
            headElements.push(th); }
        return this;
    }
    this.setNoDataMessage = function(v) {
        if (!v) v = g.noDataMessage;
        if (!v) v = _GLConfig.tbl_no_data_message;
        if (v.isString) noDataMessage.innerHTML = v;
        else ac(noDataMessage, v);
    }
    this.showNoDataMessage = function() {
        noDataMessage.style.display = '';
        tblHold.style.display = 'none';
        return this;
    }
    this.hideNoDataMessage = function() {
        noDataMessage.style.display = 'none';
        tblHold.style.display = '';
        return this;
    }
    this.initAddButton = function() {
        if (g.notEditable) return;
        if (g.showAddCol) {
            if (!g.showAddCol.isString && !g.showAddCol.cnt) g.showAddCol = { cnt: 'Add column', pos: 1 };
            if (!g.showAddCol.cnt) g.showAddCol = { cnt: g.showAddCol, pos: 1 };
            if (g.showAddCol.cnt.isString) addCol.innerHTML = g.showAddCol.cnt;
            else ac(addCol, g.showAddCol.cnt);
            if (g.showAddCol.pos == 1) ibe(addCol, first(hold));
            else ac(hold, addCol); }
        if (g.showAddRow) {
            if (!g.showAddRow.isString && !g.showAddRow.cnt) g.showAddRow = { cnt: 'Add row', pos: 1 };
            if (!g.showAddRow.cnt) g.showAddRow = { cnt: g.showAddRow, pos: 1 };
            if (g.showAddRow.cnt.isString) addRow.innerHTML = g.showAddRow.cnt;
            else ac(addRow, g.showAddRow.cnt);
            if (g.showAddRow.pos == 1) ibe(addRow, first(hold));
            else ac(hold, addRow); }
    }

    var self = this;
    this.g = g;
    var hold = this.hold = ce('div');
    ac(g.con, hold);
    var tit = this.tit = ce('div');
    g.title = g.title || '';
    var man = this.man = ce('span');
    var tblHold = ce('div');
    ac(hold, tblHold);
    var tbl = this.tbl = ce('table');
    ac(tblHold, tbl);
    var addRow = this.addRow = ce('button');
    var addCol = this.addCol = ce('button');
    var noDataMessage = this.noDataMessage = ce('div');
    ac(hold, noDataMessage);
    var dp = this.dp = [];
    var dpf = this.dpf = g.dpf;
    for (var i = 0; i < dpf.length; i++)
        if (dpf[i].isString) dpf[i] = { f: dpf[i], title: dpf[i], editable: !g.notEditable };
    var elements = this.elements = [],
        headElements = [];

    this.setID(g.idp);
    this.setClass(g.clp, g.theme);
    if (g.title && !g.title.text) g.title = { text: g.title, pos: 1 };
    this.setMandatory();
    this.setNoDataMessage();
    this.initAddButton();
    this.initEvents();
    this.setHeader();
    this.setValue(g.dp, true);
    this.who = 'Table';
    return this;
}

function FileInput(g) {
    this.setID = function(idp) {
        hold.id = 'files_hold_' + idp;
        tit.id = 'files_title_' + idp;
        man.id = 'files_man_' + g.idp;
        add.id = 'files_add_' + g.idp;
        ph.id = 'files_ph_' + g.idp;
        progressCon.id = 'files_progressCon_' + g.idp;
        gallery.id = 'files_gallery_' + g.idp;
    }
    this.setClass = function(clp, theme) {
        if (clp) g.clp = clp;
        if (!theme) theme = g.theme;
        if (!theme) g.theme = theme = 'default';
        hold.className = 'files_hold_' + clp + ' files_hold_' + theme;
        tit.className = 'files_title_' + clp + ' files_title_' + theme;
        man.className = 'files_man_' + clp + ' files_man_' + theme;
        add.className = 'files_add_' + clp + ' files_add_' + theme;
        ph.className = 'files_ph_' + clp + ' files_ph_' + theme;
        progressCon.className = 'files_progressCon_' + clp + ' files_progressCon_' + theme;
        gallery.className = 'files_gallery_' + clp + ' files_gallery_' + theme;
    }
    this.setTitle = function(v) {
        g.title = v ? v.text ? v : { text: v, pos: 1 } : g.title;
        tit.innerHTML = g.title.text;
        if (g.man) ac(tit, man);
        if (gparent(tit)) del(tit);
        if (!g.title.pos) return this;
        if (g.title.pos * 1 < 3) ibe(tit, ph);
        else ac(hold, tit);
        tit.style.display = g.hideTitle ? 'none' : _GLConfig.btngrp_title_use ? '' : 'none';
        return this;
    }
    this.setTitlePos = function(v) {
        g.title.pos = v || g.title.pos;
        this.setTitle();
        return this;
    }
    this.setMandatory = function(v) { g.man = v || g.man;
        man.innerHTML = g.man ? g.man : '';
        return this.setTitle(); }
    this.setPlaceHolder = function(v) {
        if (!v) { ph.style.display = 'none';
            return this; }
        if (v.isString) ph.innerHTML = v;
        else ac(ph, v);
        return this; }
    this.initAdd = function() {
        if (g.notEditable || !g.showAdd) return;
        ac(tit, add);
        if (g.showAdd === true) add.innerHTML = 'Add';
        else if (g.showAdd.isString) add.innerHTML = g.showAdd;
        else ac(add, g.showAdd);
        aeh(add, 'click', function(e) { self.open.apply(self, []); });
    }
    this.open = function() {
        if (fileApi) this.fi.click();
        else this.fi.open();
    }
    this.getValue = function() {
        if (tbl) return tbl.getValue();
        else return files;
    }
    this.getValidatedValue = function(stopIfMandatory) {
        if (tbl) {
            var r = tbl.getValidatedValue(stopIfMandatory);
            if ((!r || !r.length) && stopIfMandatory && g.man) {
                self.hint.setValue('Please select the file(s) to upload. This input is mandatory--').showHint();
                return false;
            }
            for (var i = 0; i < r.length; i++)
                for (var f in r[i])
                    if ((g.showDownload === undefined ? _GLConfig.file_show_download : g.showDownload) && f == 'down') r[i][f] = null;
            return r;
        } else {
            if (g.man && stopIfMandatory && !files.length) { self.hint.setValue('Please select the file(s) to upload. This input is mandatory').showHint();
                return false; }
            return files.length ? files : false;
        }
    }
    this.onSelect = function(e) {
        if (fileApi) {
            var f = e.target.files || e.dataTransfer.files;
            if (!f || !f.length) return;
            for (var i = 0, t = []; i < f.length; i++) {
                if (f[i].name) f[i].name = strtags(f[i].name);
                t.push(f[i]); }
            f = t;
            if (g.maxFiles && f.length > g.maxFiles) { self.hint.setValue('You are allowed to upload a maximum of ' + g.maxFiles + ' files. Please select fewer files or delete some files and try again.').showHint();
                return; }
            if (g.maxFiles && files.length + f.length > g.maxFiles)
                for (var i = 0; i < f.length; i++) {
                    var t = f[0];
                    files.splice(0, 1);
                    if (tbl) tbl.deleteRows([0]);
                    else del(first(gallery));
                }
            var white = 0,
                black = 0;
            if (g.whitelist) white = g.whitelist.split(',');
            if (g.blacklist) black = g.blacklist.split(',');
            for (var i = 0; i < f.length; i++) {
                for (var j = 0, flag = false; j < files.length; j++)
                    if (files[j].name.toLowerCase() == f[i].name.toLowerCase() && files[j].size == f[i].size) { flag = true;
                        break; }
                if (flag) f.splice(i--, 1); }
            for (var i = 0; i < f.length; i++) {
                if (f[i].size < 5) { self.hint.setValue('An invalid file (' + f[i].name + ') was detected. Please ensure the file opens on your computer before uploading').showHint();
                    f.splice(i--, 1);
                    continue; }
                if (g.maxSize && f[i].size > g.maxSize) { self.hint.setValue('There was an error in the upload. The file: ' + f[i].name + ' (size ' + formatBytes(f[i].size) + ') exceeds the file size limit of ' + formatBytes(g.maxSize)).showHint();
                    f.splice(i--, 1);
                    continue; }
                if (black) {
                    var flag = true;
                    for (var j = 0; j < black.length; j++)
                        if (f[i].type && f[i].type.toLowerCase().search(black[j].toLowerCase().trim()) >= 0) { self.hint.setValue('The file ' + f[i].name + ' is of an invalid format. Files of ' + black[j] + ' formats are not allowed').showHint();
                            flag = false;
                            break; }
                    if (!flag) { f.splice(i--, 1);
                        continue; }
                }
                if (white) {
                    flag = false;
                    for (var j = 0; j < white.length; j++)
                        if (f[i].type && f[i].type.toLowerCase().search(white[j].toLowerCase().trim()) >= 0) { flag = true;
                            break; }
                    if (!flag) { self.hint.setValue('The file ' + f[i].name + ' needs to be one of the following formats: ' + g.whitelist).showHint();
                        f.splice(i--, 1);
                        continue; }
                }
                var id = randomStr(10);
                while (fileHash[id]) id = randomStr(10);
                fileHash[id] = f[i];
                f[i].id = id;
                var o = g.dpf ? g.processFileData(f[i]) : { id: id, name: f[i].name, size: f[i].size, fsize: formatBytes(f[i].size), dt: new Date().format('d M Y H:I:s A'), mime: f[i].type };
                if (tbl) {
                    if (g.showDownload === undefined ? _GLConfig.file_show_download : g.showDownload) {
                        var down = ce('img');
                        down.className = 'files_tbl_download_' + g.clp + ' files_tbl_download_' + g.theme;
                        down.file = o;
                        down.src = _GLMedia.file_download_img;
                        aeh(down, 'click', function(e) {
                            prevDefault(e);
                            stopProp(e);
                            var s = getEvtSrc(e);
                            var f = s.file;
                            if (!f || !f.loc) return;
                            window.open(g.downscript + '?fn=' + f.loc + '&n=' + f.name + '&t=' + f.mime);
                        });
                        o.down = down;
                    }
                    tbl.insertRow(o);
                } else self.addToGallery(o);
            }
            if (g.onSetValue) g.onSetValue.apply(self, [self.getValue(), self.getValidatedValue(), self]);
        } else self.fi.submitFile();
    }
    this.upload = function(formData) {
        if (!fileApi) return this;
        if (tbl) { files = tbl.getValidatedValue(true);
            if (!files) return this; }
        if (!files || !files.length) return this;
        var fd = new FormData();
        for (var i = 0; i < files.length; i++)
            if (fileHash[files[i].id]) { fd.append('file[]', fileHash[files[i].id]); }
        if (formData) {
            for (var f in formData) fd.append(f, formData[f]); }
        fd.append('maxFiles', g.maxFiles || 0);
        fd.append('maxSize', g.maxSize || 0);
        var r = this.xhr = cXHR();
        r.open("POST", g.url);
        self.upTime = 0;
        r.upload.onprogress = function(e) {
            progressCon.style.display = '';
            if (!self.upTime) { self.upTime = e.timeStamp;
                return; }
            var s = 'Uploaded ' + formatBytes(e.loaded || e.position) + ' of ' + formatBytes(e.total || e.totalSize) + ' in ' + formatInterval(e.timeStamp - self.upTime) + ((e.loaded || e.position) ? '. Estimated time remaining: ' + formatInterval(((e.total || e.totalSize) - (e.loaded || e.position)) / (e.loaded || e.position) * (e.timeStamp - self.upTime)) : '');
            self.progressUpdate.innerHTML = s;
            if (g.onUploadProgress) g.onUploadProgress(s, e.loaded || e.position, e.total || e.totalSize);
            self.progressBar.style.width = round((e.loaded || e.position) / (e.total || e.totalSize) * 100) + '%';
        }
        r.onreadystatechange = function() {
            if (r.readyState == 4) {
                if (r.status == 200) {
                    var rt = r.responseText;
                    progressCon.style.display = 'none';
                    if (!showError(rt)) return;
                    var s = jp(strtags(rt));
                    if (!s) return;
                    fileHash = {};
                    if (tbl) {
                        var t = tbl.getValue();
                        for (var i = 0; i < t.length; i++)
                            for (var j = 0; j < s.length; j++)
                                if (t[i].name == s[j].name && t[i].size == s[j].size) { s[j].fsize = formatBytes(s[j].size);
                                    tbl.deleteRows(i, true).insertRow(g.dpf ? g.processFileData(s[j]) : s[j], i, true);
                                    break; }
                    } else {
                        var t = first(gallery);
                        while (t) {
                            if (t.data.loc) { t = next(t);
                                continue; }
                            for (var j = 0; j < s.length; j++)
                                if (t.data.name == s[j].name && t.data.size == s[j].size) { t.data = s[j];
                                    files[t.id.split('_')[3] * 1] = s[j];
                                    break; }
                            t = next(t); }
                    }
                    if (g.onUploadComplete) g.onUploadComplete();
                }
            }
        }
        r.send(fd);
    }
    var showError = function(s) {
        if (s.search('error') == 0) {
            var ts = s.split('$$');
            ts.splice(0, 1);
            switch (ts[0]) {
                case 'virus':
                    self.hint.setValue('A virus was detected in the ' + ts[1] + ' file. Please run a virus scan on the file and try again.').showHint();
                    break;
                case 'noMime':
                case 'file':
                    self.hint.setValue('An invalid file (' + ts[1] + ') was detected. Please ensure the file opens on your computer before uploading').showHint();
                    break;
                case 'mimeBlack':
                    self.hint.setValue('The file ' + ts[3] + ' is of an invalid format. Files of ' + ts[1] + ' formats are not allowed').showHint();
                    break;
                case 'mimeWhite':
                    self.hint.setValue('There was an error in the file upload. The files need to be of one of the following formats: ' + g.whitelist).showHint();
                    break;
                case 'maxFiles':
                    self.hint.setValue('You are allowed to upload a maximum of ' + g.maxFiles + ' files. Please select fewer files or delete some files and try again.').showHint();
                    break;
                case 'maxSize':
                    self.hint.setValue('There was an error in the upload. The file: ' + ts[3] + ' (size ' + formatBytes(ts[2]) + ') exceeds the file size limit of ' + formatBytes(ts[1])).showHint();
                    break;
                default:
                    self.hint.setValue('There was an error in uploading the files. Please select the files and try again.').showHint();
                    break;
            }
            return false;
        }
        return true;
    }
    var onSave = function(s) {
        progressCon.style.display = 'none';
        showError(s);
        self.initFileInput.apply(self, []);
        if (s.search('error') == 0 || !jp(s) || !jp(s).length) {
            if (g.onError) g.onError(s);
            else return; }
        s = jp(s);
        self.setValue.apply(self, [s]);
    }
    this.setValue = function(v, ignoreOnSetValue) {
        if (!v) return this;
        if (!v.isArray) v = [v];
        for (var i = 0; i < files.length; i++)
            for (var j = 0; j < v.length; j++)
                if (files[i].size == v[j].size && files[i].mime == v[j].mime && files[i].name == v[j].name) { v.splice(j, 1);
                    break; }
        if (!v.length) return this;
        for (i = 0; i < v.length; i++) {
            v[i].fsize = formatBytes(v[i].size);
            v[i].dt = new Date().parseDate(v[i].dt).format('d M Y h:I A');
            if (tbl) {
                var o = g.dpf ? g.processFileData(v[i]) : v[i];
                if (g.showDownload === undefined ? _GLConfig.file_show_download : g.showDownload) {
                    var down = ce('img');
                    down.className = 'files_tbl_download_' + g.clp + ' files_tbl_download_' + g.theme;
                    down.file = o;
                    down.src = _GLMedia.file_download_img;
                    aeh(down, 'click', function(e) {
                        prevDefault(e);
                        stopProp(e);
                        var s = getEvtSrc(e);
                        var f = s.file;
                        if (!f || !f.loc) return;
                        window.open(g.downscript + '?fn=' + f.loc + '&n=' + f.name + '&t=' + f.mime);
                    });
                    o.down = down;
                }
                tbl.insertRow(o);
            } else this.addToGallery(g.dpf ? g.processFileData(v[i]) : v[i]);
        }
        if (!ignoreOnSetValue && g.onSetValue) g.onSetValue(this.getValue(), this.getValidatedValue());
    }
    this.clearValue = function(ignoreOnSetValue) {
        files = [];
        if (tbl) tbl.clearValue(true);
        else empty(gallery);
        if (!ignoreOnSetValue && g.onSetValue) g.onSetValue([], [], this);
    }
    var onProgress = function(p) {
        progressCon.style.display = '';
        if (!p) return;
        if ((!p.size || !p.time) && p.state != 'done' || p.state == 'done') { progressCon.style.display = 'none';
            return; }
        self.progressUpdate.innerHTML = 'Uploaded ' + formatBytes(p.received) + ' of ' + formatBytes(p.size) + ' in ' + formatInterval(p.time) + (p.received ? '. Estimated time remaining: ' + formatInterval((p.size - p.received) / p.received * p.time) : '');
        self.progressBar.style.width = round(p.received / p.size * 100) + '%';
    }
    this.initProgressBar = function() {
        var con = progressCon;
        con.innerHTML = g.progressText || _GLConfig.file_progressCon_message;
        con.style.display = 'none';
        var t1 = ce('div');
        ac(con, t1);
        t1.className = 'files_progressBox_' + g.clp + ' files_progressBox_' + g.theme;
        var t2 = this.progressBar = ce('div');
        ac(t1, t2);
        t2.className = 'files_progressBar_' + g.clp + ' files_progressBar_' + g.theme;
        t1 = this.progressUpdate = ce('div');
        ac(con, t1);
        t1.className = 'files_progressUpdate_' + g.clp + ' files_progressUpdate_' + g.theme;
    }
    this.initFileInput = function() {
        if (fileApi && !this.fi) {
            var fi = this.fi = ce('input');
            fi.type = 'file';
            if (g.maxFiles > 1) fi.setAttribute('multiple', true);
            ac(gt('body')[0], fi);
            fi.style.position = 'absolute';
            fi.style.top = '-1000px';
            aeh(fi, 'change', this.onSelect); } else { this.fi = new IFrameFiles(g.url + '?X-Progress-ID=', g.whitelist, g.blacklist, g.maxFiles, g.maxSize, this.onSelect, onSave, onProgress); }
    }
    this.initTbl = function() {
        var tdpf = [{ f: 'name', title: 'Name', man: ' *', editable: true, val: { f: 'string', min: 4, max: 100 } }, { f: 'fsize', title: 'Size', editable: false }, { f: 'mime', title: 'Type', editable: false }, { f: 'dt', title: 'Upload date', editable: false }];
        if (g.showDownload === undefined ? _GLConfig.file_show_download : g.showDownload) tdpf.push({ f: 'down', title: ' ', width: 15, noBorderLeft: 1 });
        tbl = new Table({
            con: fileHold,
            idp: 'files_' + g.idp,
            clp: 'files_' + g.clp,
            theme: g.theme,
            title: '',
            man: '',
            dpf: g.dpf || tdpf,
            dp: [],
            notEditable: g.notEditable,
            showDel: g.showDel === undefined ? _GLConfig.file_show_del : g.showDel,
            showReorder: g.showReorder === undefined ? _GLConfig.file_show_reorder : g.showReorder,
            noDataMessage: g.noDataMessage === undefined ? _GLConfig.fv_tbl_noDataMessage : g.noDataMessage,
            onDeleteRow: function(v, vv, t, d) { files = v;
                var id = d.isArray && d.length ? d[0].id : d ? d.id : 0;
                if (fileApi && id) fileHash[id] = 0; },
            onCellClick: function(e, data, d, elements, row, col) {
                if (!col || !data.loc) return;
                if (g.useFileViewer === undefined ? _GLConfig.use_file_viewer : g.useFileViewer) {
                    files = tbl.getValidatedValue();
                    if (!files) return;
                    if (!fileViewer) fileViewer = new FileViewer({ con: 0, idp: g.idp, clp: g.clp, theme: g.theme, files: files, index: row, downscript: g.downscript, url: g.url, gmbClass: g.gmbClass });
                    else fileViewer.setValue(files, row).open();
                }
            }
        });
    }
    this.addToGallery = function(f) {
        files.push(f);
        var fElem = ce('div', 'files_gallery_element_' + (files.length - 1) + '_' + g.idp, gallery);
        fElem.className = 'files_gallery_element_' + g.clp + ' files_gallery_element_' + g.theme;
        fElem.data = f;
        var img = ce('img');
        ac(fElem, img);
        img.className = 'files_gallery_element_img_' + g.clp + ' files_gallery_element_img_' + g.theme;
        var m = f.mime;
        if (m.search(/image/i) >= 0) {
            if (f.loc) img.src = f.loc;
            else {
                var fr = new FileReader();
                fr.onload = function(e) { img.src = e.target.result; };
                fr.readAsDataURL(fileHash[f.id]); } } else img.src = _GLMedia['file_img_' + (m.search(/video/i) >= 0 ? 'video' : m.search(/pdf/i) >= 0 ? 'pdf' : m.search(/zip/i) >= 0 ? 'zip' : m.search(/msword|wordprocessing/i) >= 0 ? 'word' : m.search(/powerpoint|presentation/i) >= 0 ? 'ppt' : m.search(/excel|spreadsheet/i) >= 0 ? 'excel' : 'file')];
        var top = ce('div');
        ac(fElem, top);
        top.className = 'files_gallery_element_top_' + g.clp + ' files_gallery_element_top_' + g.theme;
        if ((g.showDownload === undefined ? _GLConfig.file_show_download : g.showDownload) && !g.notEditable) {
            var down = ce('img');
            ac(top, down);
            down.className = 'files_gallery_element_down_' + g.clp + ' files_gallery_element_down_' + g.theme;
            down.src = _GLMedia.file_download_img;
            aeh(down, 'click', function(e) {
                var s = getEvtSrc(e);
                while (s && (!s.id || s.id.search('files_gallery_element_') < 0)) s = gparent(s);
                if (!s) return;
                s = s.id.split('_')[3] * 1;
                var f = files[s];
                if (!f || !f.loc) return;
                window.open(g.downscript + '?fn=' + f.loc + '&n=' + f.name + '&t=' + f.mime);
            });
        }
        if ((g.showReorder === undefined ? _GLConfig.file_show_reorder : g.showReorder) && !g.notEditable) {
            var t = ce('img');
            ac(top, t);
            t.className = 'files_gallery_element_left_' + g.clp + ' files_gallery_element_left_' + g.theme;
            t.src = _GLMedia.file_left_img;
            aeh(t, 'click', function(e) {
                prevDefault(e);
                stopProp(e);
                var s = getEvtSrc(e);
                while (s && (!s.id || s.id.search('files_gallery_element_') < 0)) s = gparent(s);
                if (!s) return;
                s = s.id.split('_')[3] * 1;
                var f = files[s];
                if (!f || !s) return;
                files.splice(s, 1);
                files.splice(s - 1, 0, f);
                s = gi('files_gallery_element_' + s + '_' + g.idp);
                var p = prev(s);
                del(s);
                ibe(s, p);
                s = first(gallery);
                var i = 0;
                while (s) { s.id = 'files_gallery_element_' + i + '_' + g.idp;
                    s = next(s);
                    i++; }
            });
            var t = ce('img');
            ac(top, t);
            t.className = 'files_gallery_element_right_' + g.clp + ' files_gallery_element_right_' + g.theme;
            t.src = _GLMedia.file_right_img;
            aeh(t, 'click', function(e) {
                prevDefault(e);
                stopProp(e);
                var s = getEvtSrc(e);
                while (s && (!s.id || s.id.search('files_gallery_element_') < 0)) s = gparent(s);
                if (!s) return;
                s = s.id.split('_')[3] * 1;
                var f = files[s];
                if (!f || s == files.length - 1) return;
                files.splice(s, 1);
                files.splice(s + 1, 0, f);
                s = gi('files_gallery_element_' + s + '_' + g.idp);
                var n = next(s);
                del(n);
                ibe(n, s);
                s = first(gallery);
                var i = 0;
                while (s) { s.id = 'files_gallery_element_' + i + '_' + g.idp;
                    s = next(s);
                    i++; }
            });
        }
        if ((g.showDel === undefined ? _GLConfig.file_show_del : g.showDel) && !g.notEditable) {
            var d = ce('img');
            ac(top, d);
            d.className = 'files_gallery_element_del_' + g.clp + ' files_gallery_element_del_' + g.theme;
            d.src = _GLMedia.file_del_img;
            aeh(d, 'click', function(e) {
                prevDefault(e);
                stopProp(e);
                var s = getEvtSrc(e);
                while (s && (!s.id || s.id.search('files_gallery_element_') < 0)) s = gparent(s);
                if (!s) return;
                s = s.id.split('_')[3] * 1;
                var f = files[s];
                if (!f) return;
                files.splice(s, 1);
                del(gi('files_gallery_element_' + s + '_' + g.idp));
                s = first(gallery);
                var i = 0;
                while (s) { s.id = 'files_gallery_element_' + i + '_' + g.idp;
                    s = next(s);
                    i++; }
            });
        }
        var cover = ce('div');
        ac(fElem, cover);
        cover.className = 'files_gallery_element_cover_' + g.clp + ' files_gallery_element_cover_' + g.theme;
        cover.innerHTML = f.name;
        cover.style.display = (g.showInfo === undefined ? _GLConfig.file_show_info : g.showInfo) ? '' : 'none';
        new Hint({ con: img, idp: randomStr(8), clp: 'text', theme: g.theme, value: f.name + '<br>Size: ' + formatBytes(f.size) + '<br>Click on the file to open/download', pos: { loc: 1, off: 0, gap: 5, dirOffset: 20, dirHeight: 8, dirWidth: 16 } });
        if (g.useFileViewer === undefined ? _GLConfig.use_file_viewer : g.useFileViewer) {
            aeh(fElem, 'click', function(e) {
                var s = getEvtSrc(e);
                while (s && (!s.id || s.id.search('files_gallery_element_') < 0)) s = gparent(s);
                if (!s) return;
                s = s.id.split('_')[3] * 1;
                var f = files[s];
                if (!f || !f.loc) return;
                if (!fileViewer) fileViewer = new FileViewer({ con: 0, idp: g.idp, clp: g.clp, theme: g.theme, files: files, index: s, downscript: g.downscript, url: g.url, gmbClass: g.gmbClass });
                else fileViewer.setValue(files, s).open();
            });
        }
    }
    this.initHint = function() {
        this.hint = new Hint({ con: tit, idp: g.idp, clp: g.clp, theme: g.theme, value: g.hint || _GLConfig.file_hint, pos: { loc: g.hintLoc || _GLConfig.hint_loc, off: g.hintOff || _GLConfig.hint_off, gap: g.hintGap || _GLConfig.hint_gap, dirOffset: g.hintDirOffset || _GLConfig.hint_dirOffset, dirHeight: g.hintDirHeight || _GLConfig.hint_dirHeight, dirWidth: g.hintDirWidth || _GLConfig.hint_dirWidth }, isManual: g.manualHint ? true : g.manualHint === undefined ? _GLConfig.input_hint_autoshow ? false : true : false });
    }
    var supportAjaxUploadWithProgress = function() {
        return supportFileAPI() && supportAjaxUploadProgressEvents() && supportFormData(); }
    var supportFileAPI = function() {
        var fi = ce('INPUT');
        fi.type = 'file';
        return 'files' in fi; };
    var supportAjaxUploadProgressEvents = function() {
        var r = cXHR();
        return !!(r && ('upload' in r) && ('onprogress' in r.upload)); };
    var supportFormData = function() {
        return !!window.FormData; }
    var self = this;
    this.g = g;
    var hold = this.hold = ce('div');
    ac(g.con, hold);
    var tit = this.tit = ce('div');
    var man = this.man = ce('span');
    var ph = this.ph = ce('div');
    ac(hold, ph);
    var progressCon = this.progressCon = ce('div');
    ac(hold, progressCon);
    var fileHold = this.fileHold = ce('div');
    ac(hold, fileHold);
    var fileApi = this.fileApi = supportAjaxUploadWithProgress();
    var add = this.add = ce('button');
    var tbl = this.tbl = 0;
    var gallery = this.gallery = ce('div');
    var files = this.files = [];
    var hint = this.hint = 0;
    var fileHash = this.fileHash = {},
        fileViewer = 0;
    //kiran drag and drop
    //kiran folders

    if (!g.title) g.title = '';
    if (g.title && !g.title.text) g.title = { text: g.title, pos: 1 };
    this.setMandatory();
    this.setPlaceHolder(g.ph);
    this.initProgressBar();

    this.setID(g.idp);
    this.setClass(g.clp, g.theme);
    this.initAdd();
    this.initFileInput();
    this.initHint();
    if (!g.showGallery) this.initTbl();
    else ac(fileHold, gallery);
    if (g.value) this.setValue(g.value, true);
    this.who = 'FileInput';
    return this;
}
var _frameDictionary = {},
    _frameFileSelected = function(id, files) {
        var fr = _frameDictionary[id];
        if (!fr) return;
        fr.onChange(files) }
var IFrameFiles = function(link, whitelist, blacklist, maxFiles, maxSize, onChange, onSave, onProgress, imgWidth, imgHeight, imgCrop) {
    var self = this,
        id = 'frame' + Math.floor(Math.random() * 16).toString(16),
        fr = ce('iframe', id, gt('body')[0]);
    this.s = '<!DOCTYPE html><head><script type="text/javascript">var frameid="' + id + '",gi=function(s){return document.getElementById(s);},submitFile=function(){gi("submit").click();};var fileSelected=function(e){parent._frameFileSelected(frameid,e.target?e.target.files||0:0);}</script></head><body><form action="' + link + id + '" method="POST" enctype="multipart/form-data">' + (whitelist ? '<input type="hidden" value="' + whitelist + '" name="whitelist">)' : '') + (blacklist ? '<input type="hidden" value="' + blacklist + '" name="blacklist">)' : '') + '<input type="hidden" name="maxSize" value="' + (maxSize || 4 * 1024 * 1024) + '" /><input type="hidden" name="maxFiles" value="' + (maxFiles || 1) + '" />' + (imgWidth ? '<input type="hidden" name="imgWidth" value="' + imgWidth + '" />' : '') + (imgHeight ? '<input type="hidden" name="imgHeight" value="' + imgHeight + '" />' : '') + (imgCrop ? '<input type="hidden" name="imgCrop" value="' + imgCrop + '" />' : '') + '<input type="file" name="file[]" id="file" ' + (maxFiles > 1 ? 'multiple' : '') + ' onchange="fileSelected(event)"/><input type="submit" id="submit" value="Submit" /></form></body></html>';
    aeh(fr, 'load', function() {
        var fr = gi(id),
            s = fr.contentDocument.body.innerHTML;
        if (s.search(/<form/i) >= 0) return;
        onSave(s);
    });
    this.submitFile = function() {
        var fr = gi(id);
        fr.contentWindow.submitFile();
        var startTime = new Date().getTime(),
            getProgress = function() {
                var r = cXHR();
                r.open('GET', '/progress', 1);
                r.setRequestHeader('X-Progress-ID', id);
                r.onreadystatechange = function() {
                    if (r.readyState == 4 && r.status == 200) {
                        var p = eval(r.responseText);
                        if (!p) return;
                        p.time = new Date().getTime() - startTime;
                        onProgress(p);
                        if (p.state != 'done' && p.state != 'error') setTimeout(getProgress, 750);
                    }
                };
                r.send(null);
            };
        setTimeout(getProgress, 50);
    };
    this.open = function() { self.fr.gi('file').click(); };
    this.onChange = onChange;
    fr.style.height = '10px';
    fr.style.position = 'absolute';
    fr.style.top = '-1000px';
    this.fr = fr = (fr.contentWindow) ? fr.contentWindow : (fr.contentDocument.document) ? fr.contentDocument.document : fr.contentDocument;
    fr.document.open();
    fr.document.write(this.s);
    fr.document.close();
    _frameDictionary[id] = this;
}

function FileViewer(g) {
    this.setID = function(idp) {
        if (idp) g.idp = idp;
        else idp = g.idp;
        hold.id = 'fv_hold_' + idp;
        top.id = 'fv_top_' + idp;
        tit.id = 'fv_tit_' + idp;
        closeBtn.id = 'fv_close_btn_' + idp;
        downBtn.id = 'fv_down_btn_' + idp;
        downAllBtn.id = 'fv_downAll_btn_' + idp;
        printBtn.id = 'fv_print_btn_' + idp;
        selectBtn.id = 'fv_select_btn_' + idp;
        cnt.id = 'fv_cnt_' + idp;
        gal.id = 'fv_gal_' + idp;
        return this;
    }
    this.setClass = function(clp, theme) {
        if (clp) g.clp = clp;
        else clp = g.clp;
        if (!theme) theme = g.theme;
        if (!theme) g.theme = theme = 'default';
        hold.className = 'fv_hold_' + g.clp + ' fv_hold_' + g.theme;
        top.className = 'fv_top_' + g.clp + ' fv_top_' + g.theme;
        tit.className = 'fv_tit_' + g.clp + ' fv_tit_' + g.theme;
        closeBtn.className = 'fv_close_btn_' + g.clp + ' fv_close_btn_' + g.theme;
        downBtn.className = 'fv_down_btn_' + g.clp + ' fv_down_btn_' + g.theme;
        downAllBtn.className = 'fv_downAll_btn_' + g.clp + ' fv_downAll_btn_' + g.theme;
        printBtn.className = 'fv_print_btn_' + g.clp + ' fv_print_btn_' + g.theme;
        selectBtn.className = 'fv_select_btn_' + g.clp + ' fv_select_btn_' + g.theme;
        cntHold.className = 'fv_cnt_hold_' + g.clp + ' fv_cnt_hold_' + g.theme;
        cnt.className = 'fv_cnt_' + g.clp + ' fv_cnt_' + g.theme;
        gal.className = 'fv_gal_' + g.clp + ' fv_gal_' + g.theme;
        return this;
    }
    this.initEvents = function() {
        closeBtn.innerHTML = '<img src="' + _GLMedia.fv_close_img + '" />Close';
        aeh(closeBtn, 'click', function() { self.close.apply(self, []); });
        downBtn.innerHTML = '<img src="' + _GLMedia.fv_down_img + '" />Download';
        aeh(downBtn, 'click', function() {
            var f = files[index];
            window.open(g.downscript + '?fn=' + f.loc + '&n=' + f.name + '&t=' + f.mime);
        });
        downAllBtn.innerHTML = '<img src="' + _GLMedia.fv_down_img + '" />Download All';
        aeh(downAllBtn, 'click', function() {
            for (var i = 0; i < files.length; i++)
                if (files[i].loc) window.open(g.downscript + '?fn=' + files[i].loc + '&n=' + files[i].name + '&t=' + files[i].mime);
        });
        if (gparent(printBtn)) {
            printBtn.innerHTML = '<img src="' + _GLMedia.fv_print_img + '" />Print';
            aeh(printBtn, 'click', function() {
                var m = files[index].mime,
                    printHelper = function() {
                        if (m.search(/pdf/i) >= 0 && PDFJS) {
                            self.renderAllPages(function() {
                                var body = gt('body')[0];
                                del(cnt);
                                body.style.display = 'none';
                                var b = ce('body');
                                ac(gt('html')[0], b);
                                ac(b, cnt);
                                window.print();
                                del(cnt);
                                del(b);
                                ibe(cnt, gal);
                                body.style.display = '';
                                self.renderSinglePage();
                            });
                        } else {
                            var body = gt('body')[0];
                            del(cnt);
                            body.style.display = 'none';
                            var b = ce('body');
                            ac(gt('html')[0], b);
                            ac(b, cnt);
                            var img = 0;
                            if (m.search(/image/i) >= 0) { img = first(first(cnt));
                                var w = img.style.width;
                                img.style.width = ''; }
                            window.print();
                            del(cnt);
                            del(b);
                            ibe(cnt, gal);
                            body.style.display = '';
                            if (img) { img.style.width = w; }
                        }
                    };
                if (m.search(/pdf/i) >= 0 && PDFJS && self.numPDFPages > 10) {
                    var gmb = new GMsgBox("CONFIRM PRINT", 'This document has more than 10 pages. It is a better idea to download the document and print it. Are you sure you want to print it from the browser?', [{ val: 'Yes', evt: 'click', handler: function() { gmb.unbox();
                            printHelper(); } }, { val: 'No', evt: 'click', handler: function() { gmb.unbox(); } }], 340, 200, 25, 9000, randomStr(8), 0.98, g.gmbClass, _GLMedia.fv_gmb_close); } else printHelper();
            });
        }
        if (gparent(selectBtn)) {
            selectBtn.innerHTML = '<img src="' + _GLMedia.fv_select_img + '" />Select';
            aeh(selectBtn, 'click', function() {
                if (g.onFileSelect) { g.onFileSelect(selectedFiles);
                    self.close(); }
            });
        }
        aeh(document, 'keyup', function(e) {
            if (fkey(e) == 27 && gparent(hold)) self.close.apply(self, []); });
        return this;
    }
    this.setValue = function(fs, ind, refreshGallery) {
        var resetGallery = refreshGallery;
        if (!fs) { fs = files;
            resetGallery = false; }
        if (ind === undefined) ind = index;
        if (!fs.isArray) fs = [fs];
        files = clone(fs);
        index = ind;
        var f = files[index];
        if (!f) return this;
        tit.innerHTML = f.name + ' (' + formatBytes(f.size) + ')';
        empty(cnt);
        var p = getPos(con);
        cnt.style.height = (cntHold.clientHeight - gal.clientHeight - 60) + 'px';
        var t = qsa('.fv_imgOpts_' + g.theme);
        if (t && t.length)
            for (var i = 0; i < t.length; i++) del(t[i]);
        t = qsa('.fv_pdfOpts_' + g.theme);
        if (t && t.length)
            for (var i = 0; i < t.length; i++) del(t[i]);
        if (f.mime.search(/video/i) >= 0) { printBtn.style.display = 'none';
            var id = randomStr(10),
                t1 = ce('video', id, cnt);
            t1.src = f.loc;
            t1.className = "video-js vjs-default-skin";
            videojs(id, { controls: true, preload: 'auto', loop: true, width: p.w * 0.97, height: p.h * 0.97 - 180 }, function() { this.play();
                qsa('.vjs-big-play-button')[0].style.display = 'none'; }); } else if (f.mime.search(/image/i) >= 0) {
            printBtn.style.display = '';
            var t1 = ce('div');
            ac(cnt, t1);
            t1.className = 'fv_imgHold_' + g.clp + ' fv_imgHold_' + g.theme;
            var t2 = ce('div');
            ac(cntHold, t2);
            t2.className = 'fv_imgOpts_' + g.clp + ' fv_imgOpts_' + g.theme;
            var t3 = ce('img');
            ac(t2, t3);
            t3.src = _GLMedia.fv_zoomout_img;
            t3.className = 'fv_imgOptImg_' + g.clp + ' fv_imgOptImg_' + g.theme;
            aeh(t3, 'click', function(e) {
                var img = first(first(cnt));
                img.style.width = round(img.clientWidth * 0.8) + 'px'; });
            t3 = ce('img');
            ac(t2, t3);
            t3.src = _GLMedia.fv_rotate_img;
            t3.className = 'fv_imgOptImg_' + g.clp + ' fv_imgOptImg_' + g.theme;
            aeh(t3, 'click', function(e) {
                var img = first(first(cnt));
                img.rotation = ((img.rotation || 0) + 90) % 360;
                img.style.webkitTransform = img.style.mozTransform = img.style.msTransform = img.style.transform = "rotate(" + img.rotation + "deg)";
                if (g.onImgRotate) { g.onImgRotate(files[index], img.rotation); }
                if (files[index].loc && g.autoImgRotate === undefined ? _GLConfig.file_auto_img_rotate : g.autoImgRotate) {
                    var r = cXHR();
                    r.open("POST", g.url, true);
                    sXHRh(r);
                    r.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    r.onreadystatechange = function() {
                        if (r.readyState == 4) {
                            if (r.status == 200) {
                                var rt = r.responseText;
                                if (rt == 'success') self.setValue(files, index, true); } } }
                    r.send("fun=rotateImage&loc=" + files[index].loc);
                }
            });
            t3 = ce('img');
            ac(t2, t3);
            t3.src = _GLMedia.fv_zoomin_img;
            t3.className = 'fv_imgOptImg_' + g.clp + ' fv_imgOptImg_' + g.theme;
            aeh(t3, 'click', function(e) {
                var img = first(first(cnt));
                img.style.width = round(img.clientWidth * 1.2) + 'px'; });
            t2 = ce('img');
            ac(t1, t2);
            t2.className = 'fv_img_big_' + g.clp + ' fv_img_big_' + g.theme;
            t2.src = f.loc + '?' + randomStr(5);
        } else if (f.mime.search(/pdf/i) >= 0 && PDFJS) {
            printBtn.style.display = '';
            var t1 = ce('div');
            ac(cnt, t1);
            t1.className = 'fv_pdfHold_' + g.clp + ' fv_pdfHold_' + g.theme;
            var t2 = ce('div');
            ac(cntHold, t2);
            t2.className = 'fv_pdfOpts_' + g.clp + ' fv_pdfOpts_' + g.theme;
            var t3 = ce('img');
            ac(t2, t3);
            t3.src = _GLMedia.fv_zoomout_img;
            t3.className = 'fv_pdfOptImg_' + g.clp + ' fv_pdfOptImg_' + g.theme;;
            aeh(t3, 'click', function() { scale -= 0.25;
                if (scale < 0.1) scale = 0.1;
                queueRenderPage(pageNum); });
            t3 = ce('img');
            ac(t2, t3);
            t3.src = _GLMedia.fv_zoomin_img;
            t3.className = 'fv_pdfOptImg_' + g.clp + ' fv_pdfOptImg_' + g.theme;
            aeh(t3, 'click', function() { scale += 0.25;
                if (scale > 10) scale = 10;
                queueRenderPage(pageNum); });
            t3 = ce('button');
            ac(t2, t3);
            t3.innerHTML = 'Next';
            t3.className = 'fv_pdfBtn_' + g.clp + ' fv_pdfBtn_' + g.theme;
            aeh(t3, 'click', function() { pageNum += pageNum < numPages ? 1 : 0;
                queueRenderPage(pageNum); });
            t3 = ce('span');
            ac(t2, t3);
            self.pageCount = t3;
            t3.className = 'fv_pdfText_' + g.clp + ' fv_pdfText_' + g.theme;
            t3 = ce('button');
            ac(t2, t3);
            t3.innerHTML = 'Previous';
            t3.className = 'fv_pdfBtn_' + g.clp + ' fv_pdfBtn_' + g.theme;
            aeh(t3, 'click', function() { pageNum -= pageNum > 1 ? 1 : 0;
                queueRenderPage(pageNum); });
            var canvas = ce('canvas', 'pdfCanvas', t1);
            var pdfDoc = null,
                pageNum = 1,
                pageRendering = false,
                pageNumPending = null,
                scale = 1.4,
                ctx = canvas.getContext('2d'),
                numPages = 0;
            var renderPage = function(num) {
                    pageRendering = true;
                    pdfDoc.getPage(num).then(function(page) {
                        var viewport = page.getViewport(scale);
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;
                        var renderContext = { canvasContext: ctx, viewport: viewport },
                            renderTask = page.render(renderContext);
                        renderTask.promise.then(function() { pageRendering = false;
                            if (pageNumPending !== null) { renderPage(pageNumPending);
                                pageNumPending = null; }
                            self.pageCount.innerHTML = pageNum + ' of ' + numPages; });
                    });
                },
                queueRenderPage = function(num) {
                    if (pageRendering) { pageNumPending = num; } else { renderPage(num); } }

            self.renderSinglePage = function() {
                empty(first(cnt));
                canvas = ce('canvas', 'pdfCanvas', first(cnt));
                ctx = canvas.getContext('2d');
                renderPage(pageNum);
            };
            self.renderAllPages = function(cb) {
                var i = 1,
                    pdfCon = first(cnt);
                empty(pdfCon);
                var renderAllPagesHelper = function() {
                    pdfDoc.getPage(i).then(function(page) {
                        var viewport = page.getViewport(_GLConfig.fv_pdf_print_scale),
                            c = ce('canvas'),
                            ct = c.getContext('2d');
                        c.style.display = 'block';
                        ac(pdfCon, c);
                        c.height = viewport.height;
                        c.width = viewport.width;
                        var renderContext = { canvasContext: ct, viewport: viewport },
                            renderTask = page.render(renderContext);
                        renderTask.promise.then(function() { i++;
                            if (i <= self.numPDFPages) renderAllPagesHelper();
                            else if (cb) cb.apply(self, []); });
                    });
                };
                renderAllPagesHelper();
            }
            PDFJS.disableWorker = true;
            PDFJS.getDocument(f.loc).then(function(pdfDoc_) { pdfDoc = pdfDoc_;
                self.numPDFPages = numPages = pdfDoc.numPages;
                renderPage(pageNum); });

        } else {
            var t = ce('img'),
                m = f.mime;
            ac(cnt, t);
            t.className = 'fv_img_banner_' + g.clp + ' fv_img_banner_' + g.theme;
            t.src = _GLMedia['file_img_' + (m.search(/video/i) >= 0 ? 'video' : m.search(/pdf/i) >= 0 ? 'pdf' : m.search(/zip/i) >= 0 ? 'zip' : m.search(/msword|wordprocessing/i) >= 0 ? 'word' : m.search(/powerpoint|presentation/i) >= 0 ? 'ppt' : m.search(/excel|spreadsheet/i) >= 0 ? 'excel' : 'file')];
        }
        if (resetGallery) {
            empty(gal);
            for (var i = 0; i < files.length; i++) {
                var f = files[i],
                    fElem = ce('div', 'fv_gallery_element_' + i + '_' + g.idp, gal);
                fElem.className = 'fv_gallery_element_' + g.clp + ' fv_gallery_element_' + g.theme;
                fElem.data = f;
                var img = ce('img');
                ac(fElem, img);
                img.className = 'fv_gallery_element_img_' + g.clp + ' fv_gallery_element_img_' + g.theme;
                var m = f.mime;
                if (m.search(/image/i) >= 0) {
                    if (f.loc) img.src = f.loc + '?' + randomStr(5);
                    else {
                        var fr = new FileReader();
                        fr.onload = function(e) { img.src = e.target.result; };
                        fr.readAsDataURL(fileHash[f.id]); } } else img.src = _GLMedia['file_img_' + (m.search(/video/i) >= 0 ? 'video' : m.search(/pdf/i) >= 0 ? 'pdf' : m.search(/zip/i) >= 0 ? 'zip' : m.search(/msword|wordprocessing/i) >= 0 ? 'word' : m.search(/powerpoint|presentation/i) >= 0 ? 'ppt' : m.search(/excel|spreadsheet/i) >= 0 ? 'excel' : 'file')];
                var top = ce('div');
                ac(fElem, top);
                top.className = 'fv_gallery_element_top_' + g.clp + ' fv_gallery_element_top_' + g.theme;
                var down = ce('img');
                ac(top, down);
                down.className = 'fv_gallery_element_down_' + g.clp + ' fv_gallery_element_down_' + g.theme;
                down.src = _GLMedia.file_download_img;
                aeh(down, 'click', function(e) {
                    var s = getEvtSrc(e);
                    while (s && (!s.id || s.id.search('fv_gallery_element_') < 0)) s = gparent(s);
                    if (!s) return;
                    s = s.id.split('_')[3] * 1;
                    var f = files[s];
                    if (!f || !f.loc) return;
                    window.open(g.downscript + '?fn=' + f.loc + '&n=' + f.name + '&t=' + f.mime);
                });
                var cover = ce('div');
                ac(fElem, cover);
                cover.className = 'fv_gallery_element_cover_' + g.clp + ' fv_gallery_element_cover_' + g.theme;
                cover.innerHTML = f.name;
                cover.style.display = (g.showInfo === undefined ? _GLConfig.file_show_info : g.showInfo) ? '' : 'none';
                new Hint({ con: img, idp: randomStr(8), clp: 'text', theme: g.theme, value: f.name + '<br>Size: ' + formatBytes(f.size) + '<br>Click on the file to open/download', pos: { loc: 1, off: 0, gap: 5, dirOffset: 20, dirHeight: 8, dirWidth: 16 } });
                if (g.showSelectBtn === undefined ? _GLConfig.fv_show_select_button : g.showSelectBtn) {
                    var chk = ce('div', 'fv_select_element_btn_' + i + '_' + g.idp, fElem);
                    chk.className = 'fv_select_element_btn_' + g.clp + ' fv_select_element_btn_' + g.theme;
                    aeh(chk, 'click', function(e) {
                        prevDefault(e);
                        stopProp(e);
                        var s = getEvtSrc(e);
                        while (s && (!s.id || s.id.search('fv_gallery_element_') < 0)) s = gparent(s);
                        if (!s) return;
                        s = s.id.split('_')[3] * 1;
                        var f = files[s];
                        if (!f) return;
                        while (g.maxSelect > 0 && selectedFiles.length >= g.maxSelect) {
                            s = first(gal);
                            while (s) {
                                if (s.data.loc == selectedFiles[0].loc) { selectedFiles.splice(0, 1);
                                    s = first(s);
                                    while (s && (!s.id || s.className.search('fv_select_element_btn_') != 0)) s = next(s);
                                    if (s) s.className = 'fv_select_element_btn_' + g.clp + ' fv_select_element_btn_' + g.theme;
                                    break; }
                                s = next(s);
                            }
                        }
                        for (var i = 0; i < selectedFiles.length; i++)
                            if (selectedFiles[i].loc == f.loc) {
                                selectedFiles.splice(i, 1);
                                s = getEvtSrc(e);
                                s.className = 'fv_select_element_btn_' + g.clp + ' fv_select_element_btn_' + g.theme;
                                return;
                            }
                        selectedFiles.push(f);
                        s = getEvtSrc(e);
                        s.className += ' fv_selected_element_btn_' + g.clp + ' fv_selected_element_btn_' + g.theme;
                    });
                    for (var j = 0; j < selectedFiles.length; j++)
                        if (selectedFiles[j].loc == f.loc) { chk.className += ' fv_selected_element_btn_' + g.clp + ' fv_selected_element_btn_' + g.theme;
                            break; }
                }
                aeh(fElem, 'click', function(e) {
                    var s = getEvtSrc(e);
                    while (s && (!s.id || s.id.search('fv_gallery_element_') < 0)) s = gparent(s);
                    if (!s) return;
                    s = s.id.split('_')[3] * 1;
                    var f = files[s];
                    if (!f || s == index) return;
                    index = s;
                    self.setValue.apply(self, [0, s]);
                });
            }
        }
        return this;
    }
    this.close = function() {
        if (gparent(hold)) del(hold);
        return this; }
    this.open = function() {
        if (gparent(hold)) del(hold);
        ac(con, hold);
        return this; }
    this.clearSelected = function() { selectedFiles = [];
        return this; }
    this.setSelected = function(v) {
        if (!v) return this;
        if (!v.isArray) v = [v];
        if (!v.length) return v;
        selectedFiles = [];
        for (var i = 0; i < Math.min(v.length, (g.maxSelect || 10000)); i++) selectedFiles.push(v[i]);
        return this.setValue(files, index, true);
    }
    var self = this;
    this.g = g;
    var con = this.con = g.con ? g.con.isString ? gi(g.con) : g.con : gt('body')[0];
    if (!con) return;
    var hold = this.hold = ce('div');
    ac(con, hold);
    var cntHold = ce('div');
    ac(hold, cntHold);
    var top = this.top = ce('div');
    ac(hold, top);
    var closeBtn = ce('button');
    ac(top, closeBtn);
    var printBtn = ce('button');
    if (g.showPrintBtn === undefined ? _GLConfig.fv_show_print_button : g.showPrintBtn) ac(top, printBtn);
    var downBtn = ce('button');
    if (g.showDownloadBtn === undefined ? _GLConfig.fv_show_download_button : g.showDownloadBtn) ac(top, downBtn);
    var downAllBtn = ce('button');
    if (g.showDownloadAllBtn === undefined ? _GLConfig.fv_show_download_all_button : g.showDownloadAllBtn) ac(top, downAllBtn);
    var selectBtn = ce('button');
    if (g.showSelectBtn === undefined ? _GLConfig.fv_show_select_button : g.showSelectBtn) ac(top, selectBtn);
    var selectedFiles = [];
    var tit = this.tit = ce('div');
    ac(top, tit);
    var cnt = this.cnt = ce('div');
    ac(cntHold, cnt);
    var gal = this.gal = ce('div');
    ac(cntHold, gal);

    var files = this.files = [];
    var index = this.index = -1;

    this.setID(g.idp).setClass(g.clp, g.theme).initEvents();
    this.setValue(g.files, g.index, true);
    this.who = 'FileViewer';
    return this;
}


function Switch(g) {
    if (!g.con || !g.idp || !g.clp) return;
    if (g.con.isString) g.con = gi(g.con);
    if (!g.con) return;
    this.setID = function(id) {
        g.idp = id || g.idp;
        hold.id = 'switch_hold_' + g.idp;
        rel.id = 'input_rel_' + g.idp;
        d.id = 'switch_' + g.idp;
        btn.id = 'switch_btn_' + g.idp;
        tit.id = 'input_title_' + g.idp;
        man.id = 'input_man_' + g.idp;
        return this;
    }
    this.setClass = function(clp, theme) {
        if (clp) g.clp = clp;
        else clp = g.clp;
        if (!theme) theme = g.theme;
        if (!theme) g.theme = theme = 'default';
        hold.className = 'switch_hold_' + g.clp + ' switch_hold_' + theme;
        rel.className = 'switch_rel_' + g.clp + ' switch_rel_' + theme;
        d.className = 'switch_' + g.clp + ' switch_' + theme;
        btn.className = 'switch_btn_' + g.clp + ' switch_btn_' + theme;
        tit.className = 'switch_title_' + g.clp + ' switch_title_' + theme;
        man.className = 'switch_man_' + g.clp + ' switch_man_' + theme;
        return this;
    }
    this.setValue = function(v, ignoreOnSetValue) {
        g.value = v ? true : false;
        if (!g.value) { d.className = 'switch_' + g.clp + ' switch_' + g.theme;
            btn.className = 'switch_btn_' + g.clp + ' switch_btn_' + g.theme; } else { d.className = 'switch_' + g.clp + ' switch_' + g.theme + ' switch_selected_' + g.clp + ' switch_selected_' + g.theme;
            btn.className = 'switch_btn_' + g.clp + ' switch_btn_' + g.theme + ' switch_btn_selected_' + g.clp + ' switch_btn_selected_' + g.theme; }
        if (!ignoreOnSetValue && _GLConfig.switch_programmatic_onSetValue && g.onSetValue) g.onSetValue(g.value, g.value);
        return this;
    }
    this.setEvents = function() {
        aeh(d, 'click', function(e) {
            if (g.notEditable) return;
            self.setValue(!g.value) });
        aeh(btn, 'click', function(e) {
            if (g.notEditable) return;
            self.setValue(!g.value) });
    }
    this.clearValue = function(ignoreOnSetValue) {
        d.className = 'switch_' + g.clp + ' switch_' + g.theme;
        btn.className = 'switch_btn_' + g.clp + ' switch_btn_' + g.theme;
        if (!ignoreOnSetValue && _GLConfig.switch_programmatic_onSetValue && g.onSetValue) g.onSetValue(g.value, g.value);
        return this;
    }
    this.getValue = function() {
        return g.value;
    }
    this.getValidatedValue = function() {
        return g.value;
    }
    this.setTitle = function(v) {
        g.title = v ? v.text ? v : { text: v, pos: 1 } : g.title;
        tit.innerHTML = g.title.text;
        if (g.man) ac(tit, man);
        if (gparent(tit)) del(tit);
        if (!g.title.pos) return this;
        if (g.title.pos * 1 < 3) ibe(tit, rel);
        else ac(hold, tit);
        if (_GLConfig.switch_autohide_title) tit.style.visibility = v == g.ph ? 'hidden' : 'visible';
        return this;
    }
    this.setTitlePos = function(v) {
        g.title.pos = v || g.title.pos;
        this.setTitle();
        return this;
    }
    var self = this;
    this.g = g;
    var hold = this.hold = ce('div');
    ac(g.con, hold);
    var rel = ce('div');
    ac(hold, rel);
    rel.style.position = 'relative';
    var man = this.man = ce('span');
    g.man = g.man || '';
    var tit = this.tit = ce('div');
    g.title = g.title || '';
    var d = this.d = ce('div');
    ac(rel, d);
    var btn = this.btn = ce('div');
    ac(rel, btn);
    this.setID();
    this.setClass(g.clp, g.theme);
    this.setValue(g.value);
    this.setTitle(g.title);
    this.setEvents();
    this.who = 'Switch';
    return this;
}
