angular.module('bahmni.common.patient', []);

require ("./directives/eventStopPropagation");
require ("./directives/patientSummary");
require ("./filters/age");
require ("./filters/birthDateToAgeText");
require ("./filters/dateToAge");
require ("./filters/gender");
require ("./mappers/patientContextMapper");
require ("./mappers/patientMapper" );
require ("./services/patientService");