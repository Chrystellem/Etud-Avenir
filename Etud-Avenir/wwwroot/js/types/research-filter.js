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
        if (filter.domain)
            url += "?domain=".concat(filter.domain);
        if (filter.localization)
            url += "&localization=".concat(filter.localization);
        if (filter.isInitialFormation)
            url += "&isInitialFormation=".concat(filter.isInitialFormation);
        if (filter.isApprenticeship)
            url += "&isApprenticeship=".concat(filter.isApprenticeship);
        if (filter.isPublic)
            url += "&isPublic=".concat(filter.isPublic);
        if (filter.isPrivate)
            url += "&isPrivate=".concat(filter.isPrivate);
        if (filter.isStateApproved)
            url += "&isStateApproved=".concat(filter.isStateApproved);
        if (filter.admissionType)
            url += "&admissionType=".concat(filter.admissionType);
        return url;
    };
    return FilterState;
}());
exports.default = FilterState;
//# sourceMappingURL=research-filter.js.map