Ext.define('Alcohology.view.header.MiniCart', {
    extend: 'Ext.Container',
    xtype: 'minicart',
    width: 100, cls: 'mini-cart',
    tpl: new Ext.XTemplate('<span style="font-family:FontAwesome;">&#xf07a;</span> {count} items'),
    listeners: {
        'afterrender': function(me) {
            me.getEl().on('click', function() {
                me.fireEvent('click');
            });
        }
    }
});