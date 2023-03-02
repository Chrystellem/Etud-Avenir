"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FilterState = /** @class */ (function () {
    function FilterState() {
        this.domain = "";
        this.localization = "";
        this.isInitialFormation = false;
        this.isApprenticeship = false;
        this.isPublic = false;
        this.isPrivate = false;
        this.isStateApproved = false;
        this.admissionType = 0;
    }
    /**
     * Permet de récupérer l'url à fetch en fonction des propriétés précisées (true ou non null)
     */
    FilterState.getUrl = function (filter) {
        var url = "";
        var addToUrl = function (param) {
            if (!url) {
                url += "?".concat(param);
                return;
            }
            url += "&".concat(param);
        };
        if (filter.domain)
            addToUrl("domain=".concat(filter.domain));
        if (filter.localization)
            addToUrl("localization=".concat(filter.localization));
        if (filter.isInitialFormation)
            addToUrl("isInitialFormation=".concat(filter.isInitialFormation));
        if (filter.isApprenticeship)
            addToUrl("isApprenticeship=".concat(filter.isApprenticeship));
        if (filter.isPublic)
            addToUrl("isPublic=".concat(filter.isPublic));
        if (filter.isPrivate)
            addToUrl("isPrivate=".concat(filter.isPrivate));
        if (filter.isStateApproved)
            addToUrl("isStateApproved=".concat(filter.isStateApproved));
        if (filter.admissionType)
            addToUrl("admissionType=".concat(filter.admissionType));
        return url;
    };
    return FilterState;
}());
exports.default = FilterState;
//# sourceMappingURL=research-filter.js.map