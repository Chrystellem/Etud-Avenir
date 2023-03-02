"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Représente le DTO renvoyé par le serveur
 */
var CurriculumSmallDTO = /** @class */ (function () {
    function CurriculumSmallDTO(props) {
        if (!props)
            return;
        this.curriculumId = props.curriculumId;
        this.createdDate = props.createdDate;
        this.schoolName = props.schoolName;
        this.name = props.name;
    }
    return CurriculumSmallDTO;
}());
exports.default = CurriculumSmallDTO;
//# sourceMappingURL=curriculum-small-dto.js.map