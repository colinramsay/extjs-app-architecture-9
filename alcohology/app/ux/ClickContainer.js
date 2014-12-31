// app/ux/ClickContainer.js
Ext.define('Alcohology.ux.ClickContainer', {
    extend: 'Ext.Container',
    xtype: 'clickcontainer',
    listeners: {
        'afterrender': function(me) {
            me.getEl().on('click', function() {
                me.fireEvent('click');
            });
        }
    }
});