// Load a standard example file if uploading / fetch doesn't work inside main.js
// Putting it as a variable inside a javascript file to avoid CORS issues
// and to avoid the need for a server to run the code

const exampleXml =
`<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<MCCI_IN200100UV01 ITSVersion="XML_1.0" xsi:schemaLocation="urn:hl7-org:v3 http://eudravigilance.ema.europa.eu/XSD/multicacheschemas/MCCI_IN200100UV01.xsd"
	xmlns="urn:hl7-org:v3"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<id root="2.16.840.1.113883.3.989.2.1.3.22" extension="Test case 1a (Fatal EEA SUSAR)"/>
	<creationTime value="20240708113351"/>
	<responseModeCode code="D"/>
	<interactionId root="2.16.840.1.113883.1.6" extension="MCCI_IN200100UV01"/>
	<name code="1" codeSystem="2.16.840.1.113883.3.989.2.1.1.1" codeSystemVersion="2.0" displayName="ICHICSR"/>
	<PORR_IN049016UV>
		<id root="2.16.840.1.113883.3.989.2.1.3.1" extension="SE-EMA-TESTCASE01A"/>
		<creationTime value="20240708113351"/>
		<interactionId root="2.16.840.1.113883.1.6" extension="PORR_IN049016UV"/>
		<processingCode code="P"/>
		<processingModeCode code="T"/>
		<acceptAckCode code="AL"/>
		<receiver typeCode="RCV">
			<device classCode="DEV" determinerCode="INSTANCE">
				<id root="2.16.840.1.113883.3.989.2.1.3.12" extension="EVCTMTEST"/>
			</device>
		</receiver>
		<sender typeCode="SND">
			<device classCode="DEV" determinerCode="INSTANCE">
				<id root="2.16.840.1.113883.3.989.2.1.3.11" extension="EVTESTWT"/>
			</device>
		</sender>
		<controlActProcess classCode="CACT" moodCode="EVN">
			<code code="PORR_TE049016UV" codeSystem="2.16.840.1.113883.1.18"/>
			<effectiveTime value="20240708113351"/>
			<subject typeCode="SUBJ">
				<investigationEvent classCode="INVSTG" moodCode="EVN">
					<id root="2.16.840.1.113883.3.989.2.1.3.1" extension="SE-EMA-TESTCASE01A"/>
					<id root="2.16.840.1.113883.3.989.2.1.3.2" extension="SE-EMA-TESTCASE01A"/>
					<code code="PAT_ADV_EVNT" codeSystem="2.16.840.1.113883.5.4"/>
					<text>An obese 69 year-old man took 10ml of strawberry-flavoured Calpol for headache &amp; toothache at 10am &amp; 2pm. At 8pm he experienced a massive cardiac arrest and died at 10pm</text>
					<statusCode code="active"/>
					<effectiveTime>
						<low value="20170529"/>
					</effectiveTime>
					<availabilityTime value="20170529"/>
					<reference typeCode="REFR">
						<document classCode="DOC" moodCode="EVN">
							<code code="1" codeSystem="2.16.840.1.113883.3.989.2.1.1.27" codeSystemVersion="2.0" displayName="documentsHeldBySender"/>
							<title>ECG printout</title>
						</document>
					</reference>
					<component typeCode="COMP">
						<observationEvent classCode="OBS" moodCode="EVN">
							<code code="1" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="additionalDocumentsAvailable"/>
							<value xsi:type="BL" value="true"/>
						</observationEvent>
					</component>
					<component typeCode="COMP">
						<observationEvent classCode="OBS" moodCode="EVN">
							<code code="23" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="localCriteriaForExpedited"/>
							<value xsi:type="BL" value="true"/>
						</observationEvent>
					</component>
					<component typeCode="COMP">
						<adverseEventAssessment classCode="INVSTG" moodCode="EVN">
							<subject1 typeCode="SBJ">
								<primaryRole classCode="INVSBJ">
									<player1 classCode="PSN" determinerCode="INSTANCE">
										<name>MN</name>
										<administrativeGenderCode code="1" codeSystem="1.0.5218"/>
										<deceasedTime value="20170522"/>
										<asIdentifiedEntity classCode="IDENT">
											<id root="2.16.840.1.113883.3.989.2.1.3.7" extension="Al3"/>
											<code code="1" codeSystem="2.16.840.1.113883.3.989.2.1.1.4" codeSystemVersion="2.0" displayName="GP"/>
										</asIdentifiedEntity>
										<asIdentifiedEntity classCode="IDENT">
											<id root="2.16.840.1.113883.3.989.2.1.3.8" extension="X23"/>
											<code code="2" codeSystem="2.16.840.1.113883.3.989.2.1.1.4" codeSystemVersion="2.0" displayName="Specialist"/>
										</asIdentifiedEntity>
										<asIdentifiedEntity classCode="IDENT">
											<id root="2.16.840.1.113883.3.989.2.1.3.9" extension="Y46"/>
											<code code="3" codeSystem="2.16.840.1.113883.3.989.2.1.1.4" codeSystemVersion="2.0" displayName="Hospital Record"/>
										</asIdentifiedEntity>
										<asIdentifiedEntity classCode="IDENT">
											<id root="2.16.840.1.113883.3.989.2.1.3.10" extension="ABC-123"/>
											<code code="4" codeSystem="2.16.840.1.113883.3.989.2.1.1.4" codeSystemVersion="2.0" displayName="Investigation"/>
										</asIdentifiedEntity>
									</player1>
									<subjectOf1 typeCode="SBJ">
										<researchStudy classCode="CLNTRL" moodCode="EVN">
											<id root="2.16.840.1.113883.3.989.2.1.3.5" extension="PMN1"/>
											<code code="1" codeSystem="2.16.840.1.113883.3.989.2.1.1.8" codeSystemVersion="2.0" displayName="Clinical trials"/>
											<title>Pippi&apos;s interventional study of Mr Nilsson</title>
											<authorization typeCode="AUTH">
												<studyRegistration classCode="ACT" moodCode="EVN">
													<id root="2.16.840.1.113883.3.989.2.1.3.6" extension="2020-509992-41-00"/>
													<author typeCode="AUT">
														<territorialAuthority classCode="TERR">
															<governingPlace classCode="COUNTRY" determinerCode="INSTANCE">
																<code xsi:type="CE" code="EU" codeSystem="1.0.3166.1.2.2" displayName="European Union"/>
															</governingPlace>
														</territorialAuthority>
													</author>
												</studyRegistration>
											</authorization>
										</researchStudy>
									</subjectOf1>
									<subjectOf2 typeCode="SBJ">
										<observation classCode="OBS" moodCode="EVN">
											<code code="3" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="age"/>
											<value xsi:type="PQ" value="69" unit="a"/>
										</observation>
									</subjectOf2>
									<subjectOf2 typeCode="SBJ">
										<observation classCode="OBS" moodCode="EVN">
											<code code="7" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="bodyWeight"/>
											<value xsi:type="PQ" value="120" unit="kg"/>
										</observation>
									</subjectOf2>
									<subjectOf2 typeCode="SBJ">
										<observation classCode="OBS" moodCode="EVN">
											<code code="17" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="height"/>
											<value xsi:type="PQ" value="183" unit="cm"/>
										</observation>
									</subjectOf2>
									<subjectOf2 typeCode="SBJ">
										<organizer classCode="CATEGORY" moodCode="EVN">
											<code code="1" codeSystem="2.16.840.1.113883.3.989.2.1.1.20" codeSystemVersion="2.0" displayName="relevantMedicalHistoryAndConcurrentConditions"/>
											<component typeCode="COMP">
												<observation classCode="OBS" moodCode="EVN">
													<code code="10052416" codeSystem="2.16.840.1.113883.6.163" codeSystemVersion="27.0" displayName="Hairy skin itching"/>
													<effectiveTime xsi:type="IVL_TS">
														<low value="20110201"/>
														<high value="20120620"/>
													</effectiveTime>
													<outboundRelationship2 typeCode="COMP">
														<observation classCode="OBS" moodCode="EVN">
															<code code="10" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="comment"/>
															<value xsi:type="ED">Recovered after steroid treatment</value>
														</observation>
													</outboundRelationship2>
													<inboundRelationship typeCode="REFR">
														<observation classCode="OBS" moodCode="EVN">
															<code code="13" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="continuing"/>
															<value xsi:type="BL" value="false"/>
														</observation>
													</inboundRelationship>
												</observation>
											</component>
											<component typeCode="COMP">
												<observation classCode="OBS" moodCode="EVN">
													<code code="10029883" codeSystem="2.16.840.1.113883.6.163" codeSystemVersion="27.0" displayName="Obesity"/>
													<inboundRelationship typeCode="REFR">
														<observation classCode="OBS" moodCode="EVN">
															<code code="13" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="continuing"/>
															<value xsi:type="BL" value="true"/>
														</observation>
													</inboundRelationship>
												</observation>
											</component>
											<component typeCode="COMP">
												<observation classCode="OBS" moodCode="EVN">
													<code code="18" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="historyAndConcurrentConditionText"/>
													<value xsi:type="ED">medical history text...</value>
												</observation>
											</component>
										</organizer>
									</subjectOf2>
									<subjectOf2 typeCode="SBJ">
										<observation classCode="OBS" moodCode="EVN">
											<code code="5" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="autopsy"/>
											<value xsi:type="BL" value="true"/>
											<outboundRelationship2 typeCode="DRIV">
												<observation classCode="OBS" moodCode="EVN">
													<code code="8" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="causeOfDeath"/>
													<value xsi:type="CE" code="10047290" codeSystem="2.16.840.1.113883.6.163" codeSystemVersion="27.0" displayName="Ventricular fibrillation"/>
												</observation>
											</outboundRelationship2>
											<outboundRelationship2 typeCode="DRIV">
												<observation classCode="OBS" moodCode="EVN">
													<code code="8" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="causeOfDeath"/>
													<value xsi:type="CE" code="10028597" codeSystem="2.16.840.1.113883.6.163" codeSystemVersion="27.0" displayName="Myocardial infarction acute">
														<originalText>Autopsy text...</originalText>
													</value>
												</observation>
											</outboundRelationship2>
										</observation>
									</subjectOf2>
									<subjectOf2 typeCode="SBJ">
										<observation classCode="OBS" moodCode="EVN">
											<code code="32" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="reportedCauseOfDeath"/>
											<value xsi:type="CE" code="10007515" codeSystem="2.16.840.1.113883.6.163" codeSystemVersion="27.0" displayName="Cardiac arrest">
												<originalText>Reported cause of death text...</originalText>
											</value>
										</observation>
									</subjectOf2>
									<subjectOf2 typeCode="SBJ">
										<organizer classCode="CATEGORY" moodCode="EVN">
											<code code="4" codeSystem="2.16.840.1.113883.3.989.2.1.1.20" codeSystemVersion="2.0" displayName="drugInformation"/>
											<component typeCode="COMP">
												<substanceAdministration classCode="SBADM" moodCode="EVN">
													<id root="409f5740-7f10-3dde-b7a6-1a134889cf4f"/>
													<consumable typeCode="CSM">
														<instanceOfKind classCode="INST">
															<kindOfProduct classCode="MMAT" determinerCode="KIND">
																<name>Calpol</name>
																<asManufacturedProduct classCode="MANU">
																	<subjectOf typeCode="SBJ">
																		<approval classCode="CNTRCT" moodCode="EVN">
																			<id root="2.16.840.1.113883.3.989.2.1.3.4" extension="Pl 393993/23333"/>
																			<holder typeCode="HLD">
																				<role classCode="HLD">
																					<playingOrganization classCode="ORG" determinerCode="INSTANCE">
																						<name>NoSuchPharm</name>
																					</playingOrganization>
																				</role>
																			</holder>
																			<author typeCode="AUT">
																				<territorialAuthority classCode="TERR">
																					<territory classCode="NAT" determinerCode="INSTANCE">
																						<code code="SE" codeSystem="1.0.3166.1.2.2" displayName="Sweden"/>
																					</territory>
																				</territorialAuthority>
																			</author>
																		</approval>
																	</subjectOf>
																</asManufacturedProduct>
																<ingredient classCode="ACTI">
																	<ingredientSubstance classCode="MMAT" determinerCode="KIND">
																		<name>PARACETAMOL</name>
																	</ingredientSubstance>
																</ingredient>
															</kindOfProduct>
														</instanceOfKind>
													</consumable>
													<outboundRelationship1 typeCode="SAS">
														<pauseQuantity value="10" unit="h"/>
														<actReference classCode="OBS" moodCode="EVN">
															<id root="188b6608-52e7-3d45-8df8-2eb6b1bfd554"/>
														</actReference>
													</outboundRelationship1>
													<outboundRelationship1 typeCode="SAE">
														<pauseQuantity value="6" unit="h"/>
														<actReference classCode="OBS" moodCode="EVN">
															<id root="188b6608-52e7-3d45-8df8-2eb6b1bfd554"/>
														</actReference>
													</outboundRelationship1>
													<outboundRelationship2 typeCode="SUMM">
														<observation classCode="OBS" moodCode="EVN">
															<code code="14" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="cumulativeDoseToReaction"/>
															<value xsi:type="PQ" value="20.0" unit="mL"/>
														</observation>
													</outboundRelationship2>
													<outboundRelationship2 typeCode="REFR">
														<observation classCode="OBS" moodCode="EVN">
															<code code="2" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="additionalInformation"/>
															<value xsi:type="ST">Yes...</value>
														</observation>
													</outboundRelationship2>
													<outboundRelationship2 typeCode="COMP">
														<substanceAdministration classCode="SBADM" moodCode="EVN">
															<text>10 ml at 10am &amp; 2pm</text>
															<effectiveTime xsi:type="SXPR_TS">
																<comp xsi:type="PIVL_TS">
																	<period value="1" unit="{total}"/>
																</comp>
																<comp xsi:type="IVL_TS">
																	<low value="20170522"/>
																	<high value="20170522"/>
																</comp>
																<comp xsi:type="IVL_TS" operator="A">
																	<width value="4" unit="h"/>
																</comp>
															</effectiveTime>
															<routeCode code="ROA-20053000" codeSystem="0.4.0.127.0.16.1.1.2.6" displayName="Oral use"/>
															<doseQuantity value="20" unit="mL"/>
															<consumable typeCode="CSM">
																<instanceOfKind classCode="INST">
																	<productInstanceInstance classCode="MMAT" determinerCode="INSTANCE">
																		<lotNumberText nullFlavor="UNK"/>
																	</productInstanceInstance>
																	<kindOfProduct classCode="MMAT" determinerCode="KIND">
																		<formCode>
																			<originalText>Syrup</originalText>
																		</formCode>
																	</kindOfProduct>
																</instanceOfKind>
															</consumable>
														</substanceAdministration>
													</outboundRelationship2>
													<outboundRelationship2 typeCode="PERT">
														<observation classCode="OBS" moodCode="EVN">
															<code code="31" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="recurranceOfReaction"/>
															<value xsi:type="CE" code="4" codeSystem="2.16.840.1.113883.3.989.2.1.1.16" codeSystemVersion="2.0" displayName="no - n/a (no rechallenge was done, recurrence is not applicable)"/>
															<outboundRelationship1 typeCode="REFR">
																<actReference classCode="OBS" moodCode="EVN">
																	<id root="188b6608-52e7-3d45-8df8-2eb6b1bfd554"/>
																</actReference>
															</outboundRelationship1>
														</observation>
													</outboundRelationship2>
													<inboundRelationship typeCode="CAUS">
														<act classCode="ACT" moodCode="EVN">
															<code xsi:type="CE" code="9" codeSystem="2.16.840.1.113883.3.989.2.1.1.15" codeSystemVersion="2.0" displayName="Not applicable"/>
														</act>
													</inboundRelationship>
													<inboundRelationship typeCode="RSON">
														<observation classCode="OBS" moodCode="EVN">
															<code code="19" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="indication"/>
															<value xsi:type="CE" code="10044055" codeSystem="2.16.840.1.113883.6.163" codeSystemVersion="27.0" displayName="Toothache">
																<originalText>Toothache</originalText>
															</value>
															<performer typeCode="PRF">
																<assignedEntity classCode="ASSIGNED">
																	<code code="3" codeSystem="2.16.840.1.113883.3.989.2.1.1.21" codeSystemVersion="2.0" displayName="sourceReporter"/>
																</assignedEntity>
															</performer>
														</observation>
													</inboundRelationship>
												</substanceAdministration>
											</component>
											<component typeCode="COMP">
												<substanceAdministration classCode="SBADM" moodCode="EVN">
													<id root="c5d90cf4-a2c5-3d29-92ad-d425fd920776"/>
													<consumable typeCode="CSM">
														<instanceOfKind classCode="INST">
															<kindOfProduct classCode="MMAT" determinerCode="KIND">
																<name>Spare drug</name>
																<asManufacturedProduct classCode="MANU">
																	<subjectOf typeCode="SBJ">
																		<approval classCode="CNTRCT" moodCode="EVN">
																			<id root="2.16.840.1.113883.3.989.2.1.3.4" extension="123"/>
																			<holder typeCode="HLD">
																				<role classCode="HLD">
																					<playingOrganization classCode="ORG" determinerCode="INSTANCE">
																						<name>Spare MAH</name>
																					</playingOrganization>
																				</role>
																			</holder>
																			<author typeCode="AUT">
																				<territorialAuthority classCode="TERR">
																					<territory classCode="NAT" determinerCode="INSTANCE">
																						<code codeSystem="1.0.3166.1.2.2"/>
																					</territory>
																				</territorialAuthority>
																			</author>
																		</approval>
																	</subjectOf>
																</asManufacturedProduct>
																<ingredient classCode="ACTI">
																	<ingredientSubstance classCode="MMAT" determinerCode="KIND">
																		<name>Spare substance</name>
																	</ingredientSubstance>
																</ingredient>
															</kindOfProduct>
														</instanceOfKind>
													</consumable>
													<outboundRelationship2 typeCode="COMP">
														<substanceAdministration classCode="SBADM" moodCode="EVN">
															<consumable typeCode="CSM">
																<instanceOfKind classCode="INST">
																	<productInstanceInstance classCode="MMAT" determinerCode="INSTANCE">
																		<lotNumberText>123</lotNumberText>
																	</productInstanceInstance>
																</instanceOfKind>
															</consumable>
														</substanceAdministration>
													</outboundRelationship2>
												</substanceAdministration>
											</component>
										</organizer>
									</subjectOf2>
									<subjectOf2 typeCode="SBJ">
										<observation classCode="OBS" moodCode="EVN">
											<id root="188b6608-52e7-3d45-8df8-2eb6b1bfd554"/>
											<code code="29" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="reaction"/>
											<effectiveTime xsi:type="SXPR_TS">
												<comp xsi:type="IVL_TS">
													<low value="20170522"/>
													<high value="20170522"/>
												</comp>
												<comp xsi:type="IVL_TS" operator="A">
													<width value="2" unit="h"/>
												</comp>
											</effectiveTime>
											<value xsi:type="CE" code="10007515" codeSystem="2.16.840.1.113883.6.163" codeSystemVersion="27.0" displayName="Cardiac arrest">
												<originalText language="eng">Massive coronary</originalText>
											</value>
											<location typeCode="LOC">
												<locatedEntity classCode="LOCE">
													<locatedPlace classCode="COUNTRY" determinerCode="INSTANCE">
														<code code="NO" codeSystem="1.0.3166.1.2.2" displayName="Norway"/>
													</locatedPlace>
												</locatedEntity>
											</location>
											<outboundRelationship2 typeCode="PERT">
												<observation classCode="OBS" moodCode="EVN">
													<code code="37" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="termHighlightedByReporter"/>
													<value xsi:type="CE" code="3" codeSystem="2.16.840.1.113883.3.989.2.1.1.10" codeSystemVersion="2.0" displayName="Yes, highlighted by the reporter, SERIOUS"/>
												</observation>
											</outboundRelationship2>
											<outboundRelationship2 typeCode="PERT">
												<observation classCode="OBS" moodCode="EVN">
													<code code="34" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="resultsInDeath"/>
													<value xsi:type="BL" value="true"/>
												</observation>
											</outboundRelationship2>
											<outboundRelationship2 typeCode="PERT">
												<observation classCode="OBS" moodCode="EVN">
													<code code="21" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="isLifeThreatening"/>
													<value xsi:type="BL" nullFlavor="NI"/>
												</observation>
											</outboundRelationship2>
											<outboundRelationship2 typeCode="PERT">
												<observation classCode="OBS" moodCode="EVN">
													<code code="33" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="requiresInpatientHospitalization"/>
													<value xsi:type="BL" nullFlavor="NI"/>
												</observation>
											</outboundRelationship2>
											<outboundRelationship2 typeCode="PERT">
												<observation classCode="OBS" moodCode="EVN">
													<code code="35" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="resultsInPersistentOrSignificantDisability"/>
													<value xsi:type="BL" nullFlavor="NI"/>
												</observation>
											</outboundRelationship2>
											<outboundRelationship2 typeCode="PERT">
												<observation classCode="OBS" moodCode="EVN">
													<code code="12" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="congenitalAnomalyBirthDefect"/>
													<value xsi:type="BL" nullFlavor="NI"/>
												</observation>
											</outboundRelationship2>
											<outboundRelationship2 typeCode="PERT">
												<observation classCode="OBS" moodCode="EVN">
													<code code="26" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="otherMedicallyImportantCondition"/>
													<value xsi:type="BL" nullFlavor="NI"/>
												</observation>
											</outboundRelationship2>
											<outboundRelationship2 typeCode="PERT">
												<observation classCode="OBS" moodCode="EVN">
													<code code="27" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="outcome"/>
													<value xsi:type="CE" code="5" codeSystem="2.16.840.1.113883.3.989.2.1.1.11" codeSystemVersion="2.0" displayName="fatal"/>
												</observation>
											</outboundRelationship2>
										</observation>
									</subjectOf2>
									<subjectOf2 typeCode="SBJ">
										<organizer classCode="CATEGORY" moodCode="EVN">
											<code code="2" codeSystem="2.16.840.1.113883.3.989.2.1.1.20" codeSystemVersion="2.0" displayName="drugHistory"/>
											<component typeCode="COMP">
												<substanceAdministration classCode="SBADM" moodCode="EVN">
													<effectiveTime xsi:type="IVL_TS">
														<low value="20120325"/>
														<high value="20120530"/>
													</effectiveTime>
													<consumable typeCode="CSM">
														<instanceOfKind classCode="INST">
															<kindOfProduct classCode="MMAT" determinerCode="KIND">
																<name>HYDROCORTISONE - CREAM</name>
															</kindOfProduct>
														</instanceOfKind>
													</consumable>
													<outboundRelationship2 typeCode="RSON">
														<observation classCode="OBS" moodCode="EVN">
															<code code="19" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="indication"/>
															<value xsi:type="CE" codeSystem="2.16.840.1.113883.6.163"/>
														</observation>
													</outboundRelationship2>
													<outboundRelationship2 typeCode="CAUS">
														<observation classCode="OBS" moodCode="EVN">
															<code code="29" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="reaction"/>
															<value xsi:type="CE" codeSystem="2.16.840.1.113883.6.163"/>
														</observation>
													</outboundRelationship2>
												</substanceAdministration>
											</component>
										</organizer>
									</subjectOf2>
									<subjectOf2 typeCode="SBJ">
										<organizer classCode="CATEGORY" moodCode="EVN">
											<code code="3" codeSystem="2.16.840.1.113883.3.989.2.1.1.20" codeSystemVersion="2.0" displayName="testsAndProceduresRelevantToTheInvestigation"/>
											<component typeCode="COMP">
												<observation classCode="OBS" moodCode="EVN">
													<code code="10014362" codeSystem="2.16.840.1.113883.6.163" codeSystemVersion="27.0" displayName="Electrocardiogram"/>
													<effectiveTime xsi:type="IVL_TS" value="20170522"/>
													<value xsi:type="ED">Confirmed Cardiac arrest </value>
													<outboundRelationship2 typeCode="REFR">
														<observation classCode="OBS" moodCode="EVN">
															<code code="25" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="moreInformationAvailable"/>
															<value xsi:type="BL" value="true"/>
														</observation>
													</outboundRelationship2>
												</observation>
											</component>
										</organizer>
									</subjectOf2>
								</primaryRole>
							</subject1>
							<component typeCode="COMP">
								<causalityAssessment classCode="OBS" moodCode="EVN">
									<code code="20" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="interventionCharacterization"/>
									<value xsi:type="CE" code="1" codeSystem="2.16.840.1.113883.3.989.2.1.1.13" codeSystemVersion="2.0" displayName="Suspect"/>
									<subject2 typeCode="SUBJ">
										<productUseReference classCode="SBADM" moodCode="EVN">
											<id root="409f5740-7f10-3dde-b7a6-1a134889cf4f"/>
										</productUseReference>
									</subject2>
								</causalityAssessment>
							</component>
							<component typeCode="COMP">
								<causalityAssessment classCode="OBS" moodCode="EVN">
									<code code="20" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="interventionCharacterization"/>
									<value xsi:type="CE" code="1" codeSystem="2.16.840.1.113883.3.989.2.1.1.13" codeSystemVersion="2.0" displayName="Suspect"/>
									<subject2 typeCode="SUBJ">
										<productUseReference classCode="SBADM" moodCode="EVN">
											<id root="c5d90cf4-a2c5-3d29-92ad-d425fd920776"/>
										</productUseReference>
									</subject2>
								</causalityAssessment>
							</component>
							<component typeCode="COMP">
								<causalityAssessment classCode="OBS" moodCode="EVN">
									<code code="39" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="causality"/>
									<value xsi:type="ST">Definitely related</value>
									<methodCode>
										<originalText>Supposition and guesswork</originalText>
									</methodCode>
									<author typeCode="AUT">
										<assignedEntity classCode="ASSIGNED">
											<code>
												<originalText>Reporter</originalText>
											</code>
										</assignedEntity>
									</author>
									<subject1 typeCode="SUBJ">
										<adverseEffectReference classCode="OBS" moodCode="EVN">
											<id root="188b6608-52e7-3d45-8df8-2eb6b1bfd554"/>
										</adverseEffectReference>
									</subject1>
									<subject2 typeCode="SUBJ">
										<productUseReference classCode="SBADM" moodCode="EVN">
											<id root="409f5740-7f10-3dde-b7a6-1a134889cf4f"/>
										</productUseReference>
									</subject2>
								</causalityAssessment>
							</component>
							<component typeCode="COMP">
								<causalityAssessment classCode="OBS" moodCode="EVN">
									<code code="39" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="causality"/>
									<value xsi:type="CE" code="1" codeSystem="2.16.840.1.113883.3.989.5.1.1.5.3" codeSystemVersion="1.0" displayName="Reasonable possibility"/>
									<methodCode code="1" codeSystem="2.16.840.1.113883.3.989.5.1.1.5.2" codeSystemVersion="1.0" displayName="EU Method of Assessment"/>
									<author typeCode="AUT">
										<assignedEntity classCode="ASSIGNED">
											<code code="2" codeSystem="2.16.840.1.113883.3.989.5.1.1.5.4" codeSystemVersion="1.0" displayName="Sponsor"/>
										</assignedEntity>
									</author>
									<subject1 typeCode="SUBJ">
										<adverseEffectReference classCode="OBS" moodCode="EVN">
											<id root="188b6608-52e7-3d45-8df8-2eb6b1bfd554"/>
										</adverseEffectReference>
									</subject1>
									<subject2 typeCode="SUBJ">
										<productUseReference classCode="SBADM" moodCode="EVN">
											<id root="409f5740-7f10-3dde-b7a6-1a134889cf4f"/>
										</productUseReference>
									</subject2>
								</causalityAssessment>
							</component>
							<component typeCode="COMP">
								<causalityAssessment classCode="OBS" moodCode="EVN">
									<code code="39" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="causality"/>
									<value xsi:type="ST">2</value>
									<methodCode>
										<originalText>Global introspection</originalText>
									</methodCode>
									<author typeCode="AUT">
										<assignedEntity classCode="ASSIGNED">
											<code>
												<originalText>MAH</originalText>
											</code>
										</assignedEntity>
									</author>
									<subject1 typeCode="SUBJ">
										<adverseEffectReference classCode="OBS" moodCode="EVN">
											<id root="188b6608-52e7-3d45-8df8-2eb6b1bfd554"/>
										</adverseEffectReference>
									</subject1>
									<subject2 typeCode="SUBJ">
										<productUseReference classCode="SBADM" moodCode="EVN">
											<id root="409f5740-7f10-3dde-b7a6-1a134889cf4f"/>
										</productUseReference>
									</subject2>
								</causalityAssessment>
							</component>
							<component typeCode="COMP">
								<causalityAssessment classCode="OBS" moodCode="EVN">
									<code code="39" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="causality"/>
									<value xsi:type="CE" code="1" codeSystem="2.16.840.1.113883.3.989.5.1.1.5.3" codeSystemVersion="1.0" displayName="Reasonable possibility"/>
									<methodCode code="1" codeSystem="2.16.840.1.113883.3.989.5.1.1.5.2" codeSystemVersion="1.0" displayName="EU Method of Assessment"/>
									<author typeCode="AUT">
										<assignedEntity classCode="ASSIGNED">
											<code code="2" codeSystem="2.16.840.1.113883.3.989.5.1.1.5.4" codeSystemVersion="1.0" displayName="Sponsor"/>
										</assignedEntity>
									</author>
									<subject1 typeCode="SUBJ">
										<adverseEffectReference classCode="OBS" moodCode="EVN">
											<id root="188b6608-52e7-3d45-8df8-2eb6b1bfd554"/>
										</adverseEffectReference>
									</subject1>
									<subject2 typeCode="SUBJ">
										<productUseReference classCode="SBADM" moodCode="EVN">
											<id root="c5d90cf4-a2c5-3d29-92ad-d425fd920776"/>
										</productUseReference>
									</subject2>
								</causalityAssessment>
							</component>
							<component1 typeCode="COMP">
								<observationEvent classCode="OBS" moodCode="EVN">
									<code code="10" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="comment"/>
									<value xsi:type="ED">Despite temporal causality suggesting plausibility, an alternative aetiology is that the patient was massively overweight</value>
									<author typeCode="AUT">
										<assignedEntity classCode="ASSIGNED">
											<code code="3" codeSystem="2.16.840.1.113883.3.989.2.1.1.21" codeSystemVersion="2.0" displayName="sourceReporter"/>
										</assignedEntity>
									</author>
								</observationEvent>
							</component1>
							<component1 typeCode="COMP">
								<observationEvent classCode="OBS" moodCode="EVN">
									<code code="10" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="comment"/>
									<value xsi:type="ED">Although the MAH thought it was not related, we, the NCA that is the sender of this case, think it was</value>
									<author typeCode="AUT">
										<assignedEntity classCode="ASSIGNED">
											<code code="1" codeSystem="2.16.840.1.113883.3.989.2.1.1.21" codeSystemVersion="2.0" displayName="sender"/>
										</assignedEntity>
									</author>
								</observationEvent>
							</component1>
						</adverseEventAssessment>
					</component>
					<component typeCode="COMP">
						<observationEvent classCode="OBS" moodCode="EVN">
							<code code="36" codeSystem="2.16.840.1.113883.3.989.2.1.1.19" codeSystemVersion="2.0" displayName="summaryAndComment"/>
							<value xsi:type="ED" language="swe">En obese 69-årig man tog 10ml jordgubbar-flavored Calpol för huvudvärk och tandvärk klockan 10 och 14.00. Vid 20:00 upplevde han en massiv hjärtstopp och dog vid 22:00</value>
							<author typeCode="AUT">
								<assignedEntity classCode="ASSIGNED">
									<code code="2" codeSystem="2.16.840.1.113883.3.989.2.1.1.21" codeSystemVersion="2.0" displayName="reporter"/>
								</assignedEntity>
							</author>
						</observationEvent>
					</component>
					<outboundRelationship typeCode="SPRT">
						<priorityNumber value="1"/>
						<relatedInvestigation classCode="INVSTG" moodCode="EVN">
							<code code="2" codeSystem="2.16.840.1.113883.3.989.2.1.1.22" codeSystemVersion="2.0" displayName="sourceReport"/>
							<subjectOf2 typeCode="SUBJ">
								<controlActEvent classCode="CACT" moodCode="EVN">
									<author typeCode="AUT">
										<assignedEntity classCode="ASSIGNED">
											<addr>
												<streetAddressLine>Villa Villekulla</streetAddressLine>
												<city>Vibble</city>
												<state>Gotland</state>
												<postalCode>621 26</postalCode>
											</addr>
											<assignedPerson classCode="PSN" determinerCode="INSTANCE">
												<name>
													<prefix>Ms</prefix>
													<given>Pippilotta</given>
													<given>Viktualia</given>
													<family>Långstrump</family>
												</name>
												<asQualifiedEntity classCode="QUAL">
													<code code="3" codeSystem="2.16.840.1.113883.3.989.2.1.1.6" codeSystemVersion="2.0" displayName="Other health professional"/>
												</asQualifiedEntity>
												<asLocatedEntity classCode="LOCE">
													<location classCode="COUNTRY" determinerCode="INSTANCE">
														<code code="SE" codeSystem="1.0.3166.1.2.2" displayName="Sweden"/>
													</location>
												</asLocatedEntity>
											</assignedPerson>
											<representedOrganization classCode="ORG" determinerCode="INSTANCE">
												<name>Rullgardina (Cardiology)</name>
												<assignedEntity classCode="ASSIGNED">
													<representedOrganization classCode="ORG" determinerCode="INSTANCE">
														<name>Krusmynta Hospital</name>
													</representedOrganization>
												</assignedEntity>
											</representedOrganization>
										</assignedEntity>
									</author>
								</controlActEvent>
							</subjectOf2>
						</relatedInvestigation>
					</outboundRelationship>
					<outboundRelationship typeCode="SPRT">
						<relatedInvestigation classCode="INVSTG" moodCode="EVN">
							<code code="1" codeSystem="2.16.840.1.113883.3.989.2.1.1.22" codeSystemVersion="2.0" displayName="initialReport"/>
							<subjectOf2 typeCode="SUBJ">
								<controlActEvent classCode="CACT" moodCode="EVN">
									<author typeCode="AUT">
										<assignedEntity classCode="ASSIGNED">
											<code code="2" codeSystem="2.16.840.1.113883.3.989.2.1.1.3" codeSystemVersion="2.0" displayName="Other"/>
										</assignedEntity>
									</author>
								</controlActEvent>
							</subjectOf2>
						</relatedInvestigation>
					</outboundRelationship>
					<outboundRelationship typeCode="SPRT">
						<relatedInvestigation classCode="INVSTG" moodCode="EVN">
							<code nullFlavor="NA"/>
							<subjectOf2 typeCode="SUBJ">
								<controlActEvent classCode="CACT" moodCode="EVN">
									<id root="2.16.840.1.113883.3.989.2.1.3.2" extension="SE-MPA-1234"/>
								</controlActEvent>
							</subjectOf2>
						</relatedInvestigation>
					</outboundRelationship>
					<subjectOf1 typeCode="SUBJ">
						<controlActEvent classCode="CACT" moodCode="EVN">
							<author typeCode="AUT">
								<assignedEntity classCode="ASSIGNED">
									<code code="4" codeSystem="2.16.840.1.113883.3.989.2.1.1.7" codeSystemVersion="2.0" displayName="Regional pharmacovigilance centre"/>
									<addr>
										<streetAddressLine>Unknown</streetAddressLine>
										<city>Unknown</city>
										<state>Unknown</state>
										<postalCode>Unknown</postalCode>
									</addr>
									<telecom value="mailto:example@domain.com"/>
									<assignedPerson classCode="PSN" determinerCode="INSTANCE">
										<name>
											<given>Unknown</given>
											<family>Unknown</family>
										</name>
										<asLocatedEntity classCode="LOCE">
											<location classCode="COUNTRY" determinerCode="INSTANCE">
												<code code="NL" codeSystem="1.0.3166.1.2.2" displayName="Netherlands"/>
											</location>
										</asLocatedEntity>
									</assignedPerson>
									<representedOrganization classCode="ORG" determinerCode="INSTANCE">
										<assignedEntity classCode="ASSIGNED">
											<representedOrganization classCode="ORG" determinerCode="INSTANCE">
												<name>EVTESTWT</name>
											</representedOrganization>
										</assignedEntity>
									</representedOrganization>
								</assignedEntity>
							</author>
						</controlActEvent>
					</subjectOf1>
					<subjectOf1 typeCode="SUBJ">
						<controlActEvent classCode="CACT" moodCode="EVN">
							<id root="2.16.840.1.113883.3.989.2.1.3.3" extension="ZX82" assigningAuthorityName="Spectrum medical information line"/>
						</controlActEvent>
					</subjectOf1>
					<subjectOf2 typeCode="SUBJ">
						<investigationCharacteristic classCode="OBS" moodCode="EVN">
							<code code="1" codeSystem="2.16.840.1.113883.3.989.2.1.1.23" codeSystemVersion="2.0" displayName="ichReportType"/>
							<value xsi:type="CE" code="2" codeSystem="2.16.840.1.113883.3.989.2.1.1.2" codeSystemVersion="2.0" displayName="Report from studies"/>
						</investigationCharacteristic>
					</subjectOf2>
					<subjectOf2 typeCode="SUBJ">
						<investigationCharacteristic classCode="OBS" moodCode="EVN">
							<code code="2" codeSystem="2.16.840.1.113883.3.989.2.1.1.23" codeSystemVersion="2.0" displayName="otherCaseIds"/>
							<value xsi:type="BL" value="true"/>
						</investigationCharacteristic>
					</subjectOf2>
				</investigationEvent>
			</subject>
		</controlActProcess>
	</PORR_IN049016UV>
	<receiver typeCode="RCV">
		<device classCode="DEV" determinerCode="INSTANCE">
			<id root="2.16.840.1.113883.3.989.2.1.3.14" extension="EVCTMTEST"/>
		</device>
	</receiver>
	<sender typeCode="SND">
		<device classCode="DEV" determinerCode="INSTANCE">
			<id root="2.16.840.1.113883.3.989.2.1.3.13" extension="EVTESTWT"/>
		</device>
	</sender>
</MCCI_IN200100UV01>`;