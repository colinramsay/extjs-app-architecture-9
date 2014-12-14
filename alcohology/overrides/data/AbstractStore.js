Ext.define('Alcohology.data.AbstractStore', {
    override: 'Ext.data.AbstractStore',
    applySorters: function (sorters) {
        var sortersCollection = this.createSortersCollection();
        sortersCollection.clear();
        sortersCollection.setRootProperty('data');
        
        sortersCollection.add(sorters);

        return sortersCollection;
    }
});