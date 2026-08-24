// 교과목 4 단원(units) 데이터
// data.js 에서 분리됨 - 이 파일이 데이터의 실제 출처입니다.
const SUBJECT_4_UNITS = [



      {
        name: "Canva AI 영상 제작",
        hours: 28,
        content: [
          {
            type: "goals",
            title: "학습 목표",
            items: [
              "Canva의 영상 제작 환경과 AI 기능의 역할을 이해할 수 있다.",
              "Canva에서 프로젝트 목적에 맞는 영상 규격과 작업 구조를 설정할 수 있다.",
              "AI를 이용해 영상 기획안, 장면 구성, 카피, 이미지, 영상 소스를 생성할 수 있다.",
              "프롬프트를 단순 생성 명령이 아니라 결과를 제어하는 제작 지시 구조로 작성할 수 있다.",
              "생성된 AI 결과를 그대로 사용하는 것이 아니라 목적에 맞게 선택·수정·재생성할 수 있다.",
              "텍스트·이미지·영상·그래픽·음원을 하나의 Scene으로 구성할 수 있다.",
              "Scene 단위로 영상의 정보 구조와 시각적 흐름을 설계할 수 있다.",
              "AI 생성 이미지와 기존 이미지 Asset을 혼합하여 영상을 제작할 수 있다.",
              "AI 생성 영상과 Stock Video를 목적에 따라 선택하여 사용할 수 있다.",
              "영상의 화면비에 따라 Layout과 피사체 위치를 재구성할 수 있다.",
              "텍스트의 크기, 위치, 대비, 노출 시간을 조절하여 정보 위계를 만들 수 있다.",
              "Brand Color, Font, Logo, Graphic Style을 일관되게 적용할 수 있다.",
              "Animation과 Transition을 장면의 기능에 맞게 사용할 수 있다.",
              "음악과 영상의 분위기·속도·장면 전환을 연결할 수 있다.",
              "AI Voice 및 음성 Source를 영상 구조에 맞게 활용할 수 있다.",
              "자동 생성된 결과에서 발생하는 이미지·문자·구도·시간 문제를 검수할 수 있다.",
              "동일한 콘텐츠를 16:9, 9:16 등 여러 Format으로 변환할 수 있다.",
              "템플릿을 그대로 사용하는 단계에서 벗어나 콘텐츠 목적에 맞게 구조를 수정할 수 있다.",
              "Canva AI를 영상 자동 생성 도구가 아니라 제작 Workflow의 일부로 사용할 수 있다.",
              "기획 → Source 생성 → Scene 구성 → 편집 → 검수 → Export의 전체 AI 영상 제작 Pipeline을 수행할 수 있다."
            ]
          },

          {
            type: "concept",
            title: "1. Canva AI 영상 제작의 구조",
            children: [
              {
                title: "기존 영상 제작",
                items: [
                  "기획.",
                  "촬영.",
                  "Source 확보.",
                  "편집.",
                  "Graphic.",
                  "Audio.",
                  "Export의 여러 제작 단계를 거친다."
                ]
              },
              {
                title: "AI 기반 제작",
                items: [
                  "기획 초안 생성.",
                  "Script 생성.",
                  "이미지 생성.",
                  "영상 Source 생성.",
                  "Voice 생성.",
                  "Layout 보조.",
                  "편집 보조 등 일부 제작 단계를 AI가 지원한다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "AI가 영상 제작 전체를 대신하는 구조로 이해하지 않는다.",
                  "사람이 목적과 방향을 정의하고 AI가 제작 과정의 일부를 빠르게 생성하는 구조로 이해한다.",
                  "생성 속도보다 결과를 선택하고 수정하는 판단 능력이 중요하다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "2. Canva 영상 작업 환경",
            children: [
              {
                title: "Canvas",
                items: [
                  "현재 Scene의 실제 화면을 구성하는 영역."
                ]
              },
              {
                title: "Timeline",
                items: [
                  "영상과 Audio의 시간 구조를 확인하고 조절하는 영역."
                ]
              },
              {
                title: "Page / Scene",
                items: [
                  "영상의 장면 단위.",
                  "하나의 영상은 여러 Scene의 연결로 구성된다."
                ]
              },
              {
                title: "Elements",
                items: [
                  "Shape.",
                  "Icon.",
                  "Graphic.",
                  "Frame.",
                  "Sticker 등 화면을 구성하는 시각 요소."
                ]
              },
              {
                title: "Uploads",
                items: [
                  "직접 촬영한 이미지.",
                  "영상.",
                  "Logo.",
                  "Audio 등 외부 Asset을 가져오는 영역."
                ]
              },
              {
                title: "Apps / AI 기능",
                items: [
                  "생성형 AI 및 추가 제작 기능을 연결하여 사용할 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "3. 프로젝트 생성과 영상 규격",
            children: [
              {
                title: "16:9",
                items: [
                  "일반적인 가로형 영상.",
                  "YouTube.",
                  "Presentation Video 등에 활용할 수 있다."
                ]
              },
              {
                title: "9:16",
                items: [
                  "Shorts.",
                  "Reels.",
                  "TikTok 등 세로형 콘텐츠에 적합하다."
                ]
              },
              {
                title: "1:1",
                items: [
                  "정사각형 기반 SNS 콘텐츠에 활용할 수 있다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "영상 제작 후 화면비를 결정하는 것이 아니라 제작 시작 단계에서 최종 플랫폼과 화면비를 결정한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "4. 영상 목적 정의",
            children: [
              {
                title: "Promotion",
                items: [
                  "제품이나 서비스를 알리고 행동을 유도한다."
                ]
              },
              {
                title: "Information",
                items: [
                  "특정 정보를 빠르고 명확하게 전달한다."
                ]
              },
              {
                title: "Brand",
                items: [
                  "브랜드 이미지와 분위기를 전달한다."
                ]
              },
              {
                title: "Education",
                items: [
                  "개념이나 사용 방법을 단계적으로 설명한다."
                ]
              },
              {
                title: "Social Content",
                items: [
                  "짧은 시간 안에 관심을 확보하고 핵심 메시지를 전달한다."
                ]
              },
              {
                title: "목적이 중요한 이유",
                items: [
                  "같은 AI 기능을 사용하더라도 목적에 따라 Script, 화면, 속도, 음악, CTA가 달라진다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "5. AI에게 전달할 Context",
            children: [
              {
                title: "Topic",
                items: [
                  "무엇에 대한 영상인가."
                ]
              },
              {
                title: "Purpose",
                items: [
                  "왜 제작하는가."
                ]
              },
              {
                title: "Audience",
                items: [
                  "누가 보는가."
                ]
              },
              {
                title: "Platform",
                items: [
                  "어디에 게시하는가."
                ]
              },
              {
                title: "Duration",
                items: [
                  "몇 초 또는 몇 분의 영상인가."
                ]
              },
              {
                title: "Tone",
                items: [
                  "Professional.",
                  "Minimal.",
                  "Energetic.",
                  "Emotional 등."
                ]
              },
              {
                title: "Visual Direction",
                items: [
                  "Color.",
                  "Lighting.",
                  "Composition.",
                  "Graphic Style."
                ]
              },
              {
                title: "Message",
                items: [
                  "시청자가 반드시 이해해야 하는 핵심 내용."
                ]
              },
              {
                title: "CTA",
                items: [
                  "영상 시청 후 원하는 행동."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "6. AI 영상 프롬프트의 기본 구조",
            children: [
              {
                title: "기본 구조",
                items: [
                  "목적 + 대상 + 콘텐츠 + 형식 + 스타일 + 제약조건."
                ]
              },
              {
                title: "목적",
                items: [
                  "제품 소개.",
                  "브랜드 홍보.",
                  "정보 전달 등."
                ]
              },
              {
                title: "대상",
                items: [
                  "영상의 주요 시청자."
                ]
              },
              {
                title: "콘텐츠",
                items: [
                  "영상에서 전달해야 하는 내용."
                ]
              },
              {
                title: "형식",
                items: [
                  "15초 세로형.",
                  "30초 광고.",
                  "1분 설명 영상 등."
                ]
              },
              {
                title: "스타일",
                items: [
                  "Minimal.",
                  "Luxury.",
                  "Dynamic.",
                  "Clean.",
                  "Documentary 등."
                ]
              },
              {
                title: "제약조건",
                items: [
                  "Scene 수.",
                  "Text 길이.",
                  "특정 Color.",
                  "Logo 위치.",
                  "금지 요소 등을 지정할 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "7. 프롬프트를 구조화하는 이유",
            children: [
              {
                title: "짧은 Prompt",
                items: [
                  "\"화장품 광고 영상 만들어줘\"와 같은 요청은 결과의 범위가 지나치게 넓다."
                ]
              },
              {
                title: "구조화된 Prompt",
                items: [
                  "제품.",
                  "Audience.",
                  "Platform.",
                  "Duration.",
                  "Scene.",
                  "Visual Style.",
                  "Message를 함께 지정한다."
                ]
              },
              {
                title: "결과",
                items: [
                  "AI가 탐색해야 하는 가능성의 범위를 줄인다.",
                  "사용자가 원하는 방향으로 결과를 제한한다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "좋은 Prompt는 문장을 길게 쓰는 것이 아니라 필요한 조건을 명확하게 제공하는 것이다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "8. 영상 기획을 AI로 확장",
            children: [
              {
                title: "입력",
                items: [
                  "제품 정보.",
                  "브랜드 정보.",
                  "Audience.",
                  "Platform.",
                  "목적."
                ]
              },
              {
                title: "AI 출력",
                items: [
                  "영상 Concept.",
                  "Hook.",
                  "Scene 구성.",
                  "Copy.",
                  "CTA.",
                  "Visual Idea."
                ]
              },
              {
                title: "사용자 판단",
                items: [
                  "브랜드와 맞는가.",
                  "영상 길이에 적합한가.",
                  "실제로 제작 가능한가.",
                  "중복되거나 불필요한 Scene은 없는가."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "9. Script 생성",
            children: [
              {
                title: "Opening",
                items: [
                  "시청자의 관심을 확보한다."
                ]
              },
              {
                title: "Problem",
                items: [
                  "문제나 필요성을 제시한다."
                ]
              },
              {
                title: "Solution",
                items: [
                  "제품, 서비스 또는 정보를 제시한다."
                ]
              },
              {
                title: "Benefit",
                items: [
                  "시청자가 얻는 가치를 설명한다."
                ]
              },
              {
                title: "CTA",
                items: [
                  "다음 행동을 제시한다."
                ]
              },
              {
                title: "AI 활용",
                items: [
                  "전체 Script 생성 후 그대로 사용하는 것보다 길이와 장면 목적에 맞게 압축하고 수정한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "10. Script를 Scene으로 분해",
            children: [
              {
                title: "Scene 1",
                items: [
                  "Hook."
                ]
              },
              {
                title: "Scene 2",
                items: [
                  "Problem."
                ]
              },
              {
                title: "Scene 3",
                items: [
                  "Product / Solution."
                ]
              },
              {
                title: "Scene 4",
                items: [
                  "Benefit."
                ]
              },
              {
                title: "Scene 5",
                items: [
                  "CTA."
                ]
              },
              {
                title: "핵심",
                items: [
                  "Script의 문장을 단순히 여러 페이지에 나누는 것이 아니다.",
                  "각 Scene마다 하나의 역할을 부여한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "11. Scene 설계 정보",
            children: [
              {
                title: "Scene ID",
                items: [
                  "S01.",
                  "S02.",
                  "S03 등."
                ]
              },
              {
                title: "Duration",
                items: [
                  "장면이 화면에 유지되는 시간."
                ]
              },
              {
                title: "Message",
                items: [
                  "해당 장면이 전달하는 핵심 정보."
                ]
              },
              {
                title: "Visual",
                items: [
                  "이미지.",
                  "영상.",
                  "Graphic 등."
                ]
              },
              {
                title: "Text",
                items: [
                  "화면에 표시되는 Copy."
                ]
              },
              {
                title: "Motion",
                items: [
                  "장면 내부 Animation."
                ]
              },
              {
                title: "Transition",
                items: [
                  "다음 Scene으로 넘어가는 방식."
                ]
              },
              {
                title: "Audio",
                items: [
                  "Voice.",
                  "Music.",
                  "SFX."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "12. AI 이미지 생성",
            children: [
              {
                title: "Subject",
                items: [
                  "무엇을 생성할 것인지 지정한다."
                ]
              },
              {
                title: "Environment",
                items: [
                  "피사체가 존재하는 공간을 지정한다."
                ]
              },
              {
                title: "Composition",
                items: [
                  "Close-up.",
                  "Wide.",
                  "Centered.",
                  "Left Composition 등."
                ]
              },
              {
                title: "Lighting",
                items: [
                  "Soft Light.",
                  "Natural Light.",
                  "Studio Light.",
                  "Backlight 등."
                ]
              },
              {
                title: "Color",
                items: [
                  "Warm.",
                  "Cool.",
                  "Neutral.",
                  "Brand Color 기반."
                ]
              },
              {
                title: "Style",
                items: [
                  "Photorealistic.",
                  "Illustration.",
                  "3D.",
                  "Editorial 등."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "13. 영상용 AI 이미지 Prompt",
            children: [
              {
                title: "사진 생성과 차이",
                items: [
                  "영상에서는 이미지 자체의 완성도뿐 아니라 이후 Text와 Motion이 들어갈 공간이 필요하다."
                ]
              },
              {
                title: "Copy Space",
                items: [
                  "텍스트가 배치될 빈 공간을 생성 단계에서 요구한다."
                ]
              },
              {
                title: "Subject Position",
                items: [
                  "left aligned subject.",
                  "subject on right side 등 위치를 지정할 수 있다."
                ]
              },
              {
                title: "Aspect Ratio",
                items: [
                  "세로 영상이라면 Vertical Composition을 고려한다."
                ]
              },
              {
                title: "Motion Margin",
                items: [
                  "Zoom이나 Pan을 사용할 경우 피사체 주변에 충분한 공간을 확보한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "14. AI 이미지 결과 선택",
            children: [
              {
                title: "기술적 검사",
                items: [
                  "해상도.",
                  "피사체 구조.",
                  "손.",
                  "얼굴.",
                  "문자.",
                  "제품 형태."
                ]
              },
              {
                title: "시각적 검사",
                items: [
                  "구도.",
                  "색.",
                  "빛.",
                  "시선.",
                  "배경 복잡도."
                ]
              },
              {
                title: "영상 활용 검사",
                items: [
                  "Text 공간.",
                  "Crop 가능성.",
                  "Animation 가능성.",
                  "다른 Scene과의 연결성."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "15. AI 이미지 수정",
            children: [
              {
                title: "부분 수정",
                items: [
                  "불필요한 물체 제거.",
                  "배경 변경.",
                  "특정 영역 재생성."
                ]
              },
              {
                title: "확장",
                items: [
                  "원본 Frame 외부 영역을 생성하여 화면비를 변경하거나 Motion 공간을 확보할 수 있다."
                ]
              },
              {
                title: "배경 제거",
                items: [
                  "피사체를 독립적인 Layer처럼 사용할 수 있도록 배경을 제거한다."
                ]
              },
              {
                title: "주의",
                items: [
                  "AI 수정 후 제품 형태, 얼굴, 문자, Logo가 변형되지 않았는지 다시 확인한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "16. Text-to-Video 계열 기능 활용",
            children: [
              {
                title: "Prompt",
                items: [
                  "장면의 피사체.",
                  "행동.",
                  "공간.",
                  "카메라.",
                  "조명.",
                  "분위기를 지정한다."
                ]
              },
              {
                title: "Action",
                items: [
                  "피사체가 무엇을 하는지 정의한다."
                ]
              },
              {
                title: "Camera",
                items: [
                  "Static.",
                  "Pan.",
                  "Tracking.",
                  "Push-in 등의 방향을 설정한다."
                ]
              },
              {
                title: "Environment",
                items: [
                  "공간과 배경의 상태를 정의한다."
                ]
              },
              {
                title: "Lighting",
                items: [
                  "시간대와 조명 방향을 정의한다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "한 Prompt에 지나치게 많은 사건을 넣기보다 하나의 짧은 Shot을 명확하게 정의한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "17. AI 영상 Source QC",
            children: [
              {
                title: "Temporal Consistency",
                items: [
                  "시간이 지나면서 피사체 형태가 갑자기 변하지 않는가."
                ]
              },
              {
                title: "Motion",
                items: [
                  "움직임이 자연스러운가."
                ]
              },
              {
                title: "Camera",
                items: [
                  "카메라 움직임이 의도한 방향과 일치하는가."
                ]
              },
              {
                title: "Object",
                items: [
                  "물체가 갑자기 생성되거나 사라지지 않는가."
                ]
              },
              {
                title: "Identity",
                items: [
                  "인물의 얼굴과 제품 형태가 Shot 중 유지되는가."
                ]
              },
              {
                title: "Background",
                items: [
                  "배경 구조가 비정상적으로 변하지 않는가."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "18. Stock Video와 AI Video 선택",
            children: [
              {
                title: "Stock",
                items: [
                  "실제 촬영 기반 Source가 필요할 때 유리하다.",
                  "일반적인 상황과 장소는 빠르게 확보할 수 있다."
                ]
              },
              {
                title: "AI Video",
                items: [
                  "존재하지 않는 장면.",
                  "특정 분위기.",
                  "추상적 Concept 등 맞춤형 장면 제작에 유리할 수 있다."
                ]
              },
              {
                title: "직접 촬영",
                items: [
                  "실제 제품.",
                  "실제 인물.",
                  "정확한 공간이 중요할 때 필요하다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "AI를 사용할 수 있다는 이유로 모든 Source를 AI로 만들 필요는 없다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "19. Scene Layout",
            children: [
              {
                title: "Primary",
                items: [
                  "가장 먼저 보여야 하는 요소."
                ]
              },
              {
                title: "Secondary",
                items: [
                  "Primary를 보조하는 정보."
                ]
              },
              {
                title: "Background",
                items: [
                  "환경과 분위기를 제공한다."
                ]
              },
              {
                title: "Hierarchy",
                items: [
                  "크기.",
                  "위치.",
                  "Contrast.",
                  "Motion을 이용해 정보의 우선순위를 만든다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "20. Text Hierarchy",
            children: [
              {
                title: "Headline",
                items: [
                  "가장 중요한 메시지."
                ]
              },
              {
                title: "Subcopy",
                items: [
                  "Headline을 설명하는 보조 정보."
                ]
              },
              {
                title: "Detail",
                items: [
                  "필요한 추가 정보."
                ]
              },
              {
                title: "CTA",
                items: [
                  "사용자의 행동을 유도하는 문구."
                ]
              },
              {
                title: "핵심",
                items: [
                  "모든 Text를 같은 크기로 만들지 않는다.",
                  "시청자가 읽어야 하는 순서를 시각적으로 설계한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "21. 영상 Text 길이",
            children: [
              {
                title: "문제",
                items: [
                  "AI가 생성한 문장은 화면용 Copy로 사용하기에는 긴 경우가 많다."
                ]
              },
              {
                title: "축약",
                items: [
                  "문장 전체를 보여주는 대신 핵심 단어와 짧은 Phrase로 압축한다."
                ]
              },
              {
                title: "Voice와 분리",
                items: [
                  "Voice가 전체 내용을 설명하고 화면 Text는 핵심만 강조할 수 있다."
                ]
              },
              {
                title: "판단",
                items: [
                  "Text 양은 영상의 Duration과 시청자의 실제 읽기 시간을 기준으로 결정한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "22. Animation",
            children: [
              {
                title: "Entrance",
                items: [
                  "요소가 화면에 등장하는 방식."
                ]
              },
              {
                title: "Emphasis",
                items: [
                  "이미 등장한 요소를 강조하는 움직임."
                ]
              },
              {
                title: "Exit",
                items: [
                  "요소가 화면에서 사라지는 방식."
                ]
              },
              {
                title: "Page Animation",
                items: [
                  "Scene 전체에 적용되는 움직임."
                ]
              },
              {
                title: "목적",
                items: [
                  "움직임 자체를 보여주기보다 시선 이동과 정보 순서를 제어한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "23. Animation의 과사용",
            children: [
              {
                title: "문제",
                items: [
                  "모든 요소가 서로 다른 방향으로 움직이면 시선의 기준이 사라진다."
                ]
              },
              {
                title: "일관성",
                items: [
                  "동일한 기능을 가진 요소에는 유사한 Animation 규칙을 적용한다."
                ]
              },
              {
                title: "강도",
                items: [
                  "중요한 요소일수록 더 강한 Motion을 사용할 수 있다."
                ]
              },
              {
                title: "정적 요소",
                items: [
                  "움직이지 않는 요소를 남겨두는 것도 시각적 안정성을 만드는 방법이다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "24. Transition",
            children: [
              {
                title: "Cut",
                items: [
                  "즉시 다음 장면으로 전환한다."
                ]
              },
              {
                title: "Dissolve",
                items: [
                  "두 장면을 부드럽게 연결한다."
                ]
              },
              {
                title: "Motion Transition",
                items: [
                  "움직임을 이용해 장면을 연결한다."
                ]
              },
              {
                title: "Match",
                items: [
                  "위치.",
                  "색.",
                  "형태.",
                  "움직임이 비슷한 요소를 이용해 장면을 연결할 수 있다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "Transition은 효과 목록에서 선택하는 문제가 아니라 두 Scene의 관계를 어떻게 연결할 것인가의 문제다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "25. 영상 Timing",
            children: [
              {
                title: "Scene Duration",
                items: [
                  "각 Scene이 유지되는 시간."
                ]
              },
              {
                title: "Text Duration",
                items: [
                  "시청자가 Text를 읽을 수 있는 시간."
                ]
              },
              {
                title: "Motion Duration",
                items: [
                  "Animation이 완료되는 시간."
                ]
              },
              {
                title: "Audio Timing",
                items: [
                  "Beat.",
                  "Voice.",
                  "SFX와 화면 변화가 발생하는 시점."
                ]
              },
              {
                title: "핵심",
                items: [
                  "좋은 Layout도 Timing이 맞지 않으면 영상에서는 제대로 전달되지 않는다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "26. 음악 선택",
            children: [
              {
                title: "Mood",
                items: [
                  "영상의 감정적 방향과 음악의 분위기를 연결한다."
                ]
              },
              {
                title: "Tempo",
                items: [
                  "영상의 편집 속도와 음악의 속도를 고려한다."
                ]
              },
              {
                title: "Structure",
                items: [
                  "Intro.",
                  "Build.",
                  "Peak.",
                  "Outro 등의 음악 구조를 영상 흐름과 연결할 수 있다."
                ]
              },
              {
                title: "Voice",
                items: [
                  "Narration이 있다면 음악이 Voice를 방해하지 않도록 조절한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "27. Beat와 Scene 전환",
            children: [
              {
                title: "Beat",
                items: [
                  "음악의 반복적인 박자 기준."
                ]
              },
              {
                title: "Scene Change",
                items: [
                  "주요 Beat나 음악 구조 변화에 맞춰 Scene을 전환할 수 있다."
                ]
              },
              {
                title: "강조",
                items: [
                  "제품 등장.",
                  "Headline 등장.",
                  "CTA 등장 시점을 음악의 Accent와 연결할 수 있다."
                ]
              },
              {
                title: "주의",
                items: [
                  "모든 Cut을 기계적으로 Beat에 맞출 필요는 없다.",
                  "정보 전달 시간이 우선되는 Scene도 존재한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "28. AI Voice 활용",
            children: [
              {
                title: "Script",
                items: [
                  "문어체보다 실제 발화에 적합한 문장으로 작성한다."
                ]
              },
              {
                title: "Pacing",
                items: [
                  "영상 Duration에 맞는 발화 속도를 고려한다."
                ]
              },
              {
                title: "Pause",
                items: [
                  "정보 단위 사이에 필요한 호흡을 만든다."
                ]
              },
              {
                title: "Tone",
                items: [
                  "영상 목적과 Voice의 감정적 방향을 맞춘다."
                ]
              },
              {
                title: "검수",
                items: [
                  "숫자.",
                  "영문.",
                  "브랜드명.",
                  "고유명사의 발음을 확인한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "29. Brand Consistency",
            children: [
              {
                title: "Color",
                items: [
                  "Brand Color를 일관되게 적용한다."
                ]
              },
              {
                title: "Typography",
                items: [
                  "Font와 Text Hierarchy 규칙을 유지한다."
                ]
              },
              {
                title: "Logo",
                items: [
                  "크기와 위치 규칙을 유지한다."
                ]
              },
              {
                title: "Image",
                items: [
                  "AI 이미지와 Stock 이미지의 Look을 가능한 한 통일한다."
                ]
              },
              {
                title: "Motion",
                items: [
                  "Animation의 속도와 성격도 브랜드 인상에 영향을 준다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "30. Template의 역할",
            children: [
              {
                title: "장점",
                items: [
                  "빠르게 기본 Layout을 확보할 수 있다.",
                  "디자인 경험이 적어도 일정 수준의 시각 구조에서 시작할 수 있다."
                ]
              },
              {
                title: "한계",
                items: [
                  "Template의 구조가 콘텐츠의 목적과 맞지 않을 수 있다.",
                  "내용보다 Template의 시각 효과가 우선될 수 있다."
                ]
              },
              {
                title: "활용 방법",
                items: [
                  "Template을 완성품으로 보지 않는다.",
                  "Layout과 Motion의 참고 구조로 사용하고 콘텐츠에 맞게 재설계한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "31. Template 분석",
            children: [
              {
                title: "Scene",
                items: [
                  "몇 개의 Scene으로 구성되어 있는가."
                ]
              },
              {
                title: "Grid",
                items: [
                  "화면이 어떤 Layout 구조를 사용하는가."
                ]
              },
              {
                title: "Typography",
                items: [
                  "Headline과 Subcopy의 관계가 어떻게 구성되어 있는가."
                ]
              },
              {
                title: "Motion",
                items: [
                  "어떤 요소가 어떤 순서로 움직이는가."
                ]
              },
              {
                title: "Transition",
                items: [
                  "Scene 사이가 어떤 규칙으로 연결되는가."
                ]
              },
              {
                title: "핵심",
                items: [
                  "Template을 사용하기 전에 Template의 제작 규칙을 역으로 분석한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "32. 자동 생성 결과 수정",
            children: [
              {
                title: "삭제",
                items: [
                  "필요 없는 Scene과 요소를 제거한다."
                ]
              },
              {
                title: "교체",
                items: [
                  "AI가 선택한 이미지와 영상을 더 적합한 Source로 교체한다."
                ]
              },
              {
                title: "축약",
                items: [
                  "긴 Text와 반복 메시지를 줄인다."
                ]
              },
              {
                title: "재배치",
                items: [
                  "정보의 중요도에 따라 Scene 순서를 변경한다."
                ]
              },
              {
                title: "재생성",
                items: [
                  "문제가 큰 Source는 부분 수정에 집착하지 않고 다시 생성한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "33. AI 결과를 평가하는 기준",
            children: [
              {
                title: "Correct",
                items: [
                  "내용이 사실과 목적에 맞는가."
                ]
              },
              {
                title: "Relevant",
                items: [
                  "영상의 핵심 메시지와 관련 있는가."
                ]
              },
              {
                title: "Consistent",
                items: [
                  "다른 Scene과 시각적으로 연결되는가."
                ]
              },
              {
                title: "Usable",
                items: [
                  "실제 영상 Source로 사용할 수 있는가."
                ]
              },
              {
                title: "Editable",
                items: [
                  "필요한 수정이 가능한가."
                ]
              },
              {
                title: "Efficient",
                items: [
                  "수정 비용이 너무 크지 않은가."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "34. 생성과 선택의 반복",
            children: [
              {
                title: "Generate",
                items: [
                  "초기 결과를 생성한다."
                ]
              },
              {
                title: "Evaluate",
                items: [
                  "문제와 장점을 분석한다."
                ]
              },
              {
                title: "Refine",
                items: [
                  "Prompt나 Source를 수정한다."
                ]
              },
              {
                title: "Regenerate",
                items: [
                  "필요한 부분을 다시 생성한다."
                ]
              },
              {
                title: "Integrate",
                items: [
                  "선택된 결과를 실제 영상 구조에 결합한다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "AI 제작은 한 번의 Prompt로 끝나는 작업이 아니라 생성과 평가를 반복하는 과정이다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "35. 16:9에서 9:16으로 변환",
            children: [
              {
                title: "단순 Resize의 문제",
                items: [
                  "좌우 정보가 제거된다.",
                  "Text가 화면 밖으로 나갈 수 있다.",
                  "피사체가 잘릴 수 있다."
                ]
              },
              {
                title: "Reframe",
                items: [
                  "피사체 위치를 다시 설정한다.",
                  "Text Layout을 다시 구성한다.",
                  "Graphic 위치를 변경한다."
                ]
              },
              {
                title: "Timing",
                items: [
                  "Short-form에서는 동일한 Scene도 더 빠르게 재구성할 수 있다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "Format 변환은 크기 변환이 아니라 콘텐츠 재편집 과정이다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "36. Canva AI 영상 제작 Workflow",
            children: [
              {
                title: "1. Goal",
                items: [
                  "영상 목적을 정의한다."
                ]
              },
              {
                title: "2. Audience",
                items: [
                  "시청자를 정의한다."
                ]
              },
              {
                title: "3. Platform",
                items: [
                  "최종 게시 플랫폼과 화면비를 결정한다."
                ]
              },
              {
                title: "4. Concept",
                items: [
                  "AI를 활용해 여러 Concept을 탐색한다."
                ]
              },
              {
                title: "5. Script",
                items: [
                  "전체 메시지 구조를 생성하고 수정한다."
                ]
              },
              {
                title: "6. Scene",
                items: [
                  "Script를 장면 단위로 분해한다."
                ]
              },
              {
                title: "7. Source Plan",
                items: [
                  "각 Scene에 필요한 이미지·영상·Graphic·Audio를 정의한다."
                ]
              },
              {
                title: "8. Generate",
                items: [
                  "필요한 AI Source를 생성한다."
                ]
              },
              {
                title: "9. Select",
                items: [
                  "생성 결과를 평가하고 실제 사용할 Source를 선택한다."
                ]
              },
              {
                title: "10. Layout",
                items: [
                  "Scene별 화면 구성을 제작한다."
                ]
              },
              {
                title: "11. Typography",
                items: [
                  "Text Hierarchy와 Copy를 정리한다."
                ]
              },
              {
                title: "12. Motion",
                items: [
                  "Animation과 Transition을 적용한다."
                ]
              },
              {
                title: "13. Audio",
                items: [
                  "Music.",
                  "Voice.",
                  "SFX를 배치한다."
                ]
              },
              {
                title: "14. Timing",
                items: [
                  "Scene과 Text의 노출 시간을 조정한다."
                ]
              },
              {
                title: "15. Brand",
                items: [
                  "Color.",
                  "Font.",
                  "Logo.",
                  "Image Style을 통일한다."
                ]
              },
              {
                title: "16. QC",
                items: [
                  "AI 오류.",
                  "Text.",
                  "Timing.",
                  "Audio.",
                  "Composition을 검수한다."
                ]
              },
              {
                title: "17. Export",
                items: [
                  "목적에 맞는 영상 파일로 출력한다."
                ]
              }
            ]
          },

          {
            type: "checklist",
            title: "AI Source 검수 체크리스트",
            items: [
              "AI 이미지의 손과 얼굴 구조가 정상인가?",
              "제품의 실제 형태가 유지되는가?",
              "Logo와 문자가 변형되지 않았는가?",
              "배경 Perspective가 자연스러운가?",
              "빛과 Shadow 방향이 일치하는가?",
              "AI 영상에서 피사체 형태가 시간에 따라 변하지 않는가?",
              "불필요한 물체가 갑자기 나타나지 않는가?",
              "Camera Motion이 자연스러운가?",
              "영상 전체에서 이미지 Style이 지나치게 달라지지 않는가?",
              "AI Source가 실제 Scene의 목적을 충족하는가?"
            ]
          },

          {
            type: "checklist",
            title: "Scene 검수 체크리스트",
            items: [
              "각 Scene의 역할이 명확한가?",
              "한 Scene에 너무 많은 정보를 넣지 않았는가?",
              "가장 중요한 요소가 먼저 보이는가?",
              "Text와 이미지가 서로 경쟁하지 않는가?",
              "Text를 읽을 시간이 충분한가?",
              "Scene Duration이 지나치게 길거나 짧지 않은가?",
              "Animation이 정보 전달을 방해하지 않는가?",
              "Transition이 Scene의 관계와 맞는가?",
              "이전 Scene과 다음 Scene의 흐름이 자연스러운가?"
            ]
          },

          {
            type: "checklist",
            title: "최종 영상 QC 체크리스트",
            items: [
              "첫 장면에서 영상의 주제나 관심 요소가 명확한가?",
              "핵심 메시지가 영상 전체에서 일관되는가?",
              "불필요한 Scene이 없는가?",
              "Brand Color와 Font가 일관되는가?",
              "Logo가 올바르게 사용되었는가?",
              "맞춤법과 숫자가 정확한가?",
              "AI가 생성한 잘못된 정보가 포함되지 않았는가?",
              "음악이 Voice를 방해하지 않는가?",
              "Scene 전환과 음악의 흐름이 어색하지 않은가?",
              "영상 끝의 CTA가 명확한가?",
              "최종 플랫폼의 화면비와 Safe Area에 적합한가?"
            ]
          },

          {
            type: "case",
            title: "실습 1 — AI 기반 15초 제품 광고 기획",
            children: [
              {
                title: "조건",
                items: [
                  "세로형 9:16.",
                  "15초.",
                  "제품 1개.",
                  "5 Scene."
                ]
              },
              {
                title: "Scene 1",
                items: [
                  "0~2초.",
                  "Hook."
                ]
              },
              {
                title: "Scene 2",
                items: [
                  "2~5초.",
                  "Problem."
                ]
              },
              {
                title: "Scene 3",
                items: [
                  "5~9초.",
                  "Product."
                ]
              },
              {
                title: "Scene 4",
                items: [
                  "9~12초.",
                  "Benefit."
                ]
              },
              {
                title: "Scene 5",
                items: [
                  "12~15초.",
                  "CTA."
                ]
              },
              {
                title: "AI 활용",
                items: [
                  "Concept 생성.",
                  "Copy 생성.",
                  "Scene Idea 생성.",
                  "Background Source 생성."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "실습 2 — AI 이미지 기반 Brand Video",
            children: [
              {
                title: "기획",
                items: [
                  "Brand Keyword 3개를 정의한다."
                ]
              },
              {
                title: "Prompt",
                items: [
                  "모든 이미지에 공통된 Lighting.",
                  "Color.",
                  "Composition 규칙을 적용한다."
                ]
              },
              {
                title: "생성",
                items: [
                  "Scene별 AI 이미지를 생성한다."
                ]
              },
              {
                title: "통일",
                items: [
                  "색과 Style 차이가 큰 Source를 수정하거나 다시 생성한다."
                ]
              },
              {
                title: "Motion",
                items: [
                  "Zoom.",
                  "Pan.",
                  "Text Animation으로 정지 이미지에 시간 흐름을 만든다."
                ]
              },
              {
                title: "결과",
                items: [
                  "AI 이미지 여러 장을 단순 연결하는 것이 아니라 하나의 Visual Direction을 가진 영상으로 구성한다."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "실습 3 — Template 재설계",
            children: [
              {
                title: "1단계",
                items: [
                  "영상 Template 하나를 선택한다."
                ]
              },
              {
                title: "2단계",
                items: [
                  "Scene.",
                  "Typography.",
                  "Animation.",
                  "Transition 구조를 분석한다."
                ]
              },
              {
                title: "3단계",
                items: [
                  "기존 Sample Text와 Image를 제거한다."
                ]
              },
              {
                title: "4단계",
                items: [
                  "새로운 제품 또는 서비스 콘텐츠를 적용한다."
                ]
              },
              {
                title: "5단계",
                items: [
                  "콘텐츠 구조에 맞지 않는 Scene을 삭제하거나 추가한다."
                ]
              },
              {
                title: "6단계",
                items: [
                  "Brand Color와 Typography를 다시 설정한다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "Template의 내용을 바꾸는 것이 아니라 Template의 구조를 콘텐츠 목적에 맞게 수정한다."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "실습 4 — AI 생성 결과 개선 반복",
            children: [
              {
                title: "Round 1",
                items: [
                  "간단한 Prompt로 결과를 생성한다."
                ]
              },
              {
                title: "분석",
                items: [
                  "구도.",
                  "Style.",
                  "피사체.",
                  "배경.",
                  "Text 공간의 문제를 기록한다."
                ]
              },
              {
                title: "Round 2",
                items: [
                  "문제 요소를 Prompt 조건으로 추가한다."
                ]
              },
              {
                title: "Round 3",
                items: [
                  "영상 활용을 고려해 Subject Position과 Copy Space를 추가한다."
                ]
              },
              {
                title: "비교",
                items: [
                  "Prompt 정보량이 증가했을 때 결과가 어떤 방향으로 제한되는지 비교한다."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "실습 5 — 가로형 영상을 세로형으로 재구성",
            children: [
              {
                title: "Original",
                items: [
                  "1920×1080 영상."
                ]
              },
              {
                title: "Target",
                items: [
                  "1080×1920."
                ]
              },
              {
                title: "작업",
                items: [
                  "Scene별 Reframe.",
                  "피사체 위치 변경.",
                  "Text 재배치.",
                  "Graphic 크기 수정.",
                  "불필요한 정보 삭제."
                ]
              },
              {
                title: "추가 수정",
                items: [
                  "긴 Scene을 Short-form 속도에 맞게 축약한다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "같은 콘텐츠라도 플랫폼에 따라 편집 구조가 달라진다."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "실습 6 — 30초 AI 홍보 영상 완성",
            children: [
              {
                title: "Pre-production",
                items: [
                  "Goal.",
                  "Audience.",
                  "Platform.",
                  "Message.",
                  "Visual Direction을 정의한다."
                ]
              },
              {
                title: "AI Planning",
                items: [
                  "Concept.",
                  "Script.",
                  "Scene Idea를 생성한다."
                ]
              },
              {
                title: "Source",
                items: [
                  "AI Image.",
                  "AI Video.",
                  "Stock.",
                  "직접 제작 Asset을 혼합한다."
                ]
              },
              {
                title: "Edit",
                items: [
                  "Scene Layout.",
                  "Typography.",
                  "Animation.",
                  "Transition.",
                  "Timing을 구성한다."
                ]
              },
              {
                title: "Audio",
                items: [
                  "Music.",
                  "Voice.",
                  "SFX를 적용한다."
                ]
              },
              {
                title: "QC",
                items: [
                  "AI 오류.",
                  "정보 오류.",
                  "시각적 일관성.",
                  "Timing.",
                  "Audio를 검수한다."
                ]
              },
              {
                title: "Output",
                items: [
                  "최종 영상 파일을 Export한다."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "4-1 전체 프로세스 — Canva AI 영상 제작",
            children: [
              {
                title: "1. Define",
                items: [
                  "영상의 목적, Audience, Platform, Duration을 정의한다."
                ]
              },
              {
                title: "2. Context",
                items: [
                  "AI에게 제공할 제품·브랜드·콘텐츠 정보를 구조화한다."
                ]
              },
              {
                title: "3. Concept Generation",
                items: [
                  "여러 영상 Concept을 생성하고 비교한다."
                ]
              },
              {
                title: "4. Script",
                items: [
                  "선택한 Concept을 기반으로 Script를 생성한다."
                ]
              },
              {
                title: "5. Script Refinement",
                items: [
                  "AI가 생성한 Script의 중복과 불필요한 문장을 제거한다."
                ]
              },
              {
                title: "6. Scene Breakdown",
                items: [
                  "Script를 기능이 명확한 Scene 단위로 분해한다."
                ]
              },
              {
                title: "7. Source Planning",
                items: [
                  "각 Scene에 필요한 Image, Video, Graphic, Text, Audio를 정의한다."
                ]
              },
              {
                title: "8. AI Image Generation",
                items: [
                  "영상 Composition과 Copy Space를 고려한 이미지를 생성한다."
                ]
              },
              {
                title: "9. AI Video Generation",
                items: [
                  "필요한 장면은 짧은 Shot 단위로 생성한다."
                ]
              },
              {
                title: "10. Source Selection",
                items: [
                  "AI 결과를 기술적·시각적·영상 활용 관점에서 평가한다."
                ]
              },
              {
                title: "11. Source Refinement",
                items: [
                  "배경 제거.",
                  "부분 수정.",
                  "Frame 확장.",
                  "재생성 등을 수행한다."
                ]
              },
              {
                title: "12. Scene Construction",
                items: [
                  "선택한 Source를 Canva Scene에 배치한다."
                ]
              },
              {
                title: "13. Layout",
                items: [
                  "Primary와 Secondary 요소의 시각적 위계를 설정한다."
                ]
              },
              {
                title: "14. Typography",
                items: [
                  "Headline, Subcopy, CTA의 정보 위계를 구성한다."
                ]
              },
              {
                title: "15. Copy Refinement",
                items: [
                  "화면에서 읽을 수 있도록 AI Script를 짧은 영상 Copy로 다시 압축한다."
                ]
              },
              {
                title: "16. Brand",
                items: [
                  "Color, Font, Logo, Image Style을 통일한다."
                ]
              },
              {
                title: "17. Animation",
                items: [
                  "정보 등장 순서와 시선 흐름에 맞게 Motion을 적용한다."
                ]
              },
              {
                title: "18. Transition",
                items: [
                  "Scene 간 관계에 맞는 전환 방식을 선택한다."
                ]
              },
              {
                title: "19. Timing",
                items: [
                  "Scene, Text, Motion의 시간을 조절한다."
                ]
              },
              {
                title: "20. Music",
                items: [
                  "영상의 Mood와 Tempo에 맞는 음악을 적용한다."
                ]
              },
              {
                title: "21. Voice",
                items: [
                  "필요한 경우 AI Voice 또는 Narration을 적용한다."
                ]
              },
              {
                title: "22. Audio Balance",
                items: [
                  "Voice, Music, SFX의 상대적인 크기를 조절한다."
                ]
              },
              {
                title: "23. Preview",
                items: [
                  "전체 영상을 처음부터 끝까지 실제 재생 속도로 확인한다."
                ]
              },
              {
                title: "24. AI QC",
                items: [
                  "생성 이미지와 영상의 구조적 오류를 확인한다."
                ]
              },
              {
                title: "25. Content QC",
                items: [
                  "Text, 숫자, 제품 정보, CTA를 검수한다."
                ]
              },
              {
                title: "26. Visual QC",
                items: [
                  "Color, Typography, Layout, Motion의 일관성을 검수한다."
                ]
              },
              {
                title: "27. Platform QC",
                items: [
                  "Aspect Ratio, Safe Area, 영상 길이를 최종 플랫폼 기준으로 확인한다."
                ]
              },
              {
                title: "28. Export",
                items: [
                  "최종 목적에 맞는 영상으로 출력한다."
                ]
              },
              {
                title: "최종 핵심",
                items: [
                  "Canva AI 영상 제작의 핵심은 AI 버튼의 사용법이 아니라 제작 과정에서 AI를 어디에 배치할 것인지 결정하는 것이다.",
                  "AI는 Concept, Script, Copy, Image, Video 등 다양한 제작 Source를 빠르게 생성할 수 있지만 최종 영상의 목적과 구조까지 자동으로 보장하지 않는다.",
                  "Prompt는 결과를 요청하는 문장이 아니라 AI가 탐색할 결과 범위를 제한하는 제작 조건의 집합으로 이해한다.",
                  "AI가 생성한 결과는 Generate → Evaluate → Refine → Regenerate → Integrate 과정을 반복하며 실제 영상 Asset으로 변환한다.",
                  "영상은 개별 이미지의 품질보다 Scene 간 정보 흐름과 시간 구조가 중요하다.",
                  "각 Scene에는 명확한 역할이 있어야 하며 Text, Image, Motion, Audio는 그 역할을 수행하기 위해 배치되어야 한다.",
                  "Template은 완성된 디자인이 아니라 빠르게 사용할 수 있는 제작 구조이며 콘텐츠 목적에 맞지 않으면 구조 자체를 변경해야 한다.",
                  "AI Source와 Stock Source, 직접 제작 Source를 경쟁 관계로 보지 않고 장면 목적에 따라 선택한다.",
                  "16:9에서 9:16으로의 변환은 Resize가 아니라 Composition, Text, Timing을 다시 설계하는 Reframe 작업이다.",
                  "최종 단계에서는 AI 특유의 시각 오류뿐 아니라 정보 정확성, Brand Consistency, Timing, Audio, Platform 적합성까지 함께 검수해야 한다.",
                  "Canva는 AI가 영상을 자동으로 완성하는 도구라기보다 기획·생성·디자인·편집을 하나의 작업 환경에서 빠르게 반복할 수 있게 하는 제작 플랫폼으로 활용한다."
                ]
              }
            ]
          }
        ]
      },
      
      
      {
        name: "SNS 숏츠 영상 제작 실습",
        hours: 21,
        content: [
          {
            type: "goals",
            title: "학습 목표",
            items: [
              "SNS 숏폼 영상이 일반 영상과 다른 소비 구조를 이해할 수 있다.",
              "YouTube Shorts, Instagram Reels, TikTok 등 세로형 플랫폼의 공통 제작 원리를 이해할 수 있다.",
              "9:16 세로 화면을 기준으로 정보 구조와 시각적 위계를 설계할 수 있다.",
              "짧은 영상에서 첫 1~3초가 수행하는 역할을 이해하고 Hook을 설계할 수 있다.",
              "시청 지속시간을 고려하여 영상의 정보 밀도와 장면 전환 속도를 조절할 수 있다.",
              "하나의 주제를 15초, 30초, 60초 등 서로 다른 길이의 숏폼 구조로 변환할 수 있다.",
              "주제를 핵심 메시지, 보조 정보, CTA로 분해할 수 있다.",
              "긴 설명을 숏폼 영상에 적합한 짧은 Script와 Copy로 압축할 수 있다.",
              "AI를 활용해 Hook, Script, Scene Idea, Caption 초안을 생성할 수 있다.",
              "AI가 생성한 숏폼 Script의 반복, 과장, 불필요한 설명을 제거할 수 있다.",
              "Scene과 Shot의 차이를 이해하고 숏폼 영상의 시간 구조를 설계할 수 있다.",
              "A-roll, B-roll, 이미지, 그래픽, 자막을 조합하여 하나의 숏폼 영상을 구성할 수 있다.",
              "세로 화면에서 얼굴, 제품, 자막, UI가 충돌하지 않도록 Safe Area를 고려할 수 있다.",
              "자막을 단순 음성 전사가 아니라 정보 강조 요소로 설계할 수 있다.",
              "Keyword Highlight와 Text Animation을 이용해 시선 흐름을 제어할 수 있다.",
              "Jump Cut, Punch-in, B-roll Insert 등 숏폼에서 자주 사용하는 편집 구조를 적용할 수 있다.",
              "영상의 정체 구간을 찾아 불필요한 Pause와 반복 내용을 제거할 수 있다.",
              "음악, Voice, SFX를 이용하여 영상의 Rhythm과 강조 지점을 설계할 수 있다.",
              "하나의 원본 콘텐츠를 여러 개의 숏폼 콘텐츠로 재구성할 수 있다.",
              "기획 → Script → Shot Plan → Source → Edit → Caption → Audio → QC → Export의 숏폼 제작 Pipeline을 수행할 수 있다."
            ]
          },

          {
            type: "concept",
            title: "1. 숏폼 영상은 짧은 일반 영상이 아니다",
            children: [
              {
                title: "일반 영상",
                items: [
                  "시청자가 어느 정도의 관심을 가지고 영상을 선택한 상태에서 시작하는 경우가 많다.",
                  "도입부에서 배경 설명과 Context를 제공할 수 있다.",
                  "정보를 비교적 긴 시간에 걸쳐 단계적으로 전개할 수 있다."
                ]
              },
              {
                title: "숏폼 영상",
                items: [
                  "Feed를 넘기는 과정에서 우연히 노출되는 경우가 많다.",
                  "시청자가 계속 볼 것인지 매우 빠르게 판단한다.",
                  "초기 Context 없이도 영상의 의미를 빠르게 이해할 수 있어야 한다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "숏폼은 기존 영상을 단순히 짧게 자르는 작업이 아니다.",
                  "노출 방식과 소비 방식에 맞춰 정보 구조 자체를 다시 설계해야 한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "2. 숏폼의 기본 소비 구조",
            children: [
              {
                title: "Exposure",
                items: [
                  "영상이 Feed에 노출된다."
                ]
              },
              {
                title: "Attention",
                items: [
                  "첫 화면과 첫 문장이 시청자의 주의를 확보한다."
                ]
              },
              {
                title: "Retention",
                items: [
                  "다음 정보를 기대하게 만들어 시청을 유지한다."
                ]
              },
              {
                title: "Payoff",
                items: [
                  "영상이 약속했던 정보나 결과를 제공한다."
                ]
              },
              {
                title: "Action",
                items: [
                  "필요한 경우 댓글, 저장, 공유, 구독, 이동 등의 행동으로 연결한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "3. 9:16 세로 화면",
            children: [
              {
                title: "기본 Frame",
                items: [
                  "1080×1920을 대표적인 세로형 제작 기준으로 사용할 수 있다."
                ]
              },
              {
                title: "시각적 특징",
                items: [
                  "가로 공간이 좁다.",
                  "한 화면에 많은 정보를 병렬로 배치하기 어렵다.",
                  "인물이나 제품이 화면에서 상대적으로 크게 보인다."
                ]
              },
              {
                title: "설계 방향",
                items: [
                  "하나의 화면에서 하나의 Primary Message를 명확하게 보여주는 구조가 유리하다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "4. Platform UI와 Safe Area",
            children: [
              {
                title: "오른쪽 영역",
                items: [
                  "좋아요, 댓글, 공유 등의 UI가 배치될 수 있다."
                ]
              },
              {
                title: "하단 영역",
                items: [
                  "계정 정보, Caption, 음악 정보 등의 UI가 표시될 수 있다."
                ]
              },
              {
                title: "상단 영역",
                items: [
                  "플랫폼의 Navigation이나 상태 정보와 가까울 수 있다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "영상 전체 1080×1920 영역을 동일하게 안전한 정보 영역으로 사용하지 않는다.",
                  "중요 Text, Logo, 얼굴, 제품은 플랫폼 UI와의 충돌 가능성을 고려해 배치한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "5. 숏폼 영상의 정보 압축",
            children: [
              {
                title: "Long-form",
                items: [
                  "배경 → 원인 → 설명 → 사례 → 결론처럼 긴 논리 구조를 사용할 수 있다."
                ]
              },
              {
                title: "Short-form",
                items: [
                  "핵심 질문 → 필요한 근거 → 결과처럼 정보 구조를 압축할 수 있다."
                ]
              },
              {
                title: "삭제 대상",
                items: [
                  "중복 설명.",
                  "이미 알고 있어도 되는 배경.",
                  "의미 없는 인사.",
                  "같은 결론을 반복하는 문장.",
                  "영상 목적과 직접 관련 없는 세부 정보."
                ]
              },
              {
                title: "핵심",
                items: [
                  "빠르게 말하는 것이 정보 압축은 아니다.",
                  "정보의 우선순위를 결정하고 중요하지 않은 내용을 제거하는 것이 핵심이다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "6. One Video, One Core Message",
            children: [
              {
                title: "Core Message",
                items: [
                  "영상이 끝났을 때 시청자가 기억해야 할 하나의 핵심."
                ]
              },
              {
                title: "Supporting Information",
                items: [
                  "Core Message를 이해하거나 신뢰하는 데 필요한 정보."
                ]
              },
              {
                title: "Optional Information",
                items: [
                  "있으면 좋지만 영상 목적에 필수적이지 않은 정보."
                ]
              },
              {
                title: "판단",
                items: [
                  "Optional Information 때문에 Core Message가 흐려진다면 제거한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "7. Hook의 역할",
            children: [
              {
                title: "Hook",
                items: [
                  "시청자에게 다음 내용을 확인해야 할 이유를 제공하는 영상의 초기 정보."
                ]
              },
              {
                title: "기능",
                items: [
                  "문제를 제시한다.",
                  "결과를 먼저 보여준다.",
                  "질문을 만든다.",
                  "차이를 보여준다.",
                  "시청자가 얻을 가치를 제시한다."
                ]
              },
              {
                title: "주의",
                items: [
                  "자극적인 문장을 사용하는 것 자체가 Hook의 목적은 아니다.",
                  "뒤에서 제공하지 않을 결과를 과장하여 약속하면 영상 전체의 신뢰성이 떨어진다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "8. Hook 유형",
            children: [
              {
                title: "Question Hook",
                items: [
                  "\"왜 같은 영상을 만들어도 조회수가 다를까?\"처럼 질문으로 시작한다."
                ]
              },
              {
                title: "Result Hook",
                items: [
                  "최종 결과를 먼저 보여준 뒤 과정을 설명한다."
                ]
              },
              {
                title: "Problem Hook",
                items: [
                  "시청자가 경험할 수 있는 문제를 바로 제시한다."
                ]
              },
              {
                title: "Contrast Hook",
                items: [
                  "Before / After.",
                  "잘못된 방법 / 개선된 방법처럼 차이를 보여준다."
                ]
              },
              {
                title: "Value Hook",
                items: [
                  "영상을 통해 얻을 수 있는 정보를 먼저 제시한다."
                ]
              },
              {
                title: "Visual Hook",
                items: [
                  "강한 움직임, 특이한 장면, 결과 화면 등 시각적 변화로 관심을 확보한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "9. Hook과 본문의 연결",
            children: [
              {
                title: "나쁜 구조",
                items: [
                  "Hook에서는 A를 약속하지만 본문에서는 B를 설명한다."
                ]
              },
              {
                title: "좋은 구조",
                items: [
                  "Hook에서 질문을 만든다.",
                  "본문에서 질문을 해결한다.",
                  "마지막에서 결과를 명확하게 정리한다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "Hook은 독립적인 자극 요소가 아니라 영상 전체 정보 구조의 시작점이다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "10. 첫 Frame의 중요성",
            children: [
              {
                title: "첫 Frame",
                items: [
                  "영상이 재생되는 순간 가장 먼저 노출되는 시각 정보."
                ]
              },
              {
                title: "Visual Question",
                items: [
                  "무엇을 보여주는 영상인지 빠르게 추론할 수 있게 한다."
                ]
              },
              {
                title: "Text Hook",
                items: [
                  "영상의 핵심 질문이나 결과를 짧게 표시할 수 있다."
                ]
              },
              {
                title: "Subject",
                items: [
                  "얼굴, 제품, 결과 화면 등 핵심 피사체를 초기에 노출할 수 있다."
                ]
              },
              {
                title: "주의",
                items: [
                  "Logo Animation만 길게 보여주는 Intro는 숏폼의 초기 Attention 구조와 맞지 않을 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "11. 15초 영상 구조",
            children: [
              {
                title: "0~2초",
                items: [
                  "Hook."
                ]
              },
              {
                title: "2~6초",
                items: [
                  "Context 또는 Problem."
                ]
              },
              {
                title: "6~12초",
                items: [
                  "핵심 내용 또는 Solution."
                ]
              },
              {
                title: "12~15초",
                items: [
                  "Payoff 또는 CTA."
                ]
              },
              {
                title: "특징",
                items: [
                  "하나의 매우 좁은 주제를 전달하는 데 적합하다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "12. 30초 영상 구조",
            children: [
              {
                title: "0~3초",
                items: [
                  "Hook."
                ]
              },
              {
                title: "3~8초",
                items: [
                  "Problem / Context."
                ]
              },
              {
                title: "8~22초",
                items: [
                  "핵심 설명, 사례 또는 Solution."
                ]
              },
              {
                title: "22~27초",
                items: [
                  "Result / Summary."
                ]
              },
              {
                title: "27~30초",
                items: [
                  "CTA."
                ]
              },
              {
                title: "특징",
                items: [
                  "짧은 설명형, 제품 소개형, Tip 콘텐츠 등에 활용하기 좋다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "13. 60초 영상 구조",
            children: [
              {
                title: "Opening",
                items: [
                  "Hook과 핵심 문제를 빠르게 제시한다."
                ]
              },
              {
                title: "Development",
                items: [
                  "2~4개의 정보 단위로 내용을 전개한다."
                ]
              },
              {
                title: "Pattern Change",
                items: [
                  "중간에 화면 구조나 Source를 변경하여 시각적 정체를 줄인다."
                ]
              },
              {
                title: "Payoff",
                items: [
                  "초기 질문이나 약속을 해결한다."
                ]
              },
              {
                title: "Closing",
                items: [
                  "필요한 경우 Summary와 CTA를 제공한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "14. AI를 이용한 주제 확장",
            children: [
              {
                title: "입력",
                items: [
                  "콘텐츠 분야.",
                  "Audience.",
                  "목적.",
                  "플랫폼.",
                  "영상 길이."
                ]
              },
              {
                title: "AI 출력",
                items: [
                  "주제 후보.",
                  "Hook 후보.",
                  "콘텐츠 Angle.",
                  "예상 질문.",
                  "Scene Idea."
                ]
              },
              {
                title: "사용자 판단",
                items: [
                  "실제로 가치 있는 정보인가.",
                  "이미 너무 일반적인 주제인가.",
                  "영상 하나에 담을 수 있는 범위인가.",
                  "Source를 확보할 수 있는가."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "15. AI Hook 생성",
            children: [
              {
                title: "단순 요청",
                items: [
                  "\"Hook 10개 만들어줘\"보다 영상 목적과 Audience를 함께 제공한다."
                ]
              },
              {
                title: "조건",
                items: [
                  "주제.",
                  "대상.",
                  "길이.",
                  "전달할 핵심.",
                  "과장 금지.",
                  "문장 길이 등을 지정할 수 있다."
                ]
              },
              {
                title: "다중 생성",
                items: [
                  "Question.",
                  "Result.",
                  "Contrast.",
                  "Problem 등 유형별로 여러 후보를 생성한다."
                ]
              },
              {
                title: "선택",
                items: [
                  "가장 자극적인 Hook보다 본문의 내용과 가장 강하게 연결되는 Hook을 선택한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "16. AI Script 생성",
            children: [
              {
                title: "입력 Context",
                items: [
                  "Core Message.",
                  "Audience.",
                  "Duration.",
                  "Tone.",
                  "Hook.",
                  "필수 정보.",
                  "CTA."
                ]
              },
              {
                title: "출력 구조",
                items: [
                  "Hook.",
                  "Body.",
                  "Payoff.",
                  "CTA."
                ]
              },
              {
                title: "문제",
                items: [
                  "AI는 같은 의미를 여러 문장으로 반복할 수 있다.",
                  "필요 이상으로 친절한 설명을 추가할 수 있다.",
                  "실제 발화 시간보다 긴 Script를 만들 수 있다."
                ]
              },
              {
                title: "후처리",
                items: [
                  "중복 삭제.",
                  "문장 단축.",
                  "발화체 변환.",
                  "정보 순서 변경."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "17. Script의 발화 시간",
            children: [
              {
                title: "문제",
                items: [
                  "글자 수만 보고 영상 길이를 판단하면 실제 발화 시간과 차이가 발생할 수 있다."
                ]
              },
              {
                title: "실제 확인",
                items: [
                  "직접 읽거나 Voice를 생성하여 실제 Duration을 확인한다."
                ]
              },
              {
                title: "Pause",
                items: [
                  "강조.",
                  "호흡.",
                  "장면 전환을 위한 Pause도 전체 시간에 포함된다."
                ]
              },
              {
                title: "수정",
                items: [
                  "시간이 초과되면 말의 속도를 무조건 높이기보다 중요도가 낮은 내용을 제거한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "18. Scene과 Shot",
            children: [
              {
                title: "Scene",
                items: [
                  "하나의 의미 또는 기능을 수행하는 장면 단위."
                ]
              },
              {
                title: "Shot",
                items: [
                  "하나의 연속된 화면 단위."
                ]
              },
              {
                title: "관계",
                items: [
                  "하나의 Scene 안에 여러 Shot이 들어갈 수 있다."
                ]
              },
              {
                title: "예",
                items: [
                  "제품 장점 설명 Scene 안에서 제품 전체 Shot → Detail Shot → 사용 Shot으로 전환할 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "19. Shot List",
            children: [
              {
                title: "Shot ID",
                items: [
                  "S01-A.",
                  "S01-B.",
                  "S02-A 등."
                ]
              },
              {
                title: "Subject",
                items: [
                  "촬영하거나 보여줄 대상."
                ]
              },
              {
                title: "Shot Size",
                items: [
                  "Wide.",
                  "Medium.",
                  "Close-up.",
                  "Detail."
                ]
              },
              {
                title: "Action",
                items: [
                  "피사체가 수행하는 행동."
                ]
              },
              {
                title: "Camera",
                items: [
                  "Static.",
                  "Pan.",
                  "Tilt.",
                  "Push-in 등."
                ]
              },
              {
                title: "Duration",
                items: [
                  "예상 사용 시간."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "20. A-roll",
            children: [
              {
                title: "역할",
                items: [
                  "영상의 핵심 설명이나 이야기를 직접 전달하는 주요 Source."
                ]
              },
              {
                title: "예",
                items: [
                  "Presenter.",
                  "Interview.",
                  "제품 설명.",
                  "Camera Talking."
                ]
              },
              {
                title: "장점",
                items: [
                  "정보 전달이 명확하다.",
                  "인물 중심 콘텐츠에서 신뢰와 연결감을 만들 수 있다."
                ]
              },
              {
                title: "한계",
                items: [
                  "같은 화면이 오래 유지되면 시각적 변화가 부족할 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "21. B-roll",
            children: [
              {
                title: "역할",
                items: [
                  "A-roll의 설명을 시각적으로 보완한다."
                ]
              },
              {
                title: "제품",
                items: [
                  "Detail.",
                  "사용 장면.",
                  "Texture.",
                  "Package."
                ]
              },
              {
                title: "정보 콘텐츠",
                items: [
                  "관련 화면.",
                  "자료.",
                  "작업 과정.",
                  "결과 화면."
                ]
              },
              {
                title: "편집 기능",
                items: [
                  "Jump Cut을 숨긴다.",
                  "시각적 변화를 만든다.",
                  "말로 설명하는 내용을 실제 화면으로 보여준다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "22. A-roll과 B-roll 연결",
            children: [
              {
                title: "Voice Continuity",
                items: [
                  "A-roll의 음성은 계속 유지하면서 화면만 B-roll로 전환할 수 있다."
                ]
              },
              {
                title: "Keyword",
                items: [
                  "특정 단어가 등장할 때 관련 B-roll을 삽입한다."
                ]
              },
              {
                title: "Proof",
                items: [
                  "설명한 내용을 증명하거나 보여주는 B-roll을 배치한다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "B-roll은 빈 화면을 채우기 위한 장식이 아니라 설명의 시각적 근거로 사용한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "23. Talking Head 구성",
            children: [
              {
                title: "Eye Line",
                items: [
                  "시청자와 직접 대화하는 구조라면 Camera Lens 근처로 시선을 유지한다."
                ]
              },
              {
                title: "Framing",
                items: [
                  "세로 Frame에서 얼굴과 상체가 안정적으로 보이도록 구성한다."
                ]
              },
              {
                title: "Background",
                items: [
                  "인물과 분리되면서도 지나치게 복잡하지 않은 배경을 사용한다."
                ]
              },
              {
                title: "Text Space",
                items: [
                  "Caption과 Graphic이 들어갈 영역을 촬영 단계에서 고려한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "24. Jump Cut",
            children: [
              {
                title: "기능",
                items: [
                  "불필요한 Pause와 말 사이의 공백을 제거한다.",
                  "정보 전달 속도를 높인다."
                ]
              },
              {
                title: "문제",
                items: [
                  "연속된 화면에서 인물 위치가 순간적으로 이동하는 시각적 단절이 발생한다."
                ]
              },
              {
                title: "활용",
                items: [
                  "숏폼에서는 빠른 Rhythm 자체가 스타일로 사용될 수 있다."
                ]
              },
              {
                title: "보완",
                items: [
                  "B-roll.",
                  "Punch-in.",
                  "Graphic.",
                  "Text 변화로 Cut을 자연스럽게 처리할 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "25. Punch-in",
            children: [
              {
                title: "의미",
                items: [
                  "같은 Source에서 화면을 확대하여 다른 Shot처럼 보이게 만드는 편집 방식."
                ]
              },
              {
                title: "용도",
                items: [
                  "강조.",
                  "Jump Cut 보완.",
                  "시각적 변화.",
                  "중요 문장 표시."
                ]
              },
              {
                title: "주의",
                items: [
                  "원본 Resolution이 부족하면 확대 시 화질 저하가 발생한다.",
                  "모든 문장마다 반복하면 효과가 약해진다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "26. Pattern Interrupt",
            children: [
              {
                title: "의미",
                items: [
                  "반복되는 시각·청각 Pattern을 의도적으로 변경하는 것."
                ]
              },
              {
                title: "방법",
                items: [
                  "Shot 변경.",
                  "B-roll.",
                  "Graphic 등장.",
                  "Text Style 변경.",
                  "Zoom.",
                  "SFX.",
                  "Background 변화."
                ]
              },
              {
                title: "목적",
                items: [
                  "시청자의 Attention을 다시 활성화한다."
                ]
              },
              {
                title: "주의",
                items: [
                  "의미 없는 변화가 지나치게 많으면 영상이 산만해질 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "27. Visual Rhythm",
            children: [
              {
                title: "빠른 구간",
                items: [
                  "짧은 Shot.",
                  "빠른 Text 변화.",
                  "강한 Motion을 사용할 수 있다."
                ]
              },
              {
                title: "느린 구간",
                items: [
                  "중요한 결과.",
                  "감정적 장면.",
                  "읽어야 하는 정보에 더 많은 시간을 제공할 수 있다."
                ]
              },
              {
                title: "Variation",
                items: [
                  "영상 전체를 동일한 속도로 편집하지 않는다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "Rhythm은 무조건 빠른 편집이 아니라 속도의 차이를 설계하는 것이다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "28. 자막의 역할",
            children: [
              {
                title: "Accessibility",
                items: [
                  "음성을 듣기 어려운 환경에서도 내용을 이해할 수 있게 한다."
                ]
              },
              {
                title: "Reinforcement",
                items: [
                  "음성의 핵심 정보를 시각적으로 반복한다."
                ]
              },
              {
                title: "Attention",
                items: [
                  "Text 변화가 화면에 지속적인 시각적 변화를 만든다."
                ]
              },
              {
                title: "Hierarchy",
                items: [
                  "중요 Keyword를 다른 정보보다 강하게 보여줄 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "29. 전체 자막과 요약 자막",
            children: [
              {
                title: "Full Caption",
                items: [
                  "발화 내용을 대부분 화면에 표시한다."
                ]
              },
              {
                title: "Summary Caption",
                items: [
                  "발화 중 핵심 정보만 짧게 표시한다."
                ]
              },
              {
                title: "Keyword Caption",
                items: [
                  "핵심 단어나 숫자만 강조한다."
                ]
              },
              {
                title: "선택",
                items: [
                  "콘텐츠의 정보량, 발화 속도, Audience에 따라 적절한 방식을 선택한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "30. Caption Chunking",
            children: [
              {
                title: "문제",
                items: [
                  "한 문장 전체를 한 번에 표시하면 읽어야 할 정보량이 많아진다."
                ]
              },
              {
                title: "Chunk",
                items: [
                  "의미 단위로 자막을 짧게 나누어 표시한다."
                ]
              },
              {
                title: "예",
                items: [
                  "\"AI를 잘 사용하는 핵심은 / 질문을 많이 하는 것이 아니라 / 문제를 정확하게 정의하는 것입니다.\"처럼 의미 단위로 나눌 수 있다."
                ]
              },
              {
                title: "Timing",
                items: [
                  "발화와 Caption의 등장 시점을 맞춘다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "31. Keyword Highlight",
            children: [
              {
                title: "대상",
                items: [
                  "숫자.",
                  "핵심 개념.",
                  "제품명.",
                  "결론.",
                  "비교 대상."
                ]
              },
              {
                title: "방법",
                items: [
                  "크기.",
                  "Weight.",
                  "Background.",
                  "Position.",
                  "Animation 등으로 차이를 만든다."
                ]
              },
              {
                title: "주의",
                items: [
                  "모든 단어를 강조하면 실제 강조점이 사라진다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "32. Caption 위치",
            children: [
              {
                title: "하단",
                items: [
                  "일반적인 자막 위치지만 플랫폼 UI와 충돌할 수 있다."
                ]
              },
              {
                title: "중앙 하단",
                items: [
                  "숏폼에서 자주 사용되는 구조로 시선과 가까운 영역에 Caption을 배치할 수 있다."
                ]
              },
              {
                title: "인물",
                items: [
                  "얼굴과 입을 Caption이 가리지 않도록 한다."
                ]
              },
              {
                title: "B-roll",
                items: [
                  "중요한 제품이나 정보 화면을 Caption이 가리지 않는지 확인한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "33. Text Animation",
            children: [
              {
                title: "Entrance",
                items: [
                  "Caption이 발화 시점에 등장한다."
                ]
              },
              {
                title: "Highlight",
                items: [
                  "현재 발화 중인 Keyword를 강조할 수 있다."
                ]
              },
              {
                title: "Scale",
                items: [
                  "중요 단어를 순간적으로 확대할 수 있다."
                ]
              },
              {
                title: "Position",
                items: [
                  "특정 정보와 연결하기 위해 Text 위치를 변경할 수 있다."
                ]
              },
              {
                title: "원칙",
                items: [
                  "Text Motion은 읽기를 방해하지 않는 범위에서 사용한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "34. Graphic Overlay",
            children: [
              {
                title: "Arrow",
                items: [
                  "화면에서 확인해야 할 위치를 가리킨다."
                ]
              },
              {
                title: "Circle",
                items: [
                  "특정 영역을 강조한다."
                ]
              },
              {
                title: "Label",
                items: [
                  "제품명이나 기능명을 표시한다."
                ]
              },
              {
                title: "Number",
                items: [
                  "순서와 수치를 강조한다."
                ]
              },
              {
                title: "Progress",
                items: [
                  "영상의 진행 단계를 시각화할 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "35. Sound Effect",
            children: [
              {
                title: "Transition SFX",
                items: [
                  "화면 변화의 감각을 강화한다."
                ]
              },
              {
                title: "Impact",
                items: [
                  "중요 정보 등장 시점을 강조한다."
                ]
              },
              {
                title: "UI Sound",
                items: [
                  "Click.",
                  "Pop.",
                  "Notification 계열 Sound를 Graphic과 연결할 수 있다."
                ]
              },
              {
                title: "주의",
                items: [
                  "모든 Text와 Cut에 SFX를 넣으면 오히려 피로도가 증가한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "36. Music과 숏폼 Rhythm",
            children: [
              {
                title: "Tempo",
                items: [
                  "영상의 전체적인 편집 속도와 연결한다."
                ]
              },
              {
                title: "Beat",
                items: [
                  "주요 Cut이나 Graphic 등장 시점을 Beat와 연결할 수 있다."
                ]
              },
              {
                title: "Drop",
                items: [
                  "결과 공개나 강한 Visual 변화에 사용할 수 있다."
                ]
              },
              {
                title: "Voice Priority",
                items: [
                  "정보 전달형 영상에서는 음악보다 Voice의 명료도가 우선한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "37. Voice Editing",
            children: [
              {
                title: "Pause Removal",
                items: [
                  "불필요하게 긴 침묵을 제거한다."
                ]
              },
              {
                title: "Mistake Removal",
                items: [
                  "말실수와 반복 발화를 제거한다."
                ]
              },
              {
                title: "Noise",
                items: [
                  "필요한 경우 Background Noise를 줄인다."
                ]
              },
              {
                title: "Level",
                items: [
                  "영상 전체에서 Voice 크기가 지나치게 변하지 않도록 조절한다."
                ]
              },
              {
                title: "Naturalness",
                items: [
                  "공백을 지나치게 제거하여 기계적인 발화가 되지 않도록 한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "38. Retention 관점의 편집",
            children: [
              {
                title: "Retention",
                items: [
                  "시청자가 영상의 어느 지점까지 계속 시청하는지를 나타내는 관점."
                ]
              },
              {
                title: "초반 이탈",
                items: [
                  "Hook이 약하거나 주제가 명확하지 않을 수 있다."
                ]
              },
              {
                title: "중간 이탈",
                items: [
                  "설명이 반복되거나 새로운 정보가 부족할 수 있다."
                ]
              },
              {
                title: "후반 이탈",
                items: [
                  "결론을 이미 제공한 뒤 불필요한 내용이 계속될 수 있다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "Retention을 단순히 빠른 편집으로 해결하지 않는다.",
                  "시청자가 다음 정보를 계속 확인할 이유가 있는지 분석한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "39. Information Gap",
            children: [
              {
                title: "현재 정보",
                items: [
                  "시청자가 지금 알고 있는 내용."
                ]
              },
              {
                title: "필요 정보",
                items: [
                  "다음 Scene에서 확인해야 하는 내용."
                ]
              },
              {
                title: "Gap",
                items: [
                  "현재 정보와 알고 싶은 정보 사이의 차이."
                ]
              },
              {
                title: "활용",
                items: [
                  "질문 → 단서 → 설명 → 결과처럼 정보를 순차적으로 제공할 수 있다."
                ]
              },
              {
                title: "주의",
                items: [
                  "결과를 지나치게 늦추는 방식으로만 사용하면 시청자가 피로를 느낄 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "40. Open Loop와 Close Loop",
            children: [
              {
                title: "Open Loop",
                items: [
                  "초기에 질문이나 미완성 정보를 제시한다."
                ]
              },
              {
                title: "Development",
                items: [
                  "필요한 설명과 근거를 제공한다."
                ]
              },
              {
                title: "Close Loop",
                items: [
                  "영상 후반에서 초기 질문을 해결한다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "Open Loop를 만들었다면 영상 안에서 반드시 회수하는 구조가 필요하다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "41. Payoff",
            children: [
              {
                title: "정의",
                items: [
                  "시청자가 영상을 계속 본 대가로 얻게 되는 핵심 결과."
                ]
              },
              {
                title: "정보형",
                items: [
                  "질문에 대한 답."
                ]
              },
              {
                title: "Tutorial",
                items: [
                  "완성 결과 또는 해결 방법."
                ]
              },
              {
                title: "제품형",
                items: [
                  "제품이 제공하는 변화나 Benefit."
                ]
              },
              {
                title: "Before / After",
                items: [
                  "변화된 최종 결과."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "42. CTA",
            children: [
              {
                title: "Follow",
                items: [
                  "후속 콘텐츠를 계속 보고 싶은 경우."
                ]
              },
              {
                title: "Save",
                items: [
                  "나중에 다시 확인할 가치가 있는 정보형 콘텐츠."
                ]
              },
              {
                title: "Comment",
                items: [
                  "의견이나 경험을 요청하는 콘텐츠."
                ]
              },
              {
                title: "Link / Purchase",
                items: [
                  "제품이나 서비스 행동으로 연결하는 콘텐츠."
                ]
              },
              {
                title: "주의",
                items: [
                  "영상 목적과 관련 없는 여러 CTA를 동시에 요구하지 않는다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "43. Loop 영상",
            children: [
              {
                title: "구조",
                items: [
                  "마지막 Frame이나 문장이 첫 Frame과 자연스럽게 연결된다."
                ]
              },
              {
                title: "Visual Loop",
                items: [
                  "마지막 움직임이 처음 움직임으로 연결된다."
                ]
              },
              {
                title: "Narrative Loop",
                items: [
                  "마지막 문장이 처음 질문과 연결된다."
                ]
              },
              {
                title: "주의",
                items: [
                  "Loop 자체가 목적이 되어 내용의 완결성을 훼손하지 않는다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "44. Before / After 구조",
            children: [
              {
                title: "Before",
                items: [
                  "문제 상태."
                ]
              },
              {
                title: "Process",
                items: [
                  "변화 과정."
                ]
              },
              {
                title: "After",
                items: [
                  "결과 상태."
                ]
              },
              {
                title: "숏폼 활용",
                items: [
                  "After를 첫 Frame에서 먼저 보여준 뒤 과정으로 돌아갈 수도 있다."
                ]
              },
              {
                title: "장점",
                items: [
                  "변화가 명확해 시각적인 Hook과 Payoff를 동시에 만들기 쉽다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "45. List형 콘텐츠",
            children: [
              {
                title: "구조",
                items: [
                  "3가지 방법.",
                  "5가지 실수.",
                  "3개의 핵심 기능 등."
                ]
              },
              {
                title: "Progress",
                items: [
                  "1/3.",
                  "2/3.",
                  "3/3처럼 현재 진행 위치를 표시할 수 있다."
                ]
              },
              {
                title: "장점",
                items: [
                  "영상의 구조가 명확하다.",
                  "시청자가 남은 정보량을 예상할 수 있다."
                ]
              },
              {
                title: "주의",
                items: [
                  "숫자를 늘리기 위해 가치가 낮은 항목을 억지로 추가하지 않는다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "46. Tutorial형 콘텐츠",
            children: [
              {
                title: "Goal",
                items: [
                  "최종적으로 무엇을 만들거나 해결하는지 먼저 보여준다."
                ]
              },
              {
                title: "Step",
                items: [
                  "필수 단계만 남긴다."
                ]
              },
              {
                title: "Screen",
                items: [
                  "실제 조작 화면과 설명을 연결한다."
                ]
              },
              {
                title: "Zoom",
                items: [
                  "작은 UI는 확대하여 시청자가 확인할 수 있게 한다."
                ]
              },
              {
                title: "Result",
                items: [
                  "최종 결과를 다시 보여준다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "47. 제품 소개형 콘텐츠",
            children: [
              {
                title: "Problem",
                items: [
                  "제품이 해결하는 문제."
                ]
              },
              {
                title: "Product",
                items: [
                  "제품 자체를 명확하게 보여준다."
                ]
              },
              {
                title: "Feature",
                items: [
                  "제품의 주요 기능."
                ]
              },
              {
                title: "Benefit",
                items: [
                  "기능이 사용자에게 제공하는 가치."
                ]
              },
              {
                title: "Proof",
                items: [
                  "사용 장면.",
                  "결과.",
                  "비교.",
                  "실제 Detail 등."
                ]
              },
              {
                title: "CTA",
                items: [
                  "구매 또는 추가 정보 확인."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "48. 정보 전달형 콘텐츠",
            children: [
              {
                title: "Question",
                items: [
                  "시청자가 궁금해할 질문을 제시한다."
                ]
              },
              {
                title: "Answer",
                items: [
                  "핵심 답을 빠르게 제공한다."
                ]
              },
              {
                title: "Reason",
                items: [
                  "왜 그런지 필요한 근거를 제공한다."
                ]
              },
              {
                title: "Example",
                items: [
                  "짧은 사례로 이해를 돕는다."
                ]
              },
              {
                title: "Summary",
                items: [
                  "핵심을 다시 정리한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "49. 하나의 긴 콘텐츠를 숏폼으로 분해",
            children: [
              {
                title: "원본",
                items: [
                  "10분 Interview.",
                  "강의.",
                  "Podcast.",
                  "제품 설명 영상 등."
                ]
              },
              {
                title: "분해",
                items: [
                  "하나의 질문.",
                  "하나의 주장.",
                  "하나의 사례.",
                  "하나의 Tip 단위로 분리한다."
                ]
              },
              {
                title: "재구성",
                items: [
                  "각 조각에 새로운 Hook과 Context를 추가한다."
                ]
              },
              {
                title: "주의",
                items: [
                  "원본에서 단순히 30초를 잘라낸다고 독립적인 숏폼 콘텐츠가 되는 것은 아니다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "50. Content Repurposing",
            children: [
              {
                title: "1 Long-form",
                items: [
                  "하나의 긴 콘텐츠를 Source로 사용한다."
                ]
              },
              {
                title: "Multiple Shorts",
                items: [
                  "여러 개의 독립적인 핵심 메시지를 추출한다."
                ]
              },
              {
                title: "Re-hook",
                items: [
                  "각 숏폼에 독립적인 Hook을 만든다."
                ]
              },
              {
                title: "Re-caption",
                items: [
                  "세로형 시청 환경에 맞게 Caption을 다시 구성한다."
                ]
              },
              {
                title: "Reframe",
                items: [
                  "가로 영상을 세로 화면에 맞게 다시 배치한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "51. 숏폼용 AI Workflow",
            children: [
              {
                title: "Research",
                items: [
                  "주제와 Audience의 관심 지점을 정리한다."
                ]
              },
              {
                title: "Ideation",
                items: [
                  "AI로 여러 콘텐츠 Angle을 생성한다."
                ]
              },
              {
                title: "Hook",
                items: [
                  "여러 유형의 Hook을 생성한다."
                ]
              },
              {
                title: "Script",
                items: [
                  "목표 Duration에 맞는 Script 초안을 만든다."
                ]
              },
              {
                title: "Compress",
                items: [
                  "중복과 불필요한 Context를 제거한다."
                ]
              },
              {
                title: "Scene",
                items: [
                  "Script를 시각적 장면으로 변환한다."
                ]
              },
              {
                title: "Source",
                items: [
                  "촬영.",
                  "Stock.",
                  "AI.",
                  "Graphic Source를 확보한다."
                ]
              },
              {
                title: "Edit",
                items: [
                  "시간 구조와 Visual Rhythm을 만든다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "52. AI에게 Scene Idea 생성시키기",
            children: [
              {
                title: "입력",
                items: [
                  "Script 문장.",
                  "영상 Format.",
                  "Audience.",
                  "사용 가능한 Source."
                ]
              },
              {
                title: "출력",
                items: [
                  "A-roll.",
                  "B-roll.",
                  "Text.",
                  "Graphic.",
                  "Camera.",
                  "Transition 아이디어."
                ]
              },
              {
                title: "제약",
                items: [
                  "촬영 가능한 장소.",
                  "보유 제품.",
                  "인물 유무.",
                  "예산.",
                  "제작 시간 등을 함께 제공할 수 있다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "AI의 아이디어를 그대로 실행하는 것이 아니라 실제 제작 조건과 비교하여 선택한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "53. AI 기반 Caption 정리",
            children: [
              {
                title: "Transcription",
                items: [
                  "음성을 Text로 변환한다."
                ]
              },
              {
                title: "Correction",
                items: [
                  "고유명사.",
                  "전문용어.",
                  "숫자.",
                  "띄어쓰기 오류를 수정한다."
                ]
              },
              {
                title: "Chunking",
                items: [
                  "발화 Text를 의미 단위로 나눈다."
                ]
              },
              {
                title: "Highlight",
                items: [
                  "핵심 Keyword를 추출한다."
                ]
              },
              {
                title: "Summary",
                items: [
                  "필요한 경우 전체 자막을 짧은 화면용 Copy로 다시 생성한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "54. AI 결과의 과장 문제",
            children: [
              {
                title: "문제",
                items: [
                  "\"무조건\".",
                  "\"완벽하게\".",
                  "\"단 10초 만에\"처럼 과도한 표현이 생성될 수 있다."
                ]
              },
              {
                title: "검수",
                items: [
                  "실제로 증명 가능한 표현인지 확인한다."
                ]
              },
              {
                title: "수정",
                items: [
                  "과장 표현을 구체적인 사실이나 조건으로 교체한다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "조회수를 위한 Hook과 사실성을 훼손하는 표현은 구분해야 한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "55. Thumbnail과 Cover Frame",
            children: [
              {
                title: "Subject",
                items: [
                  "핵심 인물이나 제품을 명확하게 보여준다."
                ]
              },
              {
                title: "Text",
                items: [
                  "작은 화면에서도 이해할 수 있는 짧은 문구를 사용한다."
                ]
              },
              {
                title: "Contrast",
                items: [
                  "피사체와 Text가 배경에서 분리되도록 한다."
                ]
              },
              {
                title: "Consistency",
                items: [
                  "연속 콘텐츠라면 반복 가능한 Cover 규칙을 만들 수 있다."
                ]
              },
              {
                title: "주의",
                items: [
                  "Cover와 실제 영상 내용이 다른 기대를 만들지 않도록 한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "56. 숏폼 Series 설계",
            children: [
              {
                title: "공통 Theme",
                items: [
                  "여러 영상이 하나의 주제 범위 안에 존재한다."
                ]
              },
              {
                title: "Visual System",
                items: [
                  "Color.",
                  "Font.",
                  "Caption.",
                  "Cover 규칙을 통일한다."
                ]
              },
              {
                title: "Episode",
                items: [
                  "각 영상은 독립적으로 이해되면서 Series의 일부로 연결될 수 있다."
                ]
              },
              {
                title: "Production",
                items: [
                  "촬영과 편집 Template을 재사용하여 제작 효율을 높일 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "57. Batch Production",
            children: [
              {
                title: "Planning Batch",
                items: [
                  "여러 영상의 주제와 Script를 한 번에 기획한다."
                ]
              },
              {
                title: "Shooting Batch",
                items: [
                  "같은 촬영 환경에서 여러 콘텐츠를 연속 촬영한다."
                ]
              },
              {
                title: "Editing Batch",
                items: [
                  "Caption.",
                  "Color.",
                  "Graphic 규칙을 공유하여 여러 영상을 제작한다."
                ]
              },
              {
                title: "장점",
                items: [
                  "영상 하나씩 전체 Workflow를 반복하는 것보다 제작 시간을 줄일 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "58. 숏폼 제작 데이터 구조",
            children: [
              {
                title: "Content ID",
                items: [
                  "SHORT-001.",
                  "SHORT-002 등."
                ]
              },
              {
                title: "Topic",
                items: [
                  "영상의 주제."
                ]
              },
              {
                title: "Hook",
                items: [
                  "초기 Hook 문장."
                ]
              },
              {
                title: "Core Message",
                items: [
                  "영상의 핵심 메시지."
                ]
              },
              {
                title: "Duration",
                items: [
                  "목표 영상 길이."
                ]
              },
              {
                title: "Source",
                items: [
                  "촬영.",
                  "Stock.",
                  "AI.",
                  "기존 영상."
                ]
              },
              {
                title: "Status",
                items: [
                  "IDEA.",
                  "SCRIPT.",
                  "SHOOT.",
                  "EDIT.",
                  "REVIEW.",
                  "DONE."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "59. 게시 전 기술 QC",
            children: [
              {
                title: "Resolution",
                items: [
                  "최종 세로 영상 해상도가 적절한가."
                ]
              },
              {
                title: "Frame",
                items: [
                  "의도하지 않은 Black Bar나 Crop이 없는가."
                ]
              },
              {
                title: "Audio",
                items: [
                  "Voice가 명확하게 들리는가."
                ]
              },
              {
                title: "Caption",
                items: [
                  "오탈자와 Sync 오류가 없는가."
                ]
              },
              {
                title: "Safe Area",
                items: [
                  "중요 정보가 플랫폼 UI에 가려지지 않는가."
                ]
              },
              {
                title: "Ending",
                items: [
                  "영상 끝에 불필요한 빈 Frame이 남지 않았는가."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "60. 제작 후 분석",
            children: [
              {
                title: "초기 반응",
                items: [
                  "첫 구간에서 시청이 유지되는지 확인한다."
                ]
              },
              {
                title: "Retention",
                items: [
                  "어느 지점에서 시청자가 많이 이탈하는지 확인한다."
                ]
              },
              {
                title: "Completion",
                items: [
                  "영상 끝까지 도달하는 비율을 확인한다."
                ]
              },
              {
                title: "Engagement",
                items: [
                  "댓글.",
                  "공유.",
                  "저장 등 영상 목적과 관련된 행동을 확인한다."
                ]
              },
              {
                title: "학습",
                items: [
                  "다음 영상의 Hook, Duration, Scene 구조를 수정하는 근거로 활용한다."
                ]
              }
            ]
          },

          {
            type: "checklist",
            title: "숏폼 기획 체크리스트",
            items: [
              "영상의 Core Message가 하나로 정의되어 있는가?",
              "Audience가 명확한가?",
              "영상의 목표 Duration이 정해져 있는가?",
              "첫 1~3초에 무엇을 보여줄지 정했는가?",
              "Hook과 본문의 내용이 실제로 연결되는가?",
              "시청자가 얻는 Payoff가 명확한가?",
              "불필요한 배경 설명을 제거했는가?",
              "Scene별 역할이 구분되어 있는가?",
              "각 Scene에 필요한 Source가 정의되어 있는가?",
              "CTA가 영상 목적과 연결되는가?"
            ]
          },

          {
            type: "checklist",
            title: "숏폼 편집 체크리스트",
            items: [
              "첫 Frame이 즉시 이해되는가?",
              "불필요한 Pause가 제거되어 있는가?",
              "같은 화면이 의미 없이 오래 유지되지 않는가?",
              "A-roll과 B-roll의 역할이 명확한가?",
              "B-roll이 실제 설명 내용과 연결되는가?",
              "Jump Cut이 지나치게 어색하지 않은가?",
              "Punch-in을 과도하게 반복하지 않았는가?",
              "Pattern Interrupt가 필요한 위치에 존재하는가?",
              "영상 전체의 속도에 변화가 있는가?",
              "중요한 결과에는 충분한 시청 시간을 제공하는가?"
            ]
          },

          {
            type: "checklist",
            title: "Caption 체크리스트",
            items: [
              "음성과 자막이 Sync되는가?",
              "한 화면의 자막이 지나치게 길지 않은가?",
              "의미 단위로 Chunking되어 있는가?",
              "핵심 Keyword가 구분되는가?",
              "모든 단어를 불필요하게 강조하지 않았는가?",
              "얼굴과 제품을 가리지 않는가?",
              "플랫폼 UI와 충돌하지 않는가?",
              "맞춤법과 띄어쓰기가 정확한가?",
              "숫자와 고유명사가 정확한가?",
              "Text Animation이 읽기를 방해하지 않는가?"
            ]
          },

          {
            type: "checklist",
            title: "최종 QC 체크리스트",
            items: [
              "9:16 Frame이 올바르게 적용되어 있는가?",
              "첫 화면에서 영상의 주제를 추론할 수 있는가?",
              "Hook에서 약속한 내용을 영상에서 실제 제공하는가?",
              "정보가 반복되지 않는가?",
              "영상 중간에 의미 없는 정체 구간이 없는가?",
              "음악보다 Voice가 명확하게 들리는가?",
              "SFX가 지나치게 많지 않은가?",
              "Brand Color와 Font가 일관되는가?",
              "AI로 생성한 정보와 Source에 오류가 없는가?",
              "CTA가 명확한가?",
              "영상 마지막에 불필요한 여백이 없는가?",
              "실제 스마트폰 크기로 보았을 때 Text를 읽을 수 있는가?"
            ]
          },

          {
            type: "case",
            title: "실습 1 — 15초 정보형 숏츠",
            children: [
              {
                title: "조건",
                items: [
                  "9:16.",
                  "15초.",
                  "하나의 Tip.",
                  "Talking Head + Caption."
                ]
              },
              {
                title: "0~2초",
                items: [
                  "Question 또는 Result Hook."
                ]
              },
              {
                title: "2~5초",
                items: [
                  "문제 설명."
                ]
              },
              {
                title: "5~12초",
                items: [
                  "핵심 해결 방법."
                ]
              },
              {
                title: "12~15초",
                items: [
                  "결론과 CTA."
                ]
              },
              {
                title: "편집",
                items: [
                  "Jump Cut.",
                  "Punch-in.",
                  "Keyword Caption.",
                  "B-roll 1~2개를 적용한다."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "실습 2 — 30초 제품 숏폼",
            children: [
              {
                title: "Scene 1",
                items: [
                  "제품 결과 또는 Benefit을 먼저 보여준다."
                ]
              },
              {
                title: "Scene 2",
                items: [
                  "사용자가 경험하는 문제를 보여준다."
                ]
              },
              {
                title: "Scene 3",
                items: [
                  "제품을 Solution으로 등장시킨다."
                ]
              },
              {
                title: "Scene 4",
                items: [
                  "Detail과 사용 방법을 B-roll로 보여준다."
                ]
              },
              {
                title: "Scene 5",
                items: [
                  "최종 결과와 CTA를 제공한다."
                ]
              },
              {
                title: "Source",
                items: [
                  "Product Cut.",
                  "Usage Shot.",
                  "Detail Shot.",
                  "AI Background.",
                  "Graphic."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "실습 3 — Talking Head 영상 편집",
            children: [
              {
                title: "원본",
                items: [
                  "약 2분의 Camera Talking 영상."
                ]
              },
              {
                title: "1단계",
                items: [
                  "핵심 메시지 하나를 선택한다."
                ]
              },
              {
                title: "2단계",
                items: [
                  "30초 이내 Script 구조로 재편집한다."
                ]
              },
              {
                title: "3단계",
                items: [
                  "Pause와 반복 발화를 제거한다."
                ]
              },
              {
                title: "4단계",
                items: [
                  "Jump Cut과 Punch-in을 적용한다."
                ]
              },
              {
                title: "5단계",
                items: [
                  "설명이 필요한 지점에 B-roll을 추가한다."
                ]
              },
              {
                title: "6단계",
                items: [
                  "Caption과 Keyword Highlight를 적용한다."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "실습 4 — AI를 이용한 숏폼 기획",
            children: [
              {
                title: "Input",
                items: [
                  "Audience.",
                  "Topic.",
                  "Platform.",
                  "Duration.",
                  "Core Message."
                ]
              },
              {
                title: "AI Generation",
                items: [
                  "10개의 Hook.",
                  "3개의 Script 구조.",
                  "Scene Idea.",
                  "B-roll Idea를 생성한다."
                ]
              },
              {
                title: "Evaluation",
                items: [
                  "중복.",
                  "과장.",
                  "실현 가능성.",
                  "본문 연결성을 평가한다."
                ]
              },
              {
                title: "Refinement",
                items: [
                  "선택한 Hook과 Script를 실제 촬영 조건에 맞게 수정한다."
                ]
              },
              {
                title: "결과",
                items: [
                  "AI 생성 결과를 그대로 사용하는 것과 사람이 선택·수정한 결과의 차이를 비교한다."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "실습 5 — Long-form에서 Shorts 추출",
            children: [
              {
                title: "원본",
                items: [
                  "5~10분 길이의 설명 또는 Interview 영상."
                ]
              },
              {
                title: "분석",
                items: [
                  "독립적으로 사용할 수 있는 핵심 주장과 질문을 찾는다."
                ]
              },
              {
                title: "Short 1",
                items: [
                  "핵심 질문 하나."
                ]
              },
              {
                title: "Short 2",
                items: [
                  "흥미로운 사례 하나."
                ]
              },
              {
                title: "Short 3",
                items: [
                  "실용적인 Tip 하나."
                ]
              },
              {
                title: "재구성",
                items: [
                  "각 Short에 새로운 Hook.",
                  "Caption.",
                  "B-roll.",
                  "Closing을 추가한다."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "실습 6 — 동일 콘텐츠 3가지 Hook 제작",
            children: [
              {
                title: "Version A",
                items: [
                  "Question Hook."
                ]
              },
              {
                title: "Version B",
                items: [
                  "Result Hook."
                ]
              },
              {
                title: "Version C",
                items: [
                  "Contrast Hook."
                ]
              },
              {
                title: "공통 Body",
                items: [
                  "본문 내용은 동일하게 유지한다."
                ]
              },
              {
                title: "비교",
                items: [
                  "첫 Frame.",
                  "첫 문장.",
                  "시청자가 예상하는 다음 정보가 어떻게 달라지는지 분석한다."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "실습 7 — 숏폼 Series 제작",
            children: [
              {
                title: "Theme",
                items: [
                  "하나의 큰 주제를 선택한다."
                ]
              },
              {
                title: "Episode",
                items: [
                  "5개의 독립적인 세부 주제로 분해한다."
                ]
              },
              {
                title: "Visual System",
                items: [
                  "공통 Caption.",
                  "Color.",
                  "Font.",
                  "Cover 규칙을 만든다."
                ]
              },
              {
                title: "Batch",
                items: [
                  "5개 Script를 먼저 완성한 뒤 촬영을 한 번에 진행한다."
                ]
              },
              {
                title: "Edit",
                items: [
                  "공통 편집 규칙을 이용해 Series 전체를 제작한다."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "4-2 전체 프로세스 — SNS 숏츠 영상 제작",
            children: [
              {
                title: "1. Define Audience",
                items: [
                  "누구를 대상으로 하는 콘텐츠인지 정의한다."
                ]
              },
              {
                title: "2. Define Goal",
                items: [
                  "정보 전달, 홍보, 교육, 참여 등 영상의 목적을 결정한다."
                ]
              },
              {
                title: "3. Select Topic",
                items: [
                  "영상 하나에서 다룰 수 있는 좁은 주제를 선택한다."
                ]
              },
              {
                title: "4. Core Message",
                items: [
                  "시청자가 기억해야 할 하나의 핵심 메시지를 정의한다."
                ]
              },
              {
                title: "5. Duration",
                items: [
                  "15초, 30초, 60초 등 목표 길이를 결정한다."
                ]
              },
              {
                title: "6. Hook Generation",
                items: [
                  "Question, Result, Problem, Contrast 등 여러 Hook을 생성한다."
                ]
              },
              {
                title: "7. Hook Selection",
                items: [
                  "본문과 가장 강하게 연결되는 Hook을 선택한다."
                ]
              },
              {
                title: "8. Script",
                items: [
                  "Hook → Body → Payoff → CTA 구조로 Script를 작성한다."
                ]
              },
              {
                title: "9. Compression",
                items: [
                  "중복, 불필요한 Context, 낮은 우선순위 정보를 제거한다."
                ]
              },
              {
                title: "10. Timing Test",
                items: [
                  "실제 발화하여 목표 Duration 안에 들어오는지 확인한다."
                ]
              },
              {
                title: "11. Scene Breakdown",
                items: [
                  "Script를 의미 단위 Scene으로 분해한다."
                ]
              },
              {
                title: "12. Shot List",
                items: [
                  "각 Scene에 필요한 Shot을 정의한다."
                ]
              },
              {
                title: "13. Source Planning",
                items: [
                  "A-roll, B-roll, Image, Graphic, AI Source를 결정한다."
                ]
              },
              {
                title: "14. Shooting",
                items: [
                  "세로 Frame과 Caption 공간을 고려하여 촬영한다."
                ]
              },
              {
                title: "15. Source Ingest",
                items: [
                  "촬영 및 외부 Source를 프로젝트에 정리한다."
                ]
              },
              {
                title: "16. Rough Cut",
                items: [
                  "내용 중심으로 필요한 발화와 Shot을 우선 연결한다."
                ]
              },
              {
                title: "17. Remove Dead Time",
                items: [
                  "불필요한 Pause, 반복, 실수를 제거한다."
                ]
              },
              {
                title: "18. Visual Rhythm",
                items: [
                  "Shot Length와 화면 변화의 속도를 조절한다."
                ]
              },
              {
                title: "19. B-roll",
                items: [
                  "설명을 시각적으로 보완하는 Source를 삽입한다."
                ]
              },
              {
                title: "20. Pattern Interrupt",
                items: [
                  "필요한 지점에 화면, Text, Graphic, Motion 변화를 추가한다."
                ]
              },
              {
                title: "21. Caption",
                items: [
                  "음성을 Text로 변환하고 오류를 수정한다."
                ]
              },
              {
                title: "22. Caption Chunking",
                items: [
                  "자막을 실제 읽기 좋은 의미 단위로 나눈다."
                ]
              },
              {
                title: "23. Keyword Highlight",
                items: [
                  "핵심 단어와 숫자를 시각적으로 강조한다."
                ]
              },
              {
                title: "24. Graphic",
                items: [
                  "Arrow, Label, Number 등의 정보 Graphic을 추가한다."
                ]
              },
              {
                title: "25. Music",
                items: [
                  "콘텐츠의 분위기와 편집 Rhythm에 맞는 음악을 적용한다."
                ]
              },
              {
                title: "26. SFX",
                items: [
                  "중요한 화면 변화와 정보 등장에 필요한 Sound를 적용한다."
                ]
              },
              {
                title: "27. Audio Balance",
                items: [
                  "Voice가 명확하게 들리도록 Music과 SFX의 Level을 조절한다."
                ]
              },
              {
                title: "28. Safe Area QC",
                items: [
                  "Caption, Logo, Subject가 플랫폼 UI와 충돌하지 않는지 확인한다."
                ]
              },
              {
                title: "29. Content QC",
                items: [
                  "Hook과 Payoff가 연결되는지 확인한다."
                ]
              },
              {
                title: "30. Retention QC",
                items: [
                  "반복 설명과 시각적 정체 구간을 찾아 수정한다."
                ]
              },
              {
                title: "31. Technical QC",
                items: [
                  "Resolution, Frame, Audio, Caption Sync를 확인한다."
                ]
              },
              {
                title: "32. Mobile Preview",
                items: [
                  "실제 스마트폰 크기에서 Text와 Subject를 확인한다."
                ]
              },
              {
                title: "33. Export",
                items: [
                  "플랫폼에 적합한 세로 영상으로 출력한다."
                ]
              },
              {
                title: "34. Publish",
                items: [
                  "Cover, Caption, 게시 정보를 구성하여 업로드한다."
                ]
              },
              {
                title: "35. Analyze",
                items: [
                  "초기 시청 유지, 이탈 구간, 완료, Engagement를 확인한다."
                ]
              },
              {
                title: "36. Iterate",
                items: [
                  "분석 결과를 다음 영상의 Hook, Script, Duration, 편집 구조에 반영한다."
                ]
              },
              {
                title: "최종 핵심",
                items: [
                  "숏폼은 일반 영상을 짧게 줄이는 것이 아니라 짧은 소비 환경을 기준으로 정보 구조를 다시 설계하는 콘텐츠 형식이다.",
                  "첫 1~3초의 핵심은 자극 자체가 아니라 시청자가 다음 정보를 확인해야 할 이유를 만드는 것이다.",
                  "Hook은 본문과 분리된 장치가 아니며 영상에서 실제로 제공할 Payoff와 연결되어야 한다.",
                  "정보 압축은 말을 빠르게 하는 것이 아니라 중요도가 낮은 정보를 제거하고 핵심 메시지의 밀도를 높이는 작업이다.",
                  "하나의 영상에서는 하나의 Core Message를 중심으로 Supporting Information을 배치하는 것이 기본 구조다.",
                  "A-roll은 핵심 정보를 전달하고 B-roll은 그 정보를 시각적으로 설명하거나 증명하는 역할을 수행한다.",
                  "Jump Cut, Punch-in, Pattern Interrupt는 시각적 자극을 추가하는 효과가 아니라 시간과 Attention을 제어하는 편집 장치다.",
                  "Caption은 음성을 그대로 옮기는 Text가 아니라 정보의 구조와 중요도를 화면에 다시 표현하는 Graphic 요소다.",
                  "숏폼의 빠른 Rhythm은 모든 Shot을 짧게 만드는 것이 아니라 중요한 구간과 빠르게 지나갈 구간의 시간 차이를 설계하는 것이다.",
                  "AI는 Topic, Hook, Script, Scene Idea, Caption 생성 속도를 높일 수 있지만 무엇을 남기고 제거할지는 제작자가 판단해야 한다.",
                  "긴 콘텐츠를 숏폼으로 재활용할 때는 단순한 구간 추출이 아니라 독립적인 Hook, Context, Payoff를 가진 새로운 콘텐츠로 재구성해야 한다.",
                  "최종적으로 숏폼 제작은 Attention → Retention → Payoff → Action의 흐름을 영상의 Script, Visual, Motion, Text, Audio와 연결하는 작업이다."
                ]
              }
            ]
          }
        ]
      },  

      {
        name: "CapCut AI 영상 편집 실습",
        hours: 28,
        content: [
          {
            type: "goals",
            title: "학습 목표",
            items: [
              "CapCut의 편집 환경과 AI 기반 영상 편집 기능의 역할을 이해할 수 있다.",
              "영상 프로젝트의 해상도, 화면비, Frame Rate 등 기본 작업 환경을 설정할 수 있다.",
              "Media, Timeline, Track, Clip의 관계를 이해하고 영상 Source를 구조적으로 배치할 수 있다.",
              "영상 Source를 Import하고 영상·이미지·음성·음악·Graphic Asset을 구분하여 관리할 수 있다.",
              "Split, Trim, Ripple Delete 등 기본 편집 기능을 이용하여 영상의 시간 구조를 구성할 수 있다.",
              "A-roll을 중심으로 Rough Cut을 제작하고 불필요한 발화와 정체 구간을 제거할 수 있다.",
              "B-roll을 이용하여 설명을 시각적으로 보완하고 화면 변화를 만들 수 있다.",
              "AI 자동 자막 기능을 활용하고 생성 결과를 검수·수정할 수 있다.",
              "자막을 의미 단위로 분리하고 Keyword를 시각적으로 강조할 수 있다.",
              "Text Template과 Animation을 목적에 맞게 수정하여 사용할 수 있다.",
              "AI 음성 및 Text-to-Speech 계열 기능을 영상 제작 Workflow에 활용할 수 있다.",
              "음성 보정 및 Noise Reduction 계열 기능을 활용하여 대사의 명료도를 개선할 수 있다.",
              "AI 기반 배경 제거와 인물 분리 기능을 이용하여 Layer 기반 화면을 구성할 수 있다.",
              "AI 이미지·AI 영상·Stock·촬영 Source를 하나의 Timeline에서 통합할 수 있다.",
              "Speed Control과 Speed Curve를 이용하여 영상의 시간감을 조절할 수 있다.",
              "Keyframe을 이용하여 Position, Scale, Opacity 등의 변화를 직접 제어할 수 있다.",
              "Mask와 Layer를 이용하여 복합적인 화면 구성을 제작할 수 있다.",
              "Transition, Effect, Filter를 장식이 아니라 장면의 기능에 따라 선택할 수 있다.",
              "Voice, Music, SFX를 분리하여 영상의 Audio Hierarchy를 구성할 수 있다.",
              "AI 자동화 기능의 결과를 검수하고 수동 편집과 결합하여 최종 영상을 완성할 수 있다.",
              "기획 → Source 정리 → Rough Cut → AI Processing → Fine Cut → Caption → Motion → Audio → QC → Export의 전체 편집 Pipeline을 수행할 수 있다."
            ]
          },

          {
            type: "concept",
            title: "1. CapCut의 역할",
            children: [
              {
                title: "영상 편집 도구",
                items: [
                  "여러 Source를 Timeline 위에 배치하여 하나의 시간 구조로 구성한다.",
                  "영상, 이미지, Text, Graphic, Voice, Music, SFX를 하나의 프로젝트에서 결합한다."
                ]
              },
              {
                title: "AI 편집 도구",
                items: [
                  "자동 자막.",
                  "음성 처리.",
                  "배경 제거.",
                  "Text-to-Speech.",
                  "자동 편집 보조 등 반복 작업의 일부를 자동화할 수 있다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "CapCut AI를 자동 영상 생성 도구로만 이해하지 않는다.",
                  "기존 편집 작업에서 사람이 반복적으로 수행하던 일부 작업을 AI가 보조하는 구조로 이해한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "2. 영상 편집의 기본 구조",
            children: [
              {
                title: "Input",
                items: [
                  "촬영 영상.",
                  "AI 영상.",
                  "이미지.",
                  "Graphic.",
                  "Voice.",
                  "Music.",
                  "SFX."
                ]
              },
              {
                title: "Timeline",
                items: [
                  "각 Source를 시간 순서와 Layer 구조로 배치한다."
                ]
              },
              {
                title: "Processing",
                items: [
                  "Cut.",
                  "Trim.",
                  "Speed.",
                  "Color.",
                  "Caption.",
                  "Motion.",
                  "Audio 등을 조정한다."
                ]
              },
              {
                title: "Output",
                items: [
                  "여러 Source와 편집 정보를 하나의 최종 영상 파일로 출력한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "3. 프로젝트 작업 환경",
            children: [
              {
                title: "Resolution",
                items: [
                  "영상의 출력 해상도를 결정한다.",
                  "1920×1080.",
                  "1080×1920 등 목적에 맞는 크기를 선택한다."
                ]
              },
              {
                title: "Aspect Ratio",
                items: [
                  "16:9.",
                  "9:16.",
                  "1:1 등 최종 플랫폼을 기준으로 설정한다."
                ]
              },
              {
                title: "Frame Rate",
                items: [
                  "초당 표시되는 Frame 수.",
                  "Source와 최종 영상의 목적을 고려하여 설정한다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "편집 완료 후 출력 단계에서만 영상 규격을 생각하지 않는다.",
                  "프로젝트 시작 단계에서 최종 사용 환경을 정의한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "4. Media 관리",
            children: [
              {
                title: "Video",
                items: [
                  "촬영 원본.",
                  "AI 생성 영상.",
                  "Stock Video."
                ]
              },
              {
                title: "Image",
                items: [
                  "사진.",
                  "AI 이미지.",
                  "Graphic Source."
                ]
              },
              {
                title: "Audio",
                items: [
                  "Voice.",
                  "Music.",
                  "SFX."
                ]
              },
              {
                title: "관리 기준",
                items: [
                  "Source의 역할을 구분하고 편집 전에 필요한 Asset을 확인한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "5. Timeline",
            children: [
              {
                title: "Horizontal Axis",
                items: [
                  "영상의 시간 흐름을 나타낸다."
                ]
              },
              {
                title: "Vertical Axis",
                items: [
                  "영상과 Graphic의 Layer 관계를 나타낸다."
                ]
              },
              {
                title: "Playhead",
                items: [
                  "현재 확인하거나 편집하는 시간 위치."
                ]
              },
              {
                title: "Clip",
                items: [
                  "Timeline에 배치된 개별 영상, 이미지, Audio 등의 단위."
                ]
              },
              {
                title: "Track",
                items: [
                  "Clip이 배치되는 수평 작업 영역."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "6. Track과 Layer",
            children: [
              {
                title: "Main Video",
                items: [
                  "영상의 기본 화면을 구성한다."
                ]
              },
              {
                title: "Overlay",
                items: [
                  "Main Video 위에 추가 영상이나 이미지를 배치한다."
                ]
              },
              {
                title: "Text",
                items: [
                  "Caption.",
                  "Headline.",
                  "Label 등을 배치한다."
                ]
              },
              {
                title: "Audio",
                items: [
                  "Voice.",
                  "Music.",
                  "SFX를 시간에 따라 배치한다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "Timeline은 단순한 영상 순서가 아니라 시간과 Layer를 동시에 표현하는 구조다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "7. Clip 편집",
            children: [
              {
                title: "Split",
                items: [
                  "하나의 Clip을 특정 시간 위치에서 둘 이상의 Clip으로 분리한다."
                ]
              },
              {
                title: "Trim",
                items: [
                  "Clip의 시작점과 끝점을 조절한다."
                ]
              },
              {
                title: "Delete",
                items: [
                  "필요하지 않은 Clip을 제거한다."
                ]
              },
              {
                title: "Move",
                items: [
                  "Clip의 시간 위치를 변경한다."
                ]
              },
              {
                title: "Duplicate",
                items: [
                  "동일한 Clip을 복제하여 재사용한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "8. Rough Cut",
            children: [
              {
                title: "목적",
                items: [
                  "영상의 기본 내용과 순서를 먼저 완성한다."
                ]
              },
              {
                title: "우선 작업",
                items: [
                  "필요한 발화 선택.",
                  "실수 제거.",
                  "중복 제거.",
                  "불필요한 구간 제거.",
                  "Scene 순서 구성."
                ]
              },
              {
                title: "후순위 작업",
                items: [
                  "Effect.",
                  "Animation.",
                  "세밀한 Color.",
                  "복잡한 Transition."
                ]
              },
              {
                title: "핵심",
                items: [
                  "영상의 내용 구조가 완성되기 전에 시각 효과부터 만드는 것은 편집 효율을 떨어뜨릴 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "9. Fine Cut",
            children: [
              {
                title: "Rough Cut 이후",
                items: [
                  "Cut의 정확한 위치와 Timing을 세밀하게 조절한다."
                ]
              },
              {
                title: "Pause",
                items: [
                  "필요한 호흡은 유지하고 불필요한 정체만 제거한다."
                ]
              },
              {
                title: "Reaction",
                items: [
                  "인물의 표정과 행동이 자연스럽게 이어지는 지점을 선택한다."
                ]
              },
              {
                title: "Audio",
                items: [
                  "문장 시작과 종료가 잘리지 않도록 확인한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "10. Jump Cut",
            children: [
              {
                title: "구조",
                items: [
                  "동일한 Shot에서 중간 시간을 제거하여 앞뒤 구간을 직접 연결한다."
                ]
              },
              {
                title: "활용",
                items: [
                  "말 사이의 Pause 제거.",
                  "실수 제거.",
                  "반복 설명 제거."
                ]
              },
              {
                title: "시각적 문제",
                items: [
                  "인물의 위치가 순간적으로 이동하는 것처럼 보일 수 있다."
                ]
              },
              {
                title: "보완",
                items: [
                  "B-roll.",
                  "Punch-in.",
                  "Graphic Overlay.",
                  "다른 Camera Angle 등을 사용할 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "11. B-roll 편집",
            children: [
              {
                title: "Explanation",
                items: [
                  "Voice에서 설명하는 내용을 실제 화면으로 보여준다."
                ]
              },
              {
                title: "Evidence",
                items: [
                  "주장이나 설명을 시각적으로 증명한다."
                ]
              },
              {
                title: "Cover",
                items: [
                  "Jump Cut이나 화면 단절을 가릴 수 있다."
                ]
              },
              {
                title: "Rhythm",
                items: [
                  "동일한 화면이 오래 유지되는 것을 방지한다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "B-roll은 화면을 화려하게 만드는 장식이 아니라 정보 전달 Source다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "12. AI 자동 자막",
            children: [
              {
                title: "Speech Recognition",
                items: [
                  "영상의 음성을 분석하여 Text로 변환한다."
                ]
              },
              {
                title: "Timing",
                items: [
                  "인식된 Text를 음성의 시간 위치에 맞춰 배치한다."
                ]
              },
              {
                title: "장점",
                items: [
                  "긴 영상의 Caption 제작 시간을 크게 줄일 수 있다."
                ]
              },
              {
                title: "한계",
                items: [
                  "고유명사.",
                  "전문용어.",
                  "외국어.",
                  "숫자.",
                  "발음이 불명확한 부분에서 오류가 발생할 수 있다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "자동 자막은 완성된 결과가 아니라 Caption Editing의 초안으로 사용한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "13. 자동 자막 검수",
            children: [
              {
                title: "Text",
                items: [
                  "잘못 인식된 단어를 수정한다."
                ]
              },
              {
                title: "Spacing",
                items: [
                  "띄어쓰기와 문장 구조를 확인한다."
                ]
              },
              {
                title: "Proper Noun",
                items: [
                  "사람 이름.",
                  "브랜드.",
                  "제품명.",
                  "전문용어를 확인한다."
                ]
              },
              {
                title: "Number",
                items: [
                  "날짜.",
                  "금액.",
                  "단위.",
                  "수치를 확인한다."
                ]
              },
              {
                title: "Sync",
                items: [
                  "Text의 등장과 실제 발화 Timing이 일치하는지 확인한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "14. Caption Chunking",
            children: [
              {
                title: "자동 결과",
                items: [
                  "AI가 생성한 Caption 분할 위치가 실제 의미 단위와 일치하지 않을 수 있다."
                ]
              },
              {
                title: "Meaning Unit",
                items: [
                  "문장을 실제 읽기 좋은 의미 단위로 나눈다."
                ]
              },
              {
                title: "Length",
                items: [
                  "한 화면에 지나치게 많은 Text가 표시되지 않도록 조절한다."
                ]
              },
              {
                title: "Rhythm",
                items: [
                  "발화와 Caption 변화의 속도를 연결한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "15. Caption Styling",
            children: [
              {
                title: "Font",
                items: [
                  "영상의 Tone과 가독성을 고려한다."
                ]
              },
              {
                title: "Size",
                items: [
                  "최종 시청 환경에서 실제 읽을 수 있는 크기로 설정한다."
                ]
              },
              {
                title: "Contrast",
                items: [
                  "배경과 Text를 명확하게 분리한다."
                ]
              },
              {
                title: "Position",
                items: [
                  "얼굴.",
                  "제품.",
                  "Platform UI와 충돌하지 않도록 배치한다."
                ]
              },
              {
                title: "Consistency",
                items: [
                  "영상 전체에서 Caption 규칙을 유지한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "16. Keyword Caption",
            children: [
              {
                title: "Keyword",
                items: [
                  "핵심 개념.",
                  "숫자.",
                  "결과.",
                  "제품명 등을 선택한다."
                ]
              },
              {
                title: "Highlight",
                items: [
                  "Size.",
                  "Weight.",
                  "Background.",
                  "Animation 등을 이용해 차이를 만든다."
                ]
              },
              {
                title: "주의",
                items: [
                  "모든 단어에 효과를 적용하지 않는다.",
                  "실제 정보 중요도에 따라 강조 수준을 다르게 한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "17. Text Template",
            children: [
              {
                title: "장점",
                items: [
                  "Typography와 Animation이 미리 구성되어 있어 빠르게 사용할 수 있다."
                ]
              },
              {
                title: "문제",
                items: [
                  "영상의 Brand와 맞지 않을 수 있다.",
                  "Text 길이가 Template 구조와 맞지 않을 수 있다."
                ]
              },
              {
                title: "수정",
                items: [
                  "Font.",
                  "Size.",
                  "Color.",
                  "Position.",
                  "Animation을 콘텐츠에 맞게 변경한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "18. Text-to-Speech",
            children: [
              {
                title: "Input",
                items: [
                  "Script Text."
                ]
              },
              {
                title: "Processing",
                items: [
                  "Text를 AI Voice로 변환한다."
                ]
              },
              {
                title: "활용",
                items: [
                  "Narration.",
                  "설명 영상.",
                  "제품 소개.",
                  "정보형 콘텐츠."
                ]
              },
              {
                title: "검수",
                items: [
                  "고유명사.",
                  "영문.",
                  "숫자.",
                  "전문용어의 발음을 확인한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "19. AI Voice 편집",
            children: [
              {
                title: "Voice Selection",
                items: [
                  "콘텐츠의 Audience와 Tone에 맞는 Voice를 선택한다."
                ]
              },
              {
                title: "Pacing",
                items: [
                  "영상의 정보량과 Duration에 맞게 발화 속도를 조절한다."
                ]
              },
              {
                title: "Pause",
                items: [
                  "문장 사이의 호흡과 강조 구간을 확인한다."
                ]
              },
              {
                title: "Naturalness",
                items: [
                  "지나치게 일정한 발화가 영상의 분위기와 맞는지 확인한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "20. Voice Enhancement",
            children: [
              {
                title: "Noise",
                items: [
                  "환경 Noise를 줄여 Voice의 명료도를 높인다."
                ]
              },
              {
                title: "Level",
                items: [
                  "구간마다 다른 Voice 크기를 가능한 한 안정적으로 만든다."
                ]
              },
              {
                title: "Clarity",
                items: [
                  "대사가 다른 Audio보다 명확하게 들리도록 조정한다."
                ]
              },
              {
                title: "주의",
                items: [
                  "Noise Reduction을 지나치게 적용하면 Voice가 인공적으로 변할 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "21. AI 배경 제거",
            children: [
              {
                title: "Segmentation",
                items: [
                  "AI가 인물이나 주요 피사체와 배경을 구분한다."
                ]
              },
              {
                title: "Result",
                items: [
                  "배경을 제거하고 피사체만 독립적으로 사용할 수 있다."
                ]
              },
              {
                title: "활용",
                items: [
                  "배경 교체.",
                  "Graphic Background.",
                  "다른 영상 위에 인물 배치.",
                  "Presentation Style Video."
                ]
              },
              {
                title: "검수",
                items: [
                  "머리카락.",
                  "손.",
                  "반투명 물체.",
                  "빠른 움직임 주변의 경계를 확인한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "22. 배경 교체",
            children: [
              {
                title: "Background Image",
                items: [
                  "정지 이미지를 새로운 배경으로 사용할 수 있다."
                ]
              },
              {
                title: "Background Video",
                items: [
                  "움직이는 영상을 배경으로 사용할 수 있다."
                ]
              },
              {
                title: "AI Background",
                items: [
                  "필요한 공간이나 분위기를 AI로 생성하여 사용할 수 있다."
                ]
              },
              {
                title: "Integration",
                items: [
                  "Foreground와 Background의 Lighting, Perspective, Color 차이를 확인한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "23. Layer 기반 화면 구성",
            children: [
              {
                title: "Background",
                items: [
                  "전체 공간과 분위기를 만든다."
                ]
              },
              {
                title: "Subject",
                items: [
                  "인물이나 제품 등 주요 피사체."
                ]
              },
              {
                title: "Graphic",
                items: [
                  "정보를 설명하거나 강조한다."
                ]
              },
              {
                title: "Text",
                items: [
                  "Headline.",
                  "Caption.",
                  "Label."
                ]
              },
              {
                title: "Foreground",
                items: [
                  "필요한 경우 화면 앞쪽에 추가 요소를 배치하여 깊이를 만들 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "24. Position과 Scale",
            children: [
              {
                title: "Position",
                items: [
                  "화면에서 Clip의 위치를 조절한다."
                ]
              },
              {
                title: "Scale",
                items: [
                  "Clip의 표시 크기를 조절한다."
                ]
              },
              {
                title: "Rotation",
                items: [
                  "필요한 경우 Clip의 회전을 조절한다."
                ]
              },
              {
                title: "Opacity",
                items: [
                  "Clip의 투명도를 조절하여 Layer 관계를 만들 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "25. Keyframe",
            children: [
              {
                title: "정의",
                items: [
                  "특정 시간 위치에서 속성 값을 저장하는 기준점."
                ]
              },
              {
                title: "Start",
                items: [
                  "첫 번째 Keyframe에서 초기 상태를 지정한다."
                ]
              },
              {
                title: "End",
                items: [
                  "다음 Keyframe에서 변경된 상태를 지정한다."
                ]
              },
              {
                title: "Interpolation",
                items: [
                  "두 Keyframe 사이의 값이 시간에 따라 변화한다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "Animation Preset에 의존하지 않고 원하는 Motion을 직접 설계할 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "26. Position Keyframe",
            children: [
              {
                title: "Pan",
                items: [
                  "화면을 좌우 또는 상하로 이동시키는 Motion을 만들 수 있다."
                ]
              },
              {
                title: "Tracking",
                items: [
                  "피사체의 움직임을 따라 화면 위치를 조절할 수 있다."
                ]
              },
              {
                title: "Graphic",
                items: [
                  "화면 밖에서 Graphic이 들어오거나 나가는 움직임을 만들 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "27. Scale Keyframe",
            children: [
              {
                title: "Zoom In",
                items: [
                  "시간에 따라 Scale 값을 증가시킨다."
                ]
              },
              {
                title: "Zoom Out",
                items: [
                  "시간에 따라 Scale 값을 감소시킨다."
                ]
              },
              {
                title: "Emphasis",
                items: [
                  "중요한 순간에 피사체를 확대하여 시선을 집중시킬 수 있다."
                ]
              },
              {
                title: "Image Motion",
                items: [
                  "정지 이미지에 느린 Zoom을 적용하여 영상적 움직임을 만들 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "28. Opacity Keyframe",
            children: [
              {
                title: "Fade In",
                items: [
                  "Opacity 0에서 100으로 변화시킨다."
                ]
              },
              {
                title: "Fade Out",
                items: [
                  "Opacity 100에서 0으로 변화시킨다."
                ]
              },
              {
                title: "Overlay",
                items: [
                  "두 영상의 시각적 혼합 정도를 시간에 따라 조절할 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "29. Mask",
            children: [
              {
                title: "정의",
                items: [
                  "Clip에서 보여줄 영역과 숨길 영역을 지정하는 기능."
                ]
              },
              {
                title: "Shape",
                items: [
                  "Rectangle.",
                  "Circle.",
                  "Linear 등 목적에 맞는 형태를 사용할 수 있다."
                ]
              },
              {
                title: "Feather",
                items: [
                  "Mask 경계를 부드럽게 만든다."
                ]
              },
              {
                title: "활용",
                items: [
                  "Split Screen.",
                  "부분 합성.",
                  "Transition.",
                  "Before / After."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "30. Mask와 Keyframe 결합",
            children: [
              {
                title: "Reveal",
                items: [
                  "Mask 위치를 이동하여 새로운 화면을 점진적으로 보여줄 수 있다."
                ]
              },
              {
                title: "Wipe",
                items: [
                  "Mask가 이동하면서 두 장면이 교체되는 Transition을 만들 수 있다."
                ]
              },
              {
                title: "Tracking Style",
                items: [
                  "피사체의 움직임에 맞춰 Mask 위치를 변경할 수 있다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "Mask는 정적인 Crop 기능이 아니라 Keyframe과 결합하여 시간에 따라 변화하는 합성 영역으로 사용할 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "31. Speed Control",
            children: [
              {
                title: "Normal Speed",
                items: [
                  "Clip 전체의 재생 속도를 일정하게 변경한다."
                ]
              },
              {
                title: "Fast",
                items: [
                  "반복적이거나 과정 중심인 구간을 압축할 수 있다."
                ]
              },
              {
                title: "Slow",
                items: [
                  "중요한 순간이나 움직임을 강조할 수 있다."
                ]
              },
              {
                title: "주의",
                items: [
                  "Frame Rate가 낮은 Source를 지나치게 Slow Motion으로 만들면 움직임이 끊겨 보일 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "32. Speed Curve",
            children: [
              {
                title: "Variable Speed",
                items: [
                  "하나의 Clip 안에서 시간에 따라 재생 속도를 다르게 설정한다."
                ]
              },
              {
                title: "Speed Ramp",
                items: [
                  "Normal → Fast → Slow처럼 속도를 연속적으로 변화시킨다."
                ]
              },
              {
                title: "활용",
                items: [
                  "Action.",
                  "제품 Reveal.",
                  "Transition.",
                  "Dynamic B-roll."
                ]
              },
              {
                title: "핵심",
                items: [
                  "속도 변화는 영상의 시간감을 설계하는 편집 도구다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "33. Freeze Frame",
            children: [
              {
                title: "기능",
                items: [
                  "특정 Frame을 정지 이미지처럼 일정 시간 유지한다."
                ]
              },
              {
                title: "활용",
                items: [
                  "중요한 순간 강조.",
                  "Text 설명.",
                  "인물 소개.",
                  "제품 Detail 표시."
                ]
              },
              {
                title: "결합",
                items: [
                  "Graphic.",
                  "Arrow.",
                  "Label.",
                  "Sound Effect와 함께 사용할 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "34. Reverse",
            children: [
              {
                title: "기능",
                items: [
                  "Clip의 시간 방향을 반대로 재생한다."
                ]
              },
              {
                title: "활용",
                items: [
                  "반복 Motion.",
                  "Loop.",
                  "Visual Effect.",
                  "Transition."
                ]
              },
              {
                title: "주의",
                items: [
                  "사람의 자연스러운 행동이나 물리적 움직임에서는 비현실적인 결과가 쉽게 드러난다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "35. Transition",
            children: [
              {
                title: "Cut",
                items: [
                  "가장 기본적인 장면 전환."
                ]
              },
              {
                title: "Dissolve",
                items: [
                  "시간이나 분위기가 부드럽게 연결되는 느낌을 만들 수 있다."
                ]
              },
              {
                title: "Motion",
                items: [
                  "방향성과 움직임을 이용하여 장면을 연결한다."
                ]
              },
              {
                title: "Mask",
                items: [
                  "Mask Animation을 이용해 직접 Transition을 만들 수 있다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "모든 Cut 사이에 Transition Effect가 필요한 것은 아니다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "36. Video Effect",
            children: [
              {
                title: "Visual Effect",
                items: [
                  "영상 전체 또는 특정 영역에 시각적 변화를 추가한다."
                ]
              },
              {
                title: "활용",
                items: [
                  "강조.",
                  "분위기 변화.",
                  "장면 구분.",
                  "특정 콘텐츠 Style."
                ]
              },
              {
                title: "문제",
                items: [
                  "Effect가 정보보다 강하면 영상의 목적이 흐려질 수 있다."
                ]
              },
              {
                title: "원칙",
                items: [
                  "효과의 존재가 아니라 효과가 수행하는 기능을 기준으로 선택한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "37. Filter와 Color",
            children: [
              {
                title: "Exposure",
                items: [
                  "영상의 전체적인 밝기를 조절한다."
                ]
              },
              {
                title: "Contrast",
                items: [
                  "밝은 부분과 어두운 부분의 차이를 조절한다."
                ]
              },
              {
                title: "Saturation",
                items: [
                  "색의 강도를 조절한다."
                ]
              },
              {
                title: "Temperature",
                items: [
                  "영상의 따뜻하거나 차가운 느낌을 조절한다."
                ]
              },
              {
                title: "Filter",
                items: [
                  "여러 Color 속성이 조합된 Preset으로 빠르게 Look을 적용할 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "38. Color Correction과 Look",
            children: [
              {
                title: "Correction",
                items: [
                  "너무 어둡거나 밝은 Source.",
                  "White Balance.",
                  "Source 간 색 차이를 먼저 보정한다."
                ]
              },
              {
                title: "Look",
                items: [
                  "기본 보정 이후 영상의 의도된 분위기를 만든다."
                ]
              },
              {
                title: "순서",
                items: [
                  "기술적 문제 수정 → Source 간 통일 → Style 적용."
                ]
              },
              {
                title: "핵심",
                items: [
                  "Filter 적용과 Color Correction은 동일한 작업이 아니다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "39. AI Source와 실제 Source 혼합",
            children: [
              {
                title: "차이",
                items: [
                  "AI Source와 실제 촬영 Source는 Lighting, Detail, Texture, Motion 특성이 다를 수 있다."
                ]
              },
              {
                title: "Color",
                items: [
                  "Color Tone을 조절하여 시각적 차이를 줄인다."
                ]
              },
              {
                title: "Crop",
                items: [
                  "Composition 규칙을 맞춘다."
                ]
              },
              {
                title: "Motion",
                items: [
                  "AI 이미지에는 Keyframe Motion을 추가하여 영상 Source와 연결할 수 있다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "Source의 생성 방식보다 최종 영상 안에서 하나의 Visual System으로 보이는지가 중요하다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "40. Overlay",
            children: [
              {
                title: "Picture in Picture",
                items: [
                  "Main Video 위에 작은 영상이나 이미지를 추가한다."
                ]
              },
              {
                title: "Screen Recording",
                items: [
                  "설명자의 영상과 실제 화면을 동시에 보여줄 수 있다."
                ]
              },
              {
                title: "Graphic",
                items: [
                  "PNG.",
                  "Logo.",
                  "Diagram 등을 Layer로 추가할 수 있다."
                ]
              },
              {
                title: "Opacity",
                items: [
                  "투명도를 조절하여 여러 Source를 시각적으로 혼합할 수 있다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "41. Picture in Picture",
            children: [
              {
                title: "Main",
                items: [
                  "설명 대상 화면."
                ]
              },
              {
                title: "Secondary",
                items: [
                  "Presenter.",
                  "Reaction.",
                  "추가 설명 화면."
                ]
              },
              {
                title: "Layout",
                items: [
                  "두 화면의 중요도에 따라 크기와 위치를 다르게 설정한다."
                ]
              },
              {
                title: "주의",
                items: [
                  "Secondary 화면이 Main Content의 중요한 정보를 가리지 않도록 한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "42. Motion Tracking 계열 활용",
            children: [
              {
                title: "Target",
                items: [
                  "영상에서 움직이는 인물이나 물체를 기준으로 한다."
                ]
              },
              {
                title: "Follow",
                items: [
                  "Text, Sticker, Graphic 등을 움직임과 연결할 수 있다."
                ]
              },
              {
                title: "활용",
                items: [
                  "이름 Label.",
                  "제품 정보.",
                  "Blur.",
                  "Graphic 강조."
                ]
              },
              {
                title: "검수",
                items: [
                  "빠른 움직임.",
                  "가려짐.",
                  "화면 밖 이동에서 Tracking이 벗어나지 않는지 확인한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "43. 음악 편집",
            children: [
              {
                title: "Start",
                items: [
                  "영상의 시작과 음악의 의미 있는 구간을 연결한다."
                ]
              },
              {
                title: "Beat",
                items: [
                  "주요 화면 변화와 Beat를 연결할 수 있다."
                ]
              },
              {
                title: "Trim",
                items: [
                  "영상 길이에 맞게 음악의 필요한 구간을 선택한다."
                ]
              },
              {
                title: "Fade",
                items: [
                  "음악의 시작과 끝을 자연스럽게 조절한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "44. Voice, Music, SFX Hierarchy",
            children: [
              {
                title: "Voice",
                items: [
                  "정보 전달형 영상에서는 가장 높은 우선순위를 가진다."
                ]
              },
              {
                title: "Music",
                items: [
                  "영상의 분위기와 Rhythm을 만든다."
                ]
              },
              {
                title: "SFX",
                items: [
                  "특정 Motion, Cut, Graphic, Action을 강조한다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "모든 Audio를 크게 만드는 것이 아니라 역할에 따라 상대적인 Level을 설정한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "45. Audio Ducking 개념",
            children: [
              {
                title: "Voice Active",
                items: [
                  "Voice가 나오는 구간에서 Background Music의 Level을 낮춘다."
                ]
              },
              {
                title: "Voice Pause",
                items: [
                  "Voice가 없는 구간에서 Music을 다시 높일 수 있다."
                ]
              },
              {
                title: "목적",
                items: [
                  "Narration의 명료도를 유지하면서 음악의 존재감을 확보한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "46. Sound Effect 배치",
            children: [
              {
                title: "Impact",
                items: [
                  "중요 Text나 결과 등장."
                ]
              },
              {
                title: "Whoosh",
                items: [
                  "빠른 이동이나 Transition."
                ]
              },
              {
                title: "Click",
                items: [
                  "UI 조작이나 Graphic 등장."
                ]
              },
              {
                title: "Ambient",
                items: [
                  "공간의 현실감을 추가한다."
                ]
              },
              {
                title: "주의",
                items: [
                  "화면 변화마다 기계적으로 SFX를 추가하지 않는다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "47. AI 자동화와 수동 편집의 관계",
            children: [
              {
                title: "AI가 잘하는 영역",
                items: [
                  "반복 작업.",
                  "초기 분석.",
                  "Speech Recognition.",
                  "Segmentation.",
                  "초안 생성."
                ]
              },
              {
                title: "사람이 판단해야 하는 영역",
                items: [
                  "어떤 내용을 남길 것인가.",
                  "어떤 Timing이 적절한가.",
                  "어떤 Source가 메시지를 가장 잘 설명하는가.",
                  "어떤 오류가 중요한가."
                ]
              },
              {
                title: "핵심",
                items: [
                  "AI 기능을 많이 사용하는 것이 좋은 편집을 의미하지 않는다.",
                  "자동화가 유리한 작업과 직접 제어해야 하는 작업을 구분하는 것이 중요하다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "48. AI 자동 편집 결과 분석",
            children: [
              {
                title: "Selection",
                items: [
                  "AI가 필요한 구간을 제대로 선택했는지 확인한다."
                ]
              },
              {
                title: "Cut",
                items: [
                  "문장의 의미가 잘리거나 필요한 Pause가 제거되지 않았는지 확인한다."
                ]
              },
              {
                title: "Caption",
                items: [
                  "Text와 Timing이 정확한지 확인한다."
                ]
              },
              {
                title: "Effect",
                items: [
                  "자동 적용된 Motion과 Effect가 콘텐츠 목적에 맞는지 확인한다."
                ]
              },
              {
                title: "Source",
                items: [
                  "자동 선택된 B-roll이나 Graphic이 실제 내용과 관련 있는지 확인한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "49. 편집 우선순위",
            children: [
              {
                title: "1. Content",
                items: [
                  "무엇을 전달하는가."
                ]
              },
              {
                title: "2. Structure",
                items: [
                  "어떤 순서로 전달하는가."
                ]
              },
              {
                title: "3. Timing",
                items: [
                  "얼마나 오래 보여주는가."
                ]
              },
              {
                title: "4. Visual",
                items: [
                  "어떻게 보여주는가."
                ]
              },
              {
                title: "5. Motion",
                items: [
                  "어떻게 움직이는가."
                ]
              },
              {
                title: "6. Audio",
                items: [
                  "어떻게 들리는가."
                ]
              },
              {
                title: "7. Effect",
                items: [
                  "추가적인 스타일을 어떻게 적용하는가."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "50. 편집 단계 분리",
            children: [
              {
                title: "Stage 1",
                items: [
                  "Source 확인."
                ]
              },
              {
                title: "Stage 2",
                items: [
                  "Rough Cut."
                ]
              },
              {
                title: "Stage 3",
                items: [
                  "Fine Cut."
                ]
              },
              {
                title: "Stage 4",
                items: [
                  "AI Processing."
                ]
              },
              {
                title: "Stage 5",
                items: [
                  "B-roll과 Graphic."
                ]
              },
              {
                title: "Stage 6",
                items: [
                  "Caption."
                ]
              },
              {
                title: "Stage 7",
                items: [
                  "Motion과 Effect."
                ]
              },
              {
                title: "Stage 8",
                items: [
                  "Audio."
                ]
              },
              {
                title: "Stage 9",
                items: [
                  "QC."
                ]
              },
              {
                title: "Stage 10",
                items: [
                  "Export."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "51. Editing Version 관리",
            children: [
              {
                title: "V01",
                items: [
                  "초기 Rough Cut."
                ]
              },
              {
                title: "V02",
                items: [
                  "구조 수정."
                ]
              },
              {
                title: "V03",
                items: [
                  "Graphic과 Caption 추가."
                ]
              },
              {
                title: "V04",
                items: [
                  "Audio와 Color 수정."
                ]
              },
              {
                title: "Final",
                items: [
                  "검수 완료 버전."
                ]
              },
              {
                title: "핵심",
                items: [
                  "수정 과정에서 이전 상태로 돌아갈 수 있도록 프로젝트와 출력 버전을 구분하여 관리한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "52. 16:9와 9:16 재편집",
            children: [
              {
                title: "Crop",
                items: [
                  "가로 Source의 좌우 영역이 제거될 수 있다."
                ]
              },
              {
                title: "Reposition",
                items: [
                  "인물이나 제품의 위치를 세로 Frame에 맞게 다시 설정한다."
                ]
              },
              {
                title: "Caption",
                items: [
                  "가로형 Caption 위치를 세로형에 맞게 재배치한다."
                ]
              },
              {
                title: "Graphic",
                items: [
                  "화면 폭이 줄어들기 때문에 Graphic Layout을 다시 구성한다."
                ]
              },
              {
                title: "Timing",
                items: [
                  "Short-form 용도라면 내용과 Cut의 속도도 함께 수정한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "53. Export",
            children: [
              {
                title: "Resolution",
                items: [
                  "최종 플랫폼과 프로젝트 목적에 맞는 해상도를 선택한다."
                ]
              },
              {
                title: "Frame Rate",
                items: [
                  "Source와 편집 환경을 고려하여 설정한다."
                ]
              },
              {
                title: "Format",
                items: [
                  "사용 목적에 맞는 영상 Format으로 출력한다."
                ]
              },
              {
                title: "Preview",
                items: [
                  "Export 후 실제 출력 파일을 다시 재생하여 확인한다."
                ]
              }
            ]
          },

          {
            type: "concept",
            title: "54. 최종 영상 QC",
            children: [
              {
                title: "Content",
                items: [
                  "내용 누락.",
                  "중복.",
                  "잘못된 순서가 없는가."
                ]
              },
              {
                title: "Video",
                items: [
                  "Frame 단절.",
                  "Black Frame.",
                  "잘못된 Crop이 없는가."
                ]
              },
              {
                title: "Text",
                items: [
                  "오탈자.",
                  "Caption Sync.",
                  "잘못된 숫자가 없는가."
                ]
              },
              {
                title: "Audio",
                items: [
                  "Voice.",
                  "Music.",
                  "SFX의 Balance가 적절한가."
                ]
              },
              {
                title: "AI",
                items: [
                  "자동 생성 및 자동 처리 결과에 오류가 남아 있지 않은가."
                ]
              }
            ]
          },

          {
            type: "checklist",
            title: "Rough Cut 체크리스트",
            items: [
              "영상의 핵심 메시지가 명확한가?",
              "필요한 발화가 모두 포함되어 있는가?",
              "같은 내용을 반복하는 부분이 없는가?",
              "실수와 불필요한 Pause가 제거되어 있는가?",
              "Scene 순서가 논리적으로 연결되는가?",
              "결론이 불필요하게 늦게 등장하지 않는가?",
              "영상의 목적과 관련 없는 구간이 남아 있지 않은가?",
              "효과 없이 Cut만 보았을 때도 영상이 이해되는가?"
            ]
          },

          {
            type: "checklist",
            title: "AI 기능 검수 체크리스트",
            items: [
              "자동 자막의 단어가 정확한가?",
              "고유명사와 전문용어가 정확한가?",
              "숫자와 단위가 정확한가?",
              "Caption Timing이 음성과 일치하는가?",
              "배경 제거 영역의 경계가 자연스러운가?",
              "머리카락과 손 주변에 오류가 없는가?",
              "AI Voice의 발음이 정확한가?",
              "Noise Reduction 이후 Voice가 지나치게 변형되지 않았는가?",
              "자동 편집이 필요한 내용을 제거하지 않았는가?",
              "AI가 선택한 결과를 사람이 최종 검수했는가?"
            ]
          },

          {
            type: "checklist",
            title: "Motion 체크리스트",
            items: [
              "Keyframe의 시작과 종료 위치가 자연스러운가?",
              "Zoom이 지나치게 빠르지 않은가?",
              "Motion의 방향이 Scene 흐름과 연결되는가?",
              "Mask 경계가 보이지 않는가?",
              "Speed Ramp가 Action과 맞는가?",
              "Transition을 필요 이상으로 사용하지 않았는가?",
              "Text Animation이 Caption 가독성을 방해하지 않는가?",
              "같은 Motion Effect가 지나치게 반복되지 않는가?"
            ]
          },

          {
            type: "checklist",
            title: "Audio 체크리스트",
            items: [
              "Voice가 가장 명확하게 들리는가?",
              "Music이 Voice를 가리지 않는가?",
              "Music 시작과 종료가 자연스러운가?",
              "SFX가 화면의 Action과 정확하게 연결되는가?",
              "불필요한 Noise가 없는가?",
              "Clip마다 Voice 크기가 지나치게 다르지 않은가?",
              "갑작스러운 Audio Level 변화가 없는가?",
              "영상 마지막 Audio가 갑자기 잘리지 않는가?"
            ]
          },

          {
            type: "checklist",
            title: "최종 Export 체크리스트",
            items: [
              "최종 Aspect Ratio가 올바른가?",
              "Resolution이 목적에 맞는가?",
              "Frame Rate 설정을 확인했는가?",
              "영상 시작에 불필요한 빈 Frame이 없는가?",
              "영상 마지막에 불필요한 빈 구간이 없는가?",
              "Caption이 화면 밖으로 나가지 않는가?",
              "Logo와 Graphic의 해상도가 충분한가?",
              "AI 생성 Source의 오류가 남아 있지 않은가?",
              "Export된 파일을 처음부터 끝까지 다시 확인했는가?"
            ]
          },

          {
            type: "case",
            title: "실습 1 — Talking Head 기본 편집",
            children: [
              {
                title: "Source",
                items: [
                  "2~3분 Talking Head 원본 영상."
                ]
              },
              {
                title: "Rough Cut",
                items: [
                  "실수.",
                  "반복.",
                  "불필요한 Pause를 제거한다."
                ]
              },
              {
                title: "Fine Cut",
                items: [
                  "문장 연결과 Cut Timing을 조정한다."
                ]
              },
              {
                title: "Visual",
                items: [
                  "Punch-in과 B-roll을 이용해 화면 변화를 만든다."
                ]
              },
              {
                title: "Caption",
                items: [
                  "AI 자동 자막을 생성하고 오류를 수정한다."
                ]
              },
              {
                title: "Audio",
                items: [
                  "Voice와 Background Music을 조절한다."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "실습 2 — AI 자동 자막 편집",
            children: [
              {
                title: "1단계",
                items: [
                  "원본 음성을 분석하여 자동 Caption을 생성한다."
                ]
              },
              {
                title: "2단계",
                items: [
                  "오탈자와 인식 오류를 수정한다."
                ]
              },
              {
                title: "3단계",
                items: [
                  "긴 Caption을 의미 단위로 분리한다."
                ]
              },
              {
                title: "4단계",
                items: [
                  "핵심 Keyword를 선택한다."
                ]
              },
              {
                title: "5단계",
                items: [
                  "Keyword의 Size, Weight, Animation을 다르게 적용한다."
                ]
              },
              {
                title: "6단계",
                items: [
                  "전체 Caption의 위치와 Safe Area를 검수한다."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "실습 3 — AI 배경 제거 합성",
            children: [
              {
                title: "Foreground",
                items: [
                  "인물이 촬영된 영상."
                ]
              },
              {
                title: "AI Processing",
                items: [
                  "인물과 Background를 자동 분리한다."
                ]
              },
              {
                title: "Background",
                items: [
                  "새로운 이미지 또는 영상 Source를 배치한다."
                ]
              },
              {
                title: "Integration",
                items: [
                  "Scale.",
                  "Position.",
                  "Color.",
                  "Lighting 느낌을 조정한다."
                ]
              },
              {
                title: "Graphic",
                items: [
                  "Headline과 정보 Graphic을 추가한다."
                ]
              },
              {
                title: "QC",
                items: [
                  "인물 경계와 빠른 움직임 구간을 확인한다."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "실습 4 — Keyframe Motion 제작",
            children: [
              {
                title: "Image",
                items: [
                  "정지 이미지에 Position과 Scale Keyframe을 적용한다."
                ]
              },
              {
                title: "Text",
                items: [
                  "Position과 Opacity를 이용하여 직접 등장 Motion을 만든다."
                ]
              },
              {
                title: "Product",
                items: [
                  "제품 Image를 확대하면서 정보 Graphic을 연결한다."
                ]
              },
              {
                title: "비교",
                items: [
                  "Preset Animation과 직접 만든 Keyframe Animation의 차이를 비교한다."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "실습 5 — Mask Transition",
            children: [
              {
                title: "Clip A",
                items: [
                  "첫 번째 장면."
                ]
              },
              {
                title: "Clip B",
                items: [
                  "두 번째 장면."
                ]
              },
              {
                title: "Mask",
                items: [
                  "Clip B에 Mask를 적용한다."
                ]
              },
              {
                title: "Keyframe",
                items: [
                  "Mask의 위치를 시간에 따라 이동한다."
                ]
              },
              {
                title: "Result",
                items: [
                  "Clip A 위로 Clip B가 점진적으로 나타나는 Transition을 제작한다."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "실습 6 — Speed Ramp 영상",
            children: [
              {
                title: "Source",
                items: [
                  "움직임이 있는 B-roll 영상을 사용한다."
                ]
              },
              {
                title: "Normal",
                items: [
                  "기본 속도를 확인한다."
                ]
              },
              {
                title: "Fast",
                items: [
                  "중간 이동 구간을 빠르게 처리한다."
                ]
              },
              {
                title: "Slow",
                items: [
                  "핵심 Action 지점을 느리게 강조한다."
                ]
              },
              {
                title: "Audio",
                items: [
                  "속도 변화와 SFX 또는 Beat를 연결한다."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "실습 7 — 30초 제품 홍보 영상",
            children: [
              {
                title: "Source",
                items: [
                  "제품 촬영 영상.",
                  "AI Image.",
                  "Stock.",
                  "Graphic."
                ]
              },
              {
                title: "Edit",
                items: [
                  "제품 등장 → Detail → 사용 → Benefit → CTA 구조로 편집한다."
                ]
              },
              {
                title: "Motion",
                items: [
                  "Keyframe.",
                  "Speed.",
                  "Transition을 적용한다."
                ]
              },
              {
                title: "Caption",
                items: [
                  "제품의 핵심 Benefit을 짧은 Text로 표현한다."
                ]
              },
              {
                title: "Audio",
                items: [
                  "Music과 SFX를 적용한다."
                ]
              },
              {
                title: "Output",
                items: [
                  "9:16 SNS 영상으로 출력한다."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "실습 8 — AI 기능 전후 비교",
            children: [
              {
                title: "Task 1",
                items: [
                  "자막을 수동으로 제작했을 때와 AI 자동 생성했을 때의 작업 과정을 비교한다."
                ]
              },
              {
                title: "Task 2",
                items: [
                  "수동 Mask 작업과 AI 배경 제거의 작업 시간을 비교한다."
                ]
              },
              {
                title: "Task 3",
                items: [
                  "직접 녹음한 Voice와 AI Voice의 활용 차이를 비교한다."
                ]
              },
              {
                title: "Analysis",
                items: [
                  "속도.",
                  "정확성.",
                  "수정 가능성.",
                  "품질.",
                  "작업 목적을 기준으로 비교한다."
                ]
              },
              {
                title: "핵심",
                items: [
                  "AI 사용 여부가 아니라 어떤 작업에서 AI가 실제 제작 비용을 줄이는지 판단한다."
                ]
              }
            ]
          },

          {
            type: "case",
            title: "4-3 전체 프로세스 — CapCut AI 영상 편집",
            children: [
              {
                title: "1. Define Output",
                items: [
                  "최종 플랫폼, Aspect Ratio, Resolution, Duration을 정의한다."
                ]
              },
              {
                title: "2. Create Project",
                items: [
                  "목적에 맞는 프로젝트 환경을 설정한다."
                ]
              },
              {
                title: "3. Import",
                items: [
                  "Video, Image, Voice, Music, SFX, AI Source를 가져온다."
                ]
              },
              {
                title: "4. Source Review",
                items: [
                  "사용 가능한 Source와 문제가 있는 Source를 구분한다."
                ]
              },
              {
                title: "5. Select A-roll",
                items: [
                  "영상의 핵심 내용을 전달하는 Source를 선택한다."
                ]
              },
              {
                title: "6. Rough Cut",
                items: [
                  "필요한 내용을 중심으로 전체 순서를 구성한다."
                ]
              },
              {
                title: "7. Remove Errors",
                items: [
                  "실수, 중복, 불필요한 Pause를 제거한다."
                ]
              },
              {
                title: "8. Fine Cut",
                items: [
                  "Cut 위치와 Scene Timing을 세밀하게 조절한다."
                ]
              },
              {
                title: "9. AI Caption",
                items: [
                  "Speech Recognition을 이용하여 Caption 초안을 생성한다."
                ]
              },
              {
                title: "10. Caption Correction",
                items: [
                  "인식 오류, 숫자, 고유명사, 전문용어를 수정한다."
                ]
              },
              {
                title: "11. Caption Chunking",
                items: [
                  "Caption을 읽기 좋은 의미 단위로 재구성한다."
                ]
              },
              {
                title: "12. Keyword",
                items: [
                  "핵심 단어와 숫자를 선택하여 강조한다."
                ]
              },
              {
                title: "13. B-roll",
                items: [
                  "설명을 시각적으로 보완하는 Source를 배치한다."
                ]
              },
              {
                title: "14. AI Source",
                items: [
                  "필요한 이미지, 영상, Background 등 AI 생성 Source를 결합한다."
                ]
              },
              {
                title: "15. Background Removal",
                items: [
                  "필요한 인물이나 제품을 AI로 분리한다."
                ]
              },
              {
                title: "16. Layer Composition",
                items: [
                  "Background, Subject, Graphic, Text를 Layer 구조로 배치한다."
                ]
              },
              {
                title: "17. Position",
                items: [
                  "피사체와 Graphic의 화면 위치를 조절한다."
                ]
              },
              {
                title: "18. Scale",
                items: [
                  "정보 중요도와 Composition에 따라 크기를 조절한다."
                ]
              },
              {
                title: "19. Keyframe",
                items: [
                  "Position, Scale, Opacity의 시간 변화를 직접 설정한다."
                ]
              },
              {
                title: "20. Mask",
                items: [
                  "부분 합성과 화면 분할에 필요한 Mask를 적용한다."
                ]
              },
              {
                title: "21. Speed",
                items: [
                  "Clip의 재생 속도를 콘텐츠 목적에 맞게 조절한다."
                ]
              },
              {
                title: "22. Speed Curve",
                items: [
                  "필요한 Shot에 Variable Speed를 적용한다."
                ]
              },
              {
                title: "23. Transition",
                items: [
                  "Scene 관계에 필요한 전환만 적용한다."
                ]
              },
              {
                title: "24. Effect",
                items: [
                  "강조와 Style에 필요한 Effect를 제한적으로 적용한다."
                ]
              },
              {
                title: "25. Color Correction",
                items: [
                  "Exposure, White Balance, Contrast 등 Source의 기본 문제를 수정한다."
                ]
              },
              {
                title: "26. Visual Matching",
                items: [
                  "촬영 Source, Stock, AI Source의 시각적 차이를 줄인다."
                ]
              },
              {
                title: "27. Voice Processing",
                items: [
                  "Voice의 Noise와 Level을 정리한다."
                ]
              },
              {
                title: "28. AI Voice",
                items: [
                  "필요한 경우 Text-to-Speech로 Narration을 제작한다."
                ]
              },
              {
                title: "29. Music",
                items: [
                  "영상의 분위기와 Rhythm에 맞는 음악을 배치한다."
                ]
              },
              {
                title: "30. SFX",
                items: [
                  "중요한 Motion과 Action에 Sound Effect를 연결한다."
                ]
              },
              {
                title: "31. Audio Balance",
                items: [
                  "Voice, Music, SFX의 우선순위를 기준으로 Level을 조절한다."
                ]
              },
              {
                title: "32. Full Preview",
                items: [
                  "영상을 처음부터 끝까지 실제 속도로 확인한다."
                ]
              },
              {
                title: "33. Content QC",
                items: [
                  "내용 누락, 반복, 잘못된 순서를 확인한다."
                ]
              },
              {
                title: "34. AI QC",
                items: [
                  "Caption, Segmentation, Voice 등 AI 처리 결과를 검수한다."
                ]
              },
              {
                title: "35. Visual QC",
                items: [
                  "Crop, Layout, Color, Motion, Caption을 검수한다."
                ]
              },
              {
                title: "36. Audio QC",
                items: [
                  "Noise, Level, Music, SFX, Sync를 검수한다."
                ]
              },
              {
                title: "37. Export",
                items: [
                  "최종 플랫폼에 맞는 영상 파일로 출력한다."
                ]
              },
              {
                title: "38. Export QC",
                items: [
                  "출력된 파일을 다시 재생하여 Encoding 이후 발생한 문제까지 확인한다."
                ]
              },
              {
                title: "최종 핵심",
                items: [
                  "CapCut의 핵심은 Effect를 많이 사용하는 것이 아니라 여러 영상 Source를 시간과 Layer 구조로 정확하게 조직하는 것이다.",
                  "영상 편집은 Source를 가져온 뒤 바로 꾸미는 과정이 아니라 Rough Cut에서 내용 구조를 먼저 완성하고 이후 세부 표현을 추가하는 과정이다.",
                  "AI 자동 자막, 배경 제거, 음성 처리와 같은 기능은 반복 작업 시간을 줄이는 데 강하지만 결과를 그대로 사용할 수 있다는 의미는 아니다.",
                  "AI가 생성한 Caption은 인식 정확성뿐 아니라 의미 단위, 읽기 속도, 화면 위치까지 다시 편집해야 실제 영상용 Caption이 된다.",
                  "Keyframe은 Preset Effect를 넘어 Position, Scale, Opacity 등의 변화를 시간축에서 직접 제어하는 핵심 Motion 도구다.",
                  "Mask는 특정 영역을 숨기는 기능을 넘어 Layer 합성, Before / After, 직접 제작 Transition 등에 활용할 수 있다.",
                  "Speed는 단순히 영상을 빠르게 또는 느리게 만드는 기능이 아니라 영상에서 어떤 시간을 압축하고 어떤 시간을 강조할 것인지 결정하는 도구다.",
                  "B-roll은 A-roll의 지루함을 숨기는 장식 Source가 아니라 설명 내용을 시각적으로 보여주고 증명하는 정보 Source다.",
                  "Voice, Music, SFX는 동일한 Audio가 아니라 서로 다른 기능을 수행하므로 우선순위를 기준으로 Mixing해야 한다.",
                  "촬영 영상, Stock, AI Image, AI Video를 함께 사용할 경우 각 Source의 Color, Composition, Motion 차이를 조정하여 하나의 Visual System으로 통합해야 한다.",
                  "자동화할 수 있는 작업을 AI에게 맡기고 의미, 구조, Timing, Source 선택처럼 판단이 필요한 작업은 사람이 직접 제어하는 것이 효율적인 AI 편집 Workflow다.",
                  "최종적으로 CapCut AI 영상 편집은 Source → Structure → Timing → Visual → Motion → Audio → QC의 순서로 영상의 완성도를 단계적으로 높이는 작업이다."
                ]
              }
            ]
          }
        ]
      },


      {
        name: "유튜브 영상 제작 실습",
        hours: 21,
        teacher: "",
        // 참고 출처(검증용): YouTube 고객센터(노출·CTR·도달범위·콘텐츠 실적/자막·태그/Content ID/저작권경고),
        // Shopify·vidIQ·SocialBee·WordStream·TubeBuddy·Gyre(알고리즘 동향/신화), ampifire·ViewsMax·GrowthOS(썸네일),
        // PPC Land·Gyre·NoteLM·YouTube Blog(제목·썸네일 A/B 테스트), socialrails·PrePublish·increditors(리텐션 편집),
        // TechCrunch·Grokipedia·Futurism·Hollywood Reporter(AI 대량생산 채널 제재), MrBeast 관련 보도(Yahoo/YouTube Blog),
        // Popeyes Wrap Battle·Coca-Cola AI광고·Corridor Crew 관련 보도. 통계 수치·플랫폼 정책은 자주 바뀌므로
        // 강의 전 YouTube 공식 문서로 재확인 권장.
        content: [
          {
            type: "goals",
            title: "학습 목표",
            items: [
              "유튜브(가로형, 중~긴 길이) 영상이 숏폼과 어떻게 다른 소비 구조·알고리즘 신호를 가지는지 설명할 수 있다.",
              "검색·추천·구독(홈 탐색) 유입 경로의 차이를 이해하고 영상 기획에 반영할 수 있다.",
              "AI를 활용해 유튜브 대본의 아웃라인·Hook·챕터 구조를 효율적으로 기획할 수 있다.",
              "썸네일·제목을 CTR과 리텐션을 함께 고려해 설계하고, AI 도구로 시안을 빠르게 생성할 수 있다.",
              "시청자 유지율(Audience Retention) 그래프를 읽고 편집 리듬·챕터 구조에 반영할 수 있다.",
              "업로드 시 SEO·자막·카드·엔드스크린·재생목록·저작권(Content ID)까지 실무 체크리스트에 따라 점검할 수 있다.",
              "AI를 과도하게 사용해 채널이 제재받은 사례와, AI를 배급·보조 도구로 잘 활용해 성장한 사례를 구분해 설명할 수 있다."
            ]
          },
          {
            type: "concept",
            title: "유튜브 영상은 숏폼과 어떻게 다른가 — 소비 구조와 알고리즘",
            children: [
              {
                title: "1. 소비 구조 자체가 다르다",
                items: [
                  "숏폼(9:16 세로 스와이프)은 처음 1~2초 안에 스와이프를 멈추게 만드는 게 거의 전부지만, 유튜브는 '클릭(선택)'과 '시청(계속 보게 하기)'이 분리된 두 단계 게임이다.",
                  "썸네일·제목이 '선택되는 단계'를, 콘텐츠 자체가 '계속 보게 만드는 단계'를 담당 — 이 두 단계를 각각 최적화하는 것이 이 단원 전체의 뼈대다."
                ]
              },
              {
                title: "2. 유입 경로 3가지 — 검색·추천·구독(홈 탐색)",
                items: [
                  "검색(Search) 유입: 시청자가 키워드를 직접 검색 — 의도가 명확해 시청 완료율이 높고, 시간이 지나도 꾸준히 유입되는 '스테디셀러형' 영상에 유리하다.",
                  "추천 동영상(Suggested) 유입: 알고리즘이 다른 영상 옆·다음으로 띄워주는 트래픽 — 채널 확장에는 이 비중이 커야 한다.",
                  "탐색 기능(홈 화면) 유입: 개인화가 가장 강하게 작동 — '영상이 잘 만들어졌는가'보다 '이 시청자의 최근 시청 패턴과 얼마나 맞는가'가 노출을 좌우한다.",
                  "구독 유입은 구독자 전원이 알림을 켜두는 게 아니라서 구독자 수만큼 초기 조회수가 나온다고 기대하면 안 된다."
                ]
              },
              {
                title: "3. 알고리즘이 실제로 최적화하는 것 — CTR·Watch Time을 넘어 '만족도'",
                description: "유튜브는 하루 800억 개 이상의 신호를 처리하며 '지금 이 시청자가 이 영상을 보면 만족할 것인가'에 답하려 한다. 2025년 이후 원시 시청 시간보다 시청자 만족도(satisfaction)를 더 무겁게 반영한다고 공식 확인됐다.",
                items: [
                  "만족도는 영상 종료 후 뜨는 별점형 서베이, 좋아요·공유·댓글, '관심 없음' 같은 부정 신호, 시청 후 유튜브에 머무는지 여부 등 간접 신호의 조합으로 추정된다.",
                  "세션 기여도(Session Contribution): 2025년 이후 롱폼 추천의 핵심 신호 — '이 영상을 본 뒤 시청자가 유튜브에서 영상을 몇 개 더 봤는가'를 측정한다. 엔드스크린·다음 영상 추천이 조회수뿐 아니라 채널 성장에도 영향을 주는 이유다."
                ]
              },
              {
                title: "4. 시청자 유지율(Audience Retention) 그래프 읽기",
                items: [
                  "평균 시청 지속시간(Average View Duration, 절대 시간)과 시청자 유지율(0~100% 구간별 잔존 비율 그래프)은 다른 지표다.",
                  "절대적 유지율(내 영상 자체)과 상대적 유지율(비슷한 길이 영상 평균 대비, 점선)을 함께 봐야 한다 — 점선보다 위면 동급 대비 잘 버티는 영상.",
                  "도입부(0~30초) 급락은 인트로가 길거나 제목·썸네일과 실제 내용이 어긋난다는 신호, 특정 지점 급락(spike drop)은 그 구간 자체 문제, 급상승(spike up)은 되돌려보기(replay)로 핵심 정보가 몰린 구간이라는 신호다."
                ]
              },
              {
                title: "5. 노출(Impressions)과 CTR",
                items: [
                  "노출수는 썸네일이 보여진 횟수, CTR은 노출 대비 클릭 비율이다 — 일반적으로 2~10%면 평균, 10% 이상이면 우수로 평가된다(채널·주제별 편차 큼).",
                  "알고리즘은 먼저 소규모 그룹에 테스트 노출 → CTR이 낮으면 더 넓은 확산이 막힌다 → CTR이 괜찮으면 시청 지속·만족도 신호가 이어받아 확산 여부를 결정하는 단계적 구조다.",
                  "클릭베이트(과장 썸네일·제목)로 CTR만 높이면, 클릭 이후 이탈이 심해져 만족도 신호가 나빠지고 결국 알고리즘이 스스로 확산을 제한한다."
                ]
              },
              {
                title: "6. 영상 길이별 취급 — 숏폼/미드폼/롱폼",
                items: [
                  "숏폼(60초 이하)은 완주율·반복 재생이 중요, 미드폼(3~15분)은 검색·홈 탐색 유입과 CTR·초반 이탈률 영향이 크고, 롱폼(15분 이상)은 세션 기여도·총 시청 시간 비중이 커진다.",
                  "'길수록 유리하다'는 오해다 — 유튜브 공식 입장은 '길이 자체가 순위 요인이 아니다'이며, 긴 영상이 결과적으로 총 시청 시간을 늘릴 잠재력이 있을 뿐이다. 억지로 늘리면 유지율 그래프가 완만하게 우하향하며 만족도가 나빠진다."
                ]
              },
              {
                title: "7. 업로드 직후 1~2시간이 왜 중요한가",
                items: [
                  "새 영상은 곧바로 전체 노출되지 않고 소규모 타겟 그룹(대략 10~100명 수준으로 알려짐)에 시험 노출 → 반응을 보고 단계적으로 확산 범위를 넓히는 구조다.",
                  "이 초기 테스트에 가장 많이 참여하는 게 알림을 켜둔 구독자·단골 시청자라, 업로드 직후 1~2시간 반응이 이후 확산을 좌우하는 경우가 많다.",
                  "구독자 대비 조회수(View-to-Subscriber ratio)는 '이 영상이 초기 테스트 그룹에서 얼마나 반응했는가'를 가늠하는 참고 지표다 — 다만 구독자 수 자체가 순위 요인은 아니다."
                ]
              },
              {
                title: "8. 실무자가 흔히 오해하는 알고리즘 신화 vs 실제",
                items: [
                  "구독자가 많을수록 새 영상이 무조건 잘 뜬다(오해) → 구독자 수는 직접 순위 요인이 아니다, 초기 테스트 그룹 반응이 중요하다(실제).",
                  "화질·장비가 좋으면 자동 추천된다(오해) → 알고리즘은 시청 행동(watch time, retention, engagement)을 본다, 화질 자체는 신호가 아니다(실제).",
                  "업로드 후 24시간이 전부를 결정한다(오해) → 초기 반응은 중요하지만 다단계로 확산되는 구조지 24시간 데드라인이 있는 게 아니다(실제).",
                  "매일 업로드해야 알고리즘이 좋아한다(오해) → 빈도보다 일관성·품질이 중요, 무리한 다작은 만족도 신호를 떨어뜨릴 수 있다(실제).",
                  "영상은 길수록 유리하다(오해) → 길이 자체는 순위 요인이 아니다(실제).",
                  "클릭베이트로 CTR만 높이면 된다(오해) → CTR은 관문일 뿐, 이후 이탈이 심하면 알고리즘이 스스로 확산을 제한한다(실제)."
                ]
              }
            ]
          },
          {
            type: "concept",
            title: "AI로 유튜브 대본·구성 기획하기",
            children: [
              {
                title: "1. 롱폼 대본의 기본 뼈대 — Hook, 본론, 요약/CTA",
                items: [
                  "롱폼(8~20분 이상)은 첫 15~30초 안에 '왜 끝까지 봐야 하는지'를 증명하고 그 다음 본론을 길게 끌고 가는 구조다.",
                  "Hook(0:00~0:15~0:30, 결론·핵심 장면·강렬한 질문 선공개) → 본론(챕터 단위 3~7개) → 요약/CTA(30초 이내, 핵심 요약+다음 행동 유도)의 3단계.",
                  "숏폼 Hook은 그 자체가 콘텐츠의 8할이지만, 롱폼 Hook은 '예고편' 역할만 하고 알맹이는 본론에서 채운다 — 결론을 다 스포일러하면 오히려 본론 이탈률이 올라간다."
                ]
              },
              {
                title: "2. AI로 대본 초안 뽑기 — 효과적인 프롬프트 구조",
                items: [
                  "역할·주제·타겟·톤·길이(분→단어 수 환산)·챕터 구성 6가지를 프롬프트에 반드시 넣어야 쓸만한 초안이 나온다 (한국어 기준 1분 낭독 ≈ 300~350자).",
                  "한 번에 '완성 대본'을 요청하지 말고, 1단계 아웃라인(챕터 구조)만 먼저 뽑고 2단계에서 챕터별로 살을 붙이는 순서가 통제하기 쉽다.",
                  "Hook 문구는 '3개 버전을 15단어 이내로' 식으로 여러 개 뽑아 고르는 방식이 한 번에 완성형을 받는 것보다 품질이 좋다.",
                  "AI에게 'Hook으로 시작해줘'라고만 하면 실제 대사 대신 지시문(괄호 설명)만 돌려주는 경우가 있다 — '실제 낭독 가능한 문장으로'라고 명시해야 한다."
                ]
              },
              {
                title: "3. 시청자 이탈 구간을 대본 설계 단계에서 방어하기",
                items: [
                  "이탈률이 가장 높은 구간은 처음 15초, 두 번째 피크는 정보량이 몰리는 중반 — 편집이 아니라 대본 단계부터 설계로 방어해야 한다.",
                  "도입부: 결론·임팩트 장면을 맨 앞에 보여주는 콜드 오픈(Cold Open)을 대본에 명시하고, 인사말·자기소개는 도입부에 넣지 않는다.",
                  "중반: 정보 밀도가 높은 구간 전후로 '근데 여기서 반전이 있는데요' 같은 리텐션 훅을 배치하고, 한 챕터가 3분을 넘지 않도록 쪼갠다.",
                  "AI에게는 '각 챕터 전환마다 다음을 궁금하게 만드는 문장 추가', '중반 30~50% 지점에 반전·추가 팁 하나' 처럼 이탈 방어를 명시적으로 지시해야 반영된다."
                ]
              },
              {
                title: "4. 챕터(Chapters) 기능을 활용한 구조 설계",
                items: [
                  "최소 3개 이상 챕터, 각 챕터 최소 10초 이상이어야 자동 인식되고, `0:00`부터 시작해 `MM:SS 제목` 형식으로 설명란에 순서대로 적어야 한다.",
                  "챕터 제목은 결론이 아니라 주제만 담아야 한다 — '○○을 하면 안 되는 이유'처럼 결론까지 쓰면 클릭 후 바로 스킵될 수 있다. 시청자가 검색할 법한 자연스러운 표현으로 짓는다.",
                  "정보 전달형·튜토리얼형에는 챕터가 탐색성·SEO(검색결과 타임스탬프 노출)에 적극 도움이 되지만, 서사 중심 콘텐츠에서는 결말로 건너뛰게 만들어 리텐션을 해칠 수 있어 신중해야 한다."
                ]
              },
              {
                title: "5. AI 대본의 흔한 문제와 사람이 다듬는 법",
                items: [
                  "전형적 문제 3가지: 뻔한 도입 문구 반복('오늘날처럼 빠르게 변화하는 시대에는'), 과장된 후킹 문구('이것만 알면 인생이 바뀝니다'), 반복되는 문장 구조·접속사와 구체적 사례 없는 일반론.",
                  "오프닝/클로징은 반드시 사람이 다시 쓰고, 과장 표현은 '3개월 만에 조회수 5배' 같은 구체적 검증 가능한 사실로 치환한다.",
                  "AI는 일반론은 잘 쓰지만 '내 채널만의' 구체적 경험은 만들어내지 못하므로 개인 경험·사례를 최소 1~2개 사람이 직접 채워야 한다.",
                  "AI 초안 + 사람 편집의 하이브리드가 AI 단독, 사람 단독 대본보다 시청 지속시간·신뢰도 모두 더 좋은 성과를 낸다는 사례가 반복 보고된다."
                ]
              },
              {
                title: "6. 콘텐츠 포맷별로 AI 활용법이 달라진다",
                items: [
                  "정보 전달형(How-to·리뷰): AI 활용도가 가장 높다 — '핵심 정보 3~5가지 우선순위 배열+예시' 처럼 정보 구조화를 맡기기 좋고 챕터 구조와 궁합이 좋다.",
                  "스토리텔링형(사연·인터뷰·다큐): AI에게 기승전결 '뼈대'만 잡게 하고 감정선·디테일·대사는 사람이 채운다 — 챕터를 넣으면 결말로 건너뛰기 쉬워 리텐션이 깨질 수 있으므로 선형 구성이 유리.",
                  "브이로그형: 대본 전체를 맡기기보다 이미 촬영한 소재를 넣고 내레이션·자막 다듬기, 편집 방향 브레인스토밍 도구로 활용."
                ]
              },
              {
                title: "7. 롱폼 하나에서 여러 콘텐츠로 리퍼포징(Repurposing) 기획하기",
                items: [
                  "롱폼 대본을 챕터로 나눌 때 '이 챕터가 그 자체로 30~60초 숏폼 소재가 될 수 있는지'를 미리 체크하며 구성한다.",
                  "각 챕터의 '핵심 한 문장'을 따로 표시해두면 그 문장이 숏폼 Hook이나 커뮤니티 게시물 헤드라인이 된다.",
                  "숏폼은 그대로 자르지 않고 숏폼용 Hook·자막을 다시 얹고 더 빠른 템포로 재편집하는 것이 좋다.",
                  "완성된 대본을 AI에 다시 넣고 '숏폼으로 만들기 좋은 30초 구간 3곳과 각각의 Hook 문구'를 뽑는 2차 가공 프롬프트로 활용하면 효율적이다."
                ]
              }
            ]
          },
          {
            type: "concept",
            title: "썸네일·제목 설계 — AI 활용법과 실무 원칙",
            children: [
              {
                title: "1. 왜 썸네일·제목부터 설계해야 하는가 — CTR의 실체",
                items: [
                  "CTR(클릭률)은 노출 대비 클릭 비율로, 알고리즘이 더 넓게 노출할지 판단하는 1차 관문이다. 체감 구간은 대략 1~2% 평균 이하, 3~4% 평균, 5~6% 이상 우수(편차 큼).",
                  "CTR은 단독 지표가 아니라 리텐션과 함께 봐야 한다 — 썸네일과 제목은 따로 만들지 않고, 썸네일이 호기심의 빈틈을 열면 제목이 최소한의 맥락을 얹는 '한 세트'로 설계한다."
                ]
              },
              {
                title: "2. 썸네일·제목·본편의 '약속' — 낚시성 콘텐츠의 역설",
                items: [
                  "썸네일·제목은 시청자와의 '약속'이다 — 본편이 기대를 못 채우면 초반 이탈 급증, '낚시였다' 댓글·비추천 증가, 그리고 유튜브가 클릭 이후 시청 시간(watch time per impression)까지 학습하므로 확산에서 밀려난다.",
                  "단기적으로는 클릭이 잘 나와 착시를 일으키지만 중장기적으로는 채널 추천 신뢰도를 깎아먹는 게 '낚시성 콘텐츠의 역설'이다 — 매력적으로 압축하는 것과 과장하는 것은 다르다."
                ]
              },
              {
                title: "3. 잘 작동하는 썸네일의 시각 원칙",
                items: [
                  "한 화면 = 한 피사체 = 한 메시지 — 시각 요소가 3개를 넘으면 정보 처리 속도가 떨어져 클릭 전환이 낮아진다.",
                  "감정이 뚜렷한 얼굴 클로즈업 표정이 꾸준히 가장 높은 CTR을 만든다 — 단, 영상 내용과 감정 톤이 일치해야 약속 위반을 피한다.",
                  "배경-피사체 대비(High Contrast)가 뚜렷할수록 피드에서 시선을 붙잡는다.",
                  "텍스트는 3단어 이하 또는 없음이 최신 트렌드 — 설명은 제목이 담당하고 썸네일은 궁금증을 여는 이미지에 집중한다. 모바일 작은 화면에서 읽히는지, 핵심 요소가 잘리지 않는지 확인한다."
                ]
              },
              {
                title: "4. 잘 작동하는 제목의 문구 패턴",
                items: [
                  "숫자 활용('3가지 방법'): 범위·구조를 예측 가능하게 해 클릭 부담을 낮추고 검색 습관과 맞물린다.",
                  "궁금증 유발(Curiosity Gap): 결론을 다 말하지 않고 빈틈을 남기되, 본편 초반 30초~1분 안에 반드시 빠르게 채워줘야 안전하다.",
                  "검색 키워드 포함(SEO 지향): 실제 검색될 법한 단어를 제목 앞부분에 — 단, 그대로 나열하면 부자연스러워지고 궁금증 효과가 떨어진다.",
                  "실무 공식: [핵심 키워드] + [숫자 또는 궁금증 문구] 조합으로 검색·추천 두 유입 경로를 동시에 노린다."
                ]
              },
              {
                title: "5. AI 도구로 시안을 빠르게 생성하는 실무 워크플로우",
                items: [
                  "① ChatGPT로 궁금증형/숫자형/SEO형 등 패턴별 제목·썸네일 콘셉트 후보를 동시에 발산.",
                  "② 미드저니 등으로 실사 느낌 배경·인물 이미지 생성 (텍스트 렌더링은 아직 불안정해 별도 툴에서 얹는 게 안전).",
                  "③ Canva AI(Magic Media 등)로 배경 생성부터 텍스트 삽입까지 5분 내외로 완성 — 최소 2~3개 이상의 후보를 만들어 A/B 테스트로 검증하는 게 표준 프로세스.",
                  "AI 생성 이미지가 실제 영상 내용·출연자와 어긋나지 않는지 확인 — 이전 단원(AI 윤리)의 표시·과장 방지 원칙과 직결된다."
                ]
              },
              {
                title: "6. A/B 테스트로 검증하기 — YouTube Studio Test and Compare",
                items: [
                  "썸네일 최대 3종, 제목 최대 3종(2025년 12월부터 제목까지 확장)을 실제 시청자에게 나눠 보여주고 비교 — 고급 기능이 켜진 채널이면 누구나 사용 가능.",
                  "최대 2주간, 변형(variant)당 1,000~5,000회 노출로 통계적 유의성을 확보하며, 판단 기준은 클릭 수가 아니라 노출당 시청 시간(watch time per impression)이다.",
                  "PC 유튜브 스튜디오에서만 지원, 쇼츠·예약 라이브·프리미어 영상에는 미적용."
                ]
              },
              {
                title: "7. 검색 유입 vs 추천 피드 유입 — 제목 전략의 분기",
                items: [
                  "검색 유입 노릴 때: 명확한 키워드를 앞부분에 배치한 SEO형 제목 — 스테디셀러형 콘텐츠가 되기 쉽지만 추천 피드 클릭 매력은 상대적으로 낮음.",
                  "추천 피드 유입 노릴 때: 궁금증 유발 요소가 훨씬 중요 — 바이럴 가능성은 크지만 검색으로는 잘 안 잡히고 휘발성이 강함.",
                  "채널 전략에 따라 영상별로 '검색형'/'피드형'을 미리 정하고 제작하는 것이 효율적이다."
                ]
              },
              {
                title: "8. 낚시성(Clickbait)의 리스크 — 알고리즘, 신뢰, 규제",
                items: [
                  "클릭은 잘 나오지만 이탈률이 높은 영상은 알고리즘상 사실상의 페널티를 받는다.",
                  "명백한 정책 위반(선정적 이미지, 사실과 다른 유인)은 커뮤니티 가이드 위반 대상 — 첫 위반은 보통 '주의'(90일 후 소멸), 90일 이내 재위반 시 '경고', 90일 이내 경고 3회 누적 시 채널 폐쇄 가능.",
                  "낚시성이 반복되면 시청자가 '이 채널 썸네일은 못 믿는다'는 인식을 갖게 되고 구독 해지·악성 댓글로 이어진다.",
                  "이전 단원(AI 윤리·HITL)의 AI 생성물 표시의무·과장광고 규제 원칙이 그대로 적용된다 — AI로 만든 썸네일이 실제와 다르게 오인시키거나, 과장된 제목이 표시·광고 공정화법상 문제될 수 있다."
                ]
              }
            ]
          },
          {
            type: "concept",
            title: "편집 구조와 리텐션 설계",
            children: [
              {
                title: "1. 시청자 유지율 그래프를 편집에 반영하기",
                items: [
                  "절대/상대 시청 지속률을 구분해서 보고, 초반 급락은 Hook·약속 불일치, 완만한 하강은 전체 페이싱 문제, 특정 지점 급락(spike drop)은 그 구간 자체(지루한 설명 등) 문제, 급상승(replay)은 참고할 만한 잘된 구간으로 해석한다.",
                  "유튜브 스튜디오에서 급락 지점에 마우스를 올리면 실제 프레임 미리보기가 나오므로 그 장면을 직접 확인해 원인을 찾는다."
                ]
              },
              {
                title: "2. 도입부(첫 15~30초) 편집 — Hook 설계",
                items: [
                  "3단계 구조: 0~5초 Pattern Interrupt(정적인 인사말 대신 움직임·사운드로 즉시 주의 끌기) → 5~15초 구체적 보상 예고 → 15~30초 지속 시청 동기 부여(핵심 장면 살짝 예고).",
                  "Cold Open: 인트로 없이 임팩트 있는 장면부터 보여주고 '어떻게 이렇게 됐는지' 되돌아가는 구조 — 결과를 먼저 보여줘 궁금증(Open Loop)을 만든다.",
                  "도입부 10~20초는 10~15초 간격으로 컷을 자주 전환해 몰입을 유도한 뒤, 이후 25~40초로 서서히 넓혀도 된다. 로고 애니메이션·긴 인사말은 5초를 넘기지 않는다."
                ]
              },
              {
                title: "3. 롱폼 영상의 편집 리듬 설계(지루함 방지)",
                items: [
                  "구간별 리듬(토크·강의형 기준): 0~2분 짧은 컷·잦은 전환 → 2~3분마다 버스트 시퀀스(리액션·확대·전환 5~10개 몰아치기) → 3~7분 안정 구간(컷 줄이고 B-roll로 맥락 추가) → 8분 이후 설명·에너지 교차 배치.",
                  "컷 길이는 토크·강의형 기준 15~25초가 기본 리듬이고, 사람이 한 화면(Shot)을 자연스럽게 받아들이는 시간은 대략 3초, 5초를 넘기면 주의가 흩어지기 시작한다.",
                  "B-roll은 설명을 시각적으로 보완하는 동시에 점프컷이 어색해 보이는 걸 자연스럽게 가려주는 다리 역할을 한다."
                ]
              },
              {
                title: "4. 챕터 구조와 편집의 상호작용",
                items: [
                  "챕터가 있는 영상은 없는 영상보다 평균 시청 지속 시간이 유의미하게 높다는 데이터가 있다 — 다만 이는 원하는 구간만 찾아본다는 뜻이지 처음부터 끝까지 순서대로 다 본다는 뜻은 아니다.",
                  "챕터 전환 지점(소주제가 끝나는 지점)은 심리적 이탈 포인트가 되기 쉽다 — 끝나기 직전 다음 챕터를 한 문장으로 예고하고, 전환을 시각적으로 매끄럽게 처리한다(급정지 대신 전환 컷·자막 카드·짧은 브릿지 B-roll).",
                  "튜토리얼·리뷰(검색 목적)는 상세 타임스탬프를 적극 노출, 다큐·스토리텔링형은 챕터를 뭉뚱그리거나 개수를 줄여 긴장감을 지킨다."
                ]
              },
              {
                title: "5. AI 편집 도구를 롱폼에 적용할 때 주의점(숏폼과 다르게)",
                items: [
                  "무음 구간 제거: 숏폼은 공격적으로 잘라도 되지만, 롱폼은 발표자의 의도적 pause(강조)까지 잘라버리면 말의 리듬·강조점이 사라진다 — 스마트 임계값 기능이 있어도 사람 검수는 필수.",
                  "자동 컷 편집: AI는 음성 강세·키워드로 하이라이트 구간을 추천할 수 있지만 서사 흐름·리텐션 곡선을 이해하지 못한다 — Pacing·Story·Hook·감정 강조 컷은 사람이 판단해야 한다.",
                  "자동 자막: 분량이 많은 롱폼은 오탈자·화자 구분 오류가 누적되기 쉽고, 전문용어·브랜드명·숫자는 특히 자주 틀리므로 전체 검수가 필요하다. 숏폼처럼 큼직한 강조 자막을 롱폼 전체에 쓰면 오히려 피로감을 준다."
                ]
              },
              {
                title: "6. 콘텐츠 유형별 정보 밀도·페이싱 설계",
                items: [
                  "강의형: 정보 밀도 높게, 화면 요소를 순차적으로 등장시키고 챕터·타임스탬프를 상세히 제공. 컷은 15~25초로 안정적, 핵심 개념 전환 시 화면 전환으로 리듬을 만든다.",
                  "브이로그형: 감정·분위기 전달이 중심 — 잔잔한 구간은 길게, 하이라이트는 앞쪽(Cold Open)에 배치. 음악 리듬에 컷을 맞추는 비트 편집(Beat Sync)이 자주 쓰인다.",
                  "리뷰형: 결론(사길 vs 말길)을 먼저 보여주고 근거를 설명하는 역순 구조가 효과적 — 장단점 나열 시 체크리스트·점수 그래픽, 비교는 화면 분할(Split Screen)이 컷 전환보다 이해를 돕는다."
                ]
              },
              {
                title: "7. 편집 마무리 설계 — 엔드스크린과 세션 시청 시간",
                items: [
                  "엔드스크린(마지막 5~20초)에 다음 영상·재생목록·구독 버튼 배치 — PC 환경에서만 전체 편집 가능하므로 데스크톱에서 마무리한다.",
                  "마지막 10~15초는 엔드스크린이 갑자기 튀어나오는 느낌이 아니라 자연스러운 마무리로 이어지도록 컷을 설계하고, 엔드스크린 노출 영역(주로 우측 하단·중앙)에 자막·중요 요소가 겹치지 않게 여백을 계산한다.",
                  "다음 영상은 최신 영상이 아니라 분석 탭에서 시청 지속률이 가장 높은 영상을 기준으로 고르고, 영상 중간에는 카드(Cards)로 관련 영상을 짧게 노출해 다음 시청 동선을 미리 만든다."
                ]
              }
            ]
          },
          {
            type: "checklist",
            title: "업로드·SEO 실무 체크리스트",
            children: [
              {
                title: "제목·설명란·해시태그",
                items: [
                  "핵심 키워드를 제목 앞부분(첫 30자 이내)에 배치했는가 — 모바일·검색 결과에서 뒷부분이 잘리는 경우가 많다.",
                  "키워드 스터핑(반복 나열) 대신 사람이 읽고 클릭하고 싶은 문장으로 썼는가 — CTR·시청 지속시간이 키워드 밀도보다 훨씬 중요한 신호다.",
                  "설명란 첫 2~3줄에 핵심 키워드+요약이 자연스러운 문장으로 들어가 있는가 (이 영역이 '더보기' 누르기 전 가장 먼저 읽히는 부분).",
                  "설명란 본문은 300~500단어 수준으로 충분히 채우고, 10분 이상 영상이면 `00:00 제목` 형식 타임스탬프를 넣었는가.",
                  "해시태그는 설명란 안에 3~5개 이내로, 영상 내용과 무관한 인기 태그를 억지로 넣지 않았는가(초과 시 스팸 분류 위험)."
                ]
              },
              {
                title: "태그(Tags) — 정설과 속설 구분",
                items: [
                  "'태그를 많이 달수록 잘된다'는 오래된 속설을 믿고 관련 없는 태그를 욱여넣지 않았는가 — 실질 영향력은 매우 제한적이며 제목·설명란·실제 시청 데이터가 훨씬 중요하다.",
                  "태그는 오타·유사 표기·영문/한글 병기 같은 검색어 변형을 잡아주는 보조 수단으로만 활용했는가.",
                  "태그 작성 시간을 제목·설명란·썸네일·초반 후킹 구성에 더 투자했는가."
                ]
              },
              {
                title: "자막(Closed Caption) 검수",
                items: [
                  "자동 생성 자막(정확도 85~95%, 배경음·억양·전문용어 있으면 크게 하락)을 그대로 게시하지 않고 직접 검수했는가.",
                  "브랜드명·제품명·전문용어처럼 자동 자막이 자주 틀리는 고유명사를 중점 확인했는가.",
                  "무음(소리 끄고) 시청 습관이 있는 모바일 시청자를 고려해 핵심 메시지가 자막만으로도 전달되는지 확인했는가."
                ]
              },
              {
                title: "카드·엔드스크린·재생목록",
                items: [
                  "영상 중간 맥락에 맞는 시점에 카드를 배치하고, 시청 흐름(중요 정보 전달 구간)을 가리지 않는 타이밍인지 확인했는가.",
                  "엔드스크린용 마지막 5~20초를 비워두고, 목적(시청시간 확보 vs 구독자 확보)에 따라 영상+구독 버튼 배치 비율을 다르게 구성했는가.",
                  "이 영상이 들어갈 재생목록이 있는가(없으면 신설), 재생목록 제목에도 키워드를 넣었는가, 시청 흐름(입문→심화 또는 시간 순)에 맞게 순서를 배치했는가."
                ]
              },
              {
                title: "업로드 타이밍",
                items: [
                  "채널 애널리틱스(시청자층 탭)에서 타겟 시청자가 유튜브를 많이 보는 시간대를 확인했는가.",
                  "업로드 직후 1~2시간 초기 트래픽을 끌어올릴 준비(구독자 알림, SNS 동시 공지, 커뮤니티 탭 예고)가 되어 있는가.",
                  "특정 요일·시간에 업로드를 고정해 시청 습관을 형성하고 있는가 — 일반론(예: 저녁 6~9시)이 아니라 본인 채널 실제 데이터로 검증했는가."
                ]
              },
              {
                title: "AI 생성 콘텐츠 표시의무",
                items: [
                  "AI 음성·이미지·영상이 포함되어 있다면 AI기본법(2026.1.22 시행) 표시의무 대상인지 다시 점검했는가 — 미표시 시 시정명령, 최대 3천만 원 과태료(계도기간 운영 중).",
                  "실제 인물을 다르게 보이거나 말하게 만든 영상, 실제 목소리를 복제한 AI 음성이라면 업로드 시 '변경되었거나 합성된 콘텐츠(Altered or synthetic content)' 항목을 켰는가.",
                  "단순 보조 용도(자막 자동생성, AI 작곡, AI 보정)는 표시 대상이 아니지만, 실제 인물 사칭·없었던 사건 재현은 대상이라는 점을 구분했는가. 애매하면 표시하는 쪽으로 보수적으로 판단했는가."
                ]
              },
              {
                title: "저작권·Content ID",
                items: [
                  "사용한 음악·효과음·클립이 저작권 프리이거나 정식 라이선스인지, 상업 목적 영상에 비상업용 무료 소스를 잘못 쓰지 않았는지 확인했는가.",
                  "Content ID 주장(자동 매칭 시 광고수익 귀속·국가별 차단 등)과 저작권 위반 경고(권리자 직접 신고, 90일 내 3회 누적 시 채널 폐쇄 가능)는 다른 개념이라는 걸 이해했는가.",
                  "채널 수익화 요건(구독자 1,000명+최근 12개월 유효 시청 4,000시간, 또는 공개 쇼츠 조회수 1,000만 회)에 저작권 문제가 영향을 줄 수 있음을 인지했는가."
                ]
              }
            ]
          },
          {
            type: "case",
            title: "실무 사례 — AI로 성장한 유튜브 채널과 실패 사례",
            description: "실패·제재 사례와 성공 사례를 함께 담았다 — 핵심은 'AI를 썼는가'가 아니라 '사람의 판단·개입(HITL)이 얼마나 있었는가'다.",
            children: [
              {
                title: "[성공] MrBeast — 다국어 AI더빙, 콘텐츠는 그대로 언어만 AI로 확장",
                items: [
                  "유튜브 다국어 오디오 기능+AI 더빙으로 영상 하나를 11개 언어로 자동 더빙 — 번역·더빙 시간이 편당 약 15분까지 단축.",
                  "AI가 콘텐츠 자체를 만든 게 아니라 이미 검증된 콘텐츠의 도달 범위만 넓히는 배급 도구로 쓴 것이 핵심 — 스페인어 채널 3년 만에 구독자 2,500만, 영상 1편 조회수 1억 돌파. 본인은 이 전략으로 연간 조회수를 115억→350억 회로 늘릴 수 있다고 밝혔다.",
                  "초기엔 AI 더빙 품질이 부족해 일부 구간에 전문 인간 더빙을 병행하는 하이브리드로 시작해 점차 AI 비중을 늘렸다.",
                  "교훈: AI를 '콘텐츠 생성'이 아니라 '이미 좋은 콘텐츠의 현지화·배급 도구'로 쓰면 리스크 없이 효율만 극대화할 수 있다."
                ]
              },
              {
                title: "[실패] Popeyes 'Wrap Battle' — 3일 만에 만들었지만 'AI 슬롭' 역풍",
                items: [
                  "2025년 7월, 구글 Veo 3와 Suno로 맥도날드를 저격하는 AI 랩 디스곡 광고를 3일 만에 제작·공개, 틱톡 조회수 310만 돌파.",
                  "화제성 대부분이 부정적 반응 — '예술가에게 돈 주고 배우를 썼으면 어땠을까'라는 댓글이 큰 공감을 얻으며 'AI가 사람 일자리를 대체했다'는 반발을 샀다.",
                  "브랜드가 이미 '인간적·창의적' 이미지를 가진 영역(음악, 코미디)에서 AI를 전면에 내세우면 '왜 굳이 AI를 썼는가' 반문이 나온다 — 제작 뒷단(리서치·초안)에 AI를 쓰는 것과 결과물 전체를 AI로 대체하는 것은 반응이 크게 다르다.",
                  "논란에도 영상을 내리지 않았고 '화제성 자체가 목적 달성'이라는 평가도 있었지만, 업계에서는 '화제는 됐지만 브랜드 호감도엔 마이너스'인 반면교사로 자주 인용된다."
                ]
              },
              {
                title: "[제재] CuentosFascinantes 등 채널 통째 삭제 — 구독자 590만, AI 대량생산의 최대 피해자",
                items: [
                  "유튜브는 2025년 7월부터 '진정성 없는 대량생산·반복 콘텐츠' 수익화 정책을 강화, 2026년 1월 이를 어긴 채널 11개 완전 삭제·5개 콘텐츠 전체 삭제(합산 구독자 3,500만, 연 광고수익 약 1,000만 달러).",
                  "가장 큰 채널 'CuentosFascinantes'(드래곤볼 테마 스토리 채널)는 구독자 약 590만, 누적 조회수 12억 — AI 음성 내레이션에 템플릿화된 퀴즈·요약형 스토리를 대량 생산하는 구조였다.",
                  "판단 기준은 'AI를 썼는가'가 아니라 '창작자의 독창적 판단·창의성이 얼마나 들어갔는가' — 최소한의 HITL(사실관계 검수, 회차마다 새로운 관점 추가 등) 없이 대량생산하면 조회수가 높아도 채널이 하루아침에 사라질 수 있다.",
                  "단속 과정에서 AI를 전혀 안 쓴 '얼굴 비공개(faceless)' 정상 채널까지 알고리즘상 불이익을 받는 부작용도 함께 보고됐다."
                ]
              },
              {
                title: "[제재] True Crime Case Files — 존재하지 않는 살인사건을 AI로 지어내다 삭제",
                items: [
                  "실화 범죄 채널처럼 보였지만, 대본 절반을 ChatGPT로 지어내고 가해자·피해자 얼굴까지 AI 이미지로 생성 — 인기 영상 하나가 약 200만 조회수를 기록했다.",
                  "실제 벌어진 적 없는 사건을 사실처럼, AI 생성 얼굴과 함께 유포하면서 'AI가 지어낸 허구'라는 고지가 전혀 없었다 — 허위정보·명예훼손·플랫폼 신뢰 문제로 확산돼 2025년 1월 채널과 연관 채널 4개가 삭제됐다.",
                  "AI 콘텐츠가 사실·실존 인물을 다루는 것처럼 보인다면 반드시 'AI로 재구성된 콘텐츠'라는 고지가 있어야 하고, 사실관계 검증(팩트체크) HITL 절차가 생략되면 안 된다.",
                  "이후 실제 사건 피해자의 목소리·얼굴을 AI로 재현한 다른 채널들도 유가족의 반발을 사며 함께 규제 대상이 됐다."
                ]
              },
              {
                title: "[실패] Coca-Cola AI 크리스마스 광고 — '영혼 없는' 브랜드 무드가 부른 역풍",
                items: [
                  "2024년 11월 'Holidays Are Coming' 후속으로 생성형 AI 크리스마스 광고 3편을 공개, 2025년 11월에도 재차 AI로 제작해 2년 연속 같은 논란을 반복했다.",
                  "인물 표정·움직임이 어색하다며 '소울리스(soulless)'라는 혹평 — 수십 년간 '따뜻한 인간적 정서'로 쌓아온 브랜드 자산 영역에 AI를 투입한 것 자체가 정체성과 충돌한다는 지적.",
                  "브랜드가 이미 인간적 정서·전통을 핵심 자산으로 쌓은 영역(명절 광고, 가족 서사)에서는 AI 도입이 오히려 자산을 훼손할 수 있다 — 정보 전달형·데이터 기반 콘텐츠와는 AI 저항감이 다르다.",
                  "거센 비판에도 캠페인을 철회하지 않고 '새로운 크리에이티브 시도'라며 방어, 이듬해도 같은 방식을 반복했다."
                ]
              },
              {
                title: "[논쟁] Corridor Crew 'Anime Rock-Paper-Scissors' — 바이럴엔 성공, 윤리 논쟁에 불붙다",
                items: [
                  "2023년, 실사 배우 연기를 Stable Diffusion+ControlNet으로 애니메이션풍 변환한 AI 로토스코핑 단편을 공개 — 'AI가 애니메이션 제작의 미래를 보여준다'는 호평으로 폭발적 확산.",
                  "동시에 전문 애니메이터들의 거센 반발 — 특정 일본 애니메이션 화풍을 학습했는데 원작 애니메이터에게 동의·보상·출처 표기가 전혀 없었다는 점이 핵심 비판이었다.",
                  "화제성과 학습 데이터의 윤리성(출처·동의)이 정면 충돌한 사례 — 특정 창작자 '스타일' 모방은 법적으로 회색지대라도 윤리적·평판 리스크가 크다.",
                  "논란 이후 채널은 VFX 업계 노동 환경 문제를 지속적으로 다루는 방향으로 톤을 바꾸며 신중한 태도로 전환한 드문 사례다."
                ]
              }
            ]
          }
        ]
      }
    
    
    
    
    
    
    ];
