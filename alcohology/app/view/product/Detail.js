Ext.define('Alcohology.view.product.Detail', {
    extend: 'Ext.Window',
    viewModel: 'product',
    controller: 'product',
    modal: true,
    autoShow: true,
    header: false,
    resizable: false,
    defaults: {
        xtype: 'component',
        bind: { data: '{currentProduct}' }
    },
    width: Ext.getBody().getViewSize().width - 30,
    height: Ext.getBody().getViewSize().height - 30,
    layout: {
        type: 'table',
        columns: 2,
        tableAttrs: {
            style: {
                width: '100%'
            }
        },
        tdAttrs: {
            style: {
                width: '50%', padding: '10px'
            }
        }
    },
    items: [
        { tpl: '<img src="/resources/product-images/{imagePath}.jpg" />' },
        { tpl: '<h1>{name}</h1><h2><p class="previousPrice">{price}</p> <p class="previousPrice">{previousPrice}</p></h2>' },
        { tpl: '{features}' },
        { tpl: '{description}' }
    ],

    bbar: [
        { text: 'Back', itemId: 'close', glyph: 0xf190 },
        '->',
        { text: 'Add to Cart', itemId: 'addToCart', glyph: 0xf07a }
    ]
});