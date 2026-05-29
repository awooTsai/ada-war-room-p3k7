// === awoo BD War Room — 蔡阿達個人會議戰情室 ===
// 每日 19:00 由排程任務自動更新此檔案
// 結構：專案卡片為核心，同一專案被多次討論時更新同一張卡片

window.WAR_ROOM_DATA = {
  lastUpdated: "2026-05-29T19:00:00",
  dateLabel: "2026/05/29（五）",
  stats: {
    meetings: 105,
    projects: 55,
    partners: 18,
    internal: 9,
    clientCompany: 25,
    todos: 403
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
      lastUpdated: "2026-05-29",
      summary: "5/29 三大議題 — ① OKR 因 AI 因素延至 6 月落地，全公司已公布；② 候選制第三季結束前全面取消，減少服務啟動延遲；③ 脆舊美學客戶解約案管理層介入中，需嚴格控管業務折扣與權限",
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
        "🆕 5/13 Winny 明日向老闆確認 GEO Suite 獎金調整方案",
        "🆕 5/18 獎金辦法已由麥克確認無誤，<strong>今日正式發佈</strong>",
        "🆕 5/18 本週安排<strong>兩場說明會</strong>：AD 團隊 5/19（二）16:45-17:45、CS 團隊 5/22（四）10:00",
        "🆕 5/18 蔡阿達先向團隊說明獎金制度，<strong>Winny 以財務角度解釋計算方式與收款流程</strong>",
        "🆕 5/18 黛西新上任對獎金辦法不熟悉，由蔡阿達主講較合適",
        "🆕 5/18 藍文甫提出<strong>合約名目與發票不符</strong>帳務問題，決定先獨立處理不與延期綁定",
        "🆕 5/19 獎金內容簡化為<strong>MRR 業績獎金</strong>與<strong>銷售獎金</strong>兩項，其他獎項比例集中於 MRR 獎金",
        "🆕 5/19 獎金認列標準調整：從開立發票即可領改為<strong>收到款項後才能領</strong>",
        "🆕 5/19 新增<strong>獎金回扣條款</strong>：客戶未付清款項依實收比例回收已發放獎金（三區間：&lt;50%、50-75%、&gt;75%）",
        "🆕 5/19 蔡阿達指出回收條款實務困難，建議設置<strong>明確責任分界與保險措施</strong>避免 AE 承擔過多風險",
        "🆕 5/19 業務反映若因 CS 服務導致客戶不付款不應由 AE 承擔，Winny 承諾<strong>特殊案例另案處理</strong>",
        "🆕 5/19 Winny 明日（5/20）向麥克反映業務意見，尋求回收條款調整可能",
        "🆕 5/22 藍文甫直言 AE 團隊需重整 — <strong>特規頻繁且業績不佳</strong>，建議主管從一開始約束成員行為",
        "🆕 5/22 蔡阿達承諾配合改善，<strong>嚴格執行簽約流程</strong>避免未經批准的案子進入",
        "🆕 5/22 目標減少後勤負擔與呆帳風險，提升團隊執行力與業績表現",
        "🆕 5/29 OKR 因 AI 及多重因素<strong>延至 6 月落地</strong>，全公司及主管均已公布 OKR",
        "🆕 5/29 蔡阿達確認收到 Daisy 提供的部門 OKR 一覽表，業務開發部營收目標與認知一致",
        "🆕 5/29 <strong>候選制第三季結束前全面取消</strong>，保留短期彈性應對特殊狀況",
        "🆕 5/29 候選制原為 AE 簽單彈性，但造成<strong>服務啟動延遲及收費爭議</strong>，最後一個月不收費致前後不一致",
        "🆕 5/29 取消候選制有助於提升服務效率與收費透明度，CS 可督促客戶按時完成選字",
        "🆕 5/29 <strong>脆舊美學客戶有解約意向</strong>且要求免違約金，需走公司內部流程由管理層決策",
        "🆕 5/29 蔡阿達建議若客戶關係不愉快應停止服務避免 CS 為難，合約事務交由艾瑞克處理",
        "🆕 5/29 業務折扣與權限需嚴格控管，<strong>部長與副部長應擔任守門員角色</strong>，確保業務紀律與流程"
      ],
      chips: [
        { icon: "📉", text: "目標 -20%" },
        { icon: "💰", text: "845萬/6人" },
        { icon: "⚠️", text: "PIP < 60%" },
        { icon: "🎯", text: "T型圖基準" },
        { icon: "📋", text: "OKR 6月落地" },
        { icon: "🚫", text: "候選制 Q3 取消" }
      ],
      todos: [
        { owner: "Winny Chiang", text: "明日（5/20）向麥克反映業務對獎金回收條款意見，請示調整可能", priority: "today" },
        { owner: "蔡阿達", text: "週四 10:00 CS 會議中說明獎金辦法", priority: "week" },
        { owner: "Winny Chiang", text: "釐清並公告獎金回收規定，建立特殊案例另案討論機制", priority: "week" },
        { owner: "Winny Chiang", text: "與 Daisy 及蔡阿達持續收集獎金辦法調整建議", priority: "week" },
        { owner: "藍文甫", text: "協助重整 AE 團隊行為與認知，強化流程遵守與品質把關", priority: "week" },
        { owner: "蔡阿達", text: "督促 AE 團隊嚴格執行簽約流程，減少後勤負擔與呆帳風險", priority: "week" },
        { owner: "蔡阿達", text: "推動第三季結束前取消候選制，宣佈新政策確保客戶與內部認知一致", priority: "week" },
        { owner: "藍文甫與 Anne Chang", text: "制定明確選字期限與服務啟動時間，減少候選制不確定性", priority: "week" },
        { owner: "蔡阿達", text: "完成脆舊美學解約相關信件調整並寄出，拆分服務窗口與合約管理", priority: "today" },
        { owner: "藍文甫", text: "監督脆舊美學解約流程，與管理層溝通案件狀況與後續處理方案", priority: "week" },
        { owner: "蔡阿達與藍文甫", text: "共同制定業務團隊放行與折扣管理規範，強化內部管控", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-29",
          title: "Weekly Sync Up — OKR 落地、候選制取消、客戶解約管理",
          time: "11:19-12:15",
          duration: "56m",
          participants: "蔡阿達、藍文甫（Leo）、Max Huang、Anne Chang",
          docUrl: "",
          dialogues: [
            {
              topic: "OKR 制定與公司目標溝通",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "今年因 AI 及其他狀況影響，OKR 制定延後至 6 月完成，為公司重要工作。全公司及主管均已公布 OKR，各部門需依公司目標制定部門目標。" },
                { speaker: "蔡阿達", role: "ada", text: "確認收到 Daisy 提供的部門 OKR 一覽表，核對業務開發部營收目標與自身認知一致。" }
              ]
            },
            {
              topic: "候選制合約政策檢討與調整",
              exchanges: [
                { speaker: "Anne Chang", role: "other", label: "PM", text: "不喜歡候選制，最後一個月不收費造成前期服務與收費不一致。候選制原為 AE 簽單彈性，需與客戶清楚溝通規則。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "候選制帶來不確定性，客戶常以各種理由拖延選字，影響服務啟動與收費。可透過明確規範讓 CS 督促客戶按時選字。" },
                { speaker: "蔡阿達", role: "ada", text: "第三季為最後一季實施候選制，第三季結束前全面取消。取消有助於提升服務效率與收費透明度。" }
              ]
            },
            {
              topic: "脆舊美學客戶解約處理與內部流程規範",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "與李勇討論脆舊美學案，客戶有解約意向且要求免違約金，需走公司內部流程由管理層決策。業務團隊需建立明確規矩，部長與副部長應擔任守門員角色。" },
                { speaker: "蔡阿達", role: "ada", text: "若客戶關係不愉快應停止服務避免 CS 為難。將持續支援客戶，合約事務交由艾瑞克處理，拆分服務窗口與合約管理。" },
                { speaker: "Anne Chang", role: "other", label: "PM", text: "信件寄送需包含相關人員，督促艾瑞克後續跟進避免拖延。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-22",
          title: "Weekly Sync Up — AE 團隊行為規範與流程管理",
          time: "11:01-12:50",
          duration: "1h49m",
          participants: "蔡阿達、Anne Chang、藍文甫、Max Huang",
          docUrl: "",
          dialogues: [
            {
              topic: "AE 團隊行為規範與流程嚴格執行",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "AE 團隊需重整，目前存在特規頻繁及業績不佳問題。主管應從一開始就約束成員行為，避免後續頻繁擦屁股，提升團隊執行力與業績表現。" },
                { speaker: "蔡阿達", role: "ada", text: "理解並願意配合改善，將督促 AE 團隊嚴格執行簽約流程，避免未經流程批准的案子進入，減少後勤負擔與呆帳風險。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-19",
          title: "AE Team 週會 — 獎金辦法說明會",
          time: "16:45-18:07",
          duration: "1h22m",
          participants: "蔡阿達、溫妮（Winny）、李陽、Joanna、Irene、艾雲、Daisy、呂紹平、麥克、安祖林",
          docUrl: "",
          dialogues: [
            {
              topic: "業務獎金辦法變動說明與回扣機制",
              exchanges: [
                { speaker: "溫妮", role: "other", label: "財務", text: "獎金內容簡化為 MRR 業績獎金與銷售獎金兩項，獎金認列從開立發票改為收到款項後才能領。新增獎金回扣條款：客戶未付清款項依實收比例回收，分三區間（低於 50%、50-75%、高於 75%）。" },
                { speaker: "蔡阿達", role: "ada", text: "獎金回收條款在實務上會造成 AE 與客戶間的矛盾與壓力，建議設置明確的責任分界與保險措施，避免 AE 承擔過多風險。" },
                { speaker: "李陽", role: "other", label: "AE", text: "若客戶因 CS 服務不佳而不付款，卻由 AE 承擔獎金回收責任不合理。AE 無法有效追蹤客戶付款狀況。" },
                { speaker: "溫妮", role: "other", label: "財務", text: "承諾對因 CS 服務問題導致客戶不付款的特殊案例不扣 AE 獎金，將於明日向麥克反映業務意見。" }
              ]
            },
            {
              topic: "AE 與 CS 獎金責任分界討論",
              exchanges: [
                { speaker: "Joanna", role: "other", label: "AE", text: "AE 工作權限限於收單，後續客戶管理由 CS 負責。獎金因客戶不付款被扣對 AE 不公平。" },
                { speaker: "蔡阿達", role: "ada", text: "要求 AE 承擔至第 9 個月不合理，需建立明確保險措施與責任分界。" },
                { speaker: "溫妮", role: "other", label: "財務", text: "CS 獎金辦法中只要有一期款項未收即無法領獎金。強調 AE 接單時應避免 over promise 並篩選優質客戶。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-18",
          title: "finalize 獎金辦法",
          time: "12:02-12:11",
          duration: "9m",
          participants: "蔡阿達、Winny Chiang、藍文甫、Anne",
          docUrl: "",
          dialogues: [
            {
              topic: "獎金辦法發佈與說明會安排",
              exchanges: [
                { speaker: "Winny Chiang", role: "other", label: "財務", text: "獎金辦法 A1 與 CS 部分已由麥克確認無誤，今日正式發佈。發佈後本週安排 AD 與 CS 兩場說明會。" },
                { speaker: "蔡阿達", role: "ada", text: "建議利用週會時間說明，明天下午 4:45 到 5:45。我先向團隊說明獎金制度，Winny 再以財務角度解釋計算方式與收款流程。" },
                { speaker: "Winny Chiang", role: "other", label: "財務", text: "黛西新上任，對獎金辦法不熟悉，由蔡阿達主講較合適。我會私下與麥克確認工具細節。" },
                { speaker: "Anne", role: "other", label: "CS", text: "CS 會議時間調整至本週四上午 10 點，工具部分可能會有同仁再次詢問。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "會協助會議進行，重申獎金辦法的重要性，符合老闆期望。" }
              ]
            },
            {
              topic: "合約名目變更與帳務問題",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "與愛貝斯溝通中，延期時間尚未確定。合約名目與發票不符的帳務問題需先獨立處理，不與名目變更綁定，避免影響合約簽署進度。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "將開設專門聊天室邀請相關人員討論，並設置明確 deadline 加速問題解決。" }
              ]
            }
          ]
        },
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
      lastUpdated: "2026-05-29",
      summary: "5/29 代理商佣金比例調整 — 獨家代理 15%、非獨家 8%（由 Max 與 Mike 協商決定）；獨家定義明確為代理商成為公司唯一合作夥伴，短期不強制獨家但合約保留選項；業務需嚴格控管折扣政策",
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
        "🆕 5/8 蔡阿達提議<strong>公用雲端硬碟集中管理公版文件</strong>，減少重複溝通",
        "🆕 5/15 代理商協議中多處出現<strong>獨家代理詞彙</strong>，藍文甫建議刪除或明確定義",
        "🆕 5/15 獨家代理兩種含義：① 代理商只能賣本公司產品 ② 公司只給該代理商銷售權；團隊<strong>不採用第二種</strong>，避免排除其他代理商",
        "🆕 5/15 合約中設置<strong>獨家代理勾選選項</strong>，依選擇給予相應權利與義務",
        "🆕 5/15 獨家代理<strong>不限定區域</strong>，但需明確規範使用本公司工具、<strong>禁止使用競品產品</strong>",
        "🆕 5/15 法務提醒獨家代理詞彙之<strong>法律意涵</strong>需在合約中清楚說明",
        "🆕 5/15 藍文甫尚未完成<strong>法務審核</strong>，已初步檢視合約內容，準備與團隊進一步討論",
        "🆕 5/15 決定先自行過一遍合約，<strong>下週市場會議中與麥克討論</strong>",
        "🆕 5/22 代理商退佣方案定案 — 非獨家佣金 <strong>6%</strong>，獨家佣金 <strong>10%</strong>，差距 4% 以鼓勵獨家合約",
        "🆕 5/22 蔡阿達認同佣金比例合理，與過去 MP 方案相近",
        "🆕 5/22 Anne Chang 已標記細節交法務最終確認，通過後正式實施",
        "🆕 5/29 代理商佣金比例調整 — <strong>獨家代理 15%，非獨家 8%</strong>（由 Max 與 Mike 協商決定）",
        "🆕 5/29 獨家代理定義明確：<strong>代理商成為公司唯一合作夥伴</strong>，非限制公司只能與該代理商合作",
        "🆕 5/29 短期內不強制獨家，合約中<strong>保留選項以利未來管理</strong>",
        "🆕 5/29 業務報價需考慮佣金及折扣（九五折、八五折）<strong>對售價影響</strong>，管理層需把關折扣政策",
        "🆕 5/29 合約條款需由法律專業人員（亨利）調整，確保條文<strong>符合公司意圖</strong>"
      ],
      chips: [
        { icon: "📝", text: "合約拆分兩份" },
        { icon: "⚖️", text: "滿意度 ≥ 70%" },
        { icon: "💰", text: "獨家 15% / 非獨家 8%" },
        { icon: "📄", text: "法務審核中" },
        { icon: "⏰", text: "續約通知 30 天" },
        { icon: "🔀", text: "三類代理商分流" },
        { icon: "🔄", text: "佣金延續至續約" },
        { icon: "🚫", text: "退件機制上線" },
        { icon: "⚙️", text: "獨家代理可選" }
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
        { owner: "團隊", text: "評估自動續約通知期限，考慮縮短至 30 天", priority: "week" },
        { owner: "藍文甫", text: "調整代理商類型表格，明確區分純工具代理、工具+顧問轉售、貼牌三類", priority: "today" },
        { owner: "Max Huang", text: "確認佣金延續至續約政策，制定不同代理類型佣金計算方式", priority: "week" },
        { owner: "Anne Chang", text: "確認首次合作免收取條款已納入合約，宣導 AE 確保報價單備註完整", priority: "week" },
        { owner: "藍文甫", text: "監督 AE 使用公版合約文件，不符規範文件退件處理", priority: "week" },
        { owner: "藍文甫", text: "設計 AE 行為管理制度，違規使用候選字之 AE 限制或禁用權限", priority: "week" },
        { owner: "藍文甫", text: "追蹤客戶字庫選擇進度，逾期未完成通知 AE 並暫停後續作業", priority: "today" },
        { owner: "藍文甫", text: "與 Max Huang 共同檢視代理商協議，刪除或調整不適用的獨家條款並明確定義適用範圍", priority: "week" },
        { owner: "Max Huang", text: "指派法務確認代理商協議條款，下次會議前完成修訂版本", priority: "week" },
        { owner: "藍文甫", text: "與 Anne Chang 完成代理商退佣方案法務最終審核", priority: "week" },
        { owner: "蔡阿達", text: "與 Max Huang 評估佣金比例體感與誘因，確認獨家合作佣金優勢", priority: "week" },
        { owner: "藍文甫", text: "與法務亨利溝通調整代理商合約條款，明確獨家代理定義與佣金比例", priority: "week" },
        { owner: "蔡阿達", text: "整理代理商合作狀況，配合調整合約條款，確保業務團隊理解獨家與非獨家差異", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-29",
          title: "Weekly Sync Up — 代理商獨家條款與佣金政策調整",
          time: "11:19-12:15",
          duration: "56m",
          participants: "蔡阿達、藍文甫（Leo）、Max Huang、Anne Chang",
          docUrl: "",
          dialogues: [
            {
              topic: "代理商獨家條款與佣金政策釐清",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "代理商條款中有獨家與非獨家選項，獨家代理意味代理商成為公司唯一合作夥伴，非限制公司只能與該代理商合作。業務報價需考慮佣金及折扣對售價影響，管理層需把關折扣政策。" },
                { speaker: "Max Huang", role: "other", label: "顧問", text: "獨家代理佣金為 15%，非獨家為 8%，由 Max 與 Mike 協商決定。獨家代理是代理商成為公司唯一合作夥伴，並非限制公司只能與該代理商合作。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "業務放行折扣需有整體概念，由管理層把關，避免過度折扣造成損失。合約條款需由法律專業人員（亨利）調整。" },
                { speaker: "蔡阿達", role: "ada", text: "代理商多為誠意合作，短期內不需強制獨家，但合約中仍保留選項以利未來管理。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-22",
          title: "Weekly Sync Up — 代理商退佣方案與獨家合作誘因",
          time: "11:01-12:50",
          duration: "1h49m",
          participants: "蔡阿達、Anne Chang、藍文甫、Max Huang",
          docUrl: "",
          dialogues: [
            {
              topic: "代理商退佣方案與獨家合作誘因設計",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "退佣方案細節：非獨家代理佣金 6%，獨家代理佣金 10%，差距 4% 以鼓勵代理商簽訂獨家合約。方案已進入法務審核階段。" },
                { speaker: "Max Huang", role: "other", label: "顧問", text: "實際佣金是吸引代理商獨家合作的關鍵，並提及還有其他資源支持可作為額外誘因。" },
                { speaker: "Anne Chang", role: "other", label: "PM", text: "方案已標記細節並交由法務做最後確認，若有問題會再回報。" },
                { speaker: "蔡阿達", role: "ada", text: "認同佣金比例合理，與過去 MP 方案相近。待法務確認後正式實施。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-15",
          title: "Weekly Sync Up — 代理商協議獨家條款與法務審核",
          time: "10:31-11:03",
          duration: "32m",
          participants: "蔡阿達、Max Huang、藍文甫（Leo）",
          docUrl: "",
          dialogues: [
            {
              topic: "代理商收益與合約審核進度",
              exchanges: [
                { speaker: "Max Huang", role: "other", label: "顧問", text: "代理商收益部分及法務審核狀況如何？目前進度到哪裡了？" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "尚未完成法務審核，但已初步檢視合約內容。決定先自行過一遍合約，下週市場會議中與麥克討論。" }
              ]
            },
            {
              topic: "獨家代理條款定義與修正",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "合約中多處出現獨家代理詞彙，建議刪除或明確定義，避免誤用造成法律風險。" },
                { speaker: "Max Huang", role: "other", label: "顧問", text: "獨家代理有兩種含義：一是代理商只能賣本公司產品，二是公司只給該代理商銷售權。我們不採用第二種，避免排除其他代理商。建議在合約中設置獨家代理的勾選選項，依選擇給予相應權利與義務。" },
                { speaker: "蔡阿達", role: "ada", text: "同意不限定區域，但獨家代理需明確規範使用本公司工具，禁止使用競爭對手產品。法務也提醒獨家代理詞彙的法律意涵需在合約中清楚說明。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-08",
          title: "Weekly Sync Up — 代理商類型與佣金結構定案",
          time: "11:03-12:45",
          duration: "1h42m",
          participants: "蔡阿達、藍文甫（Leo）、Max Huang、Anne Chang",
          docUrl: "",
          dialogues: [
            {
              topic: "代理商類型重新定義與佣金政策調整",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "代理商類型由產品或服務類型劃分，以疊加方式呈現工具、顧問、策略三層級。" },
                { speaker: "Max Huang", role: "other", label: "顧問", text: "代理商類型應明確分為純工具代理、工具與顧問服務轉售、以及貼牌三種，表格需調整以反映此分類。" },
                { speaker: "蔡阿達", role: "ada", text: "Host 代理商不會代理工具，主要用於追蹤廣編稿及 AI 引用，不需簽代理合約。" },
                { speaker: "Max Huang", role: "other", label: "顧問", text: "佣金政策建議延續至續約，鼓勵代理商持續帶案。代理商合作應建立長期關係，提供報價優惠以防代理商流失。" }
              ]
            },
            {
              topic: "合約報價單管理與 AE 行為管控",
              exchanges: [
                { speaker: "Anne Chang", role: "other", label: "PM", text: "部分代理商合約未明確寫首次合作免收費用，建議參照 Amber Fans 案例補充條款。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "法務已更新公版報價備註，但 AE 使用習慣不佳導致條款未落實。未符合規範文件一律退件。管理制度嚴格執行，違規者影響考績。" },
                { speaker: "蔡阿達", role: "ada", text: "建議利用公用雲端硬碟集中管理公版文件，要求團隊成員自行查閱以減少重複溝通。" }
              ]
            },
            {
              topic: "專案字庫選擇延遲與候選字制度調整",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "專案字庫選擇原定三月底完成，因建置期延至四月底。若本週仍未完成將通知 AE 處理，暫停專案避免專員無法出建議書。" },
                { speaker: "Anne Chang", role: "other", label: "PM", text: "曾遇類似案件字庫未選完導致專案停滯，建議由里昂追蹤進度。" },
                { speaker: "蔡阿達", role: "ada", text: "同意建立黑令制度，對違規 AE 限制使用權限，強化管理權力。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "由我填寫案件狀況與對應方式，蔡阿達簽名確認，雙向通知 AE 與 CS 配合。" }
              ]
            }
          ]
        },
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
      lastUpdated: "2026-05-29",
      summary: "5/29 提出與 Biggo 合作解決英文文案瓶頸 — Biggo 可將中文內容轉換成多國語言並生成新內容，收取 API 費用 10%，技術串接透過 MOS 服務實現；品牌聲音卡片化測試進行中（廖淑芬 5/25、6/5、6/22 三階段報告）",
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
        "🆕 AI 生成文章重內容符合度更勝人性化口吻，建議嘗試克勞德提升人性化表現",
        "🆕 4/30 統一 20 篇<strong>規劃+論述</strong>銷售模式，對外稱「撰寫」，內部走論述流程",
        "🆕 4/30 中文文章<strong>修改限一次</strong>，英文文章不提供修改服務，合約明確規範",
        "🆕 4/30 交期由 7 天延長至<strong>15 工作天</strong>，配合 AI 初稿產出流程",
        "🆕 4/30 AI 素材由<strong>客戶確認</strong>，納入建議書流程提升素材符合度",
        "🆕 4/30 蔡阿達開發 Cloud 爬蟲/素材處理技能，<strong>下週完成</strong>並安排與文案視訊教學",
        "🆕 4/30 MIS 開設專用 Cloud 帳號供文案團隊使用，解決帳號共享限制",
        "🆕 4/30 英文文章規劃可用 AI 跨語言處理，但需與 ST 團隊討論調整篇幅",
        "🆕 5/5 品牌聲音系統<strong>三大功能</strong>正式向小花說明：品牌網站內容學習、符合 SEO/EAT 規範文章撰寫、知識精煉",
        "🆕 5/5 AI 文章合約策略調整：<strong>暫不在合約明確標示 AI 文章</strong>，改以報價單或溝通文件說明，避免客戶反彈",
        "🆕 5/5 查證責任歸客戶，業務需<strong>統一口徑</strong>向客戶說明 AI 輔助產文優勢",
        "🆕 5/5 Cloud 平台使用限制：<strong>每五小時重置、每週有上限</strong>，4.6 模型為主力，4.7 耗資源僅必要時使用",
        "🆕 5/5 文案產出策略：先用 <strong>Gemini/ChatGPT 跑初稿</strong>，再用 Cloud 撰寫重要文章，節省資源",
        "🆕 5/5 以<strong>玉萍診所</strong>為首位實操客戶，爬取網站資料後上傳系統生成文章",
        "🆕 5/5 系統可建立<strong>多對話框對應不同客戶</strong>，方便文案撰寫時參考各品牌資料",
        "🆕 5/5 蔡阿達將新增功能：根據專員規劃<strong>自動產生問卷</strong>收集客戶素材",
        "🆕 5/6 合約 AI 條款過渡期處理：現有條款已涵蓋<strong>客戶需自行校正內容</strong>，司法性條款完整，<strong>無需另加 AI 條款</strong>",
        "🆕 5/6 蔡毓倫確認舊案過渡期合約，蔡阿達將持續與客戶溝通確保條款符合談判條件",
        "🆕 5/6 旅行社客戶 SEO 方案：<strong>20 組 Prime GLS 包入 20 次 SEO</strong>，以 2,000 元計價報價",
        "🆕 5/6 蔡毓倫建議簡化方案規格，<strong>不再使用 17 篇等不整數</strong>，蔡阿達同意推動",
        "🆕 5/6 文案專員工作流程確認：AI 僅輔助<strong>生成初稿</strong>，前置資料收集與知識庫建置仍由專員完成",
        "🆕 5/8 人力不足確認全面採用 <strong>AI 輔助生成文章</strong>，先建立客戶資料與品牌聲音再產文",
        "🆕 5/8 AI 與人工撰寫品質有差異，<strong>合約不特別標示 AI 生成</strong>以免成為品質爭議藉口",
        "🆕 5/8 積壓約 <strong>3,000 篇</strong>文章，成立策略工作小組結合 AI 與人工加速交付",
        "🆕 5/8 以 <strong>30 篇不同產業文章</strong>作為品質驗證標準，通過後方可交付客戶",
        "🆕 5/8 醫療與金融類文章品質差異較大，需<strong>加強 AI 訓練與人工輔助</strong>",
        "🆕 5/8 Max Huang 提議針對<strong>金融等專業領域設立專門 AI 模型</strong>，提高專業性",
        "🆕 5/8 蔡阿達以客戶官網內容訓練 AI，<strong>提升文章專業度與品牌風格符合度</strong>",
        "🆕 5/12 新聞稿需挑選<strong>未被引用的 Prompt</strong> 以利效益追蹤，阿福負責訂定規範",
        "🆕 5/12 新聞稿成效追蹤可考慮直接使用 <strong>Google Analytics</strong>，媒體稿件量大追蹤難度高",
        "🆕 5/12 報價單<strong>避免出現 AI 字眼</strong>，改以「文章規劃」等說法降低客戶疑慮",
        "🆕 5/12 合約需與 <strong>Henry 及法務</strong>討論 AI 輔助生成文章的交付權利義務",
        "🆕 5/12 文章品質策略：<strong>不走量產路線</strong>，重視品質與深度，單篇可涵蓋多個關鍵字",
        "🆕 5/12 小花持續關注<strong>行銷圈動態與文案趨勢</strong>，確保內容符合時事與受眾需求",
        "🆕 5/12 九月客戶合約到期，<strong>呂紹平將與 Roger 聯繫</strong>安排續約會議，抽成已達 5.5%-15%",
        "🆕 5/15 AI 生成文案協議正式<strong>寫入報價單</strong>，避免修改合約，減少客戶疑慮",
        "🆕 5/15 明確界定：客戶如需協助，<strong>可由乙方生成文案</strong>，服務範圍清楚劃定",
        "🆕 5/15 Max Huang 同意此做法，<strong>合約無需修改</strong>，只需在報價單中說明即可",
        "🆕 5/20 品牌聲音卡片化測試啟動 — 廖淑芬預計 <strong>5/25、6/5、6/22</strong> 完成三階段測試報告",
        "🆕 5/20 卡片設計含<strong>專業卡、知識經歷卡、案例卡</strong>，依產業分類抽用，方便文案撰寫時調用",
        "🆕 5/20 品牌聲音整體概念優於卡片化方案，效果<strong>優於 ChatGPT 與 Gemini</strong> 生成文案",
        "🆕 5/20 蔡阿達負責品牌聲音萃取與版本統一管理，廖淑芬負責測試並提供回饋",
        "🆕 5/29 蔡阿達介紹 <strong>Biggo 數據分析與內容生成技術</strong>，提出合作以解決公司英文文案數量不足問題",
        "🆕 5/29 Biggo 可協助將中文內容轉換成多國語言並生成新內容，<strong>收取 API 費用 10%</strong>，費用低且對方態度友善",
        "🆕 5/29 目前中文文案 17 篇，<strong>英文僅 7 篇</strong>且多為規劃階段，無法滿足海外市場需求",
        "🆕 5/29 藍文甫認為 Biggo 技術可<strong>強化公司產品模式</strong>，下一步需確認對接價格與技術串接流程",
        "🆕 5/29 技術串接可透過 <strong>MOS 服務</strong>實現，重點在於如何順暢接收甲方資訊並自動產生內容",
        "🆕 5/20 純文案方案調整 — <strong>取消「10 篇撰寫 + 7 篇規劃」混合方案</strong>，改為純文案撰寫計價",
        "🆕 5/20 純文案方案月產量上限 <strong>24 篇</strong>，以生活化產品客戶為主，B2B 產品不適用",
        "🆕 5/20 代理商合約維持<strong>顧問案轉介紹抽佣機制</strong>，合約版本待藍文甫整理後由 Mike 決定",
        "🆕 5/20 建站合約服務期限調整 — <strong>網站正式上線日起算 12 個月</strong>，收款依時間點固定收取",
        "🆕 5/20 所有方案 spec 變更統一由 <strong>Mike 審核</strong>，小安代理管理文件與定價，避免跨部門內耗"
      ],
      chips: [
        { icon: "📝", text: "純撰寫≤24篇/月" },
        { icon: "👤", text: "25% 人工" },
        { icon: "🤖", text: "品牌聲音卡片測試中" },
        { icon: "✏️", text: "修改限1次" },
        { icon: "📅", text: "交期15工作天" },
        { icon: "☁️", text: "Cloud 4.6 為主力" },
        { icon: "📋", text: "AI條款入報價單" },
        { icon: "🆕", text: "5/20 純文案方案" }
      ],
      todos: [
        { owner: "廖淑芬", text: "5/25 完成第一階段品牌聲音與知識卡片測試報告", priority: "today" },
        { owner: "廖淑芬", text: "6/5 完成第一階段測試並啟動第二階段測試", priority: "week" },
        { owner: "廖淑芬", text: "6/22 完成第二階段測試報告，評估文案生成成效與運作模式", priority: "waiting" },
        { owner: "蔡阿達", text: "持續維護品牌聲音萃取機制，根據廖淑芬反饋調整 prompt", priority: "week" },
        { owner: "蔡阿達", text: "協助廖淑芬上傳管理品牌聲音及知識卡片資料夾，指導使用卡片系統", priority: "week" },
        { owner: "蔡阿達與藍文甫", text: "確認純文案方案是否全改為撰寫篇數計價，取消 10+7 混合方案", priority: "today" },
        { owner: "藍文甫", text: "整理代理商佣金陳述版本並提交 Mike 審核決定", priority: "week" },
        { owner: "藍文甫", text: "與法務確認建站合約以網站上線起算 12 個月的服務期限條款", priority: "week" },
        { owner: "藍文甫", text: "與財務協調收款時間固定（15 個月內收完），服務期限可因上線時間延長", priority: "week" },
        { owner: "蔡阿達", text: "將建站合約條款寫法貼至報價單對話框，方便業務使用與客戶確認", priority: "week" },
        { owner: "藍文甫", text: "持續由 Mike 統籌 spec 變更與定價，小安協助掌握文件與溝通", priority: "week" },
        { owner: "藍文甫", text: "每週與廖淑芬開會，持續優化文案產出流程", priority: "waiting" },
        { owner: "蔡阿達", text: "評估不同 AI 模型（4.6、4.7、Gemini）文章生成效能，提供使用建議", priority: "week" },
        { owner: "廖淑芬", text: "監督業務團隊對外溝通口徑一致，確保 AI 輔助產文說法統一", priority: "week" },
        { owner: "團隊", text: "完成 30 篇不同產業 AI 生成文章品質測試，確保品質達標後交付", priority: "week" },
        { owner: "藍文甫", text: "召集 Henry 開會釐清合約條款與 AI 文章交付權利義務", priority: "week" },
        { owner: "呂紹平", text: "聯繫 Roger 安排九月合約到期續約會議", priority: "week" },
        { owner: "蔡阿達", text: "協助制定新聞稿成效追蹤報告方案，評估 GA 或其他工具", priority: "week" },
        { owner: "蔡阿達", text: "萃取成功案例關鍵字與文章規劃邏輯，作為 AI 產出參考", priority: "week" },
        { owner: "廖淑芬", text: "整理並更新成功案例文章連結資料夾，確保資料完整", priority: "week" },
        { owner: "蔡阿達", text: "持續跟進 Biggo 合作細節與 API 串接流程，安排後續測試與評估", priority: "week" },
        { owner: "藍文甫", text: "評估 Biggo 合作價格與代價，推動技術測試與整合", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-29",
          title: "Weekly Sync Up — Biggo 多語言內容合作提案",
          time: "11:19-12:15",
          duration: "56m",
          participants: "蔡阿達、藍文甫（Leo）、Max Huang、Anne Chang",
          docUrl: "",
          dialogues: [
            {
              topic: "與 Biggo 合作解決英文文案產出瓶頸",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "介紹 Biggo 的數據分析與內容生成技術，核心包括以圖搜圖（已在 Shopify 平台應用）及財經資訊收集。Biggo 能協助將中文內容轉換成符合不同國家語言與文化的內容並生成新內容，解決公司英文文案數量不足的痛點。" },
                { speaker: "蔡阿達", role: "ada", text: "目前中文文案 17 篇，英文僅 7 篇且多為規劃階段，無法滿足海外市場需求。Biggo 合作費用低，主要收取 API 費用 10%，對方態度友善。技術串接可透過 MOS 服務實現。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "認為 Biggo 技術可強化公司產品模式，下一步需確認對接價格與技術串接流程。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-20",
          title: "與阿達討論 AI 文案操作方向 — 品牌聲音卡片化 × 純文案方案 × 建站合約",
          time: "14:31-15:44",
          duration: "1h13m",
          participants: "蔡阿達、廖淑芬（小花）、藍文甫（Leo）",
          docUrl: "",
          dialogues: [
            {
              topic: "品牌聲音卡片化方案測試與進度安排",
              exchanges: [
                { speaker: "廖淑芬", role: "other", label: "文案", text: "已開始測試品牌聲音卡片，預計 5/25 做簡短報告、6/5 完成第一階段測試、6/22 做第二次報告，最後做總結報告評估文案團隊運作效益。" },
                { speaker: "蔡阿達", role: "ada", text: "卡片設計包含專業卡、知識經歷卡、案例卡等，依產業分類抽用，方便文案撰寫時調用。品牌聲音由我統一管理萃取與版本。" },
                { speaker: "廖淑芬", role: "other", label: "文案", text: "品牌聲音整體方案比卡片化方案易於理解與使用，效果也優於 ChatGPT 與 Gemini 生成的文案。" },
                { speaker: "蔡阿達", role: "ada", text: "卡片會依產業維度分類，未來可自行上傳與抽用卡片，減少對我的依賴。有改善建議隨時反饋。" }
              ]
            },
            {
              topic: "純文案方案規劃與調整",
              exchanges: [
                { speaker: "廖淑芬", role: "other", label: "文案", text: "純文案方案主要針對無人手客戶，規劃書不適用，文案以生活化產品為主，B2B 產品不適合。" },
                { speaker: "蔡阿達", role: "ada", text: "純文案方案市場需求大，有助於網站被 AI 推薦，CS 維護負擔較輕。取消原本 10 篇撰寫加 7 篇規劃的方案，改為純文案撰寫。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "支持純文案方案，所有 spec 變更需經 Mike 審核，由小安代理管理文件與定價，避免跨部門認知不一。" }
              ]
            },
            {
              topic: "建站合約服務期限與收款方式調整",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "以固定時間收款，服務期限依網站上線時間起算 12 個月，避免因建站延遲影響收款。此方案已送法務審核過一次。" },
                { speaker: "蔡阿達", role: "ada", text: "認同此方案可解決合約與收款時間不同步的問題，將與法務及財務溝通確保報價單中明確寫明規則。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-15",
          title: "Weekly Sync Up — AI 生成文案協議與報價單更新",
          time: "10:31-11:03",
          duration: "32m",
          participants: "蔡阿達、Max Huang、藍文甫（Leo）",
          docUrl: "",
          dialogues: [
            {
              topic: "AI 生成文案協議寫入報價單",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "第四點規劃內容確認將 AI 生成文案的協議寫入報價單，避免修改合約本身。明確界定客戶如需協助，可由乙方生成文案，減少客戶對 AI 生成文章的疑慮。" },
                { speaker: "Max Huang", role: "other", label: "顧問", text: "同意此做法，合約無需修改，只需在報價單中明確說明即可。這樣可以避免客戶反彈，同時明確雙方責任與服務範圍。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-12",
          title: "新聞稿撰寫與媒體發佈流程確認",
          time: "12:01-13:11",
          duration: "1h10m",
          participants: "蔡阿達、藍文甫（Leo）、呂紹平（Leon）、廖淑芬（小花）",
          docUrl: "",
          dialogues: [
            {
              topic: "新聞稿發佈流程與成效追蹤",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "新聞稿的 Prompt 設計主要用於追蹤效益，需挑選未被引用的 Punk。成效報告可考慮直接使用 Google Analytics，因為媒體每日稿件眾多追蹤難度高。" },
                { speaker: "呂紹平", role: "other", label: "Leon", text: "不同新聞平台對成效影響不同，需先評估名單是否合適，並告知客戶無法保證所有稿件一定刊登。" },
                { speaker: "蔡阿達", role: "ada", text: "建議保守承諾保證刊登數量，需確認宏文是否已溝通此數字。" }
              ]
            },
            {
              topic: "AI 輔助文章產出與合約條款調整",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "可透過問卷機制引導客戶提供素材，由 AI 生成初稿，文案再加入真實經驗與數據。" },
                { speaker: "廖淑芬", role: "other", label: "小花", text: "文案需符合多方要求，AI 文章只能輔助，需文案技能修飾以符合 Google 排名規則。" },
                { speaker: "呂紹平", role: "other", label: "Leon", text: "報價單避免出現 AI 字眼以減少客戶疑慮，建議改以文章規劃等說法。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "同意並將與法務協調合約條款，確保交付物均需客戶確認，避免獨立列出 AI 條款造成誤解。團隊不走量產路線，重視文章品質與深度。" }
              ]
            },
            {
              topic: "合約續約與客戶溝通安排",
              exchanges: [
                { speaker: "呂紹平", role: "other", label: "Leon", text: "客戶行政部門發現合約九月到期需重新簽訂。計劃與 Roger 協調時間召開會議。目前抽成已達 5.5% 至 15%，需評估續約條款對雙方影響。" },
                { speaker: "蔡阿達", role: "ada", text: "同意安排續約會議，感謝團隊協助整理相關資料，確保續約過程資訊透明與溝通順暢。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-08",
          title: "Weekly Sync Up — AI 文章產製緊急加速方案",
          time: "11:03-12:45",
          duration: "1h42m",
          participants: "蔡阿達、藍文甫（Leo）、Max Huang、Anne Chang",
          docUrl: "",
          dialogues: [
            {
              topic: "AI 輔助文章撰寫流程與品質管理",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "目前人力無法持續純人工撰寫，決定用 AI 輔助生成文章，先建立客戶資料與品牌聲音。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "AI 輔助生成文章品質與人工撰寫有差異，需在合約中明確說明，避免客戶對品質有疑慮。" },
                { speaker: "Max Huang", role: "other", label: "顧問", text: "現階段應採用 AI 輔助人工生成流程，人工修飾以提升品質並節省時間。合約不特別標示 AI 生成，以免成為品質爭議藉口。" },
                { speaker: "蔡阿達", role: "ada", text: "以客戶官網內容訓練 AI，提升文章專業度與符合品牌風格。" }
              ]
            },
            {
              topic: "積壓文章緊急處理與品質驗證",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "目前積壓約 3,000 篇文章，需成立策略工作小組結合 AI 與人工加速交付。" },
                { speaker: "蔡阿達", role: "ada", text: "與小花負責測試 AI 生成文章品質，目標以 30 篇不同產業文章作為驗證標準。" },
                { speaker: "Anne Chang", role: "other", label: "PM", text: "不同產業文章品質差異大，尤其醫療與金融類需加強 AI 訓練與人工輔助。" },
                { speaker: "Max Huang", role: "other", label: "顧問", text: "建議針對金融等專業領域設立專門 AI 模型，提高專業性。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-06",
          title: "AI 合約條款過渡期 × SEO 方案報價討論",
          time: "16:49-17:00",
          duration: "11m",
          participants: "蔡毓倫、蔡阿達",
          docUrl: "",
          dialogues: [
            {
              topic: "AI 條款在合約過渡期的處理",
              exchanges: [
                { speaker: "蔡毓倫", role: "other", label: "AE", text: "報價單已送出，想確認舊案過渡期合約中 AI 條款的適用問題。" },
                { speaker: "蔡阿達", role: "ada", text: "公版合約已有 AI 撰寫文章相關條款，甲方需調教並驗證文章內容，司法性條款也涵蓋文案責任。" },
                { speaker: "蔡毓倫", role: "other", label: "AE", text: "既然現有條款已足夠保障雙方權益，為何需特別強調 AI 條款？" },
                { speaker: "蔡阿達", role: "ada", text: "同意，會持續與客戶溝通確保條款符合談判條件。" }
              ]
            },
            {
              topic: "旅行社客戶 SEO 方案報價與 GLS 包裝",
              exchanges: [
                { speaker: "蔡毓倫", role: "other", label: "AE", text: "旅行社客戶希望將 20 組 Prime 的 GLS 包入 20 次 SEO 服務中，作為 POC 方案。" },
                { speaker: "蔡阿達", role: "ada", text: "折扣範圍內可行，同意以 2,000 元計價報價給客戶。" },
                { speaker: "蔡毓倫", role: "other", label: "AE", text: "建議未來不再使用 17 篇這種奇怪數字，簡化方案規格。" },
                { speaker: "蔡阿達", role: "ada", text: "會努力打破內部對數字規格的限制。" }
              ]
            },
            {
              topic: "文案專員工作流程與 AI 輔助現況",
              exchanges: [
                { speaker: "蔡毓倫", role: "other", label: "AE", text: "若 AE 主力銷售 20 篇 AI 文章，文案專員是否已大幅減少親自撰寫的比例？" },
                { speaker: "蔡阿達", role: "ada", text: "目前專員仍維持完整流程，AI 僅輔助生成初稿。專員需先收集客戶資料、拆解口氣、整理經驗與數據，建立知識庫後再用於文章生成。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-05",
          title: "awoo 文案 Skill 與方案討論 — 品牌聲音系統教學",
          time: "09:32-10:19",
          duration: "47m",
          participants: "蔡阿達、廖淑芬（小花）",
          docUrl: "",
          dialogues: [
            {
              topic: "品牌聲音系統三大功能說明與實操",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "品牌聲音系統有三大功能：一是上傳客戶網站內容讓系統學習品牌口吻；二是根據品牌聲音撰寫符合 SEO 與 EAT 規範的文章；三是持續精煉知識，讓系統越來越聰明。" },
                { speaker: "廖淑芬", role: "other", label: "小花", text: "我已建立八個圖檔並完成資料上傳。" },
                { speaker: "蔡阿達", role: "ada", text: "系統內容非一次性，需持續滾動調整。我會新增功能，根據專員規劃自動產生問卷以收集客戶素材，減少客戶不提供素材的困擾。" }
              ]
            },
            {
              topic: "AI 文章合約條款溝通策略",
              exchanges: [
                { speaker: "廖淑芬", role: "other", label: "小花", text: "若合約明確寫 AI 文章，客戶可能不願接受，且查證數據需花費大量時間，建議由客戶自行負責查證。" },
                { speaker: "蔡阿達", role: "ada", text: "合約中若強調 AI 文章會導致提案冗長且客戶反彈，建議改以報價單或其他文件溝通 AI 輔助產文的事實。合約條文需與法務確認，避免用詞過於複雜。" },
                { speaker: "廖淑芬", role: "other", label: "小花", text: "業務需密切監督對外說法，確保溝通一致，避免後續收攤時出現問題。" }
              ]
            },
            {
              topic: "Cloud 平台使用限制與模型選擇",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "Cloud 平台每五小時會重新計算使用量，若使用過度需等待冷卻，且每週也有使用上限。建議先以 4.6 模型為主，4.7 耗用資源較多僅必要時使用。" },
                { speaker: "廖淑芬", role: "other", label: "小花", text: "擔心付費版使用量不足以支援大量文章產出。" },
                { speaker: "蔡阿達", role: "ada", text: "可先用 Gemini 或 ChatGPT 跑初稿，再用 Cloud 撰寫重要文章，達到節省資源的目的。文章產出後仍需人工校正。" }
              ]
            },
            {
              topic: "客戶網站資料爬取與文案生成流程",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "每接一個新客戶會先爬取其網站資料，提供給文案團隊使用。系統可建立多個對話框，分別對應不同客戶資料。" },
                { speaker: "廖淑芬", role: "other", label: "小花", text: "已有建議書規劃，客戶已提供回饋，準備進入文案撰寫階段。" },
                { speaker: "蔡阿達", role: "ada", text: "以玉萍診所為例，爬取網站內容後上傳系統，開始生成符合品牌口吻的文章。" }
              ]
            }
          ]
        },
        {
          date: "2026-04-30",
          title: "文案 n8n — AI 文章產出規範與 Cloud 技能開發",
          time: "16:01-17:07",
          duration: "1h06m",
          participants: "蔡阿達、藍文甫（Leo）、廖淑芬（小花）、AE 業務開發組",
          docUrl: "",
          dialogues: [
            {
              topic: "統一 20 篇銷售模式與修改次數限制",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "避免 AE 反應 AI 段落難講，決定統一 20 篇規劃加論述，不再分撰寫與論述。對外稱撰寫，內部走論述流程。" },
                { speaker: "蔡阿達", role: "ada", text: "AI 輔助生成文章時會收集客戶資訊，由人工逐字審核確保品質。先賣規劃加潤飾，再視客戶需求提供 AI 輔助生成。" },
                { speaker: "廖淑芬", role: "other", label: "小花", text: "修改扣打不會計較小幅度改動，只有大幅度修改才計入，實務上很少遇到客戶爭議。" }
              ]
            },
            {
              topic: "中英文文章交期與合約調整",
              exchanges: [
                { speaker: "廖淑芬", role: "other", label: "小花", text: "建議將論述交期由 7 個工作天延長至 15 個工作天，因 AI 輔助產出初稿需更多時間。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "延長交期合理，因客戶工作量轉移至公司，需調整合約交期。需明確告知客戶 AI 撰寫的意涵，避免期待完美稿件。" },
                { speaker: "蔡阿達", role: "ada", text: "中文文章可改一次，英文文章不提供修改。AI 可理解不同語言內容，中文規劃流程可用於英文文章產出。" }
              ]
            },
            {
              topic: "Cloud 平台技能開發與協作",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "爬蟲功能可做成 Cloud 技能，我下週完成開發。已抓取近百家客戶網站內容，會整理分享給小花使用。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "Cloud 平台比 ChatGPT 更適合任務處理，建議團隊成員皆開設帳號。爬取資料工作由業務負責，文案只需使用。" },
                { speaker: "廖淑芬", role: "other", label: "小花", text: "目前使用公司帳號無法分享，建議由 MIS 開設專用帳號。" }
              ]
            }
          ]
        },
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
      name: "NOUVA — 語言學習平台 GEO 方案合作",
      icon: "🌍",
      category: "client",
      lastUpdated: "2026-05-22",
      summary: "5/22 關鍵字策略重新定位 — 聚焦臺灣市場 3~4 主題、延伸 20~40 關鍵字，法語與英語並重（比例 3:1 或 3:2），成人與兒童產品線皆涵蓋；蔡阿達將製作關鍵字拓展報表",
      keyPoints: [
        "英語市場規模比法文大<strong>10-20 倍</strong>，決定優先推動英語課程",
        "定位「主題式英語口說」（Workshop / EMI），非傳統補習班",
        "中文內容需搬移至新站（MARS），做 <strong>301 轉址</strong>移轉權重",
        "原兩年法文 SEO 合約需暫停調整方向",
        "🆕 5/22 臺灣市場為主，聚焦 <strong>3~4 個主題</strong>，延伸出約 <strong>20~40 個關鍵字</strong>",
        "🆕 5/22 法語與英語並重，英語與法語比例約 <strong>3:1 或 3:2</strong>",
        "🆕 5/22 成人與兒童兩大類別，兒童英語與法語可合併分類",
        "🆕 5/22 英語口語表達為精準關鍵字方向，符合 NOUVA 情境式英語主題課定位",
        "🆕 5/22 品牌轉型提醒 — AI 與搜尋引擎目前認定 NOUVA 為<strong>法語教學機構</strong>，轉型需時間投入",
        "🆕 5/22 以中文內容推廣教育理念，強調 <strong>EMI 教學法</strong>與英語口語表達"
      ],
      chips: [
        { icon: "📊", text: "市場差距 10-20x" },
        { icon: "🔑", text: "20-40 關鍵字" },
        { icon: "🗂️", text: "3-4 主題" },
        { icon: "🌐", text: "英法比 3:1" }
      ],
      todos: [
        { owner: "蔡阿達", text: "製作包含法語與英語主題的關鍵字拓展報表，提供 3~4 個主題方向及 20~40 個延伸關鍵字", priority: "today" },
        { owner: "蔡阿達", text: "協助挑選關鍵字主題，確保集中於少數主題以提升搜尋排名機會", priority: "week" },
        { owner: "蔡阿達", text: "以中文內容設計推廣策略，強調 EMI 教學法與英語口語表達", priority: "week" },
        { owner: "Janet Lin", text: "確認產品線定位，明確區分成人與兒童課程，決定法語與英語佔比", priority: "week" },
        { owner: "Janet Lin", text: "評估英語口語主題市場需求，配合蔡阿達調整關鍵字策略", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-05-22",
          title: "NOUVA 官網 GEO 方案合作狀況與資訊同步",
          time: "13:00-13:41",
          duration: "41m",
          participants: "蔡阿達、Janet Lin",
          docUrl: "",
          dialogues: [
            {
              topic: "關鍵字選擇策略與主題框架",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "目前關鍵字排名方式可能讓客戶誤解，建議從客戶目標族群出發，先選擇廣義且難度較高的關鍵字，再延伸出 5 至 10 組相關關鍵字形成主題群。關鍵字需集中 3~4 個主題，避免過於分散。" },
                { speaker: "Janet Lin", role: "other", label: "NOUVA", text: "公司目前主打法語教學，未來計畫擴展至多語言學習平台，短期先以臺灣市場為主。英語口語表達是精準且有搜尋量的關鍵字方向，符合公司強調的情境式英語主題課。" },
                { speaker: "蔡阿達", role: "ada", text: "將請 AI 協助拓展關鍵字報表，涵蓋英語口語、EMI 等方向，並提供多個主題供 Janet 評估挑選。" }
              ]
            },
            {
              topic: "品牌定位轉型與長期策略",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "若要擴展英語課程，需重新定位品牌形象，目前 AI 與搜尋引擎認定公司為法語教學機構，轉型需投入時間與資源。" },
                { speaker: "Janet Lin", role: "other", label: "NOUVA", text: "EMI 搜尋量不高，願意以英語口語作為主要關鍵字方向。長遠目標是多語言學習平台，短期法語與英語並重，以中文內容推廣教育理念。" }
              ]
            }
          ]
        },
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
      lastUpdated: "2026-05-19",
      summary: "5/19 蔡阿達推動 Pipeline 策略調整 — 聚焦增加商機數量，要求業務每日更新 HubSpot 0-10% 階段數據，啟動 Slack 每日早晨提醒機制；商機篩選與許願池機制優化中",
      keyPoints: [
        "新增 Deal Type：<strong>GO 顧問方案 / GO 工具方案 / GU 相關選項</strong>；AE 在 Close ON 階段必填",
        "<strong>以公司為主體建立資料庫</strong>：客戶健檢報告、關鍵字拓展表格等四份報告放置 Company Property，供 AE、CS、關鍵字拓展團隊共用",
        "蔡阿達主導報告產出流程，全站內容 markdown 放置 hotspot 平台",
        "楊舒涵整合兩支 workflow，商機建立時<strong>自動關聯公司資料</strong>，解決空公司問題",
        "Shopline 匯款無新更新；SEO APP 與 AMP 共用，未來新增 SEO 人工智慧 APP",
        "🆕 5/19 Pipeline 策略聚焦<strong>增加商機數量</strong>，避免花過多時間在少數大案",
        "🆕 5/19 要求業務<strong>每日更新 HubSpot</strong> 中 0-10% 階段 pipeline 數據",
        "🆕 5/19 啟動 <strong>Slack 每日早晨提醒</strong>機制，促使業務查看與更新 pipeline",
        "🆕 5/19 推動使用 Cmeet 會議記錄工具，利用<strong> AI 整理共通問題</strong>與資源共享",
        "🆕 5/19 商機篩選品質參差，蔡阿達<strong>先行分析商機真實需求</strong>後再交 AE 跟進",
        "🆕 5/19 <strong>許願池機制</strong>：短期無法跟進但有潛力的商機由 Irene 持續聯絡與挖掘"
      ],
      chips: [
        { icon: "📊", text: "GEO Deal 15筆" },
        { icon: "💬", text: "90 Prompt" },
        { icon: "🏷️", text: "Deal Type GU 新增" },
        { icon: "🆕", text: "Pipeline 每日更新" }
      ],
      todos: [
        { owner: "蔡阿達", text: "持續產出並更新每個客戶健檢報告、關鍵字拓展表格等，以連結形式放置 Company Property", priority: "week" },
        { owner: "蔡阿達", text: "將全站內容 markdown 版資料放置 hotspot 平台，方便團隊使用", priority: "week" },
        { owner: "蔡阿達", text: "明確定義並通知 AE/CS 各欄位資料存放位置與使用方式", priority: "week" },
        { owner: "楊舒涵", text: "合併兩支 workflow，新增商機建立時自動綁定公司資料功能，最小改動不影響行銷表單", priority: "week" },
        { owner: "楊舒涵", text: "將 GU 相關 Deal Type 選項調整至下拉選單前端，並提醒 AE 在 Close ON 必填", priority: "week" },
        { owner: "呂紹平", text: "協調新增 SEO APP 上架，與 Dandy 確認 SEO 服務客戶帳單及 APP 使用狀況", priority: "waiting" },
        { owner: "蔡阿達", text: "整理客戶常見問題 FAQ 表格", priority: "week" },
        { owner: "Anne", text: "約時間討論 CS 相關流程與條款細節", priority: "waiting" },
        { owner: "蔡阿達", text: "統計並追蹤 0-30% 階段 pipeline 狀況，確保數據完整", priority: "week" },
        { owner: "各業務", text: "每日更新 HubSpot 系統中的 pipeline 資料並回應 Slack 提醒", priority: "week" },
        { owner: "蔡阿達", text: "與行銷團隊協調爭取更多商機資源支持業務目標", priority: "week" },
        { owner: "蔡阿達", text: "下週與安祖林討論商機分配流程與許願池管理優化", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-19",
          title: "AE Team 週會 — Pipeline 策略調整",
          time: "16:45-18:07",
          duration: "1h22m",
          participants: "蔡阿達、溫妮、李陽、Joanna、Irene、艾雲、Daisy、呂紹平、麥克、安祖林",
          docUrl: "",
          dialogues: [
            {
              topic: "Pipeline 管理與業務策略調整",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "目前公司目標高且獎金池充足，現階段策略應聚焦增加商機數量，避免花過多時間在少數大案上。業務應積極反映商機不足以便行銷與管理層協助。" },
                { speaker: "蔡阿達", role: "ada", text: "要求業務每日更新 HubSpot 中 0-10% 階段的 pipeline 數據，將透過 Slack 每日早晨提醒查看與更新。推動使用 Cmeet 會議記錄工具，方便管理層掌握案子狀況。" }
              ]
            },
            {
              topic: "商機篩選與許願池機制優化",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "Irene 負責的商機篩選品質參差，建議由蔡阿達先行分析商機真實需求，讓 AE 專注跟進與成交。短期無法跟進但有潛力的商機放入許願池，由 Irene 持續聯絡與挖掘。" },
                { speaker: "蔡阿達", role: "ada", text: "計劃下週與安祖林開會討論商機分配流程與許願池管理優化。" }
              ]
            }
          ]
        },
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
      lastUpdated: "2026-05-27",
      summary: "5/27 遙空映畫與蔡阿達討論醫療及企業品牌 SEO 合作，確認醫療類客戶適合導入 AI 推薦；MarsZ Chen 展示 AI 網站設計（恆興診所已上線）與自動化上稿流程；雙方同意 AI 能見度分析報告作為業務前哨站提升提案成功率",
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
        "🆕 選舉產業鏈合作：成員互相引薦高雄與臺南政治人物資源",
        "🆕 4/29 協助<strong>王俊智（The Lavoria）微針貼片品牌</strong>規劃臺灣市場策略，背後有上櫃公司朗奇支持",
        "🆕 品牌策略建議：聚焦<strong>微針貼片</strong>為首推產品，考慮自有品牌與代理產品<strong>分開官網經營</strong>",
        "🆕 社群建議以 <strong>IG 為主</strong>，官網為核心容器，強化品牌故事、產品安全認證與內容豐富度",
        "🆕 蔡阿達提出協助尋找市場知名品牌進行<strong>免費 AI 口碑合作</strong>，Charles 可對接南煙堂行銷窗口",
        "🆕 徐嘉祥會計師提供<strong>額外稅務諮詢</strong>資源，可協助解決國稅局查核案件",
        "🆕 5/6 建立<strong>每週客戶案例分享機制</strong>：每人每週帶一間客戶上線討論，促進資源交換與合作",
        "🆕 5/6 華翼品牌形象設計<strong>2026 年不再接單件設計</strong>，專注整體品牌顧問案，印刷服務持續（AI 難以取代）",
        "🆕 5/6 華翼分享<strong>鼎新 ERP × AI 引擎串接</strong>百萬等級案例，凸顯 AI 在企業數位轉型的高商業價值",
        "🆕 5/6 目標客戶群：<strong>傳統產業工廠、美容代工廠、食品代工廠</strong>，有數位轉型需求且需整套品牌服務",
        "🆕 5/6 蔡阿達分享義守大學洽談經驗：大型體制公司<strong>資料整理與傳播</strong>為 AI 切入點",
        "🆕 5/6 蔡阿達將為<strong>甲山林建設爭取 SEO 案</strong>，華翼承諾負擔高鐵交通費",
        "🆕 5/6 選舉產業整合：MarsZ Chen 議員官網及<strong>募資頁設計</strong>、華翼負責選舉印刷（扇子/筆/便條紙等）、遙空映畫行銷公司合作",
        "🆕 5/6 蔡阿達與 MarsZ Chen 確認博弈網站需求 → 已移至獨立專案「德州撲克教學網站」",
        "🆕 5/7 任昌明主題簡報演練 — <strong>30 年標籤印刷經驗</strong>，投入 30 萬元測色儀器，95% 色彩相似度",
        "🆕 5/7 任昌明目標客群：<strong>螺絲工廠、玻璃瓶/塑膠瓶/化工類產品</strong>，提供免費數位打樣降低客戶設計成本",
        "🆕 5/7 蔡阿達肯定簡報流暢度（約 5 分 40 秒），建議強化<strong>夢幻引薦</strong>部分，具體列出理想客戶",
        "🆕 5/7 蔡阿達將協助詢問<strong>螺絲工廠朋友</strong>引薦給任昌明",
        "🆕 5/7 預計<strong>下下週完成最終演練</strong>，下週四晚上再次練習",
        "🆕 5/13 正式啟動<strong>每週客戶分享機制</strong>，成員輪流分享手上客戶尋找合作機會",
        "🆕 5/13 蔡阿達分享<strong>教育機構客戶</strong>（已有 IP 概念），與 Mars 合作提案網站重建與 AI 問答整合",
        "🆕 5/13 遙空映畫可協助拍攝<strong>線上課程及學校形象影片</strong>，蔡阿達將向客戶推薦",
        "🆕 5/13 Adam 分享<strong>膠原蛋白傳產二代接班人</strong>客戶，計劃聚焦核心服務並轉介可接案部分",
        "🆕 5/13 數位巴克斯分享<strong>全國機車銷售客戶</strong>，擴展馬來西亞市場並開發報價系統",
        "🆕 5/13 遙空映畫持續<strong>屏東縣王船館文化影片</strong>長期合作（每四個月更換主題），客戶滿意已敲下一案",
        "🆕 5/13 Karen Hsu 推廣<strong>醫師自媒體短影音及個人 IP 服務</strong>，連鎖集團客戶有需求",
        "🆕 5/13 遙空映畫介紹<strong>中華電信總公司新軟體參展案</strong>（多系統監控，已銷售臺鐵），雙方可互相介紹客戶",
        "🆕 5/13 教育機構<strong>公共事務處長離職</strong>轉任另一國立學校，已做好交接仍有合作機會",
        "🆕 5/20 蔡阿達向 Mars 介紹 awoo 新內容服務方案 — 原價 <strong>35,000 元/月</strong>，合作價 <strong>25,000 元/月</strong>",
        "🆕 5/20 服務含文章撰寫（年約 20 篇：10 篇團隊 + 7 篇 AI 輔助 + 3 篇規劃）+ <strong>AI 推薦五大指標追蹤</strong>",
        "🆕 5/20 追蹤指標含<strong>品牌被提及次數、引用率、競品比較</strong>，可查看 AI 回答中引用的具體網頁內容",
        "🆕 5/20 MarsZ Chen 展示 <strong>GA/GSC 自動化流量分析系統</strong>，依週期自動產出報告含 AI 摘要",
        "🆕 5/20 流量分析服務收費：舊客戶不加價，新客戶基本月費約 <strong>500 元</strong>，含社群分析最高 <strong>1,500 元</strong>",
        "🆕 5/20 MarsZ Chen 計劃串接 <strong>Meta 後臺數據</strong>與廣告數據，Adam 建議參考國外已有串接方案",
        "🆕 5/20 貳捌介紹<strong>社群顧問服務</strong> — 企業內訓課程每小時 5,000-8,000 元，含策略制定與內容創作",
        "🆕 5/20 貳捌計劃將預錄課程<strong>商品化</strong>，在官網提供線上刷卡觀看功能，預計下半年推廣",
        "🆕 5/20 Adam Chen 分享<strong>企業顧問服務</strong>（產銷人發財五面向），結合 BNI 夥伴資源提供全方位支持",
        "🆕 5/20 蔡阿達預期 awoo 內容服務可服務<strong>一兩百間客戶</strong>，報告當天下午兩點前可產出",
        "🆕 5/27 遙空映畫分享<strong>南亞科技（ESG 影片）</strong>及<strong>中華電信子公司（AI 監控系統影片）</strong>兩個大客戶案，可延伸 SEO 合作",
        "🆕 5/27 醫療產業（院長/牙醫）多自行撰寫內容且少用 AI 推廣，為導入 awoo SEO 及 AI 推薦的<strong>藍海市場</strong>",
        "🆕 5/27 蔡阿達強調<strong>品牌履歷</strong>概念 — AI 根據品牌成就及案例推薦，品牌履歷完整度影響 AI 推薦結果",
        "🆕 5/27 AI 能見度分析報告作為 SEO 服務<strong>前哨站</strong>：先用報告展示競爭對手分析，再順勢推動 SEO 優化或網站改版",
        "🆕 5/27 MarsZ Chen 已完成<strong>恆興診所 AI 設計網站</strong>上線，並建立 VI 設計系統與多語系自動化流程",
        "🆕 5/27 MarsZ Chen 正開發<strong>上稿自動化流程</strong>，目標從設計稿到網站上線全自動化",
        "🆕 5/27 蔡阿達表示未來<strong>不再做包套網站方案</strong>，改由客戶直接與 MarsZ Chen 洽談設計，蔡阿達負責 SEO 與品牌策略",
        "🆕 5/27 建議客戶將影片上傳至 <strong>YouTube 而非 Vimeo</strong>，有助 SEO 及 AI 推薦；影片內容可轉換成文字增強 SEO"
      ],
      chips: [
        { icon: "📅", text: "每週三 13:00" },
        { icon: "👥", text: "10+ 位成員" },
        { icon: "🔗", text: "客戶分享機制" },
        { icon: "🤖", text: "LLM 引薦系統" },
        { icon: "💰", text: "內容方案 25K/月" }
      ],
      todos: [
        { owner: "蔡阿達", text: "提供 AI 能見度分析報告給遙空映畫，協助提案時展示競爭對手與品牌現況", priority: "today" },
        { owner: "蔡阿達", text: "提供填寫網址與 email 的表單給團隊，方便收集客戶資料並生成報告", priority: "today" },
        { owner: "遙空映畫", text: "將醫療 / 企業品牌客戶網址提交給蔡阿達，利用 AI 報告提升提案說服力", priority: "week" },
        { owner: "MarsZ Chen", text: "持續訓練 AI 設計系統，完成網站設計稿並推動多語系自動化轉換", priority: "week" },
        { owner: "MarsZ Chen", text: "開發並優化自動化上稿流程，實現網站內容快速上線", priority: "week" },
        { owner: "MarsZ Chen", text: "設計 GA/GSC 報告定價方案（月費 500 元 / 單次 2,000 元），推動服務推廣", priority: "week" },
        { owner: "蔡阿達", text: "協助遙空映畫將影片內容轉換成文字，建議客戶上傳至 YouTube 利於 AI 推薦", priority: "week" },
        { owner: "蔡阿達", text: "持續召集 FUZEN 行銷小聚，主動媒合成員專長與客戶需求", priority: "week" },
        { owner: "蔡阿達", text: "提供免費網站體質健檢服務給 FUZEN 成員轉介的客戶", priority: "week" },
        { owner: "蔡阿達", text: "持續更新大語言模型引薦系統，整合每週專題簡報內容", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-27",
          title: "FUZEN 行銷小聚 05/27 — 醫療 SEO × AI 能見度報告 × AI 網站設計",
          time: "13:02-13:40",
          duration: "38m",
          participants: "蔡阿達、遙空映畫（韋翰）、MarsZ Chen",
          docUrl: "",
          dialogues: [
            {
              topic: "醫療及企業品牌 SEO 合作機會",
              exchanges: [
                { speaker: "遙空映畫", role: "other", label: "影片", text: "醫療院長多自行撰寫內容，牙醫客戶情況類似，且醫療類少用 AI 做推廣，適合導入 AI 推薦。另分享兩個剛成交的大客戶案：南亞科技 ESG 影片及中華電信子公司 AI 監控系統影片行銷。" },
                { speaker: "蔡阿達", role: "ada", text: "會協助寫文章及網站改版，若客戶無人力可開後台操作。品牌履歷很重要，AI 會根據品牌成就及案例推薦。建議影片上傳至 YouTube 而非 Vimeo，有助 SEO 及 AI 推薦。" },
                { speaker: "遙空映畫", role: "other", label: "影片", text: "認同影片及 SEO 結合可增加客戶信任與提案成功率，但部分客戶因商業考量不願上傳 YouTube，多用 Vimeo。" }
              ]
            },
            {
              topic: "AI 能見度分析報告作為業務前哨站",
              exchanges: [
                { speaker: "MarsZ Chen", role: "other", label: "網站", text: "客戶授權後系統自動抓取 GA/GSC 數據並生成量化與文字化分析報告，包含流量、關鍵字排名變化及競爭對手分析。定價月費約 500 元，單次報告 2,000 元。" },
                { speaker: "蔡阿達", role: "ada", text: "此報告可作為 SEO 服務的前哨站與引薦工具，先用報告展示客戶現況與競爭對手分析，再順勢推動 SEO 優化或網站改版服務。" },
                { speaker: "遙空映畫", role: "other", label: "影片", text: "計畫在提案前先取得報告，向客戶展示競爭對手分析與 AI 能見度，增加提案說服力。" }
              ]
            },
            {
              topic: "AI 網站設計與自動化流程開發",
              exchanges: [
                { speaker: "MarsZ Chen", role: "other", label: "網站", text: "AI 設計工具可根據客戶 VI 自動生成設計系統（色彩、字體、排版）。恆興診所 AI 設計網站已上線，正開發上稿自動化流程，目標從設計稿到上線全自動化。" },
                { speaker: "蔡阿達", role: "ada", text: "未來不再做包套網站方案，改由客戶直接與 MarsZ Chen 洽談設計，蔡阿達負責 SEO 與品牌策略，形成分工合作模式。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-20",
          title: "FUZEN 行銷小聚 05/20 — 內容服務方案 × 流量分析 × 社群顧問",
          time: "12:33-13:51",
          duration: "1h18m",
          participants: "蔡阿達、MarsZ Chen、Adam Chen、貳捌",
          docUrl: "",
          dialogues: [
            {
              topic: "awoo 內容服務方案介紹與合作模式",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "介紹新服務方案 — 幫客戶撰寫文案並追蹤 AI 推薦與引用機會。原底價 35,000 元/月，合作價可降至 25,000 元/月，最短合作期限視搭配建站而定。" },
                { speaker: "蔡阿達", role: "ada", text: "服務包含五大指標追蹤：品牌被提及次數、引用率及競品比較，可查看 AI 回答中引用的具體網頁內容。一年產出約 20 篇文章。" },
                { speaker: "MarsZ Chen", role: "other", label: "網站", text: "服務可搭配網站流量分析，並提供客戶後臺教學，協助設定 GA 與 GSC，定期自動產出流量與 SEO 報告。" }
              ]
            },
            {
              topic: "GA/GSC 自動化流量分析系統展示",
              exchanges: [
                { speaker: "MarsZ Chen", role: "other", label: "網站", text: "網站後臺可設定 GA 與 GSC ID，自動抓取流量與 SEO 數據，依設定週期產出報告含 AI 摘要。服務收費：舊客戶不加價，新客戶基本月費約 500 元，含社群分析最高 1,500 元。" },
                { speaker: "蔡阿達", role: "ada", text: "此分析工具可與客戶現有服務結合，提升毛利與服務價值，鼓勵團隊將客戶需求與 Mars 的技術端結合。" },
                { speaker: "Adam Chen", role: "other", label: "成員", text: "建議參考國外已有的 Meta API 串接方案以提升效率。" }
              ]
            },
            {
              topic: "社群顧問服務與企業顧問介紹",
              exchanges: [
                { speaker: "貳捌", role: "other", label: "社群", text: "社群顧問服務包含策略制定、內容創作與投放管理。內訓課程每小時 5,000-8,000 元，含課程資料與宣傳素材。計劃將預錄課程商品化，在官網提供線上刷卡觀看。" },
                { speaker: "Adam Chen", role: "other", label: "成員", text: "企業顧問服務涵蓋產銷人發財五面向，結合 BNI 夥伴資源提供全方位支持。呼籲團隊協助引薦食品、美容代工廠及傳產二代客戶。" },
                { speaker: "蔡阿達", role: "ada", text: "鼓勵成員將有架站需求的客戶引薦給 Mars，並利用新內容生成與 AI 追蹤服務提升客戶價值。預期可服務一兩百間客戶。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-13",
          title: "FUZEN 行銷小聚 05/13 — 每週客戶分享啟動",
          time: "13:01-13:46",
          duration: "45m",
          participants: "蔡阿達、遙空映畫（韋翰）、Adam、數位巴克斯（恒丰）、Charles Jhang、Karen Hsu（凱倫）、Mars",
          docUrl: "",
          dialogues: [
            {
              topic: "每週客戶分享機制啟動與教育機構合作",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "未來每週以分享手上客戶為主，藉此找出共通客戶與合作機會。分享一教育機構客戶已有 IP 概念，需求從 SEO 轉向網站重建與 AI 問答整合，由我與 Mars 合作提案。" },
                { speaker: "遙空映畫", role: "other", label: "影片", text: "可協助拍攝線上課程及學校形象影片，過去有拍攝主廚線上課程宣傳影片的案例。" },
                { speaker: "蔡阿達", role: "ada", text: "會向客戶推薦遙空映畫的拍攝資源。教育機構公共事務處長雖已離職，但轉任另一國立學校且已做好交接，仍有合作機會。" }
              ]
            },
            {
              topic: "傳產客戶開發與跨區市場拓展",
              exchanges: [
                { speaker: "Adam", role: "other", label: "成員", text: "客戶為膠原蛋白產業傳產二代接班人，缺乏電商拍照、社群行銷與廣告整合服務，計劃聚焦核心服務，可接案部分轉介團隊。" },
                { speaker: "數位巴克斯", role: "other", label: "巴克斯", text: "分享全國機車銷售客戶，正準備擴展馬來西亞市場並開發報價系統，邀請團隊協助研究與引薦。" },
                { speaker: "Karen Hsu", role: "other", label: "凱倫", text: "推動連鎖集團客戶個人 IP 計劃，承接醫師自媒體短影音製作案例，可接品牌自媒體及醫師相關案子。" }
              ]
            },
            {
              topic: "文化合作與中華電信軟體參展",
              exchanges: [
                { speaker: "遙空映畫", role: "other", label: "影片", text: "屏東縣王船館文化影片為長期計劃，每四個月更換主題，已獲客戶滿意並敲定下一案。另介紹中華電信總公司新軟體參展案，可同步監控多系統，已銷售給臺鐵。" },
                { speaker: "蔡阿達", role: "ada", text: "鼓勵團隊邀請客戶參加行銷小聚，針對網站提供專業建議增加合作機會。保留每週三的時間，藉由團隊合作提升客戶服務品質與效益。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-07",
          title: "任昌明主題簡報演練",
          time: "13:00-13:16",
          duration: "16m",
          participants: "蔡阿達、任昌明",
          docUrl: "",
          dialogues: [
            {
              topic: "包裝貼紙供應鏈簡報演練與回饋",
              exchanges: [
                { speaker: "任昌明", role: "other", label: "成員", text: "公司擁有約30年標籤印刷經驗，投入約30萬元的測色儀器，能有效降低色差，確保印刷品質穩定。主要服務客群為玻璃瓶、塑膠瓶及化工類產品，以螺絲工廠為目標市場，能依客戶烤漆顏色調整印刷油墨比例，達到約95%色彩相似度。" },
                { speaker: "蔡阿達", role: "ada", text: "肯定簡報流暢度，演練時間約5分40秒，主要因操作簡報切換及現場環境干擾。建議夢幻引薦部分更具體列出理想企業及客戶，並分享可協助引薦螺絲工廠朋友資源。" },
                { speaker: "任昌明", role: "other", label: "成員", text: "提供免費數位打樣服務，能降低客戶設計成本並測試黏著度，避免因色差導致違約金及退貨風險。將依建議調整簡報內容，下週四晚上再次練習，預計下下週完成最終演練。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-06",
          title: "FUZEN 行銷小聚 05/06",
          time: "12:58-13:47",
          duration: "49m",
          participants: "蔡阿達、華翼品牌形象設計、遙空映畫（韋翰）、MarsZ Chen",
          docUrl: "",
          dialogues: [
            {
              topic: "BNI 成員合作現況與客戶資源共享策略",
              exchanges: [
                { speaker: "華翼品牌形象設計", role: "other", label: "華翼", text: "主要角色是接案並挖掘客戶需求，BNI 價值在於會員表現與案子介紹。客戶多為傳統產業工廠、美容代工廠及食品代工廠，有數位轉型需求。" },
                { speaker: "蔡阿達", role: "ada", text: "大型體制公司資料整理與傳播是 AI 可協助的切入點，建議尋找成本低且能解決客戶問題的方案。每週線上小聚每人帶一間客戶案例上線分享，促進合作與資源交換。" },
                { speaker: "遙空映畫", role: "other", label: "影片", text: "支持每週客戶案例分享方案，建議分享過去或正在服務的客戶案例，上線成員會積極分享資源。" }
              ]
            },
            {
              topic: "AI 技術應用與品牌顧問服務轉型",
              exchanges: [
                { speaker: "華翼品牌形象設計", role: "other", label: "華翼", text: "2026 年公司不再接單件設計，僅承接整體品牌顧問案。印刷服務持續，因不易被 AI 取代。與鼎新 ERP 串接 AI 引擎的案子金額達數百萬。" },
                { speaker: "蔡阿達", role: "ada", text: "認同 AI 加速工作效率，願意將相關 AI 工作流技術轉介給華翼，促進成員間技術交流與合作。" }
              ]
            },
            {
              topic: "選舉行銷與重要客戶接洽",
              exchanges: [
                { speaker: "MarsZ Chen", role: "other", label: "網站", text: "已為多位議員設計官網及募資頁，募資頁分純募款與小物銷售，並與文創小物業者合作。" },
                { speaker: "華翼品牌形象設計", role: "other", label: "華翼", text: "選舉年印刷需求大，已接多案，將帆布印刷轉給羽傑，自己專注其他印刷品。" },
                { speaker: "蔡阿達", role: "ada", text: "將為甲山林建設爭取 SEO 案子，願意為成員跑臺北洽談。明天與 MarsZ Chen 確認博弈網站潛在客戶需求。" }
              ]
            }
          ]
        },
        {
          date: "2026-04-29",
          title: "FUZEN 行銷小聚 04/29",
          time: "13:00-13:46",
          duration: "46m",
          participants: "蔡阿達、王俊智（The Lavoria）、遙空映畫（韋翰）、華翼、Charles Jhang、徐嘉祥（會計師）、Karen Hsu（凱倫）",
          docUrl: "",
          dialogues: [
            {
              topic: "微針貼片品牌策略與官網經營",
              exchanges: [
                { speaker: "王俊智", role: "other", label: "品牌", text: "品牌主力在臺灣、日本及馬來西亞，微針貼片產品在臺灣市場稀少，期望聚焦臺灣市場推廣。背後有上櫃公司朗奇支持，擁有專業研發團隊。" },
                { speaker: "華翼", role: "other", label: "設計", text: "若主打品牌應專注於 The Lavoria，避免產品線過多造成品牌模糊。社群行銷重點放在 Instagram，官網內容豐富度與 SEO 優化很重要。" },
                { speaker: "蔡阿達", role: "ada", text: "將利用成功案例影片與專訪放在社群平台，由 Karen 規劃社群經營方向與發文頻率，預計半年後開始看到轉換率。" }
              ]
            },
            {
              topic: "官網與社群行銷預算規劃",
              exchanges: [
                { speaker: "遙空映畫", role: "other", label: "影片", text: "女性市場永遠不飽和，建議以影片行銷為主。保養品已有實體通路合作，建議微針貼片作為品牌首推產品，透過社群與廣告導流至官網。" },
                { speaker: "蔡阿達", role: "ada", text: "官網是品牌行銷的核心容器，需加強品牌故事、產品安全認證等內容建置與 SEO 優化，社群作為導流工具。" }
              ]
            },
            {
              topic: "攝影資源與品牌合作引薦",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "請團隊成員協助推薦市場上有知名度且關係良好的品牌，方便進行 AI 口碑提升合作。可免費為合作品牌做網路健檢，利用 AI 分析目標族群常見問題。" },
                { speaker: "Charles Jhang", role: "other", label: "攝影", text: "曾為南煙堂代言人拍攝照片，認識其行銷窗口，願意協助對接。機械類產品攝影需求穩定且難被 AI 取代。" },
                { speaker: "蔡阿達", role: "ada", text: "若君智缺乏專業商品攝影資源，可由 Charles 提供協助。提醒報價時需注意客戶預算限制，鼓勵結合 AI 技術提升攝影後製效率。" }
              ]
            }
          ]
        },
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
      lastUpdated: "2026-05-11",
      summary: "5/11 確認先走建站顧問方式推進合作 — 報價單分階段交付 AIO 健檢，L Taiwan 品牌授權條款定稿",
      keyPoints: [
        "Harry Wen 老闆擔心三個月後才有報告，影響總部決策 → <strong>分階段交付</strong>，每週/兩週回報",
        "蔡阿達承諾合作開始後 <strong>30 天內完成完整建議書</strong>，持續陪伴調整 AIO 引用問題",
        "合作案例定義：<strong>合作案例</strong>（非成功案例），避免其他廠商疑慮",
        "品牌授權限定 <strong>L Taiwan 商標</strong>，每次使用前甲方事前確認",
        "社群媒體宣傳採<strong>事前審核機制</strong>，避免法務擔憂頻率無法掌控",
        "電子簽核系統，Harry Wen 預計 4/2 下午完成回簽",
        "待確認 GEO Suite 中 GPT Gemini 是否包含 Google AIO 模組",
        "🆕 5/11 GEO GTM 會議確認赫斯特<strong>先走建站顧問</strong>方式推進合作"
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
      name: "愛貝斯（iBASE）— 合約終止協商與違約金評估",
      icon: "📋",
      category: "client",
      lastUpdated: "2026-05-27",
      summary: "5/27 客戶表達終止合約意願但尚未給出確定時間；Anne Chang 建議參考疫情期間特案免收違約金並要求重簽合約以維持商譽；藍文甫將親自前往客戶端了解真實意願與後續合作可能性",
      keyPoints: [
        "合約簽訂對象為<strong>愛斯柏（ISABEL）</strong>，但專案登記錯誤導致發票開給愛貝斯（iBASE），帳務無法對帳",
        "決議<strong>不重新簽約</strong>，改在變更協議中加入三方條款，明確由愛貝斯代替愛斯柏付款",
        "上半年服務至 1 月底，<strong>2 月起客戶暫停服務</strong>，發票已開至 3 月，需調整收入認列",
        "客戶未如期付款，口頭及 Line 提醒無效，決議發出<strong>正式存證信函</strong>催告",
        "客戶團隊已更換，法務認為新團隊應承擔前團隊合約責任",
        "🆕 5/18 藍文甫持續與愛貝斯溝通，<strong>延期時間尚未確認</strong>",
        "🆕 5/18 決定<strong>先獨立處理帳務問題</strong>，不與名目變更綁定，避免影響合約簽署",
        "🆕 5/18 將成立<strong>專門聊天室與會議室</strong>，邀相關人員並設定明確 deadline 加速處理",
        "🆕 5/27 客戶表達<strong>終止合約意願</strong>，但尚未給出確定終止時間",
        "🆕 5/27 Anne Chang 建議參考<strong>疫情期間特殊終止條款</strong> — 免收違約金但要求重簽合約，維持商譽",
        "🆕 5/27 藍文甫決定<strong>親自前往客戶端</strong>了解真實意願，評估後續合作可能性",
        "🆕 5/27 客戶對 <strong>SEO 關鍵字排名成效不滿</strong>，認為 GU 方案與預期不符，內容產出與期待落差",
        "🆕 5/27 若客戶堅持終止，需評估<strong>是否收取違約金或以特案維持商譽</strong>"
      ],
      chips: [
        { icon: "📝", text: "變更協議" },
        { icon: "💸", text: "未付款追蹤" },
        { icon: "⚖️", text: "違約金協商" },
        { icon: "🚨", text: "客戶擬終止" }
      ],
      todos: [
        { owner: "Eric Hsiao", text: "確認愛貝斯合約中解約條款並回覆客戶", priority: "today" },
        { owner: "藍文甫", text: "親自前往愛貝斯了解客戶真實意願及狀況", priority: "today" },
        { owner: "Anne Chang", text: "評估是否以特案免收違約金維持商譽，準備協商策略", priority: "today" },
        { owner: "Eric Hsiao", text: "整理並轉寄 2 月 20 日及 26 日 Henry 信件給蔡阿達及相關人員", priority: "today" },
        { owner: "Eric Hsiao", text: "確認客戶實際付款期數並回報團隊", priority: "week" },
        { owner: "Anne Chang", text: "確認系統報表 3 至 5 月均正常運作，確保服務未中斷", priority: "week" },
        { owner: "蔡阿達", text: "向客戶說明發票開立錯誤並重新開立正確發票", priority: "week" },
        { owner: "蔡阿達", text: "確認下半年發票開立對象及付款方", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-27",
          title: "力奇與愛貝斯 — 合約終止與違約金協商",
          time: "17:01-17:46",
          duration: "45m",
          participants: "蔡阿達、Anne Chang、Eric Hsiao、藍文甫（Leo）",
          docUrl: "",
          dialogues: [
            {
              topic: "愛貝斯合約終止與違約金討論",
              exchanges: [
                { speaker: "Eric Hsiao", role: "other", label: "PM", text: "客戶因無法給出確定終止時間，傾向先終止合約。客戶重視特定關鍵字排名，對 GU 方案不滿，且內容產出與預期不符。" },
                { speaker: "Anne Chang", role: "other", label: "PM", text: "疫情期間曾有免收違約金但需重簽合約的特殊條款，建議以此作為談判依據。若客戶堅持終止，需評估是否收取違約金或以特案維持商譽。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "認為客戶對服務不滿，SEO 方案未達預期。將親自前往客戶端處理，嘗試重建關係並評估後續合作可能性。" }
              ]
            }
          ]
        },
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
      lastUpdated: "2026-05-15",
      summary: "5/15 培訓計畫升級為雙週制 — 每週五交錯進行業務討論與讀書會；參與人數約 20 多位，需分 A/B 班；課程涵蓋績效考核、溝通、招募等主題；線上錄製免費提供",
      keyPoints: [
        "Max Huang 建議以<strong>線上課程</strong>進行主管培訓，避免傳統面授方式",
        "強調<strong>系統化學習</strong>的重要性，避免僅在遇到問題時才學習",
        "課程主題包含：銷售技巧、組織管理、績效管理及溝通技巧",
        "計畫與其他部門合作，擴大課程受眾及資源共享",
        "🆕 5/15 每週五主管培訓採<strong>雙週制交錯</strong>進行：一週業務討論、一週讀書會",
        "🆕 5/15 讀書會課程涵蓋<strong>績效考核、溝通、招募</strong>等主題，先行發送課程、下週交流",
        "🆕 5/15 參與人數預估約 <strong>20 多位</strong>，可能需分 A/B 班分批上課確保品質",
        "🆕 5/15 公司<strong>四層架構約 110 人</strong>，主管層級多達二十多位",
        "🆕 5/15 Max Huang 建議只邀請<strong>帶人數較多的主管</strong>參加，帶人少的可排除",
        "🆕 5/15 由<strong>福田協助篩選</strong>帶人數兩人以上的主管名單",
        "🆕 5/15 課程為<strong>線上錄製免費提供</strong>，避免高昂成本"
      ],
      chips: [
        { icon: "📚", text: "線上課程" },
        { icon: "🎯", text: "系統化學習" },
        { icon: "🤝", text: "跨部門合作" },
        { icon: "🔄", text: "雙週制交錯" },
        { icon: "👥", text: "分A/B班" }
      ],
      todos: [
        { owner: "Max Huang", text: "收集主管培訓需求並統整課程規劃", priority: "week" },
        { owner: "Max Huang", text: "安排主管參與線上課程並追蹤學習進度與回饋", priority: "week" },
        { owner: "Max Huang", text: "收集並確認參與主管名單，指派福田篩選帶人數兩人以上的主管", priority: "today" },
        { owner: "Max Huang", text: "安排線上錄製課程發放與讀書會時間表，根據人數決定是否分班", priority: "week" },
        { owner: "Max Huang", text: "下週開始執行雙週交錯業務會議與讀書會，持續更新課程內容", priority: "today" }
      ],
      meetingHistory: [
        {
          date: "2026-05-15",
          title: "Weekly Sync Up — 主管培訓雙週制與分班規劃",
          time: "10:31-11:03",
          duration: "32m",
          participants: "蔡阿達、Max Huang、藍文甫（Leo）",
          docUrl: "",
          dialogues: [
            {
              topic: "主管培訓計畫與讀書會安排",
              exchanges: [
                { speaker: "Max Huang", role: "other", label: "顧問", text: "每週五會議一小時，雙週交替進行業務討論與讀書會。讀書會課程先行發送，下一週進行內容交流。課程涵蓋績效考核、溝通、招募等主題。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "公司四層架構，約 110 人，主管層級多達二十多位。參與人數可能需分 A、B 班分批上課。" },
                { speaker: "Max Huang", role: "other", label: "顧問", text: "只邀請帶人數較多的主管參加，帶人少的可排除。由福田協助篩選帶人數兩人以上的主管名單。課程為線上錄製，免費提供，避免高昂成本。" }
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
      lastUpdated: "2026-05-29",
      summary: "5/29 Max Huang 提出品牌治理五步法新論述（品牌定位→內容渲染→資訊架構→信任網絡→監測），搭配七大服務模組與三種方案，團隊認同論述符合行銷語言；5/26 文案輕量方案定價確認每月 2.2-2.5 萬元",
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
        "🆕 提案報告優化：將論壇問題轉化為 AI 問題，<strong>追蹤 AI 答覆引用品牌內容</strong>",
        "🆕 4/29 Prompt 審核流程確立：<strong>客戶確認前需經審核</strong>，阿福負責開發審核工具判斷 Prompt 有效性及媒體文章分佈",
        "🆕 Prompt 來源三大管道：<strong>阿達、CS（10號產生器）、日本</strong>，未來安排分享各自優缺點",
        "🆕 新聞稿分兩類：一般稿內部處理，<strong>客製化稿外包紅雲</strong>；藍文甫帶小話拜訪宏文了解概念",
        "🆕 成效報告模板目標 <strong>5 月中推出</strong>，Anne 與 YC/阿福確認需求，阿福週五提供工具設計評估",
        "🆕 顧問服務流程會議調整為<strong>雙週一次，固定週二 14:00-15:00</strong>，聚焦流程清理及合約方案調整",
        "🆕 加購稅工具獎金調整中，<strong>Winnie 與麥可確認方案後公告</strong>，ACS 及 AE 已開始使用",
        "🆕 5/4 顧問書流程已由<strong>三位組長梳理完成</strong>，同步給專員執行，部分客戶已開始使用",
        "🆕 5/4 GEO 方案已推動約 <strong>8% 客戶（22 家/200+ 家）</strong>，需加速推廣",
        "🆕 5/4 Google 生態系引用率提升，<strong>YouTube 及 Reddit 授權內容</strong>為主要來源",
        "🆕 5/4 Chrome AI Mode 可抓取<strong>頁面上下文</strong>，提升內容關聯性",
        "🆕 5/4 中型文章搭配<strong>問句式小標題（≤60 字）</strong>有助 AI 爬蟲引用",
        "🆕 5/4 建議書以<strong>主題完整度優先</strong>，先完成一個主題再推下一個",
        "🆕 5/4 業務教育訓練文件從三頁<strong>濃縮至一頁</strong>，突出重點與方向",
        "🆕 5/4 Fenix Li 安排<strong>兩週一次會議</strong>，梳理工具與 GEO 方案整合",
        "🆕 5/11 阿福已開始開發 <strong>Prompt 分級機制工具</strong>，預計本週完成雛形，用於分析文章中可放置的 Prompt",
        "🆕 5/11 雅虎本週上線多篇延伸文章，合作分兩方向：<strong>廣編稿延伸多篇文章產生 Prompt</strong>，及從既有文章產生 Prompt 追蹤",
        "🆕 5/11 第三方合作四家（赫斯特、微紅、威宏、經緯），<strong>威宏與經緯已完成 Prompt 選擇並建置系統</strong>",
        "🆕 5/11 合作夥伴 Panel Logo 展示約<strong>五家</strong>，威宏與雅虎為代表性夥伴；凱絡及破博爆堂因高層因素無法提供",
        "🆕 5/11 <strong>KPMG 合作暫停</strong>，因內部換站及主管對 Logo 交換疑慮，款項未收回",
        "🆕 5/11 <strong>安可日子合作中斷</strong>，因人力交接及款項問題，需尋找更高層窗口協調",
        "🆕 5/11 大部分客戶偏好顧問方案，<strong>單獨購買 GEO Suite 工具意願低</strong>，價格約九千元仍超出預算",
        "🆕 5/11 <strong>金融業客戶較積極</strong>使用工具；AMP 客戶因線下營業額大缺乏急迫性；電商客戶價格敏感多觀望",
        "🆕 5/11 工具主要<strong>賦能 CS 與業務</strong>，提升服務信賴度及續約率，多與顧問案綁定銷售",
        "🆕 5/11 <strong>競爭分析功能</strong>預計本週四上線，涵蓋五大指標比較",
        "🆕 5/11 權限管理改版，使用者將以<strong>個人帳號登入</strong>，分類顧問與職課類型",
        "🆕 5/11 AI 化重點功能調整為<strong>聚焦數據事實分析</strong>，預警提示分三部分：雙下滑、提及率下滑、引用率下滑",
        "🆕 5/11 資料匯出功能設計中，支持 <strong>CSV 與 PDF 格式</strong>，可選擇匯出區塊",
        "🆕 5/11 Meta 廣告投放 GO Suite 及 GO 顧問方案，<strong>短影音素材四支完成</strong>，五月已開始投放",
        "🆕 5/11 將製作 <strong>Agency 專屬 Landing Page</strong>，蔡阿達負責雅虎及二十特推薦案例",
        "🆕 5/18 Google 系 AI 社群貼文應用較 GPT 更受青睞，操作模式包括<strong>切段多篇發佈與濃縮短文</strong>兩種方式",
        "🆕 5/18 品牌履歷迭代完成新格式，包含站內外引用、品牌緣起、團隊介紹及認證，設置<strong>佔位符方便專員替換</strong>",
        "🆕 5/18 春露合作 workshop 培訓計畫：<strong>連續 2-3 個月、約 8 場線上教育訓練</strong>，每場約一小時，目標完成品牌利益明確化",
        "🆕 5/18 藍文甫因時間考量尋求負責人接手品牌推動，主要受眾為 SGS 公案組及 AP 團隊",
        "🆕 5/18 迭代內容整合為<strong>一頁說明 + 一頁主題動作</strong>，預計週五完成更新交付 A 與 CS 團隊",
        "🆕 5/18 林思吾強調 Google AIO/AMO 搜索密度高，<strong>社群發文策略不可忽視</strong>",
        "🆕 5/19 Prompt 引用比例嚴格標準：<strong>10 個 Prompt 配 1 篇新聞稿（約 10%）</strong>，納入合約條款",
        "🆕 5/19 媒體與品牌來源比例約 60% 品牌 / 30% 媒體，遇比例相同時<strong>優先判斷為媒體來源</strong>",
        "🆕 5/19 Prompt 審核由<strong>業務主管（組長層級）</strong>負責，不走省制流程以縮短簽約時間",
        "🆕 5/19 Prompt 選擇需<strong>合約開始前完成</strong>，設定一個月內完成期限",
        "🆕 5/19 蔡阿達提議放寬 <strong>60% 大競爭字限制</strong>，林思吾認為限制有助設定合理期待",
        "🆕 5/19 蔡阿達強調業務會<strong>提前告知客戶關鍵字難度</strong>，根據網站內容分析推薦適合關鍵字",
        "🆕 5/19 三套 Prompt 工具整合版<strong>預計六至七月完成</strong>",
        "🆕 5/19 行銷資源盤點與檢核表需<strong>提前至合約洽談階段完成</strong>",
        "🆕 5/19 建站顧問合約策略調整：搭配<strong>純文案服務</strong>取代年約，可簽 6+12 或 6+18 個月方案",
        "🆕 5/19 蔡阿達推動<strong>審核流程調整專案</strong>，本週推動、下週二決案",
        "🆕 5/22 成效保證方案 — 設定<strong>半年檢視基準點</strong>，若未達標啟動 3 個月挽救期，最長 9 個月可解約",
        "🆕 5/22 品牌客戶銷售工具包 — Max Huang 分析競品五步驟品牌導入方法論，awoo 在 <strong>persona 與 user journey</strong> 設計上具優勢",
        "🆕 5/22 第三方客戶試用品牌追蹤方案 — 協調彤彤開設 Negation 賬號，提供 <strong>10 個 prompt 試用</strong>並追蹤三個月成效",
        "🆕 5/22 報價流程先行，特案合約條款後補；需法務及高層確認",
        "🆕 5/21 產品月會：<strong>權限管理系統正式上線</strong> — Org→Brand 兩層架構、四角色（System Admin/Org Admin/Editor/Viewer）、批次邀請最多 10 人",
        "🆕 5/21 MP 與 GEO 帳號<strong>不互通</strong>；業務主管 Org Admin 嚴禁邀請外部人員；Editor 無法自行調整 prompt 配額",
        "🆕 5/21 環球客戶 Search 功能異常（MR 約 10 萬），<strong>建議下次續約移除</strong>（MR 減少約 2-3 萬），Vivian 已開始暗示客戶",
        "🆕 5/21 Description Writer 日本 POC 客戶需依產業<strong>客製化 prompt</strong>，否則產出偏 B2C 風格；Q3 起投入 <strong>30-40% 資源</strong>優化 end-to-end 流程",
        "🆕 5/21 競品分析功能優化 — <strong>預設帶入高點擊競品</strong>降低手動搜尋負擔、新增<strong>別名搜尋</strong>功能",
        "🆕 5/21 <strong>More Sweet 工具</strong>（蔡阿達主導 MVP）：爬取客戶網站內容 → LoM 建立品牌 AI 知識庫 → 結合 prompt 生成文章，Q2-Q3 完成",
        "🆕 5/21 新 prompt 生成工具：整合 <strong>People Also Ask + User Profile + User Journey</strong> 四階段（Awareness→Consideration→Decision→Usage）",
        "🆕 5/21 回應明細將新增 AIO 的 <strong>People Also Ask 與引用來源段落</strong>關聯（預計數週內上線）",
        "🆕 5/21 <strong>Google I/O 2026</strong> 宣布七月起搜尋入口整合購物，awoo 技術時機符合市場節奏",
        "🆕 5/25 林思吾分析 Google I/O 2026 影響 — <strong>品牌如何被 AI 描述</strong>將成為關鍵，數位公關活動直接影響 AI 引用與推薦",
        "🆕 5/25 <strong>UCP 協議</strong>（Google/Amazon/Meta/Salesforce/微軟共同完成）— 電商必須整合 UCP 與 AP2 以支援 AI agent 購物",
        "🆕 5/25 awoo 應成為 UCP 協議<strong>關鍵中介者</strong>，協助電商客戶完成技術升級；系統商多老舊抗拒新技術",
        "🆕 5/25 <strong>MOPA 概念</strong>（AI 詢問後實體購買）— 用流量指標衡量 AI 成效是錯誤的，需重新思考品牌衡量標準",
        "🆕 5/25 Max 回饋競爭對手<strong>喬布鳥</strong>產品說明會 — 對方認為已落後 awoo 半年，需維持速度優勢",
        "🆕 5/25 蔡阿達報告半年業績 — <strong>平均客單價約 4 萬元</strong>作為商機換算基準，業務開發需與客服部門密切協作",
        "🆕 5/26 文案輕量方案定價確認：<strong>電商平臺方案與非電商平臺方案</strong>兩種，每月 <strong>2.2-2.5 萬元</strong>",
        "🆕 5/26 文案方案規格：<strong>12 篇文章（4 篇 AI + 8 篇人工）、4 份建議書</strong>，工具費約 6 千元綁定方案",
        "🆕 5/26 蔡阿達提出最小可行規格：10 關鍵字 / 20 Prompt；林思吾建議 <strong>15 關鍵字 / 45 Prompt</strong>",
        "🆕 5/26 呂紹平 Shopline 獨家方案參考：4 份建議書、10 篇文章、10 關鍵字，<strong>月費約 2.2 萬</strong>",
        "🆕 5/26 文案方案須包含<strong>技術建議</strong>（TD 修改、內部連結、schema 標記），避免僅成為寫文章服務",
        "🆕 5/26 低預算客戶月報改為<strong>季報</strong>以降低 CS 負擔，合約明確不提供客製化月報",
        "🆕 5/26 AMP 客戶引導至 GU 方案 — 以 <strong>ROP 配置</strong>挑選著陸頁，結合 AI 產文與 QA 模組降低負擔",
        "🆕 5/26 AMP 方案限定<strong>商品數至少 500 件</strong>且必須為 API 串接，執行週期 6 個月",
        "🆕 5/26 GU 方案<strong>三階段數據報告</strong>（期初/中期/期末），結案時提供續約方向建議",
        "🆕 5/26 5/27 安排 <strong>GU for MP 方案</strong>討論會議（11:30-12:00）",
        "🆕 5/29 Max Huang 提出<strong>品牌治理五步法</strong>：品牌定位→內容渲染→資訊架構→信任網絡→數據監測，目標讓 AI 看見、信任、推薦及選擇品牌",
        "🆕 5/29 五步法對應 <strong>15 項具體工作</strong>，由<strong>七大服務模組</strong>支援，形成完整品牌治理方案",
        "🆕 5/29 三種方案：<strong>免費品牌見診、品牌治理升級、代理商合作方案</strong>",
        "🆕 5/29 藍文甫表示此論述<strong>符合客戶語言</strong>，能提升 pitch 轉化率，結構清晰易懂",
        "🆕 5/29 蔡阿達認同論述合理，強調先從品牌定位談起的重要性，awoo 專注<strong>將品牌故事轉化為 AI 可理解架構</strong>",
        "🆕 5/29 Max 將加入 <strong>Google I/O 最新技術資訊</strong>，階段由三個調整為四個（增加選擇度）"
      ],
      chips: [
        { icon: "💰", text: "GO 3.3-7.3萬" },
        { icon: "📝", text: "文案方案 2.2-2.5萬" },
        { icon: "📅", text: "約訪 週二 11-12" },
        { icon: "📝", text: "10 Prompt:1 新聞稿" },
        { icon: "🆕", text: "工具整合 6-7月" },
        { icon: "🔐", text: "權限管理上線" },
        { icon: "🛠️", text: "More Sweet MVP" },
        { icon: "📊", text: "AMP→GU 引導" }
      ],
      todos: [
        { owner: "Fenix Li", text: "週五完成迭代內容更新（一頁說明 + 一頁主題動作）並交付 A 與 CS 團隊", priority: "today" },
        { owner: "藍文甫", text: "提供春露品牌訓練工作坊細節資料給林思吾", priority: "week" },
        { owner: "林思吾", text: "審閱品牌工作坊資料後指派合適夥伴接手推動", priority: "week" },
        { owner: "林思吾", text: "落實社群發文規劃，明確指定發文平台與關鍵字策略", priority: "week" },
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
        { owner: "蔡阿達", text: "建立 AI 應用頻道，協助命名頻道與設置作者介紹", priority: "week" },
        { owner: "蔡阿達", text: "與藍文甫討論如何縮短客戶端 Prompt lead time", priority: "week" },
        { owner: "阿福", text: "開發 Prompt 審核工具，判斷 Prompt 有效性及媒體文章分佈", priority: "week" },
        { owner: "Anne Chang", text: "5 月中前完成成效報告模板推出，先與 YC 及阿福確認需求", priority: "week" },
        { owner: "藍文甫", text: "下週帶小話拜訪宏文了解新聞稿概念，並與紅雲討論客製化稿外包流程", priority: "week" },
        { owner: "Fenix Li", text: "與 Leo 及小花確認跨部門合作流程細節", priority: "week" },
        { owner: "Anne Chang", text: "與 Winnie 確認加購稅工具獎金調整方案並公告", priority: "today" },
        { owner: "Fenix Li", text: "與帕爸及系統團隊排定梳理工具與 GEO 方案整合時程", priority: "week" },
        { owner: "陳羲彤", text: "制定文章標題與小標調整指引，推動問句穿插、字數控制 60 字以內", priority: "week" },
        { owner: "林思吾", text: "加速推出 GEO 完整版方案，配合 CS 團隊續約推廣", priority: "week" },
        { owner: "Fenix Li", text: "整理業務版教育訓練資料濃縮為一頁並準備 demo", priority: "week" },
        { owner: "林思吾", text: "指派團隊完成 Google 生態系內容佈局，串聯 YouTube 及 Reddit 資源", priority: "week" },
        { owner: "蔡阿達", text: "本週二至四完成雅虎三篇延伸文章的 Prompt 產出與追蹤設定", priority: "today" },
        { owner: "何建彤", text: "本週四完成競爭分析功能上線", priority: "today" },
        { owner: "何建彤", text: "協助推動 Agency Landing Page 與雅虎、二十特推薦案例製作", priority: "week" },
        { owner: "何建彤", text: "提供資料匯出功能 prototype 並邀請團隊確認", priority: "week" },
        { owner: "何建彤", text: "跟進權限管理改版，使用者以個人帳號登入分類顧問與職課類型", priority: "week" },
        { owner: "YC", text: "完成 AI 化重點數據分析與預警提示系統調整，本週內上線", priority: "today" },
        { owner: "藍文甫", text: "確認安可日子帳款狀況並追蹤合作進度", priority: "week" },
        { owner: "藍文甫", text: "向任務網索取 Logo 完成合作展示", priority: "week" },
        { owner: "Amber Liao", text: "推動現有客戶續約時將工具納入顧問案，強化工具價值認知", priority: "week" },
        { owner: "林思吾", text: "整理成功案例形成完整故事線，支持業務推廣與續約", priority: "week" },
        { owner: "呂紹平", text: "協助業務解決顧問案與工具包裝的價格與預算問題", priority: "week" },
        { owner: "Angelline", text: "五月底前提出新素材需求，確保行銷素材庫存充足", priority: "week" },
        { owner: "Anne Chang", text: "下下週會議前與小雞確認檢核清單細節並回報進度", priority: "week" },
        { owner: "業務主管", text: "負責 Prompt 審核與比例確認，確保符合合約規定", priority: "week" },
        { owner: "Anne Chang", text: "將 Prompt 引用比例限制納入合約條款並明確審核流程", priority: "week" },
        { owner: "林思吾", text: "推動三套 Prompt 工具版本整合（預計六至七月完成）", priority: "week" },
        { owner: "蔡阿達", text: "本週推動審核流程調整專案，下週二（5/26）決案", priority: "today" },
        { owner: "蔡阿達", text: "與呂紹平及利友哥討論建站顧問與顧問案合約分工", priority: "week" },
        { owner: "蔡阿達", text: "與 CS 部門確認成效基準點可行性，將半年檢視及三個月挽救期條款納入合約", priority: "week" },
        { owner: "蔡阿達", text: "與 Mike 確認特案合約條款是否符合公司政策及法務要求", priority: "week" },
        { owner: "Max Huang", text: "收集整理銷售工具包（sales kit），強化品牌客戶 pitch 說服力", priority: "week" },
        { owner: "蔡阿達", text: "協調彤彤開設 Negation 品牌追蹤試用賬號，規劃 10 個 prompt 三個月試用", priority: "week" },
        { owner: "蔡阿達", text: "與各 AE 確認現有案子狀況，配合 Max Huang 完成銷售工具優化", priority: "week" },
        { owner: "Nancy Cheng", text: "與阿迪討論預防 Search 異常機制", priority: "week" },
        { owner: "Vivian Chang", text: "與業務端及 Mike 確認是否建議環球移除 Search 功能", priority: "week" },
        { owner: "Yoshie Yeoh", text: "提供兩家客戶 PID 給 Justin + 阿迪做 Description Writer 測試", priority: "week" },
        { owner: "Justin Tsai", text: "評估 Description Writer 客製化可行性", priority: "week" },
        { owner: "Nancy + Knack", text: "優化競品分析下拉選單（預設帶入高點擊競品）", priority: "week" },
        { owner: "Nancy + Knack", text: "新增競品別名搜尋功能", priority: "week" },
        { owner: "Steven", text: "準備電商 UCP 協議簡報，分析可協助的電商客群與技術方案", priority: "week" },
        { owner: "小西", text: "準備系統面對 Google I/O 2026 後的應對措施", priority: "week" },
        { owner: "SGS 團隊", text: "準備 Google 社區變化及對應策略簡報（10-15 分鐘）", priority: "week" },
        { owner: "Sales 團隊", text: "準備 AI 廣告相關簡報，拼湊 AI 界面廣告策略", priority: "week" },
        { owner: "李斌", text: "準備使用者行為改變簡報，納入 MOPA 概念整理", priority: "week" },
        { owner: "Amber", text: "準備總結簡報 — 搜尋、廣告及使用者行為變化的機會與挑戰", priority: "week" },
        { owner: "蔡阿達", text: "與謝珊交流擬定文案輕量方案規格（2.2-2.5 萬/月，12 篇文章）", priority: "today" },
        { owner: "林思吾", text: "制定文案方案關鍵字與 Prompt 比例及建議書產出頻率", priority: "today" },
        { owner: "呂紹平", text: "整理 Shopline 獨家方案規格與價格供團隊參考", priority: "week" },
        { owner: "Amber Liao", text: "評估文案輕量方案建議書份數與文章篇數對 CS 執行影響", priority: "week" },
        { owner: "Anne Chang", text: "確認 light 方案報價含稅與工具費用計價方式，確保不低於底價", priority: "week" },
        { owner: "Alice Cho", text: "與小雞及 YC 協調 GU 方案 ROP 配置關鍵字選擇標準", priority: "week" },
        { owner: "YC", text: "完成 ROP 配置自動化 QA 產出與 prompt 設計測試", priority: "week" },
        { owner: "Alice Cho", text: "準備 GU for MP 方案簡報資料，5/27 11:30 會議使用", priority: "today" },
        { owner: "Fenix Li", text: "整合 GU 方案專員介入時點與工作內容安排", priority: "week" },
        { owner: "Max Huang", text: "根據團隊回饋修訂品牌治理五步法 PPT，加入 Google I/O 最新 AI 技術內容並調整階段架構", priority: "week" },
        { owner: "團隊", text: "檢視 Max 修訂後品牌治理 PPT，提供意見確保論述順暢且符合客戶需求", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-29",
          title: "Weekly Sync Up — 品牌治理五步法新論述提案",
          time: "11:19-12:15",
          duration: "56m",
          participants: "蔡阿達、藍文甫（Leo）、Max Huang、Anne Chang",
          docUrl: "",
          dialogues: [
            {
              topic: "品牌治理五步法與新論述提案",
              exchanges: [
                { speaker: "Max Huang", role: "other", label: "顧問", text: "提出品牌治理五步法：品牌定位、內容生成與推廣（內容渲染）、官網資訊架構、信任網絡及數據監測。目標是讓 AI 看見、信任、推薦及選擇品牌。五步法對應 15 項具體工作，由七大服務模組支援。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "此論述符合客戶語言，能提升 pitch 轉化率，結構清晰易懂。" },
                { speaker: "蔡阿達", role: "ada", text: "認同論述合理且符合行銷公關背景，強調先從品牌定位談起的重要性。awoo 專注將品牌故事轉化為 AI 可理解架構，可與公關公司合作而非競爭。" },
                { speaker: "Max Huang", role: "other", label: "顧問", text: "將加入 Google I/O 最新技術資訊，考慮將階段由三個調整為四個（增加選擇度），修訂版控制在 20 多頁方便客戶理解。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-26",
          title: "GEO 顧問方案討論 — 文案輕量方案定價與 AMP→GU 引導",
          time: "14:01-15:26",
          duration: "1h25m",
          participants: "蔡阿達、林思吾、Fenix Li、Amber Liao、Alice Cho、YC、呂紹平、Anne Chang",
          docUrl: "",
          dialogues: [
            {
              topic: "文案輕量方案定價與規格討論",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "將文案方案價格設定為每月 2.5 萬元，目標降低門檻吸引更多微型客戶。先以最小可行方案（10 關鍵字、20 Prompt）作為起點，待內部同意後再調整。" },
                { speaker: "林思吾", role: "other", label: "麥可", text: "建議關鍵字與 Prompt 數量維持在 15 關鍵字、45 個 Prompt，並制定建議書產出頻率為一季 4 份。" },
                { speaker: "呂紹平", role: "other", label: "Leon", text: "分享 Shopline 獨家方案：4 份建議書、10 篇文章、10 個關鍵字，月費約 2.2 萬元，作為電商平臺方案參考。" },
                { speaker: "Amber Liao", role: "other", label: "BA", text: "純內容方案仍需包含基礎建設檢核，確保技術層面可修改的部分被處理，避免僅成為文章撰寫公司。低價方案客戶建議月報改季報降低 CS 負擔。" }
              ]
            },
            {
              topic: "AMP 客戶引導至 GU 方案及自動化執行流程",
              exchanges: [
                { speaker: "Alice Cho", role: "other", label: "CS", text: "AMP 客戶缺乏人力修改 GU 方案，以 ROP 配置挑選有潛力的 Outpage 作為著陸頁，結合 AI 產文與 QA 模組降低負擔。方案限定商品數至少 500 件且必須為 API 串接。" },
                { speaker: "YC", role: "other", label: "YC", text: "分享自動化選擇關鍵字與頁面邏輯，設計 Prompt 產出 FAQ，強調內容關聯性與品牌合理性以提升 SEO 成效。" },
                { speaker: "Fenix Li", role: "other", label: "Fenix", text: "全自動化產文仍需客戶 review 與上架，若要完全自動化需 RD 介入執行，避免 CS 人力過度負擔。續約建議需聚焦於 GU 方案推廣。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-25",
          title: "預算會議 & Staff Meeting TW",
          time: "10:13-10:47",
          duration: "34m",
          participants: "林思吾、蔡阿達、小西、Steven、李斌、Amber、Max",
          docUrl: "",
          dialogues: [
            {
              topic: "Google I/O 2026 影響與品牌數位公關策略",
              exchanges: [
                { speaker: "林思吾", role: "other", label: "麥可", text: "品牌如何被 AI 描述將成為關鍵訊息，數位公關工作直接影響 AI 對品牌的引用與推薦。Google 與 Amazon、Meta、Salesforce、微軟共同完成 UCP 協議，電商必須整合 UCP 與 AP2 以支援 AI agent 購物。" },
                { speaker: "林思吾", role: "other", label: "麥可", text: "過去用戶行為以點擊為主，未來點擊將轉化為 AI 能見度，網站必須對 AI agent 友好。Max 參加喬布鳥產品說明會，對方認為已落後我們半年，團隊需維持速度優勢。" },
                { speaker: "林思吾", role: "other", label: "麥可", text: "介紹 MOPA 概念（AI 詢問後實體購買），用流量指標衡量 AI 成效是錯誤的。品牌指標不應綁定排名或流量，需重新思考與客戶溝通的衡量標準。" }
              ]
            },
            {
              topic: "業務部門半年業績與開發策略報告",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "整理前五個月業績數據，目前平均客單價約 4 萬元，將以此作為商機換算基準，評估需要多少商機才能達成目標。業務開發需與客服部門密切合作以提升整體業績。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-21",
          title: "awoo 產品月會 — GEO Suite 系統更新（2026/5）",
          time: "14:00-15:12",
          duration: "1h12m",
          participants: "蔡阿達、何建彤、YC、Leon、Anne Chang、藍文甫、Justin Tsai、林思吾、Nancy Cheng、Vivian Chang、Yoshie Yeoh、Knack Hung 等約 25 人",
          docUrl: "",
          dialogues: [
            {
              topic: "環球客戶 Search 功能異常與產品策略",
              exchanges: [
                { speaker: "Vivian Chang", role: "other", label: "CS", text: "環球客戶（MP，MR 約 10 萬）近期多次反映 Search 功能異常，商品無法被搜尋到，排查後問題自行恢復，難以追蹤根因。" },
                { speaker: "Nancy Cheng", role: "other", label: "產品", text: "內部無足夠人力持續優化 Search 功能，短期由阿迪協助，長期建議下次續約時移除 Search 功能，MR 減少約 2-3 萬。" }
              ]
            },
            {
              topic: "Description Writer 日本需求與 Q3 資源規劃",
              exchanges: [
                { speaker: "Yoshie Yeoh", role: "other", label: "日本", text: "日本 GEO Suite POC 客戶（B2B 電商）需要依產業客製化 prompt，否則產出偏 B2C 風格無法使用。" },
                { speaker: "Justin Tsai", role: "other", label: "產品", text: "將評估個別客戶客製化可行性，先從兩家客戶 PID 樣本做測試。Q3 起整體 AMP 優化含 Description Writer 投入 30-40% 資源。" }
              ]
            },
            {
              topic: "權限管理系統上線與 More Sweet 工具規劃",
              exchanges: [
                { speaker: "何建彤", role: "other", label: "產品副總", text: "權限管理系統正式上線：Org→Brand 兩層架構、四角色、批次邀請最多 10 人、Google 登入優先。MP 與 GEO 帳號不互通。" },
                { speaker: "蔡阿達", role: "ada", text: "More Sweet 工具我主導 MVP 開發：爬取客戶網站內容，透過 LoM 建立品牌 AI 知識庫，再結合 prompt 生成文章，預計 Q2 到 Q3 完成。" }
              ]
            },
            {
              topic: "Google I/O 2026 與市場趨勢",
              exchanges: [
                { speaker: "林思吾", role: "other", label: "麥可", text: "Google I/O 2026 宣布七月起搜尋入口將整合購物功能，awoo 技術發展時機符合市場節奏。回應明細將新增 AIO 的 People Also Ask 與引用來源段落關聯，預計數週內上線。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-22",
          title: "Weekly Sync Up — 成效保證方案與品牌銷售工具",
          time: "11:01-12:50",
          duration: "1h49m",
          participants: "蔡阿達、Anne Chang、藍文甫、Max Huang",
          docUrl: "",
          dialogues: [
            {
              topic: "客戶成效保證方案與合約彈性設計",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "提出成效保證方案：設定半年檢視基準點，若未達標可啟動三個月挽救期，最長九個月可解約，降低客戶對長期合約的疑慮。" },
                { speaker: "Anne Chang", role: "other", label: "PM", text: "此類特案需在合約中特別標註，並需法務審核。報價流程先行，合約中再補充特案條款。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "會通知法務及相關人員確認方案可行性。" }
              ]
            },
            {
              topic: "產品銷售包裝與品牌客戶需求分析",
              exchanges: [
                { speaker: "Max Huang", role: "other", label: "顧問", text: "分享競爭對手五步驟品牌導入方法論（公關出發），指出 awoo 產品在 persona 與用戶旅程設計上具優勢，需提供團隊銷售工具包以利推廣。" },
                { speaker: "蔡阿達", role: "ada", text: "將與 AE 確認現況並配合提供所需資料。" }
              ]
            },
            {
              topic: "第三方客戶品牌追蹤試用方案",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "提議協調彤彤開設 Negation 賬號，為第三方客戶提供品牌專屬試用賬號，約 10 個 prompt 試用並追蹤三個月成效，引導客戶轉為付費顧問服務。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-19",
          title: "GEO 顧問方案討論 — Prompt 比例與審核流程",
          time: "14:04-14:54",
          duration: "50m",
          participants: "蔡阿達、YC、林思吾、Anne Chang、呂紹平（Leon）、Fenix Li、藍文甫、Amber Liao、Alice Cho",
          docUrl: "",
          dialogues: [
            {
              topic: "Prompt 引用比例與來源判斷標準",
              exchanges: [
                { speaker: "YC", role: "other", label: "YC", text: "嚴格標準為 10 個 Prompt 配 1 篇新聞稿（約 10% 媒體引用比例），具體數字將列入系統。" },
                { speaker: "林思吾", role: "other", label: "麥可", text: "媒體與品牌來源比例約 60% 品牌、30% 媒體，遇比例相同時優先判斷為媒體以提高嚴格度。此條件納入合約，業務與 CS 需在合約階段嚴格控管。" }
              ]
            },
            {
              topic: "Prompt 審核流程與責任歸屬",
              exchanges: [
                { speaker: "呂紹平", role: "other", label: "Leon", text: "Prompt 審核不宜拉入審字團隊，應在報價階段讓客戶明確知悉比例與條件。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "支持由業務組長負責審核，避免流程冗長。" },
                { speaker: "Amber Liao", role: "other", label: "BA", text: "省制工作天數過長會延長簽約時間，審核由業務主管負責即可。" }
              ]
            },
            {
              topic: "關鍵字選擇限制放寬討論",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "若關鍵字均屬同一主題且有搜尋量，建議放寬 60% 大競爭字限制，減少審核阻礙。業務會提前告知客戶關鍵字難度與達成率，根據網站內容分析推薦適合關鍵字。" },
                { speaker: "林思吾", role: "other", label: "麥可", text: "客戶成效評估不僅看 Prompt，還看排名與流量，限制有助於設定合理期待。肯定蔡阿達針對網站內容分析的做法。" }
              ]
            },
            {
              topic: "內部工具整合與版本統一",
              exchanges: [
                { speaker: "林思吾", role: "other", label: "麥可", text: "三套 Prompt 工具整合版預計六至七月完成，將收攏三套版本優點。" },
                { speaker: "Amber Liao", role: "other", label: "BA", text: "公司內部需統一使用同一版本，避免不同單位使用不同版本造成混亂。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-19",
          title: "AE Team 週會 — 建站顧問合約策略與審核流程",
          time: "16:45-18:07",
          duration: "1h22m",
          participants: "蔡阿達、溫妮、李陽、Joanna、呂紹平、麥克、利友哥",
          docUrl: "",
          dialogues: [
            {
              topic: "建站顧問與文案服務合約策略調整",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "CS 希望避免簽訂建站顧問加年約合約，改為建站顧問搭配純文案服務，減少延期與合約變更風險。可簽訂 6+12 或 6+18 個月方案。" },
                { speaker: "蔡阿達", role: "ada", text: "純文案方案摩擦力較小，能持續提供服務與收取 MRR。需與利友哥討論建站顧問與顧問案合約分工及年約計算方式。" }
              ]
            },
            {
              topic: "審核流程優化推動",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "針對審核流程過長問題，本週推動審核流程調整專案，下週二決案，降低談單摩擦提升簽單率。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-18",
          title: "AI Mode的影響與觀察",
          time: "10:10-10:24",
          duration: "14m",
          participants: "蔡阿達、林思吾、Fenix Li、陳羲彤（Dominic）、藍文甫",
          docUrl: "",
          dialogues: [
            {
              topic: "Google 系 AI 社群貼文應用與操作模式",
              exchanges: [
                { speaker: "陳羲彤", role: "other", label: "Dominic", text: "針對 Google 系 AI 在社群媒體貼文的應用做延伸說明，介紹原算法偏好及操作模式，包括將文章切段多篇發佈與濃縮成短文兩種方式。" },
                { speaker: "林思吾", role: "other", label: "麥可", text: "關注文章發佈平台規劃，強調需明確規劃發文平台，Google AIO/AMO 搜索密度高，發文策略不可忽視。" },
                { speaker: "Fenix Li", role: "other", label: "Fenix", text: "目前系統先聚焦主題方向驗證，後續會針對不同平台做標籤與年檢等細化規劃，六頁內容主要為說明用途。" }
              ]
            },
            {
              topic: "品牌履歷整理與春露培訓規劃",
              exchanges: [
                { speaker: "Fenix Li", role: "other", label: "Fenix", text: "品牌履歷主要整理「關於我們」內容，包含站內外引用比例，設置佔位符方便專員替換客戶資料。內容涵蓋品牌緣起、成立時間、負責人、團隊介紹、核心產品及認證。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "春露提供連續兩三個月的 workshop 培訓，線上教育訓練每次約一小時、預計八場，目標完成品牌利益明確化。因時間考量尋求合適負責人接手，主要受眾為 SGS 公案組及 AP 團隊。" },
                { speaker: "林思吾", role: "other", label: "麥可", text: "會先審閱相關細節資料，並安排適合夥伴負責後續工作交接。" }
              ]
            },
            {
              topic: "迭代內容整合與版本更新",
              exchanges: [
                { speaker: "Fenix Li", role: "other", label: "Fenix", text: "已將可用迭代內容整理拉出，社群發文內容已加入。預計週五完成更新，格式為一頁說明、一頁主題動作，簡化內容直接交付給 A 與 CS 團隊。" },
                { speaker: "林思吾", role: "other", label: "麥可", text: "同意目前進度，建議未來持續關注並同步新趨勢與研究方向。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-11",
          title: "GEO Go-to-Market 策略",
          time: "09:00-10:09",
          duration: "1h09m",
          participants: "蔡阿達、YC、何建彤（彤²）、呂紹平（Leon）、林思吾、Alice Cho、Amber Liao、Angelline、藍文甫（Leo）",
          docUrl: "",
          dialogues: [
            {
              topic: "Prompt 分級機制與工具開發進度",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "目前錯誤 Prompt 與選擇 Prompt 的分級機制進度如何？工具主要用途是分析文章中可放置的 Prompt，還是自動產生 Prompt？" },
                { speaker: "YC", role: "other", label: "YC", text: "阿福已於上週開始開發相關工具，預計本週會有雛形。工具主要用於分析別人文章中可放置的 Prompt，而非自動產生 Prompt。" }
              ]
            },
            {
              topic: "雅虎及第三方合作內容與推進",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "雅虎本週將上線多篇文章，合作方向分為兩種：一是從已寫好的廣編稿延伸更多文章並產生 Prompt 追蹤，二是直接從既有文章產生 Prompt 以提升廣編稿價值。預計本週二至四分別上線三篇延伸文章。" },
                { speaker: "蔡阿達", role: "ada", text: "第三方合作包含赫斯特、微紅等四間公司，赫斯特先走建站顧問，微紅利用結果提升價值。威宏與經緯已完成 Prompt 選擇並建置系統開始追蹤。" }
              ]
            },
            {
              topic: "合作夥伴 Logo 與客戶帳款問題",
              exchanges: [
                { speaker: "呂紹平", role: "other", label: "Leon", text: "部分合作夥伴如凱絡、破博爆堂因高層介入困難，無法提供 Logo。" },
                { speaker: "林思吾", role: "other", label: "麥可", text: "目前可展示的 Panel Logo 約五間，威宏與雅虎為代表性合作夥伴。KPMG 因內部換站及主管疑慮合作暫停，款項未收回。安可日子去年合作後因人力交接及款項問題暫停，需尋找更高層窗口協調。" }
              ]
            },
            {
              topic: "客戶類型與工具銷售策略分析",
              exchanges: [
                { speaker: "呂紹平", role: "other", label: "Leon", text: "大部分客戶偏好顧問方案，單獨購買 GEO Suite 工具的客戶極少，主要因價格較高且年度預算已排滿。" },
                { speaker: "Alice Cho", role: "other", label: "Alice", text: "AMP 客戶因線下營業額大，缺乏急迫性推動工具。電商客戶因價格敏感多觀望，金融業較易接受。" },
                { speaker: "蔡阿達", role: "ada", text: "工具目前用於追蹤 Prompt，結合 SEO 與文章撰寫提升客戶價值。未來方向為用內容搶關鍵字，並用工具驗證成效。客戶多依賴顧問服務，工具若能自動生成文章將大幅提升價值。" }
              ]
            },
            {
              topic: "產品功能更新與 AI 化功能調整",
              exchanges: [
                { speaker: "何建彤", role: "other", label: "彤²", text: "本週將上線競爭分析功能，涵蓋五大指標比較。權限管理改版中，未來使用者將以個人帳號登入。資料匯出功能設計中，預計提供 CSV 與 PDF 格式。將製作 Agency 專屬 Landing Page。" },
                { speaker: "YC", role: "other", label: "YC", text: "AI 化重點功能多次測試後，判斷文字艱深難用，調整為聚焦數據事實分析。預警提示分三部分：提及率與引用率雙下滑、提及率下滑前三至五個 Prompt、引用率下滑前三至五個 Prompt。系統預計本週完成上線。" },
                { speaker: "Angelline", role: "other", label: "MKT", text: "Meta 廣告投放針對 GO Suite 及 GO 顧問方案。短影音素材已有四支完成，第五支主題未確認暫停。五月份已開始投放短影音廣告，素材庫存充足。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-04",
          title: "AI Mode的影響與觀察",
          time: "10:10-10:40",
          duration: "30m",
          participants: "林思吾、Fenix Li、陳羲彤（Dominic）、蔡佳勳、蔡阿達",
          docUrl: "",
          dialogues: [
            {
              topic: "顧問書流程與專員執行對齊",
              exchanges: [
                { speaker: "林思吾", role: "other", label: "麥可", text: "本週三位組長已完成顧問書流程梳理並同步給專員執行。5 月已有客戶陸續進入，6 月將面臨建書需求，需儘早準備。" },
                { speaker: "Fenix Li", role: "other", label: "Fenix", text: "4/29 AE、CS 及組長的 GO3 說明會已同步相關方向，資訊落差已有縮小。將與組長安排兩週一次會議，下週開始梳理工具與方案整合。" }
              ]
            },
            {
              topic: "Google 生態系趨勢與內容策略",
              exchanges: [
                { speaker: "Fenix Li", role: "other", label: "Fenix", text: "Google 生態系引用率提升，YouTube 及 Reddit 授權內容為主要來源。Chrome AI Mode 可抓取頁面上下文，提升內容關聯性。" },
                { speaker: "陳羲彤", role: "other", label: "Dominic", text: "長文不如多篇中型文章效果佳，標題使用直接明確文字。文章中穿插問句式小標題，字數控制在 60 字以內，有助 AI 爬蟲引用。" },
                { speaker: "林思吾", role: "other", label: "麥可", text: "認同策略，建議以一篇深度文章搭配多篇短文，將內容串成 Google 生態系網絡，提升實體 entity 概念完整度。" }
              ]
            },
            {
              topic: "GEO 方案推廣進度與業務教育訓練",
              exchanges: [
                { speaker: "林思吾", role: "other", label: "麥可", text: "目前約 200 多家客戶中已有 22 家（約 8%）推動 GEO 方案，需加速推廣並在續約階段積極推銷工具。" },
                { speaker: "Fenix Li", role: "other", label: "Fenix", text: "為國泰做的業務教育訓練將三頁說明濃縮為一頁，重點放方向與 to do，方便業務快速掌握。以 demo 形式輔助說明，避免過度揭露專員建議書細節。" }
              ]
            }
          ]
        },
        {
          date: "2026-04-29",
          title: "GEO 顧問方案-討論延續",
          time: "11:30-11:53",
          duration: "23m",
          participants: "林思吾、YC、藍文甫（Leo）、Anne Chang、Fenix Li",
          docUrl: "",
          dialogues: [
            {
              topic: "Prompt 審核流程與系統上線規劃",
              exchanges: [
                { speaker: "林思吾", role: "other", label: "麥可", text: "AE 與 CS 在跟客戶討論 Prompt 時，需先經過審核階段，審核完成後才能 onboard 到系統。需針對 Prompt 做分類，明確設定成效期待，避免客戶因引用率不足而產生爭議。" },
                { speaker: "YC", role: "other", label: "YC", text: "目前 Prompt 產生分為阿達、CS（使用10號產生器）及日本三個來源，未來會安排會議分享各自優缺點。阿福會於週五提供審核工具設計及時間評估。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "認同審核流程重要性，需與阿達討論如何縮短客戶端 lead time，優化 Prompt 溝通流程。" }
              ]
            },
            {
              topic: "新聞稿製作與外包流程",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "新聞稿分兩類：一般新聞稿由內部處理，客製化新聞稿外包給紅雲。下週帶小話拜訪宏文了解概念並擔任 mentor。文案組需完成發包及成效報告回收的功課，交由 CS 面對客戶。" }
              ]
            },
            {
              topic: "成效報告模板與會議頻率調整",
              exchanges: [
                { speaker: "林思吾", role: "other", label: "麥可", text: "希望制定主要成效報告模板，避免線上不足導致業務花時間整理。目標 5 月中前完成模板推出。顧問服務流程會議調整為雙週一次，固定週二下午 2 點到 3 點。" },
                { speaker: "Anne Chang", role: "other", label: "PM", text: "會先與 YC 及阿福確認報告需求與時間，並於下週安排會議討論。加購稅工具獎金部分將有調整，Winnie 明日與麥可確認後公告。" }
              ]
            }
          ]
        },
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
      lastUpdated: "2026-05-25",
      summary: "5/25 Seasalt.ai 平台帳號架構規劃 — 蔡阿達與何建彤、Knack Hung 討論 Org 與品牌管理流程；雅虎 MG 品牌配額 150 提示詞；計畫為三間代理機構開設獨立 Org，試用帳號統一管理",
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
        "🆕 Leon 尚未上 Ragic，需確認報價單、合約、新增專案登記流程",
        "🆕 5/11 雅虎本週上線多篇延伸文章，<strong>週二至四分別上線三篇</strong>",
        "🆕 5/11 合作方向二分：<strong>廣編稿延伸多篇文章產生 Prompt</strong>，及從既有文章產生 Prompt 追蹤",
        "🆕 5/11 雅虎為代表性 <strong>Panel Logo 合作夥伴</strong>之一",
        "🆕 5/18 向 Yahoo 團隊完成 <strong>GEO Suite 後台完整 Demo</strong>，展示品牌提及率、聲量佔比、排名、情緒、引用率五大指標",
        "🆕 5/18 以 NG 品牌為案例，<strong>品牌提及率達 37.5%</strong>，追蹤 ChatGPT 與 Gemini 回應",
        "🆕 5/18 合作模式：客戶購買一篇新聞稿，awoo 延伸出 <strong>B 篇與 C 篇 AI 生成文章</strong>，共三篇追蹤成效",
        "🆕 5/18 文章生成考量 <strong>E-A-T 信號</strong>與避免虛構，利用 Prompt 產生大綱再生成內容",
        "🆕 5/18 <strong>競爭對手多品牌篩選功能</strong>預計月底上線，排名依 AI 回應中品牌提及先後順序",
        "🆕 5/18 <strong>報表匯出功能</strong>開發中，後台帳號系統將從 token 改為帳密登入",
        "🆕 5/18 Sean Chiang 對合作模式反應正面，約定後續持續討論合作細節與銷售策略",
        "🆕 5/25 Seasalt.ai 平台帳號架構規劃 — 蔡阿達與何建彤、Knack Hung 討論 <strong>Org 與品牌管理流程</strong>",
        "🆕 5/25 雅虎 MG 品牌<strong>配額約 150 個提示詞</strong>，排程每三天執行一次",
        "🆕 5/25 計畫為<strong>三間代理機構分別開設獨立 Org</strong>，試用帳號統一管理、品牌預設 3 個月使用期限",
        "🆕 5/25 代理機構多為外包，客戶不直接登入系統，<strong>提示詞僅為結果</strong>，客戶需完整解決方案搭配顧問服務",
        "🆕 5/25 Org 間品牌搬移<strong>技術可行但無介面</strong>，需 Knack Hung 人工處理"
      ],
      chips: [
        { icon: "📰", text: "雅虎廣編稿" },
        { icon: "🤖", text: "AI 延伸多篇文章" },
        { icon: "✅", text: "合約已回簽" },
        { icon: "🏷️", text: "Yahoo+ELLE LOGO" }
      ],
      todos: [
        { owner: "蔡阿達", text: "與 Sean Chiang 安排後續會議，推動合作流程與銷售策略", priority: "week" },
        { owner: "蔡阿達", text: "完成 B 篇與 C 篇 AI 文章內容優化並追蹤品牌提及成效", priority: "week" },
        { owner: "呂紹平（Leon）", text: "月底前完成競爭對手多品牌篩選功能上線", priority: "week" },
        { owner: "呂紹平（Leon）", text: "更新後台帳號系統為帳密登入，支援多品牌切換", priority: "week" },
        { owner: "蔡阿達", text: "制定雅虎合作案定價模式（以工具使用費計價）", priority: "week" },
        { owner: "呂紹平（Leon）", text: "開發報表匯出功能，方便客戶驗收合作成效", priority: "week" },
        { owner: "蔡阿達", text: "決定並告知 Knack Hung 需開立的 Org 數量及名稱", priority: "today" },
        { owner: "Knack Hung", text: "協助開立指定 Org 帳號，示範品牌建立與提示詞管理流程", priority: "waiting" },
        { owner: "蔡阿達", text: "完成品牌提示詞設定後通知 Knack Hung 開啟排程", priority: "week" },
        { owner: "蔡阿達", text: "確認各代理機構帳號權限分配方案（統一管理或分別開立 Org）", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-25",
          title: "達哥帳號樂園創建 — Seasalt.ai 平台帳號架構規劃",
          time: "16:30-17:13",
          duration: "43m",
          participants: "蔡阿達、何建彤（彤²）、Knack Hung（納克）",
          docUrl: "",
          dialogues: [
            {
              topic: "雅虎帳號權限與 MG 品牌帳戶開通",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "因權限未開通無法看到 MG 品牌，確認需接受邀請信後才能啟用。" },
                { speaker: "Knack Hung", role: "other", label: "Seasalt.ai", text: "說明品牌管理流程，包括新增品牌、設定提示詞及成員管理。每個品牌有提示詞配額限制，雅虎 MG 品牌配額約 150 個。排程每三天執行一次，需完成提示詞設定後由我協助開啟。" },
                { speaker: "何建彤", role: "other", label: "Seasalt.ai", text: "建議依代理機構數量開設多個 Org 以利管理，避免品牌搬移困難。多個 Org 管理較複雜，需定期關閉不使用帳號。" }
              ]
            },
            {
              topic: "代理機構 Org 架構與試用帳號管理策略",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "計畫為三間代理機構分別開設獨立 Org，試用帳號統一管理，品牌帳號預設 3 個月期限，正式合作後再搬移至正式 Org。代理機構多為外包，客戶不直接登入系統，提示詞僅為結果，客戶需完整解決方案搭配顧問服務。" },
                { speaker: "何建彤", role: "other", label: "Seasalt.ai", text: "認同此做法。依客戶類型（代理機構、直客、顧問）預先建立對應 Org。Org 間品牌搬移技術可行但目前無介面，需人工處理。" },
                { speaker: "Knack Hung", role: "other", label: "Seasalt.ai", text: "若代理機構需主控權則必須分組織管理，避免權限混亂。試用客戶預設排程期限為 3 個月。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-18",
          title: "Awoo GEO Suite 後台介紹 & 成效解析",
          time: "17:02-17:58",
          duration: "56m",
          participants: "蔡阿達、Sean Chiang（Yahoo）、呂紹平 Leon（awoo）、Yahoo Winnie Pan",
          docUrl: "",
          dialogues: [
            {
              topic: "NG 案子合作流程與成效展示",
              exchanges: [
                { speaker: "Sean Chiang", role: "other", label: "Yahoo", text: "希望先做案子回顧，說明設定搜尋意圖與目標效果，並用系統檢視是否達成。" },
                { speaker: "蔡阿達", role: "ada", text: "合作流程從新聞稿大綱出發，結合 NG 網站內容延伸出 B 篇與 C 篇 AI 生成文章，三篇文章用工具追蹤被 AI 提及與引用情況。客戶只購買一篇文章，卻獲得三篇相關文章，提升品牌曝光與價值。" },
                { speaker: "呂紹平", role: "other", label: "Leon", text: "展示後台介面，追蹤多個 Prompt 分析 ChatGPT、Gemini 等 AI 回應中品牌提及與網站引用，整理五大指標：品牌提及率、聲量佔比、排名、情緒、引用率。NG 品牌提及率 37.5%。" }
              ]
            },
            {
              topic: "文章生成與 SEO 策略",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "文章生成先設定關鍵字與 Prompt，利用 Prompt 產生大綱再生成內容，過程中考量 E-A-T 信號與避免虛構。B 篇與 C 篇完全由 AI 產生，無人工撰寫。" },
                { speaker: "Sean Chiang", role: "other", label: "Yahoo", text: "詢問文章被提及的時間曲線。" },
                { speaker: "蔡阿達", role: "ada", text: "時效性內容可能曇花一現，長期內容可持續被引用。短期活動型建議廣告投放，長期 SEO 優化適合此合作模式。" }
              ]
            },
            {
              topic: "工具功能與後續規劃",
              exchanges: [
                { speaker: "呂紹平", role: "other", label: "Leon", text: "競爭對手由 AI 自動判別，預計月底前上線多品牌篩選功能。排名依 AI 回應中提及品牌的先後順序決定。後台完整記錄每次回應細節。" },
                { speaker: "蔡阿達", role: "ada", text: "將推出報表匯出功能，方便客戶驗收合作成效。" },
                { speaker: "Sean Chiang", role: "other", label: "Yahoo", text: "會持續討論合作流程與銷售策略，感謝團隊提供詳細回饋。" }
              ]
            },
            {
              topic: "會議記錄工具推薦",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "介紹目前使用的會議記錄工具，推薦臺灣廠商 SeaMeet，對繁體中文辨識較佳。目前摘要層級較粗，計劃用大語言模型重新整理。" },
                { speaker: "Sean Chiang", role: "other", label: "Yahoo", text: "目前使用 Google Meet 的會議記錄功能，但摘要精準度不足，願意參考蔡阿達推薦的工具。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-11",
          title: "GEO Go-to-Market — 雅虎合作進度更新",
          time: "09:00-10:09",
          duration: "1h09m",
          participants: "蔡阿達、YC、呂紹平（Leon）、林思吾",
          docUrl: "",
          dialogues: [
            {
              topic: "雅虎合作內容上線與推進方向",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "雅虎本週將上線多篇文章，合作方向分兩種：一是從已寫好的廣編稿延伸更多文章並產生 Prompt 追蹤，二是直接從既有文章產生 Prompt 提升廣編稿價值。預計週二至四分別上線三篇延伸文章。" },
                { speaker: "林思吾", role: "other", label: "麥可", text: "目前可展示的 Panel Logo 約五間，威宏與雅虎為代表性合作夥伴。" }
              ]
            }
          ]
        },
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
    },

    // ====== P35: awoo AI SEO 流量成長相談室 ======
    {
      id: "ai-seo-salon",
      name: "awoo AI SEO 流量成長相談室 — 外部顧問諮詢活動",
      icon: "📊",
      category: "events",
      lastUpdated: "2026-05-26",
      summary: "5/26 陳羲彤說明 AI 搜尋與 SEO 互補共生趨勢 — Google 使用者未減反增、AI 搜尋非取代而是層級關係；Rebecca Chen 分享鄧白氏等客戶案例，前十名關鍵字成長 2.5 倍；約 1/3 網站因技術問題導致 AI 爬蟲無法讀取",
      keyPoints: [
        "awoo 定期舉辦<strong>外部顧問諮詢活動</strong>，邀請潛在客戶了解 SEO/GEO 服務",
        "陳羲彤（Dominic）說明 AI 搜尋（GPT、Gemini）對傳統 SEO 的影響，強調<strong>零點擊搜尋</strong>現象",
        "SEO 與 GEO 策略高度重疊，<strong>網站內容仍是 AI 搜尋資料來源的核心</strong>",
        "awoo 專案團隊架構：顧問團隊、搜尋團隊、成效團隊、數據分析及廣告團隊",
        "蔡阿達強調消費者已從關鍵字搜尋轉向<strong>直接向 AI 提問</strong>，品牌是否被 AI 推薦成為關鍵",
        "網站應優化 <strong>FAQ 內容</strong>與 <strong>EAT 指標</strong>（經驗、專業、權威、公信力），提升被 AI 推薦機率",
        "來賓 Kyo Lin 諮詢組合屋示範園區<strong>表單頁面流量轉換率低</strong>問題，蔡阿達分析可能為廣告流量轉換率偏低及頁面匹配度不足",
        "🆕 5/13 Dominic 強調 <strong>GEO 是 SEO 的 2.0</strong>，兩者密切相關非截然不同，AI 搜尋會拆解問題為多個子問題",
        "🆕 5/13 自然搜尋流量仍是廣告流量的<strong>十倍</strong>，Google 使用者下降幅度不大",
        "🆕 5/13 預估 <strong>2028 年 AI 搜尋占比約 13%</strong>，Google 仍占主導，多數用戶雙平台共用",
        "🆕 5/13 AI 搜尋流量<strong>轉換率普遍高於傳統搜尋</strong>（引用 Airbnb 與 Shopify 觀察）",
        "🆕 5/13 蔡阿達建議檢查 <strong>robots.txt</strong> 避免阻擋 AI 爬蟲，確認 <strong>SSL 加密</strong>設定",
        "🆕 5/13 部落格文章應掛<strong>真實作者資訊</strong>以提升 EAT 信任度",
        "🆕 5/13 提問式搜尋時代，針對特定問句優化<strong>最快三個月內可見成效</strong>",
        "🆕 5/13 優先從 GA 中<strong>流量最高頁面</strong>著手，增加 FAQ 內容方便 AI 快速抓取引用",
        "🆕 5/13 GA4 可追蹤來自 <strong>ChatGPT 等 AI 流量管道</strong>，方便分析與優化",
        "🆕 5/26 Google 搜尋使用人數<strong>未下降</strong>，廣告收益持續成長，搜尋行為仍活躍",
        "🆕 5/26 AI 搜尋與 SEO 為<strong>互補共生</strong>非取代關係 — 做好 SEO 是做好 GEO 的基礎",
        "🆕 5/26 搜尋行為轉型期 — 使用者同時使用 AI 模型與搜尋引擎，如先用 GPT 取得清單再用 Google 購買",
        "🆕 5/26 鄧白氏案例：優化麵包屑、title、description 後<strong>前十名關鍵字數量成長 2.5 倍</strong>",
        "🆕 5/26 約<strong>每 12 個網站中有 4 個</strong>因技術問題導致 AI 或 Google 爬蟲無法讀取內容",
        "🆕 5/26 常見技術問題：安全憑證過期、未提交 SEM 資料、缺乏 schema 結構化資料、robots.txt 設定不當",
        "🆕 5/26 Google 已推出<strong>實用內容系統</strong>反制大量 AI 生成但無策略的內容",
        "🆕 5/26 建議強化 <strong>EAT</strong>（專業性、權威性、可信度），邀請專業人士背書、與 KOL/KOC 合作"
      ],
      chips: [
        { icon: "🎓", text: "外部諮詢活動" },
        { icon: "🔍", text: "GEO = SEO 2.0" },
        { icon: "🤖", text: "AI 搜尋 13%" },
        { icon: "📈", text: "3 個月見效" },
        { icon: "📊", text: "鄧白氏 2.5× 成長" }
      ],
      todos: [
        { owner: "蔡阿達", text: "安排與有興趣客戶的專業顧問接洽，指派合適團隊進行後續服務", priority: "week" },
        { owner: "蔡阿達", text: "協助客戶檢查 robots.txt 及 SSL 設定，避免阻擋 AI 爬蟲", priority: "week" },
        { owner: "蔡阿達", text: "指導客戶在部落格文章中加入真實作者資訊，強化 EAT 訊號", priority: "week" },
        { owner: "蔡阿達", text: "協助客戶針對 GA 流量最高頁面增加 FAQ 內容，提升 AI 抓取效率", priority: "week" },
        { owner: "陳羲彤", text: "與顧問團隊合作，根據客戶網站制定 SEO/GEO 關鍵字策略與主題群集", priority: "week" },
        { owner: "蔡阿達", text: "持續提供免費網站 SEO 體質分析與目標族群關鍵字研究", priority: "week" },
        { owner: "Rebecca Chen", text: "協助有興趣客戶進行網站技術盤點（Robots.txt、HTTPS、schema 等），補足缺漏", priority: "week" },
        { owner: "Rebecca Chen", text: "為客戶導入結構化資料（schema、JSON-LD），提升 AI 爬蟲引用機率", priority: "week" },
        { owner: "陳羲彤", text: "推動 SEO 與 GEO 雙軌策略，建立 topic cluster 強化網站主題權威性", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-26",
          title: "awoo GEO/SEO 企業成長相談室 05/26",
          time: "14:04-15:03",
          duration: "59m",
          participants: "陳羲彤（Dominic）、Rebecca Chen、外部來賓",
          docUrl: "",
          dialogues: [
            {
              topic: "AI 搜尋與傳統 SEO 的共生趨勢",
              exchanges: [
                { speaker: "陳羲彤", role: "other", label: "awoo", text: "Google 搜尋引擎使用人數未下降，廣告收益持續成長。AI 搜尋與 SEO 為互補共生非取代關係，做好 SEO 是做好 GEO 的基礎。使用者同時使用多種 AI 模型與搜尋引擎形成共生關係。" },
                { speaker: "陳羲彤", role: "other", label: "awoo", text: "AI 搜尋會引用網站內容作為回答依據，品牌能被 AI 推薦或引用將提升信任度與曝光度，成為新的品牌行銷戰略重點。Google 已推出實用內容系統反制無策略的 AI 生成內容。" }
              ]
            },
            {
              topic: "GEO 服務案例分享與技術優化建議",
              exchanges: [
                { speaker: "Rebecca Chen", role: "other", label: "awoo", text: "美商鄧白氏案例：優化麵包屑、title、description 並建立關鍵字著陸頁，前十名關鍵字數量成長 2.5 倍，網站詢問填單率提升。約每 12 個網站中有 4 個因技術問題導致爬蟲無法讀取。" },
                { speaker: "Rebecca Chen", role: "other", label: "awoo", text: "建議企業建立符合 AI 爬蟲喜好的網站結構，將技術文件與案例轉化為結構化內容。客戶可自行透過 GPT、Gemini 查詢品牌相關問題，檢視 AI 是否推薦自家品牌。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-13",
          title: "awoo GEO/SEO 企業成長相談室 05/13",
          time: "14:05-15:04",
          duration: "59m",
          participants: "蔡阿達、陳羲彤（Dominic）、外部來賓",
          docUrl: "",
          dialogues: [
            {
              topic: "生成式 AI 對 SEO 與 GEO 的影響與趨勢",
              exchanges: [
                { speaker: "陳羲彤", role: "other", label: "awoo", text: "AI 搜尋更注重頁面中具體段落的完整回答，會拆解用戶問題成多個子問題。SEO 與 GEO 密切相關，GEO 是 SEO 的 2.0，非截然不同。2028 年 AI 搜尋可能占比約 13%，Google 仍占主導。" },
                { speaker: "陳羲彤", role: "other", label: "awoo", text: "自然搜尋流量仍是廣告流量的十倍，AI 搜尋流量轉換率普遍高於傳統搜尋（引用 Airbnb 與 Shopify 觀察）。AI 生成內容可能導致搜尋引擎懲罰，Google 一年 4-5 次大型更新以防 AI 污染資料庫。" }
              ]
            },
            {
              topic: "SEO 實務挑戰與網站優化建議",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "建議檢查 robots.txt 避免阻擋 AI 爬蟲，確認 SSL 加密設定。部落格文章應掛真實作者資訊以提升 EAT 信任度。許多內容型網站未從使用者角度撰寫，缺乏專業度、權威度、信用度訊號。" },
                { speaker: "蔡阿達", role: "ada", text: "公司擁有全國最多夥伴與豐富經驗，專案流程含專業顧問、技術團隊、文案及 PM 協作，能精準追蹤目標族群搜尋行為，用 AI 輔助生成高品質內容避免幻覺問題。" }
              ]
            },
            {
              topic: "提問式搜尋時代的快速優化策略",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "過去 SEO 需三至六個月甚至一年見效，現因提問式搜尋，針對特定問句優化最快三個月可見成果。建議先從 GA 中流量最高頁面著手增加 FAQ，方便 AI 快速抓取引用。GA4 中可追蹤來自 ChatGPT 等 AI 的流量管道。" }
              ]
            }
          ]
        },
        {
          date: "2026-04-29",
          title: "awoo AI SEO 流量成長相談室 04/29",
          time: "14:00-14:48",
          duration: "48m",
          participants: "蔡阿達、陳羲彤（Dominic）、Kyo Lin 等來賓",
          docUrl: "",
          dialogues: [
            {
              topic: "AI 搜尋時代的 SEO 與 GEO 策略",
              exchanges: [
                { speaker: "陳羲彤", role: "other", label: "awoo", text: "AI 搜尋工具（Google AI 摘要、AI 模式、GPT、Gemini）會直接給出答案，導致零點擊搜尋現象。SEO 與 GEO 策略不應被過度區分，兩者在內容經營上高度���疊，網站內容仍是 AI 搜尋資料來源的核心。" },
                { speaker: "蔡阿達", role: "ada", text: "過去消費者透過關鍵字搜尋資訊，現在直接向 AI 提問，AI 能快速提供精準答案。品牌是否被 AI 推薦成為關鍵。網站應優化 FAQ 內容，針對消費者常見問題提供清楚回答，內容需符合 EAT 標準。" }
              ]
            },
            {
              topic: "網站內容與 EAT 信號強化",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "網站頻道（About Us 等）應持續更新，展示獲獎事蹟、專利及技術數據。建議收集 Google Map 顧客評論整合至網站，增強公信力與信任度。" },
                { speaker: "陳羲彤", role: "other", label: "awoo", text: "SEO 除了內容產出，還需結合內容策略、行銷策略及技術面調整。演算法頻繁更新，Google 一年 4-5 次大型更新，GPT 模型也持續迭代。" }
              ]
            },
            {
              topic: "來賓諮詢：表單轉換率問題",
              exchanges: [
                { speaker: "Kyo Lin", role: "other", label: "來賓", text: "組合屋示範園區諮詢表單流量轉換率偏低，想了解可能原因與改善方向。" },
                { speaker: "蔡阿達", role: "ada", text: "可能原因包括廣告流量轉換率本身偏低，以及表單頁面內容與用戶需求匹配度不足。��議後續安排專業顧問深入分析並優化頁面內容與結構，我們願意提供免費網站 SEO 體質分析。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P36: OneAD 聯合方案 ======
    {
      id: "onead",
      name: "awoo × OneAD — GEO + 廣告導流聯合方案",
      icon: "📊",
      category: "partner",
      lastUpdated: "2026-05-20",
      summary: "5/20 第二次會議 — 蔡阿達介紹 AI 內容生成 + SEO 優化新模式（免費建檢報告為敲門磚），Jed Lin 展示 Audience AI 受眾分析工具；雙方確認合作互補架構（awoo 主動搜尋端 / OneAD 被動觸及端），金流由 OneAD 收取後付款 awoo；Jed Lin 下週向業務布達合作方案",
      keyPoints: [
        "雙方合作架構：awoo 負責<strong>AI 搜尋優化（GEO）</strong>，OneAD 負責<strong>固定 CPC 廣告導流</strong>，互補 SEO 見效慢的痛點",
        "初步方案分基礎套裝（<strong>GEO 顧問年約 + 固定 CPC 導流</strong>）與進階套裝（內容策展 + 媒體曝光），導流廣告年約基礎約<strong>十萬元</strong>",
        "OneAD 三大 DMP 數據平台：Audience DMP（興趣標籤）、緯博數據（購買行為）、品牌關鍵字",
        "數據報告整合：OneAD 提供 <strong>ADR（受眾分析）</strong>及 <strong>SDR（購物分析）</strong>報告，鑲嵌至 awoo Dashboard 作為加值服務",
        "內容策展：OneAD 以<strong>自供稿低成本方式</strong>置入新聞媒體（ETtoday、三立、自由時報等），搭配廣告保證流量",
        "Pixel 埋點合作：客戶網站部署雙方 pixel，累積用戶標籤提升廣告精準度與再行銷效果",
        "蔡阿達指出 awoo 客戶多為中小型，需調整服務與<strong>價格策略</strong>符合市場需求",
        "雙方探討 <strong>AI Agent</strong> 產品合作可能性，蔡阿達有聊天機器人開發經驗",
        "合作目標：先推 GEO + 導流商務方案，內容策展與報告整合陸續推出",
        "🆕 5/20 第二次會議 — 蔡阿達介紹 <strong>AI 內容生成 + SEO 優化新模式</strong>，以免費 AI 建檢報告為敲門磚",
        "🆕 5/20 Jed Lin 展示 <strong>Audience AI 受眾分析工具</strong> — 整合聯播網、零售數據、發票載具，串接 Google/Meta/TikTok API",
        "🆕 5/20 合作互補架構：awoo 負責<strong>主動搜尋端</strong>（關鍵字優化、AI 內容生成），OneAD 負責<strong>被動觸及端</strong>（受眾行為與消費數據）",
        "🆕 5/20 品牌履歷與新聞稿服務 — 與 <strong>1450 始祖網軍</strong>合作，提供媒體曝光與品牌背書",
        "🆕 5/20 CMR Interactive 調查：<strong>AIO 出現時自然搜尋點擊下降</strong>，品牌被 AI 引用可獲較高點擊與信任",
        "🆕 5/20 金流確認：客戶款項由 <strong>OneAD 收取後再付款 awoo</strong>，蔡阿達為主要聯絡窗口",
        "🆕 5/20 數據追蹤規劃 — 結合 GA4/Pixel 數據，建立 <strong>AIO 引用次數、EBU 品牌情感分數、五分制品質分數</strong>",
        "🆕 5/20 Jed Lin 預計<strong>下週向 OneAD 業務團隊布達合作方案</strong>，啟動聯合推廣"
      ],
      chips: [
        { icon: "🤝", text: "GEO + 導流" },
        { icon: "📈", text: "Audience AI" },
        { icon: "📰", text: "品牌履歷服務" },
        { icon: "🎯", text: "AIO 追蹤" },
        { icon: "💰", text: "年約 10 萬起" },
        { icon: "🆕", text: "下週業務布達" }
      ],
      todos: [
        { owner: "Jed Lin", text: "下週向 OneAD 業務團隊布達合作方案，並安排三方策略會議", priority: "today" },
        { owner: "蔡阿達", text: "持續提供免費 AI 建檢報告，分析客戶網站現況與目標受眾", priority: "week" },
        { owner: "蔡阿達", text: "推動品牌履歷與新聞稿顧問服務，與 1450 合作納入顧問合約", priority: "week" },
        { owner: "Jed Lin", text: "研究 Google AIO referral 參數，確認可否辨識 AI 推薦流量", priority: "week" },
        { owner: "蔡阿達", text: "提供 AIO 引用次數時間粒度數據（日報/週報/月報），支持成效分析", priority: "week" },
        { owner: "Jed Lin", text: "推動 Audience AI 資料與 awoo AI 工具串接，提升內容生成精準度", priority: "waiting" },
        { owner: "蔡阿達", text: "設計合理誘因與流程促使客戶安裝 pixel 服務", priority: "week" },
        { owner: "Yeh Andy", text: "安排後續會議討論 AI Agent 產品深度合作", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-05-20",
          title: "awoo × OneAD 雙方會議 #2 — AI 內容生成 × Audience AI × 聯合推廣",
          time: "16:30-17:37",
          duration: "1h07m",
          participants: "蔡阿達、Jed Lin",
          docUrl: "",
          dialogues: [
            {
              topic: "AI 內容生成與 SEO 優化服務模式介紹",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "以純文案方案為主，先提供客戶免費的網站技術建檢報告，指出必須修改的關鍵技術點，確保配合後再透過文章內容及工具追蹤提升 AI 推薦機率。" },
                { speaker: "蔡阿達", role: "ada", text: "品牌履歷與新聞稿服務，與 1450 始祖網軍合作，幫助客戶建立品牌能見度與媒體背書。方案細節由我主導接洽，業務不需過多介入。" },
                { speaker: "Jed Lin", role: "other", label: "OneAD", text: "Audience AI 透過多數據庫（聯播網、零售數據、發票載具）分析受眾行為，串接 Google、Meta、TikTok API 提供跨平台受眾定向建議。" }
              ]
            },
            {
              topic: "合作互補架構與業務推廣規劃",
              exchanges: [
                { speaker: "Jed Lin", role: "other", label: "OneAD", text: "雙方服務互補：awoo 專注主動搜尋的關鍵字優化，OneAD 從行為興趣與消費數據觸及潛在受眾，形成全域受眾圖譜。下週向業務團隊布達合作方案。" },
                { speaker: "蔡阿達", role: "ada", text: "初期以免費建檢報告為提案敲門磚，客戶有興趣後安排三方策略會議，進一步討論 GU 見解與廣告規劃建議書。" }
              ]
            },
            {
              topic: "AI 推薦流量與廣告投放策略整合",
              exchanges: [
                { speaker: "Jed Lin", role: "other", label: "OneAD", text: "引用 CMR Interactive 調查，AIO 出現時自然搜尋點擊量明顯下降，品牌被 AI 引用可獲較高點擊與信任。需同時進行搶佔 AI 能見度與補回流量。" },
                { speaker: "蔡阿達", role: "ada", text: "規劃結合 GA4、Pixel 數據建立量化分析體系：AIO 引用次數、品牌情感分數 EBU、五分制品質分數，協助客戶評估不同流量來源的訪客價值。" }
              ]
            }
          ]
        },
        {
          date: "2026-04-30",
          title: "awoo × OneAD 合作案首次會議",
          time: "10:30-11:53",
          duration: "1h23m",
          participants: "蔡阿達、呂紹平（Leon）、Jed Lin、Yeh Andy",
          docUrl: "",
          dialogues: [
            {
              topic: "合作方案架構與互補優勢",
              exchanges: [
                { speaker: "Jed Lin", role: "other", label: "OneAD", text: "不僅是商務合作，更希望雙方數據互串，提供客戶更完整的分析服務。客戶資源可互補，OneAD 提供廣告導流，awoo 專注 AI 搜尋優化。" },
                { speaker: "蔡阿達", role: "ada", text: "awoo 面臨 SEO 與 GEO 服務見效慢的痛點，OneAD 的快速見效廣告策略可以補足這個缺口，雙方互補優勢很明顯。" },
                { speaker: "Yeh Andy", role: "other", label: "OneAD", text: "合作方案包含品牌官網內容優化、AI Overview 曝光提升，以及透過數據分析做規模化廣告導流，並部署 pixel 進行再行銷。" }
              ]
            },
            {
              topic: "數據報告整合與智能決策",
              exchanges: [
                { speaker: "Yeh Andy", role: "other", label: "OneAD", text: "我們有三大 DMP 數據平台：Audience DMP、緯博數據、品牌關鍵字。現代廣告提案以數據為核心，智能決策報告是合作基礎。" },
                { speaker: "蔡阿達", role: "ada", text: "數據結合是後段加值，初期以共同帶給客戶加值服務為切入點。報告整合至 Dashboard 是很好的方向。" }
              ]
            },
            {
              topic: "內容策展與媒體曝光",
              exchanges: [
                { speaker: "Yeh Andy", role: "other", label: "OneAD", text: "內容策展主要透過自供稿方式合作，避免高昂媒體製作費用，搭配廣告操作保證流量。目前合作媒體以 ETtoday、三立新聞等新聞媒體為主。" },
                { speaker: "蔡阿達", role: "ada", text: "內容策展與數據結合可提升客戶價值，期待報告內容能與 GEO 方案結合，創造更多合作空間。" },
                { speaker: "呂紹平", role: "other", label: "awoo", text: "可從關鍵字與 Landing Page 優化角度協助，提升 GEO 被引用機率，並提供內容連結策略強化品牌專案成效。" }
              ]
            },
            {
              topic: "AI Agent 合作探討",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我個人有打造聊天機器人的經驗，對 AI Agent 很感興趣。" },
                { speaker: "Yeh Andy", role: "other", label: "OneAD", text: "OneAD 也在銷售 AI Agent 產品，願意進行更深度合作，約定後續安排專門會議討論。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P36: 男研堂 ======
    {
      id: "nanyan-tang",
      name: "男研堂 — 官網 GEO 技術合作洽談",
      icon: "🧴",
      category: "client",
      lastUpdated: "2026-05-04",
      summary: "首次洽談 — GO Suite 監控 AI 能見度、分站與合站 SEO 權重評估、schema 結構化資料標記，客戶先自行撰寫文章、awoo 提供潤飾與規劃",
      keyPoints: [
        "客戶因<strong>醫療法規限制</strong>將電商主站與部落格分開架設，避免罰款風險",
        "蔡阿達指出分站導致<strong>SEO 權重分散</strong>，建議未來視法規調整考慮合併",
        "GO Suite 可監控<strong>四大 AI 模型</strong>（ChatGPT、Gemini 等），六月底擴充第二期",
        "五大指標追蹤：<strong>品牌提及率、網站引用率</strong>、AI 搜尋排名等",
        "技術面：加入<strong>schema 結構化資料標記</strong>，提升 AI 爬蟲辨識產品頁與文章頁",
        "內容策略：建置 QA 佈局與 FAQ，增加<strong>AI 問答版位收錄機率</strong>",
        "完整方案含<strong>60 個 Prompt 追蹤、6 份年度建議書</strong>及文章產出",
        "客戶表示<strong>文章自行撰寫</strong>，awoo 提供規劃與潤飾，報價依篇數調整",
        "成效保證為假議題，建議以<strong>Google 排名與 AI Overview 版位收錄</strong>作為 KPI",
        "蘋果 AI 封閉性尚未影響整體優化策略，<strong>AI 爬蟲仍以 Google 資料庫為主</strong>"
      ],
      chips: [
        { icon: "🕐", text: "36 min" },
        { icon: "💬", text: "60 Prompt" },
        { icon: "📊", text: "6 份年報" },
        { icon: "🤖", text: "4 大 AI 模型" }
      ],
      todos: [
        { owner: "蔡阿達", text: "建立男研堂通訊群組，分享 GO Suite 資料", priority: "today" },
        { owner: "蔡毓倫", text: "完成男研堂 GO Suite 關鍵字與 Prompt 設定", priority: "week" },
        { owner: "蔡毓倫", text: "提供報價方案，依撰寫或潤飾篇數調整", priority: "week" },
        { owner: "男研堂", text: "提供重點產品線與主題供 GO Suite 監控追蹤", priority: "waiting" },
        { owner: "蔡毓倫", text: "六月底前完成 GO Suite 第二期更新，擴充 AI 模型追蹤範圍", priority: "week" },
        { owner: "蔡毓倫", text: "協調技術團隊加入 schema 結構化資料標記", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-04",
          title: "男研堂官網 GEO 技術合作洽談",
          time: "15:44-16:20",
          duration: "36m",
          participants: "蔡阿達、蔡毓倫（Aiden）、Joe（男研堂）",
          docUrl: "",
          dialogues: [
            {
              topic: "網站分離架構與法規風險",
              exchanges: [
                { speaker: "Joe", role: "other", label: "男研堂", text: "部落格站因涉及可能違規詞彙，為避免罰款故與主站分開架設，由 QDM 負責內容撰寫。" },
                { speaker: "蔡阿達", role: "ada", text: "SEO 與 AI 優化理論上主站與文章站合併有利權重累積，分站會造成權重分散，建議未來可視法規調整合併策略。" },
                { speaker: "Joe", role: "other", label: "男研堂", text: "目前維持分站策略避免法規風險，近期未聽聞罰款事件，過去罰款多集中於產品銷售廣告。" }
              ]
            },
            {
              topic: "GO Suite AI 能見度監控工具介紹",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "監控是優化前提，GO Suite 可快速監控網站在 AI 能見度的多項指標，包含品牌提及率、網站引用率等五大指標。" },
                { speaker: "蔡毓倫", role: "other", label: "Aiden", text: "透過串接 ChatGPT、Gemini 等 API 模擬無痕搜尋，避免搜尋紀錄影響結果。目前以四大主流模型為主，預計六月底推出第二期擴充更多模型。" },
                { speaker: "Joe", role: "other", label: "男研堂", text: "對工具興趣很高，詢問未來擴充 AI 模型的計畫。" }
              ]
            },
            {
              topic: "技術優化與內容策略",
              exchanges: [
                { speaker: "蔡毓倫", role: "other", label: "Aiden", text: "技術面包括提升 AI 爬蟲爬取能力與加入 schema 結構化資料標記，方便 AI 辨識頁面性質。內容面從關鍵字延伸問句建置文章及 FAQ。" },
                { speaker: "Joe", role: "other", label: "男研堂", text: "目前網站技術面無明顯問題。" }
              ]
            },
            {
              topic: "服務方案與合作模式",
              exchanges: [
                { speaker: "蔡毓倫", role: "other", label: "Aiden", text: "完整方案含關鍵字與 Prompt 設定、Google 排名與 AI 摘要版位優化、生成式 AI 多平台追蹤及年度建議書。" },
                { speaker: "蔡阿達", role: "ada", text: "保持聯絡，資料會透過群組分享，隨時安排會議討論後續合作。" },
                { speaker: "Joe", role: "other", label: "男研堂", text: "願意先自行撰寫文章，潤飾篇數會較多，雙方同意後續再討論合作細節與報價。" }
              ]
            },
            {
              topic: "AI 搜尋成效保證與趨勢",
              exchanges: [
                { speaker: "蔡毓倫", role: "other", label: "Aiden", text: "成效保證為假議題，無法保證 Google 或生成式 AI 搜尋結果排名，建議以 Google 排名與 AI Overview 版位收錄作為 KPI。" },
                { speaker: "蔡阿達", role: "ada", text: "AI 搜尋優化仍延續 SEO 邏輯，爬蟲升級與大型語言模型輔助是主要差異。蘋果 AI 封閉性尚未影響整體優化策略。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P37: 甲山林建設 ======
    {
      id: "jsl-geo",
      name: "甲山林建設 — 官網 SEO × GEO 整合優化",
      icon: "🏠",
      category: "client",
      lastUpdated: "2026-05-05",
      summary: "甲山林房展中心兩網站三個月內合併，awoo 以顧問模式提供 SEO+GEO 整合優化 — 合約期 13 個月、每兩個月交付建議書、AI 曝光追蹤工具免費一年（換 Logo）；5/31 前簽約目標",
      keyPoints: [
        "甲山���房展中心有兩個網站，<strong>Real Estate Hub 三個月內併入主站 www.jsl.com.tw</strong>",
        "以 SEO 為基礎結合 GEO 優化，目標提升 <strong>Google AI 摘要區塊曝光率</strong>及關鍵字排名",
        "顧問式合作模式：技術檢測、內容優化、結構化資料建置、<strong>多模態內容優化</strong>",
        "合約期 <strong>13 個月</strong>（含 1 個月關鍵字討論期），年繳為主、月繳可行",
        "每兩個月交付一份建議書，含技術架構、關鍵字排名、AI 引用曝光分析",
        "時程規劃：<strong>5/31 前簽約 → 6/1 關鍵字選定 → 8 月正式優化</strong>，半年後初步成效",
        "建案壽命約一年，建議以<strong>常駐服務類關鍵字</strong>（預售屋推薦、買房理財）為優化主軸",
        "短期建案搭配<strong>廣告投放</strong>達成快速曝光",
        "AI 曝光追蹤工具<strong>免費使用一年</strong>，條件為同意以甲山林 Logo 作為案例展示",
        "後續以<strong>實體會議</strong>為主，初步擬定下週二/三/四下午會議"
      ],
      chips: [
        { icon: "📅", text: "5/31 前簽約" },
        { icon: "📋", text: "13 個月合約" },
        { icon: "📊", text: "每2月建議書" },
        { icon: "🆓", text: "AI 工具免費1年" },
        { icon: "🏠", text: "兩站合併中" }
      ],
      todos: [
        { owner: "Rebecca Chen", text: "提供網站健檢報告，說明現有問題與優化空間", priority: "today" },
        { owner: "Rebecca Chen", text: "準備主題關鍵字初步規劃供甲山林評估", priority: "today" },
        { owner: "蔡阿達", text: "協調下週實體會議時間（週二/三/四下午），與 Rebecca 配合出席", priority: "today" },
        { owner: "台北房展中心", text: "5/31 前完成合約簽訂", priority: "week" },
        { owner: "Rebecca Chen", text: "合作啟動後提供六份優化建議書，每兩個月更新一次", priority: "waiting" },
        { owner: "台北房展中心", text: "提供主要推廣主題與關鍵字方向（買房理財、置產實業等）", priority: "week" },
        { owner: "Rebecca Chen", text: "協助設定 AI 曝光追蹤工具，導入品牌提及率與競品比較分析", priority: "waiting" },
        { owner: "台北房展中心", text: "提供競爭對手名單，供工具導入比較分析", priority: "week" },
        { owner: "Rebecca Chen", text: "7/1 召開啟動��議，開通 GA4、GSC 帳號權限", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-05-05",
          title: "甲山林建設官網 GEO 技術合作洽談",
          time: "15:15-16:35",
          duration: "1h20m",
          participants: "蔡阿達、Rebecca Chen、台北房展中心（甲山林建設）",
          docUrl: "",
          dialogues: [
            {
              topic: "網站現況與合作目的",
              exchanges: [
                { speaker: "台北房展中心", role: "other", label: "甲山林", text: "目前有兩個網站，Real Estate Hub 為獨立子網域，計畫三個月內併入主站 www.jsl.com.tw。老闆在 GPT 等 AI 工具中無法獲得正確房產資訊，希望透過優化解決。" },
                { speaker: "蔡阿達", role: "ada", text: "GEO 方案是 SEO 的延伸，會同時優化關鍵字排名與 Google AI Overviews 的引用率。AI 搜尋導致網站流量下降但流量更精準，重點在提升曝光而非單純流量。" }
              ]
            },
            {
              topic: "顧問式合作模式與服務內容",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "合作模式採顧問制，每兩個月提供一份建議書，涵蓋技術架構檢測、主題關鍵字策略、多模態內容優化、品牌履歷頁面優化及結構化資料建置。" },
                { speaker: "Rebecca Chen", role: "other", label: "AE", text: "會協助擬定主題關鍵字，根據網站現有頁面配置關鍵字，若無適合頁面則新增文章或內容，並提供文章撰寫規劃及潤飾服務。" },
                { speaker: "蔡阿達", role: "ada", text: "建案壽命約一年，建議以常駐服務類關鍵字如預售屋推薦、買房理財為優化主軸，短期建案搭配廣告投放達成快速曝光。" }
              ]
            },
            {
              topic: "AI 曝光追蹤工具與合約時程",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我們自家開發的 AI 曝光追蹤平台可監控品牌被 AI 提及次數、聲量佔比、平均排名、情緒分析及網站引用率，並可與競爭對手比較。免費提供使用一年，條件是同意以甲山林 Logo 作為案例展示。" },
                { speaker: "台北房展中心", role: "other", label: "甲山林", text: "主管需明確時間預期以向老闆報告。" },
                { speaker: "蔡阿達", role: "ada", text: "5/31 前完成簽約，6/1 開始關鍵字選定，8 月正式優化，半年後可見初步成效。合約期 13 個月，後續以實體會議為主，初步擬定下週二三四下午見面。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P38: 德州撲克教學網站 — 越南泰國市場 ======
    {
      id: "poker-geo-site",
      name: "德州撲克教學網站 — 越南泰國市場 GEO 建站",
      icon: "🃏",
      category: "client",
      lastUpdated: "2026-05-07",
      summary: "林林五洽談越南文與泰文德州撲克教學網站建置，80% 內容為教學推廣，結合 AI 翻譯與人工潤稿；排名前三名為必要條件但 awoo 無法保證，雙方立場存在分歧",
      keyPoints: [
        "網站語系為<strong>越南文與泰文</strong>，目標市場為成長中的越南與泰國德州撲克玩家",
        "約 <strong>80% 內容</strong>為德州撲克教學與推廣，持續更新",
        "內容產出流程：AI 產出越南文 YouTube 頻道內容 → 合作翻譯潤稿 → SEO 優化",
        "行銷公司<strong>不負責越南文與泰文市場</strong>，由林林五團隊自行建置與推廣",
        "林林五要求<strong>關鍵字前三名</strong>為必要條件，尤其「線上撲克」「線上德州撲克」等高轉換率關鍵字",
        "蔡阿達說明傳統 SEO <strong>無法保證前三名</strong>，AI 時代可透過精準提示詞提高排名機會但仍有不確定性",
        "林林五表示不希望承諾保證排名，因技術快速變化且風險高",
        "來源為 BNI 博弈網站需求（5/6 小聚提及）"
      ],
      chips: [
        { icon: "🇻🇳", text: "越南文" },
        { icon: "🇹🇭", text: "泰文" },
        { icon: "🎯", text: "前三名需求" },
        { icon: "🤖", text: "AI 翻譯+潤稿" }
      ],
      todos: [
        { owner: "林林五", text: "提供網站架構範例給蔡阿達，確認建置方向", priority: "today" },
        { owner: "蔡阿達", text: "評估越南文與泰文關鍵字前三名排名的技術可行性與策略方案", priority: "week" },
        { owner: "林林五", text: "安排翻譯團隊潤稿越南文YouTube頻道內容，優化SEO文章", priority: "week" },
        { owner: "林林五", text: "與合作方討論是否將前三名排名績效保證條款納入合約", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-07",
          title: "awoo GEO 建站技術顧問合作洽談",
          time: "14:10-14:19",
          duration: "9m",
          participants: "蔡阿達、林林五",
          docUrl: "",
          dialogues: [
            {
              topic: "越南與泰國德州撲克教學網站規劃",
              exchanges: [
                { speaker: "林林五", role: "other", label: "客戶", text: "網站約80%內容為德州撲克相關，語系為越南文與泰文，目標是教學與推廣線上德州撲克平台。會先用AI產出越南文YouTube頻道內容，再由合作翻譯進行潤稿與SEO優化。行銷公司不負責越南文與泰文市場，由團隊自行負責。" },
                { speaker: "蔡阿達", role: "ada", text: "確認內容持續更新與審稿機制，了解語系與市場分工。" }
              ]
            },
            {
              topic: "SEO排名保證爭議",
              exchanges: [
                { speaker: "林林五", role: "other", label: "客戶", text: "前三名排名是必要條件，尤其針對轉換率高且搜尋量大的關鍵字如「線上撲克」「線上德州撲克」。不希望承諾保證排名，因技術快速變化且風險高，若需績效保證可能需尋找其他公司。" },
                { speaker: "蔡阿達", role: "ada", text: "傳統SEO無法保證前三名，AI時代可利用消費者精確提問與對應回答提升排名，但仍有不確定性。認同各公司態度不同，理解對方立場。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P39: VIVANT ======
    {
      id: "vivant-wine",
      name: "VIVANT × awoo — 跨國紅酒品牌 SEO/GEO 整合優化",
      icon: "🍷",
      category: "client",
      lastUpdated: "2026-05-08",
      summary: "首次洽談 — 半導體母公司旗下紅酒品牌，七國網站整合為 .com 與 .tw 雙主站；多網域 SEO 無法互相加乘，建議聚焦主要市場優化；7 月新品上市記者會（台日星港）；免費提供 AI 曝光追蹤工具一年",
      keyPoints: [
        "半導體母公司旗下紅酒溫控品牌，主要市場<strong>台灣、新加坡、日本、香港</strong>",
        "七國網站已整合為 <strong>.com（美金）與 .tw（臺幣綠界）</strong>兩大主站",
        "使用 <strong>Shopify + Stripe</strong>，Stripe 不支援多貨幣轉換，計劃申請日本 Shopify Payment",
        "多網域獨立運作<strong>SEO 無法互相加乘</strong>，建議先聚焦主要市場優化",
        "歐洲網站<strong>重定向混亂</strong>指向法國目錄，需優先解決",
        "網站基礎 SEO 架構良好（H 標籤、Canonical），但 <strong>Meta Title/Description 不足</strong>，缺 FAQ schema",
        "產品高單價（1.5-2.4 萬台幣），消費者對溫控認知不足需<strong>大量品牌教育</strong>",
        "<strong>7 月新品上市</strong>記者會（台灣、日本、新加坡、香港）+ KOL 合作",
        "團隊無專職工程師，靠 AI 工具維護網站，計劃<strong>招募台灣文案專員</strong>",
        "awoo 提出 AI 結合既有內容打造<strong>品牌風格文案產出系統</strong>"
      ],
      chips: [
        { icon: "🌏", text: "台日星港四市場" },
        { icon: "🛒", text: "Shopify 雙主站" },
        { icon: "📅", text: "7月新品上市" },
        { icon: "💰", text: "高單價1.5-2.4萬" }
      ],
      todos: [
        { owner: "Bryan Chou", text: "針對 .com 及 .tw 網站進行 SEO 與 GEO 狀態分析，提出優化建議", priority: "week" },
        { owner: "Conny Wu", text: "提供 Shopify 帳號供 awoo 團隊評估網站架構與可行性", priority: "today" },
        { owner: "蔡阿達", text: "安排實體或線上會議，邀請 Conny 老闆參與促進共識", priority: "week" },
        { owner: "蔡阿達", text: "提供 AI 影片製作廠商報價與 Demo 供 VIVANT 參考", priority: "week" },
        { owner: "Bryan Chou", text: "協助解決歐洲網站域名與金流重定向混亂問題", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-08",
          title: "VIVANT × awoo 首次合作洽談",
          time: "10:00-11:00",
          duration: "1h00m",
          participants: "蔡阿達、Bryan Chou、Conny Wu（VIVANT）",
          docUrl: "",
          dialogues: [
            {
              topic: "公司背景與網站現況",
              exchanges: [
                { speaker: "Conny Wu", role: "other", label: "VIVANT", text: "公司背景為半導體母公司，團隊包含 Google India 的數位行銷人員，主要市場為台灣、新加坡、日本、香港，歐洲市場狀況不佳。原有七個國家獨立網站，整合為 .com 和 .tw 兩大主站。" },
                { speaker: "Conny Wu", role: "other", label: "VIVANT", text: "使用 Stripe 作為國際支付工具，但不支援多貨幣轉換。計劃利用日本分公司申請 Shopify Payment，未來將所有網站整合至一個 .com 平台。" }
              ]
            },
            {
              topic: "網站 SEO 與多語系管理",
              exchanges: [
                { speaker: "Bryan Chou", role: "other", label: "awoo", text: "多網域獨立運作導致 SEO 資源無法互相加乘，建議先聚焦主要市場優化。網站基礎架構良好但 Meta 資訊不足，FAQ 等結構化資料缺乏。" },
                { speaker: "蔡阿達", role: "ada", text: "歐洲地區重定向混亂與金流問題需優先解決。網站內容可信度與權威度高，符合 AI 應用偏好，後續重點在於提升爬蟲理解度。" }
              ]
            },
            {
              topic: "廣告策略與品牌教育挑戰",
              exchanges: [
                { speaker: "Conny Wu", role: "other", label: "VIVANT", text: "產品價格高，消費者對溫度控制認知不足需大量教育。過去 KOL 廣告曾有 19 次加入購物車但無轉換，Landing Page 需優化。7 月將在台日星港舉辦新品記者會。" },
                { speaker: "蔡阿達", role: "ada", text: "建議利用 AI 技術結合既有內容打造符合老闆需求的文案產出流程。影片製作方面可提供專業 AI 影片製作廠商資源。" }
              ]
            },
            {
              topic: "合作流程與後續執行",
              exchanges: [
                { speaker: "Bryan Chou", role: "other", label: "awoo", text: "合作前期進行網站全面評估，確認優化內容與目標關鍵字。合作期間每兩個月提供一次優化報告。" },
                { speaker: "Conny Wu", role: "other", label: "VIVANT", text: "願意提供 Shopify 帳號供團隊評估，希望安排會議邀請老闆參與確保溝通順暢。" },
                { speaker: "蔡阿達", role: "ada", text: "雙方先從網站 SEO 與內容優化著手，後續再進行廣告投放與數據分析合作。我提供 LINE 聯絡方式方便即時溝通。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P40: 維課教育 ======
    {
      id: "weclass-edu",
      name: "維課教育 — 兒童教育品牌 GEO 技術合作",
      icon: "🧒",
      category: "client",
      lastUpdated: "2026-05-12",
      summary: "新竹兒童創意教育品牌首次洽談 — 網站以圖片動畫為主缺乏文字內容、技術架構偏舊；評估網站重建或套版搭配 SEO/GEO 優化；20 字與 30 字兩種方案、兩年合約附免費建站；預計 2-3 個月見排名提升",
      keyPoints: [
        "新竹起家 PBL 教學品牌，鎖定 <strong>6-12 歲</strong>，合作版圖涵蓋台北至台東",
        "現有網站<strong>幾乎無文字內容</strong>，AI 爬蟲可抓取的有效資訊極有限",
        "技術架構偏舊（SPA 類型），對搜尋引擎與 AI 爬蟲<strong>極不友善</strong>",
        "缺乏品牌故事、創辦人介紹、教學理念深度頁，<strong>E-E-A-T 訊號極薄弱</strong>",
        "兩種方案：<strong>客戶自行架設</strong>或 <strong>awoo 合作廠商套版搭建</strong>，Peter Su 兩案皆可接受",
        "GeoSuite 工具可監控網站 <strong>AI 引用狀況</strong>及競品比較",
        "合作內容一年 <strong>17 篇文章</strong>（10 篇 awoo + 7 篇客戶/AI 輔助）",
        "20 字方案涵蓋 3-4 個主題，30 字方案涵蓋 4-6 個主題",
        "長期合作<strong>簽約兩年可免網站建置費</strong>，含 SEO 排名與 AI 監控工具",
        "成效預估：持續上架內容後 <strong>2-3 個月</strong>可見排名提升"
      ],
      chips: [
        { icon: "🏫", text: "兒童教育品牌" },
        { icon: "🔑", text: "20/30字方案" },
        { icon: "📝", text: "17篇/年" },
        { icon: "📅", text: "兩年合約" }
      ],
      todos: [
        { owner: "蔡阿達", text: "提供 20 字與 30 字兩種 SEO 方案報價單給 Peter Su", priority: "today" },
        { owner: "蔡阿達", text: "寄送簡報、報價單及會議記錄給 Peter Su 供內部評估", priority: "today" },
        { owner: "蔡阿達", text: "與合作廠商確認系統套版與後臺架設細節", priority: "week" },
        { owner: "蔡阿達", text: "規劃一年 17 篇文章內容產出計畫，搭配 GeoSuite 監控", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-12",
          title: "維課教育官網 GEO 技術合作洽談",
          time: "11:00-11:25",
          duration: "25m",
          participants: "蔡阿達、Peter Su（維課教育）、Joanna Wang",
          docUrl: "",
          dialogues: [
            {
              topic: "網站架設與合作模式",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "客戶若自行架設網站能完全掌控進度與細節，但需有完整工程團隊。我們合作廠商擅長快速套版系統，能配合已有的前端設計圖。" },
                { speaker: "Peter Su", role: "other", label: "維課", text: "兩種方案都可以接受，由 awoo 協助架設有利於後續調整與配合。" },
                { speaker: "蔡阿達", role: "ada", text: "網站彈性與好用性比外觀重要，建議由客戶提供視覺設計稿以減少溝通誤差。" }
              ]
            },
            {
              topic: "SEO/GEO 優化方案與成效預估",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我們 2017 年起投入軟體開發，2024 年推出 GeoSuite 工具可監控網站是否被 AI 引用及競品比較。合作一年 17 篇文章，10 篇由 awoo 撰寫，7 篇客戶撰寫可選 AI 輔助。" },
                { speaker: "Peter Su", role: "other", label: "維課", text: "確認 SEO 涵蓋 AEO 與 GEO。關鍵字排名成效及時間預估如何？" },
                { speaker: "蔡阿達", role: "ada", text: "從最小可行方案開始，20 字與 30 字兩種方案。因網站內容尚少，持續上架內容預計 2-3 個月可見排名提升。簽約兩年可免網站建置費。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P41: 高谷科技 × 高藝資訊 ======
    {
      id: "kville-partner",
      name: "高谷科技 × 高藝資訊 — 高雄事業發展合作",
      icon: "🏭",
      category: "partner",
      lastUpdated: "2026-05-12",
      summary: "首次洽談 — 高雄系統開發公司（Sean Liu），高谷科技負責網站系統接案、高藝資訊專注診所通 APP；蔡阿達期待雙方合作推動中南部傳統產業數位化；診所通 APP 超過 19 萬用戶，具備拓展潛力；邀請 Sean Liu 參加週五 BNI 活動",
      keyPoints: [
        "兩間公司股東相同但業務區分：<strong>高谷科技</strong>（網站系統接案）vs <strong>高藝資訊</strong>（診所通 APP）",
        "診所通 APP 超過 <strong>19 萬人註冊</strong>，涵蓋線上預約、看診進度、健康日記共享圈",
        "數位看板同步線上看診進度，<strong>已取得專利</strong>",
        "過往案例：外語教學網站、律師案件管理、勞務顧問管理、碳足跡管理系統",
        "蔡阿達致力推動<strong>中南部中小企業數位化</strong>，目前缺乏固定網站設計合作廠商",
        "高雄已組建行銷開店產業鏈：企業形象影片、資訊系統、社群行銷、戶外廣告",
        "蔡阿達將提供約 <strong>50 間產業代表性客戶</strong>資料供 Sean Liu 參考",
        "未來計畫將營養師服務、預約系統等功能<strong>獨立成 APP</strong>",
        "已與<strong>藍新洽談第三方支付</strong>整合"
      ],
      chips: [
        { icon: "🏥", text: "診所通19萬用戶" },
        { icon: "🔧", text: "系統開發" },
        { icon: "🌏", text: "高雄事業" },
        { icon: "🤝", text: "產業鏈合作" }
      ],
      todos: [
        { owner: "蔡阿達", text: "提供約 50 間產業代表性客戶名單給 Sean Liu 參考", priority: "week" },
        { owner: "蔡阿達", text: "安排 Sean Liu 參加週五 BNI 簡報活動，提供廠商名冊", priority: "today" },
        { owner: "Sean Liu", text: "確認週五行程並回覆是否能參加 BNI 活動", priority: "today" },
        { owner: "蔡阿達", text: "篩選適合技術支援合作的產業與客戶，尋找雙方合作機會", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-12",
          title: "高易資訊 x awoo 高雄事業發展合作洽談",
          time: "13:58-14:42",
          duration: "44m",
          participants: "蔡阿達、Sean Liu（高谷科技/高藝資訊）",
          docUrl: "",
          dialogues: [
            {
              topic: "高谷科技與高藝資訊業務定位",
              exchanges: [
                { speaker: "Sean Liu", role: "other", label: "高谷", text: "高谷科技主要負責網站與系統接案及小型產品開發，高藝資訊則專注於診所通 APP 及大螢幕應用。兩間公司股東相同，今年 3、4 月正式區分定位。" },
                { speaker: "蔡阿達", role: "ada", text: "與醫院副院長合作病例系統可由高藝資訊處理，兩間公司合作空間大。" }
              ]
            },
            {
              topic: "中南部傳統產業數位化合作",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我是高雄人，致力推動中南部中小企業數位化與資訊化。目前在高雄組建行銷開店產業鏈，涵蓋企業形象影片、資訊系統開發、社群行銷及戶外廣告。目前缺乏網站設計廠商，之前固定合作廠商兩年前離開。" },
                { speaker: "Sean Liu", role: "other", label: "高谷", text: "公司主要強項為系統開發，網站設計為配套服務。近期拜訪環保材質公司協助開發碳足跡管理系統，與金屬中心有合作經驗。" }
              ]
            },
            {
              topic: "診所通 APP 功能與市場應用",
              exchanges: [
                { speaker: "Sean Liu", role: "other", label: "高谷", text: "診所通 APP 目前超過 19 萬人註冊，涵蓋線上預約、看診進度同步、健康日記共享圈及數位看板專利。未來將拓展至長照及其他行業。" },
                { speaker: "蔡阿達", role: "ada", text: "此產品具市場潛力，適合推廣給中南部傳統產業客戶。建議結合第三方支付功能提升實用性。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P43: 九一平台合作風險 ======
    {
      id: "91app-risk",
      name: "九一平台 — 合作合約風險與客戶鞏固策略",
      icon: "⚠️",
      category: "partner",
      lastUpdated: "2026-05-15",
      summary: "藍文甫反映與九一平台合作合約缺乏三方合約精神，恐導致客戶違約風險；合約 7/30 到期，需盡快確認九一意向；計畫一個月內拜訪 17 家客戶推動轉簽新合約，並以免費工具試用一年提高客戶黏著度",
      keyPoints: [
        "與九一合作合約已簽<strong>三四年</strong>，但僅為雙方合約，<strong>缺乏三方合約保障</strong>",
        "合約將於 <strong>7 月 30 日到期</strong>，若九一無反應將自動續約，但需盡快確認九一意向",
        "擔心九一可能<strong>突然終止合作並帶走客戶</strong>，造成對客戶違約風險",
        "策略：先<strong>拜訪客戶深化關係</strong>，推動客戶轉簽新合約以減少衝擊",
        "Max Huang 建議利用<strong>功能差異與價格優惠</strong>吸引客戶轉簽，快速行動避免客戶流失",
        "藍文甫提議<strong>免費提供工具試用一年</strong>，增加客戶黏著度",
        "現有 <strong>17 家客戶</strong>合約需掃描，優先推動轉簽新合約並給予折扣優惠"
      ],
      chips: [
        { icon: "⏰", text: "7/30到期" },
        { icon: "👥", text: "17家客戶" },
        { icon: "🆓", text: "免費試用1年" },
        { icon: "🚨", text: "違約風險" }
      ],
      todos: [
        { owner: "藍文甫", text: "一個月內完成 17 家客戶拜訪與關係深化，推動客戶轉簽新合約", priority: "today" },
        { owner: "藍文甫", text: "使用工具掃描客戶狀況，促成客戶簽訂一年以上新合約並提供價格優惠", priority: "week" },
        { owner: "Max Huang", text: "準備免費提供工具試用一年方案，作為客戶留存策略", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-15",
          title: "Weekly Sync Up — 九一平台合約風險與客戶鞏固",
          time: "10:31-11:03",
          duration: "32m",
          participants: "蔡阿達、Max Huang、藍文甫（Leo）",
          docUrl: "",
          dialogues: [
            {
              topic: "九一平台合約缺陷與違約風險",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "與九一合作合約已簽三四年，但為雙方合約缺乏三方合約精神，可能導致對客戶違約風險。合約 7 月 30 日到期，若九一無反應將自動續約，但需盡快確認九一意向。擔心九一突然終止合作並帶走客戶。" },
                { speaker: "Max Huang", role: "other", label: "顧問", text: "建議利用功能差異與價格優惠吸引客戶轉簽，快速行動避免被九一搶走客戶。需掃描現有 17 家客戶合約，優先轉簽新合約並給予折扣優惠。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "建議先拜訪客戶深化關係，推動客戶轉簽新合約減少衝擊。可免費提供工具試用一年增加客戶黏著度。" },
                { speaker: "蔡阿達", role: "ada", text: "同意加速客戶鞏固行動，優先確保 17 家客戶的合約轉簽，避免被九一帶走。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P42: 佳憲引薦合作 ======
    {
      id: "jiaxian-referral",
      name: "佳憲引薦合作 — 高雄在地品牌客戶開發",
      icon: "🏪",
      category: "partner",
      lastUpdated: "2026-05-14",
      summary: "蔡阿達向佳憲演練 awoo 三大銷售主張（AI 搜尋曝光、地方品牌擴展全國、免技術門檻網站服務），請佳憲協助引薦高雄在地有規模的老店接班人作為理想客戶；佳憲建議放慢簡報語速以利聽眾理解",
      keyPoints: [
        "awoo <strong>三大銷售主張</strong>：① AI 搜尋摘要曝光 ② 地方品牌擴展全國市場 ③ 免技術門檻網站自動化服務",
        "成功案例：<strong>高雄原生家電</strong>透過技術成功提升飲水機相關關鍵字 AI 曝光",
        "客戶以超過 <strong>300 組關鍵字</strong>被 AI 推薦，成功從地方品牌擴展至全國市場",
        "合作廠商可<strong>免費加站</strong>並自動撰寫文章、分類及同步社群，解決缺乏人力與技術的痛點",
        "目標引薦對象：<strong>高雄在地有規模的老店接班人</strong>，如前進肉燥飯等品牌",
        "佳憲建議蔡阿達<strong>放慢簡報語速</strong>，簡報以三張投影片為主，避免過於複雜"
      ],
      chips: [
        { icon: "🎯", text: "3大USP" },
        { icon: "🏪", text: "高雄老店" },
        { icon: "🔑", text: "300+關鍵字" },
        { icon: "📊", text: "3張簡報" }
      ],
      todos: [
        { owner: "蔡阿達", text: "調整簡報語速，確保三張投影片內容清楚傳達", priority: "week" },
        { owner: "佳憲", text: "協助引薦高雄在地有規模的老店接班人客戶", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-05-14",
          title: "awoo 銷售主張與高雄客戶引薦策略說明",
          time: "13:01-13:22",
          duration: "21m",
          participants: "蔡阿達、佳憲",
          docUrl: "",
          dialogues: [
            {
              topic: "awoo 三大銷售主張介紹",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "介紹 awoo 三大獨特銷售主張：第一，協助品牌出現在 Google 搜尋的 AI 摘要框中，像高雄原生家電就透過這項技術成功提升飲水機相關關鍵字曝光。" },
                { speaker: "蔡阿達", role: "ada", text: "第二，針對地方品牌面臨龐大廣告預算問題，幫助客戶以超過 300 組關鍵字被 AI 推薦，成功從地方擴展到全國市場。" },
                { speaker: "蔡阿達", role: "ada", text: "第三，提供免技術門檻的網站服務，合作廠商可免費加站並自動撰寫文章、分類及同步社群，解決客戶缺乏人力與技術的痛點。" }
              ]
            },
            {
              topic: "高雄客戶引薦策略與簡報調整",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "請佳憲協助引薦高雄在地有規模的老店接班人，特別是已有一定規模的品牌，像附近的前進肉燥飯就是理想的客戶類型。" },
                { speaker: "佳憲", role: "other", label: "引薦夥伴", text: "講話速度有點快，可能會影響聽眾理解，建議放慢一些以利內容傳達。" },
                { speaker: "蔡阿達", role: "ada", text: "會控制語速，簡報內容以三張投影片為主，避免過於浮誇或複雜，確保聽眾能夠理解。" }
              ]
            }
          ]
        }
      ]
    },
    // ====== P44: Shopline 業務開發 ======
    {
      id: "shopline-bd",
      name: "Shopline 業務開發 — 客戶篩選與質檢報告升級",
      icon: "🛒",
      category: "internal",
      lastUpdated: "2026-05-19",
      summary: "5/19 確認 Shopline 代收付現況 — 信用卡自動扣款不可行、訂單 7 天有效期、6% 佣金為合約要求；虛擬 ATM 付款測試以魚翅巧克力為對象；商機篩選許願池機制優化討論",
      keyPoints: [
        "Shopline 網站建檢已有<strong>六七個品牌</strong>開會介紹，但客戶需求不明確、轉化率偏低",
        "建議蔡阿達接手<strong>艾瑞 inquiry 客戶初步篩選</strong>，減少 AE 重複溝通負擔",
        "活動名單交由艾琳以陌生開發方式接觸，<strong>inquiry 由蔡阿達先行篩選</strong>確認需求後再交 AE",
        "先從 <strong>GO 官網填單</strong>開始試行篩選流程，收集數據作為與管理層溝通依據",
        "試行方案<strong>一個月</strong>驗證成效，下週一與劉麗會議中提案",
        "最新質檢報告整合<strong>阿普爬蟲技術</strong>，能抓取站內外資訊並以 AI 視角分析網站狀況",
        "呂紹平建議將 <strong>Google 最新 SEO 與生成式 AI 使用指南</strong>匯入工具，提升報告 E-E-A-T 信任度",
        "工具改版：從兩個賬號分別登入改為<strong>一個賬號切換多個 token</strong>，提升使用便利性",
        "🆕 5/19 Shopline 代收付確認：<strong>信用卡自動扣款不可行</strong>，客戶需自行輸入卡號付款",
        "🆕 5/19 訂單有效期 <strong>7 天</strong>（刷卡或虛擬 ATM 皆適用），逾期作廢需重開",
        "🆕 5/19 Shopline 合作期間所有客戶需支付 <strong>6% 佣金</strong>，代收付為合約要求",
        "🆕 5/19 GEO 與 SEO 方案<strong>不需安裝 Shopline APP</strong>，直接開其他賬單即可",
        "🆕 5/19 以<strong>魚翅巧克力</strong>客戶作為虛擬 ATM 付款測試對象",
        "🆕 5/19 Demo Shop 需先由 Shopline 開通虛擬 ATM 功能才能進行測試"
      ],
      chips: [
        { icon: "🔍", text: "inquiry 篩選" },
        { icon: "📊", text: "質檢報告升級" },
        { icon: "💳", text: "代收付 7天期限" },
        { icon: "🧪", text: "虛擬ATM測試中" }
      ],
      todos: [
        { owner: "蔡阿達", text: "接手艾瑞 inquiry 客戶初步篩選，試行一個月驗證成效", priority: "week" },
        { owner: "呂紹平（Leon）", text: "取得 Demo Shop 登入資訊，與楊舒涵共同測試虛擬 ATM 付款流程", priority: "today" },
        { owner: "楊舒涵", text: "安排魚翅巧克力客戶進行虛擬 ATM 年繳付款實測", priority: "week" },
        { owner: "李陽", text: "測試 Demo Shop 中虛擬 ATM 及 GEO/SEO APP 賬單開立功能", priority: "week" },
        { owner: "Anne Chang", text: "確認 Shopline 代收付合約條款及佣金 6% 支付細節", priority: "week" },
        { owner: "呂紹平（Leon）", text: "將 Google SEO 與生成式 AI 使用指南整合至質檢工具", priority: "week" },
        { owner: "蔡阿達", text: "持續觀察客戶對最新質檢報告的反應並調整內容", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-19",
          title: "AE<>BA meeting — Shopline 代收付流程確認",
          time: "16:01-16:46",
          duration: "45m",
          participants: "楊舒涵、呂紹平、Anne Chang、李陽",
          docUrl: "",
          dialogues: [
            {
              topic: "Shopline 代收付機制與信用卡自動扣款",
              exchanges: [
                { speaker: "楊舒涵", role: "other", label: "BA", text: "Shopline 代收付機制上線以來狀況多變，系統不穩定且回覆不一致。信用卡自動扣款功能目前無法實現，客戶需自行輸入卡號付款。" },
                { speaker: "呂紹平", role: "other", label: "Leon", text: "Shopline 合作期間所有客戶均需支付 6% 佣金，代收付為合約要求。GEO 與 SEO 方案不需安裝 Shopline APP，直接開其他賬單即可。" }
              ]
            },
            {
              topic: "訂單有效期與虛擬 ATM 測試計畫",
              exchanges: [
                { speaker: "楊舒涵", role: "other", label: "BA", text: "訂單有效期為 7 天，無論刷卡或虛擬 ATM 皆適用，逾期作廢需重開。將以魚翅巧克力客戶作為虛擬 ATM 付款測試對象。" },
                { speaker: "呂紹平", role: "other", label: "Leon", text: "Demo Shop 需先由 Shopline 開通虛擬 ATM 功能才能測試。取得登入資訊後與楊舒涵共同測試，確認無誤再向團隊布達。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-18",
          title: "Shopline 業務開發，協作討論",
          time: "16:01-16:35",
          duration: "34m",
          participants: "蔡阿達、呂紹平（Leon）",
          docUrl: "",
          dialogues: [
            {
              topic: "網站建檢客戶接洽與轉化率問題",
              exchanges: [
                { speaker: "呂紹平", role: "other", label: "Leon", text: "網站建檢資料申請時無客戶聯絡窗口，需由 AM 先溝通後才介入。目前六七個品牌開會介紹建檢內容，但客戶需求不明確，轉化率不高。" },
                { speaker: "蔡阿達", role: "ada", text: "認同此分工可幫助 AE 節省時間，建議下週一會議中討論此方案。" }
              ]
            },
            {
              topic: "inquiry 與活動名單分工優化",
              exchanges: [
                { speaker: "呂紹平", role: "other", label: "Leon", text: "目前艾琳無法完整傳達客戶需求，AE 接手後仍需重新溝通約 10 分鐘。部分客戶預算有限，艾琳難以篩選。" },
                { speaker: "蔡阿達", role: "ada", text: "此分工可提升轉化率，建議先從 GO 官網填單開始試驗，取得數據後再與管理層討論是否全面調整。" }
              ]
            },
            {
              topic: "管理層溝通策略",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "擔心直接溝通可能引發管理層激動，建議先由呂紹平溝通，必要時再介入。試行方案可快速取得結果。" },
                { speaker: "呂紹平", role: "other", label: "Leon", text: "先從 GO 官網填單開始試驗，層層篩選提高轉化率，取得數據後再與管理層討論。" }
              ]
            },
            {
              topic: "質檢報告升級與 AI 技術整合",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "最新版質檢報告整合阿普爬蟲，能同時抓取站內外資訊並以 AI 視角呈現網站特性，更簡化且針對 AI 狀況回饋。" },
                { speaker: "呂紹平", role: "other", label: "Leon", text: "Google 公告不一定需要 LMS.TXT 即可抓取網站內容，建議將 Google 準則匯入工具，報告依此標準產出，提升 E-E-A-T 信任度。" },
                { speaker: "蔡阿達", role: "ada", text: "擔心報告技術細節過多讓客戶困惑，建議適度篩選資訊並觀察客戶反應。" }
              ]
            },
            {
              topic: "工具賬號改版說明",
              exchanges: [
                { speaker: "呂紹平", role: "other", label: "Leon", text: "目前客戶有兩個賬號分別追蹤不同品牌，改版後將可用一個賬號切換多個 token，減少登入次數。" },
                { speaker: "蔡阿達", role: "ada", text: "要求隨機應變處理客戶問題，確保改版順利推行。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P45: 妙平團體服 ======
    {
      id: "miaoping",
      name: "妙平團體服 — 黃永宏初次交流",
      icon: "👔",
      category: "client",
      lastUpdated: "2026-05-20",
      summary: "5/20 初次線上交流 — 妙平從學生服起家（30 年），近年轉型團體服市場，三年累計銷售逾十萬件；蔡阿達建議以 BI 平台接觸多元產業，並評估網站建置與數位行銷可行性",
      keyPoints: [
        "妙平從<strong>學生服起家已 30 年</strong>，近年因學生數減少積極轉型團體服市場",
        "三年內累計銷售超過<strong>十萬件團體服</strong>，設定 2036 年營業額目標 <strong>900 萬元</strong>",
        "自有工廠優勢 — <strong>純手工裁布車縫</strong>，快速出貨且價格合理，款式多元客製化",
        "日商未知數合作案例 — 一個月完成約 <strong>900-1000 件</strong>繡製 logo 訂單，提供一條龍服務（繡製 + 物流配送）",
        "目標拓展：南北各一間<strong>連鎖企業顧問</strong>、20 間<strong>會計師事務所</strong>、3 間<strong>活動公關公司</strong>",
        "目前客戶來源為<strong>朋友及設計師介紹</strong>，尚未積極經營數位行銷",
        "蔡阿達建議以 <strong>BI 平台</strong>接觸多元產業廠商，網站建置需長期投入資源",
        "Google 評論有負評問題（含<strong>同行惡意評論</strong>），部分已申訴刪除，需專業社群經營者協助",
        "蔡阿達提醒網站需重視<strong>視覺設計、排版與產品整理</strong>，非僅文字列表",
        "若客戶願意長期合作，可考慮<strong>免費架設網站、費用由月費覆蓋</strong>"
      ],
      chips: [
        { icon: "👕", text: "團體服 10萬+" },
        { icon: "🏭", text: "自有工廠" },
        { icon: "🎯", text: "目標 900萬" },
        { icon: "🌐", text: "評估建站中" }
      ],
      todos: [
        { owner: "蔡阿達", text: "協助黃永宏評估建置網站的必要性與可行性，提供建站與維護建議", priority: "week" },
        { owner: "蔡阿達", text: "協助黃永宏了解網站流量與轉換價值，提供後續優化建議", priority: "week" },
        { owner: "黃永宏", text: "評估並決定是否啟動網站建置計畫，整理產品資訊與視覺設計需求", priority: "waiting" },
        { owner: "黃永宏", text: "評估是否架設粉絲專頁以增加行銷管道", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-05-20",
          title: "永宏🔛蔡阿達初次線上交流",
          time: "11:33-12:05",
          duration: "32m",
          participants: "蔡阿達、黃永宏（妙平團體服）",
          docUrl: "",
          dialogues: [
            {
              topic: "妙平團體服業務現況與轉型目標",
              exchanges: [
                { speaker: "黃永宏", role: "other", label: "妙平", text: "妙平從學生服起家已 30 年，近年因學生數減少，積極轉型團體服市場。三年內累計銷售超過十萬件，設定 2036 年營業額目標 900 萬元，計畫拓展南北連鎖企業顧問、會計師事務所及活動公關公司客戶。" },
                { speaker: "黃永宏", role: "other", label: "妙平", text: "自有工廠優勢，純手工裁布車縫，能快速且價格合理地完成訂單。與日商未知數合作，一個月內完成約 900 到 1000 件繡製 logo 訂單，提供含繡製及物流的一條龍服務。" }
              ]
            },
            {
              topic: "客戶來源與行銷策略現況",
              exchanges: [
                { speaker: "黃永宏", role: "other", label: "妙平", text: "目前主要客戶來源為朋友及設計師介紹，尚未積極經營粉絲專頁等數位行銷管道，考慮是否架設網站及線上訂單功能。" },
                { speaker: "蔡阿達", role: "ada", text: "建議以 BI 平台作為接觸多元產業廠商的管道，網站經營需投入時間與資源。若客戶願意長期合作，可考慮免費架設網站，費用由月費覆蓋。" }
              ]
            },
            {
              topic: "Google 評論管理與網站建置評估",
              exchanges: [
                { speaker: "黃永宏", role: "other", label: "妙平", text: "Google 評論有部分負評，包含七年前的一顆星留言，部分來自同行惡意攻擊，已向 Google 申訴成功刪除。" },
                { speaker: "蔡阿達", role: "ada", text: "Google 評論管理需專業社群經營，避免突發問題難以處理。網站主要價值在於帶來訪客與轉換，需重視視覺設計與內容經營。若無足夠人力與目標，建議暫緩架設。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P46: 阿波面試 ======
    {
      id: "apo-interview",
      name: "阿波（Jacky Huang）— AI 工具開發人才面試",
      icon: "🧑‍💻",
      category: "internal",
      lastUpdated: "2026-05-22",
      summary: "5/22 初次面談 — 統計背景、五年數據分析經驗，近兩年結合生成式 AI 開發產品（音樂社群網站、樂團 POS 系統）；蔡阿達表示本次為認識階段，無需當下決定",
      keyPoints: [
        "阿波（Jacky Huang）統計背景，<strong>五年數據分析經驗</strong>，擅長將模糊需求轉化為系統架構",
        "近兩年結合生成式 AI 開發產品：<strong>音樂社群網站（龐克擂臺）</strong>與<strong>高雄百樂門酒館 POS 系統</strong>",
        "主要使用 AI 工具：<strong>Claude、GPT、Gemini、Perplexity</strong>，部署於 Vercel",
        "競爭對手分析方法論 — 先用 Perplexity 廣泛收集資料，再進行模組化產品分析",
        "文章生成工具規劃 — 需明確定義文章類型、長度、結構，並控制 token 成本",
        "尚未嘗試金流整合，AI 視覺設計仍需人工設計師介入",
        "蔡阿達表示<strong>本次為認識階段</strong>，後續由內部相關人員安排跟進"
      ],
      chips: [
        { icon: "📊", text: "數據分析 5年" },
        { icon: "🤖", text: "AI 產品開發" },
        { icon: "🎸", text: "音樂產業經驗" },
        { icon: "🔍", text: "認識階段" }
      ],
      todos: [
        { owner: "awoo 內部", text: "評估阿波之 AI 產品開發能力與公司需求匹配度，安排後續面談", priority: "week" },
        { owner: "awoo 內部", text: "與阿波保持聯繫，安排後續合作或產品開發事宜", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-05-22",
          title: "阿波 <> awoo 團隊",
          time: "17:00-17:56",
          duration: "56m",
          participants: "蔡阿達、阿波（Jacky Huang）",
          docUrl: "",
          dialogues: [
            {
              topic: "阿波自我介紹與 AI 工具開發經驗",
              exchanges: [
                { speaker: "阿波", role: "other", label: "候選人", text: "統計背景，五年數據分析經驗，近兩年結合生成式 AI 開發產品，包含音樂社群網站「龐克擂臺」與高雄百樂門酒館 POS 系統。擅長將模糊需求轉化為系統架構，主要使用 Claude、GPT、Gemini、Perplexity。" },
                { speaker: "阿波", role: "other", label: "候選人", text: "使用 Vercel 部署前後端，但 bug log 訊息過於模糊增加除錯難度。尚未嘗試金流整合，AI 視覺設計仍需人工設計師介入。" }
              ]
            },
            {
              topic: "競爭對手分析與文章生成工具規劃",
              exchanges: [
                { speaker: "阿波", role: "other", label: "候選人", text: "競爭對手分析先用 Perplexity 廣泛收集，再模組化分析產品特性與客戶需求。文章生成工具需明確分類文章類型、長度與結構，長文需標題、摘要、免責聲明，並控制 token 成本與每日產生量。" }
              ]
            },
            {
              topic: "會議結論與後續安排",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "本次會議主要為了解與認識，無需當下做出決定。後續由公司相關人員保持聯繫並安排跟進事宜。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P47: 建站顧問合約模式 ======
    {
      id: "website-consulting-contract",
      name: "建站顧問服務合約模式 — 收費與第三方合作架構",
      icon: "🏗️",
      category: "company",
      lastUpdated: "2026-05-22",
      summary: "5/22 決議建站加顧問服務採一次性簽訂 18 個月合約、固定每月收費 3 萬元，不因網站上線延遲調整；第三方建站廠商由客戶直接簽約、awoo 負責監管協調",
      keyPoints: [
        "建站加顧問服務合約統一為 <strong>18 個月固定收費</strong>，每月 <strong>3 萬元</strong>",
        "不因網站上線時間延遲而調整收費 — 避免服務啟動延後的收費問題",
        "AE 協助督促客戶網站上線，<strong>CS 負責後續維護</strong>",
        "第三方建站合作：客戶<strong>直接與建站廠商簽約</strong>，awoo 負責監管與協調",
        "藍文甫建議不應由 awoo 包山包海，若責任與收益不成正比則<strong>不承接</strong>",
        "考慮簽訂合作協議明確規範第三方責任與服務標準",
        "需與<strong>財務確認收入認列</strong>，避免服務未實質提供影響財務報表"
      ],
      chips: [
        { icon: "📄", text: "18個月合約" },
        { icon: "💰", text: "3萬/月" },
        { icon: "🤝", text: "第三方簽約" },
        { icon: "⚖️", text: "財務確認中" }
      ],
      todos: [
        { owner: "蔡阿達", text: "推動建站加顧問服務合約統一為 18 個月固定收費，與團隊確認執行細節", priority: "week" },
        { owner: "蔡阿達", text: "與維尼及財務部門協調，確認合約模式在財務認列及法務合規上的可行性", priority: "week" },
        { owner: "藍文甫", text: "制定合作廠商的合作協議，明確權利義務及責任範圍", priority: "week" },
        { owner: "蔡阿達", text: "持續監督第三方建站廠商服務品質，必要時簽訂補充合約條款", priority: "week" },
        { owner: "Anne Chang", text: "安排與維尼召開會議，討論合約及財務認列相關細節", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-22",
          title: "Weekly Sync Up — 建站顧問合約與第三方合作模式",
          time: "11:01-12:50",
          duration: "1h49m",
          participants: "蔡阿達、Anne Chang、藍文甫、Max Huang",
          docUrl: "",
          dialogues: [
            {
              topic: "建站顧問服務合約收費模式調整",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "提出以第三方客戶試用品牌賬號追蹤成效，促進後續顧問服務需求。建站加顧問合約統一為 18 個月固定每月收費 3 萬元，不因上線延遲調整。" },
                { speaker: "Anne Chang", role: "other", label: "PM", text: "現行系統無法模糊建站與顧問服務時間，需明確訂定服務期間以利專案登記與財務預估。建議與維尼召開會議確認認列細節。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "此模式可能引發客戶質疑未提供實質服務仍收費，建議合約明確規範客戶承擔風險。" }
              ]
            },
            {
              topic: "第三方建站合作模式與責任分配",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "目前與固定第三方合作建站，廠商配合度高且技術能力良好，將持續監督並願意與廠商補簽約束性合約。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "建站廠商應直接與客戶簽約，避免 awoo 承擔過多責任。若責任與收益不成正比且風險過大，建議不承接。" },
                { speaker: "Max Huang", role: "other", label: "顧問", text: "可考慮由 awoo 向建站廠商收取退佣，但蔡阿達認為財務上較複雜且收益有限。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P48: 偉強官網 GEO 合作 ======
    {
      id: "weiqiang-geo",
      name: "偉強股份有限公司 — 官網 GEO 技術合作",
      icon: "🔌",
      category: "client",
      lastUpdated: "2026-05-29",
      summary: "5/29 續談確認合作方向 — 以「替代物料專家」為品牌定位主軸，聚焦 30 個主要品牌替代料，透過部落格與知識文章建構 AI 可爬取內容，提升搜尋能見度與客戶詢問率",
      keyPoints: [
        "偉強為<strong>電子零組件代理商</strong>，主要客群為國內 B2B 大中型工廠",
        "網站剛上線且缺乏專人經營，<strong>搜尋排名與 AI 能見度極低</strong>",
        "AI 誤將偉強與華晨電機視為同一廠商 — 華晨為製造商，偉強為代理商，<strong>需透過結構化資料糾正</strong>",
        "網站<strong>未使用 Schema 結構化資料</strong>，蔡阿達說明 Schema 對爬蟲理解網站內容的重要性",
        "🆕 5/29 雙方確認以<strong>「替代物料專家」</strong>作為品牌定位主軸，聚焦 30 個主要代理品牌及其替代料",
        "🆕 5/29 強勢產品線確認：<strong>半導體、保險絲、MOSFET、繼電器、光耦合器</strong>",
        "🆕 5/29 以<strong>部落格（知識文章）</strong>作為內容載體，讓 AI 能收錄並在搜尋時推薦偉強",
        "🆕 5/29 方品莊分享替代物成功案例，公司每天持續與客戶溝通替代方案，<strong>累積的經驗與資料為核心資產</strong>",
        "🆕 5/29 停產料號替代方案與現貨資訊為<strong>核心吸引力</strong>，客戶用 ChatGPT 搜尋替代品但搜不到偉強",
        "🆕 5/29 競爭對手分析：尚瑞科技、DigiKey、Mouser — 偉強網站品質基礎良好但<strong>內容需持續擴充</strong>",
        "🆕 5/29 碳化硅（SIC）屬專業搜尋詞，工程師多以電壓等參數搜尋，<strong>不宜作為廣泛關鍵字</strong>，應聚焦替代物與具體料號",
        "🆕 5/29 內容經營需兼顧 AI 搜尋機制，確保網站內容能被 AI 爬取並在消費者搜尋時提供推薦"
      ],
      chips: [
        { icon: "🔌", text: "電子零組件" },
        { icon: "🏭", text: "B2B 代理商" },
        { icon: "🔄", text: "替代物料專家" },
        { icon: "📝", text: "部落格內容策略" },
        { icon: "🏷️", text: "30 品牌聚焦" },
        { icon: "🤖", text: "AI 搜尋優化" }
      ],
      todos: [
        { owner: "蔡阿達", text: "提供偉強 Schema 結構化資料導入方案與報價", priority: "week" },
        { owner: "蔡阿達", text: "協助偉強釐清 AI 將偉強與華晨電機混淆的問題", priority: "week" },
        { owner: "蔡阿達", text: "挖掘替代物料相關關鍵字與主題，規劃以替代物料專家為品牌定位的內容策略", priority: "week" },
        { owner: "蔡阿達", text: "協助優化網站內容結構，確保替代物料資訊能被 AI 及搜尋引擎有效收錄與推薦", priority: "week" },
        { owner: "蔡阿達", text: "指導方品莊如何撰寫符合 AI 搜尋邏輯的部落格內容，建立內容更新流程", priority: "week" },
        { owner: "方品莊", text: "整理目前正在進行的替代物料案例與成功經驗，作為內容素材", priority: "week" },
        { owner: "方品莊", text: "針對重點產品類別（保險絲、MOSFET、碳化硅等）撰寫替代物料介紹與替代方案文章", priority: "week" },
        { owner: "方品莊", text: "提供現有產品資料與品牌清單，協助內容聚焦於 30 個以內的重點品牌", priority: "week" },
        { owner: "方品莊", text: "將市場訊息及客戶需求更新至網站，強化內容即時性與專業度", priority: "waiting" },
        { owner: "方品莊", text: "評估競爭對手網站的內容架構與線上客服功能，提出可行改進方案", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-05-29",
          title: "偉強官網 GEO 技術合作續談 — 替代物料專家定位",
          time: "13:31-14:29",
          duration: "58m",
          participants: "蔡阿達、方品莊（偉強）",
          docUrl: "",
          dialogues: [
            {
              topic: "網站內容策略與品牌替代物主題聚焦",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "不僅從關鍵字出發，更希望建構能被 AI 爬取的網站內容，協助偉強重整現有資料，讓資料被搜尋並吸引客戶接洽及簽約。" },
                { speaker: "方品莊", role: "other", label: "偉強", text: "電子零件代理商搜尋行為多以品牌及料號為主，客戶會尋找特定料號或品牌替代物，搜尋範圍不會過於廣泛，需聚焦具體零件與品牌。" },
                { speaker: "蔡阿達", role: "ada", text: "建議以替代物專家定位為主軸，針對 30 個主要品牌挑選 20 個重點品牌，配合替代品內容進行網站優化與行銷。" },
                { speaker: "方品莊", role: "other", label: "偉強", text: "公司每天持續與客戶溝通替代方案，累積豐富經驗與資料，這些都是偉強的核心價值與資產。替代物確實是最具競爭力的切入點。" }
              ]
            },
            {
              topic: "內容經營與 AI 搜尋策略",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "內容經營需兼顧 AI 搜尋機制，建議利用部落格（知識文章）作為內容載體，讓 AI 能收錄並在消費者搜尋時提供相關資訊。" },
                { speaker: "方品莊", role: "other", label: "偉強", text: "目前網站已有部落格功能，未來可持續補充替代物相關文章，以具體料號與停產訊息為主題，提升搜尋精準度與客戶導流。" },
                { speaker: "蔡阿達", role: "ada", text: "碳化硅屬於較廣義且專業的詞彙，工程師多以電壓等參數搜尋，建議以替代物及具體料號為主，避免過於廣泛的關鍵字。" }
              ]
            },
            {
              topic: "競爭分析與產品線聚焦",
              exchanges: [
                { speaker: "方品莊", role: "other", label: "偉強", text: "大型競爭對手如尚瑞科技、DigiKey、Mouser 產品線龐大且管理成本高，偉強應聚焦自身強項與有限資源，選擇重點品牌與產品深耕內容。強勢產品線包括半導體、保險絲、MOSFET、繼電器、光耦合器。" },
                { speaker: "蔡阿達", role: "ada", text: "將協助挖掘替代物相關字詞與主題，以替代物專家形象推廣偉強，提升網站搜尋排名與客戶詢問率。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-25",
          title: "偉強官網 GEO 技術合作",
          time: "15:00-15:45",
          duration: "45m",
          participants: "蔡阿達、方品莊（偉強）",
          docUrl: "",
          dialogues: [
            {
              topic: "偉強網站 AI 能見度現況與問題分析",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "報告是基於爬蟲與 AI 運算，反映偉強網站在 AI 眼中的現況。網站剛上線且尚未優化，AI 認為偉強是電子零組件代理商，但將偉強與華晨電機混淆。網站不僅要好看，更要能被搜尋到並服務訪客。" },
                { speaker: "方品莊", role: "other", label: "偉強", text: "華晨為製造商，偉強為代理商，兩者無關聯。公司網站雖有但未積極經營，在 Google 搜尋中難以找到。客戶多透過 ChatGPT 等 AI 工具搜尋替代品，搜尋能見度不足是目前的痛點。" },
                { speaker: "方品莊", role: "other", label: "偉強", text: "競爭對手眾多，偉強強項在於提供停產產品替代品，希望透過網站讓客戶搜尋替代品時能找到偉強代理的品牌。" }
              ]
            },
            {
              topic: "網站優化技術與合作方向",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "介紹 Schema 結構化資料對爬蟲的重要性。Schema 是寫給爬蟲看的結構化資料，能幫助搜尋引擎理解網站內容，提升搜尋能見度。目前偉強網站尚未使用此技術。" },
                { speaker: "蔡阿達", role: "ada", text: "網站設計公司通常只確保網站好用與穩定，未必做技術與內容優化。若要被 AI 推薦，必須額外投入優化工作。可協助偉強檢視並優化不易被察覺的技術細節。" },
                { speaker: "方品莊", role: "other", label: "偉強", text: "希望透過網站讓客戶搜尋替代品時找到偉強代理的產品，期待蔡阿達團隊提供技術與內容優化服務。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P49: 小宇宙牙醫診所 ======
    {
      id: "xiaoyuzhou-dental",
      name: "小宇宙牙醫診所 — 官網 AI 能見度健檢與合作",
      icon: "🦷",
      category: "client",
      lastUpdated: "2026-05-25",
      summary: "首次洽談 — 工時包方案合作模式，聚焦植牙與矯正品牌定位，三方合作架構（awoo + 診所 + 陽金快客）",
      keyPoints: [
        "診所業務涵蓋矯正、兒童牙科、植牙、<strong>全口重建（Ongoing 術式）</strong>為未來發展重點",
        "網站由<strong>陽金快客</strong>使用模板建置，meta description 重複率高、結構化資料未完善",
        "全口重建患者數量少但<strong>成交率高</strong>，目前主要靠患者推薦，網路曝光不足",
        "蔡阿達提出<strong>三方合作模式</strong>：awoo（顧問與技術）+ 診所（內容素材）+ 陽金快客（網站維護）",
        "合作方案：選定 <strong>4 主題 / 20 關鍵字 / 60 Prompt</strong>，提供 6 份建議書",
        "內容產出可由客戶提供素材，<strong>團隊用 AI 生成並潤色</strong>，客戶確認正確性即可",
        "蔡阿達強調<strong>不保證排名</strong>，成效受多方因素影響，但提供持續支援與優化"
      ],
      chips: [
        { icon: "🦷", text: "牙醫診所" },
        { icon: "🎯", text: "植牙+矯正" },
        { icon: "📋", text: "工時包方案" },
        { icon: "🤝", text: "三方合作" }
      ],
      todos: [
        { owner: "蔡阿達", text: "提供過往醫美及牙科成功案例給 Sarah Yeh 參考", priority: "today" },
        { owner: "蔡阿達", text: "規劃 4 主題 / 20 關鍵字 / 60 Prompt 方案", priority: "week" },
        { owner: "蔡阿達", text: "與陽金快客協調技術修改範圍與報價", priority: "week" },
        { owner: "Sarah Yeh", text: "與團隊定義品牌聚焦主題（植牙 + 矯正優先）", priority: "waiting" },
        { owner: "雨桐", text: "協助產出全口重建與高端植牙專業文章素材", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-05-25",
          title: "小宇宙牙醫診所官網 AI 能見度健檢與合作洽談",
          time: "13:46-14:41",
          duration: "55m",
          participants: "蔡阿達、Sarah Yeh（小宇宙牙醫）、雨桐（小宇宙牙醫）",
          docUrl: "",
          dialogues: [
            {
              topic: "網站現況分析與 SEO 優化需求",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "網站目前涵蓋多項牙科服務但缺乏明確主打項目，建議聚焦強項以利 SEO 與 AI 推薦。meta description 重複率高，內容不足且結構化語言未完善，影響 AI 爬蟲理解。" },
                { speaker: "Sarah Yeh", role: "other", label: "小宇宙", text: "網站由陽金快客使用模板建置，對架構及技術細節不熟悉，擔心優化受限。" },
                { speaker: "蔡阿達", role: "ada", text: "陽金快客可配合修改但可能有額外收費，awoo 可協助修改且收費合理。三方合作模式可行，由 awoo 提供技術建議並協助與陽金快客溝通。" }
              ]
            },
            {
              topic: "品牌定位與業務聚焦策略",
              exchanges: [
                { speaker: "Sarah Yeh", role: "other", label: "小宇宙", text: "目前以矯正及兒童牙科為主，兒童牙科已有良好口碑。矯正及全口重建為主要發展方向，全口重建患者數量少但成交率高。" },
                { speaker: "雨桐", role: "other", label: "小宇宙", text: "全口重建目前知名度低，主要靠患者推薦，網路曝光不足。" },
                { speaker: "蔡阿達", role: "ada", text: "AI 推薦信任度高，建議合作產出專業文章及內容提升轉化率。內容產出可由客戶提供素材，團隊用 AI 生成並潤色，客戶確認正確性即可。" }
              ]
            },
            {
              topic: "合作模式與服務方案說明",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "介紹公司近 20 年 SEO 及 AI 技術經驗，服務包含品牌 AI 能見度分析、關鍵字研究、內容結構搭建及 FAQ 補充。建議先從基本方案開始：4 主題、20 關鍵字、60 Prompt，提供 6 份建議書。" },
                { speaker: "Sarah Yeh", role: "other", label: "小宇宙", text: "詢問三方合作中技術溝通及費用。" },
                { speaker: "蔡阿達", role: "ada", text: "技術溝通包含在服務費用內。不保證排名，成效受多方因素影響，但提供持續支援與優化。可提供過往醫美及牙科合作案例供參考。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P50: 福盈化學 ======
    {
      id: "fuying-chemical",
      name: "福盈化學 — 官網建置 × GEO 技術合作",
      icon: "🧪",
      category: "client",
      lastUpdated: "2026-05-28",
      summary: "5/28 三方會議（awoo × 五樓專業資訊 × 福盈化學）初步取得合作共識：五語系官網全外包（繁中/英/越/印/日），不做中國市場，客戶期望至少兩年合約；下一步 Eileen 整理網站地圖、MarsZ 提供正式報價，MarsZ 已加入福盈 LINE 群組",
      keyPoints: [
        "福盈化學過去與威宏合作<strong>簽約後業務窗口消失</strong>，半年多 bug 未修復，決定更換廠商",
        "現有官網偏重紡織化學，<strong>無法展示電子化學等新事業產品</strong>",
        "🆕 三方（awoo × 五樓 × 福盈化學）<strong>初步取得合作共識</strong>，進入報價與合約洽談階段",
        "🆕 語系確認：<strong>繁體中文、英文、越南文、印尼文、日文</strong>（共五語系）",
        "🆕 中國市場因防火牆問題<strong>直接放棄，不做簡體中文</strong>版本",
        "🆕 客戶期望<strong>至少兩年合約</strong>，避免每年重新改版的溝通成本",
        "🆕 五樓 MarsZ 展示 <strong>AI 網站設計能力</strong>與多語系 CMS 後台，支援 AI 批次翻譯與校稿流程",
        "🆕 WordPress 因安全性與外掛相容性問題被排除，採用<strong>五樓自建系統</strong>",
        "🆕 五樓推出 <strong>AI SEO 流量分析報告</strong>新產品（串接 GSC/GA API），可與 awoo GEO 追蹤互補",
        "🆕 福盈 IT 僅剩主管 +1 人全投入 AI 大腦計畫，行銷僅 Safina + Eileen，期望<strong>全方位外包</strong>",
        "蔡阿達建議多語系從<strong>次網域改為子目錄架構</strong>，整合權重並降低維護成本",
        "福盈化學計畫打造「<strong>智能產品經理人</strong>」AI 客服，公司正自行建置大語言模型"
      ],
      chips: [
        { icon: "🏭", text: "化學產業" },
        { icon: "🌐", text: "五語系官網" },
        { icon: "📝", text: "兩年合約" },
        { icon: "✅", text: "三方共識達成" }
      ],
      todos: [
        { owner: "Eileen", text: "整理網站地圖文件（完整選單結構＋所有擴充產品內容），提供給 MarsZ", priority: "week" },
        { owner: "MarsZ Chen", text: "根據客戶需求提供正式報價單與預估時程", priority: "week" },
        { owner: "Safina Liang", text: "確認五語系校稿人員安排（英/越/印/日各需 local 人員協助校稿）", priority: "week" },
        { owner: "蔡阿達", text: "跟進福盈化學與五樓報價，確認建站合約與時程", priority: "week" },
        { owner: "蔡阿達", text: "提供福盈化學網站 AI 爬蟲分析報告，指出內容缺口與優化方向", priority: "week" },
        { owner: "蔡阿達", text: "協助規劃主題核心與延伸關鍵字，追蹤競品表現與 AI 推薦狀況", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-05-28",
          title: "福盈官網建置 GEO 技術合作續談 ft. 五樓 MarsZ",
          time: "09:29-10:19",
          duration: "49m",
          participants: "蔡阿達、MarsZ Chen（五樓專業資訊）、Eileen（福盈化學）、Safina Liang（福盈化學）",
          docUrl: "",
          dialogues: [
            {
              topic: "五樓 AI 網站設計能力與多語系後台",
              exchanges: [
                { speaker: "MarsZ Chen", role: "other", label: "五樓", text: "五樓成立逾十年，近年導入 AI 技術進行版面設計。多語系後台可分別管理不同語系的文章、產品資料及固定區塊語系檔（YAML 格式），語系檔可整包丟給 AI 翻譯，約五分鐘即可完成。" },
                { speaker: "蔡阿達", role: "ada", text: "五樓的優勢在於技術彈性高、創意強。未來網站需同時兼顧人類使用者與 AI 爬蟲，確保資訊完整且易於 AI 理解。" }
              ]
            },
            {
              topic: "WordPress 架構利弊與自建系統優勢",
              exchanges: [
                { speaker: "MarsZ Chen", role: "other", label: "五樓", text: "WordPress 開源特性帶來安全性隱患，駭客可即時追蹤漏洞，外掛版本與核心版本常有相容性問題，維護成本偏高。五樓已與 awoo 系統開發固定整合模組，實現近乎無痛接軌。" },
                { speaker: "蔡阿達", role: "ada", text: "建議福盈化學以好用、好找、易維護、彈性佳為優先考量，不建議採用 WordPress。" }
              ]
            },
            {
              topic: "客戶需求確認：全外包與兩年合約",
              exchanges: [
                { speaker: "Safina Liang", role: "other", label: "福盈化學", text: "IT 僅剩主管加一名下屬，全力投入 AI 大腦計畫。行銷部僅兩人，期望找到能全方位外包的團隊。改版動機在於拓展新事業體（乳膠化學品、植物纖維餐盤、半導體），希望合約至少兩年。" },
                { speaker: "Eileen", role: "other", label: "福盈化學", text: "確認需上線語系為繁體中文、英文、越南文、印尼文及日文，需為獨立網址形式以利 GEO 各語系分別優化。" }
              ]
            },
            {
              topic: "多語系 AI 翻譯功能與後續推進",
              exchanges: [
                { speaker: "Eileen", role: "other", label: "福盈化學", text: "詢問能否填完中文後一鍵擴充所有語系。" },
                { speaker: "MarsZ Chen", role: "other", label: "五樓", text: "此功能可客製化開發，儲存時勾選目標語系，後台即以 AI 批次翻譯並填入對應欄位。翻譯完成後建議由各語系人員校稿。" },
                { speaker: "蔡阿達", role: "ada", text: "awoo 會同步提供 GEO 追蹤與關鍵字分析報告，與五樓月報相互配合形成完整的網站健康監控機制。" }
              ]
            }
          ]
        },
        {
          date: "2026-05-26",
          title: "福盈官網建置 GEO 技術合作洽談",
          time: "09:31-10:08",
          duration: "37m",
          participants: "蔡阿達、Safina Liang（福盈化學）",
          docUrl: "",
          dialogues: [
            {
              topic: "官網升級需求與過往合作經驗",
              exchanges: [
                { speaker: "Safina Liang", role: "other", label: "福盈化學", text: "過去與威宏合作，簽約後業務窗口消失導致 bug 無法即時修復。現有官網偏重紡織化學，無法展示電子化學等新事業產品，也無法支援 AI 客服。" },
                { speaker: "蔡阿達", role: "ada", text: "針對多語系架構建議從次網域改為單一主域名下的子目錄方式，整合權重並降低維護成本。AI 能快速理解語系關聯，集中於單一主域名有助 AI 能見度提升。" }
              ]
            },
            {
              topic: "AI 客服與智能產品經理人規劃",
              exchanges: [
                { speaker: "Safina Liang", role: "other", label: "福盈化學", text: "計畫打造進階 AI 客服成為智能產品經理人，能提供製程、劑量、溫度等專業技術建議。公司正建置自有 AI 大語言模型，資料量龐大預估至少一年半。" },
                { speaker: "蔡阿達", role: "ada", text: "串接 AI 客服不需 API，使用 GTM 即可嵌入前端界面。建議後續邀請 IT 技術長參與會議，確保 AI 模型與官網系統整合順利。" }
              ]
            },
            {
              topic: "新廠商推薦與合作推進",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "推薦一間約 5 人團隊的小型廠商，專注 AI 智能化後臺，費用較低且可客製化。建議先安排三方會議討論官網架設及報價。" },
                { speaker: "Safina Liang", role: "other", label: "福盈化學", text: "福盈不考慮電商模式，產品需專業測試且配方機密，以資訊傳播與技術服務為主。同意先安排三方會議，本週四上午較為方便。" }
              ]
            },
            {
              topic: "awoo 服務介紹與合作方向",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "公司成立近 20 年，主打 SEO 技術及廣告投放、GEO 與 ASO 顧問服務。已開發自有工具追蹤網站在 AI 回應中的品牌提及率、情緒分析及引用率，可協助提升品牌 AI 能見度。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P51: cobalancelab ======
    {
      id: "cobalance-partner",
      name: "cobalancelab × awoo — 品牌代理商 SEO/GEO 技術合作",
      icon: "🤝",
      category: "partner",
      lastUpdated: "2026-05-27",
      summary: "5/27 蔡阿達與 Carol Lin（林俐儀）首次洽談：cobalancelab 成立近 20 年專注中小企業品牌代理，awoo 展示 AI 能見度追蹤工具與三種 SEO 優化方案；雙方確認以嵌入式合作模式推動客戶 SEO/GEO 服務",
      keyPoints: [
        "cobalancelab 成立近 20 年，主要服務<strong>中小企業及品牌</strong>，提供 AI 顧問服務及電商行銷軟體",
        "awoo 展示<strong>亞洲獨家 AI 能見度追蹤工具</strong>（2026 年 3 月發表），分析品牌被 AI 提及率、聲量、排名及引用情況",
        "三種 SEO 優化方案中最小可行方案：<strong>4 核心主題 × 20 關鍵字 × 6 份建議書</strong>（含內容撰寫與技術修改）",
        "報告可<strong>客製化、去識別化、置入品牌標誌</strong>，方便合作夥伴轉售",
        "awoo 堅持<strong>不保證排名</strong>，以數據分析與持續優化為溝通重點，Carol 認同此立場",
        "合作定位：awoo 負責<strong>技術與 SEO 專業支援</strong>，cobalancelab 負責<strong>整合行銷</strong>（社群維運、媒體曝光、活動）",
        "Carol 建議 awoo 人員<strong>嵌入式參與客戶會議</strong>，減少資訊斷點，降低溝通成本",
        "後臺數據<strong>不直接開放給客戶</strong>，以定期報告截圖及說明方式呈現關鍵指標",
        "潛在客戶產業：<strong>醫美、海外資產、殯葬</strong>等資訊不透明且競爭激烈的產業"
      ],
      chips: [
        { icon: "🏢", text: "品牌代理商" },
        { icon: "📊", text: "AI 能見度工具" },
        { icon: "🔑", text: "4 主題 / 20 關鍵字" },
        { icon: "🤝", text: "嵌入式合作" }
      ],
      todos: [
        { owner: "Carol Lin", text: "提供 AI 能見度追蹤報告範本與客戶網址給 awoo", priority: "week" },
        { owner: "蔡阿達", text: "根據 cobalancelab 客戶網站製作關鍵字主題與延伸關鍵字清單及建議書", priority: "week" },
        { owner: "蔡阿達", text: "準備客製化報告（去識別化 + 品牌標誌置入）供 cobalancelab 使用", priority: "week" },
        { owner: "蔡阿達 / Carol Lin", text: "確定後臺數據開放程度，建立客戶問題回應機制", priority: "week" },
        { owner: "蔡阿達", text: "向客戶說明不保證排名的專業立場，提供分析與改善建議", priority: "waiting" },
        { owner: "Carol Lin", text: "制定滾動式關鍵字調整計畫，針對具體客戶案例啟動合作", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-05-27",
          title: "awoo × cobalancelab 首次合作洽談",
          time: "14:14-16:32",
          duration: "2h18m",
          participants: "蔡阿達、Carol Lin（林俐儀）",
          docUrl: "",
          dialogues: [
            {
              topic: "雙方服務介紹與合作需求確認",
              exchanges: [
                { speaker: "Carol Lin", role: "other", label: "cobalance", text: "公司成立近 20 年，主要服務中小企業及品牌，提供 AI 顧問服務及電商行銷軟體。合作中應避免高溝通成本，建議邀請合作夥伴成為團隊一員，方便專業說明與即時回應。" },
                { speaker: "蔡阿達", role: "ada", text: "公司於今年 3 月發表亞洲獨家 AI 能見度追蹤工具，能協助客戶了解品牌被 AI 提及及引用的狀況。SEO 與 AI 爬蟲技術相輔相成，基礎 SEO 做好才能進一步優化 AI 能見度。" }
              ]
            },
            {
              topic: "AI 能見度報告與 SEO 優化方案",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "展示 AI 能見度報告工具，透過 API 及爬蟲技術分析客戶在 AI 搜尋中的表現。最小可行方案包含 4 核心主題、20 組關鍵字及 6 份建議書。報告可客製化，包含去識別化及品牌標誌置入。" },
                { speaker: "Carol Lin", role: "other", label: "cobalance", text: "詢問業界保證排名的做法，並認為保證排名需有風險控管，保證內容往往是方案中較容易達成的部分。" },
                { speaker: "蔡阿達", role: "ada", text: "公司不保證排名，但會持續分析缺口並提出改善建議。業界保證排名多為針對長尾關鍵字，且保證內容可能因 KPI 壓力而偏頗。" }
              ]
            },
            {
              topic: "合作模式與客戶後臺使用",
              exchanges: [
                { speaker: "Carol Lin", role: "other", label: "cobalance", text: "多數品牌客戶缺乏操作後臺能力，若直接開放後臺客戶會頻繁提問增加服務負擔。品牌代理商提供整合行銷方案包含社群維運、媒體曝光及線上線下活動。" },
                { speaker: "蔡阿達", role: "ada", text: "同意以定期報告截圖方式呈現數據。公司可提供從顧問到執行的全方位服務，包含內容撰寫、技術修改及 SEO 優化，依客戶網站狀況調整合作深度。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P52: 洪佳 ======
    {
      id: "hongjia-debt",
      name: "洪佳 — 欠款催收與服務暫停處理",
      icon: "⚠️",
      category: "client",
      lastUpdated: "2026-05-27",
      summary: "5/27 洪佳因未如期付款，團隊決定暫停服務並準備寄發存證信函；蔡阿達願履行個人承諾的額外服務但強調款項與合約分兩軌處理；客戶財務困難擬分兩年攤還並取消信用卡付款",
      keyPoints: [
        "洪佳<strong>未如期付款</strong>，團隊決定暫停服務並已寄出資料與催告通知",
        "蔡阿達 4 月 10 日已在 Slack 留下<strong>文字記錄催告</strong>，接下來將寄<strong>存證信函</strong>正式通知",
        "蔡阿達願意履行<strong>個人承諾</strong>的額外服務，但款項問題與合約服務<strong>兩軌並行</strong>分開處理",
        "客戶<strong>質疑合約有效性</strong>，團隊確認合約有效且服務已執行；Henry 亦確認合約有效",
        "客戶將蔡阿達的<strong>個人承諾與合約混淆</strong>，需明確區分避免認知落差",
        "客戶以上班族薪水支付無法一次付清，擬<strong>分兩年攤還</strong>並取消信用卡改用匯款",
        "Eric Hsiao 接手後<strong>溝通順暢</strong>，補足 Pixel 串接並開兩次成效會議",
        "客戶老闆不關注案子，底下人員無人主動聯繫，<strong>後期對關鍵字排名不滿</strong>"
      ],
      chips: [
        { icon: "💸", text: "欠款催收" },
        { icon: "⚖️", text: "存證信函" },
        { icon: "⏸️", text: "服務暫停" },
        { icon: "📅", text: "分兩年攤還" }
      ],
      todos: [
        { owner: "蔡阿達", text: "整理 4 月 10 日催告留言截圖，私訊轉寄給 Eric、Anne、Henry 及 Vini", priority: "today" },
        { owner: "Anne Chang", text: "指派團隊準備並寄出存證信函，正式通知洪佳停止服務", priority: "today" },
        { owner: "蔡阿達", text: "與洪佳窗口聯絡，履行個人承諾事項並安排後續通話", priority: "week" },
        { owner: "Eric Hsiao", text: "與洪佳確認分期付款方案細節及匯款方式，停止使用信用卡付款", priority: "week" },
        { owner: "Eric Hsiao", text: "整理並轉寄 2 月 20 日及 26 日 Henry 信件給蔡阿達及相關人員", priority: "week" },
        { owner: "Anne Chang", text: "下週催促摩曼頓款項", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-27",
          title: "力奇與愛貝斯 — 洪佳欠款與存證信函處理",
          time: "17:01-17:46",
          duration: "45m",
          participants: "蔡阿達、Anne Chang、Eric Hsiao、藍文甫（Leo）",
          docUrl: "",
          dialogues: [
            {
              topic: "洪佳案款項未付與服務暫停",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "洪佳未付錢，先停止服務並已將資料寄給對方，已盡義務。4 月 10 日已有 Slack 留言催告。願意履行個人承諾，但剩餘款項與合約服務兩軌處理。" },
                { speaker: "Anne Chang", role: "other", label: "PM", text: "確認催告流程，建議寄存證信函前需有正式文字通知。信用卡付款逾期帶來催款與手續費問題，支持改用其他付款方式。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "存證信函為紙本，需整理催款紀錄與未付款期數作為寄送依據。合約與個人承諾應分開回應。" }
              ]
            },
            {
              topic: "合約爭議與客戶溝通",
              exchanges: [
                { speaker: "Eric Hsiao", role: "other", label: "PM", text: "接手後與客戶溝通順暢，補足 Pixel 串接並開兩次成效會議。客戶對關鍵字排名不滿，認為 SEO 方案與預期不符。" },
                { speaker: "蔡阿達", role: "ada", text: "客戶老闆不關注案子，底下人員無人主動聯繫，後期無理取鬧要求說明年度工作內容。" },
                { speaker: "Anne Chang", role: "other", label: "PM", text: "建議明確告知客戶合約內服務已執行，個人承諾由蔡阿達協助履行，兩者分開處理。" }
              ]
            },
            {
              topic: "付款方案協商",
              exchanges: [
                { speaker: "Eric Hsiao", role: "other", label: "PM", text: "客戶目前以上班族薪水支付，無法一次付清，希望拉長付款時間。已與客戶溝通付款方案。" },
                { speaker: "Anne Chang", role: "other", label: "PM", text: "同意將款項分兩年攤還，調整付款方式不再使用信用卡。提醒下週需催促摩曼頓款項。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P53: Biggo Kevin ======
    {
      id: "biggo-kevin",
      name: "Biggo（Kevin Yen）— AI 內容生成與多語言技術交流",
      icon: "🔍",
      category: "partner",
      lastUpdated: "2026-05-29",
      summary: "5/29 Weekly Sync 跟進 — 蔡阿達向內部團隊介紹 Biggo 技術並提出合作解決英文文案瓶頸，藍文甫認同技術可強化產品模式，合作費用低（API 10%），下一步確認對接價格與技術串接；5/28 初次交流確認多語言角色化翻譯為潛在合作交集",
      keyPoints: [
        "Biggo 三大業務：<strong>Shopify 圖搜</strong>（近千間用戶）、<strong>AI 中轉平台</strong>、<strong>財經事件推演系統</strong>",
        "財經事件推演系統整合法說會逐字稿、社群情緒、新聞等多維資料，日本市場月流量連續半年成長 <strong>100%~200%</strong>",
        "系統核心為 Agent 訂閱制：用戶透過 Telegram/LINE/WhatsApp 與財經 Agent 對話，主動推播持股分析",
        "Kevin 提出代理商核心競爭力為<strong>動態第一手資料</strong>（IC 報價走勢、交期、庫存），建議公開歷史走勢圖吸引 AI 引用",
        "多語言角色化翻譯：<strong>非單純翻譯而是針對不同市場讀者重寫內容</strong>，如匯率轉換、部會名稱在地化",
        "大型語言模型在<strong>數值單位轉換</strong>上仍有明顯缺陷（如 10B 的幣值歧義），Biggo 投入大量工程修正",
        "雙方技術本質相似（信號收集 + 模型推演），awoo 為客戶需求驅動，Biggo 為事件驅動",
        "短期最可能合作交集：多語言角色化翻譯、代理商動態資料 AI 化、企業 AI 轉型技術支援",
        "🆕 5/29 蔡阿達於 Weekly Sync 向團隊介紹 Biggo 技術，<strong>提出合作解決英文文案產出瓶頸</strong>",
        "🆕 5/29 Biggo 可將中文內容轉換成多國語言並生成新內容，<strong>收取 API 費用 10%</strong>，費用低",
        "🆕 5/29 藍文甫認為 Biggo 技術可<strong>強化公司產品模式</strong>，下一步需確認對接價格與技術串接",
        "🆕 5/29 技術串接可透過 MOS 服務實現，重點在於如何順暢接收甲方資訊並自動產生內容"
      ],
      chips: [
        { icon: "📊", text: "財經推演系統" },
        { icon: "🇯🇵", text: "日本月成長 100%+" },
        { icon: "🌐", text: "多語言角色化" },
        { icon: "💰", text: "API 費 10%" },
        { icon: "🤝", text: "內部已提案" }
      ],
      todos: [
        { owner: "蔡阿達", text: "評估與 Biggo 在多語言角色化翻譯技術上的合作可能性（如福盈化學多語言站）", priority: "week" },
        { owner: "蔡阿達", text: "持續跟進 Biggo 回覆，安排後續測試與評估", priority: "week" },
        { owner: "藍文甫", text: "評估 Biggo 合作對接價格與代價，推動技術測試與整合", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-28",
          title: "awoo × Biggo Kevin — AI 內容生成與多語言技術交流",
          time: "10:39-12:01",
          duration: "1h21m",
          participants: "蔡阿達、Kevin Yen（Biggo）",
          docUrl: "",
          dialogues: [
            {
              topic: "Biggo 三大業務介紹",
              exchanges: [
                { speaker: "Kevin Yen", role: "other", label: "Biggo", text: "第一是 Shopify 電商圖搜服務，近千間用戶穩定繳費。第二是 AI 中轉平台，單一介面調用各家大型語言模型。第三是財經事件推演系統，整合股市、法說會、社群情緒等，日本市場月流量連續半年成長 100%~200%。" },
                { speaker: "蔡阿達", role: "ada", text: "介紹 awoo 在 2026 年 3 月推出的 GEO 追蹤工具，幫品牌找出消費者對 AI 提出的關鍵字與提問句，追蹤品牌在各 AI 平台的引用狀況。服務需求來自品牌主管發現 AI 不推薦自家產品的痛點。" }
              ]
            },
            {
              topic: "代理商動態資料內容策略",
              exchanges: [
                { speaker: "Kevin Yen", role: "other", label: "Biggo", text: "代理商真正的核心競爭力是動態第一手資料 — IC 報價走勢、交期、庫存等只有代理商才有且每日更新的資訊。建議偉強可公開歷史報價走勢圖（遮蔽敏感名稱），讓動態資料成為吸引 AI 引用的核心資產。" },
                { speaker: "蔡阿達", role: "ada", text: "此觀點對輔導代理商客戶策略有重要啟發，未來要引導業主思考「只有你才有的即時更新資訊是什麼」，並建立系統化自動更新機制。" }
              ]
            },
            {
              topic: "多語言角色化翻譯技術與合作可能性",
              exchanges: [
                { speaker: "Kevin Yen", role: "other", label: "Biggo", text: "Biggo 內容生成核心強項在於針對不同市場讀者重寫內容，非單純翻譯。同一則新聞針對台灣讀者需補充日圓兌新台幣匯率，針對日本讀者要把美元轉日圓。GPT 5.5 在數值單位轉換上仍有缺陷，Biggo 花大量工程投入修正。" },
                { speaker: "蔡阿達", role: "ada", text: "兩者技術本質相似，短期最可能的合作交集在多語言角色化翻譯技術、代理商動態資料 AI 化及企業 AI 轉型輔導的技術支援。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P54: AE × 行銷業績歸屬規則 ======
    {
      id: "ae-mkt-attribution",
      name: "AE × 行銷業績歸屬規則",
      icon: "📊",
      category: "company",
      lastUpdated: "2026-05-28",
      summary: "Angelline 與蔡阿達討論行銷部門業績歸屬計算邏輯，同意以排除法判斷：由 AE 列出確定與行銷無關的案件，行銷比對後剩下的視為行銷貢獻。代理商帶來的客戶原則上歸計行銷。HubSpot 資料漏失問題待手動表格同步機制推進",
      keyPoints: [
        "採<strong>排除法</strong>判斷業績歸屬：AE 列出確定與行銷無關的成交案件 → 行銷比對後剩下的即為行銷貢獻",
        "代理商（<strong>雅戶、凱洛、易安網</strong>）帶來的客戶案件，原則上歸計行銷業績",
        "易安網為凱洛帶入的第一個客戶，金額約 <strong>80~100 萬</strong>，CS 已在服務中",
        "<strong>展匠案</strong>（李勇負責）最初名單來源待確認，展匠母公司為洪將旗下，規模更大",
        "HubSpot 資料<strong>每月均有漏失</strong>，行銷無權限查閱完整業績表（Ragic 為最準確來源但涉及機敏資訊）",
        "蔡阿達已請 AE 把手動業績表格與 HubSpot 同步，但<strong>執行尚未完整</strong>",
        "Angelline 強調代理商開發的策略價值在於<strong>滾動式業績</strong>，應有對應計算方式"
      ],
      chips: [
        { icon: "🔄", text: "排除法" },
        { icon: "📈", text: "行銷貢獻" },
        { icon: "🏢", text: "代理商歸行銷" },
        { icon: "⚠️", text: "HubSpot 缺漏" }
      ],
      todos: [
        { owner: "蔡阿達", text: "請各 AE 列出本月成交中確定與行銷無關的案件清單，提供 Angelline 比對", priority: "today" },
        { owner: "蔡阿達", text: "確認展匠案最初名單來源（向李勇查詢），協助判定是否歸行銷業績", priority: "week" },
        { owner: "蔡阿達", text: "推動手動業績表格與 HubSpot 同步機制，並提供去除機敏資訊版本給行銷", priority: "week" },
        { owner: "Angelline", text: "與 Max 合作制定行銷與業務業績歸屬判斷規則並條例化", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-28",
          title: "AE × 行銷業績歸屬規則討論",
          time: "14:03-14:16",
          duration: "13m",
          participants: "蔡阿達、Angelline（行銷部）、Winny Chiang",
          docUrl: "",
          dialogues: [
            {
              topic: "行銷業績歸屬範疇與排除法",
              exchanges: [
                { speaker: "Angelline", role: "other", label: "行銷", text: "行銷貢獻包含：主動喚醒中斷客戶後成交、透過活動或 BDR 喚醒後成交、代理商（雅戶、凱洛）帶入的後續客戶。代理商開發的策略價值在於滾動式業績，應有對應計算方式。" },
                { speaker: "蔡阿達", role: "ada", text: "業務在 HubSpot 的來源欄位填寫向來不夠嚴謹，比起找出哪些是行銷來的，改用找出哪些確定與行銷無關的排除法更實際。本質上業績歸屬對整體推進影響不大，但為確保獎賞到對的人仍需建立規則。" }
              ]
            },
            {
              topic: "HubSpot 資料缺漏與業績查核",
              exchanges: [
                { speaker: "Angelline", role: "other", label: "行銷", text: "行銷只能透過 HubSpot 查看業績，但每月均有漏失，且無權限查閱 Ragic 完整業績表。若蔡阿達可提供去除機敏欄位的業績表，行銷即可交叉比對防呆。" },
                { speaker: "蔡阿達", role: "ada", text: "目前業績主要由各 AE 手動填入共用表格供財務預測，已請 AE 與 HubSpot 同步但執行尚未完整。" }
              ]
            },
            {
              topic: "展匠案與代理商案件來源確認",
              exchanges: [
                { speaker: "Angelline", role: "other", label: "行銷", text: "展匠由李勇負責，案件量穩定，母公司為洪將旗下規模更大。但最初是否由行銷提供名單目前不確定，需向李勇確認。" },
                { speaker: "蔡阿達", role: "ada", text: "確認後再判斷展匠案的業績歸屬。已知由行銷開發的代理商包含雅戶與凱洛，易安網是凱洛帶入的第一個客戶。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P55: BNI 潘恩 ======
    {
      id: "bni-pan-waiting",
      name: "BNI × 潘恩（威廷勞資顧問）— 主題簡報指導",
      icon: "🎤",
      category: "events",
      lastUpdated: "2026-05-28",
      summary: "蔡阿達指導潘恩以 LGTV 框架精簡 BNI 主題簡報至 12 頁 5 分鐘，確認 USP「獎金規劃不是找會計師，而是找勞資顧問」。小琉球寶哥麻花捲為潛在 awoo 引薦客戶",
      keyPoints: [
        "主題簡報調整為 <strong>LGTV 框架</strong>：開場 + 2~3 個 USP（各含簡短案例）+ 結語，約 12 頁、5 分鐘",
        "主打 USP：「<strong>大家以為獎金規劃要找會計師，其實應該找勞資顧問</strong>」",
        "案例不需鉅細靡遺，30~60 秒帶過「發生什麼事 → 怎麼處理 → 解決什麼問題」即可",
        "勞資蟑螂案例可融入某個 USP 段落，不需單獨長篇解說",
        "潘恩近期最常見需求：企業設計<strong>獎金或薪酬制度</strong>時不知找誰諮詢",
        "薪酬制度規劃（加班費、獎金結構、投保薪資）屬於<strong>勞資顧問專業</strong>，非會計師範疇",
        "小琉球<strong>寶哥麻花捲</strong>為潛在客戶，產品多元、接班人積極推動數位經營"
      ],
      chips: [
        { icon: "🎯", text: "LGTV 框架" },
        { icon: "⏱️", text: "12 頁 5 分鐘" },
        { icon: "💼", text: "勞資顧問 USP" },
        { icon: "🍩", text: "寶哥麻花捲引薦" }
      ],
      todos: [
        { owner: "潘恩", text: "按 LGTV 框架完成主題簡報初稿（12 頁以內，含 1~2 個案例及 USP）", priority: "week" },
        { owner: "潘恩", text: "完成初稿後邀請蔡阿達進行 5 分鐘演練並取得回饋", priority: "waiting" },
        { owner: "潘恩", text: "整理薪酬制度與會計師職責差異的一句話 USP 作為開啟對話標準說詞", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-05-28",
          title: "BNI × 潘恩 — 主題簡報架構指導與勞資顧問服務討論",
          time: "16:33-16:54",
          duration: "20m",
          participants: "蔡阿達、潘恩（威廷勞資顧問）",
          docUrl: "",
          dialogues: [
            {
              topic: "主題簡報架構調整為 LGTV",
              exchanges: [
                { speaker: "潘恩", role: "other", label: "勞資顧問", text: "初步規劃包含公司服務介紹、勞資蟑螂案例、勞動條件重點及目標對象，但內容偏重知識傳達、篇幅偏長，較少案例。" },
                { speaker: "蔡阿達", role: "ada", text: "建議採 LGTV 架構：一頁開場、2~3 個主打服務重點各搭配一個簡短案例、最後一頁結語。12 頁以內、5 分鐘完成。聽眾注意力有限，案例只要交代發生什麼事、怎麼處理、解決什麼問題，30~60 秒帶過即可。" }
              ]
            },
            {
              topic: "勞資顧問 USP 開發：獎金規劃找勞資顧問",
              exchanges: [
                { speaker: "潘恩", role: "other", label: "勞資顧問", text: "近期最常見的問題是企業設計獎金或薪酬制度時不知找誰諮詢，很多業主習慣找會計師，但薪酬制度規劃其實屬勞資顧問專業，不同會計制度（查賬制、書審制）對薪資申報與稅務影響也不同。" },
                { speaker: "蔡阿達", role: "ada", text: "這個認知落差可以直接作為 USP：大家以為獎金規劃要找會計師嗎？其實要找勞資顧問。用一句話開啟對話，再以案例說明解決方案。" }
              ]
            },
            {
              topic: "小琉球寶哥麻花捲潛在引薦",
              exchanges: [
                { speaker: "潘恩", role: "other", label: "勞資顧問", text: "小琉球寶哥麻花捲產品多元、接班人積極推動數位經營，有心投入。另有預備大客戶因問題較棘手尚未找到切入點，持續評估引薦時機。" },
                { speaker: "蔡阿達", role: "ada", text: "目前主打 AI 優化搜尋服務，不以商品數量多少為篩選條件，適時可評估合作。" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
