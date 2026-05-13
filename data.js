// === awoo BD War Room — 蔡阿達個人會議戰情室 ===
// 每日 19:00 由排程任務自動更新此檔案
// 結構：專案卡片為核心，同一專案被多次討論時更新同一張卡片

window.WAR_ROOM_DATA = {
  lastUpdated: "2026-05-13T19:00:00",
  dateLabel: "2026/05/13（三）",
  stats: {
    meetings: 72,
    projects: 41,
    partners: 14,
    internal: 6,
    clientCompany: 19,
    todos: 291
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
      lastUpdated: "2026-05-13",
      summary: "5/13 確認 2025 下半年部門獎金已發放（Daisy Liu 查證），蔡阿達將向 Harper 索取發放名單核對；2026 年度目標以六人團隊 845 萬為基準，扣除 Q1 及阿達、阿美目標後，剩餘約 587 萬由四人分攤；GEO Suite 銷售獎金改 by 季發放，Winny 明日向老闆確認",
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
        "🆕 4/28 林思吾補充：舊制中 AMP 為 2.5%、SEO 為 1.5%，新制 GU 為 5%",
        "🆕 5/1 Q1 AMP 與 GEO 合計業績約 <strong>14 萬 5 千</strong>，AMP 達成率 <strong>100%</strong>",
        "🆕 5/1 SEO 達成率僅 <strong>28.98%</strong>，未達 30% 標準，不發放 SEO 獎金",
        "🆕 5/1 ACV 公式減項不一致（應減 C4+C5，實際只減 C4），導致計算誤差，已修正",
        "🆕 5/1 獎金 <strong>24,480</strong> 與 <strong>21,053</strong> 兩筆因專案登記未完成，先扣留至五月中發放",
        "🆕 5/7 目標設定錯誤確認 — 蔡阿達誤用 ACV 加總，<strong>應以T型圖最後三個月加總</strong>為基準",
        "🆕 5/7 2026 年總收單金額 <strong>48,525,000</strong>，乘以 70% 認列率，實際目標約 <strong>34,559,167</strong>",
        "🆕 5/7 目前目標達成率約為實際需求的 <strong>60%</strong>，存在明顯落差",
        "🆕 5/7 獎金激勵方案 — 維持 <strong>5.1% 基礎獎金</strong>，設超額階梯 110%/120%/<strong>130%</strong>",
        "🆕 5/7 以 Rebecca 為例：Q2 達成 30 萬業績，獎金比例可由 5.1% 提升至約 <strong>10%</strong>",
        "🆕 5/7 Q1 實際完成約 <strong>722,434</strong>，剩餘約 6,277,566 需由其他業務分攤",
        "🆕 5/7 目標分攤至<strong>阿達、Aden、貝卡、布萊恩及喬安娜</strong>，依實際工作月份調整",
        "🆕 5/7 去年目標達成率約 <strong>82%</strong>，建議今年目標乘以此基數調整避免過高",
        "🆕 5/7 下週一召開<strong>收尾會議</strong>，確認最終目標與分攤方案",
        "🆕 5/13 Daisy Liu 查證確認 <strong>2025 下半年 Revenue 獎金已發放</strong>，8/5 發放批次含 Q2 AE 獎金",
        "🆕 5/13 A1 部門獎金疑因主管指示由 <strong>Leo 與小安接手</strong>後不再計算，需進一步釐清",
        "🆕 5/13 蔡阿達將向 <strong>Harper 團隊</strong>索取 2025 下半年獎金發放名單與金額明細進行核對",
        "🆕 5/13 2026 年度目標以<strong>六人團隊 845 萬</strong>為基準，扣除 Q1 達成 722,434 及阿達 90 萬、阿美 95 萬",
        "🆕 5/13 剩餘約 <strong>5,877,567</strong> 由四位業務按比例分攤，蔡阿達將私下通知團隊目標",
        "🆕 5/13 GEO Suite 銷售獎金確認採 <strong>by 季統計 by 季發放</strong>，金額為 0 或低於牌價則不發放工具獎金",
        "🆕 5/13 Winny 明日向老闆確認 GEO Suite 獎金調整方案"
      ],
      chips: [
        { icon: "📉", text: "目標 -20%" },
        { icon: "💰", text: "845萬/6人" },
        { icon: "⚠️", text: "PIP < 60%" },
        { icon: "🎯", text: "T型圖基準" },
        { icon: "📊", text: "認列率 70%" },
        { icon: "🆕", text: "5/13 獎金核對" }
      ],
      todos: [
        { owner: "蔡阿達", text: "向 Harper 團隊索取 2025 下半年獎金發放名單與金額明細，核對是否完整", priority: "today" },
        { owner: "蔡阿達", text: "釐清 A1 部門獎金是否因主管指示不計算，確認獎金計算責任歸屬", priority: "today" },
        { owner: "蔡阿達", text: "完成 2026 年度部門獎金目標分攤比例設定，分配給六位成員", priority: "today" },
        { owner: "蔡阿達", text: "私下通知團隊成員最終目標數字與分攤比例", priority: "week" },
        { owner: "Winny Chiang", text: "明日向老闆確認 GEO Suite 銷售獎金 by 季發放調整方案", priority: "today" },
        { owner: "Winny Chiang", text: "保留試算表檔案並協助確認分攤計算公式合理性", priority: "week" },
        { owner: "蔡阿達", text: "向業務說明新獎金方案，以正面激勵方式溝通避免負面情緒", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-13",
          title: "2025 下半年部門獎金發放確認與 2026 目標分攤",
          time: "09:33-10:13",
          duration: "40m",
          participants: "蔡阿達、Winny Chiang、Daisy Liu",
          docUrl: "",
          dialogues: [
            {
              topic: "2025 下半年部門獎金發放狀況確認",
              exchanges: [
                { speaker: "Winny Chiang", role: "other", label: "管理層", text: "詢問 2 月 5 日發放資料中是否包含 A1 部門獎金，推測若數據缺失可能是 HR 未收到資料或認為下半年未達標故未發放。" },
                { speaker: "蔡阿達", role: "ada", text: "部門獎金分為 ACL 與 MP 兩部分，理論上應有達標者。將向 Harper 團隊索取 2025 下半年獎金發放名單與金額以核對。" },
                { speaker: "Daisy Liu", role: "other", label: "HR", text: "透過訊息確認 2025 下半年 Revenue 獎金確實有發放，Harper 團隊應有保留去年年底獎金資料。" }
              ]
            },
            {
              topic: "2026 年度目標分攤比例設定",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "確認 150% 達成比例計算依據，目標數字為去年目標需依今年重新分配。六人團隊目標總額 845 萬，扣除 Q1 已達成及阿達 90 萬、阿美 95 萬後，剩餘由四人分攤。" },
                { speaker: "Winny Chiang", role: "other", label: "管理層", text: "建議以四位主要業務人員比例分配剩餘目標，扣除後剩餘約 5,877,567 元。提醒保留試算表檔案以便日後查閱。" },
                { speaker: "蔡阿達", role: "ada", text: "此數字為實際需達成目標，將依既定比例換算並私下通知團隊成員，避免造成不必要困擾。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-07",
          title: "業務目標設定錯誤與調整方案討論",
          time: "09:31-10:17",
          duration: "46m",
          participants: "蔡阿達、Winny Chiang、林思吾（Mike）",
          docUrl: "",
          dialogues: [
            {
              topic: "目標設定錯誤確認 — ACV vs T型圖",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "承認未掌握以T型圖計算目標的方式，誤用ACV加總作為目標基準，導致目標偏低。將依季度及每月MRR重新計算，避免用整年度數字造成誤差。" },
                { speaker: "林思吾", role: "other", label: "Mike", text: "業務目標應以T型圖最後三個月數字加總為基準，目前目標設定與實際應達成目標存在明顯落差。" },
                { speaker: "Winny Chiang", role: "other", label: "管理層", text: "2026年總收單金額為48,525,000，考慮收單與認列落差，實際目標訂為約34,559,167。" }
              ]
            },
            {
              topic: "獎金階梯激勵方案設計",
              exchanges: [
                { speaker: "林思吾", role: "other", label: "Mike", text: "建議以不動已落下數字為前提，調整獎金比例，60%達成率為基礎5%，80%-100%逐步提升至最高130%，鼓勵業務持續向上挑戰。" },
                { speaker: "蔡阿達", role: "ada", text: "擔心直接告知業務實際目標落差可能引起不滿。" },
                { speaker: "林思吾", role: "other", label: "Mike", text: "建議以正面激勵方式溝通，避免負面情緒。以Rebecca為例，Q2達成30萬業績，獎金比例可由5.1%提升至約10%。" }
              ]
            },
            {
              topic: "目標分攤與後續會議安排",
              exchanges: [
                { speaker: "Winny Chiang", role: "other", label: "管理層", text: "Q1目標已無法更改，實際完成約722,434，剩餘約6,277,566需由其他業務分攤。去年目標達成率約82%，建議今年目標乘以此基數調整。" },
                { speaker: "蔡阿達", role: "ada", text: "將與Winny再對目標分攤進行細節調整，確保阿達、Aden、貝卡、布萊恩及喬安娜每人目標合理。" },
                { speaker: "林思吾", role: "other", label: "Mike", text: "目標設定應以季度總和為基準，要求蔡阿達與Joanna協調確保數字一致。決議下週一召開收尾會議。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-01",
          title: "AE 獎金確認",
          time: "14:00-14:48",
          duration: "48m",
          participants: "蔡阿達、Daisy Liu",
          docUrl: "",
          dialogues: [
            {
              topic: "Q1 獎金計算與達成率確認",
              exchanges: [
                { speaker: "Daisy Liu", role: "other", label: "管理部", text: "舊辦法中 SEO 達成率為 28.98%，未達 30% 標準，因此不發放 SEO 獎金，但仍有 3% 獎金計算，造成混淆。" },
                { speaker: "蔡阿達", role: "ada", text: "第一季未分 SEO 與 AMP 目標，現以總目標合併計算，AMP 與 GEO 達成率為 100%，無超額 ACV 獎金。" },
                { speaker: "Daisy Liu", role: "other", label: "管理部", text: "Beta 有超額獎金，SEO 獎金以 3% 計算，Brian 因未達標無獎金。雙方確認超額 ACV 獎金只在達成率超過 100% 時發放。" }
              ]
            },
            {
              topic: "獎金計算公式與溝通問題釐清",
              exchanges: [
                { speaker: "Daisy Liu", role: "other", label: "管理部", text: "ACV 計算中 G4 與 G5 相加後應減去 C4 與 C5 兩項，但現行公式只減去 C4，導致計算錯誤。" },
                { speaker: "蔡阿達", role: "ada", text: "之前計算由不同人負責，溝通誤解造成錯誤，將整理會議記錄協助澄清，確保溝通一致。" }
              ]
            },
            {
              topic: "獎金發放時程與銀行需求協調",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "獎金 24,480 與 21,053 兩筆因專案登記未完成，須先扣留，待五月中完成後發放。" },
                { speaker: "Daisy Liu", role: "other", label: "管理部", text: "老闆同意先發獎金，但因銀行需求時間緊迫，將盡力協調並提前告知麥可。若銀行無法配合，將無法責怪公司。" }
              ]
            }
          ]
        },
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
      lastUpdated: "2026-05-08",
      summary: "5/8 代理商類型與佣金結構定案 — 純工具代理/工具+顧問轉售/貼牌三類明確劃分；佣金延續至續約鼓勵持續帶案；合約需明確規範類型與佣金計算；AE 使用公版文件嚴格把關退件機制；字庫選擇逾期暫停專案",
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
        "🆕 第三方代理引入之新客戶由 <strong>AE 負責服務</strong>（因 AE 投入較多努力取得信任），現有客戶則交 CS",
        "🆕 5/8 代理商類型最終定義：<strong>純工具代理、工具+顧問服務轉售、貼牌</strong>三種模式，表格依此調整",
        "🆕 5/8 佣金政策調整：<strong>佣金延續至續約</strong>，激勵代理商持續帶案，現行僅計算第一年",
        "🆕 5/8 Host 代理商不代理工具，僅追蹤廣編稿及 AI 引用，<strong>不需簽代理合約</strong>",
        "🆕 5/8 純工具銷售多以報價單處理未納入代理合約，未來可能需<strong>另行簽約</strong>",
        "🆕 5/8 首次合作免收費用條款未完整落實，需<strong>參照 Amber Fans 案例補充</strong>並宣導 AE",
        "🆕 5/8 AE 公版合約使用習慣不佳，決議<strong>審核退件機制</strong>嚴格把關",
        "🆕 5/8 建立<strong>黑令制度</strong>，對違規 AE 限制候選字使用權限",
        "🆕 5/8 專案字庫選擇延遲，<strong>逾期未完成即暫停專案</strong>避免下游 CS 無法跟進",
        "🆕 5/8 蔡阿達提議<strong>公用雲端硬碟集中管理公版文件</strong>，減少重複溝通"
      ],
      chips: [
        { icon: "📝", text: "合約拆分兩份" },
        { icon: "⚖️", text: "滿意度 ≥ 70%" },
        { icon: "💰", text: "工具原價不折扣" },
        { icon: "📄", text: "協議修訂版審閱中" },
        { icon: "⏰", text: "續約通知 30 天" },
        { icon: "🔀", text: "三類代理商分流" },
        { icon: "🔄", text: "佣金延續至續約" },
        { icon: "🚫", text: "退件機制上線" }
      ],