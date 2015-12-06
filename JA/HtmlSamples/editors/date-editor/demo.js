$(function () {
$(document).ready(function () {
            var today = new Date(),
            tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

            $("#currentTime").igDateEditor({
                width: 230,
                dateInputFormat: "dateTime",
                value: new Date(),
                dataMode: "date",
                readOnly: true
            });

            $("#departure").igDateEditor({
                width: 230,
                dateInputFormat: "yyyy 年 M 月 d 日 (ddd)",
                value: today,
                dataMode: "date",
                valueChanged: function (evt, ui) {
                    if (ui.newValue instanceof Date) {
                        var nextDay = new Date(ui.newValue.getTime() + 24 * 60 * 60 * 1000);
                        $("#return").igDateEditor("option", "value", nextDay);
                    }
                }
            });

            $("#departureTime").igDateEditor({
                width: 230,
                dateInputFormat: "hh:mm",
                value: new Date(),
                dataMode: "date",
                buttonType: "spin",
                width: 100
            });
            $("#return").igDateEditor({
                width: 230,
                value: tomorrow,
                dateInputFormat: "yyyy 年 M 月 d 日 (ddd)",
                dataMode: "date"
            });

            $("#returnTime").igDateEditor({
                width: 230,
                dateInputFormat: "hh:mm",
                value: new Date(),
                dataMode: "date",
                buttonType: "spin",
                width: 100
            });

            $("#oneWayTicket").igCheckboxEditor({
                checked: false,
                valueChanged: function(evt, ui) {
                    if (ui.newState == true) {
                        $("#return").igDateEditor("option", "disabled", true);
                        $("#returnTime").igDateEditor("option", "disabled", true);

                    }
                    else {
                        $("#return").igDateEditor("option", "disabled", false);
                        $("#returnTime").igDateEditor("option", "disabled", false);

                    }
                }
            });
        });
});