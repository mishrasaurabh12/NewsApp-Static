import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  obj=[{
    source: { "id": null, "name": "Hindustan Times" },
    author: "HT News Desk",
    title: "'Will Rahul Gandhi apologise now': BJP on Pegasus; 'Remember chewing gum gate?' - Hindustan Times",
    description: "Former Union minister RS Prasad said the Congress is losing all elections as it is taking resort to lies. “It is not in Rahul Gandhi's nature to apologise,” the BJP leader said after Supreme Court hearing of Pegasus spyware case.  | Latest News India",
    url: "https://www.hindustantimes.com/india-news/will-rahul-gandhi-apologise-now-bjp-on-pegasus-remember-chewing-gum-gate-101661419651275.html",
    urlToImage: "https://images.hindustantimes.com/img/2022/08/25/1600x900/Rs_Prasad_Rahu_gandhi_1661419839191_1661419850863_1661419850863.jpg",
    publishedAt: "2022-08-25T09:33:31Z",
    content: "Former Union minister Ravi Shankar Prasad on Thursday asked whether the Congress and Congress leader Rahul Gandhi will now apologise now as the panel report in the case said there was no conclusive e… [+1484 chars]"
  },
  {
    source: { "id": null, "name": "NDTV News" },
    author: null,
    title: "NDTV Says Adani Group Needs Regulator's Nod After Hostile Bid - NDTV Profit",
    description: "New Delhi Television Ltd. said the Adani Group, will need approval from India's markets regulator for its hostile takeover bid, amid wider concerns that the acquisition may muzzle the country's independent press.",
    url: "https://www.ndtv.com/business/ndtv-says-adani-needs-indian-regulators-nod-after-hostile-bid-3285150",
    urlToImage: "https://c.ndtvimg.com/ndtv-logo_625x300_1530090600008.jpg",
    publishedAt: "2022-08-25T09:22:00Z",
    content: "Adani Group announced the indirect acquisition of a 29.2% in the broadcaster on Tuesday.\r\nNew Delhi Television Ltd. said the Adani Group, will need approval from India's markets regulator for its hos… [+2000 chars]"
  },
  {
    source: { "id": null, "name": "Ak4tsay1.com" },
    author: "Adesh Kothari",
    title: "Asia Cup 2022: Ranking the Best Predicted Playing 11 for all 6 Teams - AK4TSay1 Cricalytics",
    description: "India, the number 1 team on paper as we look at the ranking of the best predicted playing 11 for all 6 teams for Asia Cup 2022.  The Asia Cup 2022 is just",
    url: "https://www.ak4tsay1.com/asia-cup-2022-ranking-the-best-predicted-playing-11-for-all-6-teams/",
    urlToImage: "http://www.ak4tsay1.com/wp-content/uploads/2022/08/asia-cup-2022-best-predicted-playing-11-for-all-teams-cricalytics.jpg",
    publishedAt: "2022-08-25T09:20:13Z",
    content: "India, the number 1 team on paper as we look at the ranking of the best predicted playing 11 for all 6 teams for Asia Cup 2022. \r\nThe Asia Cup 2022 is just a few days away, but we already had the Asi… [+8198 chars]"
  },
  {
    source: { "id": null, "name": "India Today" },
    author: null,
    title: "Illegal mining case: Election Commission recommends disqualification of Jharkhand CM as MLA, say sources - India Today",
    description: "The Election Commission of India has recommended the disqualification of Jharkhand Chief Minister Hemant Soren as an MLA in connection with the illegal mining case.",
    url: "https://www.indiatoday.in/india/story/illegal-mining-case-election-commission-recommends-disqualification-of-jharkhand-cm-say-sources-1992341-2022-08-25",
    urlToImage: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/soren-647x363.png?HyvdOsXdvheahtQiwi3EJF5vojZL_9Yz",
    publishedAt: "2022-08-25T08:42:59Z",
    content: "The Election Commission of India (ECI) has recommended the disqualification of Jharkhand Chief Minister Hemant Soren as an MLA, sources in the Raj Bhavan told India Today. The EC has written back to … [+4851 chars]"
  },
  {
    source: { "id": null, "name": "The Indian Express" },
    author: "Tech Desk",
    title: "NASA's latest study to test gravity confirms Einstein's theory, dark energy remains an enigma - The Indian Express",
    description: "The Dark Energy Survey has so far measured the shapes of over 100 million galaxies, and the observations match what's predicted by Einstein's theory so far, leaving no explanation for dark energy.",
    url: "https://indianexpress.com/article/technology/science/einstein-theory-of-relativity-gravity-dark-energy-survey-8110967/",
    urlToImage: "https://images.indianexpress.com/2022/08/NASA-study-dark-energy-einstein-featured-20220825.jpg",
    publishedAt: "2022-08-25T08:15:18Z",
    content: "Our universe is expanding at an accelerating rate and no one is really sure why. This seemingly contradicts current scientific knowledge of how gravity works and how it affects the world we live in. … [+2737 chars]"
  },
  {
    source: { "id": null, "name": "Hindustan Times" },
    author: "HT News Desk",
    title: "'Even if we get 50 MLAs from AAP...': BJP to sprinkle 'gangajal' at Rajghat - Hindustan Times",
    description: "AAP leaders' visit to Rajghat on Thursday has ‘tampered’ the sanctity of the places, the BJP claimed and said they will have to sprinkle ‘gangajal’ there.  | Latest News India",
    url: "https://www.hindustantimes.com/india-news/even-if-we-get-50-mlas-from-aap-bjp-to-sprinkle-gangajal-at-rajghat-after-kejriwal-s-visit-101661414515933.html",
    urlToImage: "https://images.hindustantimes.com/img/2022/08/25/1600x900/PTI08-21-2022-000057A-1_1661414635545_1661414635545_1661414662767_1661414662767.jpg",
    publishedAt: "2022-08-25T08:09:05Z",
    content: "Minutes after AAP leaders went to Rajghat on Thursday and declared the defeat of Operation Lotus in the Capital, the Delhi BJP said it will sprinkle 'gangajal' to sanctify the place. Dismissing alleg… [+2411 chars]"
  },
  {
    source: { "id": null, "name": "Hindustan Times" },
    author: "HT Sports Desk",
    title: "'India hard to contain, Pakistan unstoppable': Aus great picks Asia Cup winner - Hindustan Times",
    description: "Shane Watson highlighted that the Babar Azam-led side will be confident about getting the better of India after their exploits in last year's T20 World Cup at the same venue.",
    url: "https://www.hindustantimes.com/cricket/india-hard-to-contain-but-pakistan-nearly-unstoppable-shane-watson-predicts-asia-cup-2022-winner-101661413699175.html",
    urlToImage: "https://images.hindustantimes.com/img/2022/08/25/1600x900/ind-pak_1661413929274_1661413939295_1661413939295.jpg",
    publishedAt: "2022-08-25T07:54:34Z",
    content: "The anticipation and excitement surrounding India vs Pakistan Asia Cup match on August 28 in Dubai is reaching new heights as the tournament gets closer with each passing day. It takes no prize to gu… [+2182 chars]"
  },
  {
    source: { "id": "google-news", "name": "Google News" },
    author: null,
    title: "For the first time, India votes against Russia in UNSC during procedural vote on Ukraine - The Hindu",
    description: null,
    url: "https://news.google.com/__i/rss/rd/articles/CBMijgFodHRwczovL3d3dy50aGVoaW5kdS5jb20vbmV3cy9uYXRpb25hbC9mb3ItZmlyc3QtdGltZS1pbmRpYS12b3Rlcy1hZ2FpbnN0LXJ1c3NpYS1pbi11bnNjLWR1cmluZy1wcm9jZWR1cmFsLXZvdGUtb24tdWtyYWluZS9hcnRpY2xlNjU4MDkxMDcuZWNl0gEA?oc=5",
    urlToImage: null,
    publishedAt: "2022-08-25T07:54:00Z",
    content: null
  },
  {
    source: { "id": null, "name": "Bollywood Life" },
    author: "Shivani Pawaskar",
    title: "Liger OTT release: Vijay Deverakonda, Ananya Panday film locks digital release date and platform - Bollywood Life",
    description: "Liger to release on OTT and regale digital audience; Vijay Deverakonda, Ananya Panday film locks digital platform.",
    url: "https://www.bollywoodlife.com/web-series/liger-ott-release-vijay-deverakonda-ananya-panday-film-locks-digital-release-date-and-platform-puri-jagannadh-karan-johar-charmme-kaur-entertainment-news-latest-tollywood-film-updates-bollywood-movies-2166699/",
    urlToImage: "https://st1.bollywoodlife.com/wp-content/uploads/2022/08/Liger-1-1-600x315.png",
    publishedAt: "2022-08-25T07:41:05Z",
    content: "Liger starring Vijay Deverakonda and Ananya Panday has released in theatres around the world today. While the Telugu version is now out, the Hindi version will hit the big screen from Thursday night.… [+2683 chars]"
  },
  {
    source: { "id": "google-news", "name": "Google News" },
    author: null,
    title: "Vivo V25 Pro available for sale in India with Rs 3500 discount on Flipkart - Kalinga TV",
    description: null,
    url: "https://news.google.com/__i/rss/rd/articles/CBMibGh0dHBzOi8va2FsaW5nYXR2LmNvbS90ZWNobm9sb2d5L3Zpdm8tdjI1LXByby1hdmFpbGFibGUtZm9yLXNhbGUtaW4taW5kaWEtd2l0aC1ycy0zNTAwLWRpc2NvdW50LW9uLWZsaXBrYXJ0L9IBAA?oc=5",
    urlToImage: null,
    publishedAt: "2022-08-25T07:27:58Z",
    content: null
  },
  {
    source: { "id": null, "name": "NDTV News" },
    author: null,
    title: "Three-Year-Old Girl, Declared Dead, Wakes Up At Her Funeral, Dies Hours Later - NDTV",
    description: "The girl experienced stomach pains, vomiting and fever after which she was rushed to the local hospital. The doctors declared her dead.",
    url: "https://www.ndtv.com/world-news/three-year-old-girl-declared-dead-wakes-up-at-her-funeral-dies-hours-later-3285041",
    urlToImage: "https://c.ndtvimg.com/2022-08/husos0fg_funeral-representational-unsplash-650_625x300_25_August_22.jpg",
    publishedAt: "2022-08-25T07:27:34Z",
    content: "The incident took place in Mexico on August 17. (Representational Photo)\r\nA three-year-old girl woke up at her own funeral after doctors mistakenly pronounced her dead. The incident took place in Mex… [+2152 chars]"
  },
  {
    source: { "id": null, "name": "The Indian Express" },
    author: "Express Web Desk",
    title: "Bilkis Bano case: SC agrees to hear Mahua Moitra challenge to convicts' remission - The Indian Express",
    description: "The Supreme Court issued a notice to the Gujarat government and issued directions to implead the released convicts in Bilkis Bano case. The matter has to be listed after two weeks, said reports.",
    url: "https://indianexpress.com/article/india/bilkis-bano-case-convicts-remission-supreme-court-mahua-moitra-8110691/",
    urlToImage: "https://images.indianexpress.com/2022/08/bikis-bano-3-2.jpg",
    publishedAt: "2022-08-25T06:26:24Z",
    content: "The Supreme Court Thursday agreed to hear Trinamool Congress MP Mahua Moitras challenge to the remission granted to 11 convicts in the Bilkis Bano case.The matter was heard by a bench headed by Chief… [+1128 chars]"
  },
  {
    source: { "id": null, "name": "The New Indian Express" },
    author: "Online Desk",
    title: "Listen in! Black hole makes sound, and it's super spooky - The New Indian Express",
    description: "#NASA has released a haunting audio clip of sound waves rippling out of a supermassive black hole, located 250 million light-years away. The black hole is at the center of the Perseus cluster of galaxies. It's the first time these sound waves have been extrac…",
    url: "https://www.newindianexpress.com/videos/videos-nation/2022/aug/25/listen-in-black-hole-makes-sound-and-its-super-spooky-110856.html",
    urlToImage: "https://images.newindianexpress.com/uploads/user/imagelibrary/2022/8/25/w600X390/AP19100474348599.jpg",
    publishedAt: "2022-08-25T05:29:00Z",
    content: "Disclaimer : We respect your thoughts and views! But we need to be judicious while moderating your comments. All the comments will be moderated by the newindianexpress.com editorial. Abstain from pos… [+631 chars]"
  },
  {
    source: { "id": null, "name": "Hindustan Times" },
    author: "HT Entertainment Desk",
    title: "SS Rajamouli reviews Brahmastra: ‘It is not a fairy tale’ - Hindustan Times",
    description: "SS Rajamouli has praised Ayan Mukerji's Brahmastra, and said that creating the world that he created with the new film is not an easy job. | Bollywood",
    url: "https://www.hindustantimes.com/entertainment/bollywood/ss-rajamouli-reviews-brahmastra-creating-a-world-that-ayan-mukerji-has-created-is-not-easy-101661394567630.html",
    urlToImage: "https://images.hindustantimes.com/img/2022/08/25/1600x900/ss_rajamouli_ranbir_kapoor_nagarjuna_1661395311165_1661395311400_1661395311400.JPG",
    publishedAt: "2022-08-25T04:01:01Z",
    content: "SS Rajamoulil, who is presenting the ambitious fantasy adventure film, Brahmastra, has said that with the film Ayan Mukerji has created a world which was not easy to create. Directed by Ayan, the fil… [+1585 chars]"
  },
  {
    source: { "id": null, "name": "The Indian Express" },
    author: "Sports Desk",
    title: "BWF World Championships Day 4 Live: MR Arjun-Dhruv Kapila storm into quarterfinals - The Indian Express",
    description: "BWF Badminton World Championships 2022 Live Streaming Online Today: Live Match Updates here",
    url: "https://indianexpress.com/article/sports/badminton/bwf-world-championships-day-4-live-8109909/",
    urlToImage: "https://images.indianexpress.com/2022/08/bwf-live-day-4.jpg",
    publishedAt: "2022-08-25T03:20:22Z",
    content: "Back at Ernakulam Rajiv Gandhi stadium, where the city’s best shuttlers assemble to worship the fine art of Badminton doubles, they solemnly attempt the ‘MR Arjun move.’ “The body swivels in a certai… [+923 chars]"
  },
  {
    source: { "id": "the-times-of-india", "name": "The Times of India" },
    author: "ET Bureau",
    title: "Bharti Telecom acquires 3.33% Airtel stake from Singtel in $1.61 billion deal - Economic Times",
    description: "“Singtel and its affiliates have entered into an agreement to transfer 3.33% shares to BTL for an aggregate amount of approx. SGD 2.25 billion, leaving direct shareholding of Singtel and Bharti in Airtel at 10% and 6% respectively,” BTL said in an exchange fi…",
    url: "https://economictimes.indiatimes.com/industry/telecom/telecom-news/bharti-telecom-acquires-3-33-airtel-stake-from-singtel-in-1-61-billion-deal/articleshow/93765647.cms",
    urlToImage: "https://img.etimg.com/thumb/msid-93765627,width-1070,height-580,imgsize-27802,overlay-economictimes/photo.jpg",
    publishedAt: "2022-08-25T02:51:00Z",
    content: "Singapore Telecommunications (Singtel) has decided to sell a 3.33% stake in Bharti Airtel to Bharti Telecom (BTL) the promoter company of for SGD2.25 billion ($1.61 billion approx).\r\nPost-the sale, S… [+3197 chars]"
  },
  {
    source: { "id": null, "name": "Livemint" },
    author: "Asit Manohar",
    title: "DreamFolks Services IPO: GMP jumps after strong retail subscription. Should you apply? | Mint - Mint",
    description: "DreamFolks IPO GMP today is  ₹83, which is  ₹23 higher from its yesterday's morning GMP of  ₹60 per equity share, say market observers",
    url: "https://www.livemint.com/market/ipo/dreamfolks-services-ipo-gmp-jumps-after-strong-retail-subscription-should-you-apply-11661392221188.html",
    urlToImage: "https://images.livemint.com/img/2022/08/25/600x338/aether_industries_ipo_1654140329895_1661392368166_1661392368166.jpg",
    publishedAt: "2022-08-25T01:57:51Z",
    content: "DreamFolks Services IPO: The initial public offer (IPO) of DreamFolks Services Ltd opened for subscription on 24th August 2022 and the public issue will remain open for bidding till 26th August 2022.… [+5343 chars]"
  },
  {
    source: { "id": null, "name": "The Indian Express" },
    author: "Bloomberg",
    title: "Six months of Putin's war unravels Russia's superpower image - The Indian Express",
    description: "President Joe Biden said he would turn the ruble to “rubble.” In the Kremlin, meanwhile, Putin and his closest advisers saw Ukraine as a nation divided with incompetent leaders that would lack the will to fight.",
    url: "https://indianexpress.com/article/world/six-months-putin-war-russia-superpower-image-8108849/",
    urlToImage: "https://images.indianexpress.com/2022/08/Putin-1.jpg",
    publishedAt: "2022-08-24T08:39:40Z",
    content: "Six months into President Vladimir Putins invasion of Ukraine, the war has upended fundamental assumptions about Russias military and economy.When the US warned of impending war earlier this year, of… [+8707 chars]"
  }]

  obj1=[{
    source: { "id": null, "name": "Hindustan Times" },
    author: "AP",
    title: "WHO: Monkeypox cases drop 21%, reversing month-long increase - Hindustan Times",
    description: "The U.N. health agency reported 5,907 new weekly cases and said two countries, Iran and Indonesia, reported their first cases. To date, more than 45,000 monkeypox cases have been reported in 98 countries since late April. | World News",
    url: "https://www.hindustantimes.com/world-news/who-monkeypox-cases-drop-21-reversing-month-long-increase-101661441342279.html",
    urlToImage: "https://images.hindustantimes.com/img/2022/08/25/1600x900/monkeypox_vs_tomato_fever_1661333787145_1661442241610_1661442241610.jpg",
    publishedAt: "2022-08-25T15:44:55Z",
    content: "The number of monkeypox cases reported globally dropped 21% in the last week, reversing a month-long trend of rising infections and signaling that Europe's outbreak may be starting to decline, the Wo… [+3830 chars]"
  },
  {
    source: { "id": null, "name": "News18" },
    author: "News Desk",
    title: "Sonali Phogat Murder: 2 Aides Detained; Autopsy Shows ‘Multiple Blunt Force Injuries’ | Updates - News18",
    description: "Sources said Sonali Phogat's personal assistant Sudhir Sangwan and his friend Sukhwinder Wasi are likely to be arrested shortly for their alleged involvement in her murder",
    url: "https://www.news18.com/news/india/bjp-leader-sonali-phogats-autopsy-shows-multiple-blunt-injuries-ex-haryana-minister-gopal-kanda-under-scanner-5821423.html",
    urlToImage: "https://images.news18.com/ibnlive/uploads/2022/08/sonali-phogat-2-166124303716x9.png",
    publishedAt: "2022-08-25T15:36:00Z",
    content: "The Goa police on Thursday registered a murder case to investigate Haryana BJP leader Sonali Phogats death after a post-mortem report revealed that there were multiple blunt force injuries on her bod… [+2565 chars]"
  },
  {
    source: { "id": null, "name": "YouTube" },
    author: null,
    title: "Alone in the Dark Devs Dig Into Gaming's Past | gamescom 2022 - IGN",
    description: "Max Scoville and Brian Altano are joined by Game Director Michael Hedberg to talk about Pieces Interactive’s upcoming remake of Alone in the Dark.#IGN #Gamin...",
    url: "https://www.youtube.com/watch?v=yD244jsu0Ts",
    urlToImage: "https://i.ytimg.com/vi/yD244jsu0Ts/hqdefault.jpg",
    publishedAt: "2022-08-25T15:30:12Z",
    content: null
  },
  {
    source: { "id": null, "name": "NDTV News" },
    author: null,
    title: "INS Vikrant Comes In At Key Time: 10 Facts About India's Own Aircraft Carrier - NDTV",
    description: "Indian Navy will get INS Vikrant, the country's first indigenously built aircraft carrier, formally on September 2. The timing happens to be crucial, when China is building up its presence in the Indian Ocean region.",
    url: "https://www.ndtv.com/india-news/ins-vikrant-induction-on-september-2-indian-navy-gets-bolstered-amid-china-threat-3286682",
    urlToImage: "https://c.ndtvimg.com/2022-08/e9bn3n3o_ins-vikrant-being-escorted-by-a-smaller-ship_625x300_25_August_22.jpg",
    publishedAt: "2022-08-25T15:17:00Z",
    content: "<li>Prime Minister Narendra Modi will be the chief guest when the 45,000-tonne warship would be commissioned. Multiple phases of sea trials have been completed since August 21 last year. Aviation tri… [+2920 chars]"
  },
  
  {
    source: { "id": "the-times-of-india", "name": "The Times of India" },
    author: "ET Spotlight Special",
    title: "Oppo Enco Buds 2 TWS enter Indian market at Rs 1,799. How to avail - Economic Times",
    description: "Oppo has launched its entry-level earbuds, Oppo Enco Buds 2 TWS, in the Indian market at Rs 1,799. The new Oppo Enco Buds 2 TWS will be sold through the company's website and Flipkart from August 31.",
    url: "https://economictimes.indiatimes.com/magazines/panache/buzz/oppo-enco-buds-2-tws-enter-indian-market-at-rs-1799-how-to-avail/articleshow/93782671.cms",
    urlToImage: "https://img.etimg.com/thumb/msid-93782654,width-1070,height-580,imgsize-21354,overlay-etpanache/photo.jpg",
    publishedAt: "2022-08-25T14:32:00Z",
    content: "Oppo Enco Buds 2 TWS (True Wireless Stereo) have hit the Indian market. The entry-level earbud, launched on August 25, has entered the market with features like AI-based noise cancellation and Dolby … [+1751 chars]"
  },
  {
    source: { "id": null, "name": "YouTube" },
    author: null,
    title: "Trending on WION: Italian man detected with Covid-19, Monkeypox and HIV at the same time - WION",
    description: "Let us take a look at stories generating interest across WION's social media channels.#TrendingOnWION #Italy #Covid-19About Channel: WION The World is One Ne...",
    url: "https://www.youtube.com/watch?v=6UpihEDSHs0",
    urlToImage: "https://i.ytimg.com/vi/6UpihEDSHs0/maxresdefault.jpg",
    publishedAt: "2022-08-25T14:28:11Z",
    content: null
  },
  {
    source: { "id": null, "name": "Livemint" },
    author: "Priyanka Sharma",
    title: "Newly identified gene could be clue to treatment of fungal infection in immuno-compromised patients | Mint - Mint",
    description: "The gene called CSA6 has been identified in Candida albicans, a fungal species infamous for causing high rates of morbidity and mortality under certain immuno-compromised conditions such as AIDS or during cancer treatment",
    url: "https://www.livemint.com/science/health/newly-identified-gene-could-be-clue-to-treatment-of-fungal-infection-in-immuno-compromised-patients-11661433250483.html",
    urlToImage: "https://images.livemint.com/img/2022/08/25/600x338/gene_1661434121076_1661434121275_1661434121275.jpg",
    publishedAt: "2022-08-25T13:29:12Z",
    content: "NEW DELHI : A newly identified gene can hold the key to prevent fungal infection Candidiasis that often affects intensive-care unit (ICU) patients, cancer patients and patients receiving immunosuppre… [+2579 chars]"
  },
  {
    source: { "id": null, "name": "Hindustan Times" },
    author: "HT News Desk",
    title: "India condemns 'horrific attack' on Rushdie, wishes author speedy recovery - Hindustan Times",
    description: "Rushdie suffered three stab wounds to his neck and four to his stomach. | Latest News India",
    url: "https://www.hindustantimes.com/india-news/india-condemns-horrific-attack-on-salman-rushdie-wishes-author-speedy-recovery-101661429655475.html",
    urlToImage: "https://images.hindustantimes.com/img/2022/08/25/1600x900/PEOPLE-SALMAN-RUSHDIE--0_1660348222473_1660348222473_1661433352676_1661433352676.JPG",
    publishedAt: "2022-08-25T13:17:32Z",
    content: "India on Thursday wished author Salman Rushdie a speedy recovery and condemned the 'horrific attack' on 'The Satanic Verses' writer; this is the government's first formal reaction. Rushdie was stabbe… [+1237 chars]"
  },
  {
    source: { "id": "google-news", "name": "Google News" },
    author: null,
    title: "VICE journalist Angad Singh deported from Delhi - The Hindu",
    description: null,
    url: "https://news.google.com/__i/rss/rd/articles/CBMiamh0dHBzOi8vd3d3LnRoZWhpbmR1LmNvbS9uZXdzL25hdGlvbmFsL3ZpY2Utam91cm5hbGlzdC1hbmdhZC1zaW5naC1kZXBvcnRlZC1mcm9tLWRlbGhpL2FydGljbGU2NTgxMDI0Ni5lY2XSAQA?oc=5",
    urlToImage: null,
    publishedAt: "2022-08-25T13:14:00Z",
    content: null
  },
  {
     source: { "id": null, "name": "Sporting News" },
    author: null,
    title: "Champions League group stage draw LIVE: Real Madrid, Barcelona, Chelsea, Liverpool & more learn opponents - Goal.com",
    description: "Get the latest soccer news, rumors, video highlights, scores, schedules, standings, photos, player information and more from Sporting News Canada",
    url: "https://www.sportingnews.com/ca/soccer",
    urlToImage: "https://static.sportingnews.com/1.15.0.11/themes/custom/tsn/logo.jpg",
    publishedAt: "2022-08-25T13:02:22Z",
    content: null
  },
  {
     source: { "id": null, "name": "India Today" },
    author: null,
    title: "Sawan Kumar Tak passes away at 86, Salman Khan shares heartfelt note - India Today",
    description: "Veteran filmmaker Sawan Kumar Tak has passed away. He was 86.",
    url: "https://www.indiatoday.in/movies/celebrities/story/salman-khan-shares-unseen-throwback-pic-with-sawan-kumar-tak-says-always-loved-and-respected-you-1992476-2022-08-25",
    urlToImage: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/Sawaan-647x363.png?Kt69E7GTAWLaFQnA0d5KEumXqGgRv2n5",
    publishedAt: "2022-08-25T12:22:28Z",
    content: "Veteran filmmaker-lyricist Sawan Kumar Tak has passed away. The filmmaker had a past record of lung-related ailments and was battling for his life in the ICU. Salman Khan, who has closely worked with… [+1162 chars]"
  },
  {
     source: { "id": null, "name": "The Indian Express" },
    author: "Sreenivas Janyala",
    title: "Out on bail, suspended Telangana BJP leader T Raja Singh arrested again - The Indian Express",
    description: "The Goshamahal MLA was granted bail by a local court on Wednesday evening, hours after he was arrested from his residence.",
    url: "https://indianexpress.com/article/cities/hyderabad/t-raja-singh-arrested-bjp-mla-prophet-remarks-8111443/",
    urlToImage: "https://images.indianexpress.com/2022/08/T-Raja-arrest.jpg",
    publishedAt: "2022-08-25T12:18:27Z",
    content: "The Hyderabad police Thursday arrested suspended BJP leader T Raja Singh, who is out on bail in connection with a case registered against him over his alleged derogatory comments about the Prophet.Th… [+1482 chars]"
  },
  {
     source: { "id": null, "name": "123telugu.com" },
    author: null,
    title: "The Ghost Trailer – Power-packed and stylish - 123telugu",
    description: "King Nagarjuna has scored a blockbuster this year beginning in the form of Bangarraju. He will be seen next in The Ghost an action thriller directed by Praveen Sattharu of Garuda Vega fame. The traile",
    url: "https://www.123telugu.com/mnews/the-ghost-trailer-power-packed-and-stylish.html",
    urlToImage: "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
    publishedAt: "2022-08-25T12:05:00Z",
    content: "King Nagarjuna has scored a blockbuster this year beginning in the form of Bangarraju. He will be seen next in The Ghost an action thriller directed by Praveen Sattharu of Garuda Vega fame. The trail… [+1072 chars]"
  },
  {
     source: { "id": null, "name": "Hindustan Times" },
    author: "HT News Desk",
    title: "Ashwini Vaishnaw's big announcement on 5G services launch in India - Hindustan Times",
    description: "During his Independence Day address from the ramparts of the Red Fort, Prime Minister Narendra Modi had said that the 5G services will be launched in India soon.",
    url: "https://www.hindustantimes.com/technology/ashwini-vaishnaw-s-big-announcement-on-5g-services-launch-in-india-jio-airtel-adani-group-101661426838662.html",
    urlToImage: "https://images.hindustantimes.com/img/2022/08/25/1600x900/Union_telecom_minister_Ashwini_Vaishnaw_1661426860335_1661426860517_1661426860517.jpg",
    publishedAt: "2022-08-25T11:51:27Z",
    content: "Union communications and information technology minister Ashwini Vaishnaw on Thursday said the government is planning to roll out 5G services rapidly and expressed hope of a launch by October 12, ANI… [+1752 chars]"
  },
  {
     source: { "id": null, "name": "NDTV News" },
    author: null,
    title: "Tomato Flu Or Monkeypox? Here's How To Tell Them Apart - NDTV",
    description: "Tomato Flu Or Monkeypox: In this article, we discuss the origin, symptoms, and other differentiators to help you differentiate between the two.",
    url: "https://www.ndtv.com/health/tomato-flu-or-monkeypox-heres-how-to-tell-them-apart-3285873",
    urlToImage: "https://c.ndtvimg.com/2022-08/aoclsjs_kid-with-fever_625x300_22_August_22.jpg",
    publishedAt: "2022-08-25T11:14:00Z",
    content: "Tomato flu or monkeypox: Tomato flu is being reported in children only\r\nThe world has been taken by storm since cases of tomato flu, monkeypox, covid-19, the flu, dengue, and many other diseases are … [+3470 chars]"
  },
  {
     source: { "id": null, "name": "Www.bgr.in" },
    author: "Md Waquar Haider",
    title: "Ahead of iPhone 14 launch, original first-generation 2007 iPhone sold for Rs 28 lakhs - BGR India",
    description: "An unopened first-generation 2007 iPhone in a sealed box has been sold for $35000 (nearly ₹28 lakh) in an auction in the US.",
    url: "https://www.bgr.in/mobiles/ahead-of-iphone-14-launch-original-first-generation-2007-iphone-sold-for-rs-28-lakhs-1316137/",
    urlToImage: "https://st1.bgr.in/wp-content/uploads/2022/08/Fisrt-Gen-Iphone-.jpg",
    publishedAt: "2022-08-25T10:58:16Z",
    content: "An unopened first-generation 2007 iPhone in a sealed box has been sold for $35,000 (nearly 28 lakh) in an auction in the US. On January 9, 2007, then Apple CEO Steve Jobs unveiled the iPhone — a touc… [+2199 chars]"
  },
  {
     source: { "id": null, "name": "NDTV News" },
    author: null,
    title: "\"Only God Can Stop Us\": Manager Explains Demolition Of Noida Twin Towers - NDTV",
    description: "The Supreme Court has given a go-ahead for demolishing the twin towers with explosives. The exercise was supposed to start on August 21 but the court accepted the Noida Authority's request and extended the date of the demolition to August 28.",
    url: "https://www.ndtv.com/india-news/supertech-noida-twin-towers-demolition-only-god-can-stop-us-says-edifice-engineering-3285726",
    urlToImage: "https://c.ndtvimg.com/2021-09/4r2m71d4_supertech-emerald-court-twin-towers-ani-up-twitter_625x300_01_September_21.jpg",
    publishedAt: "2022-08-25T10:36:37Z",
    content: "The demolition will take place at 2:30 pm on August 28.\r\nNoida: \"Nobody but God can stop us now,\" the project manager responsible for the demolition of Supertech's illegal twin 40-storey towers today… [+1856 chars]"
  },
  {
     source: { "id": null, "name": "Hindustan Times" },
    author: "Shaurya Tomer",
    title: "DANGER! 100-foot Asteroid 2022 QQ4 hurtling towards Earth; NASA reveals date, time - HT Tech",
    description: "100 foot wide Asteroid 2022 QQ4 will just miss Earth on August 27, says NASA. Here’s what we know about it.",
    url: "https://tech.hindustantimes.com/tech/news/danger-100-foot-asteroid-2022-qq4-hurtling-towards-earth-nasa-reveals-date-time-71661421252797.html",
    urlToImage: "https://images.hindustantimes.com/tech/img/2022/08/25/1600x900/asteroid-4145080_1920_1646293428986_1661421338220_1661421338220.jpg",
    publishedAt: "2022-08-25T09:56:37Z",
    content: "huge 100 foot wide asteroid is heading for Earth. NASA issued a warning that the asteroid is on its way to Earth, but will just about miss the planet on August 26. The asteroid, named Asteroid 2022 Q… [+1479 chars]"
  },
  {
     source: { "id": null, "name": "Moneycontrol" },
    author: "Moneycontrol News",
    title: "Sensex, Nifty erase gains to turn negative: Factors that led to the move - Moneycontrol",
    description: "Analysts said markets have factored in an aggressive rate hike from the Federal Reserve, but nevertheless may remain volatile ahead of monthly expiry.",
    url: "https://www.moneycontrol.com/news/business/earnings/sensex-nifty-erase-gains-to-turn-negative-factors-that-led-to-the-move-9085811.html",
    urlToImage: "https://images.moneycontrol.com/static-mcnews/2021/08/Delisting-770x433.jpg",
    publishedAt: "2022-08-25T09:55:58Z",
    content: "Indian markets erased all its morning gains and turned negative. The benchmark Sensex and Nifty, which had risen as much as 0.7 percent each in morning trade, erased all its gains. At closing, the be… [+3106 chars]"
  }

  ]

  constructor(){
    super();
    console.log("Hello I am constructor from news components");
    this.state = {
      articles:[{
        source: { "id": null, "name": "Hindustan Times" },
        author: "AP",
        title: "WHO: Monkeypox cases drop 21%, reversing month-long increase - Hindustan Times",
        description: "The U.N. health agency reported 5,907 new weekly cases and said two countries, Iran and Indonesia, reported their first cases. To date, more than 45,000 monkeypox cases have been reported in 98 countries since late April. | World News",
        url: "https://www.hindustantimes.com/world-news/who-monkeypox-cases-drop-21-reversing-month-long-increase-101661441342279.html",
        urlToImage: "https://images.hindustantimes.com/img/2022/08/25/1600x900/monkeypox_vs_tomato_fever_1661333787145_1661442241610_1661442241610.jpg",
        publishedAt: "2022-08-25T15:44:55Z",
        content: "The number of monkeypox cases reported globally dropped 21% in the last week, reversing a month-long trend of rising infections and signaling that Europe's outbreak may be starting to decline, the Wo… [+3830 chars]"
      },
      {
        source: { "id": null, "name": "News18" },
        author: "News Desk",
        title: "Sonali Phogat Murder: 2 Aides Detained; Autopsy Shows ‘Multiple Blunt Force Injuries’ | Updates - News18",
        description: "Sources said Sonali Phogat's personal assistant Sudhir Sangwan and his friend Sukhwinder Wasi are likely to be arrested shortly for their alleged involvement in her murder",
        url: "https://www.news18.com/news/india/bjp-leader-sonali-phogats-autopsy-shows-multiple-blunt-injuries-ex-haryana-minister-gopal-kanda-under-scanner-5821423.html",
        urlToImage: "https://images.news18.com/ibnlive/uploads/2022/08/sonali-phogat-2-166124303716x9.png",
        publishedAt: "2022-08-25T15:36:00Z",
        content: "The Goa police on Thursday registered a murder case to investigate Haryana BJP leader Sonali Phogats death after a post-mortem report revealed that there were multiple blunt force injuries on her bod… [+2565 chars]"
      },
      {
        source: { "id": null, "name": "YouTube" },
        author: null,
        title: "Alone in the Dark Devs Dig Into Gaming's Past | gamescom 2022 - IGN",
        description: "Max Scoville and Brian Altano are joined by Game Director Michael Hedberg to talk about Pieces Interactive’s upcoming remake of Alone in the Dark.#IGN #Gamin...",
        url: "https://www.youtube.com/watch?v=yD244jsu0Ts",
        urlToImage: "https://i.ytimg.com/vi/yD244jsu0Ts/hqdefault.jpg",
        publishedAt: "2022-08-25T15:30:12Z",
        content: null
      },
      {
        source: { "id": null, "name": "NDTV News" },
        author: null,
        title: "INS Vikrant Comes In At Key Time: 10 Facts About India's Own Aircraft Carrier - NDTV",
        description: "Indian Navy will get INS Vikrant, the country's first indigenously built aircraft carrier, formally on September 2. The timing happens to be crucial, when China is building up its presence in the Indian Ocean region.",
        url: "https://www.ndtv.com/india-news/ins-vikrant-induction-on-september-2-indian-navy-gets-bolstered-amid-china-threat-3286682",
        urlToImage: "https://c.ndtvimg.com/2022-08/e9bn3n3o_ins-vikrant-being-escorted-by-a-smaller-ship_625x300_25_August_22.jpg",
        publishedAt: "2022-08-25T15:17:00Z",
        content: "<li>Prime Minister Narendra Modi will be the chief guest when the 45,000-tonne warship would be commissioned. Multiple phases of sea trials have been completed since August 21 last year. Aviation tri… [+2920 chars]"
      },
      
      {
        source: { "id": "the-times-of-india", "name": "The Times of India" },
        author: "ET Spotlight Special",
        title: "Oppo Enco Buds 2 TWS enter Indian market at Rs 1,799. How to avail - Economic Times",
        description: "Oppo has launched its entry-level earbuds, Oppo Enco Buds 2 TWS, in the Indian market at Rs 1,799. The new Oppo Enco Buds 2 TWS will be sold through the company's website and Flipkart from August 31.",
        url: "https://economictimes.indiatimes.com/magazines/panache/buzz/oppo-enco-buds-2-tws-enter-indian-market-at-rs-1799-how-to-avail/articleshow/93782671.cms",
        urlToImage: "https://img.etimg.com/thumb/msid-93782654,width-1070,height-580,imgsize-21354,overlay-etpanache/photo.jpg",
        publishedAt: "2022-08-25T14:32:00Z",
        content: "Oppo Enco Buds 2 TWS (True Wireless Stereo) have hit the Indian market. The entry-level earbud, launched on August 25, has entered the market with features like AI-based noise cancellation and Dolby … [+1751 chars]"
      },
      {
        source: { "id": null, "name": "YouTube" },
        author: null,
        title: "Trending on WION: Italian man detected with Covid-19, Monkeypox and HIV at the same time - WION",
        description: "Let us take a look at stories generating interest across WION's social media channels.#TrendingOnWION #Italy #Covid-19About Channel: WION The World is One Ne...",
        url: "https://www.youtube.com/watch?v=6UpihEDSHs0",
        urlToImage: "https://i.ytimg.com/vi/6UpihEDSHs0/maxresdefault.jpg",
        publishedAt: "2022-08-25T14:28:11Z",
        content: null
      },
      {
        source: { "id": null, "name": "Livemint" },
        author: "Priyanka Sharma",
        title: "Newly identified gene could be clue to treatment of fungal infection in immuno-compromised patients | Mint - Mint",
        description: "The gene called CSA6 has been identified in Candida albicans, a fungal species infamous for causing high rates of morbidity and mortality under certain immuno-compromised conditions such as AIDS or during cancer treatment",
        url: "https://www.livemint.com/science/health/newly-identified-gene-could-be-clue-to-treatment-of-fungal-infection-in-immuno-compromised-patients-11661433250483.html",
        urlToImage: "https://images.livemint.com/img/2022/08/25/600x338/gene_1661434121076_1661434121275_1661434121275.jpg",
        publishedAt: "2022-08-25T13:29:12Z",
        content: "NEW DELHI : A newly identified gene can hold the key to prevent fungal infection Candidiasis that often affects intensive-care unit (ICU) patients, cancer patients and patients receiving immunosuppre… [+2579 chars]"
      },
      {
        source: { "id": null, "name": "Hindustan Times" },
        author: "HT News Desk",
        title: "India condemns 'horrific attack' on Rushdie, wishes author speedy recovery - Hindustan Times",
        description: "Rushdie suffered three stab wounds to his neck and four to his stomach. | Latest News India",
        url: "https://www.hindustantimes.com/india-news/india-condemns-horrific-attack-on-salman-rushdie-wishes-author-speedy-recovery-101661429655475.html",
        urlToImage: "https://images.hindustantimes.com/img/2022/08/25/1600x900/PEOPLE-SALMAN-RUSHDIE--0_1660348222473_1660348222473_1661433352676_1661433352676.JPG",
        publishedAt: "2022-08-25T13:17:32Z",
        content: "India on Thursday wished author Salman Rushdie a speedy recovery and condemned the 'horrific attack' on 'The Satanic Verses' writer; this is the government's first formal reaction. Rushdie was stabbe… [+1237 chars]"
      },
      {
        source: { "id": "google-news", "name": "Google News" },
        author: null,
        title: "VICE journalist Angad Singh deported from Delhi - The Hindu",
        description: null,
        url: "https://news.google.com/__i/rss/rd/articles/CBMiamh0dHBzOi8vd3d3LnRoZWhpbmR1LmNvbS9uZXdzL25hdGlvbmFsL3ZpY2Utam91cm5hbGlzdC1hbmdhZC1zaW5naC1kZXBvcnRlZC1mcm9tLWRlbGhpL2FydGljbGU2NTgxMDI0Ni5lY2XSAQA?oc=5",
        urlToImage: null,
        publishedAt: "2022-08-25T13:14:00Z",
        content: null
      },
      {
         source: { "id": null, "name": "Sporting News" },
        author: null,
        title: "Champions League group stage draw LIVE: Real Madrid, Barcelona, Chelsea, Liverpool & more learn opponents - Goal.com",
        description: "Get the latest soccer news, rumors, video highlights, scores, schedules, standings, photos, player information and more from Sporting News Canada",
        url: "https://www.sportingnews.com/ca/soccer",
        urlToImage: "https://static.sportingnews.com/1.15.0.11/themes/custom/tsn/logo.jpg",
        publishedAt: "2022-08-25T13:02:22Z",
        content: null
      },
      {
         source: { "id": null, "name": "India Today" },
        author: null,
        title: "Sawan Kumar Tak passes away at 86, Salman Khan shares heartfelt note - India Today",
        description: "Veteran filmmaker Sawan Kumar Tak has passed away. He was 86.",
        url: "https://www.indiatoday.in/movies/celebrities/story/salman-khan-shares-unseen-throwback-pic-with-sawan-kumar-tak-says-always-loved-and-respected-you-1992476-2022-08-25",
        urlToImage: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/Sawaan-647x363.png?Kt69E7GTAWLaFQnA0d5KEumXqGgRv2n5",
        publishedAt: "2022-08-25T12:22:28Z",
        content: "Veteran filmmaker-lyricist Sawan Kumar Tak has passed away. The filmmaker had a past record of lung-related ailments and was battling for his life in the ICU. Salman Khan, who has closely worked with… [+1162 chars]"
      },
      {
         source: { "id": null, "name": "The Indian Express" },
        author: "Sreenivas Janyala",
        title: "Out on bail, suspended Telangana BJP leader T Raja Singh arrested again - The Indian Express",
        description: "The Goshamahal MLA was granted bail by a local court on Wednesday evening, hours after he was arrested from his residence.",
        url: "https://indianexpress.com/article/cities/hyderabad/t-raja-singh-arrested-bjp-mla-prophet-remarks-8111443/",
        urlToImage: "https://images.indianexpress.com/2022/08/T-Raja-arrest.jpg",
        publishedAt: "2022-08-25T12:18:27Z",
        content: "The Hyderabad police Thursday arrested suspended BJP leader T Raja Singh, who is out on bail in connection with a case registered against him over his alleged derogatory comments about the Prophet.Th… [+1482 chars]"
      },
      {
         source: { "id": null, "name": "123telugu.com" },
        author: null,
        title: "The Ghost Trailer – Power-packed and stylish - 123telugu",
        description: "King Nagarjuna has scored a blockbuster this year beginning in the form of Bangarraju. He will be seen next in The Ghost an action thriller directed by Praveen Sattharu of Garuda Vega fame. The traile",
        url: "https://www.123telugu.com/mnews/the-ghost-trailer-power-packed-and-stylish.html",
        urlToImage: "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
        publishedAt: "2022-08-25T12:05:00Z",
        content: "King Nagarjuna has scored a blockbuster this year beginning in the form of Bangarraju. He will be seen next in The Ghost an action thriller directed by Praveen Sattharu of Garuda Vega fame. The trail… [+1072 chars]"
      },
      {
         source: { "id": null, "name": "Hindustan Times" },
        author: "HT News Desk",
        title: "Ashwini Vaishnaw's big announcement on 5G services launch in India - Hindustan Times",
        description: "During his Independence Day address from the ramparts of the Red Fort, Prime Minister Narendra Modi had said that the 5G services will be launched in India soon.",
        url: "https://www.hindustantimes.com/technology/ashwini-vaishnaw-s-big-announcement-on-5g-services-launch-in-india-jio-airtel-adani-group-101661426838662.html",
        urlToImage: "https://images.hindustantimes.com/img/2022/08/25/1600x900/Union_telecom_minister_Ashwini_Vaishnaw_1661426860335_1661426860517_1661426860517.jpg",
        publishedAt: "2022-08-25T11:51:27Z",
        content: "Union communications and information technology minister Ashwini Vaishnaw on Thursday said the government is planning to roll out 5G services rapidly and expressed hope of a launch by October 12, ANI… [+1752 chars]"
      },
      {
         source: { "id": null, "name": "NDTV News" },
        author: null,
        title: "Tomato Flu Or Monkeypox? Here's How To Tell Them Apart - NDTV",
        description: "Tomato Flu Or Monkeypox: In this article, we discuss the origin, symptoms, and other differentiators to help you differentiate between the two.",
        url: "https://www.ndtv.com/health/tomato-flu-or-monkeypox-heres-how-to-tell-them-apart-3285873",
        urlToImage: "https://c.ndtvimg.com/2022-08/aoclsjs_kid-with-fever_625x300_22_August_22.jpg",
        publishedAt: "2022-08-25T11:14:00Z",
        content: "Tomato flu or monkeypox: Tomato flu is being reported in children only\r\nThe world has been taken by storm since cases of tomato flu, monkeypox, covid-19, the flu, dengue, and many other diseases are … [+3470 chars]"
      },
      {
         source: { "id": null, "name": "Www.bgr.in" },
        author: "Md Waquar Haider",
        title: "Ahead of iPhone 14 launch, original first-generation 2007 iPhone sold for Rs 28 lakhs - BGR India",
        description: "An unopened first-generation 2007 iPhone in a sealed box has been sold for $35000 (nearly ₹28 lakh) in an auction in the US.",
        url: "https://www.bgr.in/mobiles/ahead-of-iphone-14-launch-original-first-generation-2007-iphone-sold-for-rs-28-lakhs-1316137/",
        urlToImage: "https://st1.bgr.in/wp-content/uploads/2022/08/Fisrt-Gen-Iphone-.jpg",
        publishedAt: "2022-08-25T10:58:16Z",
        content: "An unopened first-generation 2007 iPhone in a sealed box has been sold for $35,000 (nearly 28 lakh) in an auction in the US. On January 9, 2007, then Apple CEO Steve Jobs unveiled the iPhone — a touc… [+2199 chars]"
      },
      {
         source: { "id": null, "name": "NDTV News" },
        author: null,
        title: "\"Only God Can Stop Us\": Manager Explains Demolition Of Noida Twin Towers - NDTV",
        description: "The Supreme Court has given a go-ahead for demolishing the twin towers with explosives. The exercise was supposed to start on August 21 but the court accepted the Noida Authority's request and extended the date of the demolition to August 28.",
        url: "https://www.ndtv.com/india-news/supertech-noida-twin-towers-demolition-only-god-can-stop-us-says-edifice-engineering-3285726",
        urlToImage: "https://c.ndtvimg.com/2021-09/4r2m71d4_supertech-emerald-court-twin-towers-ani-up-twitter_625x300_01_September_21.jpg",
        publishedAt: "2022-08-25T10:36:37Z",
        content: "The demolition will take place at 2:30 pm on August 28.\r\nNoida: \"Nobody but God can stop us now,\" the project manager responsible for the demolition of Supertech's illegal twin 40-storey towers today… [+1856 chars]"
      },
      {
         source: { "id": null, "name": "Hindustan Times" },
        author: "Shaurya Tomer",
        title: "DANGER! 100-foot Asteroid 2022 QQ4 hurtling towards Earth; NASA reveals date, time - HT Tech",
        description: "100 foot wide Asteroid 2022 QQ4 will just miss Earth on August 27, says NASA. Here’s what we know about it.",
        url: "https://tech.hindustantimes.com/tech/news/danger-100-foot-asteroid-2022-qq4-hurtling-towards-earth-nasa-reveals-date-time-71661421252797.html",
        urlToImage: "https://images.hindustantimes.com/tech/img/2022/08/25/1600x900/asteroid-4145080_1920_1646293428986_1661421338220_1661421338220.jpg",
        publishedAt: "2022-08-25T09:56:37Z",
        content: "huge 100 foot wide asteroid is heading for Earth. NASA issued a warning that the asteroid is on its way to Earth, but will just about miss the planet on August 26. The asteroid, named Asteroid 2022 Q… [+1479 chars]"
      },
      {
         source: { "id": null, "name": "Moneycontrol" },
        author: "Moneycontrol News",
        title: "Sensex, Nifty erase gains to turn negative: Factors that led to the move - Moneycontrol",
        description: "Analysts said markets have factored in an aggressive rate hike from the Federal Reserve, but nevertheless may remain volatile ahead of monthly expiry.",
        url: "https://www.moneycontrol.com/news/business/earnings/sensex-nifty-erase-gains-to-turn-negative-factors-that-led-to-the-move-9085811.html",
        urlToImage: "https://images.moneycontrol.com/static-mcnews/2021/08/Delisting-770x433.jpg",
        publishedAt: "2022-08-25T09:55:58Z",
        content: "Indian markets erased all its morning gains and turned negative. The benchmark Sensex and Nifty, which had risen as much as 0.7 percent each in morning trade, erased all its gains. At closing, the be… [+3106 chars]"
      }],
      loading:false,
      page:1
      
    }
  }

  // async componentDidMount(){
  //   let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=0f600446b666472795cb0bd8194471ef&page=1&pageSize=20";
  //   let data= await fetch(url);
  //   let parsedData = await data.json()
  //   console .log(parsedData);
  //   this.setState({articles:parsedData.articles, totalResults: parsedData.totalResults})
  // }

  handlePrevClick = ()=>{
  //   console.log("Previous")
  //   let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=0f600446b666472795cb0bd8194471ef&page=${this.state.page - 1}&pageSize=20`;
  //   let data= await fetch(url);
  //   let parsedData = await data.json()
  //   console .log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles:this.obj1
    })
   }

  handleNextClick = ()=>{
    console.log("Next")
    this.setState({
      articles:this.obj,
      page:this.state.page+1

    })
  //   if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){}
  // else{

  //   let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=0f600446b666472795cb0bd8194471ef&page=${this.state.page + 1}&pageSize=20`;
  //   let data= await fetch(url);
  //   let parsedData = await data.json()
  //   console .log(parsedData);

  //   this.setState({
  //     page: this.state.page + 1,
  //     articles:parsedData.articles
  //   })
  //}
   }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NEWSbite - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <Newsitem title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>

        })}
          </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page===1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
          <button disabled={this.state.page > 2} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>

      </div>
    )
  }
}

export default News