// app/view/cart/Cart.js
Ext.define('Alcohology.view.cart.Cart', {
    extend: 'Ext.Window',
    requires: ['Alcohology.view.cart.CartController'],
    controller: 'cart',
    width: 500,
    height: 350,
    modal: true,
    resizable: false,
    header: false,
    onEsc: Ext.emptyFn,
    layout: 'fit',
    items: [
        {
            xtype: 'grid',
            bind: '{cart}',
            plugins: {
                ptype: 'cellediting',
                clicksToEdit: 1
            },
            listeners: {
                edit: function(editor, e) {
                    e.record.commit();
                }
            },
            hideHeaders: true,
            emptyText: 'No items in the cart.',
            columns: [
                { name: 'Product', dataIndex: 'productName', flex: 1 },
                {
                    name: 'Quantity', dataIndex: 'quantity',
                    editor: {
                        xtype: 'numberfield',
                        allowBlank: false
                    }
                }
            ]
        }
    ],
    bbar: [
        '->',
        { text: 'Close', itemId: 'closeCart' },
        { text: 'Order Now', itemId: 'orderNow' }
    ]
});