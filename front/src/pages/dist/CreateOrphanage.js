"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_leaflet_1 = require("react-leaflet");
var Sidebar_1 = require("../components/Sidebar");
var fi_1 = require("react-icons/fi");
require("../styles/pages/create-orphanage.css");
var mapIcon_1 = require("../utils/mapIcon");
function CreateOrphanage() {
    var _a = react_1.useState({ latitude: 0, longitude: 0 }), position = _a[0], setPosition = _a[1];
    var _b = react_1.useState(''), name = _b[0], setName = _b[1];
    var _c = react_1.useState(''), about = _c[0], setAbout = _c[1];
    var _d = react_1.useState(''), instructions = _d[0], setInstructions = _d[1];
    var _e = react_1.useState(''), opening_hours = _e[0], setOpeningHours = _e[1];
    var _f = react_1.useState(true), open_on_weekends = _f[0], setOpenOnWeekends = _f[1];
    var _g = react_1.useState([]), images = _g[0], setImages = _g[1];
    var _h = react_1.useState([]), previewImagens = _h[0], setPreviewImagens = _h[1];
    function handleMapClick(event) {
        var _a = event.latlng, lat = _a.lat, lng = _a.lng;
        setPosition({
            latitude: lat,
            longitude: lng
        });
    }
    function handleSelectImage(event) {
        if (!event.target.files) {
            return;
        }
        var imagens = Array.from(event.target.files);
        setImages(imagens);
    }
    function handleSubmit(event) {
        event.preventDefault();
        var latitude = position.latitude, longitude = position.longitude;
        console.log({
            name: name,
            about: about,
            latitude: latitude,
            longitude: longitude,
            position: position,
            instructions: instructions,
            opening_hours: opening_hours,
            open_on_weekends: open_on_weekends
        });
    }
    return (react_1["default"].createElement("div", { id: "page-create-orphanage" },
        react_1["default"].createElement(Sidebar_1["default"], null),
        react_1["default"].createElement("main", null,
            react_1["default"].createElement("form", { onSubmit: handleSubmit, className: "create-orphanage-form" },
                react_1["default"].createElement("fieldset", null,
                    react_1["default"].createElement("legend", null, "Dados"),
                    react_1["default"].createElement(react_leaflet_1.Map, { center: [-2.510029, -44.2501367], style: { width: '100%', height: 280 }, zoom: 15, onclick: handleMapClick },
                        react_1["default"].createElement(react_leaflet_1.TileLayer, { url: "https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=" + process.env.REACT_APP_MAPBOX_TOKEN }),
                        position.latitude !== 0 && (react_1["default"].createElement(react_leaflet_1.Marker, { interactive: false, icon: mapIcon_1["default"], position: [position.latitude, position.longitude] }))),
                    react_1["default"].createElement("div", { className: "input-block" },
                        react_1["default"].createElement("label", { htmlFor: "name" }, "Nome"),
                        react_1["default"].createElement("input", { id: "name", value: name, onChange: function (event) { return setName(event.target.value); } })),
                    react_1["default"].createElement("div", { className: "input-block" },
                        react_1["default"].createElement("label", { htmlFor: "about" },
                            "Sobre ",
                            react_1["default"].createElement("span", null, "M\u00E1ximo de 300 caracteres")),
                        react_1["default"].createElement("textarea", { id: "name", value: about, onChange: function (event) { return setAbout(event.target.value); }, maxLength: 300 })),
                    react_1["default"].createElement("div", { className: "input-block" },
                        react_1["default"].createElement("label", { htmlFor: "images" }, "Fotos"),
                        react_1["default"].createElement("div", { className: "images-container" },
                            react_1["default"].createElement("label", { htmlFor: "image[]", className: "new-image" },
                                react_1["default"].createElement(fi_1.FiPlus, { size: 24, color: "#15b6d6" }))),
                        react_1["default"].createElement("input", { multiple: true, type: "file", id: "image[]", onChange: handleSelectImage }))),
                react_1["default"].createElement("fieldset", null,
                    react_1["default"].createElement("legend", null, "Visita\u00E7\u00E3o"),
                    react_1["default"].createElement("div", { className: "input-block" },
                        react_1["default"].createElement("label", { htmlFor: "instructions" }, "Instru\u00E7\u00F5es"),
                        react_1["default"].createElement("textarea", { id: "instructions", value: instructions, onChange: function (event) { return setInstructions(event.target.value); } })),
                    react_1["default"].createElement("div", { className: "input-block" },
                        react_1["default"].createElement("label", { htmlFor: "opening_hours" }, "Nome"),
                        react_1["default"].createElement("input", { id: "opening_hours", value: opening_hours, onChange: function (event) { return setOpeningHours(event.target.value); } })),
                    react_1["default"].createElement("div", { className: "input-block" },
                        react_1["default"].createElement("label", { htmlFor: "open_on_weekends" }, "Atende fim de semana"),
                        react_1["default"].createElement("div", { className: "button-select" },
                            react_1["default"].createElement("button", { type: "button", className: open_on_weekends ? 'active' : '', onClick: function () { return setOpenOnWeekends(true); } }, "Sim"),
                            react_1["default"].createElement("button", { type: "button", className: !open_on_weekends ? 'active' : '', onClick: function () { return setOpenOnWeekends(false); } }, "N\u00E3o")))),
                react_1["default"].createElement("button", { className: "confirm-button", type: "submit" }, "Confirmar")))));
}
exports["default"] = CreateOrphanage;
// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
