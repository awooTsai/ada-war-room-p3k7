// === awoo BD War Room — 蔡阿達個人會議戰情室 ===
// 每日 19:00 由排程任務自動更新此檔案
// 結構：專案卡片為核心，同一專案被多次討論時更新同一張卡片

window.WAR_ROOM_DATA = {
  lastUpdated: "2026-03-30T19:00:00",
  dateLabel: "2026/03/30（一）",
  stats: {
    meetings: 17,
    projects: 17,
    partners: 4,
    internal: 6,
    clientCompany: 6,
    todos: 88
  },

  projects: [
    // ====== P1: 天下雜誌 ======
    {
      id: "tianxia",
      name: "天下雜誌 — 媒體 GEO 經銷合作",
      icon: "📰",
      category: "partner",
      lastUpdated: "2026-03-24",
      summary: "媒體端 GEO 經銷全新模式 — 關鍵字計價 + POC 試點",
      keyPoints: [
        "<strong>20 關鍵字 ≈ NT$35,000/月</strong>，延伸 60 個 Prompt 追蹤",
        "不採年約，兩個月為一期計算 MRR",
        "雙方同意<strong>先小規模 POC</strong>，至少半年追蹤期",
        "天下痛點：AU 式廣編缺 AI 成效追蹤工具",
        "awoo 提供監控儀表板：品牌提及率、AI 引用率、聲量占比"
      ],
      chips: [
        { icon: "💰", text: "35,000/月" },
        { icon: "🔑", text: "20 關鍵字" },
        { icon: "💬", text: "60 Prompt" },
        { icon: "⏱️", text: "POC ≥ 2 個月" }
      ],
      todos: [
        { owner: "蔡阿達", text: "提供正式報價方案（含計價模式）", priority: "week" },
        { owner: "蔡阿達", text: "設計合作公版 brief 格式", priority: "week" },
        { owner: "周峯玉", text: "盤點客戶量體，挑選 POC 試點客戶", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-03-24",
          title: "awoo × 天下",
          time: "10:03-11:04",
          duration: "1h01m",
          participants: "蔡阿達、周峯玉、Angelline",
          docUrl: "https://docs.google.com/document/d/1AdMWjGjL5uY2SkfFvi2Qkjbi1OCZQ52eFRn_lpJDJpQ/edit",
          dialogues: [
            {
              topic: "雙方合作需求釐清",
              exchanges: [
                { speaker: "周峯玉", role: "other", label: "天下", text: "我們最大困擾是，客戶在我們這邊下廣編，成效是坐在我們家，那我要怎麼證明在天下下廣編對它的 AI 聲量提升是有幫助的？" },
                { speaker: "蔡阿達", role: "ada", text: "現在想要去追蹤 AI 的指標，幾乎沒有一套工具可以追蹤得出來，也沒有值得拿出來證明的第三方數據。我們就幫你建構監控平台跟儀表板。" },
                { speaker: "蔡阿達", role: "ada", text: "我們就是想要幫你做出成績給你們客戶看，讓你們做的每一件事情，讓客戶都看得到。" }
              ]
            },
            {
              topic: "收費與合作模式",
              exchanges: [
                { speaker: "周峯玉", role: "other", label: "天下", text: "如果要大量合作的話，這個確實有點貴。不過我覺得先盤一下數量，然後來談比較 make sense。" },
                { speaker: "蔡阿達", role: "ada", text: "如果真的要試的話，我覺得最少要抓半年，因為不管是搜尋引擎還是 AI，都需要時間去累積你的信任程度。" },
                { speaker: "周峯玉", role: "other", label: "天下", text: "合作就是要 win-win，不可能只有我的需求被滿足但你們做不下去。我們希望能夠用經銷的方式來思考合作量與價格。" },
                { speaker: "蔡阿達", role: "ada", text: "合作可能會更單純一點，就是以客戶為單位，我們針對他那篇廣編文的關鍵字來做追蹤，然後來提出建議。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P2: 凱鈿 ======
    {
      id: "kdan",
      name: "凱鈿點點簽 — GEO Suite 全球化串接",
      icon: "✒️",
      category: "partner",
      lastUpdated: "2026-03-24",
      summary: "策略夥伴合作 — 繁中語系三個月免費試用",
      keyPoints: [
        "聚焦日本、美國、馬來西亞、泰國，<strong>英/日/中三大語系</strong>",
        "雙方同意<strong>先從繁中語系開始</strong>，英文語系投報率最大但競爭激烈",
        "凱鈿痛點：缺 AI 觀測工具，SEMRush/Ahrefs 對台灣/日本不夠深",
        "合作模式：<strong>策略夥伴、免費試用 3 個月</strong>，換 Logo 露出"
      ],
      chips: [
        { icon: "🆓", text: "3 個月免費" },
        { icon: "🔑", text: "20 關鍵字" },
        { icon: "💬", text: "60 Prompt" },
        { icon: "📄", text: "報價 3/25" }
      ],
      todos: [
        { owner: "蔡阿達", text: "3/25 晚間前交付免費試用報價單", priority: "today" },
        { owner: "蔡阿達", text: "用點點簽完成電子簽署", priority: "today" },
        { owner: "Albert", text: "建立溝通群組", priority: "waiting" },
        { owner: "蔡阿達", text: "規劃 20 關鍵字 + 60 Prompt（繁中）", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-24",
          title: "凱鈿 × awoo GEO Suite 合作洽談",
          time: "15:02-15:43",
          duration: "41m",
          participants: "蔡阿達、Albert Chang、Christy Huang、Clare Lo、Emily Lin",
          docUrl: "https://docs.google.com/document/d/15ozY-ilUs6JTa-e_Gdf3W8EojZPoY3Sbl-7vUpRtI34/edit",
          dialogues: [
            {
              topic: "市場策略討論",
              exchanges: [
                { speaker: "Albert Chang", role: "other", label: "凱鈿", text: "我們面臨的挑戰是，過去操作很多 SEO、關鍵字、campaign，現在世界開始轉換了，我們在新的世界裡怎麼被 AI 看到？" },
                { speaker: "蔡阿達", role: "ada", text: "語系比國家更重要，我們只要確定好語系就好。整個地球是平的，只要有共同語言，不管在什麼地區都可以被看見。" },
                { speaker: "Christy Huang", role: "other", label: "凱鈿", text: "我們缺少的是觀測工具，比較感興趣的是怎麼觀測我們自己做的 AEO 優化。SEMRush、Ahrefs 這些對台灣跟日本的著墨沒有你們那麼多。" }
              ]
            },
            {
              topic: "合作模式確認",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我會出一個簡單的報價單，但沒有價格，就是一個免費試用三個月的合作關係。我們也有個小期待，就是讓你們成為我們網站上的一員，有點像策略夥伴。" },
                { speaker: "Christy Huang", role: "other", label: "凱鈿", text: "策略夥伴這個可以，可以再談。我們可以先從繁中開始看。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P3: SeaMeet / Simit ======
    {
      id: "seameet",
      name: "SeaMeet / Simit — AI 會議助理導入 & 採購",
      icon: "🎙️",
      category: "partner",
      lastUpdated: "2026-03-27",
      summary: "Simit 採購已談妥價格與授權，結合 Calendar 管理會議週期與摘要分發，四月開始系統升級",
      keyPoints: [
        "團隊 22-23 人，每位 PM 配備 AI 會議助理",
        "支援<strong>三層階層管理</strong>（組長→部門主管→老闆）",
        "逐字稿自動存放 Google Drive，工程師可直接分析商情",
        "<strong>30 帳號、七折優惠、年約方案</strong>",
        "Simit 採購<strong>已談妥價格與授權</strong>，三個月短期試用",
        "結合 <strong>Calendar 管理會議週期</strong>與摘要分發",
        "工程師阿福進行<strong>收帕分析</strong>，產出商城 insight，預計四月開始升級"
      ],
      chips: [
        { icon: "👥", text: "30 帳號" },
        { icon: "💰", text: "七折" },
        { icon: "💵", text: "$49.9×10mo×0.7" },
        { icon: "🏢", text: "3 層管理" },
        { icon: "📅", text: "Calendar 整合" }
      ],
      todos: [
        { owner: "蔡阿達", text: "建立 LINE 群組協調採購事宜", priority: "week" },
        { owner: "Shao Ho", text: "提供正式報價單", priority: "waiting" },
        { owner: "藍文甫", text: "與老闆確認年約 vs 月付", priority: "waiting" },
        { owner: "藍文甫", text: "設定 Google Drive 資料夾整合", priority: "waiting" },
        { owner: "Leo", text: "負責 Simit 系統三個月短期試用及結合 Calendar 管理", priority: "week" },
        { owner: "Leo", text: "協調工程師阿福進行收帕分析，四月開始升級", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-24",
          title: "SeaMeet 產品會議",
          time: "17:01-17:26",
          duration: "24m",
          participants: "蔡阿達、Shao Ho、藍文甫",
          docUrl: "https://docs.google.com/document/d/1Ii2hevYJz8feGiHXOOxi5vxy-RHV-oujGAzbNpBhJsM/edit",
          dialogues: [
            {
              topic: "階層管理 & 採購",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "我的團隊大概 22、23 個人，我會配給每一個專案經理一隻 AI 會議 agent，資料應該要分 tier，組長、部門主管、老闆逐級往上集中。" },
                { speaker: "Shao Ho", role: "other", label: "SeaMeet", text: "系統支援階層式管理，用工作區域分組，管理者可收到每日彙整報表。" },
                { speaker: "蔡阿達", role: "ada", text: "他們的服務有個功能，每場會議會自動存放在設定好的 Google Drive 資料夾當中，所有會議資料都在那裡。" },
                { speaker: "蔡阿達", role: "ada", text: "我們可不可以拉一個 LINE 群？現在公司要買 30 位的名額，要怎麼定價？" },
                { speaker: "Shao Ho", role: "other", label: "SeaMeet", text: "阿達這邊跟我們支持很久，你們的採購我們都是給七折。年繳的話是 $49.9 x 10 個月 = $199，再打七折。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "我會跟老闆講月付跟年付的差異，我會說服他年繳，一次吃下去。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P4: 獎金制度改革 ======
    {
      id: "bonus-reform",
      name: "獎金制度改革 & 業績目標調整",
      icon: "💰",
      category: "company",
      lastUpdated: "2026-03-30",
      summary: "營收目標調整至 1.7 億，Q1 表現不佳但 Q2 回升中；預算會議確認一二月達成率 94%/98%，客戶續約率約 56%",
      keyPoints: [
        "<strong>個人目標下修約 20%</strong>，團隊目標約 4,800 萬",
        "獎金制度調整 — 發展金門檻降低，業績獎金預期增加",
        "AE 與 CS <strong>獎金邏輯統一</strong>，由 SS 團隊負責，避免重疊",
        "GO 產品獎金比例高於 AMP",
        "達成率低於 60% 進入 PIP",
        "獎金基準由 50 調升為 <strong>60</strong>，淘汰級距 30-59；達 80 則獎金翻倍",
        "季度加權係數定案：<strong>第一個月 ×1.1 / 第二個月 ×1.0 / 第三個月 ×0.9</strong>，鼓勵提前衝刺",
        "獎金指標改為<strong>季度 MRR（營業額）</strong>，刪除半年獎金及跨售重疊",
        "獎金預算約 430 萬，最高不超過 200 萬",
        "3/30 預算會議：<strong>年度營收目標由 1.8 億調整至 1.7 億</strong>",
        "一月達成率 94%、二月 98%，<strong>三月達成率 92%</strong>",
        "人事費用佔比 72%，非人事費用因預算遞延使用率較低",
        "台灣公司單體虧損約 <strong>1,100 萬</strong>，合併日本後淨利約 <strong>1,800 萬（8%）</strong>",
        "Q1 業績不理想，但 <strong>Q2 明顯回升</strong>，四月成績樂觀，營收已超越 Q1",
        "利用 <strong>AI 技術自動生成文章與追蹤 Prompt</strong>，提升內容產出效率",
        "推動 <strong>Total Solution</strong> 整合方案（GUO for GPT + Gemini），嘗試拓展英文 SEO",
        "四五月後續續約挑戰大，<strong>新訂單不足以完全抵銷客戶流失</strong>"
      ],
      chips: [
        { icon: "📉", text: "目標 1.7 億" },
        { icon: "💰", text: "Q1 虧損 1,100萬" },
        { icon: "🇯🇵", text: "合併淨利 1,800萬" },
        { icon: "🎯", text: "基準 60" },
        { icon: "⚖️", text: "加權 1.1/1.0/0.9" },
        { icon: "📈", text: "Q2 回升中" }
      ],
      todos: [
        { owner: "蔡阿達", text: "明天下午 2-3 點商談會議（與林思吾協作主持）", priority: "today" },
        { owner: "蔡阿達", text: "準備 pipeline 現況、客戶流失止血策略及 Q2 趨勢預估", priority: "today" },
        { owner: "蔡阿達", text: "推動 AI 技術應用於內容生成與提案自動化", priority: "week" },
        { owner: "蔡阿達", text: "協調 AE 團隊提前完成業績目標，避免集中季度末", priority: "week" },
        { owner: "Winny Chiang", text: "將調整後營收目標 1.7 億報表分享主管群", priority: "week" },
        { owner: "Winny Chiang", text: "持續觀察非人事費用使用率，提醒九十月編預算時注意費用時間匹配", priority: "waiting" },
        { owner: "Leo", text: "調整獎金方案版本，刪除跨售重疊及半年獎金", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-30",
          title: "Staff Meeting TW — 業務開發與 Q2 展望",
          time: "10:30-11:39",
          duration: "1h9m",
          participants: "蔡阿達、林思吾、藍文甫、Amber Liao、Libby Cheng、Winny Chiang、Anne Chang 等",
          docUrl: "",
          dialogues: [
            {
              topic: "Q1 業績與 Q2 展望",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "第一季業績表現不佳，但第二季起業績有急起急退現象，整體趨勢樂觀。四月成績較為理想，第二季營收已超過第一季。" },
                { speaker: "蔡阿達", role: "ada", text: "利用 AI 技術自動生成文章與追蹤 Prompt，提升內容產出效率，已產出初步成果。代理商合作增加，擴大市場戰線。" },
                { speaker: "蔡阿達", role: "ada", text: "推動 Total Solution 方案，整合 GUO for GPT 與 Gemini，視客戶預算調整方案深度。持續嘗試拓展英文 SEO 服務。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-30",
          title: "預算 Review 會議（線上）",
          time: "14:31-16:15",
          duration: "1h44m",
          participants: "蔡阿達、林思吾、Winny Chiang、Anne Chang、Libby Cheng、Leo、Steven Shih",
          docUrl: "",
          dialogues: [
            {
              topic: "營收目標調整與達成率",
              exchanges: [
                { speaker: "Winny Chiang", role: "other", label: "財務", text: "期初營收目標由 1.8 億調整至 1.7 億，原因包括基底數字與實際結算有約千萬落差，以及去年 Q4 估列收入 220 萬不確定。一二月達成率分別為 94% 與 98%，人事費用佔 72%。" },
                { speaker: "Winny Chiang", role: "other", label: "財務", text: "台灣公司單體虧損約 1,100 萬，合併日本後淨利約 1,800 萬，淨利率約 8%。四五月後續挑戰大，需密切關注客戶流失及續約狀況。" },
                { speaker: "蔡阿達", role: "ada", text: "既有客戶續約關鍵在於結合顧問服務與 AI 輔助產文及技術支援，提升內容及技術面資源，增加客戶黏著度。" }
              ]
            },
            {
              topic: "行銷銷售流程優化",
              exchanges: [
                { speaker: "Libby Cheng", role: "other", label: "MKT", text: "目前 SQL 分配存在盲點，部分名單未被 AE 分配，導致聯繫率低，建議細分名單類型以便更精準追蹤。" },
                { speaker: "蔡阿達", role: "ada", text: "目前名單多為隨機分配 AE，會主動追蹤聯繫狀況。承諾協助拉取分類數據，整合至 dashboard，方便管理層監控銷售漏斗狀況。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-27",
          title: "weekly sync up meeting",
          time: "11:00-12:28",
          duration: "1h28m",
          participants: "蔡阿達、Max（何建彤）、Leo（藍文甫）、Anne Chang",
          docUrl: "",
          dialogues: [
            {
              topic: "業績目標與團隊運作現況",
              exchanges: [
                { speaker: "Leo", role: "other", label: "Leo", text: "獎金辦法將於下週公布，解決團隊疑慮。案情盤點約 200 多家，預計四月底完成，之後將加強外部客戶開發，目標每月深入參與 20 家客戶會議。" },
                { speaker: "Max", role: "other", label: "管理層", text: "團隊無離職潮，成員願意配合新制度。Q1 產品發表為市場開拓訊號，Q2 為關鍵期。" },
                { speaker: "Max", role: "other", label: "管理層", text: "提醒蔡阿達需兼顧業績與提升業務團隊效率，工具開發應服務於業績目標。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-27",
          title: "AE 運轉加速/推動會議",
          time: "14:30-17:18",
          duration: "2h47m",
          participants: "蔡阿達、Rebecca Chen、蔡毓倫 Aiden、呂紹平 Leon、Bryan Chou",
          docUrl: "",
          dialogues: [
            {
              topic: "業績目標與獎金比例",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "今年業績目標比去年降低，獎金比例提升至最高兩倍以上。" },
                { speaker: "蔡阿達", role: "ada", text: "收款很重要，要求CS及時發出警訊提醒業務，尤其發票開立與匯款時間點需掌握。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-26",
          title: "獎金辦法討論",
          time: "14:11",
          duration: "19m",
          participants: "Winny Chiang、廖郁芳、Anne Chang、藍文甫、Leo、蔡阿達",
          docUrl: "",
          dialogues: [
            {
              topic: "獎金基準與加權係數確定",
              exchanges: [
                { speaker: "Winny Chiang", role: "other", label: "管理層", text: "老闆決定將業務獎金基準由 50 調整為 60，將獎金級距改為 60 到 79，淘汰級距為 30 到 59。為避免業務只在季末衝刺，提出依季度月份給予不同加權係數。" },
                { speaker: "廖郁芳", role: "other", label: "內部", text: "加權係數建議為 1.1、1.0、0.9，保持總和為 3，讓業務有衝勁。" },
                { speaker: "Anne Chang", role: "other", label: "內部", text: "若業務在第三個月無望，可能會推遲到下一季第一個月簽約以獲得較高加成。" },
                { speaker: "Winny Chiang", role: "other", label: "管理層", text: "仍鼓勵提前完成，第三個月獎金不會有加權，就是要扣減 0.1 避免季末衝刺。" }
              ]
            },
            {
              topic: "獎金指標改為營業額",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "續約率指標不準確，因客戶專案數量及品質不一，改以營業額作為獎金指標，涵蓋所有收入，包含新客戶開發及帳款回收。" },
                { speaker: "Anne Chang", role: "other", label: "內部", text: "客戶流失可由新客戶收入補足，營業額指標更能反映整體業績。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "業務需管理好帳款，避免續約但帳款未收回的情況。ST 組以獎勵方式發放，CW 組獨立計算，均以營業額為基準。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-24",
          title: "AE Team 週會",
          time: "11:31-12:22",
          duration: "51m",
          participants: "蔡阿達、Bryan、Rebecca、Leon、Aiden、馬愛雲",
          docUrl: "https://docs.google.com/document/d/1XPfYH6koiUxtLHztkHmiXL4HP5s8HIa4Q-7xuhkcJI0/edit",
          dialogues: [
            {
              topic: "業績目標調整",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "個人的目標會大幅的下降，因為我發現到之前你們的目標好像都太高。我會把大家的業績目標拉成同樣的一條水平，我們就是一起來面對這個部門的業績目標。應該會滑個 20% 左右，可是同時發展金的水平也會再降低，所以你們今年的業績獎金一定會領更多。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-24",
          title: "AE ↔ BA Meeting",
          time: "16:01-16:59",
          duration: "58m",
          participants: "蔡阿達、Leon、楊舒涵、Anne Chang、藍文甫",
          docUrl: "https://docs.google.com/document/d/1cz50wIZwJra59dCQ4b1wPImwfPibfhroM_6DLeRc9KI/edit",
          dialogues: [
            {
              topic: "獎金邏輯統一",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我這邊只要收到有廣告需求的，我就直接 pass 給賽斯。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "獎金邏輯全部統一，不要再分獎金了，不讓它重疊，由 SS 直接負責。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P5: 媒體經銷新模式 ======
    {
      id: "media-resell",
      name: "媒體經銷新商業模式（赫斯特 + 天下）",
      icon: "📺",
      category: "internal",
      lastUpdated: "2026-03-30",
      summary: "GEO GTM 會議確認媒體廣編稿服務方案 — 顧問搭配工具，提供半長期文章規劃、撰寫與成效追蹤服務",
      keyPoints: [
        "與赫斯特（時尚）及天下（財經）兩大媒體合作",
        "不採年約，<strong>兩個月為一期計算 MRR</strong>",
        "服務模式：<strong>顧問搭配工具</strong>，提供半長期服務，持續優化文章排名與建議",
        "服務內容包含<strong>規劃關鍵字、撰寫文章及成效追蹤</strong>",
        "媒體合作有助於<strong>深化與企業客戶關係</strong>，並擴大媒體影響力",
        "文章可能在多個媒體平台發布，需考慮媒體間的界限與影響力差異",
        "未來將針對<strong>不同媒體屬性分析</strong>，協助設定文章關鍵字與撰寫方向",
        "廣編稿服務可作為<strong>媒體與品牌客戶的共同推廣方案</strong>",
        "財務流程：一次性開立發票，透過 <strong>REG 系統</strong>登記專案"
      ],
      chips: [
        { icon: "📰", text: "赫斯特+天下" },
        { icon: "⏱️", text: "3 個月起" },
        { icon: "🔧", text: "顧問+工具" },
        { icon: "📋", text: "REG 登記" }
      ],
      todos: [
        { owner: "蔡阿達", text: "與 Winnie 確認媒體廣編稿服務的費用、定價、獎金及業績認列細節", priority: "today" },
        { owner: "蔡阿達", text: "制定媒體廣編稿服務流程與執行方案", priority: "week" },
        { owner: "蔡阿達", text: "持續推動赫斯特、天下合作案", priority: "week" },
        { owner: "蔡阿達 & Leo", text: "協同規劃服務內容、技術分析與 AI 工具應用", priority: "week" },
        { owner: "Leo", text: "協助討論合約、報價單及發票流程，與財務部門溝通", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-30",
          title: "GEO Go-to-Market 策略 — 媒體合作與廣編稿",
          time: "09:01-10:19",
          duration: "1h18m",
          participants: "蔡阿達、林思吾、何建彤、Amber Liao 等",
          docUrl: "",
          dialogues: [
            {
              topic: "媒體廣編稿服務策略",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "媒體客戶多有廣編稿需求，服務包含規劃關鍵字、撰寫文章及成效追蹤。合作模式為顧問搭配工具，提供半長期服務，持續優化文章排名與建議。" },
                { speaker: "林思吾", role: "other", label: "管理層", text: "媒體合作有助於深化與企業客戶關係，並擴大媒體影響力。文章可能在多個媒體平台發布，需考慮媒體間的界限與影響力差異。" },
                { speaker: "蔡阿達", role: "ada", text: "未來將針對不同媒體屬性分析，協助設定文章關鍵字與撰寫方向。廣編稿服務可作為媒體與品牌客戶的共同推廣方案。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-27",
          title: "weekly sync up meeting",
          time: "11:00-12:28",
          duration: "1h28m",
          participants: "蔡阿達、Max（何建彤）、Leo（藍文甫）、Anne Chang",
          docUrl: "",
          dialogues: [
            {
              topic: "廣編稿服務產品化討論",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "與赫斯特媒體合作的廣編稿服務新模式，結合關鍵字分析與 AI 提示詞追蹤，提供三至六個月的內容優化及效果追蹤服務。" },
                { speaker: "Max", role: "other", label: "管理層", text: "此服務較偏向內容撰寫服務，建議脫離傳統 SEO 服務，需產品化以利銷售及佣金計算。" },
                { speaker: "Leo", role: "other", label: "Leo", text: "此方案對媒體客戶最有價值，能促進媒體與客戶間的合作，建議將重心放在媒體端推廣。" },
                { speaker: "蔡阿達", role: "ada", text: "此服務可作為媒體廣編稿的加值方案，業務可兼賣此服務，提升業績與市場佔有率。" }
              ]
            },
            {
              topic: "財務流程與合約管理",
              exchanges: [
                { speaker: "Anne Chang", role: "other", label: "內部", text: "所有發票申請需透過 REG 系統，報價單與合約需明確區分。針對三個月一次的媒體方案，建議一次性開立發票。" },
                { speaker: "Anne Chang", role: "other", label: "內部", text: "若方案涉及人力介入，需上 REG 課程並配合公司流程。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-24",
          title: "AE Team 週會",
          time: "11:31-12:22",
          duration: "51m",
          participants: "蔡阿達、Bryan、Rebecca、Leon、Aiden、馬愛雲",
          docUrl: "https://docs.google.com/document/d/1XPfYH6koiUxtLHztkHmiXL4HP5s8HIa4Q-7xuhkcJI0/edit",
          dialogues: [
            {
              topic: "媒體經銷新模式",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我們跟媒體的合作可能會幫我們開創一個全新的商業模式。我們有可能是用一種經銷的方式，去賣我們的工具、Prompt、追蹤結果。兩個月兩個月來買，MRR 就是兩個月兩個月來算。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P6: AI 文章產製 ======
    {
      id: "ai-content",
      name: "AI 文章產製系統 & 品質控管",
      icon: "🤖",
      category: "internal",
      lastUpdated: "2026-03-27",
      summary: "10 篇人工 + 7 篇 AI 輔助，品牌知識庫驅動，25% 人工補強；英文版 GEO 工具規格化推進",
      keyPoints: [
        "文案團隊撰寫 10 篇（人類），7 篇 AI 輔助生成再經人類審核",
        "藍文甫堅持<strong>先內部測試</strong>，不可拿客戶當白老鼠",
        "Leon 建議保留 <strong>25% 人工補強</strong>，維持文章品質與人情味",
        "合約揭露時機：蔡阿達主張合約階段再說明 AI 文章性質",
        "英文文章需等<strong>五月招募</strong>具英文能力的 writer",
        "英文版 GEO 工具規格化：<strong>15 關鍵字起賣 + 7 篇英文文章</strong>，價格與中文版相近",
        "英文文章生成結合 <strong>AI + 專家審核</strong>，品質接近人類撰寫",
        "英文版合約建議<strong>至少 9 個月</strong>"
      ],
      chips: [
        { icon: "📝", text: "17篇/月" },
        { icon: "👤", text: "25% 人工" },
        { icon: "🗓️", text: "英文 Writer 五月" }
      ],
      todos: [
        { owner: "藍文甫", text: "內部先測試 AI 文章品質", priority: "waiting" },
        { owner: "蔡阿達", text: "共同撰寫 AI 文章相關合約條款", priority: "week" },
        { owner: "蔡阿達", text: "完成品牌背景資料收集表單", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-27",
          title: "AE 運轉加速/推動會議",
          time: "14:30-17:18",
          duration: "2h47m",
          participants: "蔡阿達、Rebecca Chen、蔡毓倫 Aiden、呂紹平 Leon、Bryan Chou",
          docUrl: "",
          dialogues: [
            {
              topic: "英文版 GEO 工具規格化",
              exchanges: [
                { speaker: "蔡毓倫 Aiden", role: "other", label: "AE", text: "英文版GEO工具建議規格化，價格可與中文版相同，初期以7篇文章為基準。" },
                { speaker: "蔡阿達", role: "ada", text: "文章生成結合AI與專家審核，內容接近人類撰寫。合約建議至少9個月，業務需積極說服。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-24",
          title: "AE Team 週會",
          time: "11:31-12:22",
          duration: "51m",
          participants: "蔡阿達、Bryan、Rebecca、Leon、Aiden、馬愛雲",
          docUrl: "https://docs.google.com/document/d/1XPfYH6koiUxtLHztkHmiXL4HP5s8HIa4Q-7xuhkcJI0/edit",
          dialogues: [
            {
              topic: "文章產製模式",
              exchanges: [
                { speaker: "Aiden", role: "other", label: "AE", text: "所以就是十篇是現在的模式撰寫，七篇是 AI 協助撰寫對不對？" },
                { speaker: "蔡阿達", role: "ada", text: "對。你可以跟客戶說清楚，17 篇都是用我們人類來撰寫規劃，其中 10 篇由人類寫出來，7 篇是拿規劃去輔助用 AI 生成，再透過人類來潤飾。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-24",
          title: "AE ↔ BA Meeting",
          time: "16:01-16:59",
          duration: "58m",
          participants: "蔡阿達、Leon、楊舒涵、Anne Chang、藍文甫",
          docUrl: "https://docs.google.com/document/d/1cz50wIZwJra59dCQ4b1wPImwfPibfhroM_6DLeRc9KI/edit",
          dialogues: [
            {
              topic: "AI 文章品質控管",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "不是你賣的同時拿客戶來測，這會出事，等於把客戶當白老鼠。我是說內部先測。" },
                { speaker: "蔡阿達", role: "ada", text: "對我跟 AI 的了解，我真的覺得它的產出品質已經沒有什麼好擔心的了。我們就是事先跟客戶講好，我們幫他規劃文章，用 AI 輔助生成。" },
                { speaker: "Leon", role: "other", label: "AE", text: "人的價值是 AI 產完之後，人看過，語句通順。人的價值在這裡。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "留點人情味，人工補強大概 25%，去限制它。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P7: NOUVA ======
    {
      id: "nouva",
      name: "NOUVA — 語系轉向 & SEO 策略調整",
      icon: "🌍",
      category: "client",
      lastUpdated: "2026-03-24",
      summary: "從法文課轉攻英語課市場，網站語系大調整 + 合約變更",
      keyPoints: [
        "英語市場規模比法文大<strong>10-20 倍</strong>，決定優先推動英語課程",
        "定位「主題式英語口說」（Workshop / EMI），非傳統補習班",
        "中文內容需搬移至新站（MARS），做 <strong>301 轉址</strong>移轉權重",
        "原兩年法文 SEO 合約需暫停調整方向"
      ],
      chips: [
        { icon: "📊", text: "市場差距 10-20x" },
        { icon: "📄", text: "合約 2 年" },
        { icon: "🌐", text: "新站本週上線" }
      ],
      todos: [
        { owner: "蔡阿達", text: "與瑞恩、MAX 溝通合約暫停及調整方案", priority: "week" },
        { owner: "蔡阿達", text: "與五樓討論中文語系網站技術細節", priority: "week" },
        { owner: "蔡阿達", text: "重新挑選中文關鍵字（英語口說 / EMI）", priority: "week" },
        { owner: "蔡阿達", text: "協助 301 轉址（舊站→新站）", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-24",
          title: "NOUVA 官網 GEO 方案合作狀況同步",
          time: "13:00-13:46",
          duration: "45m",
          participants: "蔡阿達、Janet Lin",
          docUrl: "https://docs.google.com/document/d/1YLedJXV_V0t6qrgh3zz2oPH1LyoATdPFxPvVp0opmlg/edit",
          dialogues: [
            {
              topic: "語系轉向決策",
              exchanges: [
                { speaker: "Janet Lin", role: "other", label: "NOUVA", text: "英語的市場規模跟其他語言實在差太多，雖然全世界最多人學的第二語言是法語，可是跟第一名差了十倍二十倍。我們一直很難賺錢，雖然東西很好。" },
                { speaker: "蔡阿達", role: "ada", text: "你不管想要換到哪一個語言都 OK，反正我們原本找 MARS 就是為了要先建置好一個彈性的體質。" },
                { speaker: "Janet Lin", role: "other", label: "NOUVA", text: "台灣人需要的不是英文課，需要的其實是一個環境，然後你可以用英文去輸出。" }
              ]
            },
            {
              topic: "SEO 排名困惑",
              exchanges: [
                { speaker: "Janet Lin", role: "other", label: "NOUVA", text: "我的網站有那麼爛嗎？那些競爭對手的網站，有的就只有一張圖耶，一張圖，然後就出現在第一頁。" },
                { speaker: "蔡阿達", role: "ada", text: "有時候不是自己做得太爛，是有些人先天優勢比較強。他們牌子夠老，做很久，先天就比你有優勢。" },
                { speaker: "蔡阿達", role: "ada", text: "現在有 AI 了，你不用去在意那個排名，你只要把事情做好做對，你的目標族群在問 AI 問題的時候，AI 會直接把你推舉在前面。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P9: MKT 四月聯合 Webinar ======
    {
      id: "mkt-webinar-apr",
      name: "MKT 四月聯合 Webinar — GEO × OneAd × 比幣",
      icon: "📣",
      category: "events",
      lastUpdated: "2026-03-25",
      summary: "四月聯合 Webinar 演講準備 — 4/13 交簡報、4/16 錄影、4/28 Shopline 場",
      keyPoints: [
        "與 OneAd（數位廣告 AI 應用）、比幣（CRM 會員管理）三方聯合 Webinar",
        "蔡阿達主講 GEO 相關 AI 搜尋趨勢（30 分鐘）+ 三方 Panel 對談",
        "錄影流程：先個人演講錄製，再 Panel 錄製；線上彩排先熟悉問答方向",
        "名單共享、行銷資源交換，每月固定舉辦",
        "<strong>4/28 Shopline 客戶場</strong>，下午 2:30-4:00，面向 Shopline 既有客戶"
      ],
      chips: [
        { icon: "📅", text: "4/13 簡報初稿" },
        { icon: "🎬", text: "4/16 實體錄影" },
        { icon: "🏪", text: "4/28 Shopline" },
        { icon: "⏱️", text: "30min 演講" }
      ],
      todos: [
        { owner: "蔡阿達", text: "4/13 前提供四月活動演講簡報初稿給 Iris Tsai", priority: "week" },
        { owner: "蔡阿達", text: "4/16 參與實體錄影（個人演講 + Panel 錄製）", priority: "week" },
        { owner: "蔡阿達", text: "確認 4/28 Shopline 演講是否需夥伴支援", priority: "week" },
        { owner: "Iris Tsai", text: "提供最新一次活動完整簡報範本給蔡阿達", priority: "waiting" },
        { owner: "Iris Tsai", text: "安排線上彩排，提前告知講師問答方向", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-03-25",
          title: "MKT webinar 流程說明 - with Ada",
          time: "10:00-10:21",
          duration: "21m",
          participants: "蔡阿達、Libby Cheng、Iris Tsai",
          docUrl: "",
          dialogues: [
            {
              topic: "四月活動合作模式",
              exchanges: [
                { speaker: "Libby Cheng", role: "other", label: "MKT", text: "活動是公司每月固定舉辦，與夥伴共同合辦並共享名單，活動主題緊扣行銷與AI應用，提供行銷資源交換機會。" },
                { speaker: "Iris Tsai", role: "other", label: "MKT", text: "本次三大議題：GEO相關AI搜尋與趨勢、OneAd數位廣告AI應用及比幣CRM會員管理。每位講師30分鐘演講後，進行三方Panel對談。" },
                { speaker: "蔡阿達", role: "ada", text: "我比較希望在4月13日之前收到簡報範本，因為技術變化很快，需要保留調整空間。" }
              ]
            },
            {
              topic: "錄影與彩排安排",
              exchanges: [
                { speaker: "Iris Tsai", role: "other", label: "MKT", text: "彩排時先溝通問題與回答方向，避免錄影當天出現意外狀況。錄影當天先錄製個人演講，再進行Panel錄製。" },
                { speaker: "Libby Cheng", role: "other", label: "MKT", text: "彩排為線上軟性會議，讓講師彼此熟悉並促進交流，減少錄影時的生疏感。" },
                { speaker: "蔡阿達", role: "ada", text: "我理解，我會隨機應變並配合安排。" }
              ]
            },
            {
              topic: "4/28 Shopline 演講確認",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "4月28日我在Shopline辦公室有演講。" },
                { speaker: "Iris Tsai", role: "other", label: "MKT", text: "那場是面向Shopline既有客戶，時間是下午2:30至4:00，我先行預訂時間。若有衝突會協調夥伴支援。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P8: HubSpot 流程優化 ======
    {
      id: "hubspot-flow",
      name: "HubSpot Deal 流程 & GEO 資料標記",
      icon: "⚙️",
      category: "company",
      lastUpdated: "2026-03-30",
      summary: "Pipeline 數據清理 — 1% 案件拉升至 10%、MRR 與總金額分開管理、重複訂單定義與行銷對齊",
      keyPoints: [
        "新增自訂欄位標記 GEO 相關客戶（品牌、代理商、發布會）",
        "新增 Deal Type：<strong>GO 顧問方案 / GO 工具方案</strong>",
        "Uncategorized pipeline 通知發到 <strong>Slack 公共頻道</strong>",
        "今年新成交單<strong>僅兩筆</strong>，多數案件為年前延續",
        "決議 <strong>1% 階段案件拉升至 10%</strong>，分析 10% 階段卡關原因並推進",
        "優化金額填寫規範：<strong>MRR 與總金額分開管理</strong>，50% 以上案件必填",
        "重複訂單定義：今年有參加過活動的才算重複，與行銷算法對齊",
        "Close lost 案件<strong>不應回拉</strong>，應重新創建新 deal",
        "蔡阿達將製作<strong>會議摘要與 Pipeline 表格連結</strong>，方便團隊隨時查看",
        "4/1 起固定客戶訪談時段：<strong>週三 15:00-16:00、週四 10:00-12:00</strong>",
        "工具月費不低於 3 萬，<strong>90 個 Prompt 為甜蜜點</strong>"
      ],
      chips: [
        { icon: "📊", text: "新成交僅 2 筆" },
        { icon: "⬆️", text: "1%→10% 拉升" },
        { icon: "💰", text: "MRR 分開填" },
        { icon: "🏷️", text: "月費 ≥ 3萬" }
      ],
      todos: [
        { owner: "呂紹平 Leon", text: "匯出更新後銷售管道報表，協助 1% 案件合理拉升至 10%", priority: "today" },
        { owner: "呂紹平 Leon", text: "確認 HubSpot 與行銷部資料來源對齊，新增 event 標籤欄位", priority: "week" },
        { owner: "各 AE", text: "更新 1% → 10% 案件狀態，填寫 50% 以上案件 MRR 與總金額", priority: "today" },
        { owner: "各 AE", text: "釐清 10% 階段案件未能推進原因，持續跟進", priority: "week" },
        { owner: "蔡阿達", text: "製作會議摘要與 Pipeline 表格連結，收集團隊回饋", priority: "week" },
        { owner: "蔡阿達", text: "4/1 起落實固定客戶訪談時段（週三 15-16、週四 10-12）", priority: "week" },
        { owner: "Bryan Chou", text: "增加潛在客戶接洽數量，善用網站健檢報告提案", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-30",
          title: "awoo 2026 Q1 Pipeline 戰情儀表板確認",
          time: "12:00-12:38",
          duration: "38m",
          participants: "蔡阿達、呂紹平 Leon、Rebecca Chen、蔡毓倫 Aiden",
          docUrl: "",
          dialogues: [
            {
              topic: "Pipeline 數據清理與案件拉升",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "從今年 1 月 1 日開始的新成交單僅兩筆，推測多數案件為年前延續。1% 階段案件要盡量拉升至 10%，10% 階段卡關案件需分析推進瓶頸。" },
                { speaker: "呂紹平 Leon", role: "other", label: "AE", text: "目前拉取資料是從 HubSpot 的 creatday 欄位，但因重複訂單及資料處理方式，創建時間可能不準確，建議分開拉取不同類型資料。" },
                { speaker: "蔡毓倫 Aiden", role: "other", label: "AE", text: "我管理的案件有三種狀況：新進案件、尚未約會議、以及過去 close lost 但有意願的客戶。" },
                { speaker: "蔡阿達", role: "ada", text: "Close lost 案件不應回拉，應重新創建新 deal。50% 以上案件必填 MRR 與總金額，uncategory 類別也需整理，先標註未聯絡狀態方便追蹤。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-27",
          title: "AE 運轉加速/推動會議",
          time: "14:30-17:18",
          duration: "2h47m",
          participants: "蔡阿達、Rebecca Chen、蔡毓倫 Aiden、呂紹平 Leon、Bryan Chou",
          docUrl: "",
          dialogues: [
            {
              topic: "固定客戶訪談時段與代理商管理",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "從4/1起每週三下午3-4點、週四上午10-12點為固定客戶訪談時段，業務需將客戶名稱及背景填入共享行事曆。" },
                { speaker: "蔡阿達", role: "ada", text: "代理商客戶應由專屬CS負責，包修改服務報價需合理調整，代理商需匿名資料輸出功能。" }
              ]
            },
            {
              topic: "客戶提案策略",
              exchanges: [
                { speaker: "Bryan Chou", role: "other", label: "AE", text: "部分客戶對提案反應正面但缺乏明確合作誘因。" },
                { speaker: "蔡阿達", role: "ada", text: "用網站健檢報告指出問題，激發客戶需求。首次提案需讓客戶感受到迫切合作必要性。" },
                { speaker: "蔡阿達", role: "ada", text: "現階段為公司黃金十年，資源豐富，應把握機會提升業績。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-24",
          title: "AE ↔ BA Meeting",
          time: "16:01-16:59",
          duration: "58m",
          participants: "蔡阿達、Leon、楊舒涵、Anne Chang、藍文甫",
          docUrl: "https://docs.google.com/document/d/1cz50wIZwJra59dCQ4b1wPImwfPibfhroM_6DLeRc9KI/edit",
          dialogues: [
            {
              topic: "GEO 資料標記 & Uncategorized",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "是不是跟 GEO 相關有很重要嗎？現在幾乎不是都跟 GEO 相關嗎？" },
                { speaker: "Leon", role: "other", label: "AE", text: "對於 AE 來講，我們自己其實不用清楚它是需要 AMP、SEO 還是 GO。主要是看最後成交。" },
                { speaker: "蔡阿達", role: "ada", text: "我們再加一個好了，就叫它 GO。" },
                { speaker: "蔡阿達", role: "ada", text: "Uncategorized 的東西理論上應該要一直發通知，盡可能保持淨空。發到 Slack 公共頻道，全部人都看得到。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-24",
          title: "AE Team 週會",
          time: "11:31-12:22",
          duration: "51m",
          participants: "蔡阿達、Bryan、Rebecca、Leon、Aiden、馬愛雲",
          docUrl: "https://docs.google.com/document/d/1XPfYH6koiUxtLHztkHmiXL4HP5s8HIa4Q-7xuhkcJI0/edit",
          dialogues: [
            {
              topic: "工具定價與客戶維護",
              exchanges: [
                { speaker: "Bryan", role: "other", label: "AE", text: "到了 30 個關鍵字以上，八折就沒辦法涵蓋了。有沒有機會像 SEO 那樣隨著 package 越大有價格曲線？" },
                { speaker: "蔡阿達", role: "ada", text: "這個費用不是量變多就會降的，大語言模型的成本就是用數量來算。但我們可以不要追那麼多 Prompt，90 個是一個很好的甜蜜點。另外如果客戶願意讓我們放 Logo，工具就不用跟他收錢。" },
                { speaker: "Leon", role: "other", label: "AE", text: "到時候如果客戶一多起來，AE 就每天在維護，沒有時間開發了。" },
                { speaker: "蔡阿達", role: "ada", text: "現階段如果真的要維護，就一律讓我來也可以。後台會開發客戶自助改 Prompt 功能，應該也是這三個月過渡而已。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P10: Jerry 後端主管晉升 & AI 工具商業化 ======
    {
      id: "str-promotion",
      name: "人事評議 & AI 工具商業化流程",
      icon: "🏗️",
      category: "company",
      lastUpdated: "2026-03-25",
      summary: "Jerry 晉升後端主管通過人評，同步討論 AI 文案審核機制、多品牌帳號管理及過渡期服務設計",
      keyPoints: [
        "Jerry 晉升後端主管，四位委員全票通過，HR 啟動後續人事作業",
        "Team B 人力三人，短期集中 GU 需求，不細分分工",
        "<strong>AI 文案審核</strong>：建立驗證模式，以簡易介面過渡，避免客戶素材爭議",
        "<strong>多品牌帳號管理系統</strong>：以統編為主，目標<strong>五月中</strong>完成設計與測試",
        "過渡期人工處理追蹤設定、Prompt 數量限制與結案報告"
      ],
      chips: [
        { icon: "✅", text: "Jerry 晉升通過" },
        { icon: "🗓️", text: "多品帳號 5月中" },
        { icon: "🤖", text: "AI 文案審核" },
        { icon: "⏱️", text: "過渡期人工支援" }
      ],
      todos: [
        { owner: "蔡阿達", text: "與藍文甫設計 AI 輔助文案審核的驗證模式與流程", priority: "week" },
        { owner: "蔡阿達", text: "與團隊建立客戶素材 AI 比對簡易介面", priority: "week" },
        { owner: "蔡阿達", text: "與力友討論 AI 工具商業模式與 CS 服務銜接", priority: "week" },
        { owner: "蔡阿達", text: "制定追蹤網址與 Prompt 數量限制的遊戲規則", priority: "week" },
        { owner: "蔡阿達", text: "負責過渡期人工設定追蹤項目及結案報告整理", priority: "week" },
        { owner: "何建彤", text: "多品牌帳號管理系統設計與開發，目標五月中完成", priority: "waiting" },
        { owner: "黃郁雯", text: "Jerry 晉升結果呈報 Mike，啟動人事作業", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-03-25",
          title: "人評會-STR",
          time: "14:31-15:44",
          duration: "1h13m",
          participants: "蔡阿達、何建彤、Steven、Jerry、林思吾、黃郁雯",
          docUrl: "",
          dialogues: [
            {
              topic: "Jerry 晉升簡報 & 委員提問",
              exchanges: [
                { speaker: "Jerry", role: "other", label: "後端工程師", text: "團隊目標需貼齊公司願景，避免成員感覺工作無意義。我強調的是知識分享，避免關鍵技術集中於個別成員。" },
                { speaker: "Steven", role: "other", label: "管理層", text: "Jerry 在阿物及前兩家公司均有後端主管經驗，管理規模約五至十人，技術上負責大流量效能優化，風格適合穩定現有團隊。" },
                { speaker: "林思吾", role: "other", label: "委員", text: "我們會補足團隊人力，先透過評議程序認識 Jerry，投票結果四位委員均同意晉升。" }
              ]
            },
            {
              topic: "AI 文案審核 & 商業化流程",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我建議以人工設定帳號及追蹤網址，設定固定期限結案，減少頻繁調整造成的管理負擔。現階段先以人工方式過渡，業務端與客戶溝通限制與規則。" },
                { speaker: "何建彤", role: "other", label: "彤²", text: "多品牌管理複雜度高，需考慮客戶頻繁調整需求的操作難度，建議未來以 API 或資料探索介面提升管理效率。" },
                { speaker: "蔡阿達", role: "ada", text: "先以人工方式處理過渡期，確保服務可行且成本可控。AI 產出英文初稿需驗證品質，避免客戶因 AI 生成內容不符而產生爭議。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P12: 行銷渠道數據整合 & 預算會議 ======
    {
      id: "mkt-data-report",
      name: "行銷渠道數據整合 & SQL 流程優化",
      icon: "📊",
      category: "internal",
      lastUpdated: "2026-03-30",
      summary: "三月名單 101 筆、發佈會轉換 23 筆 SQL；預算會議確認 SQL 分配需細分名單類型，優化銷售漏斗追蹤",
      keyPoints: [
        "三月有效名單 <strong>101 筆</strong>，各渠道名單成本穩定",
        "新品發佈會邀請 250 間公司，排除既有客戶後 <strong>178 間新公司轉換成 23 筆 SQL</strong>",
        "Google 廣告 SEO 字成本略升，已調整預算與投放策略",
        "SQL 分配存在盲點，部分名單未被 AE 分配導致聯繫率低",
        "建議<strong>細分名單類型</strong>（inquiry / event / cold call），不同類型轉換率差異顯著",
        "蔡阿達承諾協助拉取分類數據，<strong>整合至 dashboard</strong>",
        "Libby 將製作包含 <strong>FQL → SQL 轉換率</strong>的簡報頁面",
        "白皮書下載量微幅增加，活動帶動 SQL 數量提升"
      ],
      chips: [
        { icon: "📋", text: "101 筆名單" },
        { icon: "🎯", text: "23 筆 SQL" },
        { icon: "📈", text: "FQL→SQL 追蹤" },
        { icon: "🗂️", text: "名單分類" }
      ],
      todos: [
        { owner: "蔡阿達", text: "協助拉取名單分類數據（inquiry / cold call / event），整合至 dashboard", priority: "today" },
        { owner: "蔡阿達", text: "持續監控 AE 分配及聯繫狀況，確保名單有效跟進", priority: "week" },
        { owner: "Libby Cheng", text: "製作包含 FQL → SQL 轉換率的簡報頁面，分析 AE 跟進狀況", priority: "week" },
        { owner: "Libby Cheng", text: "持續推動 GU Suite 相關廣告投放與行銷素材製作", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-30",
          title: "Staff Meeting TW — 行銷名單與活動成效",
          time: "10:30-11:39",
          duration: "1h9m",
          participants: "蔡阿達、Libby Cheng、林思吾 等",
          docUrl: "",
          dialogues: [
            {
              topic: "三月行銷名單成效",
              exchanges: [
                { speaker: "Libby Cheng", role: "other", label: "MKT", text: "三月份因新品發佈會及多場活動，名單量明顯增加。有效名單 101 筆，SQL 量自二月起由 Ada 直接分配，表現良好。發佈會邀請 250 間公司，排除既有客戶後 178 間新公司轉換成 23 筆 SQL。" },
                { speaker: "蔡阿達", role: "ada", text: "各渠道名單成本穩定，Google 廣告 SEO 字成本略有上升，已調整預算與投放策略。白皮書下載量微幅增加。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-30",
          title: "預算 Review 會議 — SQL 流程優化",
          time: "14:31-16:15",
          duration: "1h44m",
          participants: "蔡阿達、Libby Cheng、林思吾 等",
          docUrl: "",
          dialogues: [
            {
              topic: "SQL 分配與追蹤優化",
              exchanges: [
                { speaker: "Libby Cheng", role: "other", label: "MKT", text: "目前 SQL 分配存在盲點，部分名單未被 AE 分配導致聯繫率低。建議細分名單類型以便更精準追蹤，因不同類型名單轉換率有顯著差異。" },
                { speaker: "蔡阿達", role: "ada", text: "目前名單多為隨機分配 AE，會主動追蹤聯繫狀況。承諾協助拉取分類數據，整合至 dashboard，方便管理層監控銷售漏斗。" },
                { speaker: "Libby Cheng", role: "other", label: "MKT", text: "此舉有助於提升行銷與銷售協同效率，避免資源浪費。我將製作包含 FQL 到 SQL 轉換率的簡報頁面。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-26",
          title: "1:1 Meeting_Libby",
          time: "17:09",
          duration: "19m",
          participants: "蔡阿達、Angelline、Libby",
          docUrl: "",
          dialogues: [
            {
              topic: "行銷渠道數據拆分需求",
              exchanges: [
                { speaker: "Angelline", role: "other", label: "MKT", text: "我建議將 GO 建檢與 GO Switch 產品線拆分，方便後續報告細化。目前已有類似表格但未細拆產品線，需與 Hotspot 數據比對驗證，承諾明日中午前完成並提供給蔡阿達。" },
                { speaker: "蔡阿達", role: "ada", text: "我只需要各渠道 MQL 及轉成 SQL 的數量與比例，無需完整 Raw Data，方便快速追蹤與分析。官網聯絡跟建檢可以合併，但同意拆分有助於分析。" },
                { speaker: "Angelline", role: "other", label: "MKT", text: "麥可關注的重點是從源頭開始追蹤各渠道的 Lead 轉換至 SQL 及結單情況，強調需從行銷漏斗上層開始分析。" }
              ]
            },
            {
              topic: "預算會議與跨部門協作",
              exchanges: [
                { speaker: "Angelline", role: "other", label: "MKT", text: "麥可首次要求跨部門協作報告，時間較晚通知，造成行銷端時間壓力。我因個人行程無法全程參與，將由 Libby 協助完成報告製作，並安排明日上午與蔡阿達溝通細節。" },
                { speaker: "蔡阿達", role: "ada", text: "行銷端負責 MQL 轉 SQL 的任務，我願意協助解答問題。雙方約週一前完成報告準備。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P13: 短約文章撰寫服務 ======
    {
      id: "short-contract-writing",
      name: "短約文章撰寫服務 — 新商品開發",
      icon: "✍️",
      category: "internal",
      lastUpdated: "2026-03-27",
      summary: "全新商品概念 — 短約制關鍵字規劃 + 文章撰寫 + GEO 成效追蹤，穩賺不賠低毛利模式",
      keyPoints: [
        "蔡阿達提出<strong>短約文章撰寫服務</strong>新商品概念",
        "目標客群：<strong>網站規模較大且具品牌知名度</strong>的客戶",
        "服務內容：關鍵字規劃 → 文章撰寫 → 成效追蹤，搭配自家工具追蹤文章被引用情況",
        "商業模式：<strong>穩賺不賠但毛利率較低</strong>，不需大量 CS 人力維護",
        "銷售心態轉型：賣工具、賣解決方案，降低客戶導入門檻",
        "無技術單位客戶 → 賣工具；有規模網站 → <strong>工具 + 文章撰寫</strong>",
        "下週一與相關部門（Leo、產品、REG、CS）討論包裝與推廣細節"
      ],
      chips: [
        { icon: "📝", text: "短約制" },
        { icon: "🔑", text: "關鍵字規劃" },
        { icon: "📊", text: "成效追蹤" },
        { icon: "💡", text: "低毛利穩賺" }
      ],
      todos: [
        { owner: "蔡阿達", text: "下週一與 Leo、產品、REG、CS 討論短約文章服務包裝與推廣方式", priority: "today" },
        { owner: "蔡阿達", text: "設計短約文章撰寫服務的商品規格與定價方案", priority: "week" },
        { owner: "蔡阿達", text: "盤點適合推廣短約服務的目標客戶名單", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-27",
          title: "AE 運轉加速/推動會議",
          time: "14:30-17:18",
          duration: "2h47m",
          participants: "蔡阿達、Rebecca Chen、蔡毓倫 Aiden、呂紹平 Leon、Bryan Chou",
          docUrl: "",
          dialogues: [
            {
              topic: "新商品短約服務",
              exchanges: [
                { speaker: "Rebecca Chen", role: "other", label: "AE", text: "那但只要是短約CS那邊是不是都會說叫AE來負責整個執行" },
                { speaker: "蔡阿達", role: "ada", text: "這個問題我已經有跟Leo先打過招呼了，下週一會跟他們討論說這個東西要怎麼包，有沒有辦法推，然後產品啊，REG那邊啊，CS維護上。" },
                { speaker: "蔡阿達", role: "ada", text: "這個方案理論上穩賺不賠的原因是我們就是賣我們最有機會推動的那一塊而已。簡單來說就是先幫他看關鍵字，找prompt，研究他網站內容佔比，找到關鍵字和prompt後再幫他寫文章、追蹤成效。" }
              ]
            },
            {
              topic: "銷售心態轉型",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "現在我們有工具，有AI，我們可以主打的是賣工具、賣解決方案。先不要讓客戶覺得要做很多事情很麻煩。" },
                { speaker: "蔡阿達", role: "ada", text: "如果客戶沒有技術單位，我們就轉變身份——賣工具。工具就是幫他追蹤關鍵字和內容有沒有結果。如果是有規模的網站，就賣工具加文章撰寫。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P14: 代理商政策制定與管理 ======
    {
      id: "agent-policy",
      name: "代理商政策制定與管理",
      icon: "🤝",
      category: "company",
      lastUpdated: "2026-03-30",
      summary: "代理商 12 家、品牌客戶約 30 家；名單改由蔡阿達與李昂直接管理，推動一年期獨家合約",
      keyPoints: [
        "目前代理商 <strong>12 家</strong>，品牌客戶約 <strong>30 家</strong>，僅啓端與日立昌已簽約",
        "代理商名單<strong>直接交由蔡阿達與李昂管理</strong>，避免 BDR 流程冗長，提升轉換效率",
        "建議簽訂<strong>一年期獨家合約</strong>，防止競爭者介入",
        "大型代理商如<strong>澳門集團、聯廣、雅虎、天下集團、赫斯特</strong>均有合作意向",
        "代理商合作模式以<strong>三方加值</strong>為主，KPI 與 awoo 一致",
        "客戶對工具的數據來源與功能認知不足，需主動<strong>教育客戶並提供說明影片與腳本</strong>",
        "由 <strong>Leo 負責制定代理商管理政策初稿</strong>，四月前完成",
        "Max 提出建立<strong>媒體池</strong>構想 — 與多家媒體談判取得代理商價格"
      ],
      chips: [
        { icon: "📋", text: "政策初稿 4月" },
        { icon: "🤝", text: "12 家代理商" },
        { icon: "📄", text: "獨家合約 1年" },
        { icon: "🔧", text: "Ada+李昂管理" }
      ],
      todos: [
        { owner: "蔡阿達", text: "盤點代理商合作流程與方案，整合價格與功能差異，完善專屬窗口與簡報內容", priority: "today" },
        { owner: "林思吾", text: "推動制定代理商獨家合約草案，期限一年，與集團層級洽談", priority: "week" },
        { owner: "Max Huang", text: "準備代理商教材，協助代理商有效推廣產品與服務", priority: "week" },
        { owner: "Leo", text: "完成代理商管理政策初稿，含客戶衝突協調機制與激勵政策", priority: "week" },
        { owner: "Max", text: "推動與赫斯特等媒體代理商合作，建立媒體池並談判代理價格", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-30",
          title: "GEO Go-to-Market 策略",
          time: "09:01-10:19",
          duration: "1h18m",
          participants: "蔡阿達、何建彤、林思吾、Amber Liao、Max Huang、藍文甫、呂紹平 等",
          docUrl: "",
          dialogues: [
            {
              topic: "代理商合作現況與名單管理",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "代理商有 12 家，品牌客戶約 30 家，真正簽約客戶較少，僅啓端與日立昌已簽約。代理商名單直接交由我與李昂管理，避免 BDR 僅約會議，提升名單轉換效率。" },
                { speaker: "林思吾", role: "other", label: "管理層", text: "代理商合作建議簽訂一年期獨家合約，防止競爭者介入。代理商數量多且積極，需制定合約與特殊條件以促進合作。" },
                { speaker: "蔡阿達", role: "ada", text: "需製作客戶教育影片與腳本，提升客戶對工具功能與數據來源的理解。代理商合作模式與我們服務綁定，KPI 一致，三方加值。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-30",
          title: "Staff Meeting TW — GEO 產品市場推廣",
          time: "10:30-11:39",
          duration: "1h9m",
          participants: "蔡阿達、林思吾、藍文甫 等",
          docUrl: "",
          dialogues: [
            {
              topic: "代理商推廣進展",
              exchanges: [
                { speaker: "林思吾", role: "other", label: "管理層", text: "Pipeline 約有七八十家企業，40 多家已簽 lease，其中 10 多家為代理商。大型代理商如澳門集團臺灣董事總經理在說明會後即邀談合作，其他如聯廣、雅虎、天下集團、赫斯特也有合作意向。" },
                { speaker: "蔡阿達", role: "ada", text: "代理商合作增加，擴大市場戰線。客戶對 AI 指標仍較陌生，推廣速度較預期慢，但整體仍在良好軌道。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-27",
          title: "weekly sync up meeting",
          time: "11:00-12:28",
          duration: "1h28m",
          participants: "蔡阿達、Max（何建彤）、Leo（藍文甫）、Anne Chang",
          docUrl: "",
          dialogues: [
            {
              topic: "代理商合作模式與政策制定",
              exchanges: [
                { speaker: "Max", role: "other", label: "管理層", text: "工具加顧問服務的市場定位，AI 技術使顧問服務可規模化。代理商在接觸不熟悉客戶群及大型客戶時非常重要。" },
                { speaker: "蔡阿達", role: "ada", text: "代理商管理重點是避免代理商間衝突，強調協調機制的重要性。" },
                { speaker: "Max", role: "other", label: "管理層", text: "建立媒體池的構想，透過與多家媒體談判取得代理商價格，提升內部及外部代理商的服務效能。" },
                { speaker: "Leo", role: "other", label: "Leo", text: "我負責制定代理商管理政策初稿，內容包括代理商間的協調機制、激勵政策及 Presale Team 支援。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P15: 業務開發工具 — 網站內容分析系統 ======
    {
      id: "bd-tool",
      name: "業務開發工具 — 網站內容分析系統",
      icon: "🔧",
      category: "internal",
      lastUpdated: "2026-03-27",
      summary: "蔡阿達自行開發網站內容分析工具，用 LLM 渲染內容主題分佈，提升業務提案效率",
      keyPoints: [
        "工具能<strong>爬取網站內容並分析關鍵字分佈</strong>，快速掌握客戶網站狀況",
        "用<strong>大語言模型渲染內容主題分佈</strong>，提升業務提案效率",
        "Max 建議優先用於提升<strong>內部 AE 團隊效率</strong>，後續可推廣給代理商",
        "與 MMO、GEO 工具邏輯不同，視狀況決定是否整合",
        "目標：<strong>節省業務開發時間、增加轉單率</strong>"
      ],
      chips: [
        { icon: "🕷️", text: "網站爬取" },
        { icon: "🤖", text: "LLM 分析" },
        { icon: "📊", text: "主題分佈" },
        { icon: "⚡", text: "提案加速" }
      ],
      todos: [
        { owner: "蔡阿達", text: "持續優化網站內容分析工具，確保穩定性與使用體驗", priority: "week" },
        { owner: "蔡阿達", text: "優先將工具應用於自家 AE 團隊，評估效果", priority: "week" },
        { owner: "蔡阿達", text: "評估後續開放代理商使用的可行性", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-03-27",
          title: "weekly sync up meeting",
          time: "11:00-12:28",
          duration: "1h28m",
          participants: "蔡阿達、Max（何建彤）、Leo（藍文甫）、Anne Chang",
          docUrl: "",
          dialogues: [
            {
              topic: "工具功能與應用方向",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "這個工具能爬取網站內容並分析關鍵字分佈，幫助業務快速掌握客戶網站狀況，目標是節省業務開發時間、增加轉單率。" },
                { speaker: "Max", role: "other", label: "管理層", text: "工具開發應聚焦提升自身 AE 團隊效率，並評估代理商使用的可行性。工具開發需服務於業績目標。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "詢問工具與其他現有工具（如 MMO、GEO 工具）整合可能性。" },
                { speaker: "蔡阿達", role: "ada", text: "與 MMO、GEO 工具邏輯不同，會視狀況決定是否移交整合。持續優化以利多方使用。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P11: Jack En 攝影 × 網站建置 × AI 影像 ======
    {
      id: "jack-en-partner",
      name: "Jack En 攝影 × 網站建置 × AI 影像合作",
      icon: "📸",
      category: "partner",
      lastUpdated: "2026-03-25",
      summary: "攝影師 Jack En 洽談個人作品集網站建置，同步介紹客戶引線機會，並探索 AI 影像技術合作",
      keyPoints: [
        "Jack En 主業企業活動即時拍攝，客戶含高雄大型營造廠（合作逾 6 年）",
        "網站需求：作品集集中管理 + 線上預約，以<strong>模板 + AI 排版</strong>為主",
        "MarsZ Chen 提供模板版與客製化版兩種報價方案",
        "<strong>蔡阿達協助引介</strong>有即時拍攝需求的企業活動客戶",
        "同步推進<strong>奇美博物館網站改版</strong>報價（MarsZ Chen 負責）",
        "計劃邀請 AI 生成內容廠商來分享，探索合作機會"
      ],
      chips: [
        { icon: "💰", text: "基本出場 3,000" },
        { icon: "⏱️", text: "時薪 2,000" },
        { icon: "🌐", text: "單語系架設" },
        { icon: "🤖", text: "AI 影像技術" }
      ],
      todos: [
        { owner: "蔡阿達", text: "協助留意並推介有即時拍攝需求的企業活動客戶給 Jack En", priority: "week" },
        { owner: "蔡阿達", text: "下週安排邀請 AI 生成內容廠商來賓分享", priority: "week" },
        { owner: "蔡阿達", text: "協助 MarsZ Chen 與奇美博物館客戶溝通報價方案", priority: "week" },
        { owner: "Jack En", text: "整理網站各頁面 section 及排版需求，提供參考範例給 MarsZ Chen", priority: "week" },
        { owner: "MarsZ Chen", text: "製作 Jack En 網站報價單（模板版 + 客製化版）", priority: "waiting" },
        { owner: "MarsZ Chen", text: "完成奇美博物館網站改版報價單", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-03-25",
          title: "Jack En × awoo 網站建置洽談",
          time: "12:59-14:14",
          duration: "1h15m",
          participants: "蔡阿達、Jack En、MarsZ Chen",
          docUrl: "",
          dialogues: [
            {
              topic: "攝影業務 & 客戶開發策略",
              exchanges: [
                { speaker: "Jack En", role: "other", label: "攝影師", text: "我客戶多為有自己網站的企業，近期簽約一間高雄大型營造廠，合作超過六年，主要承接公共工程標案。我主打的是企業活動拍攝，尤其是需即時提供照片以利社群曝光的客戶。" },
                { speaker: "蔡阿達", role: "ada", text: "你主打的 AI 推薦優化跟 SEO 有差異，仍有切入機會。我願意協助推廣與留意相關客戶，有即時拍攝需求的企業活動我幫你介紹。" }
              ]
            },
            {
              topic: "網站架設需求討論",
              exchanges: [
                { speaker: "Jack En", role: "other", label: "攝影師", text: "我希望把分散的作品集中於一個網站，考慮加入線上預約功能。照片可壓縮至 3-5MB，之後再討論容量與存放成本。" },
                { speaker: "MarsZ Chen", role: "other", label: "MAS", text: "先提供需求與喜好範例，利用 AI 協助排版。以模板為主可降低成本，後台操作我會教導你自行上稿管理，除非涉及排版或配色調整才需技術支援。" },
                { speaker: "蔡阿達", role: "ada", text: "先確認單語系架設，多語系未來再評估擴充，把基礎做好最重要。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P16: GEO 產品功能開發藍圖 ======
    {
      id: "geo-product-roadmap",
      name: "GEO 產品功能開發藍圖",
      icon: "🛠️",
      category: "internal",
      lastUpdated: "2026-03-30",
      summary: "GEO GTM 會議確認產品開發重點 — 提示詞工具 4/10、AIO+AIMO 整合四月中、競品比較 7/20、權限管理待定",
      keyPoints: [
        "主題關鍵字與提示詞自助修改工具：<strong>預計 4/10 完成</strong>，減少 SRE 介入",
        "四月中開始整合 <strong>AIO 與 AIMO</strong>，採用 Prompt 架構，<strong>十月底完成測試</strong>",
        "競品比較功能：新增分頁可指定<strong>五間競品</strong>，<strong>7/20 完成</strong>，初期仍由人工設定",
        "<strong>權限管理工具</strong>改用 Email 註冊，支援邀請公司成員，agency 可管理多品牌 — 設計仍卡關",
        "GO 首頁新增<strong>網站健檢服務入口</strong>，整合簡單表單為 GO 官網子集",
        "GO 提示值管理、FaceOne UI 優化、<strong>AI Mode 數據整合</strong>、淨品分析功能開發中",
        "每月發布<strong>產品更新文章</strong>，介紹重大及小功能改進與新應用場景",
        "日本已有 <strong>8 家企業</strong>同意進行 GEO POC（札幌、東京）"
      ],
      chips: [
        { icon: "🔑", text: "提示詞 4/10" },
        { icon: "🔄", text: "AIO+AIMO 4月中" },
        { icon: "📊", text: "競品比較 7/20" },
        { icon: "🔐", text: "權限管理 TBD" }
      ],
      todos: [
        { owner: "何建彤", text: "推動提示詞自助修改功能，預計 4/10 完成", priority: "today" },
        { owner: "何建彤", text: "四月中完成 AIO 與 AIMO 模型整合（Prompt 架構）", priority: "week" },
        { owner: "何建彤", text: "安排設計師完成競品比較功能介面設計，7/20 開始開發", priority: "waiting" },
        { owner: "何建彤", text: "持續推進權限管理工具設計，解決帳號與權限分配問題", priority: "week" },
        { owner: "何建彤", text: "請佼協助將簡單表單調整為 GO 官網表單子集", priority: "week" },
        { owner: "Nancy Cheng", text: "完成 GO 提示值管理、UI 優化、AI Mode 數據整合、淨品分析功能", priority: "week" },
        { owner: "林思吾", text: "每月發布產品更新文章，介紹功能改進與新應用場景", priority: "week" },
        { owner: "何建彤", text: "確認日本 8 家 POC 帳號開啟並統一更新", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-30",
          title: "GEO Go-to-Market 策略",
          time: "09:01-10:19",
          duration: "1h18m",
          participants: "蔡阿達、何建彤、林思吾、Amber Liao、Max Huang、藍文甫、Nancy Cheng 等",
          docUrl: "",
          dialogues: [
            {
              topic: "產品功能開發進度",
              exchanges: [
                { speaker: "何建彤", role: "other", label: "彤²", text: "目前產品開發重點包括主題關鍵字與提示詞的新增修改工具、四月中整合 AIO 與 AIMO 的版本開發，以及競品比較功能和權限管理工具。競品比較預計 7/20 完成。" },
                { speaker: "何建彤", role: "other", label: "彤²", text: "權限管理工具將改用 Email 註冊，方便用戶邀請公司內其他成員，並支援 agency 同時管理多品牌。目前設計仍有卡關。" },
                { speaker: "蔡阿達", role: "ada", text: "初期競品比較仍由人工設定，未來需 AE 與 Sales 協助提供競品資訊。權限管理工具設計需加快，確保後續功能順利上線。" }
              ]
            },
            {
              topic: "客戶反饋與銷售挑戰",
              exchanges: [
                { speaker: "Amber Liao", role: "other", label: "CS", text: "客戶普遍認為工具僅提供追蹤數據，價值有限，難以說服額外付費。GO 方案主要針對 AIO 優化，工具則針對 GPT 與 Gemini，造成客戶認知落差。" },
                { speaker: "蔡阿達", role: "ada", text: "需加強顧問方案與工具的連結，提升客戶購買意願。銷售策略考慮先免費提供 POC，定期報告成效，後續再推付費優化服務。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-30",
          title: "Staff Meeting TW — 技術開發與日本市場",
          time: "10:30-11:39",
          duration: "1h9m",
          participants: "蔡阿達、Fenix Li、Nancy Cheng、福田琢滋、何建彤、林思吾 等",
          docUrl: "",
          dialogues: [
            {
              topic: "技術開發與日本 POC",
              exchanges: [
                { speaker: "Fenix Li", role: "other", label: "技術", text: "技術團隊持續與業務及 RDM 協作，針對包銷需求及痛點進行版本迭代，文案規格已有完整文件。" },
                { speaker: "Nancy Cheng", role: "other", label: "產品", text: "產品部正在開發 GO 提示值管理、FaceOne UI 優化、AI Mode 數據整合、淨品分析及管理功能，並新增 Learning Page QA 區域及系統說明影片連結。" },
                { speaker: "福田琢滋", role: "other", label: "日本", text: "日本已有八家企業願意進行 GEO POC，涵蓋札幌、東京等主要城市。" },
                { speaker: "林思吾", role: "other", label: "管理層", text: "建議每月發布產品更新文章，介紹重大及小功能及新應用場景，每月更新日本及臺灣客戶品牌 Logo 於官網。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P17: 客戶續約與流失管理 ======
    {
      id: "client-retention",
      name: "客戶續約與流失管理",
      icon: "🔄",
      category: "company",
      lastUpdated: "2026-03-30",
      summary: "續約率約 56%，流失七大原因以預算縮減與成效不符為主；推動顧問+AI+技術支援提升黏著度",
      keyPoints: [
        "續約率約 <strong>55.9%</strong>，流失主因：預算縮減、策略調整、成效不符預期",
        "CS 團隊持續追蹤有續約可能客戶，嘗試<strong>彈性半年約方案</strong>鞏固收入",
        "既有客戶續約關鍵：<strong>顧問服務 + AI 輔助產文 + 技術支援</strong>結合",
        "計劃由 RD 團隊評估提供<strong>技術修改支援</strong>，解決客戶網站結構改動難題",
        "GO 工具與 AI 服務整合，<strong>Landing Page 增加 QA 內容</strong>提升被推薦機率",
        "加強 <strong>MMP 轉 LMMO</strong> 的轉換力道，提前 2-3 個月與客戶溝通續約方案",
        "四月新案洽談：<strong>LG 及兩個新品牌</strong>；五月預計<strong>資生堂花、The North Face、Vans</strong>",
        "新訂單不足以完全抵銷流失，需持續縮小缺口以達成年度目標"
      ],
      chips: [
        { icon: "📉", text: "續約率 56%" },
        { icon: "🛡️", text: "半年約止血" },
        { icon: "🤖", text: "AI+顧問+技術" },
        { icon: "🆕", text: "LG / 資生堂花" }
      ],
      todos: [
        { owner: "Anne Chang", text: "持續追蹤客戶預算狀況及續約可能性，整理流失原因與續約策略報告", priority: "week" },
        { owner: "Leo", text: "加強 MMP 轉 LMMO 客戶續約力道，提前 2-3 個月與客戶溝通續約方案", priority: "week" },
        { owner: "Amber Liao", text: "持續跟進 Castify、富與生意、杏和美等關鍵客戶續約狀況", priority: "week" },
        { owner: "Amber Liao", text: "與資深堂及威富集團協調 POC 方案延長至六個月，確認 Logo 露出合作", priority: "week" },
        { owner: "林思吾", text: "帶領強泥與小金評估技術修改方案，與 Steven 討論技術支援整合", priority: "week" },
        { owner: "Libby Cheng", text: "評估基礎方案中包含顧問時數的服務包裝，計算人力成本", priority: "week" },
        { owner: "蔡阿達", text: "推動 GO 與 AI 工具整合，Landing Page 增加 QA 及消費者相關內容", priority: "week" },
        { owner: "Winny Chiang", text: "協助確認二三月應收帳款異常客戶，與 CS/AE 協作完成對帳催收", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-30",
          title: "Staff Meeting TW — 客戶續約與流失分析",
          time: "10:30-11:39",
          duration: "1h9m",
          participants: "蔡阿達、藍文甫、Amber Liao、Anne Chang、Winny Chiang 等",
          docUrl: "",
          dialogues: [
            {
              topic: "續約率與流失客戶",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "續約率約 55.9%，部分客戶流失主要因營運政策調整、更換廠商及成效不彰。早期分手有助節省人力成本。" },
                { speaker: "Amber Liao", role: "other", label: "CS", text: "Castify 因總部審核限制，改以內容方案為主，下週再開會確認。針對被檢舉導致流量崩跌的客戶，正尋找施力點。四月仍有新案洽談中，包括 LG 及兩個新品牌，五月有資生堂花及 The North Face、Vans 新案。" },
                { speaker: "蔡阿達", role: "ada", text: "需加強 MMP 轉 LMMO 的轉換力道，提前兩三個月與客戶談續約及轉換方案。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-30",
          title: "預算 Review 會議 — 客戶流失與續約策略",
          time: "14:31-16:15",
          duration: "1h44m",
          participants: "蔡阿達、林思吾、Anne Chang、Libby Cheng 等",
          docUrl: "",
          dialogues: [
            {
              topic: "客戶流失原因與續約策略",
              exchanges: [
                { speaker: "Anne Chang", role: "other", label: "CS", text: "客戶流失七大原因，主要包括預算縮減、策略調整及成效不符預期。CS 團隊持續追蹤有續約可能的客戶，嘗試半年約等彈性方案鞏固收入。" },
                { speaker: "蔡阿達", role: "ada", text: "既有客戶續約關鍵在於結合顧問服務與 AI 輔助產文及技術支援。GO 工具與 AI 服務整合，Landing Page 增加 QA 內容，提升被推薦機率。" },
                { speaker: "林思吾", role: "other", label: "管理層", text: "技術修改困難，計劃由 RD 團隊評估提供技術修改支援，解決客戶網站結構改動難題。需持續優化客戶體驗與跨部門流程，加強行銷與 CS 協作。" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
