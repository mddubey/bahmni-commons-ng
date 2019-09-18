angular
    .module('bahmni.common.uiHelper', ['ngClipboard'])
    .run(["$templateCache", function ($templateCache) {
        $templateCache.put('ui-helper-error', require("./error.html"));
        $templateCache.put('ui-helper-header', require("./header.html"));
        $templateCache.put('ui-helper-messages', require("./messages.html"));
        $templateCache.put('ui-helper-save-confirmation', require("./views/saveConfirmation.html"));
        $templateCache.put('ui-helper-confirm-box', require("./views/confirmBox.html"));
    }]);

require("./printer")
require("./spinner")
require("./directives")

require("./services/backlinkService")
require("./services/confirmBoxService")
require("./services/contextChangeHandler")
require("./services/messagingService")
require("./services/stateChangeSpinner")

require("./filters/dateFilters")
require("./filters/formatDecimalValues")
require("./filters/reverse")
require("./filters/thumbnail")

require("./directives/assignHeight")
require("./directives/autoScroll")
require("./directives/backLinks")
require("./directives/bahmniAutocomplete")
require("./directives/bmShow")
require("./directives/compileHtml")
require("./directives/conceptAutocomplete")
require("./directives/confirmOnExit")
require("./directives/dateConverter")
require("./directives/datetimepicker")
require("./directives/fallbackSrc")
require("./directives/fixedFirstColumn")
require("./directives/focusMe")
require("./directives/focusOn")
require("./directives/focusOnInputErrors")
require("./directives/gallery")
require("./directives/monthyearpicker")
require("./directives/ngConfirmClick")
require("./directives/popOver")
require("./directives/providerDirective")
require("./directives/scrollToObsElement")
require("./directives/singleClick")
require("./directives/singleSubmit")
require("./directives/splitButton")
require("./directives/toggle")

require("./controllers/messageController")