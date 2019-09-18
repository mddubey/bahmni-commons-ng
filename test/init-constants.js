//This file defines got few global variables which the libraries expect to be present.
// This is just used in tests in files section of karma-config

var Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};

Bahmni.Common.Constants = Bahmni.Common.Constants || {};
Bahmni.Common.Constants.RESTWS_V1 = '/openmrs/ws/rest/v1';
Bahmni.Common.Constants.documentsPath = '/document_images';
Bahmni.Common.Constants.endVisitAndCreateEncounterUrl = '/openmrs/ws/rest/v1/bahmnicore/visit/endVisitAndCreateEncounter';
Bahmni.Common.Constants.observationsUrl = '/openmrs/ws/rest/v1/bahmnicore/observations';
Bahmni.Common.Constants.bahmniVisitLocationUrl = '/openmrs/ws/rest/v1/bahmnicore/visitLocation';
Bahmni.Common.Constants.bahmniDispositionByVisitUrl = '/openmrs/ws/rest/v1/bahmnicore/disposition/visit';
Bahmni.Common.Constants.bahmniDispositionByPatientUrl = '/openmrs/ws/rest/v1/bahmnicore/disposition/patient';
Bahmni.Common.Constants.openmrsUrl = '/openmrs';
Bahmni.Common.Constants.ruledOutdiagnosisStatus = 'Ruled Out Diagnosis';

Bahmni.Registration = Bahmni.Registration || {};

