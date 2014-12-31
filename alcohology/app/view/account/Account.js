// app/view/account/Account.js
Ext.define('Alcohology.view.account.Account', {
    extend: 'Ext.Window',
    xtype: 'account',
    layout: 'fit',
    controller: 'account',
    modal: true,
    resizable: false,
    header: false,
    onEsc: Ext.emptyFn,
    width: 800,
    autoHeight: true,
    frame: true,
    items: [
        {
            xtype: 'container',
            layout: 'column',
            items: [
                { xtype: 'login', title: 'Login', columnWidth: 0.5 },
                { xtype: 'register', title: 'Register', columnWidth: 0.5 }
            ],
            bind: { hidden: '{currentUser}' }
        },
        {
            xtype: 'container',
            layout: 'column',
            items: [
                { xtype: 'register', title: 'Register', columnWidth: 0.5 },
                {
                    xtype: 'panel',  title: 'Past Orders',
                    columnWidth: 0.5, items: [
                        { xtype: 'pastorders', bind: '{orders}' }
                    ]
                }
            ],
            bind: { hidden: '{!currentUser}' }
        }
    ],
    bbar: [
        '->',
        { text: 'Close', itemId: 'close' },
        {
            text: 'Login/Register', itemId: 'loginRegister',
            bind: { hidden: '{currentUser}' }
        }
    ]
});