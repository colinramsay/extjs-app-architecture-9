Ext.define('Alcohology.view.header.Header', {
    extend: 'Ext.panel.Header',
    xtype: 'app-header',
    cls: 'app-header',
    layout: 'hbox',
    title: 'Alcohology',
    viewModel: {},
    items: [
        {
            xtype: 'container', cls: 'mini-cart', bind: { data: { count: '{cartCount}' } }, tpl: new Ext.XTemplate('{count}'),
            listeners: {
                'afterrender': function(me) {
                    me.getEl().on('click', function() {
                        me.fireEvent('click');
                    });
                }
            }

        }
    ]
});