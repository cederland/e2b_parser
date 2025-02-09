<?xml version="1.0" encoding="UTF-8"?><!--		Conversion Style-Sheet (OIDs)		Version:		0.9		Date:			21/06/2011		Status:		Step 4		Author:		Laurent DESQUEPER (EU)			Version:		1.1		Date:			21/11/2016		Status:			Draft		Author:			Nick Halsey (EU)		Amendment:	Addition of ICH CodeSystemVersion and EU specific OIDs		Version:		1.2		Date:			04/08/2017		Status:			Final		Author:			Nick Halsey (EU)		Amendment:	Addition of code to allow N.2.r.2 to be copied into A.3.2.1 for NCA rerouted R3 files.--><xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:hl7-org:v3" xmlns:mif="urn:hl7-org:v3/mif">	<xsl:variable name="oidISOCountry">1.0.3166.1.2.2</xsl:variable>	<xsl:variable name="oidGenderCode">1.0.5218</xsl:variable>	<xsl:variable name="oidUCUM">2.16.840.1.113883.6.8</xsl:variable>	<xsl:variable name="oidMedDRA">2.16.840.1.113883.6.163</xsl:variable>	<xsl:variable name="oidSenderIdentifierValue">2.16.840.1.113883.3.989.2.1.1.1</xsl:variable>	<xsl:variable name="oidObservationCode">2.16.840.1.113883.3.989.2.1.1.19</xsl:variable>	<xsl:variable name="oidAttentionLineCode">2.16.840.1.113883.3.989.2.1.1.24</xsl:variable>	<xsl:variable name="oidAssignedEntityRoleCode">2.16.840.1.113883.3.989.2.1.1.21</xsl:variable>	<xsl:variable name="oidActionPerformedCode">2.16.840.1.113883.3.989.2.1.1.18</xsl:variable>	<xsl:variable name="oidReportRelationCode">2.16.840.1.113883.3.989.2.1.1.22</xsl:variable>	<xsl:variable name="oidReportCharacterizationCode">2.16.840.1.113883.3.989.2.1.1.23</xsl:variable>	<!-- B.3 - Test -->	<!-- MedDRA version for Tests change this value to the correct version of MedDRA being used-->	<xsl:variable name="testResMedDRAver">20.0</xsl:variable><!-- B.3 -->	<!-- Use Recoded EudraVigilance product and substance names instead of verbatim term -->		<!-- set value to 1 to use EV recoding-->	   <xsl:variable name="XEVMPD"></xsl:variable>	<!-- Use N.2.r.2 to populate A.3.2.1 for NCAs to preserve original sending organisation -->	<!-- set value to 1 to enable it-->		<xsl:variable name="NCAREROUTE"></xsl:variable><!-- EV product -->			<!-- M.1 Fields - Batch Wrapper -->	<!-- M.1.1 -->	<xsl:variable name="oidMessageType">2.16.840.1.113883.3.989.2.1.1.1</xsl:variable>	<xsl:variable name="oidMessageTypeCSV">2.0</xsl:variable>	<!-- M.1.4 -->	<xsl:variable name="oidBatchNumber">2.16.840.1.113883.3.989.2.1.3.22</xsl:variable>	<!-- M.1.5 -->	<xsl:variable name="oidBatchSenderId">2.16.840.1.113883.3.989.2.1.3.13</xsl:variable>	<!-- M.1.6 -->	<xsl:variable name="oidBatchReceiverId">2.16.840.1.113883.3.989.2.1.3.14</xsl:variable>	<!-- M.2 Fields - Message Wrapper -->	<!-- M.2.r.4 -->	<xsl:variable name="oidMessageNumber">2.16.840.1.113883.3.989.2.1.3.1</xsl:variable>	<!-- M.2.r.5 -->	<xsl:variable name="oidMessageSenderId">2.16.840.1.113883.3.989.2.1.3.11</xsl:variable>	<!-- M.2.r.6 -->	<xsl:variable name="oidMessageReceiverId">2.16.840.1.113883.3.989.2.1.3.12</xsl:variable>	<!-- A.1 Fields - Case Safety Report -->	<!-- A.1.0.1 -->	<xsl:variable name="oidSendersReportNamespace">2.16.840.1.113883.3.989.2.1.3.1</xsl:variable>	<!-- A.1.4 -->	<xsl:variable name="ReportType">1</xsl:variable>	<xsl:variable name="oidReportType">2.16.840.1.113883.3.989.2.1.1.2</xsl:variable>	<xsl:variable name="oidReportTypeCSV">2.0</xsl:variable>	<!-- A.1.8 -->	<xsl:variable name="AdditionalDocumentsAvailable">1</xsl:variable>	<!-- A.1.9 -->	<xsl:variable name="LocalCriteriaForExpedited">23</xsl:variable>	<!-- A.1.10.1/12 -->	<xsl:variable name="oidWorldWideCaseID">2.16.840.1.113883.3.989.2.1.3.2</xsl:variable>	<!-- A.1.10.2 -->	<xsl:variable name="InitialReport">1</xsl:variable>	<xsl:variable name="oidFirstSender">2.16.840.1.113883.3.989.2.1.1.3</xsl:variable>	<xsl:variable name="oidFirstSenderCSV">2.0</xsl:variable>	<!-- A.1.11 -->	<xsl:variable name="OtherCaseIDs">2</xsl:variable>	<!-- A.1.11.r.2 -->	<xsl:variable name="oidCaseIdentifier">2.16.840.1.113883.3.989.2.1.3.3</xsl:variable>	<!-- A.1.13 -->	<xsl:variable name="NullificationAmendmentCode">3</xsl:variable>	<xsl:variable name="oidNullificationAmendment">2.16.840.1.113883.3.989.2.1.1.5</xsl:variable>	<xsl:variable name="oidNullificationAmendmentCSV">2.0</xsl:variable>	<!-- A.1.13.1 -->	<xsl:variable name="NullificationAmendmentReason">4</xsl:variable>	<!-- A.2 - Primary Source -->	<!-- A.2 -->	<xsl:variable name="SourceReport">2</xsl:variable>	<!-- A.2.r.1.4 -->	<xsl:variable name="oidQualification">2.16.840.1.113883.3.989.2.1.1.6</xsl:variable>	<xsl:variable name="oidQualificationCSV">2.0</xsl:variable>	<!-- A.3 - Sender -->	<!-- A.3.1 -->	<xsl:variable name="oidSenderType">2.16.840.1.113883.3.989.2.1.1.7</xsl:variable>	<xsl:variable name="oidSenderTypeCSV">2.0</xsl:variable>	<!-- A.5 - Study Identification -->	<!-- A.5 -->	<xsl:variable name="SponsorStudyNumber">2.16.840.1.113883.3.989.2.1.3.5</xsl:variable>	<!-- A.5.1.r.1 -->	<xsl:variable name="StudyRegistrationNumber">2.16.840.1.113883.3.989.2.1.3.6</xsl:variable>	<!-- A.5.4 -->	<xsl:variable name="oidStudyType">2.16.840.1.113883.3.989.2.1.1.8</xsl:variable>	<xsl:variable name="oidStudyTypeCSV">2.0</xsl:variable>	<!-- B.1 / B.1.10 - Patient / Parent -->	<xsl:variable name="oidSourceMedicalRecord">2.16.840.1.113883.3.989.2.1.1.4</xsl:variable>	<!-- B.1.1.1a -->	<xsl:variable name="GPMrn">1</xsl:variable>	<xsl:variable name="oidGPMedicalRecordNumber">2.16.840.1.113883.3.989.2.1.3.7</xsl:variable>	<!-- B.1.1.1b -->	<xsl:variable name="SpecialistMrn">2</xsl:variable>	<xsl:variable name="oidSpecialistRecordNumber">2.16.840.1.113883.3.989.2.1.3.8</xsl:variable>	<!-- B.1.1.1c -->	<xsl:variable name="HospitalMrn">3</xsl:variable>	<xsl:variable name="oidHospitalRecordNumber">2.16.840.1.113883.3.989.2.1.3.9</xsl:variable>	<!-- B.1.1.1d -->	<xsl:variable name="Investigation">4</xsl:variable>	<xsl:variable name="oidInvestigationNumber">2.16.840.1.113883.3.989.2.1.3.10</xsl:variable>	<!-- B.1.2.2 -->	<xsl:variable name="Age">3</xsl:variable>	<!-- B.1.2.2.1 -->	<xsl:variable name="GestationPeriod">16</xsl:variable>	<!-- B.1.2.3 -->	<xsl:variable name="AgeGroup">4</xsl:variable>	<!-- B.1.2.3 -->	<xsl:variable name="oidAgeGroup">2.16.840.1.113883.3.989.2.1.1.9</xsl:variable>	<xsl:variable name="oidAgeGroupCSV">2.0</xsl:variable>	<!-- B.1.3 -->	<xsl:variable name="BodyWeight">7</xsl:variable>	<!-- B.1.4 -->	<xsl:variable name="Height">17</xsl:variable>	<!-- B.1.6 -->	<xsl:variable name="LastMenstrualPeriodDate">22</xsl:variable>	<!-- B.1.10 -->	<xsl:variable name="Parent">PRN</xsl:variable>	<!-- B.1.7 / B.1.10.7 - Medical History -->	<!-- B.1.7 -->	<xsl:variable name="RelevantMedicalHistoryAndConcurrentConditions">1</xsl:variable>	<!-- B.1.7.1.r.d -->	<xsl:variable name="Continuing">13</xsl:variable>	<!-- B.1.7.1.r.g -->	<xsl:variable name="Comment">10</xsl:variable>	<!-- B.1.7.2 -->	<xsl:variable name="HistoryAndConcurrentConditionText">18</xsl:variable>	<!-- B.1.7.3 -->	<xsl:variable name="ConcommitantTherapy">11</xsl:variable>	<!-- B.1.8 / B.1.10.8 - Drug History -->	<!-- B.1.8 -->	<xsl:variable name="DrugHistory">2</xsl:variable>	<!-- B.1.8.r.a1 -->	<xsl:variable name="MPID">MPID</xsl:variable>	<!-- B.1.8.r.a3 -->	<xsl:variable name="PhPID">PhPID</xsl:variable>	<!-- B.1.8.r.f.2 -->	<xsl:variable name="Indication">19</xsl:variable>	<!-- B.1.8.r.g.2 -->	<xsl:variable name="Reaction">29</xsl:variable>	<!-- B.1.9 -->	<!-- B.1.9.2 -->	<xsl:variable name="ReportedCauseOfDeath">32</xsl:variable>	<!-- B.1.9.3 -->	<xsl:variable name="Autopsy">5</xsl:variable>	<!-- B.1.9.4 -->	<xsl:variable name="CauseOfDeath">8</xsl:variable>	<!-- B.2 - Reaction -->	<!-- B.2.i -->	<xsl:variable name="oidInternalReferencesToReaction">oidInternalReferencesToReaction</xsl:variable>	<!-- B.2.i.0.b -->	<xsl:variable name="ReactionForTranslation">30</xsl:variable>	<!-- B.2.i.2.1 -->	<xsl:variable name="TermHighlightedByReporter">37</xsl:variable>	<xsl:variable name="oidTermHighlighted">2.16.840.1.113883.3.989.2.1.1.10</xsl:variable>	<xsl:variable name="oidTermHighlightedCSV">2.0</xsl:variable>	<!-- B.2.i.2.2 -->	<xsl:variable name="ResultsInDeath">34</xsl:variable>	<xsl:variable name="LifeThreatening">21</xsl:variable>	<xsl:variable name="CausedProlongedHospitalisation">33</xsl:variable>	<xsl:variable name="DisablingIncapaciting">35</xsl:variable>	<xsl:variable name="CongenitalAnomalyBirthDefect">12</xsl:variable>	<xsl:variable name="OtherMedicallyImportantCondition">26</xsl:variable>	<!-- B.2.i.6 -->	<xsl:variable name="Outcome">27</xsl:variable>	<xsl:variable name="oidOutcome">2.16.840.1.113883.3.989.2.1.1.11</xsl:variable>	<xsl:variable name="oidOutcomeCSV">2.0</xsl:variable>		<xsl:variable name="TestsAndProceduresRelevantToTheInvestigation">3</xsl:variable>	<!-- B.3.r.4 -->	<xsl:variable name="MoreInformationAvailable">25</xsl:variable>	<!-- B.4 - Drug -->	<!-- B.4 -->	<xsl:variable name="DrugInformation">4</xsl:variable>	<xsl:variable name="oidValueGroupingCode">2.16.840.1.113883.3.989.2.1.1.20</xsl:variable>	<!-- B.4.k.1 -->	<xsl:variable name="InterventionCharacterization">20</xsl:variable>	<xsl:variable name="oidDrugRole">2.16.840.1.113883.3.989.2.1.1.13</xsl:variable>	<xsl:variable name="oidDrugRoleCSV">2.0</xsl:variable>	<!-- B.4.k.2.4 -->	<xsl:variable name="RetailSupply">1</xsl:variable>	<!-- B.4.k.2.5 -->	<xsl:variable name="Blinded">6</xsl:variable>	<!-- B.4.k.3 -->	<xsl:variable name="oidAuthorisationNumber">2.16.840.1.113883.3.989.2.1.3.4</xsl:variable>	<!-- B.4.k.4.r.12/13-->	<xsl:variable name="oidICHRoute">2.16.840.1.113883.3.989.2.1.1.14</xsl:variable>	<xsl:variable name="oidICHRouteCSV">2.0</xsl:variable>	<!-- B.4.k.4.r.13.2 -->	<xsl:variable name="ParentRouteOfAdministration">28</xsl:variable>	<!-- B.4.k.5.1 -->	<xsl:variable name="CumulativeDoseToReaction">14</xsl:variable>	<!-- B.4.k.7 -->	<xsl:variable name="SourceReporter">3</xsl:variable>	<!-- B.4.k.8 -->	<xsl:variable name="oidActionTaken">2.16.840.1.113883.3.989.2.1.1.15</xsl:variable>	<xsl:variable name="oidActionTakenCSV">2.0</xsl:variable>	<!-- B.4.k.9.i.2 -->	<xsl:variable name="Causality">39</xsl:variable>	<!-- B.4.k.9.i.4 -->	<xsl:variable name="RecurranceOfReaction">31</xsl:variable>	<xsl:variable name="oidRechallenge">2.16.840.1.113883.3.989.2.1.1.16</xsl:variable>	<xsl:variable name="oidRechallengeCSV">2.0</xsl:variable>	<!-- B.4.k.10 -->	<xsl:variable name="CodedDrugInformation">9</xsl:variable>	<xsl:variable name="AdditionalInformationOnDrug">2.16.840.1.113883.3.989.2.1.1.17</xsl:variable>	<xsl:variable name="AdditionalInformationOnDrugCSV">2.0</xsl:variable>	<!--A.1.8.2 -->	<xsl:variable name="documentsHeldBySender">1</xsl:variable>	<xsl:variable name="literatureReference">2</xsl:variable>	<xsl:variable name="oidichreferencesource">2.16.840.1.113883.3.989.2.1.1.27</xsl:variable>		<!-- B.4.k.11 -->	<xsl:variable name="AdditionalInformation">2</xsl:variable>	<!-- B.5 - Summary -->	<!-- B.5.3 -->	<xsl:variable name="Diagnosis">15</xsl:variable>	<xsl:variable name="Sender">1</xsl:variable>	<!-- B.5.5 -->	<xsl:variable name="SummaryAndComment">36</xsl:variable>	<xsl:variable name="Reporter">2</xsl:variable>	<!-- ACK -->	<xsl:variable name="oidAckBatchNumber">2.16.840.1.113883.3.989.2.1.3.20</xsl:variable>	<xsl:variable name="oidAckBatchReceiverID">2.16.840.1.113883.3.989.2.1.3.18</xsl:variable>	<xsl:variable name="oidAckBatchSenderID">2.16.840.1.113883.3.989.2.1.3.17</xsl:variable>	<xsl:variable name="AckLocalMessageNumber">2</xsl:variable>	<xsl:variable name="oidAckLocalMessageNumber">2.16.840.1.113883.3.989.2.1.3.21</xsl:variable>	<xsl:variable name="DateOfIcsrBatchTransmission">3</xsl:variable>	<xsl:variable name="oidLocalReportNumber">2.16.840.1.113883.3.989.2.1.3.19</xsl:variable>	<xsl:variable name="oidAckReceiverID">2.16.840.1.113883.3.989.2.1.3.16</xsl:variable>	<xsl:variable name="oidAckSenderID">2.16.840.1.113883.3.989.2.1.3.15</xsl:variable>	<xsl:variable name="oidDateOfCreation">2.16.840.1.113883.3.989.2.1.1.24</xsl:variable>	<xsl:variable name="receiptDate">1</xsl:variable>	<!--EU Specific Data fields -->	<xsl:variable name="oidEUMethodofAssessment">2.16.840.1.113883.3.989.5.1.1.5.2</xsl:variable>	<xsl:variable name="oidEUMethodofAssessmentCSV">1.0</xsl:variable>		<xsl:variable name="oidEUResultofAssessment">2.16.840.1.113883.3.989.5.1.1.5.3</xsl:variable>	<xsl:variable name="oidEUResultofAssessmentCSV">1.0</xsl:variable>		<xsl:variable name="oidEUSourceofAssessment">2.16.840.1.113883.3.989.5.1.1.5.4</xsl:variable>	<xsl:variable name="oidEUSourceofAssessmentCSV">1.0</xsl:variable>	<xsl:variable name="oidEUMessageType">2.16.840.1.113883.3.989.5.1.1.5.1</xsl:variable>	<xsl:variable name="oidEUMessageTypeCSV">1.0</xsl:variable></xsl:stylesheet>