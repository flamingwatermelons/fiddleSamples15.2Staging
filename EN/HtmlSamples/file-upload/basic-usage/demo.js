$(function () {
            $("#igUpload1").igUpload({
                mode: 'single',
                autostartupload: true,
                progressUrl: "http://staging.igniteui.local/15-2/IGUploadStatusHandler.ashx",
                controlId: "serverID1",
                onError: function (e, args) {
                    showAlert(args);
                }
            });
        });

        function showAlert(args) {
            $("#error-message").html(args.errorMessage).stop(true, true).fadeIn(500).delay(3000).fadeOut(500);
        }