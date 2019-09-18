'use strict';
window.Bahmni = window.Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.Domain = Bahmni.Common.Domain || {};
Bahmni.Common.Domain.Helper = Bahmni.Common.Domain.Helper || {};

angular.module('bahmni.common.domain', []);

require("./helpers/domainHelpers")

require("./mappers/attributeFormatter")
require("./mappers/attributeTypeMapper")
require("./mappers/conceptMapper")
require("./mappers/diagnosisMapper")
require("./mappers/observationMapper")
require("./mappers/observationValueMapper")
require("./mappers/patientProgramMapper")
require("./mappers/providerMapper")

require("./models/condition")
require("./models/diagnosis")
require("./models/retrospectiveEntry")

require("./services/bedService")
require("./services/conditionsService")
require("./services/configurationService")
require("./services/diagnosisService")
require("./services/dispositionService")
require("./services/encounterService")
require("./services/localeService")
require("./services/locationService")
require("./services/observationsService")
require("./services/programService")
require("./services/providerService")
require("./services/retrospectiveEntryService")
require("./services/visitDocumentService")
require("./services/visitService")

require("./encounterConfig")
require("./observationFilter")