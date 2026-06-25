# MediCore Luxury Services - Database Schema Entity Relationship Diagram (ERD)

This document contains the schema definition and entity relationships for the five priority luxury services. The schema is client-centric, focusing on patient flows, bookings, diagnostics, and delivery processes.

## Mermaid ERD Diagram

```mermaid
erDiagram
    PATIENT ||--o{ BOOKING : "places"
    PATIENT ||--o{ CONCIERGE_REQUEST : "makes"
    PATIENT ||--o{ LAB_SAMPLE : "submits"
    PATIENT ||--o{ IMAGING_ORDER : "undergoes"
    PATIENT ||--o{ OR_BOOKING : "scheduled_for"
    PATIENT ||--o{ PREOP_CHECKLIST : "assigned_to"
    PATIENT ||--o{ PHARMACY_ORDER : "orders"

    ROOM ||--o{ BOOKING : "contains"
    ROOM ||--o| ICU_POD : "has_monitoring"

    OR_BOOKING ||--o{ SUPPLY_RESERVATION : "reserves"
    PHARMACY_ORDER ||--o| DELIVERY : "shipped_via"

    PATIENT {
        varchar id PK
        varchar name
        date dob
        varchar vip_tier
        varchar contact
        jsonb preferences
    }

    ROOM {
        varchar id PK
        varchar type
        varchar status
        text_array amenities
        decimal nightly_rate
    }

    BOOKING {
        varchar id PK
        varchar room_id FK
        varchar patient_id FK
        date start_date
        date end_date
        text_array services
        varchar payment_status
    }

    ICU_POD {
        varchar id PK
        varchar room_id FK
        boolean active
        jsonb monitoring_config
    }

    CONCIERGE_REQUEST {
        varchar id PK
        varchar patient_id FK
        varchar type
        text details
        varchar status
        varchar priority
        timestamp created_at
        timestamp updated_at
    }

    LAB_SAMPLE {
        varchar id PK
        varchar patient_id FK
        varchar test_code
        varchar priority
        varchar status
        varchar result_id
        timestamp collected_at
    }

    IMAGING_ORDER {
        varchar id PK
        varchar patient_id FK
        varchar modality
        timestamp scheduled_at
        varchar priority
        varchar report_id
    }

    REPORT {
        varchar id PK
        varchar order_id
        varchar signed_by_doctor_name
        timestamp signed_at
        text content
        text_array attachments
    }

    OR_BOOKING {
        varchar id PK
        varchar suite_id
        varchar surgeon_name
        varchar patient_id FK
        timestamp start_time
        timestamp end_time
        varchar status
    }

    SUPPLY_RESERVATION {
        varchar id PK
        varchar supply_id
        varchar serial
        varchar reserved_for_booking FK
        varchar status
    }

    PREOP_CHECKLIST {
        varchar id PK
        varchar patient_id FK
        jsonb items
        varchar completed_by_staff_name
        timestamp completed_at
    }

    PHARMACY_ORDER {
        varchar id PK
        varchar patient_id FK
        jsonb items
        varchar status
        varchar delivery_id
    }

    INVENTORY_ITEM {
        varchar id PK
        varchar drug_code
        varchar lot
        date expiry
        integer quantity
        varchar location
    }

    DELIVERY {
        varchar id PK
        varchar order_id FK
        varchar delivery_agent_name
        timestamp eta
        timestamp delivered_at
        text signature
    }
```

## Description of Entities

### Core Entities
1. **PATIENT**: VIP Patient profile. Stores standard EHR identifiers, contact info, and encrypted preference parameters (`preferences` JSONB includes custom dining, pillows, newspaper, visiting constraints).

### Accommodation System
2. **ROOM**: VIP Room inventory tracking availability, style types (vip, deluxe, suite), special amenities lists, and pricing ledgers.
3. **BOOKING**: Inpatient room scheduler linking patients to reserved VIP suites and custom add-on guest services.
4. **ICU_POD**: Extension of VIP suites detailing physical monitoring states and real-time alert thresholds.

### Clinical & Operations System
5. **CONCIERGE_REQUEST**: Single-ticket tracking entity for patient-initiated service requests (e.g. food, transport, valet, translation, etc.) with real-time status and priority.
6. **LAB_SAMPLE**: Diagnostics workflow tracker for specimens marked with high VIP priority flags to expedite lab turnaround.
7. **IMAGING_ORDER**: Radiology queue scheduler holding specific modalities (MRI, CT, PET) and scheduling configurations.
8. **REPORT**: The output of diagnostic testing or radiology reviews.

### Surgical Suite
9. **OR_BOOKING**: Dedicated scheduler slots inside high-tech operating suites (like DaVinci Robotic ORs) linking booked patients and surgery schedules.
10. **SUPPLY_RESERVATION**: Serial tracking system securing specific implants or premium surgical assets for upcoming surgeries.
11. **PREOP_CHECKLIST**: Custom digital form aggregating multi-department sign-offs (Anesthesia, Lab clearance, eConsent) required for VIP operations.

### Pharmacy & Home Delivery
12. **PHARMACY_ORDER**: Pharmacy worksheet capturing prescription medications and bespoke compounding parameters.
13. **INVENTORY_ITEM**: Detailed drug lot database logging expiries, quantities, and locations.
14. **DELIVERY**: Delivery agent worksheet mapping shipping updates, routes, cold chain confirmations, and sign-offs.
