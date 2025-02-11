const oidDataAsJson = [
    [
        "DATA ELEMENT NUMBER",
        "DATA ELEMENT NAME",
        "Code system OID"
    ],
    [
        "-",
        "ICH CSR Transmission Identification (batch wrapper)",
        "-"
    ],
    [
        "N.1.1",
        "Types of Message in batch",
        "2.16.840.1.113883.3.989.2.1.1.1"
    ],
    [
        "N.1.2",
        "Batch Number",
        "2.16.840.1.113883.3.989.2.1.3.22"
    ],
    [
        "N.1.3",
        "Batch Sender Identifier",
        "2.16.840.1.113883.3.989.2.1.3.13"
    ],
    [
        "N.1.4",
        "Batch Receiver Identifier",
        "2.16.840.1.113883.3.989.2.1.3.14"
    ],
    [
        "N.1.5",
        "Date of Batch Transmission",
        "-"
    ],
    [
        "-",
        "ICH ICSR Message Header (message wrapper) (Repeat as necessary)",
        "-"
    ],
    [
        "N.2.r.1 ",
        "Message Identifier",
        "2.16.840.1.113883.3.989.2.1.3.1"
    ],
    [
        "N.2.r.2 ",
        "Message Sender Identifier",
        "2.16.840.1.113883.3.989.2.1.3.11"
    ],
    [
        "N.2.r.3 ",
        "Message Receiver Identifier",
        "2.16.840.1.113883.3.989.2.1.3.12"
    ],
    [
        "N.2.r.4 ",
        "Date of Message Creation",
        "-"
    ],
    [
        "-",
        "Identification of the Case Safety Report",
        "-"
    ],
    [
        "C.1.1 ",
        "Sender’s (case) Safety Report Unique Identifier",
        "2.16.840.1.113883.3.989.2.1.3.1"
    ],
    [
        "C.1.2 ",
        "Date of Creation",
        "-"
    ],
    [
        "C.1.3 ",
        "Type of Report",
        "2.16.840.1.113883.3.989.2.1.1.2"
    ],
    [
        "C.1.4 ",
        "Date Report Was First Received from Source",
        "-"
    ],
    [
        "C.1.5",
        "Date of Most Recent Information for This Report",
        "-"
    ],
    [
        "C.1.6.1",
        "Are Additional Documents Available?",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "-",
        "Identification of the Case Safety Report",
        "-"
    ],
    [
        "C.1.6.1.r.1",
        "Documents Held by Sender",
        "2.16.840.1.113883.3.989.2.1.1.27"
    ],
    [
        "C.1.6.1.r.2",
        "Included Documents",
        "-"
    ],
    [
        "-",
        "-",
        "-"
    ],
    [
        "C.1.7 ",
        "Does This Case Fulfil the Local Criteria for an Expedited Report?",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "C.1.8.1",
        "Worldwide Unique Case Identification",
        "2.16.840.1.113883.3.989.2.1.3.2"
    ],
    [
        "C.1.8.2",
        "First Sender of This Case",
        "2.16.840.1.113883.3.989.2.1.1.3"
    ],
    [
        "C.1.9.1 ",
        "Other Case Identifiers in Previous Transmissions",
        "2.16.840.1.113883.3.989.2.1.1.23"
    ],
    [
        "-",
        "Source(s) of the Case Identifier(s) (repeat as necessary)",
        "-"
    ],
    [
        "C.1.9.1.r.1 ",
        "Source(s) of the Case Identifier",
        "2.16.840.1.113883.3.989.2.1.3.3"
    ],
    [
        "C.1.9.1.r.2 ",
        "Case Identifier(s)",
        "2.16.840.1.113883.3.989.2.1.3.3"
    ],
    [
        "-",
        "Identification Number of the Report Which Is Linked to This Report (repeat as necessary)",
        "-"
    ],
    [
        "C.1.10.r ",
        "Identification Number of the Report Which Is Linked to This Report ",
        "2.16.840.1.113883.3.989.2.1.3.2"
    ],
    [
        "-",
        "-",
        "-"
    ],
    [
        "C.1.11.1 ",
        "Report Nullification / Amendment",
        "2.16.840.1.113883.3.989.2.1.1.5"
    ],
    [
        "C.1.11.2 ",
        "Reason for Nullification / Amendment",
        "2.16.840.1.113883.3.989.2.1.1.23"
    ],
    [
        null,
        "Primary Source(s) of Information (repeat as necessary)",
        "-"
    ],
    [
        "C.2.r.1.1",
        "Reporter’s Title",
        "-"
    ],
    [
        "C.2.r.1.2 ",
        "Reporter’s Given Name",
        "-"
    ],
    [
        "C.2.r.1.3 ",
        "Reporter’s Middle Name",
        "-"
    ],
    [
        "C.2.r.1.4 ",
        "Reporter’s Family Name",
        "-"
    ],
    [
        "C.2.r.2.1 ",
        "Reporter’s Organisation",
        "-"
    ],
    [
        "C.2.r.2.2 ",
        "Reporter’s Department",
        "-"
    ],
    [
        "C.2.r.2.3 ",
        "Reporter’s Street",
        "-"
    ],
    [
        "C.2.r.2.4 ",
        "Reporter’s City",
        "-"
    ],
    [
        "C.2.r.2.5",
        "Reporter’s State or Province",
        "-"
    ],
    [
        "C.2.r.2.6 ",
        "Reporter’s Postcode",
        "-"
    ],
    [
        "C.2.r.2.7 ",
        "Reporter’s Telephone",
        "-"
    ],
    [
        "C.2.r.3 ",
        "Reporter’s Country Code",
        "1.0.3166.1.2.2"
    ],
    [
        "C.2.r.4",
        "Qualification",
        "2.16.840.1.113883.3.989.2.1.1.6"
    ],
    [
        "C.2.r.5 ",
        "Primary Source for Regulatory Purposes",
        "-"
    ],
    [
        "-",
        "Information on Sender of Case Safety Report",
        "-"
    ],
    [
        "C.3.1 ",
        "Sender Type",
        "2.16.840.1.113883.3.989.2.1.1.7"
    ],
    [
        "C.3.2 ",
        "Sender’s Organisation",
        "-"
    ],
    [
        "C.3.3",
        "Person Responsible for Sending Report",
        null
    ],
    [
        "C.3.3.1 ",
        "Sender’s Department",
        "-"
    ],
    [
        "C.3.3.2",
        "Sender’s Title",
        "-"
    ],
    [
        "C.3.3.3 ",
        "Sender’s Given Name",
        "-"
    ],
    [
        "C.3.3.4 ",
        "Sender’s Middle Name",
        "-"
    ],
    [
        "C.3.3.5 ",
        "Sender’s Family Name",
        "-"
    ],
    [
        "C.3.4.1",
        "Sender’s Street Address",
        "-"
    ],
    [
        "C.3.4.2 ",
        "Sender’s City",
        "-"
    ],
    [
        "C.3.4.3 ",
        "Sender’s State or Province",
        "-"
    ],
    [
        "C.3.4.4 ",
        "Sender’s Postcode",
        "-"
    ],
    [
        "C.3.4.5 ",
        "Sender’s Country Code",
        "1.0.3166.1.2.2"
    ],
    [
        "C.3.4.6 ",
        "Sender’s Telephone",
        "-"
    ],
    [
        "C.3.4.7",
        "Sender’s Fax",
        "-"
    ],
    [
        "C.3.4.8 ",
        "Sender’s E-mail Address",
        "-"
    ],
    [
        "-",
        " Literature Reference(s) (repeat as necessary)",
        "-"
    ],
    [
        "C.4.r.1 ",
        "Literature Reference(s)",
        "2.16.840.1.113883.3.989.2.1.1.27"
    ],
    [
        "C.4.r.2 ",
        "Included Documents",
        "-"
    ],
    [
        "-",
        "Study Identification",
        "-"
    ],
    [
        "-",
        "Study Registration (repeat as necessary)",
        "-"
    ],
    [
        "C.5.1.r.1",
        "Study Registration Number",
        "2.16.840.1.113883.3.989.2.1.3.6"
    ],
    [
        "C.5.1.r.2 ",
        "Study Registration Country",
        "1.0.3166.1.2.2"
    ],
    [
        "-",
        "-",
        "-"
    ],
    [
        "C.5.2 ",
        "Study Name",
        "-"
    ],
    [
        "C.5.3",
        "Sponsor Study Number",
        "2.16.840.1.113883.3.989.2.1.3.5"
    ],
    [
        "C.5.4",
        "Study Type Where Reaction(s) / Event(s) Were Observed",
        "2.16.840.1.113883.3.989.2.1.1.8"
    ],
    [
        "-",
        "Patient Characteristics",
        "-"
    ],
    [
        "D.1 ",
        "Patient (name or initials)",
        "-"
    ],
    [
        "D.1.1.1 ",
        "Patient Medical Record Number(s) and Source(s) of the Record Number (GP Medical Record Number)",
        "2.16.840.1.113883.3.989.2.1.3.7\n2.16.840.1.113883.3.989.2.1.1.4"
    ],
    [
        "D.1.1.2 ",
        "Patient Medical Record Number(s) and Source(s) of the Record Number (Specialist Record Number)",
        "2.16.840.1.113883.3.989.2.1.3.8\n2.16.840.1.113883.3.989.2.1.1.4"
    ],
    [
        "D.1.1.3 ",
        "Patient Medical Record Number(s) and Source(s) of the Record Number (Hospital Record Number)",
        "2.16.840.1.113883.3.989.2.1.3.9\n2.16.840.1.113883.3.989.2.1.1.4"
    ],
    [
        "D.1.1.4 ",
        "Patient Medical Record Number(s) and Source(s) of the Record Number (Investigation Number)",
        "2.16.840.1.113883.3.989.2.1.3.10\n2.16.840.1.113883.3.989.2.1.1.4"
    ],
    [
        "-",
        "Age Information",
        "-"
    ],
    [
        "D.2.1",
        "Date of Birth",
        "-"
    ],
    [
        "-",
        "Age at time of Onset of Reaction / Event",
        "-"
    ],
    [
        "D.2.2a ",
        "Age at Time of Onset of Reaction / Event (number)",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "D.2.2b",
        "Age at Time of Onset of Reaction / Event (unit)",
        "-"
    ],
    [
        "D.2.2.1a ",
        "Gestation Period When Reaction / Event Was Observed in the Foetus (number)",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "D.2.2.1b ",
        "Gestation Period When Reaction/Event Was Observed in the Foetus (unit)",
        "-"
    ],
    [
        "D.2.3",
        "Patient Age Group (as per reporter)",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "-",
        "-",
        "-"
    ],
    [
        "D.3",
        "Body Weight (kg)",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "D.4 ",
        "Height (cm)",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "D.5 ",
        "Sex",
        "-"
    ],
    [
        "D.6 ",
        "Last Menstrual Period Date",
        "-"
    ],
    [
        "-",
        " Structured Information on Relevant Medical History (repeat as necessary)",
        "-"
    ],
    [
        "D.7.1.r.1a ",
        "MedDRA Version for Medical History",
        "-"
    ],
    [
        "D.7.1.r.1b",
        "Medical History (disease / surgical procedure / etc.) (MedDRA code)",
        "2.16.840.1.113883.3.989.2.1.1.20\n2.16.840.1.113883.6.163"
    ],
    [
        "D.7.1.r.2 ",
        "Start Date",
        "-"
    ],
    [
        "D.7.1.r.3 ",
        "Continuing",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "D.7.1.r.4 ",
        "End Date",
        "-"
    ],
    [
        "D.7.1.r.5 ",
        "Comments",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "D.7.1.r.6 ",
        "Family History",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "-",
        "-",
        "-"
    ],
    [
        "D.7.2 ",
        "Text for Relevant Medical History and Concurrent Conditions (not including reaction / event)",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "D.7.3 ",
        "Concomitant Therapies",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "D.8.r",
        "Relevant Past Drug History (repeat as necessary)",
        "-"
    ],
    [
        "D.8.r.1 ",
        "Name of Drug as Reported",
        "-"
    ],
    [
        "D.8.r.2a ",
        "MPID Version Date/Number",
        "-"
    ],
    [
        "D.8.r.2b ",
        "Medicinal Product Identifier (MPID)",
        "TBD"
    ],
    [
        "D.8.r.3a ",
        "PhPID Version Date/Number",
        "-"
    ],
    [
        "D.8.r.3b ",
        "Pharmaceutical Product Identifier (PhPID)",
        "TBD"
    ],
    [
        "-",
        "-",
        "-"
    ],
    [
        "D.8.r.4 ",
        "Start Date",
        "-"
    ],
    [
        "D.8.r.5 ",
        "End Date",
        "-"
    ],
    [
        "D.8.r.6a ",
        "MedDRA Version for Indication",
        "-"
    ],
    [
        "D.8.r.6b ",
        "Indication (MedDRA code)",
        "2.16.840.1.113883.3.989.2.1.1.19\n2.16.840.1.113883.6.163"
    ],
    [
        "D.8.r.7a ",
        "MedDRA Version for Reaction",
        "-"
    ],
    [
        "D.8.r.7b",
        "Reaction (MedDRA code)",
        "2.16.840.1.113883.3.989.2.1.1.19\n2.16.840.1.113883.6.163"
    ],
    [
        "D.9",
        "In Case of Death",
        "-"
    ],
    [
        "D.9.1 ",
        "Date of Death",
        "-"
    ],
    [
        "D.9.2.r",
        " Reported Cause(s) of Death (repeat as necessary)",
        "-"
    ],
    [
        "D.9.2.r.1a ",
        "MedDRA Version for Reported Cause(s) of Death",
        "-"
    ],
    [
        "D.9.2.r.1b ",
        "Reported Cause(s) of Death (MedDRA code)",
        "2.16.840.1.113883.3.989.2.1.1.19\n2.16.840.1.113883.6.163"
    ],
    [
        "D.9.2.r.2",
        "Reported Cause(s) of Death (free text)",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "-",
        "-",
        "-"
    ],
    [
        "D.9.3 ",
        "Was Autopsy Done?",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "D.9.4.r",
        "Autopsy-determined Cause(s) of Death (repeat as necessary)",
        "-"
    ],
    [
        "D.9.4.r.1a ",
        "MedDRA Version for Autopsy-determined Cause(s) of Death",
        "-"
    ],
    [
        "D.9.4.r.1b",
        "Autopsy-determined Cause(s) of Death (MedDRA code)",
        "2.16.840.1.113883.3.989.2.1.1.19\n2.16.840.1.113883.6.163"
    ],
    [
        "D.9.4.r.2 ",
        "Autopsy-determined Cause(s) of Death (free text)",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "D.10",
        "For a Parent-Child / Foetus Report, Information Concerning The Parent",
        "-"
    ],
    [
        "D.10.1 ",
        "Parent Identification",
        "2.16.840.1.113883.5.111"
    ],
    [
        "D.10.2",
        "Parent Age Information",
        "-"
    ],
    [
        "D.10.2.1",
        "Date of Birth of Parent",
        "-"
    ],
    [
        "D.10.2.2a ",
        "Age of Parent (number)",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "D.10.2.2b ",
        "Age of Parent (unit)",
        "-"
    ],
    [
        "D.10.3 ",
        "Last Menstrual Period Date of Parent",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "D.10.4 ",
        "Body Weight (kg) of Parent",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "D.10.5 ",
        "Height (cm) of Parent",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "D.10.6",
        "Sex of Parent",
        "1.0.5218"
    ],
    [
        "D.10.7",
        "Relevant Medical History and Concurrent Conditions of Parent",
        "-"
    ],
    [
        "D.10.7.1.r",
        "Structured Information of Parent (repeat as necessary)",
        "-"
    ],
    [
        "D.10.7.1.r.1a",
        "MedDRA Version for Medical History",
        "-"
    ],
    [
        "D.10.7.1.r.1b ",
        "Medical History (disease / surgical procedure / etc.) (MedDRA code)",
        "2.16.840.1.113883.3.989.2.1.1.20\n2.16.840.1.113883.6.163"
    ],
    [
        "D.10.7.1.r.2 ",
        "Start Date",
        "-"
    ],
    [
        "D.10.7.1.r.3 ",
        "Continuing",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "D.10.7.1.r.4 ",
        "End Date",
        "-"
    ],
    [
        "D.10.7.1.r.5 ",
        "Comments",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "-",
        "-",
        "-"
    ],
    [
        "D.10.7.2 ",
        "Text for Relevant Medical History and Concurrent Conditions of Parent",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "D.10.8.r",
        "Relevant Past Drug History of Parent (repeat as necessary)",
        "-"
    ],
    [
        "D.10.8.r.1 ",
        "Name of Drug as Reported",
        "-"
    ],
    [
        "D.10.8.r.2a ",
        "MPID Version Date/Number",
        "-"
    ],
    [
        "D.10.8.r.2b ",
        "Medicinal Product Identifier (MPID)",
        "TBD"
    ],
    [
        "D.10.8.r.3a ",
        "PhPID Version Date/Number",
        "-"
    ],
    [
        "D.10.8.r.3b ",
        "Pharmaceutical Product Identifier (PhPID)",
        "TBD"
    ],
    [
        "-",
        "-",
        "-"
    ],
    [
        "D.10.8.r.4 ",
        "Start Date",
        "-"
    ],
    [
        "D.10.8.r.5 ",
        "End Date",
        "-"
    ],
    [
        "D.10.8.r.6a ",
        "MedDRA Version for Indication",
        "-"
    ],
    [
        "D.10.8.r.6b ",
        "Indication (MedDRA code)",
        "2.16.840.1.113883.3.989.2.1.1.19\n2.16.840.1.113883.6.163"
    ],
    [
        "D.10.8.r.7a ",
        "MedDRA Version for Reaction",
        "-"
    ],
    [
        "D.10.8.r.7b ",
        "Reactions (MedDRA code)",
        "2.16.840.1.113883.3.989.2.1.1.19\n2.16.840.1.113883.6.163"
    ],
    [
        "E.i.1",
        "Reaction/Event as Reported by the Primary Source",
        "-"
    ],
    [
        "E.i.1.1a ",
        "Reaction / Event as Reported by the Primary Source in Native Language",
        "-"
    ],
    [
        "E.i.1.1b ",
        "Reaction / Event as Reported by the Primary Source Language",
        "1.0.639.2"
    ],
    [
        "E.i.1.2 ",
        "Reaction / Event as Reported by the Primary Source for Translation",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "E.i.2.1a ",
        "MedDRA Version for Reaction / Event",
        "-"
    ],
    [
        "E.i.2.1b ",
        "Reaction / Event (MedDRA code)",
        "2.16.840.1.113883.3.989.2.1.1.19\n2.16.840.1.113883.6.163"
    ],
    [
        "E.i.3.1 ",
        "Term Highlighted by the Reporter",
        "2.16.840.1.113883.3.989.2.1.1.19\n2.16.840.1.113883.3.989.2.1.1.10"
    ],
    [
        "E.1.3.2",
        "Seriousness Criteria at Event Level",
        "-"
    ],
    [
        "E.i.3.2a ",
        "Results in Death",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "E.i.3.2b ",
        "Life Threatening",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "E.i.3.2c ",
        "Caused / Prolonged Hospitalisation",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "E.i.3.2d ",
        "Disabling / Incapacitating",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "E.i.3.2e ",
        "Congenital Anomaly / Birth Defect",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "E.i.3.2f ",
        "Other Medically Important Condition",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "E.i.4 ",
        "Date of Start of Reaction / Event",
        "-"
    ],
    [
        "E.i.5 ",
        "Date of End of Reaction / Event",
        "-"
    ],
    [
        "E.i.6a ",
        "Duration of Reaction / Event (number)",
        "-"
    ],
    [
        "E.i.6b ",
        "Duration of Reaction / Event (unit)",
        "-"
    ],
    [
        "E.i.7 ",
        "Outcome of Reaction / Event at the Time of Last Observation",
        "2.16.840.1.113883.3.989.2.1.1.19\n2.16.840.1.113883.3.989.2.1.1.11"
    ],
    [
        "E.i.8 ",
        "Medical Confirmation by Healthcare Professional",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "E.i.9 ",
        "Identification of the Country Where the Reaction / Event Occurred",
        "1.0.3166.1.2.2"
    ],
    [
        "F.r",
        "Results of Tests and Procedures Relevant to the Investigation of the Patient (repeat as necessary)",
        "2.16.840.1.113883.3.989.2.1.1.20"
    ],
    [
        "F.r.1 ",
        "Test Date",
        "-"
    ],
    [
        "F.r.2.1 ",
        "Test Name (free text)",
        "-"
    ],
    [
        "F.r.2.2a ",
        "MedDRA Version for Test Name",
        "-"
    ],
    [
        "F.r.2.2b ",
        "Test Name (MedDRA code)",
        "2.16.840.1.113883.6.163"
    ],
    [
        "F.r.3",
        "Test Result",
        "2.16.840.1.113883.3.989.2.1.1.20"
    ],
    [
        "F.r.3.1 ",
        "Test Result (code)",
        "2.16.840.1.113883.3.989.2.1.1.12"
    ],
    [
        "F.r.3.2 ",
        "Test Result (value / qualifier)",
        "-"
    ],
    [
        "F.r.3.3 ",
        "Test Result (unit)",
        "2.16.840.1.113883.6.8"
    ],
    [
        "F.r.3.4",
        "Result Unstructured Data (free text)",
        "-"
    ],
    [
        "F.r.4 ",
        "Normal Low Value",
        "2.16.840.1.113883.5.83"
    ],
    [
        "F.r.5 ",
        "Normal High Value",
        "2.16.840.1.113883.5.83"
    ],
    [
        "F.r.6 ",
        "Comments (free text)",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "F.r.7 ",
        "More Information Available",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "-",
        "Drug(s) Information (repeat as necessary)",
        "2.16.840.1.113883.3.989.2.1.1.20"
    ],
    [
        "G.k.1 ",
        "Characterisation of Drug Role",
        "2.16.840.1.113883.3.989.2.1.1.19\n2.16.840.1.113883.3.989.2.1.1.13"
    ],
    [
        "G.k.2",
        "Drug Identification",
        "2.16.840.1.113883.3.989.2.1.1.20"
    ],
    [
        "G.k.2.1.1a ",
        "MPID Version Date / Number",
        "-"
    ],
    [
        "G.k.2.1.1b ",
        "Medicinal Product Identifier (MPID) ",
        "TBD"
    ],
    [
        "G.k.2.1.2a",
        "PhPID Version Date/Number",
        "-"
    ],
    [
        "G.k.2.1.2b ",
        "Pharmaceutical Product Identifier (PhPID)",
        "TBD"
    ],
    [
        "G.k.2.2 ",
        "Medicinal Product Name as Reported by the Primary Source",
        "-"
    ],
    [
        "G.k.2.3.r",
        "Substance / Specified Substance Identifier and Strength (repeat as necessary)",
        "-"
    ],
    [
        "G.k.2.3.r.1 ",
        "Substance / Specified Substance Name",
        "-"
    ],
    [
        "G.k.2.3.r.2a ",
        "Substance/Specified Substance TermID Version Date/Number",
        "-"
    ],
    [
        "G.k.2.3.r.2b ",
        "Substance/Specified Substance TermID",
        "TBD"
    ],
    [
        "G.k.2.3.r.3a ",
        "Strength (number) ",
        "-"
    ],
    [
        "G.k.2.3.r.3b ",
        "Strength (unit)",
        "-"
    ],
    [
        "-",
        "-",
        "-"
    ],
    [
        "G.k.2.4",
        "Identification of the Country Where the Drug Was Obtained",
        "1.0.3166.1.2.2"
    ],
    [
        "G.k.2.5 ",
        "Investigational Product Blinded",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "G.k.3.1 ",
        "Authorisation / Application Number",
        "2.16.840.1.113883.3.989.2.1.3.4"
    ],
    [
        "G.k.3.2 ",
        "Country of Authorisation / Application",
        "1.0.3166.1.2.2"
    ],
    [
        "G.k.3.3 ",
        "Name of Holder / Applicant",
        "-"
    ],
    [
        "G.k.4.r",
        "Dosage and Relevant Information (repeat as necessary)",
        "-"
    ],
    [
        "G.k.4.r.1a ",
        "Dose (number)",
        "-"
    ],
    [
        "G.k.4.r.1b ",
        "Dose (unit)",
        "-"
    ],
    [
        "G.k.4.r.2 ",
        "Number of Units in the Interval",
        "-"
    ],
    [
        "G.k.4.r.3 ",
        "Definition of the Time Interval Unit",
        "-"
    ],
    [
        "G.k.4.r.4",
        "Date and Time of Start of Drug",
        "-"
    ],
    [
        "G.k.4.r.5 ",
        "Date and Time of Last Administration",
        "-"
    ],
    [
        "G.k.4.r.6a ",
        "Duration of Drug Administration (number)",
        "-"
    ],
    [
        "G.k.4.r.6b ",
        "Duration of Drug Administration (unit)",
        "-"
    ],
    [
        "G.k.4.r.7 ",
        "Batch / Lot Number",
        "-"
    ],
    [
        "G.k.4.r.8 ",
        "Dosage Text",
        "-"
    ],
    [
        "G.k.4.r.9.1 ",
        "Pharmaceutical Dose Form (free text)",
        "-"
    ],
    [
        "G.k.4.r.9.2a ",
        "Pharmaceutical Dose Form TermID Version Date/Number",
        "-"
    ],
    [
        "G.k.4.r.9.2b",
        "Pharmaceutical Dose Form TermID",
        "E2B(R3) (EDQM DF) - 2.16.840.1.113883.3.989.2.1.1.29"
    ],
    [
        "G.k.4.r.10.1 ",
        "Route of Administration (free text)",
        "-"
    ],
    [
        "G.k.4.r.10.2a",
        "Route of Administration TermID Version Date / Number",
        "-"
    ],
    [
        "G.k.4.r.10.2b ",
        "Route of Administration TermID",
        "E2B(R2) -2.16.840.1.113883.3.989.2.1.1.14\nE2B(R3) (EDQM RoA) - 2.16.840.1.113883.3.989.2.1.1.28"
    ],
    [
        "G.k.4.r.11.1 ",
        "Parent Route of Administration (free text)",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "G.k.4.r.11.2a ",
        "Parent Route of Administration TermID Version Date / Number",
        "-"
    ],
    [
        "G.k.4.r.11.2b ",
        "Parent Route of Administration TermID",
        "E2B(R2) -2.16.840.1.113883.3.989.2.1.1.14\nE2B(R3) (EDQM RoA) - 2.16.840.1.113883.3.989.2.1.1.28"
    ],
    [
        "-",
        "-",
        "-"
    ],
    [
        "G.k.5a ",
        "Cumulative Dose to First Reaction (number)",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "G.k.5b ",
        "Cumulative Dose to First Reaction (unit)",
        "-"
    ],
    [
        "G.k.6a ",
        "Gestation Period at Time of Exposure (number)",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "G.k.6b ",
        "Gestation Period at Time of Exposure (unit)",
        "-"
    ],
    [
        "G.k.7.r",
        "Indication for Use in Case (repeat as necessary)",
        "-"
    ],
    [
        "G.k.7.r.1 ",
        "Indication as Reported by the Primary Source",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "G.k.7.r.2a ",
        "MedDRA Version for Indication",
        "-"
    ],
    [
        "G.k.7.r.2b ",
        "Indication (MedDRA code)",
        "2.16.840.1.113883.3.989.2.1.1.19\n2.16.840.1.113883.6.163"
    ],
    [
        "-",
        "-",
        "-"
    ],
    [
        "G.k.8 ",
        "Action(s) Taken with Drug",
        "2.16.840.1.113883.3.989.2.1.1.15"
    ],
    [
        "G.k.9.i",
        "Drug-reaction(s) / Event(s) Matrix (repeat as necessary)",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "G.k.9.i.1 ",
        "Reaction(s) / Event(s) Assessed",
        "UUIDs"
    ],
    [
        "G.k.9.i.2.r.1 ",
        "Source of Assessment",
        "-"
    ],
    [
        "G.k.9.i.2.r.2",
        "Method of Assessment",
        "-"
    ],
    [
        "G.k.9.i.2.r.3 ",
        "Result of Assessment",
        "-"
    ],
    [
        "G.k.9.i.3.1a ",
        "Time Interval between Beginning of Drug Administration and Start of Reaction / Event (number)",
        "-"
    ],
    [
        "G.k.9.i.3.1b ",
        "Time Interval between Beginning of Drug Administration and Start of Reaction / Event (unit)",
        "-"
    ],
    [
        "G.k.9.i.3.2a ",
        "Time Interval between Last Dose of Drug and Start of Reaction / Event (number)",
        "-"
    ],
    [
        "G.k.9.i.3.2b ",
        "Time Interval between Last Dose of Drug and Start of Reaction / Event (unit)",
        "-"
    ],
    [
        "G.k.9.i.4 ",
        "Did Reaction Recur on Re-administration?",
        "2.16.840.1.113883.3.989.2.1.1.19\n2.16.840.1.113883.3.989.2.1.1.16"
    ],
    [
        "-",
        "-",
        "-"
    ],
    [
        "G.k.10.r ",
        "Additional Information on Drug (coded) (repeat as necessary)",
        "2.16.840.1.113883.3.989.2.1.1.19\n2.16.840.1.113883.3.989.2.1.1.17"
    ],
    [
        "G.k.11 ",
        "Additional Information on Drug (free text)",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "-",
        "Narrative Case Summary and Further Information",
        "-"
    ],
    [
        "H.1 ",
        "Case Narrative Including Clinical Course, Therapeutic Measures, Outcome and Additional Relevant Information",
        "2.16.840.1.113883.5.4"
    ],
    [
        "H.2 ",
        "Reporter's Comments",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        null,
        "Sender's Diagnosis (repeat as necessary)",
        "-"
    ],
    [
        "H.3.r.1a ",
        "MedDRA Version for Sender's Diagnosis / Syndrome and / or Reclassification of Reaction / Event",
        "-"
    ],
    [
        "H.3.r.1b",
        "Sender's Diagnosis / Syndrome and / or Reclassification of Reaction / Event (MedDRA code)",
        "2.16.840.1.113883.3.989.2.1.1.19\n2.16.840.1.113883.6.163"
    ],
    [
        "-",
        "-",
        "-"
    ],
    [
        "H.4 ",
        "Sender's Comments",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "-",
        "Case Summary and Reporter’s Comments in Native Language (repeat as necessary)",
        "-"
    ],
    [
        "H.5.r.1a ",
        "Case Summary and Reporter’s Comments Text",
        "2.16.840.1.113883.3.989.2.1.1.19"
    ],
    [
        "H.5.r.1b ",
        "Case Summary and Reporter’s Comments Language",
        "1.0.639.2"
    ],
    [
        "-",
        "-",
        "-"
    ],
    [
        "-",
        "ACK.M/A ICH ICSR BATCH ACKNOWLEDGEMENT",
        "-"
    ],
    [
        "ACK.M.1",
        "Acknowledgement Batch Number",
        "-"
    ],
    [
        "ACK.M.2",
        "Acknowledgement Batch Sender Identifier",
        "2.16.840.1.113883.3.989.2.1.3.17"
    ],
    [
        "ACK.M.3",
        "Acknowledgement Batch Receiver Identifier",
        "2.16.840.1.113883.3.989.2.1.3.18"
    ],
    [
        "ACK.M.4",
        "Acknowledgement Date of Batch Transmission",
        "-"
    ],
    [
        "ACK.A.1",
        "ICSR Batch Number",
        "-"
    ],
    [
        "ACK.A.2",
        "Acknowledgement Local Message Number",
        "2.16.840.1.113883.3.989.2.1.1.24"
    ],
    [
        "ACK.A.3",
        "Date of ICSR Batch Transmission",
        "2.16.840.1.113883.3.989.2.1.1.24"
    ],
    [
        "ACK.A.4",
        "Transmission Acknowledgement Code",
        "-"
    ],
    [
        "ACK.A.5",
        "Batch Validation Error",
        "-"
    ],
    [
        "-",
        "-",
        "-"
    ],
    [
        "-",
        "ICH ICSR MESSAGE ACKNOWLEDGEMENT",
        "-"
    ],
    [
        "ACK.B.r.1",
        "ICSR Message Number",
        "-"
    ],
    [
        "ACK.B.r.2",
        "Local Report Number",
        "-"
    ],
    [
        "ACK.B.r.3",
        "ICSR Message ACK Receiver",
        "2.16.840.1.113883.3.989.2.1.3.16"
    ],
    [
        "ACK.B.r.4",
        "ICSR Message ACK Sender",
        "2.16.840.1.113883.3.989.2.1.3.15"
    ],
    [
        "ACK.B.r.5",
        "Date of ICSR Message Creation",
        "2.16.840.1.113883.3.989.2.1.1.24"
    ],
    [
        "ACK.B.r.6",
        "Acknowledgement Code for a ICSR Message",
        "-"
    ],
    [
        "ACK.B.r.7",
        "Error / Warning Message or Comment",
        "-"
    ],
    [
        "-",
        "-",
        "-"
    ]
]