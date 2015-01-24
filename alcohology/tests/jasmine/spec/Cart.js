describe('Cart store', function() {

    var cart;

    beforeEach(function() {
        cart = Ext.create('Alcohology.store.Cart');
    });

    describe('#addProduct', function() {
it('should accept a Product model', function() {
    expect(cart.addProduct.bind(cart, {})).toThrow();
});

it('should create a new CartItem line', function() {
    var product = Ext.create('Alcohology.model.Product');

    cart.addProduct(product);

    expect(cart.count()).toBe(1);
});

it('should increment the quantity when adding an existing Product', function() {
    var product = Ext.create('Alcohology.model.Product');

    cart.addProduct(product);
    cart.addProduct(product);

    expect(cart.first().get('quantity')).toBe(2);
});

it('should not create a new CartItem when adding an existing Product', function() {
    var product = Ext.create('Alcohology.model.Product');

    cart.addProduct(product);
    cart.addProduct(product);

    expect(cart.count()).toBe(1);
});
  });
});