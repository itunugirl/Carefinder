"use strict";
// src/hooks/useRouterNavigation.ts
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
var navigation_1 = require("next/navigation");
var useRouterNavigation = function () {
    var router = (0, navigation_1.useRouter)();
    return { router: router };
};
exports.default = useRouterNavigation;
