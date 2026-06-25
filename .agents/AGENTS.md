# **GLOBAL DATA SYNCHRONIZATION REQUIREMENT (CRITICAL)**

The appointment booking system **must not use isolated or duplicate data**. It should function as a **single source of truth** across the entire application.

## Department & Service Synchronization

Every department created in the system must automatically populate all related modules.

For example:

* If **Cardiology** is created with 10 services, those same 10 services must automatically appear in:

  * Appointment Booking
  * Services Page
  * Doctor Assignment
  * Department Details
  * Search Results
  * Admin Dashboard
  * API Responses

No service should be manually duplicated.

---

## Single Source of Truth

Create centralized data models.

```
Department
    ↓
Sub-Services
    ↓
Doctors
    ↓
Appointments
    ↓
Hospital Analytics
```

Every page should consume data from the same database/API.

---

# Services Page Integration

The **Services Page** must be generated dynamically from the Departments and Sub-Services database.

For example:

```
Services

Cardiology
    • Chest Pain Consultation
    • ECG Analysis
    • Heart Failure Clinic
    • Hypertension Clinic
    • Preventive Cardiac Screening
    • Arrhythmia Consultation
    • Cardiac Rehabilitation
    • Heart Valve Evaluation

Neurology
    • Migraine Clinic
    • Stroke Assessment
    • Memory Disorders
    • Parkinson's Disease
    • Epilepsy Clinic
    • Nerve Conduction Studies
    • Sleep Neurology
    • Headache Evaluation

Orthopedics
    • Back Pain
    • Knee Pain
    • Arthritis Treatment
    • Joint Replacement
    • Sports Injury
    • Shoulder Pain
    • Hip Pain
    • Fracture Care
```

Every service displayed on the Services page must be fetched from the database, **not hardcoded**.

---

# Automatic Reflection

Whenever an administrator:

* Creates a new Department
* Updates a Department
* Deletes a Department
* Adds a Sub-Service
* Edits a Sub-Service
* Deletes a Sub-Service

the changes must automatically be reflected in:

* ✅ Services Page
* ✅ Appointment Booking
* ✅ Doctor Profiles
* ✅ Doctor Filters
* ✅ Search
* ✅ Admin Dashboard
* ✅ Analytics
* ✅ REST APIs

No manual code changes should be required.

---

# Doctor Synchronization

Every doctor belongs to a single department and may support one or more sub-services.

Example:

```
Cardiology

Dr. Sarah Williams

Supports:

✓ Chest Pain
✓ Hypertension
✓ ECG
✓ Heart Failure
✓ Preventive Screening
```

When a user selects:

```
Department
↓

Cardiology
↓

Sub-Service
↓

Chest Pain
```

the system must automatically display **only doctors** who provide the **Chest Pain** service.

The same doctor-service relationships must also appear on:

* Doctor Details Page
* Services Page
* Department Page
* Doctor Search
* Appointment Booking

---

# Service Detail Pages

Every service should have its own dedicated page.

Example:

```
/services/cardiology/chest-pain-consultation
```

Display:

* Service Name
* Department
* Description
* Symptoms Treated
* Procedure Overview
* Consultation Fee
* Estimated Duration
* Preparation Instructions
* Required Documents
* FAQs
* Related Services
* Assigned Doctors
* Available Appointment Slots
* "Book Appointment" Button

All information should come dynamically from the database.

---

# Dynamic Navigation

Navigation menus must update automatically.

Example:

```
Services

▼ Cardiology

Chest Pain

ECG

Heart Failure

Hypertension

▼ Neurology

Migraine

Stroke

Epilepsy

Memory Disorders
```

When a new service is added by an administrator, it should instantly appear in the navigation without code changes.

---

# API Requirements

Implement dynamic APIs:

```http
GET /departments
GET /departments/:id
GET /departments/:id/services

GET /services
GET /services/:id

GET /services/:id/doctors

GET /doctors
GET /doctors/:id

GET /search?q=
```

These APIs must power every page.

---

# Database Relationships

```
Department
│
├── SubServices
│      │
│      ├── Doctors (Many-to-Many)
│      │
│      └── Appointments
│
└── Analytics
```

Use proper foreign keys and join tables (e.g., `doctor_services`) to support doctors offering multiple services within their department.

---

# Final Requirement

The entire **MediCore** application must behave as a fully dynamic, database-driven hospital management system. Departments, sub-services, doctors, appointment booking, the Services page, search, navigation, and analytics must all remain synchronized through a centralized data model. **No page should contain hardcoded department or service data**, ensuring that any change made by an administrator is automatically reflected throughout the application.
