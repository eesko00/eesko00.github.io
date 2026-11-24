export const siteConfig = {
  name: "Junior Backend Developer",
  image: "img/profile.jpg",
  title: " Seoul       |       01.09.30",
  accentColor: "#1d4ed8",
  social: {
    email: "pokj9800113@gmail.com",
    github: "https://github.com/kyongseo",
  },
  aboutMe: `데이터를 정확하게 다루고, 개선은 숫자로 확인하는 백엔드 개발자 박경서입니다.

(주) NC AX (구 NC IDS)에서 엔씨 및 계열사 임직원이 쓰는 사내 포털 백엔드 개발 및 운영를 담당했습니다.

개인 프로젝트에서는 Java/Spring으로 계좌 이체 API를 만들며, 동시 이체 100건 중 10건만 반영되는 문제를 테스트로 재현하고 락 방식을 직접 비교해 해결했습니다.

문제는 먼저 테스트로 재현하고, 해결 방법은 같은 조건에서 측정한 숫자로 비교해 고르는 것을 기본으로 삼고 있습니다.
  `,

  skills: {
    Languages: "Python, Java",
    Frameworks: "Spring Boot, Spring Data JPA, Spring Security, FastAPI",
    Infra : "AWS, Docker, Linux",
    Databases : "MySQL, PostgreSQL, MongoDB, Redis",
    Tools : "IntelliJ IDEA, Git, GitHub, GitLab CI/CD, JUnit, k6",
  },
  experience: [
    {
      company: "Backend Developer (사원)",
      title: "(주) NC AX (구 NC IDS)",
      dateRange: "2025.01 - 2026.04 (1년 4개월)",
      description: "엔씨 그룹 사내 IT 서비스 담당 백엔드 개발자",
      bullets: [
        "엔씨 및 계열사 임직원이 쓰는 사내 포털 백엔드 개발 및 운영",
        "ERP, 인사, 결재 등 업무시스템 연동 API 개발"
      ],
    },
  ],
  projects: [
    {
      name: "사내 포털 백엔드 개발",
      description: "엔씨 그룹 임직원용 사내 포털(공지, 게시판, 조직도, 통합 검색) 서버",
      skills: ["Java", "Spring Boot", "JPA", "MySQL", "Redis", "Docker", "Kubernetes"],
      bulletPoints: [
        "공지, 게시판, 조직도 조회 등 포털 기능 RESTful API 개발",
        "사내 SSO(통합 로그인)와 권한 관리 연동",
        "본사와 여러 자회사가 함께 쓰는 멀티 테넌트 구조 운영"
      ],
    },
    {
      name: "ERP 및 업무시스템 연동",
      description: "재무, 인사, 구매 등 ERP 데이터를 다른 사내 시스템과 연결",
      skills: ["Java", "Spring Batch", "SQL", "ERP 인터페이스"],
      bulletPoints: [
        "ERP와 포털, 결재 시스템 간 데이터 연동(I/F) API 개발",
        "야간 배치로 인사, 조직 데이터 동기화",
        "분사 후 계열사별로 나뉜 회계, 인사 데이터 분리 작업"
      ],
    },
    {
      name: "Microsoft 365 협업 환경 운영",
      description: "메일, Teams, SharePoint 등 그룹 협업 도구 관리",
      skills: ["Microsoft 365", "Entra ID(Azure AD)", "PowerShell", "Graph API"],
      bulletPoints: [
        "입사, 퇴사, 조직 변경에 맞춘 계정과 권한 자동 처리",
        "Graph API로 사내 시스템과 M365 연동"
      ],
    },
    {
      name: "AI 전환(AX) 업무 도구",
      description: "NC AI의 바르코(VARCO) 모델을 사내 업무시스템에 붙이는 작업",
      skills: ["Python", "FastAPI", "LLM API", "벡터 DB"],
      bulletPoints: [
        "사내 문서 검색과 질의응답 챗봇 백엔드",
        "업무 자동화용 AI API 연동"
      ],
    },
    {
      name: "계좌 이체 API (1인 개인 프로젝트)",
      dateRange: "2026.11 - 2026.11",
      description:
          "금융 서비스의 데이터 정합성을 직접 다뤄 보기 위해 만든 계좌 이체 API (동시성 문제를 테스트로 재현하고 해결 방법을 측정으로 비교)",
      skills: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Docker", "JUnit"],
      bulletPoints: [
        "1,000원 이체 100건을 동시에 보내면 100건 모두 성공 응답을 받지만 잔액에는 10건만 반영되는 Lost Update를 실제 MySQL 테스트로 재현",
        "비관적 락 적용 후 A→B와 B→A 동시 이체에서 약 절반이 데드락으로 실패하는 문제 발견",
        "이체 방향과 상관없이 계좌 id가 작은 쪽부터 락을 걸도록 순서를 고정해 양방향 100건 모두 실패 없이 처리",
        "낙관적 락(@Version)과 같은 조건으로 비교: 재시도 5번 설정에서 55~56건 실패, 모두 성공시키려면 재시도 800번과 약 2배 시간(1.7초 → 3.3초)이 필요해 이체에는 비관적 락 선택"
      ],
    },
    {
      name: "개인 재무 관리 시스템 (1인 개인 프로젝트)",
      dateRange: "2025.09 - 2026.101",
      description:
          "통계 분석 기반 맞춤형 예산 추천과 실시간 지출 모니터링을 제공하는 RESTful API",
      skills: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "PostgreSQL", "Docker", "JWT", "Redis", "JUnit", "k6"],
      bulletPoints: [
        "통계 분석 기반의 월별 소비 패턴 분석 알고리즘 및 맞춤형 예산 추천 로직 설계 및 구현",
        "요청마다 전체 사용자 예산 10만 건을 집계하던 예산 추천 API를 새벽 배치 사전 집계와 Redis 캐싱으로 바꿔 평균 응답 시간 3,610ms → 18.68ms (k6, 동시 사용자 20명, 약 190배)",
        "Spring Scheduler 기반 일 2회 자동 이메일 리포트 발송",
        "JWT 무상태 인증과 Redis Token Blacklist로 로그아웃한 토큰의 재사용 차단",
        "JUnit 기반 단위 및 통합 테스트 120개 이상 작성"
      ],
    },
  ],
  capabilities: [
    {
      title: "데이터 정합성과 동시성 제어 (계좌 이체 API)",
      bullets: [
        "동시 요청에서 생기는 Lost Update를 테스트로 재현하고, 비관적 락과 락 순서 고정으로 데드락까지 해결",
        "트랜잭션 격리 수준, JPA 영속성 컨텍스트, 락 방식의 차이를 직접 측정하며 이해"
      ]
    },
    {
      title: "측정 기반 성능 개선 (개인 프로젝트)",
      bullets: [
        "k6와 동시성 테스트로 개선 전후를 숫자로 비교하고, 그 결과로 해결 방법을 선택",
        "사전 집계와 Redis 캐싱으로 예산 추천 API 평균 응답 시간 3,610ms → 18.68ms"
      ]
    },
    {
      title: "데이터를 잃지 않는 운영 구조 설계 (실무)",
      bullets: [
        "본사와 여러 자회사가 함께 쓰는 멀티 테넌트 구조 운영",
        "저장 확인 후 원본을 삭제하는 로그 이관 구조로 운영 DB 부담과 데이터 유실 위험을 함께 해결"
      ]
    },
    {
      title: "구조 개선과 협업 (실무)",
      bullets: [
        "절차형 레거시 코드를 레이어드 구조와 기능별 모듈로 개편하고, Data Mapper 패턴으로 데이터 변환 로직을 한곳에 모음",
        "Swagger UI와 Notion 기반 API 명세 정리를 주도해 프론트, 앱 파트의 반복 문의 감소",
        "코드 리뷰 도입과 백엔드 기술 스터디 리딩으로 팀 코딩 컨벤션 정립"
      ]
    }
  ],
  education: [
    {
      school: "아주대학교",
      dateRange: "2020.03 - 2025.02",
      achievements: [
        "컴퓨터공학과 학사 졸업",
        "학점 4.29/4.5 (전공 4.3/4.5)",
      ]
    }
  ],
  ETC: [
    {
      school: "멋쟁이사자처럼 백엔드스쿨 10기",
      dateRange: "2024.03 - 2024.09",
      achievements: [
        "Java, Spring Boot, MySQL, AWS 기반 백엔드 개발 학습",
        "CS지식 및 알고리즘 문제 해결 능력 향상",
      ],
    },
    {
      school: "베트남 하이즈엉 IT 교육 봉사",
      dateRange: "2023.06 - 2023.07",
      achievements: [
        "천안시 청소년 수련관 봉사단",
        "VR/AR 교육 봉사",
        "구글 카드보드 제작 및 IT 신기술 체험 교육",
      ],
    },
  ],
  certifications: [
    {
      name: "AWS Certified AI Practitioner",
      date: "2026.06",
    },
    {
      name: "정보처리기사",
      date: "2024.06",
    },
    {
      name: "빅데이터분석기사",
      date: "2024.09",
    },
    {
      name: "데이터분석준전문가(ADsP)",
      date: "2024.05",
    },
    {
      name: "SQL 개발자(SQLD)",
      date: "2024.08",
    },
    {
      name: "리눅스마스터 2급",
      date: "2024.06",
    },
    {
      name: "컴퓨터활용능력 1급",
      date: "2024.01",
    },
  ],
};