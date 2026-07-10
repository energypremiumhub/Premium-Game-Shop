/* ============================================
   PREMIUM GAME SHOP - MAIN JAVASCRIPT (FIXED)
   ============================================ */

// ========== GLOBAL CONFIG ==========
const TELEGRAM_BOT_TOKEN = '8751360822:AAFQNiWhfGWgUsjD7Bd5DzfHMfpkR4COHY8';
const TELEGRAM_CHAT_ID = '8745522082';

// ========== LANGUAGE DATA ==========
const LANG_DATA = {
    my: {
        appName: 'Premium', appSub: 'Game Shop',
        home: 'ပင်မ', shop: 'ဆိုင်', payment: 'ငွေပေးချေ', profile: 'ပရိုဖိုင်', noti: 'ငွေပေးချေ',
        greeting: 'ဟေ့ကောင်လေး!',
        subtitle: 'စိန်တွေဖြည့်ပြီး စစ်မြေပြင်ကို အနိုင်ယူလိုက်ပါ',
        goToShop: '⚡ GO TO SHOP', shopClosed: '🔒 SHOP CLOSED',
        shopSubText: 'ပက်ကေ့ခ်ျအားလုံးကိုကြည့်ပါ',
        servicesTitle: 'ဘာကြောင့် ကျွန်ုပ်တို့ကိုရွေးမလဲ?',
        s1: '၁၀ မိနစ်အတွင်း အော်ဒါပြီးမြောက်',
        s2: 'လျှင်မြန် • လွယ်ကူ • ယုံကြည်စိတ်ချရ',
        s3: 'အတန်ဆုံးဈေးနဲ့ အကောင်းဆုံး Service',
        s4: 'မနက် ၉:၃၀ မှ ည ၉:၃၀ အထိ',
        s5: 'Mobile Legends', s6: 'Coming Soon',
        telegramTitle: '📢 ကျွန်ုပ်တို့ Telegram ချန်နယ်သို့လာရောက်ပါ',
        telegramDesc: 'နောက်ဆုံးရသတင်းများ၊ ပရိုမိုးရှင်းများနှင့် အကူအညီရယူပါ',
        contactLabel: '💬 အကူအညီလိုပါသလား?', contactUsername: '@PremEnergy',
        shopOpen: 'OPEN', shopClosedStatus: 'CLOSED',
        shopOpenText: 'မနက် ၉:၃၀ မှ ည ၉:၃၀ အတွင်းသာ ဆိုင်ဖွင့်မည် (မြန်မာစံတော်ချိန်)',
        shopClosedText: 'မနက် ၉:၃၀ မှသာ ဆိုင်ဖွင့်ပါမည် (မြန်မာစံတော်ချိန်)',
        // Auth Modal
        modalLogin: 'ဝင်ရန်', modalRegister: 'မှတ်ပုံတင်ရန်',
        modalLoginSub: 'ပြန်လည်ကြိုဆိုပါတယ်!', modalRegisterSub: 'အကောင့်ဖွင့်ပါ!',
        email: 'အီးမေးလ် / အသုံးပြုသူအမည် / ဖုန်းနံပါတ်', password: 'စကားဝှက်',
        forgotPassword: 'စကားဝှက်မေ့နေပါသလား?',
        switchLogin: 'အကောင့်မရှိသေးဘူး? မှတ်ပုံတင်ရန်',
        switchRegister: 'အကောင့်ရှိပြီးသား? ဝင်ရန်',
        login: 'ဝင်ရန်', register: 'မှတ်ပုံတင်ရန်',
        loginSuccess: '✅ ကြိုဆိုပါတယ်!', registerSuccess: '✅ အကောင့်ဖွင့်ခြင်းအောင်မြင်ပါပြီ!',
        enterEmail: 'ကျေးဇူးပြု၍ အီးမေးလ်၊ အသုံးပြုသူအမည် သို့မဟုတ် ဖုန်းနံပါတ်ထည့်ပါ',
        enterPassword: 'ကျေးဇူးပြု၍ စကားဝှက်ထည့်ပါ',
        enterUsername: 'ကျေးဇူးပြု၍ အသုံးပြုသူအမည်ထည့်ပါ',
        passwordMin: 'စကားဝှက်သည် အနည်းဆုံး ၄ လုံးရှိရမယ်',
        passwordMatch: 'စကားဝှက်များ မတူညီပါ',
        userExists: '❌ အသုံးပြုသူအမည်၊ အီးမေးလ် သို့မဟုတ် ဖုန်းနံပါတ် ရှိပြီးသားပါ',
        invalidCredentials: '❌ အီးမေးလ်/အသုံးပြုသူအမည်/ဖုန်းနံပါတ် သို့မဟုတ် စကားဝှက် မှားနေပါသည်',
        // Settings
        settingsNameTitle: '✏️ နာမည်ပြောင်းရန်', settingsNameSub: 'နာမည်အသစ်ထည့်ပါ',
        settingsUsernameTitle: '✏️ အသုံးပြုသူအမည်ပြောင်းရန်', settingsUsernameSub: 'အသုံးပြုသူအမည်အသစ်ထည့်ပါ',
        settingsEmailTitle: '📧 အီးမေးလ်ပြောင်းရန်', settingsEmailSub: 'အီးမေးလ်အသစ်ထည့်ပါ',
        settingsPhoneTitle: '📱 ဖုန်းနံပါတ်ပြောင်းရန်', settingsPhoneSub: 'ဖုန်းနံပါတ်အသစ်ထည့်ပါ',
        settingsPassTitle: '🔑 စကားဝှက်ပြောင်းရန်', settingsPassSub: 'စကားဝှက်အသစ်ထည့်ပါ',
        settingsNameLabel: 'နာမည်အသစ်', settingsUsernameLabel: 'အသုံးပြုသူအမည်အသစ်',
        settingsEmailLabel: 'အီးမေးလ်အသစ်', settingsPhoneLabel: 'ဖုန်းနံပါတ်အသစ်',
        settingsPassLabel: 'စကားဝှက်အသစ်', settingsConfirmLabel: 'စကားဝှက်အတည်ပြုရန်',
        settingsSave: '💾 သိမ်းမည်', settingsError: 'ကျေးဇူးပြု၍ ထည့်ပါ',
        settingsPassError: 'စကားဝှက်များတူညီရမည်',
        settingsUsernameExists: '❌ ဤအသုံးပြုသူအမည်ရှိပြီးသားပါ',
        saveSuccess: '✅ အောင်မြင်ပါသည်!', logoutSuccess: '✅ ထွက်ပြီးပါပြီ!',
        // Notifications
        pageTitleNoti: 'သတိပေးချက်များ', emptyNoti: 'သတိပေးချက် မရှိသေးပါ',
        clearAll: 'အကုန်ဖျက်မည်', cleared: '✅ အကုန်ဖျက်ပြီး',
        // Payment
        paymentTitle: 'ငွေပေးချေရန်', paymentSub: 'အောက်ပါအကောင့်များထဲမှ တစ်ခုခုသို့ ငွေပို့ပါ',
        accountsTitle: 'ငွေလက်ခံမည့်အကောင့်များ', wave: 'Wave Pay', kpay: 'KBZ Pay',
        howToTitle: 'ငွေပေးချေနည်း',
        step1: '<strong>Wave Pay</strong> သို့မဟုတ် <strong>KBZ Pay</strong> ရွေးပါ',
        step2: 'အပေါ်က <strong>ဖုန်းနံပါတ်</strong> ကိုကူးယူပါ',
        step3: 'အတိအကျငွေပို့ပြီး <strong>Screenshot</strong> ရိုက်ပါ',
        step4: '<strong>ဆိုင်</strong> သို့သွားပြီး အော်ဒါအပြီးသတ်ပါ',
        supportTitle: 'အကူအညီ', supportLabel: 'Telegram မှ ဆက်သွယ်ပါ',
        supportDesc: '@Energypremiumhub • ၂၄/၇ ဝန်ဆောင်မှု',
        copy: 'ကူးယူမည်', copied: '✅ ကူးပြီး',
        // Shop page
        pageTitleShop: 'Game Shop', pageSubShop: 'ဂိမ်းတစ်ခုရွေးပြီး ပက်ကေ့ခ်ျများကို ဝယ်ယူလိုက်ပါ',
        gamesTitle: 'ဂိမ်းများ', comingSoon: 'Coming Soon', comingSoonSub: '⏳ အသစ်ထွက်ရှိမည်',
        searchPlaceholder: '🔍 ဂိမ်းနာမည်ရှာပါ...', noGames: '❌ ဂိမ်းမတွေ့ပါ',
        selectGame: 'ရွေးချယ်လိုက်ပါ', comingSoonMsg: '🎮 ဤဂိမ်းကို မကြာမီ ထည့်သွင်းပေးပါမည်။',
        mlbbSub: 'စိန်ဖြည့်မှု', mcggSub: 'စိန်ဖြည့်မှု',
        // MLBB Page Headers
        mlbbGlobalPackages: 'MLBB Global Packages',
        mlbbBanPackages: 'MLBB Ban Packages',
        mlbbIndoPackages: 'MLBB Indo Packages',
        mlbbRussiaPackages: 'MLBB Russia Packages',
        banServerLabel: 'Ban Server: (Malay, Sin, Php)',
        // Profile
        pageTitleProfile: 'ပရိုဖိုင်', pageSubProfile: 'သင့်အကောင့်အချက်အလက်များ',
        orderHistoryLabel: 'အော်ဒါမှတ်တမ်း', settingsLabel: 'အကောင့်ဆက်တင်များ',
        changeNameText: 'နာမည်ပြောင်းရန်', changeUsernameText: 'အသုံးပြုသူအမည်ပြောင်းရန်',
        changeEmailText: 'အီးမေးလ်ပြောင်းရန်', changePhoneText: 'ဖုန်းနံပါတ်ပြောင်းရန်',
        changePasswordText: 'စကားဝှက်ပြောင်းရန်', logoutText: 'ထွက်မည်',
        noOrders: 'အော်ဒါမရှိသေးပါ', showMore: 'အကုန်ကြည့်မည် →', showLess: 'ပြန်ဖျောက်မည်',
        orderStatusPending: 'ဆောင်ရွက်နေဆဲ', orderStatusCompleted: 'ပြီးပြီ', orderStatusCancelled: 'ပယ်ဖျက်ထား',
        // MCGG
        pageTitleMCGG: 'MCGG Packages', pageSubMCGG: 'ပက်ကေ့ချ်တစ်ခုရွေးပြီး ဝယ်ယူပါ',
        bundlesTitle: 'ပက်ကေ့ချ်များ', diamondsTitle: 'စိန်များ', doubleTitle: 'နှစ်ဆဖြည့်မှု',
        buy: 'ဝယ်ယူရန်', selectLabel: 'ရွေးရန်', currency: 'Ks', doubleBadge: '⭐ 2x Bonus',
        modalTitle: '🛒 အော်ဒါတင်ရန်', modalSub: 'အချက်အလက်များကို မှန်ကန်စွာဖြည့်သွင်းပါ',
        gameId: 'ဂိမ်းအိုင်ဒီ', serverId: 'ဆာဗာအိုင်ဒီ',
        gameIdHint: 'နံပါတ်သာ ထည့်ပါ', serverIdHint: 'နံပါတ်သာ ထည့်ပါ',
        paymentLabel: 'ငွေပေးချေရန်',
        uploadLabel: 'ပြေစာတင်ပို့ရန်', uploadText: 'Screenshot ပို့ပေးပါ',
        submit: 'အော်ဒါတင်မည်', submitting: '⏳ အော်ဒါတင်နေသည်...',
        enterGameId: 'ကျေးဇူးပြု၍ ဂိမ်းအိုင်ဒီ နံပါတ်ထည့်ပါ',
        enterServerId: 'ကျေးဇူးပြု၍ ဆာဗာအိုင်ဒီ နံပါတ်ထည့်ပါ',
        enterNumberOnly: 'နံပါတ်သာ ထည့်ပါ (အက္ခရာမထည့်ရ)',
        selectPayment: 'ကျေးဇူးပြု၍ ငွေပေးချေနည်းရွေးပါ',
        uploadSlip: 'ကျေးဇူးပြု၍ Screenshot ပို့ပေးပါ',
        orderSuccess: '✅ အော်ဒါအောင်မြင်ပါသည်!',
        orderFail: '❌ အော်ဒါမအောင်မြင်ပါ။ ထပ်မံကြိုးစားပါ။',
        backToShop: '← ဆိုင်သို့ ပြန်သွားရန်'
    },
    en: {
        appName: 'Premium', appSub: 'Game Shop',
        home: 'Home', shop: 'Shop', payment: 'Payment', profile: 'Profile', noti: 'Payment',
        greeting: 'Hey, Gamer!',
        subtitle: 'Top up diamonds and dominate the battlefield',
        goToShop: '⚡ GO TO SHOP', shopClosed: '🔒 SHOP CLOSED',
        shopSubText: 'Browse all packages',
        servicesTitle: 'Why Choose Us?',
        s1: '10 mins delivery', s2: 'Fast • Easy • Trusted',
        s3: 'Best Price & Best Service', s4: '9:30 AM - 9:30 PM',
        s5: 'Mobile Legends', s6: 'Coming Soon',
        telegramTitle: '📢 Join Our Telegram Channel',
        telegramDesc: 'Get latest updates, promos and support',
        contactLabel: '💬 Need Help?', contactUsername: '@PremEnergy',
        shopOpen: 'OPEN', shopClosedStatus: 'CLOSED',
        shopOpenText: 'Open from 9:30 AM to 9:30 PM (Myanmar Time)',
        shopClosedText: 'Will open at 9:30 AM (Myanmar Time)',
        modalLogin: 'Login', modalRegister: 'Register',
        modalLoginSub: 'Welcome back!', modalRegisterSub: 'Create your account!',
        email: 'Email / Username / Phone', password: 'Password',
        forgotPassword: 'Forgot Password?',
        switchLogin: "Don't have an account? Register",
        switchRegister: 'Already have an account? Login',
        login: 'Login', register: 'Register',
        loginSuccess: '✅ Welcome back!', registerSuccess: '✅ Account created!',
        enterEmail: 'Please enter your email, username or phone',
        enterPassword: 'Please enter your password',
        enterUsername: 'Please enter your username',
        passwordMin: 'Password must be at least 4 characters',
        passwordMatch: 'Passwords do not match',
        userExists: '❌ Username, email or phone already exists',
        invalidCredentials: '❌ Invalid email/username/phone or password',
        settingsNameTitle: '✏️ Change Name', settingsNameSub: 'Enter new name',
        settingsUsernameTitle: '✏️ Change Username', settingsUsernameSub: 'Enter new username',
        settingsEmailTitle: '📧 Change Email', settingsEmailSub: 'Enter new email',
        settingsPhoneTitle: '📱 Change Phone', settingsPhoneSub: 'Enter new phone number',
        settingsPassTitle: '🔑 Change Password', settingsPassSub: 'Enter new password',
        settingsNameLabel: 'New Name', settingsUsernameLabel: 'New Username',
        settingsEmailLabel: 'New Email', settingsPhoneLabel: 'New Phone',
        settingsPassLabel: 'New Password', settingsConfirmLabel: 'Confirm Password',
        settingsSave: '💾 Save', settingsError: 'Please fill in',
        settingsPassError: 'Passwords must match',
        settingsUsernameExists: '❌ Username already exists',
        saveSuccess: '✅ Success!', logoutSuccess: '✅ Logged out!',
        pageTitleNoti: 'Notifications', emptyNoti: 'No notifications yet',
        clearAll: 'Clear All', cleared: '✅ Cleared all',
        paymentTitle: 'Payment', paymentSub: 'Send payment to one of the following accounts',
        accountsTitle: 'Payment Accounts', wave: 'Wave Pay', kpay: 'KBZ Pay',
        howToTitle: 'How to Pay',
        step1: 'Choose <strong>Wave Pay</strong> or <strong>KBZ Pay</strong>',
        step2: 'Copy the <strong>phone number</strong> above',
        step3: 'Send the exact amount and <strong>take a screenshot</strong>',
        step4: 'Go to <strong>Shop</strong> and complete your order',
        supportTitle: 'Support', supportLabel: 'Contact us on Telegram',
        supportDesc: '@Energypremiumhub • 24/7 Support',
        copy: 'Copy', copied: '✅ Copied!',
        pageTitleShop: 'Game Shop', pageSubShop: 'Choose a game and purchase packages',
        gamesTitle: 'Games', comingSoon: 'Coming Soon', comingSoonSub: '⏳ Coming Soon',
        searchPlaceholder: '🔍 Search game name...', noGames: '❌ No games found',
        selectGame: 'Selected', comingSoonMsg: '🎮 This game will be added soon.',
        mlbbSub: 'Diamond Top Up', mcggSub: 'Diamond Top Up',
        mlbbGlobalPackages: 'MLBB Global Packages',
        mlbbBanPackages: 'MLBB Ban Packages',
        mlbbIndoPackages: 'MLBB Indo Packages',
        mlbbRussiaPackages: 'MLBB Russia Packages',
        banServerLabel: 'Ban Server: (Malay, Sin, Php)',
        pageTitleProfile: 'Profile', pageSubProfile: 'Your account information',
        orderHistoryLabel: 'Order History', settingsLabel: 'Account Settings',
        changeNameText: 'Change Name', changeUsernameText: 'Change Username',
        changeEmailText: 'Change Email', changePhoneText: 'Change Phone',
        changePasswordText: 'Change Password', logoutText: 'Logout',
        noOrders: 'No orders yet', showMore: 'Show More →', showLess: 'Show Less',
        orderStatusPending: 'Pending', orderStatusCompleted: 'Completed', orderStatusCancelled: 'Cancelled',
        pageTitleMCGG: 'MCGG Packages', pageSubMCGG: 'Select a package and buy',
        bundlesTitle: 'Packages', diamondsTitle: 'Diamonds', doubleTitle: 'Double Top Up',
        buy: 'Buy', selectLabel: 'Select', currency: 'Ks', doubleBadge: '⭐ 2x Bonus',
        modalTitle: '🛒 Submit Order', modalSub: 'Fill in your details correctly',
        gameId: 'Game ID', serverId: 'Server ID',
        gameIdHint: 'Numbers only', serverIdHint: 'Numbers only',
        paymentLabel: 'Payment Method',
        uploadLabel: 'Upload Payment Slip', uploadText: 'Send Screenshot',
        submit: 'Submit Order', submitting: '⏳ Submitting...',
        enterGameId: 'Please enter your Game ID (numbers only)',
        enterServerId: 'Please enter your Server ID (numbers only)',
        enterNumberOnly: 'Please enter numbers only',
        selectPayment: 'Please select a payment method',
        uploadSlip: 'Please send your Screenshot',
        orderSuccess: '✅ Order successful!',
        orderFail: '❌ Order failed. Please try again.',
        backToShop: '← Back to Shop'
    }
};

let currentLang = localStorage.getItem('lang') || 'my';
let currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

function getText(key) { return LANG_DATA[currentLang] ? LANG_DATA[currentLang][key] : key; }

// ========== TOAST ==========
function showToast(msg, type) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.className = 'toast show';
    if (type === 'success') t.classList.add('success');
    else if (type === 'error') t.classList.add('error');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ========== NIGHT MODE ==========
function toggleNightMode() {
    document.body.classList.toggle('night-mode');
    const icon = document.querySelector('.night-toggle i');
    if (icon) icon.className = document.body.classList.contains('night-mode') ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('nightMode', document.body.classList.contains('night-mode') ? 'true' : 'false');
}

// ========== BADGE ==========
function updateBadge() {
    const notis = JSON.parse(localStorage.getItem('notifications') || '[]');
    const count = notis.filter(n => n.status === 'pending').length;
    const badge = document.getElementById('notiBadge');
    if (badge) {
        badge.style.display = count > 0 ? 'block' : 'none';
        if (count > 0) badge.textContent = count;
    }
}

// ========== COPY ==========
function copyTextValue(v) {
    navigator.clipboard.writeText(v);
    showToast('✅ ကူးယူပြီး', 'success');
}

function copyNumber(number, btn) {
    const d = LANG_DATA[currentLang] || {};
    navigator.clipboard.writeText(number).then(() => {
        btn.textContent = d.copied || '✅ Copied!';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = d.copy || 'Copy'; btn.classList.remove('copied'); }, 2500);
    }).catch(() => {
        const input = document.createElement('input');
        input.value = number;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        btn.textContent = d.copied || '✅ Copied!';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = d.copy || 'Copy'; btn.classList.remove('copied'); }, 2500);
    });
}

// ========== LANGUAGE SWITCHER ==========
function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    updateLanguage();
}

// ========== SHOP STATUS CHECK ==========
function isShopOpen() {
    const now = new Date();
    const myanmarTime = new Date(now.getTime() + (6.5 * 60 * 60 * 1000));
    const hours = myanmarTime.getUTCHours();
    const minutes = myanmarTime.getUTCMinutes();
    const time = hours * 60 + minutes;
    return time >= 570 && time < 1290;
}
/* ============================================
   PREMIUM GAME SHOP - MAIN JAVASCRIPT (PART 2)
   Copy this BELOW Part 1 in js/main.js
   ============================================ */

// ========== UPDATE LANGUAGE (ALL PAGES) ==========
function updateLanguage() {
    const d = LANG_DATA[currentLang];
    if (!d) return;

    // Common text elements
    const textIds = [
        'appName', 'appSub', 'greeting', 'subtitle', 'goToShop', 'shopSubText',
        'servicesTitle', 's1', 's2', 's3', 's4', 's5', 's6',
        'telegramTitle', 'telegramDesc', 'contactLabel',
        'navHome', 'navShop', 'navPayment', 'navProfile', 'navNoti',
        'pageTitle', 'pageSub', 'pageTitleShop', 'pageSubShop',
        'pageTitleProfile', 'pageSubProfile',
        'gamesTitle', 'mlbbSub', 'mcggSub', 'cs1', 'cs2', 'cs1sub', 'cs2sub',
        'paymentTitle', 'paymentSub', 'accountsTitle', 'waveName', 'kpayName',
        'supportTitle', 'supportLabel', 'supportDesc',
        'orderHistoryLabel', 'settingsLabel',
        'changeNameText', 'changeUsernameText', 'changeEmailText',
        'changePhoneText', 'changePasswordText', 'logoutText',
        'bundlesTitle', 'diamondsTitle', 'doubleTitle',
        'clearAllText', 'emptyText', 'pageTitleNotiLabel',
        'pageTitleMCGG', 'pageSubMCGG',
        'modalTitle', 'modalSub', 'gameIdLabel', 'serverIdLabel',
        'gameIdHint', 'serverIdHint', 'paymentLabel',
        'uploadLabel', 'uploadText', 'waveLabel', 'kpayLabel',
        'forgotLink'
    ];
    textIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (['step1', 'step2', 'step3', 'step4'].includes(id)) {
                el.innerHTML = d[id] || '';
            } else {
                el.textContent = d[id] || '';
            }
        }
    });

    // HTML content elements
    const stepIds = ['step1', 'step2', 'step3', 'step4'];
    stepIds.forEach(id => {
        const el = document.getElementById(id);
        if (el && d[id]) el.innerHTML = d[id];
    });

    // Update search placeholder
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = d.searchPlaceholder || '';

    // Update shop status
    const statusBadge = document.getElementById('statusBadge');
    const statusText = document.getElementById('statusText');
    const shopCard = document.getElementById('shopCard');
    const goToShop = document.getElementById('goToShop');
    const shopSubText = document.getElementById('shopSubText');
    const isOpen = isShopOpen();

    if (statusBadge) {
        statusBadge.innerHTML = isOpen
            ? '<span class="status-dot"></span> ' + d.shopOpen
            : '<span class="status-dot"></span> ' + d.shopClosedStatus;
        statusBadge.className = 'banner-status ' + (isOpen ? 'open' : 'closed');
    }
    if (statusText) statusText.textContent = isOpen ? d.shopOpenText : d.shopClosedText;
    if (shopCard) {
        shopCard.className = 'shop-card ' + (isOpen ? 'open' : 'closed');
        if (goToShop) goToShop.textContent = isOpen ? d.goToShop : d.shopClosed;
        if (shopSubText) shopSubText.textContent = isOpen ? d.shopSubText : d.shopClosedText;
    }

    // Update copy buttons
    const copyBtn1 = document.getElementById('copyBtn1');
    const copyBtn2 = document.getElementById('copyBtn2');
    if (copyBtn1) copyBtn1.textContent = d.copy || 'Copy';
    if (copyBtn2) copyBtn2.textContent = d.copy || 'Copy';

    // Update submit button
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn && !submitBtn.disabled) submitBtn.textContent = '✅ ' + (d.submit || 'Submit');
    else if (submitBtn) submitBtn.textContent = '✅ ' + (d.submit || 'Submit');

    // Update MLBB page header based on server
    updateMLBBHeader();

    // Update how-to title
    const howToTitle = document.getElementById('howToTitle');
    if (howToTitle) howToTitle.textContent = d.howToTitle || 'How to Pay';

    // Update back button
    const backBtn = document.getElementById('backBtn');
    if (backBtn) backBtn.textContent = d.backToShop || '← Back to Shop';

    // Update forgot password link
    const forgotLink = document.getElementById('forgotLink');
    if (forgotLink) forgotLink.textContent = d.forgotPassword || 'Forgot Password?';

    updateAuthUI();
    if (typeof renderOrders === 'function') renderOrders();
    if (typeof loadNotifications === 'function') loadNotifications();
    if (typeof renderPackages === 'function') renderPackages();
    updateBadge();
}

// ========== UPDATE MLBB HEADER ==========
function updateMLBBHeader() {
    const pageTitle = document.getElementById('pageTitle');
    const banOpt = document.querySelector('.server-selector .opt[data-server="ban"]');
    if (!pageTitle) return;

    const d = LANG_DATA[currentLang];
    const headerMap = {
        'global': d.mlbbGlobalPackages || 'MLBB Global Packages',
        'ban': d.mlbbBanPackages || 'MLBB Ban Packages',
        'indo': d.mlbbIndoPackages || 'MLBB Indo Packages',
        'russia': d.mlbbRussiaPackages || 'MLBB Russia Packages'
    };
    if (headerMap[currentServer]) {
        pageTitle.textContent = headerMap[currentServer];
    }

    // Update Ban server label
    if (banOpt && currentServer === 'ban') {
        banOpt.textContent = '🇲🇾🇸🇬🇵🇭 ' + (d.banServerLabel || 'Ban Server: (Malay, Sin, Php)');
    } else if (banOpt) {
        banOpt.textContent = '🇲🇾🇸🇬🇵🇭 Ban';
    }
}

// ========== AUTH UI UPDATE ==========
function updateAuthUI() {
    const authBtn = document.getElementById('authBtn');
    if (!authBtn) return;

    if (currentUser) {
        const firstChar = (currentUser.displayName || currentUser.username || 'U').charAt(0).toUpperCase();
        const avatarImg = localStorage.getItem('userAvatar_' + currentUser.username);
        if (avatarImg) {
            authBtn.innerHTML = '<img src="' + avatarImg + '" alt="avatar"> ' + (currentUser.displayName || currentUser.username);
        } else {
            authBtn.innerHTML = '<span class="avatar-small">' + firstChar + '</span> ' + (currentUser.displayName || currentUser.username);
        }
        authBtn.className = (authBtn.classList.contains('auth-btn-profile') ? 'auth-btn-profile' : 'auth-btn') + ' logged-in';
    } else {
        authBtn.innerHTML = '<i class="fas fa-key"></i> Login';
        authBtn.className = authBtn.classList.contains('auth-btn-profile') ? 'auth-btn-profile' : 'auth-btn';
    }

    // Update profile section
    const displayName = document.getElementById('displayName');
    const displayUsername = document.getElementById('displayUsername');
    const displayEmail = document.getElementById('displayEmail');
    const displayPhone = document.getElementById('displayPhone');
    const avatarDisplay = document.getElementById('avatarDisplay');

    if (displayName) displayName.textContent = currentUser ? (currentUser.displayName || currentUser.username) : 'Guest';
    if (displayUsername) displayUsername.innerHTML = '<i class="fas fa-user"></i> @' + (currentUser ? currentUser.username : 'guest');
    if (displayEmail) displayEmail.innerHTML = '<i class="fas fa-envelope"></i> ' + (currentUser ? (currentUser.email || 'No email') : 'No email');
    if (displayPhone) displayPhone.innerHTML = '<i class="fas fa-phone"></i> ' + (currentUser ? (currentUser.phone || 'No phone') : 'No phone');
    if (avatarDisplay && currentUser) {
        const avatar = localStorage.getItem('userAvatar_' + currentUser.username);
        if (avatar) {
            avatarDisplay.innerHTML = '<img src="' + avatar + '" alt="avatar" style="width:100%;height:100%;object-fit:cover;">';
        } else {
            avatarDisplay.textContent = '👤';
        }
    } else if (avatarDisplay) {
        avatarDisplay.textContent = '👤';
    }
}

// ========== AUTH MODAL FUNCTIONS ==========
function openAuthModal(mode) {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    modal.classList.add('show');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const error = document.getElementById('loginError');
    const success = document.getElementById('loginSuccess');
    const authError = document.getElementById('authError');

    if (mode === 'register') {
        if (loginForm) loginForm.style.display = 'none';
        if (registerForm) registerForm.style.display = 'block';
    } else {
        if (loginForm) loginForm.style.display = 'block';
        if (registerForm) registerForm.style.display = 'none';
    }
    if (error) { error.classList.remove('show'); error.textContent = ''; }
    if (success) { success.classList.remove('show'); success.textContent = ''; }
    if (authError) { authError.style.display = 'none'; authError.textContent = ''; }
    updateAuthModalTexts();
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    modal.classList.remove('show');
    const inputs = ['loginInput', 'loginPassword', 'regUsername', 'regEmail', 'regPhone', 'regPassword', 'regConfirmPassword',
        'authLoginInput', 'authLoginPassword', 'authRegUsername', 'authRegEmail', 'authRegPhone', 'authRegPassword', 'authRegConfirmPassword'];
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    const loginBtn = document.getElementById('loginBtn') || document.getElementById('authLoginBtn');
    if (loginBtn) { loginBtn.disabled = true; loginBtn.className = 'btn-primary'; }
    const registerBtn = document.getElementById('registerBtn') || document.getElementById('authRegisterBtn');
    if (registerBtn) { registerBtn.disabled = true; registerBtn.className = 'btn-primary'; }
}

function updateAuthModalTexts() {
    const d = LANG_DATA[currentLang];
    const isLogin = document.getElementById('registerForm') ? document.getElementById('registerForm').style.display === 'none' : true;

    const modalTitle = document.getElementById('modalTitle') || document.getElementById('authModalTitle');
    const modalSubEl = document.getElementById('modalSub') || document.getElementById('authModalSub');
    if (modalTitle) modalTitle.textContent = isLogin ? d.modalLogin : d.modalRegister;
    if (modalSubEl) modalSubEl.textContent = isLogin ? d.modalLoginSub : d.modalRegisterSub;

    const emailLabel = document.getElementById('emailLabel') || document.getElementById('authEmailLabel');
    const passLabel = document.getElementById('passLabel') || document.getElementById('authPassLabel');
    if (emailLabel) emailLabel.textContent = d.email;
    if (passLabel) passLabel.textContent = d.password;

    const loginBtn = document.getElementById('loginBtn') || document.getElementById('authLoginBtn');
    const registerBtn = document.getElementById('registerBtn') || document.getElementById('authRegisterBtn');
    if (loginBtn) loginBtn.textContent = d.login;
    if (registerBtn) registerBtn.textContent = d.register;

    const switchToReg = document.getElementById('switchToRegister') || document.getElementById('authSwitchToRegister');
    const switchToLog = document.getElementById('switchToLogin') || document.getElementById('authSwitchToLogin');
    if (switchToReg) switchToReg.textContent = d.switchLogin;
    if (switchToLog) switchToLog.textContent = d.switchRegister;

    const forgotLink = document.getElementById('forgotLink');
    if (forgotLink) forgotLink.textContent = d.forgotPassword || 'Forgot Password?';
}

// ========== AUTH LOGIN FORM CHECK ==========
function checkLoginForm() {
    const loginInput = document.getElementById('loginInput') || document.getElementById('authLoginInput');
    const loginPassword = document.getElementById('loginPassword') || document.getElementById('authLoginPassword');
    const loginBtn = document.getElementById('loginBtn') || document.getElementById('authLoginBtn');
    if (!loginInput || !loginPassword || !loginBtn) return;
    const input = loginInput.value.trim();
    const pass = loginPassword.value.trim();
    if (input && pass) {
        loginBtn.disabled = false;
        loginBtn.className = 'btn-primary enabled';
    } else {
        loginBtn.disabled = true;
        loginBtn.className = 'btn-primary';
    }
}

// ========== AUTH REGISTER FORM CHECK ==========
function checkRegisterForm() {
    const regUsername = document.getElementById('regUsername') || document.getElementById('authRegUsername');
    const regPassword = document.getElementById('regPassword') || document.getElementById('authRegPassword');
    const regConfirm = document.getElementById('regConfirmPassword') || document.getElementById('authRegConfirmPassword');
    const registerBtn = document.getElementById('registerBtn') || document.getElementById('authRegisterBtn');
    if (!regUsername || !regPassword || !regConfirm || !registerBtn) return;
    const username = regUsername.value.trim();
    const pass = regPassword.value.trim();
    const confirm = regConfirm.value.trim();
    if (username && pass && confirm && pass === confirm) {
        registerBtn.disabled = false;
        registerBtn.className = 'btn-primary enabled';
    } else {
        registerBtn.disabled = true;
        registerBtn.className = 'btn-primary';
    }
}

// ========== AUTH LOGIN ==========
function handleAuthLogin() {
    const loginInput = document.getElementById('loginInput') || document.getElementById('authLoginInput');
    const loginPassword = document.getElementById('loginPassword') || document.getElementById('authLoginPassword');
    const error = document.getElementById('loginError') || document.getElementById('authError');
    const d = LANG_DATA[currentLang];

    if (!loginInput || !loginPassword) return;
    const input = loginInput.value.trim();
    const password = loginPassword.value.trim();
    if (error) { error.style.display = 'none'; error.textContent = ''; error.classList.remove('show'); }

    if (!input || !password) {
        if (error) { error.textContent = d.enterEmail || 'Please enter all fields'; error.style.display = 'block'; error.classList.add('show'); }
        return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '{}');
    let found = null;
    for (const key in users) {
        const user = users[key];
        if (key === input || user.email === input || user.username === input || user.phone === input) {
            if (user.password === password) { found = user; break; }
        }
    }

    if (found) {
        currentUser = found;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        closeAuthModal();
        showToast(d.loginSuccess || '✅ Welcome back!', 'success');
        updateAuthUI();
        updateBadge();
        if (typeof renderOrders === 'function') renderOrders();
    } else {
        if (error) { error.textContent = d.invalidCredentials || '❌ Invalid credentials'; error.style.display = 'block'; error.classList.add('show'); }
    }
}

// ========== AUTH REGISTER ==========
function handleAuthRegister() {
    const regUsername = document.getElementById('regUsername') || document.getElementById('authRegUsername');
    const regEmail = document.getElementById('regEmail') || document.getElementById('authRegEmail');
    const regPhone = document.getElementById('regPhone') || document.getElementById('authRegPhone');
    const regPassword = document.getElementById('regPassword') || document.getElementById('authRegPassword');
    const regConfirm = document.getElementById('regConfirmPassword') || document.getElementById('authRegConfirmPassword');
    const error = document.getElementById('loginError') || document.getElementById('authError');
    const d = LANG_DATA[currentLang];

    if (!regUsername || !regPassword || !regConfirm) return;
    const username = regUsername.value.trim();
    const email = regEmail ? regEmail.value.trim() : '';
    const phone = regPhone ? regPhone.value.trim() : '';
    const password = regPassword.value.trim();
    const confirm = regConfirm.value.trim();
    if (error) { error.style.display = 'none'; error.textContent = ''; error.classList.remove('show'); }

    if (!username || !password || !confirm) {
        if (error) { error.textContent = 'Please fill all required fields'; error.style.display = 'block'; error.classList.add('show'); }
        return;
    }
    if (password.length < 4) {
        if (error) { error.textContent = d.passwordMin || 'Password must be at least 4 characters'; error.style.display = 'block'; error.classList.add('show'); }
        return;
    }
    if (password !== confirm) {
        if (error) { error.textContent = d.passwordMatch || 'Passwords do not match'; error.style.display = 'block'; error.classList.add('show'); }
        return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '{}');
    for (const key in users) {
        if (key === username || (email && users[key].email === email) || (phone && users[key].phone === phone)) {
            if (error) { error.textContent = d.userExists || '❌ Username, email or phone already exists'; error.style.display = 'block'; error.classList.add('show'); }
            return;
        }
    }

    const newUser = {
        username, email, phone, password,
        displayName: username, diamonds: 100,
        createdAt: new Date().toISOString()
    };
    users[username] = newUser;
    localStorage.setItem('users', JSON.stringify(users));

    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    closeAuthModal();
    showToast(d.registerSuccess || '✅ Account created!', 'success');
    updateAuthUI();
    updateBadge();
    if (typeof renderOrders === 'function') renderOrders();
}

// ========== SETTINGS MODAL ==========
let settingsModalMode = '';

function openSettingsModal(mode) {
    if (!currentUser) { showToast('❌ Please login first', 'error'); return; }
    settingsModalMode = mode;
    const modal = document.getElementById('settingsModal');
    if (!modal) return;
    modal.classList.add('show');

    const d = LANG_DATA[currentLang];
    const title = document.getElementById('settingsModalTitle');
    const sub = document.getElementById('settingsModalSub');
    const label = document.getElementById('settingsFieldLabel');
    const input = document.getElementById('settingsInput');
    const confirmGroup = document.getElementById('settingsConfirmGroup');
    const confirmInput = document.getElementById('settingsConfirmInput');
    const error = document.getElementById('settingsError');
    const saveBtn = document.getElementById('settingsSaveBtn');

    if (error) error.style.display = 'none';
    if (input) input.value = '';
    if (confirmInput) confirmInput.value = '';

    const modeMap = {
        name: { title: d.settingsNameTitle, sub: d.settingsNameSub, label: d.settingsNameLabel, type: 'text', placeholder: 'New name', confirm: false },
        username: { title: d.settingsUsernameTitle, sub: d.settingsUsernameSub, label: d.settingsUsernameLabel, type: 'text', placeholder: 'New username', confirm: false },
        email: { title: d.settingsEmailTitle, sub: d.settingsEmailSub, label: d.settingsEmailLabel, type: 'email', placeholder: 'example@email.com', confirm: false },
        phone: { title: d.settingsPhoneTitle, sub: d.settingsPhoneSub, label: d.settingsPhoneLabel, type: 'tel', placeholder: '09xxxxxxxxx', confirm: false },
        password: { title: d.settingsPassTitle, sub: d.settingsPassSub, label: d.settingsPassLabel, type: 'password', placeholder: 'Min 4 characters', confirm: true }
    };

    const config = modeMap[mode];
    if (config) {
        if (title) title.textContent = config.title;
        if (sub) sub.textContent = config.sub;
        if (label) label.textContent = config.label;
        if (input) { input.type = config.type; input.placeholder = config.placeholder; }
        if (confirmGroup) confirmGroup.style.display = config.confirm ? 'block' : 'none';
        if (confirmInput && config.confirm) { confirmInput.type = 'password'; confirmInput.placeholder = 'Re-enter password'; }
    }
    if (saveBtn) saveBtn.textContent = d.settingsSave;
}

function closeSettingsModal() {
    const modal = document.getElementById('settingsModal');
    if (!modal) return;
    modal.classList.remove('show');
}

function saveSettings() {
    const input = document.getElementById('settingsInput');
    const error = document.getElementById('settingsError');
    const d = LANG_DATA[currentLang];
    if (!input) return;

    const value = input.value.trim();
    if (error) error.style.display = 'none';

    if (!value) {
        if (error) { error.textContent = d.settingsError; error.style.display = 'block'; }
        return;
    }

    if (settingsModalMode === 'password') {
        const confirmInput = document.getElementById('settingsConfirmInput');
        if (confirmInput && value !== confirmInput.value.trim()) {
            if (error) { error.textContent = d.settingsPassError; error.style.display = 'block'; }
            return;
        }
        if (value.length < 4) {
            if (error) { error.textContent = 'Password must be at least 4 characters'; error.style.display = 'block'; }
            return;
        }
    }

    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const userData = users[currentUser.username];
    if (!userData) { showToast('❌ User not found', 'error'); return; }

    if (settingsModalMode === 'name') {
        userData.displayName = value;
        currentUser.displayName = value;
    } else if (settingsModalMode === 'username') {
        if (value !== currentUser.username && users[value]) {
            if (error) { error.textContent = d.settingsUsernameExists; error.style.display = 'block'; }
            return;
        }
        users[value] = userData;
        delete users[currentUser.username];
        currentUser.username = value;
    } else if (settingsModalMode === 'email') {
        userData.email = value;
        currentUser.email = value;
    } else if (settingsModalMode === 'phone') {
        userData.phone = value;
        currentUser.phone = value;
    } else if (settingsModalMode === 'password') {
        userData.password = value;
    }

    if (settingsModalMode !== 'username') {
        users[currentUser.username] = userData;
    }
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    closeSettingsModal();
    updateAuthUI();
    showToast(d.saveSuccess, 'success');
}

// ========== LOGOUT ==========
function logout() {
    if (!currentUser) { showToast('❌ No user logged in', 'error'); return; }
    const overlay = document.getElementById('logoutOverlay');
    if (overlay) overlay.classList.add('show');
}
/* ============================================
   PREMIUM GAME SHOP - MAIN JAVASCRIPT (PART 3)
   Copy this BELOW Part 2 in js/main.js
   ============================================ */

// ========== SHOP PAGE - GAME SELECTION ==========
function searchGames(q) {
    const query = q.toLowerCase().trim();
    const items = document.querySelectorAll('.game-item');
    const clearBtn = document.getElementById('clearBtn');
    let found = false;
    items.forEach(item => {
        const name = item.dataset.name || '';
        if (name.includes(query) || query === '') { item.classList.remove('hidden'); found = true; }
        else item.classList.add('hidden');
    });
    if (clearBtn) {
        if (query.length > 0) clearBtn.classList.add('show');
        else clearBtn.classList.remove('show');
    }
    let noMsg = document.getElementById('noGamesMsg');
    if (!found && query.length > 0) {
        if (!noMsg) {
            noMsg = document.createElement('div');
            noMsg.id = 'noGamesMsg';
            noMsg.style.cssText = 'text-align:center;padding:40px 0;color:var(--text-secondary);font-size:0.85rem;grid-column:1/-1';
            const grid = document.getElementById('gameGrid');
            if (grid) grid.appendChild(noMsg);
        }
        noMsg.textContent = getText('noGames');
        noMsg.style.display = 'block';
    } else if (noMsg) noMsg.style.display = 'none';
}

function clearSearch() {
    const input = document.getElementById('searchInput');
    if (input) { input.value = ''; searchGames(''); }
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) clearBtn.classList.remove('show');
    if (input) input.focus();
}

function selectGame(gameName, gameId, event) {
    const item = event.currentTarget;
    item.classList.remove('bounce-click');
    void item.offsetWidth;
    item.classList.add('bounce-click');
    showToast('🎮 ' + gameName + ' ' + getText('selectGame') + '!', 'success');
    localStorage.setItem('selectedGame', JSON.stringify({ name: gameName, id: gameId }));
    if (gameId === 'mlbb') setTimeout(() => { window.location.href = 'mlbb-packages.html'; }, 500);
    else if (gameId === 'mcgg') setTimeout(() => { window.location.href = 'mcgg-packages.html'; }, 500);
}

function showComingSoon() {
    showToast(getText('comingSoonMsg'));
}

// ========== MLBB PACKAGES ==========
const PACKAGES = {
    global: {
        bundles: [
            { id: 'g_b1', name: 'Monthly Epic Bundle', price: 17300, img: 'https://files.catbox.moe/z2j5uo.png', twoLine: true, line1: 'Monthly Epic', line2: 'Bundle' },
            { id: 'g_b2', name: 'Weekly Elite Bundle', price: 3600, img: 'https://files.catbox.moe/i3uywg.png', twoLine: true, line1: 'Weekly Elite', line2: 'Bundle' },
            { id: 'g_b3', name: 'Weekly Pass', price: 6500, img: 'https://files.catbox.moe/zylral.png', twoLine: true, line1: 'Weekly', line2: 'Pass' },
            { id: 'g_b4', name: 'Twilight Pass', price: 34000, img: 'https://files.catbox.moe/jshuuy.png' }
        ],
        double: [
            { id: 'g_x1', name: '50+50', price: 3550, img: 'https://files.catbox.moe/z376wd.png' },
            { id: 'g_x2', name: '150+150', price: 9900, img: 'https://files.catbox.moe/kf0960.png' },
            { id: 'g_x3', name: '250+250', price: 15800, img: 'https://files.catbox.moe/jm3ty7.png' },
            { id: 'g_x4', name: '500+500', price: 32100, img: 'https://files.catbox.moe/aprnoc.png' }
        ],
        diamonds: [
            { id: 'g_d1', name: '11', price: 750, img: 'https://files.catbox.moe/xaxejk.png' },
            { id: 'g_d5', name: '56', price: 3800, img: 'https://files.catbox.moe/4mb7sd.png' },
            { id: 'g_d11', name: '514', price: 29600, img: 'https://files.catbox.moe/k23p6t.png' }
        ]
    },
    ban: {
        bundles: [{ id: 'b_b1', name: 'Weekly Pass', price: 9400, img: 'https://files.catbox.moe/zylral.png', twoLine: true, line1: 'Weekly', line2: 'Pass' }],
        double: [{ id: 'b_x1', name: '55', price: 4500, img: 'https://files.catbox.moe/z376wd.png' }],
        diamonds: [{ id: 'b_d1', name: '14', price: 1300, img: 'https://files.catbox.moe/xaxejk.png' }]
    },
    indo: {
        bundles: [{ id: 'i_b1', name: 'Weekly Pass', price: 8700, img: 'https://files.catbox.moe/zylral.png', twoLine: true, line1: 'Weekly', line2: 'Pass' }],
        diamonds: [{ id: 'i_d1', name: '5', price: 700, img: 'https://files.catbox.moe/xaxejk.png' }]
    },
    russia: {
        bundles: [{ id: 'r_b1', name: 'Weekly Pass', price: 9750, img: 'https://files.catbox.moe/zylral.png', twoLine: true, line1: 'Weekly', line2: 'Pass' }],
        diamonds: [{ id: 'r_d1', name: '35', price: 3100, img: 'https://files.catbox.moe/xaxejk.png' }]
    }
};

const SERVER_NAMES = { global: 'Global', indo: 'Indo', russia: 'Russia', ban: 'Ban' };
const SERVER_EMOJIS = { global: '🌍', indo: '🇮🇩', russia: '🇷🇺', ban: '🇲🇾🇸🇬🇵🇭' };

let currentServer = 'global';
let selectedPackage = null;
let selectedPayment = null;
let isSubmitting = false;
let lastUpdateId = 0;

function renderItems(items, containerId, isDouble) {
    const container = document.getElementById(containerId);
    if (!container || !items) return;
    const sn = SERVER_NAMES[currentServer];
    container.innerHTML = items.map(pkg => {
        const sel = selectedPackage && selectedPackage.id === pkg.id;
        const nh = pkg.twoLine ? `<span class="line1">${pkg.line1}</span><span class="line2">${pkg.line2}</span>` : `<span class="line1">${pkg.name}</span>`;
        return `<div class="package-item ${sel ? 'selected' : ''} ${isDouble ? 'double-item' : ''}" onclick="selectMLBBPackage('${pkg.id}','${pkg.name}',${pkg.price})">
            <img src="${pkg.img}" class="pkg-img" onerror="this.style.display='none'">
            <div class="info"><div class="name">${nh}</div></div>
            <div class="price-text">${pkg.price.toLocaleString()} Ks</div>
            <div class="server-name">
                <span class="btn-label">${SERVER_EMOJIS[currentServer]} ${sn}</span>
                <button class="buy-btn" onclick="event.stopPropagation();buyMLBBPackage('${pkg.id}','${pkg.name}',${pkg.price})">Top Up</button>
            </div>
        </div>`;
    }).join('');
}

function renderAllPackages() {
    Object.keys(PACKAGES).forEach(s => {
        if (PACKAGES[s].bundles) renderItems(PACKAGES[s].bundles, s + 'Bundles');
        if (PACKAGES[s].double) renderItems(PACKAGES[s].double, s + 'Double', true);
        if (PACKAGES[s].diamonds) renderItems(PACKAGES[s].diamonds, s + 'Diamonds');
    });
}

function selectMLBBPackage(id, name, price) {
    selectedPackage = selectedPackage && selectedPackage.id === id ? null : { id, name, price };
    renderAllPackages();
}

function buyMLBBPackage(id, name, price) {
    if (!selectedPackage || selectedPackage.id !== id) selectedPackage = { id, name, price };
    renderAllPackages();
    openCheckout(name, price);
}

function switchServer(s) {
    currentServer = s;
    document.querySelectorAll('.server-selector .opt').forEach(o => o.classList.toggle('active', o.dataset.server === s));
    const sections = ['globalSection', 'banSection', 'indoSektion', 'russiaSection'];
    sections.forEach(sec => {
        const el = document.getElementById(sec);
        if (el) el.style.display = 'none';
    });
    const activeMap = { global: 'globalSection', ban: 'banSection', indo: 'indoSektion', russia: 'russiaSection' };
    const activeEl = document.getElementById(activeMap[s]);
    if (activeEl) activeEl.style.display = 'block';
    selectedPackage = null;
    updateMLBBHeader();
    renderAllPackages();
}

function searchItems(q) {
    document.querySelectorAll('.package-item').forEach(item => {
        const n = item.querySelector('.name')?.textContent?.toLowerCase() || '';
        item.classList.toggle('hidden', !n.includes(q.toLowerCase()) && q !== '');
    });
}

// ========== MCGG PACKAGES ==========
const MCGG_PACKAGES = {
    bundles: [
        { id: 'b1', name: 'MCGG Weekly Pass', price: 7400, img: 'https://files.catbox.moe/zylral.png', sub: '💎 Weekly Pass' }
    ],
    diamonds: [
        { id: 'd1', name: '11', price: 1000, img: 'https://files.catbox.moe/xaxejk.png' },
        { id: 'd2', name: '22', price: 1900, img: 'https://files.catbox.moe/xaxejk.png' },
        { id: 'd3', name: '56', price: 3900, img: 'https://files.catbox.moe/4mb7sd.png' },
        { id: 'd4', name: '86', price: 6000, img: 'https://files.catbox.moe/4mb7sd.png' },
        { id: 'd5', name: '172', price: 11100, img: 'https://files.catbox.moe/ogchrl.png' },
        { id: 'd6', name: '257', price: 16800, img: 'https://files.catbox.moe/ogchrl.png' },
        { id: 'd7', name: '344', price: 23000, img: 'https://files.catbox.moe/ocznqy.png' },
        { id: 'd8', name: '516', price: 33100, img: 'https://files.catbox.moe/k23p6t.png' },
        { id: 'd9', name: '706', price: 44000, img: 'https://files.catbox.moe/qwnqog.png' },
        { id: 'd10', name: '1346', price: 79500, img: 'https://files.catbox.moe/zjcnar.png' },
        { id: 'd11', name: '1825', price: 107500, img: 'https://files.catbox.moe/co1w7w.png' },
        { id: 'd12', name: '2195', price: 128500, img: 'https://files.catbox.moe/b5bg2m.png' },
        { id: 'd13', name: '3688', price: 200400, img: 'https://files.catbox.moe/z0c6rj.png' },
        { id: 'd14', name: '5532', price: 312600, img: 'https://files.catbox.moe/pn69zi.png' },
        { id: 'd15', name: '9288', price: 510600, img: 'https://files.catbox.moe/pn69zi.png' }
    ],
    double: [
        { id: 'x1', name: '50+50 (55)', price: 3800, img: 'https://files.catbox.moe/z376wd.png', badge: true },
        { id: 'x2', name: '150+150 (165)', price: 11200, img: 'https://files.catbox.moe/kf0960.png', badge: true },
        { id: 'x3', name: '250+250 (275)', price: 18800, img: 'https://files.catbox.moe/jm3ty7.png', badge: true },
        { id: 'x4', name: '500+500 (565)', price: 35000, img: 'https://files.catbox.moe/aprnoc.png', badge: true }
    ]
};

let selectedMCGGPackage = null;
let selectedMCGGPayment = null;
let isMCGGSubmitting = false;

function renderPackages() {
    const d = LANG_DATA[currentLang];
    const renderItems = (items, type) => items.map(pkg => {
        const isSelected = selectedMCGGPackage && selectedMCGGPackage.id === pkg.id;
        const badgeHtml = pkg.badge ? `<span class="badge">${d.doubleBadge}</span>` : '';
        const subHtml = pkg.sub ? `<div class="sub">${pkg.sub}</div>` : '<div class="sub">MCGG</div>';
        return `
            <div class="package-item ${isSelected ? 'selected' : ''}" onclick="handleMCGGPackageClick('${pkg.id}','${pkg.name}',${pkg.price})">
                <div class="info">
                    <img src="${pkg.img}" alt="${pkg.name}" class="pkg-img" onerror="this.style.display='none'">
                    <div class="name">${pkg.name}</div>
                    ${subHtml}
                    ${badgeHtml}
                </div>
                <div class="right">
                    <span class="price">${pkg.price.toLocaleString()} ${d.currency}</span>
                    <span class="btn-label">${d.selectLabel}</span>
                    <button class="buy-btn" onclick="event.stopPropagation(); handleMCGGBuyClick('${pkg.id}','${pkg.name}',${pkg.price})">${d.buy}</button>
                </div>
            </div>
        `;
    }).join('');
    const bundlesList = document.getElementById('bundlesList');
    const diamondsList = document.getElementById('diamondsList');
    const doubleList = document.getElementById('doubleList');
    if (bundlesList) bundlesList.innerHTML = renderItems(MCGG_PACKAGES.bundles, 'bundle');
    if (diamondsList) diamondsList.innerHTML = renderItems(MCGG_PACKAGES.diamonds, 'diamond');
    if (doubleList) doubleList.innerHTML = renderItems(MCGG_PACKAGES.double, 'double');
}

function handleMCGGPackageClick(id, name, price) {
    selectedMCGGPackage = selectedMCGGPackage && selectedMCGGPackage.id === id ? null : { id, name, price };
    renderPackages();
}

function handleMCGGBuyClick(id, name, price) {
    if (!selectedMCGGPackage || selectedMCGGPackage.id !== id) {
        selectedMCGGPackage = { id, name, price };
        renderPackages();
    }
    openMCGGCheckoutModal(name, price);
}

function openMCGGCheckoutModal(name, price) {
    const modal = document.getElementById('checkoutModal');
    if (!modal) return;
    document.getElementById('modalPackage').textContent = name;
    document.getElementById('modalPrice').textContent = price.toLocaleString() + ' ' + getText('currency');
    modal.classList.add('show');
    document.getElementById('gameId').value = '';
    document.getElementById('serverId').value = '';
    const fileInput = document.getElementById('fileInput');
    if (fileInput) fileInput.value = '';
    const fileUpload = document.getElementById('fileUpload');
    if (fileUpload) fileUpload.classList.remove('has-file');
    const fileName = document.getElementById('fileName');
    if (fileName) { fileName.classList.remove('show'); fileName.textContent = ''; }
    document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
    document.getElementById('waveInfo').classList.remove('show');
    document.getElementById('kpayInfo').classList.remove('show');
    selectedMCGGPayment = null;
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.className = 'btn-primary'; submitBtn.textContent = '✅ ' + getText('submit'); }
}

function closeCheckoutModal() {
    if (isMCGGSubmitting) return;
    const modal = document.getElementById('checkoutModal');
    if (modal) modal.classList.remove('show');
}

// ========== CHECKOUT (MLBB) ==========
function openCheckout(name, price) {
    const modal = document.getElementById('checkoutModal');
    if (!modal) return;
    document.getElementById('modalPackage').textContent = name;
    document.getElementById('modalPrice').textContent = price.toLocaleString() + ' Ks';
    modal.classList.add('show');
    document.getElementById('gameId').value = '';
    document.getElementById('serverId').value = '';
    const msgEl = document.getElementById('orderMessage');
    if (msgEl) msgEl.value = '';
    const fileInput = document.getElementById('fileInput');
    if (fileInput) fileInput.value = '';
    const fileUploadBox = document.getElementById('fileUploadBox');
    if (fileUploadBox) fileUploadBox.classList.remove('has-file');
    document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
    document.getElementById('waveInfo').classList.remove('show');
    document.getElementById('kpayInfo').classList.remove('show');
    selectedPayment = null;
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.className = 'btn-primary'; }
}

function closeCheckout() {
    if (isSubmitting) return;
    const modal = document.getElementById('checkoutModal');
    if (modal) modal.classList.remove('show');
}

function selectPayment(type) {
    selectedPayment = type;
    selectedMCGGPayment = type;
    document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
    const selectedEl = document.querySelector(`[data-payment="${type}"]`);
    if (selectedEl) selectedEl.classList.add('selected');
    document.getElementById('waveInfo').classList.toggle('show', type === 'wave');
    document.getElementById('kpayInfo').classList.toggle('show', type === 'kpay');
    checkForm();
}

function handleFileSelect() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput && fileInput.files[0]) {
        const fileUploadBox = document.getElementById('fileUploadBox');
        const fileUpload = document.getElementById('fileUpload');
        const fileName = document.getElementById('fileName');
        if (fileUploadBox) fileUploadBox.classList.add('has-file');
        if (fileUpload) fileUpload.classList.add('has-file');
        if (fileName) { fileName.textContent = '✅ ' + fileInput.files[0].name; fileName.classList.add('show'); }
    }
    checkForm();
}

function checkForm() {
    const gameId = document.getElementById('gameId');
    const serverId = document.getElementById('serverId');
    const fileInput = document.getElementById('fileInput');
    const submitBtn = document.getElementById('submitBtn');
    if (!gameId || !serverId || !fileInput || !submitBtn) return;
    const g = gameId.value.trim();
    const s = serverId.value.trim();
    const f = fileInput.files[0];
    const payment = selectedPayment || selectedMCGGPayment;
    const isDisabled = isSubmitting || isMCGGSubmitting;
    if (g && s && payment && f && !isDisabled) {
        submitBtn.disabled = false;
        submitBtn.className = 'btn-primary enabled';
    } else {
        submitBtn.disabled = true;
        submitBtn.className = 'btn-primary';
    }
}

// ========== SUBMIT ORDER ==========
async function submitOrder() {
    if (isSubmitting || isMCGGSubmitting) return;
    const gameId = document.getElementById('gameId');
    const serverId = document.getElementById('serverId');
    const fileInput = document.getElementById('fileInput');
    const submitBtn = document.getElementById('submitBtn');
    const msgEl = document.getElementById('orderMessage');
    if (!gameId || !serverId || !fileInput || !submitBtn) return;

    const gid = gameId.value.trim();
    const sid = serverId.value.trim();
    const msg = msgEl ? msgEl.value.trim() : '';
    const file = fileInput.files[0];
    const payment = selectedPayment || selectedMCGGPayment;
    if (!gid || !sid || !payment || !file) return;

    const isMCGG = window.location.href.includes('mcgg');
    if (isMCGG) isMCGGSubmitting = true;
    else isSubmitting = true;

    submitBtn.disabled = true;
    submitBtn.className = 'btn-primary loading';
    submitBtn.textContent = getText('submitting');

    const oid = 'ORD-' + Date.now().toString().slice(-6);
    const pkg = document.getElementById('modalPackage').textContent;
    const price = document.getElementById('modalPrice').textContent;
    const server = isMCGG ? 'Global' : SERVER_EMOJIS[currentServer] + ' ' + SERVER_NAMES[currentServer];
    const pname = payment === 'wave' ? 'Wave Pay' : 'KBZ Pay';
    const un = currentUser ? currentUser.username : 'Guest';
    const time = new Date().toLocaleString();

    let pb = null;
    try {
        pb = await new Promise(r => {
            const rd = new FileReader();
            rd.onload = e => r(e.target.result);
            rd.readAsDataURL(file);
        });
    } catch (e) {}

    const caption = `🛒 New Order!\n━━━━━━━━━━━━━━━━━\n👤 User: ${un}\n🎮 ${isMCGG ? 'Magic Chess: Go Go' : 'Mobile Legends: Bang Bang'}\n🌐 ${server}\n📦 ${pkg}\n💰 ${price}\n━━━━━━━━━━━━━━━━━\n🆔 ${gid}\n🔢 ${sid}\n━━━━━━━━━━━━━━━━━\n📋 ${oid}\n🕐 ${time}\n━━━━━━━━━━━━━━━━━\n📝 ${msg || 'N/A'}\n━━━━━━━━━━━━━━━━━`;

    try {
        const blb = await fetch(pb).then(r => r.blob());
        const fd = new FormData();
        fd.append('chat_id', TELEGRAM_CHAT_ID);
        fd.append('photo', blb, 'slip.jpg');
        fd.append('caption', caption);
        fd.append('reply_markup', JSON.stringify({
            inline_keyboard: [[
                { text: '✅ Done', callback_data: 'done_' + oid },
                { text: '❌ Failed', callback_data: 'fail_' + oid }
            ]]
        }));
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`, { method: 'POST', body: fd });
    } catch (e) { console.error(e); }

    const orders = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    orders.unshift({
        id: oid, userId: un, package: pkg, server, price,
        gameId: gid, serverId: sid, payment: pname, message: msg,
        date: new Date().toISOString(), status: 'pending', replies: []
    });
    localStorage.setItem('orderHistory', JSON.stringify(orders));

    const notis = JSON.parse(localStorage.getItem('notifications') || '[]');
    notis.unshift({
        id: 'noti_' + Date.now(), orderId: oid, type: 'order', status: 'pending',
        message: `🛒 အော်ဒါအသစ် #${oid}\n👤 ${un}\n📦 ${pkg}\n🌐 ${server}\n💰 ${price}\n⏳ ဆောင်ရွက်နေဆဲ`,
        time
    });
    localStorage.setItem('notifications', JSON.stringify(notis));

    document.getElementById('checkoutModal').classList.remove('show');

    const successDetails = document.getElementById('successDetails');
    const successModal = document.getElementById('successModal');
    if (successDetails) {
        successDetails.innerHTML = `<div class="row"><span>အော်ဒါအမှတ်</span><span>${oid} <button class="copy-btn" onclick="copyTextValue('${oid}')">📋</button></span></div><div class="row"><span>ပက်ကေ့ချ်</span><span>${pkg}</span></div><div class="row"><span>ဆာဗာ</span><span>${server}</span></div><div class="row"><span>ဈေးနှုန်း</span><span>${price}</span></div><div class="row"><span>Game ID</span><span>${gid}</span></div><div class="row"><span>Server ID</span><span>${sid}</span></div><div class="row"><span>ငွေပေးချေမှု</span><span>${pname}</span></div><div class="row"><span>အသုံးပြုသူ</span><span>${un}</span></div><div class="row"><span>အချိန်</span><span>${time}</span></div>`;
    }
    if (successModal) successModal.classList.add('show');
    updateBadge();

    if (isMCGG) { isMCGGSubmitting = false; }
    else { isSubmitting = false; }
    submitBtn.disabled = false;
    submitBtn.className = 'btn-primary enabled';
    submitBtn.textContent = '✅ ' + getText('submit');
}

function goProfileFromSuccess() {
    const successModal = document.getElementById('successModal');
    if (successModal) successModal.classList.remove('show');
    window.location.href = 'profile.html';
}

// ========== PROFILE - ORDER HISTORY ==========
let currentFilter = 'all';
let showAllOrders = false;

function renderOrders() {
    const container = document.getElementById('orderHistoryContainer');
    if (!container) return;
    const d = LANG_DATA[currentLang];
    const searchTerm = document.getElementById('orderSearch') ? document.getElementById('orderSearch').value.toLowerCase().trim() : '';

    if (!currentUser) {
        container.innerHTML = '<div class="empty-orders"><span class="icon">🔒</span>Please login to view orders</div>';
        return;
    }

    const orders = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    let userOrders = orders.filter(o => o.userId === currentUser.username);
    if (currentFilter !== 'all') userOrders = userOrders.filter(o => o.status === currentFilter);
    if (searchTerm) userOrders = userOrders.filter(o => o.id.toLowerCase().includes(searchTerm));

    if (userOrders.length === 0) {
        container.innerHTML = '<div class="empty-orders"><span class="icon">📭</span>' + d.noOrders + '</div>';
        return;
    }

    const statusMap = {
        'pending': { class: 'pending', text: d.orderStatusPending },
        'completed': { class: 'completed', text: d.orderStatusCompleted },
        'cancelled': { class: 'cancelled', text: d.orderStatusCancelled }
    };

    const displayOrders = showAllOrders ? userOrders : userOrders.slice(0, 3);
    const hasMore = userOrders.length > 3;

    container.innerHTML = '<div class="order-list">' + displayOrders.map(order => {
        const status = statusMap[order.status] || statusMap.pending;
        return `
            <div class="order-item">
                <div class="info">
                    <span class="id">📋 ${order.id}</span>
                    <span class="pkg">${order.package}</span>
                    <span class="date">${new Date(order.date).toLocaleString()}</span>
                </div>
                <span class="status ${status.class}">${status.text}</span>
            </div>
        `;
    }).join('') + '</div>';

    if (hasMore) {
        container.innerHTML += `
            <div class="order-more" onclick="toggleOrders()">
                <i class="fas ${showAllOrders ? 'fa-chevron-up' : 'fa-chevron-down'}"></i> 
                ${showAllOrders ? d.showLess : d.showMore}
            </div>
        `;
    }
}

function toggleOrders() {
    showAllOrders = !showAllOrders;
    renderOrders();
}

// ========== NOTIFICATIONS ==========
function loadNotifications() {
    const container = document.getElementById('notiContainer');
    if (!container) return;
    const notis = JSON.parse(localStorage.getItem('notifications') || '[]');
    const orders = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    const d = LANG_DATA[currentLang];

    if (notis.length === 0) {
        container.innerHTML = '<div class="empty">' + d.emptyNoti + '</div>';
        return;
    }

    container.innerHTML = notis.map(n => {
        let typeClass = n.type === 'reply' ? 'reply' : (n.status || 'info');
        let icon = '🔔';
        switch (typeClass) {
            case 'pending': icon = '⏳'; break;
            case 'completed': icon = '✅'; break;
            case 'failed': icon = '❌'; break;
            case 'reply': icon = '💬'; break;
            default: icon = '🔔';
        }

        const order = orders.find(o => o.id === n.orderId);
        const replies = order?.replies || [];

        let repliesHTML = '';
        if (replies.length > 0) {
            repliesHTML = '<div class="replies-list">' + replies.map(r => `
                <div class="r-item">
                    <span class="r-from">${r.from || 'Admin'}:</span> ${r.text}
                    <small>(${new Date(r.time).toLocaleString()})</small>
                </div>
            `).join('') + '</div>';
        }

        return `
            <div class="noti-card ${typeClass}">
                <div class="noti-header">
                    <div class="noti-icon">${icon}</div>
                    <div class="noti-content">
                        <div class="noti-text">${n.message}</div>
                        <div class="noti-time">🕐 ${n.time || ''}</div>
                    </div>
                </div>
                ${repliesHTML}
            </div>
        `;
    }).join('');
}

function clearAllNotifications() {
    localStorage.setItem('notifications', '[]');
    loadNotifications();
    updateBadge();
    showToast(getText('cleared'), 'success');
}

// ========== TELEGRAM UPDATES ==========
async function checkTelegramUpdates() {
    try {
        const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates?offset=${lastUpdateId + 1}`);
        const data = await res.json();
        if (!data.ok || !data.result.length) return;

        for (const update of data.result) {
            lastUpdateId = update.update_id;

            if (update.callback_query) {
                const cb = update.callback_query;
                const [action, orderId] = cb.data.split('_');

                await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/answerCallbackQuery`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ callback_query_id: cb.id, text: action === 'done' ? '✅ Complete' : '❌ Failed' })
                });

                const finalText = action === 'done' ? '✅ Complete' : '❌ ကျရှုံးသည်';
                if (cb.message.photo) {
                    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/editMessageCaption`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ chat_id: cb.message.chat.id, message_id: cb.message.message_id, caption: finalText })
                    });
                }

                const orders = JSON.parse(localStorage.getItem('orderHistory') || '[]');
                const order = orders.find(o => o.id === orderId);
                if (order) {
                    order.status = action === 'done' ? 'completed' : 'failed';
                    localStorage.setItem('orderHistory', JSON.stringify(orders));

                    const notis = JSON.parse(localStorage.getItem('notifications') || '[]');
                    const noti = notis.find(n => n.orderId === orderId);
                    if (noti) {
                        noti.status = action === 'done' ? 'completed' : 'failed';
                        noti.message = action === 'done'
                            ? `✅ အောင်မြင်ပါသည် #${orderId}\n📦 ${order.package}\n💰 ${order.price}`
                            : `❌ ကျရှုံးသည် #${orderId}\n📦 ${order.package}\n💰 ${order.price}`;
                        localStorage.setItem('notifications', JSON.stringify(notis));
                    }
                }
                if (typeof loadNotifications === 'function') loadNotifications();
                if (typeof renderOrders === 'function') renderOrders();
                updateBadge();
            }

            if (update.message && update.message.reply_to_message) {
                const repliedMsg = update.message.reply_to_message;
                const replyText = update.message.text || update.message.caption || '';
                const orderIdMatch = (repliedMsg.caption || '').match(/📋 (ORD-\d+)/) || (repliedMsg.text || '').match(/📋 (ORD-\d+)/);
                if (orderIdMatch) {
                    const orderId = orderIdMatch[1];
                    const orders = JSON.parse(localStorage.getItem('orderHistory') || '[]');
                    const order = orders.find(o => o.id === orderId);
                    if (order) {
                        if (!order.replies) order.replies = [];
                        order.replies.push({ text: replyText, time: new Date().toISOString(), from: 'Admin' });
                        localStorage.setItem('orderHistory', JSON.stringify(orders));

                        const notis = JSON.parse(localStorage.getItem('notifications') || '[]');
                        const noti = notis.find(n => n.orderId === orderId);
                        if (noti) {
                            noti.replyCount = (noti.replyCount || 0) + 1;
                            noti.time = new Date().toLocaleString();
                            localStorage.setItem('notifications', JSON.stringify(notis));
                        }
                    }
                    if (typeof loadNotifications === 'function') loadNotifications();
                    if (typeof renderOrders === 'function') renderOrders();
                    updateBadge();
                }
            }
        }
    } catch (e) { console.error(e); }
}

// ========== AVATAR UPLOAD ==========
function handleAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file || !currentUser) return;
    const reader = new FileReader();
    reader.onload = function (ev) {
        const avatarDisplay = document.getElementById('avatarDisplay');
        if (avatarDisplay) avatarDisplay.innerHTML = '<img src="' + ev.target.result + '" alt="avatar" style="width:100%;height:100%;object-fit:cover;">';
        localStorage.setItem('userAvatar_' + currentUser.username, ev.target.result);
        updateAuthUI();
        showToast('✅ Avatar updated!', 'success');
    };
    reader.readAsDataURL(file);
}

// ========== NAV HANDLER ==========
function handleNavClick(el, e) {
    e.preventDefault();
    setTimeout(() => { window.location.href = el.getAttribute('href'); }, 300);
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', function () {
    const savedLang = localStorage.getItem('lang') || 'my';
    currentLang = savedLang;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === savedLang));

    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) currentUser = JSON.parse(savedUser);

    if (localStorage.getItem('nightMode') === 'true') {
        document.body.classList.add('night-mode');
        const icon = document.querySelector('.night-toggle i');
        if (icon) icon.className = 'fas fa-sun';
    }

    updateLanguage();
    updateBadge();

    // Page-specific init
    if (typeof renderAllPackages === 'function') renderAllPackages();
    if (typeof renderPackages === 'function') renderPackages();
    if (typeof loadNotifications === 'function') loadNotifications();
    if (typeof renderOrders === 'function') renderOrders();

    // Night toggle
    const nightToggle = document.getElementById('nightToggle');
    if (nightToggle) nightToggle.addEventListener('click', toggleNightMode);
    else {
        const toggle = document.querySelector('.night-toggle');
        if (toggle) toggle.addEventListener('click', toggleNightMode);
    }

    // Auth button
    const authBtn = document.getElementById('authBtn');
    if (authBtn) {
        authBtn.addEventListener('click', function () {
            if (currentUser) { window.location.href = 'profile.html'; }
            else { openAuthModal('login'); }
        });
    }

    // Auth modal close
    const authModal = document.getElementById('authModal');
    if (authModal) {
        authModal.addEventListener('click', function (e) {
            if (e.target === this) closeAuthModal();
        });
    }

    // Settings modal close
    const settingsModal = document.getElementById('settingsModal');
    if (settingsModal) {
        settingsModal.addEventListener('click', function (e) {
            if (e.target === this) closeSettingsModal();
        });
    }

    // Logout overlay close
    const logoutOverlay = document.getElementById('logoutOverlay');
    if (logoutOverlay) {
        logoutOverlay.addEventListener('click', function (e) {
            if (e.target === this) this.classList.remove('show');
        });
    }

    // Checkout modal close
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal) {
        checkoutModal.addEventListener('click', function (e) {
            if (e.target === this) {
                if (typeof closeCheckout === 'function') closeCheckout();
                if (typeof closeCheckoutModal === 'function') closeCheckoutModal();
            }
        });
    }

    // Success modal close
    const successModal = document.getElementById('successModal');
    if (successModal) {
        successModal.addEventListener('click', function (e) {
            if (e.target === this) successModal.classList.remove('show');
        });
    }

    // Auth form switches
    const switchToReg = document.getElementById('switchToRegister') || document.getElementById('authSwitchToRegister');
    const switchToLog = document.getElementById('switchToLogin') || document.getElementById('authSwitchToLogin');
    if (switchToReg) {
        switchToReg.addEventListener('click', function () {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('registerForm').style.display = 'block';
            const error = document.getElementById('loginError') || document.getElementById('authError');
            if (error) { error.style.display = 'none'; error.classList.remove('show'); }
            updateAuthModalTexts();
            checkRegisterForm();
        });
    }
    if (switchToLog) {
        switchToLog.addEventListener('click', function () {
            document.getElementById('loginForm').style.display = 'block';
            document.getElementById('registerForm').style.display = 'none';
            const error = document.getElementById('loginError') || document.getElementById('authError');
            if (error) { error.style.display = 'none'; error.classList.remove('show'); }
            updateAuthModalTexts();
            checkLoginForm();
        });
    }

    // Auth login button
    const loginBtn = document.getElementById('loginBtn') || document.getElementById('authLoginBtn');
    if (loginBtn) loginBtn.addEventListener('click', handleAuthLogin);

    // Auth register button
    const registerBtn = document.getElementById('registerBtn') || document.getElementById('authRegisterBtn');
    if (registerBtn) registerBtn.addEventListener('click', handleAuthRegister);

    // Login form input listeners
    const loginInput = document.getElementById('loginInput') || document.getElementById('authLoginInput');
    const loginPassword = document.getElementById('loginPassword') || document.getElementById('authLoginPassword');
    if (loginInput) loginInput.addEventListener('input', checkLoginForm);
    if (loginPassword) loginPassword.addEventListener('input', checkLoginForm);

    // Register form input listeners
    const regUsername = document.getElementById('regUsername') || document.getElementById('authRegUsername');
    const regPassword = document.getElementById('regPassword') || document.getElementById('authRegPassword');
    const regConfirm = document.getElementById('regConfirmPassword') || document.getElementById('authRegConfirmPassword');
    if (regUsername) regUsername.addEventListener('input', checkRegisterForm);
    if (regPassword) regPassword.addEventListener('input', checkRegisterForm);
    if (regConfirm) regConfirm.addEventListener('input', checkRegisterForm);

    // Logout buttons
    const logoutConfirmBtn = document.getElementById('logoutConfirmBtn');
    const logoutCancelBtn = document.getElementById('logoutCancelBtn');
    if (logoutConfirmBtn) {
        logoutConfirmBtn.addEventListener('click', function () {
            document.getElementById('logoutOverlay').classList.remove('show');
            localStorage.removeItem('currentUser');
            currentUser = null;
            updateAuthUI();
            showToast(getText('logoutSuccess'), 'success');
            setTimeout(() => { window.location.href = 'index.html'; }, 1500);
        });
    }
    if (logoutCancelBtn) {
        logoutCancelBtn.addEventListener('click', function () {
            document.getElementById('logoutOverlay').classList.remove('show');
        });
    }

    // Settings save button
    const settingsSaveBtn = document.getElementById('settingsSaveBtn');
    if (settingsSaveBtn) settingsSaveBtn.addEventListener('click', saveSettings);

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            currentFilter = this.dataset.filter;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === currentFilter));
            renderOrders();
        });
    });

    // Order search
    const orderSearch = document.getElementById('orderSearch');
    if (orderSearch) orderSearch.addEventListener('input', renderOrders);

    // Game ID & Server ID input events
    const gameIdInput = document.getElementById('gameId');
    const serverIdInput = document.getElementById('serverId');
    if (gameIdInput) gameIdInput.addEventListener('input', checkForm);
    if (serverIdInput) serverIdInput.addEventListener('input', checkForm);

    // File input change
    const fileInput = document.getElementById('fileInput');
    if (fileInput) fileInput.addEventListener('change', handleFileSelect);

    // Payment option click
    document.querySelectorAll('.payment-option').forEach(el => {
        el.addEventListener('click', function () {
            selectPayment(this.dataset.payment);
        });
    });

    // Avatar upload
    const avatarInput = document.getElementById('avatarInput');
    if (avatarInput) avatarInput.addEventListener('change', handleAvatarUpload);

    // Keyboard shortcuts
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeAuthModal();
            closeSettingsModal();
            const logoutOverlay = document.getElementById('logoutOverlay');
            if (logoutOverlay) logoutOverlay.classList.remove('show');
        }
        if (e.key === 'Enter') {
            const authModalOpen = document.getElementById('authModal');
            if (authModalOpen && authModalOpen.classList.contains('show')) {
                const registerForm = document.getElementById('registerForm');
                if (registerForm && registerForm.style.display === 'block') {
                    handleAuthRegister();
                } else {
                    handleAuthLogin();
                }
            }
        }
    });

    // Telegram updates
    setInterval(checkTelegramUpdates, 3000);

    // Storage event
    window.addEventListener('storage', function (e) {
        if (e.key === 'newOrderNotification' || e.key === 'notifications') updateBadge();
        if (e.key === 'currentUser') {
            const user = localStorage.getItem('currentUser');
            if (user) currentUser = JSON.parse(user);
            else currentUser = null;
            updateAuthUI();
            if (typeof renderOrders === 'function') renderOrders();
        }
    });

    // Clear notification badge when visiting notifications page
    if (window.location.href.includes('notifications')) {
        const notis = JSON.parse(localStorage.getItem('notifications') || '[]');
        const updatedNotis = notis.map(n => {
            if (n.status === 'pending') {
                n.status = 'info';
            }
            return n;
        });
        localStorage.setItem('notifications', JSON.stringify(updatedNotis));
        updateBadge();
    }
});
/* ============================================
   PREMIUM GAME SHOP - MAIN JAVASCRIPT (PART 4 - FORGOT PASSWORD)
   Add this to the END of js/main.js
   ============================================ */

// ========== FORGOT PASSWORD ==========
let forgotPasswordUser = null;
let forgotPasswordOTP = null;
let otpTimerInterval = null;
let otpSecondsLeft = 0;
let otpCanResend = true;

// ========== OPEN FORGOT PASSWORD MODAL ==========
function openForgotPasswordModal() {
    closeAuthModal();
    const modal = document.getElementById('forgotPasswordModal');
    if (!modal) return;
    
    // Reset all steps
    document.getElementById('forgotStep1').style.display = 'block';
    document.getElementById('forgotStep2').style.display = 'none';
    document.getElementById('forgotStep3').style.display = 'none';
    document.getElementById('forgotIdentify').value = '';
    document.getElementById('otpInput').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmNewPassword').value = '';
    document.getElementById('forgotError').classList.remove('show');
    document.getElementById('forgotSuccess').classList.remove('show');
    document.getElementById('forgotError').textContent = '';
    document.getElementById('forgotSuccess').textContent = '';
    
    // Reset OTP state
    forgotPasswordUser = null;
    forgotPasswordOTP = null;
    clearInterval(otpTimerInterval);
    otpSecondsLeft = 0;
    otpCanResend = true;
    document.getElementById('resendOtpBtn').disabled = false;
    document.getElementById('resendOtpBtn').style.opacity = '1';
    document.getElementById('otpTimer').textContent = '';
    
    modal.classList.add('show');
}

function closeForgotPasswordModal() {
    const modal = document.getElementById('forgotPasswordModal');
    if (!modal) return;
    modal.classList.remove('show');
    clearInterval(otpTimerInterval);
    forgotPasswordUser = null;
    forgotPasswordOTP = null;
}

// ========== STEP 1: FIND ACCOUNT ==========
function findAccount() {
    const identify = document.getElementById('forgotIdentify').value.trim();
    const error = document.getElementById('forgotError');
    const d = LANG_DATA[currentLang];
    
    error.classList.remove('show');
    error.textContent = '';
    
    if (!identify) {
        error.textContent = 'ကျေးဇူးပြု၍ အသုံးပြုသူအမည်၊ အီးမေးလ် သို့မဟုတ် ဖုန်းနံပါတ်ထည့်ပါ';
        error.classList.add('show');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    let found = null;
    for (const key in users) {
        const user = users[key];
        if (key === identify || user.email === identify || user.phone === identify || user.username === identify) {
            found = user;
            break;
        }
    }
    
    if (!found) {
        error.textContent = '❌ အကောင့်မတွေ့ပါ။ အသုံးပြုသူအမည်၊ အီးမေးလ် သို့မဟုတ် ဖုန်းနံပါတ် မှန်မှန်ထည့်ပါ။';
        error.classList.add('show');
        return;
    }
    
    // Check if account has contact info
    if (!found.phone && !found.email) {
        error.textContent = '❌ ဤအကောင့်တွင် ဖုန်းနံပါတ် သို့မဟုတ် အီးမေးလ် မရှိပါ။ Admin ကို ဆက်သွယ်ပါ။';
        error.classList.add('show');
        return;
    }
    
    forgotPasswordUser = found;
    
    // Generate OTP
    forgotPasswordOTP = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Send OTP to Telegram
    sendOTPToTelegram(found, forgotPasswordOTP);
    
    // Go to Step 2
    document.getElementById('forgotStep1').style.display = 'none';
    document.getElementById('forgotStep2').style.display = 'block';
    document.getElementById('forgotStep3').style.display = 'none';
    
    // Update OTP message with contact info
    const contactMethod = found.phone ? 'ဖုန်းနံပါတ်' : 'အီးမေးလ်';
    const contactValue = found.phone || found.email;
    document.getElementById('otpSentMsg').innerHTML = 
        `✅ သင့်အကောင့်ကို ရှာတွေ့ပါပြီ။<br>OTP ကုဒ်ကို <strong>Telegram</strong> မှတစ်ဆင့် <strong>${contactMethod} (${contactValue})</strong> သို့ ပို့ထားပါသည်။`;
    
    // Start resend timer
    startOTPTimer();
}

// ========== SEND OTP TO TELEGRAM ==========
async function sendOTPToTelegram(user, otp) {
    const contactMethod = user.phone ? '📞 ' + user.phone : '📧 ' + user.email;
    const message = `🔐 Password Reset Request
━━━━━━━━━━━━━━━━━
👤 Username: @${user.username}
${contactMethod}
━━━━━━━━━━━━━━━━━
🔢 OTP Code: ${otp}
━━━━━━━━━━━━━━━━━
⏰ ${new Date().toLocaleString()}

ဤ OTP ကုဒ်ကို User အား ပြန်လည်ပေးပို့ပါ။`;

    try {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message
            })
        });
    } catch (e) {
        console.error('Failed to send OTP to Telegram:', e);
    }
}

// ========== OTP TIMER ==========
function startOTPTimer() {
    otpSecondsLeft = 60;
    otpCanResend = false;
    document.getElementById('resendOtpBtn').disabled = true;
    document.getElementById('resendOtpBtn').style.opacity = '0.4';
    updateOTPTimerDisplay();
    
    clearInterval(otpTimerInterval);
    otpTimerInterval = setInterval(() => {
        otpSecondsLeft--;
        updateOTPTimerDisplay();
        if (otpSecondsLeft <= 0) {
            clearInterval(otpTimerInterval);
            otpCanResend = true;
            document.getElementById('resendOtpBtn').disabled = false;
            document.getElementById('resendOtpBtn').style.opacity = '1';
            document.getElementById('otpTimer').textContent = 'OTP ပြန်တောင်းနိုင်ပါပြီ';
        }
    }, 1000);
}

function updateOTPTimerDisplay() {
    const timerEl = document.getElementById('otpTimer');
    if (otpSecondsLeft > 0) {
        timerEl.textContent = `${otpSecondsLeft} စက္ကန့်အတွင်း ပြန်တောင်းနိုင်မည်`;
    }
}

function resendOTP() {
    if (!otpCanResend || !forgotPasswordUser) return;
    
    forgotPasswordOTP = Math.floor(100000 + Math.random() * 900000).toString();
    sendOTPToTelegram(forgotPasswordUser, forgotPasswordOTP);
    startOTPTimer();
    showToast('📩 OTP ကုဒ်အသစ် ထပ်မံပို့ပြီးပါပြီ', 'success');
}

// ========== STEP 2: VERIFY OTP ==========
function verifyOTP() {
    const otpInput = document.getElementById('otpInput').value.trim();
    const error = document.getElementById('forgotError');
    
    error.classList.remove('show');
    error.textContent = '';
    
    if (!otpInput || otpInput.length !== 6) {
        error.textContent = '❌ OTP ကုဒ် ၆ လုံး ထည့်ပါ';
        error.classList.add('show');
        return;
    }
    
    if (otpInput !== forgotPasswordOTP) {
        error.textContent = '❌ OTP ကုဒ် မှားနေပါသည်။ ထပ်ကြိုးစားပါ။';
        error.classList.add('show');
        return;
    }
    
    // OTP verified, go to Step 3
    document.getElementById('forgotStep1').style.display = 'none';
    document.getElementById('forgotStep2').style.display = 'none';
    document.getElementById('forgotStep3').style.display = 'block';
    document.getElementById('forgotError').classList.remove('show');
    document.getElementById('forgotError').textContent = '';
    clearInterval(otpTimerInterval);
}

// ========== STEP 3: RESET PASSWORD ==========
function resetPassword() {
    const newPassword = document.getElementById('newPassword').value.trim();
    const confirmNewPassword = document.getElementById('confirmNewPassword').value.trim();
    const error = document.getElementById('forgotError');
    const success = document.getElementById('forgotSuccess');
    const d = LANG_DATA[currentLang];
    
    error.classList.remove('show');
    error.textContent = '';
    success.classList.remove('show');
    success.textContent = '';
    
    if (!newPassword || !confirmNewPassword) {
        error.textContent = '❌ စကားဝှက်နှစ်ခုလုံး ထည့်ပါ';
        error.classList.add('show');
        return;
    }
    
    if (newPassword.length < 4) {
        error.textContent = '❌ စကားဝှက်သည် အနည်းဆုံး ၄ လုံးရှိရမယ်';
        error.classList.add('show');
        return;
    }
    
    if (newPassword !== confirmNewPassword) {
        error.textContent = '❌ စကားဝှက်များ မတူညီပါ';
        error.classList.add('show');
        return;
    }
    
    // Update password
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const userData = users[forgotPasswordUser.username];
    if (userData) {
        userData.password = newPassword;
        users[forgotPasswordUser.username] = userData;
        localStorage.setItem('users', JSON.stringify(users));
        
        // Send notification to Telegram
        const message = `✅ Password Reset Success
━━━━━━━━━━━━━━━━━
👤 Username: @${forgotPasswordUser.username}
📞 ${forgotPasswordUser.phone || 'N/A'}
📧 ${forgotPasswordUser.email || 'N/A'}
━━━━━━━━━━━━━━━━━
⏰ ${new Date().toLocaleString()}
🔑 Password has been reset.`;
        
        fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message })
        }).catch(e => console.error(e));
        
        // Show success and redirect to login
        success.textContent = '✅ စကားဝှက် အောင်မြင်စွာပြောင်းပြီးပါပြီ။ လော့အင်ဝင်ရန် ပြန်သွားပါမည်။';
        success.classList.add('show');
        
        setTimeout(() => {
            closeForgotPasswordModal();
            openAuthModal('login');
            // Auto-fill username for easy login
            const loginInput = document.getElementById('loginInput') || document.getElementById('authLoginInput');
            if (loginInput) loginInput.value = forgotPasswordUser.username;
            forgotPasswordUser = null;
            forgotPasswordOTP = null;
        }, 2000);
    } else {
        error.textContent = '❌ တစ်ခုခုမှားယွင်းနေပါသည်။ ထပ်မံကြိုးစားပါ။';
        error.classList.add('show');
    }
}

// ========== FORGOT PASSWORD MODAL CLOSE ON OVERLAY CLICK ==========
document.addEventListener('DOMContentLoaded', function() {
    const forgotModal = document.getElementById('forgotPasswordModal');
    if (forgotModal) {
        forgotModal.addEventListener('click', function(e) {
            if (e.target === this) closeForgotPasswordModal();
        });
    }
});
