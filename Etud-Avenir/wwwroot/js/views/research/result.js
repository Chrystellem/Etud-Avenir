"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var school_article_1 = require("../../components/database/school-article");
var loader_1 = require("../../components/loader");
var filter_1 = require("../../components/research/filter");
var parser_1 = require("../../services/parser");
var research_filter_1 = require("../../types/research-filter");
var ResearchResult = /** @class */ (function (_super) {
    __extends(ResearchResult, _super);
    function ResearchResult(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            filter: new research_filter_1.default(),
            fetching: true,
            results: []
        };
        _this.componentDidMount = function () { return __awaiter(_this, void 0, void 0, function () {
            var filterProperty, results;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // initialisation du filtre
                        for (filterProperty in this.state.filter) {
                            if (!(0, parser_1.autoParse)(this.params[filterProperty]))
                                continue;
                            this.state.filter = __assign(__assign({}, this.state.filter), (_a = {}, _a[filterProperty] = (0, parser_1.autoParse)(this.params[filterProperty]), _a));
                        }
                        this.setState({ filter: this.state.filter });
                        return [4 /*yield*/, getResearchResults(this.state.filter, this.params["reports"])];
                    case 1:
                        results = _b.sent();
                        this.setState({ results: results, fetching: false });
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Retrouve les queries dans l'url
         */
        _this.params = new Proxy(new URLSearchParams(window.location.search), {
            get: function (searchParams, prop) { return searchParams.get(prop); },
        });
        _this.handleFilterChange = function (e) {
            var _a, _b;
            if (e.currentTarget.type === "checkbox") {
                _this.setState({
                    filter: __assign(__assign({}, _this.state.filter), (_a = {}, _a[e.currentTarget.name] = !_this.state.filter[e.currentTarget.name], _a))
                });
                return;
            }
            _this.setState({
                filter: __assign(__assign({}, _this.state.filter), (_b = {}, _b[e.currentTarget.name] = (0, parser_1.autoParse)(e.currentTarget.value), _b))
            });
        };
        /**
         * Gère l'affichage des résultats
         * */
        _this.showResults = function () {
            if (!_this.state.results)
                return React.createElement("p", null, "Aucun r\u00E9sultat trouv\u00E9");
            return _this.state.results.map(function (r) { return React.createElement(school_article_1.default, { key: r.name, school: r, isResult: true }); });
        };
        /**
         * L'utilisateur relance la recherche depuis les filtres à gauche
         */
        _this.reLaunchResearch = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var newUrl, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        // Vérifier que les paramètres obligatoires sont présents
                        if (!this.state.filter.domain || !this.state.filter.localization)
                            return [2 /*return*/];
                        this.setState({ fetching: true });
                        newUrl = "".concat(research_filter_1.default.getUrl(this.state.filter), "&reports=").concat(this.params["reports"]);
                        window.history.pushState({ id: newUrl }, newUrl, "/recherche/resultats".concat(newUrl));
                        return [4 /*yield*/, getResearchResults(this.state.filter, this.params["reports"])];
                    case 1:
                        results = _a.sent();
                        this.setState({ results: results, fetching: false });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.render = function () {
            return (React.createElement("div", { className: "d-flex p-5 result-app" },
                React.createElement("div", null,
                    React.createElement("h1", null, "R\u00E9sultats"),
                    React.createElement(filter_1.default, { state: _this.state.filter, handleChange: _this.handleFilterChange, handleSubmit: _this.reLaunchResearch })),
                React.createElement("div", { className: "school-container px-5" }, _this.state.fetching ?
                    React.createElement(loader_1.default, null) :
                    _this.showResults())));
        };
        return _this;
    }
    return ResearchResult;
}(React.Component));
exports.default = ResearchResult;
/**
 * Récupère les résultats de la recherche
 */
var getResearchResults = function (filter, reportIds) { return __awaiter(void 0, void 0, void 0, function () {
    var reportIdsInt, url, i, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                reportIdsInt = parseReportIds(reportIds);
                if (reportIdsInt.length !== 3)
                    return [2 /*return*/];
                url = "/api/research/results".concat(research_filter_1.default.getUrl(filter));
                for (i = 0; i < 3; i++) {
                    url += "&reports=".concat(reportIdsInt[i]);
                }
                return [4 /*yield*/, fetch(url)];
            case 1:
                result = _a.sent();
                if (!result.ok)
                    return [2 /*return*/, []];
                return [2 /*return*/, result.json()];
        }
    });
}); };
var parseReportIds = function (reportIds) {
    var reportIdsInt = reportIds.split(',').map(function (e) { return parseInt(e); });
    if (reportIdsInt.find(function (r) { return isNaN(r); }))
        return [];
    return reportIdsInt;
};
//# sourceMappingURL=result.js.map