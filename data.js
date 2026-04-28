// === awoo BD War Room — 蔡阿達個人會議戰情室 ===
// 每日 19:00 由排程任務自動更新此檔案
// 結構：專案卡片為核心，同一專案被多次討論時更新同一張卡片

window.WAR_ROOM_DATA = {
  lastUpdated: "2026-04-28T19:00:00",
  dateLabel: "2026/04/28（二）",
  stats: {
    meetings: 48,
    projects: 33,
    partners: 12,
    internal: 6,
    clientCompany: 14,
    todos: 189
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

    // ====== P3: SeaMeet ======
    {
      id: "seameet",
      name: "SeaMeet — 全公司 AI 會議助理導入",
      icon: "🎙️",
      category: "partner",
      lastUpdated: "2026-04-13",
      summary: "全公司已啟用 SeaMeet 工作區（5 位業務同時使用），4/13 發現錄音 bug 已回報 Seasalt.AI",
      keyPoints: [
        "團隊 22-23 人，每位 PM 配備 AI 會議助理",
        "支援<strong>三層階層管理</strong>（組長→部門主管→老闆）",
        "逐字稿自動存放 Google Drive，工程師可直接分析商情",
        "<strong>30 帳號、七折優惠、年約方案</strong>",
        "🆕 全公司工作區已啟用，<strong>5 位業務同時使用中</strong>",
        "⚠️ 4/13 發現<strong>兩場重要會議錄音時間顯示 0</strong>，疑似多人同時使用同一工作區造成衝突，已回報 Seasalt.AI（Shao Ho 調查中）"
      ],
      chips: [
        { icon: "👥", text: "30 帳號" },
        { icon: "💰", text: "七折" },
        { icon: "💵", text: "$49.9×10mo×0.7" },
        { icon: "🏢", text: "3 層管理" }
      ],
      todos: [
        { owner: "蔡阿達", text: "建立 LINE 群組協調採購事宜", priority: "today" },
        { owner: "Shao Ho", text: "提供正式報價單", priority: "waiting" },
        { owner: "藍文甫", text: "與老闆確認年約 vs 月付", priority: "waiting" },
        { owner: "藍文甫", text: "設定 Google Drive 資料夾整合", priority: "waiting" },
        { owner: "蔡阿達", text: "提供兩場故障會議 URL 給 Shao Ho，協助調查錄音異常", priority: "today" }
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
      lastUpdated: "2026-04-28",
      summary: "Q1 獎金新舊制試算完成 — 新制約為舊制兩倍，Q1 以舊制計算、Q2 起全面採新制；GU 案型獎金以 AMP 比例為基準",
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
        "🆕 4/28 新制獎金比例約 <strong>5%</strong>，舊制約 <strong>2.5%</strong>，新制約為舊制的<strong>兩倍</strong>",
        "🆕 4/28 Q1 達成率普遍偏低，總獎金約二十幾萬，金額不大",
        "🆕 4/28 新制未包含 <strong>GU 案型</strong>為主要問題 — 目前多數業務案型為 GU",
        "🆕 4/28 決議：<strong>Q1 以舊制計算，Q2 起改用新制</strong>，GU 案型歸入 SIO 類別、獎金以 AMP 比例計算",
        "🆕 4/28 林思吾補充：舊制中 AMP 為 2.5%、SEO 為 1.5%，新制 GU 為 5%"
      ],
      chips: [
        { icon: "📉", text: "目標 -20%" },
        { icon: "💰", text: "4,800萬/年" },
        { icon: "⚠️", text: "PIP < 60%" },
        { icon: "🎯", text: "基準 60" },
        { icon: "🆕", text: "新制 5% / 舊制 2.5%" },
        { icon: "📋", text: "Q2 起全面新制" }
      ],
      todos: [
        { owner: "蔡阿達", text: "請 AT 盡快填寫第一季業務目標與實際金額資料，以便試算獎金", priority: "today" },
        { owner: "Winny Chiang", text: "依新制及舊制（含 AMP 與 SEO 比例）試算第一季獎金差異", priority: "today" },
        { owner: "蔡阿達", text: "盡快整理數據並發布 Q1 獎金計算結果", priority: "today" },
        { owner: "團隊", text: "明確公告 GU 案型獎金計算採用 AMP 比例，說明原 SEO 比例調整原因", priority: "week" },
        { owner: "Winny Chiang", text: "將達成率低於 60% 的業務列入 PIP 管理", priority: "week" },
        { owner: "蔡阿達", text: "確認去年任務獎金發放狀況", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-04-28",
          title: "awoo AE 新舊制獎金發放辦法討論",
          time: "09:40-09:52",
          duration: "12m",
          participants: "蔡阿達、Winny Chiang、林思吾（Mike）",
          docUrl: "",
          dialogues: [
            {
              topic: "新舊獎金制度差異與第一季達成率分析",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "第一季業務達成率普遍不高，總獎金金額約二十幾萬，建議以 60% 達成率作為估算基準。" },
                { speaker: "Winny Chiang", role: "other", label: "管理層", text: "以 60% 達成率計算，新制獎金約為 5%，舊制約 2.5%，新制獎金約為舊制的兩倍。若將 GU 案型歸入 SIO 類別，以 AMP 比例作為基準，考慮將舊制 2.5% 調整為 3% 以鼓勵業務。" },
                { speaker: "林思吾", role: "other", label: "Mike", text: "舊制中只有 AMP 與 SEO 案型，比例分別為 2.5% 與 1.5%，新制中 GU 案型比例為 5%。第一季表現不佳不宜重賞，但第二季起採用新制計算獎金能激勵業務。" },
                { speaker: "蔡阿達", role: "ada", text: "新制未包含 GU 案型是問題，目前多數業務案型為 GU，故新制更具激勵效果。結論為第一季以舊制計算，第二季起改用新制，GU 案型獎金以 AMP 比例計算。" }
              ]
            }
          ]
        },
        {
          date: "2026-04-20",
          title: "AE Team 週會",
          time: "16:46-17:54",
          duration: "1h08m",
          participants: "蔡阿達、Angelline、Leo、Irene、Leon、AE 業務開發組",
          docUrl: "",
          dialogues: [
            {
              topic: "Q1 獎金表格與新規則公告",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "Q1 獎金表格因新規則需調整，預計下週一前發出，待新規則公告後再請大家填寫。" },
                { speaker: "蔡阿達", role: "ada", text: "去年的任務獎金我會再確認一下，有結果跟大家說。" }
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

    // ====== P5: 代理商計畫 & 經銷模式 ======
    {
      id: "media-resell",
      name: "代理商計畫 & 媒體經銷模式",
      icon: "📺",
      category: "internal",
      lastUpdated: "2026-04-24",
      summary: "4/24 代理商合約條款深度檢視 — 刪除 AI 操縱條款、自動續約通知縮短至 30 天、代理商依三類分流（工具/工具+策略/媒體），客戶身份以服務標的統編為主",
      keyPoints: [
        "與赫斯特（時尚）及天下（財經）兩大媒體合作",
        "不採年約，<strong>兩個月為一期計算 MRR</strong>",
        "🆕 4/17 代理商分類：廣告公司與媒體代理商<strong>是否歸同類仍需細拆</strong>",
        "🆕 合約架構：拆分為<strong>代理商合約</strong>與<strong>代理商對客戶合約</strong>兩份，公司制定公版",
        "🆕 服務協議：<strong>工具使用協議</strong>與<strong>顧問服務協議</strong>分開簽署",
        "🆕 代理商滿意度：連續<strong>兩季低於七成</strong>即考慮終止合作",
        "🆕 權限管理：代理商文件不應出現在客戶文件中，避免法律糾紛",
        "🆕 線上註冊：工具尚未開放客戶自行註冊，法務仍在討論相關協議",
        "🆕 4/20 代理商銷售策略：工具應有<strong>獨特價值且不宜過度折扣</strong>，AE 傾向將工具當贈品，CS 則強調工具價值明確報價",
        "🆕 續約折扣策略：<strong>折扣放在顧問費用，工具維持原價</strong>，避免價格混淆",
        "🆕 工具與顧問服務需<strong>整合銷售</strong>，避免客戶預算矛盾",
        "🆕 4/21 Leo 完成<strong>GEO 工具代理商計劃協議修訂版</strong>，召集 workshop 審閱細節與漏洞",
        "🆕 法務 Henry 加入審查，提出<strong>合約終止與違約賠償條款</strong>：未違約方得終止合約並請求直接實際損害賠償",
        "🆕 Henry 另提供獨立法律審查文件，持續修訂合約細節",
        "🆕 4/24 Leo 請 Ada <strong>從 AE 角度標註不適合出現在條文中的內容</strong>",
        "🆕 代理商/經銷商客戶以<strong>統編為認定單位</strong>，同集團旗下不同品牌亦認統編",
        "🆕 若僅與經銷商或代理商簽約，<strong>由 AE 主導洽談</strong>較為理想",
        "🆕 Rebecca 提問：同集團不同品牌是否需轉 CS？結論為<strong>認統編處理</strong>",
        "🆕 4/24 蔡阿達質疑合約中<strong>操縱 AI 平台結果條款不適宜</strong>，服務由公司負責，建議刪除",
        "🆕 覆盤資料頻率設定為<strong>每年最多兩次</strong>，蔡阿達認為可能限制彈性，建議重新評估",
        "🆕 自動續約通知期限 90 天被認為過長，團隊建議<strong>縮短至 30 天</strong>降低代理商擺爛風險",
        "🆕 Max Huang 提出代理商分三類：<strong>工具代理、工具加策略、媒體</strong>，合約需依此調整",
        "🆕 保密條款被認為多餘，但法務建議<strong>從法律角度保留以防風險</strong>",
        "🆕 第三方代理引入之新客戶由 <strong>AE 負責服務</strong>（因 AE 投入較多努力取得信任），現有客戶則交 CS"
      ],
      chips: [
        { icon: "📝", text: "合約拆分兩份" },
        { icon: "⚖️", text: "滿意度 ≥ 70%" },
        { icon: "💰", text: "工具原價不折扣" },
        { icon: "📄", text: "協議修訂版審閱中" },
        { icon: "⏰", text: "續約通知 30 天" },
        { icon: "🔀", text: "三類代理商分流" }
      ],
      todos: [
        { owner: "蔡阿達", text: "持續推動赫斯特、天下合作案", priority: "week" },
        { owner: "蔡阿達", text: "制定經銷模式標準流程 SOP", priority: "week" },
        { owner: "藍文甫", text: "與 PM 及法務確認代理商合約架構與產品服務內容", priority: "week" },
        { owner: "Max Huang", text: "協助修改代理商合約文件並提供給藍文甫", priority: "week" },
        { owner: "藍文甫", text: "與法務討論工具使用協議與顧問服務協議是否拆分及法律效力", priority: "week" },
        { owner: "藍文甫", text: "確認代理商權限範圍，避免授權過大引發法律風險", priority: "week" },
        { owner: "藍文甫", text: "設定代理商滿意度評估標準，連續兩季低於七成啟動終止程序", priority: "week" },
        { owner: "Anne Chang", text: "協調法務完成工具使用協議版本並規劃上線時間", priority: "week" },
        { owner: "朱泓宇（Henry）", text: "持續修訂代理商協議法律條款，完善終止與違約賠償機制", priority: "week" },
        { owner: "藍文甫", text: "彙整 workshop 回饋，完成 GEO 工具代理商計劃協議最終版", priority: "week" },
        { owner: "蔡阿達", text: "完成代理商協議 AE 角度條文標註，回覆 Leo", priority: "today" },
        { owner: "蔡阿達", text: "制定明確規範：以服務標的統編為主判斷客戶身份，決定由 AE 或 CS 負責", priority: "week" },
        { owner: "Max Huang", text: "依代理商三類型（工具代理/工具加策略/媒體）重新架構合約內容", priority: "week" },
        { owner: "團隊", text: "評估自動續約通知期限，考慮縮短至 30 天", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-04-24",
          title: "Weekly Sync Up — 代理商合約條款深度檢視",
          time: "11:01-11:58",
          duration: "57m",
          participants: "蔡阿達、藍文甫（Leo）、Max Huang、Anne Chang",
          docUrl: "",
          dialogues: [
            {
              topic: "代理商合約條款修正建議",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "合約中操縱 AI 平台結果這個條款不適宜，服務是由我們公司負責的，建議刪除。" },
                { speaker: "蔡阿達", role: "ada", text: "覆盤資料頻率設定每年最多兩次，這條款可能限制公司彈性，建議重新評估必要性。" },
                { speaker: "Max Huang", role: "other", label: "顧問", text: "保密條款看似多餘，但從法務角度建議保留以防風險。自動續約通知期限 90 天確實過長。" },
                { speaker: "蔡阿達", role: "ada", text: "90 天太長了，建議縮短至 30 天，降低代理商擺爛風險。" },
                { speaker: "Max Huang", role: "other", label: "顧問", text: "代理商應分為工具代理、工具加策略及媒體三類，合約需依此調整支援範圍與結構。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "售後支援由阿物科技負責，建議刪除重疊條款。阿達，代理商協議哪些依 AE 角度不希望在條文呈現的，你得做一下標註。" }
              ]
            },
            {
              topic: "代理商與客戶身份定義",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "若客戶是透過第三方代理簽約且為新客戶，應由 AE 負責服務，因 AE 投入較多努力取得信任。" },
                { speaker: "Max Huang", role: "other", label: "顧問", text: "系統中客戶檔案若已有，則交由 CS 服務，否則由 AE 負責新客戶。" },
                { speaker: "Anne Chang", role: "other", label: "PM", text: "需多確認第三方帶來的客戶是否為現有客戶，避免重複服務。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "以服務標的統編作為判斷依據較為準確，並建議代理商提前通知續約事宜以便防範。" },
                { speaker: "蔡阿達", role: "ada", text: "目前結論是認統編。代理商、經銷商介紹來的，有些都是用不同的統編在跟我們簽訂。但若遇到只是要跟經銷商跟代理商簽約的話，由 AE 來洽談會比較理想。" }
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
        },
        {
          date: "2026-04-17",
          title: "Weekly Sync Up Meeting",
          time: "11:23-12:03",
          duration: "40m",
          participants: "蔡阿達、Max Huang、藍文甫、Anne Chang",
          docUrl: "",
          dialogues: [
            {
              topic: "代理商分類與合約架構",
              exchanges: [
                { speaker: "Max Huang", role: "other", label: "顧問", text: "廣告公司是否可與媒體代理商同類型分類？合約應拆分為代理商合約與代理商對客戶合約兩份，由公司制定公版合約。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "代理商類型會再細拆，尚未確定不同類型應提供的服務，需與 PM 確認。代理商可能會將產品轉作其他用途，需評估是否放寬權限。" },
                { speaker: "蔡阿達", role: "ada", text: "需與 PM 及法務召開會議，確認合約數量及內容，釐清代理商與客戶間權利義務。工具使用協議與顧問服務協議應分開簽署。" },
                { speaker: "Anne Chang", role: "other", label: "PM", text: "目前工具尚未開放客戶自行註冊，法務仍在討論相關協議。" }
              ]
            },
            {
              topic: "代理商滿意度與服務品質管理",
              exchanges: [
                { speaker: "Max Huang", role: "other", label: "顧問", text: "代理商文件不應直接出現在客戶文件中，避免法律糾紛。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "設定代理商滿意度調查標準，連續兩季低於七成即考慮終止合作。" }
              ]
            }
          ]
        },
        {
          date: "2026-04-21",
          title: "workshop- 代理商協議",
          time: "16:30-16:40",
          duration: "10m",
          participants: "蔡阿達、藍文甫（Leo）、張雅森（Anne）、朱泓宇（Henry）",
          docUrl: "https://docs.google.com/document/d/1_yA2FXywe5pvP8wOwUhdNk02gTmmRyGHijFx0TMyNkI/edit",
          dialogues: [
            {
              topic: "GEO 工具代理商計劃協議修訂版審閱",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "這份 GEO 工具代理商計劃協議修訂版，請大家從自己的專業角度設想情境，把細節跟漏洞補齊。" },
                { speaker: "朱泓宇", role: "other", label: "法務", text: "任一方若未依本合約規定履行，經未違約方催告改正而未改正，或該違約情事無從改正者，未違約方得終止本合約，並向違約方請求損害賠償，賠償範圍應以直接實際所受之損害為限。" }
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
      lastUpdated: "2026-04-20",
      summary: "文案撰寫方案已可開賣（17-20 篇，月費 ≈ 2.2 萬）— 4/20 確認 Claude 雙 Skill 架構：品牌人設學習 + 文章輸出，蔡阿達負責官網資料抓取打包",
      keyPoints: [
        "文案團隊撰寫 10 篇（人類），7 篇 AI 輔助生成再經人類審核",
        "藍文甫堅持<strong>先內部測試</strong>，不可拿客戶當白老鼠",
        "Leon 建議保留 <strong>25% 人工補強</strong>，維持文章品質與人情味",
        "合約揭露時機：蔡阿達主張合約階段再說明 AI 文章性質",
        "英文文章需等<strong>五月招募</strong>具英文能力的 writer",
        "🆕 4/01 文案 n8n：蔡阿達開發<strong>爬蟲工具一鍵生成初稿</strong>，可同時處理多客戶網站",
        "合約新增條款：<strong>素材查證責任歸客戶</strong>，awoo 僅提供參考內容，不負查證義務",
        "雙軌定價策略：<strong>精緻文章</strong>（價格較高）+ <strong>AI 輔助文章</strong>（較低費用）",
        "工具付費模式：公司共用帳號共享 AI API 月費，以節省成本",
        "資料管理：客戶資料以<strong>客戶名稱分類資料夾</strong>，方便文案��尋管理",
        "🆕 4/17 新增<strong>純內容方案</strong>：針對無法修改網站的客戶，月費約兩萬至兩萬五，含基礎建站建議及文章撰寫",
        "純內容方案低消<strong>兩萬元</strong>，可視客戶需求適度加價",
        "銷售策略：先推完整方案，再視客戶需求推薦純內容方案",
        "🆕 4/20 文案撰寫方案<strong>已可開賣</strong>：含網站健檢報告及 17-20 篇文章，月費約<strong>兩萬二</strong>，合作期建議一年",
        "🆕 4/20 Claude 雙 Skill 架構：<strong>品牌人設學習 Skill</strong>（抓取客戶官網資料建立品牌人設）+ <strong>文章輸出 Skill</strong>（依品牌人設生成文案）",
        "🆕 蔡阿達負責<strong>抓取客戶官網資料打包成 Skill</strong>，小花負責測試與優化，藍文甫協助克勞德帳號申請",
        "🆕 透過<strong>表單收集客戶專業知識回饋</strong>，整合進 AI 文案生成流程，提升文案品質",
        "🆕 AI 生成文章重內容符合度更勝人性化口吻，建議嘗試克勞德提升人性化表現"
      ],
      chips: [
        { icon: "📝", text: "17-20篇/月" },
        { icon: "👤", text: "25% 人工" },
        { icon: "🤖", text: "Claude 雙 Skill" },
        { icon: "⚠️", text: "素材查證→客戶責任" },
        { icon: "🔧", text: "官網抓取→品牌人設" },
        { icon: "💰", text: "月費 ≈ 2.2萬" }
      ],
      todos: [
        { owner: "藍文甫", text: "內部先測試 AI 文章品質", priority: "waiting" },
        { owner: "蔡阿達", text: "開發一鍵 AI 初稿工具，教導文案組使用", priority: "week" },
        { owner: "蔡阿達", text: "持續優化爬蟲流程，支援同時多客戶處理", priority: "week" },
        { owner: "蔡阿達", text: "共同撰寫 AI 文章相關合約條款（含素材查證責任條款）", priority: "week" },
        { owner: "蔡阿達", text: "持續測試英文 AI 工具，改善文法與句型品質", priority: "week" },
        { owner: "廖淑芬", text: "協助統籌現有及新客戶資料整理，以客戶名稱分類資料夾", priority: "week" },
        { owner: "藍文甫", text: "每週與廖淑芬開會，持續優化文案產出流程（4/15 起）", priority: "waiting" },
        { owner: "藍文甫", text: "合約新增素材查證責任條款，並確認 AI 文章相關說明", priority: "week" },
        { owner: "蔡阿達", text: "持續與 Mike 確認純內容方案細節與客戶需求", priority: "week" },
        { owner: "蔡阿達", text: "調整純內容方案定價，最低月費設定約兩萬元並評估加價空間", priority: "week" },
        { owner: "Max Huang", text: "協助評估純內容方案定價合理性，確保利潤率符合成本結構", priority: "week" },
        { owner: "蔡阿達", text: "提供兩支 Claude Skill 給小花（品牌人設學習 + 文章輸出）", priority: "week" },
        { owner: "藍文甫", text: "協助小花申請並管理克勞德帳號，確保表單功能串接", priority: "week" },
        { owner: "蔡阿達", text: "持續抓取客戶官網資料並生成品牌人設，透過表單收集並傳給小花", priority: "week" },
        { owner: "蔡阿達", text: "設計並提供專業知識回饋表單給小花，收集客戶問題與答案整合進文案流程", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-04-20",
          title: "Leo, Anne / 小花 — AI 文案 Agent 合作確認",
          time: "15:00-15:25",
          duration: "25m",
          participants: "蔡阿達、藍文甫（Leo）、廖淑芬（小花）、Anne",
          docUrl: "",
          dialogues: [
            {
              topic: "Claude 雙 Skill 架構與合作分工",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我做了一個爬蟲工具可以抓取客戶官網資料，打包成 Skill，未來客戶只需上傳相關資料即可產生內容，簡化合作流程。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "建議將新聞稿與文案 agent 兩個議題合併討論，複製成熟的文案 agent 給小花測試，收集優化反饋。" },
                { speaker: "蔡阿達", role: "ada", text: "抓取客戶官網資料建立品牌人設這件事我來做，抓取網站資料不難且合理。" },
                { speaker: "廖淑芬", role: "other", label: "小花", text: "既有客戶也需寫多篇文件，建議由蔡阿達先抓取官網資料，既有客戶則透過表單提供資料，方便建立客戶資料庫。" }
              ]
            },
            {
              topic: "克勞德帳號與表單系統",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "資料庫管理由 AI 負責，無需人工管理龐大資料庫。表單功能需串接小花帳號，確保資料流暢，我負責帳號申請與預算處理。" },
                { speaker: "蔡阿達", role: "ada", text: "我會提供現有 prompt 給小花參考，兩支 Skill 分別負責品牌人設學習與文章輸出。不需自行建資料庫，AI 記憶與既有知識模型搭配客戶資料即可。" }
              ]
            }
          ]
        },
        {
          date: "2026-04-20",
          title: "AE Team 週會 — 文案方案開賣確認",
          time: "16:46-17:54",
          duration: "1h08m",
          participants: "蔡阿達、Angelline、Leo、Irene、Leon、AE 業務開發組",
          docUrl: "",
          dialogues: [
            {
              topic: "文案撰寫方案開賣與合作期限",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "文案撰寫方案已可開賣，包含網站健檢報告及 17 到 20 篇文章，月費約兩萬二。建議書一個月內完成。" },
                { speaker: "Rebecca", role: "other", label: "AE", text: "客戶偏好較快取得文章，可能希望一次性或短期內完成。" },
                { speaker: "蔡阿達", role: "ada", text: "一年合作期較合理，能確保文章數量與成效觀察。我會跟小花協調，把克勞德的文案作法移植過來。" }
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
        },
        {
          date: "2026-03-31",
          title: "AE Team 週會",
          time: "11:43",
          duration: "28m",
          participants: "蔡阿達、呂紹平（Leon）、蔡毓倫（Aiden）、Rebecca Chen",
          docUrl: "",
          dialogues: [
            {
              topic: "Prompt 産生器優化需求",
              exchanges: [
                { speaker: "蔡毓倫", role: "other", label: "AE", text: "客戶多使用簡短 prompt，長句反而造成困擾，建議簡化。客戶看到那麼多字，還是就是會讓他糾結更久。" },
                { speaker: "蔡阿達", role: "ada", text: "目前産生器已符合用戶需求，計劃調整增加多元性。我不太確定那邊有沒有比較簡潔的版本。" },
                { speaker: "Rebecca", role: "other", label: "AE", text: "工具可輔助 prompt 決策，我會開始使用相關流程。" },
                { speaker: "蔡阿達", role: "ada", text: "同意將關鍵字延伸 prompt 納入系統，方便顧問案與客戶查看。" }
              ]
            }
          ]
        },
        {
          date: "2026-04-01",
          title: "文案 n8n 產出流程優化會議",
          time: "15:00",
          duration: "1h05m",
          participants: "蔡阿達、藍文甫（Leo）、廖淑芬（小花）、Anne Chang、Rica",
          docUrl: "",
          dialogues: [
            {
              topic: "爬蟲一鍵工具介紹",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我做了一個爬蟲工具，可以一鍵抓取客戶網站資料，直接生成文章初稿。可以同時處理多個客戶的網站，不用每次都手動複製貼上。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "這樣文案的效率應該可以提高不少，那品質管控怎麼做？" },
                { speaker: "蔡阿達", role: "ada", text: "AI 生成之後還是需要人工審核，我們定位是半自動化，不是全自動。人工的部分就是確保語氣和客戶品牌調性吻合。" }
              ]
            },
            {
              topic: "素材查證責任歸屬",
              exchanges: [
                { speaker: "廖淑芬", role: "other", label: "小花", text: "如果客戶提供的資料有誤，AI 又把它寫進文章裡，這個責任是誰的？" },
                { speaker: "蔡阿達", role: "ada", text: "合約要加一條：素材查證責任歸客戶。我們是根據客戶提供的資料來生成，我們只是工具，不負責查證資料正確性。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "這個合理，我來協助把這條加進標準合約裡。" }
              ]
            },
            {
              topic: "雙軌定價策略",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我建議分兩種文章：精緻文章跟 AI 輔助文章，定價不一樣。讓客戶自己選，透明一點。" },
                { speaker: "Anne Chang", role: "other", label: "文案", text: "那精緻文章是指完全人工撰寫嗎？還是還是有 AI 輔助？" },
                { speaker: "蔡阿達", role: "ada", text: "精緻文章也可以用 AI 輔助，但人工投入比例更高，定價反映那個差異。重點是跟客戶說清楚。" }
              ]
            },
            {
              topic: "資料管理與工具費用共攤",
              exchanges: [
                { speaker: "廖淑芬", role: "other", label: "小花", text: "現在文案的客戶資料都是散的，很難找。" },
                { speaker: "蔡阿達", role: "ada", text: "以後用客戶名稱建立資料夾，所有相關素材都放在裡面。我跟小花確認一下現有客戶的整理方式。" },
                { speaker: "蔡阿達", role: "ada", text: "AI API 費用公司共用一個帳號，月費大家分攤，不用每個人都買，這樣最省。" }
              ]
            }
          ]
        },
        {
          date: "2026-04-17",
          title: "Weekly Sync Up Meeting",
          time: "11:23-12:03",
          duration: "40m",
          participants: "蔡阿達、Max Huang、藍文甫、Anne Chang",
          docUrl: "",
          dialogues: [
            {
              topic: "純內容方案服務與定價策略",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "針對無法修改網站的客戶推出純內容方案，月費約兩萬到兩萬五，內容包含基礎建站建議及文章撰寫。低消兩萬為業務可接受的最低月費。" },
                { speaker: "Max Huang", role: "other", label: "顧問", text: "定價應依關鍵字數量及服務內容調整，需考量成本與利潤率。需釐清方案間關聯及定價邏輯，避免客戶混淆。" },
                { speaker: "Anne Chang", role: "other", label: "PM", text: "原三萬三方案未包含救稅服務，純內容方案則包含最低級距救稅，價格上有折扣。" },
                { speaker: "蔡阿達", role: "ada", text: "銷售策略先從完整方案推案，再視客戶需求推薦純內容方案。需說服業務團隊以純內容方案作為初期提案方案。" }
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
      lastUpdated: "2026-04-28",
      summary: "4/28 SHOPLINE 電商教室實體講座完成 — 四月 Webinar 系列全部結束；LLMS.txt 功能 Shopline 臺灣版 Q2 新增",
      keyPoints: [
        "與 OneAd（Jed Lin）、比幣 BBTide（Libby Cheng）三方聯合 Webinar",
        "蔡阿達主講 GEO／AI 搜尋策略（30 分鐘）+ 三方 Panel 對談",
        "<strong>4/7 線上彩排完成</strong>：蔡阿達分享品牌 EAT 訊號、GEO Suite、村陸合作新聞稿策略、Prompt 設計與 FAQ",
        "<strong>4/16 實體錄影完成</strong>：於 JustCo 宏泰金融大樓錄製個人 GEO 演講與三方 Panel 對談",
        "LLMS.txt 檔案 <strong>Shopline 臺灣版 Q2 預計新增</strong>，目前僅大陸版 2.0 支援",
        "向客戶說明時以<strong>合作改善角度</strong>，避免斬釘截鐵批評現況",
        "🆕 4/28 <strong>SHOPLINE 電商教室實體講座完成</strong>：於敦化北路 SHOPLINE 辦公室面向既有客戶分享，13:30 開始"
      ],
      chips: [
        { icon: "✅", text: "4/7 彩排完成" },
        { icon: "✅", text: "4/16 錄影完成" },
        { icon: "✅", text: "4/28 SHOPLINE 完成" },
        { icon: "📦", text: "四月系列結束" }
      ],
      todos: [
        { owner: "蔡阿達", text: "協調與村陸公司合作，協助業主在權威媒體發布新聞稿以提升 AI 曝光", priority: "week" },
        { owner: "Shawn Hung", text: "與夥伴確認合作內容細節後回報（AgentBit 合作）", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-04-16",
          title: "【實體錄影】awoo 0422 webinar — Ada_10F",
          time: "14:00-16:30",
          duration: "2h30m",
          participants: "蔡阿達、Iris Tsai、Libby Cheng",
          docUrl: "",
          dialogues: [
            {
              topic: "Webinar 實體錄影",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "於 JustCo 宏泰金融大樓完成 0422 Webinar 實體錄影，先錄製個人 GEO 演講（30 分鐘），再錄製三方 Panel 對談。" }
              ]
            }
          ]
        },
        {
          date: "2026-04-07",
          title: "awoo 0422 webinar — panel 彩排",
          time: "15:31-16:13",
          duration: "42m",
          participants: "蔡阿達、Libby Cheng、Iris Tsai、Jed Lin、Shawn Hung",
          docUrl: "",
          dialogues: [
            {
              topic: "品牌在 AI 搜尋生態下的策略調整",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "客戶常以排名作為 KPI，但因使用者行為改變，排名意義降低，品牌需提供精準答案。建議更新「關於我們」頻道，展示成功案例、專業團隊、獎項及認證，強化 EAT 訊號。" },
                { speaker: "蔡阿達", role: "ada", text: "介紹 GEO Suite 工具，協助品牌透過第三方指標評估自身策略是否有效。" }
              ]
            },
            {
              topic: "第三方媒體新聞稿與 AI 能見度",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "AI 會檢視網路新聞媒體對品牌的提及，新聞稿具背書效果。介紹與村陸合作，利用三立、亞東森、經濟日報等媒體放送新聞稿，提升 AI 能見度。" }
              ]
            },
            {
              topic: "關鍵詞延伸至 Prompt 與 FAQ 策略",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "消費者搜尋從關鍵詞轉向 prompt，品牌需考量消費者旅程各階段的搜尋意圖。推薦撰寫 FAQ，幫助 AI 快速提供消費者所需答案，促進轉換。" }
              ]
            },
            {
              topic: "AI 廣告演算法與數據策略",
              exchanges: [
                { speaker: "Jed Lin", role: "other", label: "OneAd", text: "AI 提供品牌比較資訊，廣告應在消費者深度探索時承接流量。需掌握 AI 搜尋意圖及網站行為數據，結合會員分眾設計與廣告系統放大曝光。" },
                { speaker: "Shawn Hung", role: "other", label: "AgentBit", text: "廣告平台 AI 演算法不可控，建議品牌提供真實交易數據作為 AI 學習基礎。AgentBit 可透過 prompt 分析業績下滑原因，篩選高價值客戶。" },
                { speaker: "Libby Cheng", role: "other", label: "BBTide", text: "BBTide 已完成網站及線上線下數據串接，利用 AI 模型預測高價值客戶，與 OneEye 合作結合第一方數據與廣告投放技術提升成效。" }
              ]
            },
            {
              topic: "彩排結束與後續安排",
              exchanges: [
                { speaker: "Libby Cheng", role: "other", label: "MKT", text: "彩排結束，講師可在預錄前隨時調整回答內容與題目。實體錄影日期確認為 4 月 16 日，4 月 17 日前請提交簡報。" }
              ]
            }
          ]
        },
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
      name: "HubSpot Deal 流程 & 客戶資料統一管理",
      icon: "⚙️",
      category: "company",
      lastUpdated: "2026-04-07",
      summary: "Deal Type 新增 GU 選項；建立以公司為主體的客戶資料庫，統一存放健檢報告與關鍵字表格",
      keyPoints: [
        "新增 Deal Type：<strong>GO 顧問方案 / GO 工具方案 / GU 相關選項</strong>；AE 在 Close ON 階段必填",
        "<strong>以公司為主體建立資料庫</strong>：客戶健檢報告、關鍵字拓展表格等四份報告放置 Company Property，供 AE、CS、關鍵字拓展團隊共用",
        "蔡阿達主導報告產出流程，全站內容 markdown 放置 hotspot 平台",
        "楊舒涵整合兩支 workflow，商機建立時<strong>自動關聯公司資料</strong>，解決空公司問題",
        "Shopline 匯款無新更新；SEO APP 與 AMP 共用，未來新增 SEO 人工智慧 APP"
      ],
      chips: [
        { icon: "📊", text: "GEO Deal 15筆" },
        { icon: "💬", text: "90 Prompt" },
        { icon: "🏷️", text: "Deal Type GU 新增" },
        { icon: "🗂️", text: "公司主體資料庫" }
      ],
      todos: [
        { owner: "蔡阿達", text: "持續產出並更新每個客戶健檢報告、關鍵字拓展表格等，以連結形式放置 Company Property", priority: "week" },
        { owner: "蔡阿達", text: "將全站內容 markdown 版資料放置 hotspot 平台，方便團隊使用", priority: "week" },
        { owner: "蔡阿達", text: "明確定義並通知 AE/CS 各欄位資料存放位置與使用方式", priority: "week" },
        { owner: "楊舒涵", text: "合併兩支 workflow，新增商機建立時自動綁定公司資料功能，最小改動不影響行銷表單", priority: "week" },
        { owner: "楊舒涵", text: "將 GU 相關 Deal Type 選項調整至下拉選單前端，並提醒 AE 在 Close ON 必填", priority: "week" },
        { owner: "呂紹平", text: "協調新增 SEO APP 上架，與 Dandy 確認 SEO 服務客戶帳單及 APP 使用狀況", priority: "waiting" },
        { owner: "蔡阿達", text: "整理客戶常見問題 FAQ 表格", priority: "week" },
        { owner: "Anne", text: "約時間討論 CS 相關流程與條款細節", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-04-07",
          title: "AE<>BA meeting",
          time: "16:03-16:29",
          duration: "26m",
          participants: "蔡阿達、楊舒涵、呂紹平（Leon）",
          docUrl: "",
          dialogues: [
            {
              topic: "客戶資料統一管理與報告產出流程",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "未來只要有客戶官網網址，即可自動爬取資料並建置於該公司 property 中，包含健檢報告、關鍵字拓展表格等四份報告，供 AE、CS 及關鍵字拓展團隊共用。希望建立統一且客觀的網站內容資料庫，未來可用於提案、進展報告及機器人月度追蹤。" },
                { speaker: "楊舒涵", role: "other", label: "BA", text: "認同此做法，將優化 workflow 以自動關聯公司資料，減少手動判斷。目前兩支 workflow 功能不同，將研究合併並加入自動關聯公司功能，解決目前表單產生 deal 無法自動綁定公司的問題。" },
                { speaker: "楊舒涵", role: "other", label: "BA", text: "建議先不動表單，先從 workflow 端補強，避免影響行銷部門現有資料收集。報告資料存放位置需明確告知 AE 及 CS，避免資料分散或重複產出。" }
              ]
            },
            {
              topic: "Deal Type 新增 GU 選項",
              exchanges: [
                { speaker: "楊舒涵", role: "other", label: "BA", text: "新增 Deal Type 欄位中加入 GU 相關選項，要求 AE 在 Close ON 時務必正確選擇，以利後續資料分析與辨識。下拉選單已調整至較前面位置，方便使用者選取。" }
              ]
            },
            {
              topic: "Shopline 匯款及 APP 管理",
              exchanges: [
                { speaker: "呂紹平", role: "other", label: "Leon", text: "Shopline 匯款目前無新更新，匯款交易由楊舒涵直接通知客戶轉帳即可，無需開立新單。目前 AMP 與 SEO 服務共用同一 APP，未來會新增 SEO 人工智慧 APP。" },
                { speaker: "楊舒涵", role: "other", label: "BA", text: "擔心 APP 安裝錯誤或被移除，強調需與行銷及相關部門溝通清楚，避免影響客戶使用。" }
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
      name: "行銷渠道數據整合 & 預算會議準備",
      icon: "📊",
      category: "internal",
      lastUpdated: "2026-03-26",
      summary: "跨部門協作 Q1 報告 — 依渠道拆分 MQL/SQL 轉換率，支援週一預算會議",
      keyPoints: [
        "麥可要求跨部門協作製作<strong>1-3月行銷漏斗報告</strong>，週一前需完成",
        "需依渠道區分 MQL 與 SQL 數量及轉換率（GO 建檢 / GO Switch / 官網聯絡等）",
        "Angelline 承諾<strong>3/27 中午前</strong>提供 summary table + raw data",
        "蔡阿達確認只需各渠道 MQL 轉 SQL 數量與比例，無需完整 raw data",
        "Angelline 請假，<strong>Libby 代為參加週一預算會議</strong>",
        "數據量約 300 筆，與 Hotspot 數據人工比對確認正確性"
      ],
      chips: [
        { icon: "📅", text: "3/27 中午 deadline" },
        { icon: "📈", text: "MQL→SQL 轉換率" },
        { icon: "🗂️", text: "渠道拆分" },
        { icon: "📋", text: "週一預算會議" }
      ],
      todos: [
        { owner: "Angelline", text: "3/27 中午前完成各渠道 MQL、SQL 數量及轉換比例整理，提供 summary table + raw data", priority: "today" },
        { owner: "Libby", text: "3/27 早上與蔡阿達溝通細節，準備週一（3/30）預算會議", priority: "today" },
        { owner: "蔡阿達", text: "確認 Angelline 數據格式與內容，提供回饋", priority: "today" },
        { owner: "蔡阿達", text: "週一（3/30）前完成報告準備並參與預算會議", priority: "week" }
      ],
      meetingHistory: [
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

    // ====== P13: Q1 預算 Review & 續約率優化 ======
    {
      id: "budget-review-q1",
      name: "Q1 預算 Review & 續約率優化策略",
      icon: "📉",
      category: "company",
      lastUpdated: "2026-03-31",
      summary: "Q1 掉失率 40%（目標 H2 降至 20%），三大主因：成效、預算、政策；推動軟體顧問轉型",
      keyPoints: [
        "Q1 續約率 60%（10 掉 4），<strong>目標 H2 降至掉失 20%</strong>（8/10 續約）",
        "三大不續約主因：<strong>營運政策調整（最大）</strong>、預算問題（25%）、成效不彰（25-30%）",
        "推動顧問模式 → <strong>軟體顧問模式</strong>，導入 More Sweet & GEO Suite 提升客戶黏著度",
        "文案産出瓶頸：目前 2-3 週/篇，目標批量産出，積極導入 AI 産文工具",
        "蔡阿達 AI 産文流程：先收集客戶品牌核心資訊 → AI 生成初稿 → 客戶參與修改",
        "MQL→SQL 轉換率 <strong>63%</strong>，但 SQL→成交率僅 <strong>10%</strong>，需強化提案品質",
        "Event 700 個 account 僅 10 件成交（1.4% 轉換率），遠低於 Google Ads 8%",
        "報價單需拆分顧問費 vs 工具費，提升續約透明度",
        "Master Concept 有<strong>跨區域（台港新馬）GEO 方案需求</strong>，潛在年約 100 萬以上"
      ],
      chips: [
        { icon: "📊", text: "續約率 60%" },
        { icon: "🎯", text: "目標 80%" },
        { icon: "⚠️", text: "SQL→成交 10%" },
        { icon: "📝", text: "文案 2-3週/篇" },
        { icon: "🔥", text: "Master Concept 跨國" }
      ],
      todos: [
        { owner: "蔡阿達", text: "親自檢視 Master Concept 跨區域方案報價，避免流失跨國客戶", priority: "today" },
        { owner: "蔡阿達", text: "持續推動 AI 産文機制，先收集客戶核心資訊，邀請客戶參與修改提升內容符合度", priority: "week" },
        { owner: "蔡阿達", text: "與業務說明報價單拆分（顧問費 vs 工具費分開），避免續約時價格爭議", priority: "week" },
        { owner: "蔡阿達", text: "追蹤銷售漏斗數據，分析 SQL 後流失原因，提出改善方案", priority: "week" },
        { owner: "林思吾", text: "下週三前召開文案産出對齊會議（蔡阿達、Amber、小花），明確産出標準與速度目標", priority: "week" },
        { owner: "林思吾", text: "請 Anne Chang 統計不續約客戶中成效不彰/預算/期待落差三項問題絕對數字", priority: "week" },
        { owner: "Amber Liao", text: "與 Leo 討論文案産出流程，優化産出速度與規格", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-31",
          title: "預算 Review_pt. 2",
          time: "14:11",
          duration: "1h10m",
          participants: "蔡阿達、林思吾（麥可）、Amber Liao、藍文甫（Leo）、Anne Chang、Libby Cheng",
          docUrl: "",
          dialogues: [
            {
              topic: "不續約原因分析 & 軟體顧問轉型",
              exchanges: [
                { speaker: "林思吾", role: "other", label: "麥可", text: "我們目前 Q1 統計下來是 40%，10 個掉 4 個。我們能夠把它降成是 2 個，也就是掉失率是 20%。" },
                { speaker: "林思吾", role: "other", label: "麥可", text: "我希望把大的痛點抓出來，我們就一塊一塊去想辦法把它解決掉。" },
                { speaker: "Amber Liao", role: "other", label: "內部", text: "預算不足客戶多為成效平穩但無法增加投入，綠藤為跨預算與營運政策的特殊案例。" },
                { speaker: "蔡阿達", role: "ada", text: "行銷提供的潛在客戶數量充足，但服務方案及文案品質不足影響轉換。" }
              ]
            },
            {
              topic: "AI 産文流程 & 文案加速",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我的 AI 産文流程是先向客戶收集品牌核心及問題，再由 AI 生成初稿，客戶參與修改，確保內容解決訪客問題。" },
                { speaker: "林思吾", role: "other", label: "麥可", text: "我們在出文章的速度，可不可以就是一次，不要只是一篇兩三週，一篇兩三週。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "需減少精緻文章數量但保持品質，利用 AI 工具提升産出速度。" }
              ]
            },
            {
              topic: "報價單拆分 & 跨部門協作",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "拆分報價單可避免客戶對總價産生疑慮，並利於財務認列。" },
                { speaker: "蔡阿達", role: "ada", text: "業務習慣以牌價報價，我會向同仁說明拆分原因。" },
                { speaker: "林思吾", role: "other", label: "麥可", text: "大家部門的考量，好的事情有時候會這樣掉了，這掉球是非常可惜的。" },
                { speaker: "蔡阿達", role: "ada", text: "我一直很在意說他們不是站在解決問題的角度在跟我談事情，他們是站在想要否決我的提案的前提下。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P14: 創造力互動媒體 × GEO Suite 合作 ======
    {
      id: "chuanglili-partner",
      name: "創造力互動媒體 — 網站建置 × GEO Suite 策略聯盟",
      icon: "🎨",
      category: "partner",
      lastUpdated: "2026-03-31",
      summary: "網頁設計公司 + awoo GEO Suite，在建站初期即導入 AI 優化，ROGO Suite 3 個月免費試用",
      keyPoints: [
        "陳致祥公司主做客製化網頁設計，平均建置 3-4 個月",
        "客戶常在建站後才提出 SEO/AI 優化需求 → <strong>二次調整成本高</strong>",
        "蔡阿達提議從<strong>建站初期即導入 AI 優化建議</strong>，節省客戶時間成本",
        "合作模式：策略聯盟 + 互換品牌 Logo + <strong>ROGO Suite 3 個月免費試用</strong>",
        "陳致祥客戶多為大型企業，重視持續服務品質與優化",
        "六月 ROGO Suite 第二階段發表，後續擴展代理商合作",
        "雙方同意先交換合作意向書，挑選 1-2 個試點專案"
      ],
      chips: [
        { icon: "🆓", text: "ROGO Suite 3 個月免費" },
        { icon: "🏢", text: "大型企業客戶群" },
        { icon: "⏱️", text: "建置 3-4 個月" },
        { icon: "📄", text: "合作意向書 pending" }
      ],
      todos: [
        { owner: "蔡阿達", text: "擬定合作意向書並寄送給陳致祥", priority: "week" },
        { owner: "蔡阿達", text: "提供 ROGO Suite 試用方案 + 五大能見度指標文字資料給陳致祥", priority: "week" },
        { owner: "陳致祥", text: "提供公司名片電子檔給蔡阿達，以便填寫合作意向書", priority: "waiting" },
        { owner: "雙方", text: "建立策略聯盟合作關係，互換品牌 Logo，對外宣稱合作", priority: "waiting" },
        { owner: "雙方", text: "挑選 1-2 個客戶專案進行 AI SEO 優化試點", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-03-31",
          title: "創造力互動媒體 × awoo GEO Suite 工具/技術串接合作初談",
          time: "15:30",
          duration: "32m",
          participants: "蔡阿達、陳致祥（創造力互動媒體）",
          docUrl: "",
          dialogues: [
            {
              topic: "合作痛點 & 模式討論",
              exchanges: [
                { speaker: "陳致祥", role: "other", label: "創造力互動媒體", text: "我們公司主要為客製化網頁設計，平均建置時間約 3 至 4 個月，客戶常在建站後提出 SEO 及 AI 搜尋優化需求，導致需二次調整，增加客戶負擔。" },
                { speaker: "蔡阿達", role: "ada", text: "我們就幫你從建站初期就導入 AI 優化建議，避免後續重複修改。策略聯盟方案是互換品牌標誌，提升雙方信任與市場認知。" },
                { speaker: "陳致祥", role: "other", label: "創造力互動媒體", text: "認同合作能提升客戶附加價值，客戶多為大型企業，重視服務品質與持續優化，合作可節省客戶與雙方時間成本。" }
              ]
            },
            {
              topic: "ROGO Suite 介紹 & 試用方案",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我們以 SEO 起家，並研發 ROGO Suite，能追蹤指定關鍵字與 prompt，分析 AI 對網站的正負面回應，協助優化內容。提出三個月免費試用方案。" },
                { speaker: "陳致祥", role: "other", label: "創造力互動媒體", text: "希望未來能有更多類似合作，讓客戶在初期即能同步考量 AI 優化需求，減少後續調整成本。" },
                { speaker: "蔡阿達", role: "ada", text: "六月會有第二階段發表，未來將擴展代理商合作。先交換合作意向書，視試用情況再進一步討論。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P15: 展匠 × 101 標案 ======
    {
      id: "101-tender",
      name: "展匠 × 台北 101 標案合作",
      icon: "🏛️",
      category: "client",
      lastUpdated: "2026-03-31",
      summary: "展匠承接 101 標案，awoo 提供金融業/百貨/精品旅遊客戶案例佐證，去識別化報價單為主",
      keyPoints: [
        "展匠標案需提供：<strong>金融業、百貨業、精品旅遊</strong>相關客戶案例 + 合約影本或證明文件",
        "蔡阿達建議使用<strong>去識別化報價單</strong>證明合作關係，避免機密洩露",
        "合作模式：展匠統一簽約，awoo 以顧問/技術角色參與",
        "Leon（呂紹平）有兩間時尚百貨合作經驗可作為佐證材料",
        "廣告投放預算及目標客群待確認，Leon 提供簡報給蔡阿達審閱"
      ],
      chips: [
        { icon: "🏗️", text: "展匠統一簽約" },
        { icon: "🏦", text: "金融業案例需要" },
        { icon: "🛍️", text: "時尚百貨 2 案" },
        { icon: "📄", text: "去識別化報價單" }
      ],
      todos: [
        { owner: "蔡阿達", text: "確認可提供哪些客戶的去識別化報價單或中性證明文件", priority: "week" },
        { owner: "Leon（呂紹平）", text: "提供 101 標案簡報給蔡阿達審閱，評估是否需對外說明", priority: "waiting" },
        { owner: "Leon（呂紹平）", text: "準備金融業及高端精品客戶案例合約影本或其他證明文件", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-31",
          title: "AE Team 週會（101 標案討論）",
          time: "11:43",
          duration: "28m",
          participants: "蔡阿達、呂紹平（Leon）、蔡毓倫（Aiden）、Rebecca Chen",
          docUrl: "",
          dialogues: [
            {
              topic: "101 標案客戶案例佐證",
              exchanges: [
                { speaker: "呂紹平", role: "other", label: "Leon", text: "展匠標案需提供金融業、百貨及精品旅遊相關客戶案例及合約影本或證明文件，增加 101 對公司的信任度。我有跟兩間時尚百貨的合作經驗。" },
                { speaker: "蔡阿達", role: "ada", text: "提供資料合理，建議使用去識別化報價單證明合作關係。我來確認是否可提供中性報價單或去識別化資料。" },
                { speaker: "呂紹平", role: "other", label: "Leon", text: "合作由展匠統一簽約，我提供簡報給你參考，後續評估是否需要對外說明。" }
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

    // ====== P12: 全網行銷 × awoo GEO ======
    {
      id: "quanwang-geo",
      name: "全網行銷 × awoo GEO 顧問合作",
      icon: "🌐",
      category: "client",
      lastUpdated: "2026-04-01",
      summary: "生活娛樂網/全網行銷洽談 GEO 顧問服務，預算 60-100 萬/年，5 或 7 月 UX 初版後介入",
      keyPoints: [
        "客戶：游怡嘉（全網行銷）代理 生活娛樂網，主業網站流量變現",
        "預算規模 <strong>60-100 萬/年</strong>，正式進場時機待 UX 初版完成（5 或 7 月）",
        "蔡阿達以 <strong>GEO 顧問身份</strong>切入，不走傳統 SEO 套件",
        "客戶現況：SEO 有在做但成效不確定，對 AI 搜尋趨勢有疑慮",
        "下一步：提供 GEO 診斷報告 + 顧問方案報價"
      ],
      chips: [
        { icon: "💰", text: "60-100萬/年" },
        { icon: "📅", text: "介入時機 5/7月" },
        { icon: "🎯", text: "GEO 顧問" },
        { icon: "🌟", text: "生活娛樂網" }
      ],
      todos: [
        { owner: "蔡阿達", text: "準備 GEO 診斷報告，針對生活娛樂網分析 AI 搜尋曝光現況", priority: "week" },
        { owner: "蔡阿達", text: "提供顧問方案報價（對應 60-100 萬預算區間）", priority: "week" },
        { owner: "蔡阿達", text: "與游怡嘉確認 UX 初版完成時程（5 月或 7 月），排定正式會議", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-04-01",
          title: "全網行銷 × awoo GEO 洽談",
          time: "10:00",
          duration: "45m",
          participants: "蔡阿達、游怡嘉（全網行銷）",
          docUrl: "",
          dialogues: [
            {
              topic: "客戶需求與預算確認",
              exchanges: [
                { speaker: "游怡嘉", role: "other", label: "全網行銷", text: "我們現在網站流量有在做 SEO，但不確定 AI 搜尋時代有沒有影響。預算大概在 60 到 100 萬這個區間，看服務內容而定。" },
                { speaker: "蔡阿達", role: "ada", text: "我建議從 GEO 顧問的角度切入，先幫你做一份診斷報告，看你現在在 AI 搜尋裡的曝光狀況，再來討論要做什麼。" }
              ]
            },
            {
              topic: "進場時機討論",
              exchanges: [
                { speaker: "游怡嘉", role: "other", label: "全網行銷", text: "我們的 UX 還在改版，可能 5 月或 7 月才有初版，那時候再正式開始比較合適。" },
                { speaker: "蔡阿達", role: "ada", text: "沒問題，UX 初版出來我們再來談細節。現在可以先讓我看一下你們現在的網站，我幫你預先診斷一下。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P13: FUZEN 行銷小聚 ======
    {
      id: "bni-marketing-chain",
      name: "FUZEN 行銷小聚 — 專業推廣 × 引薦 × 資源共享",
      icon: "🤝",
      category: "events",
      lastUpdated: "2026-04-22",
      summary: "每週三午餐小聚 — 4/22 討論客戶開發頻率、工廠數據化補助、穿越機飯店推廣、醫師 SaaS 平台、選舉產業鏈合作；蔡阿達推廣免費網站健檢 + MASK 服務",
      keyPoints: [
        "固定週三 13:00，代號 ogz-rugx-nkt（Google Meet）",
        "核心成員擴增：蔡阿達、遙空映畫（韋翰）、MarsZ Chen、Karen Hsu（凱倫）、楊翔淵 等 10+ 人",
        "蔡阿達推出<strong>免費網站體質健檢</strong>，爬取網站分析關鍵字頻率與排名難易度，結合 AI 推薦工具提升曝光",
        "遙空映畫引進<strong>穿越機拍攝</strong>設備，推廣南部飯店免費拍攝服務，強調室內飛行獨特視角",
        "MarsZ Chen 協助<strong>市議員官網建置</strong>與募款系統串接（4 月底政治現金帳戶開放），已完成臺南市議員李宗霖官網",
        "蔡阿達建置<strong>大語言模型引薦系統</strong>，將每週 30 秒簡報自動轉成引薦對話文本，上傳內部網站",
        "🆕 4/22 蔡阿達分享昨日實體小劇場效果良好，將持續舉辦",
        "🆕 討論客戶開發頻率，蔡阿達提出<strong>免費網站健檢 + MASK 推廣</strong>開發中小企業",
        "🆕 數位巴克斯介紹<strong>工廠設備數據化</strong>方案與政府補助（50%，100 萬起）",
        "🆕 MarsZ Chen 計畫年底前推出<strong>醫師個人品牌 SaaS 平台</strong>",
        "🆕 遙空映畫引進<strong>空拍穿越機</strong>，計畫無償提供高雄飯店試拍",
        "🆕 選舉產業鏈合作：成員互相引薦高雄與臺南政治人物資源"
      ],
      chips: [
        { icon: "📅", text: "每週三 13:00" },
        { icon: "👥", text: "10+ 位成員" },
        { icon: "🔗", text: "產業鏈串接" },
        { icon: "🤖", text: "LLM 引薦系統" }
      ],
      todos: [
        { owner: "蔡阿達", text: "持續召集 FUZEN 行銷小聚，主動媒合成員專長與客戶需求", priority: "week" },
        { owner: "蔡阿達", text: "提供免費網站體質健檢服務給 FUZEN 成員轉介的客戶", priority: "week" },
        { owner: "蔡阿達", text: "協助成員客戶了解 AI 推薦指標，提供優化方向與行動建議", priority: "week" },
        { owner: "蔡阿達", text: "持續更新大語言模型引薦系統，整合每週專題簡報內容", priority: "week" },
        { owner: "蔡阿達", text: "跟進嘉義福容飯店穿越機拍攝申請，協助遙空映畫推進合作", priority: "week" },
        { owner: "蔡阿達", text: "協助數位巴克斯評估工廠設備數據化方案中 AI/SEO 協作機會", priority: "week" },
        { owner: "蔡阿達", text: "跟進遙空映畫高雄飯店穿越機拍攝合作進度", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-04-22",
          title: "FUZEN 行銷小聚 04/22",
          time: "13:00-13:52",
          duration: "52m",
          participants: "蔡阿達、遙空映畫（韋翰）、數位巴克斯（恒丰）、MarsZ Chen 等",
          docUrl: "",
          dialogues: [
            {
              topic: "客戶開發策略與免費網站健檢",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "每週至少接觸一位新客戶。可免費為客戶做網站健檢，透過關鍵字分析協助客戶優化官網，並藉此推廣 MASK 服務。" },
                { speaker: "數位巴克斯", role: "other", label: "巴克斯", text: "新客戶較少，約一個月一位。雙方考慮開發中小企業訂閱服務以擴大市場。" }
              ]
            },
            {
              topic: "工廠設備數據化與政府補助",
              exchanges: [
                { speaker: "數位巴克斯", role: "other", label: "巴克斯", text: "工廠設備多為無法連網的舊機型，需硬體改造實現連網。政府補助比例約 50%，金額從 100 萬起，最高可達千萬。" },
                { speaker: "蔡阿達", role: "ada", text: "昨日實體小劇場方式效果良好，希望未來能持續此類活動。" }
              ]
            },
            {
              topic: "穿越機推廣與選舉產業鏈合作",
              exchanges: [
                { speaker: "遙空映畫", role: "other", label: "影片", text: "穿越機可搭配 VR 眼鏡操作，外包成本高達 6 至 8 萬。計畫無償提供高雄飯店穿越機拍攝服務，製作一鏡到底影片提升社群曝光。" },
                { speaker: "MarsZ Chen", role: "other", label: "網站", text: "持續推動選舉產業鏈，協助議員客戶製作形象影片及廣告投放。雙方分服高雄與臺南政治人物，互相引薦資源。" }
              ]
            }
          ]
        },
        {
          date: "2026-04-16",
          title: "野口主題簡報預演",
          time: "08:45-09:00",
          duration: "15m",
          participants: "蔡阿達、林育紹",
          docUrl: "",
          dialogues: [
            {
              topic: "成員主題簡報指導",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "簡報時間超過五分鐘約 20 秒，建議調整節奏。最後三頁要強化細節與專業層次，增加圖片減少文字量，架構可參考主題簡報常見的三案例、三影片對話框架。" },
                { speaker: "林育紹", role: "other", label: "成員", text: "前 19 頁可以加快節奏，重點放在最後兩頁的影響與引薦。感謝建議，預祝明天簡報順利。" }
              ]
            }
          ]
        },
        {
          date: "2026-04-15",
          title: "FUZEN 行銷小聚 04/15",
          time: "13:01-14:00",
          duration: "59m",
          participants: "蔡阿達、遙空映畫（韋翰）、MarsZ Chen、Karen Hsu（凱倫）、楊翔淵 等",
          docUrl: "",
          dialogues: [
            {
              topic: "學校網站 SEO 與 AI 推薦策略",
              exchanges: [
                { speaker: "遙空映畫", role: "other", label: "影片", text: "學校官網因 .edu 域名權重高，適合推廣特定議題，但學校經費有限，目標是將服務延伸至醫院、百貨等消費市場。" },
                { speaker: "蔡阿達", role: "ada", text: "我們可以免費幫客戶做網站體質健檢，爬取網站內容分析關鍵字頻率與排名難易度，提供優化建議。也能協助了解網站是否被 AI 推薦，結合內容優化提升曝光。" }
              ]
            },
            {
              topic: "穿越機拍攝服務推廣與飯店合作",
              exchanges: [
                { speaker: "遙空映畫", role: "other", label: "影片", text: "穿越機比空拍機更靈活，能在室內飛行，適合拍攝飯店空間及菜色上空等場景。我們想以免費方式提供南部飯店穿越機拍攝，作為形象影片加值服務。" },
                { speaker: "蔡阿達", role: "ada", text: "我最近在跟嘉義福容飯店洽談寵物房佈置，可以確認穿越機拍攝的可行性，但需要提前申請。" }
              ]
            },
            {
              topic: "市議員官網與募款系統推廣",
              exchanges: [
                { speaker: "MarsZ Chen", role: "other", label: "網站", text: "4 月底政治現金帳戶開放，我們協助議員建置募款頁面並串接金流。已完成臺南市議員李宗霖官網及陳情系統，幫助篩選無效陳情，提升助理工作效率。" },
                { speaker: "蔡阿達", role: "ada", text: "建議議員及其他客戶先建立網站，方便整合影片、社群導流等行銷資源。網站跟影片服務是互補的，雙方合作不分上下游。" }
              ]
            },
            {
              topic: "大語言模型引薦系統建置",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我已經串接大語言模型，把每週 30 秒簡報內容自動轉成引薦對話文本，方便大家快速開啟交流。之後會持續更新並上傳到內部網站。" }
              ]
            }
          ]
        },
        {
          date: "2026-04-01",
          title: "BNI 行銷小聚 04/01",
          time: "13:00",
          duration: "45m",
          participants: "蔡阿達、遙空映畫、張張、楊翔淵、June Enter",
          docUrl: "",
          dialogues: [
            {
              topic: "近期合作機會分享",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "這週有幾個客戶有攝影需求，我幫大家記著，有合適的就互相引薦。" },
                { speaker: "遙空映畫", role: "other", label: "影片", text: "我最近接了幾個企業宣傳影片，有幾個客戶也在問有沒有文案可以配合，可以互相介紹。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P20: 崴浤（威宏）× awoo GEO Suite 合作 ======
    {
      id: "wai-hong-partner",
      name: "崴浤（威宏）× awoo GEO Suite 合作洽談",
      icon: "🏢",
      category: "partner",
      lastUpdated: "2026-04-02",
      summary: "數位行銷代理商崴浤初次接觸，以威宏自家網站試用 GEO Suite，目標建立代理商合作模式",
      keyPoints: [
        "蔡富傑（威宏）表示市場少見類似工具，對推廣及服務有幫助",
        "<strong>五大 AI 能見度指標</strong>：品牌提及次數、提及機率、佔比、情緒分析、網站引用",
        "初步共識：<strong>威宏自家網站免費試用</strong>，再討論客戶推廣模式",
        "合作分工：awoo 主攻技術工具面，威宏專注業務行銷，避免重複人力",
        "合作初期零元試用，後續再討論報價與利潤分配",
        "計劃成立專案小組（Slack 或 Line），awoo 即時回應需求"
      ],
      chips: [
        { icon: "🆓", text: "零元試用" },
        { icon: "📊", text: "5 大 AI 指標" },
        { icon: "🤝", text: "技術+業務分工" },
        { icon: "💬", text: "專案小組 pending" }
      ],
      todos: [
        { owner: "蔡阿達", text: "提供崴浤 GEO Suite 詳細使用簡報與功能說明", priority: "week" },
        { owner: "蔡阿達", text: "開放崴浤自家網站使用 GEO Suite 工具（零元試用）", priority: "week" },
        { owner: "蔡阿達", text: "協助崴浤挑選關鍵字及提示詞，提供網站健檢建議", priority: "week" },
        { owner: "蔡阿達", text: "建立專案小組（Slack 或 Line），保持即時溝通", priority: "week" },
        { owner: "雙方", text: "討論合作方案報價結構及利潤分拆細節", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-04-02",
          title: "崴浤 × awoo GEO Suite 合作初談",
          time: "09:59-10:39",
          duration: "40m",
          participants: "蔡阿達、蔡富傑（威宏/崴浤）",
          docUrl: "",
          dialogues: [
            {
              topic: "GEO Suite 介紹與合作意向",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "GEO Suite 核心是追蹤五大 AI 能見度指標，包含品牌被 AI 提及次數、提及機率、佔比、情緒分析及網站被引用數，協助業主了解 AI 推薦狀況。" },
                { speaker: "蔡富傑", role: "other", label: "崴浤", text: "這個工具在市場上少見，對我們推廣及服務有幫助，如果自行開發需投入大量人力，願意嘗試合作。" },
                { speaker: "蔡阿達", role: "ada", text: "合作初期先以零元試用讓你體驗工具功能，後續再討論報價及利潤分配細節，我們保持開放態度。" }
              ]
            },
            {
              topic: "合作模式與分工討論",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我們主攻技術及工具面，你們專注業務行銷，避免重複投入人力，提升市場推廣效率。" },
                { speaker: "蔡富傑", role: "other", label: "崴浤", text: "B2B 客戶雖品牌需求較低，但更需 AI 推薦背書，我們可以互補各自客群。" },
                { speaker: "蔡阿達", role: "ada", text: "我提議先成立專案小組，透過 Slack 或 Line 保持溝通，隨時回應你們需求並協助開發支援。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P21: 赫斯特 技術/廣告交換合作 ======
    {
      id: "hearst-partner",
      name: "赫斯特 — AIO 健檢技術/廣告交換合作",
      icon: "📰",
      category: "partner",
      lastUpdated: "2026-04-02",
      summary: "合作報價單確認，分階段交付 AIO 健檢，L Taiwan 品牌授權條款定稿，Harry Wen 4/2 下午回簽",
      keyPoints: [
        "Harry Wen 老闆擔心三個月後才有報告，影響總部決策 → <strong>分階段交付</strong>，每週/兩週回報",
        "蔡阿達承諾合作開始後 <strong>30 天內完成完整建議書</strong>，持續陪伴調整 AIO 引用問題",
        "合作案例定義：<strong>合作案例</strong>（非成功案例），避免其他廠商疑慮",
        "品牌授權限定 <strong>L Taiwan 商標</strong>，每次使用前甲方事前確認",
        "社群媒體宣傳採<strong>事前審核機制</strong>，避免法務擔憂頻率無法掌控",
        "電子簽核系統，Harry Wen 預計 4/2 下午完成回簽",
        "待確認 GEO Suite 中 GPT Gemini 是否包含 Google AIO 模組"
      ],
      chips: [
        { icon: "📅", text: "30 天內建議書" },
        { icon: "⚖️", text: "L Taiwan 商標" },
        { icon: "✍️", text: "4/2 回簽" },
        { icon: "🔄", text: "分階段交付" }
      ],
      todos: [
        { owner: "蔡阿達", text: "調整報價單，加入分階段交付機制（每週/兩週回報進度）", priority: "today" },
        { owner: "蔡阿達", text: "合作開始後 30 天內完成完整建議書", priority: "week" },
        { owner: "蔡阿達", text: "調整授權條款：L Taiwan 商標授權範圍及社群媒體事前審核流程", priority: "today" },
        { owner: "蔡阿達", text: "確認 GEO Suite 中 GPT Gemini 是否包含 Google AIO 模組，並回覆 Harry Wen", priority: "week" },
        { owner: "Harry Wen", text: "4/2 下午完成報價單修正並電子回簽", priority: "today" }
      ],
      meetingHistory: [
        {
          date: "2026-04-02",
          title: "赫斯特 技術/廣告交換合作細節確認",
          time: "11:30-11:49",
          duration: "19m",
          participants: "蔡阿達、Harry Wen（赫斯特）",
          docUrl: "",
          dialogues: [
            {
              topic: "分階段交付與報價單調整",
              exchanges: [
                { speaker: "Harry Wen", role: "other", label: "赫斯特", text: "老闆擔心三個月後才有 AI overview 引用與障礙技術分析報告，可能導致總部調整延遲，建議分階段交付，每週或每兩週回報進度。" },
                { speaker: "蔡阿達", role: "ada", text: "我們在簽約前已持續提供建議，願意配合提前交付。我提議合作起30天內完成完整建議書，並承諾持續陪伴調整，直到問題有效解決。" }
              ]
            },
            {
              topic: "合作案例定義與品牌授權",
              exchanges: [
                { speaker: "Harry Wen", role: "other", label: "赫斯特", text: "法務建議品牌商標授權限定為 L Taiwan 商標，每次使用前需甲方事前確認。合作案例建議稱為合作案例而非成功案例，避免其他廠商質疑。" },
                { speaker: "蔡阿達", role: "ada", text: "沒問題，我來協助修正文件。社群媒體宣傳採事前審核機制，我們設定文件連結共同修正，盡快完成電子簽核。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P22: Groundhog × awoo 技術合作探索 ======
    {
      id: "groundhog-partner",
      name: "Groundhog × awoo — Martech 站外數據技術合作探索",
      icon: "🦔",
      category: "partner",
      lastUpdated: "2026-04-02",
      summary: "Groundhog 利用 DSP 廣告請求收集站外瀏覽數據，探索與 awoo SEO/GEO 服務的整合可能性",
      keyPoints: [
        "Groundhog（Josh Chen）透過 DSP 廣告請求收集用戶<strong>站外瀏覽行為</strong>，萃取關鍵字與興趣",
        "每日處理<strong>數十億筆資料</strong>，可揭露用戶常瀏覽站外網站，協助品牌尋找合作部落格",
        "蔡阿達質疑：如何將潛在意圖直接轉化為客戶眼前可見的 ROI？",
        "雙方討論 SEO 從被搜尋到<strong>被 AI 推薦</strong>的轉變，Groundhog 也在朝此方向思考",
        "蔡阿達建議：提供受眾包中的<strong>額外興趣</strong>，增加甲方客戶合作意願",
        "合作重點在解決客戶問題與提供獨特價值，價格非首要考量"
      ],
      chips: [
        { icon: "📊", text: "數十億筆/日" },
        { icon: "🎯", text: "站外行為分析" },
        { icon: "🤝", text: "合作 TBD" },
        { icon: "💡", text: "AI 推薦趨勢同向" }
      ],
      todos: [
        { owner: "Josh Chen", text: "整理 Martech 產品技術原理與具體案例，提供完整解決方案介紹", priority: "waiting" },
        { owner: "蔡阿達", text: "評估雙方客戶重疊與合作切入點，提出具體合作需求", priority: "week" },
        { owner: "雙方", text: "安排後續會議，針對合作方案與技術資源整合深入討論", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-04-02",
          title: "Groundhog × awoo 技術合作洽談",
          time: "14:29-14:58",
          duration: "29m",
          participants: "蔡阿達、Josh Chen（Groundhog）",
          docUrl: "",
          dialogues: [
            {
              topic: "Martech 站外數據技術介紹",
              exchanges: [
                { speaker: "Josh Chen", role: "other", label: "Groundhog", text: "我們透過 DSP 廣告投遞過程收集用戶站外瀏覽行為，分析用戶興趣並萃取關鍵字，協助品牌在 SEO 及內容撰寫上擴展長尾關鍵字與主題參考。每日處理數十億筆資料。" },
                { speaker: "蔡阿達", role: "ada", text: "我在想如何從多樣的站外瀏覽行為中，篩選出與品牌產品相關的興趣？客戶最關心的是投資報酬率和合作績效。" }
              ]
            },
            {
              topic: "合作價值定位討論",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "目前難以將潛在意圖直接轉化為客戶眼前的成效。但可以提供受眾包中除預期需求外的額外興趣，增加甲方客戶的興趣與合作意願。" },
                { speaker: "Josh Chen", role: "other", label: "Groundhog", text: "認同，只要 ID 能匹配即可提供此類受眾包，也希望藉由 SEO 專家的回饋來調整產品，更符合客戶需求。" },
                { speaker: "蔡阿達", role: "ada", text: "廣告聯播網的去識別化數據非常珍貴，但如何與客戶需求連結仍需進一步思考。合作重點在於解決客戶問題，價格非首要考量。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P23: Leon BD 同步 — 娛樂城代理商 ======
    {
      id: "leon-bd-sync",
      name: "Leon BD 同步 — 博報堂 INAX + Yahoo 回簽 + 業務推動",
      icon: "📋",
      category: "internal",
      lastUpdated: "2026-04-24",
      summary: "4/24 Leon 推動博報堂/INAX GEO 優化方案保密合約、Yahoo 合約回簽確認、GEO 工具多語言追蹤功能確認",
      keyPoints: [
        "娛樂城代理商客戶：代理商信任 Leon，蔡阿達說服後<strong>約 4/8（三）下午5點</strong>復興北路167號見面",
        "提案策略：<strong>先做好 SEO，再做關鍵字廣告</strong>，Leon 主導跟進",
        "🆕 4/24 Leon 提交<strong>博報堂思索-INAX GEO 優化方案保密合約書</strong>修訂版",
        "🆕 <strong>Yahoo 合約已回簽</strong>，需上 Ragic 完成新增專案登記",
        "🆕 GEO 工具確認可<strong>切地區與切語言</strong>，追蹤美國英文市場可行",
        "🆕 Ada 確認已有 Yahoo 及台灣 ELLE 的 LOGO"
      ],
      chips: [
        { icon: "📝", text: "INAX NDA 審查中" },
        { icon: "✅", text: "Yahoo 回簽" },
        { icon: "🏷️", text: "Yahoo+ELLE LOGO" },
        { icon: "🌐", text: "多語言追蹤可行" }
      ],
      todos: [
        { owner: "Leon（呂紹平）", text: "跟進博報堂/INAX GEO 保密合約簽署流程", priority: "today" },
        { owner: "Leon（呂紹平）", text: "上 Ragic 完成 Yahoo GEO Suite 新增專案登記", priority: "today" },
        { owner: "蔡阿達", text: "確認 GEO 工具報表功能是否有解決方案", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-04-02",
          title: "Ada × Leon 內部 BD 同步（李盎灣昂萬會議）",
          time: "16:32-16:45",
          duration: "13m",
          participants: "蔡阿達、呂紹平（Leon）",
          docUrl: "",
          dialogues: [
            {
              topic: "娛樂城代理商客戶提案安排",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "這個娛樂城代理商原本不打算找我們提案，但我說服了他，他現在願意帶他的客戶來跟我們見面。提案重點就是先做好 SEO，才能有效進行關鍵字廣告。" },
                { speaker: "呂紹平", role: "other", label: "Leon", text: "好，我負責跟進，我們下週三下午五點，在復興北路167號見面。" }
              ]
            },
            {
              topic: "四月業務動態",
              exchanges: [
                { speaker: "呂紹平", role: "other", label: "Leon", text: "四月有新單但我還沒填報。代理商對我信任，直接委託拓字研究案。麥可已完成簽約，後續代理商可能有合約需求，會再通知你。" },
                { speaker: "蔡阿達", role: "ada", text: "好，我可以協助資料整理。文章篇數那個問題，下週一或二的週會提出來討論一下，確保跟客戶認知一致。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P24: 艾勝渼 × awoo GO Suite ======
    {
      id: "ai-sheng-mi-partner",
      name: "艾勝渼 — GO Suite AI 能見度分析合作探索",
      icon: "✨",
      category: "partner",
      lastUpdated: "2026-04-02",
      summary: "張莉欣（艾勝渼）尋找平台合作機會，蔡阿達介紹 GO Suite，主聚焦 AI 能見度，SEO 細節為附加",
      keyPoints: [
        "awoo 台灣、日本設有辦公室，約 130 人，<strong>近二十年 SEO 深耕</strong>",
        "GO Suite 兩週前發表，細分<strong>五大 AI 能見度指標</strong>：品牌提及佔比、聲量好壞、是否被引用",
        "工具透過爬蟲評估網站 SEO 現況與內容結構，提供優化建議",
        "艾勝渼目前主要尋找<strong>平台合作機會</strong>，對 GO Suite 運作模式感興趣",
        "GO Suite 主要呈現 AI 能見度結果，SEO 細節為附加服務",
        "合作模式待評估，單純訂閱工具價值有限，需探索更具體模式"
      ],
      chips: [
        { icon: "📊", text: "5 大 AI 指標" },
        { icon: "🤝", text: "平台合作探討" },
        { icon: "🆓", text: "合作模式 TBD" },
        { icon: "⏱️", text: "15 min 初談" }
      ],
      todos: [
        { owner: "蔡阿達", text: "若艾勝渼有客戶需求，請對方提供網址以便後續協助跟進", priority: "waiting" },
        { owner: "蔡阿達", text: "評估與艾勝渼的具體合作模式與收費方式", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-04-02",
          title: "艾勝渼 × awoo GO Suite 技術合作洽談",
          time: "16:45-17:00",
          duration: "15m",
          participants: "蔡阿達、張莉欣（艾勝渼）",
          docUrl: "",
          dialogues: [
            {
              topic: "GO Suite 介紹與合作可能性",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我們公司近二十年專注 SEO 技術，近年因應 AI 趨勢轉向 AI 能見度分析。GO Suite 兩週前發表，能細分五大 AI 能見度指標，協助客戶了解品牌在 AI 上的曝光狀況。" },
                { speaker: "張莉欣", role: "other", label: "艾勝渼", text: "我目前主要尋找平台合作機會，對 GO Suite 的運作模式感興趣，想了解它是否包含 SEO 其他資訊？" },
                { speaker: "蔡阿達", role: "ada", text: "GO Suite 平台主要呈現 AI 能見度結果，SEO 細節屬附加服務，若需深入報告可另行製作。若有客戶需求，請提供網址，我們後續協助跟進。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P25: MANI GEO 廣告投放 ======
    {
      id: "mani-geo",
      name: "MANI — 精油品牌 GEO 廣告投放合作",
      icon: "🌿",
      category: "client",
      lastUpdated: "2026-04-13",
      summary: "新品牌複方精油廣告投放洽談 — Aiden 主導，月預算 5 萬起，Google + Meta 雙平台，3-6 個月學習期",
      keyPoints: [
        "客戶：趙元（MANI），<strong>藏傳佛教基金會背景的複方精油</strong>，結合身心靈與寵物市場",
        "廣告策略：<strong>Google + Meta 雙平台</strong>投放，初期兼顧品牌認知與轉換",
        "最低月投放預算 <strong>5 萬元</strong>，代操服務費為投放金額 20%，帳號設定費 1.4 萬元（未稅）",
        "新品牌需 <strong>3-6 個月廣告學習期</strong>，不宜全部投入轉換廣告",
        "使用 Swido 第三方平台提供即時數據報告，確保投放透明度",
        "GA4 及追蹤工具尚未安裝，需客戶盡快與網站團隊協調完成"
      ],
      chips: [
        { icon: "💰", text: "月預算 ≥5萬" },
        { icon: "📱", text: "Google+Meta" },
        { icon: "⏱️", text: "3-6月學習期" },
        { icon: "🌿", text: "精油品牌" }
      ],
      todos: [
        { owner: "蔡毓倫", text: "提供相近產業廣告成效案例與委刊單給趙元", priority: "today" },
        { owner: "蔡毓倫", text: "協助趙元團隊串接 GA4、GTM 及 Google Merchant Center", priority: "week" },
        { owner: "蔡毓倫", text: "提供 Swido 第三方平台帳號與操作說明", priority: "week" },
        { owner: "趙元", text: "確認網站 GA4 及追蹤工具安裝狀況，與網站設計團隊協調完成", priority: "week" },
        { owner: "趙元", text: "提供主要商品名稱與相關數字資料，協助預估廣告成效", priority: "week" },
        { owner: "趙元", text: "確認廣告素材準備狀況，簽約後 5-7 工作天完成上線", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-04-13",
          title: "MANI GEO 專案合作洽談",
          time: "14:01-14:31",
          duration: "30m",
          participants: "蔡毓倫（Aiden）、趙元（MANI）",
          docUrl: "",
          dialogues: [
            {
              topic: "新品牌精油產品廣告投放策略與預算討論",
              exchanges: [
                { speaker: "趙元", role: "other", label: "MANI", text: "產品為藏傳佛教基金會背景的複方精油，屬宗教商品類型，結合身心靈與寵物市場。社群廣告為必投，Google 廣告老闆仍在考慮中。" },
                { speaker: "蔡毓倫", role: "other", label: "Aiden", text: "Google 廣告屬主動搜尋，Meta 為被動社群廣告，建議若預算充足可雙管齊下。新品牌初期不宜全部投入轉換廣告，應配置部分預算於品牌建立。" },
                { speaker: "蔡毓倫", role: "other", label: "Aiden", text: "月最低投放 5 萬元，代操服務費為投放金額 20%，帳號設定費 1.4 萬元（未稅）。使用 Swido 第三方平台提供即時數據報告，方便客戶隨時查看廣告成效。" }
              ]
            },
            {
              topic: "廣告投放技術準備與後續流程",
              exchanges: [
                { speaker: "蔡毓倫", role: "other", label: "Aiden", text: "GA4 及相關追蹤工具尚未安裝，建議盡快與網站設計團隊確認權限與設置。簽約後約需 5-7 工作天完成廣告上線。" },
                { speaker: "趙元", role: "other", label: "MANI", text: "素材尚未完成，會與團隊配合完成。確認會議資料及委刊單透過 Line 與 Email 提供。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P14 (舊): GEM 關鍵字研究工具 ======
    {
      id: "gem-keyword-tool",
      name: "GEM 關鍵字研究工具 — 自動爬蟲生成背景報告",
      icon: "🔑",
      category: "tools",
      lastUpdated: "2026-04-21",
      summary: "4/21 完成 JTLegend 與 Spigen 兩份 GEO 進檢報告 — Leon 審閱後全面改 SEO 為 GEO、各品牌獨立報告；Leon 完成報價單整合，後續加入 GEO/AMP 模組",
      keyPoints: [
        "<strong>4/7 AE 週會全員 Demo</strong>：蔡阿達向 Bryan、Rebecca、Leon、Aiden 介紹工具，獲團隊認可",
        "工具流程：輸入客戶網址 → 爬取所有頁面 → 生成<strong>健檢報告（提案用）+ 關鍵字拓展報告（拓字用）</strong>",
        "報告含客戶網站聲量分析（正面/負面訊號），增加提案說服力",
        "客戶確定關鍵字後，可再跑 <strong>3-5 個 Prompt</strong> 對應消費者旅程，設計互動式選擇工具",
        "HubSpot 商機推動視圖整合：客戶報告統一放 Company Property，CS/AE 共用",
        "費用明確化：工具費 <strong>9,000 元</strong>，獨立列於報價單",
        "下一步：完善爬蟲穩定性、英文網站支援、網站內容佔比分析整合",
        "🆕 4/20 提案報告已獲 YC 認可，<strong>可取代自首報告</strong>，含網站 DNA 分析與關鍵字健檢",
        "🆕 4/20 團隊建議<strong>分階段提案</strong>：第一次聚焦網站體質總覽與主要問題，第二次提供關鍵字分析作為續談誘因",
        "🆕 呂紹平建議避免重複內容，精簡文字；蔡毓倫同意第一次聚焦主要產品線",
        "🆕 蔡阿達完成 GO 網站檢測報告，含<strong>網站現況總覽、語意地圖分析及需求對應頁面</strong>，連結已更新",
        "🆕 4/21 完成 <strong>JTLegend（愛馬斯）與 Spigen（爵雅）</strong>兩份 GEO 進檢報告，部署於 awoo-vital.vercel.app",
        "🆕 Leon 審閱後建議：全面將 <strong>SEO 改為 GEO</strong>、各品牌報告獨立不混用其他品牌資料、移除累積案件數文字",
        "🆕 Ada 已根據回饋修正報告並更新連結，預計可再產出兩份進檢報告",
        "🆕 Leon 完成 <strong>SEO 報價單整合</strong>，後續將加入 GEO/AMP/電商流量模組，預計明天上午向團隊發表"
      ],
      chips: [
        { icon: "💰", text: "工具費 9K" },
        { icon: "🤖", text: "一鍵爬蟲" },
        { icon: "📊", text: "健檢+拓字報告" },
        { icon: "🎯", text: "AE 週會 Demo ✅" }
      ],
      todos: [
        { owner: "蔡阿達", text: "持續優化爬蟲程式，確保資料準確並產出健檢報告與關鍵字拓展報告供 AE 提案使用", priority: "week" },
        { owner: "蔡阿達", text: "協助 AE 在客戶進入提案階段時，根據確定關鍵字生成 3-5 個 Prompt 對應消費者旅程", priority: "week" },
        { owner: "蔡阿達", text: "設計互動式 Prompt 選擇工具，方便 AE 與客戶溝通選擇", priority: "week" },
        { owner: "蔡阿達", text: "建立 HubSpot 商機推動視圖，並評估是否開放給全團隊查看", priority: "week" },
        { owner: "蔡阿達", text: "將客戶進展報告、關鍵字拓展報告統整至 HubSpot 公司層級，方便 AE 與 CS 共用", priority: "week" },
        { owner: "蔡阿達", text: "根據 AE 反饋調整報告配色，減少顏色數量，提升視覺舒適度", priority: "week" },
        { owner: "蔡阿達", text: "測試英文網站爬取能力，改善英文關鍵字研究報告品質", priority: "week" },
        { owner: "蔡阿達", text: "繼續產出進檢報告（預計再做兩份），確保品牌資料獨立不混用", priority: "week" },
        { owner: "Leon（呂紹平）", text: "完成報價單 GEO/AMP/電商流量模組整合，安排隔天上午向團隊發表", priority: "today" }
      ],
      meetingHistory: [
        {
          date: "2026-04-20",
          title: "AE Team 週會 — 提案報告簡化與分階段策略",
          time: "16:46-17:54",
          duration: "1h08m",
          participants: "蔡阿達、Angelline、Leo、Irene、Leon、AE 業務開發組",
          docUrl: "",
          dialogues: [
            {
              topic: "提案報告簡化與分階段策略",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "最新提案報告已獲 YC 認可可取代自首報告，報告分析網站內容 DNA 及主題，包含語意地圖分析及需求對應頁面。大家覺得報告內容是否過多？" },
                { speaker: "呂紹平", role: "other", label: "Leon", text: "建議避免重複內容，精簡文字，將詳細資料留給第二次提案。" },
                { speaker: "蔡毓倫", role: "other", label: "Aiden", text: "同意分階段策略，第一次提案聚焦主要產品線，第二次深入內容拓展。" },
                { speaker: "蔡阿達", role: "ada", text: "我會根據回饋調整報告，提案簡報要幫助加速轉換率。歡迎大家繼續提供具體修改意見。" }
              ]
            },
            {
              topic: "客戶工具回饋與功能優化需求",
              exchanges: [
                { speaker: "Rebecca", role: "other", label: "AE", text: "客戶期望增加時間段交叉比對與資料匯出功能，使用多平台希望工具能整合比較。" },
                { speaker: "蔡阿達", role: "ada", text: "工具難以面面俱到，應搭配顧問服務，工具為輔助顧問服務而非解決所有問題。" }
              ]
            }
          ]
        },
        {
          date: "2026-04-07",
          title: "AE Team 週會 — GEM 工具全員 Demo",
          time: "11:31-12:36",
          duration: "1h05m",
          participants: "蔡阿達、Bryan Chou、Rebecca Chen、呂紹平 Leon、蔡毓倫 Aiden、馬愛雲",
          docUrl: "https://docs.google.com/document/d/1lxkwSgT5QJJPv57Vsatm2tOJ136PRjHY5Pw2Mvi7TbA/edit",
          dialogues: [
            {
              topic: "GEM 工具介紹與提案流程",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "工具會自動爬取客戶網站所有內容，避免人工誤判，產生網站健檢報告與關鍵字拓展報告，方便 AE 提案時展示客戶網站問題與優化建議。報告含客戶網站在網際網絡上的聲量分析，能呈現正面及負面訊息，增加提案說服力。" },
                { speaker: "蔡阿達", role: "ada", text: "客戶的關鍵字確定下來以後，我會幫你們再跑另外一支結果，針對客戶所在意的關鍵字幫他跑大概三到五個 prompt 出來，對應不同消費者旅程階段。" },
                { speaker: "Rebecca Chen", role: "other", label: "AE", text: "兩份報告皆產出，一份用於客戶提案，一份作為內部拓字團隊溝通資料，確保資料完整且靈活運用。" }
              ]
            },
            {
              topic: "HubSpot 商機管理整合",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我已建立個人專用的商機推動視圖，計畫評估是否開放給全團隊。報告資料將統一放置於客戶公司 property 中，包含進展報告與關鍵字拓展報告，未來 CS 專員也能直接撈取資料，減少重複作業。" }
              ]
            },
            {
              topic: "鉅鹿客戶教育與 Google Ads 策略",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "針對想先做 Google Ads 但網站尚未架設的客戶：廣告品質分數由點擊率、關鍵字與內容關聯性及用戶體驗三大指標組成，網站內容不足會導致品質分數低、競價成本高。建議客戶先完善網站內容再投廣告。" },
                { speaker: "Bryan Chou", role: "other", label: "AE", text: "4/8 上午10點安排與鉅鹿客戶會議，了解需求並說明 SEO 與內容準備的重要性。" }
              ]
            }
          ]
        },
        {
          date: "2026-04-01",
          title: "貝卡灣昂萬 × Rebecca × 蔡阿達 — GEM 工具介紹",
          time: "14:00",
          duration: "30m",
          participants: "蔡阿達、Rebecca Chen、貝卡灣昂萬客戶",
          docUrl: "",
          dialogues: [
            {
              topic: "GEM 工具 Demo 與報價明確化",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我來示範一下 GEM 工具，輸入你們的網址，它自動去爬你們的網站，然後生成一份關鍵字研究的背景報告，這樣我們提案的時候可以更快速、更有針對性。" },
                { speaker: "Rebecca", role: "other", label: "AE", text: "客戶之前有提到拓字流程延誤，這個工具可以解決一部分問題，我建議把工具費獨立列出來，不要包在服務費裡面，這樣比較清楚。" },
                { speaker: "蔡阿達", role: "ada", text: "對，工具費就是 9,000 元，單獨列在報價單，客戶看得清楚，我們也方便解釋工具的價值。英文文章的部分我們也在持續推動，後續再更新。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P26: 愛貝斯 ======
    {
      id: "ibase",
      name: "愛貝斯（iBASE）— 合約變更與應收帳款追蹤",
      icon: "📋",
      category: "client",
      lastUpdated: "2026-04-14",
      summary: "合約付款方錯誤需透過三方變更協議修正，同時追蹤未付款項並準備存證信函催告",
      keyPoints: [
        "合約簽訂對象為<strong>愛斯柏（ISABEL）</strong>，但專案登記錯誤導致發票開給愛貝斯（iBASE），帳務無法對帳",
        "決議<strong>不重新簽約</strong>，改在變更協議中加入三方條款，明確由愛貝斯代替愛斯柏付款",
        "上半年服務至 1 月底，<strong>2 月起客戶暫停服務</strong>，發票已開至 3 月，需調整收入認列",
        "客戶未如期付款，口頭及 Line 提醒無效，決議發出<strong>正式存證信函</strong>催告",
        "客戶團隊已更換，法務認為新團隊應承擔前團隊合約責任"
      ],
      chips: [
        { icon: "📝", text: "變更協議" },
        { icon: "💸", text: "未付款追蹤" },
        { icon: "⚖️", text: "存證信函" },
        { icon: "⏸️", text: "服務暫停中" }
      ],
      todos: [
        { owner: "蔡阿達", text: "與愛貝斯確認是否同意代替愛斯柏付款，並釐清下半年付款方", priority: "today" },
        { owner: "蔡阿達", text: "將確認的付款方及相關文字加入變更協議", priority: "today" },
        { owner: "蔡阿達", text: "向客戶說明發票開立錯誤並重新開立正確發票", priority: "week" },
        { owner: "蔡阿達", text: "確認客戶暫停服務起始日及預計重啟時間", priority: "week" },
        { owner: "蔡阿達", text: "確認下半年發票開立對象及付款方", priority: "week" },
        { owner: "Eric Hsiao", text: "審閱並寄送包含付款方變更的合約變更協議", priority: "week" },
        { owner: "Eric Hsiao", text: "整理未付款項清單並寄送建議書，CC 藍文甫與 Anne Chang", priority: "week" },
        { owner: "Anne Chang", text: "確認發票作廢及重開流程，評估跨年度收入認列問題", priority: "week" },
        { owner: "藍文甫", text: "確認存證信函發出時間與內容", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-04-14",
          title: "愛貝斯專案狀況對焦",
          time: "16:00-16:42",
          duration: "42m",
          participants: "蔡阿達、Anne Chang、Eric Hsiao、Leo、藍文甫",
          docUrl: "",
          dialogues: [
            {
              topic: "合約付款方錯誤與變更協議",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "法務", text: "發票需開給愛貝斯，但合約簽訂對象為愛斯柏，導致帳務無法對帳，造成年度銷帳困難。" },
                { speaker: "Eric Hsiao", role: "other", label: "PM", text: "第一張發票由 Lily 處理，專案登記錯誤導致資料撈取不到。" },
                { speaker: "蔡阿達", role: "ada", text: "登記錯誤是我的疏失，我願意向對方道歉，並與愛貝斯確認其付款態度及下半年付款方。" },
                { speaker: "藍文甫", role: "other", label: "法務", text: "建議在變更協議中加入三方協議條款，明確愛斯柏同意由愛貝斯付款，並確認是否整年度均由愛貝斯付款或下半年恢復愛斯柏付款。" },
                { speaker: "Anne Chang", role: "other", label: "PM", text: "重新簽約過於複雜，建議直接在變更協議中修正付款方，並申請作廢已開立的錯誤發票。" }
              ]
            },
            {
              topic: "客戶未付款追蹤與存證信函",
              exchanges: [
                { speaker: "Anne Chang", role: "other", label: "PM", text: "口頭及 Line 提醒無法有效促使客戶付款，建議發出正式存證信函。" },
                { speaker: "Eric Hsiao", role: "other", label: "PM", text: "將先寄送建議書及未付款項清單，待內容確認後再發存證信函。客戶團隊更換，法務認為新團隊應承擔前團隊合約責任。" },
                { speaker: "蔡阿達", role: "ada", text: "我負責與客戶確認暫停及重啟時間，並將相關文字加入變更協議。" },
                { speaker: "Anne Chang", role: "other", label: "PM", text: "需持續提供服務以避免違約，並確認 SEO 服務是否繼續。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P27: 主管線上培訓課程 ======
    {
      id: "mgr-training",
      name: "主管線上培訓課程規劃",
      icon: "🎓",
      category: "internal",
      lastUpdated: "2026-04-17",
      summary: "規劃主管線上培訓課程 — 涵蓋銷售技巧、組織管理及時間管理，系統化學習取代被動解決問題",
      keyPoints: [
        "Max Huang 建議以<strong>線上課程</strong>進行主管培訓，避免傳統面授方式",
        "強調<strong>系統化學習</strong>的重要性，避免僅在遇到問題時才學習",
        "課程主題包含：銷售技巧、組織管理、績效管理及溝通技巧",
        "計畫與其他部門合作，擴大課程受眾及資源共享"
      ],
      chips: [
        { icon: "📚", text: "線上課程" },
        { icon: "🎯", text: "系統化學習" },
        { icon: "🤝", text: "跨部門合作" }
      ],
      todos: [
        { owner: "Max Huang", text: "收集主管培訓需求並統整課程規劃", priority: "week" },
        { owner: "Max Huang", text: "安排主管參與線上課程並追蹤學習進度與回饋", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-04-17",
          title: "Weekly Sync Up Meeting",
          time: "11:23-12:03",
          duration: "40m",
          participants: "蔡阿達、Max Huang、藍文甫、Anne Chang",
          docUrl: "",
          dialogues: [
            {
              topic: "主管培訓與線上課程規劃",
              exchanges: [
                { speaker: "Max Huang", role: "other", label: "顧問", text: "建議安排主管線上課程學習銷售技巧、組織管理及時間安排等主題，系統化學習優於被動解決問題。請主管列出想學習的課程內容。" },
                { speaker: "蔡阿達", role: "ada", text: "同意規劃線上培訓課程，可與其他部門合作開課，提升主管能力與資源共享。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P28: GEO Go-to-Market 策略 ======
    {
      id: "geo-gtm",
      name: "GEO Go-to-Market 策略 — GO方案定價與外聯整合",
      icon: "🚀",
      category: "company",
      lastUpdated: "2026-04-24",
      summary: "4/24 AE 推動會議 — 約訪時段固定週二 11-12 點、麥可加入提案、GEO 合約狀態表新增洽談中/因故結束欄位、WACA 自檢報表上線、MarTech Asia 5/27 邀約啟動",
      keyPoints: [
        "何建彤提議由日本與臺灣 AE/CS 分別確認<strong>重要 POC 客戶</strong>，臺灣最多選四個優先測試",
        "藍文甫表示手上兩個 logo 客戶不需優先測試，保留 quota 給正式客戶",
        "<strong>AI 畫重點功能</strong>：先產出中文版本，YC 確認數據無誤後交哈希團隊翻譯日文",
        "畫重點偏向<strong>大方向問題</strong>，顧問提供<strong>具體行動方案</strong>，兩者設計不衝突",
        "<strong>AIO 與 AIMO 預計本週上線</strong>，最晚四月底前完成，成本較低無額外費用",
        "蔡阿達完成 GO 網站檢測報告，YC 補充 Ahrefs 數據分析，<strong>雙方暫分開使用兩套工具</strong>",
        "計畫一至兩週內向 AE/CS 介紹產品、sales deck、QA 及後續 roadmap",
        "沙發先生與窗簾小姐為<strong>付費多年度合約客戶</strong>，其他 POC 客戶仍在試用中",
        "資生堂已收到提案簡報，等待確認提案時間",
        "Pipeline 未成交狀態均為<strong>持續談判中非流失</strong>",
        "Yoshie Yeoh 負責日本團隊 POC 客戶名單確認與畫重點文章日文翻譯",
        "🆕 4/22 彭時晧將於<strong>5/8 從 RO 畢業</strong>，GO方案交接進行中",
        "🆕 GO方案聚焦<strong>品牌提及率與網站引用率</strong>兩大指標，規格 20 次 60 個 quota，定價約 4 萬",
        "🆕 外聯結合新聞網站、媒體、部落客及社群，<strong>SEO + PR 整合</strong>策略",
        "🆕 合約區分<strong>純 SEO、純 AIO、GO方案</strong>，費用約 3.3 萬至 7.3 萬",
        "🆕 新聞稿成本約<strong>3.5 萬起</strong>，外部連結每個約 4,000 元",
        "🆕 蔡阿達強調<strong>SEO 為 GEO 基礎</strong>，外聯需建立在 SEO 完成後",
        "🆕 林思吾提出將費用包裝為<strong>全域能見度預算</strong>，降低客戶摩擦",
        "🆕 小安負責方案確認、YC 協助執行端梳理",
        "🆕 4/24 約訪時段固定<strong>每週二 11:00-12:00</strong>，邀請麥可一同參與提案",
        "🆕 麥可希望更頻繁參與 AE 提案，<strong>每週至少安排一場</strong>",
        "🆕 GEO 合約狀態表新增<strong>「洽談中」及「因故結束洽談」</strong>狀態欄位",
        "🆕 WACA 平台後台<strong>GEO 執行檢核自檢報表</strong>上線",
        "🆕 <strong>MarTech Asia 5/27</strong> 邀約活動啟動，提供邀約表單加速來賓資料收集",
        "🆕 GEO 工具可追蹤<strong>英文/美國市場</strong>，切地區與切語言功能已內建",
        "🆕 GEO 純內容版初步定價：<strong>10 關鍵字 / 30 Prompt / 約 22K/月 / 配 17 篇文章</strong>",
        "🆕 Ada 詢問 GEO 工具是否有出<strong>報表功能</strong>，待確認解決方案",
        "🆕 4/24 AE <strong>24 小時聯絡提醒機制</strong>：未聯絡客戶自動發送確認信，Slack 兩週通知促使更新",
        "🆕 中小企業溝通策略：Bryan 微調話術，<strong>聚焦落地細節</strong>而非策略化說明",
        "🆕 AI 報告自動化：<strong>Claude 品質優於 ChatGPT</strong>，三段式報告流程（健檢→關鍵字拓展→prompt），計畫整合單一頁面",
        "🆕 提案報告優化：將論壇問題轉化為 AI 問題，<strong>追蹤 AI 答覆引用品牌內容</strong>"
      ],
      chips: [
        { icon: "🧪", text: "POC 臺灣 ≤4" },
        { icon: "💰", text: "GO 3.3-7.3萬" },
        { icon: "📅", text: "約訪 週二 11-12" },
        { icon: "🌐", text: "MarTech Asia 5/27" },
        { icon: "📊", text: "WACA 自檢報表" },
        { icon: "📝", text: "純內容版 22K/月" }
      ],
      todos: [
        { owner: "Yoshie Yeoh", text: "與日本團隊確認重要 POC 客戶名單", priority: "week" },
        { owner: "何建彤", text: "推動 AIO/AIMO 本週上線，最晚四月底前完成", priority: "today" },
        { owner: "YC", text: "確認中文版本數據無誤後，交由哈希團隊進行日文翻譯", priority: "week" },
        { owner: "YC", text: "一至兩週內安排會議，向 AE/CS 介紹產品、sales deck、QA 及 roadmap", priority: "week" },
        { owner: "YC", text: "提供授權模板與操作說明給 AE/CS，安排教學會議", priority: "week" },
        { owner: "蔡阿達", text: "與 YC 推動網站分析工具與 Ahrefs 數據技術整合方案", priority: "week" },
        { owner: "林思吾", text: "與 Amber Liao 協調業務團隊，理清續約客戶中工具與顧問方案銷售比例與價格策略", priority: "week" },
        { owner: "小安", text: "確認 GO 方案定價與合約架構", priority: "today" },
        { owner: "YC", text: "協助 GO 方案執行端流程梳理", priority: "today" },
        { owner: "Liu", text: "安排春露與商傳媒分享外聯操作流程", priority: "week" },
        { owner: "Leo", text: "負責 GO 方案外聯建置流程執行", priority: "week" },
        { owner: "蔡阿達", text: "安排業務團隊會議，統一 GO 方案銷售話術與新聞稿加購邏輯", priority: "week" },
        { owner: "阿福", text: "完成 Prompt 分類機制設計與驗證", priority: "week" },
        { owner: "蔡阿達", text: "推動各 AE 將約訪時段安排至每週二 11-12 點 booking", priority: "today" },
        { owner: "蔡阿達", text: "確認 GEO 工具報表功能可行方案", priority: "week" },
        { owner: "蔡阿達", text: "持續推動 MarTech Asia 5/27 邀約，透過表單收集來賓資料", priority: "week" },
        { owner: "蔡阿達", text: "設計 24 小時內 AE 聯絡提醒機制，確保及時跟進客戶", priority: "week" },
        { owner: "呂紹平（Leon）", text: "建立 AI 報告三段式流程（健檢/關鍵字拓展/prompt）整合頁面", priority: "week" },
        { owner: "蔡阿達", text: "建立 AI 應用頻道，協助命名頻道與設置作者介紹", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-04-24",
          title: "AE 運轉加速/推動會議",
          time: "14:30-17:00",
          duration: "2h30m",
          participants: "蔡阿達、呂紹平（Leon）、蔡毓倫（Aiden）、陳琬君（Rebecca）、周至剛（Bryan）",
          docUrl: "",
          dialogues: [
            {
              topic: "約訪時段與提案節奏調整",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "麥可大大還是希望可以更頻繁參與我們提案，故現在直接放大絕，希望我們每個禮拜都至少有一人可以安排在週二上午 11 點到 12 點，邀請麥可一同與我們面對客戶提案。" },
                { speaker: "蔡阿達", role: "ada", text: "booking 的方式，只要直接編輯 Google 日曆就可以，編輯的日曆名稱是：AE-稱呼-客戶名稱。" }
              ]
            },
            {
              topic: "GEO 合約狀態與 AE NEW 報表更新",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "要再麻煩各位今天下班前至 AE 的 GEO 合約狀態進度表更新以下最新狀態：新增正在洽談的客戶，以及因「未成交」看不出進度，故新增了「洽談中」、「因故結束洽談」欄位。" },
                { speaker: "蔡阿達", role: "ada", text: "待會 2:30 開始我也會同時操作 AE NEW 報表，所以如果要更新，還請各位抓好時間喔！" }
              ]
            },
            {
              topic: "GEO 工具多語言/多地區追蹤",
              exchanges: [
                { speaker: "蔡毓倫", role: "other", label: "Aiden", text: "我這邊客戶的需求是美國市場追英文。客戶是看到官網這段，以為好像我們只能追台灣日本來問我的。" },
                { speaker: "呂紹平", role: "other", label: "Leon", text: "切地區跟切語言實際是做得到，但不確定 PM 會不會協助改設定。我之前有問能不能追台灣用英文的或美國用中文的。" },
                { speaker: "蔡阿達", role: "ada", text: "沒關係，客戶最大，且理應阿虎都開金口，裡應都可以設定喔！" }
              ]
            },
            {
              topic: "真言報價確認",
              exchanges: [
                { speaker: "陳琬君", role: "other", label: "Rebecca", text: "達哥，如同剛才會議上討論，真言的報價單我加上了工具，追蹤 20×2=40 組 prompt，再請你幫我確認喔！" },
                { speaker: "蔡阿達", role: "ada", text: "好的，我來看一下。" }
              ]
            },
            {
              topic: "WACA 自檢報表與 MarTech Asia 邀約",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我把上述內容都放進周蒨畫版中，同時新增了一個 WACA 平台後台欄位自檢報表。為了可以加速大家邀約媽鐵愛蝦的來賓以及資料的收集，還有一張表單可以提供。" }
              ]
            },
            {
              topic: "AE 客戶聯絡追蹤機制優化",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "設置 24 小時後自動發送聯絡確認信給 AE，提醒未聯絡客戶者盡快跟進。" },
                { speaker: "呂紹平", role: "other", label: "Leon", text: "現有 Slack 通知系統會提醒 AE 兩週未聯絡客戶，促使 AE 更新狀態。未來 AE 直接向哈珀請求協助，避免哈珀被多方打擾。" }
              ]
            },
            {
              topic: "中小企業客戶溝通策略調整",
              exchanges: [
                { speaker: "周至剛", role: "other", label: "Bryan", text: "金融業客戶決策較快，中小企業則需較長時間培養。中小企業偏好聽取實際操作細節，較不喜歡過於策略化的說明，我已開始微調話術。" },
                { speaker: "呂紹平", role: "other", label: "Leon", text: "簡報內容應避免跳躍，專注於客戶關心的重點。" }
              ]
            },
            {
              topic: "AI 工具與報告自動化應用",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "分享使用 Claude 替代 ChatGPT 的體驗，認為生成內容品質更佳。AI 報告應結合客戶需求，分層呈現技術分析與關鍵字研究。" },
                { speaker: "呂紹平", role: "other", label: "Leon", text: "報告分為三段：健檢報告、關鍵字拓展、prompt 產生，計畫整合至單一頁面。考慮開設專屬頻道放置作者介紹與圖片。" },
                { speaker: "蔡阿達", role: "ada", text: "N8N 穩定性不足，建議尋求 Alex 協助串接自動化流程。" }
              ]
            },
            {
              topic: "提案報告內容優化",
              exchanges: [
                { speaker: "呂紹平", role: "other", label: "Leon", text: "報告首頁列出主要版型，針對缺少文章頁的客戶給予增加建議。客戶多為非專業 SEO 團隊，偏好統籌建議而非細節分析。" },
                { speaker: "蔡阿達", role: "ada", text: "將論壇問題轉化為 AI 問題，追蹤 AI 答覆中是否引用客戶內容。報告需兼顧技術分析與客戶需求，分階段提供不同深度資料。" }
              ]
            }
          ]
        },
        {
          date: "2026-04-22",
          title: "GEO方案討論 — GO方案交接與定價",
          time: "10:20-11:10",
          duration: "50m",
          participants: "蔡阿達、彭時晧（Alan Peng）、藍文甫（Leo）、呂紹平（Leon）、林思吾、Daisy Tsai、Alice Cho、Anne Chang、Dom Chan",
          docUrl: "",
          dialogues: [
            {
              topic: "GO方案架構與核心指標",
              exchanges: [
                { speaker: "彭時晧", role: "other", label: "Alan", text: "GO方案以品牌提及率與網站引用率為核心指標，規格含 20 次 60 個 quota，初步定價參考競品約 4 萬元。5 月 8 日我從 RO 畢業，此會議同時作為工作交接。" },
                { speaker: "蔡阿達", role: "ada", text: "SEO 是基礎，GEO 優化需建立在 SEO 完成後，否則外部連結與新聞稿效果有限。" },
                { speaker: "林思吾", role: "other", label: "麥可", text: "業務銷售時需清楚說明新聞稿加購邏輯，避免客戶因價格增加產生摩擦。建議將外部文章操作預算包裝成全域能見度預算。" }
              ]
            },
            {
              topic: "外聯策略與新聞稿成本",
              exchanges: [
                { speaker: "彭時晧", role: "other", label: "Alan", text: "外聯結合新聞網站、媒體、部落客及社群平台，SEO 加 PR 整合。合作廠商每個連結約 4,000 元，新聞稿成本約 3.5 萬元起。" },
                { speaker: "蔡阿達", role: "ada", text: "合約規格區分純 SEO、純 AIO 與 GO 方案，GO 方案整合 SEO 與 AI 可見度優化，費用約 3.3 萬至 7.3 萬。新聞稿可拆分月費收取。" },
                { speaker: "林思吾", role: "other", label: "麥可", text: "針對 AIO 及 Jetstream 客戶，外聯為付費 Last Mile 服務，業界行情約 6 至 8 萬元。" }
              ]
            },
            {
              topic: "執行分工與後續安排",
              exchanges: [
                { speaker: "彭時晧", role: "other", label: "Alan", text: "Liu 負責協作外聯流程，安排春露與商傳媒分享外聯操作細節。Leo 負責建置流程執行。遇到多產品曝光需求時，直接引導客戶加購升級方案。" },
                { speaker: "蔡阿達", role: "ada", text: "小安負責方案確認，YC 協助執行端梳理，安排後續跟進會議釐清執行流程細節。內部需將能見度優化納入日常作業，避免銷售時資訊不一致。" }
              ]
            }
          ]
        },
        {
          date: "2026-04-20",
          title: "GEO Go-to-Market 策略",
          time: "09:01-10:23",
          duration: "1h22m",
          participants: "蔡阿達、何建彤（彤²）、YC、Yoshie Yeoh、Alice Cho、藍文甫（Leo）、林思吾、Amber Liao、呂紹平（Leon）、Keishi Nabeta、Max Huang、Angelline、Flora Liao、Koichi Endo、Yuya Okuyama",
          docUrl: "",
          dialogues: [
            {
              topic: "POC 客戶優先測試與多語言流程",
              exchanges: [
                { speaker: "何建彤", role: "other", label: "彤²", text: "日本與臺灣 AE 或 CS 分別確認重要 POC 客戶，臺灣最多選四個優先測試。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "手上兩個 logo 客戶不需優先測試，保留 quota 給正式客戶。" },
                { speaker: "YC", role: "other", label: "YC", text: "國際上流程類似，先產出中文版本確認數據無誤，最終版本會是翻譯後的日文。" }
              ]
            },
            {
              topic: "AIO/AIMO 產品上線與網站分析工具",
              exchanges: [
                { speaker: "何建彤", role: "other", label: "彤²", text: "AIO 與 AIMO 預計本週上線，若延遲最晚四月底前完成。成本較低，先前方案已有計算，無額外費用。" },
                { speaker: "蔡阿達", role: "ada", text: "GO 網站檢測報告已完成，內容完整，已更新連結供團隊查看。報告包含網站現況總覽、語意地圖分析及需求對應頁面。" },
                { speaker: "YC", role: "other", label: "YC", text: "Ahrefs 關鍵字數據與 AIO 應用會提供簡單模板與教學給 AE 與 CS。" }
              ]
            },
            {
              topic: "客戶提案與 POC 進度更新",
              exchanges: [
                { speaker: "呂紹平", role: "other", label: "Leon", text: "沙發先生與窗簾小姐為付費多年度合約客戶，其他 POC 客戶仍在試用中。資生堂已收到提案簡報，等待確認提案時間。" },
                { speaker: "林思吾", role: "other", label: "麥可", text: "續約客戶多為 GPU 方案，單買 SEO 工具較少。續約時需理清工具與顧問費用比例，避免預算矛盾。" }
              ]
            },
            {
              topic: "後續會議安排與教學計畫",
              exchanges: [
                { speaker: "YC", role: "other", label: "YC", text: "計畫一至兩週內召開會議，向所有 AE 與 CS 介紹產品、sales deck、QA 及後續 roadmap，並安排教學說明如何使用授權模板與報告審核。" },
                { speaker: "蔡阿達", role: "ada", text: "雙方工具技術整合困難，決定先分開使用兩套工具，後續視需求再整合。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P29: 雅虎合作案 ======
    {
      id: "yahoo-ai-visibility",
      name: "雅虎 — 廣編稿 AI Visibility 合作",
      icon: "📰",
      category: "partner",
      lastUpdated: "2026-04-24",
      summary: "4/24 Yahoo 合約已回簽 — GEO Suite 開通需上 Ragic 新增專案登記，已取得 Yahoo 及台灣 ELLE LOGO",
      keyPoints: [
        "雅虎作為媒體角色，<strong>廣編稿是其主要且賺錢的產品線</strong>",
        "利用 AI 工具從雅虎提供的新聞稿<strong>延伸出多篇文章</strong>，根據客戶回饋持續優化",
        "Yoshie Yeoh 補充：案件是提供文章生成 know-how，強調 <strong>AI Visibility 與 SEO 並重</strong>",
        "蔡阿達建議以<strong>工具使用費用計價</strong>，成本低且易推廣",
        "林思吾分享 World of Wonders 案例，類似模式提供文章及 prompts 建議",
        "目前合作<strong>尚無費用</strong>，未來定價待討論",
        "團隊討論如何證明關鍵字與 prompt 的實際搜尋需求及效果",
        "🆕 4/24 <strong>Yahoo 合約已回簽</strong>",
        "🆕 已取得 <strong>Yahoo 及台灣 ELLE 的 LOGO</strong>",
        "🆕 GEO Suite 開通需透過 <strong>Ragic 新增專案登記</strong>，經 Henry 電子簽後才正式生效",
        "🆕 Leon 尚未上 Ragic，需確認報價單、合約、新增專案登記流程"
      ],
      chips: [
        { icon: "📰", text: "雅虎廣編稿" },
        { icon: "🤖", text: "AI 延伸多篇文章" },
        { icon: "✅", text: "合約已回簽" },
        { icon: "🏷️", text: "Yahoo+ELLE LOGO" }
      ],
      todos: [
        { owner: "呂紹平（Leon）", text: "上 Ragic 完成 Yahoo GEO Suite 新增專案登記", priority: "today" },
        { owner: "蔡阿達", text: "持續根據雅虎客戶回饋，利用 AI 生成多版本文章大綱並優化內容", priority: "week" },
        { owner: "蔡阿達", text: "制定雅虎合作案定價模式（以工具使用費計價）", priority: "week" },
        { owner: "Yoshie Yeoh", text: "協助日本團隊理解合作模式與 AI 可見性價值", priority: "week" },
        { owner: "林思吾", text: "跟進雅虎合作案進展與第三方合作模式成熟度", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-04-24",
          title: "AE 推動會議 — Yahoo 合約回簽確認",
          time: "14:30-17:00",
          duration: "2h30m",
          participants: "蔡阿達、呂紹平（Leon）、蔡毓倫（Aiden）、陳琬君（Rebecca）、周至剛（Bryan）",
          docUrl: "",
          dialogues: [
            {
              topic: "Yahoo 合約回簽與 GEO Suite 開通流程",
              exchanges: [
                { speaker: "呂紹平", role: "other", label: "Leon", text: "Yahoo 已經回簽了。但我還沒上 Ragic，不確定需要上到哪個階段。報價單、合約、新增專案登記，一樣嗎？" },
                { speaker: "蔡阿達", role: "ada", text: "對，但是理論上應該是要透過 Ragic，然後一樣是要讓 Henry 去做電子簽，從那個時候簽回來，才會認在這個系統當中。這樣也表示我們已經有 Yahoo、台灣 ELLE 的 LOGO 了？" },
                { speaker: "呂紹平", role: "other", label: "Leon", text: "對。" }
              ]
            }
          ]
        },
        {
          date: "2026-04-20",
          title: "GEO Go-to-Market 策略 — 雅虎合作案討論",
          time: "09:01-10:23",
          duration: "1h22m",
          participants: "蔡阿達、何建彤（彤²）、YC、Yoshie Yeoh、藍文甫（Leo）、林思吾、Keishi Nabeta",
          docUrl: "",
          dialogues: [
            {
              topic: "雅虎廣編稿 AI Visibility 合作模式",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "雅虎作為媒體角色，廣編稿是其主要且賺錢的產品線。我們利用 AI 工具從雅虎提供的新聞稿延伸出多篇文章，並根據客戶回饋持續優化。" },
                { speaker: "Yoshie Yeoh", role: "other", label: "日本", text: "雅虎案件是提供文章生成的 know-how，強調 AI Visibility 與 SEO 並重。" },
                { speaker: "蔡阿達", role: "ada", text: "建議以工具使用費用計價，成本低且易推廣。" },
                { speaker: "Keishi Nabeta", role: "other", label: "日本", text: "合作目前是否涉及費用？" },
                { speaker: "蔡阿達", role: "ada", text: "目前尚無，未來定價待討論。" }
              ]
            },
            {
              topic: "媒體內容被 AI 引用的重要性",
              exchanges: [
                { speaker: "林思吾", role: "other", label: "麥可", text: "分享 World of Wonders 案例，類似模式提供文章及 prompts 建議。" },
                { speaker: "蔡阿達", role: "ada", text: "團隊需思考如何證明關鍵字與 prompt 的實際搜尋需求及效果，以說服媒體客戶。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P30: 博報堂思索 × INAX ======
    {
      id: "hakuhodo-inax",
      name: "博報堂思索 × INAX — GEO 優化方案合作",
      icon: "🏢",
      category: "partner",
      lastUpdated: "2026-04-24",
      summary: "透過博報堂思索代理，為 INAX 提供 GEO 優化方案 — 保密合約書修訂版已提交，進入 NDA 簽署階段",
      keyPoints: [
        "博報堂思索為<strong>代理商角色</strong>，代理 INAX（衛浴品牌）的 GEO 優化需求",
        "Leon 提交<strong>外部廠商保密合約書 1150421 修訂版</strong>",
        "合約為 GEO 優化方案，需先完成 NDA 簽署才能進入提案階段",
        "目前處於<strong>保密合約審查階段</strong>"
      ],
      chips: [
        { icon: "📝", text: "NDA 審查中" },
        { icon: "🏢", text: "博報堂代理" },
        { icon: "🚿", text: "INAX 衛浴" },
        { icon: "📋", text: "GEO 優化" }
      ],
      todos: [
        { owner: "呂紹平（Leon）", text: "跟進博報堂 INAX 保密合約簽署進度", priority: "today" },
        { owner: "蔡阿達", text: "審閱保密合約書內容，確認條款無疑慮", priority: "week" },
        { owner: "呂紹平（Leon）", text: "NDA 完成後準備 INAX GEO 優化提案", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-04-24",
          title: "AE 推動會議 — 博報堂/INAX NDA 進度同步",
          time: "14:30-17:00",
          duration: "2h30m",
          participants: "蔡阿達、呂紹平（Leon）、蔡毓倫（Aiden）、陳琬君（Rebecca）、周至剛（Bryan）",
          docUrl: "https://docs.google.com/document/d/1J4THsE0AxzBUSxrm_dtCtjTddDsRcOn6/edit",
          dialogues: [
            {
              topic: "博報堂/INAX GEO 保密合約提交",
              exchanges: [
                { speaker: "呂紹平", role: "other", label: "Leon", text: "（會後分享博報堂思索-INAX GEO 優化方案外部廠商保密合約書 1150421 修訂版）" },
                { speaker: "蔡阿達", role: "ada", text: "收到，我先看一下合約內容。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P31: 喬山跨國建站 ======
    {
      id: "johnson-global-seo",
      name: "喬山 — 跨國建站 SEO 顧問專案",
      icon: "🏋️",
      category: "client",
      lastUpdated: "2026-04-24",
      summary: "喬山（Johnson Health Tech）跨國建站 SEO 顧問專案 — Aiden 整理需求文件，聚焦美國市場英文追蹤，GEO 純內容版方案規劃中",
      keyPoints: [
        "Aiden 整理<strong>《喬山 全球 SEO 建議書》</strong>需求文件",
        "客戶需求聚焦<strong>美國市場追英文</strong>",
        "GEO 工具確認可切地區與語言，<strong>追蹤美國英文市場可行</strong>",
        "建站建議書包含兩份：Aiden 整理版 + 原有簡報",
        "方案以 GEO 純內容版為主：<strong>10 關鍵字 / 30 Prompt / 約 22K/月</strong>",
        "配 <strong>17 篇文章</strong>，幾乎都靠文章來操作",
        "五樓網站範例也需 Ada 提供"
      ],
      chips: [
        { icon: "🌍", text: "美國市場" },
        { icon: "🔤", text: "英文追蹤" },
        { icon: "💰", text: "22K/月" },
        { icon: "📄", text: "17 篇文章" }
      ],
      todos: [
        { owner: "蔡毓倫（Aiden）", text: "確定 GEO 純內容版最終字數、Prompt 數、價格", priority: "today" },
        { owner: "蔡阿達", text: "提供五樓網站範例給 Aiden", priority: "today" },
        { owner: "蔡阿達", text: "審閱喬山全球 SEO 建議書並提供回饋", priority: "week" },
        { owner: "蔡毓倫（Aiden）", text: "完成喬山報價與提案簡報", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-04-24",
          title: "Ada × Aiden 1:1 — 喬山跨國建站與 GEO 定價",
          time: "14:00-14:30",
          duration: "30m",
          participants: "蔡阿達、蔡毓倫（Aiden）",
          docUrl: "https://docs.google.com/document/d/1X16Go0eZTLzKrK1EilTwXXaIB7xVaCqUk5E3snV3WvY/edit",
          dialogues: [
            {
              topic: "喬山跨國建站需求確認",
              exchanges: [
                { speaker: "蔡毓倫", role: "other", label: "Aiden", text: "之前有提到喬山的跨國建站顧問專案，我有再跟窗口對焦需求，先整理成這份文件。下午 1:1 再跟達哥細聊這個案子。" },
                { speaker: "蔡阿達", role: "ada", text: "好，我看一下文件。喬山的需求是美國市場追英文，GEO 工具切地區跟切語言都做得到。" }
              ]
            },
            {
              topic: "GEO 純內容版定價討論",
              exchanges: [
                { speaker: "蔡毓倫", role: "other", label: "Aiden", text: "稍早我和旅行社的老闆談完，他還是想做 GEO 純內容版。因此我還是會需要達哥協助確定 GEO 純內容版的最終字數、Prompt 數、價格。10 字 / 30 Prompt。" },
                { speaker: "蔡阿達", role: "ada", text: "哈，那就先喊兩萬二/月。" },
                { speaker: "蔡毓倫", role: "other", label: "Aiden", text: "建站建議書包兩份？" },
                { speaker: "蔡阿達", role: "ada", text: "應該是一份建站建議書，就是艾登當時給我看的簡報。配十七篇文章。" },
                { speaker: "蔡毓倫", role: "other", label: "Aiden", text: "那真的就是幾乎都靠文章來操作了。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P32: 九成九客戶拜訪 ======
    {
      id: "jiuchengjiu-visit",
      name: "九成九 — 客戶關係維護拜訪",
      icon: "🤝",
      category: "client",
      lastUpdated: "2026-04-24",
      summary: "五月拜訪九成九董事長，目的為關係維護與寒暄，並探討 GO 工具如何協助廠商 — 由藍文甫親自約會董事長確保層級與方向",
      keyPoints: [
        "會議原預計<strong>五月舉行</strong>，Eric 已被指派負責邀約但因忙碌尚未完成",
        "目的為<strong>維護關係及寒暄</strong>，並非立即呈報成效",
        "主要探討<strong>GO 工具如何協助廠商</strong>及需求發想",
        "藍文甫釐清會議意義，認為需有<strong>準備工作與明確方向</strong>，避免無目的拜訪",
        "決定由<strong>藍文甫親自約董事長</strong>，確保會議層級與內容符合預期"
      ],
      chips: [
        { icon: "📅", text: "五月拜訪" },
        { icon: "👤", text: "約董事長" },
        { icon: "🤝", text: "關係維護" },
        { icon: "🛠️", text: "GO 工具探討" }
      ],
      todos: [
        { owner: "藍文甫", text: "負責約九成九董事長會議，確保有明確準備與方向", priority: "week" },
        { owner: "Eric", text: "協助聯繫九成九窗口，確認會議時間與參與人員", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-04-24",
          title: "Weekly Sync Up — 九成九拜訪安排",
          time: "11:01-11:58",
          duration: "57m",
          participants: "蔡阿達、藍文甫（Leo）、Max Huang、Anne Chang",
          docUrl: "",
          dialogues: [
            {
              topic: "九成九會議安排與目的釐清",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "九成九會議原本預計五月舉行，Eric 已被指派負責邀約，但因忙碌尚未完成。這次主要是維護關係及寒暄，並非立即呈報成效，主要探討 GO 工具如何協助廠商及需求發想。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "會議需有明確準備與方向，避免無目的拜訪。我親自來約董事長，確保會議層級與內容符合預期。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P33: 萬那整案子 ======
    {
      id: "wannazheng",
      name: "萬那整 — AMP KPI 未達標無償使用案",
      icon: "📦",
      category: "client",
      lastUpdated: "2026-04-24",
      summary: "萬那整因未達 AMP 綁定三個 KPI，案子處於無償使用狀態 — 業務端與產品端窗口分屬不同單位，需建立資訊共享機制避免遺漏",
      keyPoints: [
        "案子起因於<strong>電商流量</strong>，因未達 AMP 三個 KPI，現階段<strong>無償讓客戶使用</strong>",
        "呂紹平指出<strong>業務總監與 Rebecca 為同學關係</strong>，業務端與產品端窗口分屬不同單位",
        "蔡阿達擔心直接對接業務總監可能有衝突，呂紹平認為<strong>目前狀況尚可接受</strong>",
        "⚠️ <strong>總經理特助會直接丟需求給團隊</strong>，若未同步給業務端可能導致資訊缺漏",
        "雙方同意需<strong>建立資訊共享機制</strong>，確保業務端與產品端均掌握客戶需求"
      ],
      chips: [
        { icon: "⚠️", text: "KPI 未達標" },
        { icon: "🆓", text: "無償使用中" },
        { icon: "🔄", text: "窗口協調" },
        { icon: "📋", text: "需資訊共享" }
      ],
      todos: [
        { owner: "蔡阿達", text: "與 Leon 建立萬那整案資訊共享機制，確保業務端與產品端同步", priority: "week" },
        { owner: "周至剛（Bryan）", text: "持續追蹤萬那整 AMP KPI 達成狀況", priority: "week" },
        { owner: "呂紹平（Leon）", text: "同步總經理特助需求給業務端，避免資訊遺漏", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-04-24",
          title: "AE 推動會議 — 萬那整案子現況",
          time: "16:02-17:57",
          duration: "1h55m",
          participants: "蔡阿達、呂紹平（Leon）、蔡毓倫（Aiden）、陳琬君（Rebecca）、周至剛（Bryan）",
          docUrl: "",
          dialogues: [
            {
              topic: "萬那整案子現況與窗口協調",
              exchanges: [
                { speaker: "周至剛", role: "other", label: "Bryan", text: "萬那整案子起因於電商流量，因未達 AMP 三個 KPI，現階段無償讓客戶使用。" },
                { speaker: "呂紹平", role: "other", label: "Leon", text: "業務總監與 Rebecca 為同學關係，業務端與產品端窗口分屬不同單位。總經理特助會直接丟需求給團隊，若未同步給業務端，可能導致資訊缺漏。" },
                { speaker: "蔡阿達", role: "ada", text: "直接對接業務總監可能有衝突，需建立資訊共享機制，確保業務端與產品端均掌握客戶需求。" }
              ]
            },
            {
              topic: "五月至六月案子啟動與合約進度",
              exchanges: [
                { speaker: "呂紹平", role: "other", label: "Leon", text: "五月有多個案子啟動，兩間因網站重建進度較慢，正與代理商協調。合約寄送中，部分等待用印，英文合約在審核階段。" },
                { speaker: "蔡阿達", role: "ada", text: "確認五月六月案子大致方向，下週一與 Jolin 討論網站包修改簡報內容。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P34: PLUS 天然有機保養 ======
    {
      id: "plus-organic-beauty",
      name: "PLUS 天然有機保養 — 短影音 SEO 策略諮詢與網站優化",
      icon: "💆",
      category: "client",
      lastUpdated: "2026-04-28",
      summary: "凱丞初次線上交流 — 蔡阿達建議放棄關鍵字導向，改以高雄在地真實體驗與 Google 評論為主軸優化網站；雙方約定後續合作引薦",
      keyPoints: [
        "PLUS 天然有機保養為<strong>高雄在地美容保養品牌</strong>，代理多個知名電商品牌",
        "三大客群：<strong>久站久坐族群</strong>（老師、護理師）、<strong>婚禮產業新娘</strong>妝前保養、<strong>月子中心</strong>產前產後媽媽",
        "補充客群：40 歲以上女性企業主與百貨 VIP 貴婦",
        "蔡阿達建議：消費者已從關鍵字搜尋轉向 <strong>AI 問答</strong>，短影音平台演算法關鍵字權重低，應聚焦用戶常見問題製作內容",
        "網站優化方向：<strong>放棄商品介紹</strong>，改以高雄在地實體店面服務與真實顧客體驗為主軸",
        "建議收集 <strong>Google Map 評論</strong>並展示於網站，增加信任感與 AI 推薦機率",
        "蔡阿達願意協助<strong>抓取網站內容並提供推廣資源</strong>，尋找具規模品牌合作引薦機會"
      ],
      chips: [
        { icon: "📍", text: "高雄在地" },
        { icon: "💆", text: "美容保養" },
        { icon: "🎯", text: "3 大客群" },
        { icon: "🤝", text: "引薦合作" }
      ],
      todos: [
        { owner: "PLUS 天然有機保養", text: "在網站新增真實顧客體驗圖文（避免露臉），強化內容真實性", priority: "week" },
        { owner: "PLUS 天然有機保養", text: "持續蒐集並展示 Google Map 評論，提升信任感與搜尋優化", priority: "week" },
        { owner: "PLUS 天然有機保養", text: "網站『聯絡我們』補充完整地址、電話並嵌入 Google 地圖", priority: "week" },
        { owner: "蔡阿達", text: "協助抓取 PLUS 網站內容並提供推廣方向建議", priority: "week" },
        { owner: "蔡阿達", text: "尋找有企圖心且具規模的品牌合作引薦給 PLUS", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-04-28",
          title: "凱丞🔛蔡阿達初次認真線上交流",
          time: "08:45-09:29",
          duration: "44m",
          participants: "蔡阿達、凱丞（PLUS 天然有機保養）",
          docUrl: "",
          dialogues: [
            {
              topic: "短影音關鍵字與 SEO 策略討論",
              exchanges: [
                { speaker: "凱丞", role: "other", label: "PLUS", text: "想了解短影音平台適合的關鍵字及 SEO 優化策略，如何讓品牌在各平台被看見。" },
                { speaker: "蔡阿達", role: "ada", text: "現今消費者多透過 AI 問答而非傳統關鍵字搜尋，建議聚焦目標族群常見問題製作內容。Instagram 等社群平台演算法關鍵字權重低，主要依人際關係與內容相關性推薦。" }
              ]
            },
            {
              topic: "網站經營現況與優化建議",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "網站已有一定水準，建議放棄商品介紹重點，改以高雄在地實體店面服務與商品應用為主軸。拍攝顧客體驗照片（避免露臉），搭配文字說明提升真實性。" },
                { speaker: "蔡阿達", role: "ada", text: "鼓勵收集 Google Map 評論並展示於網站，增加信任感。網站聯絡資訊要完整呈現，包括地址、電話及 Google 地圖嵌入。" }
              ]
            },
            {
              topic: "銷售策略與市場定位",
              exchanges: [
                { speaker: "凱丞", role: "other", label: "PLUS", text: "代理多個知名電商品牌，面臨品牌搜尋排名優勢，網站銷售多靠社群導流。一對一引薦較少，考慮針對特定職業族群推廣。" },
                { speaker: "蔡阿達", role: "ada", text: "建議放棄與大品牌直接競爭，強調高雄在地服務與真實體驗的差異化優勢。理想合作對象為有企圖心、具全國市場規模且有行銷團隊的品牌。" }
              ]
            },
            {
              topic: "後續行動與合作機會",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "願意協助抓取網站內容並提供推廣資源，建議先從高雄地區真實顧客體驗與 Google 評論著手優化網站。" },
                { speaker: "凱丞", role: "other", label: "PLUS", text: "願意協助推廣蔡阿達的品牌與服務，雙方約定後續再找時間討論進一步合作與引薦事宜。" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
