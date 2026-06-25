export interface FAQ {
  question: string;
  answer: string;
}

export interface SubService {
  id: string;
  name: string;
  description: string;
  fee: number;
  duration: string;
  symptoms: string[];
  procedures: string[];
  preparation: string;
  documents: string[];
  faqs: FAQ[];
}

export interface Department {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  services: SubService[];
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  departmentId: string;
  supportedServices: string[]; // SubService IDs
  image: string;
}

// Seeding default luxury hospital database
const DEFAULT_DEPARTMENTS: Department[] = [
  {
    id: "cardiology",
    name: "Cardiology",
    description: "State-of-the-art cardiovascular medicine and advanced heart care screenings.",
    icon: "favorite",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9AcmbJHNHMuSFKuLnGL18XqWi5-q8Mo1zDzAphKabCvK1Xji6IgdToQ7aJGX6PGnNRUKqJSh2y_Hmd57YYN5OMmGOZ-vVEeZTpruioioElsJ5YJ3NXXwnJhGHHFMcEJf2s9by5gP3KpAeQ7NSZ49tuldvgkk1qU6U70ybiEo-9rRVdykTnpIcD-sgQWyYCHU6h0UPGZTwpUqpQILsfYqi4XJBGuHc1c-BwZ-UF3K2UA3WpB74YvF_w1P9UINNrhZGQHHq3nbm-hk",
    services: [
      {
        id: "chest-pain-consultation",
        name: "Chest Pain Consultation",
        description: "Immediate expert clinical evaluation for acute or chronic chest discomfort to rule out severe ischemic heart disease.",
        fee: 350,
        duration: "45 mins",
        symptoms: ["Chest tightness", "Shortness of breath", "Radiating shoulder pain", "Dizziness"],
        procedures: ["Clinical physical assessment", "Differential cardiac diagnosis", "Risk stratification mapping"],
        preparation: "Avoid heavy food or caffeinated drinks 2 hours prior to the consult.",
        documents: ["List of current medications", "Previous cardiac history charts", "Recent lab results"],
        faqs: [
          { question: "What happens during this consultation?", answer: "A cardiologist will review your symptoms, perform a physical exam, and map out immediate diagnostic tests like ECG or cardiac markers." },
          { question: "Do I need a referral?", answer: "No, as a luxury VIP patient you can self-schedule a priority consultation directly." }
        ]
      },
      {
        id: "ecg-analysis",
        name: "ECG Analysis",
        description: "Resting or exercise Electrocardiogram analysis using advanced multi-channel tracking to capture electrical signal maps.",
        fee: 150,
        duration: "30 mins",
        symptoms: ["Palpitations", "Arrhythmia alerts", "Unexplained fatigue", "Fainting episodes"],
        procedures: ["12-lead electrode mapping", "Electrical pathway graphing", "Cardiologist interpretation report"],
        preparation: "Do not apply body lotions or oils on the chest area on the day of the test.",
        documents: ["Any prior baseline ECG scans"],
        faqs: [
          { question: "Is the test painful?", answer: "Not at all. Small adhesive patches are placed on your chest, arms, and legs to record electrical signals." }
        ]
      },
      {
        id: "heart-failure-clinic",
        name: "Heart Failure Clinic",
        description: "Comprehensive management program including guideline-directed therapies and luxury remote monitoring support.",
        fee: 400,
        duration: "60 mins",
        symptoms: ["Severe ankle swelling", "Orthopnea (shortness of breath lying flat)", "Chronic fatigue"],
        procedures: ["Fluid balance analysis", "Echocardiogram review", "Therapy optimization counseling"],
        preparation: "Bring your daily weight logs if available.",
        documents: ["All current prescriptions", "Recent electrolyte panel tests"],
        faqs: [
          { question: "What is the frequency of follow-up?", answer: "Initially every 2-4 weeks, transitioning to quarterly checks once stabilized." }
        ]
      },
      {
        id: "hypertension-clinic",
        name: "Hypertension Clinic",
        description: "Focused program to control high blood pressure, investigate secondary causes, and protect end-organ health.",
        fee: 250,
        duration: "30 mins",
        symptoms: ["Frequent headaches", "Tinnitus", "Occasional nosebleeds", "Elevated home BP readings"],
        procedures: ["24-hour ambulatory BP setup", "Vascular stiffness assessment", "Renal artery review"],
        preparation: "Avoid smoking or physical exertion 30 minutes before your appointment.",
        documents: ["Home BP logs (minimum 3 days)"],
        faqs: [
          { question: "What is ambulatory BP monitoring?", answer: "A portable cuff that measures your blood pressure at set intervals over a full 24-hour cycle." }
        ]
      },
      {
        id: "preventive-cardiac-screening",
        name: "Preventive Cardiac Screening",
        description: "Luxury screening package evaluating lipid panels, high-sensitivity CRP, and arterial calcium scores.",
        fee: 550,
        duration: "90 mins",
        symptoms: ["Family history of early coronary artery disease", "High stress lifestyle"],
        procedures: ["Calcium scoring CT review", "Advanced lipid profiling", "Cardiovascular lifestyle mapping"],
        preparation: "Fasting for 12 hours required before blood draw.",
        documents: ["Family medical history notes"],
        faqs: [
          { question: "What does the calcium score tell me?", answer: "It measures calcified plaque in your coronary arteries, indicating your early risk of a heart attack." }
        ]
      },
      {
        id: "arrhythmia-consultation",
        name: "Arrhythmia Consultation",
        description: "Specialized assessment of heart rhythm disorders, irregular heartbeats, and palpitations.",
        fee: 380,
        duration: "45 mins",
        symptoms: ["Skipped beats", "Fluttering chest sensations", "Sudden lightheadedness"],
        procedures: ["Holter monitor scheduling", "Electrophysiology study referral", "Pacemaker threshold checks"],
        preparation: "Wear comfortable, loose clothing.",
        documents: ["Palpitation diary logs", "Smartwatch ECG printouts"],
        faqs: [
          { question: "Can smartwatches detect arrhythmias?", answer: "Yes, Apple Watch and similar devices can flag AFib, which our cardiologists will clinically validate." }
        ]
      },
      {
        id: "cardiac-rehabilitation",
        name: "Cardiac Rehabilitation",
        description: "Medically supervised, customized exercise and education programs for recovery post-heart surgery or attack.",
        fee: 200,
        duration: "60 mins",
        symptoms: ["Post-myocardial infarction status", "Post-coronary bypass status"],
        procedures: ["Telemetered exercise sessions", "Nutritional counseling", "Stress management sessions"],
        preparation: "Wear athletic shoes and comfortable activewear.",
        documents: ["Hospital discharge summary", "Surgeon's physical clearance"],
        faqs: [
          { question: "How long does the program last?", answer: "Typically 12 to 36 sessions spaced over 6 to 12 weeks." }
        ]
      },
      {
        id: "heart-valve-evaluation",
        name: "Heart Valve Evaluation",
        description: "Specialized diagnostics for cardiac murmurs, stenotic lesions, or regurgitant heart valves.",
        fee: 450,
        duration: "60 mins",
        symptoms: ["Exertional fatigue", "Heart murmurs", "Swollen ankles", "Chest fluttering"],
        procedures: ["Transthoracic Echocardiogram review", "Valvular area planimetry", "Surgical timing review"],
        preparation: "No special physical preparation required.",
        documents: ["Prior echocardiogram disk files", "Cardiologist logs"],
        faqs: [
          { question: "What is an echocardiogram?", answer: "An ultrasound of your heart that shows the structures of the valves and chambers in real-time." }
        ]
      }
    ]
  },
  {
    id: "neurology",
    name: "Neurology",
    description: "Advanced neurological diagnostics and comprehensive clinics for brain and nerve health.",
    icon: "psychology",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRpxQJD_Rvda1HmcG7-BBaKOV81fN3NcRYRVlxhZHsLvvKpiV-5PCo8MNNrk6jHq8FrPf0YoUUhnwyhr26CRrUKx2J-GTzZMgmMT0PHYJISpEhf605gouFIq4c7qOTBpHJ_EyHfrsNN7Hh8qLPvkIGDt6yjyMIwAO9KfstRlhKtfZSNnHW8kk3lU8qtAEkCu9BN-StoDOsVKDoKm2qXmkFcBIsb41vcL4KYN35b9gxVWk15QWhTWHnFD0207yR5lmhWNDciATph30",
    services: [
      {
        id: "migraine-clinic",
        name: "Migraine Clinic",
        description: "Focused diagnosis and advanced preventative treatments (including CGRP inhibitors and Botox protocols).",
        fee: 300,
        duration: "45 mins",
        symptoms: ["Severe throbbing headache", "Photophobia", "Visual aura", "Nausea"],
        procedures: ["Trigger mapping analysis", "Botox administration protocols", "Neurological response tracking"],
        preparation: "Maintain a headache diary for 2 weeks prior to visit.",
        documents: ["Prior brain MRI scans", "List of failed migraine therapies"],
        faqs: [
          { question: "Are Botox treatments covered?", answer: "Yes, our billing coordinators can handle pre-authorization for therapeutic Botox." }
        ]
      },
      {
        id: "stroke-assessment",
        name: "Stroke Assessment",
        description: "Post-acute stroke review, secondary prevention strategies, and personalized neuro-rehabilitation plans.",
        fee: 450,
        duration: "60 mins",
        symptoms: ["Transient numbness", "Slurred speech history", "Hemiparesis recovery"],
        procedures: ["Carotid Doppler review", "Cognitive functional assessment", "Antiplatelet regimen evaluation"],
        preparation: "Ensure a family member or caregiver accompanies you to share medical timelines.",
        documents: ["Emergency discharge summaries", "Brain CT/MRI scan disks"],
        faqs: [
          { question: "What is secondary prevention?", answer: "Medications and lifestyle modifications designed to prevent another stroke from occurring." }
        ]
      },
      {
        id: "memory-disorders",
        name: "Memory Disorders Clinic",
        description: "Comprehensive evaluation of early cognitive decline, Alzheimer's disease, and vascular dementia.",
        fee: 400,
        duration: "90 mins",
        symptoms: ["Frequent forgetfulness", "Confusion in familiar settings", "Language difficulties"],
        procedures: ["MMSE cognitive testing", "Volumetric brain MRI review", "Neuropsychological assessment"],
        preparation: "Get a good night's sleep before the cognitive testing.",
        documents: ["Complete list of vitamins and medications"],
        faqs: [
          { question: "How long does testing take?", answer: "The cognitive tests take about 45 minutes as part of the total 90-minute consultation." }
        ]
      },
      {
        id: "parkinsons-disease",
        name: "Parkinson's Disease Clinic",
        description: "Specialized assessment of tremors, rigidity, and movement disorders with custom pharmacotherapy.",
        fee: 350,
        duration: "60 mins",
        symptoms: ["Resting tremor", "Slowed movements", "Postural instability", "Micrographia"],
        procedures: ["Motor function testing", "Dopaminergic medication titration", "Deep Brain Stimulation review"],
        preparation: "Take your regular medications at your normal scheduled times.",
        documents: ["Neurology consultation records"],
        faqs: [
          { question: "Is Deep Brain Stimulation available here?", answer: "Yes, we evaluate candidates and manage DBS programming adjustments." }
        ]
      },
      {
        id: "epilepsy-clinic",
        name: "Epilepsy Clinic",
        description: "Comprehensive care for seizure disorders, EEG mapping, and advanced anti-seizure therapy designs.",
        fee: 350,
        duration: "60 mins",
        symptoms: ["Unexplained blackouts", "Muscle jerks", "Staring spells"],
        procedures: ["Ambulatory EEG review", "Seizure mapping profiling", "Therapeutic drug level checks"],
        preparation: "Fasting is not required. Keep hair clean and free of sprays/gels.",
        documents: ["Eye-witness logs of seizures", "Prior EEG reports"],
        faqs: [
          { question: "What happens if I have a seizure during testing?", answer: "Our clinic is fully equipped with safety equipment and medical staff trained to manage active seizures." }
        ]
      },
      {
        id: "nerve-conduction-studies",
        name: "Nerve Conduction Studies",
        description: "Electrophysiological testing to diagnose carpal tunnel, neuropathies, or radiculopathy.",
        fee: 300,
        duration: "60 mins",
        symptoms: ["Tingling in fingers", "Numbness in feet", "Muscle weakness"],
        procedures: ["Nerve stimulation testing", "Electromyography (EMG) mapping"],
        preparation: "Do not apply lotions or creams to your arms or legs on test day.",
        documents: ["Referring physician orders"],
        faqs: [
          { question: "Does the test shock you?", answer: "You will feel small, brief electrical pulses that may cause a mild tingling sensation." }
        ]
      },
      {
        id: "sleep-neurology",
        name: "Sleep Neurology",
        description: "Neurological approach to insomnia, restless legs syndrome, narcolepsy, and central sleep apnea.",
        fee: 380,
        duration: "45 mins",
        symptoms: ["Severe daytime sleepiness", "Nighttime leg twitching", "Chronic insomnia"],
        procedures: ["Polysomnography review", "Actigraphy sleep assessment", "CPAP compliance audits"],
        preparation: "Keep a sleep log for one week before the visit.",
        documents: ["Previous sleep study reports"],
        faqs: [
          { question: "Do you have an in-hospital sleep lab?", answer: "Yes, we feature premium private luxury suites for overnight sleep studies." }
        ]
      },
      {
        id: "headache-evaluation",
        name: "Headache Evaluation",
        description: "Comprehensive assessment of tension, cluster, and chronic headaches to identify structural or vascular triggers.",
        fee: 280,
        duration: "45 mins",
        symptoms: ["Severe one-sided eye pain", "Daily tension headaches", "Sudden headache onset"],
        procedures: ["Cranial nerve assessment", "Vascular MRI review", "Prophylactic therapy mapping"],
        preparation: "Note any foods or stressors that trigger your headaches.",
        documents: ["List of all over-the-counter painkillers used"],
        faqs: [
          { question: "How does this differ from the Migraine Clinic?", answer: "We focus on non-migraine headaches like cluster headaches, neuralgias, and secondary causes." }
        ]
      }
    ]
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    description: "Advanced bone, joint, and muscle care programs, from sports medicine to total joint replacements.",
    icon: "join_inner",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRpxQJD_Rvda1HmcG7-BBaKOV81fN3NcRYRVlxhZHsLvvKpiV-5PCo8MNNrk6jHq8FrPf0YoUUhnwyhr26CRrUKx2J-GTzZMgmMT0PHYJISpEhf605gouFIq4c7qOTBpHJ_EyHfrsNN7Hh8qLPvkIGDt6yjyMIwAO9KfstRlhKtfZSNnHW8kk3lU8qtAEkCu9BN-StoDOsVKDoKm2qXmkFcBIsb41vcL4KYN35b9gxVWk15QWhTWHnFD0207yR5lmhWNDciATph30",
    services: [
      {
        id: "back-pain-management",
        name: "Back Pain",
        description: "Diagnosis and advanced non-surgical treatment for disc herniations, sciatica, and spinal stenosis.",
        fee: 280,
        duration: "45 mins",
        symptoms: ["Lower back stiffness", "Radiating leg pain", "Sciatica tingling"],
        procedures: ["Spinal alignment evaluation", "Epidural steroid planning", "Physical therapy mapping"],
        preparation: "Wear loose clothing to allow spinal examinations.",
        documents: ["Lumbar spine MRI or X-ray disks"],
        faqs: [
          { question: "Is surgery always recommended?", answer: "No, 90% of back pain is managed conservatively with advanced therapy, blocks, and core conditioning." }
        ]
      },
      {
        id: "knee-pain-clinic",
        name: "Knee Pain",
        description: "Specialized treatments for ligament tears (ACL/MCL), meniscus damage, and osteoarthritis.",
        fee: 260,
        duration: "30 mins",
        symptoms: ["Knee clicking", "Joint swelling", "Inability to bear weight"],
        procedures: ["Ligament stability tests", "Intra-articular injection mapping", "Knee brace fitting"],
        preparation: "Wear shorts or loose athletic pants.",
        documents: ["Knee MRI films"],
        faqs: [
          { question: "What injections do you offer?", answer: "We offer hyaluronic acid (lubricants), cortisone, and advanced regenerative therapy options." }
        ]
      },
      {
        id: "arthritis-treatment",
        name: "Arthritis Treatment",
        description: "Comprehensive medical and injection regimens for osteoarthritis and inflammatory joint diseases.",
        fee: 260,
        duration: "45 mins",
        symptoms: ["Morning joint stiffness", "Swollen knuckle joints", "Deep dull joint aches"],
        procedures: ["Joint fluid analysis review", "Anti-inflammatory drug profiling", "Splinting evaluations"],
        preparation: "Fasting not required unless specific autoimmune lab panels are ordered.",
        documents: ["Recent blood panels", "Hand/foot X-ray films"],
        faqs: [
          { question: "Is this managed by orthopedics or rheumatology?", answer: "We co-manage with rheumatologists to offer surgical joint preservation and advanced medical injections." }
        ]
      },
      {
        id: "joint-replacement",
        name: "Joint Replacement Consultation",
        description: "Priority surgical consultation for total hip or knee replacements using minimally invasive techniques.",
        fee: 450,
        duration: "60 mins",
        symptoms: ["Severe bone-on-bone pain", "Waking at night from hip pain", "Severe limp"],
        procedures: ["Pre-operative sizing templates", "Robotic-assisted surgery reviews", "Rehabilitation timeline planning"],
        preparation: "No physical preparation. Bring a list of questions about recovery.",
        documents: ["Complete lower extremity X-rays", "Cardiology clearance notes if any"],
        faqs: [
          { question: "What is robotic-assisted joint replacement?", answer: "Using 3D CT mapping and a robotic arm, the surgeon fits the implant with sub-millimeter precision for longer wear and faster recovery." }
        ]
      },
      {
        id: "sports-injury",
        name: "Sports Injury Clinic",
        description: "Rapid diagnostics and recovery plans for athletes with sprains, fractures, and tendon tears.",
        fee: 300,
        duration: "45 mins",
        symptoms: ["Sudden joint pop", "Ankle sprains", "Shoulder dislocations", "Muscle tears"],
        procedures: ["Joint range assessments", "Dynamic ultrasound mapping", "Athletic training routines"],
        preparation: "Wear comfortable activewear.",
        documents: ["Details of how the injury occurred"],
        faqs: [
          { question: "How quickly can I get an MRI?", answer: "We offer priority scheduling, frequently securing MRI slots on the same day for sports injuries." }
        ]
      },
      {
        id: "shoulder-pain",
        name: "Shoulder Pain",
        description: "Diagnosis of rotator cuff tears, frozen shoulder, and impingement syndromes.",
        fee: 260,
        duration: "30 mins",
        symptoms: ["Pain when reaching overhead", "Inability to sleep on shoulder", "Shoulder clicking"],
        procedures: ["Neer/Hawkins impingement tests", "Rotator cuff strength assessments"],
        preparation: "Wear a tank top or short sleeve shirt.",
        documents: ["Shoulder MRI scans"],
        faqs: [
          { question: "What is frozen shoulder?", answer: "Adhesive capsulitis, a condition causing severe stiffness and pain, managed here with joint distension procedures." }
        ]
      },
      {
        id: "hip-pain",
        name: "Hip Pain",
        description: "Focused reviews for hip bursitis, labral tears, and avascular necrosis.",
        fee: 280,
        duration: "30 mins",
        symptoms: ["Groin pain when sitting", "Clicking hip joints", "Limping when walking"],
        procedures: ["FADIR/FABER hip impingement tests", "Radiological alignment reviews"],
        preparation: "Wear loose clothing.",
        documents: ["Pelvis and hip X-rays"],
        faqs: [
          { question: "Does hip pain always originate in the hip joint?", answer: "No, it often radiates from the lumbar spine, which our specialists will carefully differentiate." }
        ]
      },
      {
        id: "fracture-care",
        name: "Fracture Care",
        description: "Priority casting, splinting, and surgical planning for acute bone fractures.",
        fee: 350,
        duration: "45 mins",
        symptoms: ["Immediate swelling post-fall", "Bone deformity", "Severe localized pain"],
        procedures: ["X-ray reduction mapping", "Waterproof cast application", "Surgical plate stabilization reviews"],
        preparation: "Fasting required if emergency surgical fixation is likely.",
        documents: ["Any emergency room X-rays"],
        faqs: [
          { question: "Do you offer waterproof casts?", answer: "Yes, we utilize advanced breathable waterproof liners that allow you to shower normally." }
        ]
      }
    ]
  }
];

const DEFAULT_DOCTORS: Doctor[] = [
  {
    id: "priya-nair",
    name: "Dr. Priya Nair",
    title: "Cardiology Lead",
    departmentId: "cardiology",
    supportedServices: [
      "chest-pain-consultation",
      "ecg-analysis",
      "heart-failure-clinic",
      "preventive-cardiac-screening",
      "heart-valve-evaluation"
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyd4A97dj2wBVW0pAeQ8Kcd_bprTOvsEZTq4-pXG45BQz4hsEKIwKQyKHAuDRHmvLx-4rHlI1d9U24sXCDW1LM1UfV0236hxlPYzvPjptvlDERgPd2MD8JxvFib5JKyMg1gaIyZoHsMokf8xwA_VY15aLNKz76-D3BNDHWXhIe50dLcMJfMFEa0VIMZIVzGE08NXi36_yJeL77WbWoin_c0SsDX89aq9rpauUeEXYAYk-ENBzjX-wJcfeNNEe5BLmcdUfKc4nSRLQ"
  },
  {
    id: "sarah-williams",
    name: "Dr. Sarah Williams",
    title: "Cardiologist",
    departmentId: "cardiology",
    supportedServices: [
      "chest-pain-consultation",
      "hypertension-clinic",
      "ecg-analysis",
      "heart-failure-clinic",
      "preventive-cardiac-screening"
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRpxQJD_Rvda1HmcG7-BBaKOV81fN3NcRYRVlxhZHsLvvKpiV-5PCo8MNNrk6jHq8FrPf0YoUUhnwyhr26CRrUKx2J-GTzZMgmMT0PHYJISpEhf605gouFIq4c7qOTBpHJ_EyHfrsNN7Hh8qLPvkIGDt6yjyMIwAO9KfstRlhKtfZSNnHW8kk3lU8qtAEkCu9BN-StoDOsVKDoKm2qXmkFcBIsb41vcL4KYN35b9gxVWk15QWhTWHnFD0207yR5lmhWNDciATph30"
  },
  {
    id: "arjun-mehta",
    name: "Dr. Arjun Mehta",
    title: "Chief of Surgery / Orthopedics",
    departmentId: "orthopedics",
    supportedServices: [
      "joint-replacement",
      "sports-injury",
      "hip-pain",
      "fracture-care",
      "back-pain-management"
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbRDL9zzvmnnlPYMSMqucuVkamSUD7T48hVu05lJGsrIRcVyqwANmKm6LxILwLxAgLAmbl6fFyhnbLqQdeCVSW6dEyfBp_LdfVo0l58jCbiF-HFfuhQzUInMs73DS8Mui1pBYxvDXwENKJUIZFZ2GNELglSNQpCkrBlu6UfIm9pY3nfzM2j40PB4IJpop0cWdc91mefhClXjqad3lllaKNfSTt4KWC2b6xvxgcsAfAJYvSkbd3Mc0i5_CfZloYvL2eC4DEl2Ii0Io"
  },
  {
    id: "kavitha-iyer",
    name: "Dr. Kavitha Iyer",
    title: "Neurology Lead",
    departmentId: "neurology",
    supportedServices: [
      "migraine-clinic",
      "stroke-assessment",
      "memory-disorders",
      "parkinsons-disease",
      "epilepsy-clinic"
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsMbNEYGVTBrw-eHYefjbH3LOLysAhWer2ypWDBJqmCo-SeD3rOefN39LEaSdrFFlVVkOcYPmGaTv6e0cOVR0r2p_To1QXhvBFMmHjPfGUtxl6fCKtklJyqTqRxkJ_u-164BHlG5JD1as73wxjtwrzSZV5Zpw60k2RujxTCl6qs6lShquCTFqZ_6Tjf5g6lR8cZBSjPRYEoxS1paDpzOfkA7zCE37COAqJSFYhfbWzvWgEFXrVewUjki-_8k1BctxsLoKZ67-Bk04"
  },
  {
    id: "david-miller",
    name: "Dr. David Miller",
    title: "Sports Medicine Specialist",
    departmentId: "orthopedics",
    supportedServices: [
      "sports-injury",
      "knee-pain-clinic",
      "arthritis-treatment",
      "shoulder-pain"
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbRDL9zzvmnnlPYMSMqucuVkamSUD7T48hVu05lJGsrIRcVyqwANmKm6LxILwLxAgLAmbl6fFyhnbLqQdeCVSW6dEyfBp_LdfVo0l58jCbiF-HFfuhQzUInMs73DS8Mui1pBYxvDXwENKJUIZFZ2GNELglSNQpCkrBlu6UfIm9pY3nfzM2j40PB4IJpop0cWdc91mefhClXjqad3lllaKNfSTt4KWC2b6xvxgcsAfAJYvSkbd3Mc0i5_CfZloYvL2eC4DEl2Ii0Io"
  },
  {
    id: "helen-carter",
    name: "Dr. Helen Carter",
    title: "Cognitive Neurologist",
    departmentId: "neurology",
    supportedServices: [
      "memory-disorders",
      "parkinsons-disease",
      "sleep-neurology",
      "headache-evaluation"
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyd4A97dj2wBVW0pAeQ8Kcd_bprTOvsEZTq4-pXG45BQz4hsEKIwKQyKHAuDRHmvLx-4rHlI1d9U24sXCDW1LM1UfV0236hxlPYzvPjptvlDERgPd2MD8JxvFib5JKyMg1gaIyZoHsMokf8xwA_VY15aLNKz76-D3BNDHWXhIe50dLcMJfMFEa0VIMZIVzGE08NXi36_yJeL77WbWoin_c0SsDX89aq9rpauUeEXYAYk-ENBzjX-wJcfeNNEe5BLmcdUfKc4nSRLQ"
  }
];

export interface HospitalAppointment {
  id: string;
  patientName: string;
  patientEmail: string;
  notes: string;
  departmentId: string;
  serviceId: string;
  doctorId: string;
  date: string;
  time: string;
  fee: number;
  status: "APPROVED" | "PENDING" | "CANCELLED";
  createdAt: string;
}

// Database helper functions working against localStorage
export const hospitalDb = {
  getDepartments(): Department[] {
    if (typeof window === "undefined") return DEFAULT_DEPARTMENTS;
    const data = localStorage.getItem("mc_departments");
    if (!data) {
      localStorage.setItem("mc_departments", JSON.stringify(DEFAULT_DEPARTMENTS));
      return DEFAULT_DEPARTMENTS;
    }
    return JSON.parse(data);
  },

  setDepartments(depts: Department[]) {
    if (typeof window === "undefined") return;
    localStorage.setItem("mc_departments", JSON.stringify(depts));
  },

  getDoctors(): Doctor[] {
    if (typeof window === "undefined") return DEFAULT_DOCTORS;
    const data = localStorage.getItem("mc_doctors");
    if (!data) {
      localStorage.setItem("mc_doctors", JSON.stringify(DEFAULT_DOCTORS));
      return DEFAULT_DOCTORS;
    }
    return JSON.parse(data);
  },

  setDoctors(docs: Doctor[]) {
    if (typeof window === "undefined") return;
    localStorage.setItem("mc_doctors", JSON.stringify(docs));
  },

  getAppointments(): HospitalAppointment[] {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem("mc_appointments");
    return data ? JSON.parse(data) : [];
  },

  saveAppointment(appointment: Omit<HospitalAppointment, "id" | "createdAt" | "status">): HospitalAppointment {
    const apps = this.getAppointments();
    const newApp: HospitalAppointment = {
      ...appointment,
      id: "APT-" + Math.floor(100000 + Math.random() * 900000),
      status: "APPROVED",
      createdAt: new Date().toISOString()
    };
    apps.push(newApp);
    localStorage.setItem("mc_appointments", JSON.stringify(apps));
    return newApp;
  },

  // Helpers to mutate (simulating admin edits)
  addDepartment(name: string, description: string, icon = "medical_services"): Department {
    const depts = this.getDepartments();
    const id = name.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const newDept: Department = {
      id,
      name,
      description,
      icon,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaHlWR_JmViaFVwikIuHxDkGibxmLoI7gYzCMXwZHThrQgFAoIlRlWd_6ddKqMr4DKIBHYPIEL5dSxiBXkIHDgh_YIWAOe6GK7e0zI9ilj6ip3v77o7ULE6gtA1AN0R5JIByHH5wEfCgP0aYvNwsZhypcPRAD8jwpmFZgsr5fQOy3wd7Ju19NoMANduoVbC62LukxrlJKx6Vo6ce9TJ9R1tG49wkqFNItplWc05cJsM64xrP3JoN5XXklP6QlW6TzTPZu_0fGnJ8A",
      services: []
    };
    depts.push(newDept);
    this.setDepartments(depts);
    return newDept;
  },

  updateDepartment(id: string, updates: Partial<Omit<Department, "id" | "services">>): Department | null {
    const depts = this.getDepartments();
    const idx = depts.findIndex(d => d.id === id);
    if (idx === -1) return null;
    depts[idx] = { ...depts[idx], ...updates };
    this.setDepartments(depts);
    return depts[idx];
  },

  deleteDepartment(id: string) {
    const depts = this.getDepartments();
    const filtered = depts.filter(d => d.id !== id);
    this.setDepartments(filtered);
    
    // Also remove doctors belonging to this department
    const docs = this.getDoctors();
    const docsFiltered = docs.filter(d => d.departmentId !== id);
    this.setDoctors(docsFiltered);
  },

  addSubService(departmentId: string, service: Omit<SubService, "id">): SubService | null {
    const depts = this.getDepartments();
    const idx = depts.findIndex(d => d.id === departmentId);
    if (idx === -1) return null;

    const id = service.name.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const newService: SubService = { ...service, id };
    depts[idx].services.push(newService);
    this.setDepartments(depts);
    return newService;
  },

  editSubService(departmentId: string, serviceId: string, updates: Partial<Omit<SubService, "id">>): SubService | null {
    const depts = this.getDepartments();
    const dIdx = depts.findIndex(d => d.id === departmentId);
    if (dIdx === -1) return null;

    const sIdx = depts[dIdx].services.findIndex(s => s.id === serviceId);
    if (sIdx === -1) return null;

    depts[dIdx].services[sIdx] = { ...depts[dIdx].services[sIdx], ...updates };
    this.setDepartments(depts);
    return depts[dIdx].services[sIdx];
  },

  deleteSubService(departmentId: string, serviceId: string) {
    const depts = this.getDepartments();
    const dIdx = depts.findIndex(d => d.id === departmentId);
    if (dIdx === -1) return;

    depts[dIdx].services = depts[dIdx].services.filter(s => s.id !== serviceId);
    this.setDepartments(depts);

    // Also remove references in doctor.supportedServices
    const docs = this.getDoctors();
    const updatedDocs = docs.map(doc => {
      if (doc.departmentId === departmentId) {
        return {
          ...doc,
          supportedServices: doc.supportedServices.filter(sid => sid !== serviceId)
        };
      }
      return doc;
    });
    this.setDoctors(updatedDocs);
  },

  addDoctor(name: string, title: string, departmentId: string, supportedServices: string[]): Doctor {
    const docs = this.getDoctors();
    const id = name.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const newDoc: Doctor = {
      id,
      name,
      title,
      departmentId,
      supportedServices,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRpxQJD_Rvda1HmcG7-BBaKOV81fN3NcRYRVlxhZHsLvvKpiV-5PCo8MNNrk6jHq8FrPf0YoUUhnwyhr26CRrUKx2J-GTzZMgmMT0PHYJISpEhf605gouFIq4c7qOTBpHJ_EyHfrsNN7Hh8qLPvkIGDt6yjyMIwAO9KfstRlhKtfZSNnHW8kk3lU8qtAEkCu9BN-StoDOsVKDoKm2qXmkFcBIsb41vcL4KYN35b9gxVWk15QWhTWHnFD0207yR5lmhWNDciATph30"
    };
    docs.push(newDoc);
    this.setDoctors(docs);
    return newDoc;
  }
};
