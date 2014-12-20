Ext.define('Alcohology.view.account.PastOrders', {
    extend: 'Ext.DataView',
    xtype: 'pastorders',
    tpl: new Ext.XTemplate('<tpl for="."><div class="past-order"><h3>Ordered on {date}</h3><ul><tpl for="items">{name}</tpl></ul></div></tpl>'),
    itemSelector: '.fake'
});