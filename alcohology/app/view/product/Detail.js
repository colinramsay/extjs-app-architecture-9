// app/view/product/Detail.js
Ext.define('Alcohology.view.product.Detail', {
    extend: 'Ext.Window',
    modal: true,
    header: false,
    resizable: false,
    autoScroll: true,
    height: 600,
    width: 800,
    layout: 'column',
    cls: 'product-detail',
    items: [
        {
            xtype: 'container',
            columnWidth: 0.5,
            defaults: {
                xtype: 'component',
                bind: { data: '{currentProduct}' }
            },
            items: [
                { 
                    xtype: 'container', 
                    tpl: '<img src="/resources/product-images/{imagePath}-thumb.jpg" />' 
                },
                { tpl: '<ul><li>{features}</li></ul>' }
            ]
        },
        {
            xtype: 'container',
            columnWidth: 0.5,
            defaults: {
                xtype: 'component',
                bind: { data: '{currentProduct}' }
            },
            items: [
                { tpl: new Ext.Template('<h1>{name}</h1>',
                    '<h2 class="brewery">{brewery}</h2>',
                    '<h2><p class="price">&pound;{price}</p>',
                    '<p class="previousPrice">Was: &pound;{previousPrice}</p>',
                    '</h2>') },
                { tpl: '<div class="description">{description}</div>' }
            ]
        }
    ],

    bbar: [
        { text: 'Back', itemId: 'close', glyph: 0xf190 },
        '->',
        { text: 'Add to Cart', itemId: 'addToCart', glyph: 0xf07a }
    ]
});