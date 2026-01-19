// --- Demo-specific additions ---
        const DEMO_MODE = true;
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
        const LOCAL_STORAGE_PREFIX = 'pospalDemoCoffee';

        // --- Global State & Configuration (Modified for Demo) ---
        let menu = {}; 
        let selectedCategory = null; 
        let editingItem = null; 
        let currentOrder = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PREFIX + 'CurrentOrder')) || [];
        let currentOrderLineItemCounter = parseInt(localStorage.getItem(LOCAL_STORAGE_PREFIX + 'OrderLineItemCounter')) || 0; 
        let orderNumber = parseInt(localStorage.getItem(LOCAL_STORAGE_PREFIX + 'OrderNumber')) || 1; 
        let universalOrderComment = localStorage.getItem(LOCAL_STORAGE_PREFIX + 'UniversalOrderComment') || "";
        let selectedTableNumber = localStorage.getItem(LOCAL_STORAGE_PREFIX + 'SelectedTable') || "";
        let isPaidByCard = false;

        let isMobileOrderPanelOpen = false;
        let itemForNumpad = null; 
        let numpadCurrentInput = "";

        let itemBeingConfigured = null; 
        let currentOptionSelectionStep = null; 

        const SELECTED_TABLE_KEY = LOCAL_STORAGE_PREFIX + 'SelectedTable';

        const elements = {}; 

        function cacheDOMElements() {
            elements.headerOrderNumber = document.getElementById('header-order-number');
            elements.headerTableInput = document.getElementById('header-table-input');
            elements.headerTableContainer = document.getElementById('header-table-container');
            elements.realtimeClock = document.getElementById('realtime-clock');
            elements.categoriesContainer = document.getElementById('categories');
            elements.productsContainer = document.getElementById('products');
            elements.orderItemsContainer = document.getElementById('order-items-container');
            elements.emptyOrderMessage = document.getElementById('empty-order-message');
            elements.orderTotalDisplay = document.getElementById('order-total');
            elements.universalOrderCommentInput = document.getElementById('universalOrderCommentInput');
            elements.paidByCardCheckbox = document.getElementById('paidByCardCheckbox');
            elements.mobileOrderToggle = document.getElementById('mobile-order-toggle');
            elements.mobileOrderCountBadge = document.getElementById('mobile-order-count-badge');
            elements.orderPanel = document.getElementById('order-panel');
            elements.orderPanelBackdrop = document.getElementById('order-panel-backdrop');
            elements.sendOrderBtn = document.getElementById('sendOrderBtn');
            elements.settingsGearContainer = document.getElementById('settings-gear-container');
            
            elements.loginModal = document.getElementById('loginModal');
            elements.loginForm = document.getElementById('loginForm');
            elements.passwordInput = document.getElementById('passwordInput');
            elements.loginError = document.getElementById('loginError');
            elements.loginSubmitBtn = document.getElementById('loginSubmitBtn');
            
            elements.managementModal = document.getElementById('managementModal');
            elements.itemFormModal = document.getElementById('itemFormModal');
            elements.itemFormModalTitle = document.getElementById('itemFormModalTitle');
            elements.daySummaryModal = document.getElementById('daySummaryModal');
            elements.daySummaryContent = document.getElementById('daySummaryContent');
            elements.itemOptionSelectModal = document.getElementById('itemOptionSelectModal');
            elements.optionModalItemName = document.getElementById('optionModalItemName');
            elements.optionModalItemDescription = document.getElementById('optionModalItemDescription');
            elements.optionModalOptionsContainer = document.getElementById('optionModalOptionsContainer');
            elements.confirmOptionBtn = document.getElementById('confirmOptionBtn');
            elements.itemNameInput = document.getElementById('itemName');
            elements.itemPriceInput = document.getElementById('itemPrice');
            elements.itemCategorySelect = document.getElementById('itemCategory');
            elements.itemIdInput = document.getElementById('itemId'); 
            elements.saveItemBtn = document.getElementById('saveItemBtn');
            elements.existingItemsListModal = document.getElementById('existingItemsListModal');
            elements.itemHasOptionsCheckboxModal = document.getElementById('itemHasOptionsModal'); 
            elements.itemOptionsModalContainer = document.getElementById('itemOptionsModalContainer');
            elements.itemOptionsListDisplayModal = document.getElementById('itemOptionsListDisplayModal');
            elements.newOptionNameInputModal = document.getElementById('newOptionNameInputModal');
            elements.newOptionPriceInputModal = document.getElementById('newOptionPriceInputModal'); 
            elements.categoryNameInput = document.getElementById('categoryName');
            elements.existingCategoriesListModal = document.getElementById('existingCategoriesListModal');
            elements.toast = document.getElementById('toast');
            elements.toastMessage = document.getElementById('toast-message');
            elements.numpadContainer = document.getElementById('numpad-container');
            elements.numpadItemNameDisplay = document.getElementById('numpad-item-name');
            elements.todaysOrdersList = document.getElementById('todaysOrdersList');
            elements.appVersionContainer = document.getElementById('appVersionContainer');
            elements.appVersion = document.getElementById('appVersion');
            elements.demoModeBanner = document.getElementById('demo-mode-banner');
        }

        function showDemoModeBanner() {
            if(elements.demoModeBanner) {
                elements.demoModeBanner.classList.remove('hidden');
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            cacheDOMElements();
            initializeAppState();
            startClock();

            if(elements.universalOrderCommentInput) {
                elements.universalOrderCommentInput.addEventListener('input', (e) => {
                    universalOrderComment = e.target.value;
                    localStorage.setItem(LOCAL_STORAGE_PREFIX + 'UniversalOrderComment', universalOrderComment);
                });
            }
            
            if(elements.paidByCardCheckbox) {
                elements.paidByCardCheckbox.addEventListener('change', (e) => {
                    isPaidByCard = e.target.checked;
                });
            }
            
            if(elements.headerTableInput) {
                elements.headerTableInput.addEventListener('change', handleTableNumberChange);
                elements.headerTableInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        handleTableNumberChange(e);
                        e.target.blur();
                    }
                });
            }

            if (elements.loginForm) {
                elements.loginForm.addEventListener('submit', handleLogin);
            }

            updateOrderDisplay();
        });

        // --- MOCKED/DEMO FUNCTIONS ---

        function initializeAppState() {
            showDemoModeBanner();
            fetchAndUpdateOrderNumber();
            const savedMenu = localStorage.getItem(LOCAL_STORAGE_PREFIX + 'Menu');
            menu = savedMenu ? JSON.parse(savedMenu) : JSON.parse(JSON.stringify(MOCK_MENU_DATA));
            loadMenu(); 
            selectedTableNumber = localStorage.getItem(SELECTED_TABLE_KEY) || "";
            if(elements.headerTableInput) elements.headerTableInput.value = selectedTableNumber;
            if(elements.universalOrderCommentInput) elements.universalOrderCommentInput.value = localStorage.getItem(LOCAL_STORAGE_PREFIX + 'UniversalOrderComment') || "";
        }

        async function fetchAndUpdateOrderNumber() {
            if(elements.headerOrderNumber) elements.headerOrderNumber.textContent = orderNumber;
        }
        
        async function loadMenu() {
            if (Object.keys(menu).length > 0 && (!selectedCategory || !menu[selectedCategory])) {
                selectedCategory = Object.keys(menu)[0];
            } else if (Object.keys(menu).length === 0) {
                selectedCategory = null;
            }
            renderCategories();
            populateManagementCategorySelect();
        }

        async function saveMenuToServer() {
            localStorage.setItem(LOCAL_STORAGE_PREFIX + 'Menu', JSON.stringify(menu));
            showToast("Menu saved to local storage (Demo Mode).", "info");
            return true;
        }

        async function handleLogin(event) {
            event.preventDefault();
            const password = elements.passwordInput.value;
            elements.loginError.classList.add('hidden');

            if (password === "9999") {
                closeLoginModal();
                openManagementModal();
            } else {
                elements.loginError.textContent = 'Invalid password. Please try again.';
                elements.loginError.classList.remove('hidden');
                elements.passwordInput.select();
            }
        }

        async function sendOrder() {
            if (!elements.sendOrderBtn) return;
            if (!currentOrder.length) { showToast('Order is empty!', 'warning'); return; }
            if (!selectedTableNumber || selectedTableNumber.trim() === "") {
                showToast('Please select a table.', 'warning');
                if (elements.headerTableContainer) {
                    elements.headerTableContainer.classList.add('ring-2', 'ring-red-500');
                    setTimeout(() => { elements.headerTableContainer.classList.remove('ring-2', 'ring-red-500'); }, 2000);
                }
                return;
            }
            elements.sendOrderBtn.disabled = true;
            elements.sendOrderBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-1"></i> Sending...';
            setTimeout(() => {
                showToast(`Order #${orderNumber} Sent! (Demo Mode)`, "success");
                orderNumber++;
                localStorage.setItem(LOCAL_STORAGE_PREFIX + 'OrderNumber', orderNumber.toString());
                clearOrderData();
                if(elements.sendOrderBtn) {
                    elements.sendOrderBtn.disabled = false;
                    elements.sendOrderBtn.innerHTML = '<i class="fas fa-paper-plane mr-1"></i> Send Order';
                }
            }, 1000);
        }

        async function loadTodaysOrdersForReprint() {
            if (!elements.todaysOrdersList) return;
            elements.todaysOrdersList.innerHTML = '<p class="text-xs text-gray-500 italic p-4">Order history is disabled in Demo Mode.</p>';
        }

        async function reprintOrder(orderNumToReprint) {
            showToast(`Reprinting Order #${orderNumToReprint} (Demo Mode)`, "success");
        }

        async function openDaySummaryModal() {
            if (!elements.daySummaryModal || !elements.daySummaryContent) return;
            elements.daySummaryModal.classList.remove('hidden');
            elements.daySummaryModal.classList.add('flex');
            renderDaySummary({
                status: 'success',
                total_orders: 42,
                cash_total: 857.50,
                card_total: 1242.00,
                grand_total: 2099.50
            });
        }
        
        async function fetchAnalytics(url) {
            const MOCK_ANALYTICS_DATA = {
                grossRevenue: 4892.75,
                totalOrders: 83,
                atv: 58.95,
                paymentMethods: { cash: 1985.25, card: 2907.50 },
                salesByCategory: [
                    { category: 'Καφέδες & Ροφήματα', total: 2750.00 },
                    { category: 'Brunch', total: 1240.50 },
                    { category: 'Σνακ & Σάντουιτς', total: 550.25 },
                    { category: 'Γλυκά (ημέρας)', total: 352.00 }
                ],
                topRevenueItems: [
                    { name: 'Espresso διπλός', revenue: 990.00 },
                    { name: 'Cappuccino', revenue: 884.00 },
                    { name: 'Latte', revenue: 627.00 }
                ],
                bestSellers: [
                    { name: 'Espresso μονός', quantity: 88 },
                    { name: 'Cappuccino', quantity: 75 },
                    { name: 'Club sandwich', quantity: 45 }
                ],
                worstSellers: [
                    { name: 'Μηλόπιτα', quantity: 8 },
                    { name: 'Ομελέτα λαχανικών', quantity: 12 },
                    { name: 'Flat white', quantity: 15 }
                ],
                salesByHour: [
                    { hour: 12, total: 350.50 }, { hour: 13, total: 580.00 },
                    { hour: 14, total: 210.00 }, { hour: 15, total: 150.75 },
                    { hour: 18, total: 620.00 }, { hour: 19, total: 1150.50 },
                    { hour: 20, total: 1331.00 }, { hour: 21, total: 500.00 }
                ]
            };
            renderAnalytics(MOCK_ANALYTICS_DATA);
            showToast("Sample analytics loaded.", "success");
        }

        async function loadAppVersion() {
            if(elements.appVersion) elements.appVersion.textContent = 'Demo v1.1';
        }
        
        async function shutdownApplication() {
            alert("Shutdown is disabled in Demo Mode.");
        }

        // --- ALL OTHER ORIGINAL FUNCTIONS from POSPal.html are copied below ---
        // (No changes needed for the functions below this line, they are included for completeness)
        
        function startClock() {
            if (!elements.realtimeClock) return;
            const update = () => {
                elements.realtimeClock.textContent = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
            };
            update();
            setInterval(update, 1000 * 60);
        }

        function renderCategories() {
            if (!elements.categoriesContainer) return;
            elements.categoriesContainer.innerHTML = '';

            if (Object.keys(menu).length === 0) {
                elements.categoriesContainer.innerHTML = '<p class="text-gray-500 italic">No categories defined.</p>';
                if (elements.productsContainer) {
                    elements.productsContainer.innerHTML = '<p class="text-gray-600 italic col-span-full text-center py-8">Please add categories and items in Management.</p>';
                }
                return;
            }

            const selectEl = document.createElement('select');
            selectEl.className = 'w-full p-2.5 border border-gray-400 rounded-md shadow-sm bg-white text-sm';
            selectEl.id = 'categorySelectorDropdown';

            Object.keys(menu).forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                if (category === selectedCategory) {
                    option.selected = true;
                }
                selectEl.appendChild(option);
            });

            selectEl.onchange = (event) => {
                selectedCategory = event.target.value;
                renderProductsForSelectedCategory();
            };

            elements.categoriesContainer.appendChild(selectEl);

            if (selectedCategory && Object.keys(menu).includes(selectedCategory)) {
                 renderProductsForSelectedCategory();
            } else if (Object.keys(menu).length > 0 && selectEl.options.length > 0) {
                selectedCategory = selectEl.value;
                renderProductsForSelectedCategory();
            } else {
                 if (elements.productsContainer) elements.productsContainer.innerHTML = '<p class="text-gray-600 italic col-span-full text-center py-8">Select a category.</p>';
            }
        }

        function renderProductsForSelectedCategory() {
            if (!elements.productsContainer) return;
            elements.productsContainer.innerHTML = '';
            if (!selectedCategory || !menu[selectedCategory] || menu[selectedCategory].length === 0) {
                elements.productsContainer.innerHTML = `<p class="text-gray-600 italic col-span-full text-center py-8">No items in "${selectedCategory || 'this'}" category.</p>`;
                return;
            }

            menu[selectedCategory].forEach(item => {
                const card = document.createElement('div');
                card.className = 'product-card bg-white rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden flex flex-col cursor-pointer border border-gray-200';
                card.onclick = () => addToOrder(item.id);

                let badgeIconsHTML = '';
                const hasGenOptions = item.hasGeneralOptions && item.generalOptions && item.generalOptions.length > 0;

                let actualBadgeElements = [];
                if (hasGenOptions) {
                    actualBadgeElements.push(`<span class="options-badge inline-flex items-center justify-center p-1 w-6 h-6 rounded"><i class="fas fa-cogs text-sm"></i></span>`);
                }

                if (actualBadgeElements.length > 0) {
                    badgeIconsHTML = `
                        <div class="absolute bottom-2 right-2 flex flex-col space-y-1">
                            ${actualBadgeElements.join('')}
                        </div>
                    `;
                }

                card.innerHTML = `
                    <div class="relative p-3 flex-grow flex flex-col h-full">
                        <div class="flex-grow flex flex-col pr-8"> 
                            <div class="flex-grow">
                                <h3 class="text-sm font-semibold text-gray-800 mb-1">${item.name}</h3>
                            </div>
                            <div class="mt-auto">
                               <p class="text-lg font-bold text-black">€${(item.price || 0).toFixed(2)}</p>
                            </div>
                        </div>
                        ${badgeIconsHTML}
                    </div>
                `;
                elements.productsContainer.appendChild(card);
            });
        }
        
        function addToOrder(itemId) {
            let menuItem;
            for (const categoryKey in menu) {
                const found = (menu[categoryKey] || []).find(i => i.id === itemId);
                if (found) { menuItem = found; break; }
            }

            if (!menuItem) {
                console.error("Menu item not found for ID:", itemId);
                showToast("Error: Item not found.", 'error');
                return;
            }

            itemBeingConfigured = {...menuItem}; 
            currentOptionSelectionStep = null; 

            const hasGenOpts = (itemBeingConfigured.hasGeneralOptions && itemBeingConfigured.generalOptions && Array.isArray(itemBeingConfigured.generalOptions) && itemBeingConfigured.generalOptions.length > 0);

            if (hasGenOpts) {
                currentOptionSelectionStep = 'general';
                openItemOptionSelectModal(itemBeingConfigured, 'general_item_option');
            } else {
                finalizeAndAddOrderItem(itemBeingConfigured, []);
                resetMultiStepSelection();
            }
        }

        function finalizeAndAddOrderItem(baseItem, generalChoicesWithOptions) { 
            currentOrderLineItemCounter++;
            localStorage.setItem(LOCAL_STORAGE_PREFIX + 'OrderLineItemCounter', currentOrderLineItemCounter.toString());

            let uniqueSuffixParts = [];
            if (generalChoicesWithOptions && generalChoicesWithOptions.length > 0) {
                 uniqueSuffixParts.push(...generalChoicesWithOptions.map(opt => opt.name.replace(/\s+/g, '_')));
            }
            
            const uniqueLineIdSuffix = uniqueSuffixParts.length > 0 ? uniqueSuffixParts.join('-') : 'noopts';
            const uniqueLineId = `${baseItem.id}-${uniqueLineIdSuffix}-line-${currentOrderLineItemCounter}`;

            let itemPriceWithModifiers = parseFloat(baseItem.price || 0);
            if (generalChoicesWithOptions && generalChoicesWithOptions.length > 0) {
                generalChoicesWithOptions.forEach(opt => {
                    itemPriceWithModifiers += parseFloat(opt.priceChange || 0);
                });
            }

            const orderItem = {
                ...baseItem, 
                quantity: 1,
                comment: "",
                orderId: uniqueLineId,
                generalSelectedOptions: generalChoicesWithOptions || [], 
                itemPriceWithModifiers: itemPriceWithModifiers 
            };
            currentOrder.push(orderItem);
            updateOrderDisplay();
        }
        
        function resetMultiStepSelection() {
            itemBeingConfigured = null;
            currentOptionSelectionStep = null;
        }


        function updateOrderDisplay() {
            if (!elements.orderItemsContainer || !elements.emptyOrderMessage) return;
            elements.orderItemsContainer.innerHTML = '';
            let total = 0;

            if (currentOrder.length === 0) {
                elements.emptyOrderMessage.style.display = 'block';
            } else {
                elements.emptyOrderMessage.style.display = 'none';
                currentOrder.forEach(item => {
                    const pricePerUnit = typeof item.itemPriceWithModifiers === 'number' ? item.itemPriceWithModifiers : parseFloat(item.price || 0);
                    const itemTotal = pricePerUnit * item.quantity;
                    total += itemTotal;

                    const div = document.createElement('div');
                    div.className = `order-item p-2 border-b border-gray-200 flex items-center justify-between text-sm ${item.orderId === itemForNumpad?.orderId ? 'selected-for-numpad' : ''}`;

                    let optionDisplayHTML = '';
                    if (item.generalSelectedOptions && item.generalSelectedOptions.length > 0) {
                        item.generalSelectedOptions.forEach(opt => {
                            const priceChangeDisplay = parseFloat(opt.priceChange || 0) !== 0 ? ` (${parseFloat(opt.priceChange || 0) > 0 ? '+' : ''}€${parseFloat(opt.priceChange || 0).toFixed(2)})` : '';
                            optionDisplayHTML += `<span class="block text-xs text-gray-600 ml-4">↳ ${opt.name}${priceChangeDisplay}</span>`;
                        });
                    }
                    let commentText = item.comment ? `<span class="block text-xs text-gray-600 ml-4 break-all"><em>Note: ${item.comment}</em></span>` : '';

                    div.innerHTML = `
                        <div class="flex-grow pr-2">
                            <span class="font-medium text-gray-800">${item.name}</span>
                            <span class="text-xs text-gray-500 ml-1">(Base: €${parseFloat(item.price || 0).toFixed(2)})</span>
                            ${optionDisplayHTML}
                            ${commentText}
                        </div>
                        <div class="flex flex-col items-end space-y-1 flex-shrink-0">
                             <span class="font-semibold text-gray-800">€${pricePerUnit.toFixed(2)} x ${item.quantity} = €${itemTotal.toFixed(2)}</span>
                            <div class="flex items-center space-x-1">
                                <button onclick="decrementQuantity('${item.orderId}')" class="p-1 text-gray-500 hover:text-red-600"><i class="fas fa-minus-circle"></i></button>
                                <span class="font-semibold text-gray-800 w-6 text-center cursor-pointer" onclick="openNumpadForOrderItem('${item.orderId}', ${item.quantity}, '${item.name.replace(/'/g, "\\'")}')">${item.quantity}</span>
                                <button onclick="incrementQuantity('${item.orderId}')" class="p-1 text-gray-500 hover:text-green-600"><i class="fas fa-plus-circle"></i></button>
                                <button onclick="promptForItemComment('${item.orderId}')" class="p-1 text-gray-500 hover:text-black" title="Add Note"><i class="fas fa-comment-dots"></i></button>
                                <button onclick="removeItemByOrderId('${item.orderId}')" class="p-1 text-red-500 hover:text-red-700" title="Remove Item"><i class="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    `;
                    elements.orderItemsContainer.appendChild(div);
                });
            }

            if(elements.orderTotalDisplay) elements.orderTotalDisplay.textContent = `€${total.toFixed(2)}`;
            localStorage.setItem(LOCAL_STORAGE_PREFIX + 'CurrentOrder', JSON.stringify(currentOrder));
            updateMobileOrderBadge();
        }

        function incrementQuantity(orderId) { const item = currentOrder.find(i => i.orderId === orderId); if (item) { item.quantity++; updateOrderDisplay(); } }
        function decrementQuantity(orderId) { const item = currentOrder.find(i => i.orderId === orderId); if (item) { item.quantity--; if (item.quantity <= 0) removeItemByOrderId(orderId); else updateOrderDisplay(); } }
        function removeItemByOrderId(orderId) { currentOrder = currentOrder.filter(item => item.orderId !== orderId); if (itemForNumpad && itemForNumpad.orderId === orderId) hideNumpad(); updateOrderDisplay(); showToast('Item removed from order.', 'info'); }
        function promptForItemComment(orderId) { const item = currentOrder.find(i => String(i.orderId) === orderId); if (item) { let currentSelectionDisplay = ""; if (item.generalSelectedOptions && item.generalSelectedOptions.length > 0) { currentSelectionDisplay += ` (Opt: ${item.generalSelectedOptions.map(opt => opt.name + (parseFloat(opt.priceChange || 0) !== 0 ? ` ${parseFloat(opt.priceChange || 0) > 0 ? '+' : ''}€${parseFloat(opt.priceChange || 0).toFixed(2)}` : '')).join(', ')})`; } const newComment = prompt("Enter note for " + item.name + currentSelectionDisplay.trim() + ":", item.comment || ""); if (newComment !== null) { item.comment = newComment.trim(); updateOrderDisplay(); } } }
        function clearOrderData() { currentOrder = []; universalOrderComment = ""; if(elements.universalOrderCommentInput) elements.universalOrderCommentInput.value = ""; localStorage.removeItem(LOCAL_STORAGE_PREFIX + 'UniversalOrderComment'); currentOrderLineItemCounter = 0; localStorage.setItem(LOCAL_STORAGE_PREFIX + 'OrderLineItemCounter', '0'); isPaidByCard = false; if(elements.paidByCardCheckbox) elements.paidByCardCheckbox.checked = false; hideNumpad(); updateOrderDisplay(); fetchAndUpdateOrderNumber(); }
        function newOrder() { if (currentOrder.length > 0 && !confirm("Clear current order and start a new one? This will clear all items and notes.")) { return; } clearOrderData(); showToast('Order cleared. Ready for the next order.', 'info'); }
        function toggleMobileOrderPanel() { isMobileOrderPanelOpen = !isMobileOrderPanelOpen; if (isMobileOrderPanelOpen) { elements.orderPanel.classList.remove('translate-y-full'); elements.orderPanelBackdrop.classList.remove('hidden'); if (elements.settingsGearContainer) elements.settingsGearContainer.classList.add('hidden'); document.body.style.overflow = 'hidden'; } else { elements.orderPanel.classList.add('translate-y-full'); elements.orderPanelBackdrop.classList.add('hidden'); if (elements.settingsGearContainer) elements.settingsGearContainer.classList.remove('hidden'); document.body.style.overflow = ''; hideNumpad(); } }
        function updateMobileOrderBadge() { const count = currentOrder.reduce((sum, item) => sum + item.quantity, 0); if (elements.mobileOrderCountBadge) { if (count > 0) { elements.mobileOrderCountBadge.textContent = count; elements.mobileOrderCountBadge.classList.remove('hidden'); } else { elements.mobileOrderCountBadge.classList.add('hidden'); } } }
        function openNumpadForOrderItem(orderId, currentQuantity, itemName) { itemForNumpad = { orderId, currentQuantity, itemName }; numpadCurrentInput = currentQuantity.toString(); if (elements.numpadItemNameDisplay) elements.numpadItemNameDisplay.innerHTML = `Quantity for: <span class="font-bold">${itemName}</span>`; if (elements.numpadContainer) elements.numpadContainer.classList.remove('hidden'); updateOrderDisplay(); }
        function hideNumpad() { if (elements.numpadContainer) elements.numpadContainer.classList.add('hidden'); itemForNumpad = null; numpadCurrentInput = ""; updateOrderDisplay(); }
        function handleNumpadInput(value) { if (!itemForNumpad) return; if (value === 'clear') { numpadCurrentInput = ""; } else if (value === 'backspace') { numpadCurrentInput = numpadCurrentInput.slice(0, -1); } else if (numpadCurrentInput.length < 3) { numpadCurrentInput += value; } }
        function confirmNumpadInput() { if (!itemForNumpad) return; const newQuantity = parseInt(numpadCurrentInput); const item = currentOrder.find(i => i.orderId === itemForNumpad.orderId); if (item) { if (!isNaN(newQuantity) && newQuantity > 0) { item.quantity = newQuantity; } else if (numpadCurrentInput === "" || newQuantity === 0) { removeItemByOrderId(item.orderId); } else { showToast("Invalid quantity. Please enter a number greater than 0.", "warning"); } } hideNumpad(); }
        function handleTableNumberChange(event) { const newTableNumber = event.target.value.trim(); if (selectedTableNumber !== newTableNumber) { selectedTableNumber = newTableNumber; localStorage.setItem(SELECTED_TABLE_KEY, selectedTableNumber); } }
        let currentItemOptionContext = null; 
        function openItemOptionSelectModal(itemForModal, context) {  document.querySelectorAll('#optionModalOptionsContainer input').forEach(input => { input.checked = false; const parentDiv = input.closest('.option-selectable'); if (parentDiv) parentDiv.classList.remove('selected', 'ring-2', 'border-black', 'bg-gray-100'); }); currentItemOptionContext = context;  if (!elements.itemOptionSelectModal || !elements.optionModalItemName || !elements.optionModalOptionsContainer) return; elements.optionModalItemName.textContent = `Options for: ${itemForModal.name}`; elements.optionModalOptionsContainer.innerHTML = ''; elements.confirmOptionBtn.disabled = true; let optionsToShow = []; let description = ""; let inputType = 'radio'; if (context === 'general_item_option') { optionsToShow = itemForModal.generalOptions || []; description = `Select option(s) for ${itemForModal.name}. (Multiple selections allowed)`; inputType = 'checkbox'; } else { console.warn("Modal opened with unexpected context or item structure:", itemForModal, context); elements.optionModalOptionsContainer.innerHTML = `<p class="text-sm text-gray-500">No suitable options for this step.</p>`; elements.itemOptionSelectModal.classList.remove('hidden'); elements.itemOptionSelectModal.classList.add('flex'); return; } elements.optionModalItemDescription.textContent = description; if (optionsToShow.length > 0) { elements.confirmOptionBtn.disabled = false; optionsToShow.forEach((optionData, index) => {  const optionName = (typeof optionData === 'object' && optionData.name) ? optionData.name : optionData; const priceChange = (typeof optionData === 'object' && typeof optionData.priceChange === 'number') ? optionData.priceChange : 0; const optionId = `modal_item_opt_${itemForModal.id}_${context}_${optionName.replace(/\s+/g, '_')}_${index}`; const div = document.createElement('div'); div.className = "option-selectable p-3 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer group focus-within:ring-2"; const inputElement = document.createElement('input'); inputElement.type = inputType; inputElement.name = `item_option_for_${itemForModal.id}_${context}`;  if (inputType === 'checkbox') { inputElement.name = optionId;  } inputElement.id = optionId; inputElement.value = optionName;  inputElement.dataset.priceChange = priceChange;  inputElement.className = `form-${inputType} h-4 w-4 text-black border-gray-300 focus:ring-black accent-black`; let labelText = optionName; if (inputType === 'checkbox' && priceChange !== 0) { labelText += ` (${priceChange > 0 ? '+' : ''}€${priceChange.toFixed(2)})`; } const label = document.createElement('label'); label.htmlFor = optionId; label.textContent = labelText; label.className = "ml-2 text-sm text-gray-700 cursor-pointer flex-grow"; const innerFlex = document.createElement('div'); innerFlex.className = "flex items-center w-full"; innerFlex.appendChild(inputElement); innerFlex.appendChild(label); div.appendChild(innerFlex); div.onclick = function(event) { if (event.target === inputElement || event.target === label || label.contains(event.target)) { return;  } inputElement.click();  }; inputElement.addEventListener('change', function() { const parentDiv = this.closest('.option-selectable'); if (!parentDiv) return; if (this.type === 'radio') { if (this.checked) { elements.optionModalOptionsContainer.querySelectorAll('input[type="radio"][name="' + this.name + '"]').forEach(otherRadio => { const otherParentDiv = otherRadio.closest('.option-selectable'); if (otherParentDiv && otherRadio !== this) { otherParentDiv.classList.remove('selected', 'border-black', 'bg-gray-100'); } }); parentDiv.classList.add('selected', 'border-black', 'bg-gray-100'); } } else {  if (this.checked) { parentDiv.classList.add('selected', 'border-black', 'bg-gray-100'); } else { parentDiv.classList.remove('selected', 'border-black', 'bg-gray-100'); } } }); if (inputType === 'radio' && index === 0) {  inputElement.checked = true; setTimeout(() => {  const parentDiv = inputElement.closest('.option-selectable'); if(parentDiv && inputElement.checked) {  parentDiv.classList.add('selected', 'border-black', 'bg-gray-100'); } }, 0); } elements.optionModalOptionsContainer.appendChild(div); }); } else { elements.optionModalOptionsContainer.innerHTML = `<p class="text-sm text-gray-500">No specific options defined for this item.</p>`; } elements.itemOptionSelectModal.classList.remove('hidden'); elements.itemOptionSelectModal.classList.add('flex'); }
        function cancelOptionSelection() { if(elements.itemOptionSelectModal) { elements.itemOptionSelectModal.classList.add('hidden'); elements.itemOptionSelectModal.classList.remove('flex'); } currentItemOptionContext = null; resetMultiStepSelection();  }
        function confirmOptionSelection() { if (!itemBeingConfigured || !elements.optionModalOptionsContainer || !currentItemOptionContext) { console.error("State missing for confirmOptionSelection", itemBeingConfigured, currentItemOptionContext); return; } if (currentItemOptionContext === 'general_item_option') { const checkedBoxes = elements.optionModalOptionsContainer.querySelectorAll('input[type="checkbox"]:checked'); const generalSelectionsWithOptions = Array.from(checkedBoxes).map(cb => { return { name: cb.value, priceChange: parseFloat(cb.dataset.priceChange || 0) }; }); finalizeAndAddOrderItem(itemBeingConfigured, generalSelectionsWithOptions); resetMultiStepSelection(); cancelOptionSelection();  } }
        let currentManagementTab = 'analytics'; let tempItemOptionsModal = []; 
        function openLoginModal() { if (!elements.loginModal) return; elements.passwordInput.value = ''; elements.loginError.classList.add('hidden'); elements.loginModal.classList.remove('hidden'); elements.loginModal.classList.add('flex'); elements.passwordInput.focus(); }
        function closeLoginModal() { if (!elements.loginModal) return; elements.loginModal.classList.add('hidden'); elements.loginModal.classList.remove('flex'); }
        function openManagementModal() { if (!elements.managementModal) return; elements.managementModal.classList.remove('hidden'); elements.managementModal.classList.add('flex'); document.body.style.overflow = 'hidden'; loadManagementData(); loadAppVersion(); const analyticsTabButton = document.querySelector('.management-tab[onclick*="\'analytics\'"]'); if (analyticsTabButton) { switchManagementTab('analytics', analyticsTabButton);  } }
        function closeManagementModal() { if (!elements.managementModal) return; elements.managementModal.classList.add('hidden'); elements.managementModal.classList.remove('flex'); document.body.style.overflow = ''; }
        function switchManagementTab(tabName, clickedButton) { currentManagementTab = tabName; document.querySelectorAll('.management-tab').forEach(btn => { btn.classList.remove('bg-white', 'shadow-sm', 'text-gray-800'); btn.classList.add('text-gray-600', 'hover:bg-gray-200'); }); if (clickedButton) { clickedButton.classList.add('bg-white', 'shadow-sm', 'text-gray-800'); clickedButton.classList.remove('text-gray-600', 'hover:bg-gray-200'); } const analyticsView = document.getElementById('analyticsManagement'); const itemsView = document.getElementById('itemsManagement'); const categoriesView = document.getElementById('categoriesManagement'); const orderHistoryView = document.getElementById('orderHistoryManagement'); if (!analyticsView || !itemsView || !categoriesView || !orderHistoryView) return; analyticsView.style.display = 'none'; itemsView.style.display = 'none'; categoriesView.style.display = 'none'; orderHistoryView.style.display = 'none'; if (tabName === 'analytics') { analyticsView.style.display = 'block'; const todayButton = document.querySelector('.date-range-btn[onclick*="\'today\'"]'); loadAnalyticsData('today', todayButton); } else if (tabName === 'items') { itemsView.style.display = 'block'; } else if (tabName === 'categories') { categoriesView.style.display = 'block'; if (elements.categoryNameInput) elements.categoryNameInput.value = ''; } else if (tabName === 'orderHistory') { orderHistoryView.style.display = 'block'; loadTodaysOrdersForReprint(); } }
        function populateManagementCategorySelect() { if (!elements.itemCategorySelect) return; const currentCategoryValue = elements.itemCategorySelect.value; elements.itemCategorySelect.innerHTML = Object.keys(menu) .map(c => `<option value="${c}">${c}</option>`) .join(''); if (Object.keys(menu).length === 0) { elements.itemCategorySelect.innerHTML = '<option value="">Create a category first</option>'; } else if (currentCategoryValue && menu[currentCategoryValue]) { elements.itemCategorySelect.value = currentCategoryValue; } else if (elements.itemCategorySelect.options.length > 0) { elements.itemCategorySelect.selectedIndex = 0; } }
        function loadManagementData() { populateManagementCategorySelect(); renderExistingItemsInModal(); renderExistingCategoriesInModal(); }
        function renderExistingItemsInModal() { if (!elements.existingItemsListModal) return; elements.existingItemsListModal.innerHTML = ''; let itemCount = 0; Object.entries(menu).forEach(([category, items]) => { if (!items || items.length === 0) return; const categoryHeader = document.createElement('h5'); categoryHeader.className = "font-bold text-gray-700 mt-3 mb-1 pb-1 border-b border-gray-300"; categoryHeader.textContent = category; elements.existingItemsListModal.appendChild(categoryHeader); (items || []).forEach((item, index) => { itemCount++; const div = document.createElement('div'); div.className = `p-2 border border-gray-300 rounded-md flex justify-between items-center text-sm bg-white hover:bg-gray-50`; let itemDetails = `<span class="font-medium text-gray-800">${item.name}</span> <span class="text-xs text-gray-500 ml-1">- €${(item.price || 0).toFixed(2)}</span>`; const hasGeneralOpts = item.hasGeneralOptions && item.generalOptions && item.generalOptions.length > 0; if (hasGeneralOpts) {  itemDetails += `<span class="text-xs text-blue-600 ml-2">(+ Options)</span>`; } const isFirst = index === 0; const isLast = index === items.length - 1; const reorderButtons = ` <div class="flex items-center"> <button onclick="moveItemPosition(${item.id}, 'up')" class="px-2 py-1 text-gray-500 hover:text-black ${isFirst ? 'opacity-25 cursor-not-allowed' : ''}" ${isFirst ? 'disabled' : ''} title="Move Up"> <i class="fas fa-arrow-up"></i> </button> <button onclick="moveItemPosition(${item.id}, 'down')" class="px-2 py-1 text-gray-500 hover:text-black ${isLast ? 'opacity-25 cursor-not-allowed' : ''}" ${isLast ? 'disabled' : ''} title="Move Down"> <i class="fas fa-arrow-down"></i> </button> </div> `; div.innerHTML = ` <div class="flex items-center"> ${reorderButtons} <div class="ml-2">${itemDetails}</div> </div> <div class="space-x-1 flex-shrink-0"> <button onclick="openItemFormModal(${item.id})" class="px-2 py-1 text-xs btn-warning text-white rounded hover:opacity-80">Edit</button> <button onclick="deleteItem(${item.id})" class="px-2 py-1 text-xs btn-danger text-white rounded hover:opacity-80">Delete</button> </div> `; elements.existingItemsListModal.appendChild(div); }); }); if (itemCount === 0) { elements.existingItemsListModal.innerHTML = '<p class="text-xs text-gray-500 italic">No items created yet.</p>'; } }
        async function moveItemPosition(itemIdToMove, direction) { let categoryKey = null; let itemIndex = -1; for (const cat in menu) { const index = (menu[cat] || []).findIndex(i => i.id === itemIdToMove); if (index !== -1) { categoryKey = cat; itemIndex = index; break; } } if (categoryKey === null || itemIndex === -1) { showToast("Could not find item to move.", "error"); return; } const itemsArray = menu[categoryKey]; const itemToMove = itemsArray[itemIndex]; if (direction === 'up' && itemIndex > 0) { itemsArray.splice(itemIndex, 1); itemsArray.splice(itemIndex - 1, 0, itemToMove); } else if (direction === 'down' && itemIndex < itemsArray.length - 1) { itemsArray.splice(itemIndex, 1); itemsArray.splice(itemIndex + 1, 0, itemToMove); } else { return; } const success = await saveMenuToServer(); if (success) { showToast('Item order updated.', 'success'); await loadMenu(); loadManagementData(); } else { showToast('Failed to save new item order. Reverting.', 'error'); await loadMenu(); loadManagementData(); } }
        function renderExistingCategoriesInModal() { if (!elements.existingCategoriesListModal) return; elements.existingCategoriesListModal.innerHTML = ''; const categoryKeys = Object.keys(menu); if (categoryKeys.length === 0) { elements.existingCategoriesListModal.innerHTML = '<p class="text-xs text-gray-500 italic">No categories created yet.</p>'; return; } categoryKeys.forEach((categoryName, index) => { const isFirst = index === 0; const isLast = index === categoryKeys.length - 1; const reorderButtons = ` <div class="flex items-center"> <button onclick="moveCategoryPosition('${categoryName}', 'up')" class="px-2 py-1 text-gray-500 hover:text-black ${isFirst ? 'opacity-25 cursor-not-allowed' : ''}" ${isFirst ? 'disabled' : ''} title="Move Up"> <i class="fas fa-arrow-up"></i> </button> <button onclick="moveCategoryPosition('${categoryName}', 'down')" class="px-2 py-1 text-gray-500 hover:text-black ${isLast ? 'opacity-25 cursor-not-allowed' : ''}" ${isLast ? 'disabled' : ''} title="Move Down"> <i class="fas fa-arrow-down"></i> </button> </div> `; const div = document.createElement('div'); div.className = "p-2 border border-gray-300 rounded-md flex justify-between items-center text-sm bg-white hover:bg-gray-50"; div.innerHTML = ` <div class="flex items-center"> ${reorderButtons} <span class="font-medium text-gray-800 ml-2">${categoryName}</span> </div> <button onclick="deleteCategory('${categoryName}')" class="px-2 py-1 text-xs btn-danger text-white rounded hover:opacity-80">Delete</button> `; elements.existingCategoriesListModal.appendChild(div); }); }
        async function moveCategoryPosition(categoryNameToMove, direction) { const keys = Object.keys(menu); const index = keys.indexOf(categoryNameToMove); if (index === -1) { showToast("Could not find category to move.", "error"); return; } let newIndex; if (direction === 'up') { if (index === 0) return; newIndex = index - 1; } else { if (index === keys.length - 1) return; newIndex = index + 1; } [keys[index], keys[newIndex]] = [keys[newIndex], keys[index]]; const newMenu = {}; keys.forEach(key => { newMenu[key] = menu[key]; }); menu = newMenu; const success = await saveMenuToServer(); if (success) { showToast('Category order updated.', 'success'); renderCategories(); loadManagementData(); } else { showToast('Failed to save new category order. Reverting.', 'error'); await loadMenu(); loadManagementData(); } }
        function generateItemId() { const allItems = [].concat(...Object.values(menu).map(categoryItems => categoryItems || [])); return allItems.length > 0 ? Math.max(0, ...allItems.map(i => i.id || 0)) + 1 : 1; }
        function resetItemForm() { editingItem = null; if(elements.itemNameInput) elements.itemNameInput.value = ''; if(elements.itemPriceInput) elements.itemPriceInput.value = ''; if(elements.itemIdInput) elements.itemIdInput.value = '';  if(elements.itemCategorySelect && elements.itemCategorySelect.options.length > 0) elements.itemCategorySelect.selectedIndex = 0; if(elements.itemHasOptionsCheckboxModal) elements.itemHasOptionsCheckboxModal.checked = false; tempItemOptionsModal = [];  if (elements.newOptionNameInputModal) elements.newOptionNameInputModal.value = ''; if (elements.newOptionPriceInputModal) elements.newOptionPriceInputModal.value = ''; toggleItemOptionsUIInModal();  }
        function openItemFormModal(itemIdToEdit = null) { resetItemForm(); if (itemIdToEdit !== null) { elements.itemFormModalTitle.textContent = 'Edit Item'; populateItemFormForEdit(itemIdToEdit); } else { elements.itemFormModalTitle.textContent = 'Add New Item'; if(elements.saveItemBtn) elements.saveItemBtn.innerHTML = '💾 Save New Item'; } elements.itemFormModal.classList.remove('hidden'); elements.itemFormModal.classList.add('flex'); }
        function closeItemFormModal() { elements.itemFormModal.classList.add('hidden'); elements.itemFormModal.classList.remove('flex'); resetItemForm(); }
        function populateItemFormForEdit(itemIdToEdit) { let foundItem; let itemCategoryName; Object.entries(menu).forEach(([category, items]) => { const item = (items || []).find(i => i.id === itemIdToEdit); if (item) { foundItem = item; itemCategoryName = category; } }); if (foundItem) { editingItem = { ...foundItem }; if(elements.itemNameInput) elements.itemNameInput.value = foundItem.name; if(elements.itemPriceInput) elements.itemPriceInput.value = foundItem.price; if(elements.itemCategorySelect) elements.itemCategorySelect.value = itemCategoryName; if(elements.itemIdInput) elements.itemIdInput.value = foundItem.id;  if (foundItem.hasGeneralOptions && foundItem.generalOptions && Array.isArray(foundItem.generalOptions)) { tempItemOptionsModal = [...foundItem.generalOptions]; } else { tempItemOptionsModal = []; } if(elements.itemHasOptionsCheckboxModal) { elements.itemHasOptionsCheckboxModal.checked = (foundItem.hasGeneralOptions && tempItemOptionsModal.length > 0); } toggleItemOptionsUIInModal();  if(elements.saveItemBtn) elements.saveItemBtn.innerHTML = '🔄 Update Item'; } }
        async function saveItem() { if (!elements.itemNameInput || !elements.itemPriceInput || !elements.itemCategorySelect) return; const itemName = elements.itemNameInput.value.trim(); const itemPrice = parseFloat(elements.itemPriceInput.value);  const itemCategory = elements.itemCategorySelect.value; let itemIdVal = editingItem ? editingItem.id : generateItemId(); if (isNaN(itemIdVal)) { showToast('Error: Invalid Item ID.', 'error'); return; } if (!itemName || isNaN(itemPrice) || itemPrice < 0) { showToast('Item Name and a valid Base Price are required.', 'warning'); return; } if (!itemCategory && Object.keys(menu).length > 0) { showToast('Please select a category.', 'warning'); return; } if (Object.keys(menu).length === 0 && !itemCategory) { showToast('Please create a category first.', 'warning'); return; } const itemData = { id: itemIdVal, name: itemName, price: itemPrice,  hasGeneralOptions: elements.itemHasOptionsCheckboxModal.checked, generalOptions: (elements.itemHasOptionsCheckboxModal.checked && tempItemOptionsModal.length > 0) ? [...tempItemOptionsModal] : [] }; if (itemData.hasGeneralOptions && itemData.generalOptions.length === 0) { showToast('If "Has General Options" is checked, please add at least one option.', 'warning'); return; } if (editingItem) {  Object.keys(menu).forEach(cat => { const itemIndex = (menu[cat] || []).findIndex(i => i.id === editingItem.id); if (itemIndex > -1) { if (cat !== itemCategory) {  menu[cat].splice(itemIndex, 1);  } } }); } if (!menu[itemCategory]) menu[itemCategory] = []; const existingItemIndex = menu[itemCategory].findIndex(i => i.id === itemData.id); if (existingItemIndex > -1) { menu[itemCategory][existingItemIndex] = itemData;  } else {  menu[itemCategory].push(itemData); } const success = await saveMenuToServer(); if (success) { showToast(editingItem ? 'Item updated successfully!' : 'Item saved successfully!', 'success'); closeItemFormModal(); await loadMenu(); loadManagementData(); } else { showToast('Failed to save item to server. Reverting.', 'error'); await loadMenu(); } }
        async function deleteItem(itemIdToDelete) { if (!confirm('Are you sure you want to delete this item? This cannot be undone.')) return; let itemFoundAndDeletedLocally = false; Object.keys(menu).forEach(cat => { const itemIndex = (menu[cat] || []).findIndex(i => i.id === itemIdToDelete); if (itemIndex > -1) { menu[cat].splice(itemIndex, 1); itemFoundAndDeletedLocally = true; } }); if (!itemFoundAndDeletedLocally) { showToast('Item not found for deletion.', 'warning'); return; } const success = await saveMenuToServer(); if (success) { showToast('Item deleted successfully.', 'success'); await loadMenu(); loadManagementData(); } else { showToast('Failed to delete item on server. Reverting.', 'error'); await loadMenu(); } }
        async function saveCategory() { if (!elements.categoryNameInput) return; const categoryName = elements.categoryNameInput.value.trim(); if (!categoryName) {  showToast('Category name cannot be empty.', 'warning');  return;  } if (menu[categoryName]) {  showToast('Category already exists.', 'warning');  return;  } const newMenu = {...menu}; newMenu[categoryName] = []; try { const response = await fetch('/api/menu', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(newMenu) }); const contentType = response.headers.get('content-type'); if (!contentType || !contentType.includes('application/json')) { const text = await response.text(); throw new Error(`Invalid response: ${text.substring(0, 100)}`); } if (!response.ok) { const errorData = await response.json(); throw new Error(errorData.message || 'Failed to save category'); } menu = newMenu; showToast(`Category "${categoryName}" added successfully.`, 'success'); elements.categoryNameInput.value = ''; await loadMenu(); loadManagementData(); } catch (error) { showToast(`Failed to save category: ${error.message}`, 'error'); } }
        async function deleteCategory(categoryNameToDelete) { if (menu[categoryNameToDelete] && menu[categoryNameToDelete].length > 0) { if (!confirm(`Category "${categoryNameToDelete}" contains items. Are you sure you want to delete the category AND ALL ITS ITEMS? This cannot be undone.`)) return; } else { if (!confirm(`Are you sure you want to delete category "${categoryNameToDelete}"? This cannot be undone.`)) return; } const backupMenu = JSON.parse(JSON.stringify(menu)); delete menu[categoryNameToDelete]; const success = await saveMenuToServer(); if (success) { showToast(`Category "${categoryNameToDelete}" deleted successfully.`, 'success'); if (selectedCategory === categoryNameToDelete) { selectedCategory = Object.keys(menu)[0] || null; } await loadMenu(); loadManagementData(); } else { menu = backupMenu; showToast(`Failed to delete category "${categoryNameToDelete}" on server. Reverting.`, 'error'); await loadMenu(); loadManagementData(); } }
        function toggleItemOptionsUIInModal() { const hasOptions = document.getElementById('itemHasOptionsModal').checked; document.getElementById('itemOptionsModalContainer').style.display = hasOptions ? 'block' : 'none'; if(!hasOptions) { tempItemOptionsModal = []; } renderTemporaryOptionsListModal(); }
        function addOptionToItemFormTempModal() { if (!elements.newOptionNameInputModal || !elements.newOptionPriceInputModal) return; const optionName = elements.newOptionNameInputModal.value.trim(); const priceChangeText = elements.newOptionPriceInputModal.value.trim(); const priceChange = priceChangeText === "" ? 0 : parseFloat(priceChangeText); if (!optionName) { showToast('Option name cannot be empty.', 'warning'); return; } if (isNaN(priceChange)) { showToast('Price change must be a valid number or empty (for 0).', 'warning'); return; } if (tempItemOptionsModal.find(opt => opt.name === optionName)) { showToast('This general option name already exists for the item.', 'warning'); return; } tempItemOptionsModal.push({ name: optionName, priceChange: priceChange }); renderTemporaryOptionsListModal(); elements.newOptionNameInputModal.value = ''; elements.newOptionPriceInputModal.value = ''; elements.newOptionNameInputModal.focus(); }
        function renderTemporaryOptionsListModal() { if (!elements.itemOptionsListDisplayModal) return; elements.itemOptionsListDisplayModal.innerHTML = ''; if (tempItemOptionsModal.length === 0 && document.getElementById('itemHasOptionsModal').checked) { elements.itemOptionsListDisplayModal.innerHTML = '<p class="text-xs text-gray-500 italic w-full">No general options added yet.</p>'; return; } else if (tempItemOptionsModal.length === 0 && !document.getElementById('itemHasOptionsModal').checked) { elements.itemOptionsListDisplayModal.innerHTML = ''; return; } tempItemOptionsModal.forEach(opt => { const pillSpan = document.createElement('span'); pillSpan.className = 'option-pill';  const priceDisplay = parseFloat(opt.priceChange || 0) !== 0 ? ` (${parseFloat(opt.priceChange || 0) > 0 ? '+' : ''}€${parseFloat(opt.priceChange || 0).toFixed(2)})` : ''; pillSpan.textContent = `${opt.name}${priceDisplay}`; const removeBtn = document.createElement('button'); removeBtn.className = 'remove-option-btn';  removeBtn.innerHTML = '&times;';  removeBtn.title = `Remove option: ${opt.name}`; removeBtn.type = 'button';  removeBtn.onclick = () => removeTemporaryOptionModal(opt.name); pillSpan.appendChild(removeBtn); elements.itemOptionsListDisplayModal.appendChild(pillSpan); }); }
        function removeTemporaryOptionModal(optionNameToRemove) {  tempItemOptionsModal = tempItemOptionsModal.filter(opt => opt.name !== optionNameToRemove); renderTemporaryOptionsListModal(); }
        let toastTimeout; function showToast(message, type = 'info', duration = 3000) { if (!elements.toast || !elements.toastMessage) return; clearTimeout(toastTimeout); elements.toastMessage.textContent = message; elements.toast.className = 'fixed top-5 right-5 text-white px-4 py-2 rounded-md shadow-lg text-sm z-[100] opacity-0 transition-opacity duration-300'; switch(type) { case 'success': elements.toast.classList.add('bg-green-600'); break; case 'warning': elements.toast.classList.add('bg-yellow-500'); break; case 'error': elements.toast.classList.add('bg-red-600'); break; default: elements.toast.classList.add('bg-gray-800'); } elements.toast.classList.remove('hidden'); setTimeout(() => elements.toast.classList.remove('opacity-0'), 10); toastTimeout = setTimeout(() => { elements.toast.classList.add('opacity-0'); setTimeout(() => elements.toast.classList.add('hidden'), 300); }, duration); }
        function closeDaySummaryModal() { if (!elements.daySummaryModal) return; elements.daySummaryModal.classList.add('hidden'); elements.daySummaryModal.classList.remove('flex'); }
        function renderDaySummary(summary) { if (!elements.daySummaryContent) return; if (summary.status === 'error') { elements.daySummaryContent.innerHTML = `<p class="text-center text-red-500">${summary.message}</p>`; return; } elements.daySummaryContent.innerHTML = ` <div class="space-y-3 text-base"> <div class="flex justify-between items-center py-2 border-b"> <span class="font-medium text-gray-600">Total Orders:</span> <span class="font-semibold text-gray-800">${summary.total_orders}</span> </div> <div class="flex justify-between items-center py-2 border-b"> <span class="font-medium text-gray-600">Total Cash Payments:</span> <span class="font-semibold text-green-600">€${summary.cash_total.toFixed(2)}</span> </div> <div class="flex justify-between items-center py-2 border-b"> <span class="font-medium text-gray-600">Total Card Payments:</span> <span class="font-semibold text-blue-600">€${summary.card_total.toFixed(2)}</span> </div> <div class="flex justify-between items-center pt-3 mt-2 border-t-2 border-black"> <span class="text-lg font-bold text-gray-900">Grand Total:</span> <span class="font-semibold text-gray-900">€${summary.grand_total.toFixed(2)}</span> </div> </div> `; }
        function toggleCustomDateRangeUI(buttonEl) { const picker = document.getElementById('custom-date-range-picker'); if (!picker) return; document.querySelectorAll('.date-range-btn').forEach(btn => btn.classList.remove('active')); buttonEl.classList.add('active'); picker.classList.toggle('hidden'); if (!picker.classList.contains('hidden')) { const endDateInput = document.getElementById('endDate'); const startDateInput = document.getElementById('startDate'); const today = new Date().toISOString().split('T')[0]; endDateInput.value = today; if (!startDateInput.value) { startDateInput.value = today; } } }
        function loadAnalyticsData(range = 'today', buttonEl = null) { document.querySelectorAll('.date-range-btn').forEach(btn => btn.classList.remove('active')); if (buttonEl) buttonEl.classList.add('active'); const picker = document.getElementById('custom-date-range-picker'); if (picker) picker.classList.add('hidden'); fetchAnalytics(`/api/analytics?range=${range}`); }
        function fetchCustomDateRangeAnalytics() { const startDate = document.getElementById('startDate').value; const endDate = document.getElementById('endDate').value; if (!startDate || !endDate) { showToast('Please select both a start and end date.', 'warning'); return; } if (new Date(startDate) > new Date(endDate)) { showToast('Start date cannot be after the end date.', 'warning'); return; } fetchAnalytics(`/api/analytics?range=custom&start=${startDate}&end=${endDate}`); }
        function renderAnalytics(data) { document.getElementById('kpi-gross-revenue').textContent = `€${(data.grossRevenue || 0).toFixed(2)}`; document.getElementById('kpi-total-orders').textContent = data.totalOrders || 0; document.getElementById('kpi-atv').textContent = `€${(data.atv || 0).toFixed(2)}`; document.getElementById('kpi-payment-cash').textContent = `€${(data.paymentMethods.cash || 0).toFixed(2)}`; document.getElementById('kpi-payment-card').textContent = `€${(data.paymentMethods.card || 0).toFixed(2)}`; renderList('kpi-sales-by-category', data.salesByCategory, item => ` <div class="flex justify-between text-sm"> <span class="text-gray-600 truncate pr-2">${item.category}</span> <span class="font-medium text-gray-800 whitespace-nowrap">€${(item.total || 0).toFixed(2)}</span> </div>`, "No category sales yet."); renderList('kpi-top-revenue-items', data.topRevenueItems, item => ` <div class="flex justify-between text-sm"> <span class="text-gray-600 truncate pr-2">${item.name}</span> <span class="font-medium text-gray-800 whitespace-nowrap">€${(item.revenue || 0).toFixed(2)}</span> </div>`, "No items sold yet."); renderList('kpi-best-sellers', data.bestSellers, item => ` <div class="flex justify-between text-sm"> <span class="text-gray-600 truncate pr-2">${item.name}</span> <span class="font-medium text-gray-800 whitespace-nowrap">${item.quantity} sold</span> </div>`, "No items sold yet."); renderList('kpi-worst-sellers', data.worstSellers, item => ` <div class="flex justify-between text-sm"> <span class="text-gray-600 truncate pr-2">${item.name}</span> <span class="font-medium text-gray-800 whitespace-nowrap">${item.quantity} sold</span> </div>`, "No underperforming items found."); renderSalesByHourChart(data.salesByHour); }
        function renderList(containerId, items, templateFn, emptyMessage) { const container = document.getElementById(containerId); container.innerHTML = ''; if (items && items.length > 0) { items.forEach(item => { container.innerHTML += templateFn(item); }); } else { container.innerHTML = `<p class="text-xs text-gray-500 italic p-2">${emptyMessage}</p>`; } }
        function renderSalesByHourChart(salesByHour) { const container = document.getElementById('analytics-chart-container'); container.innerHTML = ''; if (!salesByHour || salesByHour.length === 0) { container.innerHTML = '<p class="text-xs text-gray-500 italic w-full text-center self-center">No sales data for this period.</p>'; container.style.minWidth = 'auto'; return; } const barWidth = 40; const spaceWidth = 16; container.style.minWidth = `${salesByHour.length * (barWidth + spaceWidth)}px`; const maxRevenue = Math.max(...salesByHour.map(h => h.total), 0); salesByHour.forEach(hourData => { const barHeight = maxRevenue > 0 ? (hourData.total / maxRevenue) * 100 : 0; const barWrapper = document.createElement('div'); barWrapper.className = 'w-10 flex flex-col items-center justify-end h-full'; barWrapper.innerHTML = ` <div class="w-full h-full flex items-end justify-center group relative"> <div class="bg-gray-200 hover:bg-indigo-400 w-3/4 rounded-t-sm transition-colors" style="height: ${barHeight}%"></div> <div class="absolute bottom-full mb-1 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"> €${hourData.total.toFixed(2)} </div> </div> <span class="text-xs text-gray-500 mt-1">${String(hourData.hour).padStart(2, '0')}</span> `; container.appendChild(barWrapper); }); }
