// Demo Configuration
        const DEMO_MODE = true;
        const LOCAL_STORAGE_PREFIX = 'pospalDemoCoffeeDesktop_';

        // Demo Menu Data
        const MOCK_MENU_DATA = {
            "Καφέδες & Ροφήματα": [
                {"id": 1, "name": "Espresso μονός", "price": 2.20, "hasGeneralOptions": true, "generalOptions": [{"name": "Decaf", "priceChange": 0.00}, {"name": "Extra shot", "priceChange": 0.80}]},
                {"id": 2, "name": "Espresso διπλός", "price": 2.90, "hasGeneralOptions": true, "generalOptions": [{"name": "Decaf", "priceChange": 0.00}, {"name": "Extra shot", "priceChange": 0.80}]},
                {"id": 3, "name": "Cappuccino", "price": 3.40, "hasGeneralOptions": true, "generalOptions": [{"name": "Γάλα βρώμης", "priceChange": 0.60}, {"name": "Σιρόπι βανίλια", "priceChange": 0.50}]},
                {"id": 4, "name": "Flat white", "price": 3.60, "hasGeneralOptions": true, "generalOptions": [{"name": "Γάλα βρώμης", "priceChange": 0.60}]},
                {"id": 5, "name": "Latte", "price": 3.80, "hasGeneralOptions": true, "generalOptions": [{"name": "Γάλα αμυγδάλου", "priceChange": 0.60}, {"name": "Σιρόπι καραμέλα", "priceChange": 0.50}]},
                {"id": 6, "name": "Americano", "price": 2.80, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 7, "name": "Φρέντο espresso", "price": 3.20, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 8, "name": "Φρέντο cappuccino", "price": 3.90, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 9, "name": "Ελληνικός", "price": 2.00, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 10, "name": "Τσάι Earl Grey", "price": 2.60, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 11, "name": "Ζεστή σοκολάτα", "price": 3.60, "hasGeneralOptions": false, "generalOptions": []}
            ],
            "Brunch": [
                {"id": 20, "name": "Τοστ αβοκάντο με αυγό ποσέ", "price": 7.20, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 21, "name": "Ομελέτα λαχανικών", "price": 6.80, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 22, "name": "Στραπατσάδα", "price": 6.40, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 23, "name": "Γιαούρτι με granola & μέλι", "price": 4.80, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 24, "name": "Pancakes με μέλι", "price": 5.40, "hasGeneralOptions": false, "generalOptions": []}
            ],
            "Σνακ & Σάντουιτς": [
                {"id": 30, "name": "Τοστ γαλοπούλα-τυρί", "price": 3.60, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 31, "name": "Σάντουιτς κοτόπουλο", "price": 6.20, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 32, "name": "Club sandwich", "price": 7.40, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 33, "name": "Bagel με τυρί κρέμα & γαλοπούλα", "price": 5.80, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 34, "name": "Μπάρα δημητριακών", "price": 2.40, "hasGeneralOptions": false, "generalOptions": []}
            ],
            "Κυρίως (Απλά πιάτα)": [
                {"id": 40, "name": "Σπαγγέτι ναπολιτάνα", "price": 8.60, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 41, "name": "Σπαγγέτι καρμπονάρα", "price": 10.20, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 42, "name": "Πέννες κοτόπουλο & κρέμα", "price": 10.60, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 43, "name": "Ριζότο μανιταριών", "price": 9.80, "hasGeneralOptions": false, "generalOptions": []}
            ],
            "Μπύρες": [
                {"id": 50, "name": "Lager 330ml", "price": 3.40, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 51, "name": "Lager 500ml", "price": 4.60, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 52, "name": "Weiss 500ml", "price": 5.20, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 53, "name": "IPA 330ml", "price": 4.80, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 54, "name": "Χωρίς αλκοόλ 330ml", "price": 3.20, "hasGeneralOptions": false, "generalOptions": []}
            ],
            "Αναψυκτικά & Χυμοί": [
                {"id": 60, "name": "Νερό εμφιαλωμένο 500ml", "price": 1.20, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 61, "name": "Ανθρακούχο νερό 500ml", "price": 1.60, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 62, "name": "Cola", "price": 2.40, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 63, "name": "Λεμονάδα σπιτική", "price": 3.00, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 64, "name": "Πορτοκαλάδα", "price": 2.60, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 65, "name": "Χυμός πορτοκάλι", "price": 3.40, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 66, "name": "Χυμός μήλο", "price": 2.80, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 67, "name": "Iced tea ροδάκινο", "price": 2.60, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 68, "name": "Τόνικ", "price": 2.40, "hasGeneralOptions": false, "generalOptions": []},
                {"id": 69, "name": "Σόδα", "price": 2.00, "hasGeneralOptions": false, "generalOptions": []}
            ]
        };

        // Global Variables
        let menu = {};
        let selectedCategory = null;
        let currentOrder = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PREFIX + 'CurrentOrder')) || [];
        let orderNumber = parseInt(localStorage.getItem(LOCAL_STORAGE_PREFIX + 'OrderNumber')) || 1;
        let simpleOrderType = 'table';
        let selectedTableNumber = '';
        let selectedItemForNumpad = null;
        let pendingOptionItem = null;
        let pendingSelectedOption = null;
        let demoWaiterOrders = [];

        // DOM Elements Cache
        const els = {};
        function $(id) { return document.getElementById(id); }

        // Initialize Application
        document.addEventListener('DOMContentLoaded', () => {
            cacheElements();
            initializeApp();
            applyDemoLockedManagementSections();
            applyDemoManagementModalLayout();
            renderCategories();
            updateOrderDisplay();
            applyDemoConnectionVisualState();

            if (els.itemOptionSelectModal) {
                els.itemOptionSelectModal.addEventListener('click', (event) => {
                    if (event.target === els.itemOptionSelectModal) {
                        cancelOptionSelection();
                    }
                });
            }
        });

        function cacheElements() {
            els.categories = $('categories');
            els.products = $('products');
            els.orderItems = $('order-items-container');
            els.emptyOrderMsg = $('empty-order-message');
            els.orderTotal = $('order-total');
            els.orderNumber = $('order-number-desktop');
            els.headerTableInput = $('header-table-input');
            els.headerTableContainer = $('header-table-container');
            els.simpleOrderTypeStatus = $('simpleOrderTypeStatus');
            els.toast = $('toast');
            els.toastMessage = $('toast-message');
            els.waiterOrdersModal = $('waiterOrdersModal');
            els.waiterOrdersList = $('todaysOrdersListWaiter');
            els.waiterOrdersSearch = $('ohSearchWaiter');
            els.waiterOrdersRange = $('ohRangeWaiter');
            els.waiterOrdersCustomRange = $('ohCustomRangeWaiter');
            els.waiterOrdersStart = $('ohStartWaiter');
            els.waiterOrdersEnd = $('ohEndWaiter');
            els.itemOptionSelectModal = $('itemOptionSelectModal');
            els.optionModalItemName = $('optionModalItemName');
            els.optionModalItemDescription = $('optionModalItemDescription');
            els.optionModalOptionsContainer = $('optionModalOptionsContainer');
        }

        function buildDemoWaiterOrders() {
            const now = new Date();
            const templates = [
                {
                    tableLabel: 'Takeaway',
                    receiptId: 'RCP-52001',
                    minutesAgo: 8,
                    status: 'Printed',
                    waiter: 'Maria',
                    paymentMethod: 'Card',
                    note: 'No sugar in cappuccino.',
                    items: [
                        { qty: 1, name: 'Cappuccino', unitPrice: 3.40, modifiers: ['Oat milk'] },
                        { qty: 1, name: 'Butter Croissant', unitPrice: 4.40, modifiers: [] }
                    ]
                },
                {
                    tableLabel: 'T2',
                    receiptId: 'RCP-52002',
                    minutesAgo: 16,
                    status: 'Sent',
                    waiter: 'Eleni',
                    paymentMethod: 'Cash',
                    note: 'One water on hold.',
                    items: [
                        { qty: 1, name: 'Espresso Double', unitPrice: 2.90, modifiers: ['Decaf'] },
                        { qty: 1, name: 'Club Sandwich', unitPrice: 6.80, modifiers: [] }
                    ]
                },
                {
                    tableLabel: 'T3',
                    receiptId: 'RCP-52003',
                    minutesAgo: 24,
                    status: 'Sent',
                    waiter: 'Nikos',
                    paymentMethod: 'Card',
                    note: '',
                    items: [
                        { qty: 2, name: 'Freddo Espresso', unitPrice: 3.20, modifiers: [] },
                        { qty: 1, name: 'Sparkling Water 500ml', unitPrice: 1.60, modifiers: [] },
                        { qty: 1, name: 'Cereal Bar', unitPrice: 2.40, modifiers: [] }
                    ]
                },
                {
                    tableLabel: 'T4',
                    receiptId: 'RCP-52004',
                    minutesAgo: 35,
                    status: 'Printed',
                    waiter: 'Sofia',
                    paymentMethod: 'Card',
                    note: 'Serve pasta first.',
                    items: [
                        { qty: 1, name: 'Penne Chicken Cream', unitPrice: 10.60, modifiers: [] },
                        { qty: 1, name: 'Soda', unitPrice: 2.00, modifiers: [] },
                        { qty: 1, name: 'Water 500ml', unitPrice: 1.20, modifiers: [] }
                    ]
                },
                {
                    tableLabel: 'Takeaway',
                    receiptId: 'RCP-52005',
                    minutesAgo: 49,
                    status: 'Sent',
                    waiter: 'Maria',
                    paymentMethod: 'Card',
                    note: 'Customer waiting outside.',
                    items: [
                        { qty: 1, name: 'Latte', unitPrice: 3.80, modifiers: ['Caramel syrup'] },
                        { qty: 1, name: 'Toast Turkey-Cheese', unitPrice: 3.60, modifiers: [] },
                        { qty: 1, name: 'Iced Tea Peach', unitPrice: 2.60, modifiers: [] }
                    ]
                },
                {
                    tableLabel: 'T6',
                    receiptId: 'RCP-52006',
                    minutesAgo: 63,
                    status: 'Sent',
                    waiter: 'Giorgos',
                    paymentMethod: 'Cash',
                    note: '',
                    items: [
                        { qty: 1, name: 'Greek Coffee', unitPrice: 2.00, modifiers: [] },
                        { qty: 1, name: 'Pancakes with Honey', unitPrice: 5.40, modifiers: [] },
                        { qty: 1, name: 'Orange Juice', unitPrice: 3.40, modifiers: [] }
                    ]
                },
                {
                    tableLabel: 'T7',
                    receiptId: 'RCP-52007',
                    minutesAgo: 78,
                    status: 'Printed',
                    waiter: 'Nikos',
                    paymentMethod: 'Card',
                    note: 'All dishes served.',
                    items: [
                        { qty: 1, name: 'Mushroom Risotto', unitPrice: 9.80, modifiers: [] },
                        { qty: 1, name: 'Homemade Lemonade', unitPrice: 3.00, modifiers: [] },
                        { qty: 1, name: 'Bottled Water 500ml', unitPrice: 1.20, modifiers: [] }
                    ]
                },
                {
                    tableLabel: 'T1',
                    receiptId: 'RCP-52008',
                    minutesAgo: 92,
                    status: 'Sent',
                    waiter: 'Eleni',
                    paymentMethod: 'Cash',
                    note: 'Guest asked for split bill later.',
                    items: [
                        { qty: 2, name: 'Lager 330ml', unitPrice: 3.40, modifiers: [] },
                        { qty: 1, name: 'Chicken Sandwich', unitPrice: 6.20, modifiers: [] },
                        { qty: 1, name: 'Tonic', unitPrice: 2.40, modifiers: [] }
                    ]
                },
                {
                    tableLabel: 'Takeaway',
                    receiptId: 'RCP-52009',
                    minutesAgo: 108,
                    status: 'Sent',
                    waiter: 'Sofia',
                    paymentMethod: 'Card',
                    note: '',
                    items: [
                        { qty: 1, name: 'Americano', unitPrice: 2.80, modifiers: [] },
                        { qty: 1, name: 'Bagel Cream Cheese', unitPrice: 5.80, modifiers: [] },
                        { qty: 1, name: 'Cola', unitPrice: 2.40, modifiers: [] }
                    ]
                },
                {
                    tableLabel: 'T3',
                    receiptId: 'RCP-52010',
                    minutesAgo: 135,
                    status: 'Printed',
                    waiter: 'Giorgos',
                    paymentMethod: 'Card',
                    note: 'Regular customer.',
                    items: [
                        { qty: 1, name: 'Spaghetti Carbonara', unitPrice: 10.20, modifiers: [] },
                        { qty: 1, name: 'Iced Tea Peach', unitPrice: 2.60, modifiers: [] },
                        { qty: 1, name: 'Soda', unitPrice: 2.00, modifiers: [] }
                    ]
                }
            ];

            return templates.map((template, index) => {
                const placedAt = new Date(now.getTime() - (template.minutesAgo * 60 * 1000));
                const itemsCount = template.items.reduce((sum, item) => sum + Number(item.qty || 0), 0);
                const total = Number(template.items.reduce((sum, item) => {
                    return sum + (Number(item.unitPrice || 0) * Number(item.qty || 0));
                }, 0).toFixed(2));

                return {
                    orderNumber: 1201 + index,
                    ...template,
                    placedAt,
                    itemsCount,
                    total
                };
            });
        }

        function normalizeSimpleOrderType(value) {
            return String(value || '').trim().toLowerCase() === 'takeaway' ? 'takeaway' : 'table';
        }

        function applySimpleOrderTypeUI() {
            const isTakeaway = simpleOrderType === 'takeaway';
            document.querySelectorAll('[data-simple-order-type]').forEach((btn) => {
                const type = normalizeSimpleOrderType(btn.getAttribute('data-simple-order-type'));
                const isActive = type === simpleOrderType;
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
            });

            if (els.headerTableInput) {
                els.headerTableInput.disabled = isTakeaway;
                els.headerTableInput.classList.toggle('opacity-60', isTakeaway);
                els.headerTableInput.classList.toggle('cursor-not-allowed', isTakeaway);
                els.headerTableInput.setAttribute('aria-disabled', isTakeaway ? 'true' : 'false');
            }
            if (els.headerTableContainer) {
                els.headerTableContainer.classList.toggle('simple-order-takeaway', isTakeaway);
            }
            if (els.simpleOrderTypeStatus) {
                els.simpleOrderTypeStatus.style.display = isTakeaway ? 'inline-flex' : 'none';
            }
        }

        function setSimpleOrderType(orderType) {
            const normalized = normalizeSimpleOrderType(orderType);
            if (simpleOrderType === normalized) {
                applySimpleOrderTypeUI();
                return;
            }
            simpleOrderType = normalized;

            // Takeaway in simple mode has no table number.
            if (simpleOrderType === 'takeaway') {
                selectedTableNumber = '';
                if (els.headerTableInput) {
                    els.headerTableInput.value = '';
                }
            }

            localStorage.setItem(LOCAL_STORAGE_PREFIX + 'SimpleOrderType', simpleOrderType);
            localStorage.setItem(LOCAL_STORAGE_PREFIX + 'SimpleTableNumber', selectedTableNumber);
            applySimpleOrderTypeUI();
        }

        function initializeSimpleOrderTypeControls() {
            simpleOrderType = normalizeSimpleOrderType(localStorage.getItem(LOCAL_STORAGE_PREFIX + 'SimpleOrderType'));
            selectedTableNumber = localStorage.getItem(LOCAL_STORAGE_PREFIX + 'SimpleTableNumber') || '';

            if (els.headerTableInput) {
                els.headerTableInput.value = selectedTableNumber;
                els.headerTableInput.addEventListener('input', () => {
                    selectedTableNumber = els.headerTableInput.value.trim();
                    localStorage.setItem(LOCAL_STORAGE_PREFIX + 'SimpleTableNumber', selectedTableNumber);
                });
            }

            document.querySelectorAll('[data-simple-order-type]').forEach((btn) => {
                btn.addEventListener('click', () => {
                    const type = btn.getAttribute('data-simple-order-type');
                    if (!type) return;
                    setSimpleOrderType(type);
                });
            });

            applySimpleOrderTypeUI();
        }

        function setStatusClass(el, status) {
            if (!el) return;
            el.classList.remove('status-live', 'status-polling', 'status-offline', 'status-checking');
            el.classList.add(status);
        }

        function buildDemoLockedSectionHtml(sectionTitle) {
            return `
                <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-5 mt-2">
                    <h4 class="text-lg font-semibold text-slate-900 mb-2">${sectionTitle}</h4>
                    <p class="text-sm text-slate-700 mb-2">Στο demo είναι ενεργή μόνο η καρτέλα Αναλύσεις.</p>
                    <p class="text-sm text-slate-700 mb-4">Για πλήρη εμπειρία και πλήρη διαχείριση, κατέβασε το POSPal για Windows.</p>
                    <a href="download/index.html" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors font-medium">
                        <i class="fas fa-download" aria-hidden="true"></i>
                        Κατέβασε για Windows
                    </a>
                </div>
            `;
        }

        function applyDemoLockedManagementSections() {
            const sections = [
                { id: 'itemsManagement', title: 'Είδη' },
                { id: 'categoriesManagement', title: 'Κατηγορίες' },
                { id: 'orderHistoryManagement', title: 'Ιστορικό παραγγελιών' }
            ];

            sections.forEach(({ id, title }) => {
                const section = $(id);
                if (!section) return;
                section.innerHTML = buildDemoLockedSectionHtml(title);
            });
        }

        function applyDemoManagementModalLayout() {
            const footer = $('appVersionContainer');
            if (!footer) return;
            footer.classList.add('hidden');
            footer.style.display = 'none';
        }

        function applyDemoConnectionVisualState() {
            const gear = $('settingsGear');
            const gearLabel = $('gearStatusLabel');
            const banner = $('connectionStatusBanner');
            const bannerText = $('connectionBannerText');
            const bannerSubtext = $('connectionBannerSubtext');

            // Keep indicators subtle in demo: healthy green state with no "checking" copy.
            setStatusClass(gear, 'status-live');
            if (gear) {
                gear.title = 'Management Panel';
                gear.setAttribute('aria-label', 'Management Panel');
            }

            if (gearLabel) {
                setStatusClass(gearLabel, 'status-live');
                gearLabel.textContent = '';
                gearLabel.classList.remove('active');
                gearLabel.style.display = 'none';
            }

            if (banner) {
                setStatusClass(banner, 'status-live');
                const copy = banner.querySelector('.status-copy');
                if (copy) {
                    copy.style.display = 'none';
                }
            }

            if (bannerText) bannerText.textContent = '';
            if (bannerSubtext) bannerSubtext.textContent = '';
        }

        function initializeApp() {
            // Match real app mode classes so simple/takeaway layout selectors apply.
            document.body.classList.add('simple-mode');
            document.body.classList.remove('table-mode');

            menu = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PREFIX + 'Menu')) || JSON.parse(JSON.stringify(MOCK_MENU_DATA));
            selectedCategory = Object.keys(menu)[0] || null;
            els.orderNumber.textContent = orderNumber;
            initializeSimpleOrderTypeControls();
            demoWaiterOrders = buildDemoWaiterOrders();

            // Set today's date as default
            const today = new Date().toISOString().split('T')[0];
            if ($('startDate')) $('startDate').value = today;
            if ($('endDate')) $('endDate').value = today;
            if ($('ohDate')) $('ohDate').value = today;

            if (els.waiterOrdersRange) {
                els.waiterOrdersRange.addEventListener('change', () => {
                    const custom = els.waiterOrdersRange.value === 'custom';
                    if (els.waiterOrdersCustomRange) {
                        els.waiterOrdersCustomRange.classList.toggle('hidden', !custom);
                    }
                    loadWaiterOrders();
                });
            }
            if (els.waiterOrdersSearch) {
                els.waiterOrdersSearch.addEventListener('input', () => loadWaiterOrders());
            }
            if (els.waiterOrdersStart) {
                els.waiterOrdersStart.addEventListener('change', () => loadWaiterOrders());
            }
            if (els.waiterOrdersEnd) {
                els.waiterOrdersEnd.addEventListener('change', () => loadWaiterOrders());
            }
            if (els.waiterOrdersModal) {
                els.waiterOrdersModal.addEventListener('click', (event) => {
                    if (event.target === els.waiterOrdersModal) {
                        closeWaiterOrdersModal();
                    }
                });
            }
        }

        function openWaiterOrdersModal() {
            if (!els.waiterOrdersModal) return;
            if (!demoWaiterOrders.length) {
                demoWaiterOrders = buildDemoWaiterOrders();
            }
            if (els.waiterOrdersRange && !els.waiterOrdersRange.value) {
                els.waiterOrdersRange.value = 'all';
            }
            els.waiterOrdersModal.classList.remove('hidden');
            els.waiterOrdersModal.style.display = 'flex';
            loadWaiterOrders();
        }

        function closeWaiterOrdersModal() {
            if (!els.waiterOrdersModal) return;
            els.waiterOrdersModal.classList.add('hidden');
            els.waiterOrdersModal.style.display = 'none';
        }

        function parseTimeStringToMinutes(value) {
            if (!value || !value.includes(':')) return null;
            const [h, m] = value.split(':').map((part) => parseInt(part, 10));
            if (Number.isNaN(h) || Number.isNaN(m)) return null;
            return (h * 60) + m;
        }

        function isWithinCustomTimeRange(placedAt, startValue, endValue) {
            const start = parseTimeStringToMinutes(startValue);
            const end = parseTimeStringToMinutes(endValue);
            if (start === null || end === null) return true;

            const orderMinutes = (placedAt.getHours() * 60) + placedAt.getMinutes();
            if (start <= end) {
                return orderMinutes >= start && orderMinutes <= end;
            }
            return orderMinutes >= start || orderMinutes <= end;
        }

        function formatTimeShort(date) {
            return date.toLocaleTimeString('el-GR', { hour: '2-digit', minute: '2-digit' });
        }

        function formatDateShort(date) {
            return date.toLocaleDateString('el-GR', { day: '2-digit', month: '2-digit' });
        }

        function formatCurrency(amount) {
            return `€${Number(amount || 0).toFixed(2)}`;
        }

        function getWaiterOrderStatusClasses(status) {
            if (status === 'Printed') {
                return 'bg-emerald-50 text-emerald-700 border border-emerald-200';
            }
            if (status === 'Sent') {
                return 'bg-blue-50 text-blue-700 border border-blue-200';
            }
            return 'bg-gray-100 text-gray-700 border border-gray-200';
        }

        function toggleWaiterOrderDetails(orderNumber) {
            const detailsId = `waiterOrderDetails-${orderNumber}`;
            const chevronId = `waiterOrderChevron-${orderNumber}`;
            const target = $(detailsId);
            const targetChevron = $(chevronId);
            if (!target) return;

            const willOpen = target.classList.contains('hidden');

            document.querySelectorAll('[id^="waiterOrderDetails-"]').forEach((el) => {
                el.classList.add('hidden');
            });
            document.querySelectorAll('[id^="waiterOrderChevron-"]').forEach((el) => {
                el.classList.remove('rotate-180');
            });

            if (willOpen) {
                target.classList.remove('hidden');
                if (targetChevron) {
                    targetChevron.classList.add('rotate-180');
                }
            }
        }

        function demoReprintOrder(orderNumber) {
            showToast(`Reprint queued for order #${orderNumber} (Demo)`, 'info');
        }

        function buildWaiterOrderItemsHtml(order) {
            return (order.items || []).map((item) => {
                const lineTotal = Number(item.qty || 0) * Number(item.unitPrice || 0);
                const modifiers = (item.modifiers && item.modifiers.length)
                    ? `<p class="text-[11px] text-gray-500 mt-0.5">${item.modifiers.join(' / ')}</p>`
                    : '';

                return `
                    <div class="px-3 py-2 flex items-start justify-between gap-3">
                        <div class="min-w-0">
                            <p class="text-sm text-gray-800 truncate"><span class="font-semibold mr-1">${item.qty}x</span>${item.name}</p>
                            ${modifiers}
                        </div>
                        <p class="text-sm font-medium text-gray-900 whitespace-nowrap">${formatCurrency(lineTotal)}</p>
                    </div>
                `;
            }).join('');
        }

        function loadWaiterOrders() {
            if (!els.waiterOrdersList) return;

            const search = (els.waiterOrdersSearch && els.waiterOrdersSearch.value || '').trim().toLowerCase();
            const range = (els.waiterOrdersRange && els.waiterOrdersRange.value) || 'all';
            const startValue = els.waiterOrdersStart ? els.waiterOrdersStart.value : '';
            const endValue = els.waiterOrdersEnd ? els.waiterOrdersEnd.value : '';

            const filtered = demoWaiterOrders.filter((order) => {
                const matchesSearch = !search
                    || String(order.orderNumber).includes(search)
                    || order.tableLabel.toLowerCase().includes(search)
                    || order.receiptId.toLowerCase().includes(search)
                    || (order.waiter || '').toLowerCase().includes(search);
                if (!matchesSearch) return false;

                if (range === 'this_hour') {
                    return order.minutesAgo <= 60;
                }
                if (range === 'last2h') {
                    return order.minutesAgo <= 120;
                }
                if (range === 'custom') {
                    return isWithinCustomTimeRange(order.placedAt, startValue, endValue);
                }
                return true;
            });

            if (!filtered.length) {
                els.waiterOrdersList.innerHTML = '<p class="text-sm text-gray-500 italic">No matching orders in demo data.</p>';
                return;
            }

            els.waiterOrdersList.innerHTML = filtered.map((order) => `
                <div class="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
                    <button type="button" onclick="toggleWaiterOrderDetails(${order.orderNumber})" class="w-full p-3 flex items-center justify-between gap-3 text-left hover:bg-gray-50 transition-colors">
                        <div class="min-w-0">
                            <p class="text-sm font-semibold text-gray-900 truncate">#${order.orderNumber} - ${order.tableLabel}</p>
                            <p class="text-xs text-gray-500 truncate">Receipt: ${order.receiptId} - ${order.itemsCount} items - ${formatTimeShort(order.placedAt)}</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="text-right">
                                <p class="text-sm font-bold text-gray-900">${formatCurrency(order.total)}</p>
                                <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${getWaiterOrderStatusClasses(order.status)}">${order.status}</span>
                            </div>
                            <i id="waiterOrderChevron-${order.orderNumber}" class="fas fa-chevron-down text-gray-400 transition-transform"></i>
                        </div>
                    </button>
                    <div id="waiterOrderDetails-${order.orderNumber}" class="hidden border-t border-gray-100 px-3 pb-3">
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
                            <div class="bg-gray-50 border border-gray-200 rounded p-2">
                                <p class="text-[10px] uppercase tracking-wide text-gray-500">Waiter</p>
                                <p class="text-sm font-semibold text-gray-800">${order.waiter}</p>
                            </div>
                            <div class="bg-gray-50 border border-gray-200 rounded p-2">
                                <p class="text-[10px] uppercase tracking-wide text-gray-500">Payment</p>
                                <p class="text-sm font-semibold text-gray-800">${order.paymentMethod}</p>
                            </div>
                            <div class="bg-gray-50 border border-gray-200 rounded p-2">
                                <p class="text-[10px] uppercase tracking-wide text-gray-500">Date / Time</p>
                                <p class="text-sm font-semibold text-gray-800">${formatDateShort(order.placedAt)} ${formatTimeShort(order.placedAt)}</p>
                            </div>
                        </div>

                        <div class="mt-3 border border-gray-200 rounded-md overflow-hidden">
                            <div class="px-3 py-1.5 bg-gray-50 border-b border-gray-200 text-[11px] font-semibold uppercase tracking-wide text-gray-500">Order Items</div>
                            <div class="divide-y divide-gray-100">
                                ${buildWaiterOrderItemsHtml(order)}
                            </div>
                        </div>

                        ${order.note ? `
                            <div class="mt-3 bg-amber-50 border border-amber-200 rounded-md px-3 py-2">
                                <p class="text-[10px] uppercase tracking-wide text-amber-700 font-semibold">Notes</p>
                                <p class="text-xs text-amber-900 mt-1">${order.note}</p>
                            </div>
                        ` : ''}

                        <div class="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between">
                            <span class="text-xs text-gray-500">Demo order details</span>
                            <button type="button" onclick="demoReprintOrder(${order.orderNumber})" class="btn-secondary px-3 py-1.5 rounded text-xs">
                                <i class="fas fa-print mr-1"></i>Reprint
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function renderCategories() {
            els.categories.innerHTML = '';
            Object.keys(menu).forEach(cat => {
                const btn = document.createElement('button');
                btn.className = `category-tab ${cat === selectedCategory ? 'active' : ''}`;
                btn.textContent = cat;
                btn.onclick = () => {
                    selectedCategory = cat;
                    renderCategories();
                    renderProducts();
                };
                els.categories.appendChild(btn);
            });
            renderProducts();
        }

        function renderProducts() {
            els.products.innerHTML = '';
            (menu[selectedCategory] || []).forEach(item => {
                const card = document.createElement('div');
                card.className = 'product-card bg-white rounded-lg shadow border p-4 cursor-pointer hover:shadow-md transition-shadow';
                card.onclick = () => addToOrder(item);

                let optionsBadge = '';
                if (item.hasGeneralOptions && item.generalOptions.length > 0) {
                    optionsBadge = `<span class="options-badge">${item.generalOptions.length} opts</span>`;
                }

                card.innerHTML = `
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-sm font-semibold text-gray-800">${item.name}</h3>
                        ${optionsBadge}
                    </div>
                    <p class="text-lg font-bold text-black">€${item.price.toFixed(2)}</p>
                `;
                els.products.appendChild(card);
            });
        }

        function hasItemOptions(item) {
            return !!(item && item.hasGeneralOptions && Array.isArray(item.generalOptions) && item.generalOptions.length > 0);
        }

        function buildOrderItem(item, selectedOptions = []) {
            return {
                ...item,
                quantity: 1,
                orderId: `${item.id}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
                selectedOptions: [...selectedOptions]
            };
        }

        function closeOptionModal() {
            if (!els.itemOptionSelectModal) return;
            els.itemOptionSelectModal.classList.add('hidden');
            els.itemOptionSelectModal.style.display = 'none';
            if (els.optionModalOptionsContainer) {
                els.optionModalOptionsContainer.innerHTML = '';
            }
            pendingOptionItem = null;
            pendingSelectedOption = null;
        }

        function renderOptionChoices(options) {
            if (!els.optionModalOptionsContainer) return;
            els.optionModalOptionsContainer.innerHTML = '';

            options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'option-selectable w-full text-left border border-gray-300 rounded-md p-3 hover:bg-gray-50 transition-colors';
                btn.dataset.index = String(idx);
                btn.innerHTML = `
                    <div class="flex items-center justify-between gap-3">
                        <span class="font-medium text-gray-800">${opt.name}</span>
                        <span class="text-sm text-gray-600">${opt.priceChange >= 0 ? '+' : ''}€${Number(opt.priceChange || 0).toFixed(2)}</span>
                    </div>
                `;
                btn.onclick = () => {
                    pendingSelectedOption = opt;
                    els.optionModalOptionsContainer.querySelectorAll('.option-selectable').forEach(el => el.classList.remove('selected'));
                    btn.classList.add('selected');
                };
                if (idx === 0) {
                    btn.classList.add('selected');
                }
                els.optionModalOptionsContainer.appendChild(btn);
            });
        }

        function openOptionModal(item) {
            if (!hasItemOptions(item) || !els.itemOptionSelectModal) return;

            pendingOptionItem = item;
            pendingSelectedOption = item.generalOptions[0] || null;

            if (els.optionModalItemName) {
                els.optionModalItemName.textContent = item.name;
            }
            if (els.optionModalItemDescription) {
                els.optionModalItemDescription.textContent = 'Choose one option before adding this item.';
            }

            renderOptionChoices(item.generalOptions);
            els.itemOptionSelectModal.classList.remove('hidden');
            els.itemOptionSelectModal.style.display = 'flex';
        }

        function confirmOptionSelection() {
            if (!pendingOptionItem) {
                closeOptionModal();
                return;
            }
            if (hasItemOptions(pendingOptionItem) && !pendingSelectedOption) {
                showToast('Select an option first.', 'warning');
                return;
            }

            const selectedOptions = pendingSelectedOption ? [pendingSelectedOption] : [];
            const orderItem = buildOrderItem(pendingOptionItem, selectedOptions);
            currentOrder.push(orderItem);
            updateOrderDisplay();
            closeOptionModal();
            showToast(`Added ${orderItem.name} to order`, 'success');
        }

        function cancelOptionSelection() {
            closeOptionModal();
        }

        function addToOrder(item) {
            if (hasItemOptions(item)) {
                openOptionModal(item);
                return;
            }
            const orderItem = buildOrderItem(item, []);
            currentOrder.push(orderItem);
            updateOrderDisplay();
            showToast(`Added ${item.name} to order`, 'success');
        }

        function updateOrderDisplay() {
            els.orderItems.innerHTML = '';
            let total = 0;

            if (currentOrder.length === 0) {
                els.emptyOrderMsg.style.display = 'block';
            } else {
                els.emptyOrderMsg.style.display = 'none';
                currentOrder.forEach((item, index) => {
                    let itemTotal = item.price * item.quantity;

                    // Add options price
                    if (item.selectedOptions) {
                        item.selectedOptions.forEach(opt => {
                            itemTotal += opt.priceChange * item.quantity;
                        });
                    }

                    total += itemTotal;

                    const row = document.createElement('div');
                    row.className = 'order-item p-2 border-b border-gray-200 flex items-center justify-between text-sm cursor-pointer hover:bg-gray-50 border border-transparent rounded';
                    row.onclick = () => selectOrderItemForNumpad(index);

                    let optionsDisplay = '';
                    if (item.selectedOptions && item.selectedOptions.length > 0) {
                        optionsDisplay = `<div class="text-xs text-gray-500 mt-1">${item.selectedOptions.map(opt => opt.name).join(', ')}</div>`;
                    }

                    row.innerHTML = `
                        <div class="flex-grow pr-2">
                            <span class="font-medium text-gray-800">${item.name}</span>
                            ${optionsDisplay}
                        </div>
                        <div class="flex items-center gap-2">
                            <button class="px-2 py-1 text-xs btn-secondary rounded" onclick="event.stopPropagation(); changeQuantity('${item.orderId}', -1)">-</button>
                            <span class="w-6 text-center font-medium">${item.quantity}</span>
                            <button class="px-2 py-1 text-xs btn-secondary rounded" onclick="event.stopPropagation(); changeQuantity('${item.orderId}', 1)">+</button>
                            <span class="font-semibold text-gray-900 min-w-[60px] text-right">€${itemTotal.toFixed(2)}</span>
                            <button class="text-red-600 hover:text-red-800 p-1" onclick="event.stopPropagation(); removeItem('${item.orderId}')" title="Remove item">
                                <i class="fas fa-trash text-xs"></i>
                            </button>
                        </div>
                    `;
                    els.orderItems.appendChild(row);
                });
            }

            els.orderTotal.innerHTML = `Total: €${total.toFixed(2)}`;
            localStorage.setItem(LOCAL_STORAGE_PREFIX + 'CurrentOrder', JSON.stringify(currentOrder));
        }

        function changeQuantity(orderId, delta) {
            const item = currentOrder.find(i => i.orderId === orderId);
            if (!item) return;

            item.quantity += delta;
            if (item.quantity <= 0) {
                removeItem(orderId);
            } else {
                updateOrderDisplay();
            }
        }

        function removeItem(orderId) {
            currentOrder = currentOrder.filter(i => i.orderId !== orderId);
            clearNumpadSelection();
            updateOrderDisplay();
            showToast('Item removed from order', 'info');
        }

        function newOrder() {
            if (currentOrder.length && !confirm('Clear current order and start fresh?')) return;
            currentOrder = [];
            clearNumpadSelection();
            updateOrderDisplay();
            showToast('Order cleared', 'info');
        }

        function sendOrder() {
            if (!currentOrder.length) {
                showToast('Order is empty! Add items before sending.', 'warning');
                return;
            }

            if (els.headerTableInput) {
                selectedTableNumber = els.headerTableInput.value.trim();
                localStorage.setItem(LOCAL_STORAGE_PREFIX + 'SimpleTableNumber', selectedTableNumber);
            }
            if (simpleOrderType === 'table' && !selectedTableNumber) {
                showToast('Select table number first.', 'warning');
                if (els.headerTableContainer) {
                    els.headerTableContainer.classList.add('ring-2', 'ring-red-500');
                    setTimeout(() => {
                        els.headerTableContainer.classList.remove('ring-2', 'ring-red-500');
                    }, 1600);
                }
                return;
            }

            const btn = $('sendOrderBtn');
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';

            setTimeout(() => {
                const destination = simpleOrderType === 'takeaway'
                    ? 'Takeaway'
                    : `Table ${selectedTableNumber}`;
                showToast(`Order #${orderNumber} sent for ${destination}! (Demo Mode)`, 'success');
                orderNumber++;
                localStorage.setItem(LOCAL_STORAGE_PREFIX + 'OrderNumber', orderNumber.toString());
                newOrder();
                btn.disabled = false;
                btn.innerHTML = 'Send Order';
                els.orderNumber.textContent = orderNumber;
            }, 1200);
        }

        // Toast Notifications
        let toastTimeout;
        function showToast(message, type = 'info', duration = 3000) {
            clearTimeout(toastTimeout);
            els.toastMessage.textContent = message;
            els.toast.classList.remove('hidden');
            els.toast.style.opacity = '0';

            // Set toast color based on type
            const colors = {
                success: '#16a34a',
                warning: '#f59e0b',
                danger: '#ef4444',
                info: '#1f2937'
            };
            els.toast.style.backgroundColor = colors[type] || colors.info;

            setTimeout(() => els.toast.style.opacity = '1', 10);

            toastTimeout = setTimeout(() => {
                els.toast.style.opacity = '0';
                setTimeout(() => els.toast.classList.add('hidden'), 300);
            }, duration);
        }

        // Login Modal Functions
        function openLoginModal() {
            // Demo shortcut: bypass password gate and open management directly.
            if ($('loginModal')) {
                $('loginModal').classList.add('hidden');
                $('loginModal').style.display = 'none';
            }
            openManagementModal();
        }

        function closeLoginModal() {
            $('loginModal').classList.add('hidden');
            $('loginModal').style.display = 'none';
            $('passwordInput').value = '';
            $('loginError').classList.add('hidden');
        }

        // Handle login form submission
        $('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const password = $('passwordInput').value;

            if (password === '9999') {
                closeLoginModal();
                openManagementModal();
            } else {
                $('loginError').textContent = 'Incorrect password. Try: 9999';
                $('loginError').classList.remove('hidden');
                showToast('Demo tip: Use password "9999"', 'warning');
            }
        });

        // Management Modal Functions
        function openManagementModal() {
            $('managementModal').classList.remove('hidden');
            $('managementModal').style.display = 'flex';
            // Default to analytics tab
            switchManagementTab('analytics', $('managementModal').querySelector('.management-tab'));
        }

        function closeManagementModal() {
            $('managementModal').classList.add('hidden');
            $('managementModal').style.display = 'none';
        }

        function switchManagementTab(tabName, buttonElement) {
            // Hide all content panels
            document.querySelectorAll('[id$="Management"]').forEach(panel => {
                panel.classList.add('hidden');
            });

            // Remove active styling from all tabs
            document.querySelectorAll('.management-tab').forEach(tab => {
                tab.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
                tab.classList.add('text-gray-600');
            });

            // Show selected content panel
            const panel = $(tabName + 'Management');
            if (panel) {
                panel.classList.remove('hidden');
            }

            // Add active styling to selected tab
            if (buttonElement) {
                buttonElement.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
                buttonElement.classList.remove('text-gray-600');
            }

            // Load analytics data when analytics tab is selected
            if (tabName === 'analytics') {
                const todayButton = document.querySelector('.date-range-btn');
                if (todayButton) {
                    loadAnalyticsData('today', todayButton);
                }
            }
        }

        // Demo Analytics Data Generation
        function generateDemoAnalyticsData(period = 'today') {
            const currentDate = new Date();
            let salesByHour = [];
            let salesByCategory = [];
            let topRevenueItems = [];
            let bestSellers = [];
            let worstSellers = [];
            let topAddons = [];

            // Generate hourly sales data
            const hoursToGenerate = period === 'today' ? 24 : (period === 'week' ? 7 : 30);
            const baseRevenue = period === 'today' ? 15 : (period === 'week' ? 180 : 300);

            for (let i = 0; i < hoursToGenerate; i++) {
                const revenue = Math.random() * baseRevenue + (baseRevenue * 0.3);
                const label = period === 'today' ? `${i}:00` : (period === 'week' ? `Day ${i+1}` : `Week ${i+1}`);
                salesByHour.push({
                    hour: i,
                    label: label,
                    total: revenue,
                    orders: Math.floor(revenue / 12) + Math.floor(Math.random() * 5)
                });
            }

            // Generate category sales data
            const categories = Object.keys(MOCK_MENU_DATA);
            categories.forEach(category => {
                const items = MOCK_MENU_DATA[category];
                const totalRevenue = items.reduce((sum, item) => {
                    const randomSales = Math.floor(Math.random() * 15) + 5;
                    return sum + (item.price * randomSales);
                }, 0);

                salesByCategory.push({
                    category: category,
                    total: totalRevenue
                });
            });

            // Generate top revenue items
            const allItems = [];
            Object.values(MOCK_MENU_DATA).flat().forEach(item => {
                const randomSales = Math.floor(Math.random() * 20) + 1;
                allItems.push({
                    name: item.name,
                    revenue: item.price * randomSales,
                    quantity: randomSales
                });
            });

            topRevenueItems = [...allItems].sort((a, b) => b.revenue - a.revenue).slice(0, 8);
            bestSellers = [...allItems].sort((a, b) => b.quantity - a.quantity).slice(0, 8);
            worstSellers = [...allItems].sort((a, b) => a.quantity - b.quantity).slice(0, 6);

            // Generate top addons
            topAddons = [
                { name: 'Peppercorn Sauce', revenue: 45.60, attachRate: 0.23 },
                { name: 'Extra Bacon', revenue: 38.20, attachRate: 0.19 },
                { name: 'Mushroom Sauce', revenue: 32.40, attachRate: 0.16 },
                { name: 'Double Patty', revenue: 28.80, attachRate: 0.12 }
            ];

            return {
                grossRevenue: salesByHour.reduce((sum, h) => sum + h.total, 0),
                totalOrders: salesByHour.reduce((sum, h) => sum + h.orders, 0),
                atv: salesByHour.reduce((sum, h) => sum + h.total, 0) / salesByHour.reduce((sum, h) => sum + h.orders, 0),
                totalItems: allItems.reduce((sum, item) => sum + item.quantity, 0),
                salesByHour: salesByHour,
                salesByCategory: salesByCategory,
                topRevenueItems: topRevenueItems,
                bestSellers: bestSellers,
                worstSellers: worstSellers,
                topAddons: topAddons
            };
        }

        // Analytics Functions
        function loadAnalyticsData(period, buttonElement) {
            // Remove active class from all date range buttons
            document.querySelectorAll('.date-range-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to clicked button
            if (buttonElement) {
                buttonElement.classList.add('active');
            }

            showToast(`Loading ${period} analytics... (Demo)`, 'info');

            // Generate and render demo data
            setTimeout(() => {
                const demoData = generateDemoAnalyticsData(period);
                renderAnalytics(demoData);
                showToast(`${period} analytics loaded successfully!`, 'success');
            }, 800);
        }

        function toggleCustomDateRangeUI(buttonElement) {
            const picker = $('custom-date-range-picker');
            if (picker.classList.contains('hidden')) {
                picker.classList.remove('hidden');
                buttonElement.classList.add('active');
            } else {
                picker.classList.add('hidden');
                buttonElement.classList.remove('active');
            }
        }

        function fetchCustomDateRangeAnalytics() {
            const startDate = $('startDate').value;
            const endDate = $('endDate').value;

            if (!startDate || !endDate) {
                showToast('Please select both start and end dates', 'warning');
                return;
            }

            showToast(`Loading analytics for ${startDate} to ${endDate}... (Demo)`, 'info');

            setTimeout(() => {
                const demoData = generateDemoAnalyticsData('custom');
                renderAnalytics(demoData);
                showToast(`Custom date range analytics loaded!`, 'success');
            }, 1000);
        }

        // Analytics Rendering Functions
        function renderAnalytics(data) {
            // Update KPI cards
            $('kpi-gross-revenue').textContent = `€${(data.grossRevenue || 0).toFixed(2)}`;
            $('kpi-total-orders').textContent = data.totalOrders || 0;
            $('kpi-atv').textContent = `€${(data.atv || 0).toFixed(2)}`;

            // Items per order
            const itemsPerOrder = (data.totalItems && data.totalOrders) ? (data.totalItems / data.totalOrders) : 0;
            const itemsPerOrderEl = $('kpi-items-per-order');
            if (itemsPerOrderEl) itemsPerOrderEl.textContent = itemsPerOrder > 0 ? itemsPerOrder.toFixed(2) : '-';

            // Render lists
            renderList('kpi-sales-by-category', data.salesByCategory, item => `
                <div style="display: flex; justify-content: space-between; font-size: 0.875rem;">
                    <span style="color: #4b5563; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; padding-right: 0.5rem;">${item.category}</span>
                    <span style="font-weight: 500; color: #1f2937; white-space: nowrap;">€${(item.total || 0).toFixed(2)}</span>
                </div>`, "No category sales yet.");

            renderList('kpi-top-revenue-items', data.topRevenueItems, item => `
                <div style="display: flex; justify-content: space-between; font-size: 0.875rem;">
                    <span style="color: #4b5563; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; padding-right: 0.5rem;">${item.name}</span>
                    <span style="font-weight: 500; color: #1f2937; white-space: nowrap;">€${(item.revenue || 0).toFixed(2)}</span>
                </div>`, "No items sold yet.");

            renderList('kpi-best-sellers', data.bestSellers, item => `
                <div style="display: flex; justify-content: space-between; font-size: 0.875rem;">
                    <span style="color: #4b5563; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; padding-right: 0.5rem;">${item.name}</span>
                    <span style="font-weight: 500; color: #1f2937; white-space: nowrap;">${item.quantity} sold</span>
                </div>`, "No items sold yet.");

            renderList('kpi-worst-sellers', data.worstSellers, item => `
                <div style="display: flex; justify-content: space-between; font-size: 0.875rem;">
                    <span style="color: #4b5563; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; padding-right: 0.5rem;">${item.name}</span>
                    <span style="font-weight: 500; color: #1f2937; white-space: nowrap;">${item.quantity} sold</span>
                </div>`, "No underperforming items found.");

            // Render hourly chart
            renderSalesByHourChart(data.salesByHour);

            // Top add-ons/options
            const addonsContainer = $('kpi-top-addons');
            if (addonsContainer) {
                const items = data.topAddons || [];
                if (items.length === 0) {
                    addonsContainer.innerHTML = '<p style="font-size: 0.75rem; color: #6b7280; font-style: italic; padding: 0.5rem;">No add‑on data.</p>';
                } else {
                    addonsContainer.innerHTML = items.map(a => `
                        <div style="display: flex; justify-content: space-between; font-size: 0.875rem;">
                            <span style="color: #4b5563; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; padding-right: 0.5rem;">${a.name}</span>
                            <span style="font-weight: 500; color: #1f2937; white-space: nowrap;">€${(a.revenue || 0).toFixed(2)} • ${a.attachRate ? Math.round(a.attachRate*100) : 0}%</span>
                        </div>
                    `).join('');
                }
            }
        }

        function renderList(containerId, items, templateFn, emptyMessage) {
            const container = $(containerId);
            container.innerHTML = '';

            if (items && items.length > 0) {
                items.forEach(item => {
                    container.innerHTML += templateFn(item);
                });
            } else {
                container.innerHTML = `<p style="font-size: 0.75rem; color: #6b7280; font-style: italic; padding: 0.5rem;">${emptyMessage}</p>`;
            }
        }

        function renderSalesByHourChart(salesByHour) {
            const container = $('analytics-chart-container');
            container.innerHTML = '';

            if (!salesByHour || salesByHour.length === 0) {
                container.innerHTML = '<p style="font-size: 0.75rem; color: #6b7280; font-style: italic; width: 100%; text-align: center; align-self: center;">No sales data for this period.</p>';
                container.style.minWidth = 'auto';
                return;
            }

            const barWidth = 40;
            const spaceWidth = 16;
            container.style.minWidth = `${salesByHour.length * (barWidth + spaceWidth) + 60}px`;
            container.style.maxHeight = '100%';
            container.style.overflowY = 'hidden';
            container.style.position = 'relative';

            const maxRevenue = Math.max(...salesByHour.map(h => h.total), 0);

            // Create global tooltip
            const tooltip = document.createElement('div');
            tooltip.id = 'chart-tooltip';
            tooltip.className = 'chart-tooltip';
            tooltip.style.cssText = `
                position: absolute;
                background: #1f2937;
                color: white;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 12px;
                font-weight: 600;
                pointer-events: none;
                z-index: 1000;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                opacity: 0;
                transition: opacity 0.2s ease;
                white-space: nowrap;
            `;
            container.appendChild(tooltip);

            // Y-axis (5 ticks)
            const yAxis = document.createElement('div');
            yAxis.style.cssText = 'display:flex; flex-direction:column; justify-content:space-between; height:100%; margin-right:8px; color:#6b7280; font-size:12px;';
            const ticks = 5;
            for (let i = ticks; i >= 0; i--) {
                const val = (maxRevenue / ticks) * i;
                const lbl = document.createElement('div');
                lbl.textContent = `€${val.toFixed(0)}`;
                lbl.style.cssText = 'height:1px; transform:translateY(6px)';
                yAxis.appendChild(lbl);
            }
            container.appendChild(yAxis);

            salesByHour.forEach(hourData => {
                const barHeight = maxRevenue > 0 ? (hourData.total / maxRevenue) * 100 : 0;
                const barWrapper = document.createElement('div');
                barWrapper.style.cssText = 'width: 2.5rem; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 100%;';

                // Create bar container
                const barContainer = document.createElement('div');
                barContainer.style.cssText = 'width: 100%; height: 100%; display: flex; align-items: flex-end; justify-content: center; position: relative;';

                // Create the bar
                const bar = document.createElement('div');
                bar.style.cssText = `
                    background-color: #4f46e5;
                    width: 75%;
                    border-radius: 2px 2px 0 0;
                    transition: all 0.3s ease;
                    height: ${barHeight}%;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    cursor: pointer;
                `;

                // Add event listeners
                bar.addEventListener('mouseenter', function(e) {
                    // Update tooltip
                    tooltip.textContent = `${hourData.label}: €${hourData.total.toFixed(2)}`;
                    tooltip.style.opacity = '1';

                    // Position tooltip
                    const rect = this.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();

                    let left = rect.right - containerRect.left + 10;
                    let top = rect.top - containerRect.top + (rect.height / 2) - 12;

                    // Keep tooltip in bounds
                    if (left + 120 > container.offsetWidth - 5) {
                        left = rect.left - containerRect.left - 120 - 10;
                    }
                    if (top < 5) top = 5;
                    if (top + 24 > container.offsetHeight - 5) top = container.offsetHeight - 24 - 5;

                    tooltip.style.left = left + 'px';
                    tooltip.style.top = top + 'px';

                    // Style bar
                    this.style.backgroundColor = '#6366f1';
                    this.style.transform = 'scale(1.05)';
                });

                bar.addEventListener('mouseleave', function(e) {
                    tooltip.style.opacity = '0';
                    this.style.backgroundColor = '#4f46e5';
                    this.style.transform = 'scale(1)';
                });

                // Create hour label
                const hourLabel = document.createElement('span');
                hourLabel.style.cssText = 'color: #6b7280; font-size: 12px; margin-top: 8px; transform: rotate(-45deg); transform-origin: center; white-space: nowrap;';
                hourLabel.textContent = hourData.label;

                barContainer.appendChild(bar);
                barWrapper.appendChild(barContainer);
                barWrapper.appendChild(hourLabel);
                container.appendChild(barWrapper);
            });
        }

        // Categories Management
        function saveCategory() {
            const categoryName = $('categoryName').value.trim();
            if (!categoryName) {
                showToast('Please enter a category name', 'warning');
                return;
            }

            showToast(`Category "${categoryName}" saved! (Demo Mode)`, 'success');
            $('categoryName').value = '';
        }

        // Day Summary Modal
        function openDaySummaryModal() {
            $('daySummaryModal').classList.remove('hidden');
            $('daySummaryModal').style.display = 'flex';
        }

        function closeDaySummaryModal() {
            $('daySummaryModal').classList.add('hidden');
            $('daySummaryModal').style.display = 'none';
        }

        // Item Management Functions
        function openItemFormModal() {
            showToast('Item form would open here (Demo)', 'info');
        }

        function loadTodaysOrdersForReprint() {
            showToast('Refreshing order history... (Demo)', 'info');
        }

        function showDemoShutdownMessage() {
            if (confirm('This is demo mode. In the real application, this would properly shutdown the system. Continue to reload the demo?')) {
                location.reload();
            }
        }

        // Numpad Functions
        function toggleDesktopNumpad() {
            const miniNumpad = $('desktopNumpadMini');
            const fullNumpad = $('desktopNumpad');

            if (miniNumpad.style.display === 'none') {
                miniNumpad.style.display = 'block';
                fullNumpad.classList.add('hidden');
                showToast('Numpad enabled - click an order item to change quantity', 'info');
            } else {
                miniNumpad.style.display = 'none';
                fullNumpad.classList.add('hidden');
                clearNumpadSelection();
                showToast('Numpad disabled', 'info');
            }
        }

        function expandDesktopNumpad() {
            $('desktopNumpadMini').style.display = 'none';
            $('desktopNumpad').classList.remove('hidden');
        }

        function collapseDesktopNumpad() {
            $('desktopNumpad').classList.add('hidden');
            $('desktopNumpadMini').style.display = 'block';
        }

        function selectOrderItemForNumpad(index) {
            clearNumpadSelection();
            selectedItemForNumpad = index;
            const orderItems = document.querySelectorAll('.order-item');
            if (orderItems[index]) {
                orderItems[index].classList.add('selected-for-numpad');
                showToast('Use numpad to set new quantity', 'info');
            }
        }

        function clearNumpadSelection() {
            selectedItemForNumpad = null;
            document.querySelectorAll('.order-item').forEach(item => {
                item.classList.remove('selected-for-numpad');
            });
        }

        function handleNumpad_desktop(digit) {
            if (selectedItemForNumpad === null) {
                showToast('Select an order item first', 'warning');
                return;
            }

            if (currentOrder[selectedItemForNumpad]) {
                const newQty = parseInt(digit.toString());
                if (newQty > 0) {
                    currentOrder[selectedItemForNumpad].quantity = newQty;
                    updateOrderDisplay();
                    showToast(`Quantity set to ${newQty}`, 'success');
                }
            }
        }

        function handleNumpadClear_desktop() {
            if (selectedItemForNumpad !== null && currentOrder[selectedItemForNumpad]) {
                currentOrder[selectedItemForNumpad].quantity = 1;
                updateOrderDisplay();
                showToast('Quantity reset to 1', 'info');
            }
        }

        function handleNumpadBackspace_desktop() {
            if (selectedItemForNumpad !== null && currentOrder[selectedItemForNumpad]) {
                const currentQty = currentOrder[selectedItemForNumpad].quantity;
                if (currentQty > 1) {
                    currentOrder[selectedItemForNumpad].quantity = currentQty - 1;
                    updateOrderDisplay();
                    showToast(`Quantity reduced to ${currentQty - 1}`, 'info');
                } else {
                    showToast('Minimum quantity is 1', 'warning');
                }
            }
        }

        // Handle escape key to close modals
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (els.itemOptionSelectModal && !els.itemOptionSelectModal.classList.contains('hidden')) {
                    cancelOptionSelection();
                }
                closeLoginModal();
                closeManagementModal();
                closeWaiterOrdersModal();
                closeDaySummaryModal();
            }
        });


