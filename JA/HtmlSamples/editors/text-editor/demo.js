$(function () {
$(document).ready(function () {
            $("#email").igTextEditor({
                placeHolder: "john@email.com",
                validatorOptions: {
                    email: true
                }
            });

            $("#serialNumber").igTextEditor({
                width: "300px"
            });

            $("#zipCode").igNumericEditor({
                placeHolder: "00000"
            });

            $("#phone").igNumericEditor({
                placeHolder: "(555) 555-555"
            });

            $("#comment").igTextEditor({
                textMode: "multiline",
                height: 100,
                width: 250,
                visibleItemsCount: 5
            });

            $('#readonly').igCheckboxEditor({
                valueChanged: function (evt, ui) {
                    if (ui.newState == true) {
                        $("#comment").igTextEditor("option", "readOnly", true);
                    }
                    else {
                        $("#comment").igTextEditor("option", "readOnly", false);
                    }

                }
            });
            $('#lock').igNotifier({
                direction: "top",
                showOn: "mouseenter",
                state: "info",
                showIcon: true,
                messages: {
                    info: "チェックするとコメント エリアを読み取り専用にします。"
                }
            });

            $('#disable').igCheckboxEditor({
                valueChanged: function (evt, ui) {
                    if (ui.newState == true) {
                        $("#comment").igTextEditor("option", "disabled", true);
                    }
                    else {
                        $("#comment").igTextEditor("option", "disabled", false);
                    }

                }
            });

            $("#btn").click(function () {
                $("#email").igTextEditor("option", "value", "");
                $("#serialNumber").igTextEditor("option", "value", "");
                $("#zipCode").igNumericEditor("option", "value", "");
                $("#phone").igNumericEditor("option", "value", "");
                $("#comment").igTextEditor("option", "value", "");
                $("#readonly").igCheckboxEditor("option", "checked", false);
                $("#disable").igCheckboxEditor("option", "checked", false);
            });
        });
});