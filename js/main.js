/* ============================================
   PREMIUM GAME SHOP - MAIN JAVASCRIPT
   ============================================ */

const TELEGRAM_BOT_TOKEN = '8751360822:AAFQNiWhfGWgUsjD7Bd5DzfHMfpkR4COHY8';
const TELEGRAM_CHAT_ID = '8745522082';

const LANG_DATA = {
    my: {
        appName: 'Premium', appSub: 'Game Shop',
        home: 'ပင်မ', shop: 'ဆိုင်', payment: 'ငွေပေးချေ', profile: 'ပရိုဖိုင်',
        greeting: 'ဟေ့ကောင်လေး!', welcomeTitle: 'ဂိမ်းကို မြှင့်တင်လိုက်ပါ!',
        subtitle: 'စိန်တွေဖြည့်ပြီး စစ်မြေပြင်ကို အနိုင်ယူလိုက်ပါ',
        goToShop: '⚡ GO TO SHOP', shopClosed: '🔒 SHOP CLOSED',
        shopSubText: 'ပက်ကေ့ခ်ျအားလုံးကိုကြည့်ပါ',
        servicesTitle: 'ဘာကြောင့် ကျွန်ုပ်တို့ကိုရွေးမလဲ?',
        s1: '၁၀ မိနစ်အတွင်း အော်ဒါပြီးမြောက်', s2: 'လျှင်မြန် • လွယ်ကူ • ယုံကြည်စိတ်ချရ',
        s3: 'အတန်ဆုံးဈေးနဲ့ အကောင်းဆုံး Service', s4: 'မနက် ၉:၃၀ မှ ည ၉:၃၀ အထိ',
        s5: 'Mobile Legends', s6: 'Coming Soon',
        telegramTitle: '📢 ကျွန်ုပ်တို့ Telegram ချန်နယ်သို့လာရောက်ပါ',
        telegramDesc: 'နောက်ဆုံးရသတင်းများ၊ ပရိုမိုးရှင်းများနှင့် အကူအညီရယူပါ',
        contactLabel: '💬 အကူအညီလိုပါသလား?', contactUsername: '@PremEnergy',
        shopOpen: 'OPEN', shopClosedStatus: 'CLOSED',
        shopOpenText: 'မနက် ၉:၃၀ မှ ည ၉:၃၀ အတွင်းသာ ဆိုင်ဖွင့်မည် (မြန်မာစံတော်ချိန်)',
        shopClosedText: 'မနက် ၉:၃၀ မှသာ ဆိုင်ဖွင့်ပါမည် (မြန်မာစံတော်ချိန်)',
        modalLogin: 'ဝင်ရန်', modalRegister: 'မှတ်ပုံတင်ရန်',
        modalLoginSub: 'ပြန်လည်ကြိုဆိုပါတယ်!', modalRegisterSub: 'အကောင့်ဖွင့်ပါ!',
        email: 'အီးမေးလ် / အသုံးပြုသူအမည် / ဖုန်းနံပါတ်', password: 'စကားဝှက်',
        forgotPassword: 'စကားဝှက်မေ့နေပါသလား?',
        switchLogin: 'အကောင့်မရှိသေးဘူး? မှတ်ပုံတင်ရန်', switchRegister: 'အကောင့်ရှိပြီးသား? ဝင်ရန်',
        login: 'ဝင်ရန်', register: 'မှတ်ပုံတင်ရန်',
        loginSuccess: '✅ ကြိုဆိုပါတယ်!', registerSuccess: '✅ အကောင့်ဖွင့်ခြင်းအောင်မြင်ပါပြီ!',
        invalidCredentials: '❌ အီးမေးလ်/အသုံးပြုသူအမည်/ဖုန်းနံပါတ် သို့မဟုတ် စကားဝှက် မှားနေပါသည်',
        settingsNameTitle: '✏️ နာမည်ပြောင်းရန်', settingsNameSub: 'နာမည်အသစ်ထည့်ပါ',
        settingsUsernameTitle: '✏️ အသုံးပြုသူအမည်ပြောင်းရန်', settingsUsernameSub: 'အသုံးပြုသူအမည်အသစ်ထည့်ပါ',
        settingsEmailTitle: '📧 အီးမေးလ်ပြောင်းရန်', settingsEmailSub: 'အီးမေးလ်အသစ်ထည့်ပါ',
        settingsPhoneTitle: '📱 ဖုန်းနံပါတ်ပြောင်းရန်', settingsPhoneSub: 'ဖုန်းနံပါတ်အသစ်ထည့်ပါ',
        settingsPassTitle: '🔑 စကားဝှက်ပြောင်းရန်', settingsPassSub: 'စကားဝှက်အသစ်ထည့်ပါ',
        settingsNameLabel: 'နာမည်အသစ်', settingsUsernameLabel: 'အသုံးပြုသူအမည်အသစ်',
        settingsEmailLabel: 'အီးမေးလ်အသစ်', settingsPhoneLabel: 'ဖုန်းနံပါတ်အသစ်',
        settingsPassLabel: 'စကားဝှက်အသစ်', settingsConfirmLabel: 'စကားဝှက်အတည်ပြုရန်',
        settingsSave: '💾 သိမ်းမည်', settingsError: 'ကျေးဇူးပြု၍ ထည့်ပါ',
        settingsPassError: 'စကားဝှက်များတူညီရမည်', settingsUsernameExists: '❌ ဤအသုံးပြုသူအမည်ရှိပြီးသားပါ',
        saveSuccess: '✅ အောင်မြင်ပါသည်!', logoutSuccess: '✅ ထွက်ပြီးပါပြီ!',
        pageTitleNotiLabel: 'သတိပေးချက်များ', emptyText: 'သတိပေးချက် မရှိသေးပါ',
        clearAllText: 'အကုန်ဖျက်မည်', cleared: '✅ အကုန်ဖျက်ပြီး',
        paymentTitle: 'ငွေပေးချေရန်', paymentSub: 'အောက်ပါအကောင့်များထဲမှ တစ်ခုခုသို့ ငွေပို့ပါ',
        accountsTitle: 'ငွေလက်ခံမည့်အကောင့်များ', waveName: 'Wave Pay', kpayName: 'KBZ Pay',
        howToTitle: 'ငွေပေးချေနည်း',
        step1: '<strong>Wave Pay</strong> သို့မဟုတ် <strong>KBZ Pay</strong> ရွေးပါ',
        step2: 'အပေါ်က <strong>ဖုန်းနံပါတ်</strong> ကိုကူးယူပါ',
        step3: 'အတိအကျငွေပို့ပြီး <strong>Screenshot</strong> ရိုက်ပါ',
        step4: '<strong>ဆိုင်</strong> သို့သွားပြီး အော်ဒါအပြီးသတ်ပါ',
        supportTitle: 'အကူအညီ', supportLabel: 'Telegram မှ ဆက်သွယ်ပါ',
        supportDesc: '@Energypremiumhub • ၂၄/၇ ဝန်ဆောင်မှု', copy: 'ကူးယူမည်', copied: '✅ ကူးပြီး',
        pageTitleShop: 'Game Shop', pageSubShop: 'ဂိမ်းတစ်ခုရွေးပြီး ပက်ကေ့ခ်ျများကို ဝယ်ယူလိုက်ပါ',
        gamesTitle: 'ဂိမ်းများ', comingSoon: 'Coming Soon', comingSoonSub: '⏳ အသစ်ထွက်ရှိမည်',
        searchPlaceholder: '🔍 ဂိမ်းနာမည်ရှာပါ...', noGames: '❌ ဂိမ်းမတွေ့ပါ',
        selectGame: 'ရွေးချယ်လိုက်ပါ', comingSoonMsg: '🎮 ဤဂိမ်းကို မကြာမီ ထည့်သွင်းပေးပါမည်။',
        mlbbSub: 'စိန်ဖြည့်မှု', mcggSub: 'စိန်ဖြည့်မှု',
        mlbbGlobalPackages: 'MLBB Global Packages', mlbbBanPackages: 'MLBB Ban Packages',
        mlbbIndoPackages: 'MLBB Indo Packages', mlbbRussiaPackages: 'MLBB Russia Packages',
        banServerLabel: 'Ban Server: (Malay, Sin, Php)',
        pageTitleProfile: 'ပရိုဖိုင်', pageSubProfile: 'သင့်အကောင့်အချက်အလက်များ',
        orderHistoryLabel: 'အော်ဒါမှတ်တမ်း', settingsLabel: 'အကောင့်ဆက်တင်များ',
        changeNameText: 'နာမည်ပြောင်းရန်', changeUsernameText: 'အသုံးပြုသူအမည်ပြောင်းရန်',
        changeEmailText: 'အီးမေးလ်ပြောင်းရန်', changePhoneText: 'ဖုန်းနံပါတ်ပြောင်းရန်',
        changePasswordText: 'စကားဝှက်ပြောင်းရန်', logoutText: 'ထွက်မည်',
        noOrders: 'အော်ဒါမရှိသေးပါ', showMore: 'အကုန်ကြည့်မည် →', showLess: 'ပြန်ဖျောက်မည်',
        orderStatusPending: 'ဆောင်ရွက်နေဆဲ', orderStatusCompleted: 'ပြီးပြီ', orderStatusCancelled: 'ပယ်ဖျက်ထား',
        pageTitleMCGG: 'MCGG Packages', pageSubMCGG: 'ပက်ကေ့ချ်တစ်ခုရွေးပြီး ဝယ်ယူပါ',
        bundlesTitle: 'ပက်ကေ့ချ်များ', diamondsTitle: 'စိန်များ', doubleTitle: 'နှစ်ဆဖြည့်မှု',
        buy: 'ဝယ်ယူရန်', selectLabel: 'ရွေးရန်', currency: 'Ks', doubleBadge: '⭐ 2x Bonus',
        modalTitle: '🛒 အော်ဒါတင်ရန်', modalSub: 'အချက်အလက်များကို မှန်ကန်စွာဖြည့်သွင်းပါ',
        gameId: 'ဂိမ်းအိုင်ဒီ', serverId: 'ဆာဗာအိုင်ဒီ',
        gameIdHint: 'နံပါတ်သာ ထည့်ပါ', serverIdHint: 'နံပါတ်သာ ထည့်ပါ',
        paymentLabel: 'ငွေပေးချေရန်', uploadLabel: 'ပြေစာတင်ပို့ရန်', uploadText: 'Screenshot ပို့ပေးပါ',
        submit: 'အော်ဒါတင်မည်', submitting: '⏳ အော်ဒါတင်နေသည်...',
        enterGameId: 'ကျေးဇူးပြု၍ ဂိမ်းအိုင်ဒီ နံပါတ်ထည့်ပါ',
        enterServerId: 'ကျေးဇူးပြု၍ ဆာဗာအိုင်ဒီ နံပါတ်ထည့်ပါ',
        selectPayment: 'ကျေးဇူးပြု၍ ငွေပေးချေနည်းရွေးပါ',
        uploadSlip: 'ကျေးဇူးပြု၍ Screenshot ပို့ပေးပါ',
        orderSuccess: '✅ အော်ဒါအောင်မြင်ပါသည်!', orderFail: '❌ အော်ဒါမအောင်မြင်ပါ။ ထပ်မံကြိုးစားပါ။',
        backToShop: '← ဆိုင်သို့ ပြန်သွားရန်',
        forgotTitle: 'စကားဝှက်မေ့နေပါသလား?', forgotSub: 'အောက်ပါအချက်အလက်များ ဖြည့်ပါ',
        forgotIdentifyLabel: 'အသုံးပြုသူအမည် / အီးမေးလ် / ဖုန်းနံပါတ်',
        forgotFindBtn: '🔍 အကောင့်ရှာမည်', forgotBackToLogin: '← လော့အင်ဝင်ရန် ပြန်သွားမည်',
        otpLabel: 'OTP ကုဒ် (၆ လုံး)', resendOtpBtn: '📩 ပြန်ပို့မည်', verifyOtpBtn: '✅ အတည်ပြုမည်',
        newPassLabel: 'စကားဝှက်အသစ်', confirmNewPassLabel: 'စကားဝှက်အတည်ပြုရန်',
        resetPasswordBtn: '🔑 စကားဝှက်ပြောင်းမည်',
        forgotPasswordSuccess: '✅ စကားဝှက် အောင်မြင်စွာပြောင်းပြီးပါပြီ။ လော့အင်ဝင်ရန် ပြန်သွားပါမည်။',
        accountNotFound: '❌ အကောင့်မတွေ့ပါ။ ထပ်မံကြိုးစားပါ။'
    },
    en: {
        appName: 'Premium', appSub: 'Game Shop',
        home: 'Home', shop: 'Shop', payment: 'Payment', profile: 'Profile',
        greeting: 'Hey, Gamer!', welcomeTitle: 'Level Up Your Game!',
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
        switchLogin: "Don't have an account? Register", switchRegister: 'Already have an account? Login',
        login: 'Login', register: 'Register',
        loginSuccess: '✅ Welcome back!', registerSuccess: '✅ Account created!',
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
        settingsPassError: 'Passwords must match', settingsUsernameExists: '❌ Username already exists',
        saveSuccess: '✅ Success!', logoutSuccess: '✅ Logged out!',
        pageTitleNotiLabel: 'Notifications', emptyText: 'No notifications yet',
        clearAllText: 'Clear All', cleared: '✅ Cleared all',
        paymentTitle: 'Payment', paymentSub: 'Send payment to one of the following accounts',
        accountsTitle: 'Payment Accounts', waveName: 'Wave Pay', kpayName: 'KBZ Pay',
        howToTitle: 'How to Pay',
        step1: 'Choose <strong>Wave Pay</strong> or <strong>KBZ Pay</strong>',
        step2: 'Copy the <strong>phone number</strong> above',
        step3: 'Send the exact amount and <strong>take a screenshot</strong>',
        step4: 'Go to <strong>Shop</strong> and complete your order',
        supportTitle: 'Support', supportLabel: 'Contact us on Telegram',
        supportDesc: '@Energypremiumhub • 24/7 Support', copy: 'Copy', copied: '✅ Copied!',
        pageTitleShop: 'Game Shop', pageSubShop: 'Choose a game and purchase packages',
        gamesTitle: 'Games', comingSoon: 'Coming Soon', comingSoonSub: '⏳ Coming Soon',
        searchPlaceholder: '🔍 Search game name...', noGames: '❌ No games found',
        selectGame: 'Selected', comingSoonMsg: '🎮 This game will be added soon.',
        mlbbSub: 'Diamond Top Up', mcggSub: 'Diamond Top Up',
        mlbbGlobalPackages: 'MLBB Global Packages', mlbbBanPackages: 'MLBB Ban Packages',
        mlbbIndoPackages: 'MLBB Indo Packages', mlbbRussiaPackages: 'MLBB Russia Packages',
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
        paymentLabel: 'Payment Method', uploadLabel: 'Upload Payment Slip', uploadText: 'Send Screenshot',
        submit: 'Submit Order', submitting: '⏳ Submitting...',
        enterGameId: 'Please enter your Game ID (numbers only)',
        enterServerId: 'Please enter your Server ID (numbers only)',
        selectPayment: 'Please select a payment method',
        uploadSlip: 'Please send your Screenshot',
        orderSuccess: '✅ Order successful!', orderFail: '❌ Order failed. Please try again.',
        backToShop: '← Back to Shop',
        forgotTitle: 'Forgot Password?', forgotSub: 'Fill in your details below',
        forgotIdentifyLabel: 'Username / Email / Phone',
        forgotFindBtn: '🔍 Find Account', forgotBackToLogin: '← Back to Login',
        otpLabel: 'OTP Code (6 digits)', resendOtpBtn: '📩 Resend', verifyOtpBtn: '✅ Verify',
        newPassLabel: 'New Password', confirmNewPassLabel: 'Confirm New Password',
        resetPasswordBtn: '🔑 Reset Password',
        forgotPasswordSuccess: '✅ Password reset successful! Redirecting to login...',
        accountNotFound: '❌ Account not found. Please try again.'
    }
};

let currentLang = localStorage.getItem('lang') || 'my';
let currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

function getText(key) { return LANG_DATA[currentLang] ? LANG_DATA[currentLang][key] : key; }

function showToast(msg, type) {
    const t = document.getElementById('toast'); if (!t) return;
    t.textContent = msg; t.className = 'toast show';
    if (type === 'success') t.classList.add('success'); else if (type === 'error') t.classList.add('error');
    clearTimeout(t._timer); t._timer = setTimeout(() => t.classList.remove('show'), 3000);
}

function toggleNightMode() {
    document.body.classList.toggle('night-mode');
    const icon = document.querySelector('.night-toggle i');
    if (icon) icon.className = document.body.classList.contains('night-mode') ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('nightMode', document.body.classList.contains('night-mode') ? 'true' : 'false');
}

function updateBadge() {
    const notis = JSON.parse(localStorage.getItem('notifications') || '[]');
    const count = notis.filter(n => n.status === 'pending').length;
    const badge = document.getElementById('notiBadge');
    if (badge) { badge.style.display = count > 0 ? 'block' : 'none'; if (count > 0) badge.textContent = count; }
}

function copyTextValue(v) { navigator.clipboard.writeText(v); showToast('✅ ကူးယူပြီး', 'success'); }
function copyNumber(number, btn) {
    const d = LANG_DATA[currentLang] || {};
    navigator.clipboard.writeText(number).then(() => {
        btn.textContent = d.copied || '✅ Copied!'; btn.classList.add('copied');
        setTimeout(() => { btn.textContent = d.copy || 'Copy'; btn.classList.remove('copied'); }, 2500);
    }).catch(() => {
        btn.textContent = d.copied || '✅ Copied!'; btn.classList.add('copied');
        setTimeout(() => { btn.textContent = d.copy || 'Copy'; btn.classList.remove('copied'); }, 2500);
    });
}

function setLang(lang) {
    currentLang = lang; localStorage.setItem('lang', lang);
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    updateLanguage();
}

function isShopOpen() {
    const now = new Date();
    const myanmarTime = new Date(now.getTime() + (6.5 * 60 * 60 * 1000));
    return (myanmarTime.getUTCHours() * 60 + myanmarTime.getUTCMinutes()) >= 570 && (myanmarTime.getUTCHours() * 60 + myanmarTime.getUTCMinutes()) < 1290;
}

function updateLanguage() {
    const d = LANG_DATA[currentLang]; if (!d) return;
    const ids = ['appName','appSub','greeting','welcomeTitle','subtitle','goToShop','shopSubText','servicesTitle','s1','s2','s3','s4','s5','s6','telegramTitle','telegramDesc','contactLabel','contactUsername','navHome','navShop','navPayment','navProfile','pageTitleShop','pageSubShop','gamesTitle','mlbbSub','mcggSub','cs1','cs2','cs1sub','cs2sub','paymentTitle','paymentSub','accountsTitle','waveName','kpayName','howToTitle','supportTitle','supportLabel','supportDesc','pageTitleProfile','pageSubProfile','orderHistoryLabel','settingsLabel','changeNameText','changeUsernameText','changeEmailText','changePhoneText','changePasswordText','logoutText','pageTitleMCGG','pageSubMCGG','bundlesTitle','diamondsTitle','doubleTitle','pageTitleNotiLabel','emptyText','clearAllText','modalTitle','modalSub','gameIdLabel','serverIdLabel','gameIdHint','serverIdHint','paymentLabel','uploadLabel','uploadText','waveLabel','kpayLabel','forgotLink','forgotTitle','forgotSub','forgotIdentifyLabel','forgotFindBtn','forgotBackToLogin','otpLabel','resendOtpBtn','verifyOtpBtn','newPassLabel','confirmNewPassLabel','resetPasswordBtn','modalLogin','modalRegister','modalLoginSub','modalRegisterSub','emailLabel','passLabel','loginBtn','registerBtn','switchToRegister','switchToLogin','authModalTitle','authModalSub','authEmailLabel','authPassLabel','authLoginBtn','authRegisterBtn','authSwitchToRegister','authSwitchToLogin','settingsModalTitle','settingsModalSub','settingsFieldLabel','settingsSaveBtn'];
    ids.forEach(id => { const el = document.getElementById(id); if (el && d[id]) el.textContent = d[id]; });
    ['step1','step2','step3','step4'].forEach(id => { const el = document.getElementById(id); if (el && d[id]) el.innerHTML = d[id]; });
    const si = document.getElementById('searchInput'); if (si) si.placeholder = d.searchPlaceholder || '';
    const isOpen = isShopOpen();
    const sb = document.getElementById('statusBadge'); if (sb) { sb.innerHTML = isOpen ? '<span class="status-dot"></span> '+d.shopOpen : '<span class="status-dot"></span> '+d.shopClosedStatus; sb.className = 'banner-status '+(isOpen?'open':'closed'); }
    const st = document.getElementById('statusText'); if (st) st.textContent = isOpen ? d.shopOpenText : d.shopClosedText;
    const sc = document.getElementById('shopCard'); if (sc) { sc.className = 'shop-card '+(isOpen?'open':'closed'); const gts=document.getElementById('goToShop'); if(gts) gts.textContent=isOpen?d.goToShop:d.shopClosed; const sst=document.getElementById('shopSubText'); if(sst) sst.textContent=isOpen?d.shopSubText:d.shopClosedText; }
    const cb1=document.getElementById('copyBtn1'),cb2=document.getElementById('copyBtn2'); if(cb1) cb1.textContent=d.copy||'Copy'; if(cb2) cb2.textContent=d.copy||'Copy';
    const sbtn=document.getElementById('submitBtn'); if(sbtn) sbtn.textContent='✅ '+(d.submit||'Submit');
    updateMLBBHeader();
    const bb=document.getElementById('backBtn'); if(bb) bb.textContent=d.backToShop||'← Back to Shop';
    updateAuthUI();
    if(typeof renderOrders==='function') renderOrders();
    if(typeof loadNotifications==='function') loadNotifications();
    if(typeof renderPackages==='function') renderPackages();
    updateBadge();
}

function updateMLBBHeader() {
    const pt = document.getElementById('pageTitle'); if (!pt) return;
    const d = LANG_DATA[currentLang];
    const map = { global: d.mlbbGlobalPackages, ban: d.mlbbBanPackages, indo: d.mlbbIndoPackages, russia: d.mlbbRussiaPackages };
    if (map[currentServer]) pt.textContent = map[currentServer];
    const bo = document.querySelector('.server-selector .opt[data-server="ban"]');
    if (bo) bo.textContent = currentServer === 'ban' ? '🇲🇾🇸🇬🇵🇭 ' + (d.banServerLabel || 'Ban') : '🇲🇾🇸🇬🇵🇭 Ban';
}

function updateAuthUI() {
    const btn = document.getElementById('authBtn'); if (!btn) return;
    if (currentUser) {
        const fc = (currentUser.displayName || currentUser.username || 'U').charAt(0).toUpperCase();
        const av = localStorage.getItem('userAvatar_' + currentUser.username);
        btn.innerHTML = av ? '<img src="' + av + '"> ' + (currentUser.displayName || currentUser.username) : '<span class="avatar-small">' + fc + '</span> ' + (currentUser.displayName || currentUser.username);
        btn.className = (btn.classList.contains('auth-btn-profile') ? 'auth-btn-profile' : 'auth-btn') + ' logged-in';
    } else {
        btn.innerHTML = '<i class="fas fa-key"></i> Login';
        btn.className = btn.classList.contains('auth-btn-profile') ? 'auth-btn-profile' : 'auth-btn';
    }
    const dn = document.getElementById('displayName'); if (dn) dn.textContent = currentUser ? (currentUser.displayName || currentUser.username) : 'Guest';
    const du = document.getElementById('displayUsername'); if (du) du.innerHTML = '<i class="fas fa-user"></i> @' + (currentUser ? currentUser.username : 'guest');
    const de = document.getElementById('displayEmail'); if (de) de.innerHTML = '<i class="fas fa-envelope"></i> ' + (currentUser ? (currentUser.email || 'No email') : 'No email');
    const dp = document.getElementById('displayPhone'); if (dp) dp.innerHTML = '<i class="fas fa-phone"></i> ' + (currentUser ? (currentUser.phone || 'No phone') : 'No phone');
    const ad = document.getElementById('avatarDisplay'); if (ad && currentUser) { const av = localStorage.getItem('userAvatar_' + currentUser.username); ad.innerHTML = av ? '<img src="' + av + '" style="width:100%;height:100%;object-fit:cover;">' : '👤'; } else if (ad) ad.textContent = '👤';
}

function openAuthModal(mode) {
    const m = document.getElementById('authModal'); if (!m) return; m.classList.add('show');
    const lf = document.getElementById('loginForm'), rf = document.getElementById('registerForm');
    if (mode === 'register') { if (lf) lf.style.display = 'none'; if (rf) rf.style.display = 'block'; }
    else { if (lf) lf.style.display = 'block'; if (rf) rf.style.display = 'none'; }
    updateAuthModalTexts(); checkLoginForm(); checkRegisterForm();
}
function closeAuthModal() { const m = document.getElementById('authModal'); if (m) m.classList.remove('show'); }
function updateAuthModalTexts() {
    const d = LANG_DATA[currentLang];
    const isLogin = !document.getElementById('registerForm') || document.getElementById('registerForm').style.display === 'none';
    const title = document.getElementById('modalTitle') || document.getElementById('authModalTitle'); if (title) title.textContent = isLogin ? d.modalLogin : d.modalRegister;
    const sub = document.getElementById('modalSub') || document.getElementById('authModalSub'); if (sub) sub.textContent = isLogin ? d.modalLoginSub : d.modalRegisterSub;
    const el = document.getElementById('emailLabel') || document.getElementById('authEmailLabel'); if (el) el.textContent = d.email;
    const pl = document.getElementById('passLabel') || document.getElementById('authPassLabel'); if (pl) pl.textContent = d.password;
    const lb = document.getElementById('loginBtn') || document.getElementById('authLoginBtn'); if (lb) lb.textContent = d.login;
    const rb = document.getElementById('registerBtn') || document.getElementById('authRegisterBtn'); if (rb) rb.textContent = d.register;
    const sr = document.getElementById('switchToRegister') || document.getElementById('authSwitchToRegister'); if (sr) sr.textContent = d.switchLogin;
    const sl = document.getElementById('switchToLogin') || document.getElementById('authSwitchToLogin'); if (sl) sl.textContent = d.switchRegister;
    const fl = document.getElementById('forgotLink'); if (fl) fl.textContent = d.forgotPassword || 'Forgot Password?';
}
function checkLoginForm() {
    const li = document.getElementById('loginInput') || document.getElementById('authLoginInput');
    const lp = document.getElementById('loginPassword') || document.getElementById('authLoginPassword');
    const lb = document.getElementById('loginBtn') || document.getElementById('authLoginBtn');
    if (!li || !lp || !lb) return;
    const v = li.value.trim() && lp.value.trim();
    lb.disabled = !v; lb.className = v ? 'btn-primary enabled' : 'btn-primary';
}
function checkRegisterForm() {
    const ru = document.getElementById('regUsername') || document.getElementById('authRegUsername');
    const rp = document.getElementById('regPassword') || document.getElementById('authRegPassword');
    const rc = document.getElementById('regConfirmPassword') || document.getElementById('authRegConfirmPassword');
    const rb = document.getElementById('registerBtn') || document.getElementById('authRegisterBtn');
    if (!ru || !rp || !rc || !rb) return;
    const v = ru.value.trim() && rp.value.trim() && rc.value.trim() && rp.value.trim() === rc.value.trim();
    rb.disabled = !v; rb.className = v ? 'btn-primary enabled' : 'btn-primary';
}
function handleAuthLogin() {
    const li = document.getElementById('loginInput') || document.getElementById('authLoginInput');
    const lp = document.getElementById('loginPassword') || document.getElementById('authLoginPassword');
    const err = document.getElementById('loginError') || document.getElementById('authError');
    const d = LANG_DATA[currentLang]; if (!li || !lp) return;
    const input = li.value.trim(), password = lp.value.trim();
    if (err) { err.style.display = 'none'; err.textContent = ''; }
    if (!input || !password) { if (err) { err.textContent = d.invalidCredentials; err.style.display = 'block'; } return; }
    const users = JSON.parse(localStorage.getItem('users') || '{}'); let found = null;
    for (const key in users) { const u = users[key]; if (key === input || u.email === input || u.username === input || u.phone === input) { if (u.password === password) { found = u; break; } } }
    if (found) { currentUser = found; localStorage.setItem('currentUser', JSON.stringify(currentUser)); closeAuthModal(); showToast(d.loginSuccess, 'success'); updateAuthUI(); updateBadge(); if (typeof renderOrders === 'function') renderOrders(); }
    else { if (err) { err.textContent = d.invalidCredentials; err.style.display = 'block'; } }
}
function handleAuthRegister() {
    const ru = document.getElementById('regUsername') || document.getElementById('authRegUsername');
    const re = document.getElementById('regEmail') || document.getElementById('authRegEmail');
    const rph = document.getElementById('regPhone') || document.getElementById('authRegPhone');
    const rpw = document.getElementById('regPassword') || document.getElementById('authRegPassword');
    const rc = document.getElementById('regConfirmPassword') || document.getElementById('authRegConfirmPassword');
    const err = document.getElementById('loginError') || document.getElementById('authError');
    const d = LANG_DATA[currentLang]; if (!ru || !rpw || !rc) return;
    const username = ru.value.trim(), email = re ? re.value.trim() : '', phone = rph ? rph.value.trim() : '';
    const password = rpw.value.trim(), confirm = rc.value.trim();
    if (err) { err.style.display = 'none'; err.textContent = ''; }
    if (!username || !password || !confirm) return;
    if (password.length < 4) { if (err) { err.textContent = 'Password min 4 chars'; err.style.display = 'block'; } return; }
    if (password !== confirm) { if (err) { err.textContent = d.settingsPassError; err.style.display = 'block'; } return; }
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    for (const key in users) { if (key === username || (email && users[key].email === email) || (phone && users[key].phone === phone)) { if (err) { err.textContent = '❌ Already exists'; err.style.display = 'block'; } return; } }
    const newUser = { username, email, phone, password, displayName: username, diamonds: 100, createdAt: new Date().toISOString() };
    users[username] = newUser; localStorage.setItem('users', JSON.stringify(users));
    currentUser = newUser; localStorage.setItem('currentUser', JSON.stringify(currentUser));
    closeAuthModal(); showToast(d.registerSuccess, 'success'); updateAuthUI(); updateBadge(); if (typeof renderOrders === 'function') renderOrders();
}

let settingsModalMode = '';
function openSettingsModal(mode) {
    if (!currentUser) return; settingsModalMode = mode;
    const m = document.getElementById('settingsModal'); if (!m) return; m.classList.add('show');
    const d = LANG_DATA[currentLang];
    const cfg = { name: { t: d.settingsNameTitle, s: d.settingsNameSub, l: d.settingsNameLabel, tp: 'text' }, username: { t: d.settingsUsernameTitle, s: d.settingsUsernameSub, l: d.settingsUsernameLabel, tp: 'text' }, email: { t: d.settingsEmailTitle, s: d.settingsEmailSub, l: d.settingsEmailLabel, tp: 'email' }, phone: { t: d.settingsPhoneTitle, s: d.settingsPhoneSub, l: d.settingsPhoneLabel, tp: 'tel' }, password: { t: d.settingsPassTitle, s: d.settingsPassSub, l: d.settingsPassLabel, tp: 'password', cf: true } }[mode];
    if (!cfg) return;
    document.getElementById('settingsModalTitle').textContent = cfg.t; document.getElementById('settingsModalSub').textContent = cfg.s;
    document.getElementById('settingsFieldLabel').textContent = cfg.l;
    const inp = document.getElementById('settingsInput'); inp.type = cfg.tp; inp.value = '';
    document.getElementById('settingsConfirmGroup').style.display = cfg.cf ? 'block' : 'none';
    if (cfg.cf) document.getElementById('settingsConfirmInput').value = '';
    document.getElementById('settingsSaveBtn').textContent = d.settingsSave;
}
function closeSettingsModal() { const m = document.getElementById('settingsModal'); if (m) m.classList.remove('show'); }
function saveSettings() {
    const inp = document.getElementById('settingsInput'), err = document.getElementById('settingsError'), d = LANG_DATA[currentLang];
    if (!inp) return; const v = inp.value.trim(); if (err) err.style.display = 'none';
    if (!v) { if (err) { err.textContent = d.settingsError; err.style.display = 'block'; } return; }
    if (settingsModalMode === 'password') { const ci = document.getElementById('settingsConfirmInput'); if (ci && v !== ci.value.trim()) { if (err) { err.textContent = d.settingsPassError; err.style.display = 'block'; } return; } }
    const users = JSON.parse(localStorage.getItem('users') || '{}'); const ud = users[currentUser.username]; if (!ud) return;
    if (settingsModalMode === 'name') { ud.displayName = v; currentUser.displayName = v; }
    else if (settingsModalMode === 'username') { if (v !== currentUser.username && users[v]) { if (err) { err.textContent = d.settingsUsernameExists; err.style.display = 'block'; } return; } users[v] = ud; delete users[currentUser.username]; currentUser.username = v; }
    else if (settingsModalMode === 'email') { ud.email = v; currentUser.email = v; }
    else if (settingsModalMode === 'phone') { ud.phone = v; currentUser.phone = v; }
    else if (settingsModalMode === 'password') { ud.password = v; }
    if (settingsModalMode !== 'username') users[currentUser.username] = ud;
    localStorage.setItem('users', JSON.stringify(users)); localStorage.setItem('currentUser', JSON.stringify(currentUser));
    closeSettingsModal(); updateAuthUI(); showToast(d.saveSuccess, 'success');
}
function logout() { if (!currentUser) return; document.getElementById('logoutOverlay').classList.add('show'); }

let fpUser = null, fpOTP = null, otpTimer = null, otpSec = 0, otpOk = true;
function openForgotPasswordModal() {
    closeAuthModal(); const m = document.getElementById('forgotPasswordModal'); if (!m) return;
    document.getElementById('forgotStep1').style.display = 'block'; document.getElementById('forgotStep2').style.display = 'none'; document.getElementById('forgotStep3').style.display = 'none';
    ['forgotIdentify', 'otpInput', 'newPassword', 'confirmNewPassword'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    const err = document.getElementById('forgotError'); if (err) { err.classList.remove('show'); err.textContent = ''; }
    const suc = document.getElementById('forgotSuccess'); if (suc) { suc.classList.remove('show'); suc.textContent = ''; }
    fpUser = null; fpOTP = null; clearInterval(otpTimer); otpSec = 0; otpOk = true;
    document.getElementById('resendOtpBtn').disabled = false; document.getElementById('otpTimer').textContent = '';
    m.classList.add('show');
}
function closeForgotPasswordModal() { document.getElementById('forgotPasswordModal').classList.remove('show'); clearInterval(otpTimer); }
function findAccount() {
    const id = document.getElementById('forgotIdentify').value.trim();
    const err = document.getElementById('forgotError'); const d = LANG_DATA[currentLang];
    err.classList.remove('show'); err.textContent = '';
    if (!id) { err.textContent = d.invalidCredentials; err.classList.add('show'); return; }
    const users = JSON.parse(localStorage.getItem('users') || '{}'); let found = null;
    for (const key in users) { if (key === id || users[key].email === id || users[key].phone === id) { found = users[key]; break; } }
    if (!found) { err.textContent = d.accountNotFound; err.classList.add('show'); return; }
    fpUser = found; fpOTP = Math.floor(100000 + Math.random() * 900000).toString();
    sendOTPToTelegram(found, fpOTP);
    document.getElementById('forgotStep1').style.display = 'none'; document.getElementById('forgotStep2').style.display = 'block';
    document.getElementById('otpSentMsg').innerHTML = '✅ OTP sent to Telegram.'; startOTPTimer();
}
async function sendOTPToTelegram(user, otp) {
    try { await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: `🔐 OTP: ${otp}\n👤 @${user.username}\n📞 ${user.phone || 'N/A'}\n📧 ${user.email || 'N/A'}` }) }); } catch (e) {}
}
function startOTPTimer() { otpSec = 60; otpOk = false; document.getElementById('resendOtpBtn').disabled = true; document.getElementById('otpTimer').textContent = '60s'; clearInterval(otpTimer); otpTimer = setInterval(() => { otpSec--; document.getElementById('otpTimer').textContent = otpSec > 0 ? `${otpSec}s` : 'Resend available'; if (otpSec <= 0) { clearInterval(otpTimer); otpOk = true; document.getElementById('resendOtpBtn').disabled = false; } }, 1000); }
function resendOTP() { if (!otpOk || !fpUser) return; fpOTP = Math.floor(100000 + Math.random() * 900000).toString(); sendOTPToTelegram(fpUser, fpOTP); startOTPTimer(); }
function verifyOTP() { const oi = document.getElementById('otpInput').value.trim(); const err = document.getElementById('forgotError'); err.classList.remove('show'); err.textContent = ''; if (oi !== fpOTP) { err.textContent = '❌ Invalid OTP'; err.classList.add('show'); return; } document.getElementById('forgotStep2').style.display = 'none'; document.getElementById('forgotStep3').style.display = 'block'; clearInterval(otpTimer); }
function resetPassword() {
    const np = document.getElementById('newPassword').value.trim(), cp = document.getElementById('confirmNewPassword').value.trim();
    const err = document.getElementById('forgotError'), suc = document.getElementById('forgotSuccess'), d = LANG_DATA[currentLang];
    err.classList.remove('show'); err.textContent = ''; if (!np || !cp) { err.textContent = '❌ Fill all fields'; err.classList.add('show'); return; }
    if (np !== cp) { err.textContent = d.settingsPassError; err.classList.add('show'); return; }
    const users = JSON.parse(localStorage.getItem('users') || '{}'); users[fpUser.username].password = np;
    localStorage.setItem('users', JSON.stringify(users));
    suc.textContent = d.forgotPasswordSuccess; suc.classList.add('show');
    setTimeout(() => { closeForgotPasswordModal(); openAuthModal('login'); }, 2000);
}

function searchGames(q) { const query = q.toLowerCase().trim(); document.querySelectorAll('.game-item').forEach(item => { item.classList.toggle('hidden', query !== '' && !(item.dataset.name || '').includes(query)); }); document.getElementById('clearBtn').classList.toggle('show', query.length > 0); }
function clearSearch() { const inp = document.getElementById('searchInput'); if (inp) { inp.value = ''; searchGames(''); } document.getElementById('clearBtn').classList.remove('show'); }
function selectGame(gameName, gameId, event) { event.currentTarget.classList.add('bounce-click'); setTimeout(() => event.currentTarget.classList.remove('bounce-click'), 350); localStorage.setItem('selectedGame', JSON.stringify({ name: gameName, id: gameId })); setTimeout(() => { window.location.href = gameId === 'mlbb' ? 'mlbb-packages.html' : 'mcgg-packages.html'; }, 500); }
function showComingSoon() { showToast(getText('comingSoonMsg')); }

const PACKAGES = { global: { bundles: [{ id: 'g_b1', name: 'Monthly Epic Bundle', price: 17300, img: 'https://files.catbox.moe/z2j5uo.png', twoLine: true, line1: 'Monthly Epic', line2: 'Bundle' }, { id: 'g_b2', name: 'Weekly Elite Bundle', price: 3600, img: 'https://files.catbox.moe/i3uywg.png', twoLine: true, line1: 'Weekly Elite', line2: 'Bundle' }, { id: 'g_b3', name: 'Weekly Pass', price: 6500, img: 'https://files.catbox.moe/zylral.png', twoLine: true, line1: 'Weekly', line2: 'Pass' }, { id: 'g_b4', name: 'Twilight Pass', price: 34000, img: 'https://files.catbox.moe/jshuuy.png' }], double: [{ id: 'g_x1', name: '50+50', price: 3550, img: 'https://files.catbox.moe/z376wd.png' }, { id: 'g_x2', name: '150+150', price: 9900, img: 'https://files.catbox.moe/kf0960.png' }, { id: 'g_x3', name: '250+250', price: 15800, img: 'https://files.catbox.moe/jm3ty7.png' }, { id: 'g_x4', name: '500+500', price: 32100, img: 'https://files.catbox.moe/aprnoc.png' }], diamonds: [{ id: 'g_d1', name: '11', price: 750, img: 'https://files.catbox.moe/xaxejk.png' }, { id: 'g_d5', name: '56', price: 3800, img: 'https://files.catbox.moe/4mb7sd.png' }, { id: 'g_d11', name: '514', price: 29600, img: 'https://files.catbox.moe/k23p6t.png' }] }, ban: { bundles: [{ id: 'b_b1', name: 'Weekly Pass', price: 9400, img: 'https://files.catbox.moe/zylral.png', twoLine: true, line1: 'Weekly', line2: 'Pass' }], double: [{ id: 'b_x1', name: '55', price: 4500, img: 'https://files.catbox.moe/z376wd.png' }], diamonds: [{ id: 'b_d1', name: '14', price: 1300, img: 'https://files.catbox.moe/xaxejk.png' }] }, indo: { bundles: [{ id: 'i_b1', name: 'Weekly Pass', price: 8700, img: 'https://files.catbox.moe/zylral.png', twoLine: true, line1: 'Weekly', line2: 'Pass' }], diamonds: [{ id: 'i_d1', name: '5', price: 700, img: 'https://files.catbox.moe/xaxejk.png' }] }, russia: { bundles: [{ id: 'r_b1', name: 'Weekly Pass', price: 9750, img: 'https://files.catbox.moe/zylral.png', twoLine: true, line1: 'Weekly', line2: 'Pass' }], diamonds: [{ id: 'r_d1', name: '35', price: 3100, img: 'https://files.catbox.moe/xaxejk.png' }] } };
const SERVER_NAMES = { global: 'Global', indo: 'Indo', russia: 'Russia', ban: 'Ban' };
const SERVER_EMOJIS = { global: '🌍', indo: '🇮🇩', russia: '🇷🇺', ban: '🇲🇾🇸🇬🇵🇭' };
let currentServer = 'global', selectedPackage = null, selectedPayment = null, isSubmitting = false, lastUpdateId = 0;
function renderItems(items, containerId, isDouble) { const c = document.getElementById(containerId); if (!c || !items) return; c.innerHTML = items.map(p => { const sel = selectedPackage && selectedPackage.id === p.id; return `<div class="package-item ${sel ? 'selected' : ''} ${isDouble ? 'double-item' : ''}" onclick="selectMLBBPackage('${p.id}','${p.name}',${p.price})"><img src="${p.img}" class="pkg-img" onerror="this.style.display='none'"><div class="info"><div class="name">${p.twoLine ? `<span class="line1">${p.line1}</span><span class="line2">${p.line2}</span>` : p.name}</div></div><div class="price-text">${p.price.toLocaleString()} Ks</div><div class="server-name"><span class="btn-label">${SERVER_EMOJIS[currentServer]} ${SERVER_NAMES[currentServer]}</span><button class="buy-btn" onclick="event.stopPropagation();buyMLBBPackage('${p.id}','${p.name}',${p.price})">Top Up</button></div></div>`; }).join(''); }
function renderAllPackages() { Object.keys(PACKAGES).forEach(s => { if (PACKAGES[s].bundles) renderItems(PACKAGES[s].bundles, s + 'Bundles'); if (PACKAGES[s].double) renderItems(PACKAGES[s].double, s + 'Double', true); if (PACKAGES[s].diamonds) renderItems(PACKAGES[s].diamonds, s + 'Diamonds'); }); }
function selectMLBBPackage(id, name, price) { selectedPackage = selectedPackage && selectedPackage.id === id ? null : { id, name, price }; renderAllPackages(); }
function buyMLBBPackage(id, name, price) { if (!selectedPackage || selectedPackage.id !== id) selectedPackage = { id, name, price }; renderAllPackages(); openCheckout(name, price); }
function switchServer(s) { currentServer = s; document.querySelectorAll('.server-selector .opt').forEach(o => o.classList.toggle('active', o.dataset.server === s)); ['globalSection', 'banSection', 'indoSektion', 'russiaSection'].forEach(sec => { const el = document.getElementById(sec); if (el) el.style.display = 'none'; }); const m = { global: 'globalSection', ban: 'banSection', indo: 'indoSektion', russia: 'russiaSection' }; const el = document.getElementById(m[s]); if (el) el.style.display = 'block'; selectedPackage = null; updateMLBBHeader(); renderAllPackages(); }
function searchItems(q) { document.querySelectorAll('.package-item').forEach(item => { const n = item.querySelector('.name')?.textContent?.toLowerCase() || ''; item.classList.toggle('hidden', !n.includes(q.toLowerCase()) && q !== ''); }); }

const MCGG_PACKAGES = { bundles: [{ id: 'b1', name: 'MCGG Weekly Pass', price: 7400, img: 'https://files.catbox.moe/zylral.png', sub: '💎 Weekly Pass' }], diamonds: [{ id: 'd1', name: '11', price: 1000, img: 'https://files.catbox.moe/xaxejk.png' }, { id: 'd2', name: '22', price: 1900, img: 'https://files.catbox.moe/xaxejk.png' }, { id: 'd3', name: '56', price: 3900, img: 'https://files.catbox.moe/4mb7sd.png' }, { id: 'd4', name: '86', price: 6000, img: 'https://files.catbox.moe/4mb7sd.png' }, { id: 'd5', name: '172', price: 11100, img: 'https://files.catbox.moe/ogchrl.png' }, { id: 'd6', name: '257', price: 16800, img: 'https://files.catbox.moe/ogchrl.png' }, { id: 'd7', name: '344', price: 23000, img: 'https://files.catbox.moe/ocznqy.png' }, { id: 'd8', name: '516', price: 33100, img: 'https://files.catbox.moe/k23p6t.png' }, { id: 'd9', name: '706', price: 44000, img: 'https://files.catbox.moe/qwnqog.png' }, { id: 'd10', name: '1346', price: 79500, img: 'https://files.catbox.moe/zjcnar.png' }, { id: 'd11', name: '1825', price: 107500, img: 'https://files.catbox.moe/co1w7w.png' }, { id: 'd12', name: '2195', price: 128500, img: 'https://files.catbox.moe/b5bg2m.png' }, { id: 'd13', name: '3688', price: 200400, img: 'https://files.catbox.moe/z0c6rj.png' }, { id: 'd14', name: '5532', price: 312600, img: 'https://files.catbox.moe/pn69zi.png' }, { id: 'd15', name: '9288', price: 510600, img: 'https://files.catbox.moe/pn69zi.png' }], double: [{ id: 'x1', name: '50+50 (55)', price: 3800, img: 'https://files.catbox.moe/z376wd.png', badge: true }, { id: 'x2', name: '150+150 (165)', price: 11200, img: 'https://files.catbox.moe/kf0960.png', badge: true }, { id: 'x3', name: '250+250 (275)', price: 18800, img: 'https://files.catbox.moe/jm3ty7.png', badge: true }, { id: 'x4', name: '500+500 (565)', price: 35000, img: 'https://files.catbox.moe/aprnoc.png', badge: true }] };
let smp = null, smPay = null, smSub = false;
function renderPackages() { const d = LANG_DATA[currentLang]; const ri = (items) => items.map(p => { const sel = smp && smp.id === p.id; return `<div class="package-item ${sel ? 'selected' : ''}" onclick="handleMCGGPC('${p.id}','${p.name}',${p.price})"><div class="info"><img src="${p.img}" class="pkg-img" onerror="this.style.display='none'"><div class="name">${p.name}</div>${p.sub ? `<div class="sub">${p.sub}</div>` : ''}${p.badge ? `<span class="badge">${d.doubleBadge}</span>` : ''}</div><div class="right"><span class="price">${p.price.toLocaleString()} ${d.currency}</span><span class="btn-label">${d.selectLabel}</span><button class="buy-btn" onclick="event.stopPropagation();handleMCGGBC('${p.id}','${p.name}',${p.price})">${d.buy}</button></div></div>`; }).join(''); document.getElementById('bundlesList').innerHTML = ri(MCGG_PACKAGES.bundles); document.getElementById('diamondsList').innerHTML = ri(MCGG_PACKAGES.diamonds); document.getElementById('doubleList').innerHTML = ri(MCGG_PACKAGES.double); }
function handleMCGGPC(id, name, price) { smp = smp && smp.id === id ? null : { id, name, price }; renderPackages(); }
function handleMCGGBC(id, name, price) { if (!smp || smp.id !== id) smp = { id, name, price }; renderPackages(); openCheckout(name, price); }

function openCheckout(name, price) { const m = document.getElementById('checkoutModal'); if (!m) return; document.getElementById('modalPackage').textContent = name; document.getElementById('modalPrice').textContent = price.toLocaleString() + ' Ks'; m.classList.add('show'); document.getElementById('gameId').value = ''; document.getElementById('serverId').value = ''; const msg = document.getElementById('orderMessage'); if (msg) msg.value = ''; const fi = document.getElementById('fileInput'); if (fi) fi.value = ''; const fub = document.getElementById('fileUploadBox'); if (fub) fub.classList.remove('has-file'); document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected')); document.getElementById('waveInfo').classList.remove('show'); document.getElementById('kpayInfo').classList.remove('show'); selectedPayment = null; smPay = null; const sb = document.getElementById('submitBtn'); if (sb) { sb.disabled = true; sb.className = 'btn-primary'; } }
function closeCheckout() { if (!isSubmitting) document.getElementById('checkoutModal').classList.remove('show'); }
function closeCheckoutModal() { if (!smSub) document.getElementById('checkoutModal').classList.remove('show'); }
function selectPayment(type) { selectedPayment = type; smPay = type; document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected')); const el = document.querySelector(`[data-payment="${type}"]`); if (el) el.classList.add('selected'); document.getElementById('waveInfo').classList.toggle('show', type === 'wave'); document.getElementById('kpayInfo').classList.toggle('show', type === 'kpay'); checkForm(); }
function handleFileSelect() { const fi = document.getElementById('fileInput'); if (fi && fi.files[0]) { document.getElementById('fileUploadBox').classList.add('has-file'); const fu = document.getElementById('fileUpload'); if (fu) fu.classList.add('has-file'); const fn = document.getElementById('fileName'); if (fn) { fn.textContent = '✅ ' + fi.files[0].name; fn.classList.add('show'); } } checkForm(); }
function checkForm() { const g = document.getElementById('gameId'), s = document.getElementById('serverId'), f = document.getElementById('fileInput'), b = document.getElementById('submitBtn'); if (!g || !s || !f || !b) return; const v = (selectedPayment || smPay) && g.value.trim() && s.value.trim() && f.files[0] && !isSubmitting && !smSub; b.disabled = !v; b.className = v ? 'btn-primary enabled' : 'btn-primary'; }

async function submitOrder() { if (isSubmitting || smSub) return; const gid = document.getElementById('gameId').value.trim(), sid = document.getElementById('serverId').value.trim(), file = document.getElementById('fileInput').files[0], msg = (document.getElementById('orderMessage') || {}).value || ''; const pay = selectedPayment || smPay; if (!gid || !sid || !pay || !file) return; const isMCGG = window.location.href.includes('mcgg'); if (isMCGG) smSub = true; else isSubmitting = true; const b = document.getElementById('submitBtn'); b.disabled = true; b.className = 'btn-primary loading'; b.textContent = getText('submitting'); const oid = 'ORD-' + Date.now().toString().slice(-6); const pkg = document.getElementById('modalPackage').textContent; const price = document.getElementById('modalPrice').textContent; const server = isMCGG ? 'Global' : SERVER_EMOJIS[currentServer] + ' ' + SERVER_NAMES[currentServer]; const pname = pay === 'wave' ? 'Wave Pay' : 'KBZ Pay'; const un = currentUser ? currentUser.username : 'Guest'; const time = new Date().toLocaleString(); let pb = null; try { pb = await new Promise(r => { const rd = new FileReader(); rd.onload = e => r(e.target.result); rd.readAsDataURL(file); }); } catch (e) {} try { const blb = await fetch(pb).then(r => r.blob()); const fd = new FormData(); fd.append('chat_id', TELEGRAM_CHAT_ID); fd.append('photo', blb, 'slip.jpg'); fd.append('caption', `🛒 New Order!\n👤 ${un}\n📦 ${pkg}\n💰 ${price}\n🆔 ${gid}\n🔢 ${sid}\n📋 ${oid}\n🕐 ${time}`); fd.append('reply_markup', JSON.stringify({ inline_keyboard: [[{ text: '✅ Done', callback_data: 'done_' + oid }, { text: '❌ Failed', callback_data: 'fail_' + oid }]] })); await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`, { method: 'POST', body: fd }); } catch (e) {} const orders = JSON.parse(localStorage.getItem('orderHistory') || '[]'); orders.unshift({ id: oid, userId: un, package: pkg, server, price, gameId: gid, serverId: sid, payment: pname, message: msg, date: new Date().toISOString(), status: 'pending', replies: [] }); localStorage.setItem('orderHistory', JSON.stringify(orders)); const notis = JSON.parse(localStorage.getItem('notifications') || '[]'); notis.unshift({ id: 'noti_' + Date.now(), orderId: oid, type: 'order', status: 'pending', message: `🛒 အော်ဒါအသစ် #${oid}\n👤 ${un}\n📦 ${pkg}\n💰 ${price}\n⏳ ဆောင်ရွက်နေဆဲ`, time }); localStorage.setItem('notifications', JSON.stringify(notis)); document.getElementById('checkoutModal').classList.remove('show'); const sd = document.getElementById('successDetails'); if (sd) sd.innerHTML = `<div class="row"><span>အော်ဒါအမှတ်</span><span>${oid}</span></div><div class="row"><span>ပက်ကေ့ချ်</span><span>${pkg}</span></div><div class="row"><span>ဈေးနှုန်း</span><span>${price}</span></div>`; document.getElementById('successModal').classList.add('show'); updateBadge(); if (isMCGG) smSub = false; else isSubmitting = false; b.disabled = false; b.className = 'btn-primary enabled'; b.textContent = '✅ ' + getText('submit'); }
function goProfileFromSuccess() { document.getElementById('successModal').classList.remove('show'); window.location.href = 'profile.html'; }

let cf = 'all', sao = false;
function renderOrders() { const c = document.getElementById('orderHistoryContainer'); if (!c) return; const d = LANG_DATA[currentLang]; if (!currentUser) { c.innerHTML = '<div class="empty-orders"><span class="icon">🔒</span>Please login</div>'; return; } let orders = JSON.parse(localStorage.getItem('orderHistory') || '[]').filter(o => o.userId === currentUser.username); if (cf !== 'all') orders = orders.filter(o => o.status === cf); const sq = document.getElementById('orderSearch')?.value?.toLowerCase().trim(); if (sq) orders = orders.filter(o => o.id.toLowerCase().includes(sq)); if (!orders.length) { c.innerHTML = '<div class="empty-orders"><span class="icon">📭</span>' + d.noOrders + '</div>'; return; } const sm = { pending: { class: 'pending', text: d.orderStatusPending }, completed: { class: 'completed', text: d.orderStatusCompleted }, cancelled: { class: 'cancelled', text: d.orderStatusCancelled } }; const disp = sao ? orders : orders.slice(0, 3); c.innerHTML = '<div class="order-list">' + disp.map(o => `<div class="order-item"><div class="info"><span class="id">📋 ${o.id}</span><span class="pkg">${o.package}</span><span class="date">${new Date(o.date).toLocaleString()}</span></div><span class="status ${sm[o.status]?.class || 'pending'}">${sm[o.status]?.text || ''}</span></div>`).join('') + '</div>'; if (orders.length > 3) c.innerHTML += `<div class="order-more" onclick="toggleOrders()"><i class="fas ${sao ? 'fa-chevron-up' : 'fa-chevron-down'}"></i> ${sao ? d.showLess : d.showMore}</div>`; }
function toggleOrders() { sao = !sao; renderOrders(); }

function loadNotifications() { const c = document.getElementById('notiContainer'); if (!c) return; const notis = JSON.parse(localStorage.getItem('notifications') || '[]'); const d = LANG_DATA[currentLang]; if (!notis.length) { c.innerHTML = '<div class="empty">' + d.emptyText + '</div>'; return; } c.innerHTML = notis.map(n => { const icons = { pending: '⏳', completed: '✅', failed: '❌', reply: '💬', info: '🔔' }; return `<div class="noti-card ${n.status || 'info'}"><div class="noti-header"><div class="noti-icon">${icons[n.status] || '🔔'}</div><div class="noti-content"><div class="noti-text">${n.message}</div><div class="noti-time">🕐 ${n.time || ''}</div></div></div></div>`; }).join(''); }
function clearAllNotifications() { localStorage.setItem('notifications', '[]'); loadNotifications(); updateBadge(); showToast(getText('cleared'), 'success'); }

async function checkTelegramUpdates() { try { const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates?offset=${lastUpdateId + 1}`); const data = await res.json(); if (!data.ok || !data.result.length) return; for (const u of data.result) { lastUpdateId = u.update_id; if (u.callback_query) { const [action, orderId] = u.callback_query.data.split('_'); await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/answerCallbackQuery`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ callback_query_id: u.callback_query.id, text: action === 'done' ? '✅ Complete' : '❌ Failed' }) }); const orders = JSON.parse(localStorage.getItem('orderHistory') || '[]'); const order = orders.find(o => o.id === orderId); if (order) { order.status = action === 'done' ? 'completed' : 'failed'; localStorage.setItem('orderHistory', JSON.stringify(orders)); } loadNotifications(); renderOrders(); updateBadge(); } } } catch (e) {} }

function handleAvatarUpload(e) { if (!e.target.files[0] || !currentUser) return; const r = new FileReader(); r.onload = function (ev) { document.getElementById('avatarDisplay').innerHTML = '<img src="' + ev.target.result + '" style="width:100%;height:100%;object-fit:cover;">'; localStorage.setItem('userAvatar_' + currentUser.username, ev.target.result); updateAuthUI(); }; r.readAsDataURL(e.target.files[0]); }

document.addEventListener('DOMContentLoaded', function () {
    currentLang = localStorage.getItem('lang') || 'my'; document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
    const su = localStorage.getItem('currentUser'); if (su) currentUser = JSON.parse(su);
    if (localStorage.getItem('nightMode') === 'true') { document.body.classList.add('night-mode'); const ic = document.querySelector('.night-toggle i'); if (ic) ic.className = 'fas fa-sun'; }
    updateLanguage(); updateBadge();
    if (typeof renderAllPackages === 'function') renderAllPackages();
    if (typeof renderPackages === 'function') renderPackages();
    if (typeof loadNotifications === 'function') loadNotifications();
    if (typeof renderOrders === 'function') renderOrders();
    const nt = document.getElementById('nightToggle') || document.querySelector('.night-toggle'); if (nt) nt.addEventListener('click', toggleNightMode);
    const ab = document.getElementById('authBtn'); if (ab) ab.addEventListener('click', () => { currentUser ? window.location.href = 'profile.html' : openAuthModal('login'); });
    document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', function () { setLang(this.dataset.lang); }));
    document.getElementById('authModal')?.addEventListener('click', function (e) { if (e.target === this) closeAuthModal(); });
    document.getElementById('settingsModal')?.addEventListener('click', function (e) { if (e.target === this) closeSettingsModal(); });
    document.getElementById('logoutOverlay')?.addEventListener('click', function (e) { if (e.target === this) this.classList.remove('show'); });
    document.getElementById('checkoutModal')?.addEventListener('click', function (e) { if (e.target === this) { if (typeof closeCheckout === 'function') closeCheckout(); if (typeof closeCheckoutModal === 'function') closeCheckoutModal(); } });
    document.getElementById('successModal')?.addEventListener('click', function (e) { if (e.target === this) this.classList.remove('show'); });
    document.getElementById('forgotPasswordModal')?.addEventListener('click', function (e) { if (e.target === this) closeForgotPasswordModal(); });
    document.getElementById('switchToRegister')?.addEventListener('click', () => { document.getElementById('loginForm').style.display = 'none'; document.getElementById('registerForm').style.display = 'block'; updateAuthModalTexts(); });
    document.getElementById('switchToLogin')?.addEventListener('click', () => { document.getElementById('loginForm').style.display = 'block'; document.getElementById('registerForm').style.display = 'none'; updateAuthModalTexts(); });
    document.getElementById('authSwitchToRegister')?.addEventListener('click', () => { document.getElementById('loginForm').style.display = 'none'; document.getElementById('registerForm').style.display = 'block'; updateAuthModalTexts(); });
    document.getElementById('authSwitchToLogin')?.addEventListener('click', () => { document.getElementById('loginForm').style.display = 'block'; document.getElementById('registerForm').style.display = 'none'; updateAuthModalTexts(); });
    (document.getElementById('loginBtn') || document.getElementById('authLoginBtn'))?.addEventListener('click', handleAuthLogin);
    (document.getElementById('registerBtn') || document.getElementById('authRegisterBtn'))?.addEventListener('click', handleAuthRegister);
    document.getElementById('loginInput')?.addEventListener('input', checkLoginForm);
    document.getElementById('authLoginInput')?.addEventListener('input', checkLoginForm);
    document.getElementById('loginPassword')?.addEventListener('input', checkLoginForm);
    document.getElementById('authLoginPassword')?.addEventListener('input', checkLoginForm);
    document.getElementById('regUsername')?.addEventListener('input', checkRegisterForm);
    document.getElementById('authRegUsername')?.addEventListener('input', checkRegisterForm);
    document.getElementById('regPassword')?.addEventListener('input', checkRegisterForm);
    document.getElementById('authRegPassword')?.addEventListener('input', checkRegisterForm);
    document.getElementById('regConfirmPassword')?.addEventListener('input', checkRegisterForm);
    document.getElementById('authRegConfirmPassword')?.addEventListener('input', checkRegisterForm);
    document.getElementById('logoutConfirmBtn')?.addEventListener('click', () => { document.getElementById('logoutOverlay').classList.remove('show'); localStorage.removeItem('currentUser'); currentUser = null; updateAuthUI(); showToast(getText('logoutSuccess'), 'success'); setTimeout(() => window.location.href = 'index.html', 1500); });
    document.getElementById('logoutCancelBtn')?.addEventListener('click', () => document.getElementById('logoutOverlay').classList.remove('show'));
    document.getElementById('settingsSaveBtn')?.addEventListener('click', saveSettings);
    document.querySelectorAll('.filter-btn').forEach(b => b.addEventListener('click', function () { cf = this.dataset.filter; document.querySelectorAll('.filter-btn').forEach(x => x.classList.toggle('active', x.dataset.filter === cf)); renderOrders(); }));
    document.getElementById('orderSearch')?.addEventListener('input', renderOrders);
    document.getElementById('gameId')?.addEventListener('input', checkForm);
    document.getElementById('serverId')?.addEventListener('input', checkForm);
    document.getElementById('fileInput')?.addEventListener('change', handleFileSelect);
    document.querySelectorAll('.payment-option').forEach(el => el.addEventListener('click', function () { selectPayment(this.dataset.payment); }));
    document.getElementById('avatarInput')?.addEventListener('change', handleAvatarUpload);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeAuthModal(); closeSettingsModal(); document.getElementById('logoutOverlay')?.classList.remove('show'); } });
    setInterval(checkTelegramUpdates, 3000);
    window.addEventListener('storage', function (e) { if (e.key === 'newOrderNotification' || e.key === 'notifications') updateBadge(); if (e.key === 'currentUser') { currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null'); updateAuthUI(); if (typeof renderOrders === 'function') renderOrders(); } });
    if (window.location.href.includes('notifications')) { const notis = JSON.parse(localStorage.getItem('notifications') || '[]'); notis.forEach(n => { if (n.status === 'pending') n.status = 'info'; }); localStorage.setItem('notifications', JSON.stringify(notis)); updateBadge(); }
});
